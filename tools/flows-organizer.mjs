// Interactive flow checks for the organizer match/series screens. Run: node tools/flows-organizer.mjs
import { openApp, IDS, ORIGIN } from './smoke.mjs';
import fs from 'node:fs';
const en = fs.readFileSync(new URL('../bundle-src/909.js', import.meta.url), 'utf8');
const t = (k) => { const m = en.match(new RegExp(`^\\s+${k}: "((?:[^"\\\\]|\\\\.)*)"`, 'm')); if (!m) throw new Error('missing key ' + k); return JSON.parse('"' + m[1] + '"'); };
const results = []; const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);
async function run(name, fn) { try { await fn(); } catch (e) { results.push(`FAIL ${name}: ${e.message.split('\n')[0]}`); } }
const ORG = IDS.organizer;
async function seedState() {
  // Boot once as organizer so demo seeding assigns games/series to the organizer, then read storage.
  const { browser, page } = await openApp({ role: 'organizer', route: '/organizer' });
  await page.waitForTimeout(1500);
  const st = await page.evaluate(() => { const o = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); o[k] = localStorage.getItem(k); } return o; });
  await browser.close();
  return st;
}
const st = await seedState();
const games = JSON.parse(st['playora.mock.games.v1'] || '[]');
const upcoming = games.find((g) => g.organizer_id === ORG && g.status === 'scheduled' && new Date(g.starts_at) > new Date());
const ended = games.find((g) => g.organizer_id === ORG && g.status !== 'cancelled' && new Date(g.ends_at) < new Date() && !g.score_submitted_at);
// Seed one active weekly series for the organizer (demo seeding does not create templates).
const now = new Date();
const tpl = { id: 'tpl-test-1', organizer_id: ORG, title: 'Thursday 5-a-side', sport: 'football', format: 'football_5v5', skill_level: 'all', venue_id: upcoming.venue_id, max_players: 10, waitlist_capacity: 4, price_kwd: 2.5, notes: null, visibility: 'public', approval_mode: 'auto', skill_min: null, skill_max: null, skill_policy: 'open', start_date: new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString(), start_minutes: 1080, end_minutes: 1170, frequency: 'weekly', weekdays: [(now.getDay() + 1) % 7], monthly_week: null, monthly_weekday: null, end_date: null, horizon_weeks: 12, auto_invite: false, status: 'active', resume_from: null, generated_until: null, created_at: now.toISOString() };
st['playora.mock.templates.v1'] = JSON.stringify([tpl]);
// An open award ballot on the ended match, two hours from closing, for the countdown case below.
st['playora.mock.award.voting.v1'] = JSON.stringify([
  { match_id: ended.id, opens_at: ended.ends_at, closes_at: new Date(Date.now() + 72e5).toISOString(), published: false },
]);
const tplKey = 'playora.mock.templates.v1';
const restore = `(() => { const s = ${JSON.stringify(st)}; for (const k of Object.keys(s)) if (k !== 'secure.playora_session') localStorage.setItem(k, s[k]); })();`;
ok('seed has upcoming game / ended game / series', !!upcoming && !!ended && !!tpl, `up=${!!upcoming} ended=${!!ended} tpl=${!!tpl} key=${tplKey}`);

await run('match cancel requires reason + confirms refund note', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: `/organizer/match/${upcoming.id}`, initScript: restore });
  const d = []; page.on('dialog', (x) => d.push(x.message()));
  await page.getByRole('button', { name: t('cancelMatch'), exact: true }).first().click().catch(() => {});
  await page.waitForTimeout(400);
  const confirm = page.getByRole('button', { name: t('confirmCancelMatch'), exact: true }).last();
  ok('cancel confirm disabled without reason', await confirm.evaluate((el) => el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true'));
  const body = await page.evaluate(() => document.body.innerText);
  ok('refund note shown', body.includes(t('cancelMatchRefundNote').slice(0, 30)));
  await page.getByPlaceholder(t('cancelReasonPlaceholder')).fill('Pitch flooded after the storm');
  await confirm.click(); await page.waitForTimeout(1500);
  const after = await page.evaluate(() => document.body.innerText);
  ok('match cancelled', /cancelled/i.test(after), `dialogs=${JSON.stringify(d).slice(0, 120)}`);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

await run('score submission confirmation', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: `/organizer/match/${ended.id}`, initScript: restore });
  const d = []; page.on('dialog', (x) => d.push(x.message()));
  const inputs = page.locator('input[inputmode="numeric"], input[type="number"], input');
  const n = await inputs.count();
  const body0 = await page.evaluate(() => document.body.innerText);
  if (!body0.includes(t('finalScoreTitle'))) { ok('score card present', false, 'no score card'); await browser.close(); return; }
  // the two score inputs are the last two numeric inputs in the card
  const num = page.locator('input').filter({ hasNot: page.locator('[placeholder]') });
  const all = page.locator('input'); const c = await all.count();
  await all.nth(c - 2).fill('3'); await all.nth(c - 1).fill('2'); await page.waitForTimeout(200);
  await page.getByRole('button', { name: t('submitScoreCta'), exact: true }).first().click(); await page.waitForTimeout(1500);
  ok('score confirm dialog shown with score', d.some((m) => m.includes(t('confirmScoreTitle')) && m.includes('3') && m.includes('2')), `dialogs=${JSON.stringify(d).slice(0, 160)}`);
  const after = await page.evaluate(() => document.body.innerText);
  ok('score now final', /3\s*[–-]\s*2/.test(after));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});

await run('series: denied for non-organizer', async () => {
  const { browser, page } = await openApp({ role: 'user', route: `/organizer/series/${tpl.id}`, initScript: restore });
  const body = await page.evaluate(() => document.body.innerText);
  ok('non-organizer sees denial', body.includes(t('notOrganizerOfSeries')) || body.includes(t('adminOnlyTitle')), body.slice(0, 80).replace(/\n/g, '|'));
  await browser.close();
});

await run('series: end confirm, edit future, cancel with reason', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: `/organizer/series/${tpl.id}`, initScript: restore });
  const d = []; page.on('dialog', (x) => { d.push(x.message()); });
  await page.getByRole('button', { name: t('editFutureSessions'), exact: true }).first().click(); await page.waitForTimeout(300);
  const inputs = page.locator('input'); const c = await inputs.count();
  await inputs.nth(c - 3).fill('19:30'); await inputs.nth(c - 2).fill('3'); await inputs.nth(c - 1).fill('10');
  await page.getByRole('button', { name: t('editFutureApply'), exact: true }).first().click(); await page.waitForTimeout(1500);
  ok('edit future sessions applied', d.some((m) => /updated/i.test(m)), `dialogs=${JSON.stringify(d).slice(0, 120)}`);
  await page.getByRole('button', { name: t('cancelSeries'), exact: true }).first().click(); await page.waitForTimeout(300);
  const conf = page.getByRole('button', { name: t('cancelSeries'), exact: true }).last();
  ok('cancel series disabled without reason', await conf.evaluate((el) => el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true'));
  await page.getByPlaceholder(t('cancelReasonPlaceholder')).fill('Venue closing for renovation');
  await conf.click(); await page.waitForTimeout(2000);
  const after = await page.evaluate(() => document.body.innerText);
  ok('series cancelled with summary toast', d.some((m) => /cancelled/i.test(m) && /refunded/i.test(m)) && /cancelled/i.test(after), `dialogs=${JSON.stringify(d).slice(-160)}`);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});
// Di used to promote the waitlist of a match that was already over: a stale reserved hold expires,
// a seat looks free, and the next organizer sweep charges a waitlisted player for a finished game.
await run('a finished match never promotes its waitlist', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  const seed = await page.evaluate(async ([org, players]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Waitlist guard', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 13 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 13 * 864e5 + 54e5).toISOString(),
      max_players: 2, waitlist_capacity: 4, price_kwd: 3, visibility: 'public', format: '5v5',
    });
    const joins = {};
    for (const u of players) {
      try { joins[u] = (await api.joinMatch(g.id, u)).status; } catch (e) { joins[u] = 'ERR:' + (e.code || e.message); }
    }
    const filler = players.find((u) => joins[u] === 'confirmed');
    const waiter = players.find((u) => joins[u] === 'waitlisted');
    if (!filler || !waiter) return { joins, filler, waiter };

    // Fast-forward the match past its end, and turn the filler's seat into a stale reserved hold -
    // the state the expiry sweep is there to clear, and the only way a finished match shows a free seat.
    const past = Date.now() - 2 * 36e5;
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    for (const row of games)
      if (row.id === g.id) { row.starts_at = new Date(past).toISOString(); row.ends_at = new Date(past + 36e5).toISOString(); }
    localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
    const bookings = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    for (const b of bookings)
      if (b.game_id === g.id && b.user_id === filler) { b.status = 'reserved'; b.reserved_until = new Date(Date.now() - 6e5).toISOString(); }
    localStorage.setItem('playora.mock.bookings.v1', JSON.stringify(bookings));
    return { gameId: g.id, joins, filler, waiter };
  }, [IDS.organizer, [IDS.admin, IDS.analyst, IDS.user]]);

  ok('the match filled and one player waitlisted', !!seed.gameId, JSON.stringify(seed.joins));
  if (!seed.gameId) { await browser.close(); return; }

  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([org, gameId, waiter, filler]) => {
    const api = __r(671);
    await api.fetchOrganizerMatches(org, org);
    const parts = await api.fetchMatchParticipants(gameId, org);
    const notes = await api.fetchNotifications(waiter);
    const all = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]').filter((b) => b.game_id === gameId);
    return {
      waiterStatus: (all.find((b) => b.user_id === waiter) || {}).status ?? null,
      stillWaitlisted: parts.waitlist.some((b) => b.user_id === waiter),
      seatPayment: await api.fetchMySeatPayment(waiter, gameId),
      promotedNotes: notes.filter((n) => n.type === 'waitlist_promoted' && n.game_id === gameId).length,
      staleHoldStatus: (all.find((b) => b.user_id === filler) || {}).status ?? null,
    };
  }, [IDS.organizer, seed.gameId, seed.waiter, seed.filler]);

  ok('the waitlisted booking is still waitlisted', out.waiterStatus === 'waitlisted' && out.stillWaitlisted, String(out.waiterStatus));
  ok('no seat payment was created for them', out.seatPayment == null, JSON.stringify(out.seatPayment));
  ok('no waitlist_promoted notification was sent', out.promotedNotes === 0, String(out.promotedNotes));
  // The other half of Di must stay unconditional, or stale holds never clear on a finished match.
  ok('the stale reserved hold still expired', out.staleHoldStatus === 'cancelled', String(out.staleHoldStatus));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockApproveParticipant ran Di - which fills the match from the waitlist - before its own capacity
// check, so a manual-approval match with a waitlist was unapprovable by construction.
await run('a waitlist does not block approving a pending request', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  const seed = await page.evaluate(async ([org, pending, waiter]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Manual approval', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 15 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 15 * 864e5 + 54e5).toISOString(),
      max_players: 4, waitlist_capacity: 4, price_kwd: 0, visibility: 'public',
      format: '5v5', approval_mode: 'manual',
    });
    const now = new Date().toISOString();
    const row = (uid, name, status, ageMs) => ({
      id: 'bk-' + status + '-' + uid.slice(0, 8), game_id: g.id, user_id: uid, display_name: name,
      status, attendance: null, reserved_until: null,
      created_at: new Date(Date.now() - ageMs).toISOString(), updated_at: now,
    });
    const all = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    const held = all.filter((b) => b.game_id === g.id && b.status === 'confirmed').length;
    // Three of the four seats taken (the organizer holds one), one pending request, and one player
    // waitlisted after it - the state an auto -> manual switch on a busy match leaves behind.
    const fillers = [];
    for (let k = held; k < 3; k++)
      fillers.push(row('f' + k + '000000-0000-4000-8000-00000000000' + k, 'Filler ' + k, 'confirmed', 9e5));
    const pendingRow = row(pending, 'Pending Player', 'pending', 6e5);
    const waitRow = row(waiter, 'Waitlisted Player', 'waitlisted', 3e5);
    localStorage.setItem('playora.mock.bookings.v1', JSON.stringify([...all, ...fillers, pendingRow, waitRow]));
    return { gameId: g.id, pendingId: pendingRow.id, waitId: waitRow.id, seats: fillers.length + held };
  }, [IDS.organizer, IDS.admin, IDS.analyst]);

  ok('three of the four seats are taken', seed.seats === 3, String(seed.seats));
  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([org, latecomer, seed]) => {
    const api = __r(671);
    const res = {};
    const pre = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    res.preWait = (pre.find((b) => b.id === seed.waitId) || {}).status ?? null;
    res.prePending = (pre.find((b) => b.id === seed.pendingId) || {}).status ?? null;
    try { await api.approveParticipant(seed.gameId, org, seed.pendingId); res.approved = true; }
    catch (e) { res.approved = false; res.err = e.code || e.message; }
    const all = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    res.pendingStatus = (all.find((b) => b.id === seed.pendingId) || {}).status ?? null;
    res.waitStatus = (all.find((b) => b.id === seed.waitId) || {}).status ?? null;
    // The match is full now. A manual-approval join must not become a pending request against a
    // seat that does not exist.
    try { res.lateJoin = (await api.joinMatch(seed.gameId, latecomer)).status; }
    catch (e) { res.lateJoin = 'ERR:' + (e.code || e.message); }
    return res;
  }, [IDS.organizer, IDS.user, seed]);

  ok('the seeded state survived boot', out.preWait === 'waitlisted' && out.prePending === 'pending', `wait=${out.preWait} pending=${out.prePending}`);
  ok('the approval succeeds', out.approved === true, String(out.err));
  ok('the approved player has the free seat', out.pendingStatus === 'confirmed', String(out.pendingStatus));
  ok('the waitlisted player stays waitlisted', out.waitStatus === 'waitlisted', String(out.waitStatus));
  ok('a join on a full manual match is refused, not left pending', out.lateJoin === 'ERR:E_THIS_MATCH_IS_ALREADY_FULL', String(out.lateJoin));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockScanCheckin wrote booking.attendance with none of mockSetAttendance's rules, and resolved the
// target with an unfiltered find - which returns the stale cancelled row for anyone who rejoined.
await run('a check-in scan respects the attendance window and the live booking', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  const seed = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Check-in scan', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 17 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 17 * 864e5 + 54e5).toISOString(),
      max_players: 6, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    // ji revives the cancelled row now, so a stale one has to be planted: rows written before that
    // change still exist, and the scanner must pick the live one out of them.
    await api.joinMatch(g.id, player);
    const all = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    const live = all.find((b) => b.game_id === g.id && b.user_id === player);
    all.unshift(Object.assign({}, live, {
      id: 'bk-stale-cancelled', status: 'cancelled',
      created_at: new Date(Date.now() - 6e5).toISOString(),
      updated_at: new Date(Date.now() - 6e5).toISOString(),
    }));
    localStorage.setItem('playora.mock.bookings.v1', JSON.stringify(all));
    const rows = all.filter((b) => b.game_id === g.id && b.user_id === player);
    const token = 'PLQR-SCANTEST0000000';
    const courts = JSON.parse(localStorage.getItem('playora.mock.courtbookings.v1') || '[]');
    courts.push({
      id: 'cb-scan-test', court_id: null, venue_id: venues[0].id, organizer_id: org, game_id: g.id,
      starts_at: g.starts_at, ends_at: g.ends_at, status: 'confirmed', court_price_kwd: 0,
      split_mode: 'organizer', commission_type: 'percent', commission_value: 10,
      requires_venue_approval: false, reserved_until: null, cancellation_reason: null,
      qr_token: token, created_at: new Date().toISOString(),
      confirmed_at: new Date().toISOString(), released_at: null,
    });
    localStorage.setItem('playora.mock.courtbookings.v1', JSON.stringify(courts));
    return {
      gameId: g.id, token,
      cancelledId: (rows.find((b) => b.status === 'cancelled') || {}).id ?? null,
      liveId: (rows.find((b) => b.status !== 'cancelled') || {}).id ?? null,
      rows: rows.map((b) => b.status),
    };
  }, [IDS.organizer, IDS.user]);

  ok('a stale cancelled row sits alongside the live one', !!seed.cancelledId && !!seed.liveId, JSON.stringify(seed.rows));
  if (!seed.cancelledId || !seed.liveId) { await browser.close(); return; }

  // Case 2: the match has not finished, so the scan must be refused.
  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const early = await page.evaluate(async ([org, player, seed]) => {
    const api = __r(671);
    try { await api.scanCheckin(org, seed.token, player, 'attended'); return 'NO_THROW'; }
    catch (e) { return e.code || e.message; }
  }, [IDS.organizer, IDS.user, seed]);
  ok('a scan before the match ends is refused', early === 'E_MATCH_NOT_FINISHED', String(early));

  // Case 1: move the match into the past, then scan.
  await page.evaluate(([gameId]) => {
    const past = Date.now() - 2 * 36e5;
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    for (const row of games)
      if (row.id === gameId) { row.starts_at = new Date(past).toISOString(); row.ends_at = new Date(past + 36e5).toISOString(); }
    localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
  }, [seed.gameId]);
  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([org, player, stranger, seed]) => {
    const api = __r(671);
    const res = {};
    try { await api.scanCheckin(org, seed.token, player, 'attended'); res.scanned = true; }
    catch (e) { res.scanned = false; res.err = e.code || e.message; }
    const all = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    res.live = (all.find((b) => b.id === seed.liveId) || {}).attendance ?? null;
    res.cancelled = (all.find((b) => b.id === seed.cancelledId) || {}).attendance ?? null;
    // A player with no live booking at all must be refused, not silently skipped.
    try { await api.scanCheckin(org, seed.token, stranger, 'attended'); res.stranger = 'NO_THROW'; }
    catch (e) { res.stranger = e.code || e.message; }

    // The ticket is now the booking's own credential rather than a string derived from the game id.
    const mine = await api.fetchGame(seed.gameId, player);
    res.token = mine.user_checkin_token;
    const other = await api.fetchGame(seed.gameId, org);
    res.otherToken = other.user_checkin_token;
    // presenting it identifies the booking without the scanner naming anyone
    try {
      await api.scanCheckin(org, seed.token, '00000000-0000-4000-8000-000000000000', 'attended', res.token);
      res.byToken = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
        .find((b) => b.id === seed.liveId).attendance;
    } catch (e) { res.byToken = 'ERR:' + (e.code || e.message); }
    try {
      await api.scanCheckin(org, seed.token, player, 'attended', 'PLY-NOTATOKEN0');
      res.foreignToken = 'NO_THROW';
    } catch (e) { res.foreignToken = e.code || e.message; }
    return res;
  }, [IDS.organizer, IDS.user, IDS.analyst, seed]);

  ok('the scan succeeds once the match has ended', out.scanned === true, String(out.err));
  ok('the live booking carries the attendance', out.live === 'attended', String(out.live));
  ok('the cancelled row is left alone', out.cancelled == null, String(out.cancelled));
  ok('scanning a player with no live booking is refused', out.stranger === 'E_PLAYER_NOT_IN_THIS_MATCH', String(out.stranger));
  ok('the ticket is a real per-booking token', /^PLY-/.test(String(out.token)) && out.token !== out.otherToken, `${out.token} vs ${out.otherToken}`);
  ok('a token names its own booking', out.byToken === 'attended', String(out.byToken));
  ok('a token from another match is refused', out.foreignToken === 'E_PLAYER_NOT_IN_THIS_MATCH', String(out.foreignToken));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// formatRelative clamped every future timestamp to zero minutes, so the awards header read "Voting
// closes Just now" whether the deadline was half an hour or three days out.
await run('the awards header counts down instead of saying Just now', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: `/awards/${ended.id}`, initScript: restore });
  const body = await page.evaluate(() => document.body.innerText);
  const u = await page.evaluate(() => {
    const f = __r(1626).formatRelative, tr = __r(675).t;
    const at = (ms) => f(new Date(Date.now() + ms).toISOString());
    return { justNow: tr('justNow'), h05: at(18e5), h2: at(72e5), d3: at(3 * 864e5), past: at(-72e5) };
  });
  ok('the header shows a time, not Just now', !body.includes(`${t('votingClosesIn').split('%')[0]}${u.justNow}`) && /\d/.test(body.split('\n').find((l) => l.includes(t('votingClosesIn').split('%')[0])) || ''), body.split('\n').filter(Boolean).slice(0, 4).join('|'));
  ok('a future half hour is not Just now', u.h05 !== u.justNow, u.h05);
  ok('half an hour and two hours read differently', u.h05 !== u.h2, `${u.h05} / ${u.h2}`);
  ok('two hours and three days read differently', u.h2 !== u.d3, `${u.h2} / ${u.d3}`);
  ok('the past still reads as the past', /ago/.test(u.past), u.past);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Cancelling reported refunded as the number of bookings cancelled, not the number of seats actually
// refunded, so the summary told the organizer everyone got their money back. And a court booking
// cancelled inside the cutoff kept the money, skipped the refund and then deleted the pending
// settlement - so the forfeited money had no settlement, no refund and no posting anywhere.
await run('cancelling reports real refunds and keeps the forfeited money on the books', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const seed = await page.evaluate(async ([org, payer, freeloader]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Late cancel', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 27 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 27 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 4, visibility: 'public', format: '5v5',
    });
    // one player pays, one joins and never pays
    await api.checkoutJoin(payer, g.id, 'knet');
    await api.joinMatch(g.id, freeloader);
    // a confirmed court booking for the match, already paid, starting inside the free-cancel cutoff
    const soon = new Date(Date.now() + 36e5).toISOString();
    const courts = JSON.parse(localStorage.getItem('playora.mock.courtbookings.v1') || '[]');
    courts.push({
      id: 'cb-late-cancel', court_id: null, venue_id: venues[0].id, organizer_id: org, game_id: g.id,
      starts_at: soon, ends_at: new Date(Date.now() + 54e5).toISOString(), status: 'confirmed',
      court_price_kwd: 20, split_mode: 'organizer_pays', commission_type: 'percentage',
      commission_value: 10, requires_venue_approval: false, reserved_until: null,
      cancellation_reason: null, qr_token: 'PLQR-LATECANCEL000000',
      created_at: new Date().toISOString(), confirmed_at: new Date().toISOString(), released_at: null,
    });
    localStorage.setItem('playora.mock.courtbookings.v1', JSON.stringify(courts));
    const pays = JSON.parse(localStorage.getItem('playora.mock.payments.v1') || '[]');
    pays.push({
      id: 'pay-late-cancel', kind: 'court', booking_id: 'cb-late-cancel', game_id: g.id,
      payer_id: org, payer_name: 'Test Organizer', payee_venue_id: venues[0].id, amount_kwd: 20,
      status: 'paid', method: 'knet', gateway_ref: 'x', reminders_sent: 0, reserved_until: null,
      paid_at: new Date().toISOString(), refunded_at: null, created_at: new Date().toISOString(),
    });
    localStorage.setItem('playora.mock.payments.v1', JSON.stringify(pays));
    const sets = JSON.parse(localStorage.getItem('playora.mock.settlements.v1') || '[]');
    sets.push({
      id: 'set-late-cancel', booking_id: 'cb-late-cancel', venue_id: venues[0].id,
      gross_kwd: 20, commission_kwd: 2, net_to_venue_kwd: 18, status: 'pending',
      created_at: new Date().toISOString(), settled_at: null,
    });
    localStorage.setItem('playora.mock.settlements.v1', JSON.stringify(sets));
    // the match has to point back at the court booking, or the cancel never touches the court money
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    for (const row of games) if (row.id === g.id) row.court_booking_id = 'cb-late-cancel';
    localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
    return { gameId: g.id, venueId: venues[0].id };
  }, [IDS.organizer, IDS.user, IDS.analyst]);

  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([org, seed]) => {
    const api = __r(671);
    const res = await api.cancelMatch(seed.gameId, org, 'Pitch flooded after the storm');
    const sets = JSON.parse(localStorage.getItem('playora.mock.settlements.v1') || '[]')
      .filter((s) => s.booking_id === 'cb-late-cancel');
    const pay = JSON.parse(localStorage.getItem('playora.mock.payments.v1') || '[]')
      .find((p) => p.id === 'pay-late-cancel');
    return {
      res,
      settlementStatus: sets.length ? sets[0].status : null,
      settlementNet: sets.length ? sets[0].net_to_venue_kwd : null,
      courtPaymentStatus: pay ? pay.status : null,
    };
  }, [IDS.organizer, seed]);

  // the organizer holds a seat too, so three bookings but only one paid seat
  ok('three bookings were cancelled', out.res.cancelled === 3, JSON.stringify(out.res));
  ok('only the seat that was paid counts as refunded', out.res.refunded === 1, JSON.stringify(out.res));
  ok('the refunded amount is reported', Math.abs(out.res.refunded_kwd - 4) < 5e-3, String(out.res.refunded_kwd));
  ok('the court money was kept', out.courtPaymentStatus === 'paid', String(out.courtPaymentStatus));
  ok('its settlement survives as forfeited', out.settlementStatus === 'forfeited', String(out.settlementStatus));
  ok('the forfeited net matches the retained amount less commission', Math.abs(out.settlementNet - 18) < 5e-3, String(out.settlementNet));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockManualReplace took an organizer-supplied candidate id and validated nothing; neither it nor
// mockAcceptReplacement called the join guards, so an offer could reach a banned account and
// accepting it seated them without any of the fourteen checks mockJoinMatch applies.
await run('replacement offers go through the join guards', async () => {
  // A ban always needs a second admin to approve it, and there is only one admin in the seed, so the
  // active sanction is planted before boot rather than issued through the API.
  const ban = `(() => {
    const k = 'playora.mock.sanctions.v1';
    const rows = JSON.parse(localStorage.getItem(k) || '[]');
    rows.push({ id: 'sanction-ban-test', user_id: '${IDS.analyst}', type: 'ban', category: 'abuse',
      reason: 'seeded for the guard test', evidence_url: null, game_id: null,
      issued_by: '${IDS.admin}', issuer_role: 'admin', status: 'active',
      created_at: new Date().toISOString(), reviewed_by: '${IDS.admin}',
      reviewed_at: new Date().toISOString(), review_note: null });
    localStorage.setItem(k, JSON.stringify(rows));
  })();`;

  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer', initScript: ban });
  const seed = await page.evaluate(async ([org, banned, clean]) => {
    const api = __r(671);
    const res = {};
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Replacement guards', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 29 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 29 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    res.gameId = g.id;
    res.ghost = await code(() => api.manualReplace(org, g.id, '00000000-0000-4000-8000-000000000000'));
    res.banned = await code(() => api.manualReplace(org, g.id, banned));
    res.clean = await code(() => api.manualReplace(org, g.id, clean));
    // an offer that predates the ban, to prove acceptance is guarded too and not just the offer
    const k = 'playora.mock.replacement.offers.v1';
    const offers = JSON.parse(localStorage.getItem(k) || '[]');
    offers.push({
      id: 'offer-ban-test', game_id: g.id, candidate_id: banned, candidate_name: 'Test Analyst',
      status: 'offered', reserved_until: new Date(Date.now() + 36e5).toISOString(),
      triggered_at: new Date().toISOString(), manual: true,
      created_at: new Date().toISOString(), responded_at: null,
    });
    localStorage.setItem(k, JSON.stringify(offers));
    return res;
  }, [IDS.organizer, IDS.analyst, IDS.user]);

  ok('a candidate who is not a real profile is refused', seed.ghost === 'E_NO_SUCH_PLAYER', String(seed.ghost));
  ok('a banned candidate is not offered a seat', seed.banned === 'E_ACCOUNT_BANNED_FROM_MATCHES', String(seed.banned));
  ok('a clean candidate still is', seed.clean === 'accepted', String(seed.clean));

  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([banned]) => {
    const api = __r(671);
    try { await api.acceptReplacement(banned, 'offer-ban-test'); return 'accepted'; }
    catch (e) { return e.code || e.message; }
  }, [IDS.analyst]);
  ok('a banned candidate cannot accept an outstanding offer', out === 'E_ACCOUNT_BANNED_FROM_MATCHES', String(out));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// The shipped config has demo on, and the demo world appends synthetic npn-demo-N names to the
// candidate pool. Offering one reserved a real seat that nobody could ever accept.
await run('the replacement shortlist contains only real people', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org, filler]) => {
    const api = __r(671);
    const res = {};
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    res.demoWorld = !!window.__PLAYORA_CONFIG__.demo;
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Shortlist', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 33 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 33 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(g.id, filler);
    const state = await api.fetchReplacementState(org, g.id);
    res.stateKeys = state ? Object.keys(state) : null;
    const list = (state && (state.shortlist || state.candidates)) || [];
    res.listed = list.length;
    res.phantoms = list.filter((c) => String(c.user_id).startsWith('npn-demo-')).map((c) => c.user_id);
    res.phantomOffer = await code(() => api.manualReplace(org, g.id, 'npn-demo-1'));
    return res;
  }, [IDS.organizer, IDS.user]);

  ok('the demo world is on, so the pool would contain phantoms', out.demoWorld === true, String(out.demoWorld));
  // Without the filter this list is four entries and every one of them is an npn-demo id, so the
  // organizer's replacement screen offered nobody real. With it, the seeded world has no real
  // candidate in range - an empty shortlist is the honest answer, a fictional one is not.
  ok('the shortlist is a list', Array.isArray(out.phantoms), JSON.stringify(out.stateKeys));
  ok('none of its entries are phantoms', out.phantoms.length === 0, JSON.stringify(out.phantoms));
  ok('offering a phantom is refused', out.phantomOffer === 'E_NO_SUCH_PLAYER', String(out.phantomOffer));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// The ten-minute broadcast throttle only applied on update, and the timestamp it reads was missing
// from the defaults block - so activation always broadcast, and the first update after it did too.
await run('Need Player Now broadcasts at most once per window', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org, filler]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    // Need Player Now only opens inside 24 hours of kick-off
    const starts = new Date(Date.now() + 6 * 36e5);
    const g = await api.createMatch(org, {
      title: 'NPN throttle', sport: 'football', venue_id: venues[0].id,
      starts_at: starts.toISOString(), ends_at: new Date(starts.getTime() + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(g.id, filler);
    const sent = () => JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]')
      .find((x) => x.id === g.id).npn_notifications_sent;

    const a1 = await api.activateNeedPlayer(g.id, org, { radius_km: 25 });
    const afterActivate = sent();
    await api.updateNeedPlayer(g.id, org, { radius_km: 30 });
    const afterUpdate = sent();
    const stamped = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]')
      .find((x) => x.id === g.id).npn_last_broadcast_at;

    // wind the clock past the window and broadcast again
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    for (const row of games) if (row.id === g.id) row.npn_last_broadcast_at = new Date(Date.now() - 11 * 6e4).toISOString();
    localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
    return { activated: a1.npn_active, afterActivate, afterUpdate, stamped: !!stamped, gameId: g.id };
  }, [IDS.organizer, IDS.user]);

  ok('activation turned it on', out.activated === true, String(out.activated));
  ok('activation broadcast once', out.afterActivate > 0, String(out.afterActivate));
  ok('activation recorded when it broadcast', out.stamped === true, String(out.stamped));
  ok('the update straight after did not broadcast again', out.afterUpdate === out.afterActivate, `${out.afterActivate} -> ${out.afterUpdate}`);

  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const later = await page.evaluate(async ([org, gameId, before]) => {
    const api = __r(671);
    await api.updateNeedPlayer(gameId, org, { radius_km: 35 });
    return JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]')
      .find((x) => x.id === gameId).npn_notifications_sent;
  }, [IDS.organizer, out.gameId, out.afterUpdate]);
  ok('once the window has passed it broadcasts again', later > out.afterUpdate, `${out.afterUpdate} -> ${later}`);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockEditFutureOccurrences applied an arbitrary caller-supplied patch verbatim and never validated
// the result, so the price and duration bounds enforced at creation could be walked past on edit -
// and repricing an occurrence whose seat was already paid left that money at the old amount.
await run('editing a series is validated and cannot reprice a paid seat', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const res = {};
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const now = new Date();
    const { template: tpl } = await api.createSeries(org, {
      title: 'Editable series', sport: 'football', format: 'football_5v5', skill_level: 'all',
      venue_id: venues[0].id, max_players: 10, waitlist_capacity: 2, price_kwd: 2,
      visibility: 'public', approval_mode: 'auto', skill_policy: 'open',
      start_date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2).toISOString(),
      start_minutes: 1080, end_minutes: 1170, frequency: 'weekly',
      weekdays: [(now.getDay() + 2) % 7], horizon_weeks: 4, auto_invite: false,
    });
    res.priceOver = await code(() => api.editFutureOccurrences(tpl.id, org, { price_kwd: 500 }));
    res.durationOver = await code(() => api.editFutureOccurrences(tpl.id, org, { start_minutes: 0, end_minutes: 1400 }));
    res.playersOver = await code(() => api.editFutureOccurrences(tpl.id, org, { max_players: 400 }));
    res.smuggled = await code(() => api.editFutureOccurrences(tpl.id, org, { organizer_id: player, sport: 'cricket' }));
    const after = JSON.parse(localStorage.getItem('playora.mock.templates.v1') || '[]').find((t) => t.id === tpl.id);
    res.stillOwned = after.organizer_id === org && after.sport === 'football';

    // a normal move carries the duration with it
    res.move = await code(() => api.editFutureOccurrences(tpl.id, org, { start_minutes: 1140 }));
    const moved = JSON.parse(localStorage.getItem('playora.mock.templates.v1') || '[]').find((t) => t.id === tpl.id);
    res.window = [moved.start_minutes, moved.end_minutes];

    // pay for a seat on the next occurrence, then try to reprice
    const occ = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]')
      .filter((g) => g.series_id === tpl.id).sort((a, b) => new Date(a.starts_at) - new Date(b.starts_at))[0];
    await api.checkoutJoin(player, occ.id, 'knet');
    res.repriceAfterPaid = await code(() => api.editFutureOccurrences(tpl.id, org, { price_kwd: 5 }));
    res.timeStillEditable = await code(() => api.editFutureOccurrences(tpl.id, org, { start_minutes: 1020 }));
    return res;
  }, [IDS.organizer, IDS.user]);

  ok('a price outside the range is refused', out.priceOver === 'E_PRICE_OUT_OF_RANGE', String(out.priceOver));
  ok('a duration outside the range is refused', out.durationOver === 'E_DURATION_OUT_OF_RANGE', String(out.durationOver));
  ok('an impossible player count is refused', out.playersOver === 'E_PLAYERS_REQUIRED_MUST_BE_BETWEEN_2', String(out.playersOver));
  ok('fields outside the allow-list are ignored', out.smuggled === 'accepted' && out.stillOwned === true, `${out.smuggled} / owned=${out.stillOwned}`);
  ok('moving the start time carries the duration', out.move === 'accepted' && out.window[1] - out.window[0] === 90, JSON.stringify(out.window));
  ok('repricing over a paid seat is refused', out.repriceAfterPaid === 'E_A_SEAT_HAS_ALREADY_BEEN_PAID', String(out.repriceAfterPaid));
  ok('the time is still editable after a seat is paid', out.timeStillEditable === 'accepted', String(out.timeStillEditable));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockSetAttendance looked the booking up by id with no status filter, so an organizer could mark
// no_show on a seat the player had cancelled a week early - and the unguarded participant predicate
// then counted that row in fill rate, returning players, attendance rate and the reliability score.
await run('a cancelled booking cannot be marked, and does not count', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const seed = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Attendance guard', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 35 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 35 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(g.id, player);
    const rows = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
      .filter((b) => b.game_id === g.id);
    const left = rows.find((b) => b.user_id === player);
    const own = rows.find((b) => b.user_id === org);
    await api.leaveMatch(g.id, player);
    // attendance can only be set once the match is over, so age it
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    for (const row of games) if (row.id === g.id) {
      row.starts_at = new Date(Date.now() - 2 * 36e5).toISOString();
      row.ends_at = new Date(Date.now() - 36e5).toISOString();
    }
    localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
    return { gameId: g.id, cancelledId: left.id, ownId: own.id };
  }, [IDS.organizer, IDS.user]);

  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([org, seed]) => {
    const api = __r(671);
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    const before = await api.fetchOrganizerStats(org, org);
    const marked = await code(() => api.setAttendance(seed.gameId, org, seed.cancelledId, 'no_show'));
    const after = await api.fetchOrganizerStats(org, org);
    const live = await code(() => api.setAttendance(seed.gameId, org, seed.ownId, 'attended'));
    return {
      marked,
      live,
      fillBefore: before.avgFillRate,
      fillAfter: after.avgFillRate,
      returningBefore: before.returningPlayers,
      returningAfter: after.returningPlayers,
      rowAttendance: JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
        .find((b) => b.id === seed.cancelledId).attendance,
    };
  }, [IDS.organizer, seed]);

  ok('marking a cancelled booking is refused', out.marked === 'E_PLAYER_NOT_IN_THIS_MATCH', String(out.marked));
  ok('the row keeps no attendance', out.rowAttendance == null, String(out.rowAttendance));
  ok('the fill rate is unchanged', out.fillBefore === out.fillAfter, `${out.fillBefore} -> ${out.fillAfter}`);
  ok('the returning-player count is unchanged', out.returningBefore === out.returningAfter, `${out.returningBefore} -> ${out.returningAfter}`);
  ok('a live booking can still be marked', out.live === 'accepted', String(out.live));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Qt.seatCancellations is the only source for /refunds and it was written in exactly one place -
// leaving a match. The three other paths that end a live seat and move money all skipped it, so a
// player whose match was cancelled got a wallet credit and no explanation of where it came from.
await run('every way a seat ends files a cancellation', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const mk = async (title, day) => {
      const g = await api.createMatch(org, {
        title, sport: 'football', venue_id: venues[day % venues.length].id,
        starts_at: new Date(Date.now() + day * 864e5).toISOString(),
        ends_at: new Date(Date.now() + day * 864e5 + 54e5).toISOString(),
        max_players: 10, waitlist_capacity: 2, price_kwd: 2, visibility: 'public', format: '5v5',
      });
      await api.checkoutJoin(player, g.id, 'knet');
      return g;
    };
    const count = async () => (await api.fetchMyCancellations(player)).length;
    const res = { reasons: [] };

    res.start = await count();
    const a = await mk('Leaves', 41);
    await api.leaveMatch(a.id, player);
    res.afterLeave = await count();

    const b = await mk('Cancelled booking', 43);
    const bk = (await api.fetchMyBookings(player)).find((x) => x && x.game_id === b.id);
    await api.cancelBooking(bk.id, player);
    res.afterCancelBooking = await count();

    const c = await mk('Kicked', 45);
    // kickPlayer takes (organizer, game, the player's own id, reason)
    await api.kickPlayer(org, c.id, player, 'No-show twice already');
    res.afterKick = await count();

    const d = await mk('Match cancelled', 47);
    await api.cancelMatch(d.id, org, 'Pitch flooded after the storm');
    res.afterMatchCancel = await count();

    res.reasons = (await api.fetchMyCancellations(player)).map((x) => x.reason);
    return res;
  }, [IDS.organizer, IDS.user]);

  ok('leaving files one', out.afterLeave === out.start + 1, `${out.start} -> ${out.afterLeave}`);
  ok('cancelling a booking files one', out.afterCancelBooking === out.afterLeave + 1, `${out.afterLeave} -> ${out.afterCancelBooking}`);
  ok('being removed files one', out.afterKick === out.afterCancelBooking + 1, `${out.afterCancelBooking} -> ${out.afterKick}`);
  ok('the match being cancelled files one', out.afterMatchCancel === out.afterKick + 1, `${out.afterKick} -> ${out.afterMatchCancel}`);
  ok('each says which path it came from', out.reasons.includes('removed') && out.reasons.includes('match_cancelled'), JSON.stringify(out.reasons));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// The organizer's own seat was pushed with four fields where every other booking site writes seven,
// so attendance was written onto a row that never declared the field.
await run('the organizer booking has the same shape as a joiner booking', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Row shape', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 61 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 61 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(g.id, player);
    const rows = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
      .filter((b) => b.game_id === g.id);
    const keys = (id) => Object.keys(rows.find((b) => b.user_id === id) || {}).sort();
    return { organizer: keys(org), joiner: keys(player) };
  }, [IDS.organizer, IDS.user]);

  ok('the two rows declare the same fields', JSON.stringify(out.organizer) === JSON.stringify(out.joiner), `${JSON.stringify(out.organizer)} vs ${JSON.stringify(out.joiner)}`);
  ok('including attendance and updated_at', out.organizer.includes('attendance') && out.organizer.includes('updated_at'), JSON.stringify(out.organizer));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
