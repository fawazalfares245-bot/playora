// Consumer-side regression checks for the defects the consumer audit confirmed.
// Run: node tools/flows-consumer.mjs
import { openApp, IDS, ORIGIN } from './smoke.mjs';
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
    // The seed's matches all carry audience: 'female' and this player is male, so taking the first
    // scheduled one meant reserving seats on a match the player could never join. Nothing checked,
    // so the fixture passed and the gap stayed invisible; the group path applies the same gate as
    // joining now, so the fixture builds a match this player can actually take a seat in.
    await api.acceptCoC(ids.user).catch(() => {});
    const venue = (await api.fetchVenues()).find((v) => (v.sports || []).includes('football'));
    const game = await api
      .createMatch(ids.organizer, {
        title: 'Group probe', sport: 'football', venue_id: venue.id, format: '5v5',
        starts_at: new Date(Date.now() + 51 * 864e5).toISOString(),
        ends_at: new Date(Date.now() + 51 * 864e5 + 54e5).toISOString(),
        max_players: 10, price_kwd: 2, visibility: 'public',
      })
      .catch((e) => ({ error: e.message }));
    if (game.error) return { error: 'match: ' + game.error };
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

  // and the payload a screen receives must carry the sport so the board can draw it.
  //
  // This used to read the first seeded match of each sport. Every seeded match carries
  // audience: 'female' and the harness player is male, so it was reading matches mockGetGame had
  // always refused this user with AUDIENCE_MISMATCH - the raw lineup door simply had no such check
  // and answered anyway. The lineup now applies the same gate as the match, so the fixture has to be
  // a match this player can actually open: one of their own, per sport.
  const lu = await page.evaluate(async () => {
    const api = __r(671);
    const sess = await __r(631).loadSession();
    const me = sess.user.id;
    await api.acceptCoC(me).catch(() => {});
    const venues = await api.fetchVenues();
    const out = {};
    let day = 44;
    for (const sport of ['football', 'padel', 'tennis']) {
      const venue = venues.find((v) => (v.sports || []).includes(sport));
      if (!venue) continue;
      day += 1;
      const g = await api
        .createMatch(me, {
          title: `Board ${sport}`, sport, venue_id: venue.id, format: 'football' === sport ? '5v5' : 'doubles',
          starts_at: new Date(Date.now() + day * 864e5).toISOString(),
          ends_at: new Date(Date.now() + day * 864e5 + 54e5).toISOString(),
          max_players: 'football' === sport ? 10 : 4, price_kwd: 0, visibility: 'public',
        })
        .catch((e) => ({ error: e.message }));
      if (g.error) { out[sport] = { error: g.error }; continue; }
      const l = await api.fetchLineup(g.id, me).catch((e) => ({ error: e.code || e.message }));
      out[sport] = { sport: l?.sport, roles: (l?.a?.slots || []).map((s) => s.role), error: l?.error };
    }
    return out;
  });
  for (const sport of Object.keys(lu)) {
    ok(`the ${sport} lineup payload names its sport`, lu[sport].sport === sport, lu[sport].error || String(lu[sport].sport));
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

// Paying a seat with cash set the method, left the payment pending and returned. Nothing could ever
// mark it paid, so seatMayConfirm stayed false and the hold expired the seat - and cash is how
// organizers in Kuwait actually collect.
await run('a cash seat can be settled at the venue', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  const out = await page.evaluate(async ([org, player, stranger]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Cash seat', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 25 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 25 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 2.5, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(g.id, player);
    const due = await api.fetchMySeatPayment(player, g.id);
    await api.payRequest(player, due.id, 'cash');
    const afterSelect = await api.fetchMySeatPayment(player, g.id);
    const res = {
      selectedStatus: afterSelect.status,
      selectedMethod: afterSelect.method,
      // the hold must carry to kick-off, or the reconciler voids the seat before the player arrives
      holdReachesKickoff: new Date(afterSelect.reserved_until).getTime() >= new Date(g.starts_at).getTime() - 1e3,
    };
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    res.stranger = await code(() => api.confirmCashPayment(stranger, due.id));
    res.organizer = await code(() => api.confirmCashPayment(org, due.id));
    const settled = await api.fetchMySeatPayment(player, g.id);
    res.settledStatus = settled.status;
    res.settledMethod = settled.method;
    const parts = await api.fetchMatchParticipants(g.id, org);
    const row = parts.confirmed.find((b) => b.user_id === player);
    res.seated = !!row;
    res.rowPayment = row && row.seat_payment ? row.seat_payment.status : null;
    return res;
  }, [IDS.organizer, IDS.user, IDS.analyst]);

  ok('selecting cash leaves the payment pending', out.selectedStatus === 'pending' && out.selectedMethod === 'cash', JSON.stringify(out));
  ok('the hold now reaches kick-off', out.holdReachesKickoff === true, String(out.holdReachesKickoff));
  ok('a stranger cannot confirm the cash', out.stranger === 'E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE', String(out.stranger));
  ok('the organizer can confirm it', out.organizer === 'accepted', String(out.organizer));
  ok('the payment ends up paid by cash', out.settledStatus === 'paid' && out.settledMethod === 'cash', `${out.settledStatus}/${out.settledMethod}`);
  ok('the player holds a confirmed seat', out.seated === true, String(out.seated));
  ok('the participants list carries the payment', out.rowPayment === 'paid', String(out.rowPayment));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockJoinSeries counted only 'confirmed' and 'waitlisted' and swallowed everything else, so a player
// who joined twelve weeks of a paid series was told nothing had happened while holding twelve
// reserved seats with expiring holds - and a banned player saw the same two zeroes.
await run('joining a paid series reports the seats it actually held', async () => {
  const ban = `(() => {
    const k = 'playora.mock.sanctions.v1';
    const rows = JSON.parse(localStorage.getItem(k) || '[]');
    rows.push({ id: 'sanction-series-ban', user_id: '${IDS.analyst}', type: 'ban', category: 'abuse',
      reason: 'seeded', evidence_url: null, game_id: null, issued_by: '${IDS.admin}',
      issuer_role: 'admin', status: 'active', created_at: new Date().toISOString(),
      reviewed_by: '${IDS.admin}', reviewed_at: new Date().toISOString(), review_note: null });
    localStorage.setItem(k, JSON.stringify(rows));
  })();`;
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer', initScript: ban });
  const out = await page.evaluate(async ([org, player, banned]) => {
    const api = __r(671);
    const res = {};
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const now = new Date();
    const { template } = await api.createSeries(org, {
      title: 'Paid series', sport: 'football', format: 'football_5v5', skill_level: 'all',
      venue_id: venues[0].id, max_players: 10, waitlist_capacity: 2, price_kwd: 2.5,
      visibility: 'public', approval_mode: 'auto', skill_policy: 'open',
      start_date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2).toISOString(),
      start_minutes: 1080, end_minutes: 1170, frequency: 'weekly',
      weekdays: [(now.getDay() + 2) % 7], horizon_weeks: 6, auto_invite: false,
    });
    const joined = await api.joinSeries(template.id, player);
    res.joined = joined.joined;
    res.reserved = joined.reserved;
    res.duesCount = (joined.payments_due || []).length;
    res.duesHaveDeadlines = (joined.payments_due || []).every((d) => !!d.deadline && d.amount_kwd > 0);
    res.blocked = joined.blocked;

    const refused = await api.joinSeries(template.id, banned);
    res.bannedLanded = (refused.joined || 0) + (refused.waitlisted || 0) + (refused.reserved || 0);
    res.bannedReason = refused.blocked;

    // a paused series cannot be joined through its already-generated occurrences
    const tpls = JSON.parse(localStorage.getItem('playora.mock.templates.v1') || '[]');
    for (const t of tpls) if (t.id === template.id) t.status = 'paused';
    localStorage.setItem('playora.mock.templates.v1', JSON.stringify(tpls));
    res.templateId = template.id;
    return res;
  }, [IDS.organizer, IDS.user, IDS.analyst]);

  ok('every occurrence was joined', out.joined > 0, String(out.joined));
  // A fresh join on a paid match confirms the seat and attaches a payment deadline; the old summary
  // reported the twelve seats and none of the twelve deadlines.
  ok('every seat comes back with a payment deadline', out.duesCount === out.joined, `${out.duesCount} dues for ${out.joined} seats`);
  ok('each deadline carries an amount and a date', out.duesHaveDeadlines === true, String(out.duesHaveDeadlines));
  ok('and nothing blocked', out.blocked === null, String(out.blocked));
  ok('a banned player holds nothing', out.bannedLanded === 0, String(out.bannedLanded));
  ok('and is told why', out.bannedReason === 'E_ACCOUNT_BANNED_FROM_MATCHES', String(out.bannedReason));

  await page.goto('http://localhost/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const paused = await page.evaluate(async ([player, id]) => {
    try { await __r(671).joinSeries(id, player); return 'accepted'; } catch (e) { return e.code || e.message; }
  }, [IDS.admin, out.templateId]);
  ok('a paused series cannot be joined', paused === 'E_THIS_MATCH_IS_NO_LONGER_OPEN', String(paused));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// ji pushed a fresh booking row on every join, so a player who cancelled and rejoined owned two or
// three rows for the same game. That ambiguity is what broke the check-in scanner and the payment
// forfeit lookup, both of which take the first match.
await run('rejoining revives the booking rather than adding another', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  const out = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Rejoin', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 37 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 37 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    const rows = () => JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
      .filter((b) => b.game_id === g.id && b.user_id === player);

    await api.joinMatch(g.id, player);
    const first = rows()[0];
    await api.leaveMatch(g.id, player);
    await new Promise((r) => setTimeout(r, 50));
    await api.joinMatch(g.id, player);
    const afterOne = rows();
    await api.leaveMatch(g.id, player);
    await new Promise((r) => setTimeout(r, 50));
    await api.joinMatch(g.id, player);
    const afterTwo = rows();
    return {
      firstId: first.id,
      countAfterOne: afterOne.length,
      countAfterTwo: afterTwo.length,
      sameId: afterTwo.length === 1 && afterTwo[0].id === first.id,
      status: afterTwo.length === 1 ? afterTwo[0].status : null,
      attendance: afterTwo.length === 1 ? afterTwo[0].attendance : null,
    };
  }, [IDS.organizer, IDS.user]);

  ok('one rejoin leaves one row', out.countAfterOne === 1, String(out.countAfterOne));
  ok('two rejoins still leave one row', out.countAfterTwo === 1, String(out.countAfterTwo));
  ok('and it is the original row', out.sameId === true, `${out.firstId}`);
  ok('revived live', out.status === 'confirmed', String(out.status));
  ok('with no stale attendance', out.attendance == null, String(out.attendance));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Rows written before that change: the hydrate pass collapses them to one per (game, user).
await run('existing duplicate bookings are collapsed on load', async () => {
  const boot = await openApp({ role: 'organizer', route: '/organizer' });
  const seed = await boot.page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Legacy duplicates', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 39 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 39 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    const all = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    const at = (n) => new Date(Date.now() - n * 6e4).toISOString();
    const row = (id, status, created) => ({
      id, game_id: g.id, user_id: player, display_name: 'Test Player', status,
      attendance: null, reserved_until: null, created_at: created, updated_at: created,
    });
    // the shape the old join machine left behind: cancel, rejoin, cancel, rejoin
    all.push(row('bk-dup-1', 'cancelled', at(30)), row('bk-dup-2', 'cancelled', at(20)), row('bk-dup-3', 'confirmed', at(10)));
    localStorage.setItem('playora.mock.bookings.v1', JSON.stringify(all));
    const o = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); o[k] = localStorage.getItem(k); }
    return { gameId: g.id, state: o };
  }, [IDS.organizer, IDS.user]);
  await boot.browser.close();

  const restore = `(() => { const s = ${JSON.stringify(seed.state)}; for (const k of Object.keys(s)) if (k !== 'secure.playora_session') localStorage.setItem(k, s[k]); })();`;
  const { browser, page, errors } = await openApp({ role: 'user', route: '/', initScript: restore });
  const out = await page.evaluate(([gameId, player]) => {
    const rows = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
      .filter((b) => b.game_id === gameId && b.user_id === player);
    return { count: rows.length, id: rows[0] ? rows[0].id : null, status: rows[0] ? rows[0].status : null };
  }, [seed.gameId, IDS.user]);

  ok('three rows collapse to one', out.count === 1, String(out.count));
  ok('and the live one survives', out.id === 'bk-dup-3' && out.status === 'confirmed', `${out.id}/${out.status}`);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Di holds a promoted seat for fifteen minutes and the notification says so, but the match DTO
// returned only the status - so the reserved CTA had no countdown and the seat just vanished. And
// the cancel sheet on /my-bookings asked for confirmation without saying what it costs.
await run('a held seat shows its deadline, and cancelling shows the refund', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/' });
  const out = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const res = {};
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));

    // a seat held by a promotion: the DTO has to carry the deadline the CTA counts down to
    const held = await api.createMatch(org, {
      title: 'Held seat', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 53 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 53 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(held.id, player);
    res.heldGameId = held.id;

    // a paid seat well before the cutoff, and one inside it
    const mk = async (day) => {
      const g = await api.createMatch(org, {
        title: 'Refund quote ' + day, sport: 'football', venue_id: venues[day % venues.length].id,
        starts_at: new Date(Date.now() + day * 36e5).toISOString(),
        ends_at: new Date(Date.now() + day * 36e5 + 54e5).toISOString(),
        max_players: 10, waitlist_capacity: 2, price_kwd: 3, visibility: 'public', format: '5v5',
      });
      await api.checkoutJoin(player, g.id, 'knet');
      return g;
    };
    const far = await mk(48);
    const near = await mk(1);
    res.farQuote = await api.fetchSeatRefundQuote(player, far.id);
    res.nearQuote = await api.fetchSeatRefundQuote(player, near.id);
    // last, or the API writes above persist the in-memory rows straight back over it
    const rows = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    for (const b of rows) if (b.game_id === held.id && b.user_id === player) {
      b.status = 'reserved';
      b.reserved_until = new Date(Date.now() + 9e5).toISOString();
    }
    localStorage.setItem('playora.mock.bookings.v1', JSON.stringify(rows));
    return res;
  }, [IDS.organizer, IDS.user]);

  await page.goto('http://localhost/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const dto = await page.evaluate(async ([player, gameId]) => {
    // fetchGame takes the match first, then whoever is asking
    const g = await __r(671).fetchGame(gameId, player);
    return { status: g.user_status, until: g.user_reserved_until };
  }, [IDS.user, out.heldGameId]);

  ok('the match reports the seat as held', dto.status === 'reserved', String(dto.status));
  ok('and returns the deadline it is held to', !!dto.until && new Date(dto.until).getTime() > Date.now(), String(dto.until));
  ok('a seat cancelled early is refunded in full', out.farQuote.eligible === true && out.farQuote.refund_kwd === 3, JSON.stringify(out.farQuote));
  ok('a seat cancelled inside the cutoff is not', out.nearQuote.eligible === false && out.nearQuote.refund_kwd === 0, JSON.stringify(out.nearQuote));
  ok('and the quote still reports what was paid', out.nearQuote.paid_kwd === 3, String(out.nearQuote.paid_kwd));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Sanctions, bans and the reliability score all enforce an agreement nobody was required to make:
// the join machine checked bans, guests, partition and skill, and never conduct.
await run('joining requires the current Code of Conduct', async () => {
  // A profile with no acceptance row, which is what every account was until now.
  const wipe = `localStorage.setItem('playora.mock.coc.acceptance.v1', '[]');`;
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer', initScript: wipe });
  const out = await page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const res = {};
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Conduct gate', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 57 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 57 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    res.before = await api.fetchCoCStatus(player);
    res.refused = await code(() => api.joinMatch(g.id, player));
    await api.acceptCoC(player);
    res.after = await api.fetchCoCStatus(player);
    res.allowed = await code(() => api.joinMatch(g.id, player));
    return res;
  }, [IDS.organizer, IDS.user]);

  ok('the account has not accepted', out.before.accepted === false, JSON.stringify(out.before));
  ok('joining is refused', out.refused === 'E_ACCEPT_THE_CODE_OF_CONDUCT', String(out.refused));
  ok('accepting records the current version', out.after.accepted === true && out.after.accepted_version === out.after.version, JSON.stringify(out.after));
  ok('and the same join then succeeds', out.allowed === 'accepted', String(out.allowed));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Wr re-seats a player whose payment succeeded but whose booking vanished. It wrote a confirmed
// booking directly, with none of the join guards - so a ban issued between payment and
// reconciliation did not stop the seat - and measured capacity as raw confirmed rows rather than ki,
// which counts live reserved holds, so it could seat past max_players.
await run('the re-seat path refunds rather than seating someone who cannot play', async () => {
  const ban = `(() => {
    const k = 'playora.mock.sanctions.v1';
    const rows = JSON.parse(localStorage.getItem(k) || '[]');
    rows.push({ id: 'sanction-reseat', user_id: '${IDS.analyst}', type: 'ban', category: 'abuse',
      reason: 'seeded', evidence_url: null, game_id: null, issued_by: '${IDS.admin}',
      issuer_role: 'admin', status: 'active', created_at: new Date().toISOString(),
      reviewed_by: '${IDS.admin}', reviewed_at: new Date().toISOString(), review_note: null });
    localStorage.setItem(k, JSON.stringify(rows));
  })();`;
  const boot = await openApp({ role: 'organizer', route: '/organizer', initScript: ban });
  const seed = await boot.page.evaluate(async ([org, banned]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Reseat guard', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 59 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 59 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 3, visibility: 'public', format: '5v5',
    });
    // a paid seat whose booking has vanished, for a player who is now banned
    const pays = JSON.parse(localStorage.getItem('playora.mock.payments.v1') || '[]');
    pays.push({
      id: 'pay-reseat-banned', kind: 'seat', booking_id: null, game_id: g.id, payer_id: banned,
      payer_name: 'Test Analyst', payee_venue_id: venues[0].id, amount_kwd: 3, status: 'paid',
      method: 'knet', gateway_ref: 'x', reminders_sent: 0, reserved_until: null,
      paid_at: new Date().toISOString(), refunded_at: null,
      created_at: new Date(Date.UTC(2020, 0, 2)).toISOString(),
    });
    localStorage.setItem('playora.mock.payments.v1', JSON.stringify(pays));
    localStorage.removeItem('playora.mock.reconcilecursor.v1');
    const o = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); o[k] = localStorage.getItem(k); }
    return { gameId: g.id, state: o };
  }, [IDS.organizer, IDS.analyst]);
  await boot.browser.close();

  const restore = `${ban}\n(() => { const s = ${JSON.stringify(seed.state)}; for (const k of Object.keys(s)) if (k !== 'secure.playora_session') localStorage.setItem(k, s[k]); })();`;
  const { browser, page, errors } = await openApp({ role: 'guest', route: '/', initScript: restore });
  const out = await page.evaluate(async ([banned, gameId]) => {
    const api = __r(671);
    const res = await api.reconcileSeatPayments();
    const pay = JSON.parse(localStorage.getItem('playora.mock.payments.v1') || '[]')
      .find((p) => p.id === 'pay-reseat-banned');
    const seat = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
      .find((b) => b.game_id === gameId && b.user_id === banned && b.status === 'confirmed');
    return { res, payStatus: pay ? pay.status : null, seated: !!seat };
  }, [IDS.analyst, seed.gameId]);

  ok('the reconciler refunded rather than seating', out.res.refunded >= 1 && out.res.seated === 0, JSON.stringify(out.res));
  ok('the payment ends refunded', out.payStatus === 'refunded', String(out.payStatus));
  ok('and no confirmed booking exists for them', out.seated === false, String(out.seated));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockGetMyBookings did none of the housekeeping its siblings do: an expired hold still reported
// itself as reserved, the list was ordered by when the row was written rather than by kick-off, and
// it returned every historical row forever including rejected ones.
await run('my bookings are swept, ordered by kick-off and bounded', async () => {
  const boot = await openApp({ role: 'organizer', route: '/organizer' });
  const seed = await boot.page.evaluate(async ([org, player]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const mk = async (label, days) => {
      const g = await api.createMatch(org, {
        title: label, sport: 'football', venue_id: venues[days % venues.length].id,
        starts_at: new Date(Date.now() + days * 864e5).toISOString(),
        ends_at: new Date(Date.now() + days * 864e5 + 54e5).toISOString(),
        max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
      });
      await api.joinMatch(g.id, player);
      return g;
    };
    const soon = await mk('Tonight', 1);
    const later = await mk('Next month', 30);
    const stale = await mk('Expired hold', 5);

    const rows = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    const old = new Date(Date.now() - 200 * 864e5).toISOString();
    for (const b of rows) {
      // a hold that lapsed while nobody was looking
      if (b.game_id === stale.id && b.user_id === player) {
        b.status = 'reserved';
        b.reserved_until = new Date(Date.now() - 6e5).toISOString();
      }
    }
    // history that should not follow the player around, and a rejection that is not theirs to see
    rows.push({ id: 'bk-ancient', game_id: soon.id, user_id: player, display_name: 'Test Player',
      status: 'cancelled', attendance: null, reserved_until: null, created_at: old, updated_at: old });
    rows.push({ id: 'bk-rejected', game_id: later.id, user_id: player, display_name: 'Test Player',
      status: 'rejected', attendance: null, reserved_until: null,
      created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
    localStorage.setItem('playora.mock.bookings.v1', JSON.stringify(rows));
    const o = {}; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); o[k] = localStorage.getItem(k); }
    return { soon: soon.id, later: later.id, stale: stale.id, state: o };
  }, [IDS.organizer, IDS.user]);
  await boot.browser.close();

  const restore = `(() => { const s = ${JSON.stringify(seed.state)}; for (const k of Object.keys(s)) if (k !== 'secure.playora_session') localStorage.setItem(k, s[k]); })();`;
  const { browser, page, errors } = await openApp({ role: 'user', route: '/', initScript: restore });
  const out = await page.evaluate(async ([player, seed]) => {
    const rows = await __r(671).fetchMyBookings(player);
    return {
      ids: rows.map((r) => r.id),
      firstGame: rows[0] ? rows[0].game_id : null,
      staleStatus: (rows.find((r) => r.game_id === seed.stale) || {}).status ?? null,
      hasAncient: rows.some((r) => r.id === 'bk-ancient'),
      hasRejected: rows.some((r) => r.id === 'bk-rejected'),
    };
  }, [IDS.user, seed]);

  ok('the expired hold reports itself cancelled on first load', out.staleStatus === 'cancelled', String(out.staleStatus));
  ok('the soonest kick-off is first', out.firstGame === seed.soon, `${out.firstGame} vs ${seed.soon}`);
  ok('a rejection is not in the list', out.hasRejected === false, String(out.hasRejected));
  ok('cancelled history older than ninety days is dropped', out.hasAncient === false, String(out.hasAncient));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Every door onto a seat applies the same gate, or the narrowest one is the only one that matters.
// A women-only match is the sharpest case: mockJoinMatch has always refused a male account with
// AUDIENCE_MISMATCH, but the three other paths that put a booking row into a match each grew their
// own guard list, and mockCreateGroupBooking's had no audience check at all - it seated its leader,
// their friends and their guests on any match it was given. The audience is rewritten in storage and
// the page reloaded, because the match rows are read once on boot.
await run('every seat-taking path applies the audience gate', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/' });
  await page.waitForTimeout(1500);

  const seed = await page.evaluate(async (ids) => {
    const api = __r(671);
    await api.acceptCoC(ids.user).catch(() => {});
    await api.acceptCoC(ids.organizer).catch(() => {});
    const venue = (await api.fetchVenues()).find((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(ids.organizer, {
      title: 'Audience gate', sport: 'football', venue_id: venue.id, format: '5v5',
      starts_at: new Date(Date.now() + 57 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 57 * 864e5 + 54e5).toISOString(),
      max_players: 10, price_kwd: 0, visibility: 'public',
    });
    return { gameId: g.id, audience: g.audience };
  }, IDS);

  await page.evaluate((gameId) => {
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    for (const row of games) if (row.id === gameId) row.audience = 'female';
    localStorage.setItem('playora.mock.games.v1', JSON.stringify(games));
  }, seed.gameId);
  await page.goto(ORIGIN + '/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);

  const out = await page.evaluate(async ([ids, gameId]) => {
    const api = __r(671);
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    const res = {};
    res.audience = (JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]').find((g) => g.id === gameId) || {}).audience;
    res.join = await code(() => api.joinMatch(gameId, ids.user));
    res.group = await code(() => api.createGroupBooking(ids.user, gameId, { friendIds: [], guestNames: ['Guest One'], paymentMode: 'group' }));
    // The control has to be someone the gate admits, which is not the organizer: Test Organizer is
    // male and is refused by their own women-only match, correctly. A seeded female account is.
    // The control is the group path, which is the one this gate was missing from. It takes the seat
    // itself, so nothing may join ahead of it or the answer comes back 'already_booked' - which
    // would read as a refusal and is not one.
    const she = JSON.parse(localStorage.getItem('playora.mock.profiles.v1') || '[]').find((p) => 'female' === p.audience);
    res.control = she?.id ?? null;
    if (she) {
      await api.acceptCoC(she.id).catch(() => {});
      res.controlGroup = await code(() => api.createGroupBooking(she.id, gameId, { friendIds: [], guestNames: ['Guest Two'], paymentMode: 'group' }));
    }
    return res;
  }, [IDS, seed.gameId]);

  ok('the fixture match is women-only', out.audience === 'female', String(out.audience));
  ok('joining refuses a male account', out.join === 'AUDIENCE_MISMATCH', String(out.join));
  ok('reserving a group refuses it too', out.group === 'AUDIENCE_MISMATCH', String(out.group));
  ok('the control account exists', !!out.control, String(out.control));
  ok('a woman still reserves a group on it (the control)', out.controlGroup === 'accepted', String(out.controlGroup));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// F-CARCH-2 / F-CQUAL-3: the home list rendered G.suggested and the map rendered fetchUpcomingGames -
// two different sets behind one toggle - so the same filters could show a game in one view and not
// the other, and the month picker advertised days from the union of both while the list could only
// ever render the first. The assertion is on the data the screen derives, because the two sets are
// screen state: the map's games must be a subset of the list's, and every day the picker marks must
// yield at least one row.
await run('the home toggle cannot change which games exist', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/' });
  await page.waitForTimeout(3000);

  const out = await page.evaluate(async (ids) => {
    const api = __r(671);
    const d = await api.fetchDiscover(ids.user);
    const ce = await api.fetchUpcomingGames({ userId: ids.user });
    const key = (iso) => new Date(iso).toISOString().slice(0, 10);
    // The screen's own derivation, with no filters applied.
    const ve = d.suggested ?? [];
    const listIds = new Set(ve.map((r) => r.game_id));
    const mapRows = ce.filter((g) => listIds.has(g.id));
    const marked = new Set(ve.map((r) => key(r.starts_at)));
    const listDays = new Set(ve.map((r) => key(r.starts_at)));
    return {
      list: ve.length,
      upcoming: ce.length,
      map: mapRows.length,
      mapOutsideList: mapRows.filter((g) => !listIds.has(g.id)).length,
      markedWithNoRow: [...marked].filter((k) => !listDays.has(k)).length,
      // The two sets genuinely differ in membership - suggested drops games the viewer organises or
      // has already joined - which is what made the old map/list split visible.
      onlyInUpcoming: ce.filter((g) => !listIds.has(g.id)).length,
    };
  }, IDS);

  ok('the home fixture has games to compare', out.list > 0 && out.upcoming > 0, `list=${out.list} upcoming=${out.upcoming}`);
  ok('every map pin is a game the list also has', out.mapOutsideList === 0, String(out.mapOutsideList));
  ok('every day the picker marks yields a row', out.markedWithNoRow === 0, String(out.markedWithNoRow));
  ok('the two sets really are different, so the check is not vacuous', out.onlyInUpcoming > 0, `${out.onlyInUpcoming} games are in upcoming but not the list`);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// The map view must render without error too - it is the half that changed.
await run('the home map view renders', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/' });
  await page.waitForTimeout(3000);
  const label = t('mapView');
  const btn = page.getByText(label, { exact: true }).first();
  ok('the map toggle is present', (await btn.count()) > 0, label);
  if ((await btn.count()) > 0) {
    await btn.click();
    await page.waitForTimeout(2000);
    const text = await page.evaluate(() => document.body.innerText);
    ok('the map view shows something', text.length > 40, String(text.length));
  }
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// F-CQUAL-2: the home list keyed its day dividers on `toISOString().slice(0, 10)`, a UTC key. Kuwait
// is UTC+3, so a 01:00 kick-off is still the previous calendar day in UTC and landed under
// yesterday's divider - where the heading and the card's own time then disagreed. The check is the
// key itself, evaluated in the page against the region's configured zone.
await run('the day key follows the region zone, not UTC', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(() => {
    const zone = __r(912).getRegionSettings().timeZone;
    // 01:00 on the 21st in Kuwait is 22:00 on the 20th in UTC.
    const early = '2026-09-20T22:00:00.000Z';
    const utcKey = new Date(early).toISOString().slice(0, 10);
    const zoneKey = new Intl.DateTimeFormat('en-CA', {
      timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit',
    }).format(new Date(early));
    return { zone, utcKey, zoneKey, clock: __r(912).formatInZone(early, 'en', { hour: '2-digit', minute: '2-digit', hour12: false }) };
  });
  ok('the region zone is the Kuwait one', out.zone === 'Asia/Kuwait', String(out.zone));
  ok('a small-hours kick-off is the next day in UTC', out.utcKey === '2026-09-20', String(out.utcKey));
  ok('and the day it is actually played on in the region', out.zoneKey === '2026-09-21', String(out.zoneKey));
  ok('which is the day the card clock agrees with', out.clock.startsWith('01'), String(out.clock));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
