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
    const parts = await api.fetchMatchParticipants(gameId);
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

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
