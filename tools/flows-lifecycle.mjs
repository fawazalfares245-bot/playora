// One seeded world driven through the whole booking lifecycle in order - reserve a court, create a
// paid match, join, waitlist, pay, leave, promote, check in, mark attendance, submit a score - with
// the money checked at every step and the booking invariants checked at the end.
//
// The suites either side of this one test a screen or a rule in isolation, on a world built for that
// one test. This file exists because most of the defects the audit turned up were not wrong on their
// own: a promotion that was correct in isolation ran against a match that had already finished, a
// refund that was correct in isolation left a second live booking behind. They only show up when the
// steps run in sequence against one world, which is what a real match is.
//
// Run: node tools/flows-lifecycle.mjs
import { openApp, IDS, ORIGIN, bookingInvariants, assertBookingInvariants } from './smoke.mjs';

const results = [];
const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);

// Salmiya Sports Hub is the one seeded venue with courts, and a court booking is what mints the
// qr_token the check-in scanner reads.
const VENUE = '11111111-1111-1111-1111-111111111111';
const SEAT_FILS = 2000; // the match is priced at 2 KWD a seat

const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });

// --- phase one: create, join, waitlist, pay, leave, refund, promote ---
const one = await page.evaluate(async (ids) => {
  const api = __r(671);
  const res = { err: null };
  const fils = async (u) => (await api.fetchWallet(u)).available_fils;
  // Every posting into external:clearing is money that has left a player and not reached anyone;
  // tracking its delta over the run is how the seat money is followed without a settlement row.
  const balance = (account) =>
    JSON.parse(localStorage.getItem('playora.mock.wallet.ledger.v1') || '[]').reduce(
      (t, e) => t + e.postings.filter((p) => p.account === account).reduce((s, p) => s + p.delta_fils, 0),
      0,
    );
  const clearing = () => balance('external:clearing');
  const refunds = () => balance('platform:refunds');
  try {
    const ORG = ids.organizer;
    const roster = JSON.parse(localStorage.getItem('playora.mock.profiles.v1') || '[]')
      .filter((p) => (p.role || 'user') === 'user' && p.id.startsWith('demo:'))
      .map((p) => p.id);
    const [A, B, C] = [ids.user, roster[0], roster[1]];
    res.actors = { A, B, C };
    for (const u of [ORG, A, B, C]) await api.acceptCoC(u);
    for (const u of [A, B, C]) await api.walletAddFunds(u, 20000, 'knet');

    // --- create ---
    const court = (await api.fetchCourts(ids.VENUE)).find((c) => c.sport === 'football' && c.active);
    const d = new Date(Date.now() + 2 * 864e5);
    d.setHours(19, 0, 0, 0);
    const starts_at = d.toISOString();
    const ends_at = new Date(d.getTime() + 54e5).toISOString();
    const cb = await api.reserveCourt(ORG, court.id, starts_at, ends_at, 'split_equal');
    const g = await api.createMatch(ORG, {
      title: 'Lifecycle', sport: 'football', venue_id: ids.VENUE, starts_at, ends_at,
      max_players: 3, waitlist_capacity: 2, price_kwd: 2, visibility: 'public', format: '5v5',
      court_booking_id: cb.id,
    });
    res.gameId = g.id;
    res.token = cb.qr_token;
    res.courtLinked = cb.game_id === g.id || (await api.fetchMyCourtBookings(ORG)).some((b) => b.id === cb.id && b.game_id === g.id);

    // --- join, and overflow onto the waitlist ---
    // max_players is 3 and the organizer holds one of them, so A and B fill it and C queues.
    res.joinA = await api.joinMatch(g.id, A);
    res.joinB = await api.joinMatch(g.id, B);
    res.joinC = await api.joinMatch(g.id, C);
    const bookings = () => JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]').filter((b) => b.game_id === g.id);
    res.seatedAfterJoins = bookings().filter((b) => 'confirmed' === b.status).length;

    // --- pay ---
    const clear0 = clearing();
    const refunds0 = refunds();
    const before = await fils(A);
    const payA = await api.fetchMySeatPayment(A, g.id);
    res.payACreated = !!payA && payA.status === 'pending' && payA.amount_kwd === 2;
    await api.payRequest(A, payA.id, 'wallet');
    res.payADebit = before - (await fils(A));
    res.payAStatus = (await api.fetchMySeatPayment(A, g.id)).status;
    const payB = await api.fetchMySeatPayment(B, g.id);
    await api.payRequest(B, payB.id, 'wallet');

    // --- leave, refund, and the promotion it should trigger ---
    const quote = await api.fetchSeatRefundQuote(A, g.id);
    res.quote = { paid: quote.paid_kwd, refund: quote.refund_kwd, eligible: quote.eligible };
    const beforeRefund = await fils(A);
    await api.leaveMatch(g.id, A);
    res.refundCredit = (await fils(A)) - beforeRefund;
    res.aStatus = (bookings().find((b) => b.user_id === A) || {}).status;
    res.cancellationRow = JSON.parse(localStorage.getItem('playora.mock.seat.cancellations.v1') || '[]')
      .some((c) => c.game_id === g.id && c.user_id === A);

    // Promotion is lazy, like expiry: it runs when the match is next read.
    await api.fetchGame(g.id, ORG);
    res.cStatus = (bookings().find((b) => b.user_id === C) || {}).status;
    res.cPromotedNotice = JSON.parse(localStorage.getItem('playora.mock.notifications.v1') || '[]')
      .some((n) => n.user_id === C && n.game_id === g.id && 'waitlist_promoted' === n.type);

    const payC = await api.fetchMySeatPayment(C, g.id);
    res.payCCreated = !!payC;
    if (payC) await api.payRequest(C, payC.id, 'wallet');
    res.cStatusPaid = (bookings().find((b) => b.user_id === C) || {}).status;

    // Three seats were paid and one was refunded in full. The refund does not reverse the seat
    // charge: the charge sits in external:clearing and the refund is a fresh credit drawn from
    // platform:refunds, so the two legs are in different pockets and neither ever settles onward to
    // the organizer or the venue. That is the missing settlement leg, written down rather than
    // asserted away - what this checks is that every fil is still somewhere, and that the refunded
    // one came out of the refund account and not out of thin air.
    res.clearingDelta = clearing() - clear0;
    res.refundsDelta = refunds() - refunds0;
    res.bookingIds = Object.fromEntries(bookings().map((b) => [b.user_id, b.id]));
  } catch (e) {
    res.err = e.code || e.message;
  }
  return res;
}, { ...IDS, VENUE });

ok('the court reservation carries the match', one.courtLinked === true, one.err || String(one.courtLinked));
ok('the first two joiners are seated', one.joinA?.status === 'confirmed' && one.joinB?.status === 'confirmed', `${one.joinA?.status}/${one.joinB?.status}`);
ok('each seated joiner owes for the seat', one.joinA?.payment_due?.amount_kwd === 2, JSON.stringify(one.joinA?.payment_due ?? null));
ok('the third joiner queues instead of taking a seat', one.joinC?.status === 'waitlisted' && one.joinC?.waitlistPosition === 1, JSON.stringify(one.joinC ?? null));
ok('the match is seated to capacity and no further', one.seatedAfterJoins === 3, String(one.seatedAfterJoins));
ok('paying a seat debits exactly the seat price', one.payADebit === SEAT_FILS, `${one.payADebit} fils`);
ok('and marks the seat paid', one.payAStatus === 'paid', String(one.payAStatus));
ok('leaving in time quotes a full refund', one.quote?.eligible === true && one.quote?.refund === 2, JSON.stringify(one.quote ?? null));
ok('and credits exactly the quoted amount back', one.refundCredit === SEAT_FILS, `${one.refundCredit} fils`);
ok('the seat the player left is cancelled', one.aStatus === 'cancelled', String(one.aStatus));
ok('and the cancellation is recorded', one.cancellationRow === true, String(one.cancellationRow));
ok('the freed seat promotes the waitlisted player', one.cStatus === 'confirmed' || one.cStatus === 'reserved', String(one.cStatus));
ok('who is told about it', one.cPromotedNotice === true, String(one.cPromotedNotice));
ok('the promoted player is billed for the seat', one.payCCreated === true, String(one.payCCreated));
ok('and is confirmed once they pay', one.cStatusPaid === 'confirmed', String(one.cStatusPaid));
ok('every seat paid lands in the clearing account', one.clearingDelta === 3 * SEAT_FILS, `${one.clearingDelta} fils in clearing`);
ok('and the refund is drawn from the refund account, not conjured', one.refundsDelta === -SEAT_FILS, `${one.refundsDelta} fils`);

// --- move the match into the past and reboot, so the after-the-whistle steps are reachable ---
await page.evaluate((gameId) => {
  const past = Date.now() - 2 * 36e5;
  const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
  for (const row of games)
    if (row.id === gameId) {
      row.starts_at = new Date(past).toISOString();
      row.ends_at = new Date(past + 54e5).toISOString();
    }
  localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
}, one.gameId);
await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
await page.waitForTimeout(2500);

// --- phase two: check in, attendance, score ---
const two = await page.evaluate(async ([ids, seed]) => {
  const api = __r(671);
  const res = { err: null };
  try {
    const ORG = ids.organizer;
    const bookings = () => JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]').filter((b) => b.game_id === seed.gameId);
    // The scanner resolves the player's own live booking - it must not find the row A cancelled.
    await api.scanCheckin(ORG, seed.token, seed.actors.B, 'attended');
    res.bAttendance = (bookings().find((b) => b.user_id === seed.actors.B) || {}).attendance ?? null;
    res.aAttendance = (bookings().find((b) => b.user_id === seed.actors.A) || {}).attendance ?? null;
    // The organizer marks the rest by hand, through the other door onto the same field.
    await api.setAttendance(seed.gameId, ORG, seed.bookingIds[seed.actors.C], 'attended');
    res.cAttendance = (bookings().find((b) => b.user_id === seed.actors.C) || {}).attendance ?? null;
    await api.submitMatchScore(ORG, seed.gameId, 3, 2);
    const g = await api.fetchGame(seed.gameId, ORG);
    res.score = [g.score_home, g.score_away];
    res.scoreStamped = !!g.score_submitted_at;
  } catch (e) {
    res.err = e.code || e.message;
  }
  return res;
}, [IDS, one]);

ok('a scan after the whistle marks the player attended', two.bAttendance === 'attended', two.err || String(two.bAttendance));
ok('and never touches the booking they cancelled', two.aAttendance === null, String(two.aAttendance));
ok('the organizer can mark the promoted player too', two.cAttendance === 'attended', String(two.cAttendance));
ok('the score is recorded', JSON.stringify(two.score) === '[3,2]', JSON.stringify(two.score ?? null));
ok('and stamped, which starts the attendance freeze', two.scoreStamped === true, String(two.scoreStamped));

// --- the money, end to end ---
const money = await page.evaluate(() => {
  const ledger = JSON.parse(localStorage.getItem('playora.mock.wallet.ledger.v1') || '[]');
  const unbalanced = ledger.filter((e) => e.postings.reduce((t, p) => t + p.delta_fils, 0) !== 0).map((e) => e.id);
  const acct = new Map();
  for (const e of ledger) for (const p of e.postings) acct.set(p.account, (acct.get(p.account) || 0) + p.delta_fils);
  const negative = [...acct].filter(([a, v]) => a.startsWith('owner:') && v < 0).map(([a, v]) => `${a}=${v}`);
  const total = [...acct.values()].reduce((t, v) => t + v, 0);
  return { entries: ledger.length, unbalanced, negative, total };
});

ok('the ledger has entries to check', money.entries > 5, String(money.entries));
ok('every ledger entry balances', money.unbalanced.length === 0, money.unbalanced.slice(0, 5).join(','));
ok('the whole ledger sums to zero', money.total === 0, String(money.total));
ok('no wallet is overdrawn', money.negative.length === 0, money.negative.slice(0, 5).join(','));

// --- and the booking invariants, over the world this file has just driven ---
assertBookingInvariants(ok, await bookingInvariants(page, IDS.admin), { floor: 4 });

ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
await browser.close();

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
