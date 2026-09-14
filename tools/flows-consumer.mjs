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

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
