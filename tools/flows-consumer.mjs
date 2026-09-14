// Consumer-side regression checks for the defects the consumer audit confirmed.
// Run: node tools/flows-consumer.mjs
import { openApp, IDS } from './smoke.mjs';
import fs from 'node:fs';
const en = fs.readFileSync(new URL('../bundle-src/909.js', import.meta.url), 'utf8');
const t = (k) => {
  const m = en.match(new RegExp(`^\\s+${k}: "((?:[^"\\\\]|\\\\.)*)"`, 'm'));
  if (!m) throw new Error('missing key ' + k);
  return JSON.parse('"' + m[1] + '"');
};
const results = [];
const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);
async function run(name, fn) { try { await fn(); } catch (e) { results.push(`FAIL ${name}: ${e.message.split('\n')[0]}`); } }

// F-CARCH (Critical): a group reservation could be created but its payment view never mounted,
// because the only thing that loaded it was a poll gated on the state the poll itself produced.
await run('group booking reaches its payment view', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/' });
  await page.waitForTimeout(1500);

  const setup = await page.evaluate(async (ids) => {
    const api = __r(671);
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    const now = Date.now();
    const game = games.find((g) => g.status === 'scheduled' && new Date(g.starts_at).getTime() > now);
    if (!game) return { error: 'no scheduled game in the seed' };
    const cfg = await api.fetchGroupConfig(ids.user, game.id).catch((e) => ({ error: e.message }));
    if (cfg?.error) return { error: 'config: ' + cfg.error };
    const made = await api
      .createGroupBooking(ids.user, game.id, { friendIds: [], guestNames: ['Guest One'], paymentMode: 'group' })
      .catch((e) => ({ error: e.message }));
    if (made?.error) return { error: 'create: ' + made.error, gameId: game.id };
    const got = await api.fetchGroupBooking(ids.user, made.id).catch((e) => ({ error: e.message }));
    return { gameId: game.id, groupId: made.id, status: got?.group?.status, members: (got?.members || []).length };
  }, IDS);

  if (setup.error) { ok('a group reservation can be created', false, setup.error); await browser.close(); return; }
  ok('a group reservation can be created', !!setup.groupId, `status=${setup.status} members=${setup.members}`);
  ok('the reservation is held, not confirmed', setup.status === 'reserving', String(setup.status));

  // Now open the screen the user would actually land on.
  await page.goto(`http://localhost/group/${setup.gameId}`);
  await page.waitForTimeout(2500);
  const body = await page.evaluate(() => document.body.innerText);
  // The builder and the reservation view are mutually exclusive. "Reserve group" belongs to the
  // builder; the countdown and the pay button exist only once the reservation has actually loaded.
  const payWord = t('payShareBtn').split('%')[0].trim();
  const expiresWord = t('expiresInLabel').split('%')[0].trim();
  // "Pay" alone is not discriminating — it also appears in the builder's payment-mode label. The
  // hold countdown exists only on the reservation view, so that is the assertion with teeth.
  ok('the hold countdown mounts, so the reservation actually loaded',
     body.includes(expiresWord),
     `expires="${expiresWord}"`);
  ok('the pay-your-share control is present', body.includes(payWord), `pay="${payWord}"`);
  ok('the reserve-group form is no longer the thing on screen',
     !body.includes(t('reserveGroup')), 'builder still shown');
  ok('no page errors on the group screen', !errors.some((e) => e.startsWith('pageerror')),
     errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// The lineup board must match the sport. Padel and tennis are not football with fewer players:
// no goalkeeper, a different court, and formations about depth rather than rows.
await run('lineup draws the right court per sport', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  await page.waitForTimeout(1800);

  const shapes = await page.evaluate(() => {
    const f = __r(654);
    const out = {};
    for (const [sport, size] of [['football', 5], ['padel', 2], ['padel', 1], ['tennis', 2], ['tennis', 1]]) {
      const key = f.suggestFormationKey(size, 0.5, sport);
      const slots = f.formationSlots(key, sport);
      out[`${sport}-${size}`] = {
        keys: f.formationsForSport(size, sport).map((x) => x.key),
        suggested: key,
        roles: slots.map((s) => s.role),
        count: slots.length,
        // every slot must sit inside the court once mapped to the board's coordinates
        inBounds: slots.every((s) => {
          const a = 100 * (1 - 0.5 * s.y) - 9, b = 0.5 * s.y * 100 - 9;
          return a >= 0 && a <= 84 && b >= 0 && b <= 84;
        }),
      };
    }
    return out;
  });

  ok('football keeps its goalkeeper', shapes['football-5'].roles[0] === 'GK', shapes['football-5'].roles.join(','));
  for (const k of ['padel-2', 'padel-1', 'tennis-2', 'tennis-1']) {
    ok(`${k}: no goalkeeper on a racket court`, !shapes[k].roles.includes('GK'), shapes[k].roles.join(','));
    ok(`${k}: one slot per player`, shapes[k].count === Number(k.split('-')[1]), String(shapes[k].count));
    ok(`${k}: roles are net/baseline`, shapes[k].roles.every((r) => r === 'NET' || r === 'BASE'), shapes[k].roles.join(','));
    ok(`${k}: every slot sits inside the court`, shapes[k].inBounds === true, JSON.stringify(shapes[k].roles));
    ok(`${k}: offers real formations, not just Custom`, shapes[k].keys.length > 1, shapes[k].keys.join(','));
    ok(`${k}: suggests a ${k.split('-')[0]} shape`, shapes[k].suggested.startsWith(k.split('-')[0]), shapes[k].suggested);
  }
  ok('padel doubles offers both-net, one-up and both-back',
     ['padel-both-net', 'padel-one-up', 'padel-both-back'].every((x) => shapes['padel-2'].keys.includes(x)),
     shapes['padel-2'].keys.join(','));
  ok('tennis doubles offers the australian formation',
     shapes['tennis-2'].keys.includes('tennis-australian'), shapes['tennis-2'].keys.join(','));

  // and the payload a screen receives must carry the sport so the board can draw it
  const lu = await page.evaluate(async () => {
    const api = __r(671);
    const sess = await __r(631).loadSession();
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    const out = {};
    for (const sport of ['football', 'padel', 'tennis']) {
      const g = games.find((x) => x.sport === sport && x.status === 'scheduled');
      if (!g) continue;
      const l = await api.fetchLineup(g.id, sess.user.id).catch(() => null);
      out[sport] = { sport: l?.sport, roles: (l?.a?.slots || []).map((s) => s.role) };
    }
    return out;
  });
  for (const sport of Object.keys(lu)) {
    ok(`the ${sport} lineup payload names its sport`, lu[sport].sport === sport, String(lu[sport].sport));
  }
  if (lu.padel) ok('a padel lineup has no goalkeeper end to end', !lu.padel.roles.includes('GK'), lu.padel.roles.join(','));
  if (lu.tennis) ok('a tennis lineup has no goalkeeper end to end', !lu.tennis.roles.includes('GK'), lu.tennis.roles.join(','));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
