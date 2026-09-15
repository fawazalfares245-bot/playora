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

// The quick-match kick-off picker is Gregorian and 24-hour: no Hijri labels, no AM/PM, no minute
// pills, and the hour a user taps is the hour the match is stored at.
await run('kick-off picker is Gregorian and 24-hour', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer/quick' });
  await page.setViewportSize({ width: 420, height: 1400 });
  await page.waitForTimeout(2500);

  const body = await page.evaluate(() => document.body.innerText);
  ok('no AM/PM toggle', !/\bAM\b|\bPM\b/.test(body));
  ok('no minute interval pills', !/:15|:30|:45/.test(body));
  ok('no Hijri month labels', !/Rabi|Jumada|Safar|Muharram|Rajab|Sha'ban|Ramadan|Shawwal|Dhu/.test(body));
  ok('date chips show a Gregorian month', /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/.test(body));
  // The hours live in a dropdown now, so a closed picker must NOT be listing them.
  ok('the hour list is collapsed by default', !['00:00', '07:00', '23:00'].some((h) => body.includes(h)));

  // the hour tapped must be the hour stored
  await page.getByText('Football', { exact: true }).first().click();
  await page.waitForTimeout(1500);
  await page.getByText('Salmiya Sports Hub', { exact: true }).first().click();
  await page.waitForTimeout(1200);
  await page.locator('text=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)$/').nth(1).click();
  await page.waitForTimeout(400);
  await page.getByText(t('quickPickTimePlaceholder'), { exact: true }).first().click();
  await page.waitForTimeout(700);
  const opened = await page.evaluate(() => document.body.innerText);
  const hours = ['00:00', '07:00', '13:00', '22:00', '23:00'].filter((h) => opened.includes(h));
  ok('the open dropdown offers the full 24-hour range', hours.length === 5, hours.join(' '));
  ok('hours are zero-padded HH:00', /\b00:00\b/.test(opened) && !/\b0:00\b/.test(opened));
  await page.getByText('22:00', { exact: true }).first().click();
  await page.waitForTimeout(700);
  const closed = await page.evaluate(() => document.body.innerText);
  ok('choosing an hour closes the dropdown', !closed.includes('07:00'));
  ok('the field shows the chosen hour', closed.includes('22:00'));
  await page.getByText('Post match', { exact: true }).first().click();
  await page.waitForTimeout(3000);
  const stored = await page.evaluate(() => {
    const g = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    const last = g.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
    if (!last) return null;
    const d = new Date(last.starts_at);
    return { hour: d.getHours(), minute: d.getMinutes() };
  });
  ok('tapping 22:00 stores a 22:00 kick-off', stored && stored.hour === 22, JSON.stringify(stored));
  ok('minutes land on the hour', stored && stored.minute === 0, JSON.stringify(stored));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Two buttons express "give up my spot" and until now only one returned the money: the /my-bookings
// button (cancelBooking) flipped the status and promoted the waitlist without settling the payment,
// while the Leave button on /game/[id] (leaveMatch) refunded properly. They are pinned equal here.
await run('cancelBooking and leaveMatch both refund a paid seat', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  const out = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const res = {};

    // Separate days: an organizer cannot hold two matches at the same venue at the same time.
    const runPath = async (label, viaCancel, dayOffset) => {
      const g = await api.createMatch(org, {
        title: 'Refund parity ' + label, sport: 'football', venue_id: venues[0].id,
        starts_at: new Date(Date.now() + dayOffset * 864e5).toISOString(),
        ends_at: new Date(Date.now() + dayOffset * 864e5 + 54e5).toISOString(),
        max_players: 10, price_kwd: 3, visibility: 'public', format: '5v5',
      });
      const before = (await api.fetchWallet(player)).available_fils ?? 0;
      await api.checkoutJoin(player, g.id, 'knet');
      const paid = await api.fetchMySeatPayment(player, g.id);
      const cancelsBefore = (await api.fetchMyCancellations(player)).length;

      if (viaCancel) {
        const bk = (await api.fetchMyBookings(player)).find((b) => b && b.game_id === g.id);
        await api.cancelBooking(bk.id, player);
      } else {
        await api.leaveMatch(g.id, player);
      }

      const after = await api.fetchMySeatPayment(player, g.id);
      res[label] = {
        paidStatus: paid ? paid.status : null,
        refundStatus: after ? after.status : null,
        newCancellations: (await api.fetchMyCancellations(player)).length - cancelsBefore,
        walletRestored: ((await api.fetchWallet(player)).available_fils ?? 0) >= before,
      };
    };

    try { await runPath('cancel', true, 7); } catch (e) { res.cancelErr = e.code || e.message; }
    try { await runPath('leave', false, 9); } catch (e) { res.leaveErr = e.code || e.message; }
    return res;
  }, [IDS.organizer, IDS.user]);

  for (const path of ['cancel', 'leave']) {
    const r = out[path];
    ok(`${path}: the seat was paid for`, !!r && r.paidStatus === 'paid', JSON.stringify(out[path + 'Err'] ?? r));
    ok(`${path}: the payment ends up refunded`, !!r && r.refundStatus === 'refunded', String(r && r.refundStatus));
    ok(`${path}: a cancellation is recorded`, !!r && r.newCancellations === 1, String(r && r.newCancellations));
    ok(`${path}: the wallet balance is restored`, !!r && r.walletRestored === true, String(r && r.walletRestored));
  }
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// The currency picker offered seven currencies with no exchange rate behind any of them: formatMoney
// only swapped the symbol and the decimal count, so a 25 KWD court read as 25 GBP and was still
// charged in KWD fils. Prices are pinned to KWD; this proves the stored region cannot move them.
await run('every region prices in KWD with the fils digit intact', async () => {
  const money = /(\d[\d.,٠-٩]*)\s*(KWD|SAR|AED|QAR|BHD|£|\$|د\.ك|ر\.س)/g;
  const seen = [];
  for (const region of [
    { region: 'KW', timeZone: 'Asia/Kuwait', currency: 'KWD', firstDayOfWeek: 6 },
    { region: 'GB', timeZone: 'Europe/London', currency: 'GBP', firstDayOfWeek: 1 },
    { region: 'SA', timeZone: 'Asia/Riyadh', currency: 'SAR', firstDayOfWeek: 0 },
  ]) {
    const { browser, page, errors } = await openApp({
      role: 'user', route: '/booking/search',
      initScript: `localStorage.setItem('playora.region.v1', ${JSON.stringify(JSON.stringify(region))});`,
    });
    const body = await page.evaluate(() => document.body.innerText);
    const hits = [...body.matchAll(money)];
    seen.push({
      region: region.currency,
      symbols: [...new Set(hits.map((h) => h[2]))].sort(),
      decimals: [...new Set(hits.map((h) => (h[1].split('.')[1] || '').length))].sort(),
      count: hits.length,
      pageErrors: errors.filter((e) => e.startsWith('pageerror')).length,
    });
    await browser.close();
  }
  const [kw, gb, sa] = seen;
  ok('the search screen shows prices at all', kw.count > 0, JSON.stringify(kw));
  ok('GBP renders the same symbols as KWD', JSON.stringify(gb.symbols) === JSON.stringify(kw.symbols), JSON.stringify(seen.map((s) => s.symbols)));
  ok('SAR renders the same symbols as KWD', JSON.stringify(sa.symbols) === JSON.stringify(kw.symbols), JSON.stringify(seen.map((s) => s.symbols)));
  ok('the symbol is KWD', kw.symbols.every((x) => x === 'KWD'), JSON.stringify(kw.symbols));
  ok('every region keeps three decimals', seen.every((s) => s.decimals.every((n) => n === 3)), JSON.stringify(seen.map((s) => s.decimals)));
  ok('no page errors in any region', seen.every((s) => s.pageErrors === 0), JSON.stringify(seen.map((s) => s.pageErrors)));
});

// formatPrice returned the word "Free" for every falsy value, and /wallet routed all seven of its
// money renders through it, so a new user's balances were advertised rather than stated.
await run('a zero balance reads as money, not as Free', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/wallet' });
  const body = await page.evaluate(() => document.body.innerText);
  const u = await page.evaluate(() => ({
    price0: __r(1311).formatPrice(0),
    priceNull: __r(1311).formatPrice(null),
    amount0: __r(1311).formatAmount(0),
    free: __r(675).t('free'),
  }));
  ok('the wallet hero states a balance', /0\.000\s*KWD/.test(body), body.slice(0, 120).replace(/\n/g, '|'));
  ok('no balance reads as Free', !body.includes(u.free), body.slice(0, 200).replace(/\n/g, '|'));
  ok('formatPrice(0) is no longer the word Free', u.price0 !== u.free, `${u.price0} vs ${u.free}`);
  ok('formatPrice(0) is a money figure', /^0\.000\s*KWD$/.test(u.price0), String(u.price0));
  // A listing with no price at all still reads Free - that is what formatPrice is for.
  ok('formatPrice(null) still reads Free', u.priceNull === u.free, String(u.priceNull));
  ok('formatAmount(0) is 0.000 KWD', /^0\.000\s*KWD$/.test(u.amount0), String(u.amount0));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// The Play sheet's first row says "Browse matches near you and join one" and opened /discover, a
// people directory that cannot show a game.
await run('the Play sheet finds games, and finds people separately', async () => {
  // Start on Profile, not Home, so the row actually has somewhere to go.
  const { browser, page, errors } = await openApp({ role: 'user', route: '/profile' });
  const before = await page.evaluate(() => document.body.innerText);
  await page.getByRole('button', { name: t('playTab'), exact: true }).first().click().catch(() => {});
  await page.waitForTimeout(600);
  const sheet = await page.evaluate(() => document.body.innerText);
  ok('the sheet opened', sheet !== before && sheet.includes(t('findAGame')), sheet.slice(0, 120).replace(/\n/g, '|'));
  ok('the sheet offers finding people under its own name', sheet.includes(t('discoverTitle')), sheet.slice(0, 200).replace(/\n/g, '|'));
  await page.getByText(t('findAGame'), { exact: true }).first().click();
  await page.waitForTimeout(1800);
  const body = await page.evaluate(() => document.body.innerText);
  ok('it lands somewhere that shows games', /\d+\s*\/\s*\d+/.test(body), body.slice(0, 200).replace(/\n/g, '|'));
  ok('it is not the people directory', !body.includes(t('discoverTitle')) && !body.includes(t('noPlayersFound')), body.slice(0, 160).replace(/\n/g, '|'));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
