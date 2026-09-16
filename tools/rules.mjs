// Backend rule checks executed inside the real runtime via the Metro require (__r).
// Run: node tools/rules.mjs
import { openApp, IDS, bookingInvariants, assertBookingInvariants } from './smoke.mjs';
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

    // The gate lived inside mockGetGame and nowhere else, so every sibling reader of the same match
    // answered a stranger in full. mockGetGameScreen fetched the roster, the lineup, the fit score
    // and the evaluation targets before it looked at what the gate had returned: game came back null
    // and, next to it, every player's name and id and the board they were standing on. Asked
    // directly, mockGetGamePlayers and mockGetLineup did the same. One gate, applied by all three.
    const shape = async (fn) => { try { const v = await fn(); return Array.isArray(v) ? `rows:${v.length}` : 'ok'; } catch (e) { return e.code || e.message; } };
    const screen = await api.fetchGameScreen(ids.analyst, pg.id);
    res.privScreenGame = screen.game;
    res.privScreenPlayers = screen.players.length;
    res.privScreenLineup = screen.lineup;
    res.privScreenFit = screen.fit;
    res.privPlayersOutsider = await shape(() => api.fetchGamePlayers(pg.id, ids.analyst));
    res.privLineupOutsider = await shape(() => api.fetchLineup(pg.id, ids.analyst));
    res.privPlayersGuest = await shape(() => api.fetchGamePlayers(pg.id, undefined));
    res.privPlayersOrganizer = await shape(() => api.fetchGamePlayers(pg.id, ids.organizer));
    res.privPlayersParticipant = await shape(() => api.fetchGamePlayers(pg.id, ids.user));
    res.privLineupParticipant = await shape(() => api.fetchLineup(pg.id, ids.user));
    res.privPlayersAdmin = await shape(() => api.fetchGamePlayers(pg.id, ids.admin));

    // mockGetMatchParticipants took no caller at all and the facade exported it that way, so anyone
    // holding a match id could read the whole roster - every booking row with its status, and the
    // seat payment's id, method and amount. Its only caller inside 631 is the organizer match
    // screen, which already checked the caller was the organizer: the guard existed in one place
    // and was missing from the door beside it.
    const keys9 = async (fn) => { try { const v = await fn(); return Object.keys(v).map((k) => `${k}:${v[k].length}`).join(','); } catch (e) { return e.code || e.message; } };
    res.partsNoCaller = await keys9(() => api.fetchMatchParticipants(pg.id));
    res.partsOutsider = await keys9(() => api.fetchMatchParticipants(pg.id, ids.analyst));
    res.partsParticipant = await keys9(() => api.fetchMatchParticipants(pg.id, ids.user));
    res.partsOrganizer = await keys9(() => api.fetchMatchParticipants(pg.id, ids.organizer));
    res.partsAdmin = await keys9(() => api.fetchMatchParticipants(pg.id, ids.admin));
    // ...and the organizer screen keeps its graceful empty state for anyone else, rather than
    // surfacing that refusal as an error banner.
    const oms9 = await api.fetchOrganizerMatchScreen(ids.analyst, pg.id).catch((e) => ({ error: e.code || e.message }));
    res.omsOutsider = oms9.error ?? `confirmed:${oms9.participants.confirmed.length}`;

    // Every other reader that takes a match id. Checked three ways, because a reader with no data
    // refuses everyone and looks gated when it is not: the organizer is the control, and a line only
    // means anything when the organizer gets through and the outsider does not.
    const gate9 = async (fn) => { try { const v = await fn(); return null == v ? 'null' : 'served'; } catch (e) { return e.code || e.message; } };
    const readers9 = {
      awardBallot: (c) => api.fetchAwardBallot(c, pg.id),
      groupConfig: (c) => api.fetchGroupConfig(c, pg.id),
      matchAwards: (c) => api.fetchMatchAwards(pg.id, c),
      squadState: (c) => api.fetchSquadState(c, pg.id),
      gameGroups: (c) => api.fetchGameGroups(c, pg.id),
      matchActivity: (c) => api.fetchMatchActivity(c, pg.id),
    };
    res.readers = {};
    for (const [name, fn] of Object.entries(readers9))
      res.readers[name] = {
        organizer: await gate9(() => fn(ids.organizer)),
        outsider: await gate9(() => fn(ids.analyst)),
      };

    // The group reservation is a seat-taking path that never goes through ji - it pushes booking
    // rows straight in - and it used to check only that the leader was not banned or sanctioned. A
    // stranger could reserve seats on a private match, and a man on a women-only one, for himself
    // and for friends.
    const grp9 = async (caller, gameId, friendIds = []) => {
      try {
        const r = await api.createGroupBooking(caller, gameId, { friendIds, guestNames: ['Probe Guest'], paymentMode: 'split_equal' });
        return r && r.id ? 'created' : 'ok';
      } catch (e) { return e.code || e.message; }
    };
    res.groupOnPrivateByStranger = await grp9(ids.analyst, pg.id);
    // The organizer already holds a seat here, so the admin is the control: they may see the match
    // and have no booking on it, which is what a caller who should get through looks like.
    res.groupOnPrivateByAdmin = await grp9(ids.admin, pg.id);

    // Match chat had no gate on either side: reading took a game id and a channel, and the viewer id
    // only decided which bubbles drew on the right, so a signed-out visitor could read a private
    // match's whole conversation. Writing took the author's id AND display name from the payload, so
    // a stranger could post into any match under any name. The screen enforces nothing either - it
    // renders whatever id is in the URL.
    const chat9 = async (fn) => { try { const v = await fn(); return Array.isArray(v) ? `rows:${v.length}` : 'accepted'; } catch (e) { return e.code || e.message; } };
    await api.sendChatMessage({ game_id: pg.id, channel: 'general', user_id: ids.organizer, user_name: 'Test Organizer', body: 'Meet at the north gate' });
    res.chatOrganizer = await chat9(() => api.fetchChatMessages(pg.id, 'general', ids.organizer));
    res.chatParticipant = await chat9(() => api.fetchChatMessages(pg.id, 'general', ids.user));
    res.chatOutsider = await chat9(() => api.fetchChatMessages(pg.id, 'general', ids.analyst));
    res.chatGuest = await chat9(() => api.fetchChatMessages(pg.id, 'general', undefined));
    res.chatWriteOutsider = await chat9(() => api.sendChatMessage({ game_id: pg.id, channel: 'general', user_id: ids.analyst, user_name: 'Test Organizer', body: 'not mine to send' }));
    // The name on a message is the author's, not the caller's to choose.
    const posted = await api.sendChatMessage({ game_id: pg.id, channel: 'general', user_id: ids.user, user_name: 'Someone Else Entirely', body: 'signed by me' });
    res.chatAuthorName = posted.author_name;

    // /privacy-controls offers three visibility settings, previews what each one hides, and writes
    // privacy_visibility to the profile. Nothing read it. same_audience needed no wiring - oa blocks
    // every cross-audience profile read already - but connections, the restrictive one, did nothing:
    // a stranger still got the bio, the favourite sports and the stats, and the preview promises the
    // name is hidden too. Note the enforced model beside it, privacySettings.profile_visibility, is
    // set from a different screen and is a separate control.
    const prof9 = async (viewer, target) => {
      try {
        const p = await api.fetchPlayerProfile(viewer, target);
        return { name: p.display_name, bio: p.bio ?? null, limited: !!p.limited, reason: p.limited_reason ?? null };
      } catch (e) { return { err: e.code || e.message }; }
    };
    const me9 = ids.admin; // this file runs as admin, and admin is male like the stranger below
    await api.updateProfile(me9, { bio: 'I play at Salmiya on Tuesdays' }).catch(() => {});
    await api.updatePrivacy(me9, { privacy_visibility: 'connections' });
    res.privStranger = await prof9(ids.analyst, me9);
    res.privSelf = await prof9(me9, me9);
    // A follower is a connection; so is anyone who has played in the same match. ids.user holds a
    // booking on pg and so does the organizer, so they are connections of each other.
    await api.updatePrivacy(ids.organizer, { privacy_visibility: 'connections' });
    await api.updateProfile(ids.organizer, { bio: 'Host since 2019' }).catch(() => {});
    res.privPlayedWith = await prof9(ids.user, ids.organizer);
    res.privNotPlayedWith = await prof9(ids.analyst, ids.organizer);
    // and the setting off again is the control in the other direction
    await api.updatePrivacy(me9, { privacy_visibility: 'everyone' });
    res.privOpen = await prof9(ids.analyst, me9);

    // F-CSEC-5: mockSearchPlayers over the same records only filtered "private", so the listing
    // returned exactly the attributes mockGetPlayerProfile withholds from a non-follower.
    // The subject is taken from the search's own output, because two separate filters would
    // otherwise make every line below pass for the wrong reason: mockSearchPlayers drops admins and
    // analysts by role, and it drops a hardcoded list of test-account names that includes the
    // harness's own "Test Player".
    const seed9 = await api.searchPlayers(ids.organizer, {});
    const subj9 = seed9[0] ?? null;
    res.searchSubject = subj9 ? { id: subj9.id, skill: subj9.skill_level, sports: (subj9.sports || []).length } : null;
    const row9 = (rows) => (subj9 ? (rows.find((r) => r.id === subj9.id) ?? null) : null);
    if (subj9) {
      await api.setPrivacySettings(subj9.id, { profile_visibility: 'followers' });
      res.searchGated = row9(await api.searchPlayers(ids.organizer, {}));
      // ...and an attribute filter must not become a way to probe what the row hides.
      res.searchProbe = row9(await api.searchPlayers(ids.organizer, { skill: subj9.skill_level }));
      // the connections setting removes the row outright rather than reducing it
      await api.setPrivacySettings(subj9.id, { profile_visibility: 'public' });
      await api.updatePrivacy(subj9.id, { privacy_visibility: 'connections' });
      res.searchConnections = row9(await api.searchPlayers(ids.organizer, {}));
      await api.updatePrivacy(subj9.id, { privacy_visibility: 'everyone' });
      res.searchOpen = row9(await api.searchPlayers(ids.organizer, {}));
    }

    // F-CSEC-7: a review was accepted on any venue id, from any account, with no evidence the author
    // had ever been there - and reviews are averaged into the public venue rating.
    const rev9 = async (venueId, userId) => {
      try { await api.upsertReview({ venue_id: venueId, user_id: userId, rating: 1, comment: 'never been' }); return 'accepted'; }
      catch (e) { return e.code || e.message; }
    };
    const anyVenue9 = (await api.fetchVenues())[0];
    res.reviewNoVisit = await rev9(anyVenue9.id, ids.analyst);
    res.reviewNoVenue = await rev9('no-such-venue', ids.organizer);
    // the organizer created pg at vs[0] and holds a seat on it, so they have played there
    const pgVenue9 = (await api.fetchGame(pg.id, ids.organizer))?.venue_id;
    res.reviewAfterVisit = await rev9(pgVenue9, ids.organizer);

    // F-CQUAL-7: the commonest auth failure was the one message in the path that is not a code.
    res.signInBadPassword = await code(() => __r(631).mockSignIn('player@rush-x.test', 'wrong-password-here'));

    // ...and a public match is read by anyone, which is the point of the gate having a shape. This
    // takes a seeded match rather than creating one: the organizer has an hourly creation cap and
    // this file already spends two of it above.
    const open9 = (await api.fetchUpcomingGames({ userId: ids.analyst })).find((g) => 'private' !== g.visibility);
    res.pubFound = !!open9;
    if (open9) {
      res.pubPlayersOutsider = await shape(() => api.fetchGamePlayers(open9.id, ids.analyst));
      res.pubLineupOutsider = await shape(() => api.fetchLineup(open9.id, ids.analyst));
      res.pubScreenOutsider = (await api.fetchGameScreen(ids.analyst, open9.id)).game !== null;
    }
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
  res.customVenueError = customGame?.error ?? '';
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
ok('a match with a typed-in venue is created', out.customVenueCreated === true, out.customVenueError || String(out.customVenueCreated));
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
ok('a withheld match yields no screen payload at all', out.privScreenGame === null && out.privScreenPlayers === 0 && out.privScreenLineup === null && out.privScreenFit === null, `players=${out.privScreenPlayers} lineup=${out.privScreenLineup !== null} fit=${out.privScreenFit !== null}`);
ok('an outsider cannot read a private match roster', out.privPlayersOutsider === 'E_MATCH_NOT_FOUND', String(out.privPlayersOutsider));
ok('an outsider cannot read a private match lineup', out.privLineupOutsider === 'E_MATCH_NOT_FOUND', String(out.privLineupOutsider));
ok('nor can a signed-out visitor', out.privPlayersGuest === 'E_MATCH_NOT_FOUND', String(out.privPlayersGuest));
ok('the organizer still reads their own roster', /^rows:[1-9]/.test(String(out.privPlayersOrganizer)), String(out.privPlayersOrganizer));
ok('a participant still reads the roster', /^rows:[1-9]/.test(String(out.privPlayersParticipant)), String(out.privPlayersParticipant));
ok('a participant still reads the lineup', out.privLineupParticipant === 'ok', String(out.privLineupParticipant));
ok('an admin still reads the roster', /^rows:[1-9]/.test(String(out.privPlayersAdmin)), String(out.privPlayersAdmin));
ok('the participant roster needs a caller', out.partsNoCaller === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', String(out.partsNoCaller));
ok('a stranger cannot read the participant roster', out.partsOutsider === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', String(out.partsOutsider));
ok('nor can a player who is only in the match', out.partsParticipant === 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW', String(out.partsParticipant));
ok('the organizer reads their own participant roster', /confirmed:[1-9]/.test(String(out.partsOrganizer)), String(out.partsOrganizer));
ok('an admin reads it too', /confirmed:[1-9]/.test(String(out.partsAdmin)), String(out.partsAdmin));
ok('the organizer match screen stays empty rather than erroring', out.omsOutsider === 'confirmed:0', String(out.omsOutsider));
ok('the organizer reads the match chat', /^rows:[1-9]/.test(String(out.chatOrganizer)), String(out.chatOrganizer));
ok('a participant reads it too', /^rows:[1-9]/.test(String(out.chatParticipant)), String(out.chatParticipant));
ok('an outsider cannot read the match chat', out.chatOutsider === 'E_MATCH_NOT_FOUND', String(out.chatOutsider));
ok('nor can a signed-out visitor', out.chatGuest === 'E_MATCH_NOT_FOUND', String(out.chatGuest));
ok('an outsider cannot post into it', out.chatWriteOutsider === 'E_MATCH_NOT_FOUND', String(out.chatWriteOutsider));
ok('a message is signed with the author\u2019s own name', out.chatAuthorName === 'Test Player', String(out.chatAuthorName));
ok('the search probe found a subject with attributes to hide', out.searchSubject && out.searchSubject.sports > 0, JSON.stringify(out.searchSubject));
ok('a followers-only profile is reduced in search, not detailed', out.searchGated?.limited === true && out.searchGated?.skill_level === 'all' && (out.searchGated?.sports || []).length === 0 && out.searchGated?.area === null, JSON.stringify(out.searchGated));
ok('and an attribute filter cannot probe what it hides', out.searchProbe === null, JSON.stringify(out.searchProbe));
ok('a connections-only profile is absent from search', out.searchConnections === null, JSON.stringify(out.searchConnections));
ok('an open profile is returned in full (the control)', out.searchOpen?.limited === false && (out.searchOpen?.sports || []).length > 0, JSON.stringify(out.searchOpen));
ok('a review needs the venue to exist', out.reviewNoVenue === 'E_VENUE_NOT_FOUND', String(out.reviewNoVenue));
ok('a review needs the author to have played there', out.reviewNoVisit === 'E_ONLY_PLAYERS_WHO_HAVE_PLAYED_HERE', String(out.reviewNoVisit));
ok('someone who has played there can review it (the control)', out.reviewAfterVisit === 'accepted', String(out.reviewAfterVisit));
ok('a bad password throws a mappable code', out.signInBadPassword === 'E_INVALID_EMAIL_OR_PASSWORD', String(out.signInBadPassword));
ok('the connections setting hides the profile from a stranger', out.privStranger?.limited === true && out.privStranger?.reason === 'connections', JSON.stringify(out.privStranger));
ok('and hides the name, as the screen previews', out.privStranger?.name === 'Player', String(out.privStranger?.name));
ok('the owner still sees their own profile', out.privSelf?.limited === false, JSON.stringify(out.privSelf));
ok('someone they played with still sees it', out.privPlayedWith?.limited === false && !!out.privPlayedWith?.bio, JSON.stringify(out.privPlayedWith));
ok('someone they have not still does not', out.privNotPlayedWith?.limited === true, JSON.stringify(out.privNotPlayedWith));
ok('and turning the setting off opens it again (the control)', out.privOpen?.limited === false && !!out.privOpen?.bio, JSON.stringify(out.privOpen));
ok('a stranger cannot reserve a group on a private match', out.groupOnPrivateByStranger === 'E_MATCH_NOT_FOUND', String(out.groupOnPrivateByStranger));
ok('an admin still can (the control)', out.groupOnPrivateByAdmin === 'created', String(out.groupOnPrivateByAdmin));
for (const [name, r] of Object.entries(out.readers || {})) {
  ok(`${name}: the organizer gets through (the control)`, r.organizer === 'served', String(r.organizer));
  ok(`${name}: an outsider does not`, r.outsider !== 'served', String(r.outsider));
}
ok('the open-match probe found a match to read', out.pubFound === true, String(out.pubFound));
ok('a public match roster is open', /^rows:\d/.test(String(out.pubPlayersOutsider)), String(out.pubPlayersOutsider));
ok('a public match lineup is open', out.pubLineupOutsider === 'ok', String(out.pubLineupOutsider));
ok('a public match screen is open', out.pubScreenOutsider === true, String(out.pubScreenOutsider));
ok('a match invite without a caller is refused', out.inviteNoCaller === 'E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE', String(out.inviteNoCaller));
ok('a stranger cannot read a match invite', out.inviteStranger === 'E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE', String(out.inviteStranger));
ok('the organizer still gets the invite code', out.inviteOwner === true, String(out.inviteOwner));
ok('an admin still gets the invite code', out.inviteAdmin === true, String(out.inviteAdmin));
const sum = (o) => Object.values(o).reduce((a, b) => a + b, 0);
ok('a custom split over the total is refused', out.splitOver === 'E_SPLIT_EXCEEDS_TOTAL', JSON.stringify(out.splitOver));
ok('a custom split that matches the total is allowed', typeof out.splitExact === 'object' && Math.abs(sum(out.splitExact) - 12) < 5e-4, JSON.stringify(out.splitExact));
ok('an under-split still tops the organizer up to the total', typeof out.splitUnder === 'object' && Math.abs(sum(out.splitUnder) - 12) < 5e-4, JSON.stringify(out.splitUnder));
ok('split_equal over three payers still sums to the total', typeof out.splitEqual === 'object' && Math.abs(sum(out.splitEqual) - 10) < 5e-4, JSON.stringify(out.splitEqual));
// --- dead code that encoded a different cancellation policy ---
{
  const src = fs.readFileSync(new URL('../bundle-src/631.js', import.meta.url), 'utf8');
  ok('legacyCancelMatchBody is gone', !/legacyCancelMatchBody/.test(src), 'still defined in 631');
}

// --- the conduct gate has a code, a mapping and both locales ---
{
  const map = fs.readFileSync(new URL('../bundle-src/674.js', import.meta.url), 'utf8');
  const loc = fs.readFileSync(new URL('../bundle-src/909.js', import.meta.url), 'utf8');
  ok('E_ACCEPT_THE_CODE_OF_CONDUCT is mapped', /E_ACCEPT_THE_CODE_OF_CONDUCT:\s*"seAcceptTheCodeOfConduct"/.test(map), 'missing from 674');
  ok('and has a string in both locales', (loc.match(/^ {8}seAcceptTheCodeOfConduct:/gm) || []).length === 2, String((loc.match(/^ {8}seAcceptTheCodeOfConduct:/gm) || []).length));
}

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
// --- the facade against its call sites ---
// 671 is the only door between the screens and the backend, and nothing shrinks it. A screen gets
// rewritten, its last caller goes with it, and the export stays: still exported, still shipped, still
// re-downloaded on every load because vercel.json sends the whole file with Cache-Control: no-store.
// Sixty-seven of the 377 exports already have no caller anywhere in the bundle. This does not demand
// they be deleted - some are staff tools waiting for a screen - it demands the number stop growing.
// A new orphan means either a call site that was dropped by accident or an export written before the
// screen that needs it; both want a moment's thought rather than a silent accumulation.
{
  const facade = fs.readFileSync(new URL('../bundle-src/671.js', import.meta.url), 'utf8');
  const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const exported = [...new Set([...facade.matchAll(/^\s*e\.(\w+) =/gm)].map((m) => m[1]))];
  // Cut 671's own chunk out of the bundle so its definitions do not count as call sites.
  const starts = [...html.matchAll(/__d\(\s*function\s*\([\w$,\s]*\)\s*\{/g)].map((m) => m.index).concat(html.length);
  let own = '';
  for (let i = 0; i < starts.length - 1; i += 1) {
    const chunk = html.slice(starts[i], starts[i + 1]);
    const reg = [...chunk.matchAll(/\},\s*(\d+),\s*\[[\d,\s]*\],?\s*\);/g)].pop();
    if (reg && reg[1] === '671') { own = chunk; break; }
  }
  const rest = html.replace(own, '');
  const orphans = exported.filter((n) => !new RegExp(`\\b${n}\\b`).test(rest));

  // The names that already had no caller when this check went in. Shrink it; do not grow it.
  const KNOWN = [
  'adminGrantCredit', 'adminRemoveAchievement', 'adminSuspendTeam', 'auditReplacementLeak',
  'auditSeatConsistency', 'blockCourtTime', 'cocVersion', 'counterBattleResult', 'createBooking',
  'deleteSavedGroup', 'deleteTeamChat', 'discardMatchDraft', 'fetchAdminCompatibility',
  'fetchAllRewardsAdmin', 'fetchAllTeamsAdmin', 'fetchConciergeNotificationPlan',
  'fetchCrossPartitionGrants', 'fetchDemandPrediction', 'fetchFollowRequests', 'fetchGame',
  'fetchGamePlayers', 'fetchGroupAnalytics', 'fetchJoinRequestIntel', 'fetchLoyaltyAdminStats',
  'fetchLoyaltyRules', 'fetchMatchAwards', 'fetchMatchDraft', 'fetchMatchFeed', 'fetchMatchParticipants',
  'fetchMyReplacementOffers', 'fetchMySeatPayment', 'fetchNeedPlayerFeed', 'fetchNpnCandidates',
  'fetchOrganizerBookings', 'fetchOrganizerTrustScore', 'fetchPassportPrivacy', 'fetchRecommendedGames',
  'fetchReplacementAdminStats', 'fetchSkillEvalTargets', 'fetchSkillFit', 'fetchTeamAdminStats',
  'fetchTeams', 'fetchUnreadDMCount', 'fetchUserPosts', 'grantCrossPartition', 'listLineupTemplates',
  'listSavedGroups', 'loyaltyActions', 'loyaltyTiers', 'openAwardVoting', 'pinTeamChat', 'rateOrganizer',
  'recordDemandOutcome', 'refundPayment', 'remediateReplacementLeak', 'revokeCrossPartition',
  'rewardCategories', 'saveMatchDraft', 'setEarnRule', 'setFeedWeights', 'setReplacementRadius',
  'setRewardActive', 'syncLoyalty', 'touchPresence', 'unblockCourtTime', 'updateTeam', 'upsertReward'
  ];
  const added = orphans.filter((n) => !KNOWN.includes(n));
  const fixed = KNOWN.filter((n) => !orphans.includes(n));
  ok('the facade chunk was found', own.length > 1000, String(own.length));
  ok('no new orphaned facade export', added.length === 0, added.join(','));
  ok('the orphan list has no stale entries', fixed.length === 0, `now called, drop from KNOWN: ${fixed.join(',')}`);
}

// --- every path that writes a booking row goes through the same gate ---
// Four functions besides ji push into Qt.bookings, and each had grown its own guard list. The group
// reservation's had no audience or visibility check at all; the replacement path's was hand-written
// and had drifted, missing the Code of Conduct check the others applied. A seat is a seat, so they
// all call assertMayHoldSeat9. This pins the set: a new writer, or an old one that stops calling the
// helper, fails here rather than at whatever it lets through.
{
  const src = fs.readFileSync(new URL('../bundle-src/631.js', import.meta.url), 'utf8');
  const lines = src.split('\n');
  let fn = 'top';
  const writers = new Set();
  for (const line of lines) {
    const m = line.match(/^\s*(?:r\.(mock\w+)\s*=|(?:const\s+)?(\w+) = async \(|(\w+) = async \()/);
    if (m) fn = m[1] || m[2] || m[3];
    if (line.includes('Qt.bookings.push(')) writers.add(fn);
  }
  // Wi seats the organizer on the match they are creating; an and Fo are the demo seeding and reset.
  const EXEMPT = new Set(['Wi', 'an', 'Fo']);
  const GATED = ['ji', 'Wr', 'mockAcceptReplacement', 'mockCreateGroupBooking'];
  const found = [...writers].filter((w) => !EXEMPT.has(w)).sort();
  ok('the set of booking writers is unchanged', JSON.stringify(found) === JSON.stringify([...GATED].sort()), found.join(','));
  const helper = (src.match(/assertMayHoldSeat9\(/g) || []).length;
  ok('and they all reach the one seat gate', helper >= GATED.length + 1, `${helper} call sites`);
}

// --- F-CSEC-10: every path that adopts a real session clears the guest record ---
// This one is checked structurally rather than behaviourally: the three call sites live on the
// AuthProvider's context value, which a page evaluate cannot reach without rendering through React.
// The behaviour is three call sites and one helper, so the check is that none of them is missing it.
// playora.guest_session used to outlive the guest phase, and when the real 30-day session lapsed the
// stale guest identity was restored in its place, silently.
{
  const src = fs.readFileSync(new URL('../bundle-src/630.js', import.meta.url), 'utf8');
  const helper = /const G9 = async \(s9\) => \{[\s\S]*?startsWith\("guest:"\)\) await \(0, h\.clearGuestSession\)\(\);/.test(src);
  ok('the guest-clear helper exists and skips guest sessions', helper, 'G9 missing or changed shape');
  for (const site of ['signIn', 'signUp', 'adoptSession']) {
    const at = src.indexOf(`${site}: async (`);
    const body = at < 0 ? null : src.slice(at, at + 420);
    ok(`${site} clears the guest record`, !!body && body.includes('await G9('), body ? 'no G9 call' : 'call site not found');
  }
}

// --- booking invariants over the world this file has just churned ---
assertBookingInvariants(ok, await bookingInvariants(page, IDS.admin), { floor: 12 });
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
