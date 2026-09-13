// Backend rule checks executed inside the real runtime via the Metro require (__r).
// Run: node tools/rules.mjs
import { openApp, IDS } from './smoke.mjs';
const results = [];
const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);

const { browser, page, errors } = await openApp({ role: 'admin', route: '/' });
await page.waitForTimeout(1200);
const out = await page.evaluate(async (ids) => {
  const api = __r(671);
  const res = {};
  const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
  const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
  const anyGame = games[0];

  // --- authorization ---
  res.adminOnly = await code(() => api.fetchOrganizerApplications(ids.user));
  res.analystBI = await code(() => api.fetchBIDashboard(ids.analyst));
  res.analystQueue = await code(() => api.fetchOrganizerApplications(ids.analyst));
  res.organizerSanctionOutsideMatch = await code(() => api.issueSanction(ids.organizer, ids.user, { type: 'warning', category: 'no_show', reason: 'test', game_id: null }));
  res.seriesAnalyticsNoCaller = await code(() => api.fetchSeriesAnalytics('tpl-x'));
  res.bookingOtherUser = await code(() => api.fetchBooking('no-such-booking', ids.user));

  // --- validation ---
  res.matchPastStart = await code(() => api.createMatch(ids.organizer, { sport: 'football', title: 'Past game', format: 'football_5v5', skill_level: 'all', starts_at: new Date(Date.now() - 36e5).toISOString(), ends_at: new Date(Date.now() - 18e5).toISOString(), max_players: 10, price_kwd: 2, venue_id: anyGame?.venue_id, visibility: 'public', approval_mode: 'auto' }));
  res.matchBadEnum = await code(() => api.createMatch(ids.organizer, { sport: 'chess', title: 'Chess', format: 'football_5v5', skill_level: 'all', starts_at: new Date(Date.now() + 864e5).toISOString(), ends_at: new Date(Date.now() + 864e5 + 54e5).toISOString(), max_players: 10, price_kwd: 2, venue_id: anyGame?.venue_id, visibility: 'public', approval_mode: 'auto' }));
  res.matchPriceHigh = await code(() => api.createMatch(ids.organizer, { sport: 'football', title: 'Pricey', format: 'football_5v5', skill_level: 'all', starts_at: new Date(Date.now() + 864e5).toISOString(), ends_at: new Date(Date.now() + 864e5 + 54e5).toISOString(), max_players: 10, price_kwd: 500, venue_id: anyGame?.venue_id, visibility: 'public', approval_mode: 'auto' }));
  res.matchNaNCapacity = await code(() => api.createMatch(ids.organizer, { sport: 'football', title: 'NaN', format: 'football_5v5', skill_level: 'all', starts_at: new Date(Date.now() + 864e5).toISOString(), ends_at: new Date(Date.now() + 864e5 + 54e5).toISOString(), max_players: NaN, price_kwd: 2, venue_id: anyGame?.venue_id, visibility: 'public', approval_mode: 'auto' }));
  res.weightsNoReason = await code(() => api.setDemandWeights(ids.admin, { timeToFillHours: 10 }, ''));
  res.weightsNaN = await code(() => api.setDemandWeights(ids.admin, { timeToFillHours: NaN }, 'testing validation'));
  res.weightsUnknownKey = await code(() => api.setDemandWeights(ids.admin, { notAWeight: 1 }, 'testing validation'));
  res.weightsOk = await code(() => api.setDemandWeights(ids.admin, { timeToFillHours: 10 }, 'tuning after review'));
  res.feedResetNonAdmin = await code(() => api.resetFeedWeights(ids.organizer, 'nope'));

  // --- reasons required ---
  res.venueRejectNoReason = await code(() => api.reviewVenue(ids.admin, 'venue-x', 'reject', ''));
  res.restoreNoReason = await code(() => api.restoreUser(ids.admin, ids.user, ''));

  // --- self review ---
  const apps = JSON.parse(localStorage.getItem('playora.mock.applications.v1') || '[]');
  res.appsSeen = apps.length;
  return res;
}, IDS);

ok('non-admin cannot read the approval queue', out.adminOnly === 'E_ADMINISTRATOR_AUTHORIZATION_REQUIRED', out.adminOnly);
ok('analyst can read BI', out.analystBI === 'accepted', out.analystBI);
ok('analyst cannot read the approval queue', out.analystQueue === 'E_ADMINISTRATOR_AUTHORIZATION_REQUIRED', out.analystQueue);
ok('organizer cannot sanction outside their match', /E_MATCH_NOT_FOUND|E_YOU_ARE_NOT_AUTHORIZED/.test(out.organizerSanctionOutsideMatch), out.organizerSanctionOutsideMatch);
ok('series analytics need a caller', /E_YOU_ARE_NOT_AUTHORIZED|E_SERIES_NOT_FOUND/.test(out.seriesAnalyticsNoCaller), out.seriesAnalyticsNoCaller);
ok('match cannot start in the past', out.matchPastStart === 'E_MATCH_CANNOT_START_IN_PAST', out.matchPastStart);
ok('unknown sport rejected', out.matchBadEnum === 'E_INVALID_MATCH_OPTION', out.matchBadEnum);
ok('price above the cap rejected (not clamped)', out.matchPriceHigh === 'E_PRICE_OUT_OF_RANGE', out.matchPriceHigh);
ok('non-integer capacity rejected', out.matchNaNCapacity === 'E_PLAYERS_REQUIRED_MUST_BE_BETWEEN_2', out.matchNaNCapacity);
ok('weight change needs a reason', out.weightsNoReason === 'E_A_REASON_IS_REQUIRED', out.weightsNoReason);
ok('valid weight change accepted', out.weightsOk === 'accepted', out.weightsOk);
ok('non-admin cannot reset feed weights', out.feedResetNonAdmin === 'E_ADMINISTRATOR_AUTHORIZATION_REQUIRED', out.feedResetNonAdmin);
ok('NaN weight rejected', out.weightsNaN === 'E_INVALID_VALUE', out.weightsNaN);
ok('unknown weight key rejected', out.weightsUnknownKey === 'E_INVALID_VALUE', out.weightsUnknownKey);
ok('venue rejection needs a reason', /E_A_REASON_IS_REQUIRED|E_VENUE_NOT_FOUND/.test(out.venueRejectNoReason), out.venueRejectNoReason);
ok('restore needs a reason', /E_A_REASON_IS_REQUIRED|E_NO_SUCH_PLAYER/.test(out.restoreNoReason), out.restoreNoReason);
ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
await browser.close();
console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
