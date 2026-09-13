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

  // --- organizer reads are scoped to the organizer (F-ORG1-16) ---
  // Seed a private match so the invite-code assertions below are not vacuous.
  res.privateCreated = await code(() =>
    api.createMatch(ids.organizer, {
      sport: 'football',
      title: 'Private rules probe',
      format: 'football_5v5',
      skill_level: 'all',
      starts_at: new Date(Date.now() + 1728e5).toISOString(),
      ends_at: new Date(Date.now() + 1728e5 + 54e5).toISOString(),
      max_players: 10,
      price_kwd: 2,
      venue_id: anyGame?.venue_id,
      visibility: 'private',
      approval_mode: 'auto',
    }),
  );
  res.orgMatchesOther = await code(() => api.fetchOrganizerMatches(ids.organizer, ids.user));
  res.orgStatsOther = await code(() => api.fetchOrganizerStats(ids.organizer, ids.user));
  res.orgRatingsOther = await code(() => api.fetchOrganizerRatings(ids.organizer, ids.user));
  res.orgSeriesOther = await code(() => api.fetchOrganizerSeries(ids.organizer, ids.user));
  res.orgReferralsOther = await code(() => api.fetchOrganizerReferralStats(ids.organizer, ids.user));
  res.orgMatchesSelf = await code(() => api.fetchOrganizerMatches(ids.organizer, ids.organizer));
  res.orgMatchesAdmin = await code(() => api.fetchOrganizerMatches(ids.organizer, ids.admin));
  const selfRows = await api.fetchOrganizerMatches(ids.organizer, ids.organizer).catch(() => []);
  const adminRows = await api.fetchOrganizerMatches(ids.organizer, ids.admin).catch(() => []);
  res.selfHasPrivate = selfRows.some((r) => r.visibility === 'private');
  res.selfKeepsCode = selfRows.some((r) => r.visibility === 'private' && !!r.invite_code);
  res.adminSeesCode = adminRows.some((r) => !!r.invite_code);

  // --- the demand model statistics move with the weights (F-ADM2-12) ---
  const mk = (vis) => ({
    sport: 'football', title: 'Weighted model probe', format: 'football_5v5', skill_level: 'all',
    starts_at: new Date(Date.now() + 2592e5).toISOString(),
    ends_at: new Date(Date.now() + 2592e5 + 54e5).toISOString(),
    max_players: 10, price_kwd: 3, venue_id: anyGame?.venue_id, visibility: vis, approval_mode: 'auto',
  });
  const probe = await api.createMatch(ids.organizer, mk('public')).catch(() => null);
  res.probeCancelled = probe
    ? await code(() => api.cancelMatch(probe.id, ids.organizer, 'weighted model probe'))
    : 'no-probe';
  await api.setDemandWeights(ids.admin, { cancelLowFill: 0.3 }, 'rules baseline');
  const low = await api.fetchDemandModelStats(ids.admin).catch(() => null);
  await api.setDemandWeights(ids.admin, { cancelLowFill: 0.9 }, 'rules sensitivity probe');
  const high = await api.fetchDemandModelStats(ids.admin).catch(() => null);
  res.riskEvaluated = low?.riskEvaluated ?? 0;
  res.riskLow = low?.riskCancelledAvgPct ?? null;
  res.riskHigh = high?.riskCancelledAvgPct ?? null;
  res.fillModelLabel = low?.fillModel ?? null;
  res.fillUnchanged = low?.fillAccuracyPct === high?.fillAccuracyPct;
  await api.setDemandWeights(ids.admin, { cancelLowFill: 0.3 }, 'rules restore');

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
ok('a private probe match was created', out.privateCreated === 'accepted', out.privateCreated);
ok('another player cannot read an organizer\u2019s matches', out.orgMatchesOther === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', out.orgMatchesOther);
ok('another player cannot read an organizer\u2019s stats', out.orgStatsOther === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', out.orgStatsOther);
ok('another player cannot read an organizer\u2019s ratings', out.orgRatingsOther === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', out.orgRatingsOther);
ok('another player cannot read an organizer\u2019s series', out.orgSeriesOther === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', out.orgSeriesOther);
ok('another player cannot read an organizer\u2019s referrals', out.orgReferralsOther === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', out.orgReferralsOther);
ok('an organizer can read their own matches', out.orgMatchesSelf === 'accepted', out.orgMatchesSelf);
ok('an admin can read an organizer\u2019s matches', out.orgMatchesAdmin === 'accepted', out.orgMatchesAdmin);
ok('the organizer keeps their own invite codes', out.selfHasPrivate && out.selfKeepsCode, `private=${out.selfHasPrivate} code=${out.selfKeepsCode}`);
ok('an admin never sees an invite code', out.adminSeesCode === false, String(out.adminSeesCode));
ok('the probe match was cancelled', out.probeCancelled === 'accepted', String(out.probeCancelled));
ok('the weighted model has something to score', out.riskEvaluated > 0, String(out.riskEvaluated));
ok('the weighted risk figure moves with the weights', out.riskLow !== null && out.riskHigh !== null && out.riskLow !== out.riskHigh, `${out.riskLow} -> ${out.riskHigh}`);
ok('the baseline fill tiles are labelled as baseline', out.fillModelLabel === 'baseline', String(out.fillModelLabel));
ok('the baseline fill accuracy does not move with the weights', out.fillUnchanged === true, String(out.fillUnchanged));
ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
await browser.close();
console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
