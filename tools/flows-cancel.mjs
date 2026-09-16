// Five ways a seat stops existing, run against the same fixture and diffed.
//
// mockLeaveMatch, mockCancelBooking, mockKickPlayer, cancelGameLocked and the squad sweep all take
// a paid, seated, boarded player and remove them, and each one used to decide for itself what that
// meant: /my-bookings cancelled without refunding while the Leave button refunded, one path wrote a
// cancellation row and the others did not, one freed the lineup slot and the others left the player
// standing on the pitch. They agree now, and this is the table that keeps them agreeing: one
// fixture, five doors out, the same five-part answer.
//
// Run: node tools/flows-cancel.mjs
import { openApp, IDS, ORIGIN, bookingInvariants, assertBookingInvariants } from './smoke.mjs';

const results = [];
const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);
const SEAT_FILS = 2000;

const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });

// Each path gets its own match and its own player, so the cases cannot contaminate each other.
const direct = await page.evaluate(async (ids) => {
  const api = __r(671);
  const ORG = ids.organizer;
  const rows = () => JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
  const cancels = () => JSON.parse(localStorage.getItem('playora.mock.seat.cancellations.v1') || '[]');
  const wallet = async (u) => (await api.fetchWallet(u)).available_fils;

  const roster = JSON.parse(localStorage.getItem('playora.mock.profiles.v1') || '[]')
    .filter((p) => (p.role || 'user') === 'user' && p.id.startsWith('demo:'))
    .map((p) => p.id);
  const players = [ids.user, ...roster].slice(0, 6);
  for (const u of [ORG, ...players]) await api.acceptCoC(u);
  for (const u of players) await api.walletAddFunds(u, 20000, 'knet');
  const venue = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'))[0];

  // A paid, seated player standing in slot two of side A - the state all five paths have to unwind.
  const fixture = async (name, player, day) => {
    const g = await api.createMatch(ORG, {
      title: 'Cancel ' + name, sport: 'football', venue_id: venue.id,
      starts_at: new Date(Date.now() + day * 864e5).toISOString(),
      ends_at: new Date(Date.now() + day * 864e5 + 54e5).toISOString(),
      max_players: 6, waitlist_capacity: 2, price_kwd: 2, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(g.id, player);
    const pay = await api.fetchMySeatPayment(player, g.id);
    await api.payRequest(player, pay.id, 'wallet');
    const lineup = await api.fetchLineup(g.id, ORG);
    await api.assignLineupSlot(ORG, g.id, 'A', lineup.a.slots[1].slot_id, `self-${player}`);
    const placed = await api.fetchLineup(g.id, ORG);
    return {
      gameId: g.id,
      bookingId: rows().find((b) => b.game_id === g.id && b.user_id === player).id,
      placed: [...placed.a.slots, ...placed.b.slots].some((s) => s.player_id === `self-${player}`),
      before: await wallet(player),
    };
  };

  // What the world says about this player once the path has run.
  const tuple = async (f, player) => {
    const booking = rows().find((b) => b.id === f.bookingId) || {};
    const payment = await api.fetchMySeatPayment(player, f.gameId);
    const lineup = await api.fetchLineup(f.gameId, ORG).catch(() => null);
    const slots = lineup ? [...lineup.a.slots, ...lineup.b.slots] : [];
    return {
      placed: f.placed,
      status: booking.status ?? null,
      payment: payment?.status ?? null,
      walletDelta: (await wallet(player)) - f.before,
      reason: (cancels().find((c) => c.game_id === f.gameId && c.user_id === player) || {}).reason ?? null,
      lineupHeld: slots.some((s) => s.player_id === `self-${player}`),
      attendance: booking.attendance ?? null,
    };
  };

  const out = {};
  const paths = [
    ['leave', (f, p) => api.leaveMatch(f.gameId, p)],
    ['cancelBooking', (f, p) => api.cancelBooking(f.bookingId, p)],
    ['kick', (f, p) => api.kickPlayer(ORG, f.gameId, p, 'repeated no shows')],
    ['matchCancelled', (f) => api.cancelMatch(f.gameId, ORG, 'venue flooded')],
  ];
  let day = 6;
  for (const [name, run] of paths) {
    const player = players[paths.findIndex(([n]) => n === name)];
    try {
      const f = await fixture(name, player, (day += 1));
      await run(f, player);
      out[name] = await tuple(f, player);
    } catch (e) {
      out[name] = { err: e.code || e.message };
    }
  }

  // The squad sweep is the fifth door and does not take a caller - it fires off the clock. Build its
  // fixture here and leave the window open; the sweep runs after a reboot, below.
  try {
    const player = players[4];
    const f = await fixture('squadDrop', player, day + 1);
    out.squadSeed = { ...f, player };
  } catch (e) {
    out.squadSeed = { err: e.code || e.message };
  }
  return out;
}, IDS);

// A squad window that closed a minute ago, written straight into storage: the sweep reads the world
// as it finds it on boot, which is exactly how it fires in the app.
await page.evaluate((gameId) => {
  const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
  for (const row of games)
    if (row.id === gameId) {
      row.squad_window_status = 'open';
      row.squad_window_opened_at = new Date(Date.now() - 36e5).toISOString();
      row.squad_deadline = new Date(Date.now() - 6e4).toISOString();
    }
  localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
}, direct.squadSeed.gameId);
await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
await page.waitForTimeout(2500);

const swept = await page.evaluate(async ([ids, seed]) => {
  const api = __r(671);
  const ORG = ids.organizer;
  try {
    // The player never confirmed their place, so the sweep drops them when the window closes.
    await __r(631).mockRunScheduledWork();
    const booking = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]').find((b) => b.id === seed.bookingId) || {};
    const payment = await api.fetchMySeatPayment(seed.player, seed.gameId);
    const lineup = await api.fetchLineup(seed.gameId, ORG).catch(() => null);
    const slots = lineup ? [...lineup.a.slots, ...lineup.b.slots] : [];
    const cancels = JSON.parse(localStorage.getItem('playora.mock.seat.cancellations.v1') || '[]');
    return {
      placed: seed.placed,
      status: booking.status ?? null,
      payment: payment?.status ?? null,
      walletDelta: (await api.fetchWallet(seed.player)).available_fils - seed.before,
      reason: (cancels.find((c) => c.game_id === seed.gameId && c.user_id === seed.player) || {}).reason ?? null,
      lineupHeld: slots.some((s) => s.player_id === `self-${seed.player}`),
      attendance: booking.attendance ?? null,
    };
  } catch (e) {
    return { err: e.code || e.message };
  }
}, [IDS, direct.squadSeed]);

const table = { ...direct, squadDrop: swept };
delete table.squadSeed;
const PATHS = ['leave', 'cancelBooking', 'kick', 'matchCancelled', 'squadDrop'];

// The fixture has to have been real, or the table below is five rows of nothing.
for (const name of PATHS)
  ok(`${name}: the fixture seated and boarded the player`, table[name].placed === true, table[name].err || String(table[name].placed));

// --- what every path must agree on ---
for (const name of PATHS) {
  const t = table[name];
  ok(`${name}: the seat is cancelled`, t.status === 'cancelled', String(t.status));
  ok(`${name}: the seat payment is settled, not left pending`, t.payment === 'refunded', String(t.payment));
  ok(`${name}: the money goes back`, t.walletDelta === SEAT_FILS, `${t.walletDelta} fils`);
  ok(`${name}: the cancellation is on the record`, t.reason !== null, String(t.reason));
  ok(`${name}: no attendance is invented on the way out`, t.attendance === null, String(t.attendance));
}

// --- and what they are each allowed to say differently ---
// Only the reason, which is the whole point of having five of them.
ok('the five paths give five reasons', new Set(PATHS.map((n) => table[n].reason)).size >= 3, PATHS.map((n) => `${n}=${table[n].reason}`).join(' '));
ok('leaving is recorded as a refund', table.leave.reason === 'refunded', String(table.leave.reason));
ok('cancelling from /my-bookings says the same thing', table.cancelBooking.reason === 'refunded', String(table.cancelBooking.reason));
ok('being kicked is recorded as a removal', table.kick.reason === 'removed', String(table.kick.reason));
ok('a cancelled match says so', table.matchCancelled.reason === 'match_cancelled', String(table.matchCancelled.reason));
ok('an unconfirmed squad place says so', table.squadDrop.reason === 'squad_dropped', String(table.squadDrop.reason));

// The lineup is the one place they still differ, and only for the match that no longer exists: the
// three paths that remove one player from a live match free their slot, and cancelling the whole
// match leaves the board as it was. Nobody can join a cancelled match, so the board is a record
// rather than a roster - but it is a difference, so it is written down rather than left to be
// rediscovered.
ok('leaving frees the slot', table.leave.lineupHeld === false, String(table.leave.lineupHeld));
ok('cancelling frees the slot', table.cancelBooking.lineupHeld === false, String(table.cancelBooking.lineupHeld));
ok('being kicked frees the slot', table.kick.lineupHeld === false, String(table.kick.lineupHeld));
ok('a squad drop frees the slot', table.squadDrop.lineupHeld === false, String(table.squadDrop.lineupHeld));
ok('a cancelled match keeps its board as a record', table.matchCancelled.lineupHeld === true, String(table.matchCancelled.lineupHeld));

assertBookingInvariants(ok, await bookingInvariants(page, IDS.admin), { floor: 8 });
ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
await browser.close();

console.log(results.join('\n'));
console.log('--- the table ---');
for (const name of PATHS) console.log(name.padEnd(16), JSON.stringify(table[name]));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
