// Backend rule checks executed inside the real runtime via the Metro require (__r).
// Run: node tools/rules.mjs
import { openApp, IDS } from './smoke.mjs';
import fs from 'node:fs';
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

  // --- private match visibility (F-PRIV: `visibility` used to be decorative) ---
  try {
    const vs = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const pg = await api.createMatch(ids.organizer, {
      title: 'Rules private match', sport: 'football', venue_id: vs[0].id,
      starts_at: new Date(Date.now() + 864e5).toISOString(),
      ends_at: new Date(Date.now() + 864e5 + 54e5).toISOString(),
      max_players: 10, price_kwd: 0, visibility: 'private', format: '5v5',
    });
    res.privMinted = !!pg.invite_code;
    const read = async (uid) => { const g = await api.fetchGame(pg.id, uid); return g === null ? null : g; };
    res.privOutsider = await read(ids.user);
    const own = await read(ids.organizer);
    res.privOwnerSees = !!own && own.id === pg.id;
    res.privOwnerCode = !!(own && own.invite_code);
    const adm = await read(ids.admin);
    res.privAdminSees = !!adm && adm.id === pg.id;
    res.privAdminCode = !!(adm && adm.invite_code);
    await api.joinMatch(pg.id, ids.user);
    const joined = await read(ids.user);
    res.privParticipantSees = !!joined && joined.id === pg.id;
    res.privParticipantCode = !!(joined && joined.invite_code);
  } catch (e) { res.privError = e.code || e.message; }

  // mockGetMatchInvite took no caller at all, and Xn mints a code on demand - so any session could
  // ask a private match for an invite link and have one created for it.
  try {
    // rules.mjs boots as admin, so demo seeding assigns no games to the organizer - make one.
    const vs2 = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const ig = await api.createMatch(ids.organizer, {
      title: 'Rules invite match', sport: 'football', venue_id: vs2[0].id,
      starts_at: new Date(Date.now() + 21 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 21 * 864e5 + 54e5).toISOString(),
      max_players: 10, price_kwd: 0, visibility: 'private', format: '5v5',
    });
    res.inviteNoCaller = await code(() => api.fetchMatchInvite(ig.id));
    res.inviteStranger = await code(() => api.fetchMatchInvite(ig.id, ids.user));
    const owned = await api.fetchMatchInvite(ig.id, ids.organizer).catch(() => null);
    res.inviteOwner = !!(owned && owned.code);
    const asAdmin = await api.fetchMatchInvite(ig.id, ids.admin).catch(() => null);
    res.inviteAdmin = !!(asAdmin && asAdmin.code);
  } catch (e) {
    res.inviteErr = e.message;
  }

  // splitAmounts 'custom' summed organizer-supplied amounts with no upper bound and clamped the
  // negative correction to zero, so the surplus survived: a 12 KWD court split 50/50/0 collected 100.
  {
    const sp = __r(668).splitAmounts;
    const call = (o) => { try { return sp(o); } catch (e) { return e.code || e.message; } };
    res.splitOver = call({ mode: 'custom', total: 12, payerIds: ['p1', 'p2', 'org'], organizerId: 'org', custom: { p1: 50, p2: 50, org: 0 } });
    res.splitExact = call({ mode: 'custom', total: 12, payerIds: ['p1', 'p2', 'org'], organizerId: 'org', custom: { p1: 6, p2: 6, org: 0 } });
    res.splitUnder = call({ mode: 'custom', total: 12, payerIds: ['p1', 'p2', 'org'], organizerId: 'org', custom: { p1: 4, p2: 4, org: 0 } });
    res.splitEqual = call({ mode: 'split_equal', total: 10, payerIds: ['p1', 'p2', 'org'], organizerId: 'org' });
  }

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

  // --- an organizer-typed venue is not published to the directory until reviewed (F-ORG1-19) ---
  const customName = `Probe Pitch ${Date.now().toString(36)}`;
  const customGame = await api
    .createMatch(ids.organizer, {
      sport: 'football', title: 'Custom venue probe', format: 'football_5v5', skill_level: 'all',
      starts_at: new Date(Date.now() + 3456e5).toISOString(),
      ends_at: new Date(Date.now() + 3456e5 + 54e5).toISOString(),
      max_players: 10, price_kwd: 2, visibility: 'public', approval_mode: 'auto',
      custom_venue: { name: customName, lat: 29.37, lng: 47.98, address: 'Probe Street, Salmiya' },
    })
    .catch((e) => ({ error: e.message }));
  res.customVenueCreated = !customGame?.error;
  const venueRow = JSON.parse(localStorage.getItem('playora.mock.venues.v1') || '[]').find((v) => v.name === customName);
  res.customVenueId = venueRow?.id ?? null;
  res.customVenueListed = venueRow ? venueRow.listed : 'no-row';
  res.customVenueCreatedBy = venueRow ? venueRow.created_by : 'no-row';
  const directory = await api.fetchVenues().catch(() => []);
  res.customVenueInDirectory = directory.some((v) => v.id === res.customVenueId);
  const queue = await api.fetchPendingVenues(ids.admin).catch(() => []);
  res.customVenueInQueue = queue.some((r) => r.venue.id === res.customVenueId && r.profile.status === 'pending');
  // Approving it publishes it.
  if (res.customVenueId) await code(() => api.reviewVenue(ids.admin, res.customVenueId, 'approve', ''));
  const afterRow = JSON.parse(localStorage.getItem('playora.mock.venues.v1') || '[]').find((v) => v.id === res.customVenueId);
  res.customVenueListedAfterApproval = afterRow ? afterRow.listed : 'no-row';
  const directory2 = await api.fetchVenues().catch(() => []);
  res.customVenueInDirectoryAfter = directory2.some((v) => v.id === res.customVenueId);

  // --- the privileged action log is admin-only and readable in the product (F-XC-7 / F-ADM1-32) ---
  res.auditNonAdmin = await code(() => api.fetchAdminAuditLog(ids.user, {}));
  res.auditAnalyst = await code(() => api.fetchAdminAuditLog(ids.analyst, {}));
  res.auditAdmin = await code(() => api.fetchAdminAuditLog(ids.admin, {}));
  const log = await api.fetchAdminAuditLog(ids.admin, {}).catch(() => null);
  res.auditHasRows = (log?.rows?.length ?? 0) > 0;
  res.auditRowShape = log?.rows?.[0]
    ? ['id', 'at', 'type', 'actor_id', 'target_id', 'device', 'meta'].every((k) => k in log.rows[0])
    : false;
  res.auditNamesActor = log?.rows?.some((r) => !!r.actor_id) ?? false;
  const narrowed = log?.rows?.[0]
    ? await api.fetchAdminAuditLog(ids.admin, { type: log.rows[0].type }).catch(() => null)
    : null;
  res.auditTypeFilter = narrowed ? narrowed.rows.every((r) => r.type === log.rows[0].type) : false;
  const noMatch = await api.fetchAdminAuditLog(ids.admin, { query: 'zzzz-no-such-actor' }).catch(() => null);
  res.auditQueryFilter = (noMatch?.rows?.length ?? -1) === 0;

  // --- phone auth round-trip works end to end (consumer audit, Critical) ---------------------
  // Nothing exercised this path before: the harness injects a ready-made session, so a bug that made
  // every phone sign-in and sign-up fail shipped unnoticed.
  const phone = '+96550001234';
  const store = __r(631);
  const req = await store.mockRequestOtp(phone).catch((e) => ({ error: e.message }));
  res.otpRequested = !req?.error;
  res.otpDemoCode = req?.demo_code || '';
  res.otpWrongCode = await code(() => store.mockVerifyOtp(phone, '000000', 'Probe User', 'male', '1998-04-12', true));
  // the wizard checks the code first, then confirms with the profile details
  await store.mockCheckOtp(phone, res.otpDemoCode).catch(() => {});
  const ok = await store
    .mockVerifyOtp(phone, res.otpDemoCode, 'Probe User', 'male', '1998-04-12', true)
    .catch((e) => ({ error: e.message }));
  res.otpAccepted = !ok?.error;
  res.otpError = ok?.error || '';
  const live = await store.loadSession().catch(() => null);
  res.otpSessionHasExpiry = typeof live?.expires_at === 'number';
  // a used code must not work twice
  res.otpReplay = await code(() => store.mockVerifyOtp(phone, res.otpDemoCode, 'Probe User', 'male', '1998-04-12', true));
  // The RETURNING-user path is a different branch from account creation and must be exercised too:
  // a shadowed variable there threw "Cannot access 'c' before initialization" for every existing
  // account while new sign-ups worked fine, so testing only the create path missed it entirely.
  const again = await store.mockRequestOtp(phone).catch((e) => ({ error: e.message }));
  res.otpReturningRequested = !again?.error;
  const chk2 = await store.mockCheckOtp(phone, again.demo_code).catch((e) => ({ error: e.message }));
  res.otpReturningExisting = chk2?.existing === true;
  const back = await store
    .mockVerifyOtp(phone, again.demo_code, 'Live Probe', 'male', '1997-03-02', true)
    .catch((e) => ({ error: e.message }));
  res.otpReturningSignedIn = back?.existing === true && !!back?.user?.id;
  res.otpReturningError = back?.error || '';
  const liveAgain = await store.loadSession().catch(() => null);
  res.otpReturningHasExpiry = typeof liveAgain?.expires_at === 'number';

  // a session with no expiry stamp must not be honoured
  localStorage.setItem('secure.playora_session', JSON.stringify({ user: { id: ids.user, email: 'x@y.z' }, token: 't' }));
  res.sessionNoExpiryRejected = (await store.loadSession().catch(() => null)) === null;

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
ok('a match with a typed-in venue is created', out.customVenueCreated === true, String(out.customVenueCreated));
ok('the typed-in venue records the organizer, not its own name', out.customVenueCreatedBy === IDS.organizer, String(out.customVenueCreatedBy));
ok('the typed-in venue is withheld from the directory', out.customVenueListed === false, String(out.customVenueListed));
ok('the typed-in venue is absent from the public venue list', out.customVenueInDirectory === false, String(out.customVenueInDirectory));
ok('the typed-in venue lands in the admin review queue', out.customVenueInQueue === true, String(out.customVenueInQueue));
ok('approving the registration lists the venue', out.customVenueListedAfterApproval === true, String(out.customVenueListedAfterApproval));
ok('the approved venue appears in the public venue list', out.customVenueInDirectoryAfter === true, String(out.customVenueInDirectoryAfter));
ok('a player cannot read the admin activity log', out.auditNonAdmin === 'E_ADMINISTRATOR_AUTHORIZATION_REQUIRED', out.auditNonAdmin);
ok('an analyst cannot read the admin activity log', out.auditAnalyst === 'E_ADMINISTRATOR_AUTHORIZATION_REQUIRED', out.auditAnalyst);
ok('an admin can read the admin activity log', out.auditAdmin === 'accepted', out.auditAdmin);
ok('the log has rows after this run\u2019s admin actions', out.auditHasRows === true, String(out.auditHasRows));
ok('each row carries actor, target, device and meta', out.auditRowShape === true, String(out.auditRowShape));
ok('rows name the acting admin by id', out.auditNamesActor === true, String(out.auditNamesActor));
ok('filtering by action type narrows the log', out.auditTypeFilter === true, String(out.auditTypeFilter));
ok('a free-text query that matches nothing returns nothing', out.auditQueryFilter === true, String(out.auditQueryFilter));
ok('an OTP can be requested', out.otpRequested === true, String(out.otpRequested));
ok('a wrong OTP is rejected', out.otpWrongCode === 'OTP_WRONG', String(out.otpWrongCode));
ok('a correct OTP creates the account', out.otpAccepted === true, out.otpError || 'ok');
ok('the OTP session carries an expiry', out.otpSessionHasExpiry === true, String(out.otpSessionHasExpiry));
ok('a used OTP cannot be replayed', /OTP_EXPIRED|OTP_WRONG/.test(out.otpReplay), String(out.otpReplay));
ok('a returning user can request a code', out.otpReturningRequested === true, String(out.otpReturningRequested));
ok('the backend recognises the existing account', out.otpReturningExisting === true, String(out.otpReturningExisting));
ok('a returning user signs in', out.otpReturningSignedIn === true, out.otpReturningError || 'ok');
ok('the returning session carries an expiry', out.otpReturningHasExpiry === true, String(out.otpReturningHasExpiry));
ok('a session with no expiry is rejected', out.sessionNoExpiryRejected === true, String(out.sessionNoExpiryRejected));
ok('a private match is invisible to an outsider', out.privOutsider === null, String(out.privOutsider));
ok('the organizer still sees their private match', out.privOwnerSees === true, out.privError || String(out.privOwnerSees));
ok('the organizer still sees the invite code', out.privOwnerCode === true, String(out.privOwnerCode));
ok('an admin can read a private match', out.privAdminSees === true, String(out.privAdminSees));
ok('the invite code is withheld from an admin', out.privAdminCode === false, String(out.privAdminCode));
ok('a participant can read the match they joined', out.privParticipantSees === true, String(out.privParticipantSees));
ok('the invite code is withheld from a participant', out.privParticipantCode === false, String(out.privParticipantCode));
ok('a match invite without a caller is refused', out.inviteNoCaller === 'E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE', String(out.inviteNoCaller));
ok('a stranger cannot read a match invite', out.inviteStranger === 'E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE', String(out.inviteStranger));
ok('the organizer still gets the invite code', out.inviteOwner === true, String(out.inviteOwner));
ok('an admin still gets the invite code', out.inviteAdmin === true, String(out.inviteAdmin));
const sum = (o) => Object.values(o).reduce((a, b) => a + b, 0);
ok('a custom split over the total is refused', out.splitOver === 'E_SPLIT_EXCEEDS_TOTAL', JSON.stringify(out.splitOver));
ok('a custom split that matches the total is allowed', typeof out.splitExact === 'object' && Math.abs(sum(out.splitExact) - 12) < 5e-4, JSON.stringify(out.splitExact));
ok('an under-split still tops the organizer up to the total', typeof out.splitUnder === 'object' && Math.abs(sum(out.splitUnder) - 12) < 5e-4, JSON.stringify(out.splitUnder));
ok('split_equal over three payers still sums to the total', typeof out.splitEqual === 'object' && Math.abs(sum(out.splitEqual) - 10) < 5e-4, JSON.stringify(out.splitEqual));
// --- one definition of "was in this match" ---
// The test appeared fourteen times in two shapes and eight of them left out the status guard, so a
// cancelled booking counted the moment anyone wrote an attendance mark onto it.
{
  const src = fs.readFileSync(new URL('../bundle-src/631.js', import.meta.url), 'utf8');
  const loose = src.match(/\("confirmed" === \w+\.status \|\| null != \w+\.attendance\)/g) || [];
  const looseNeg = src.match(/\("confirmed" !== \w+\.status && null == \w+\.attendance\)/g) || [];
  ok('no unguarded participant predicate survives', loose.length === 0 && looseNeg.length === 0, `${loose.length} positive, ${looseNeg.length} negated`);
  ok('they all go through one helper', (src.match(/countsAsParticipant9/g) || []).length >= 14, String((src.match(/countsAsParticipant9/g) || []).length));
}

// --- dead weight ---
// 9002 replaced ./organizer/new.tsx with a redirect, but the third create wizard it replaced was still
// registered and still shipped. vercel.json sends the whole file with Cache-Control: no-store, so it
// was re-downloaded on every page load, on mobile data, in Kuwait.
{
  const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  ok('the retired create wizard is gone', !/\},\s*2468\s*,\s*\[/.test(html), 'module 2468 still registered');
  ok('and nothing still requires it', !/\},\s*\d+\s*,\s*\[[\d,\s]*\b2468\b/.test(html), 'a module still depends on 2468');
}
ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
await browser.close();

// --- i18n: en and ar must agree, key for key and placeholder for placeholder ---
// Four refund strings interpolated %{hours} in English and hardcoded the number in Arabic, so moving
// SEAT_REFUND_CUTOFF_HOURS would have told the two languages different refund windows. A locale that
// silently drops a placeholder states a different fact, so this is a parity check, not a lint.
{
  const src = fs.readFileSync(new URL('../bundle-src/909.js', import.meta.url), 'utf8');
  // One Arabic value contains a double quote and is therefore single-quoted; accept both forms.
  const entry = /^ {8}(\w+):\s*\n? *(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'),$/gm;
  const seen = new Map();
  for (const m of src.matchAll(entry)) {
    if (!seen.has(m[1])) seen.set(m[1], []);
    seen.get(m[1]).push(m[2] ?? m[3]);
  }
  const pairs = [...seen].filter(([, v]) => v.length === 2);
  const ph = (v) => [...new Set([...v.matchAll(/%\{(\w+)\}/g)].map((x) => x[1]))].sort().join(',');
  const mismatched = pairs.filter(([, [en, ar]]) => ph(en) !== ph(ar)).map(([k]) => k);
  const lonely = [...seen].filter(([, v]) => v.length !== 2).map(([k]) => k);
  ok('every translation key has both locales', lonely.length === 0, lonely.slice(0, 5).join(','));
  ok('both locales interpolate the same placeholders', mismatched.length === 0, mismatched.slice(0, 5).join(','));
  ok('the parity check actually read the table', pairs.length > 3000, String(pairs.length));
}
console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
