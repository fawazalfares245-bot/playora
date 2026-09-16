__d(
  function (e, t, a, i, n, r, o) {
    var s = t(o[0]);
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.MIN_AGE = r.MEDIA_PATH = r.CROSS_PARTITION_TTL_HOURS = r.CLUB_PLANS = void 0),
      Object.defineProperty(r, "SEAT_REFUND_CUTOFF_HOURS", {
        enumerable: !0,
        get: function () {
          return F.SEAT_REFUND_CUTOFF_HOURS;
        },
      }),
      (r.ageOnDate = r.TERMS_VERSION = void 0),
      (r.assertApprovedOrganizer = on),
      (r.mockGetAwardLeaderboard =
        r.mockGetAwardFraudSignals =
        r.mockGetAwardBallot =
        r.mockGetAuthorStories =
        r.mockGetApplicationDetail =
        r.mockGetAllTeamsAdmin =
        r.mockGetAllRewardsAdmin =
        r.mockGetAdminFinancials =
        r.mockGatewayWebhook =
        r.mockFollow =
        r.mockExportUserData =
        r.mockExportBIReport =
        r.mockExpireSeatHold =
        r.mockEnsureNotificationsSeed =
        r.mockEnsureGamePlayersSeed =
        r.mockEnsureExternalProfile =
        r.mockEnsureChatSeed =
        r.mockEndSeries =
        r.mockEditFutureOccurrences =
        r.mockDiscardMatchDraft =
        r.mockDeleteTeamChat =
        r.mockDeleteSavedGroup =
        r.mockDeleteDirectMessage =
        r.mockDeleteAccount =
        r.mockDeclineReplacement =
        r.mockDeclineMessageRequest =
        r.mockDecideJoinRequest =
        r.mockDeactivateNeedPlayer =
        r.mockCreateWalletRequest =
        r.mockCreateVenuePromo =
        r.mockCreateTeam =
        r.mockCreateStory =
        r.mockCreateSeries =
        r.mockCreatePost =
        r.mockCreatePaymentPlan =
        r.mockCreatePaymentIntent =
        r.mockCreateMatch =
        r.mockCreateGroupBooking =
        r.mockCreateCustomAward =
        r.mockCreateClub =
        r.mockCreateBooking =
        r.mockCounterBattleResult =
        r.mockCountCharges =
        r.mockConfirmSquadSpot =
        r.mockConfirmLeagueSquad =
        r.mockConciergeAutoInvite =
        r.mockCloseSquadWindowEarly =
        r.mockCloseRegistration =
        r.mockClaimVenuePayout =
        r.mockClaimLineupSlot =
        r.mockCheckoutJoin =
        r.mockCheckUsername =
        r.mockCheckOtp =
        r.mockChangeMemberRole =
        r.mockCastAwardVote =
        r.mockCancelSeries =
        r.mockCancelMatch =
        r.mockCancelGroupMember =
        r.mockCancelCourtBooking =
        r.mockCancelBooking =
        r.mockBlockUser =
        r.mockBlockCourtTime =
        r.mockAutoBalanceLineup =
        r.mockAuditSeatConsistency =
        r.mockAuditReplacementLeak =
        r.mockAssignLineupSlot =
        r.mockApproveParticipant =
        r.mockApplyVenue =
        r.mockAgeBattleForTest =
        r.mockAdminSuspendTeam =
        r.mockAdminSetCommission =
        r.mockAdminReviewVenue =
        r.mockAdminRemoveAchievement =
        r.mockAdminGrantCredit =
        r.mockAdminGetPlayerIntel =
        r.mockAdminGetCompatibility =
        r.mockAdminFindPlayers =
        r.mockAdminCorrectAudience =
        r.mockAdminAdjustRating =
        r.mockAddVenueStaff =
        r.mockAddComment =
        r.mockActivateNeedPlayer =
        r.mockAcceptReplacement =
        r.mockAcceptMessageRequest =
        r.mockAcceptCoC =
        r.mockAcceptClubInvitation =
        r.loadSession =
        r.isRealBirthDate =
        r.isAudienceError =
        r.deriveNpnUrgency =
        r.deriveFormat =
        r.demoWorldEnabled =
          void 0),
      (r.mockGetPassport =
        r.mockGetOrganizerTrustScore =
        r.mockGetOrganizerStats =
        r.mockGetOrganizerSeries =
        r.mockGetOrganizerReputation =
        r.mockGetOrganizerReferralStats =
        r.mockGetOrganizerRatings =
        r.mockGetOrganizerMatches =
        r.mockGetOrganizerMatchScreen =
        r.mockGetOrganizerBookings =
        r.mockGetOrganizerApplications =
        r.mockGetOptimizerWeights =
        r.mockGetOptimizerDashboard =
        r.mockGetNpnCandidates =
        r.mockGetNpnAdminStats =
        r.mockGetNotifications =
        r.mockGetNeedPlayerFeed =
        r.mockGetMyVenues =
        r.mockGetMyTeams =
        r.mockGetMySkillSummary =
        r.mockGetMySeatPayment =
        r.mockGetMyReplacementOffers =
        r.mockGetMyRedemptions =
        r.mockGetMyPosition =
        r.mockGetMyPaymentRequests =
        r.mockGetMyPartitionStance =
        r.mockGetMyOrganizerApplication =
        r.mockGetMyCourtBookings =
        r.mockGetMyCancellations =
        r.mockGetMyBookings =
        r.mockGetMvpPanel =
        r.mockGetMediaUpload =
        r.mockGetMediaLibrary =
        r.mockGetMediaDashboard =
        r.mockGetMatchParticipants =
        r.mockGetMatchOptimization =
        r.mockGetMatchInvite =
        r.mockGetMatchFeed =
        r.mockGetMatchDraft =
        r.mockGetMatchAwards =
        r.mockGetMatchActivity =
        r.mockGetLoyaltyTiers =
        r.mockGetLoyaltyRules =
        r.mockGetLoyaltyLedger =
        r.mockGetLoyaltyEarnBreakdown =
        r.mockGetLoyaltyAdminStats =
        r.mockGetLoyaltyActions =
        r.mockGetLoyaltyAccount =
        r.mockGetLineup =
        r.mockGetLeague =
        r.mockGetJoinSuggestions =
        r.mockGetJoinRequestIntel =
        r.mockGetIncidentQueue =
        r.mockGetHighlightCollections =
        r.mockGetH2HMap =
        r.mockGetGrowthAdminStats =
        r.mockGetGroupConfig =
        r.mockGetGroupBooking =
        r.mockGetGroupAnalytics =
        r.mockGetGameScreen =
        r.mockGetGamePlayers =
        r.mockGetGameGroups =
        r.mockGetGame =
        r.mockGetFunnelStats =
        r.mockGetFollowRequests =
        r.mockGetFollowList =
        r.mockGetFeedAnalytics =
        r.mockGetFeed =
        r.mockGetEscalatedBattleResults =
        r.mockGetDiscover =
        r.mockGetDisciplinaryStanding =
        r.mockGetDemandWeights =
        r.mockGetDemandPrediction =
        r.mockGetDemandModelStats =
        r.mockGetCrossPartitionGrants =
        r.mockGetCourts =
        r.mockGetCourtAvailability =
        r.mockGetConversations =
        r.mockGetConductAdminStats =
        r.mockGetConciergeStats =
        r.mockGetConciergeRules =
        r.mockGetConciergeReplacements =
        r.mockGetConciergePlan =
        r.mockGetConciergeNotificationPlan =
        r.mockGetCompatAdminStats =
        r.mockGetComments =
        r.mockGetCoCVersion =
        r.mockGetCoCStatus =
        r.mockGetClubDashboard =
        r.mockGetClipSignedUrl =
        r.mockGetClanBattles =
        r.mockGetClanBattle =
        r.mockGetChatMessages =
        r.mockGetBookingPayments =
        r.mockGetBookingCheckins =
        r.mockGetBooking =
        r.mockGetBlockedList =
        r.mockGetBattleResult =
        r.mockGetBIDashboard =
        r.mockGetAwardSeasons =
          void 0),
      (r.mockRateOrganizer =
        r.mockRandomizeLineup =
        r.mockQuickCreateMatch =
        r.mockPublishAwards =
        r.mockPostTeamChat =
        r.mockPinTeamChat =
        r.mockPayRequest =
        r.mockPayGroup =
        r.mockPauseSeries =
        r.mockOptOutSquad =
        r.mockOpenSquadWindow =
        r.mockOpenAwardVoting =
        r.mockOneTapJoin =
        r.mockMuteUser =
        r.mockMarkNotificationRead =
        r.mockMarkCeremonySeen =
        r.mockMarkAllNotificationsRead =
        r.mockManualReplace =
        r.mockLogTeamInviteShare =
        r.mockLogShare =
        r.mockLogFunnel =
        r.mockLogFeedSignal =
        r.mockListVenuePromos =
        r.mockListSavedGroups =
        r.mockListMyGroups =
        r.mockListMyClubs =
        r.mockListLineupTemplates =
        r.mockListFriends =
        r.mockLeaveTeam =
        r.mockLeaveMatch =
        r.mockKickPlayer =
        r.mockJoinTeamByCode =
        r.mockJoinTeam =
        r.mockJoinSeries =
        r.mockJoinMatch =
        r.mockJoinByCode =
        r.mockJoinAtPosition =
        r.mockIssueSanction =
        r.mockInviteClubMember =
        r.mockGrantLineupEdit =
        r.mockGrantCrossPartition =
        r.mockGetWallet =
        r.mockGetVenues =
        r.mockGetVenueStaffList =
        r.mockGetVenueRevenue =
        r.mockGetVenueCustomers =
        r.mockGetVenueCrmDashboard =
        r.mockGetVenueBookings =
        r.mockGetVenueBookingDetail =
        r.mockGetVenueAnalytics =
        r.mockGetVenue =
        r.mockGetUserSanctions =
        r.mockGetUserPosts =
        r.mockGetUpcomingGames =
        r.mockGetUnreadDMCount =
        r.mockGetUnreadCount =
        r.mockGetThread =
        r.mockGetTeams =
        r.mockGetTeamStats =
        r.mockGetTeamRankings =
        r.mockGetTeamMembers =
        r.mockGetTeamInvite =
        r.mockGetTeamEvents =
        r.mockGetTeamChat =
        r.mockGetTeamCalendar =
        r.mockGetTeamBattles =
        r.mockGetTeamAdminStats =
        r.mockGetTeamAchievements =
        r.mockGetTeam =
        r.mockGetSuggestedFollows =
        r.mockGetStoryTray =
        r.mockGetSquadState =
        r.mockGetSmartSchedule =
        r.mockGetSmartDefaults =
        r.mockGetSkillProfiles =
        r.mockGetSkillFit =
        r.mockGetSkillEvalTargets =
        r.mockGetSkillAdminStats =
        r.mockGetSeriesAnalytics =
        r.mockGetSeries =
        r.mockGetSeatRefundQuote =
        r.mockGetRewards =
        r.mockGetRewardCategories =
        r.mockGetReviews =
        r.mockGetReplacementState =
        r.mockGetReplacementOffer =
        r.mockGetReplacementMetrics =
        r.mockGetReplacementAdminStats =
        r.mockGetRecommendedGames =
        r.mockGetRecentBattleResults =
        r.mockGetProfile =
        r.mockGetPrivacySettings =
        r.mockGetPrivacy =
        r.mockGetPlayerProfile =
        r.mockGetPlayerAwards =
        r.mockGetPendingVenues =
        r.mockGetPendingCeremony =
        r.mockGetPaymentMethods =
        r.mockGetPayment =
        r.mockGetPassportPrivacy =
          void 0),
      (r.mockUpdateProfile =
        r.mockUpdatePrivacy =
        r.mockUpdatePassportPrivacy =
        r.mockUpdateNeedPlayer =
        r.mockUpdateMatch =
        r.mockUpdateConsent =
        r.mockUnmuteUser =
        r.mockUnfollow =
        r.mockUnblockUser =
        r.mockUnblockCourtTime =
        r.mockTouchPresence =
        r.mockToggleVenuePromo =
        r.mockToggleSave =
        r.mockToggleLineupLock =
        r.mockToggleLike =
        r.mockToggleCommentLike =
        r.mockSyncLoyalty =
        r.mockSwapLineupSlots =
        r.mockSubmitWalletKyc =
        r.mockSubmitSkillEvaluation =
        r.mockSubmitOrganizerApplication =
        r.mockSubmitMatchScore =
        r.mockSubmitContact =
        r.mockSubmitClubVerification =
        r.mockSubmitBattleResult =
        r.mockStartConversation =
        r.mockStartClubSubscription =
        r.mockSignUp =
        r.mockSignOut =
        r.mockSignInWithOtp =
        r.mockSignIn =
        r.mockSharePost =
        r.mockShareLineupToChat =
        r.mockShareClip =
        r.mockSetTeamBadge =
        r.mockSetSelfRating =
        r.mockSetSelfCategory =
        r.mockSetSavedPayment =
        r.mockSetRewardActive =
        r.mockSetReplacementRadius =
        r.mockSetReplacementMode =
        r.mockSetPrivacySettings =
        r.mockSetPlayerTeam =
        r.mockSetOptimizerWeights =
        r.mockSetLineupJersey =
        r.mockSetLineupFormation =
        r.mockSetLineupCaptain =
        r.mockSetEarnRule =
        r.mockSetDemandWeights =
        r.mockSetCourtActive =
        r.mockSetConciergeRules =
        r.mockSetAttendance =
        r.mockSendPaymentReminders =
        r.mockSendFriendRequest =
        r.mockSendDirectMessage =
        r.mockSendClanChallenge =
        r.mockSendChatMessage =
        r.mockSearchUsers =
        r.mockSearchPlayers =
        r.mockSearchBookableVenues =
        r.mockScheduleTeamEvent =
        r.mockScanCheckin =
        r.mockSaveMatchDraft =
        r.mockSaveLineupTemplate =
        r.mockSaveFriendGroup =
        r.mockRunSubmissionSweep =
        r.mockRunScheduledWork =
        r.mockRevokeCrossPartition =
        r.mockRevokeAward =
        r.mockReviewSanction =
        r.mockReviewClubVerification =
        r.mockReviewApplication =
        r.mockResumeSeries =
        r.mockRestoreUser =
        r.mockRespondWalletRequest =
        r.mockRespondFriendRequest =
        r.mockRespondFollowRequest =
        r.mockRespondClanChallenge =
        r.mockResolveInviteCode =
        r.mockResetPassword =
        r.mockReserveCourt =
        r.mockRequestPasswordReset =
        r.mockRequestOtp =
        r.mockReportPost =
        r.mockReportClipCopyright =
        r.mockReopenRegistration =
        r.mockRemoveVenueStaff =
        r.mockRemoveMember =
        r.mockRemediateReplacementLeak =
        r.mockRejectParticipant =
        r.mockRegisterPushToken =
        r.mockRefundPayment =
        r.mockRefreshDemoGames =
        r.mockRedeemReward =
        r.mockRecordTeamResult =
        r.mockRecordOptimizerDecision =
        r.mockRecordLineupSubstitution =
        r.mockRecordDemandOutcome =
        r.mockRecordClipView =
        r.mockReconcileSeatPayments =
          void 0),
      (r.mockWalletWithdraw =
        r.mockWalletTransfer =
        r.mockWalletAddFunds =
        r.mockVerifyOtp =
        r.mockVenueDecideBooking =
        r.mockValidateVenuePromo =
        r.mockUpsertSelfPlayer =
        r.mockUpsertReward =
        r.mockUpsertReview =
        r.mockUpsertCourt =
        r.mockUploadMatchVideo =
        r.mockUpdateVenueProfile =
        r.mockUpdateTeam =
          void 0),
      Object.defineProperty(r, "persistenceHealth", {
        enumerable: !0,
        get: function () {
          return w.persistenceHealth;
        },
      }),
      (r.seatMayConfirm = void 0));
    var d = s(t(o[1])),
      l = s(t(o[2])),
      c = t(o[3]),
      _ = t(o[4]),
      u = t(o[5]),
      m = t(o[6]),
      w = t(o[7]),
      p = t(o[8]),
      f = t(o[9]),
      g = t(o[10]),
      h = t(o[11]),
      y = t(o[12]),
      k = t(o[13]),
      v = t(o[14]),
      S = t(o[15]),
      E = t(o[16]),
      b = t(o[17]),
      T = t(o[18]),
      A = t(o[19]),
      D = t(o[20]),
      O = t(o[21]),
      R = t(o[22]),
      I = t(o[23]),
      M = t(o[24]),
      N = t(o[25]),
      C = t(o[26]),
      P = t(o[27]),
      L = t(o[28]),
      G = t(o[29]),
      U = t(o[30]),
      x = t(o[31]),
      z = t(o[32]),
      H = t(o[33]),
      F = t(o[34]);
    const B = ["role", "consent", "consent_updated_at", "id", "audience"],
      j = ["_s"],
      q = "playora.mock.users.v1",
      Y = "playora.mock.profiles.v1",
      W = "playora.mock.bookings.v1",
      K = "playora.mock.reviews.v1",
      $ = "playora.mock.notifications.v1",
      V = "playora.mock.pushtokens.v1",
      J = "playora.mock.paymentintents.v1",
      Q = "playora.mock.paymentcharges.v1",
      Z = "playora.mock.reconcilecursor.v1",
      X = "playora.mock.gameplayers.v1",
      ee = "playora.mock.chat.v1",
      te = "playora.mock.games.v1",
      ae = "playora.mock.venues.v1",
      ie = "playora.mock.orgratings.v1",
      ne = "playora.mock.applications.v1",
      re = "playora.mock.orgseed.v1",
      oe = "00000000-0000-0000-0000-0000000000ad",
      se = "00000000-0000-0000-0000-0000000000ae",
      de = "00000000-0000-0000-0000-0000000000a1",
      Ne0 = () => (typeof globalThis !== "undefined" && globalThis.__PLAYORA_CONFIG__) || {},
      le = new Set(
        (Array.isArray(Ne0().adminEmails) ? Ne0().adminEmails : [])
          .map((e) => String(e).trim().toLowerCase())
          .filter(Boolean),
      ),
      // Promote a freshly created / signed-in account when its email is on the configured admin list.
      Ne1 = async (e, t) => {
        if (!le.has(String(t ?? "").trim().toLowerCase())) return;
        const a = Qt.profiles.findIndex((t) => t.id === e);
        a >= 0 &&
          "admin" !== Qt.profiles[a].role &&
          ((Qt.profiles[a] = Object.assign({}, Qt.profiles[a], { role: "admin" })), await Za(Y, Qt.profiles));
      },
      ce = "playora.mock.venueprofiles.v1",
      _e = "playora.mock.courts.v1",
      ue = "playora.mock.courtblocks.v1",
      me = "playora.mock.courtbookings.v1",
      we = "playora.mock.payments.v1",
      pe = "playora.mock.checkins.v1",
      fe = "playora.mock.settlements.v1",
      ge = { court_booking_id: null },
      he = "percentage",
      ye = "playora.mock.demand.weights.v1",
      ke = "playora.mock.demand.log.v1",
      ve = "playora.mock.optimizer.weights.v1",
      Se = "playora.mock.optimizer.log.v1",
      Ee = "playora.mock.clubs.v1",
      be = "playora.mock.club.members.v1",
      Te = "playora.mock.club.invites.v1",
      Ae = "playora.mock.club.subscriptions.v1",
      De = "playora.mock.friendships.v1",
      Oe = "playora.mock.group.bookings.v1",
      Re = "playora.mock.group.members.v1",
      Ie = "playora.mock.saved.groups.v1",
      Me = "playora.mock.saved.pay.v1",
      Ne = "playora.mock.follows.v1",
      Ce = "playora.mock.posts.v1",
      Pe = "playora.mock.post.comments.v1",
      Le = "playora.mock.post.likes.v1",
      Ge = "playora.mock.post.saves.v1",
      Ue = "playora.mock.post.shares.v1",
      xe = "playora.mock.post.reports.v1",
      ze = "playora.mock.post.commentlikes.v1",
      He = "playora.mock.dm.conversations.v1",
      Fe = "playora.mock.dm.messages.v1",
      Be = "playora.mock.blocks.v1",
      je = "playora.mock.mutes.v1",
      qe = "playora.mock.privacysettings.v1",
      Ye = "playora.mock.presence.v1",
      We = "playora.mock.stories.v1",
      Ke = "playora.mock.story.views.v1",
      $e = 864e5,
      Ve = "playora.mock.award.votes.v1",
      Je = "playora.mock.award.wins.v1",
      Qe = "playora.mock.award.voting.v1",
      Ze = "playora.mock.award.custom.v1",
      Xe = "playora.mock.feed.signals.v1",
      et = "playora.mock.feed.weights.v1",
      tt = "playora.mock.venue.promos.v1",
      at = "playora.mock.wallet.ledger.v1",
      it = "playora.mock.wallet.kyc.v1",
      nt = "playora.mock.wallet.requests.v1",
      rt = "playora.mock.lineups.v1",
      ot = "playora.mock.match.events.v1",
      st = "playora.mock.seat.cancellations.v1",
      dt = "playora.mock.match.drafts.v1",
      lt = "playora.mock.lineup.templates.v1",
      ct = { profile_visibility: "public", show_online: !0, allow_messages: "everyone" },
      _t = { profile_visibility: "followers", show_online: !1, allow_messages: "followers" },
      ut = "playora.mock.media.uploads.v1",
      mt = "playora.mock.media.clips.v1",
      wt = "playora.mock.media.shares.v1",
      pt = "playora.mock.media.reports.v1",
      ft = (r.CLUB_PLANS = [
        { id: "starter", name: "Starter", price_minor: 0, currency: "KWD", interval: "month", trial_days: 0 },
        { id: "pro", name: "Pro", price_minor: 25e3, currency: "KWD", interval: "month", trial_days: 14 },
        { id: "elite", name: "Elite", price_minor: 6e4, currency: "KWD", interval: "month", trial_days: 14 },
      ]),
      gt = "playora.mock.sanctions.v1",
      ht = "playora.mock.crossPartition.v1",
      yt = "playora.mock.coc.acceptance.v1",
      kt = "playora.mock.replacement.settings.v1",
      vt = "playora.mock.replacement.offers.v1",
      St = "playora.mock.concierge.rules.v1",
      Et = "playora.mock.concierge.predictions.v1",
      bt = "playora.mock.loyalty.ledger.v1",
      Tt = "playora.mock.loyalty.rewards.v1",
      At = "playora.mock.loyalty.redemptions.v1",
      Dt = "playora.mock.loyalty.rules.v1",
      Ot = "playora.mock.teams.v1",
      Rt = "playora.mock.teammembers.v1",
      It = "playora.mock.teamevents.v1",
      Mt = "playora.mock.teamchat.v1",
      Nt = "playora.mock.teamachievements.v1",
      Ct = "playora.mock.clanbattles.v1",
      Pt = "playora.mock.battleresults.v1",
      Lt = "playora.mock.leagueconfirms.v1",
      Gt = "playora.mock.compat.v1",
      Ut = "playora.mock.achievements.v1",
      xt = "playora.mock.passportprivacy.v1",
      zt = "playora.mock.invites.v1",
      Ht = "playora.mock.referrals.v1",
      Ft = "playora.mock.templates.v1",
      Bt = { series_id: null },
      jt = "playora.mock.skillprofiles.v1",
      qt = "playora.mock.skillevals.v1",
      Yt = "playora.mock.mismatch.v1",
      Wt = { skill_min: null, skill_max: null, skill_policy: "open" },
      Kt = {
        npn_active: !1,
        npn_urgency: null,
        npn_radius_km: 10,
        npn_activated_at: null,
        npn_activation_count: 0,
        // Absent from these defaults, so it was undefined on every game until the first update - which
        // meant the first update after any activation always broadcast, whatever the throttle said.
        npn_last_broadcast_at: null,
        npn_notifications_sent: 0,
        npn_joins: 0,
        npn_filled_at: null,
      },
      $t = {
        registration_closed_at: null,
        score_home: null,
        score_away: null,
        score_submitted_at: null,
        squad_window_opened_at: null,
        squad_deadline: null,
        squad_window_status: null,
      },
      Vt = "playora_session",
      Jt = 9e5,
      Qt = {
        users: [],
        profiles: [],
        bookings: [],
        reviews: [],
        notifications: [],
        matchEvents: [],
        seatCancellations: [],
        pushTokens: [],
        paymentIntents: [],
        paymentCharges: [],
        notifsSeededFor: new Set(),
        gamePlayers: [],
        playersSeededFor: new Set(),
        chatMessages: [],
        chatSeededFor: new Set(),
        games: [],
        venues: [],
        orgRatings: [],
        applications: [],
        skillProfiles: [],
        skillEvals: [],
        mismatchIncidents: [],
        templates: [],
        invites: [],
        referrals: [],
        rewards: [],
        achievements: [],
        passportPrivacy: [],
        compat: [],
        venueProfiles: [],
        courts: [],
        courtBlocks: [],
        courtBookings: [],
        payments: [],
        checkins: [],
        settlements: [],
        teams: [],
        teamMembers: [],
        teamEvents: [],
        teamChat: [],
        teamAchievements: [],
        teamsSeeded: !1,
        clanBattles: [],
        battleResults: [],
        leagueConfirms: [],
        loyaltyLedger: [],
        loyaltyRewards: [],
        loyaltyRedemptions: [],
        loyaltyRules: null,
        loyaltySeeded: !1,
        conciergeRules: null,
        conciergePredictions: [],
        replacementSettings: [],
        replacementOffers: [],
        sanctions: [],
        crossPartitionGrants: [],
        cocAcceptances: [],
        demandWeights: null,
        demandLog: [],
        optimizerWeights: null,
        optimizerLog: [],
        clubs: [],
        clubMembers: [],
        clubInvites: [],
        clubSubs: [],
        clubSeeded: !1,
        mediaUploads: [],
        mediaClips: [],
        mediaShares: [],
        mediaReports: [],
        friendships: [],
        groupBookings: [],
        groupMembers: [],
        savedGroups: [],
        savedPay: [],
        follows: [],
        posts: [],
        postComments: [],
        postCommentLikes: [],
        postLikes: [],
        postSaves: [],
        postShares: [],
        postReports: [],
        dmConversations: [],
        dmMessages: [],
        blocks: [],
        mutes: [],
        privacySettings: [],
        presence: [],
        stories: [],
        storyViews: [],
        awardVotes: [],
        awardWins: [],
        awardVoting: [],
        awardCustom: [],
        feedSignals: [],
        feedWeights: null,
        venuePromos: [],
        walletLedger: [],
        walletKyc: [],
        walletRequests: [],
        lineups: [],
        matchDrafts: [],
        lineupTemplates: [],
        venueSeeded: !1,
        orgSeedUid: null,
        organizerSeeded: !1,
        approvalSeeded: !1,
        hydrated: !1,
      },
      Zt = new Map();
    async function Xt(e, t) {
      const a = (Zt.get(e) ?? Promise.resolve()).catch(() => {}).then(() => Ha(`game:${e}`, [W], t));
      Zt.set(e, a);
      try {
        return await a;
      } finally {
        Zt.get(e) === a && Zt.delete(e);
      }
    }
    // Self-contained on purpose: both places that mint one sit in scopes with their own local `c`,
    // and reaching for the shared randomCode there is a temporal dead zone.
    const mkCheckinToken9 = () =>
      `PLY-${Math.random().toString(36).slice(2, 8).toUpperCase()}${Math.random()
        .toString(36)
        .slice(2, 6)
        .toUpperCase()}`;
    const ea = () =>
        "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) =>
          (+e ^ (Math.floor(256 * Math.random()) & (15 >> (+e / 4)))).toString(16),
        ),
      ta = "AUDIENCE_MISMATCH";
    r.isAudienceError = (e) => e instanceof Error && e.message === ta;
    const aa = (e) =>
        e
          ? "guest:female" === e
            ? "female"
            : "guest:male" === e
              ? "male"
              : (Qt.profiles.find((t) => t.id === e)?.audience ?? "male")
          : "male",
      ia = (e, t) => e === t || "open" === e || "open" === t,
      na = (e, t) => {
        const a = aa(t);
        return e.filter((e) => ia(e.audience, a));
      },
      ra = (e, t) => {
        if (!ia(aa(e), t)) throw new Error(ta);
      },
      oa = (e, t) => {
        ra(e, aa(t));
      },
      sa = "123456",
      da = 3e5,
      la = () => (Fa() ? sa : (0, c.randomSixDigit)()),
      ca = async (e, t) => {
        if (!(0, m.smsConfigured)() && !Fa()) throw new Error("SMS_NOT_CONFIGURED");
        await (0, m.smsProvider)().send(e, `Rush X: your code is ${t}`);
      },
      // OTP codes and throttle counters are persisted so a page reload cannot reset them.
      Ne2 = "playora.otp.state.v1",
      Ne3 = async () => {
        try {
          const e = await l.default.getItem(Ne2);
          const t = e ? JSON.parse(e) : null;
          return t && "object" == typeof t ? { codes: t.codes ?? {}, throttle: t.throttle ?? {} } : { codes: {}, throttle: {} };
        } catch {
          return { codes: {}, throttle: {} };
        }
      },
      Ne4 = async (e) => {
        const t = Date.now();
        for (const a of Object.keys(e.codes)) e.codes[a].expires < t && delete e.codes[a];
        try {
          await l.default.setItem(Ne2, JSON.stringify(e));
        } catch (t) {
          (0, w.noteWriteFailure)(Ne2, t);
        }
      },
      _a = {
        get: async (e) => (await Ne3()).codes[e],
        set: async (e, t) => {
          const a = await Ne3();
          ((a.codes[e] = t), await Ne4(a));
        },
        delete: async (e) => {
          const t = await Ne3();
          (delete t.codes[e], await Ne4(t));
        },
      },
      ma = async (e) => {
        const t = Date.now(),
          s = await Ne3(),
          a = s.throttle[e],
          i = Math.floor(t / 9e5),
          n = Math.floor(t / 864e5);
        let o = !0;
        if (a) {
          (a.day !== n && ((a.day = n), (a.inDay = 0)), a.window !== i && ((a.window = i), (a.inWindow = 0)));
          if (a.inWindow >= 3 || a.inDay >= 10) o = !1;
          else ((a.inWindow += 1), (a.inDay += 1));
        } else s.throttle[e] = { window: i, inWindow: 1, day: n, inDay: 1 };
        for (const e of Object.keys(s.throttle)) s.throttle[e].day !== n && delete s.throttle[e];
        return (await Ne4(s), o);
      };
    r.mockRequestOtp = async (e) => {
      await ei();
      const t = (0, v.canonicalPhone)(e);
      if (!t || !(0, v.isDialablePhone)(t)) throw new Error("PHONE_NOT_DIALABLE");
      if (!(await ma(t))) throw new Error("OTP_TOO_MANY_REQUESTS");
      const a = la(),
        i = (await _a.get(t))?.attempts ?? 0;
      if (
        (await _a.set(t, { code: a, expires: Date.now() + da, attempts: i }),
        await (0, w.logAudit)("auth.otp_requested", null),
        a !== sa)
      ) {
        try {
          await ca(t, a);
        } catch (e) {
          throw (
            await _a.delete(t),
            new Error("SMS_NOT_CONFIGURED" === e.message ? "SMS_NOT_CONFIGURED" : "SMS_SEND_FAILED")
          );
        }
        return { sent: !0, demo_code: "" };
      }
      return { sent: !0, demo_code: a };
    };
    r.mockCheckOtp = async (e, t) => {
      await ei();
      const a = (0, v.canonicalPhone)(e),
        i = await _a.get(a);
      if (!i || Date.now() > i.expires) throw new Error("OTP_EXPIRED");
      if (((i.attempts += 1), i.attempts > 5)) throw (await _a.delete(a), new Error("OTP_ATTEMPTS"));
      if (t.trim() !== i.code) throw (await _a.set(a, i), new Error("OTP_WRONG"));
      return (
        (i.verified = !0),
        (i.expires = Date.now() + 18e5),
        await _a.set(a, i),
        { verified: !0, existing: Qt.users.some((e) => e.email === `${a}@otp.playora.app`) }
      );
    };
    const wa = (r.MIN_AGE = 13),
      pa = (e, t) => new Date(e, t, 0).getDate(),
      fa = (e) => {
        const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
        if (!t) return !1;
        const a = Number(t[1]),
          i = Number(t[2]),
          n = Number(t[3]);
        return (
          !(a < 1900 || i < 1 || i > 12) &&
          !(n < 1 || n > pa(a, i)) &&
          Date.parse(`${e}T00:00:00Z`) <= Date.now()
        );
      };
    r.isRealBirthDate = fa;
    const ga = (e, t = new Date()) => {
      const [a, i, n] = e.split("-").map(Number);
      let r = t.getFullYear() - a;
      return ((t.getMonth() + 1 < i || (t.getMonth() + 1 === i && t.getDate() < n)) && (r -= 1), r);
    };
    r.ageOnDate = ga;
    const ha = (r.TERMS_VERSION = "2026-08-29"),
      ya = async (e, t, a, i = "male", n, r) => {
        await ei();
        const o = (0, v.canonicalPhone)(e),
          // CSEC/CQUAL (consumer audit): this read was not awaited, so `s` was a Promise. Every field
          // below read as undefined, which made the expiry and attempt checks no-ops and made the code
          // comparison always unequal — so every phone sign-in and sign-up threw OTP_WRONG. The attempt
          // counter must also be persisted, or the cap can never trip.
          s = await _a.get(o);
        if (!s || Date.now() > s.expires) throw new Error("OTP_EXPIRED");
        if (!s.verified) {
          s.attempts = Number(s.attempts ?? 0) + 1;
          if (s.attempts > 5) throw (await _a.delete(o), new Error("OTP_ATTEMPTS"));
          if (t.trim() !== s.code) throw (await _a.set(o, s), new Error("OTP_WRONG"));
        }
        await (0, w.logAudit)("auth.otp_verified", null);
        const d = `${o}@otp.playora.app`,
          l = Qt.users.find((e) => e.email === d);
        if (l) {
          // CSEC (consumer audit): this branch hand-rolled the session, dropping the 30-day expiry and
          // deriving the bearer token from Math.random. Phone is the primary sign-in route, so that was
          // every returning user. Go through li(), which stamps expires_at, and use the CSPRNG.
          await _a.delete(o);
          const se9 = { user: { id: l.id, email: d }, token: `otp-${await (0, c.randomToken)()}` };
          return (await li(se9), Object.assign({}, se9, { existing: !0 }));
        }
        // NOTE: do not name this `c`. The module-level crypto import is `c`, and a local `c` here
        // shadows it for the WHOLE function, putting any earlier c.* use in its temporal dead zone.
        const bd9 = "string" == typeof n ? n.trim() : "";
        if (!fa(bd9)) throw new Error("BIRTH_DATE_REQUIRED");
        if (ga(bd9) < wa) throw new Error("AGE_REQUIREMENT");
        if (!r) throw new Error("TERMS_REQUIRED");
        await _a.delete(o);
        const u = `Otp!${ea().slice(0, 12)}Aa1`,
          m = await ci(d, u, a, i),
          p = Qt.profiles.findIndex((e) => e.id === m.user.id);
        return (
          p >= 0 &&
            ((Qt.profiles[p] = Object.assign({}, Qt.profiles[p], {
              birth_date: bd9,
              birth_year: Number(bd9.slice(0, 4)),
              terms_accepted_at: new Date().toISOString(),
              terms_version: ha,
            })),
            await Za(Y, Qt.profiles),
            await (0, w.logAudit)("auth.terms_accepted", (0, w.actorRef)(m.user.id), { version: ha })),
          m
        );
      };
    r.mockVerifyOtp = ya;
    const ka = new Map();
    r.mockRequestPasswordReset = async (e) => {
      await ei();
      const t = e.trim().toLowerCase(),
        a = la();
      if (
        Qt.users.some((e) => e.email === t) &&
        (ka.set(t, { code: a, expires: Date.now() + da, attempts: 0 }), a !== sa)
      )
        try {
          await ca(t, a);
        } catch (e) {
          (ka.delete(t), (0, w.noteWriteFailure)("sms.reset", e));
        }
      return (
        await (0, w.logAudit)("auth.password_reset_requested", (0, w.actorRef)(t.slice(-6))),
        { sent: !0, demo_code: a === sa ? a : "" }
      );
    };
    r.mockResetPassword = async (e, t, a) => {
      await ei();
      const i = e.trim().toLowerCase(),
        n = ka.get(i);
      if (!n || Date.now() > n.expires) throw new Error("E_CODE_EXPIRED_REQUEST_A_NEW_ONE");
      if (((n.attempts += 1), n.attempts > 5))
        throw (ka.delete(i), new Error("E_TOO_MANY_ATTEMPTS_REQUEST_A_NEW"));
      if (t.trim() !== n.code) throw new Error("E_THAT_CODE_IS_NOT_RIGHT");
      if (!(0, v.isStrongPassword)(a)) throw new Error("E_PASSWORD_DOES_NOT_MEET_THE_STRENGTH");
      const r = Qt.users.find((e) => e.email === i);
      if (!r) throw new Error("E_THAT_CODE_IS_NOT_RIGHT");
      ((r.salt = await (0, c.generateSalt)()),
        (r.passwordHash = await (0, c.hashPassword)(a, r.salt)),
        (r.failedAttempts = 0),
        (r.lockedUntil = null),
        ka.delete(i),
        await Za(q, Qt.users),
        await (0, w.logAudit)("auth.password_reset", (0, w.actorRef)(r.id)));
    };
    r.mockSignInWithOtp = async (e, t) => {
      await ei();
      const a = (0, v.canonicalPhone)(e),
        i = `${a}@otp.playora.app`;
      if (!Qt.users.some((e) => e.email === i)) throw new Error("NO_ACCOUNT_FOR_PHONE");
      return ya(a, t, "");
    };
    r.mockEnsureExternalProfile = async (e, t, a) => {
      (await ei(),
        Qt.profiles.some((t) => t.id === e) ||
          (Qt.profiles.push({
            id: e,
            full_name: (0, v.sanitizeName)(a ?? t.split("@")[0]) || t.split("@")[0],
            avatar_url: null,
            phone: null,
            audience: "male",
            privacy_visibility: "everyone",
            avatar_mode: "photo",
            media_consent: !0,
            preferred_sports: [],
            skill_level: "intermediate",
            bio: null,
            role: "user",
            consent: { analytics: !1, marketing: !1 },
            consent_updated_at: null,
            created_at: new Date().toISOString(),
          }),
          await Za(Y, Qt.profiles),
          await (0, w.logAudit)("auth.external_provisioned", (0, w.actorRef)(e))));
    };
    r.mockGetPrivacy = async (e) => {
      await ei();
      const t = Qt.profiles.find((t) => t.id === e);
      if (!t) throw new Error("E_PROFILE_NOT_FOUND");
      return {
        privacy_visibility: t.privacy_visibility,
        avatar_mode: t.avatar_mode,
        media_consent: t.media_consent,
        audience: t.audience,
      };
    };
    r.mockUpdatePrivacy = async (e, t) => {
      await ei();
      const a = Qt.profiles.find((t) => t.id === e);
      if (!a) throw new Error("E_PROFILE_NOT_FOUND");
      return (
        t.privacy_visibility && (a.privacy_visibility = t.privacy_visibility),
        t.avatar_mode && (a.avatar_mode = t.avatar_mode),
        "boolean" == typeof t.media_consent && (a.media_consent = t.media_consent),
        await Za(Y, Qt.profiles),
        await (0, w.logAudit)("privacy.settings_changed", (0, w.actorRef)(e), {
          visibility: a.privacy_visibility,
          avatar: a.avatar_mode,
          media: a.media_consent,
        }),
        {
          privacy_visibility: a.privacy_visibility,
          avatar_mode: a.avatar_mode,
          media_consent: a.media_consent,
        }
      );
    };
    const va = Object.assign(
        {},
        Object.fromEntries(
          k.KUWAIT_AREAS.filter((e) => null != e.lat && null != e.lng).map((e) => [e.id, [e.lat, e.lng]]),
        ),
        { Hawalli: [29.3328, 48.0289] },
      ),
      Sa = (e) => {
        const t = Qt.profiles.find((t) => t.id === e)?.home_area,
          a = t ? va[t] : void 0;
        return a ? { lat: a[0], lng: a[1] } : (0, f.demoUserLocation)(e);
      },
      Ea = (e) => {
        let t = 0;
        for (let a = 0; a < e.length; a++) t = (31 * t + e.charCodeAt(a)) >>> 0;
        return [0.01 * ((t % 1e3) / 1e3 - 0.5), 0.01 * (((t >> 10) % 1e3) / 1e3 - 0.5)];
      },
      ba = (e, t, a, i, n, r, o) => {
        const s = va[a] ?? va["Kuwait City"],
          [d, l] = Ea(e);
        return {
          id: e,
          name: t,
          city: "Kuwait City",
          area: a,
          sports: i,
          cover_url: null,
          rating: n,
          rating_count: r,
          description: o,
          address: `${a}, Kuwait`,
          lat: s[0] + d,
          lng: s[1] + l,
          created_at: new Date().toISOString(),
        };
      },
      Ta = [
        ba(
          "11111111-1111-1111-1111-111111111111",
          "Salmiya Sports Hub",
          "Salmiya",
          ["football", "padel"],
          4.6,
          28,
          "Floodlit pitches and indoor padel courts in central Salmiya.",
        ),
        ba(
          "44444444-4444-4444-4444-444444444444",
          "Mishref Arena",
          "Mishref",
          ["football", "tennis"],
          4.5,
          22,
          "Multi-sport complex near the 6th Ring Road.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000001",
          "Yarmouk Sports Club",
          "Mishref",
          ["football", "tennis"],
          4.4,
          31,
          "Established sports club with full-size pitch and outdoor tennis courts.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000002",
          "SRF Salmiya",
          "Salmiya",
          ["football", "padel"],
          4.5,
          54,
          "Indoor 5-a-side cages plus rooftop padel \u2014 popular for weeknight pickup.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000003",
          "PSA Kuwait",
          "Sabhan",
          ["football"],
          4.4,
          19,
          "Professional Sports Academy \u2014 large turf grounds, regular leagues.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000004",
          "Fahaheel Turf",
          "Fahaheel",
          ["football"],
          4.3,
          17,
          "Open-air 7-a-side turf by the coast \u2014 the clan derby ground.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000010",
          "Liverpool Academy Kuwait",
          "Salmiya",
          ["football"],
          4.7,
          63,
          "Official Liverpool FC academy \u2014 coached sessions and open pitch slots.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000011",
          "AC Milan Academy Kuwait",
          "Mishref",
          ["football"],
          4.6,
          38,
          "Rossoneri-branded academy with FIFA-spec 7-a-side astroturf.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000012",
          "Juventus Academy Kuwait",
          "Adailiya",
          ["football"],
          4.5,
          27,
          "Bianconeri academy \u2014 pitches open evenings for friendly bookings.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000013",
          "British Football Academy",
          "Salmiya",
          ["football"],
          4.3,
          21,
          "UK-coached training facility with two outdoor 5-a-side pitches.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000014",
          "Speed Sports Academy",
          "Hawalli",
          ["football"],
          4.2,
          12,
          "Rehab Complex \u2014 indoor pitches with cool-air ventilation.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000015",
          "Kuwait Sports Stadium",
          "South Surra",
          ["football"],
          4.4,
          47,
          "Large floodlit 11-a-side ground available for evening bookings.",
        ),
        ba(
          "22222222-2222-2222-2222-222222222222",
          "Jabriya Padel Club",
          "Jabriya",
          ["padel"],
          4.8,
          41,
          "Premium padel club with 6 panoramic courts and a pro shop.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000020",
          "PADEL IN Kuwait",
          "Mishref",
          ["padel"],
          4.7,
          88,
          "Playtomic-listed flagship club with coaching and weekly tournaments.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000021",
          "Masaha Padel Academy",
          "Shuwaikh",
          ["padel"],
          4.7,
          72,
          "5 indoor courts \u2014 beginner-friendly academy hosting FIP events.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000022",
          "Play Padel Academy",
          "Kaifan",
          ["padel"],
          4.6,
          49,
          "Host of the FIP Rise Padel Championship. 4 panoramic courts.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000023",
          "The Padel Club Salmiya",
          "Salmiya",
          ["padel"],
          4.5,
          64,
          "Salmiya branch of The Padel Club \u2014 open early morning to late night.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000024",
          "The Padel Club Bneid Al Qar",
          "Bneid Al Qar",
          ["padel"],
          4.4,
          38,
          "Waterfront padel courts with sea views from the upper deck.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000025",
          "The Padel Club Mahboula",
          "Mahboula",
          ["padel"],
          4.3,
          25,
          "South Kuwait branch \u2014 quieter, ideal for off-peak doubles.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000026",
          "The Padel Club Messila",
          "Messila",
          ["padel"],
          4.5,
          33,
          "Beachside complex with 4 courts and a small caf\xe9.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000027",
          "Vamos Padel Kuwait",
          "Hawalli",
          ["padel"],
          4.3,
          18,
          "Compact 2-court club with affordable off-peak hourly rates.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000028",
          "Topspin Kuwait",
          "Salmiya",
          ["padel", "tennis"],
          4.4,
          26,
          "Mixed racket-sport venue \u2014 tennis and padel side by side.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000029",
          "Mediterra Padel Salmiya",
          "Salmiya",
          ["padel"],
          4.6,
          31,
          "Turkish-built panoramic courts with proper match lighting.",
        ),
        ba(
          "a0000000-0000-4000-8000-00000000002a",
          "Ultimate Padel Kuwait",
          "Jabriya",
          ["padel"],
          4.4,
          22,
          "3 indoor courts close to Jabriya \u2014 strong intermediate community.",
        ),
        ba(
          "a0000000-0000-4000-8000-00000000002b",
          "Three Padel",
          "Khaitan",
          ["padel"],
          4.2,
          15,
          "Small neighbourhood club with friendly off-peak rates.",
        ),
        ba(
          "a0000000-0000-4000-8000-00000000002c",
          "Yalla Padel",
          "Mahboula",
          ["padel"],
          4.3,
          17,
          "South-of-Kuwait club \u2014 easy to book last-minute on weeknights.",
        ),
        ba(
          "a0000000-0000-4000-8000-00000000002d",
          "TODO SPORTS \xb7 Al Shaheed Park",
          "Kuwait City",
          ["padel"],
          4.5,
          44,
          "Padel courts inside Al Shaheed Park \u2014 great location after work.",
        ),
        ba(
          "33333333-3333-3333-3333-333333333333",
          "Hawalli Tennis Center",
          "Hawalli",
          ["tennis"],
          4.3,
          17,
          "Floodlit tennis courts with coaching available evenings.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000030",
          "Kuwait Tennis Federation",
          "Mishref",
          ["tennis"],
          4.6,
          53,
          "Official federation venue \u2014 hard courts, junior programs, leagues.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000031",
          "Palms Beach Tennis",
          "Kuwait City",
          ["tennis"],
          4.4,
          24,
          "Beachside floodlit tennis at the Palms Beach Hotel & Spa.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000032",
          "Sahara Kuwait Golf Club",
          "Mubarak Al-Kabeer",
          ["tennis"],
          4.5,
          19,
          "Resort-style tennis courts attached to the country club.",
        ),
        ba(
          "a0000000-0000-4000-8000-000000000033",
          "Hunting & Equestrian Club",
          "Al Jahra",
          ["tennis"],
          4.2,
          11,
          "Member-friendly outdoor tennis courts in Jahra.",
        ),
      ],
      Aa = "00000000-0000-0000-0000-000000000000",
      Da = [
        { id: "demo:khalid-aldousari", name: "Khalid Al-Dousari" },
        { id: "demo:saud-alenezi", name: "Saud Al-Enezi" },
        { id: "demo:omar-alharbi", name: "Omar Al-Harbi" },
        { id: "demo:majed-alqattan", name: "Majed Al-Qattan" },
      ],
      Oa = [17, 18, 19, 20, 21],
      Ra = (e, t) => {
        const a = new Date(((i = t), new Date(Date.now() + 60 * i * 60 * 1e3).toISOString()));
        var i;
        return (
          a.setHours(Oa[e % Oa.length], e % 2 ? 30 : 0, 0, 0),
          a.getTime() < Date.now() + 72e5 && a.setDate(a.getDate() + 1),
          a
        );
      },
      Ia = (e, t) =>
        "padel" === e
          ? t <= 2
            ? "padel_2"
            : "padel_4"
          : "tennis" === e
            ? t <= 2
              ? "tennis_singles"
              : "tennis_doubles"
            : t <= 10
              ? "football_5v5"
              : t <= 14
                ? "football_7v7"
                : t <= 22
                  ? "football_11v11"
                  : "football_custom";
    r.deriveFormat = Ia;
    const Ma = (e) => Math.max(2, Math.ceil(e / 2)),
      Na = { football: "Football", padel: "Padel", tennis: "Tennis" },
      Ca = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", all: "Open" },
      Pa = (e, t, a, i, n, r, o, s, d) => {
        const l = parseInt(e.slice(-2), 16),
          c = Ra(l, n).toISOString();
        return Object.assign(
          {
            id: e,
            venue_id: t,
            organizer_id: Da[l % Da.length].id,
            audience: "male",
            title: `${Ca[i]} ${Na[a]}`,
            sport: a,
            format: Ia(a, o),
            skill_level: i,
            starts_at: c,
            ends_at: new Date(new Date(c).getTime() + 6e4 * r).toISOString(),
            duration_minutes: r,
            max_players: o,
            waitlist_capacity: Ma(o),
            price_kwd: s,
            notes: d,
            visibility: "public",
            invite_code: null,
            approval_mode: "auto",
            status: "scheduled",
            cancellation_reason: null,
            cancelled_at: null,
          },
          Wt,
          Bt,
          Kt,
          $t,
          ge,
          { created_at: new Date().toISOString() },
        );
      },
      La = [
        Pa(
          "g0000000-0000-4000-8000-000000000001",
          "11111111-1111-1111-1111-111111111111",
          "football",
          "intermediate",
          5,
          60,
          10,
          3,
          "Friendly 5-a-side. Cleats recommended.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000002",
          "a0000000-0000-4000-8000-000000000010",
          "football",
          "beginner",
          8,
          60,
          10,
          2.5,
          "Pickup game, all welcome.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000003",
          "a0000000-0000-4000-8000-000000000020",
          "padel",
          "beginner",
          6,
          90,
          4,
          5,
          "Doubles, beginner-friendly. Rackets to rent.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000004",
          "22222222-2222-2222-2222-222222222222",
          "padel",
          "intermediate",
          24,
          90,
          4,
          6,
          "Doubles on a panoramic court.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000005",
          "a0000000-0000-4000-8000-000000000021",
          "padel",
          "beginner",
          27,
          60,
          4,
          5,
          "Indoor doubles \u2014 coaching add-on available.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000006",
          "a0000000-0000-4000-8000-000000000011",
          "football",
          "advanced",
          30,
          90,
          14,
          4.5,
          "7-a-side, competitive level.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000007",
          "a0000000-0000-4000-8000-000000000030",
          "tennis",
          "intermediate",
          26,
          60,
          2,
          4,
          "1v1, hard court. BYO racket.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000008",
          "33333333-3333-3333-3333-333333333333",
          "tennis",
          "all",
          48,
          60,
          2,
          4,
          "1v1, 60 min court block.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000009",
          "a0000000-0000-4000-8000-000000000023",
          "padel",
          "advanced",
          50,
          90,
          4,
          7,
          "Competitive doubles \u2014 bring your own balls.",
        ),
        Pa(
          "g0000000-0000-4000-8000-00000000000a",
          "a0000000-0000-4000-8000-000000000002",
          "football",
          "intermediate",
          53,
          60,
          10,
          3.5,
          "Indoor 5-a-side cage game.",
        ),
        Pa(
          "g0000000-0000-4000-8000-00000000000b",
          "44444444-4444-4444-4444-444444444444",
          "tennis",
          "intermediate",
          72,
          90,
          4,
          4.5,
          "Doubles, outdoor hard court.",
        ),
        Pa(
          "g0000000-0000-4000-8000-00000000000c",
          "a0000000-0000-4000-8000-000000000029",
          "padel",
          "intermediate",
          76,
          60,
          4,
          6,
          "Salmiya doubles meetup.",
        ),
        Pa(
          "g0000000-0000-4000-8000-00000000000d",
          "a0000000-0000-4000-8000-000000000015",
          "football",
          "all",
          96,
          90,
          14,
          3,
          "11-a-side friendly, all welcome.",
        ),
        Pa(
          "g0000000-0000-4000-8000-00000000000e",
          "a0000000-0000-4000-8000-00000000002c",
          "padel",
          "beginner",
          12,
          60,
          4,
          4.5,
          "Mahboula evening doubles \u2014 south side.",
        ),
        Pa(
          "g0000000-0000-4000-8000-00000000000f",
          "a0000000-0000-4000-8000-000000000033",
          "tennis",
          "all",
          40,
          60,
          2,
          3.5,
          "Jahra courts \u2014 quiet, plenty of parking.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000010",
          "a0000000-0000-4000-8000-000000000024",
          "padel",
          "intermediate",
          18,
          90,
          4,
          6,
          "Bneid Al Qar \u2014 waterfront courts.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000011",
          "a0000000-0000-4000-8000-000000000032",
          "tennis",
          "intermediate",
          64,
          60,
          4,
          5,
          "Sahara Golf Club doubles, Mubarak Al-Kabeer.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000012",
          "a0000000-0000-4000-8000-000000000012",
          "football",
          "intermediate",
          34,
          90,
          12,
          4,
          "Juventus Academy 6-a-side, Adailiya.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000013",
          "a0000000-0000-4000-8000-000000000022",
          "padel",
          "advanced",
          44,
          90,
          4,
          7,
          "Play Padel Academy \u2014 competitive, Kaifan.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000014",
          "a0000000-0000-4000-8000-000000000031",
          "tennis",
          "beginner",
          20,
          60,
          2,
          4.5,
          "Palms Beach sunset tennis, Kuwait City.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000015",
          "a0000000-0000-4000-8000-00000000002d",
          "padel",
          "all",
          9,
          60,
          4,
          5.5,
          "Al Shaheed Park after-work padel.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000016",
          "a0000000-0000-4000-8000-00000000002b",
          "padel",
          "beginner",
          56,
          60,
          4,
          4,
          "Three Padel, Khaitan \u2014 relaxed pace.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000017",
          "a0000000-0000-4000-8000-000000000003",
          "football",
          "advanced",
          80,
          90,
          14,
          3.5,
          "PSA Kuwait turf, Sabhan \u2014 league standard.",
        ),
        Pa(
          "g0000000-0000-4000-8000-000000000018",
          "a0000000-0000-4000-8000-000000000026",
          "padel",
          "intermediate",
          30,
          90,
          4,
          6.5,
          "Messila beachside doubles.",
        ),
      ],
      Ga = { [W]: "asc", [we]: "asc", [at]: "desc", [$]: "desc", [me]: "asc", [ue]: "asc" },
      Ua = (e, t) => {
        const a = "desc" === t ? -1 : 1;
        e.sort(
          (e, t) =>
            a *
            ((e.created_at ?? "").localeCompare(t.created_at ?? "") ||
              (e.id ?? "").localeCompare(t.id ?? "")),
        );
      },
      xa = async (e, t) => {
        try {
          const a = l.default.getRows,
            i = Ga[e];
          if (a && i) {
            const t = await a(e);
            if (t) return (Ua(t, i), t);
          }
          const n = await l.default.getItem(e);
          return n ? JSON.parse(n) : t;
        } catch (t) {
          throw ((0, w.noteReadFailure)(e, t), t);
        }
      },
      za = async (e) => {
        const t = l.default.getRows,
          a = Ga[e];
        if (!t || !a) return;
        const i = await t(e);
        i &&
          (Ua(i, a),
          e === W ? (Qt.bookings = i) : e === me ? (Qt.courtBookings = i) : e === ue && (Qt.courtBlocks = i));
      },
      Ha = async (e, t, a) => {
        const i = l.default.withAdvisoryLock;
        return i
          ? i(e, async () => {
              for (const e of t) await za(e);
              return a();
            })
          : a();
      },
      Fa = () => !0 === Ne0().demo;
    r.demoWorldEnabled = Fa;
    const Ba = /^data:(image\/(?:png|jpe?g|webp|gif));base64,([A-Za-z0-9+/=]+)$/,
      ja = (r.MEDIA_PATH = "/media/"),
      qa = (e) => (e && e.startsWith(ja) ? e.slice(ja.length) : null),
      Ya = async (e) => {
        if (!e) return null;
        const t = Ba.exec(e);
        if (!t) return e;
        const [, a, i] = t;
        if (Math.floor((3 * i.length) / 4) > 7e5) throw new Error("E_IMAGE_TOO_LARGE_PICK_A_SMALLER");
        const n = l.default.putBlob;
        if (!n) return e;
        const r = a.slice(6).replace("jpeg", "jpg"),
          o = `${ea()}.${r}`;
        return (await n(o, a, i), `${ja}${o}`);
      },
      Wa = async (e) => {
        const t = qa(e),
          a = l.default.deleteBlob;
        if (t && a)
          try {
            await a(t);
          } catch {}
      };
    let Ka = !1;
    const $a = async () => {
      if (Ka) return;
      if (((Ka = !0), !l.default.putBlob)) return;
      const e = Qt.teams.filter((e) => e.logo_uri && Ba.test(e.logo_uri));
      if (0 !== e.length)
        try {
          for (const t of e) t.logo_uri = await Ya(t.logo_uri);
          (await Za(Ot, Qt.teams),
            console.log(`[media] moved ${e.length} inline crest(s) out of the teams row`));
        } catch (e) {
          ((Ka = !1), console.error("[media] crest migration failed:", e instanceof Error ? e.message : e));
        }
    };
    let Va = !0,
      Ja = !1;
    const Qa = new Set(),
      Za = async (e, t) => {
        (!Ja && Qa.has(e) && (Va = !0), (0, w.beginWrite)());
        try {
          const a = l.default.setRows;
          if (a && Ga[e] && Array.isArray(t)) return void (await a(e, t));
          await l.default.setItem(e, JSON.stringify(t));
        } catch (t) {
          (0, w.noteWriteFailure)(e, t);
          const a = t instanceof Error ? `${t.name} ${t.message}` : String(t);
          throw new Error(/quota|QuotaExceeded|NS_ERROR_DOM_QUOTA/i.test(a) ? "E_STORAGE_FULL" : "E_COULD_NOT_SAVE_CHANGES");
        } finally {
          (0, w.endWrite)();
        }
      };
    let Xa = null;
    const ei = () =>
        Qt.hydrated
          ? Promise.resolve()
          : (Xa ||
              (Xa = ti().finally(() => {
                Xa = null;
              })),
            Xa),
      ti = async () => {
        if (Qt.hydrated) return;
        const [
          e,
          t,
          a,
          i,
          n,
          r,
          o,
          s,
          d,
          l,
          c,
          _,
          u,
          m,
          w,
          p,
          f,
          g,
          h,
          y,
          k,
          v,
          S,
          E,
          b,
          T,
          A,
          D,
          O,
          R,
          I,
          M,
          N,
          C,
          P,
          L,
          G,
          U,
          x,
          z,
          H,
          F,
          B,
          j,
          Z,
          oe,
          se,
          de,
          he,
          $e,
          ct,
          _t,
          ft,
          Vt,
          Jt,
          Zt,
          Xt,
          ea,
          ta,
          aa,
          ia,
          na,
          ra,
          oa,
          sa,
          da,
          la,
          ca,
          _a,
          ua,
          ma,
          wa,
          pa,
          fa,
          ga,
          ha,
          ya,
          ka,
          va,
          Sa,
          Ea,
          ba,
          Ta,
          Aa,
          Da,
          Oa,
          Ra,
          Ia,
          Ma,
          Na,
          Ca,
          Pa,
          La,
          Ga,
        ] = await Promise.all([
          xa(q, []),
          xa(Y, []),
          xa(W, []),
          xa(K, []),
          xa($, []),
          xa(X, []),
          xa(ee, []),
          xa(te, []),
          xa(ae, []),
          xa(ie, []),
          xa(ne, []),
          xa(re, { uid: null }),
          xa(jt, []),
          xa(qt, []),
          xa(Yt, []),
          xa(Ft, []),
          xa(zt, []),
          xa(Ht, []),
          xa("playora.mock.rewards.v1", []),
          xa(Ut, []),
          xa(xt, []),
          xa(Gt, []),
          xa(ce, []),
          xa(_e, []),
          xa(ue, []),
          xa(me, []),
          xa(we, []),
          xa(pe, []),
          xa(fe, []),
          xa(Ot, []),
          xa(Rt, []),
          xa(It, []),
          xa(Mt, []),
          xa(Nt, []),
          xa(Ct, []),
          xa(Pt, []),
          xa(Lt, []),
          xa(bt, []),
          xa(Tt, []),
          xa(At, []),
          xa(Dt, null),
          xa(St, null),
          xa(Et, []),
          xa(kt, []),
          xa(vt, []),
          xa(gt, []),
          xa(ht, []),
          xa(yt, []),
          xa(ye, null),
          xa(ke, []),
          xa(ve, null),
          xa(Se, []),
          xa(Ee, []),
          xa(be, []),
          xa(Te, []),
          xa(Ae, []),
          xa(ut, []),
          xa(mt, []),
          xa(wt, []),
          xa(pt, []),
          xa(De, []),
          xa(Oe, []),
          xa(Re, []),
          xa(Ie, []),
          xa(Me, []),
          xa(Ne, []),
          xa(Ce, []),
          xa(Pe, []),
          xa(ze, []),
          xa(Le, []),
          xa(Ge, []),
          xa(Ue, []),
          xa(xe, []),
          xa(He, []),
          xa(Fe, []),
          xa(Be, []),
          xa(je, []),
          xa(qe, []),
          xa(Ye, []),
          xa(We, []),
          xa(Ke, []),
          xa(Ve, []),
          xa(Je, []),
          xa(Qe, []),
          xa(Ze, []),
          xa(Xe, []),
          xa(et, null),
          xa(tt, []),
          xa(at, []),
          xa(it, []),
          xa(nt, []),
          xa(rt, []),
          xa(dt, []),
          xa(lt, []),
        ]);
        if (
          ((Qt.users = e.filter((e) => !!e.passwordHash && !!e.salt)),
          Qt.users.length !== e.length && (await Za(q, Qt.users)),
          (Qt.profiles = t.map((e) =>
            Object.assign({}, e, {
              audience: e.audience ?? "male",
              privacy_visibility:
                e.privacy_visibility ?? ("female" === (e.audience ?? "male") ? "connections" : "everyone"),
              avatar_mode: e.avatar_mode ?? ("female" === (e.audience ?? "male") ? "initials" : "photo"),
              media_consent: e.media_consent ?? "female" !== (e.audience ?? "male"),
            }),
          )),
          (Qt.bookings = a.map((e) =>
            Object.assign(
              {
                attendance: e.attendance ?? null,
                reserved_until: e.reserved_until ?? null,
                updated_at: e.updated_at ?? e.created_at,
              },
              e,
            ),
          )),
          (Qt.reviews = i),
          (Qt.notifications = n),
          (Qt.pushTokens = await xa(V, [])),
          (Qt.matchEvents = await xa(ot, [])),
          (Qt.seatCancellations = await xa(st, [])),
          (Qt.paymentIntents = await xa(J, [])),
          (Qt.paymentCharges = await xa(Q, [])),
          (Qt.gamePlayers = r),
          (Qt.chatMessages = o),
          (Qt.games = s.map((e) =>
            Object.assign({}, Kt, $t, Wt, Bt, ge, e, { audience: e.audience ?? "male" }),
          )),
          (Qt.skillProfiles = u),
          (Qt.skillEvals = m),
          (Qt.mismatchIncidents = w),
          (Qt.templates = p),
          (Qt.invites = f),
          (Qt.referrals = g),
          (Qt.rewards = h),
          (Qt.achievements = y),
          (Qt.passportPrivacy = k),
          (Qt.compat = v),
          (Qt.venueProfiles = S),
          (Qt.courts = E),
          (Qt.courtBlocks = b),
          (Qt.courtBookings = T),
          (Qt.payments = A),
          (Qt.checkins = D),
          (Qt.settlements = O),
          (Qt.teams = R.map((e) => Object.assign({}, e, { audience: e.audience ?? "male" }))),
          (Qt.teamMembers = I),
          (Qt.teamEvents = M),
          (Qt.teamChat = N),
          (Qt.teamAchievements = C),
          (Qt.clanBattles = P),
          (Qt.battleResults = L),
          (Qt.leagueConfirms = G),
          (Qt.loyaltyLedger = U),
          (Qt.loyaltyRewards = x),
          (Qt.loyaltyRedemptions = z),
          (Qt.loyaltyRules = H),
          (Qt.conciergeRules = F),
          (Qt.conciergePredictions = B),
          (Qt.replacementSettings = j),
          (Qt.replacementOffers = Z),
          (Qt.sanctions = oe),
          (Qt.crossPartitionGrants = se),
          (Qt.cocAcceptances = de),
          (Qt.demandWeights = he),
          (Qt.demandLog = $e),
          (Qt.optimizerWeights = ct),
          (Qt.optimizerLog = _t),
          (Qt.clubs = ft),
          (Qt.clubMembers = Vt),
          (Qt.clubInvites = Jt),
          (Qt.clubSubs = Zt),
          (Qt.mediaUploads = Xt),
          (Qt.mediaClips = ea),
          (Qt.mediaShares = ta),
          (Qt.mediaReports = aa),
          (Qt.friendships = ia),
          (Qt.groupBookings = na),
          (Qt.groupMembers = ra),
          (Qt.savedGroups = oa),
          (Qt.savedPay = sa),
          (Qt.follows = da.map((e) => Object.assign({}, e, { status: e.status ?? "accepted" }))),
          (Qt.posts = la),
          (Qt.postComments = ca),
          (Qt.postCommentLikes = _a),
          (Qt.postLikes = ua),
          (Qt.postSaves = ma),
          (Qt.postShares = wa),
          (Qt.postReports = pa),
          (Qt.dmConversations = fa),
          (Qt.dmMessages = ga),
          (Qt.blocks = ha),
          (Qt.mutes = ya),
          (Qt.privacySettings = ka),
          (Qt.presence = va),
          (Qt.stories = Sa),
          (Qt.storyViews = Ea),
          (Qt.awardVotes = ba),
          (Qt.awardWins = Ta),
          (Qt.awardVoting = Aa),
          (Qt.awardCustom = Da),
          (Qt.feedSignals = Oa),
          (Qt.feedWeights = Ra),
          (Qt.venuePromos = Ia),
          (Qt.walletLedger = Ma),
          (Qt.walletKyc = Na),
          (Qt.walletRequests = Ca),
          (Qt.lineups = Pa),
          (Qt.matchDrafts = La),
          (Qt.lineupTemplates = Ga),
          (Qt.venues = d),
          (Qt.orgRatings = l),
          (Qt.applications = c),
          (Qt.orgSeedUid = _.uid),
          (Qt.notifsSeededFor = new Set(n.map((e) => e.user_id))),
          (Qt.playersSeededFor = new Set(r.map((e) => e.game_id))),
          (Qt.chatSeededFor = new Set(o.map((e) => e.game_id))),
          le.size > 0)
        ) {
          const e = new Set(
            Qt.users
              .filter((e) => {
                return ((t = e.email), le.has(t.trim().toLowerCase()));
                var t;
              })
              .map((e) => e.id),
          );
          let t = !1;
          ((Qt.profiles = Qt.profiles.map((a) =>
            e.has(a.id) && "admin" !== a.role ? ((t = !0), Object.assign({}, a, { role: "admin" })) : a,
          )),
            t && (await Za(Y, Qt.profiles)));
        }
        {
          // Rows written before ji learned to revive: a player who cancelled and rejoined owns two or
          // three for the same game. Keep the newest live one, or the newest row if none is live, and
          // drop the rest - an unfiltered lookup on (game, user) has to have one answer.
          const seen9 = new Map();
          for (const e of Qt.bookings) {
            const t = `${e.game_id}|${e.user_id}`,
              a = seen9.get(t);
            if (!a) {
              seen9.set(t, e);
              continue;
            }
            const i = (e) => ("cancelled" !== e.status && "rejected" !== e.status ? 1 : 0),
              n =
                i(e) - i(a) ||
                (e.created_at ?? "").localeCompare(a.created_at ?? "") ||
                (e.id ?? "").localeCompare(a.id ?? "");
            n > 0 && seen9.set(t, e);
          }
          const collapsed9 = seen9.size !== Qt.bookings.length;
          // No audit row here: this block runs inside hydrate, where `w` is shadowed by a local, and
          // a migration that fires once per device is not an event anyone needs in the log anyway.
          collapsed9 &&
            (Qt.bookings = Qt.bookings.filter((e) => seen9.get(`${e.game_id}|${e.user_id}`) === e));
          // Rows written before the check-in token existed. It has to be persisted, not minted on
          // read, or the re-read the match lock performs would drop it.
          let minted9 = !1;
          for (const e of Qt.bookings)
            e.checkin_token ||
              "cancelled" === e.status ||
              "rejected" === e.status ||
              ((e.checkin_token = mkCheckinToken9()), (minted9 = !0));
          (collapsed9 || minted9) && (await Za(W, Qt.bookings));
        }
        ((Qt.hydrated = !0), $a());
      },
      ai = [
        "Ahmad Al-Saleh",
        "Yousef Behbehani",
        "Khalid Al-Mutairi",
        "Omar Al-Rashidi",
        "Faisal Al-Sabah",
        "Hassan Al-Otaibi",
        "Mishari Al-Enezi",
        "Bader Al-Awadi",
        "Salem Al-Dosari",
        "Talal Al-Ajmi",
        "Nasser Al-Qahtani",
        "Abdullah Al-Hajeri",
        "Mohammed Al-Failakawi",
        "Rashed Al-Khaled",
        "Saud Al-Subaie",
      ],
      ii = (e, t) => {
        let a = 0;
        for (let t = 0; t < e.length; t++) a = (31 * a + e.charCodeAt(t)) >>> 0;
        const i = Array.from({ length: ai.length }, (e, t) => t);
        for (let e = i.length - 1; e > 0; e--) {
          a = (1103515245 * a + 12345) >>> 0;
          const t = a % (e + 1);
          [i[e], i[t]] = [i[t], i[e]];
        }
        return i.slice(0, t).map((e) => ai[e]);
      },
      ni = (e) =>
        `demo:${e
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}`,
      ri = (e, t, a) =>
        !!Fa() &&
        !Qt.profiles.some((t) => t.id === e) &&
        (Qt.profiles.push({
          id: e,
          full_name: t,
          avatar_url: null,
          phone: null,
          audience: "male",
          privacy_visibility: "everyone",
          avatar_mode: "photo",
          media_consent: !0,
          preferred_sports: [a],
          skill_level: "intermediate",
          bio: null,
          role: "user",
          consent: { analytics: !1, marketing: !1 },
          consent_updated_at: null,
          created_at: new Date().toISOString(),
        }),
        !0),
      oi = async (e) => {
        if ((await ei(), Qt.playersSeededFor.has(e.id))) return;
        const t = Math.max(0, Math.floor(0.6 * e.max_players)),
          a = ii(e.id, t);
        let i = !1;
        const n = a.map((t, a) => {
          const n = ni(t);
          return (
            ri(n, t, e.sport) && (i = !0),
            {
              id: `${e.id}-p${a}`,
              game_id: e.id,
              display_name: t,
              avatar_seed: a,
              team: a % 2 == 0 ? "A" : "B",
              user_id: n,
            }
          );
        });
        (Qt.gamePlayers.push(...n),
          Qt.playersSeededFor.add(e.id),
          await Za(X, Qt.gamePlayers),
          i && (await Za(Y, Qt.profiles)));
      };
    r.mockEnsureGamePlayersSeed = async () => {
      await ei();
      for (const e of La) Qt.playersSeededFor.has(e.id) || (await oi(e));
    };
    r.mockEnsureNotificationsSeed = async (e) => {
      await si(e);
    };
    const si = async (e) => {
        if (!Fa()) return;
        if ((await ei(), Qt.notifsSeededFor.has(e))) return;
        const t = (e) => new Date(Date.now() - 6e4 * e).toISOString(),
          a = [
            {
              id: ea(),
              user_id: e,
              type: "match_reminder",
              game_id: "g0000000-0000-4000-8000-000000000001",
              venue_name: "Salmiya Sports Hub",
              sport: "football",
              minutes_until: 60,
              read: !1,
              created_at: t(2),
            },
            {
              id: ea(),
              user_id: e,
              type: "friend_activity",
              game_id: "g0000000-0000-4000-8000-000000000004",
              friend_name: "Ahmad Al-Saleh",
              venue_name: "Jabriya Padel Club",
              sport: "padel",
              read: !1,
              created_at: t(22),
            },
            {
              id: ea(),
              user_id: e,
              type: "friend_activity",
              game_id: "g0000000-0000-4000-8000-000000000007",
              friend_name: "Yousef Behbehani",
              venue_name: "Kuwait Tennis Federation",
              sport: "tennis",
              read: !0,
              created_at: t(360),
            },
            {
              id: ea(),
              user_id: e,
              type: "match_reminder",
              game_id: "g0000000-0000-4000-8000-000000000008",
              venue_name: "Hawalli Tennis Center",
              sport: "tennis",
              minutes_until: 2880,
              read: !0,
              created_at: t(1440),
            },
          ];
        ((Qt.notifications = [...a, ...Qt.notifications]),
          Qt.notifsSeededFor.add(e),
          await Za($, Qt.notifications));
      },
      di = async () => {
        const e = await (0, _.secureGet)(Vt);
        if (!e) return null;
        try {
          const t = JSON.parse(e);
          if (!t || "object" != typeof t || !t.user?.id) return null;
          // CSEC (consumer audit): the expiry used to be optional, so any session written without one
          // was honoured forever. A session with no expiry stamp is not a valid session.
          if ("number" != typeof t.expires_at) {
            await (0, _.secureDelete)(Vt);
            return null;
          }
          if (t.expires_at < Date.now()) {
            (await (0, _.secureDelete)(Vt), await (0, w.logAudit)("auth.session_expired", (0, w.actorRef)(t.user.id)));
            return null;
          }
          return t;
        } catch {
          return null;
        }
      };
    r.loadSession = di;
    r.SESSION_TTL_MS = 2592e6;
    const li = async (e) => {
        e
          ? await (0, _.secureSet)(Vt, JSON.stringify(Object.assign({ expires_at: Date.now() + 2592e6 }, e)))
          : await (0, _.secureDelete)(Vt);
      },
      ci = async (e, t, a, i = "male") => {
        await ei();
        const n = e.trim().toLowerCase();
        if (!(0, v.isValidEmail)(n)) throw new Error("E_ENTER_A_VALID_EMAIL_ADDRESS");
        if (!(0, v.isStrongPassword)(t)) throw new Error("E_PASSWORD_DOES_NOT_MEET_THE_STRENGTH");
        if (Qt.users.some((e) => e.email === n)) throw new Error("E_COULD_NOT_CREATE_THE_ACCOUNT_TRY");
        const r = ea(),
          o = await (0, c.generateSalt)(),
          s = await (0, c.hashPassword)(t, o);
        Qt.users.push({ id: r, email: n, salt: o, passwordHash: s, failedAttempts: 0, lockedUntil: null });
        const d = "female" === i,
          l = {
            id: r,
            full_name: a || n.split("@")[0],
            avatar_url: null,
            phone: null,
            audience: i,
            privacy_visibility: d ? "connections" : "everyone",
            avatar_mode: d ? "initials" : "photo",
            media_consent: !d,
            preferred_sports: [],
            skill_level: "all",
            bio: null,
            role: "user",
            consent: { analytics: !1, marketing: !1 },
            consent_updated_at: null,
            created_at: new Date().toISOString(),
          };
        (Qt.profiles.push(l), await Promise.all([Za(q, Qt.users), Za(Y, Qt.profiles)]), await Ne1(r, n));
        const _ = await (0, c.randomToken)(),
          u = { user: { id: r, email: n }, token: _ };
        return (await li(u), await si(r), await (0, w.logAudit)("auth.sign_up", (0, w.actorRef)(r)), u);
      };
    r.mockSignUp = ci;
    const _i = async (e, t) => {
      const a = t - (Date.now() - e);
      a > 0 && (await new Promise((e) => setTimeout(e, a)));
    };
    r.mockSignIn = async (e, t) => {
      await ei();
      const a = Date.now(),
        i = e.trim().toLowerCase(),
        n = Qt.users.find((e) => e.email === i),
        r = Date.now();
      if (n?.lockedUntil && n.lockedUntil > r) {
        await (0, w.logAudit)("auth.locked_out", (0, w.actorRef)(n.id));
        const e = Math.ceil((n.lockedUntil - r) / 6e4);
        throw (await _i(a, 200), new Error(`E_TOO_MANY_ATTEMPTS_MINUTES:${e}`));
      }
      const o = n?.salt ?? "dummy-salt-for-constant-work";
      let s = !1;
      if ((n ? (s = await (0, c.verifyPassword)(t, o, n.passwordHash)) : await (0, c.hashPassword)(t, o), !s))
        throw (
          n &&
            ((n.failedAttempts += 1),
            n.failedAttempts >= 5 &&
              ((n.lockedUntil = r + 9e5),
              (n.failedAttempts = 0),
              await (0, w.logAudit)("auth.locked_out", (0, w.actorRef)(n.id))),
            await Za(q, Qt.users)),
          await (0, w.logAudit)("auth.sign_in_failed", n ? (0, w.actorRef)(n.id) : null),
          await _i(a, 200),
          new Error("Invalid email or password.")
        );
      if (
        ((n.failedAttempts = 0),
        (n.lockedUntil = null),
        c.serverGradeHashing && !n.passwordHash.startsWith("scrypt$"))
      ) {
        const e = await (0, c.generateSalt)(),
          a = await (0, c.hashPassword)(t, e);
        ((n.salt = e), (n.passwordHash = a));
      }
      (await Za(q, Qt.users), await Ne1(n.id, n.email));
      const d = await (0, c.randomToken)(),
        l = { user: { id: n.id, email: n.email }, token: d };
      return (
        await li(l),
        await si(n.id),
        await (0, w.logAudit)("auth.sign_in", (0, w.actorRef)(n.id)),
        await _i(a, 200),
        l
      );
    };
    r.mockSignOut = async () => {
      const e = await di();
      (await li(null), await (0, w.logAudit)("auth.sign_out", (0, w.actorRef)(e?.user.id ?? null)));
    };
    r.mockGetProfile = async (e) => (await ei(), Qt.profiles.find((t) => t.id === e) ?? null);
    r.mockUpdateProfile = async (e, t) => {
      await ei();
      const a = Qt.profiles.findIndex((t) => t.id === e);
      if (a >= 0) {
        if ("audience" in t && t.audience !== Qt.profiles[a].audience) throw new Error("AUDIENCE_IMMUTABLE");
        if ("username" in t && null != t.username) {
          const i = Qt.profiles[a].username ?? null,
            n = String(t.username).trim().toLowerCase();
          if (null != i && n !== i) throw new Error("E_USERNAME_IS_SET_FOR_LIFE");
          if (null == i) {
            if (!/^[a-z0-9_]{3,20}$/.test(n)) throw new Error("E_PICK_A_SIMPLER_USERNAME");
            const i = Qt.profiles[a].audience;
            if (Qt.profiles.some((t) => t.id !== e && t.audience === i && (t.username ?? null) === n))
              throw new Error("E_THAT_USERNAME_IS_TAKEN");
            ((t = Object.assign({}, t, { username: n })),
              await (0, w.logAudit)("profile.username_set", (0, w.actorRef)(e)));
          }
        }
        const i = t,
          n = (0, d.default)(i, B);
        ((Qt.profiles[a] = Object.assign({}, Qt.profiles[a], n)),
          await Za(Y, Qt.profiles),
          await (0, w.logAudit)("profile.updated", (0, w.actorRef)(e)));
      }
    };
    r.mockUpdateConsent = async (e, t) => {
      await ei();
      const a = Qt.profiles.findIndex((t) => t.id === e);
      a < 0 ||
        ((Qt.profiles[a] = Object.assign({}, Qt.profiles[a], {
          consent: t,
          consent_updated_at: new Date().toISOString(),
        })),
        await Za(Y, Qt.profiles),
        await (0, w.logAudit)("consent.changed", (0, w.actorRef)(e), {
          analytics: t.analytics,
          marketing: t.marketing,
        }));
    };
    r.mockExportUserData = async (e) => {
      await ei();
      const t = Qt.profiles.find((t) => t.id === e) ?? null,
        a = Qt.bookings.filter((t) => t.user_id === e),
        i = Qt.reviews.filter((t) => t.user_id === e),
        n = Qt.notifications.filter((t) => t.user_id === e),
        r = Qt.chatMessages.filter((t) => t.author_id === `self-${e}`);
      return (
        await (0, w.logAudit)("data.exported", (0, w.actorRef)(e)),
        {
          exported_at: new Date().toISOString(),
          profile: t,
          bookings: a,
          reviews: i,
          notifications: n,
          chat_messages: r,
        }
      );
    };
    r.mockDeleteAccount = async (e) => {
      await ei();
      const t = e;
      ((Qt.users = Qt.users.filter((e) => e.id !== t)),
        (Qt.profiles = Qt.profiles.filter((e) => e.id !== t)),
        (Qt.bookings = Qt.bookings.filter((e) => e.user_id !== t)),
        (Qt.reviews = Qt.reviews.filter((e) => e.user_id !== t)),
        (Qt.notifications = Qt.notifications.filter((e) => e.user_id !== t)),
        (Qt.gamePlayers = Qt.gamePlayers.filter((e) => e.id !== `self-${t}`)),
        (Qt.chatMessages = Qt.chatMessages.filter((e) => e.author_id !== `self-${t}`)),
        await Promise.all([
          Za(q, Qt.users),
          Za(Y, Qt.profiles),
          Za(W, Qt.bookings),
          Za(K, Qt.reviews),
          Za($, Qt.notifications),
          Za(X, Qt.gamePlayers),
          Za(ee, Qt.chatMessages),
        ]),
        await (0, w.logAudit)("data.deleted", (0, w.actorRef)(t)),
        await li(null));
    };
    const ui = {
        "a0000000-0000-4000-8000-000000000003": {
          ladies_hours: [
            { day: 0, start: "17:00", end: "22:00" },
            { day: 3, start: "17:00", end: "22:00" },
          ],
          staffing_note: "Female staff on duty during \u0633\u064a\u062f\u0627\u062a hours",
        },
        "11111111-1111-1111-1111-111111111111": {
          ladies_hours: [
            { day: 0, start: "18:00", end: "23:00" },
            { day: 2, start: "18:00", end: "23:00" },
          ],
          staffing_note: "Female coaches available Sunday & Tuesday",
        },
      },
      mi = async () => {
        Fa() && (await wi());
      },
      wi = async () => {
        await ei();
        const e = Date.now(),
          t = 6048e5;
        let a = 0;
        for (const i of La) {
          if ("scheduled" !== i.status) continue;
          const n = new Date(i.starts_at).getTime();
          if (Number.isNaN(n) || n >= e) continue;
          const r = Math.ceil((e - n) / t) * t;
          ((i.starts_at = new Date(n + r).toISOString()),
            i.ends_at && (i.ends_at = new Date(new Date(i.ends_at).getTime() + r).toISOString()),
            a++);
        }
        return { shifted: a };
      };
    r.mockRefreshDemoGames = wi;
    // ORG1 (F-ORG1-22): demo fixtures carry `seeded: true` so a seeded venue or match is never
    // indistinguishable from a row a real organizer created. The rows only exist when the demo flag
    // is on (see F-XC-5), and the dock shows a demo banner whenever it is.
    for (const s9 of Ta) s9.seeded = !0;
    for (const s9 of La) s9.seeded = !0;
    const pi = async () => (await ei(), fi().sort((e, t) => t.rating - e.rating));
    // ORG1 (F-ORG1-19): pi() stays the complete lookup used to resolve a match's venue. The public
    // directory only lists venues that have not been withheld pending review.
    r.mockGetVenues = async () => (await pi()).filter((e) => !1 !== e.listed);
    r.mockGetVenue = async (e) => {
      const t = (await pi()).find((t) => t.id === e);
      if (!t) return null;
      const a = Qt.reviews.filter((t) => t.venue_id === e);
      if (0 === a.length) return t;
      const i = a.reduce((e, t) => e + t.rating, 0) + t.rating * t.rating_count,
        n = a.length + t.rating_count;
      return Object.assign({}, t, { rating: Math.round((i / n) * 10) / 10, rating_count: n });
    };
    const fi = () =>
        (Fa() ? [...Ta, ...Qt.venues] : Qt.venues).map((e) =>
          ui[e.id] ? Object.assign({}, e, ui[e.id]) : e,
        ),
      gi = () => (Fa() ? [...La, ...Qt.games] : Qt.games),
      hi = (e) => gi().find((t) => t.id === e),
      yi = (e, t) =>
        "confirmed" === e.status ||
        ("reserved" === e.status && !!e.reserved_until && new Date(e.reserved_until).getTime() > t),
      ki = (e, t = Date.now()) => Qt.bookings.filter((a) => a.game_id === e && yi(a, t)).length,
      // "Was in this match". This test appeared fourteen times in two shapes, and eight of them left
      // out the status guard the other six applied - so a booking a player cancelled a week early
      // still counted the moment anyone wrote an attendance mark onto it, in fill rate, returning
      // players, attendance rate and the reliability score. One definition, used everywhere.
      countsAsParticipant9 = (e) =>
        "confirmed" === e.status ||
        ("cancelled" !== e.status && "rejected" !== e.status && null != e.attendance),

      vi = (e) =>
        Qt.bookings
          .filter((t) => t.game_id === e && "waitlisted" === t.status)
          .sort((e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime());
    r.mockRegisterPushToken = async (e, t) => {
      if ((await ei(), !/^Expo(nent)?PushToken\[[\w-]+\]$/.test(t)))
        throw new Error("E_NOT_AN_EXPO_PUSH_TOKEN");
      return (
        Qt.pushTokens.some((a) => a.user_id === e && a.token === t) ||
          ((Qt.pushTokens = Qt.pushTokens.filter((e) => e.token !== t)),
          Qt.pushTokens.push({ user_id: e, token: t, created_at: new Date().toISOString() }),
          await Za(V, Qt.pushTokens),
          await (0, w.logAudit)("funnel.event", (0, w.actorRef)(e), { e: "push:registered" })),
        { ok: !0 }
      );
    };
    const Si = (e) => {
        const t = e.venue_name ?? "your match";
        switch (e.type) {
          case "award_voting_closing":
            return { title: "Last call to vote", body: `MVP voting for ${t} closes in a few hours.` };
          case "award_results":
            return { title: "Match awards are in", body: `See who took the honours at ${t}.` };
          case "match_reminder":
            return { title: "Game soon", body: `Your match at ${t} is coming up.` };
          case "removed_from_match":
            return { title: "Roster update", body: `You\u2019ve been removed from the match at ${t}.` };
          case "match_score":
            return { title: "Final score is in", body: `See the result from ${t}.` };
          case "challenge_received":
            return {
              title: "You\u2019ve been challenged",
              body: "A rival clan threw a gauntlet \u2014 answer on the battle board.",
            };
          case "challenge_accepted":
            return {
              title: "Challenge accepted",
              body: "Your gauntlet was picked up \u2014 the battle is on.",
            };
          case "new_follower":
            return { title: "New follower", body: "Someone started following you." };
          case "follow_request":
            return { title: "Follow request", body: "Someone wants to follow you." };
          case "team_badge_unlocked":
            return { title: "Badge unlocked", body: "Your clan earned a new badge." };
          case "follow_accepted":
            return { title: "Request accepted", body: "You are now following them." };
          case "payment_received":
            return { title: "Payment received", body: `A player paid their share for ${t}.` };
          case "squad_confirm_needed":
            return { title: "Are you still in?", body: `Confirm your spot for ${t} before the deadline.` };
          case "squad_dropped":
            return { title: "Dropped from the squad", body: `You didn\u2019t confirm in time for ${t}.` };
          case "squad_window_closed":
            return {
              title: "Squad locked in",
              body: `Confirmation closed for ${t} \u2014 see who\u2019s in.`,
            };
          default:
            return { title: "Rush X", body: "Something new is waiting for you." };
        }
      },
      Ei = (e) => {
        const t = Qt.pushTokens.filter((t) => t.user_id === e.user_id).map((e) => e.token);
        if (0 === t.length) return;
        const { title: a, body: i } = Si(e);
        fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(t.map((e) => ({ to: e, title: a, body: i, sound: "default" }))),
        }).catch(() => {});
      },
      // The second argument bypasses the one-minute duplicate guard. It exists for the case where a
      // second notification of the same type about the same match is the point rather than noise - a
      // corrected score contradicts the one just sent, and suppressing it leaves the player holding
      // the wrong result.
      bi = async (e, t9) => {
        e.audience = e.audience ?? aa(e.user_id);
        const t = Date.now() - 6e4;
        (!t9 &&
          Qt.notifications.some(
            (a) =>
              a.user_id === e.user_id &&
              a.type === e.type &&
              a.game_id === e.game_id &&
              !a.read &&
              new Date(a.created_at).getTime() > t,
          )) ||
          ((Qt.notifications = [e, ...Qt.notifications]), await Za($, Qt.notifications), Ei(e));
      },
      Ti = async (e, t, a) => {
        const i = new Date().toISOString(),
          n = new Set(a),
          r = new Set();
        (n.has(e.organizer_id) || r.add(e.organizer_id),
          Qt.bookings
            .filter((t) => t.game_id === e.id && "confirmed" === t.status && !n.has(t.user_id))
            .forEach((e) => r.add(e.user_id)));
        for (const a of r)
          await bi({
            id: ea(),
            user_id: a,
            type: "player_joined",
            game_id: e.id,
            venue_name: Ai(e.venue_id),
            sport: e.sport,
            player_name: t,
            read: !1,
            created_at: i,
          });
      },
      Ai = (e) => fi().find((t) => t.id === e)?.name ?? "the venue",
      Di = async (e) => {
        const t = Date.now();
        // rd already refuses to act on a match that is cancelled or finished; Di did not, so every
        // sweep that touched a stale match (mockGetOrganizerMatches among them) promoted waitlisted
        // players into it - taking a seat payment and firing a waitlist_promoted notification for a
        // game that was already over. The guard covers the promotion loop only: the reserved-hold
        // sweep below still runs unconditionally so stale holds clear on a finished match, and the
        // return value still reports whether anything changed so the bookings table is persisted.
        const n = "cancelled" !== e.status && new Date(e.ends_at).getTime() > t;
        let a = !1;
        for (const i of Qt.bookings)
          i.game_id === e.id &&
            "reserved" === i.status &&
            i.reserved_until &&
            new Date(i.reserved_until).getTime() <= t &&
            ((i.status = "cancelled"),
            (i.reserved_until = null),
            (i.updated_at = new Date(t).toISOString()),
            (a = !0),
            await (0, w.logAudit)("participant.reservation_expired", (0, w.actorRef)(i.user_id), {
              game: e.id.slice(-6),
            }));
        for (; n && ki(e.id, t) < e.max_players; ) {
          const i = vi(e.id)[0];
          if (!i) break;
          ((i.status = "reserved"),
            (i.reserved_until = new Date(t + 9e5).toISOString()),
            (i.updated_at = new Date(t).toISOString()),
            (a = !0),
            await (0, w.logAudit)("participant.promoted", (0, w.actorRef)(i.user_id), {
              game: e.id.slice(-6),
            }),
            await Hr(e, i.user_id, i.id),
            await bi({
              id: ea(),
              user_id: i.user_id,
              type: "waitlist_promoted",
              game_id: e.id,
              venue_name: Ai(e.venue_id),
              sport: e.sport,
              minutes: Math.round(15),
              read: !1,
              created_at: new Date(t).toISOString(),
            }),
            await Ti(e, i.display_name ?? "A waitlisted player", [i.user_id]));
        }
        return (a && (await Za(W, Qt.bookings)), a);
      },
      Oi = (e) => {
        const t = hi(e);
        return t ? Xt(e, () => Di(t)) : Promise.resolve(!1);
      },
      // The viewer's own check-in token. Minted where the booking row is written, so that it is
      // persisted - a token that existed only in memory would not survive the re-read the match lock
      // performs, and the scanner would never find it.
      checkinTokenFor9 = (e, t) => {
        if (!t) return null;
        const a = Qt.bookings.find(
          (a) =>
            a.game_id === e && a.user_id === t && "cancelled" !== a.status && "rejected" !== a.status,
        );
        return a?.checkin_token ?? null;
      },
      // "May this caller see this match at all". `visibility` was decorative: join never read it and
      // the getter returned the whole row, so anyone holding the id could read a private match and
      // its invite code. Mirrors the team rule in mockGetTeams - "private" !== privacy || member ||
      // admin - with a live booking standing in for membership. An invite holder reaches the match
      // through mockResolveInviteCode, not here.
      //
      // It lived inside Ni, and only inside Ni. Every sibling reader of the same match answered in
      // full: mockGetGameScreen fetched the roster, the lineup, the fit score and the evaluation
      // targets before it ever looked at what Ni had returned, so a stranger asking for a private
      // match got game: null and, next to it, every player's name and id and the board they were
      // standing on. mockGetGamePlayers and mockGetLineup answered the same way when asked directly.
      err9 = () => {
        throw new Error("E_MATCH_NOT_FOUND");
      },
      maySeeMatch9 = (e, t) =>
        "private" !== e.visibility || e.organizer_id === t || null != Ri(e.id, t) || !!(t && ro(t)),
      Ri = (e, t) => {
        if (!t) return null;
        const a = Qt.bookings.find(
          (a) => a.game_id === e && a.user_id === t && "cancelled" !== a.status && "rejected" !== a.status,
        );
        return a ? a.status : null;
      },
      Ii = (e, t, a) => {
        const i = t.get(e.venue_id),
          n = Ri(e.id, a);
        return Object.assign({}, e, {
          // The invite code is a capability - holding it is enough to join a private match - and this
          // DTO spread the whole row, so every caller got it. mockGetOrganizerMatches already treats it
          // as the organizer's alone and withholds it from admins too; match that here rather than
          // inventing a second rule.
          invite_code: e.organizer_id === a ? (e.invite_code ?? null) : null,
          venue: i,
          bookings_count: ki(e.id),
          waitlist_count: vi(e.id).length,
          pending_count: Qt.bookings.filter((t) => t.game_id === e.id && "pending" === t.status).length,
          user_booked: "confirmed" === n,
          user_status: n,
          // Di gives a promoted waitlister fifteen minutes, and the notification it sends says so -
          // but the DTO returned the status and not the deadline, so the reserved CTA had no
          // countdown to show and the seat simply vanished. The confirmed-with-payment branch right
          // above it already renders one off the payment's own deadline.
          // So /game/[id] can mark a result that an admin has corrected.
          score_corrected_at: e.score_corrected_at ?? null,
          // The matchday ticket used to print PLY-<last four of the game id>-KWT, which is identical
          // for every player in the match and for anyone who has ever seen the URL, and was never
          // sent anywhere - the scan authenticated on the venue's own token and a player picked off a
          // list. This is a real per-booking credential, so the ticket proves something.
          user_checkin_token: checkinTokenFor9(e.id, a),
          user_reserved_until:
            Qt.bookings.find(
              (t) =>
                t.game_id === e.id &&
                t.user_id === a &&
                "cancelled" !== t.status &&
                "rejected" !== t.status,
            )?.reserved_until ?? null,
          organizer_name: e.organizer_id === Aa ? void 0 : or(e.organizer_id),
          series_frequency: e.series_id
            ? (Qt.templates.find((t) => t.id === e.series_id)?.frequency ?? null)
            : null,
        });
      },
      Mi = async (e) => {
        (await ei(), await tn(), await Yn());
        const t = await pi(),
          a = new Map(t.map((e) => [e.id, e])),
          i = Date.now(),
          n = gi().filter(
            (e) =>
              "scheduled" === e.status && "public" === e.visibility && new Date(e.starts_at).getTime() >= i,
          );
        return (
          await Promise.all(n.map((e) => Oi(e.id))),
          na(n, e?.userId)
            .filter((t) => !e?.sport || t.sport === e.sport)
            .sort((e, t) => new Date(e.starts_at).getTime() - new Date(t.starts_at).getTime())
            .map((t) => Ii(t, a, e?.userId))
        );
      };
    r.mockGetUpcomingGames = Mi;
    const Ni = async (e, t) => {
      (await ei(), await tn(), await Oi(e));
      const a = hi(e);
      if (!a) return null;
      ra(t, a.audience);
      if (!maySeeMatch9(a, t)) return null;
      const i = new Map((await pi()).map((e) => [e.id, e]));
      return Ii(a, i, t);
    };
    r.mockGetGame = Ni;
    r.mockGetMyCourtBookings = async (e) => (
      await ei(),
      Qt.courtBookings
        .filter((t) => t.organizer_id === e && "cancelled" !== t.status)
        .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime())
        .map((e) =>
          Object.assign({}, e, {
            venue_name: Ai(e.venue_id),
            court_name: Qt.courts.find((t) => t.id === e.court_id)?.name ?? "",
          }),
        )
    );
    r.mockGetMyBookings = async (e) => {
      await ei();
      const t = await pi(),
        a = new Map(t.map((e) => [e.id, e]));
      // This did none of the housekeeping its siblings do, so an expired fifteen-minute hold still
      // reported itself as reserved until some other read of that match happened to sweep it. Sweep
      // the matches this player actually has bookings in, once each.
      for (const t of new Set(
        Qt.bookings.filter((t) => t.user_id === e).map((e) => e.game_id),
      ))
        await Oi(t);
      const cut9 = Date.now() - 90 * 864e5;
      return Qt.bookings
        .filter((t) => t.user_id === e)
        // Rejected rows are not this player's history, and cancelled ones older than ninety days are
        // not either - the screen grew into a wall of red for anyone who had used the app for a
        // while. Everything live, and recent history.
        .filter(
          (e) =>
            "rejected" !== e.status &&
            ("cancelled" !== e.status ||
              new Date(e.updated_at ?? e.created_at ?? 0).getTime() > cut9),
        )
        // By kick-off, not by when the row was written: a booking for next month used to sit above
        // tonight's.
        .sort((e, t) => {
          const a9 = hi(e.game_id),
            i9 = hi(t.game_id),
            n9 = a9 ? new Date(a9.starts_at).getTime() : 0,
            r9 = i9 ? new Date(i9.starts_at).getTime() : 0,
            o9 = Date.now(),
            s9 = n9 >= o9,
            d9 = r9 >= o9;
          return s9 !== d9 ? (s9 ? -1 : 1) : s9 ? n9 - r9 : r9 - n9;
        })
        .map((t) => {
          const i = hi(t.game_id);
          if (!i) return null;
          const n = Qt.payments.find(
            (a) =>
              "seat" === a.kind &&
              a.game_id === t.game_id &&
              a.payer_id === e &&
              ("paid" === a.status || "pending" === a.status),
          );
          return Object.assign({}, t, {
            game: Object.assign({}, i, { venue: a.get(i.venue_id) }),
            seat_payment: n
              ? {
                  payment_id: n.id,
                  status: n.status,
                  amount_kwd: n.amount_kwd,
                  method: n.method,
                  paid_at: n.paid_at,
                  deadline: n.reserved_until,
                }
              : null,
          });
        })
        .filter((e) => null !== e);
    };
    r.mockCreateBooking = async (e, t) => {
      await ji(e, t);
    };
    r.mockCancelBooking = async (e, t) => {
      await ei();
      const a = Qt.bookings.find((t) => t.id === e);
      if (!a) return;
      const i = hi(a.game_id),
        n = a.user_id === t,
        r = !!i && i.organizer_id === t;
      if (!n && !r && !ro(t))
        throw (
          await (0, w.logAudit)("participant.rejected", (0, w.actorRef)(t), {
            booking: e.slice(-6),
            reason: "not_owner",
          }),
          new Error("E_YOU_CAN_ONLY_CANCEL_YOUR_OWN")
        );
      // This used to flip the status and promote the waitlist without ever settling the payment, so
      // the /my-bookings button silently kept the money while the Leave button on /game/[id] refunded
      // it - two ways to give up a seat, one refund. qi (mockLeaveMatch) is the one that does it
      // properly: refund, lineup cleanup, and a seatCancellations row. It takes its own Xt lock on the
      // game, so it must not be wrapped in one again here.
      // The seat settled is the booking's owner, not the caller, so an organizer or admin cancelling
      // on someone's behalf refunds that player rather than themselves.
      //
      // qi logs match.leave with the booking's owner as the actor, which is right when the player
      // cancelled their own seat and wrong for the other two actors this function admits: every
      // organizer and admin removal through here was recorded in the audit log as the player having
      // left of their own accord, with no way to tell the two apart afterwards. Record the removal
      // against the caller before delegating. participant.removed already exists with this shape.
      return (
        n ||
          (await (0, w.logAudit)("participant.removed", (0, w.actorRef)(t), {
            game: a.game_id.slice(-6),
            player: (0, w.actorRef)(a.user_id) ?? "unknown",
            via: "cancel_booking",
          })),
        qi(a.game_id, a.user_id)
      );
    };
    r.mockGetReviews = async (e) => (
      await ei(),
      Qt.reviews
        .filter((t) => t.venue_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map((e) => {
          const t = Qt.profiles.find((t) => t.id === e.user_id);
          return Object.assign({}, e, {
            author: t ? { full_name: t.full_name, avatar_url: t.avatar_url } : void 0,
          });
        })
    );
    const Ci = "playora.mock.contact.v1";
    r.mockSubmitContact = async (e) => {
      const t = await xa(Ci, []),
        a = {
          id: ea(),
          first_name: (0, v.sanitizeName)(e.first_name),
          last_name: (0, v.sanitizeName)(e.last_name),
          email: (0, v.sanitizeText)(e.email, 254),
          phone: (0, v.sanitizePhone)(e.phone),
          topic: e.topic,
          message: (0, v.sanitizeText)(e.message, 2e3),
          created_at: new Date().toISOString(),
        };
      return (await Za(Ci, [a, ...t]), a);
    };
    const Pi = [
        { channel: "general", body: "Yalla everyone, see you on the pitch \ud83d\ude4c", offsetMinutes: 180 },
        { channel: "general", body: "Reminder: bring water \u2014 it's warm tonight.", offsetMinutes: 150 },
        {
          channel: "team_a",
          body: "Team A \u2014 let's warm up 10 min before. Same as last week.",
          offsetMinutes: 120,
        },
        { channel: "team_b", body: "B squad, anyone wants to take the keeper position?", offsetMinutes: 110 },
        { channel: "team_b", body: "I'll take it \ud83d\udc4c", offsetMinutes: 105 },
        {
          channel: "general",
          body: "Parking near the entrance is full \u2014 try the back gate.",
          offsetMinutes: 60,
        },
        { channel: "team_a", body: "On my way, 10 min out.", offsetMinutes: 30 },
        { channel: "general", body: "Running 5 min late, please wait!", offsetMinutes: 8 },
      ],
      Li = async (e) => {
        if ((await ei(), Qt.chatSeededFor.has(e))) return;
        const t = Qt.gamePlayers.filter((t) => t.game_id === e && !t.is_self);
        if (0 === t.length) return;
        const a = Date.now(),
          i = Pi.map((i, n) => {
            const r = t.filter((e) =>
                "team_a" === i.channel ? "A" === e.team : "team_b" !== i.channel || "B" === e.team,
              ),
              o = (r.length > 0 ? r : t)[n % Math.max(1, r.length || t.length)];
            return {
              id: `${e}-c${n}`,
              game_id: e,
              channel: i.channel,
              author_id: o.id,
              author_name: o.display_name,
              avatar_seed: o.avatar_seed,
              is_self: !1,
              body: i.body,
              created_at: new Date(a - 6e4 * i.offsetMinutes).toISOString(),
            };
          });
        (Qt.chatMessages.push(...i), Qt.chatSeededFor.add(e), await Za(ee, Qt.chatMessages));
      };
    r.mockEnsureChatSeed = async (e) => {
      await ei();
      const t = La.find((t) => t.id === e);
      (t && (await oi(t)), await Li(e));
    };
    r.mockGetChatMessages = async (e, t, a) => (
      await ei(),
      Qt.chatMessages
        .filter((a) => a.game_id === e && a.channel === t)
        .map((e) => Object.assign({}, e, { is_self: a ? e.author_id === `self-${a}` : e.is_self }))
        .sort((e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime())
    );
    const Gi = async (e) => {
      await ei();
      const t = {
        id: ea(),
        game_id: e.game_id,
        channel: e.channel,
        author_id: `self-${e.user_id}`,
        author_name: (0, v.sanitizeName)(e.user_name),
        avatar_seed: 99,
        is_self: !0,
        body: (0, v.sanitizeText)(e.body, 1e3),
        created_at: new Date().toISOString(),
      };
      return (Qt.chatMessages.push(t), await Za(ee, Qt.chatMessages), t);
    };
    r.mockSendChatMessage = Gi;
    const Ui = async (e, t) => {
      await ei();
      const gm9 = hi(e);
      if (gm9) {
        // A caller who may not see the match is told it does not exist, which is what Ni's null says.
        (ra(t, gm9.audience), maySeeMatch9(gm9, t) || err9());
      }
      const a = La.find((t) => t.id === e);
      a && (await oi(a));
      const i = Qt.gamePlayers.filter((t) => t.game_id === e);
      let n = !1,
        r = !1;
      for (const e of i)
        e.user_id ||
          e.is_self ||
          ((e.user_id = ni(e.display_name)),
          ri(e.user_id, e.display_name, a?.sport ?? "football") && (r = !0),
          (n = !0));
      (n && (await Za(X, Qt.gamePlayers)), r && (await Za(Y, Qt.profiles)));
      // The roster was the gamePlayers rows plus a self-entry for whoever happened to be asking, and
      // joining a match creates no gamePlayers row - those are the guests an organizer types in by
      // name. So on any real match the organizer's bench held exactly one player, themselves, and
      // mockAssignLineupSlot refused every actual joiner with E_PLAYER_IS_NOT_IN_THIS_MATCH: nobody
      // could be put on the board at all. Only the demo matches, which ship with gamePlayers rows,
      // ever worked, which is why the board looked fine. Build the roster from the seats as well,
      // keeping the `self-<user id>` key that the slot references and the cancellation cleanup in
      // qi, mockKickPlayer and the squad sweep already write and clear.
      for (const b9 of Qt.bookings) {
        if (b9.game_id !== e || "confirmed" !== b9.status) continue;
        const k9 = `self-${b9.user_id}`;
        if (i.some((e) => e.id === k9 || e.user_id === b9.user_id)) continue;
        // or() is the one name resolver: profile, then the name the booking was made under. The
        // demo players' profiles live in the module rather than in storage, so a direct profile
        // lookup renders a bench of "Player".
        const nm9 = or(b9.user_id);
        i.push({
          id: k9,
          game_id: e,
          display_name: "Player" === nm9 && b9.user_id === t ? "You" : nm9,
          avatar_seed: 99,
          team: null,
          is_self: b9.user_id === t,
          user_id: b9.user_id,
        });
      }
      const o = new Map(Qt.profiles.map((e) => [e.id, e.avatar_url ?? null]));
      return i.map((e) =>
        Object.assign({}, e, { avatar_url: e.user_id ? (o.get(e.user_id) ?? null) : null }),
      );
    };
    r.mockGetGamePlayers = Ui;
    r.mockSetPlayerTeam = async (e, t, a) => {
      (await ei(), md(e));
      const i = Qt.gamePlayers.findIndex((e) => e.id === t);
      if (i >= 0)
        return (
          (Qt.gamePlayers[i] = Object.assign({}, Qt.gamePlayers[i], { team: a })),
          void (await Za(X, Qt.gamePlayers))
        );
      t.startsWith("self-");
    };
    r.mockUpsertSelfPlayer = async (e) => {
      await ei();
      const t = Qt.gamePlayers.findIndex((t) => t.id === e.id);
      (t >= 0 ? (Qt.gamePlayers[t] = e) : Qt.gamePlayers.push(e), await Za(X, Qt.gamePlayers));
    };
    r.mockGetNotifications = async (e) => (
      await ei(),
      Qt.notifications
        .filter((t) => t.user_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
    );
    r.mockGetUnreadCount = async (e) => (
      await ei(),
      Qt.notifications.filter((t) => t.user_id === e && !t.read).length
    );
    r.mockMarkNotificationRead = async (e, t) => {
      await ei();
      const a = Qt.notifications.findIndex((a) => a.id === t && a.user_id === e);
      a >= 0 &&
        !Qt.notifications[a].read &&
        ((Qt.notifications[a] = Object.assign({}, Qt.notifications[a], { read: !0 })),
        await Za($, Qt.notifications));
    };
    r.mockMarkAllNotificationsRead = async (e) => {
      await ei();
      let t = !1;
      ((Qt.notifications = Qt.notifications.map((a) =>
        a.user_id !== e || a.read ? a : ((t = !0), Object.assign({}, a, { read: !0 })),
      )),
        t && (await Za($, Qt.notifications)));
    };
    r.mockUpsertReview = async (e) => {
      await ei();
      const t = Math.max(1, Math.min(5, Math.round(e.rating))),
        a = e.comment ? (0, v.sanitizeText)(e.comment, 1e3) : null,
        i = Qt.reviews.findIndex((t) => t.venue_id === e.venue_id && t.user_id === e.user_id);
      (i >= 0
        ? (Qt.reviews[i] = Object.assign({}, Qt.reviews[i], { rating: t, comment: a }))
        : Qt.reviews.push({
            id: ea(),
            venue_id: e.venue_id,
            user_id: e.user_id,
            rating: t,
            comment: a,
            created_at: new Date().toISOString(),
          }),
        await Za(K, Qt.reviews));
    };
    const xi = (e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime(),
      zi = (e, t) => {
        if (e.organizer_id !== t) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_2");
      },
      Hi = () => (0, c.randomCode)(6),
      Fi = (e) =>
        Array.from(
          new Set(
            Qt.bookings
              .filter(
                (t) =>
                  t.game_id === e &&
                  ("confirmed" === t.status ||
                    "reserved" === t.status ||
                    "pending" === t.status ||
                    "waitlisted" === t.status),
              )
              .map((e) => e.user_id),
          ),
        ),
      Bi = async (e, t, a9) => {
        for (const a of Fi(e.id)) a !== e.organizer_id && (await bi(t(a), a9));
      },
      // The hard refusals the join machine applies before it will seat anyone: the audience partition,
      // guests, bans and suspensions, and the Code of Conduct. Wr - the re-seat path the payment
      // success handler and the reconciler use - applied none of them, so a ban issued between
      // payment and reconciliation did not stop the seat and the money path could create a
      // cross-partition booking the join path would have thrown on.
      assertMayHoldSeat9 = async (e, t) => {
        (ra(t, e.audience), md(t), await wd(t), cocAccepted9(t));
      },
      // One place that answers "has this account accepted the current Code of Conduct".
      cocAccepted9 = (e) => {
        if (
          !Qt.cocAcceptances.some((t) => t.user_id === e && t.version >= D.CURRENT_COC_VERSION)
        )
          throw new Error("E_ACCEPT_THE_CODE_OF_CONDUCT");
      };
      ji = async (e, t) => {
        await ei();
        const a = hi(e);
        if (!a) throw new Error("E_MATCH_NOT_FOUND");
        if ((ra(t, a.audience), "scheduled" !== a.status)) throw new Error("E_THIS_MATCH_IS_NO_LONGER_OPEN");
        if (new Date(a.starts_at).getTime() < Date.now()) throw new Error("E_THIS_MATCH_HAS_ALREADY_STARTED");
        if (a.organizer_id === t) throw new Error("E_YOU_ARE_THE_ORGANIZER_OF_THIS");
        return (
          // The partition check above already ran; this repeats it harmlessly and keeps one list.
          await assertMayHoldSeat9(a, t),
          Xt(e, async () => {
            await Di(a);
            const i = Date.now(),
              n = new Date(i).toISOString(),
              r = Qt.profiles.find((e) => e.id === t),
              o = r?.full_name || "Player",
              s = Qt.bookings.find(
                (a) =>
                  a.game_id === e && a.user_id === t && "cancelled" !== a.status && "rejected" !== a.status,
              );
            if (s) {
              if ("reserved" === s.status) {
                if (Number(a.price_kwd) > 0 && "paid" !== Gr(e, t)?.status) {
                  const e = await Hr(a, t, s.id);
                  return { status: "reserved", payment_due: Fr(e) };
                }
                return (
                  (s.status = "confirmed"),
                  (s.reserved_until = null),
                  (s.updated_at = n),
                  await Za(W, Qt.bookings),
                  await (0, w.logAudit)("match.join", (0, w.actorRef)(t), { game: e.slice(-6), accept: !0 }),
                  await vn(e),
                  { status: "confirmed" }
                );
              }
              const i = Gr(e, t);
              return { status: s.status, payment_due: "confirmed" === s.status ? Fr(i ?? null) : null };
            }
            if (a.registration_closed_at) throw new Error("E_REGISTRATION_IS_CLOSED");
            if (null != a.squad_window_status) {
              if (
                Qt.bookings
                  .filter((a) => a.game_id === e && a.user_id === t)
                  .some((e) => e.squad_opted_out_at || e.squad_dropped_at)
              )
                throw new Error("E_ASK_THE_HOST_TO_RE_ADD");
            }
            let d = !1;
            {
              const i = await Dn(t, a.sport),
                n = (0, y.rangeMismatch)(a.sport, i.rating, a.skill_min, a.skill_max);
              if ("none" !== n.severity) {
                if ("strict" === a.skill_policy)
                  throw (
                    await Tn(a, t, n.severity, "blocked"),
                    await (0, w.logAudit)("skill.mismatch_blocked", (0, w.actorRef)(t), {
                      game: e.slice(-6),
                    }),
                    new Error(
                      "above" === n.direction ? "E_SKILL_RATING_ABOVE_RANGE" : "E_SKILL_RATING_BELOW_RANGE",
                    )
                  );
                "approval" === a.skill_policy
                  ? ((d = !0), await Tn(a, t, n.severity, "sent_to_approval"))
                  : "significant" === n.severity && (await Tn(a, t, n.severity, "warned"));
              }
            }
            const l = {
              id: ea(),
              game_id: e,
              user_id: t,
              display_name: o,
              attendance: null,
              reserved_until: null,
              created_at: n,
              updated_at: n,
            };
            // A player who cancels and rejoins used to end up owning two or three rows for the same
            // game, because this pushed a fresh one every time. That ambiguity is what broke the
            // check-in scanner and the payment-forfeit lookup, both of which took the first match.
            // Wr already demonstrates the right shape: find the cancelled or rejected row and revive
            // it in place, keeping its id. Only push when there is genuinely nothing to revive.
            const dead9 = Qt.bookings
              .filter(
                (a) =>
                  a.game_id === e &&
                  a.user_id === t &&
                  ("cancelled" === a.status || "rejected" === a.status),
              )
              .sort(xi)
              .pop();
            const seat9 = (a9) => {
              if (!dead9)
                return (
                  Qt.bookings.push(
                    Object.assign({}, l, { status: a9, checkin_token: mkCheckinToken9() }),
                  ),
                  dead9
                );
              return (
                Object.assign(dead9, {
                  status: a9,
                  checkin_token: dead9.checkin_token ?? mkCheckinToken9(),
                  display_name: o,
                  attendance: null,
                  reserved_until: null,
                  rejection_reason: null,
                  squad_opted_out_at: null,
                  squad_dropped_at: null,
                  squad_confirmed_at: null,
                  updated_at: n,
                }),
                dead9
              );
            };
            // A manual-approval join became a pending request with no capacity test at all, so
            // requests piled up against seats that did not exist while Di kept handing those seats
            // to waitlisters who joined later. Reject rather than waitlist: Di promotes a
            // waitlisted player straight to a reserved seat, which would walk them into a
            // manual-approval match the organizer never approved.
            if ("manual" === a.approval_mode && ki(e, i) >= a.max_players)
              throw new Error("E_THIS_MATCH_IS_ALREADY_FULL");
            if ("manual" === a.approval_mode || d)
              return (
                seat9("pending"),
                await Za(W, Qt.bookings),
                await (0, w.logAudit)("match.join", (0, w.actorRef)(t), {
                  game: e.slice(-6),
                  mode: "manual",
                }),
                await bi({
                  id: ea(),
                  user_id: a.organizer_id,
                  type: "join_request",
                  game_id: e,
                  venue_name: Ai(a.venue_id),
                  sport: a.sport,
                  player_name: o,
                  read: !1,
                  created_at: n,
                }),
                { status: "pending" }
              );
            if (ki(e, i) < a.max_players) {
              (seat9("confirmed"),
                await Za(W, Qt.bookings),
                await (0, w.logAudit)("match.join", (0, w.actorRef)(t), { game: e.slice(-6) }),
                await Ti(a, o, [t]),
                await ns(a, t),
                await vn(e));
              const i = await Hr(a, t, l.id);
              return { status: "confirmed", payment_due: Fr(i) };
            }
            const c = vi(e);
            if (c.length < a.waitlist_capacity)
              return (
                seat9("waitlisted"),
                await Za(W, Qt.bookings),
                await (0, w.logAudit)("participant.waitlisted", (0, w.actorRef)(t), { game: e.slice(-6) }),
                { status: "waitlisted", waitlistPosition: c.length + 1 }
              );
            throw new Error("E_THIS_MATCH_AND_ITS_WAITING_LIST");
          })
        );
      };
    r.mockJoinMatch = ji;
    // Qt.seatCancellations is the only source for /refunds, and it was written in exactly one place -
    // mockLeaveMatch. The other three paths that end a live seat and move money all skipped it, so a
    // player whose match the organizer cancelled received a wallet credit and saw nothing at all on
    // /refunds explaining where it came from.
    const recordSeatCancellation9 = async (e, t, a, i) => (
      Qt.seatCancellations.push({
        id: ea(),
        game_id: e,
        user_id: t,
        cancelled_at: new Date().toISOString(),
        paid_kwd: a.paid_kwd ?? 0,
        refunded_kwd: a.refund_kwd ?? 0,
        reason: i,
        audience: aa(t),
      }),
      await Za(st, Qt.seatCancellations)
    );
    const qi = async (e, t) => (
      await ei(),
      Xt(e, async () => {
        const a = Qt.bookings.find(
          (a) => a.game_id === e && a.user_id === t && "cancelled" !== a.status && "rejected" !== a.status,
        );
        if (!a) return { paid_kwd: 0, refund_kwd: 0, refunded: !1, reason: "unpaid" };
        const i = yi(a, Date.now());
        ((a.status = "cancelled"),
          (a.reserved_until = null),
          (a.updated_at = new Date().toISOString()),
          await (0, w.logAudit)("match.leave", (0, w.actorRef)(t), { game: e.slice(-6) }),
          await Za(W, Qt.bookings));
        const n = Qt.lineups.find((t) => t.game_id === e);
        if (n) {
          const a = new Set([`self-${t}`]);
          Qt.gamePlayers.forEach((i) => {
            i.game_id === e && i.user_id === t && a.add(i.id);
          });
          [...n.a.slots, ...n.b.slots].some((e) => null != e.player_id && a.has(e.player_id)) &&
            (a.forEach((e) => _c(n, e)), await lc(n, t, "player_left"));
        }
        const r = hi(e),
          o = Date.now(),
          s = !r || (0, F.isRefundEligible)(r.starts_at, o),
          d = r ? await Br(r, t, s) : { paid_kwd: 0, refund_kwd: 0 };
        i && r && (await Di(r), await rd(r));
        const l =
          d.refund_kwd > 0
            ? "refunded"
            : d.paid_kwd > 0
              ? "past_cutoff"
              : 0 === (r?.price_kwd ?? 0)
                ? "free_spot"
                : "unpaid";
        return (
          r && (await recordSeatCancellation9(e, t, d, l)),
          { paid_kwd: d.paid_kwd, refund_kwd: d.refund_kwd, refunded: d.refund_kwd > 0, reason: l }
        );
      })
    );
    r.mockLeaveMatch = qi;
    r.mockGetSeatRefundQuote = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) return null;
      const i = Date.now(),
        n = (0, F.isRefundEligible)(a.starts_at, i),
        r = Gr(t, e),
        o = r && "paid" === r.status ? r.amount_kwd : 0;
      return {
        paid_kwd: o,
        refund_kwd: n ? o : 0,
        eligible: n,
        deadline: (0, F.refundDeadlineIso)(a.starts_at),
        decided_at: new Date(i).toISOString(),
        cutoff_hours: F.SEAT_REFUND_CUTOFF_HOURS,
      };
    };
    r.mockGetMyCancellations = async (e) => {
      await ei();
      const t = aa(e);
      return Qt.seatCancellations
        .map((e, t) => ({ c: e, i: t }))
        .filter(({ c: a }) => a.user_id === e && ia(a.audience, t))
        .sort((e, t) => {
          const a = new Date(t.c.cancelled_at).getTime() - new Date(e.c.cancelled_at).getTime();
          return 0 !== a ? a : t.i - e.i;
        })
        .map(({ c: e }) => {
          const t = hi(e.game_id);
          return Object.assign({}, e, {
            title: t?.title ?? "",
            venue_name: t ? Ai(t.venue_id) : "",
            starts_at: t?.starts_at ?? null,
          });
        });
    };
    r.mockApproveParticipant = async (e, t, a) => {
      (await ei(),
        await on(t),
        await Xt(e, async () => {
          const i = hi(e);
          if (!i) throw new Error("E_MATCH_NOT_FOUND");
          zi(i, t);
          // Di used to run here, before the capacity check below. It fills the match from the
          // waitlist up to max_players, so on any manual-approval match with a waitlist the
          // organizer's approval was blocked by the promotion this very call had just performed -
          // unapprovable by construction, and every retry repeated it. Take the seat first, then
          // backfill whatever is still free at the end.
          if ("scheduled" !== i.status || new Date(i.ends_at).getTime() < Date.now())
            throw new Error("E_THIS_MATCH_CAN_NO_LONGER_BE");
          const n = Qt.bookings.find((t) => t.id === a && t.game_id === e);
          if (!n || "pending" !== n.status) return;
          // ki counts an expired reserved hold as gone already, so the seat count is honest here
          // without Di having swept first.
          if (ki(e) >= i.max_players) throw new Error("E_MATCH_IS_FULL_FREE_A_SLOT");
          ((n.status = "confirmed"),
            (n.updated_at = new Date().toISOString()),
            await (0, w.logAudit)("participant.approved", (0, w.actorRef)(t), { game: e.slice(-6) }),
            await Za(W, Qt.bookings));
          const r = await Hr(i, n.user_id, n.id);
          (r &&
            "pending" === r.status &&
            (await bi({
              id: ea(),
              user_id: n.user_id,
              type: "payment_request",
              game_id: e,
              payment_id: r.id,
              venue_name: Ai(i.venue_id),
              amount_kwd: r.amount_kwd,
              read: !1,
              created_at: new Date().toISOString(),
            })),
            await Ti(i, n.display_name ?? "A player", [n.user_id, t]),
            await bi({
              id: ea(),
              user_id: n.user_id,
              type: "request_approved",
              game_id: e,
              venue_name: Ai(i.venue_id),
              sport: i.sport,
              read: !1,
              created_at: new Date().toISOString(),
            }));
          // Now that the approved seat is taken, expire stale holds and backfill anything still
          // free. Called directly: this already holds the Xt lock for the match, and Oi would
          // re-take it.
          await Di(i);
        }));
    };
    r.mockRejectParticipant = async (e, t, a, r9) => {
      (await ei(),
        await on(t),
        await Xt(e, async () => {
          const i = hi(e);
          if (!i) throw new Error("E_MATCH_NOT_FOUND");
          zi(i, t);
          if ("scheduled" !== i.status || new Date(i.ends_at).getTime() < Date.now())
            throw new Error("E_THIS_MATCH_CAN_NO_LONGER_BE");
          const n = Qt.bookings.find((t) => t.id === a && t.game_id === e);
          n && r9 && (n.rejection_reason = (0, v.sanitizeText)(String(r9), 200));
          n &&
            "pending" === n.status &&
            ((n.status = "rejected"),
            (n.updated_at = new Date().toISOString()),
            await (0, w.logAudit)("participant.rejected", (0, w.actorRef)(t), { game: e.slice(-6) }),
            await Za(W, Qt.bookings),
            await bi({
              id: ea(),
              user_id: n.user_id,
              type: "request_rejected",
              game_id: e,
              venue_name: Ai(i.venue_id),
              sport: i.sport,
              read: !1,
              created_at: new Date().toISOString(),
            }));
        }));
    };
    const Yi = async (e, t, a, i) => {
      (Qt.matchEvents.push({
        id: ea(),
        game_id: e,
        actor_id: t,
        action: a,
        target_user_id: i?.targetUserId ?? null,
        note: i?.note ?? null,
        created_at: new Date().toISOString(),
      }),
        await Za(ot, Qt.matchEvents));
    };
    r.mockGetMatchActivity = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      return (
        zi(a, e),
        Qt.matchEvents
          .map((e, t) => ({ e: e, i: t }))
          .filter(({ e: e }) => e.game_id === t)
          .sort((e, t) => {
            const a = new Date(t.e.created_at).getTime() - new Date(e.e.created_at).getTime();
            return 0 !== a ? a : t.i - e.i;
          })
          .map(({ e: e }) =>
            Object.assign({}, e, {
              actor_name: e.actor_id ? Td(e.actor_id) : null,
              target_name: e.target_user_id ? Td(e.target_user_id) : null,
            }),
          )
      );
    };
    r.mockKickPlayer = async (e, t, a, i) => {
      (await ei(),
        await on(e),
        await Xt(t, async () => {
          const n = hi(t);
          if (!n) throw new Error("E_MATCH_NOT_FOUND");
          if ((zi(n, e), "cancelled" === n.status)) throw new Error("E_THIS_MATCH_IS_NO_LONGER_OPEN");
          if (new Date(n.starts_at).getTime() < Date.now()) throw new Error("E_THIS_MATCH_HAS_ALREADY_STARTED");
          if (a === e) throw new Error("E_CANNOT_REMOVE_THE_ORGANIZER");
          if ((0, v.sanitizeText)(i || "", 200).length < 3) throw new Error("E_A_REASON_IS_REQUIRED");
          const r = Qt.bookings.find(
            (e) => e.game_id === t && e.user_id === a && "cancelled" !== e.status && "rejected" !== e.status,
          );
          if (!r) throw new Error("E_PLAYER_NOT_IN_THIS_MATCH");
          const o = yi(r, Date.now());
          ((r.status = "cancelled"),
            (r.reserved_until = null),
            (r.updated_at = new Date().toISOString()),
            await Za(W, Qt.bookings));
          const k9 = await Br(n, a, !0);
          await recordSeatCancellation9(n.id, a, k9 ?? {}, "removed");
          const s = i ? (0, v.sanitizeText)(i, 200) : "";
          (await (0, w.logAudit)(
            "participant.removed",
            (0, w.actorRef)(e),
            Object.assign(
              { game: t.slice(-6), player: (0, w.actorRef)(a) ?? "unknown" },
              s ? { note: s } : {},
            ),
          ),
            await Yi(t, e, "player_removed", { targetUserId: a, note: s || void 0 }));
          const d = Qt.lineups.find((e) => e.game_id === t);
          if (d) {
            const i = new Set([`self-${a}`]);
            Qt.gamePlayers.forEach((e) => {
              e.game_id === t && e.user_id === a && i.add(e.id);
            });
            [...d.a.slots, ...d.b.slots].some((e) => null != e.player_id && i.has(e.player_id)) &&
              (i.forEach((e) => _c(d, e)), await lc(d, e, "player_left"));
          }
          (await bi({
            id: ea(),
            user_id: a,
            type: "removed_from_match",
            game_id: t,
            venue_name: Ai(n.venue_id),
            sport: n.sport,
            read: !1,
            created_at: new Date().toISOString(),
          }),
            o && (await Di(n), await rd(n)));
        }));
    };
    r.mockSaveMatchDraft = async (e, t) => {
      await ei();
      const a = new Date().toISOString(),
        i = Qt.matchDrafts.findIndex((t) => t.organizer_id === e),
        n = { organizer_id: e, payload: t, updated_at: a };
      (i >= 0 ? (Qt.matchDrafts[i] = n) : Qt.matchDrafts.push(n), await Za(dt, Qt.matchDrafts));
    };
    r.mockGetMatchDraft = async (e) => (await ei(), Qt.matchDrafts.find((t) => t.organizer_id === e) ?? null);
    r.mockDiscardMatchDraft = async (e) => {
      (await ei(),
        (Qt.matchDrafts = Qt.matchDrafts.filter((t) => t.organizer_id !== e)),
        await Za(dt, Qt.matchDrafts));
    };
    // ORG1 (F-ORG1-2/17/18): one validator for every match/series creation path. Rejects instead of clamping.
    const MATCH_ENUMS = {
      sport: ["football", "padel", "tennis"],
      skill_level: ["all", "beginner", "intermediate", "advanced"],
      visibility: ["public", "private"],
      approval_mode: ["auto", "manual"],
    };
    const validateMatchInput = (t, o9 = {}) => {
      if (!MATCH_ENUMS.sport.includes(t.sport)) throw new Error("E_INVALID_MATCH_OPTION");
      if (t.skill_level && !MATCH_ENUMS.skill_level.includes(t.skill_level)) throw new Error("E_INVALID_MATCH_OPTION");
      if (t.visibility && !MATCH_ENUMS.visibility.includes(t.visibility)) throw new Error("E_INVALID_MATCH_OPTION");
      if (t.approval_mode && !MATCH_ENUMS.approval_mode.includes(t.approval_mode)) throw new Error("E_INVALID_MATCH_OPTION");
      if (t.format && !/^[a-z0-9_]{2,40}$/.test(String(t.format))) throw new Error("E_INVALID_MATCH_OPTION");
      if (!Number.isInteger(t.max_players) || t.max_players < 2 || t.max_players > 40)
        throw new Error("E_PLAYERS_REQUIRED_MUST_BE_BETWEEN_2");
      const p9 = Number(t.price_kwd ?? 0);
      if (!Number.isFinite(p9) || p9 < 0 || p9 > 100) throw new Error("E_PRICE_OUT_OF_RANGE");
      if (void 0 !== t.waitlist_capacity && null !== t.waitlist_capacity) {
        const w9 = Number(t.waitlist_capacity);
        if (!Number.isInteger(w9) || w9 < 0 || w9 > 20) throw new Error("E_WAITLIST_OUT_OF_RANGE");
      }
      if (o9.starts_at !== void 0) {
        const i = new Date(o9.starts_at).getTime(),
          n = new Date(o9.ends_at).getTime();
        if (Number.isNaN(i) || Number.isNaN(n)) throw new Error("E_PICK_A_DATE_AND_TIME");
        if (i < Date.now() - 6e4) throw new Error("E_MATCH_CANNOT_START_IN_PAST");
        if (n <= i) throw new Error("E_END_TIME_MUST_BE_AFTER_THE");
        if ((n - i) / 6e4 > 360 || (n - i) / 6e4 < 30) throw new Error("E_DURATION_OUT_OF_RANGE");
      }
      if (o9.venue && Array.isArray(o9.venue.sports) && o9.venue.sports.length && !o9.venue.sports.includes(t.sport))
        throw new Error("E_VENUE_DOES_NOT_SUPPORT_SPORT");
      return { price_kwd: Math.round(100 * p9) / 100 };
    };
    r.validateMatchInput = validateMatchInput;
    const e9 = (e) => String(e ?? "").slice(0, 40);
    // ORG1 (F-ORG1-19): a venue an organizer types in is usable for their own match straight away but
    // stays out of the public directory (listed: false) until an admin reviews the pending
    // registration created below. `created_by` records the organizer, not the venue name.
    //
    // Three paths used to create venues and only this one governed them: mockCreateSeries built its
    // own literal with no listed, no review_status, no created_by and no venueProfile at all, and
    // mockGetVenues filters on `!1 !== listed`, so undefined passed and a series venue went straight
    // into the public directory with nothing in the admin queue. Both lanes are fed the identical
    // object by the same UI field, so they now share the same helper and the same outcome.
    const createCustomVenue9 = async (e, sport9, cv9) => {
      const vn9 = (0, v.sanitizeText)(cv9.name, 80);
      if (!vn9) throw new Error("E_ADD_A_VENUE_NAME");
      const lat9 = Number(cv9.lat),
        lng9 = Number(cv9.lng);
      if (Number.isNaN(lat9) || Number.isNaN(lng9))
        throw new Error("E_PICK_THE_VENUE_LOCATION_ON_THE");
      const n = (0, v.sanitizeText)(cv9.address, 160),
        r = {
          id: ea(),
          name: vn9,
          city: "Kuwait",
          area: n ? n.split(",")[0] : "Custom location",
          sports: [sport9],
          cover_url: null,
          rating: 0,
          rating_count: 0,
          description: null,
          address: n || null,
          lat: lat9,
          lng: lng9,
          custom: !0,
          listed: !1,
          review_status: "pending",
          created_by: e,
          created_at: new Date().toISOString(),
        };
      (Qt.venues.push(r), await Za(ae, Qt.venues));
      const vp9 = {
        venue_id: r.id,
        owner_id: e,
        status: "pending",
        commission_type: he,
        commission_value: 10,
        payout_iban_last4: null,
        cancellation_policy: "Free cancellation up to 6 hours before start.",
        cancellation_cutoff_hours: 6,
        amenities: [],
        photos: [],
        auto_accept: !1,
        staff: [],
        origin: "organizer_custom",
        created_at: new Date().toISOString(),
        reviewed_at: null,
        reviewed_by: null,
        review_note: null,
      };
      return (
        Qt.venueProfiles.push(vp9),
        await Za(ce, Qt.venueProfiles),
        await br((t9) => ({
          id: ea(),
          user_id: t9,
          type: "venue_application",
          venue_id: r.id,
          venue_name: r.name,
          read: !1,
          created_at: new Date().toISOString(),
        })),
        await (0, w.logAudit)("venue.created", (0, w.actorRef)(e), {
          venue: r.id.slice(-6),
          name: e9(r.name),
          listed: !1,
        }),
        r.id
      );
    };
    const Wi = async (e, t) => {
      (await ei(), await on(e));
      const a = (0, v.sanitizeText)(t.title, 100);
      if (!a) throw new Error("E_ADD_A_MATCH_TITLE");
      const i = new Date(t.starts_at).getTime(),
        n = new Date(t.ends_at).getTime();
      const v9 = validateMatchInput(t, { starts_at: t.starts_at, ends_at: t.ends_at });
      const r = v9.price_kwd,
        o = t.notes ? (0, v.sanitizeText)(t.notes, 500) : null,
        s = Math.max(0, Math.min(20, t.waitlist_capacity ?? Ma(t.max_players)));
      // Series occurrences are pushed straight into Qt.games by the generator with a fresh
      // created_at and never pass through here, so one daily series could produce dozens of rows and
      // lock the organizer out of the main create flow for an hour. Only hand-created matches count;
      // the series side keeps its own 3-templates-per-hour guard.
      if (
        Qt.games.filter(
          (t) =>
            t.organizer_id === e &&
            !t.series_id &&
            Date.now() - new Date(t.created_at).getTime() < 36e5,
        ).length >= 5
      )
        throw (
          await (0, w.logAudit)("match.create_blocked", (0, w.actorRef)(e), { reason: "rate_limit" }),
          new Error("E_YOU_HAVE_CREATED_TOO_MANY_MATCHES")
        );
      let d,
        l = null;
      if (t.court_booking_id) {
        const a = gr(t.court_booking_id);
        if (!a) throw new Error("E_COURT_BOOKING_NOT_FOUND");
        if (a.organizer_id !== e) throw new Error("E_THAT_COURT_BOOKING_IS_NOT_YOURS");
        if ("confirmed" !== a.status) throw new Error("E_CONFIRM_THE_COURT_BOOKING_BEFORE_PUBLISHING");
        if (a.game_id) throw new Error("E_THAT_COURT_BOOKING_ALREADY_HAS_A");
        l = a;
      }
      if (l) d = l.venue_id;
      else if (t.custom_venue) {
        d = await createCustomVenue9(e, t.sport, t.custom_venue);
      } else {
        const v9 = fi().find((e) => e.id === t.venue_id);
        if (!t.venue_id || !v9) throw new Error("E_CHOOSE_A_VENUE");
        validateMatchInput(t, { venue: v9 });
        d = t.venue_id;
      }
      if (
        Qt.games.some(
          (t) =>
            t.organizer_id === e &&
            t.venue_id === d &&
            "scheduled" === t.status &&
            i < new Date(t.ends_at).getTime() &&
            n > new Date(t.starts_at).getTime(),
        )
      )
        throw (
          await (0, w.logAudit)("match.create_blocked", (0, w.actorRef)(e), { reason: "duplicate" }),
          new Error("E_YOU_ALREADY_HAVE_A_MATCH_AT")
        );
      const c = Object.assign(
        {
          id: ea(),
          venue_id: d,
          organizer_id: e,
          audience: aa(e),
          title: a,
          sport: t.sport,
          format: t.format,
          skill_level: t.skill_level,
          starts_at: new Date(i).toISOString(),
          ends_at: new Date(n).toISOString(),
          duration_minutes: Math.round((n - i) / 6e4),
          max_players: t.max_players,
          waitlist_capacity: s,
          price_kwd: r,
          notes: o,
          visibility: t.visibility,
          invite_code: "private" === t.visibility ? Hi() : null,
          approval_mode: t.approval_mode,
          status: "scheduled",
          cancellation_reason: null,
          cancelled_at: null,
        },
        Wt,
        {
          skill_min: t.skill_min ?? null,
          skill_max: t.skill_max ?? null,
          skill_policy: t.skill_policy ?? "open",
        },
        Bt,
        Kt,
        $t,
        ge,
        { court_booking_id: l?.id ?? null, created_at: new Date().toISOString() },
      );
      if (
        (Qt.games.push(c),
        await Za(te, Qt.games),
        l && ((l.game_id = c.id), await Za(me, Qt.courtBookings)),
        // The organizer's own seat was pushed with four fields where every other booking site writes
        // seven. mockSetAttendance and the check-in scanner then wrote attendance onto a row that
        // never declared the field, and anything sorting or diffing on updated_at saw undefined for
        // the organizer alone.
        !1 !== t.organizer_plays &&
          (Qt.bookings.push({
            id: ea(),
            game_id: c.id,
            user_id: e,
            display_name: Td(e),
            status: "confirmed",
            attendance: null,
            reserved_until: null,
            checkin_token: mkCheckinToken9(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }),
          await Za(W, Qt.bookings)),
        t.formation_key)
      )
        try {
          const a = await oc(c.id, e);
          ((a.a = rc(t.formation_key, c.sport)),
            (a.b = rc(t.formation_key, c.sport)),
            !1 !== t.organizer_plays && a.a.slots.length > 0 && (a.a.slots[0].player_id = e),
            (a.updated_at = new Date().toISOString()),
            await Za(rt, Qt.lineups));
        } catch {}
      return (
        await (0, w.logAudit)("match.created", (0, w.actorRef)(e), {
          game: c.id.slice(-6),
          sport: t.sport,
          visibility: t.visibility,
          approval: t.approval_mode,
        }),
        c
      );
    };
    r.mockCreateMatch = Wi;
    const Ki = async (e, t, a) => {
      await ei();
      const i = aa(e),
        n = Date.now() - 7776e6,
        r = gi().filter(
          (e) =>
            e.audience === i &&
            e.venue_id === a &&
            e.sport === t &&
            "cancelled" !== e.status &&
            new Date(e.starts_at).getTime() > n,
        );
      if (r.length < 3) return null;
      const o = (e) => {
        const t = new Map();
        return (
          e.forEach((e) => t.set(e, (t.get(e) ?? 0) + 1)),
          [...t.entries()].sort((e, t) => t[1] - e[1])[0][0]
        );
      };
      return {
        price_kwd: ((e) => {
          const t = [...e].sort((e, t) => e - t);
          return t[Math.floor(t.length / 2)];
        })(r.map((e) => e.price_kwd)),
        max_players: o(r.map((e) => e.max_players)),
        skill_level: o(r.map((e) => e.skill_level)),
        duration_minutes: o(r.map((e) => e.duration_minutes)),
        waitlist_on: 2 * r.filter((e) => e.waitlist_capacity > 0).length > r.length,
        based_on_games: r.length,
      };
    };
    const $i = {
      football: { players: 10, price: 2.5 },
      padel: { players: 4, price: 2.5 },
      tennis: { players: 4, price: 2.5 },
    };
    // ORG1 (F-ORG1-8): the quick flow always knows the values it will publish with.
    r.mockGetSmartDefaults = async (e, t, a) => {
      const i = await Ki(e, t, a);
      if (i) return Object.assign({ source: "history", duration_minutes: i.duration_minutes ?? 90, visibility: "public", approval_mode: "auto" }, i);
      const n = $i[t] ?? $i.football;
      return {
        source: "default",
        price_kwd: n.price,
        max_players: n.players,
        skill_level: "all",
        waitlist_on: !0,
        duration_minutes: 90,
        visibility: "public",
        approval_mode: "auto",
        based_on_games: 0,
      };
    };
    r.mockQuickCreateMatch = async (e, t) => {
      await ei();
      const a = fi().find((e) => e.id === t.venue_id);
      if (!a) throw new Error("E_CHOOSE_A_VENUE");
      const i = await Ki(e, t.sport, t.venue_id),
        n = $i[t.sport] ?? $i.football,
        r = i?.max_players ?? n.players,
        o = i?.skill_level ?? "all",
        s = i?.duration_minutes ?? 90,
        d = new Date(t.starts_at).getTime();
      if (Number.isNaN(d)) throw new Error("E_PICK_A_DATE_AND_TIME");
      return Wi(
        e,
        Object.assign(
          {
            sport: t.sport,
            title: `${Ca[o]} ${Na[t.sport]}`,
            format: Ia(t.sport, r),
            skill_level: o,
            starts_at: new Date(d).toISOString(),
            ends_at: new Date(d + 6e4 * s).toISOString(),
            max_players: r,
          },
          i && !i.waitlist_on ? { waitlist_capacity: 0 } : {},
          {
            price_kwd: i?.price_kwd ?? n.price,
            visibility: "public",
            approval_mode: "auto",
            venue_id: t.venue_id,
          },
        ),
      );
    };
    r.mockUpdateMatch = async (e, t, a) => (
      await ei(),
      await on(t),
      Xt(e, async () => {
        const i = Qt.games.findIndex((t) => t.id === e);
        if (i < 0) throw new Error("E_ONLY_MATCHES_YOU_CREATED_CAN_BE_2");
        const n = Qt.games[i];
        if ((zi(n, t), "scheduled" !== n.status)) throw new Error("E_THIS_MATCH_CAN_NO_LONGER_BE");
        const r = [],
          o = Object.assign({}, n);
        // ORG2 (F-ORG2-10): a match cannot be moved into the past, its duration must stay sane, and
        // a match tied to a court booking keeps its slot.
        if ((a.starts_at && a.starts_at !== n.starts_at) || (a.ends_at && a.ends_at !== n.ends_at)) {
          if (n.court_booking_id) throw new Error("E_TIME_LOCKED_BY_COURT_BOOKING");
          const t9 = new Date(a.starts_at ?? n.starts_at).getTime();
          if (!Number.isFinite(t9)) throw new Error("E_INVALID_VALUE");
          if (t9 < Date.now() - 6e4) throw new Error("E_MATCH_CANNOT_START_IN_PAST");
        }
        if (
          (a.starts_at && a.starts_at !== n.starts_at && ((o.starts_at = a.starts_at), r.push("time")),
          a.ends_at && a.ends_at !== n.ends_at && (o.ends_at = a.ends_at),
          new Date(o.ends_at).getTime() <= new Date(o.starts_at).getTime())
        )
          throw new Error("E_END_TIME_MUST_BE_AFTER_THE");
        {
          const d9 = (new Date(o.ends_at).getTime() - new Date(o.starts_at).getTime()) / 6e4;
          if (d9 < 30 || d9 > 360) throw new Error("E_DURATION_OUT_OF_RANGE");
        }
        if (
          ((o.duration_minutes = Math.round(
            (new Date(o.ends_at).getTime() - new Date(o.starts_at).getTime()) / 6e4,
          )),
          void 0 !== a.notes &&
            ((o.notes = a.notes ? (0, v.sanitizeText)(a.notes, 500) : null), r.push("description")),
          a.skill_level &&
            a.skill_level !== n.skill_level &&
            ((o.skill_level = a.skill_level), r.push("skill level")),
          a.max_players && a.max_players !== n.max_players)
        ) {
          if (!Number.isInteger(a.max_players) || a.max_players < 2 || a.max_players > 40) throw new Error("E_INVALID_VALUE");
          const t = ki(e);
          if (a.max_players < t) throw new Error(`E_CAPACITY_BELOW_CONFIRMED:${t}`);
          ((o.max_players = a.max_players), (o.format = Ia(n.sport, a.max_players)), r.push("capacity"));
        }
        ((Qt.games[i] = o),
          await Za(te, Qt.games),
          o.max_players > n.max_players && (await Di(o)),
          await (0, w.logAudit)("match.updated", (0, w.actorRef)(t), {
            game: e.slice(-6),
            changes: r.join(",") || "none",
          }));
        const s = r.length ? r.join(", ") : "details";
        return (
          await Bi(o, (t) => ({
            id: ea(),
            user_id: t,
            type: "match_update",
            game_id: e,
            venue_name: Ai(o.venue_id),
            sport: o.sport,
            summary: s,
            read: !1,
            created_at: new Date().toISOString(),
          })),
          o
        );
      })
    );
    // ORG2 (F-ORG2-1/11/12/23): one cancel routine shared by single-match and series cancellation.
    // Must be called inside the game lock. Releases holds, refunds paid seats, cancels the court
    // booking (recording a failure instead of swallowing it) and writes an audit entry with the reason.
    const cancelGameLocked = async (e, t, r, o9 = {}) => {
      const i = Qt.games.findIndex((t) => t.id === e);
      if (i < 0) throw new Error("E_MATCH_NOT_FOUND");
      const n = Qt.games[i];
      if ("cancelled" === n.status) return { court_released: !0, refunded: 0 };
      (await Bi(n, (t) => ({
        id: ea(),
        user_id: t,
        type: "match_cancelled",
        game_id: e,
        venue_name: Ai(n.venue_id),
        sport: n.sport,
        reason: r,
        read: !1,
        created_at: new Date().toISOString(),
      })),
        (Qt.games[i] = Object.assign({}, n, {
          status: "cancelled",
          cancelled_at: new Date().toISOString(),
          cancellation_reason: r,
          cancelled_by: t,
        })),
        await Za(te, Qt.games));
      const o = [];
      for (const t of Qt.bookings)
        t.game_id === e &&
          "cancelled" !== t.status &&
          "rejected" !== t.status &&
          ((t.status = "cancelled"),
          (t.reserved_until = null),
          (t.updated_at = new Date().toISOString()),
          o.push(t.user_id));
      await Za(W, Qt.bookings);
      // refunded used to report o.length - the number of bookings cancelled, not the number of seats
      // actually refunded - so mockCancelSeries's summary told the organizer every player got their
      // money back even when most of them had never paid. Br already returns the amounts; count them.
      let refunded9 = 0,
        refundedKwd9 = 0;
      for (const e of o) {
        const t = await Br(n, e, !0);
        (t && t.refund_kwd > 0 && ((refunded9 += 1), (refundedKwd9 += Number(t.refund_kwd))),
          await recordSeatCancellation9(n.id, e, t ?? {}, "match_cancelled"));
      }
      let s = !0;
      if (n.court_booking_id)
        try {
          await Mr(t, n.court_booking_id, `Match cancelled: ${r}`);
        } catch (a) {
          ((s = !1),
            await (0, w.logAudit)("court.cancel_failed", (0, w.actorRef)(t), {
              game: e.slice(-6),
              court_booking: String(n.court_booking_id).slice(-6),
              error: a instanceof Error ? a.message : String(a),
            }));
        }
      return (
        await (0, w.logAudit)("match.cancelled", (0, w.actorRef)(t), {
          game: e.slice(-6),
          reason: r,
          cancelled: o.length,
          refunded: refunded9,
          court_released: s,
          series: o9.series ?? null,
        }),
        { court_released: s, refunded: refunded9, cancelled: o.length, refunded_kwd: (0, z.roundKwd)(refundedKwd9) }
      );
    };
    r.mockCancelMatch = async (e, t, a) => {
      await ei();
      await on(t);
      // The reason is mandatory and the cut-off is the kick-off, not the end of the match.
      const r = (0, v.sanitizeText)(a || "", 200);
      if (r.length < 3) throw new Error("E_A_REASON_IS_REQUIRED");
      return Xt(e, async () => {
        const i = Qt.games.findIndex((t) => t.id === e);
        if (i < 0) throw new Error("E_ONLY_MATCHES_YOU_CREATED_CAN_BE");
        const n = Qt.games[i];
        if ((zi(n, t), "cancelled" === n.status)) return { court_released: !0, refunded: 0 };
        if (new Date(n.starts_at).getTime() < Date.now()) throw new Error("E_THIS_MATCH_HAS_ALREADY_STARTED");
        return cancelGameLocked(e, t, r);
      });
    };
    r.mockSetAttendance = async (e, t, a, i) => {
      (await ei(), await on(t));
      const n = hi(e);
      if (!n) throw new Error("E_MATCH_NOT_FOUND");
      zi(n, t);
      // ORG2 (F-ORG2-14): attendance is recorded after the match, never on a cancelled one, and is
      // frozen 48 h after the score was submitted.
      if ("cancelled" === n.status) throw new Error("E_THIS_MATCH_IS_NO_LONGER_OPEN");
      if (new Date(n.ends_at).getTime() > Date.now()) throw new Error("E_MATCH_NOT_FINISHED");
      if (n.score_submitted_at && Date.now() - new Date(n.score_submitted_at).getTime() > 1728e5)
        throw new Error("E_ATTENDANCE_LOCKED");
      const r = Qt.bookings.find((t) => t.id === a && t.game_id === e);
      // Looked up by id with no status filter, so an organizer could mark no_show on a booking the
      // player had cancelled a week early - and that row then counted as a participant everywhere.
      if (r && ("cancelled" === r.status || "rejected" === r.status))
        throw new Error("E_PLAYER_NOT_IN_THIS_MATCH");
      r &&
        ((r.attendance = i),
        (r.updated_at = new Date().toISOString()),
        await Za(W, Qt.bookings),
        await Yi(e, t, "attendance_marked", { targetUserId: r.user_id, note: i ?? "cleared" }),
        await (0, w.logAudit)("attendance.marked", (0, w.actorRef)(t), {
          game: e.slice(-6),
          target: r.user_id.slice(-6),
          value: i ?? "cleared",
        }));
    };
    r.mockCloseRegistration = async (e, t) => {
      (await ei(),
        await on(e),
        await Xt(t, async () => {
          const a = hi(t);
          if (!a) throw new Error("E_MATCH_NOT_FOUND");
          if ((zi(a, e), "scheduled" !== a.status)) throw new Error("E_THIS_MATCH_CAN_NO_LONGER_BE");
          if (new Date(a.ends_at).getTime() < Date.now()) throw new Error("E_THIS_MATCH_HAS_ALREADY_STARTED");
          a.registration_closed_at ||
            ((a.registration_closed_at = new Date().toISOString()),
            await Za(te, Qt.games),
            await (0, w.logAudit)("match.registration_closed", (0, w.actorRef)(e), { game: t.slice(-6) }),
            await Yi(t, e, "registration_closed"));
        }));
    };
    r.mockReopenRegistration = async (e, t) => {
      (await ei(),
        await on(e),
        await Xt(t, async () => {
          const a = hi(t);
          if (!a) throw new Error("E_MATCH_NOT_FOUND");
          if ((zi(a, e), "scheduled" !== a.status)) throw new Error("E_THIS_MATCH_CAN_NO_LONGER_BE");
          a.registration_closed_at &&
            ((a.registration_closed_at = null),
            await Za(te, Qt.games),
            await (0, w.logAudit)("match.registration_reopened", (0, w.actorRef)(e), { game: t.slice(-6) }),
            await Yi(t, e, "registration_reopened"));
        }));
    };
    r.mockSubmitMatchScore = async (e, t, a, i) => {
      (await ei(), await on(e));
      const n = hi(t);
      if (!n) throw new Error("E_MATCH_NOT_FOUND");
      if ((zi(n, e), "cancelled" === n.status)) throw new Error("E_THIS_MATCH_IS_NO_LONGER_OPEN");
      if (Date.now() < new Date(n.ends_at).getTime()) throw new Error("E_THE_MATCH_HAS_NOT_FINISHED_YET");
      if (n.score_submitted_at) throw new Error("E_THIS_RESULT_IS_FINAL");
      if (!Number.isInteger(a) || a < 0 || a > 99) throw new Error("E_ENTER_A_REAL_SCORE");
      if (!Number.isInteger(i) || i < 0 || i > 99) throw new Error("E_ENTER_A_REAL_SCORE");
      return (
        (n.score_home = a),
        (n.score_away = i),
        (n.score_submitted_at = new Date().toISOString()),
        await Za(te, Qt.games),
        await (0, w.logAudit)("match.score_submitted", (0, w.actorRef)(e), {
          game: t.slice(-6),
          score: `${a}-${i}`,
        }),
        await Yi(t, e, "score_submitted", { note: `${a}\u2013${i}` }),
        await Bi(n, (e) => ({
          id: ea(),
          user_id: e,
          type: "match_score",
          game_id: t,
          venue_name: Ai(n.venue_id),
          sport: n.sport,
          score_home: a,
          score_away: i,
          read: !1,
          created_at: new Date().toISOString(),
        })),
        n
      );
    };
    r.mockOpenSquadWindow = async (e, t, a) => (
      await ei(),
      await on(e),
      Xt(t, async () => {
        const i = hi(t);
        if (!i) throw new Error("E_MATCH_NOT_FOUND");
        if ((zi(i, e), "scheduled" !== i.status)) throw new Error("E_THIS_MATCH_CAN_NO_LONGER_BE");
        const n = Date.now(),
          r = new Date(i.starts_at).getTime();
        if (r <= n) throw new Error("E_THIS_MATCH_HAS_ALREADY_STARTED");
        if ("open" === i.squad_window_status) throw new Error("E_SQUAD_WINDOW_ALREADY_OPEN");
        if ("closed" === i.squad_window_status) throw new Error("E_SQUAD_WINDOW_ALREADY_CLOSED");
        let o;
        if (a) {
          if (((o = new Date(a).getTime()), Number.isNaN(o) || o <= n || o >= r))
            throw new Error("E_SQUAD_DEADLINE_INVALID");
        } else ((o = r - 36e5), o <= n && (o = Math.min(n + 18e5, r - 6e4)));
        const s = new Date(o).toISOString();
        ((i.squad_window_opened_at = new Date(n).toISOString()),
          (i.squad_deadline = s),
          (i.squad_window_status = "open"),
          await Za(te, Qt.games),
          await (0, w.logAudit)("squad.window_opened", (0, w.actorRef)(e), {
            game: t.slice(-6),
            deadline: s.slice(11, 16),
          }),
          await Yi(t, e, "squad_window_opened"));
        const d = Ai(i.venue_id);
        for (const a of Qt.bookings)
          a.game_id === t &&
            "confirmed" === a.status &&
            a.user_id !== e &&
            (await bi({
              id: ea(),
              user_id: a.user_id,
              type: "squad_confirm_needed",
              game_id: t,
              venue_name: d,
              sport: i.sport,
              deadline: s,
              read: !1,
              created_at: new Date().toISOString(),
            }));
        return { deadline: s };
      })
    );
    r.mockCloseSquadWindowEarly = async (e, t) => {
      (await ei(),
        await on(e),
        await Xt(t, async () => {
          const a = hi(t);
          if (!a) throw new Error("E_MATCH_NOT_FOUND");
          if ((zi(a, e), "open" !== a.squad_window_status)) throw new Error("E_SQUAD_WINDOW_IS_NOT_OPEN");
          ((a.squad_deadline = new Date(Date.now() - 1e3).toISOString()),
            await Za(te, Qt.games),
            await (0, w.logAudit)("squad.window_closed_early", (0, w.actorRef)(e), { game: t.slice(-6) }),
            await Yi(t, e, "squad_window_closed"));
        }),
        await Vi());
    };
    r.mockConfirmSquadSpot = async (e, t) => {
      (await ei(),
        await Xt(t, async () => {
          const a = hi(t);
          if (!a) throw new Error("E_MATCH_NOT_FOUND");
          if ((ra(e, a.audience), "open" !== a.squad_window_status))
            throw new Error("E_SQUAD_WINDOW_NOT_OPEN");
          if (new Date(a.squad_deadline ?? 0).getTime() <= Date.now())
            throw new Error("E_SQUAD_WINDOW_HAS_CLOSED");
          const i = Qt.bookings.filter((a) => a.game_id === t && a.user_id === e),
            n = i.find((e) => "cancelled" !== e.status && "rejected" !== e.status);
          if (!n) {
            if (i.some((e) => e.squad_dropped_at || e.squad_opted_out_at))
              throw new Error("E_ASK_THE_HOST_TO_RE_ADD");
            throw new Error("E_YOU_ARE_NOT_IN_THIS_SQUAD");
          }
          if ("waitlisted" === n.status) throw new Error("E_YOU_ARE_ON_THE_WAITLIST");
          if ("reserved" === n.status || "pending" === n.status) throw new Error("E_FINISH_JOINING_FIRST");
          n.squad_confirmed_at ||
            ((n.squad_confirmed_at = new Date().toISOString()),
            (n.updated_at = n.squad_confirmed_at),
            await Za(W, Qt.bookings),
            await (0, w.logAudit)("squad.confirmed", (0, w.actorRef)(e), { game: t.slice(-6) }));
        }));
    };
    r.mockOptOutSquad = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      if ((ra(e, a.audience), "open" !== a.squad_window_status)) throw new Error("E_SQUAD_WINDOW_NOT_OPEN");
      if (new Date(a.squad_deadline ?? 0).getTime() <= Date.now())
        throw new Error("E_SQUAD_WINDOW_HAS_CLOSED");
      const i = Qt.bookings.find(
        (a) => a.game_id === t && a.user_id === e && "cancelled" !== a.status && "rejected" !== a.status,
      );
      if (!i) throw new Error("E_YOU_ARE_NOT_IN_THIS_SQUAD");
      if ("waitlisted" === i.status) throw new Error("E_YOU_ARE_ON_THE_WAITLIST");
      ((i.squad_opted_out_at = new Date().toISOString()),
        await Za(W, Qt.bookings),
        await (0, w.logAudit)("squad.opted_out", (0, w.actorRef)(e), { game: t.slice(-6) }),
        await qi(t, e));
    };
    r.mockGetSquadState = async (e, t) => {
      await ei();
      const a = await Ni(t, e);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      await Vi();
      const i = hi(t) ?? a,
        n = Qt.bookings.filter((e) => e.game_id === t),
        r = (e) => {
          const t = Qt.profiles.find((t) => t.id === e);
          return { name: t?.full_name ?? "Player", avatar_url: t?.avatar_url ?? null };
        },
        o = n.filter((e) => "confirmed" === e.status),
        s = o
          .map((e) =>
            Object.assign({ user_id: e.user_id }, r(e.user_id), {
              confirmed_at: e.squad_confirmed_at ?? null,
            }),
          )
          .sort((e, t) => (e.confirmed_at ? 0 : 1) - (t.confirmed_at ? 0 : 1)),
        d = n
          .filter((e) => "waitlisted" === e.status)
          .sort((e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime())
          .map((e) => Object.assign({ user_id: e.user_id }, r(e.user_id), { confirmed_at: null })),
        l = i.organizer_id === e,
        c = n.filter((t) => t.user_id === e),
        _ = c.find((e) => "cancelled" !== e.status && "rejected" !== e.status),
        u = l
          ? "host"
          : "confirmed" === _?.status
            ? _.squad_confirmed_at
              ? "confirmed"
              : "pending"
            : "waitlisted" === _?.status
              ? "waitlist"
              : "reserved" === _?.status || "pending" === _?.status
                ? "reserved"
                : c.some((e) => e.squad_opted_out_at)
                  ? "opted_out"
                  : c.some((e) => e.squad_dropped_at)
                    ? "dropped"
                    : "not_in",
        m = o.filter((e) => e.squad_confirmed_at).length;
      return {
        game_id: i.id,
        title: i.title,
        sport: i.sport,
        venue_name: Ai(i.venue_id),
        starts_at: i.starts_at,
        price_kwd: i.price_kwd,
        max_players: i.max_players,
        window_status: i.squad_window_status ?? "none",
        opened_at: i.squad_window_opened_at,
        deadline: i.squad_deadline,
        is_host: l,
        can_open:
          l &&
          null == i.squad_window_status &&
          "scheduled" === i.status &&
          new Date(i.starts_at).getTime() > Date.now(),
        viewer_status: u,
        confirmed_count: m,
        pending_count: o.length - m,
        dropped_count: n.filter((e) => e.squad_dropped_at).length,
        members: s,
        waitlist: d,
      };
    };
    const Vi = async () => {
        const e = Date.now();
        for (const t of gi())
          "open" === t.squad_window_status &&
            (new Date(t.squad_deadline ?? 0).getTime() > e ||
              (await Xt(t.id, async () => {
                const e = hi(t.id);
                if (!e || "open" !== e.squad_window_status) return;
                const a = Ai(e.venue_id),
                  i = Qt.bookings.filter(
                    (t) =>
                      t.game_id === e.id &&
                      "confirmed" === t.status &&
                      !t.squad_confirmed_at &&
                      t.user_id !== e.organizer_id,
                  );
                for (const t of i) {
                  ((t.status = "cancelled"),
                    (t.squad_dropped_at = new Date().toISOString()),
                    (t.updated_at = t.squad_dropped_at));
                  const sd9 = await Br(e, t.user_id, !0);
                  await recordSeatCancellation9(e.id, t.user_id, sd9 ?? {}, "squad_dropped");
                  const i = Qt.lineups.find((t) => t.game_id === e.id);
                  if (i) {
                    const a = new Set([`self-${t.user_id}`]);
                    Qt.gamePlayers.forEach((i) => {
                      i.game_id === e.id && i.user_id === t.user_id && a.add(i.id);
                    });
                    [...i.a.slots, ...i.b.slots].some((e) => null != e.player_id && a.has(e.player_id)) &&
                      (a.forEach((e) => _c(i, e)), await lc(i, e.organizer_id, "player_left"));
                  }
                  await bi({
                    id: ea(),
                    user_id: t.user_id,
                    type: "squad_dropped",
                    game_id: e.id,
                    venue_name: a,
                    sport: e.sport,
                    read: !1,
                    created_at: new Date().toISOString(),
                  });
                }
                ((e.squad_window_status = "closed"),
                  await Za(W, Qt.bookings),
                  await Za(te, Qt.games),
                  i.length > 0 && (await Di(e), await rd(e)));
                const n = Qt.bookings.filter(
                  (t) =>
                    t.game_id === e.id &&
                    "confirmed" === t.status &&
                    (t.squad_confirmed_at || t.user_id === e.organizer_id),
                ).length;
                (await bi({
                  id: ea(),
                  user_id: e.organizer_id,
                  type: "squad_window_closed",
                  game_id: e.id,
                  venue_name: a,
                  sport: e.sport,
                  confirmed_count: n,
                  dropped_count: i.length,
                  read: !1,
                  created_at: new Date().toISOString(),
                }),
                  await (0, w.logAudit)("squad.window_closed", (0, w.actorRef)(e.organizer_id), {
                    game: e.id.slice(-6),
                    confirmed: n,
                    dropped: i.length,
                  }),
                  await Yi(e.id, null, "squad_window_closed"));
              })));
      },
      Ji = (e) =>
        "cancelled" === e.status
          ? "cancelled"
          : new Date(e.ends_at).getTime() < Date.now()
            ? "completed"
            : "upcoming";
    // ORG1 (F-ORG1-16): every organizer read takes the caller and only the organizer (or an admin)
    // may read it. Private invite codes are never returned to anyone else.
    // The caller is mandatory. This used to read `if (t && ...) throw; return !t || t === e`, so an
    // undefined caller skipped the throw AND returned true - full owner access, invite codes included,
    // to anyone who simply omitted the argument. The facade exposes the caller as a plain optional
    // second parameter, so any screen that forgot it silently got owner-level reads. Fail closed.
    const orgSelf = (e, t) => {
      if (!t || (t !== e && !ro(t))) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW");
      return t === e;
    };
    r.mockGetOrganizerMatches = async (e, t9) => {
      (await ei(), await tn(), await Yn());
      const own9 = orgSelf(e, t9);
      const t = new Map((await pi()).map((e) => [e.id, e])),
        a = gi().filter((t) => t.organizer_id === e);
      await Promise.all(a.map((e) => Oi(e.id)));
      for (const e of a)
        "cancelled" !== e.status && new Date(e.ends_at).getTime() < Date.now() && (await ur(e));
      return a
        .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime())
        .map((a) => {
          const row9 = Object.assign({}, Ii(a, t, e), { effective_status: Ji(a) });
          // The private invite code belongs to the organizer; an admin reading the list never sees it.
          return own9 ? row9 : Object.assign(row9, { invite_code: null });
        });
    };
    const Qi = async (e) => {
      (await ei(), await Oi(e));
      const t = Qt.bookings.filter((t) => t.game_id === e);
      // The screen cannot offer to settle a cash seat without a handle on the payment.
      const p9 = (e) => {
        const t = Gr(e.game_id, e.user_id);
        return Object.assign({}, e, {
          seat_payment: t
            ? { id: t.id, status: t.status, method: t.method, amount_kwd: t.amount_kwd }
            : null,
        });
      };
      return {
        confirmed: t.filter((e) => "confirmed" === e.status).sort(xi).map(p9),
        reserved: t.filter((e) => "reserved" === e.status).sort(xi).map(p9),
        pending: t.filter((e) => "pending" === e.status).sort(xi).map(p9),
        waitlist: t.filter((e) => "waitlisted" === e.status).sort(xi).map(p9),
      };
    };
    r.mockGetMatchParticipants = Qi;
    r.mockGetOrganizerStats = async (e, t9) => {
      (await ei(), await tn(), orgSelf(e, t9));
      const t = gi().filter((t) => t.organizer_id === e),
        a = t.length,
        i = t.filter((e) => "completed" === Ji(e)).length,
        n = t.filter((e) => "cancelled" === e.status).length,
        r = (e) =>
          Qt.bookings.filter((t) => t.game_id === e && countsAsParticipant9(t)),
        o = t.filter((e) => "cancelled" !== e.status),
        s = o.map((e) => Math.min(1, r(e.id).length / e.max_players)),
        d = s.length ? s.reduce((e, t) => e + t, 0) / s.length : 0,
        l = [];
      for (const e of t) {
        const t = r(e.id).sort(xi);
        if (t.length >= e.max_players) {
          const a =
            (new Date(t[e.max_players - 1].created_at).getTime() - new Date(e.created_at).getTime()) / 36e5;
          a >= 0 && l.push(a);
        }
      }
      const c = l.length ? Math.round((l.reduce((e, t) => e + t, 0) / l.length) * 10) / 10 : null,
        _ = new Map();
      for (const e of Qt.bookings)
        !t.some((t) => t.id === e.game_id) ||
          (!countsAsParticipant9(e)) ||
          _.set(e.user_id, (_.get(e.user_id) ?? 0) + 1);
      return {
        matchesCreated: a,
        matchesCompleted: i,
        avgFillRate: d,
        avgTimeToFillHours: c,
        cancellationRate: a ? n / a : 0,
        returningPlayers: Array.from(_.values()).filter((e) => e >= 2).length,
      };
    };
    const Zi = async (e) => {
      (await ei(), await tn());
      const t = gi().filter((t) => t.organizer_id === e),
        a = t.filter((e) => "completed" === Ji(e)).length,
        i = t.filter((e) => "cancelled" === e.status).length,
        n = a + i,
        r = n ? a / n : 1,
        o = t.length ? i / t.length : 0;
      let s = 0,
        d = 0;
      for (const e of t.filter((e) => "completed" === Ji(e))) {
        const t = Qt.bookings.filter(
          (t) => t.game_id === e.id && countsAsParticipant9(t),
        );
        ((d += t.length), (s += t.filter((e) => null != e.attendance).length));
      }
      const l = d ? s / d : 1,
        c = Qt.orgRatings.filter((t) => t.organizer_id === e),
        _ = c.length ? c.reduce((e, t) => e + t.rating, 0) / c.length : 0,
        u = c.length ? _ / 5 : 0.7,
        m = Math.round(100 * (0.35 * r + 0.25 * (1 - o) + 0.2 * l + 0.2 * u)),
        w = m >= 90 ? "elite" : m >= 75 ? "trusted" : m >= 50 ? "rising" : "new";
      return {
        score: m,
        completionRate: r,
        cancellationRate: o,
        attendanceAccuracy: l,
        avgRating: _,
        ratingCount: c.length,
        tier: w,
      };
    };
    r.mockGetOrganizerReputation = Zi;
    r.mockGetOrganizerRatings = async (e, t9) => (
      await ei(),
      await tn(),
      orgSelf(e, t9),
      Qt.orgRatings
        .filter((t) => t.organizer_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map((e) => ({
          id: e.id,
          rating: e.rating,
          player_name:
            Qt.bookings.find((t) => t.user_id === e.rater_id)?.display_name ??
            Qt.profiles.find((t) => t.id === e.rater_id)?.full_name ??
            "A player",
          match_title: hi(e.game_id)?.title ?? "Match",
          created_at: e.created_at,
        }))
    );
    r.mockRateOrganizer = async (e) => {
      await ei();
      const t = Math.max(1, Math.min(5, Math.round(e.rating))),
        a = Qt.orgRatings.findIndex((t) => t.game_id === e.game_id && t.rater_id === e.rater_id);
      (a >= 0
        ? (Qt.orgRatings[a] = Object.assign({}, Qt.orgRatings[a], { rating: t }))
        : Qt.orgRatings.push({
            id: ea(),
            organizer_id: e.organizer_id,
            rater_id: e.rater_id,
            game_id: e.game_id,
            rating: t,
            created_at: new Date().toISOString(),
          }),
        await Za(ie, Qt.orgRatings));
    };
    let Xi = null;
    const en = async () => {
        if (!Fa()) return;
        let e = ri(Aa, "Rush X Community", "football");
        for (const t of Da) e = ri(t.id, t.name, "football") || e;
        e && (await Za(Y, Qt.profiles));
      },
      tn = async () => {
        if (Fa() && (await en(), await hn(), !Qt.organizerSeeded))
          return (
            Xi ||
              (Xi = an().finally(() => {
                Qt.organizerSeeded || (Xi = null);
              })),
            Xi
          );
      },
      an = async () => {
        if ((await ei(), Qt.organizerSeeded)) return;
        const e = await di(),
          t = e?.user.id;
        if (!t) return;
        if (Qt.orgSeedUid && Qt.orgSeedUid !== t) return void (Qt.organizerSeeded = !0);
        if (
          (await fn(t),
          (Qt.orgSeedUid = t),
          await Za(re, { uid: t }),
          Qt.games.some((e) => e.organizer_id === t))
        )
          return void (Qt.organizerSeeded = !0);
        const a = Date.now(),
          i = (e) => new Date(e).toISOString(),
          n = 36e5,
          r = [
            "Ahmad Al-Saleh",
            "Yousef Behbehani",
            "Khalid Al-Mutairi",
            "Omar Al-Rashidi",
            "Faisal Al-Sabah",
            "Hassan Al-Otaibi",
            "Mishari Al-Enezi",
            "Bader Al-Awadi",
            "Salem Al-Dosari",
            "Talal Al-Ajmi",
          ],
          o = (e) =>
            Object.assign(
              {
                id: ea(),
                venue_id: "11111111-1111-1111-1111-111111111111",
                organizer_id: t,
                audience: "male",
                title: "Match",
                sport: "football",
                format: "football_5v5",
                skill_level: "intermediate",
                starts_at: i(a),
                ends_at: i(a + 54e5),
                duration_minutes: 90,
                max_players: 10,
                waitlist_capacity: 5,
                price_kwd: 3,
                notes: null,
                visibility: "public",
                invite_code: null,
                approval_mode: "auto",
                status: "scheduled",
                cancellation_reason: null,
                cancelled_at: null,
              },
              Wt,
              Bt,
              Kt,
              $t,
              ge,
              { created_at: i(a - 3456e5) },
              e,
            ),
          s = o({
            title: "Sunday 5-a-side",
            venue_id: "11111111-1111-1111-1111-111111111111",
            sport: "football",
            starts_at: i(a - 2592e5),
            ends_at: i(a - 2592e5 + 54e5),
            created_at: i(a - 432e6),
          }),
          d = o({
            title: "Padel doubles night",
            venue_id: "22222222-2222-2222-2222-222222222222",
            sport: "padel",
            format: "padel_4",
            max_players: 4,
            waitlist_capacity: 2,
            price_kwd: 6,
            starts_at: i(a - 108e6),
            ends_at: i(a - 108e6 + 54e5),
            created_at: i(a - 18e7),
          }),
          l = o({
            title: "Tennis singles ladder",
            venue_id: "33333333-3333-3333-3333-333333333333",
            sport: "tennis",
            format: "tennis_singles",
            max_players: 2,
            waitlist_capacity: 2,
            price_kwd: 4,
            starts_at: i(a - 36e6),
            ends_at: i(a - 36e6 + 36e5),
            status: "cancelled",
            cancelled_at: i(a - 72e6),
            cancellation_reason: "Court double-booked by the venue",
            created_at: i(a - 144e6),
          }),
          c = o({
            title: "Thursday 5-a-side",
            venue_id: "a0000000-0000-4000-8000-000000000002",
            sport: "football",
            starts_at: i(a + 936e5),
            ends_at: i(a + 936e5 + 54e5),
            created_at: i(a - 216e5),
          }),
          _ = o({
            title: "Tonight 5-a-side \u2014 need 2!",
            venue_id: "11111111-1111-1111-1111-111111111111",
            sport: "football",
            starts_at: i(a + 144e5),
            ends_at: i(a + 144e5 + 36e5),
            duration_minutes: 60,
            created_at: i(a - 324e5),
            npn_active: !0,
            npn_urgency: "critical",
            npn_radius_km: 10,
            npn_activated_at: i(a - 15e5),
            npn_activation_count: 1,
            npn_notifications_sent: 23,
            npn_joins: 1,
          }),
          u = o({
            title: "Advanced padel 7.0\u20139.0",
            organizer_id: Aa,
            venue_id: "22222222-2222-2222-2222-222222222222",
            sport: "padel",
            format: "padel_4",
            skill_level: "advanced",
            max_players: 4,
            waitlist_capacity: 2,
            price_kwd: 7,
            starts_at: i(a + 72e6),
            ends_at: i(a + 72e6 + 54e5),
            created_at: i(a - 108e5),
            skill_min: 7,
            skill_max: 9,
            skill_policy: "strict",
          });
        Qt.games.push(s, d, l, c, _, u);
        const m = (e, t, a, n, r, o) => ({
          id: ea(),
          game_id: e,
          user_id: `seed-${e.slice(-4)}-${a}`,
          display_name: t,
          status: n,
          attendance: r,
          reserved_until: null,
          created_at: i(o),
          updated_at: i(o),
        });
        (s &&
          r
            .concat(r)
            .slice(0, 10)
            .forEach((e, t) =>
              Qt.bookings.push(
                m(s.id, e, t, "confirmed", t % 5 == 4 ? "no_show" : "attended", a - 432e6 + 2 * t * n),
              ),
            ),
          r
            .slice(0, 4)
            .forEach((e, t) =>
              Qt.bookings.push(m(d.id, e, t, "confirmed", "attended", a - 18e7 + 3 * t * n)),
            ),
          r
            .slice(0, 6)
            .forEach((e, t) => Qt.bookings.push(m(c.id, e, t, "confirmed", null, a - 216e5 + t * n))),
          r
            .slice(0, 8)
            .forEach((e, t) => Qt.bookings.push(m(_.id, e, t, "confirmed", null, a - 288e5 + 30 * t * 6e4))),
          r
            .slice(6, 8)
            .forEach((e, t) => Qt.bookings.push(m(c.id, e, t + 6, "waitlisted", null, a - 18e6 + t * n))),
          [s, d].forEach((e, o) => {
            r.slice(0, 4).forEach((r, s) => {
              Qt.orgRatings.push({
                id: ea(),
                organizer_id: t,
                rater_id: `seed-${e.id.slice(-4)}-${s}`,
                game_id: e.id,
                rating: 0 === o && s % 4 == 0 ? 4 : 5,
                created_at: i(a - (0 === o ? 70 : 28) * n),
              });
            });
          }),
          await Promise.all([Za(te, Qt.games), Za(W, Qt.bookings), Za(ie, Qt.orgRatings)]),
          (Qt.organizerSeeded = !0));
      },
      nn = (e) => Qt.applications.find((t) => t.user_id === e),
      rn = (e) => "approved" === nn(e)?.status;
    async function on(e) {
      if ((await ei(), !rn(e)))
        throw (
          await (0, w.logAudit)("organizer.create_denied", (0, w.actorRef)(e), {
            state: nn(e)?.status ?? "no_application",
          }),
          new Error("E_ORGANIZER_APPROVAL_REQUIRED_YOUR_ORGANIZER_APPLICA")
        );
    }
    async function sn(e) {
      if ((await ei(), "admin" !== Qt.profiles.find((t) => t.id === e)?.role))
        throw (
          await (0, w.logAudit)("admin.access_denied", (0, w.actorRef)(e)),
          new Error("E_ADMINISTRATOR_AUTHORIZATION_REQUIRED")
        );
    }
    const dn = (r.CROSS_PARTITION_TTL_HOURS = 24),
      ln = (e) => {
        const t = Date.now();
        return (
          Qt.crossPartitionGrants.find(
            (a) => a.admin_id === e && !a.revoked_at && new Date(a.expires_at).getTime() > t,
          ) ?? null
        );
      },
      cn = async (e, t, a, i) => {
        const n = aa(e),
          r = t.filter((e) => ia(a(e), n));
        if (r.length === t.length) return t;
        const o = ln(e);
        return o
          ? (await (0, w.logAudit)("partition.crossed", (0, w.actorRef)(e), {
              surface: i,
              grant: o.id.slice(-6),
              crossed: t.length - r.length,
              viewer_world: n,
            }),
            t)
          : r;
      },
      _n = async (e, t, a) => {
        const i = aa(e);
        if (ia(t, i)) return;
        const n = ln(e);
        if (!n)
          throw (
            await (0, w.logAudit)("partition.refused", (0, w.actorRef)(e), { surface: a, viewer_world: i }),
            new Error("E_THAT_RECORD_IS_IN_THE_OTHER_WORLD")
          );
        await (0, w.logAudit)("partition.crossed", (0, w.actorRef)(e), {
          surface: a,
          grant: n.id.slice(-6),
          crossed: 1,
          viewer_world: i,
        });
      },
      un = (e) => aa(e),
      // ADM1 (F-ADM1-9/10): same partition rule as `cn` but without the audit side effect, for stats and
      // "hidden in the other world" counters shown next to partitioned lists.
      adm1Visible = (e, t, a) => {
        if (ln(e)) return t;
        const i = aa(e);
        return t.filter((e) => ia(a(e), i));
      },
      adm1Hidden = (e, t, a) => t.length - adm1Visible(e, t, a).length;
    r.mockGrantCrossPartition = async (e, t, a) => {
      if ((await ei(), await sn(e), e === t)) throw new Error("E_YOU_CANNOT_GRANT_THIS_TO_YOURSELF");
      const i = (0, v.sanitizeText)(a ?? "").slice(0, 200);
      if (!i) throw new Error("E_A_REASON_IS_REQUIRED");
      const n = Qt.profiles.find((e) => e.id === t);
      if (!n || "admin" !== n.role) throw new Error("E_ADMINISTRATOR_AUTHORIZATION_REQUIRED");
      const r = Date.now(),
        o = {
          id: ea(),
          admin_id: t,
          granted_by: e,
          reason: i,
          created_at: new Date(r).toISOString(),
          expires_at: new Date(r + 36e5 * dn).toISOString(),
          revoked_at: null,
          revoked_by: null,
        };
      return (
        Qt.crossPartitionGrants.push(o),
        await Za(ht, Qt.crossPartitionGrants),
        await (0, w.logAdminAudit)("partition.granted", e, t, { grant: o.id.slice(-6), hours: dn }),
        o
      );
    };
    r.mockRevokeCrossPartition = async (e, t) => {
      (await ei(), await sn(e));
      const a = Qt.crossPartitionGrants.find((e) => e.id === t);
      if (!a) throw new Error("E_GRANT_NOT_FOUND");
      a.revoked_at ||
        ((a.revoked_at = new Date().toISOString()),
        (a.revoked_by = e),
        await Za(ht, Qt.crossPartitionGrants),
        await (0, w.logAdminAudit)("partition.revoked", e, a.admin_id, { grant: a.id.slice(-6) }));
    };
    // XC (F-XC-7) / ADM1 (F-ADM1-32): the privileged action log is readable in the product, not only
    // in devtools. Admin-only, newest first, optionally narrowed by action type or free text.
    r.mockGetAdminAuditLog = async (e, t) => {
      (await ei(), await sn(e));
      const rows9 = await (0, w.readAdminAudit)(),
        q9 = String(t?.query ?? "")
          .trim()
          .toLowerCase(),
        ty9 = t?.type ? String(t.type) : null,
        lim9 = Math.max(1, Math.min(500, Number(t?.limit) || 200)),
        nm9 = (id9) => {
          if (!id9) return null;
          const pr9 = Qt.profiles.find((p9) => p9.id === id9);
          return pr9?.full_name ?? null;
        },
        all9 = rows9.map((r9) => ({
          id: r9.id,
          at: r9.at,
          type: r9.type,
          actor_id: r9.actor ?? null,
          actor_name: nm9(r9.actor),
          actor_ref: r9.actorRef ?? null,
          target_id: r9.target ?? null,
          target_name: nm9(r9.target),
          device: r9.device ?? null,
          meta: r9.meta ?? {},
        }));
      return {
        total: all9.length,
        types: [...new Set(all9.map((r9) => r9.type))].sort(),
        rows: all9
          .filter((r9) => !ty9 || r9.type === ty9)
          .filter(
            (r9) =>
              !q9 ||
              [r9.type, r9.actor_name, r9.actor_id, r9.target_name, r9.target_id, JSON.stringify(r9.meta)]
                .some((v9) =>
                  String(v9 ?? "")
                    .toLowerCase()
                    .includes(q9),
                ),
          )
          .slice(0, lim9),
      };
    };
    r.mockGetCrossPartitionGrants = async (e) => (
      await ei(),
      await sn(e),
      Qt.crossPartitionGrants
        .slice()
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
    );
    r.mockGetMyPartitionStance = async (e) => {
      (await ei(), await sn(e), await hn());
      const t = ln(e),
        a = (e) => un(e.user_id);
      return {
        world: aa(e),
        crossing: !!t,
        expires_at: t?.expires_at ?? null,
        reason: t?.reason ?? null,
        // ADM1 (F-ADM1-9): how many records each admin list is withholding because they belong to the
        // other world (0 while a cross-partition grant is active).
        hidden: {
          applications: adm1Hidden(e, Qt.applications, a),
          players: adm1Hidden(e, Qt.skillProfiles, a),
          sanctions: adm1Hidden(e, Qt.sanctions, a),
        },
      };
    };
    r.mockAdminFindPlayers = async (e, t) => {
      (await ei(), await sn(e));
      const a = (0, v.sanitizeText)(t ?? "")
        .trim()
        .toLowerCase();
      if (a.length < 2) return [];
      return (
        await cn(
          e,
          Qt.profiles.filter((e) => e.full_name?.toLowerCase().includes(a) || e.id.toLowerCase().includes(a)),
          (e) => e.audience ?? "male",
          "admin.find_players",
        )
      )
        .slice(0, 25)
        .map((e) => ({
          user_id: e.id,
          display_name: e.full_name ?? e.id.slice(0, 12),
          audience: e.audience ?? null,
          role: e.role ?? "user",
          created_at: e.created_at,
        }));
    };
    r.mockAdminCorrectAudience = async (e, t, a, i) => {
      (await ei(), await sn(e));
      const n = (0, v.sanitizeText)(i ?? "").slice(0, 200);
      if (!n) throw new Error("E_A_REASON_IS_REQUIRED");
      const r = Qt.profiles.findIndex((e) => e.id === t);
      if (r < 0) throw new Error("E_NO_SUCH_PLAYER");
      const o = Qt.profiles[r].audience;
      if (o === a) throw new Error("E_THAT_PLAYER_IS_ALREADY_IN_THIS");
      await _n(e, o ?? "male", "admin.correct_audience");
      ((Qt.profiles[r] = Object.assign({}, Qt.profiles[r], { audience: a })), await Za(Y, Qt.profiles));
      // ADM1 (F-ADM1-16): moving worlds severs follow links across the partition; record how many.
      const s = Qt.follows.length;
      ((Qt.follows = Qt.follows.filter((e) => e.follower_id !== t && e.followee_id !== t)),
        await Za(Ne, Qt.follows));
      const d = s - Qt.follows.length;
      // ADM1 (F-ADM1-17): privileged change -> admin audit store with before/after values.
      await (0, w.logAdminAudit)("admin.audience_corrected", e, t, {
        from: o ?? "unset",
        to: a,
        reason: n,
        follows_removed: d,
      });
      return { from: o ?? null, to: a, follows_removed: d };
    };
    const mn = async (e, t, a) => {
        // ADM1 (F-ADM1-7): organizer decisions never overwrite a privileged role (admin / analyst), and
        // every role transition is recorded with before/after values and the acting admin.
        const i = Qt.profiles.findIndex((t) => t.id === e);
        if (i < 0) return;
        const n = Qt.profiles[i].role ?? "user";
        if (n === t || "admin" === n || "analyst" === n) return;
        ((Qt.profiles[i] = Object.assign({}, Qt.profiles[i], { role: t })), await Za(Y, Qt.profiles));
        await (0, w.logAdminAudit)("profile.role_changed", a ?? null, e, { from: n, to: t });
      },
      wn = async (e, t, a, i) => {
        await bi({
          id: ea(),
          user_id: e,
          type: "organizer_decision",
          application_id: t,
          decision: a,
          note: i,
          read: !1,
          created_at: new Date().toISOString(),
        });
      };
    // ORG1 (F-ORG1-15): the applicant only receives what the apply screen needs.
    const applicantDto = (e) =>
      e
        ? {
            id: e.id,
            status: e.status,
            submitted_at: e.submitted_at,
            reviewed_at: e.reviewed_at,
            rejection_reason: "rejected" === e.status || "suspended" === e.status ? (e.rejection_reason ?? null) : null,
            reapply_after: e.reapply_after ?? null,
            applicant_message: "info_requested" === e.status ? (e.admin_notes ?? null) : null,
            full_legal_name: e.full_legal_name,
            mobile: e.mobile,
            email: e.email,
            display_name: e.display_name,
            bio: e.bio,
            sports: e.sports,
            expected_monthly_matches: e.expected_monthly_matches,
            organizer_type: e.organizer_type,
            id_doc_type: e.id_doc_type,
            id_doc_last4: e.id_doc_last4,
            id_doc_uploaded: !!e.id_doc_uploaded,
            business: e.business
              ? { company_name: e.business.company_name, website: e.business.website, socials: e.business.socials }
              : null,
            resubmissions: (e.history ?? []).length,
          }
        : null;
    r.mockGetMyOrganizerApplication = async (e) => (await ei(), await tn(), applicantDto(nn(e)));
    r.mockSubmitOrganizerApplication = async (e, t) => {
      (await ei(), await hn());
      const a = (0, v.sanitizeName)(t.full_legal_name);
      if (!a) throw new Error("E_ENTER_YOUR_FULL_LEGAL_NAME");
      const i = (0, v.sanitizePhone)(t.mobile);
      if (i.replace(/\D/g, "").length < 8) throw new Error("E_ENTER_A_VALID_MOBILE_NUMBER");
      const n = (0, v.sanitizeText)(t.email, 254);
      if (!(0, v.isValidEmail)(n)) throw new Error("E_ENTER_A_VALID_EMAIL_ADDRESS");
      const r = (0, v.sanitizeText)(t.display_name, 60);
      if (!r) throw new Error("E_ENTER_AN_ORGANIZER_DISPLAY_NAME");
      const o = (0, v.sanitizeText)(t.bio, 500);
      if (!t.sports.length) throw new Error("E_SELECT_AT_LEAST_ONE_SPORT_YOU");
      const s = (t.id_doc_number || "").replace(/\s+/g, "");
      if (s.length < 6) throw new Error("E_ENTER_A_VALID_IDENTITY_DOCUMENT_NUMBER");
      // ORG1 (F-ORG1-14): an image of the identity document is mandatory and stored as a media reference.
      const img9 = "string" == typeof t.id_doc_image ? t.id_doc_image : "";
      if (!/^data:image\/(?:png|jpe?g|webp);base64,/.test(img9)) throw new Error("E_UPLOAD_YOUR_IDENTITY_DOCUMENT");
      const d = nn(e);
      if ("approved" === d?.status) throw new Error("E_YOU_ARE_ALREADY_AN_APPROVED_ORGANIZER");
      if ("under_review" === d?.status) throw new Error("E_YOUR_APPLICATION_IS_ALREADY_UNDER_REVIEW");
      if ("rejected" === d?.status && d.reapply_after && new Date(d.reapply_after).getTime() > Date.now()) {
        const e = Math.ceil((new Date(d.reapply_after).getTime() - Date.now()) / 864e5);
        throw new Error(`E_REAPPLY_IN_DAYS:${e}`);
      }
      if ("suspended" === d?.status) throw new Error("E_YOUR_ORGANIZER_ACCESS_IS_SUSPENDED_CONTACT");
      const l = await (0, c.hashIdentifier)(i),
        _ = await (0, c.hashIdentifier)(s),
        u = new Set();
      (Qt.applications.some((t) => t.user_id !== e && t.phone_hash === l) && u.add("duplicate_phone"),
        Qt.applications.some((t) => t.user_id !== e && t.id_doc_ref === _) && u.add("duplicate_document"));
      // ORG1 (F-ORG1-13): velocity counts every submission in the record's history, not one row per user.
      [...(d?.history ?? []), ...(d ? [d] : [])].filter((t) => Date.now() - new Date(t.submitted_at).getTime() < 864e5)
        .length >= 2 && u.add("velocity");
      const docRef9 = await Ya(img9);
      let m = null;
      "business" === t.organizer_type &&
        t.business &&
        (m = {
          company_name: (0, v.sanitizeText)(t.business.company_name, 120),
          registration_number_ref: t.business.registration_number
            ? await (0, c.hashIdentifier)(t.business.registration_number)
            : "",
          license_ref: t.business.license_number
            ? await (0, c.hashIdentifier)(t.business.license_number)
            : "",
          website: (0, v.sanitizeText)(t.business.website, 200),
          socials: (0, v.sanitizeText)(t.business.socials, 200),
        });
      const p = new Date().toISOString(),
        f = {
          id: d?.id ?? ea(),
          user_id: e,
          status: "under_review",
          full_legal_name: a,
          mobile: i,
          email: n,
          display_name: r,
          bio: o,
          sports: t.sports,
          expected_monthly_matches: Math.max(0, Math.min(1e3, Math.floor(t.expected_monthly_matches || 0))),
          organizer_type: t.organizer_type,
          id_doc_type: t.id_doc_type,
          id_doc_ref: _,
          id_doc_last4: s.slice(-4),
          id_doc_uploaded: !0,
          id_doc_media_ref: docRef9,
          business: m,
          phone_hash: l,
          risk_flags: Array.from(u),
          reviewed_by: null,
          rejection_reason: null,
          admin_notes: null,
          reapply_after: null,
          submitted_at: p,
          reviewed_at: null,
          created_at: d?.created_at ?? p,
          // Previous versions of the application are kept (without the document image) for reviewers.
          history: d
            ? [...(d.history ?? []), Object.assign({}, d, { history: void 0, id_doc_media_ref: void 0 })].slice(-10)
            : [],
        },
        g = Qt.applications.findIndex((t) => t.user_id === e);
      (g >= 0 ? (Qt.applications[g] = f) : Qt.applications.push(f),
        await Za(ne, Qt.applications),
        await (0, w.logAudit)("organizer.application_submitted", (0, w.actorRef)(e), {
          type: t.organizer_type,
        }),
        u.size &&
          (await (0, w.logAudit)("organizer.application_flagged", (0, w.actorRef)(e), {
            flags: Array.from(u).join(","),
          })));
      for (const e of Qt.profiles.filter((e) => "admin" === e.role))
        await bi({
          id: ea(),
          user_id: e.id,
          type: "organizer_application",
          application_id: f.id,
          applicant_name: r,
          read: !1,
          created_at: p,
        });
      // ORG1 (F-ORG1-15): the applicant gets the same slim DTO as the read endpoint.
      return applicantDto(f);
    };
    const pn = (e) => {
      const t = Qt.profiles.find((t) => t.id === e.user_id),
        a = gi().filter((t) => t.organizer_id === e.user_id);
      return Object.assign({}, e, {
        applicant_role: t?.role ?? "user",
        matches_created: a.length,
        matches_cancelled: a.filter((e) => "cancelled" === e.status).length,
        account_age_days: t ? Math.floor((Date.now() - new Date(t.created_at).getTime()) / 864e5) : 0,
      });
    };
    // ADM1 (F-ADM1-31): the queue only renders names, sports, flags and dates -> slim list DTO; the
    // detail DTO drops hashed identity references (phone / document / registration / licence hashes).
    const adm1AppListDto = (e) => ({
        id: e.id,
        user_id: e.user_id,
        status: e.status,
        display_name: e.display_name,
        full_legal_name: e.full_legal_name,
        sports: e.sports,
        organizer_type: e.organizer_type,
        risk_flags: e.risk_flags ?? [],
        submitted_at: e.submitted_at,
        reviewed_at: e.reviewed_at,
        info_requested_at: e.info_requested_at ?? null,
      }),
      adm1AppDetailDto = (e) => {
        const t = pn(e);
        (delete t.phone_hash, delete t.id_doc_ref);
        t.business &&
          ((t.business = Object.assign({}, t.business)),
          delete t.business.registration_number_ref,
          delete t.business.license_ref);
        return t;
      };
    r.mockGetOrganizerApplications = async (e, t) => {
      (await ei(), await hn(), await sn(e));
      return (await cn(e, Qt.applications, (e) => un(e.user_id), "admin.applications"))
        .filter((e) => !t?.status || e.status === t.status)
        .sort((e, t) => new Date(t.submitted_at).getTime() - new Date(e.submitted_at).getTime())
        .map(adm1AppListDto);
    };
    r.mockGetApplicationDetail = async (e, t) => {
      (await ei(), await hn(), await sn(e));
      const a = Qt.applications.find((e) => e.id === t);
      return a ? (await _n(e, un(a.user_id), "admin.application_detail"), adm1AppDetailDto(a)) : null;
    };
    // ADM1 (F-ADM1-8): server-side transition table; mirrors the actions the detail screen offers.
    const adm1AppTransitions = { approved: ["suspend"], suspended: ["approve"], rejected: ["approve"] },
      adm1AppAllowed = (e) => adm1AppTransitions[e] ?? ["approve", "request_info", "reject"];
    r.mockReviewApplication = async (e, t, a, i) => {
      (await ei(), await sn(e));
      const n = Qt.applications.find((e) => e.id === t);
      if (!n) throw new Error("E_APPLICATION_NOT_FOUND");
      // ADM1 (F-ADM1-1): the reviewer must not be the applicant; the attempt is audited.
      if (n.user_id === e)
        throw (
          await (0, w.logAdminAudit)("organizer.self_review_blocked", e, n.user_id, {
            application: t.slice(-6),
            action: String(a),
          }),
          new Error("E_YOU_CANNOT_REVIEW_YOUR_OWN")
        );
      if (!["approve", "reject", "request_info", "suspend"].includes(a) || !adm1AppAllowed(n.status).includes(a))
        throw new Error("E_INVALID_TRANSITION");
      await _n(e, un(n.user_id), "admin.review_application");
      // ADM1 (F-ADM1-5): `reason` is the message delivered to the applicant, `notes` the internal note.
      const r = new Date().toISOString(),
        o = (0, v.sanitizeText)(i?.reason ?? "", 200),
        s = (0, v.sanitizeText)(i?.notes ?? "", 500),
        d = n.status,
        l = t.slice(-6);
      // ADM1 (F-ADM1-2): adverse decisions and info requests require an explicit message; nothing is
      // back-filled with boilerplate any more.
      if ("approve" !== a && !o) throw new Error("E_A_REASON_IS_REQUIRED");
      if ("approve" === a)
        ((n.status = "approved"),
          (n.reviewed_by = e),
          (n.reviewed_at = r),
          (n.admin_notes = s || n.admin_notes),
          (n.rejection_reason = null),
          (n.reapply_after = null),
          (n.info_requested_at = null),
          await mn(n.user_id, "organizer", e),
          await (0, w.logAdminAudit)("organizer.application_approved", e, n.user_id, {
            application: l,
            from: d,
            to: "approved",
            message: o || null,
            note: s || null,
          }),
          await wn(n.user_id, n.id, "approved", o));
      else if ("reject" === a)
        ((n.status = "rejected"),
          (n.reviewed_by = e),
          (n.reviewed_at = r),
          (n.rejection_reason = o),
          (n.admin_notes = s || n.admin_notes),
          (n.reapply_after = new Date(Date.now() + 2592e6).toISOString()),
          (n.info_requested_at = null),
          await mn(n.user_id, "user", e),
          await (0, w.logAdminAudit)("organizer.application_rejected", e, n.user_id, {
            application: l,
            from: d,
            to: "rejected",
            reason: o,
            note: s || null,
          }),
          await wn(n.user_id, n.id, "rejected", o));
      else if ("request_info" === a)
        // ADM1 (F-ADM1-4): explicit `info_requested` status so the queue shows it and the applicant can
        // resubmit (the applicant side reads the request from `admin_notes`).
        ((n.status = "info_requested"),
          (n.admin_notes = o),
          (n.info_requested_at = r),
          (n.reviewed_by = e),
          (n.reviewed_at = r),
          await (0, w.logAdminAudit)("organizer.application_info_requested", e, n.user_id, {
            application: l,
            from: d,
            to: "info_requested",
            message: o,
            note: s || null,
          }),
          await wn(n.user_id, n.id, "info_requested", o));
      else
        ((n.status = "suspended"),
          (n.reviewed_by = e),
          (n.reviewed_at = r),
          (n.rejection_reason = o),
          (n.admin_notes = s || n.admin_notes),
          await mn(n.user_id, "user", e),
          await (0, w.logAdminAudit)("organizer.application_suspended", e, n.user_id, {
            application: l,
            from: d,
            to: "suspended",
            reason: o,
            note: s || null,
          }),
          await wn(n.user_id, n.id, "suspended", o));
      return (await Za(ne, Qt.applications), n);
    };
    r.mockGetOrganizerTrustScore = async (e) => {
      await ei();
      const t = nn(e),
        a = "approved" === t?.status && t.id_doc_uploaded,
        i = await Zi(e),
        n = Qt.profiles.find((t) => t.id === e),
        r = n ? Math.floor((Date.now() - new Date(n.created_at).getTime()) / 864e5) : 0,
        o = Math.min(1, r / 180),
        s = i.ratingCount ? i.avgRating / 5 : 0.6,
        d = Math.round(
          100 *
            (0.25 * (a ? 1 : 0) +
              0.2 * i.completionRate +
              0.15 * (1 - i.cancellationRate) +
              0.15 * i.attendanceAccuracy +
              0.15 * s +
              0.1 * o),
        ),
        l = a ? (d >= 90 ? "elite" : d >= 75 ? "trusted" : d >= 55 ? "verified" : "basic") : "unverified";
      return {
        score: d,
        identityVerified: a,
        completionRate: i.completionRate,
        cancellationRate: i.cancellationRate,
        avgRating: i.avgRating,
        attendanceAccuracy: i.attendanceAccuracy,
        accountAgeDays: r,
        tier: l,
      };
    };
    const fn = async (e) => {
      if (Fa()) {
        if (!Qt.applications.some((t) => t.user_id === e)) {
          const t = new Date().toISOString(),
            a = Qt.profiles.find((t) => t.id === e),
            i = a?.full_name || "Demo Organizer";
          (Qt.applications.push({
            id: ea(),
            user_id: e,
            status: "approved",
            full_legal_name: i,
            mobile: "+965 5000 0000",
            email: "organizer@playora.app",
            display_name: i,
            bio: "Verified community organizer.",
            sports: ["football", "padel"],
            expected_monthly_matches: 8,
            organizer_type: "individual",
            id_doc_type: "civil_id",
            id_doc_ref: await (0, c.hashIdentifier)("demo-civil-292000000001"),
            id_doc_last4: "0001",
            id_doc_uploaded: !0,
            business: null,
            phone_hash: await (0, c.hashIdentifier)("+965 5000 0000"),
            risk_flags: [],
            reviewed_by: oe,
            rejection_reason: null,
            admin_notes: null,
            reapply_after: null,
            submitted_at: t,
            reviewed_at: t,
            created_at: t,
          }),
            await Za(ne, Qt.applications));
        }
        await mn(e, "organizer");
      }
    };
    let gn = null;
    const hn = () =>
        Fa() ? (Qt.approvalSeeded ? Promise.resolve() : (gn || (gn = yn()), gn)) : Promise.resolve(),
      yn = async () => {
        if ((await ei(), !Qt.approvalSeeded)) {
          if (
            (Qt.profiles.some((e) => e.id === oe) ||
              (Qt.profiles.push({
                id: oe,
                full_name: "Platform Admin",
                avatar_url: null,
                phone: null,
                audience: "male",
                privacy_visibility: "everyone",
                avatar_mode: "photo",
                media_consent: !0,
                preferred_sports: [],
                skill_level: "all",
                bio: null,
                role: "admin",
                consent: { analytics: !1, marketing: !1 },
                consent_updated_at: null,
                created_at: new Date(Date.now() - 31536e6).toISOString(),
              }),
              await Za(Y, Qt.profiles)),
            Qt.profiles.some((e) => e.id === se) ||
              (Qt.profiles.push({
                id: se,
                full_name: "Platform Admin (\u0633\u064a\u062f\u0627\u062a)",
                avatar_url: null,
                phone: null,
                audience: "female",
                privacy_visibility: "everyone",
                avatar_mode: "photo",
                media_consent: !0,
                preferred_sports: [],
                skill_level: "all",
                bio: null,
                role: "admin",
                consent: { analytics: !1, marketing: !1 },
                consent_updated_at: null,
                created_at: new Date(Date.now() - 31536e6).toISOString(),
              }),
              await Za(Y, Qt.profiles)),
            Qt.profiles.some((e) => e.id === de) ||
              (Qt.profiles.push({
                id: de,
                full_name: "Platform Analyst",
                avatar_url: null,
                phone: null,
                audience: "male",
                privacy_visibility: "everyone",
                avatar_mode: "photo",
                media_consent: !0,
                preferred_sports: [],
                skill_level: "all",
                bio: null,
                role: "analyst",
                consent: { analytics: !1, marketing: !1 },
                consent_updated_at: null,
                created_at: new Date(Date.now() - 1728e7).toISOString(),
              }),
              await Za(Y, Qt.profiles)),
            !Qt.applications.some((e) => e.user_id.startsWith("seed-applicant")))
          ) {
            const e = new Date().toISOString(),
              t = (e, t) => {
                Qt.profiles.some((t) => t.id === e) ||
                  Qt.profiles.push({
                    id: e,
                    full_name: t,
                    avatar_url: null,
                    phone: null,
                    audience: "male",
                    privacy_visibility: "everyone",
                    avatar_mode: "photo",
                    media_consent: !0,
                    preferred_sports: [],
                    skill_level: "all",
                    bio: null,
                    role: "user",
                    consent: { analytics: !1, marketing: !1 },
                    consent_updated_at: null,
                    created_at: new Date(Date.now() - 3456e6).toISOString(),
                  });
              };
            (t("seed-applicant-1", "Yousef Behbehani"), t("seed-applicant-2", "Khalid Al-Mutairi"));
            const a = "+965 6611 2233",
              i = await (0, c.hashIdentifier)(a);
            (Qt.applications.push({
              id: "seed-app-1",
              user_id: "seed-applicant-1",
              status: "under_review",
              full_legal_name: "Yousef A. Behbehani",
              mobile: a,
              email: "yousef@example.com",
              display_name: "Yousef Behbehani",
              bio: "Weekend padel & tennis organizer in Salmiya.",
              sports: ["padel", "tennis"],
              expected_monthly_matches: 6,
              organizer_type: "individual",
              id_doc_type: "civil_id",
              id_doc_ref: await (0, c.hashIdentifier)("seed-doc-292010100011"),
              id_doc_last4: "0011",
              id_doc_uploaded: !0,
              business: null,
              phone_hash: i,
              risk_flags: [],
              reviewed_by: null,
              rejection_reason: null,
              admin_notes: null,
              reapply_after: null,
              submitted_at: new Date(Date.now() - 216e5).toISOString(),
              reviewed_at: null,
              created_at: e,
            }),
              Qt.applications.push({
                id: "seed-app-2",
                user_id: "seed-applicant-2",
                status: "under_review",
                full_legal_name: "Khalid M. Al-Mutairi",
                mobile: a,
                email: "khalid@kuwaitfootball.example",
                display_name: "Kuwait Football Academy",
                bio: "Football academy hosting weekly 7v7 leagues.",
                sports: ["football"],
                expected_monthly_matches: 24,
                organizer_type: "business",
                id_doc_type: "civil_id",
                id_doc_ref: await (0, c.hashIdentifier)("seed-doc-292020200022"),
                id_doc_last4: "0022",
                id_doc_uploaded: !0,
                business: {
                  company_name: "Kuwait Football Academy Co.",
                  registration_number_ref: await (0, c.hashIdentifier)("CR-998877"),
                  license_ref: await (0, c.hashIdentifier)("LIC-554433"),
                  website: "kuwaitfootball.example",
                  socials: "@kwfootball",
                },
                phone_hash: i,
                risk_flags: ["duplicate_phone"],
                reviewed_by: null,
                rejection_reason: null,
                admin_notes: null,
                reapply_after: null,
                submitted_at: new Date(Date.now() - 72e5).toISOString(),
                reviewed_at: null,
                created_at: e,
              }),
              await Promise.all([Za(Y, Qt.profiles), Za(ne, Qt.applications)]));
          }
          Qt.approvalSeeded = !0;
        }
      },
      kn = (e) => {
        const t = (new Date(e).getTime() - Date.now()) / 36e5;
        return t < 6 ? "critical" : t < 24 ? "urgent" : "standard";
      };
    r.deriveNpnUrgency = kn;
    const vn = async (e) => {
        const t = Qt.games.findIndex((t) => t.id === e);
        if (t < 0 || !Qt.games[t].npn_active) return;
        const a = Qt.games[t];
        ((a.npn_joins += 1),
          ki(e) >= a.max_players &&
            ((a.npn_filled_at = new Date().toISOString()),
            (a.npn_active = !1),
            await (0, w.logAudit)("npn.filled", (0, w.actorRef)(a.organizer_id), {
              game: e.slice(-6),
              minutes: a.npn_activated_at
                ? Math.round((Date.now() - new Date(a.npn_activated_at).getTime()) / 6e4)
                : -1,
            })),
          await Za(te, Qt.games));
      },
      Sn = (e, t) => {
        const a = e.npn_radius_km,
          i = [];
        for (const t of Qt.profiles)
          t.id !== e.organizer_id &&
            "admin" !== t.role &&
            ia(aa(t.id), e.audience) &&
            i.push({
              id: t.id,
              name: t.full_name ?? "Player",
              sports: t.preferred_sports,
              skill: t.skill_level,
            });
        Fa() &&
          ai.forEach((e, t) => {
            i.push({
              id: `npn-demo-${t}`,
              name: e,
              sports: ["football", "padel", "tennis"].filter((e, a) => (t + a) % 2 == 0),
              skill: ["beginner", "intermediate", "advanced", "all"][t % 4],
            });
          });
        const n = [];
        for (const r of i) {
          const i = Sa(r.id),
            o = (0, f.distanceKm)(i.lat, i.lng, t.lat, t.lng);
          if (null != a && o > a) continue;
          const s = 0 === r.sports.length || r.sports.includes(e.sport),
            d = "all" === e.skill_level || "all" === r.skill || r.skill === e.skill_level,
            l = Qt.bookings.filter((e) => e.user_id === r.id && null != e.attendance),
            c = l.length ? l.filter((e) => "attended" === e.attendance).length / l.length : 0.8,
            _ = Qt.bookings.some(
              (t) =>
                t.user_id === r.id &&
                gi().some((a) => a.id === t.game_id && a.organizer_id === e.organizer_id),
            ),
            u = Math.max(0, 1 - o / 30),
            m = Math.round(
              100 * (0.3 * u + 0.25 * (s ? 1 : 0) + 0.15 * (d ? 1 : 0.4) + 0.2 * c + 0.1 * (_ ? 1 : 0)),
            );
          n.push({
            user_id: r.id,
            display_name: r.name,
            distance_km: (0, f.formatKm)(o),
            sport_match: s,
            skill_match: d,
            reliability: c,
            played_before: _,
            relevance: m,
          });
        }
        return n.sort((e, t) => t.relevance - e.relevance);
      },
      En = async (e, t) => {
        const a = Sn(e, t),
          i = Math.max(0, e.max_players - ki(e.id)),
          n = kn(e.starts_at);
        let r = 0;
        for (const o of a)
          o.sport_match &&
            ((r += 1),
            Qt.profiles.some((e) => e.id === o.user_id) &&
              (await bi({
                id: ea(),
                user_id: o.user_id,
                type: "need_player",
                game_id: e.id,
                venue_name: t.name,
                sport: e.sport,
                urgency: n,
                slots: i,
                distance_km: o.distance_km,
                skill_level: e.skill_level,
                starts_at: e.starts_at,
                read: !1,
                created_at: new Date().toISOString(),
              })));
        return r;
      };
    r.mockActivateNeedPlayer = async (e, t, a) => (
      await ei(),
      await on(t),
      Xt(e, async () => {
        const i = Qt.games.findIndex((t) => t.id === e);
        if (i < 0) throw new Error("E_ONLY_MATCHES_YOU_CREATED_CAN_USE");
        const n = Qt.games[i];
        if ((zi(n, t), "scheduled" !== n.status)) throw new Error("E_THIS_MATCH_IS_NOT_ACTIVE");
        const r = (new Date(n.starts_at).getTime() - Date.now()) / 36e5;
        if (r <= 0) throw new Error("E_THIS_MATCH_HAS_ALREADY_STARTED");
        if (r > 24) throw new Error("E_NEED_PLAYER_NOW_OPENS_24_HOURS");
        if ((await Di(n), ki(e) >= n.max_players)) throw new Error("E_THIS_MATCH_IS_ALREADY_FULL");
        if (n.npn_activation_count >= 3)
          throw (
            await (0, w.logAudit)("npn.blocked", (0, w.actorRef)(t), {
              game: e.slice(-6),
              reason: "activation_limit",
            }),
            new Error("E_ACTIVATION_LIMIT_REACHED_FOR_THIS_MATCH")
          );
        ((n.npn_active = !0),
          (n.npn_urgency = kn(n.starts_at)),
          void 0 !== a?.radius_km && (n.npn_radius_km = a.radius_km),
          (n.npn_activated_at = new Date().toISOString()),
          (n.npn_activation_count += 1),
          (n.npn_filled_at = null));
        const o = fi().find((e) => e.id === n.venue_id),
          // ORG2 (F-ORG2-15): at most one broadcast per 10 minutes per match. Activation broadcast
          // unconditionally and never recorded the timestamp, so an activate/update/deactivate cycle
          // fanned out to every nearby player in the partition with nothing in the way - six waves
          // inside a few seconds, given the three-activation cap.
          t9 =
            n.npn_last_broadcast_at &&
            Date.now() - new Date(n.npn_last_broadcast_at).getTime() < 6e5;
        return (
          t9 ||
            ((n.npn_notifications_sent += await En(n, o)),
            (n.npn_last_broadcast_at = new Date().toISOString())),
          await Za(te, Qt.games),
          await (0, w.logAudit)("npn.activated", (0, w.actorRef)(t), {
            game: e.slice(-6),
            urgency: n.npn_urgency,
            radius: n.npn_radius_km ?? "all",
          }),
          n
        );
      })
    );
    r.mockUpdateNeedPlayer = async (e, t, a) => (
      await ei(),
      await on(t),
      Xt(e, async () => {
        const i = Qt.games.findIndex((t) => t.id === e);
        if (i < 0) throw new Error("E_MATCH_NOT_FOUND");
        const n = Qt.games[i];
        if ((zi(n, t), !n.npn_active)) throw new Error("E_NEED_PLAYER_NOW_IS_NOT_ACTIVE");
        (void 0 !== a.radius_km && (n.npn_radius_km = a.radius_km), (n.npn_urgency = kn(n.starts_at)));
        const r = fi().find((e) => e.id === n.venue_id),
          // ORG2 (F-ORG2-15): at most one broadcast per 10 minutes per match.
          c9 = n.npn_last_broadcast_at && Date.now() - new Date(n.npn_last_broadcast_at).getTime() < 6e5;
        return (
          c9 || ((n.npn_notifications_sent += await En(n, r)), (n.npn_last_broadcast_at = new Date().toISOString())),
          await Za(te, Qt.games),
          await (0, w.logAudit)("npn.updated", (0, w.actorRef)(t), {
            game: e.slice(-6),
            radius: n.npn_radius_km ?? "all",
          }),
          n
        );
      })
    );
    r.mockDeactivateNeedPlayer = async (e, t) => {
      (await ei(),
        await on(t),
        await Xt(e, async () => {
          const a = Qt.games.findIndex((t) => t.id === e);
          if (a < 0) return;
          const i = Qt.games[a];
          (zi(i, t),
            (i.npn_active = !1),
            await Za(te, Qt.games),
            await (0, w.logAudit)("npn.deactivated", (0, w.actorRef)(t), { game: e.slice(-6) }));
        }));
    };
    r.mockGetNeedPlayerFeed = async (e) => {
      (await ei(), await tn());
      const t = e ? Qt.profiles.find((t) => t.id === e) : void 0,
        a = e ? Sa(e) : { lat: 29.32, lng: 47.99 },
        i = new Map((await pi()).map((e) => [e.id, e])),
        n = Date.now(),
        r = [];
      for (const t of Qt.games) {
        if (!t.npn_active || "scheduled" !== t.status || "public" !== t.visibility) continue;
        if (new Date(t.starts_at).getTime() <= n) continue;
        await Oi(t.id);
        const o = Math.max(0, t.max_players - ki(t.id));
        if (0 === o) continue;
        const s = i.get(t.venue_id),
          d = await Zi(t.organizer_id);
        r.push(
          Object.assign({}, Ii(t, i, e), {
            npn_effective_urgency: kn(t.starts_at),
            distance_km: (0, f.formatKm)((0, f.distanceKm)(a.lat, a.lng, s.lat, s.lng)),
            open_slots: o,
            organizer_score: d.score,
          }),
        );
      }
      const o = (e) =>
        t && "all" !== e.skill_level && "all" !== t.skill_level && t.skill_level !== e.skill_level ? 1 : 0;
      return r.sort(
        (e, t) =>
          new Date(e.starts_at).getTime() - new Date(t.starts_at).getTime() ||
          e.distance_km - t.distance_km ||
          o(e) - o(t) ||
          t.organizer_score - e.organizer_score,
      );
    };
    const bn = async (e, t, a = 6) => {
      await ei();
      const i = hi(e);
      if (!i) throw new Error("E_MATCH_NOT_FOUND");
      zi(i, t);
      const n = fi().find((e) => e.id === i.venue_id),
        r = Sn(i, n).slice(0, a),
        o = [];
      for (const t of r) {
        const a = Qt.skillProfiles.find((e) => e.user_id === t.user_id && e.sport === i.sport),
          n = a?.rating ?? (0, y.defaultRatingForLevel)(i.sport, "all");
        o.push({
          user_id: t.user_id,
          display_name: t.display_name,
          distance_km: t.distance_km,
          played_before: t.played_before,
          skill_category_key: (0, y.levelKey)(i.sport, n),
          reliability_category_key: (0, y.reliabilityCategoryKey)(Math.round(100 * t.reliability)),
          compat_class_key: (await _r(e, t.user_id)) ?? "compatMed",
        });
      }
      return o;
    };
    r.mockGetNpnCandidates = bn;
    r.mockGetNpnAdminStats = async (e) => {
      (await ei(), await sn(e));
      const t = Qt.games.filter((e) => e.npn_activation_count > 0),
        a = t
          .filter((e) => e.npn_filled_at && e.npn_activated_at)
          .map((e) => (new Date(e.npn_filled_at).getTime() - new Date(e.npn_activated_at).getTime()) / 6e4)
          .filter((e) => e >= 0),
        i = t.reduce((e, t) => e + t.npn_notifications_sent, 0),
        n = t.reduce((e, t) => e + t.npn_joins, 0);
      return {
        activations: t.reduce((e, t) => e + t.npn_activation_count, 0),
        activeNow: Qt.games.filter((e) => e.npn_active).length,
        filled: t.filter((e) => e.npn_filled_at).length,
        avgFillMinutes: a.length ? Math.round(a.reduce((e, t) => e + t, 0) / a.length) : null,
        notificationsSent: i,
        joins: n,
        conversionRate: i ? n / i : 0,
      };
    };
    const Tn = async (e, t, a, i) => {
        (Qt.mismatchIncidents.push({
          id: ea(),
          game_id: e.id,
          user_id: t,
          sport: e.sport,
          severity: a,
          action: i,
          created_at: new Date().toISOString(),
        }),
          await Za(Yt, Qt.mismatchIncidents),
          "blocked" !== i &&
            (await (0, w.logAudit)("skill.mismatch_incident", (0, w.actorRef)(t), {
              game: e.id.slice(-6),
              severity: a,
              action: i,
            })));
      },
      An = (e) => {
        const t = Date.now();
        let a = 0,
          i = 0,
          n = 0;
        for (const r of Qt.bookings) {
          if (r.user_id !== e) continue;
          if (!countsAsParticipant9(r)) continue;
          const o = hi(r.game_id);
          !o ||
            "cancelled" === o.status ||
            new Date(o.ends_at).getTime() > t ||
            ((a += 1), "attended" === r.attendance && (i += 1), "no_show" === r.attendance && (n += 1));
        }
        return { played: a, attended: i, noShow: n };
      },
      Dn = async (e, t) => {
        await ei();
        let a = Qt.skillProfiles.find((a) => a.user_id === e && a.sport === t);
        if (a) return a;
        const i = Qt.profiles.find((t) => t.id === e);
        return (
          (a = {
            user_id: e,
            sport: t,
            rating: (0, y.defaultRatingForLevel)(t, i?.skill_level ?? "all"),
            confidence: 0,
            matches_played: 0,
            evals_received: 0,
            votes_below: 0,
            votes_expected: 0,
            votes_above: 0,
            self_assessed_at: null,
            updated_at: new Date().toISOString(),
          }),
          On(a),
          Qt.skillProfiles.push(a),
          await Za(jt, Qt.skillProfiles),
          a
        );
      },
      On = (e) => {
        ((e.matches_played = An(e.user_id).played),
          (e.confidence = (0, y.computeConfidence)(e)),
          (e.updated_at = new Date().toISOString()));
      };
    r.mockGetSkillProfiles = async (e) => {
      await ei();
      const t = [];
      for (const a of ["padel", "tennis", "football"]) {
        const i = await Dn(e, a);
        On(i);
        const n = An(e),
          r = (0, y.attendanceRate)(n.attended, n.noShow);
        t.push(
          Object.assign({}, i, {
            attendance_rate: r,
            verified: (0, y.isVerified)({
              matches_played: i.matches_played,
              confidence: i.confidence,
              attendance_rate: r,
            }),
            level_key: (0, y.levelKey)(a, i.rating),
          }),
        );
      }
      return (await Za(jt, Qt.skillProfiles), t);
    };
    const Rn = async (e, t, a) => {
      await ei();
      const i = await Dn(e, t);
      ((i.rating = (0, y.clampRating)(t, a)),
        (i.self_assessed_at = new Date().toISOString()),
        On(i),
        await Za(jt, Qt.skillProfiles),
        await (0, w.logAudit)("skill.self_assessed", (0, w.actorRef)(e), { sport: t, rating: i.rating }));
    };
    r.mockSetSelfRating = Rn;
    r.mockSubmitSkillEvaluation = async (e, t) => {
      await ei();
      const { game_id: a, ratee_id: i, verdict: n } = t,
        r = e;
      if (r === i) throw new Error("E_YOU_CANNOT_RATE_YOUR_OWN_SKILL");
      const o = hi(a);
      if (!o || "cancelled" === o.status) throw new Error("E_MATCH_NOT_FOUND");
      if (new Date(o.ends_at).getTime() > Date.now())
        throw new Error("E_SKILL_EVALUATIONS_OPEN_AFTER_THE_MATCH");
      const s = (e) =>
        Qt.bookings.some(
          (t) => t.game_id === a && t.user_id === e && countsAsParticipant9(t),
        );
      if (!s(r) || !s(i))
        throw (
          await (0, w.logAudit)("skill.eval_blocked", (0, w.actorRef)(r), { game: a.slice(-6) }),
          new Error("E_ONLY_CONFIRMED_PARTICIPANTS_CAN_EVALUATE_EACH")
        );
      const d = await Dn(r, o.sport),
        l = await Dn(i, o.sport),
        c = Qt.skillEvals.find((e) => e.game_id === a && e.rater_id === r && e.ratee_id === i);
      if (c) {
        if (c.verdict === n) return;
        ((l[`votes_${c.verdict}`] -= 1), (c.verdict = n), (c.created_at = new Date().toISOString()));
      } else
        (Qt.skillEvals.push({
          id: ea(),
          game_id: a,
          sport: o.sport,
          rater_id: r,
          ratee_id: i,
          verdict: n,
          created_at: new Date().toISOString(),
        }),
          (l.evals_received += 1));
      ((l[`votes_${n}`] += 1),
        (l.rating = (0, y.adjustRating)(o.sport, l.rating, n, l.confidence, d.confidence)),
        On(l),
        await Promise.all([Za(qt, Qt.skillEvals), Za(jt, Qt.skillProfiles)]),
        await (0, w.logAudit)("skill.evaluated", (0, w.actorRef)(r), { game: a.slice(-6), verdict: n }));
    };
    const In = async (e, t) => {
      await ei();
      const a = hi(e);
      if (!a || "cancelled" === a.status) return [];
      if (new Date(a.ends_at).getTime() > Date.now()) return [];
      const i = Qt.bookings.filter(
        (t) => t.game_id === e && countsAsParticipant9(t),
      );
      return i.some((e) => e.user_id === t)
        ? i
            .filter((e) => e.user_id !== t)
            .map((a) => ({
              user_id: a.user_id,
              display_name: a.display_name ?? "Player",
              my_verdict:
                Qt.skillEvals.find((i) => i.game_id === e && i.rater_id === t && i.ratee_id === a.user_id)
                  ?.verdict ?? null,
            }))
        : [];
    };
    r.mockGetSkillEvalTargets = In;
    const Mn = async (e, t) => {
      await ei();
      const a = hi(e);
      if (!a) return null;
      const i = await Dn(t, a.sport),
        n = (0, y.rangeMismatch)(a.sport, i.rating, a.skill_min, a.skill_max);
      return Object.assign({ level_key: (0, y.levelKey)(a.sport, i.rating) }, n, { policy: a.skill_policy });
    };
    r.mockGetSkillFit = Mn;
    r.mockGetRecommendedGames = async (e) => {
      const t = await Mi({ userId: e });
      if (!e) return t;
      const a = Sa(e),
        i = await Promise.all(
          t.map(async (t) => {
            const i = (0, f.distanceKm)(a.lat, a.lng, t.venue.lat, t.venue.lng),
              n = Math.max(0, t.max_players - t.bookings_count) / t.max_players,
              r = (await Zi(t.organizer_id)).score / 100;
            return {
              g: t,
              score:
                0.5 * ((await lr(e, t)).score / 100) + 0.2 * Math.max(0, 1 - i / 30) + 0.15 * n + 0.15 * r,
            };
          }),
        );
      return i.sort((e, t) => t.score - e.score).map((e) => e.g);
    };
    r.mockGetSkillAdminStats = async (e) => {
      (await ei(), await sn(e));
      return {
        perSport: ["padel", "tennis", "football"].map((e) => {
          const t = Qt.skillProfiles.filter((t) => t.sport === e),
            a = new Map();
          let i = 0;
          for (const n of t) {
            const t = (0, y.levelKey)(e, n.rating);
            a.set(t, (a.get(t) ?? 0) + 1);
            const r = An(n.user_id);
            (0, y.isVerified)({
              matches_played: n.matches_played,
              confidence: n.confidence,
              attendance_rate: (0, y.attendanceRate)(r.attended, r.noShow),
            }) && (i += 1);
          }
          return {
            sport: e,
            players: t.length,
            avgRating: t.length ? t.reduce((e, t) => e + t.rating, 0) / t.length : 0,
            avgConfidence: t.length ? t.reduce((e, t) => e + t.confidence, 0) / t.length : 0,
            verified: i,
            distribution: Array.from(a, ([e, t]) => ({ key: e, count: t })),
          };
        }),
        evaluations: Qt.skillEvals.length,
        mismatchIncidents: Qt.mismatchIncidents.length,
        blockedJoins: Qt.mismatchIncidents.filter((e) => "blocked" === e.action).length,
      };
    };
    const Nn = async (e, t) => {
      const a = await Dn(e, t);
      On(a);
      const i = An(e),
        n = (0, y.attendanceRate)(i.attended, i.noShow),
        r = Qt.bookings.filter((t) => t.user_id === e),
        o = r.filter((e) => "cancelled" === e.status).length,
        s = r.length ? Math.min(1, o / Math.max(3, r.length)) : 0,
        d = a.votes_below + a.votes_expected + a.votes_above,
        l = d ? a.votes_expected / d : 0.7,
        c = Math.round(100 * (0.6 * n + 0.2 * (1 - s) + 0.2 * l)),
        _ = Qt.profiles.find((t) => t.id === e),
        u = _ ? (Date.now() - new Date(_.created_at).getTime()) / 864e5 : 0,
        m = (0, y.isVerified)({
          matches_played: a.matches_played,
          confidence: a.confidence,
          attendance_rate: n,
        }),
        w = Math.round(
          100 * ((c / 100) * 0.4 + 0.3 * a.confidence + 0.2 * (m ? 1 : 0) + 0.1 * Math.min(1, u / 180)),
        );
      return {
        skill: (0, y.skillScore100)(t, a.rating),
        attendance: Math.round(100 * n),
        reliability: c,
        trust: w,
      };
    };
    r.mockGetMySkillSummary = async (e) => {
      await ei();
      const t = [];
      for (const a of ["padel", "tennis", "football"]) {
        const i = await Dn(e, a);
        On(i);
        const n = An(e),
          r = (0, y.attendanceRate)(n.attended, n.noShow);
        t.push({
          sport: a,
          level_key: (0, y.levelKey)(a, i.rating),
          verified: (0, y.isVerified)({
            matches_played: i.matches_played,
            confidence: i.confidence,
            attendance_rate: r,
          }),
          matches_played: i.matches_played,
          attendance_rate: r,
        });
      }
      return (await Za(jt, Qt.skillProfiles), t);
    };
    r.mockSetSelfCategory = async (e, t, a) => {
      await Rn(e, t, (0, y.ratingForBand)(t, a));
    };
    const Cn = async (e, t, a) => {
        const i = await Dn(e, t),
          n = await Nn(e, t),
          r = An(e),
          o = (0, y.attendanceRate)(r.attended, r.noShow);
        return {
          user_id: e,
          display_name: a,
          verified: (0, y.isVerified)({
            matches_played: i.matches_played,
            confidence: i.confidence,
            attendance_rate: o,
          }),
          skill_category_key: (0, y.levelKey)(t, i.rating),
          reliability_category_key: (0, y.reliabilityCategoryKey)(n.reliability),
          attendance_category_key: (0, y.attendanceCategoryKey)(n.attendance),
          completed_matches: i.matches_played,
        };
      },
      Pn = async (e, t) => {
        await ei();
        const a = hi(t);
        if (!a) throw new Error("E_MATCH_NOT_FOUND");
        (zi(a, e), await on(e));
        const i = Qt.bookings.filter((e) => e.game_id === t && "pending" === e.status),
          n = [];
        for (const e of i) {
          const i = await Cn(e.user_id, a.sport, e.display_name ?? "Player");
          ((i.compat_class_key = await _r(t, e.user_id)), n.push(i));
        }
        return (
          n.length > 0 &&
            (await (0, w.logAudit)("intel.accessed", (0, w.actorRef)(e), {
              game: t.slice(-6),
              players: n.length,
              scope: "labels",
            })),
          n
        );
      };
    r.mockGetJoinRequestIntel = Pn;
    r.mockAdminGetPlayerIntel = async (e, adm1Opts) => {
      await ei();
      try {
        await sn(e);
      } catch (t) {
        throw (await (0, w.logAudit)("intel.access_denied", (0, w.actorRef)(e), { scope: "full" }), t);
      }
      const t = [],
        a = await cn(e, Qt.skillProfiles, (e) => un(e.user_id), "admin.player_intel");
      for (const e of a) {
        const a =
            Qt.profiles.find((t) => t.id === e.user_id)?.full_name ??
            Qt.bookings.find((t) => t.user_id === e.user_id)?.display_name ??
            e.user_id.slice(0, 10),
          i = An(e.user_id);
        t.push({
          user_id: e.user_id,
          display_name: a,
          sport: e.sport,
          rating: e.rating,
          confidence: e.confidence,
          scores: await Nn(e.user_id, e.sport),
          votes: { below: e.votes_below, expected: e.votes_expected, above: e.votes_above },
          evals_received: e.evals_received,
          matches_played: e.matches_played,
          no_shows: i.noShow,
          audience: Qt.profiles.find((t) => t.id === e.user_id)?.audience ?? null,
        });
      }
      // ADM1 (F-ADM1-14): the screen asks for an access record once per mount; plain refreshes after an
      // adjustment do not flood the audit store.
      return (
        adm1Opts?.logAccess &&
          (await (0, w.logAdminAudit)("intel.accessed", e, null, { scope: "full", rows: t.length })),
        t.sort((e, t) => e.display_name.localeCompare(t.display_name))
      );
    };
    r.mockAdminAdjustRating = async (e, t, a, i, n) => {
      (await ei(), await sn(e));
      // ADM1 (F-ADM1-12): a real reason is mandatory and stored with before/after values.
      const r = (0, v.sanitizeText)(n ?? "", 200);
      if (!r) throw new Error("E_A_REASON_IS_REQUIRED");
      // ADM1 (F-ADM1-13): the player must exist, be in the admin's world (or a grant must be active),
      // and already have a skill profile for that sport (no side-effect creation on the admin path).
      if (!Qt.profiles.some((e) => e.id === t)) throw new Error("E_NO_SUCH_PLAYER");
      await _n(e, un(t), "admin.adjust_rating");
      const o = Qt.skillProfiles.find((e) => e.user_id === t && e.sport === a);
      if (!o) throw new Error("E_NO_SKILL_PROFILE");
      if ("number" != typeof i || !Number.isFinite(i)) throw new Error("E_INVALID_VALUE");
      const s = o.rating;
      ((o.rating = (0, y.clampRating)(a, i)),
        On(o),
        await Za(jt, Qt.skillProfiles),
        await (0, w.logAdminAudit)("skill.admin_adjusted", e, t, { sport: a, from: s, to: o.rating, reason: r }));
      return { from: s, to: o.rating };
    };
    const Ln = (e) => {
        const t = new Date(e);
        return new Date(t.getFullYear(), t.getMonth(), t.getDate());
      },
      Gn = (e, t) => {
        const a = new Date(e);
        return (a.setDate(a.getDate() + t), a);
      },
      Un = (e, t) => {
        const a = new Date(e);
        return (
          a.getFullYear() === t.getFullYear() && a.getMonth() === t.getMonth() && a.getDate() === t.getDate()
        );
      },
      xn = (e, t, a, i) => {
        if ("last" === i) {
          const i = new Date(e, t + 1, 0),
            n = (i.getDay() - a + 7) % 7;
          return new Date(e, t, i.getDate() - n);
        }
        const n = { first: 1, second: 2, third: 3, fourth: 4 }[i],
          r = (a - new Date(e, t, 1).getDay() + 7) % 7;
        return new Date(e, t, 1 + r + 7 * (n - 1));
      },
      zn = (e, t, a) => {
        const i = [],
          n = Ln(t),
          r = Ln(a);
        if ("monthly" === e.frequency && e.monthly_week && null != e.monthly_weekday) {
          let t = new Date(n.getFullYear(), n.getMonth(), 1);
          for (; t <= r; ) {
            const a = xn(t.getFullYear(), t.getMonth(), e.monthly_weekday, e.monthly_week);
            (a >= n && a <= r && i.push(a), (t = new Date(t.getFullYear(), t.getMonth() + 1, 1)));
          }
          return i;
        }
        for (let t = new Date(n); t <= r; t = Gn(t, 1)) {
          ("daily" === e.frequency || e.weekdays.includes(t.getDay())) && i.push(new Date(t));
        }
        return i;
      },
      Hn = (e, t) =>
        new Date(e.getFullYear(), e.getMonth(), e.getDate(), Math.floor(t / 60), t % 60, 0, 0).toISOString(),
      Fn = (e, t) =>
        Object.assign(
          {
            id: ea(),
            venue_id: e.venue_id,
            organizer_id: e.organizer_id,
            audience: aa(e.organizer_id),
            title: e.title,
            sport: e.sport,
            format: e.format,
            skill_level: e.skill_level,
            starts_at: Hn(t, e.start_minutes),
            ends_at: Hn(t, e.end_minutes),
            duration_minutes: e.end_minutes - e.start_minutes,
            max_players: e.max_players,
            waitlist_capacity: e.waitlist_capacity,
            price_kwd: e.price_kwd,
            notes: e.notes,
            visibility: e.visibility,
            invite_code: "private" === e.visibility ? Hi() : null,
            approval_mode: e.approval_mode,
            status: "scheduled",
            cancellation_reason: null,
            cancelled_at: null,
            series_id: e.id,
            skill_min: e.skill_min,
            skill_max: e.skill_max,
            skill_policy: e.skill_policy,
          },
          Kt,
          $t,
          ge,
          { created_at: new Date().toISOString() },
        ),
      Bn = new Map(),
      jn = (e) => {
        const t = Bn.get(e.id);
        if (t) return t;
        const a = qn(e).finally(() => Bn.delete(e.id));
        return (Bn.set(e.id, a), a);
      },
      qn = async (e) => {
        if ("active" !== e.status) return !1;
        if (!rn(e.organizer_id)) return !1;
        const t = Ln(new Date()),
          a = [t, Ln(e.start_date)];
        e.resume_from && a.push(Ln(e.resume_from));
        const i = new Date(Math.max(...a.map((e) => e.getTime())));
        let n = Gn(t, 7 * e.horizon_weeks);
        if (e.end_date) {
          const t = Ln(e.end_date);
          t < n && (n = t);
        }
        if (n < i) return !1;
        const r = zn(e, i, n),
          o = Qt.games.filter((t) => t.series_id === e.id),
          s = e.auto_invite
            ? ((d = e.id),
              Array.from(
                new Set(
                  Qt.bookings
                    .filter((e) => {
                      const t = hi(e.game_id);
                      return t?.series_id === d && countsAsParticipant9(e);
                    })
                    .map((e) => e.user_id),
                ),
              ))
            : [];
        var d;
        let l = 0;
        for (const a of r) {
          // horizon_weeks is fixed at 12 and 'daily' is otherwise unbounded, so a single pass could
          // mint 84 occurrences. Cap it; the next pass picks up where this one stopped.
          if (l >= 60) break;
          if (o.some((e) => Un(e.starts_at, a))) continue;
          const i = Fn(e, a);
          if (
            (Qt.games.push(i),
            o.push(i),
            (l += 1),
            await (0, w.logAudit)("series.occurrence_generated", (0, w.actorRef)(e.organizer_id), {
              series: e.id.slice(-6),
            }),
            e.auto_invite && a.getTime() - t.getTime() <= 12096e5)
          )
            for (const t of s)
              await bi({
                id: ea(),
                user_id: t,
                type: "series_invite",
                game_id: i.id,
                series_id: e.id,
                venue_name: Ai(e.venue_id),
                sport: e.sport,
                title: e.title,
                starts_at: i.starts_at,
                read: !1,
                created_at: new Date().toISOString(),
              });
        }
        const c = Qt.templates.findIndex((t) => t.id === e.id);
        return (
          c >= 0 && (Qt.templates[c] = Object.assign({}, e, { generated_until: n.toISOString() })),
          l > 0 && (await Promise.all([Za(te, Qt.games), Za($, Qt.notifications)])),
          await Za(Ft, Qt.templates),
          l > 0
        );
      },
      Yn = async () => {
        for (const e of Qt.templates) "active" === e.status && (await jn(e));
      };
    r.mockCreateSeries = async (e, t) => {
      (await ei(), await on(e));
      const a = (0, v.sanitizeText)(t.title, 100);
      if (!a) throw new Error("E_ADD_A_MATCH_TITLE");
      if (t.end_minutes <= t.start_minutes) throw new Error("E_END_TIME_MUST_BE_AFTER_THE");
      if (t.end_minutes - t.start_minutes < 30 || t.end_minutes - t.start_minutes > 360) throw new Error("E_DURATION_OUT_OF_RANGE");
      validateMatchInput(t);
      {
        const s9 = new Date(t.start_date).getTime();
        if (Number.isNaN(s9)) throw new Error("E_PICK_A_DATE_AND_TIME");
        if (s9 < Date.now() - 864e5) throw new Error("E_MATCH_CANNOT_START_IN_PAST");
        if (t.end_date && new Date(t.end_date).getTime() < s9) throw new Error("E_SERIES_END_BEFORE_START");
        if (Qt.templates.filter((t) => t.organizer_id === e && Date.now() - new Date(t.created_at).getTime() < 36e5).length >= 3)
          throw new Error("E_YOU_HAVE_CREATED_TOO_MANY_SERIES");
        if (!t.custom_venue) {
          const v9 = fi().find((e) => e.id === t.venue_id);
          if (!v9) throw new Error("E_CHOOSE_A_VENUE");
          validateMatchInput(t, { venue: v9 });
        }
      }
      if ("weekly" === t.frequency && (!t.weekdays || 0 === t.weekdays.length))
        throw new Error("E_PICK_AT_LEAST_ONE_WEEKDAY");
      if ("monthly" === t.frequency && (!t.monthly_week || null == t.monthly_weekday))
        throw new Error("E_PICK_THE_MONTHLY_PATTERN");
      let i;
      if (t.custom_venue) {
        i = await createCustomVenue9(e, t.sport, t.custom_venue);
      } else {
        if (!t.venue_id || !fi().some((e) => e.id === t.venue_id)) throw new Error("E_CHOOSE_A_VENUE");
        i = t.venue_id;
      }
      const n = {
        id: ea(),
        organizer_id: e,
        title: a,
        sport: t.sport,
        format: t.format,
        skill_level: t.skill_level,
        venue_id: i,
        max_players: t.max_players,
        waitlist_capacity: Math.max(0, Math.min(20, t.waitlist_capacity ?? Ma(t.max_players))),
        price_kwd: Math.max(0, Math.min(100, Number(t.price_kwd ?? 0))),
        notes: t.notes ? (0, v.sanitizeText)(t.notes, 500) : null,
        visibility: t.visibility,
        approval_mode: t.approval_mode,
        skill_min: t.skill_min ?? null,
        skill_max: t.skill_max ?? null,
        skill_policy: t.skill_policy ?? "open",
        start_date: Ln(t.start_date).toISOString(),
        start_minutes: t.start_minutes,
        end_minutes: t.end_minutes,
        frequency: t.frequency,
        weekdays: t.weekdays ?? [],
        monthly_week: t.monthly_week ?? null,
        monthly_weekday: t.monthly_weekday ?? null,
        end_date: t.end_date ?? null,
        horizon_weeks: 12,
        auto_invite: t.auto_invite ?? !1,
        status: "active",
        resume_from: null,
        generated_until: null,
        created_at: new Date().toISOString(),
      };
      (Qt.templates.push(n),
        await Za(Ft, Qt.templates),
        await jn(n),
        await (0, w.logAudit)("series.created", (0, w.actorRef)(e), {
          series: n.id.slice(-6),
          sport: t.sport,
          frequency: t.frequency,
        }));
      const r = Qt.games.filter((e) => e.series_id === n.id).length;
      return { template: n, occurrences: r };
    };
    const Wn = (e) => Qt.templates.find((t) => t.id === e),
      Kn = (e) =>
        Qt.games.filter(
          (t) =>
            t.series_id === e && "scheduled" === t.status && new Date(t.starts_at).getTime() > Date.now(),
        );
    r.mockEditFutureOccurrences = async (e, t, a) => {
      await ei();
      const i = Wn(e);
      if (!i) throw new Error("E_SERIES_NOT_FOUND");
      if (i.organizer_id !== t) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_3");
      await on(t);
      const n = Qt.templates.findIndex((t) => t.id === e);
      // The patch was applied verbatim, so the price and duration bounds enforced at creation could be
      // walked straight past on edit - mockUpdateMatch refuses to touch price at all, and the two
      // editors disagreed. Allow-list what a series edit may change and validate the result.
      const EDITABLE9 = [
          "title",
          "notes",
          "skill_level",
          "start_minutes",
          "end_minutes",
          "max_players",
          "waitlist_capacity",
          "price_kwd",
        ],
        patch9 = {};
      for (const e of EDITABLE9) e in (a ?? {}) && (patch9[e] = a[e]);
      // The series screen only offers a start time, so a move has to carry the duration with it.
      // Without this the end minute stayed put and an edit could produce zero-length sessions, which
      // is what it did: moving a 18:00-19:30 series to 19:30 left every occurrence starting and
      // ending at 19:30, and nothing complained.
      null != patch9.start_minutes &&
        null == patch9.end_minutes &&
        (patch9.end_minutes = patch9.start_minutes + (i.end_minutes - i.start_minutes));
      const merged9 = Object.assign({}, i, patch9);
      {
        // validateMatchInput takes a time window, and a template carries minutes; synthesise one for
        // the same day so the duration bounds apply here too.
        const d9 = new Date();
        d9.setHours(0, 0, 0, 0);
        validateMatchInput(merged9, {
          starts_at: new Date(d9.getTime() + 6e4 * merged9.start_minutes + 864e5).toISOString(),
          ends_at: new Date(d9.getTime() + 6e4 * merged9.end_minutes + 864e5).toISOString(),
        });
      }
      // Repricing an occupied seat leaves the money already taken at the old amount with no top-up and
      // no refund, and nothing downstream reconciles the difference.
      const repriced9 = Number(merged9.price_kwd) !== Number(i.price_kwd);
      if (repriced9) {
        const paidOn9 = Kn(e).some((e) =>
          Qt.payments.some((t) => "seat" === t.kind && t.game_id === e.id && "paid" === t.status),
        );
        if (paidOn9) throw new Error("E_A_SEAT_HAS_ALREADY_BEEN_PAID");
      }
      Qt.templates[n] = merged9;
      const r = Qt.templates[n];
      let o = 0;
      for (const t of Kn(e)) {
        const e = new Date(t.starts_at);
        ((t.starts_at = Hn(e, r.start_minutes)),
          (t.ends_at = Hn(e, r.end_minutes)),
          (t.duration_minutes = r.end_minutes - r.start_minutes),
          (t.skill_level = r.skill_level),
          (t.notes = r.notes),
          (t.price_kwd = r.price_kwd));
        const a = Qt.bookings.filter((e) => e.game_id === t.id && "confirmed" === e.status).length;
        ((t.max_players = Math.max(a, r.max_players)),
          (o += 1),
          await Bi(t, (e) => ({
            id: ea(),
            user_id: e,
            type: "match_update",
            game_id: t.id,
            venue_name: Ai(t.venue_id),
            sport: t.sport,
            summary: "series schedule",
            read: !1,
            created_at: new Date().toISOString(),
          })));
      }
      return (
        await Promise.all([Za(Ft, Qt.templates), Za(te, Qt.games)]),
        await (0, w.logAudit)("series.updated", (0, w.actorRef)(t), { series: e.slice(-6), occurrences: o }),
        o
      );
    };
    const $n = async (e, t, a, i) => {
      const n = Wn(e);
      if (!n) throw new Error("E_SERIES_NOT_FOUND");
      if (n.organizer_id !== t) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_3");
      await on(t);
      const r = Qt.templates.findIndex((t) => t.id === e);
      return (
        (Qt.templates[r] = Object.assign({}, n, {
          status: a,
          resume_from: "active" === a ? (i ?? new Date().toISOString()) : n.resume_from,
        })),
        await Za(Ft, Qt.templates),
        Qt.templates[r]
      );
    };
    r.mockPauseSeries = async (e, t) => {
      (await ei(),
        await $n(e, t, "paused"),
        await (0, w.logAudit)("series.paused", (0, w.actorRef)(t), { series: e.slice(-6) }));
    };
    r.mockResumeSeries = async (e, t, a) => {
      await ei();
      const i = await $n(e, t, "active", a);
      (await jn(i), await (0, w.logAudit)("series.resumed", (0, w.actorRef)(t), { series: e.slice(-6) }));
    };
    r.mockEndSeries = async (e, t) => {
      (await ei(),
        await $n(e, t, "ended"),
        await (0, w.logAudit)("series.ended", (0, w.actorRef)(t), { series: e.slice(-6) }));
    };
    r.mockCancelSeries = async (e, t, a) => {
      await ei();
      const i = Wn(e);
      if (!i) throw new Error("E_SERIES_NOT_FOUND");
      if (i.organizer_id !== t) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_3");
      await on(t);
      const n = (0, v.sanitizeText)(a || "", 200);
      if (n.length < 3) throw new Error("E_A_REASON_IS_REQUIRED");
      let r = 0,
        r9 = 0,
        c9 = 0;
      for (const t9 of Kn(e))
        await Xt(t9.id, async () => {
          if ("cancelled" === t9.status) return;
          const a = await cancelGameLocked(t9.id, t, n, { series: e.slice(-6) });
          ((r += 1), (r9 += a.refunded), a.court_released || (c9 += 1));
        });
      const o = Qt.templates.findIndex((t) => t.id === e);
      return (
        (Qt.templates[o] = Object.assign({}, i, {
          status: "cancelled",
          cancelled_at: new Date().toISOString(),
          cancellation_reason: n,
        })),
        await Promise.all([Za(Ft, Qt.templates), Za(te, Qt.games), Za(W, Qt.bookings)]),
        await (0, w.logAudit)("series.cancelled", (0, w.actorRef)(t), {
          series: e.slice(-6),
          occurrences: r,
          refunded: r9,
          courts_not_released: c9,
          reason: n,
        }),
        { occurrences: r, refunded: r9, courts_not_released: c9 }
      );
    };
    r.mockJoinSeries = async (e, t) => {
      (await ei(), md(t));
      const a = Wn(e);
      if (!a) throw new Error("E_SERIES_NOT_FOUND");
      // A paused or ended series could still be joined through the occurrences it had already
      // generated.
      if ("active" !== a.status) throw new Error("E_THIS_MATCH_IS_NO_LONGER_OPEN");
      await jn(a);
      // This kept two counts and threw away everything else each occurrence returned. On a paid
      // series every seat comes back with a payment deadline attached, so a player who joined twelve
      // weeks of matches was told "12 joined" and never told about twelve payment deadlines, each of
      // which expires the seat when it passes. Genuine refusals - a ban, a closed registration, the
      // wrong partition - were discarded too, so a blocked player saw the same two zeroes as a
      // successful one. Carry the deadlines out, and surface the first refusal.
      let i = 0,
        n = 0,
        r9 = 0,
        b9 = null;
      const d9 = [];
      for (const a of Kn(e).sort((e, t) => new Date(e.starts_at).getTime() - new Date(t.starts_at).getTime()))
        try {
          const e = await ji(a.id, t);
          ("confirmed" === e.status
            ? (i += 1)
            : "waitlisted" === e.status
              ? (n += 1)
              : "reserved" === e.status && (r9 += 1),
            e.payment_due && d9.push(e.payment_due));
        } catch (e) {
          b9 || (b9 = e instanceof Error ? e.message : String(e));
        }
      return { joined: i, waitlisted: n, reserved: r9, payments_due: d9, blocked: b9 };
    };
    const Vn = (e, t) => {
      const a = Qt.games.filter((t) => t.series_id === e.id),
        i = a
          .filter((e) => "scheduled" === e.status && new Date(e.starts_at).getTime() > Date.now())
          .sort((e, t) => new Date(e.starts_at).getTime() - new Date(t.starts_at).getTime());
      return Object.assign({}, e, {
        venue_name: Ai(e.venue_id),
        next_occurrence: i[0]?.starts_at ?? null,
        total_occurrences: a.length,
        upcoming_occurrences: i.length,
        user_joined_upcoming: t
          ? i.filter((e) =>
              Qt.bookings.some((a) => a.game_id === e.id && a.user_id === t && "confirmed" === a.status),
            ).length
          : void 0,
      });
    };
    r.mockGetOrganizerSeries = async (e, t9) => (
      await ei(),
      await Yn(),
      orgSelf(e, t9),
      Qt.templates
        .filter((t) => t.organizer_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map((t) => Vn(t, e))
    );
    r.mockGetSeries = async (e, t) => {
      await ei();
      const a = Wn(e);
      if (!a) return null;
      await jn(a);
      // ORG2 (F-ORG2-18): organizer-only fields are stripped for other users; ownership is explicit.
      const i = Object.assign({}, Vn(a, t), { organizer_id: a.organizer_id, is_organizer: !!t && a.organizer_id === t });
      return i.is_organizer || (t && ro(t)) ? i : (delete i.notes, delete i.auto_invite, delete i.resume_from, i);
    };
    r.mockGetSeriesAnalytics = async (e, t9) => {
      await ei();
      // ORG2 (F-ORG2-7): only the organizer of the series (or an admin) can read its analytics.
      const s9 = Wn(e);
      if (!s9) throw new Error("E_SERIES_NOT_FOUND");
      if (!t9 || (s9.organizer_id !== t9 && !ro(t9))) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_3");
      const t = Qt.games.filter((t) => t.series_id === e),
        a = Date.now(),
        i = t.filter((e) => "cancelled" !== e.status && new Date(e.ends_at).getTime() < a),
        n = t.filter((e) => "scheduled" === e.status && new Date(e.starts_at).getTime() > a),
        r = t.filter((e) => "cancelled" === e.status),
        o = new Map();
      let s = 0,
        d = 0,
        l = 0;
      for (const e of t)
        for (const t of Qt.bookings)
          t.game_id === e.id &&
            ((!countsAsParticipant9(t)) ||
              ((s += 1), o.set(t.user_id, (o.get(t.user_id) ?? 0) + 1)),
            null != t.attendance && ((d += 1), "attended" === t.attendance && (l += 1)));
      const c = o.size,
        _ = Array.from(o.values()).filter((e) => e >= 2).length,
        u = t.filter((e) => "cancelled" !== e.status),
        m = u.map((e) => {
          const t = Qt.bookings.filter(
            (t) => t.game_id === e.id && countsAsParticipant9(t),
          ).length;
          return Math.min(1, t / e.max_players);
        });
      return {
        occurrences: t.length,
        completed: i.length,
        upcoming: n.length,
        cancelled: r.length,
        avgAttendance: d ? l / d : 0,
        fillRate: m.length ? m.reduce((e, t) => e + t, 0) / m.length : 0,
        cancellationRate: t.length ? r.length / t.length : 0,
        returningPlayers: _,
        retentionRate: c ? _ / c : 0,
        // Gross seat takings for the series' games. This used to count every payment carrying one of
        // those game ids, and court-booking payment-plan rows carry game_id too - so the organizer's
        // own court fee and every co-payer's share were counted as series revenue. Filter on the seat
        // kind. (The old comment said "minus refunds"; refunds are excluded rather than subtracted,
        // which is the same answer for a sum of paid rows, but the comment was describing something
        // the code did not do.)
        revenueKwd: (0, z.roundKwd)(
          Qt.payments
            .filter((a) => "seat" === a.kind && "paid" === a.status && t.some((t) => t.id === a.game_id))
            .reduce((e, t) => e + Number(t.amount_kwd || 0), 0),
        ),
        revenueEstimatedKwd: s * (Wn(e)?.price_kwd ?? 0),
      };
    };
    const Jn = { padel: "PDL", tennis: "TEN", football: "FBX" },
      Qn = "ABCDEFGHJKMNPQRSTUVWXYZ23456789",
      Zn = (e) => {
        let t = Jn[e];
        for (let e = 0; e < 3; e++) t += Qn[Math.floor(31 * Math.random())];
        return t;
      },
      Xn = async (e) => {
        const t = Date.now(),
          a = Qt.invites.find((a) => a.game_id === e && new Date(a.expires_at).getTime() > t);
        if (a) return a;
        const i = hi(e);
        if (!i) throw new Error("E_MATCH_NOT_FOUND");
        let n = Zn(i.sport);
        for (; Qt.invites.some((e) => e.code === n); ) n = Zn(i.sport);
        const r = { code: n, game_id: e, created_at: new Date().toISOString(), expires_at: i.ends_at };
        return (Qt.invites.push(r), await Za(zt, Qt.invites), r);
      };
    r.mockGetMatchInvite = async (e, t) => {
      await ei();
      // This took no caller at all, and Xn mints and persists a code when the match has none - so any
      // session could ask for a private match's invite link and have one created on demand. The code
      // is a capability: holding it is enough to join. It belongs to the organizer, the same rule the
      // DTO and mockGetOrganizerMatches already apply to invite_code.
      const a = hi(e);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      if (!t || (a.organizer_id !== t && !ro(t)))
        throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE");
      const i = await Xn(e);
      return { code: i.code, link: `https://playora.app/m/${i.code}`, expires_at: i.expires_at };
    };
    const er = async (e, t) => {
      await ei();
      const a = (e || "").trim().toUpperCase(),
        i = Date.now(),
        n = Qt.invites.find((e) => e.code === a && new Date(e.expires_at).getTime() > i);
      if (!n) return null;
      const r = hi(n.game_id);
      if (!r || "scheduled" !== r.status) return null;
      const o = Qt.referrals
        .filter((e) => e.code === a && !e.opened_at && e.sharer_id !== t)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())[0];
      o &&
        ((o.opened_at = new Date().toISOString()),
        await Za(Ht, Qt.referrals),
        await (0, w.logAudit)("invite.opened", (0, w.actorRef)(t ?? null), { game: r.id.slice(-6) }));
      const s = new Map((await pi()).map((e) => [e.id, e]));
      return Ii(r, s, t);
    };
    r.mockResolveInviteCode = er;
    r.mockLogShare = async (e, t, a = "whatsapp") => {
      await ei();
      if (
        Qt.referrals.filter((t) => t.sharer_id === e && Date.now() - new Date(t.created_at).getTime() < 864e5)
          .length >= 30
      )
        throw (
          await (0, w.logAudit)("invite.share_blocked", (0, w.actorRef)(e), { reason: "daily_limit" }),
          new Error("E_DAILY_SHARE_LIMIT_REACHED_PLEASE_TRY")
        );
      const i = await Xn(t),
        n = {
          id: ea(),
          code: i.code,
          game_id: t,
          sharer_id: e,
          channel: a,
          created_at: new Date().toISOString(),
          opened_at: null,
          joined_user_id: null,
          joined_at: null,
        };
      return (
        Qt.referrals.push(n),
        await Za(Ht, Qt.referrals),
        await (0, w.logAudit)("invite.shared", (0, w.actorRef)(e), { game: t.slice(-6), channel: a }),
        n
      );
    };
    r.mockJoinByCode = async (e, t) => {
      await ei();
      const a = (e || "").trim().toUpperCase(),
        i = await er(a, t);
      if (!i) throw new Error("E_INVALID_OR_EXPIRED_INVITATION_CODE");
      const n = await ji(i.id, t),
        r = Qt.referrals
          .filter((e) => e.code === a && !e.joined_user_id && e.sharer_id !== t)
          .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())[0];
      (r
        ? ((r.joined_user_id = t),
          (r.joined_at = new Date().toISOString()),
          r.opened_at || (r.opened_at = r.joined_at),
          await ec(r.sharer_id, t))
        : Qt.referrals.push({
            id: ea(),
            code: a,
            game_id: i.id,
            sharer_id: "",
            channel: "link",
            created_at: new Date().toISOString(),
            opened_at: new Date().toISOString(),
            joined_user_id: t,
            joined_at: new Date().toISOString(),
          }),
        await Za(Ht, Qt.referrals),
        await (0, w.logAudit)("invite.joined", (0, w.actorRef)(t), { game: i.id.slice(-6) }));
      const o = await Ni(i.id, t);
      return { status: n.status, game: o };
    };
    r.mockGetOrganizerReferralStats = async (e, t9) => {
      (await ei(), orgSelf(e, t9));
      const t = new Set(
          gi()
            .filter((t) => t.organizer_id === e)
            .map((e) => e.id),
        ),
        a = Qt.referrals.filter((e) => t.has(e.game_id)),
        i = a.filter((e) => e.sharer_id).length,
        n = a.filter((e) => e.joined_user_id).length;
      return { invitesSent: i, playersJoined: n, conversionRate: i ? n / i : 0 };
    };
    r.mockGetGrowthAdminStats = async (e) => {
      (await ei(), await sn(e));
      const t = Qt.referrals,
        a = t.filter((e) => e.sharer_id).length,
        i = t.filter((e) => e.opened_at).length,
        n = t.filter((e) => e.joined_user_id);
      return {
        invitationsSent: a,
        invitationsOpened: i,
        usersAcquired: new Set(n.map((e) => e.joined_user_id)).size,
        matchesJoined: n.length,
        openRate: a ? i / a : 0,
        joinConversion: a ? n.length / a : 0,
      };
    };
    const tr = (e) => {
        const t = Date.now(),
          a = [];
        for (const i of Qt.bookings) {
          if (i.user_id !== e) continue;
          if (!countsAsParticipant9(i)) continue;
          const n = hi(i.game_id);
          !n ||
            "cancelled" === n.status ||
            new Date(n.ends_at).getTime() > t ||
            a.push({ game: n, attendance: i.attendance ?? null });
        }
        return a.sort((e, t) => new Date(e.game.starts_at).getTime() - new Date(t.game.starts_at).getTime());
      },
      ar = (e) => {
        const t = Qt.profiles.find((t) => t.id === e),
          a = t?.created_at ?? new Date().toISOString(),
          i = Math.max(0, Math.floor((Date.now() - new Date(a).getTime()) / 864e5)),
          n = tr(e),
          r = { padel: 0, tennis: 0, football: 0 };
        let o = 0,
          s = 0,
          d = 0,
          l = 0,
          c = 0;
        for (const { game: e, attendance: t } of n) {
          r[e.sport] += 1;
          const a = new Date(e.starts_at).getDay();
          ((5 !== a && 6 !== a) || (d += 1),
            "no_show" === t
              ? ((s += 1), (l = 0))
              : ("attended" === t && (o += 1), (l += 1), l > c && (c = l)));
        }
        const _ = o + s,
          u = _ ? o / _ : 1,
          m = gi().filter((t) => t.organizer_id === e),
          w = m.filter((e) => "cancelled" !== e.status && new Date(e.ends_at).getTime() < Date.now()).length,
          p = rn(e),
          f = Qt.skillProfiles.some(
            (t) =>
              t.user_id === e &&
              (0, y.isVerified)({
                matches_played: t.matches_played,
                confidence: t.confidence,
                attendance_rate: u,
              }),
          ),
          g = Qt.bookings.filter((t) => t.user_id === e),
          h = g.filter((e) => "cancelled" === e.status).length,
          k = g.length ? Math.min(1, h / Math.max(3, g.length)) : 0,
          v = 0.7 * u + 0.3 * (1 - k),
          S = Math.round(
            100 *
              (0.45 * v +
                0.25 * (f || p ? 1 : 0) +
                0.2 * Math.min(1, n.length / 20) +
                0.1 * Math.min(1, i / 180)),
          );
        return {
          memberSince: a,
          memberDays: i,
          matchesPlayed: n.length,
          bySport: r,
          matchesHosted: m.length,
          matchesHostedCompleted: w,
          attendedCount: o,
          noShowCount: s,
          attendanceRate: u,
          currentStreak: l,
          longestStreak: c,
          weekendMatches: d,
          trustScore: S,
          sportsPlayedCount: ["padel", "tennis", "football"].filter((e) => r[e] > 0).length,
          isApprovedOrganizer: p,
        };
      },
      ir = async (e) => {
        const t = ar(e),
          a = new Set(Qt.achievements.filter((t) => t.user_id === e).map((e) => e.achievement_id)),
          i = [...g.ACHIEVEMENTS, ...g.BADGES];
        let n = !1;
        for (const r of i)
          !a.has(r.id) &&
            r.test(t) &&
            (Qt.achievements.push({
              user_id: e,
              achievement_id: r.id,
              unlocked_at: new Date().toISOString(),
            }),
            a.add(r.id),
            (n = !0),
            (Qt.notifications = [
              {
                id: ea(),
                user_id: e,
                type: "achievement",
                emoji: r.emoji,
                achievement_key: r.key,
                read: !1,
                created_at: new Date().toISOString(),
              },
              ...Qt.notifications,
            ]),
            await (0, w.logAudit)("passport.achievement_unlocked", (0, w.actorRef)(e), { id: r.id }));
        for (const i of g.MILESTONES)
          !a.has(i.id) &&
            i.reached(t) &&
            (Qt.achievements.push({
              user_id: e,
              achievement_id: i.id,
              unlocked_at: new Date().toISOString(),
            }),
            (n = !0),
            (Qt.notifications = [
              {
                id: ea(),
                user_id: e,
                type: "achievement",
                emoji: "\ud83c\udf89",
                achievement_key: i.key,
                read: !1,
                created_at: new Date().toISOString(),
              },
              ...Qt.notifications,
            ]),
            await (0, w.logAudit)("passport.achievement_unlocked", (0, w.actorRef)(e), { id: i.id }));
        n && (await Promise.all([Za(Ut, Qt.achievements), Za($, Qt.notifications)]));
      },
      nr = (e) => ({ user_id: e, match_history: !0, achievements: !0, hosted: !0, sports: !0 }),
      rr = (e) => Qt.passportPrivacy.find((t) => t.user_id === e) ?? nr(e),
      or = (e) =>
        Qt.profiles.find((t) => t.id === e)?.full_name ??
        Qt.bookings.find((t) => t.user_id === e)?.display_name ??
        "Player",
      sr = (e) => {
        const t = [],
          a = (e) => Ai(e);
        for (const { game: i, attendance: n } of tr(e))
          i.organizer_id !== e &&
            t.push({
              id: i.id,
              date: i.starts_at,
              sport: i.sport,
              venue_name: a(i.venue_id),
              organizer_name: i.organizer_id === Aa ? "Community organizer" : or(i.organizer_id),
              status: "no_show" === n ? "no_show" : "played",
            });
        for (const i of gi().filter((t) => t.organizer_id === e))
          (new Date(i.starts_at).getTime() > Date.now() && "scheduled" === i.status) ||
            t.push({
              id: i.id,
              date: i.starts_at,
              sport: i.sport,
              venue_name: a(i.venue_id),
              organizer_name: "You",
              status: "cancelled" === i.status ? "cancelled" : "hosted",
            });
        for (const i of Qt.bookings) {
          if (i.user_id !== e) continue;
          const n = hi(i.game_id);
          n &&
            "cancelled" === n.status &&
            n.organizer_id !== e &&
            (t.some((e) => e.id === n.id) ||
              t.push({
                id: n.id,
                date: n.starts_at,
                sport: n.sport,
                venue_name: a(n.venue_id),
                organizer_name: n.organizer_id === Aa ? "Community organizer" : or(n.organizer_id),
                status: "cancelled",
              }));
        }
        for (const i of Qt.bookings) {
          if (i.user_id !== e || "confirmed" !== i.status) continue;
          const n = hi(i.game_id);
          n &&
            n.organizer_id !== e &&
            ("scheduled" !== n.status ||
              new Date(n.starts_at).getTime() <= Date.now() ||
              t.some((e) => e.id === n.id) ||
              t.push({
                id: n.id,
                date: n.starts_at,
                sport: n.sport,
                venue_name: a(n.venue_id),
                organizer_name: n.organizer_id === Aa ? "Community organizer" : or(n.organizer_id),
                status: "upcoming",
              }));
        }
        return t.sort((e, t) => new Date(t.date).getTime() - new Date(e.date).getTime());
      },
      dr = async (e, t) => {
        (await ei(), await tn(), await ir(e));
        const a = ar(e),
          i = t === e,
          n = t ? Qt.profiles.find((e) => e.id === t)?.role : void 0,
          r = i || "admin" === n,
          o = rr(e),
          s = Qt.achievements.filter((t) => t.user_id === e),
          d = (e) =>
            e
              .filter((e) => s.some((t) => t.achievement_id === e.id))
              .map((e) => ({
                id: e.id,
                emoji: e.emoji,
                key: e.key,
                unlocked_at: s.find((t) => t.achievement_id === e.id).unlocked_at,
              })),
          l = r || o.achievements,
          c = r || o.match_history,
          _ = r || o.hosted,
          u = r || o.sports,
          m = ["padel", "tennis", "football"]
            .filter((e) => a.bySport[e] > 0)
            .map((e) => ({
              sport: e,
              matches: a.bySport[e],
              achievements: d(g.ACHIEVEMENTS).filter(
                (t) =>
                  t.id.includes(e) ||
                  ("padel" === e && "padel_enthusiast" === t.id) ||
                  ("football" === e && "football_veteran" === t.id) ||
                  ("tennis" === e && "tennis_ace" === t.id),
              ).length,
            }));
        return (
          i ||
            (await (0, w.logAudit)("passport.accessed", (0, w.actorRef)(t ?? null), {
              subject: e.slice(-6),
            })),
          {
            user_id: e,
            display_name: or(e),
            is_self: i,
            member_since: a.memberSince,
            followers: Kd(e).length,
            following: $d(e).length,
            sports_played: u ? ["padel", "tennis", "football"].filter((e) => a.bySport[e] > 0) : [],
            matches_played: a.matchesPlayed,
            matches_hosted: _ ? a.matchesHosted : null,
            attendance: (0, g.attendanceClass)(a.attendanceRate, a.attendedCount + a.noShowCount),
            participation: (0, g.participationStatus)(a),
            reputation: (0, g.reputationClass)(a.trustScore),
            achievements: l ? d(g.ACHIEVEMENTS) : [],
            badges: l ? d(g.BADGES) : [],
            streaks: (0, g.streaksReached)(a.longestStreak),
            longest_streak: a.longestStreak,
            sport_profiles: u ? m : [],
            history: c ? sr(e) : [],
            organizer:
              _ && a.matchesHosted > 0
                ? {
                    hosted: a.matchesHosted,
                    completed: a.matchesHostedCompleted,
                    verified: a.isApprovedOrganizer,
                  }
                : null,
            privacy: i ? o : void 0,
          }
        );
      };
    r.mockGetPassport = dr;
    r.mockGetPassportPrivacy = async (e) => (await ei(), rr(e));
    r.mockUpdatePassportPrivacy = async (e, t) => {
      await ei();
      const a = rr(e),
        i = Object.assign({}, a, t, { user_id: e }),
        n = Qt.passportPrivacy.findIndex((t) => t.user_id === e);
      (n >= 0 ? (Qt.passportPrivacy[n] = i) : Qt.passportPrivacy.push(i), await Za(xt, Qt.passportPrivacy));
    };
    r.mockAdminRemoveAchievement = async (e, t, a) => {
      (await ei(),
        await sn(e),
        (Qt.achievements = Qt.achievements.filter((e) => !(e.user_id === t && e.achievement_id === a))),
        await Za(Ut, Qt.achievements),
        await (0, w.logAdminAudit)("passport.admin_corrected", e, t, { removed: a }));
    };
    const lr = async (e, t) => {
        const a = t.sport,
          i = y.SPORT_SCALES[a],
          n = await Dn(e, a),
          r = An(e),
          o = (0, y.attendanceRate)(r.attended, r.noShow),
          s = await Nn(e, a),
          d = Qt.bookings
            .filter((a) => a.game_id === t.id && "confirmed" === a.status && a.user_id !== e)
            .map((e) => e.user_id);
        let l;
        if (null != t.skill_min || null != t.skill_max)
          l = (0, y.skillFit)(a, n.rating, t.skill_min, t.skill_max);
        else if (d.length) {
          const e = await Promise.all(
            d.map(async (e) => {
              const t = await Dn(e, a);
              return 1 - Math.min(1, Math.abs(n.rating - t.rating) / (i.max - i.min));
            }),
          );
          l = e.reduce((e, t) => e + t, 0) / e.length;
        } else l = 0.7;
        const c = n.votes_below + n.votes_expected + n.votes_above,
          _ = new Set(Qt.skillEvals.filter((t) => t.ratee_id === e).map((e) => e.rater_id)).size,
          u = (0, h.isRatingAnomalous)(c, _),
          m = c ? n.votes_expected / c : 0.7,
          w = u ? Math.min(m, 0.6) : m,
          p = tr(e).map((e) => new Date(e.game.starts_at).getHours()),
          g = new Date(t.starts_at).getHours(),
          k = p.length
            ? Math.max(
                ...p.map((e) => {
                  const t = Math.abs(e - g);
                  return 1 - Math.min(t, 24 - t) / 12;
                }),
              )
            : 0.6,
          v = Sa(e),
          S = fi().find((e) => e.id === t.venue_id),
          E = S ? Math.max(0, 1 - (0, f.distanceKm)(v.lat, v.lng, S.lat, S.lng) / 30) : 0.5,
          b = Qt.profiles.find((t) => t.id === e),
          T = b && 0 !== b.preferred_sports.length ? (b.preferred_sports.includes(a) ? 1 : 0.3) : 0.6,
          A = new Set(tr(e).map((e) => e.game.id)),
          D = d.some((e) => Qt.bookings.some((t) => t.user_id === e && A.has(t.game_id))) ? 1 : 0.4,
          O = {
            skill: l,
            attendance: o,
            reliability: s.reliability / 100,
            sportsmanship: w,
            matchHistory: Math.min(1, r.played / 20),
            sportPref: T,
            timePref: k,
            distance: E,
            ageGroup: 0.5,
            positiveHistory: D,
          };
        return { score: (0, h.scoreFromFeatures)(O), features: O, anomalous: u };
      },
      cr = async (e, t) => {
        const a = hi(e);
        return a ? lr(t, a) : null;
      },
      _r = async (e, t) => {
        const a = await cr(e, t);
        return a ? (0, h.compatibilityClass)(a.score).key : void 0;
      },
      ur = async (e) => {
        if (Qt.compat.some((t) => t.game_id === e.id)) return;
        const t = Qt.bookings
          .filter((t) => t.game_id === e.id && countsAsParticipant9(t))
          .map((e) => e.user_id);
        if (!(t.length < 2)) {
          for (let a = 0; a < t.length; a++) {
            const i = await lr(t[a], e);
            Qt.compat.push({
              id: ea(),
              user_a: t[a],
              user_b: "",
              game_id: e.id,
              score: i.score,
              features: i.features,
              anomalous: i.anomalous,
              created_at: new Date().toISOString(),
            });
          }
          (await Za(Gt, Qt.compat),
            await (0, w.logAudit)("compat.computed", (0, w.actorRef)(e.organizer_id), {
              game: e.id.slice(-6),
              n: t.length,
            }));
        }
      };
    r.mockAdminGetCompatibility = async (e, t, a) => {
      (await ei(), await sn(e), await _n(e, un(a), "admin.compatibility"));
      const i = await cr(t, a);
      return i
        ? (await (0, w.logAudit)("compat.accessed", (0, w.actorRef)(e), { game: t.slice(-6), scope: "full" }),
          Object.assign({}, i, { class_key: (0, h.compatibilityClass)(i.score).key }))
        : null;
    };
    r.mockGetCompatAdminStats = async (e) => {
      (await ei(), await sn(e));
      const t = Qt.compat;
      return {
        computed: t.length,
        anomaliesFlagged: t.filter((e) => e.anomalous).length,
        avgScore: t.length ? Math.round(t.reduce((e, t) => e + t.score, 0) / t.length) : 0,
      };
    };
    const mr = "preview-venue",
      wr = new Map();
    async function pr(e, t) {
      const a = (wr.get(e) ?? Promise.resolve()).catch(() => {}).then(() => Ha(`court:${e}`, [me, ue], t));
      wr.set(e, a);
      try {
        return await a;
      } finally {
        wr.get(e) === a && wr.delete(e);
      }
    }
    const fr = (e) => Qt.courts.find((t) => t.id === e),
      gr = (e) => Qt.courtBookings.find((t) => t.id === e),
      hr = (e) => Qt.venueProfiles.find((t) => t.venue_id === e),
      yr = (e) => "approved" === hr(e)?.status;
    async function kr(e) {
      if (!yr(e)) throw new Error("E_THIS_VENUE_IS_NOT_CURRENTLY_ACCEPTING");
    }
    const vr = (e, t) => {
      const a = hr(t);
      return (
        !!a &&
        (a.owner_id === e ||
          !!a.staff.some((t) => t.user_id === e) ||
          "admin" === Qt.profiles.find((t) => t.id === e)?.role)
      );
    };
    async function Sr(e, t) {
      if (!vr(e, t))
        throw (
          await (0, w.logAudit)("venue.access_denied", (0, w.actorRef)(e), { venue: t.slice(-6) }),
          new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_4")
        );
    }
    const Er = (e) => {
        const t = hr(e);
        return t ? { type: t.commission_type, value: t.commission_value } : { type: he, value: 10 };
      },
      br = async (e) => {
        for (const t of Qt.profiles.filter((e) => "admin" === e.role)) await bi(e(t.id));
      },
      Tr = (e, t) => {
        const a = Date.now();
        return [
          ...Qt.courtBookings
            .filter(
              (i) =>
                i.court_id === e &&
                i.id !== t &&
                ("confirmed" === i.status ||
                  ("reserved" === i.status &&
                    (!i.reserved_until || new Date(i.reserved_until).getTime() > a))),
            )
            .map((e) => ({ starts_at: e.starts_at, ends_at: e.ends_at })),
          ...Qt.courtBlocks
            .filter((t) => t.court_id === e)
            .map((e) => ({ starts_at: e.starts_at, ends_at: e.ends_at })),
        ];
      };
    let Ar = null;
    const Dr = () =>
        Fa() ? (Qt.venueSeeded ? Promise.resolve() : (Ar || (Ar = Or()), Ar)) : Promise.resolve(),
      Or = async () => {
        if ((await ei(), Qt.venueSeeded)) return;
        const e = "11111111-1111-1111-1111-111111111111";
        if (
          (Qt.profiles.some((e) => e.id === mr) ||
            (Qt.profiles.push({
              id: mr,
              full_name: "Salmiya Sports Hub (Owner)",
              avatar_url: null,
              phone: null,
              audience: "male",
              privacy_visibility: "everyone",
              avatar_mode: "photo",
              media_consent: !0,
              preferred_sports: [],
              skill_level: "all",
              bio: null,
              role: "user",
              consent: { analytics: !1, marketing: !1 },
              consent_updated_at: null,
              created_at: new Date(Date.now() - 10368e6).toISOString(),
            }),
            await Za(Y, Qt.profiles)),
          !hr(e))
        ) {
          Qt.venueProfiles.push({
            venue_id: e,
            owner_id: mr,
            status: "approved",
            commission_type: "percentage",
            commission_value: 10,
            payout_iban_last4: "4417",
            cancellation_policy:
              "Free cancellation up to 6 hours before start. Later cancellations forfeit the court fee.",
            cancellation_cutoff_hours: 6,
            amenities: ["Floodlights", "Changing rooms", "Parking", "Caf\xe9"],
            photos: [],
            auto_accept: !0,
            staff: [
              {
                user_id: "preview-venue-staff",
                name: "Front Desk",
                role: "scanner",
                added_at: new Date().toISOString(),
              },
            ],
            created_at: new Date(Date.now() - 7776e6).toISOString(),
            reviewed_at: new Date(Date.now() - 76032e5).toISOString(),
            reviewed_by: oe,
            review_note: null,
          });
          const t = (t, a, i) => ({
            id: ea(),
            venue_id: e,
            name: t,
            sport: a,
            price_per_hour_kwd: i,
            open_minutes: 480,
            close_minutes: 1440,
            amenities: ["Floodlights"],
            photos: [],
            active: !0,
            created_at: new Date(Date.now() - 6912e6).toISOString(),
          });
          (Qt.courts.push(
            t("Padel Court 1", "padel", 12),
            t("Padel Court 2", "padel", 12),
            t("5-a-side Pitch", "football", 25),
          ),
            await Promise.all([Za(ce, Qt.venueProfiles), Za(_e, Qt.courts)]));
        }
        Qt.venueSeeded = !0;
      };
    r.mockSearchBookableVenues = async (e = {}) => {
      (await ei(), await Dr());
      const t = fi(),
        a = (0, v.sanitizeText)(e.query ?? "", 60)
          .trim()
          .toLowerCase(),
        i = e.viewerId ? Sa(e.viewerId) : null,
        n = [];
      for (const r of t) {
        if (!yr(r.id)) continue;
        let t = Qt.courts.filter((e) => e.venue_id === r.id && e.active);
        if (
          (e.sport && (t = t.filter((t) => t.sport === e.sport)),
          null != e.maxPricePerHour && (t = t.filter((t) => t.price_per_hour_kwd <= e.maxPricePerHour)),
          0 === t.length)
        )
          continue;
        if (e.area && r.area !== e.area) continue;
        if (a && !`${r.name} ${r.area}`.toLowerCase().includes(a)) continue;
        const o = hr(r.id);
        n.push(
          Object.assign({}, r, {
            court_count: t.length,
            min_price_kwd: Math.min(...t.map((e) => e.price_per_hour_kwd)),
            sports_bookable: [...new Set(t.map((e) => e.sport))],
            amenities: o?.amenities ?? [],
            distance_km: i ? (0, f.formatKm)((0, f.distanceKm)(i.lat, i.lng, r.lat, r.lng)) : null,
          }),
        );
      }
      return i
        ? n.sort((e, t) => (e.distance_km ?? 1e9) - (t.distance_km ?? 1e9))
        : n.sort((e, t) => e.min_price_kwd - t.min_price_kwd || t.rating - e.rating);
    };
    r.mockGetVenueBookingDetail = async (e) => {
      (await ei(), await Dr());
      const t = fi().find((t) => t.id === e);
      return t
        ? { venue: t, profile: hr(e) ?? null, courts: Qt.courts.filter((t) => t.venue_id === e && t.active) }
        : null;
    };
    r.mockApplyVenue = async (e, t) => {
      (await ei(), await Dr());
      // ADM1 (F-ADM1-19): administrators review venues, so they cannot also own one.
      if (ro(e)) throw new Error("E_ADMINS_CANNOT_REGISTER_VENUES");
      // There was no rate limit either, so one loop could seed the directory. Mirror the velocity
      // guard mockCreateMatch already applies to matches.
      if (
        Qt.venueProfiles.filter(
          (t) => t.owner_id === e && Date.now() - new Date(t.created_at).getTime() < 36e5,
        ).length >= 2
      )
        throw (
          await (0, w.logAudit)("venue.application_blocked", (0, w.actorRef)(e), {
            reason: "rate_limit",
          }),
          new Error("E_TOO_MANY_VENUE_APPLICATIONS")
        );
      let a = t.venue_id;
      if (a) {
        if (hr(a)) throw new Error("E_THIS_VENUE_IS_ALREADY_REGISTERED");
        if (!fi().some((e) => e.id === a)) throw new Error("E_VENUE_NOT_FOUND");
      } else {
        const e = (0, v.sanitizeText)(t.name ?? "", 80);
        if (!e) throw new Error("E_ADD_YOUR_VENUE_NAME");
        const i = (0, v.sanitizeText)(t.area ?? "Kuwait City", 40) || "Kuwait City",
          n = va[i] ?? va["Kuwait City"],
          r = ea(),
          // The venue used to land in the public directory the moment it was applied for, because
          // mockGetVenues filters on `!1 !== listed` and this row carried no listed and no
          // review_status - only mockAdminReviewVenue ever stamps them. /venue/portal meanwhile
          // promises that an admin reviews every application before you go live. Now it is true.
          // The coordinates came from the area centroid plus jitter, which made distance_km in
          // mockSearchBookableVenues fiction; take what the applicant gave, and fall back to the
          // centroid itself rather than a random point near it.
          l9 = Number(t.lat),
          c9 = Number(t.lng),
          d = {
            id: r,
            name: e,
            city: "Kuwait City",
            area: i,
            sports: t.sports?.length ? t.sports : ["padel"],
            cover_url: null,
            rating: 0,
            rating_count: 0,
            description: null,
            address: `${i}, Kuwait`,
            lat: Number.isFinite(l9) ? l9 : n[0],
            lng: Number.isFinite(c9) ? c9 : n[1],
            custom: !0,
            listed: !1,
            review_status: "pending",
            created_by: e,
            created_at: new Date().toISOString(),
          };
        (Qt.venues.push(d), await Za(ae, Qt.venues), (a = r));
      }
      const i = {
        venue_id: a,
        owner_id: e,
        status: "pending",
        commission_type: he,
        commission_value: 10,
        payout_iban_last4: null,
        cancellation_policy: (0, v.sanitizeText)(
          t.cancellation_policy ?? "Free cancellation up to 6 hours before start.",
          300,
        ),
        cancellation_cutoff_hours: Math.max(0, Math.min(72, t.cancellation_cutoff_hours ?? 6)),
        amenities: (t.amenities ?? []).slice(0, 12).map((e) => (0, v.sanitizeText)(e, 30)),
        photos: [],
        auto_accept: !1,
        staff: [],
        // Wi stamps origin on its own profiles; without one here an admin cannot tell a deliberate
        // venue-partner application from a name typed into the match wizard.
        origin: "venue_application",
        created_at: new Date().toISOString(),
        reviewed_at: null,
        reviewed_by: null,
        review_note: null,
      };
      (Qt.venueProfiles.push(i), await Za(ce, Qt.venueProfiles));
      const n = Ai(a);
      return (
        await br((e) => ({
          id: ea(),
          user_id: e,
          type: "venue_application",
          venue_id: a,
          venue_name: n,
          read: !1,
          created_at: new Date().toISOString(),
        })),
        await (0, w.logAudit)("venue.application_submitted", (0, w.actorRef)(e), { venue: a.slice(-6) }),
        i
      );
    };
    r.mockGetMyVenues = async (e) => (
      await ei(),
      await Dr(),
      Qt.venueProfiles
        .filter((t) => t.owner_id === e || t.staff.some((t) => t.user_id === e))
        .map((e) => ({ venue: fi().find((t) => t.id === e.venue_id), profile: e }))
        .filter((e) => !!e.venue)
    );
    r.mockUpdateVenueProfile = async (e, t, a) => {
      (await ei(), await Sr(e, t));
      const i = hr(t);
      return (
        null != a.cancellation_policy &&
          (i.cancellation_policy = (0, v.sanitizeText)(a.cancellation_policy, 300)),
        null != a.cancellation_cutoff_hours &&
          (i.cancellation_cutoff_hours = Math.max(0, Math.min(72, a.cancellation_cutoff_hours))),
        null != a.amenities &&
          (i.amenities = a.amenities.slice(0, 12).map((e) => (0, v.sanitizeText)(e, 30))),
        null != a.auto_accept && (i.auto_accept = a.auto_accept),
        // Where the venue's money lands is the owner's to set, not the reception desk's - Sr admits
        // staff to everything else on this profile.
        null != a.payout_iban_last4 &&
          (() => {
            if (i.owner_id !== e && !ro(e)) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE");
            i.payout_iban_last4 = a.payout_iban_last4.replace(/\D/g, "").slice(-4) || null;
          })(),
        await Za(ce, Qt.venueProfiles),
        await (0, w.logAudit)("venue.updated", (0, w.actorRef)(e), { venue: t.slice(-6) }),
        i
      );
    };
    // Staff roles the venue can assign. The role used to be stored verbatim, whatever was typed.
    const VENUE_STAFF_ROLES9 = ["manager", "reception", "scanner"];
    r.mockAddVenueStaff = async (e, t, a, i) => {
      (await ei(), await Sr(e, t));
      const n = hr(t);
      // The staff member used to be invented: user_id was `staff-<random>` derived from a typed name,
      // while vr authorises on a real profile id - so a staff id could never match and every
      // staff-gated call (venue bookings, the booking decision, courts, blocks, the check-in scanner)
      // stayed permanently closed to them. The whole feature added rows that did nothing. Resolve a
      // real account instead, by id or by email.
      const q9 = String(a ?? "").trim().toLowerCase();
      if (!q9) throw new Error("E_ADD_A_STAFF_NAME");
      const u9 =
        Qt.profiles.find((e) => e.id === q9) ??
        Qt.profiles.find((e) => (e.email ?? "").toLowerCase() === q9) ??
        (() => {
          const t9 = Qt.users.find((e) => (e.email ?? "").toLowerCase() === q9);
          return t9 ? Qt.profiles.find((e) => e.id === t9.id) : null;
        })();
      if (!u9) throw new Error("E_NO_SUCH_PLAYER");
      // An administrator reviews venues, so they cannot also staff one.
      if (ro(u9.id)) throw new Error("E_ADMINS_CANNOT_REGISTER_VENUES");
      if (!VENUE_STAFF_ROLES9.includes(i)) throw new Error("E_INVALID_MATCH_OPTION");
      if (n.staff.some((e) => e.user_id === u9.id)) throw new Error("E_THAT_PLAYER_IS_ALREADY_IN_THIS");
      const r = (0, v.sanitizeName)(u9.full_name) || "Staff";
      if (n.staff.length >= 20) throw new Error("E_STAFF_LIMIT_REACHED");
      return (
        n.staff.push({
          user_id: u9.id,
          name: r,
          role: i,
          added_at: new Date().toISOString(),
        }),
        await Za(ce, Qt.venueProfiles),
        await (0, w.logAudit)("venue.updated", (0, w.actorRef)(e), { venue: t.slice(-6), staff: "added" }),
        n
      );
    };
    r.mockRemoveVenueStaff = async (e, t, a) => {
      (await ei(), await Sr(e, t));
      const i = hr(t);
      return ((i.staff = i.staff.filter((e) => e.user_id !== a)), await Za(ce, Qt.venueProfiles), i);
    };
    // ADM1 (F-ADM1-22/31): returns every venue registration (the screen labels it that way) as a slim
    // DTO — no staff list, IBAN digits or policy text for a list view.
    r.mockGetPendingVenues = async (e) => (
      await ei(),
      await sn(e),
      await Dr(),
      Qt.venueProfiles
        .map((e) => ({ venue: fi().find((t) => t.id === e.venue_id), profile: e }))
        .filter((e) => !!e.venue)
        .sort((e, t) => ("pending" === e.profile.status ? -1 : 1) - ("pending" === t.profile.status ? -1 : 1))
        .map(({ venue: e, profile: t }) => ({
          // An admin could not tell a deliberate venue-partner application from a name an organizer
          // typed into the match wizard - which, because that path makes the organizer the registered
          // owner, quietly hands them a venue they can later add courts to and claim payouts from.
          venue: {
            id: e.id,
            name: e.name,
            area: e.area,
            sports: e.sports,
            review_status: e.review_status ?? null,
            created_by: e.created_by ?? null,
          },
          profile: {
            venue_id: t.venue_id,
            owner_id: t.owner_id,
            origin: t.origin ?? null,
            status: t.status,
            commission_type: t.commission_type,
            commission_value: t.commission_value,
            created_at: t.created_at,
            reviewed_at: t.reviewed_at,
            review_note: t.review_note,
          },
        }))
    );
    // ADM1 (F-ADM1-22): allow-listed actions and a transition table for venue registrations.
    const adm1VenueTransitions = {
        pending: ["approve", "reject"],
        approved: ["suspend"],
        rejected: ["approve"],
        suspended: ["approve"],
      },
      adm1MaxFixedCommissionKwd = 100;
    r.mockAdminReviewVenue = async (e, t, a, i) => {
      (await ei(), await sn(e));
      const n = hr(t);
      if (!n) throw new Error("E_VENUE_NOT_FOUND");
      // ADM1 (F-ADM1-19): the reviewer must not be the venue owner.
      if (n.owner_id === e)
        throw (
          await (0, w.logAdminAudit)("venue.self_review_blocked", e, t, { action: String(a) }),
          new Error("E_YOU_CANNOT_REVIEW_YOUR_OWN")
        );
      if (!(adm1VenueTransitions[n.status] ?? []).includes(a)) throw new Error("E_INVALID_TRANSITION");
      // ADM1 (F-ADM1-20): reject / suspend / re-activation need a reason that reaches the owner.
      const r = (0, v.sanitizeText)(i ?? "", 300);
      if (("approve" !== a || "pending" !== n.status) && !r) throw new Error("E_A_REASON_IS_REQUIRED");
      const o = n.status,
        s = "approve" === a ? "approved" : "reject" === a ? "rejected" : "suspended";
      return (
        (n.status = s),
        (n.reviewed_at = new Date().toISOString()),
        (n.reviewed_by = e),
        (n.review_note = r || null),
        await Za(ce, Qt.venueProfiles),
        // ORG1 (F-ORG1-19): the review decides whether the venue appears in the public directory.
        await (async () => {
          const vi9 = Qt.venues.findIndex((e) => e.id === t);
          if (vi9 < 0) return;
          const lst9 = "approved" === s;
          if (Qt.venues[vi9].listed === lst9 && Qt.venues[vi9].review_status === s) return;
          ((Qt.venues[vi9] = Object.assign({}, Qt.venues[vi9], { listed: lst9, review_status: s })),
            await Za(ae, Qt.venues));
        })(),
        await bi({
          id: ea(),
          user_id: n.owner_id,
          type: "venue_decision",
          venue_id: t,
          venue_name: Ai(t),
          approved: "approve" === a,
          decision: s,
          note: r || null,
          read: !1,
          created_at: new Date().toISOString(),
        }),
        await (0, w.logAdminAudit)(
          "approve" === a
            ? "venue.application_approved"
            : "reject" === a
              ? "venue.application_rejected"
              : "venue.application_suspended",
          e,
          n.owner_id,
          { venue: t.slice(-6), from: o, to: s, reason: r || null },
        ),
        n
      );
    };
    r.mockAdminSetCommission = async (e, t, a, i, n) => {
      (await ei(), await sn(e));
      const r = hr(t);
      if (!r) throw new Error("E_VENUE_NOT_FOUND");
      // ADM1 (F-ADM1-19): an admin cannot set the commission on a venue they own.
      if (r.owner_id === e)
        throw (
          await (0, w.logAdminAudit)("venue.self_review_blocked", e, t, { action: "commission" }),
          new Error("E_YOU_CANNOT_REVIEW_YOUR_OWN")
        );
      // ADM1 (F-ADM1-21): strict numeric validation, bounded values, mandatory reason, before/after audit.
      if ("percentage" !== a && "fixed" !== a) throw new Error("E_INVALID_VALUE");
      const o = "number" == typeof i ? i : Number(String(i ?? "").trim());
      if (
        !Number.isFinite(o) ||
        o < 0 ||
        ("percentage" === a && o > 100) ||
        ("fixed" === a && o > adm1MaxFixedCommissionKwd)
      )
        throw new Error("E_INVALID_VALUE");
      const s = (0, v.sanitizeText)(n ?? "", 200);
      if (!s) throw new Error("E_A_REASON_IS_REQUIRED");
      const d = `${r.commission_type}:${r.commission_value}`,
        l = Math.round(100 * o) / 100;
      return (
        (r.commission_type = a),
        (r.commission_value = l),
        await Za(ce, Qt.venueProfiles),
        await (0, w.logAdminAudit)("venue.commission_changed", e, r.owner_id, {
          venue: t.slice(-6),
          from: d,
          to: `${a}:${l}`,
          reason: s,
        }),
        r
      );
    };
    r.mockGetCourts = async (e, t) => {
      (await ei(), await Dr());
      const a = Qt.courts.filter((t) => t.venue_id === e);
      return t && vr(t, e) ? a : a.filter((e) => e.active);
    };
    // A court whose confirmed bookings would fall outside its new hours, or off a court being
    // deactivated. mockBlockCourtTime already refuses to blank out a booked slot; these are the other
    // two ways to make the same slot unavailable, and neither checked.
    const courtWouldStrand9 = (e, t, a) =>
      Qt.courtBookings.some((i) => {
        if (i.court_id !== e || "confirmed" !== i.status) return !1;
        if (null == t) return !0;
        const n = new Date(i.starts_at),
          r = new Date(i.ends_at),
          o = 60 * n.getHours() + n.getMinutes(),
          s = 60 * r.getHours() + r.getMinutes();
        return o < t || s > a;
      });
    r.mockUpsertCourt = async (e, t, a) => {
      (await ei(), await Sr(e, t));
      const i = (0, v.sanitizeText)(a.name, 60);
      if (!i) throw new Error("E_ADD_A_COURT_NAME");
      // The sport was written verbatim, and the hours were unbounded - mockGetCourtAvailability feeds
      // them straight into the slot generator, so a close_minutes of 100000 built thousands of slot
      // objects and hung the booking screen.
      if (!MATCH_ENUMS.sport.includes(a.sport)) throw new Error("E_INVALID_MATCH_OPTION");
      const o9 = Math.round(Number(a.open_minutes)),
        c9 = Math.round(Number(a.close_minutes));
      if (!Number.isFinite(o9) || !Number.isFinite(c9)) throw new Error("E_INVALID_MATCH_OPTION");
      if (o9 < 0 || o9 > 1439) throw new Error("E_INVALID_MATCH_OPTION");
      if (c9 <= o9) throw new Error("E_CLOSING_TIME_MUST_BE_AFTER_OPENING");
      if (c9 < o9 + 30 || c9 > 1440) throw new Error("E_INVALID_MATCH_OPTION");
      const n = Math.max(0, Math.min(500, Number(a.price_per_hour_kwd) || 0));
      if (a.id) {
        const r = fr(a.id);
        if (!r || r.venue_id !== t) throw new Error("E_COURT_NOT_FOUND");
        if ((o9 > r.open_minutes || c9 < r.close_minutes) && courtWouldStrand9(r.id, o9, c9))
          throw new Error("E_THERE_IS_A_CONFIRMED_BOOKING_IN");
        return (
          (r.name = i),
          (r.sport = a.sport),
          (r.price_per_hour_kwd = n),
          (r.open_minutes = o9),
          (r.close_minutes = c9),
          a.amenities && (r.amenities = a.amenities.slice(0, 12).map((e) => (0, v.sanitizeText)(e, 30))),
          await Za(_e, Qt.courts),
          await (0, w.logAudit)("court.updated", (0, w.actorRef)(e), { court: r.id.slice(-6) }),
          r
        );
      }
      const r = {
        id: ea(),
        venue_id: t,
        name: i,
        sport: a.sport,
        price_per_hour_kwd: n,
        open_minutes: o9,
        close_minutes: c9,
        amenities: (a.amenities ?? []).slice(0, 12).map((e) => (0, v.sanitizeText)(e, 30)),
        photos: [],
        active: !0,
        created_at: new Date().toISOString(),
      };
      return (
        Qt.courts.push(r),
        await Za(_e, Qt.courts),
        await (0, w.logAudit)("court.created", (0, w.actorRef)(e), { court: r.id.slice(-6) }),
        r
      );
    };
    r.mockSetCourtActive = async (e, t, a) => {
      await ei();
      const i = fr(t);
      if (!i) throw new Error("E_COURT_NOT_FOUND");
      await Sr(e, i.venue_id);
      // A deactivated court vanishes from search while its confirmed bookings still block the slot.
      if (!a && courtWouldStrand9(t, null)) throw new Error("E_THERE_IS_A_CONFIRMED_BOOKING_IN");
      (((i.active = a)),
        await Za(_e, Qt.courts),
        await (0, w.logAudit)("court.updated", (0, w.actorRef)(e), { court: t.slice(-6), active: a }));
    };
    r.mockBlockCourtTime = async (e, t, a, i, n) => {
      await ei();
      const r = fr(t);
      if (!r) throw new Error("E_COURT_NOT_FOUND");
      if ((await Sr(e, r.venue_id), new Date(i).getTime() <= new Date(a).getTime()))
        throw new Error("E_BLOCK_END_MUST_BE_AFTER_START");
      return pr(t, async () => {
        const o = { starts_at: a, ends_at: i };
        if (
          Qt.courtBookings.some(
            (e) => e.court_id === t && "confirmed" === e.status && (0, H.windowsOverlap)(o, e),
          )
        )
          throw new Error("E_THERE_IS_A_CONFIRMED_BOOKING_IN");
        const s = {
          id: ea(),
          court_id: t,
          venue_id: r.venue_id,
          starts_at: a,
          ends_at: i,
          reason: n ? (0, v.sanitizeText)(n, 120) : null,
          created_at: new Date().toISOString(),
        };
        return (
          Qt.courtBlocks.push(s),
          await Za(ue, Qt.courtBlocks),
          await (0, w.logAudit)("court.blocked", (0, w.actorRef)(e), { court: t.slice(-6) }),
          s
        );
      });
    };
    r.mockUnblockCourtTime = async (e, t) => {
      await ei();
      const a = Qt.courtBlocks.find((e) => e.id === t);
      a &&
        (await Sr(e, a.venue_id),
        (Qt.courtBlocks = Qt.courtBlocks.filter((e) => e.id !== t)),
        await Za(ue, Qt.courtBlocks));
    };
    r.mockGetCourtAvailability = async (e, t, a = 60) => {
      (await ei(), await Dr());
      const i = fr(e);
      if (!i) return null;
      const n = new Date(t);
      n.setHours(0, 0, 0, 0);
      return { court: i, slots: (0, H.generateSlots)(n, i.open_minutes, i.close_minutes, a, 30, Tr(e)) };
    };
    const Rr = (e) => (0, z.settlement)(e.court_price_kwd, e.commission_type, e.commission_value),
      Ir = async (e) => {
        if (Qt.settlements.some((t) => t.booking_id === e.id)) return;
        const t = Rr(e);
        (Qt.settlements.push({
          id: ea(),
          booking_id: e.id,
          venue_id: e.venue_id,
          gross_kwd: t.gross,
          commission_kwd: t.commission,
          net_to_venue_kwd: t.net,
          status: "pending",
          created_at: new Date().toISOString(),
          settled_at: null,
        }),
          await Za(fe, Qt.settlements),
          await (0, w.logAudit)("settlement.recorded", (0, w.actorRef)(e.venue_id), {
            booking: e.id.slice(-6),
            gross: t.gross,
          }));
      };
    r.mockReserveCourt = async (e, t, a, i, n = "split_equal") => {
      (await ei(), await Dr(), await on(e));
      const r = fr(t);
      if (!r || !r.active) throw new Error("E_COURT_NOT_FOUND");
      await kr(r.venue_id);
      const o = new Date(a).getTime(),
        s = new Date(i).getTime();
      if (Number.isNaN(o) || Number.isNaN(s)) throw new Error("E_PICK_A_DATE_AND_TIME");
      if (o < Date.now() - 6e4) throw new Error("E_THAT_TIME_HAS_ALREADY_PASSED");
      if (s <= o) throw new Error("E_END_TIME_MUST_BE_AFTER_THE");
      if (!(0, H.withinOperatingHours)(a, i, r.open_minutes, r.close_minutes))
        throw new Error("E_THAT_TIME_IS_OUTSIDE_THE_COURT");
      if (
        Qt.courtBookings.filter(
          (t) => t.organizer_id === e && Date.now() - new Date(t.created_at).getTime() < 36e5,
        ).length >= 8
      )
        throw (
          await (0, w.logAudit)("booking.reserve_blocked", (0, w.actorRef)(e), { reason: "rate_limit" }),
          new Error("E_YOU_HAVE_RESERVED_TOO_MANY_COURTS")
        );
      return pr(t, async () => {
        const o = { starts_at: a, ends_at: i };
        if (Tr(t).some((e) => (0, H.windowsOverlap)(o, e)))
          throw (
            await (0, w.logAudit)("booking.reserve_blocked", (0, w.actorRef)(e), {
              reason: "double_book",
              court: t.slice(-6),
            }),
            new Error("E_THAT_SLOT_WAS_JUST_TAKEN_PLEASE")
          );
        const s = hr(r.venue_id),
          d = (0, z.courtPrice)(r.price_per_hour_kwd, a, i),
          l = Er(r.venue_id),
          _ = s.auto_accept,
          u = {
            id: ea(),
            court_id: t,
            venue_id: r.venue_id,
            organizer_id: e,
            game_id: null,
            starts_at: a,
            ends_at: i,
            status: _ ? "confirmed" : "reserved",
            court_price_kwd: d,
            split_mode: n,
            commission_type: l.type,
            commission_value: l.value,
            requires_venue_approval: !_,
            reserved_until: _ ? null : new Date(Date.now() + 18e5).toISOString(),
            cancellation_reason: null,
            qr_token: `PLQR-${(0, c.randomCode)(20)}`,
            created_at: new Date().toISOString(),
            confirmed_at: _ ? new Date().toISOString() : null,
            released_at: null,
          };
        if (
          (Qt.courtBookings.push(u),
          await Za(me, Qt.courtBookings),
          await (0, w.logAudit)("booking.reserved", (0, w.actorRef)(e), {
            booking: u.id.slice(-6),
            price: d,
          }),
          _)
        )
          await Ir(u);
        else {
          const e = hr(r.venue_id);
          await bi({
            id: ea(),
            user_id: e.owner_id,
            type: "booking_decision",
            game_id: null,
            booking_id: u.id,
            venue_name: Ai(r.venue_id),
            approved: !1,
            read: !1,
            created_at: new Date().toISOString(),
          });
        }
        return u;
      });
    };
    r.mockVenueDecideBooking = async (e, t, a) => {
      await ei();
      const i = gr(t);
      if (!i) throw new Error("E_BOOKING_NOT_FOUND");
      if ((await Sr(e, i.venue_id), "reserved" !== i.status))
        throw new Error("E_THIS_BOOKING_IS_NO_LONGER_PENDING");
      return pr(i.court_id, async () => {
        if (a) {
          const t = { starts_at: i.starts_at, ends_at: i.ends_at };
          if (Tr(i.court_id, i.id).some((e) => (0, H.windowsOverlap)(t, e)))
            throw new Error("E_THAT_SLOT_IS_NO_LONGER_FREE");
          ((i.status = "confirmed"),
            (i.confirmed_at = new Date().toISOString()),
            (i.reserved_until = null),
            await Ir(i),
            await (0, w.logAudit)("booking.confirmed", (0, w.actorRef)(e), { booking: i.id.slice(-6) }));
        } else
          ((i.status = "rejected"),
            await (0, w.logAudit)("booking.rejected", (0, w.actorRef)(e), { booking: i.id.slice(-6) }));
        return (
          await Za(me, Qt.courtBookings),
          await bi({
            id: ea(),
            user_id: i.organizer_id,
            type: "booking_decision",
            game_id: i.game_id,
            booking_id: i.id,
            venue_name: Ai(i.venue_id),
            approved: a,
            read: !1,
            created_at: new Date().toISOString(),
          }),
          i
        );
      });
    };
    const Mr = async (e, t, a) => {
      await ei();
      const i = gr(t);
      if (!i) throw new Error("E_BOOKING_NOT_FOUND");
      if (i.organizer_id !== e) {
        if (!("admin" === Qt.profiles.find((t) => t.id === e)?.role))
          throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_CANCEL");
      }
      if ("released" === i.status || "cancelled" === i.status) return i;
      const n = hr(i.venue_id),
        r = (0, H.freeCancellationAllowed)(i.starts_at, n?.cancellation_cutoff_hours ?? 6);
      ((i.status = "cancelled"),
        (i.cancellation_reason = a ? (0, v.sanitizeText)(a, 200) : null),
        await Za(me, Qt.courtBookings));
      const o = Qt.payments.filter(
        (e) => e.booking_id === i.id && ("paid" === e.status || "pending" === e.status),
      );
      // Money kept because free cancellation had already lapsed. The condition below deliberately
      // skips the refund in that case, so it has to be accounted for somewhere - see the settlement
      // handling at the end.
      let kept9 = 0;
      for (const e of o) {
        const t = "paid" === e.status;
        (!r && t && (kept9 += Number(e.amount_kwd || 0)),
          (!r && t) ||
          ((e.status = t ? "refunded" : "expired"),
          t && ((e.refunded_at = new Date().toISOString()), await ac(e.payer_id, e.amount_kwd, e.id))),
          t &&
            (await bi({
              id: ea(),
              user_id: e.payer_id,
              type: r ? "refund_issued" : "payment_forfeited",
              game_id: i.game_id,
              venue_name: Ai(i.venue_id),
              amount_kwd: e.amount_kwd,
              read: !1,
              created_at: new Date().toISOString(),
            })));
      }
      // The pending settlement used to be deleted outright. Combined with the skipped refund above,
      // forfeited money ended up with no settlement, no refund and no posting anywhere: the venue
      // lost the slot and the money, the organizer lost the money, and no report could see it. Keep
      // the row and mark it forfeited for whatever was retained, so venue revenue and the admin
      // financials can account for it. (The matching ledger transfer is the backend half.)
      const st9 = Qt.settlements.find((e) => e.booking_id === i.id && "pending" === e.status);
      if (st9 && kept9 > 0) {
        // The commission snapshot lives on the booking, not on the settlement row, and is what
        // insulates it from a later mockAdminSetCommission change.
        const c9 = (0, z.settlement)(kept9, i.commission_type, i.commission_value);
        ((st9.status = "forfeited"),
          (st9.gross_kwd = c9.gross),
          (st9.commission_kwd = c9.commission),
          (st9.net_to_venue_kwd = c9.net),
          (st9.forfeited_at = new Date().toISOString()));
      } else
        Qt.settlements = Qt.settlements.filter(
          (e) => !(e.booking_id === i.id && "pending" === e.status),
        );
      return (
        o.length && (await Za(we, Qt.payments)),
        await Za(fe, Qt.settlements),
        await (0, w.logAudit)("booking.cancelled", (0, w.actorRef)(e), {
          booking: i.id.slice(-6),
          free: r,
          kept: kept9,
        }),
        i
      );
    };
    r.mockCancelCourtBooking = Mr;
    const Nr = async (e) => {
        const t = gr(e);
        if (!t || "confirmed" !== t.status) return;
        ((t.status = "released"), (t.released_at = new Date().toISOString()), await Za(me, Qt.courtBookings));
        const a = Qt.settlements.find((e) => e.booking_id === t.id);
        (a &&
          "pending" === a.status &&
          ((a.status = "settled"),
          (a.settled_at = new Date().toISOString()),
          await Za(fe, Qt.settlements),
          await (0, w.logAudit)("settlement.settled", (0, w.actorRef)(t.venue_id), {
            booking: t.id.slice(-6),
          })),
          await (0, w.logAudit)("booking.released", (0, w.actorRef)(t.organizer_id), {
            booking: t.id.slice(-6),
          }));
      },
      Cr = async () => {
        const e = Date.now();
        let t = !1;
        for (const a of Qt.courtBookings)
          ("reserved" === a.status &&
            a.reserved_until &&
            new Date(a.reserved_until).getTime() < e &&
            ((a.status = "expired"),
            (t = !0),
            await (0, w.logAudit)("booking.expired", (0, w.actorRef)(a.organizer_id), {
              booking: a.id.slice(-6),
            })),
            "confirmed" === a.status && new Date(a.ends_at).getTime() < e && (await Nr(a.id)));
        t && (await Za(me, Qt.courtBookings));
      },
      // The settlement breakdown - gross, the venue's commission and what it nets - is the venue's
      // business. This mapper serves the organizer-facing reads as well, so any organizer who booked a
      // court could read that venue's negotiated commission rate and exactly what it takes home.
      // The organizer sees the gross, which is the price they pay. qr_token stays: they need it to
      // check players in.
      Pr = (e, venueSide9) => {
        const t = fr(e.court_id),
          s9 = Rr(e);
        return Object.assign({}, e, {
          court_name: t?.name ?? "Court",
          venue_name: Ai(e.venue_id),
          sport: t?.sport ?? "padel",
          settlement: venueSide9 ? s9 : { gross: s9.gross },
        });
      };
    r.mockGetOrganizerBookings = async (e) => (
      await ei(),
      await Dr(),
      await Cr(),
      Qt.courtBookings
        .filter((t) => t.organizer_id === e)
        .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime())
        .map(Pr)
    );
    r.mockGetVenueBookings = async (e, t) => (
      await ei(),
      await Sr(e, t),
      await Cr(),
      Qt.courtBookings
        .filter((e) => e.venue_id === t)
        .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime())
        .map((e) => Pr(e, !0))
    );
    r.mockGetBooking = async (e, t) => {
      (await ei(), await Cr());
      const a = gr(e);
      if (!a) return null;
      // ORG1 (F-ORG1-16): only the organizer who made the court booking (or an admin) can read it.
      if (t && a.organizer_id !== t && !ro(t)) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW");
      return Pr(a);
    };
    r.mockCreatePaymentPlan = async (e, t, a, i) => {
      await ei();
      const n = gr(t);
      if (!n) throw new Error("E_BOOKING_NOT_FOUND");
      if (n.organizer_id !== e) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE");
      if ("confirmed" !== n.status) throw new Error("E_CONFIRM_THE_COURT_BOOKING_BEFORE_COLLECTING");
      const r = n.game_id
          ? Qt.bookings
              .filter((e) => e.game_id === n.game_id && ("confirmed" === e.status || "pending" === e.status))
              .map((e) => e.user_id)
          : [],
        // Re-running a plan used to wipe only the pending rows, so a payer whose share was already
        // paid - still a confirmed booking, so still in this list - was issued a second charge and a
        // second payment_request for the same booking. Nothing downstream deduplicates: $r does not
        // notice, and Ur/Gr dedupe only seat-kind payments, which plan rows are not. Settled payers
        // drop out of the plan, and what they already paid comes off the total the rest are asked
        // for, so the plan collects the court price once.
        paid9 = Qt.payments.filter(
          (t) => t.booking_id === n.id && ("paid" === t.status || "refunded" === t.status),
        ),
        settled9 = new Set(paid9.filter((e) => "paid" === e.status).map((e) => e.payer_id)),
        collected9 = (0, z.roundKwd)(
          paid9.filter((e) => "paid" === e.status).reduce((e, t) => e + Number(t.amount_kwd || 0), 0),
        ),
        o = [...new Set([e, ...r])].filter((e) => !settled9.has(e)),
        s = o.length
          ? (0, z.splitAmounts)({
              mode: a,
              total: Math.max(0, (0, z.roundKwd)(Number(n.court_price_kwd) - collected9)),
              payerIds: o,
              organizerId: settled9.has(e) ? o[0] : e,
              custom: i,
            })
          : {};
      ((n.split_mode = a),
        (Qt.payments = Qt.payments.filter((e) => !(e.booking_id === n.id && "pending" === e.status))));
      const d = [];
      for (const e of o) {
        const t = (0, z.roundKwd)(s[e] ?? 0),
          a = {
            id: ea(),
            booking_id: n.id,
            game_id: n.game_id,
            payer_id: e,
            payer_name: or(e),
            payee_venue_id: n.venue_id,
            amount_kwd: t,
            status: t <= 0 ? "waived" : "pending",
            method: null,
            gateway_ref: null,
            reminders_sent: 0,
            reserved_until: t <= 0 ? null : new Date(Date.now() + 18e5).toISOString(),
            paid_at: null,
            refunded_at: null,
            created_at: new Date().toISOString(),
          };
        (Qt.payments.push(a),
          d.push(a),
          "pending" === a.status &&
            (await bi({
              id: ea(),
              user_id: e,
              type: "payment_request",
              game_id: n.game_id,
              payment_id: a.id,
              venue_name: Ai(n.venue_id),
              amount_kwd: t,
              read: !1,
              created_at: new Date().toISOString(),
            })));
      }
      return (
        await Promise.all([Za(me, Qt.courtBookings), Za(we, Qt.payments)]),
        await (0, w.logAudit)("payment.requested", (0, w.actorRef)(e), {
          booking: n.id.slice(-6),
          n: d.length,
          mode: a,
        }),
        d
      );
    };
    const Lr = (e) => Object.assign({}, e, { venue_name: Ai(e.payee_venue_id) });
    r.mockGetBookingPayments = async (e, t) => {
      await ei();
      const a = gr(t);
      if (!a) return [];
      const i = a.organizer_id === e || vr(e, a.venue_id);
      return Qt.payments.filter((a) => a.booking_id === t && (i || a.payer_id === e)).map(Lr);
    };
    r.mockGetMyPaymentRequests = async (e) => (
      await ei(),
      await Zr(),
      Qt.payments
        .filter((t) => t.payer_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map(Lr)
    );
    r.mockGetPayment = async (e, t) => {
      await ei();
      const a = Qt.payments.find((t) => t.id === e);
      return a ? Lr(a) : null;
    };
    const Gr = (e, t) =>
        Qt.payments.find(
          (a) =>
            "seat" === a.kind &&
            a.game_id === e &&
            a.payer_id === t &&
            ("pending" === a.status || "paid" === a.status),
        ),
      Ur = (e) => `seat:${e.game_id ?? "court"}:${e.payer_id}:${e.booking_id ?? e.id}`,
      xr = (e, t) => !(Number(e.price_kwd) > 0) || "paid" === Gr(e.id, t)?.status;
    r.seatMayConfirm = xr;
    const zr = (e, t) => {
        if (!xr(e, t)) throw new Error("E_THIS_SEAT_HAS_NOT_BEEN_PAID_FOR");
      },
      Hr = async (e, t, a) => {
        if (!(Number(e.price_kwd) > 0)) return null;
        const i = Gr(e.id, t);
        if (i) return i;
        const n = new Date(e.starts_at).getTime() - Date.now(),
          r = Math.min(Jt, Math.max(n, 12e4)),
          o = {
            id: ea(),
            kind: "seat",
            booking_id: a,
            game_id: e.id,
            payer_id: t,
            payer_name: or(t),
            payee_venue_id: e.venue_id,
            amount_kwd: (0, z.roundKwd)(Number(e.price_kwd)),
            status: "pending",
            method: null,
            gateway_ref: null,
            reminders_sent: 0,
            reserved_until: new Date(Date.now() + r).toISOString(),
            paid_at: null,
            refunded_at: null,
            created_at: new Date().toISOString(),
          };
        return (
          Qt.payments.push(o),
          await Za(we, Qt.payments),
          await (0, w.logAudit)("payment.seat_requested", (0, w.actorRef)(t), {
            game: e.id.slice(-6),
            amount: o.amount_kwd,
          }),
          o
        );
      },
      Fr = (e) =>
        e && "pending" === e.status
          ? {
              payment_id: e.id,
              amount_kwd: e.amount_kwd,
              deadline: e.reserved_until ?? new Date().toISOString(),
            }
          : null,
      Br = async (e, t, a) => {
        const i = Gr(e.id, t);
        return i
          ? "pending" === i.status
            ? ((i.status = "expired"),
              await Za(we, Qt.payments),
              await (0, w.logAudit)("payment.seat_released", (0, w.actorRef)(t), { game: e.id.slice(-6) }),
              { paid_kwd: 0, refund_kwd: 0 })
            : "paid" !== i.status || a
              ? "paid" === i.status && a
                ? ((i.status = "refunded"),
                  (i.refunded_at = new Date().toISOString()),
                  await ac(t, i.amount_kwd, i.id),
                  await Za(we, Qt.payments),
                  await (0, w.logAudit)("payment.seat_refunded", (0, w.actorRef)(t), {
                    game: e.id.slice(-6),
                    amount: i.amount_kwd,
                  }),
                  await bi({
                    id: ea(),
                    user_id: t,
                    type: "refund_issued",
                    game_id: e.id,
                    venue_name: Ai(e.venue_id),
                    amount_kwd: i.amount_kwd,
                    read: !1,
                    created_at: new Date().toISOString(),
                  }),
                  { paid_kwd: i.amount_kwd, refund_kwd: i.amount_kwd })
                : { paid_kwd: 0, refund_kwd: 0 }
              : { paid_kwd: i.amount_kwd, refund_kwd: 0 }
          : { paid_kwd: 0, refund_kwd: 0 };
      },
      jr = async (e, t, a) => {
        if ((await ei(), !(0, z.isOnlineMethod)(a))) throw new Error("E_PAY_ONLINE_TO_HOLD_A_SEAT");
        const i = await ji(t, e);
        if (!i.payment_due) return { status: i.status, receipt: null };
        return { status: "confirmed", receipt: await Kr(e, i.payment_due.payment_id, a) };
      };
    r.mockCheckoutJoin = jr;
    const qr = async (e, t) => {
      (await ei(), await Zr());
      const a = Qt.payments
        .filter((a) => "seat" === a.kind && a.game_id === t && a.payer_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
      return a[0] ? Lr(a[0]) : null;
    };
    r.mockGetMySeatPayment = qr;
    const Yr = async (e, t, a, i, n) => {
        if ("wallet" === n) {
          const n = await tc(e, (0, A.toFils)(t), a, i, "knet");
          return `wallet_${await (0, c.randomToken)(8)}${n.external_fils > 0 ? "+knet" : ""}`;
        }
        const r = `gw_${n}_${await (0, c.randomToken)(8)}`;
        if (!(await Vr(r, t, n)))
          throw (
            await (0, w.logAudit)("payment.verify_failed", (0, w.actorRef)(e), { payment: i.slice(-6) }),
            new Error("E_PAYMENT_COULD_NOT_BE_VERIFIED_PLEASE")
          );
        return r;
      },
      Wr = async (e, t) => {
        const a = e.game_id ? hi(e.game_id) : null;
        // Capacity was measured as raw confirmed rows rather than ki, which counts live reserved
        // holds too - so with holds outstanding this could seat a player past max_players.
        let may9 = !1;
        if (a && !a.registration_closed_at)
          try {
            (await assertMayHoldSeat9(a, t), (may9 = !0));
          } catch {
            // A guard refused, so this seat is not theirs to take. The branch below refunds instead,
            // which is what the money path should do when the player can no longer be seated.
            may9 = !1;
          }
        if (
          !!a &&
          may9 &&
          "cancelled" !== a.status &&
          new Date(a.starts_at).getTime() > Date.now() &&
          ki(a.id) < a.max_players
        ) {
          const e = Qt.bookings.find(
              (e) =>
                e.game_id === a.id &&
                e.user_id === t &&
                ("cancelled" === e.status || "rejected" === e.status),
            ),
            i = new Date().toISOString();
          return (
            e
              ? ((e.status = "confirmed"), (e.reserved_until = null), (e.updated_at = i))
              : Qt.bookings.push({
                  id: ea(),
                  game_id: a.id,
                  user_id: t,
                  status: "confirmed",
                  reserved_until: null,
                  created_at: i,
                  updated_at: i,
                }),
            await Za(W, Qt.bookings),
            "seated"
          );
        }
        return (
          (e.status = "refunded"),
          (e.refunded_at = new Date().toISOString()),
          await ac(t, e.amount_kwd, e.id),
          await Za(we, Qt.payments),
          await bi({
            id: ea(),
            user_id: t,
            type: "refund_issued",
            game_id: a?.id ?? null,
            venue_name: a ? Ai(a.venue_id) : "",
            amount_kwd: e.amount_kwd,
            read: !1,
            created_at: new Date().toISOString(),
          }),
          "refunded"
        );
      },
      Kr = async (e, t, a) => {
        await ei();
        const i = Qt.payments.find((e) => e.id === t);
        if (!i) throw new Error("E_PAYMENT_NOT_FOUND");
        return i.game_id ? Xt(i.game_id, () => $r(e, t, a)) : $r(e, t, a);
      };
    r.mockPayRequest = Kr;
    // The counterpart to selecting cash: whoever is collecting at the venue confirms it, and the seat
    // settles through exactly the same path an online payment takes.
    r.mockConfirmCashPayment = async (e, t) => {
      await ei();
      const a = Qt.payments.find((e) => e.id === t);
      if (!a) throw new Error("E_PAYMENT_NOT_FOUND");
      if ("paid" === a.status) return Lr(a);
      if ("pending" !== a.status) throw new Error("E_THIS_PAYMENT_CAN_NO_LONGER_BE");
      const i = a.game_id ? hi(a.game_id) : null;
      if (
        !(i && i.organizer_id === e) &&
        !(a.payee_venue_id && vr(e, a.payee_venue_id)) &&
        !ro(e)
      )
        throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE");
      return (
        await (0, w.logAudit)("payment.cash_confirmed", (0, w.actorRef)(e), {
          payment: a.id.slice(-6),
          payer: a.payer_id.slice(-6),
        }),
        a.game_id
          ? Xt(a.game_id, () => settleSeatPayment9(a, a.payer_id, "cash"))
          : settleSeatPayment9(a, a.payer_id, "cash")
      );
    };
    // Marking a payment paid and turning it into a seat used to live only inside the online path,
    // so cash had no way to reach it. Both callers share it now.
    const settleSeatPayment9 = async (i, e, a) => {
        if (
          ((i.status = "paid"),
          (i.method = a),
          (i.paid_at = new Date().toISOString()),
          (i.reserved_until = null),
          await Za(we, Qt.payments),
          await rs(i),
          i.game_id)
        ) {
          const t = Qt.bookings.find(
            (t) =>
              t.game_id === i.game_id &&
              t.user_id === e &&
              "cancelled" !== t.status &&
              "rejected" !== t.status,
          );
          if (t)
            "confirmed" !== t.status &&
              ((t.status = "confirmed"),
              (t.reserved_until = null),
              (t.updated_at = new Date().toISOString()),
              await Za(W, Qt.bookings));
          else {
            const t = await Wr(i, e);
            await (0, w.logAudit)(
              "seated" === t ? "payment.late_seated" : "payment.late_refunded",
              (0, w.actorRef)(e),
              { payment: i.id.slice(-6), game: i.game_id.slice(-6) },
            );
          }
          const a = Qt.groupMembers.filter(
            (t) =>
              "pending_payment" === t.status &&
              t.user_id === e &&
              Qt.groupBookings.some((e) => e.id === t.group_id && e.game_id === i.game_id),
          );
          a.length > 0 &&
            (a.forEach((e) => {
              e.status = "confirmed";
            }),
            await xd());
        }
        return (
          await Za(we, Qt.payments),
          await (0, w.logAudit)("payment.paid", (0, w.actorRef)(e), {
            payment: i.id.slice(-6),
            method: a,
            amount: i.amount_kwd,
          }),
          Lr(i)
        );
    };
    const $r = async (e, t, a) => {
        const i = Qt.payments.find((e) => e.id === t);
        if (!i) throw new Error("E_PAYMENT_NOT_FOUND");
        if (i.payer_id !== e) throw new Error("E_THIS_PAYMENT_REQUEST_IS_NOT_YOURS");
        if ("paid" === i.status) return Lr(i);
        if ("pending" !== i.status) throw new Error("E_THIS_PAYMENT_CAN_NO_LONGER_BE");
        if (!(0, z.isOnlineMethod)(a)) {
          // Cash left the payment pending with a fifteen-minute hold still ticking, so the seat was
          // swept before the player ever reached the venue - and nothing could ever mark it paid, so
          // seatMayConfirm stayed false forever. For Kuwait pickup football cash is how organizers
          // actually collect, so every cash organizer lost every player. Carry the hold to kick-off
          // instead of clearing it: the reconciler voids a confirmed-but-unpaid seat whose hold has
          // lapsed, so a null here would void it immediately. The organizer settles it at the venue
          // through mockConfirmCashPayment.
          const g9 = i.game_id ? hi(i.game_id) : null;
          return (
            (i.method = a),
            g9 && (i.reserved_until = g9.starts_at),
            await Za(we, Qt.payments),
            await (0, w.logAudit)("payment.cash_selected", (0, w.actorRef)(e), { payment: i.id.slice(-6) }),
            Lr(i)
          );
        }
        const n = Ur(i),
          r = Qt.paymentCharges.find((e) => e.key === n);
        if (r && "captured" === r.status) i.gateway_ref = r.gateway_ref;
        else if (r && "in_flight" === r.status) throw new Error("E_PAYMENT_IS_ALREADY_BEING_PROCESSED");
        if (!r || "failed" === r.status) {
          const t = {
            key: n,
            payment_id: i.id,
            status: "in_flight",
            gateway_ref: null,
            amount_kwd: i.amount_kwd,
            created_at: new Date().toISOString(),
            settled_at: null,
          };
          let o;
          (r ? Object.assign(r, t) : Qt.paymentCharges.push(t), await Za(Q, Qt.paymentCharges));
          try {
            o = await Yr(e, i.amount_kwd, i.game_id ? "match_payment" : "court_booking", i.id, a);
          } catch (e) {
            throw (
              (Qt.paymentCharges.find((e) => e.key === n).status = "failed"),
              await Za(Q, Qt.paymentCharges),
              e
            );
          }
          const s = Qt.paymentCharges.find((e) => e.key === n);
          ((s.status = "captured"),
            (s.gateway_ref = o),
            (s.settled_at = new Date().toISOString()),
            await Za(Q, Qt.paymentCharges),
            (i.gateway_ref = o));
        }
        return settleSeatPayment9(i, e, a);
      },
      Vr = async (e, t, a) => u.sandboxProvider.capture(e, Math.round(1e3 * t));
    r.mockCreatePaymentIntent = async (e, t, a) => {
      await ei();
      const i = Qt.payments.find((e) => e.id === t);
      if (!i) throw new Error("E_PAYMENT_NOT_FOUND");
      if (i.payer_id !== e) throw new Error("E_NOT_YOUR_PAYMENT");
      if ("pending" !== i.status) throw new Error("E_THIS_PAYMENT_CAN_NO_LONGER_BE");
      const n = (0, A.toFils)(i.amount_kwd),
        { intent_id: r, action_url: o } = await u.sandboxProvider.createIntent(n, a);
      return (
        Qt.paymentIntents.push({
          id: r,
          payment_id: t,
          amount_fils: n,
          method: a,
          status: "requires_action",
          created_at: new Date().toISOString(),
          completed_at: null,
        }),
        await Za(J, Qt.paymentIntents),
        await (0, w.logAudit)("payment.intent_created", (0, w.actorRef)(e), {
          intent: r.slice(-6),
          method: a,
        }),
        { intent_id: r, action_url: o, amount_fils: n }
      );
    };
    r.mockGatewayWebhook = async (e, t) => {
      await ei();
      if (!(await u.sandboxProvider.verifySignature(e, t, u.GATEWAY_WEBHOOK_SECRET)))
        throw (
          await (0, w.logAudit)("payment.webhook_rejected", null, { reason: "bad_signature" }),
          new Error("E_INVALID_WEBHOOK_SIGNATURE")
        );
      let a;
      try {
        a = JSON.parse(e);
      } catch {
        throw new Error("E_MALFORMED_WEBHOOK_PAYLOAD");
      }
      const i = Qt.paymentIntents.find((e) => e.id === a.intent_id);
      if (!i) throw new Error("E_UNKNOWN_PAYMENT_INTENT");
      if ("succeeded" === i.status) return { ok: !0, intent_id: i.id, idempotent: !0 };
      if ("succeeded" !== a.status)
        return (
          (i.status = "failed"),
          (i.completed_at = new Date().toISOString()),
          await Za(J, Qt.paymentIntents),
          { ok: !0, intent_id: i.id, idempotent: !1 }
        );
      const n = Qt.payments.find((e) => e.id === i.payment_id);
      if (!n) throw new Error("E_PAYMENT_NOT_FOUND_FOR_INTENT");
      if (((i.status = "succeeded"), (i.completed_at = new Date().toISOString()), "pending" === n.status)) {
        if (
          ((n.status = "paid"),
          (n.method = i.method),
          (n.gateway_ref = i.id),
          (n.paid_at = new Date().toISOString()),
          (n.reserved_until = null),
          await rs(n),
          n.game_id)
        ) {
          const e = Qt.bookings.find((e) => e.game_id === n.game_id && e.user_id === n.payer_id);
          e &&
            "confirmed" !== e.status &&
            ((e.status = "confirmed"), (e.updated_at = new Date().toISOString()), await Za(W, Qt.bookings));
        }
        (await Za(we, Qt.payments),
          await (0, w.logAudit)("payment.paid", (0, w.actorRef)(n.payer_id), {
            payment: n.id.slice(-6),
            method: i.method,
            via: "webhook",
          }));
      }
      return (await Za(J, Qt.paymentIntents), { ok: !0, intent_id: i.id, idempotent: !1 });
    };
    r.mockRefundPayment = async (e, t) => {
      await ei();
      const a = Qt.payments.find((e) => e.id === t);
      if (!a) throw new Error("E_PAYMENT_NOT_FOUND");
      if (!("admin" === Qt.profiles.find((t) => t.id === e)?.role) && !vr(e, a.payee_venue_id))
        throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_ISSUE");
      if ("paid" !== a.status) throw new Error("E_ONLY_PAID_REQUESTS_CAN_BE_REFUNDED");
      return (
        (a.status = "refunded"),
        (a.refunded_at = new Date().toISOString()),
        await Za(we, Qt.payments),
        await ac(a.payer_id, a.amount_kwd, a.id),
        await bi({
          id: ea(),
          user_id: a.payer_id,
          type: "refund_issued",
          game_id: a.game_id,
          venue_name: Ai(a.payee_venue_id),
          amount_kwd: a.amount_kwd,
          read: !1,
          created_at: new Date().toISOString(),
        }),
        await (0, w.logAudit)("payment.refunded", (0, w.actorRef)(e), {
          payment: a.id.slice(-6),
          amount: a.amount_kwd,
        }),
        Lr(a)
      );
    };
    r.mockSendPaymentReminders = async (e, t) => {
      await ei();
      const a = gr(t);
      if (!a) throw new Error("E_BOOKING_NOT_FOUND");
      if (a.organizer_id !== e) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE");
      let i = 0;
      for (const e of Qt.payments.filter((e) => e.booking_id === t && "pending" === e.status))
        ((e.reminders_sent += 1),
          (i += 1),
          await bi({
            id: ea(),
            user_id: e.payer_id,
            type: "payment_request",
            game_id: a.game_id,
            payment_id: e.id,
            venue_name: Ai(a.venue_id),
            amount_kwd: e.amount_kwd,
            read: !1,
            created_at: new Date().toISOString(),
          }));
      return (
        await Za(we, Qt.payments),
        i && (await (0, w.logAudit)("payment.reminded", (0, w.actorRef)(e), { booking: t.slice(-6), n: i })),
        i
      );
    };
    const Jr = async () => {
      await ei();
      const e = await xa(Z, null),
        t = Qt.payments
          .filter((e) => "seat" === e.kind && e.game_id)
          .sort((e, t) => e.created_at.localeCompare(t.created_at) || e.id.localeCompare(t.id)),
        a = e ? t.findIndex((t) => t.id === e) + 1 : 0,
        i = t.slice(a, a + 100),
        n = { scanned: i.length, seated: 0, refunded: 0, seats_voided: 0, cursor: e, done: !1 };
      for (const e of i) {
        const t = hi(e.game_id);
        if (!t || "cancelled" === t.status) continue;
        const a = Qt.bookings.find(
          (t) =>
            t.game_id === e.game_id &&
            t.user_id === e.payer_id &&
            "cancelled" !== t.status &&
            "rejected" !== t.status,
        );
        if (Qt.seatCancellations.some((t) => t.game_id === e.game_id && t.user_id === e.payer_id)) continue;
        if ("paid" === e.status && !a) {
          const a = await Xt(t.id, () => Wr(e, e.payer_id));
          ("seated" === a ? (n.seated += 1) : (n.refunded += 1),
            await (0, w.logAudit)("payment.reconciled", (0, w.actorRef)(e.payer_id), {
              payment: e.id.slice(-6),
              fixed: a,
            }));
          continue;
        }
        const i = !e.reserved_until || new Date(e.reserved_until).getTime() < Date.now();
        if (
          a &&
          "confirmed" === a.status &&
          "paid" !== e.status &&
          "refunded" !== e.status &&
          i &&
          new Date(t.starts_at).getTime() > Date.now()
        ) {
          const t = Qt.paymentCharges.find((t) => t.key === Ur(e));
          if (t && "failed" !== t.status) continue;
          ((a.status = "cancelled"),
            (a.reserved_until = null),
            (a.updated_at = new Date().toISOString()),
            await Za(W, Qt.bookings),
            (n.seats_voided += 1),
            await (0, w.logAudit)("payment.reconciled", (0, w.actorRef)(e.payer_id), {
              payment: e.id.slice(-6),
              fixed: "seat_voided",
            }));
        }
      }
      const r = i[i.length - 1],
        o = r ? r.id : null;
      return ((n.done = i.length < 100), (n.cursor = n.done ? null : o), await Za(Z, n.cursor), n);
    };
    r.mockReconcileSeatPayments = Jr;
    r.mockExpireSeatHold = async (e, t) => {
      await ei();
      const a = Gr(t, e),
        i = Qt.bookings.find(
          (a) => a.game_id === t && a.user_id === e && "cancelled" !== a.status && "rejected" !== a.status,
        );
      return (
        !(!a || !i) &&
        ((i.status = "cancelled"),
        (i.reserved_until = null),
        (i.updated_at = new Date().toISOString()),
        (a.reserved_until = new Date(Date.now() - 1e3).toISOString()),
        await Za(W, Qt.bookings),
        await Za(we, Qt.payments),
        !0)
      );
    };
    r.mockCountCharges = async (e, t) => {
      await ei();
      const a = Qt.paymentCharges.filter((a) => a.key.startsWith(`seat:${t}:${e}:`));
      return {
        total: a.length,
        captured: a.filter((e) => "captured" === e.status).length,
        in_flight: a.filter((e) => "in_flight" === e.status).length,
      };
    };
    const Qr = async (e) => {
      (await ei(), await sn(e));
      const t = [];
      let a = 0;
      for (const e of Qt.bookings) {
        if ("confirmed" !== e.status) continue;
        a++;
        const i = hi(e.game_id);
        if (!i) continue;
        const n = Number(i.price_kwd) || 0;
        if (n <= 0) continue;
        if (e.user_id === i.organizer_id) continue;
        if (e.id.startsWith("seedbk-")) continue;
        if (!Qt.profiles.some((t) => t.id === e.user_id)) continue;
        const r = Qt.payments.find(
          (t) => "seat" === t.kind && t.game_id === e.game_id && t.payer_id === e.user_id,
        );
        if (r && ("paid" === r.status || "refunded" === r.status)) continue;
        if ("confirmed" === e.status && r && "pending" === r.status) {
          if (r.reserved_until && new Date(r.reserved_until).getTime() > Date.now()) continue;
        }
        const o = Qt.courtBookings.find((t) => t.game_id === e.game_id),
          s = !!o && Qt.settlements.some((e) => e.booking_id === o.id && "settled" === e.status),
          d = e.created_at ?? i.starts_at;
        t.push({
          booking_id: e.id,
          game_id: e.game_id,
          game_title: i.title ?? "",
          starts_at: i.starts_at,
          venue_id: i.venue_id,
          venue_name: Ai(i.venue_id),
          user_id: e.user_id,
          user_name: or(e.user_id),
          fee_kwd: (0, z.roundKwd)(n),
          month: String(d).slice(0, 7),
          via_replacement: Qt.replacementOffers.some(
            (t) => t.game_id === e.game_id && t.candidate_id === e.user_id && "accepted" === t.status,
          ),
          venue_settled: s,
        });
      }
      t.sort((e, t) => (e.month < t.month ? -1 : e.month > t.month ? 1 : 0));
      const i = new Map();
      for (const e of t) {
        const t = i.get(e.month) ?? { month: e.month, seats: 0, kwd: 0 };
        ((t.seats += 1), (t.kwd = (0, z.roundKwd)(t.kwd + e.fee_kwd)), i.set(e.month, t));
      }
      const n = {
        seats: t,
        total_kwd: (0, z.roundKwd)(t.reduce((e, t) => e + t.fee_kwd, 0)),
        by_month: [...i.values()],
        settled_kwd: (0, z.roundKwd)(t.filter((e) => e.venue_settled).reduce((e, t) => e + t.fee_kwd, 0)),
        via_replacement: t.filter((e) => e.via_replacement).length,
        other: t.filter((e) => !e.via_replacement).length,
        scanned_bookings: a,
        generated_at: new Date().toISOString(),
      };
      return (
        await (0, w.logAudit)("leak.audited", (0, w.actorRef)(e), { seats: t.length, kwd: n.total_kwd }),
        n
      );
    };
    r.mockAuditReplacementLeak = Qr;
    r.mockRemediateReplacementLeak = async (e, t, a = !1) => {
      (await ei(), await sn(e));
      const i = await Qr(e),
        n = !a;
      if ("charge" === t && n)
        return {
          mode: t,
          dry_run: !0,
          seats: i.seats.length,
          total_kwd: i.total_kwd,
          annotated: 0,
          charges_created: 0,
          note:
            "DRY RUN. Charging would create " +
            i.seats.length +
            " retrospective seat payments totalling " +
            i.total_kwd.toFixed(3) +
            " KWD against players who were told the seat was theirs. Pass confirm: true only on an explicit founder decision.",
        };
      let r = 0,
        o = 0;
      for (const a of i.seats)
        if (
          !n &&
          (await (0, w.logAudit)("leak.annotated", (0, w.actorRef)(e), {
            booking: a.booking_id.slice(-6),
            game: a.game_id.slice(-6),
            user: (0, w.actorRef)(a.user_id) ?? "unknown",
            kwd: a.fee_kwd,
            mode: t,
            settled: a.venue_settled,
          }),
          r++,
          "charge" === t)
        ) {
          const e = hi(a.game_id),
            t = Qt.bookings.find((e) => e.id === a.booking_id);
          e && t && !Gr(e.id, a.user_id) && (await Hr(e, a.user_id, t.id), o++);
        }
      !n && o > 0 && (await Za(we, Qt.payments));
      return {
        mode: t,
        dry_run: n,
        seats: i.seats.length,
        total_kwd: i.total_kwd,
        annotated: r,
        charges_created: o,
        note:
          (n ? "DRY RUN \u2014 nothing was written. " : "") +
          {
            write_off:
              "Recorded as a goodwill cost. No money moves; every seat carries an annotation naming the reason.",
            charge:
              "Retrospective seat payments created. The players did nothing wrong \u2014 expect support volume.",
            credit_adjust:
              "Each seat annotated with the amount owed so a future booking can net it. No money moves now.",
          }[t],
      };
    };
    r.mockAuditSeatConsistency = async () => {
      await ei();
      const e = Date.now(),
        t = [],
        a = [];
      for (const i of Qt.payments) {
        if ("seat" !== i.kind || !i.game_id) continue;
        const n = hi(i.game_id);
        if (!n || "cancelled" === n.status) continue;
        const r = Qt.bookings.find(
            (e) =>
              e.game_id === i.game_id &&
              e.user_id === i.payer_id &&
              "cancelled" !== e.status &&
              "rejected" !== e.status,
          ),
          o = Qt.seatCancellations.some((e) => e.game_id === i.game_id && e.user_id === i.payer_id);
        "paid" !== i.status || r || o || t.push(i.id);
        const s = !i.reserved_until || new Date(i.reserved_until).getTime() < e;
        r &&
          "confirmed" === r.status &&
          Number(n.price_kwd) > 0 &&
          "paid" !== i.status &&
          "refunded" !== i.status &&
          s &&
          a.push(r.id);
      }
      return { paid_no_seat: t, seat_no_payment: a };
    };
    const Zr = async () => {
      const e = Date.now();
      let t = !1;
      for (const a of Qt.payments)
        if (
          "pending" === a.status &&
          a.reserved_until &&
          new Date(a.reserved_until).getTime() < e &&
          ((a.status = "expired"),
          (t = !0),
          await (0, w.logAudit)("payment.expired", (0, w.actorRef)(a.payer_id), { payment: a.id.slice(-6) }),
          "seat" === a.kind && a.game_id)
        ) {
          const t = hi(a.game_id),
            i = Qt.bookings.find(
              (e) =>
                e.game_id === a.game_id &&
                e.user_id === a.payer_id &&
                ("confirmed" === e.status || "reserved" === e.status),
            );
          t &&
            i &&
            "cancelled" !== t.status &&
            new Date(t.starts_at).getTime() > e &&
            ((i.status = "cancelled"),
            (i.reserved_until = null),
            (i.updated_at = new Date(e).toISOString()),
            await Za(W, Qt.bookings),
            await (0, w.logAudit)("payment.seat_forfeited", (0, w.actorRef)(a.payer_id), {
              game: t.id.slice(-6),
            }),
            await bi({
              id: ea(),
              user_id: a.payer_id,
              type: "payment_forfeited",
              game_id: t.id,
              venue_name: Ai(t.venue_id),
              amount_kwd: a.amount_kwd,
              read: !1,
              created_at: new Date(e).toISOString(),
            }),
            await Xt(t.id, () => Di(t)));
        }
      t && (await Za(we, Qt.payments));
    };
    r.mockGetBookingCheckins = async (e, t) => {
      await ei();
      const a = gr(t);
      if (!a) return [];
      if (a.organizer_id !== e && !vr(e, a.venue_id)) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW");
      if (a.game_id) {
        const e = Qt.bookings.filter((e) => e.game_id === a.game_id && "confirmed" === e.status);
        for (const t of e)
          Qt.checkins.some((e) => e.booking_id === a.id && e.player_id === t.user_id) ||
            Qt.checkins.push({
              id: ea(),
              booking_id: a.id,
              game_id: a.game_id,
              player_id: t.user_id,
              player_name: or(t.user_id),
              state: "pending",
              scanned_by: null,
              scanned_at: null,
            });
        await Za(pe, Qt.checkins);
      }
      return Qt.checkins.filter((e) => e.booking_id === t);
    };
    r.mockScanCheckin = async (e, t, a, i, c9) => {
      await ei();
      const n = Qt.courtBookings.find((e) => e.qr_token === t);
      if (!n) throw new Error("E_INVALID_QR_CODE");
      if (n.organizer_id !== e && !vr(e, n.venue_id)) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_SCAN");
      // A scan writes booking.attendance - the same field mockSetAttendance guards - but enforced
      // none of its rules: any venue staff could mark a player attended days before kickoff, or
      // reopen a record the organizer's 48 h freeze had already closed. Apply the same window here.
      // A court booking with no match has no attendance to write and keeps the plain check-in path.
      const g9 = n.game_id ? hi(n.game_id) : null;
      if (g9) {
        if (new Date(g9.ends_at).getTime() > Date.now()) throw new Error("E_MATCH_NOT_FINISHED");
        if (g9.score_submitted_at && Date.now() - new Date(g9.score_submitted_at).getTime() > 1728e5)
          throw new Error("E_ATTENDANCE_LOCKED");
      }
      // The write was also unserialised, so two scanners raced the bookings table. Take the match
      // lock it needs; a court booking with no match locks on itself.
      return Xt(n.game_id ?? n.id, async () => {
        // ji appends a fresh booking row when a player rejoins instead of reviving the cancelled
        // one, so an unfiltered find returned the stale cancelled row: the live booking kept
        // attendance: null and the player was scored as neither attended nor no-show. Take the
        // newest live row, and refuse rather than silently skip when there is none.
        let b9 = null;
        if (g9) {
          // A check-in token, when the player presents one, names the booking outright - the caller
          // does not get to say who they are checking in. Without one this stays a roster tap.
          b9 = c9
            ? Qt.bookings.find(
                (e) =>
                  e.checkin_token === c9 &&
                  e.game_id === n.game_id &&
                  "cancelled" !== e.status &&
                  "rejected" !== e.status,
              )
            : Qt.bookings
                .filter(
                  (e) =>
                    e.game_id === n.game_id &&
                    e.user_id === a &&
                    "cancelled" !== e.status &&
                    "rejected" !== e.status,
                )
                .sort(xi)
                .pop();
          if (!b9) throw new Error("E_PLAYER_NOT_IN_THIS_MATCH");
        }
        const p9 = b9 ? b9.user_id : a;
        let r = Qt.checkins.find((e) => e.booking_id === n.id && e.player_id === p9);
        (r ||
          ((r = {
            id: ea(),
            booking_id: n.id,
            game_id: n.game_id,
            player_id: p9,
            player_name: or(p9),
            state: "pending",
            scanned_by: null,
            scanned_at: null,
          }),
          Qt.checkins.push(r)),
          (r.state = i),
          (r.scanned_by = e),
          (r.scanned_at = new Date().toISOString()),
          await Za(pe, Qt.checkins));
        if (b9)
          ((b9.attendance = "no_show" === i ? "no_show" : "pending" === i ? null : "attended"),
            (b9.updated_at = new Date().toISOString()),
            await Za(W, Qt.bookings));
        return (
          await (0, w.logAudit)("checkin.scanned", (0, w.actorRef)(e), {
            booking: n.id.slice(-6),
            state: i,
          }),
          r
        );
      });
    };
    r.mockGetVenueRevenue = async (e, t) => {
      (await ei(), await Sr(e, t), await Cr());
      const a = Qt.settlements.filter((e) => e.venue_id === t),
        i = Qt.courtBookings.filter((e) => e.venue_id === t),
        n = Qt.payments.filter((e) => e.payee_venue_id === t);
      return {
        bookings: i.length,
        confirmed: i.filter((e) => "confirmed" === e.status || "released" === e.status).length,
        grossKwd: (0, z.roundKwd)(a.reduce((e, t) => e + t.gross_kwd, 0)),
        commissionKwd: (0, z.roundKwd)(a.reduce((e, t) => e + t.commission_kwd, 0)),
        netKwd: (0, z.roundKwd)(a.reduce((e, t) => e + t.net_to_venue_kwd, 0)),
        settledKwd: (0, z.roundKwd)(
          a.filter((e) => "settled" === e.status).reduce((e, t) => e + t.net_to_venue_kwd, 0),
        ),
        pendingKwd: (0, z.roundKwd)(
          a.filter((e) => "pending" === e.status).reduce((e, t) => e + t.net_to_venue_kwd, 0),
        ),
        paidPlayers: n.filter((e) => "paid" === e.status).length,
        refundsKwd: (0, z.roundKwd)(
          n.filter((e) => "refunded" === e.status).reduce((e, t) => e + t.amount_kwd, 0),
        ),
      };
    };
    r.mockGetAdminFinancials = async (e) => {
      (await ei(), await sn(e), await Dr(), await Cr());
      // ADM1 (F-ADM1-23): pending and settled settlements are reported separately and gross is also
      // given net of refunds; the legacy totals are kept for compatibility.
      const t = Qt.settlements,
        a = Qt.payments,
        i = t.filter((e) => "settled" === e.status),
        n = t.filter((e) => "pending" === e.status),
        r = (e, t) => (0, z.roundKwd)(e.reduce((e, a) => e + (a[t] ?? 0), 0)),
        o = r(t, "gross_kwd"),
        s = (0, z.roundKwd)(a.filter((e) => "refunded" === e.status).reduce((e, t) => e + t.amount_kwd, 0));
      return {
        venues: Qt.venueProfiles.filter((e) => "approved" === e.status).length,
        pendingVenues: Qt.venueProfiles.filter((e) => "pending" === e.status).length,
        bookings: Qt.courtBookings.filter((e) => "confirmed" === e.status || "released" === e.status).length,
        grossKwd: o,
        netGrossKwd: (0, z.roundKwd)(o - s),
        commissionKwd: r(t, "commission_kwd"),
        commissionSettledKwd: r(i, "commission_kwd"),
        commissionPendingKwd: r(n, "commission_kwd"),
        payoutsKwd: r(t, "net_to_venue_kwd"),
        payoutsSettledKwd: r(i, "net_to_venue_kwd"),
        payoutsPendingKwd: r(n, "net_to_venue_kwd"),
        refundsKwd: s,
        paidPlayers: a.filter((e) => "paid" === e.status).length,
      };
    };
    r.mockGetPaymentMethods = () => z.PAYMENT_METHODS;
    const Xr = new Map();
    async function eo(e, t) {
      const a = (Xr.get(e) ?? Promise.resolve()).catch(() => {}).then(t);
      Xr.set(e, a);
      try {
        return await a;
      } finally {
        Xr.get(e) === a && Xr.delete(e);
      }
    }
    const to = (e) => Qt.teams.find((t) => t.id === e),
      ao = (e, t) => Qt.teamMembers.find((a) => a.team_id === e && a.user_id === t && "active" === a.status),
      io = (e, t) => (t ? (ao(e, t)?.role ?? null) : null),
      no = (e, t) => !!t && !!ao(e, t),
      ro = (e) => "admin" === Qt.profiles.find((t) => t.id === e)?.role;
    async function oo(e) {
      if (!e) throw new Error("E_YOU_MUST_BE_SIGNED_IN_TO");
    }
    async function so(e, t) {
      if (ro(t)) return;
      const a = io(e, t);
      if (!(0, x.canManageTeam)(a))
        throw (
          await (0, w.logAudit)("team.manage_denied", (0, w.actorRef)(t), { team: e.slice(-6) }),
          new Error("E_ONLY_TEAM_OWNERS_AND_CAPTAINS_CAN")
        );
    }
    async function lo(e, t) {
      if (!no(e, t) && !ro(t))
        throw (
          await (0, w.logAudit)("team.chat_access_denied", (0, w.actorRef)(t), { team: e.slice(-6) }),
          new Error("E_ONLY_TEAM_MEMBERS_CAN_ACCESS_THIS")
        );
    }
    const co = async (e, t) => {
        const a = Qt.teamMembers.filter(
          (t) => t.team_id === e && "active" === t.status && (0, x.canManageTeam)(t.role),
        );
        for (const e of a) await bi(t(e.user_id));
      },
      _o = async (e, t, a) => {
        const i = Qt.teamMembers.filter((a) => a.team_id === e && "active" === a.status && a.user_id !== t);
        for (const e of i) await bi(a(e.user_id));
      };
    let uo = null;
    const mo = () =>
        Fa() ? (Qt.teamsSeeded ? Promise.resolve() : (uo || (uo = wo()), uo)) : Promise.resolve(),
      wo = async () => {
        if ((await ei(), Qt.teamsSeeded)) return;
        const e = "team-0000-strikers";
        if (!to(e)) {
          const t = va.Salmiya;
          Qt.teams.push({
            id: e,
            name: "Salmiya Strikers",
            team_type: "football",
            audience: "male",
            sport: "football",
            logo_emoji: "\u26bd",
            logo_uri: null,
            color_primary: "#e11d48",
            color_secondary: "#0f172a",
            description: "Weeknight 5-a-side crew in Salmiya. Competitive but friendly.",
            home_area: "Salmiya",
            home_lat: t[0],
            home_lng: t[1],
            privacy: "public",
            owner_id: "preview-user",
            invite_code: "STRKRS",
            founded_at: new Date(Date.now() - 1728e7).toISOString(),
            status: "active",
            suspended_reason: null,
            created_at: new Date(Date.now() - 1728e7).toISOString(),
          });
          const a = (t, a, i, n) => ({
            id: ea(),
            team_id: e,
            user_id: t,
            display_name: a,
            role: i,
            status: "active",
            joined_at: new Date(Date.now() - 864e5 * n).toISOString(),
            requested_at: null,
          });
          Qt.teamMembers.push(
            a("preview-user", "You", "owner", 200),
            a("seed-applicant-1", "Yousef Behbehani", "captain", 180),
            a("seed-applicant-2", "Khalid Al-Mutairi", "player", 150),
            a("seed-team-3", "Faisal Al-Sabah", "player", 120),
            a("seed-team-4", "Mishari Al-Enezi", "co_captain", 100),
          );
          const i = (t, a, i, n, r, o, s, d) => {
            const l = new Date(Date.now() - 864e5 * i);
            return (
              l.setHours(20, 0, 0, 0),
              {
                id: ea(),
                team_id: e,
                kind: a,
                title: t,
                game_id: null,
                opponent_team_id: null,
                starts_at: l.toISOString(),
                ends_at: new Date(l.getTime() + 54e5).toISOString(),
                result: n,
                our_score: r,
                their_score: o,
                attended_count: s,
                invited_count: d,
                created_at: l.toISOString(),
              }
            );
          };
          (Qt.teamEvents.push(
            i("vs Jabriya FC", "match", 30, "win", 4, 2, 5, 5),
            i("vs Hawalli United", "friendly", 23, "win", 3, 1, 5, 5),
            i("Weeknight training", "training", 16, null, null, null, 4, 5),
            i("vs Mishref Arena XI", "match", 9, "loss", 1, 3, 5, 5),
            i("Upcoming derby", "match", -5, null, null, null, null, 5),
          ),
            await Promise.all([Za(Ot, Qt.teams), Za(Rt, Qt.teamMembers), Za(It, Qt.teamEvents)]),
            await vo(e));
        }
        Qt.teamsSeeded = !0;
      };
    r.mockCreateTeam = async (e, t) => {
      (await ei(), await mo(), await oo(e));
      const a = (0, v.sanitizeText)(t.name, 60);
      if (!a) throw new Error("E_ADD_A_TEAM_NAME");
      if (
        Qt.teams.filter((t) => t.owner_id === e && Date.now() - new Date(t.created_at).getTime() < 864e5)
          .length >= 5
      )
        throw (
          await (0, w.logAudit)("team.create_denied", (0, w.actorRef)(e), { reason: "rate_limit" }),
          new Error("E_YOU_HAVE_CREATED_TOO_MANY_TEAMS")
        );
      const i = (0, x.fixedSportFor)(t.team_type) ?? t.sport,
        n = (0, v.sanitizeText)(t.home_area ?? "Kuwait City", 40) || "Kuwait City",
        r = va[n] ?? va["Kuwait City"],
        o = {
          id: ea(),
          name: a,
          team_type: t.team_type,
          audience: aa(e),
          sport: i,
          logo_emoji: t.logo_emoji || po[t.team_type],
          logo_uri: null,
          color_primary: t.color_primary || "#2563eb",
          color_secondary: t.color_secondary || "#0f172a",
          description: t.description ? (0, v.sanitizeText)(t.description, 400) : "",
          home_area: n,
          home_lat: r[0],
          home_lng: r[1],
          privacy: t.privacy,
          owner_id: e,
          invite_code: Hi(),
          founded_at: new Date().toISOString(),
          status: "active",
          suspended_reason: null,
          created_at: new Date().toISOString(),
        };
      return (
        Qt.teams.push(o),
        Qt.teamMembers.push({
          id: ea(),
          team_id: o.id,
          user_id: e,
          display_name: or(e),
          role: "owner",
          status: "active",
          joined_at: new Date().toISOString(),
          requested_at: null,
        }),
        await Promise.all([Za(Ot, Qt.teams), Za(Rt, Qt.teamMembers)]),
        await (0, w.logAudit)("team.created", (0, w.actorRef)(e), {
          team: o.id.slice(-6),
          type: t.team_type,
          privacy: t.privacy,
        }),
        o
      );
    };
    const po = {
        football: "\u26bd",
        padel: "\ud83c\udfbe",
        tennis: "\ud83c\udfbe",
        corporate: "\ud83c\udfe2",
        university: "\ud83c\udf93",
        friends: "\ud83d\udc65",
      },
      fo = (e, t) => {
        const a = Qt.teamMembers.filter((t) => t.team_id === e.id && "active" === t.status),
          i = Qt.teamEvents.filter((t) => t.team_id === e.id),
          n = (0, x.computeTeamStats)(i, a.length);
        return Object.assign({}, e, {
          member_count: a.length,
          rankingScore: (0, x.rankingScore)({ stats: n }),
          viewer_role: io(e.id, t),
          viewer_member: no(e.id, t),
          dodges: cs(e.id),
        });
      };
    r.mockGetTeams = async (e = {}, t) => {
      (await ei(), await mo());
      let a = Qt.teams.filter(
        (e) =>
          !!("suspended" !== e.status || (t && ro(t))) &&
          !!("private" !== e.privacy || no(e.id, t) || (t && ro(t))),
      );
      if (
        (e.sport && (a = a.filter((t) => t.sport === e.sport)),
        e.team_type && (a = a.filter((t) => t.team_type === e.team_type)),
        e.area && (a = a.filter((t) => t.home_area === e.area)),
        e.search)
      ) {
        const t = e.search.toLowerCase();
        a = a.filter((e) => `${e.name} ${e.home_area}`.toLowerCase().includes(t));
      }
      return a.map((e) => fo(e, t)).sort((e, t) => t.member_count - e.member_count);
    };
    r.mockGetMyTeams = async (e) => {
      (await ei(), await mo());
      const t = new Set(
        Qt.teamMembers.filter((t) => t.user_id === e && "active" === t.status).map((e) => e.team_id),
      );
      return Qt.teams.filter((e) => t.has(e.id)).map((t) => fo(t, e));
    };
    r.mockGetTeam = async (e, t) => {
      (await ei(), await mo());
      const a = to(e);
      return a
        ? (ra(t, a.audience), "private" !== a.privacy || no(e, t) || (t && ro(t)) ? fo(a, t) : null)
        : null;
    };
    r.mockUpdateTeam = async (e, t, a) => {
      (await ei(), await so(t, e));
      const i = to(t);
      return (
        null != a.name && (i.name = (0, v.sanitizeText)(a.name, 60) || i.name),
        null != a.description && (i.description = (0, v.sanitizeText)(a.description, 400)),
        null != a.logo_emoji && (i.logo_emoji = a.logo_emoji.slice(0, 4)),
        null != a.color_primary && (i.color_primary = a.color_primary),
        null != a.color_secondary && (i.color_secondary = a.color_secondary),
        null != a.home_area && (i.home_area = (0, v.sanitizeText)(a.home_area, 40) || i.home_area),
        null != a.privacy && (i.privacy = a.privacy),
        await Za(Ot, Qt.teams),
        await (0, w.logAudit)("team.updated", (0, w.actorRef)(e), { team: t.slice(-6) }),
        i
      );
    };
    r.mockGetTeamMembers = async (e, t) => {
      await ei();
      const a = to(e);
      return a
        ? (t && ra(t, a.audience),
          "private" !== a.privacy || no(e, t) || (t && ro(t))
            ? Qt.teamMembers
                .filter((t) => t.team_id === e && ("active" === t.status || "pending" === t.status))
                .sort(
                  (e, t) =>
                    go[t.role] - go[e.role] ||
                    new Date(e.joined_at ?? e.requested_at ?? 0).getTime() -
                      new Date(t.joined_at ?? t.requested_at ?? 0).getTime(),
                )
                .map((e) => {
                  const a = Qt.profiles.find((t) => t.id === e.user_id);
                  return Object.assign({}, e, {
                    games_played: tr(e.user_id).length,
                    username: a?.username ?? null,
                    avatar_url:
                      "initials" === a?.avatar_mode && e.user_id !== t ? null : (a?.avatar_url ?? null),
                  });
                })
            : [])
        : [];
    };
    const go = { owner: 4, captain: 3, co_captain: 2, manager: 1, player: 0 },
      ho = async (e, t) => (
        await ei(),
        await mo(),
        await oo(e),
        eo(t, async () => {
          const a = to(t);
          if (!a || "active" !== a.status) throw new Error("E_TEAM_NOT_FOUND");
          const i = Qt.teamMembers.find((a) => a.team_id === t && a.user_id === e);
          if (i && ("active" === i.status || "pending" === i.status)) return i;
          if ("banned" === i?.status) throw new Error("E_YOU_CAN_NO_LONGER_JOIN_THIS");
          const n = "public" === a.privacy,
            r = i ?? {
              id: ea(),
              team_id: t,
              user_id: e,
              display_name: or(e),
              role: "player",
              status: "pending",
              joined_at: null,
              requested_at: null,
            };
          return (
            (r.role = "player"),
            (r.display_name = or(e)),
            (r.status = n ? "active" : "pending"),
            (r.joined_at = n ? new Date().toISOString() : null),
            (r.requested_at = n ? null : new Date().toISOString()),
            i || Qt.teamMembers.push(r),
            await Za(Rt, Qt.teamMembers),
            n
              ? (await vo(t),
                await (0, w.logAudit)("team.member_joined", (0, w.actorRef)(e), { team: t.slice(-6) }))
              : (await co(t, (e) => ({
                  id: ea(),
                  user_id: e,
                  type: "team_join_request",
                  team_id: t,
                  team_name: a.name,
                  requester_name: r.display_name,
                  read: !1,
                  created_at: new Date().toISOString(),
                })),
                await (0, w.logAudit)("team.member_requested", (0, w.actorRef)(e), { team: t.slice(-6) })),
            r
          );
        })
      );
    r.mockJoinTeam = ho;
    r.mockJoinTeamByCode = async (e, t) => {
      (await ei(), await mo());
      const a = t.trim().toUpperCase(),
        i = Qt.teams.find((e) => e.invite_code === a);
      if (!i) throw new Error("E_INVALID_INVITE_CODE");
      return (
        ra(e, i.audience),
        "invite_only" === i.privacy
          ? eo(i.id, async () => {
              const t = Qt.teamMembers.find((t) => t.team_id === i.id && t.user_id === e);
              if (t && "active" === t.status) return t;
              const a = t ?? {
                id: ea(),
                team_id: i.id,
                user_id: e,
                display_name: or(e),
                role: "player",
                status: "active",
                joined_at: new Date().toISOString(),
                requested_at: null,
              };
              return (
                (a.status = "active"),
                (a.joined_at = new Date().toISOString()),
                t || Qt.teamMembers.push(a),
                await Za(Rt, Qt.teamMembers),
                await vo(i.id),
                await (0, w.logAudit)("team.member_joined", (0, w.actorRef)(e), {
                  team: i.id.slice(-6),
                  via: "code",
                }),
                a
              );
            })
          : ho(e, i.id)
      );
    };
    r.mockDecideJoinRequest = async (e, t, a, i) => (
      await ei(),
      await so(t, e),
      eo(t, async () => {
        const n = Qt.teamMembers.find((e) => e.id === a && e.team_id === t);
        if (!n || "pending" !== n.status) throw new Error("E_REQUEST_NOT_FOUND");
        const r = to(t);
        ((n.status = i ? "active" : "rejected"),
          (n.joined_at = i ? new Date().toISOString() : null),
          await Za(Rt, Qt.teamMembers),
          await bi({
            id: ea(),
            user_id: n.user_id,
            type: "team_request_decision",
            team_id: t,
            team_name: r.name,
            approved: i,
            read: !1,
            created_at: new Date().toISOString(),
          }),
          i && (await vo(t)),
          await (0, w.logAudit)(i ? "team.member_approved" : "team.member_rejected", (0, w.actorRef)(e), {
            team: t.slice(-6),
          }));
      })
    );
    r.mockLeaveTeam = async (e, t) => (
      await ei(),
      eo(t, async () => {
        const a = Qt.teamMembers.find((a) => a.team_id === t && a.user_id === e && "active" === a.status);
        if (a) {
          if ("owner" === a.role) throw new Error("E_TRANSFER_OWNERSHIP_BEFORE_LEAVING_THE_TEAM");
          ((a.status = "left"),
            await Za(Rt, Qt.teamMembers),
            await (0, w.logAudit)("team.member_left", (0, w.actorRef)(e), { team: t.slice(-6) }));
        }
      })
    );
    r.mockRemoveMember = async (e, t, a) => (
      await ei(),
      await so(t, e),
      eo(t, async () => {
        const i = Qt.teamMembers.find((e) => e.id === a && e.team_id === t);
        if (!i || "active" !== i.status) throw new Error("E_MEMBER_NOT_FOUND");
        if ("owner" === i.role) throw new Error("E_THE_OWNER_CANNOT_BE_REMOVED");
        const n = ro(e) ? "owner" : io(t, e);
        if (n && go[i.role] >= go[n] && "owner" !== n) throw new Error("E_YOU_CANNOT_REMOVE_A_MEMBER_OF");
        ((i.status = "removed"),
          await Za(Rt, Qt.teamMembers),
          await (0, w.logAudit)("team.member_removed", (0, w.actorRef)(e), { team: t.slice(-6) }));
      })
    );
    r.mockChangeMemberRole = async (e, t, a, i) => (
      await ei(),
      await so(t, e),
      eo(t, async () => {
        const n = Qt.teamMembers.find((e) => e.id === a && e.team_id === t && "active" === e.status);
        if (!n) throw new Error("E_MEMBER_NOT_FOUND");
        const r = ro(e) ? "owner" : io(t, e);
        if (("captain" === i || "co_captain" === i || "owner" === i) && !(0, x.isOwnerRole)(r))
          throw new Error("E_ONLY_THE_OWNER_CAN_ASSIGN_CAPTAIN");
        if ("owner" === i) {
          const e = Qt.teamMembers.find(
            (e) => e.team_id === t && "owner" === e.role && "active" === e.status,
          );
          e && (e.role = "captain");
          ((to(t).owner_id = n.user_id), await Za(Ot, Qt.teams));
        }
        ((n.role = i),
          await Za(Rt, Qt.teamMembers),
          await (0, w.logAudit)("team.role_changed", (0, w.actorRef)(e), { team: t.slice(-6), role: i }));
      })
    );
    r.mockGetTeamStats = async (e) => {
      await ei();
      const t = Qt.teamEvents.filter((t) => t.team_id === e),
        a = Qt.teamMembers.filter((t) => t.team_id === e && "active" === t.status).length;
      return (0, x.computeTeamStats)(t, a);
    };
    const yo = (e) => {
        const t = Qt.clanBattles.filter(
          (t) => "completed" === t.status && (t.from_team_id === e || t.to_team_id === e),
        );
        return { played: t.length, won: t.filter((t) => t.winner_team_id === e).length };
      },
      ko = (e, t, a) => {
        const i = yo(e);
        return (0, x.metricValuesOf)(t, a, i.played, i.won);
      },
      vo = async (e) => {
        const t = Qt.teamEvents.filter((t) => t.team_id === e),
          a = Qt.teamMembers.filter((t) => t.team_id === e && "active" === t.status).length,
          i = (0, x.computeTeamStats)(t, a),
          n = (0, x.evaluateTeamAchievements)(i, t, ko(e, i, t));
        let r = !1;
        for (const t of n) {
          if (Qt.teamAchievements.some((a) => a.team_id === e && a.achievement_key === t.key)) continue;
          (Qt.teamAchievements.push({
            id: ea(),
            team_id: e,
            achievement_key: t.key,
            unlocked_at: new Date().toISOString(),
          }),
            (r = !0),
            await (0, w.logAudit)("team.achievement_unlocked", (0, w.actorRef)(e), {
              team: e.slice(-6),
              key: t.key,
            }));
          const a = to(e)?.name ?? "Your clan";
          await _o(e, "", (i) => ({
            id: ea(),
            user_id: i,
            type: "team_badge_unlocked",
            team_id: e,
            team_name: a,
            badge_key: t.key,
            read: !1,
            created_at: new Date().toISOString(),
          }));
        }
        r && (await Za(Nt, Qt.teamAchievements));
      };
    r.mockGetTeamAchievements = async (e, t) => {
      await ei();
      const a = to(e);
      a && t && ra(t, a.audience);
      const i = new Map(
          Qt.teamAchievements.filter((t) => t.team_id === e).map((e) => [e.achievement_key, e.unlocked_at]),
        ),
        n = Qt.teamEvents.filter((t) => t.team_id === e),
        r = Qt.teamMembers.filter((t) => t.team_id === e && "active" === t.status).length,
        o = (0, x.computeTeamStats)(n, r),
        s = ko(e, o, n),
        d = x.TEAM_ACHIEVEMENTS.map((e) => ({
          key: e.key,
          emoji: e.emoji,
          unlocked: i.has(e.key),
          unlocked_at: i.get(e.key) ?? null,
          tier: e.tier,
          progress: null != e.metric ? Math.min(s[e.metric], e.threshold ?? 0) : null,
          threshold: e.threshold ?? null,
        })),
        l = (e) => (null != e.progress && e.threshold ? e.progress / e.threshold : 0);
      return d.sort((e, t) =>
        e.unlocked !== t.unlocked
          ? e.unlocked
            ? -1
            : 1
          : e.unlocked
            ? new Date(t.unlocked_at ?? 0).getTime() - new Date(e.unlocked_at ?? 0).getTime()
            : l(t) - l(e),
      );
    };
    r.mockScheduleTeamEvent = async (e, t, a) => {
      (await ei(), await so(t, e));
      const i = to(t),
        n = (0, v.sanitizeText)(a.title, 80);
      if (!n) throw new Error("E_ADD_AN_EVENT_TITLE");
      if (new Date(a.ends_at).getTime() <= new Date(a.starts_at).getTime())
        throw new Error("E_END_TIME_MUST_BE_AFTER_THE_2");
      const r = Math.max(1, Math.min(12, a.repeat_weeks ?? 1)),
        o = [];
      for (let e = 0; e < r; e++) {
        const i = 7 * e * 864e5,
          r = {
            id: ea(),
            team_id: t,
            kind: a.kind,
            title: n,
            game_id: null,
            opponent_team_id: a.opponent_team_id ?? null,
            starts_at: new Date(new Date(a.starts_at).getTime() + i).toISOString(),
            ends_at: new Date(new Date(a.ends_at).getTime() + i).toISOString(),
            result: null,
            our_score: null,
            their_score: null,
            attended_count: null,
            invited_count: Qt.teamMembers.filter((e) => e.team_id === t && "active" === e.status).length,
            created_at: new Date().toISOString(),
          };
        (Qt.teamEvents.push(r), o.push(r));
      }
      return (
        await Za(It, Qt.teamEvents),
        await _o(t, e, (e) => ({
          id: ea(),
          user_id: e,
          type: "team_announcement",
          team_id: t,
          team_name: i.name,
          summary: n,
          read: !1,
          created_at: new Date().toISOString(),
        })),
        await (0, w.logAudit)("team.event_scheduled", (0, w.actorRef)(e), {
          team: t.slice(-6),
          kind: a.kind,
          n: o.length,
        }),
        o
      );
    };
    r.mockRecordTeamResult = async (e, t, a, i, n, r, o) => {
      (await ei(), await so(t, e));
      const s = Qt.teamEvents.find((e) => e.id === a && e.team_id === t);
      if (!s) throw new Error("E_EVENT_NOT_FOUND");
      ((s.result = i),
        (s.our_score = Math.max(0, Math.round(n))),
        (s.their_score = Math.max(0, Math.round(r))),
        null != o && (s.attended_count = Math.max(0, Math.round(o))),
        await Za(It, Qt.teamEvents),
        await vo(t),
        await (0, w.logAudit)("team.result_recorded", (0, w.actorRef)(e), { team: t.slice(-6), result: i }));
    };
    r.mockGetTeamEvents = async (e, t) => {
      await ei();
      const a = to(e);
      return a && ("private" !== a.privacy || no(e, t) || (t && ro(t)))
        ? Qt.teamEvents
            .filter((t) => t.team_id === e)
            .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime())
        : [];
    };
    r.mockGetTeamCalendar = async (e, t) => {
      await ei();
      const a = to(e);
      if (!a) return { upcoming: [], past: [] };
      if (!("private" !== a.privacy || no(e, t) || (t && ro(t)))) return { upcoming: [], past: [] };
      const i = Date.now(),
        n = [],
        r = [],
        o = new Set();
      for (const t of Qt.teamEvents)
        t.team_id === e &&
          (t.game_id && o.add(t.game_id),
          (new Date(t.starts_at).getTime() > i ? n : r).push({
            id: t.id,
            kind: "event",
            starts_at: t.starts_at,
            title: t.title,
            venue: null,
            sport: a.sport ?? null,
            players: null,
            event: t,
            battle_id: null,
            game_id: t.game_id,
          }));
      let s = 0;
      for (const t of Qt.clanBattles) {
        if ("accepted" !== t.status || s >= 10) continue;
        if (t.from_team_id !== e && t.to_team_id !== e) continue;
        if ((t.game_id && o.add(t.game_id), new Date(t.starts_at).getTime() <= i)) continue;
        const a = to(t.from_team_id === e ? t.to_team_id : t.from_team_id);
        (s++,
          n.push({
            id: t.id,
            kind: "battle",
            starts_at: t.starts_at,
            title: a?.name ?? "",
            venue: t.venue_name,
            sport: t.sport,
            players: null,
            event: null,
            battle_id: t.id,
            game_id: t.game_id,
          }));
      }
      const d = new Set(
          Qt.teamMembers.filter((t) => t.team_id === e && "active" === t.status).map((e) => e.user_id),
        ),
        l = Qt.games
          .filter((e) => "cancelled" !== e.status && !o.has(e.id) && new Date(e.starts_at).getTime() > i)
          .map((e) => ({ g: e, players: Sl(e.id).filter((e) => d.has(e)).length }))
          .filter((e) => e.players > 0)
          .sort((e, t) => new Date(e.g.starts_at).getTime() - new Date(t.g.starts_at).getTime())
          .slice(0, 10);
      for (const { g: e, players: t } of l)
        n.push({
          id: e.id,
          kind: "member_game",
          starts_at: e.starts_at,
          title: e.title,
          venue: Ai(e.venue_id),
          sport: e.sport,
          players: t,
          event: null,
          battle_id: null,
          game_id: e.id,
        });
      return (
        n.sort((e, t) => new Date(e.starts_at).getTime() - new Date(t.starts_at).getTime()),
        r.sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime()),
        { upcoming: n.slice(0, 30), past: r.slice(0, 20) }
      );
    };
    r.mockGetTeamChat = async (e, t) => (
      await ei(),
      await lo(e, t),
      Qt.teamChat
        .filter((t) => t.team_id === e)
        .sort((e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime())
    );
    r.mockPostTeamChat = async (e, t, a, i, n) => {
      if ((await ei(), await lo(t, e), "system" === a)) throw new Error("E_NOT_ALLOWED");
      "announcement" === a && (await so(t, e));
      const r = (0, v.sanitizeText)(i, 1e3);
      if (!r && "image" !== a) throw new Error("E_WRITE_A_MESSAGE");
      const o = await Ya(n),
        s = {
          id: ea(),
          team_id: t,
          author_id: e,
          author_name: or(e),
          kind: a,
          body: r,
          image_url: o,
          pinned: !1,
          created_at: new Date().toISOString(),
        };
      if ((Qt.teamChat.push(s), await Za(Mt, Qt.teamChat), "announcement" === a)) {
        const a = to(t);
        await _o(t, e, (e) => ({
          id: ea(),
          user_id: e,
          type: "team_announcement",
          team_id: t,
          team_name: a.name,
          summary: r.slice(0, 60),
          read: !1,
          created_at: new Date().toISOString(),
        }));
      }
      return (
        await (0, w.logAudit)("team.chat_posted", (0, w.actorRef)(e), { team: t.slice(-6), kind: a }),
        s
      );
    };
    r.mockSetTeamBadge = async (e, t, a) => {
      if ((await ei(), await so(t, e), null != a && !Ba.test(a) && !a.startsWith(ja)))
        throw new Error("E_UNSUPPORTED_IMAGE");
      const i = to(t);
      if (!i) throw new Error("not_found");
      const n = i.logo_uri;
      ((i.logo_uri = await Ya(a)),
        n !== i.logo_uri && (await Wa(n)),
        await Za(Ot, Qt.teams),
        await (0, w.logAudit)("team.updated", (0, w.actorRef)(e), {
          team: t.slice(-6),
          badge: a ? "set" : "cleared",
        }));
    };
    r.mockPinTeamChat = async (e, t, a, i) => {
      (await ei(), await so(t, e));
      const n = Qt.teamChat.find((e) => e.id === a && e.team_id === t);
      n && ((n.pinned = i), await Za(Mt, Qt.teamChat));
    };
    r.mockDeleteTeamChat = async (e, t, a) => {
      (await ei(),
        ro(e) || (await so(t, e)),
        (Qt.teamChat = Qt.teamChat.filter((e) => !(e.id === a && e.team_id === t))),
        await Za(Mt, Qt.teamChat),
        await (0, w.logAudit)("team.chat_deleted", (0, w.actorRef)(e), { team: t.slice(-6) }));
    };
    const So = (e) => {
      const t = Qt.teamEvents
        .filter((t) => t.team_id === e && ("win" === t.result || "loss" === t.result))
        .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime());
      let a = 0,
        i = 0;
      for (const e of t) {
        if (e.result !== t[0].result) break;
        "win" === e.result ? a++ : i++;
      }
      return { win_streak: a, loss_streak: i };
    };
    (Qa.add(It), Qa.add(Rt), Qa.add(Ot));
    const Eo = async (e, t = Date.now()) => {
        const a = to(e);
        if (!a) return null;
        const i = Qt.teamEvents.filter((t) => t.team_id === e),
          n = Qt.teamMembers.filter((t) => t.team_id === e && "active" === t.status).length,
          r = (0, x.rankingScore)({ stats: (0, x.computeTeamStats)(i, n, t) });
        if (a.ladder_score === r && a.ladder_computed_at) return r;
        ((a.ladder_score = r), (a.ladder_computed_at = new Date(t).toISOString()), (Ja = !0));
        try {
          await Za(Ot, Qt.teams);
        } finally {
          Ja = !1;
        }
        return r;
      },
      bo = async (e, t) => {
        const a = Date.now();
        (await Eo(e, a), await Eo(t, a));
      },
      To = async () => {
        if (!Va) return;
        const e = Date.now();
        let t = !1;
        Ja = !0;
        try {
          for (const a of Qt.teams) {
            const i = Qt.teamEvents.filter((e) => e.team_id === a.id),
              n = Qt.teamMembers.filter((e) => e.team_id === a.id && "active" === e.status).length,
              r = (0, x.rankingScore)({ stats: (0, x.computeTeamStats)(i, n, e) });
            (a.ladder_score === r && a.ladder_computed_at) ||
              ((a.ladder_score = r), (a.ladder_computed_at = new Date(e).toISOString()), (t = !0));
          }
          t && (await Za(Ot, Qt.teams));
        } finally {
          Ja = !1;
        }
        Va = !1;
      },
      Ao = (e, t) => {
        if ("number" == typeof e.ladder_score) return e.ladder_score;
        const a = Qt.teamEvents.filter((t) => t.team_id === e.id),
          i = Qt.teamMembers.filter((t) => t.team_id === e.id && "active" === t.status).length;
        return (0, x.rankingScore)({ stats: (0, x.computeTeamStats)(a, i, t) });
      };
    r.mockGetTeamRankings = async (e = {}, t) => {
      (await ei(), await mo(), await Bo(), await To());
      const a = Date.now();
      let i = na(
        Qt.teams.filter((e) => "active" === e.status && "private" !== e.privacy),
        t,
      );
      return (
        e.sport && (i = i.filter((t) => t.sport === e.sport)),
        e.area && (i = i.filter((t) => t.home_area === e.area)),
        i
          .map((e) => {
            const t = Qt.teamEvents.filter((t) => t.team_id === e.id),
              i = Qt.teamMembers.filter((t) => t.team_id === e.id && "active" === t.status).length,
              n = (0, x.computeTeamStats)(t, i, a);
            return Object.assign({ team: e, member_count: i, score: Ao(e, a), stats: n }, So(e.id), {
              dodges: cs(e.id),
            });
          })
          .sort((e, t) => t.score - e.score)
      );
    };
    r.mockGetTeamInvite = async (e) => {
      await ei();
      const t = to(e);
      return t ? { code: t.invite_code, link: `https://playora.app/t/${t.invite_code}` } : null;
    };
    r.mockLogTeamInviteShare = async (e, t, a = "link") => {
      (await ei(),
        await (0, w.logAudit)("team.invite_shared", (0, w.actorRef)(e), { team: t.slice(-6), channel: a }));
    };
    const Do = 2592e5,
      Oo = (e = "male") => {
        const t = Qt.teams
          .filter((t) => "active" === t.status && "private" !== t.privacy && ia(t.audience, e))
          .map((e) => ({ id: e.id, score: Ao(e, Date.now()) }))
          .sort((e, t) => t.score - e.score);
        return new Map(t.map((e, t) => [e.id, { rank: t + 1, pts: e.score }]));
      },
      Ro = 30,
      Io = [
        { id: "demo:noura-almutairi", name: "Noura Al-Mutairi" },
        { id: "demo:mariam-alfadhli", name: "Mariam Al-Fadhli" },
        { id: "demo:dana-alenezi", name: "Dana Al-Enezi" },
        { id: "demo:sara-alharbi", name: "Sara Al-Harbi" },
      ],
      Mo = [
        {
          id: "wteam-0001-salwa-stars",
          name: "Salwa Stars",
          emoji: "\u2b50",
          color: "#FF9EC4",
          area: "Salwa",
          owner: "demo:noura-almutairi",
          results: ["win", "win", "loss"],
        },
        {
          id: "wteam-0002-qortuba-queens",
          name: "Qortuba Queens",
          emoji: "\ud83d\udc51",
          color: "#B79CFF",
          area: "Qortuba",
          owner: "demo:mariam-alfadhli",
          results: ["win", "loss"],
        },
        {
          id: "wteam-0003-rumaithiya-rockets",
          name: "Rumaithiya Rockets",
          emoji: "\ud83d\ude80",
          color: "#4FC3F7",
          area: "Rumaithiya",
          owner: "demo:dana-alenezi",
          results: ["loss", "draw"],
        },
        {
          id: "wteam-0004-adailiya-aces",
          name: "Adailiya Aces",
          emoji: "\ud83c\udfbe",
          color: "#1FA974",
          area: "Adailiya",
          owner: "demo:sara-alharbi",
          results: ["draw"],
        },
      ],
      No = {
        football: { format: "football_7v7", players: 14, title: "\u0633\u064a\u062f\u0627\u062a Football" },
        padel: { format: "padel_4", players: 4, title: "\u0633\u064a\u062f\u0627\u062a Padel" },
        tennis: { format: "tennis_singles", players: 2, title: "\u0633\u064a\u062f\u0627\u062a Tennis" },
      },
      Co = (e, t, a, i, n, r = "football") => {
        const o = new Date(Date.now() + 36e5 * e);
        o.setHours(n, 0, 0, 0);
        const s = No[r] ?? No.football;
        return Object.assign(
          {
            id: ea(),
            venue_id: t,
            organizer_id: a,
            audience: "female",
            title: s.title,
            sport: r,
            format: s.format,
            skill_level: "all",
            starts_at: o.toISOString(),
            ends_at: new Date(o.getTime() + 54e5).toISOString(),
            duration_minutes: 90,
            max_players: s.players,
            waitlist_capacity: Math.max(2, Math.floor(s.players / 2)),
            price_kwd: i,
            notes: "Ladies hours \xb7 female staff on duty.",
            visibility: "public",
            invite_code: null,
            approval_mode: "auto",
            status: "scheduled",
            cancellation_reason: null,
            cancelled_at: null,
          },
          Wt,
          Bt,
          Kt,
          $t,
          ge,
          { created_at: new Date().toISOString() },
        );
      },
      Po = async () => {
        const e = Date.now(),
          t = Qt.games.filter(
            (t) => "female" === t.audience && "scheduled" === t.status && new Date(t.starts_at).getTime() > e,
          ).length;
        t >= 2 ||
          (Qt.games.push(
            Co(24, "a0000000-0000-4000-8000-000000000003", "demo:noura-almutairi", 3, 18),
            Co(48, "11111111-1111-1111-1111-111111111111", "demo:mariam-alfadhli", 3.5, 19),
            Co(96, "a0000000-0000-4000-8000-000000000003", "demo:dana-alenezi", 3, 20),
            Co(120, "11111111-1111-1111-1111-111111111111", "demo:sara-alharbi", 3.5, 18),
            Co(36, "11111111-1111-1111-1111-111111111111", "demo:mariam-alfadhli", 5, 19, "padel"),
            Co(72, "a0000000-0000-4000-8000-000000000003", "demo:dana-alenezi", 4, 17, "tennis"),
          ),
          await Za(te, Qt.games));
      },
      Lo = async () => {
        if (!Fa()) return;
        if (Qt.teams.some((e) => "female" === e.audience)) return void (await Po());
        const e = new Date().toISOString();
        for (const t of Io)
          Qt.profiles.some((e) => e.id === t.id) ||
            Qt.profiles.push({
              id: t.id,
              full_name: t.name,
              avatar_url: null,
              phone: null,
              audience: "female",
              privacy_visibility: "connections",
              avatar_mode: "initials",
              media_consent: !1,
              preferred_sports: ["football", "padel"],
              skill_level: "intermediate",
              bio: null,
              role: "user",
              consent: { analytics: !1, marketing: !1 },
              consent_updated_at: null,
              created_at: e,
            });
        for (const t of Mo) {
          const a = va[t.area] ?? va.Salmiya;
          (Qt.teams.push({
            id: t.id,
            name: t.name,
            team_type: "football",
            audience: "female",
            sport: "football",
            logo_emoji: t.emoji,
            color_primary: t.color,
            color_secondary: "#0f172a",
            logo_uri: null,
            description: `${t.area} \u0633\u064a\u062f\u0627\u062a crew.`,
            home_area: t.area,
            home_lat: a[0],
            home_lng: a[1],
            privacy: "public",
            invite_code: `W${t.id.slice(-4).toUpperCase()}`,
            owner_id: t.owner,
            founded_at: e,
            status: "active",
            suspended_reason: null,
            created_at: e,
          }),
            Qt.teamMembers.push({
              id: ea(),
              team_id: t.id,
              user_id: t.owner,
              display_name: Io.find((e) => e.id === t.owner)?.name ?? "Captain",
              role: "owner",
              status: "active",
              joined_at: e,
              requested_at: null,
            }),
            t.results.forEach((a, i) => {
              const n = new Date(Date.now() - 9 * (i + 1) * 864e5);
              Qt.teamEvents.push({
                id: ea(),
                team_id: t.id,
                kind: "match",
                title: "League fixture",
                game_id: null,
                opponent_team_id: null,
                starts_at: n.toISOString(),
                ends_at: new Date(n.getTime() + 54e5).toISOString(),
                result: a,
                our_score: "win" === a ? 3 : 1,
                their_score: "win" === a || "draw" === a ? 1 : 2,
                attended_count: 8,
                invited_count: 10,
                created_at: e,
              });
            }));
        }
        (await Za(Y, Qt.profiles),
          await Za(Ot, Qt.teams),
          await Za(Rt, Qt.teamMembers),
          await Za(It, Qt.teamEvents),
          await Po());
        const t = new Date(Date.now() + 2592e5);
        (t.setHours(19, 0, 0, 0),
          Qt.clanBattles.push(
            {
              id: ea(),
              from_team_id: Es,
              to_team_id: Ss,
              sport: "football",
              format: "7v7",
              venue_name: "PSA Kuwait",
              starts_at: t.toISOString(),
              stake_pts: Ro,
              status: "pending",
              winner_team_id: null,
              score: null,
              game_id: null,
              created_at: e,
              decided_at: null,
            },
            {
              id: ea(),
              from_team_id: Ss,
              to_team_id: bs,
              sport: "football",
              format: "7v7",
              venue_name: "Salmiya Sports Hub",
              starts_at: new Date(Date.now() - 864e6).toISOString(),
              stake_pts: Ro,
              status: "completed",
              winner_team_id: Ss,
              score: "4\u20132",
              game_id: null,
              created_at: new Date(Date.now() - 11232e5).toISOString(),
              decided_at: new Date(Date.now() - 864e6).toISOString(),
            },
          ),
          await Za(Ct, Qt.clanBattles));
      },
      Go = (e) => ("football" === e ? "7v7" : "2v2"),
      Uo = [
        {
          id: "team-0001-smash",
          name: "Shuwaikh Smash",
          sport: "padel",
          area: "Shuwaikh",
          color: "#3F7DD6",
          emoji: "\ud83c\udfbe",
          results: ["win", "win", "loss", "win"],
        },
        {
          id: "team-0002-hornets",
          name: "Hawally Hornets",
          sport: "tennis",
          area: "Hawally",
          color: "#D6A11F",
          emoji: "\ud83d\udc1d",
          results: ["win", "loss", "win", "loss"],
        },
        {
          id: "team-0003-mavericks",
          name: "Mangaf Mavericks",
          sport: "football",
          area: "Mangaf",
          color: "#9A4FD6",
          emoji: "\ud83c\udccf",
          results: ["loss", "win", "loss", "loss"],
        },
        {
          id: "team-0004-lions",
          name: "Jahra Lions",
          sport: "football",
          area: "Jahra",
          color: "#C97B1F",
          emoji: "\ud83e\udd81",
          results: ["win", "win", "loss"],
        },
        {
          id: "team-0005-sabah",
          name: "Sabah Al Salem SC",
          sport: "football",
          area: "Kuwait City",
          color: "#1FA974",
          emoji: "\ud83e\udd85",
          results: ["loss", "win"],
        },
        {
          id: "team-0006-fintas",
          name: "Fintas FC",
          sport: "football",
          area: "Fahaheel",
          color: "#D6584F",
          emoji: "\ud83d\udd25",
          results: ["loss", "loss"],
        },
      ],
      xo = async () => {
        if (!Fa()) return;
        const e = [
          { id: "preview-user", name: "Faisal Al-Rashid" },
          { id: "demo:shuwaikh-smash-captain", name: "Bader Al-Shatti" },
          { id: "demo:jahra-lions-captain", name: "Talal Al-Mutairi" },
          { id: "demo:hawally-hornets-captain", name: "Yousef Al-Kandari" },
          { id: "demo:sabah-al-salem-sc-captain", name: "Salem Al-Ajmi" },
          { id: "demo:mangaf-mavericks-captain", name: "Fahad Al-Dosari" },
        ];
        let t = !1;
        for (const a of e)
          Qt.profiles.some((e) => e.id === a.id) ||
            (Qt.profiles.push({
              id: a.id,
              full_name: a.name,
              avatar_url: null,
              phone: null,
              audience: "male",
              privacy_visibility: "everyone",
              avatar_mode: "photo",
              media_consent: !0,
              preferred_sports: ["football"],
              skill_level: "intermediate",
              bio: null,
              role: "user",
              consent: { analytics: !1, marketing: !1 },
              consent_updated_at: null,
              created_at: new Date(Date.now() - 10368e6).toISOString(),
            }),
            (t = !0));
        t && (await Za(Y, Qt.profiles));
        const a = ["team-0002-hornets", "team-0005-sabah"];
        !Qt.clanBattles.some(
          (e) =>
            e.from_team_id === a[0] &&
            e.to_team_id === a[1] &&
            "accepted" === e.status &&
            "escalated" !== Qt.battleResults.find((t) => t.battle_id === e.id)?.status,
        ) &&
          to(a[0]) &&
          to(a[1]) &&
          (Qt.clanBattles.push({
            id: ea(),
            from_team_id: a[0],
            to_team_id: a[1],
            sport: "football",
            format: Go("football"),
            venue_name: "Hawally Park Pitch",
            starts_at: new Date(Date.now() - 126e5).toISOString(),
            stake_pts: Ro,
            status: "accepted",
            winner_team_id: null,
            score: null,
            game_id: null,
            created_at: new Date(Date.now() - 936e5).toISOString(),
            decided_at: new Date(Date.now() - 864e5).toISOString(),
          }),
          await Za(Ct, Qt.clanBattles));
        const i = (e, t, a) => ({
          id: ea(),
          from_team_id: e,
          to_team_id: t,
          sport: "football",
          format: Go("football"),
          venue_name: "Hawally Park Pitch",
          starts_at: vs(5, 20).toISOString(),
          stake_pts: Ro,
          status: "pending",
          winner_team_id: null,
          score: null,
          game_id: null,
          created_at: new Date(Date.now() - 3600 * a * 1e3).toISOString(),
          decided_at: null,
        });
        !Qt.clanBattles.some(
          (e) =>
            "team-0001-smash" === e.from_team_id &&
            "team-0004-lions" === e.to_team_id &&
            ("pending" === e.status || "accepted" === e.status || "declined" === e.status),
        ) &&
          to("team-0001-smash") &&
          to("team-0004-lions") &&
          (Qt.clanBattles.push(i("team-0001-smash", "team-0004-lions", 71)), await Za(Ct, Qt.clanBattles));
        !Qt.clanBattles.some(
          (e) =>
            "team-0003-mavericks" === e.from_team_id &&
            "team-0006-fintas" === e.to_team_id &&
            "expired" === e.status,
        ) &&
          to("team-0003-mavericks") &&
          to("team-0006-fintas") &&
          (Qt.clanBattles.push(i("team-0003-mavericks", "team-0006-fintas", 80)),
          await Za(Ct, Qt.clanBattles));
        const n = "team-0000-strikers",
          r = "team-0004-lions";
        if (
          !Qt.clanBattles.some(
            (e) =>
              (e.to_team_id === n || e.from_team_id === n) &&
              ("accepted" === e.status ||
                ("pending" === e.status && Date.now() - new Date(e.created_at).getTime() < 2592e5)),
          ) &&
          to(n) &&
          to(r)
        ) {
          const e = vs(5, 20);
          (Qt.clanBattles.push({
            id: ea(),
            from_team_id: r,
            to_team_id: n,
            sport: "football",
            format: Go("football"),
            venue_name: "Salmiya Sports Hub",
            starts_at: e.toISOString(),
            stake_pts: Ro,
            status: "pending",
            winner_team_id: null,
            score: null,
            game_id: null,
            created_at: new Date().toISOString(),
            decided_at: null,
          }),
            await Za(Ct, Qt.clanBattles));
        }
      },
      zo = new Set([
        "Wizard Sayidat",
        "Wizard Rajul",
        "Test Player",
        "Format Test",
        "Fahad Test Two",
        "Hosted Player",
        "Fork Test",
        "Ticket Rider",
        "Next Upman",
        "Next Sayidat",
        "Pos Player",
        "Pos Rival",
        "Pos Sayidat",
        "Test Sayidat",
        "Reset Tester",
        "Aisha Debugger",
        "Lulwa Card Tap",
        "Salma Auditor",
        "Test Signup Runthrough",
      ]),
      Ho = (e) => {
        const t = Qt.users.find((t) => t.id === e)?.email ?? "";
        if (t.endsWith("@playora.dev") || t.endsWith("@playora.demo-check.app")) return !0;
        if (/^999\d+@otp\.playora\.app$/.test(t)) return !0;
        const a = Qt.profiles.find((t) => t.id === e)?.full_name ?? "";
        return !(!zo.has(a) && !a.startsWith("hosted-"));
      },
      Fo = async () => {
        if (!Fa()) return;
        const e = [
          [
            "g0000000-0000-4000-8000-000000000001",
            [
              "demo:hassan-al-otaibi",
              "demo:shuwaikh-smash-captain",
              "demo:jahra-lions-captain",
              "demo:hawally-hornets-captain",
            ],
          ],
          [
            "g0000000-0000-4000-8000-000000000004",
            ["demo:sabah-al-salem-sc-captain", "demo:mangaf-mavericks-captain"],
          ],
          [
            "g0000000-0000-4000-8000-000000000006",
            [
              "demo:hawally-hornets-captain",
              "demo:mangaf-mavericks-captain",
              "demo:sabah-al-salem-sc-captain",
            ],
          ],
          ["g0000000-0000-4000-8000-00000000000a", ["demo:jahra-lions-captain", "demo:hassan-al-otaibi"]],
        ];
        let t = !1;
        const a = new Date().toISOString();
        for (const [i, n] of e)
          n.forEach((e, n) => {
            const r = `seedbk-${i.slice(-4)}-${n}`;
            if (Qt.bookings.some((e) => e.id === r)) return;
            const o = hi(i);
            !o ||
              ki(i) >= o.max_players - 3 ||
              (Qt.bookings.push({
                id: r,
                game_id: i,
                user_id: e,
                display_name: Td(e),
                attendance: null,
                reserved_until: null,
                status: "confirmed",
                created_at: a,
                updated_at: a,
              }),
              (t = !0));
          });
        for (const e of Qt.games)
          "scheduled" === e.status &&
            Ho(e.organizer_id) &&
            ((e.status = "cancelled"),
            (e.cancellation_reason = "test artifact swept from demo feed"),
            (e.cancelled_at = a),
            (t = !0));
        for (const e of Qt.bookings)
          ("confirmed" !== e.status && "reserved" !== e.status) ||
            Date.now() - new Date(e.created_at).getTime() < 36e5 ||
            (e.user_id && Ho(e.user_id) && ((e.status = "cancelled"), (e.updated_at = a), (t = !0)));
        t && (await Za(W, Qt.bookings).then(() => Za(te, Qt.games)));
      },
      Bo = async () => {
        if (!Fa()) return;
        (await Lo(), await mo(), await xo(), await Fo());
        const e = ["wteam-0002-qortuba-queens", "wteam-0003-rumaithiya-rockets"];
        !Qt.clanBattles.some(
          (t) =>
            t.from_team_id === e[0] &&
            t.to_team_id === e[1] &&
            "accepted" === t.status &&
            "escalated" !== Qt.battleResults.find((e) => e.battle_id === t.id)?.status,
        ) &&
          to(e[0]) &&
          to(e[1]) &&
          (Qt.clanBattles.push({
            id: ea(),
            from_team_id: e[0],
            to_team_id: e[1],
            sport: "football",
            format: Go("football"),
            venue_name: "PSA Kuwait",
            starts_at: new Date(Date.now() - 126e5).toISOString(),
            stake_pts: Ro,
            status: "accepted",
            winner_team_id: null,
            score: null,
            game_id: null,
            created_at: new Date(Date.now() - 936e5).toISOString(),
            decided_at: new Date(Date.now() - 864e5).toISOString(),
          }),
          await Za(Ct, Qt.clanBattles));
        const t = (e, t, a) => ({
          id: ea(),
          from_team_id: e,
          to_team_id: t,
          sport: "football",
          format: Go("football"),
          venue_name: "PSA Kuwait",
          starts_at: vs(0, 19).toISOString(),
          stake_pts: Ro,
          status: "pending",
          winner_team_id: null,
          score: null,
          game_id: null,
          created_at: new Date(Date.now() - 3600 * a * 1e3).toISOString(),
          decided_at: null,
        });
        !Qt.clanBattles.some(
          (e) =>
            "wteam-0001-salwa-stars" === e.from_team_id &&
            "wteam-0004-adailiya-aces" === e.to_team_id &&
            ("pending" === e.status || "accepted" === e.status || "declined" === e.status),
        ) &&
          to("wteam-0001-salwa-stars") &&
          to("wteam-0004-adailiya-aces") &&
          (Qt.clanBattles.push(t("wteam-0001-salwa-stars", "wteam-0004-adailiya-aces", 71)),
          await Za(Ct, Qt.clanBattles));
        !Qt.clanBattles.some(
          (e) =>
            "wteam-0004-adailiya-aces" === e.from_team_id &&
            "wteam-0003-rumaithiya-rockets" === e.to_team_id &&
            "expired" === e.status,
        ) &&
          to("wteam-0004-adailiya-aces") &&
          to("wteam-0003-rumaithiya-rockets") &&
          (Qt.clanBattles.push(t("wteam-0004-adailiya-aces", "wteam-0003-rumaithiya-rockets", 80)),
          await Za(Ct, Qt.clanBattles));
        let a = !1;
        for (const e of Uo) {
          if (to(e.id)) continue;
          const t = new Date(Date.now() - 13824e6).toISOString(),
            i = va[e.area] ?? va.Salmiya;
          (Qt.teams.push({
            id: e.id,
            name: e.name,
            team_type: e.sport,
            audience: "male",
            sport: e.sport,
            logo_emoji: e.emoji,
            logo_uri: null,
            color_primary: e.color,
            color_secondary: "#0f172a",
            description: `${e.area} crew looking for battles.`,
            home_area: e.area,
            home_lat: i[0],
            home_lng: i[1],
            privacy: "public",
            owner_id: ni(`${e.name} Captain`),
            invite_code: e.id.slice(-6).toUpperCase(),
            founded_at: t,
            status: "active",
            suspended_reason: null,
            created_at: t,
          }),
            Qt.teamMembers.push({
              id: ea(),
              team_id: e.id,
              user_id: ni(`${e.name} Captain`),
              display_name: `${e.name.split(" ")[0]} Captain`,
              role: "owner",
              status: "active",
              joined_at: t,
              requested_at: null,
            }),
            e.results.forEach((t, a) => {
              const i = new Date(Date.now() - 864e5 * (110 - 20 * a));
              (i.setHours(20, 0, 0, 0),
                Qt.teamEvents.push({
                  id: ea(),
                  team_id: e.id,
                  kind: "match",
                  title: `League round ${a + 1}`,
                  game_id: null,
                  opponent_team_id: null,
                  starts_at: i.toISOString(),
                  ends_at: new Date(i.getTime() + 54e5).toISOString(),
                  result: t,
                  our_score: "win" === t ? 4 : 1,
                  their_score: "win" === t ? 2 : 3,
                  attended_count: 5,
                  invited_count: 5,
                  created_at: i.toISOString(),
                }));
            }),
            (a = !0));
        }
        a && (await Promise.all([Za(Ot, Qt.teams), Za(Rt, Qt.teamMembers), Za(It, Qt.teamEvents)]));
      },
      jo = async (e) => {
        if (!Fa()) return;
        const t = "team-0003-mavericks" === e ? "team-0001-smash" : "team-0003-mavericks",
          a = Qt.clanBattles.find(
            (a) =>
              "pending" === a.status &&
              a.from_team_id === t &&
              a.to_team_id === e &&
              Date.now() > new Date(a.created_at).getTime() + Do,
          );
        if (a) {
          const e = new Date();
          (e.setDate(e.getDate() + ((5 - e.getDay() + 7) % 7 || 7)),
            e.setHours(20, 0, 0, 0),
            (a.created_at = new Date().toISOString()),
            (a.starts_at = e.toISOString()),
            await Za(Ct, Qt.clanBattles));
        }
        if (Qt.clanBattles.some((t) => t.from_team_id === e || t.to_team_id === e)) return;
        const i = to(e);
        if (!i) return;
        const n = new Date();
        (n.setDate(n.getDate() - ((n.getDay() + 1) % 7 || 7)), n.setHours(20, 0, 0, 0));
        const r = (e, t = 20) => {
            const a = new Date(Date.now() - 864e5 * e);
            return (a.setHours(t, 0, 0, 0), a);
          },
          o = new Date();
        (o.setDate(o.getDate() + ((5 - o.getDay() + 7) % 7 || 7)), o.setHours(20, 0, 0, 0));
        const s = (a, n, r, o) => ({
          id: ea(),
          from_team_id: e,
          to_team_id: t,
          sport: i.sport,
          format: Go(i.sport),
          venue_name: o,
          starts_at: a.toISOString(),
          stake_pts: Ro,
          status: "completed",
          winner_team_id: n,
          score: r,
          game_id: null,
          created_at: new Date(a.getTime() - 432e6).toISOString(),
          decided_at: a.toISOString(),
        });
        (Qt.clanBattles.push(
          s(r(135), e, "3\u20131", "Fahaheel Turf"),
          s(r(95), t, "4\u20132", "PSA Kuwait"),
          s(n, e, "5\u20133", "Fahaheel Turf"),
          {
            id: ea(),
            from_team_id: t,
            to_team_id: e,
            sport: i.sport,
            format: Go(i.sport),
            venue_name: "Fahaheel Turf",
            starts_at: o.toISOString(),
            stake_pts: Ro,
            status: "pending",
            winner_team_id: null,
            score: null,
            game_id: null,
            created_at: new Date().toISOString(),
            decided_at: null,
          },
        ),
          await Za(Ct, Qt.clanBattles));
      },
      qo = async (e, t) => {
        (Qt.teamChat.push({
          id: ea(),
          team_id: e,
          author_id: "system",
          author_name: "Rush X",
          kind: "system",
          body: t,
          image_url: null,
          pinned: !1,
          created_at: new Date().toISOString(),
        }),
          await Za(Mt, Qt.teamChat));
      },
      Yo = (e) =>
        // The store cannot reach the formatter in 1311 without pulling the i18n layer into the mock
        // backend, so the 24-hour clock is spelled out here. It matches the app default; a user who
        // switches the region setting back to 12-hour still sees this one string in 24-hour form.
        `${new Date(e).toLocaleDateString(void 0, { weekday: "short", day: "numeric", month: "short" })} \xb7 ${new Date(e).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: !1 })}`,
      Wo = (e, t, a) => {
        const i = to(e.from_team_id),
          n = to(e.to_team_id),
          r = !!t && (0, x.canManageTeam)(io(e.from_team_id, t)),
          o = !!t && (0, x.canManageTeam)(io(e.to_team_id, t)),
          s = !!t && no(e.from_team_id, t),
          d = !!t && no(e.to_team_id, t),
          l = d ? e.to_team_id : s ? e.from_team_id : null,
          c = new Date(new Date(e.created_at).getTime() + Do),
          _ = "pending" === e.status && Date.now() > c.getTime(),
          u = "pending" === e.status ? (_ ? "expired" : "pending") : e.status,
          m = (t) =>
            (t.from_team_id === e.from_team_id && t.to_team_id === e.to_team_id) ||
            (t.from_team_id === e.to_team_id && t.to_team_id === e.from_team_id),
          w = Qt.clanBattles.filter((e) => m(e) && "declined" !== e.status),
          p = w.filter((t) => new Date(t.created_at).getTime() <= new Date(e.created_at).getTime()).length,
          f = w
            .filter((t) => "completed" === t.status && t.id !== e.id)
            .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime()),
          g = l ?? e.to_team_id,
          h = f.filter((e) => e.winner_team_id === g).length,
          y = f.slice(0, 3).map((e) => {
            const t = e.winner_team_id === g,
              a = to(e.winner_team_id ?? "")?.name ?? "Clan",
              i = to(e.winner_team_id === e.from_team_id ? e.to_team_id : e.from_team_id)?.name ?? "Clan";
            return {
              date: e.starts_at,
              line: `${a.split(" ")[0]} ${e.score ?? ""} ${i.split(" ")[0]}`,
              won: t,
            };
          }),
          k = a?.get(e.from_team_id) ?? null,
          v = a?.get(e.to_team_id) ?? null;
        let S = null;
        if (k && v) {
          const t = k.rank - v.rank,
            a = e.stake_pts ?? Ro;
          t >= 3
            ? (S = { side: "from", places: t, boosted_pts: Math.round(1.5 * a) })
            : -t >= 3 && (S = { side: "to", places: -t, boosted_pts: Math.round(1.5 * a) });
        }
        return Object.assign({}, e, {
          game_id: e.game_id ?? null,
          stake_pts: e.stake_pts ?? Ro,
          from_name: i?.name ?? "Clan",
          from_color: i?.color_primary ?? "#334155",
          to_name: n?.name ?? "Clan",
          to_color: n?.color_primary ?? "#334155",
          my_team_id: l,
          direction: d ? "incoming" : s ? "outgoing" : "neutral",
          can_respond: "pending" === e.status && !_ && o && !r,
          expires_at: c.toISOString(),
          result_deadline: new Date(Vo(e)).toISOString(),
          view_status: u,
          meeting_no: p,
          is_derby: p >= 3,
          all_time: { mine: h, theirs: f.length - h },
          h2h: y,
          from_rank: k?.rank ?? null,
          from_pts: k ? Math.round(k.pts) : null,
          to_rank: v?.rank ?? null,
          to_pts: v ? Math.round(v.pts) : null,
          underdog: S,
        });
      };
    r.mockGetClanBattles = async (e) => {
      (await ei(), await ls(), await Bo());
      const t = Qt.teamMembers.filter((t) => t.user_id === e && "active" === t.status).map((e) => e.team_id);
      t.length > 0 && (await jo(t[0]));
      const a = new Set(t),
        i = Oo(aa(e)),
        n = (e) =>
          "pending" === e.status ? 0 : "accepted" === e.status ? 1 : "completed" === e.status ? 2 : 3;
      return Qt.clanBattles
        .filter((e) => a.has(e.from_team_id) || a.has(e.to_team_id))
        .map((t) => Wo(t, e, i))
        .sort((e, t) => n(e) - n(t) || new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
    };
    r.mockGetRecentBattleResults = async (e, t = 6) => {
      (await ei(), await Bo());
      const a = aa(e),
        i = (e) => {
          const t = to(e);
          return t && "active" === t.status && "private" !== t.privacy && ia(t.audience, a) ? t : null;
        },
        n = [];
      for (const e of Qt.clanBattles) {
        if ("completed" !== e.status || !e.score) continue;
        const t = i(e.from_team_id),
          a = i(e.to_team_id);
        if (!t || !a) continue;
        const r = null == e.winner_team_id,
          o = r || e.winner_team_id === t.id ? t : a,
          s = r || o.id === t.id ? a : t;
        n.push({
          battle_id: e.id,
          winner_name: o.name,
          winner_color: o.color_primary,
          loser_name: s.name,
          loser_color: s.color_primary,
          score: e.score,
          decided_at: e.decided_at ?? e.starts_at,
          draw: r,
        });
      }
      return n
        .sort((e, t) => new Date(t.decided_at).getTime() - new Date(e.decided_at).getTime())
        .slice(0, Math.min(Math.max(1, t), 8));
    };
    r.mockGetTeamBattles = async (e, t, a = "all") => {
      (await ei(), await ls(), await Bo());
      const i = { battles: [], summary: { played: 0, won: 0, lost: 0, drawn: 0 } },
        n = to(t);
      if (!n) return i;
      ra(e, n.audience);
      const r = no(t, e);
      if ("private" === n.privacy && !r && !ro(e)) return i;
      const o = Oo(n.audience),
        s = Qt.clanBattles.filter((e) => e.from_team_id === t || e.to_team_id === t).map((t) => Wo(t, e, o)),
        d = s.filter((e) => "completed" === e.view_status),
        l = d.filter((e) => e.winner_team_id === t).length,
        c = d.filter((e) => null == e.winner_team_id).length,
        _ = { played: d.length, won: l, lost: d.length - l - c, drawn: c };
      return {
        battles: s
          .filter(
            (e) =>
              "all" === a ||
              ("pending" === a
                ? "pending" === e.view_status || "accepted" === e.view_status
                : "completed" === e.view_status &&
                  ("won" === a
                    ? e.winner_team_id === t
                    : null != e.winner_team_id && e.winner_team_id !== t)),
          )
          .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime())
          .slice(0, 40),
        summary: _,
      };
    };
    r.mockGetClanBattle = async (e, t) => {
      (await ei(), await Bo());
      const a = Qt.clanBattles.find((t) => t.id === e);
      if (!a) return null;
      const i = to(a.from_team_id);
      return (i && ra(t, i.audience), Wo(a, t, Oo(aa(t))));
    };
    const Ko = (e, t) => {
        const a = to(e)?.audience ?? "male",
          i = Qt.teams
            .filter((e) => "active" === e.status && "private" !== e.privacy && ia(e.audience, a))
            .map((e) => ({ id: e.id, pts: Ao(e, Date.now()) }))
            .sort((e, t) => t.pts - e.pts),
          n = new Map();
        return (
          i.forEach((a, i) => {
            (a.id !== e && a.id !== t) || n.set(a.id, { rank: i + 1, pts: a.pts });
          }),
          n
        );
      },
      $o = (e) => {
        const t = e.game_id ? hi(e.game_id) : null;
        return t ? new Date(t.ends_at).getTime() : new Date(e.starts_at).getTime() + 54e5;
      },
      Vo = (e) => new Date(e.starts_at).getTime() + 6048e5,
      Jo = (e, t) =>
        (0, x.canManageTeam)(io(t.from_team_id, e))
          ? "from"
          : (0, x.canManageTeam)(io(t.to_team_id, e))
            ? "to"
            : null,
      Qo = (e) => Qt.battleResults.find((t) => t.battle_id === e),
      Zo = async (e, t, a) => {
        const i = a ? [a] : ["from", "to"];
        for (const a of i) {
          const i = "from" === a ? e.from_team_id : e.to_team_id,
            n = to(i);
          if (!n) continue;
          const r = Qt.teamMembers.filter(
            (e) => e.team_id === i && "active" === e.status && (0, x.canManageTeam)(e.role),
          );
          for (const e of r)
            await bi({
              id: ea(),
              user_id: e.user_id,
              type: "team_announcement",
              team_id: i,
              team_name: n.name,
              summary: t,
              read: !1,
              created_at: new Date().toISOString(),
            });
        }
      },
      Xo = async () => {
        let e = !1;
        for (const t of Qt.battleResults) {
          if ("awaiting_opponent" !== t.status) continue;
          const a = Qt.clanBattles.find((e) => e.id === t.battle_id);
          if (!a) continue;
          const i = Date.now() - new Date(t.submitted_at).getTime();
          if (i > 2592e5)
            ((t.status = "escalated"),
              (t.resolved_at = null),
              (e = !0),
              await Zo(
                a,
                `${to(a.from_team_id)?.name} vs ${to(a.to_team_id)?.name} \u2014 result escalated to Rush X support`,
              ),
              await (0, w.logAudit)("battle.result_escalated", null, {
                battle: a.id.slice(-6),
                reason: "timeout",
              }));
          else if (i > 1728e5 && !t.nudged_at) {
            ((t.nudged_at = new Date().toISOString()), (e = !0));
            const i = t.submitted_team_id === a.from_team_id ? "to" : "from";
            (await Zo(a, "The other captain has entered their score \u2014 enter yours, 24h left", i),
              await (0, w.logAudit)("battle.result_nudged", null, { battle: a.id.slice(-6) }));
          }
        }
        e && (await Za(Pt, Qt.battleResults));
      };
    r.mockAgeBattleForTest = async (e, t) => {
      await ei();
      const a = Qt.clanBattles.find((t) => t.id === e);
      return (
        !!a &&
        ((a.starts_at = new Date(Date.now() - 24 * t * 3600 * 1e3).toISOString()),
        await Za(Ct, Qt.clanBattles),
        !0)
      );
    };
    r.mockRunSubmissionSweep = async () => {
      (await ei(), await es());
    };
    const es = async () => {
      const e = Date.now(),
        t = Qt.clanBattles
          .filter((t) => "accepted" === t.status && Vo(t) <= e)
          .sort((e, t) => new Date(e.starts_at).getTime() - new Date(t.starts_at).getTime())
          .slice(0, 200);
      if (0 === t.length) return;
      let a = !1,
        i = !1;
      for (const n of t) {
        const t = Qo(n.id);
        (!t || ("confirmed" !== t.status && "escalated" !== t.status)) &&
          (t
            ? ((t.status = "escalated"),
              (t.resolved_at = null),
              (i = !0),
              await Zo(
                n,
                `${to(n.from_team_id)?.name} vs ${to(n.to_team_id)?.name} \u2014 the result deadline passed with one score in, sent to Rush X support`,
              ),
              await (0, w.logAudit)("battle.result_escalated", null, {
                battle: n.id.slice(-6),
                reason: "deadline_one_sided",
              }))
            : ((n.status = "unplayed"),
              (n.decided_at = new Date(e).toISOString()),
              (a = !0),
              await Zo(
                n,
                `${to(n.from_team_id)?.name} vs ${to(n.to_team_id)?.name} \u2014 closed unplayed, no score was submitted`,
              ),
              await (0, w.logAudit)("battle.closed_unplayed", null, { battle: n.id.slice(-6) })));
      }
      (i && (await Za(Pt, Qt.battleResults)), a && (await Za(Ct, Qt.clanBattles)));
    };
    r.mockGetBattleResult = async (e, t) => {
      (await ei(), await Xo());
      const a = Qt.clanBattles.find((e) => e.id === t);
      if (!a) throw new Error("E_CHALLENGE_NOT_FOUND");
      const i = to(a.from_team_id);
      i && ra(e, i.audience);
      const n = Qo(t);
      if (!n) return null;
      const r = Jo(e, a),
        o = "from" === r ? a.from_team_id : "to" === r ? a.to_team_id : null,
        s = !!o && n.submitted_team_id === o,
        d = null != n.opponent_entry_home && null != n.opponent_entry_away,
        l = "confirmed" === n.status || d,
        c = o
          ? s
            ? { home: n.submitted_home_score, away: n.submitted_away_score }
            : null != n.opponent_entry_home && null != n.opponent_entry_away
              ? { home: n.opponent_entry_home, away: n.opponent_entry_away }
              : null
          : null,
        _ = o
          ? s
            ? null != n.opponent_entry_home && null != n.opponent_entry_away
              ? { home: n.opponent_entry_home, away: n.opponent_entry_away }
              : null
            : null != n.submitted_home_score && null != n.submitted_away_score
              ? { home: n.submitted_home_score, away: n.submitted_away_score }
              : null
          : null;
      return l
        ? Object.assign({}, n, {
            my_entry: c,
            their_entry: _,
            awaiting_me: !1,
            attempt: n.cycle,
            max_attempts: 3,
          })
        : Object.assign({}, n, {
            submitted_home_score: s ? n.submitted_home_score : null,
            submitted_away_score: s ? n.submitted_away_score : null,
            opponent_entry_home: null,
            opponent_entry_away: null,
            my_entry: c,
            their_entry: null,
            awaiting_me: !!o && !s,
            attempt: n.cycle,
            max_attempts: 3,
          });
    };
    const ts = (e) => {
      if (!Number.isInteger(e) || e < 0 || e > 99) throw new Error("E_ENTER_A_REAL_SCORE");
    };
    r.mockSubmitBattleResult = async (e, t, a, i) => {
      (await ei(), await Xo());
      const n = Qt.clanBattles.find((e) => e.id === t);
      if (!n) throw new Error("E_CHALLENGE_NOT_FOUND");
      const r = Qo(t);
      if ("confirmed" === r?.status) throw new Error("E_THIS_RESULT_IS_FINAL");
      if ("escalated" === r?.status) throw new Error("E_THIS_RESULT_IS_WITH_PLAYORA_SUPPORT");
      if ("accepted" !== n.status) throw new Error("E_ONLY_PLAYED_BATTLES_CAN_HAVE_A");
      (ts(a), ts(i));
      const o = to(n.from_team_id);
      if ((o && ra(e, o.audience), Date.now() < $o(n))) throw new Error("E_THE_BATTLE_HAS_NOT_FINISHED_YET");
      const s = Jo(e, n);
      if (!s)
        throw (
          await (0, w.logAudit)("battle.result_denied", (0, w.actorRef)(e), { battle: t.slice(-6) }),
          new Error("E_ONLY_A_PARTICIPATING_CLAN_S_OWNER_3")
        );
      const d = Qo(t);
      if (d) {
        if ("confirmed" === d.status) throw new Error("E_THIS_RESULT_IS_FINAL");
        if ("escalated" === d.status) throw new Error("E_THIS_RESULT_IS_WITH_PLAYORA_SUPPORT");
        if ("awaiting_opponent" === d.status) {
          const r = "from" === s ? n.from_team_id : n.to_team_id;
          return d.submitted_team_id === r
            ? ((d.submitted_home_score = a),
              (d.submitted_away_score = i),
              (d.submitted_at = new Date().toISOString()),
              await Za(Pt, Qt.battleResults),
              await (0, w.logAudit)("battle.result_submitted", (0, w.actorRef)(e), {
                battle: t.slice(-6),
                changed: !0,
              }),
              d)
            : is(e, t, a, i);
        }
        if (d.cycle >= 3) throw new Error("E_THIS_RESULT_IS_WITH_PLAYORA_SUPPORT");
        return (
          (d.submitted_by = e),
          (d.submitted_team_id = "from" === s ? n.from_team_id : n.to_team_id),
          (d.submitted_home_score = a),
          (d.submitted_away_score = i),
          (d.status = "awaiting_opponent"),
          (d.opponent_entry_home = null),
          (d.opponent_entry_away = null),
          (d.cycle = d.cycle + 1),
          (d.nudged_at = null),
          (d.submitted_at = new Date().toISOString()),
          await Za(Pt, Qt.battleResults),
          await Zo(
            n,
            "A new score has been entered \u2014 enter yours to settle it",
            d.submitted_team_id === n.from_team_id ? "to" : "from",
          ),
          await (0, w.logAudit)("battle.result_submitted", (0, w.actorRef)(e), {
            battle: t.slice(-6),
            cycle: d.cycle,
          }),
          d
        );
      }
      const l = {
        battle_id: t,
        submitted_by: e,
        submitted_team_id: "from" === s ? n.from_team_id : n.to_team_id,
        submitted_home_score: a,
        submitted_away_score: i,
        status: "awaiting_opponent",
        opponent_entry_home: null,
        opponent_entry_away: null,
        cycle: 1,
        nudged_at: null,
        submitted_at: new Date().toISOString(),
        resolved_at: null,
      };
      return (
        Qt.battleResults.push(l),
        await Za(Pt, Qt.battleResults),
        await Zo(
          n,
          "The other captain has entered the score \u2014 enter yours to settle it",
          l.submitted_team_id === n.from_team_id ? "to" : "from",
        ),
        await (0, w.logAudit)("battle.result_submitted", (0, w.actorRef)(e), {
          battle: t.slice(-6),
          cycle: 1,
        }),
        l
      );
    };
    const as = async (e, t) => {
        (await ei(), await Xo());
        const a = Qt.clanBattles.find((e) => e.id === t);
        if (!a) throw new Error("E_CHALLENGE_NOT_FOUND");
        const i = Qo(t);
        if (!i) throw new Error("E_NO_RESULT_SUBMITTED_YET");
        if ("confirmed" === i.status) return i;
        if ("awaiting_opponent" !== i.status) throw new Error("E_THIS_RESULT_IS_WITH_PLAYORA_SUPPORT");
        const n = Jo(e, a);
        if (!n)
          throw (
            await (0, w.logAudit)("battle.result_denied", (0, w.actorRef)(e), { battle: t.slice(-6) }),
            new Error("E_ONLY_A_PARTICIPATING_CLAN_S_OWNER")
          );
        if (("from" === n ? a.from_team_id : a.to_team_id) === i.submitted_team_id)
          throw new Error("E_THE_OPPOSING_CLAN_MUST_CONFIRM_NOT");
        const r = i.submitted_home_score,
          o = i.submitted_away_score,
          s = r > o ? a.from_team_id : o > r ? a.to_team_id : null,
          d = new Date($o(a)).toISOString(),
          l = Ko(a.from_team_id, a.to_team_id),
          c = (e, t, i, n) => ({
            id: ea(),
            team_id: e,
            kind: "match",
            title: `Gauntlet: ${to(e)?.name} vs ${to(t)?.name}`,
            game_id: a.game_id,
            opponent_team_id: t,
            starts_at: a.starts_at,
            ends_at: d,
            result: i > n ? "win" : i < n ? "loss" : "draw",
            our_score: i,
            their_score: n,
            attended_count: null,
            invited_count: null,
            created_at: new Date().toISOString(),
          });
        (Qt.teamEvents.push(c(a.from_team_id, a.to_team_id, r, o), c(a.to_team_id, a.from_team_id, o, r)),
          await bo(a.from_team_id, a.to_team_id));
        const _ = Ko(a.from_team_id, a.to_team_id);
        ((i.award_snapshot = {
          from_pts_before: l.get(a.from_team_id)?.pts ?? 0,
          from_pts_after: _.get(a.from_team_id)?.pts ?? 0,
          from_rank_before: l.get(a.from_team_id)?.rank ?? 0,
          from_rank_after: _.get(a.from_team_id)?.rank ?? 0,
          to_pts_before: l.get(a.to_team_id)?.pts ?? 0,
          to_pts_after: _.get(a.to_team_id)?.pts ?? 0,
          to_rank_before: l.get(a.to_team_id)?.rank ?? 0,
          to_rank_after: _.get(a.to_team_id)?.rank ?? 0,
          winner_pts_to_next: s
            ? ((e) => {
                const t = _.get(e);
                if (!t || t.rank <= 1) return null;
                const a = to(e)?.audience ?? "male",
                  i = Qt.teams
                    .filter((e) => "active" === e.status && "private" !== e.privacy && ia(e.audience, a))
                    .map((e) => ({ id: e.id, pts: Ao(e, Date.now()) }))
                    .sort((e, t) => t.pts - e.pts)[t.rank - 2];
                return i ? Math.max(1, i.pts - t.pts) : null;
              })(s)
            : null,
        }),
          (i.ceremony_seen = []),
          (a.status = "completed"),
          (a.winner_team_id = s),
          (a.score = `${r}\u2013${o}`),
          (a.decided_at = new Date().toISOString()),
          (i.status = "confirmed"),
          (i.resolved_at = new Date().toISOString()),
          await Promise.all([Za(It, Qt.teamEvents), Za(Ct, Qt.clanBattles), Za(Pt, Qt.battleResults)]));
        const u = (s ? to(s)?.name : null)
          ? `Result confirmed \u2014 ${to(a.from_team_id)?.name} ${r}\u2013${o} ${to(a.to_team_id)?.name}`
          : `Final ${r}\u2013${o} \u2014 draw, no stake moves`;
        for (const e of [a.from_team_id, a.to_team_id]) {
          const t = to(e);
          if (t)
            for (const a of Qt.teamMembers.filter((t) => t.team_id === e && "active" === t.status))
              await bi({
                id: ea(),
                user_id: a.user_id,
                type: "team_announcement",
                team_id: e,
                team_name: t.name,
                summary: u,
                read: !1,
                created_at: new Date().toISOString(),
              });
        }
        return (
          await vo(a.from_team_id),
          await vo(a.to_team_id),
          await (0, w.logAudit)("battle.result_confirmed", (0, w.actorRef)(e), { battle: t.slice(-6) }),
          i
        );
      },
      is = async (e, t, a, i) => {
        (await ei(), await Xo());
        const n = Qt.clanBattles.find((e) => e.id === t);
        if (!n) throw new Error("E_CHALLENGE_NOT_FOUND");
        const r = Qo(t);
        if (!r) throw new Error("E_NO_RESULT_SUBMITTED_YET");
        if ("confirmed" === r.status) throw new Error("E_THIS_RESULT_IS_FINAL");
        if ("awaiting_opponent" !== r.status) throw new Error("E_THIS_RESULT_IS_WITH_PLAYORA_SUPPORT");
        (ts(a), ts(i));
        const o = Jo(e, n);
        if (!o)
          throw (
            await (0, w.logAudit)("battle.result_denied", (0, w.actorRef)(e), { battle: t.slice(-6) }),
            new Error("E_ONLY_A_PARTICIPATING_CLAN_S_OWNER_2")
          );
        if (("from" === o ? n.from_team_id : n.to_team_id) === r.submitted_team_id)
          throw new Error("E_THE_OPPOSING_CLAN_MUST_RESPOND_NOT");
        return a === r.submitted_home_score && i === r.submitted_away_score
          ? as(e, t)
          : ((r.opponent_entry_home = a),
            (r.opponent_entry_away = i),
            r.cycle >= 3
              ? ((r.status = "escalated"),
                await Za(Pt, Qt.battleResults),
                await Zo(n, "Scores don\u2019t match again \u2014 the result is with Rush X support"),
                await (0, w.logAudit)("battle.result_escalated", (0, w.actorRef)(e), {
                  battle: t.slice(-6),
                  reason: "second_mismatch",
                }),
                r)
              : ((r.status = "disputed"),
                await Za(Pt, Qt.battleResults),
                await Zo(
                  n,
                  `Scores don\u2019t match \u2014 talk to each other, then re-enter (attempt ${r.cycle} of 3)`,
                ),
                await (0, w.logAudit)("battle.result_disputed", (0, w.actorRef)(e), { battle: t.slice(-6) }),
                r));
      };
    r.mockCounterBattleResult = is;
    r.mockGetPendingCeremony = async (e) => {
      await ei();
      const t = Zd(e);
      if (0 === t.size) return null;
      const a = Qt.battleResults
        .filter((t) => "confirmed" === t.status && !(t.ceremony_seen ?? []).includes(e))
        .map((e) => ({ rr: e, b: Qt.clanBattles.find((t) => t.id === e.battle_id) }))
        .filter(({ b: e }) => !!e && (t.has(e.from_team_id) || t.has(e.to_team_id)))
        .sort(
          (e, t) => new Date(t.rr.resolved_at ?? 0).getTime() - new Date(e.rr.resolved_at ?? 0).getTime(),
        );
      return a[0]?.rr.battle_id ?? null;
    };
    r.mockMarkCeremonySeen = async (e, t) => {
      await ei();
      const a = Qo(t);
      a &&
        ((a.ceremony_seen = [...new Set([...(a.ceremony_seen ?? []), e])]), await Za(Pt, Qt.battleResults));
    };
    const ns = async (e, t) => {
        const a = Qt.profiles.find((e) => e.id === t)?.full_name;
        if (!a) return;
        const i = Kd(t);
        for (const t of i)
          aa(t) === e.audience &&
            (Fi(e.id).includes(t) ||
              (await bi({
                id: ea(),
                user_id: t,
                type: "friend_activity",
                game_id: e.id,
                friend_name: a,
                venue_name: Ai(e.venue_id),
                sport: e.sport,
                read: !1,
                created_at: new Date().toISOString(),
              })));
      },
      rs = async (e) => {
        const t = e.game_id ? hi(e.game_id) : null;
        (await bi({
          id: ea(),
          user_id: e.payer_id,
          type: "payment_confirmation",
          game_id: t?.id ?? "g0000000-0000-4000-8000-000000000000",
          venue_name: t ? Ai(t.venue_id) : "Rush X",
          amount_kwd: e.amount_kwd,
          read: !1,
          created_at: new Date().toISOString(),
        }),
          t &&
            t.organizer_id !== e.payer_id &&
            (await bi({
              id: ea(),
              user_id: t.organizer_id,
              type: "payment_received",
              game_id: t.id,
              payer_name: e.payer_name ?? "A player",
              amount_kwd: e.amount_kwd,
              read: !1,
              created_at: new Date().toISOString(),
            })));
      },
      os = Number(("undefined" != typeof process && process.env?.PLAYORA_REMINDER_LEAD_MS) || 108e5),
      ss = async () => {
        const e = Date.now();
        let t = 0;
        for (const a of gi()) {
          if ("scheduled" !== a.status) continue;
          const i = new Date(a.starts_at).getTime() - e;
          if (i <= 0 || i > os) continue;
          const n = Math.max(1, Math.round(i / 6e4));
          for (const e of Fi(a.id)) {
            Qt.notifications.some(
              (t) => "match_reminder" === t.type && t.user_id === e && t.game_id === a.id,
            ) ||
              (await bi({
                id: ea(),
                user_id: e,
                type: "match_reminder",
                game_id: a.id,
                venue_name: Ai(a.venue_id),
                sport: a.sport,
                minutes_until: n,
                read: !1,
                created_at: new Date().toISOString(),
              }),
              (t += 1));
          }
        }
        return t;
      },
      ds = async () => {
        let e = 0;
        for (const t of gi()) {
          if ("cancelled" === t.status) continue;
          if (new Date(t.ends_at).getTime() > Date.now()) continue;
          const a = await Dl(t);
          if (a && !a.published)
            if (Date.now() >= new Date(a.closes_at).getTime()) (await Rl(t, a), (e += 1));
            else if (!a.close_nudged) {
              const e = new Date(a.closes_at).getTime() - Date.now();
              if (e > 0 && e <= 108e5) {
                ((a.close_nudged = !0), await Za(Qe, Qt.awardVoting));
                const e = Ai(t.venue_id);
                for (const a of Sl(t.id))
                  await bi({
                    id: ea(),
                    user_id: a,
                    type: "award_voting_closing",
                    game_id: t.id,
                    venue_name: e,
                    sport: t.sport,
                    read: !1,
                    created_at: new Date().toISOString(),
                  });
              }
            }
        }
        return e;
      };
    r.mockRunScheduledWork = async () => {
      await ei();
      const e = [];
      for (const [t, a] of [
        ["series", Yn],
        ["bookings", Cr],
        ["payments", Zr],
        ["reconcile", Jr],
        ["gauntlets", ls],
        ["submissions", es],
        ["squads", Vi],
        ["awards", ds],
        ["demo", mi],
      ])
        try {
          (await a(), e.push(t));
        } catch (e) {
          console.error(`[clock] ${t} sweep failed:`, e instanceof Error ? e.message : e);
        }
      const t = await ss();
      return (t && e.push(`reminders:${t}`), { reminders: t, ran: e });
    };
    const ls = async () => {
        let e = !1;
        for (const t of Qt.clanBattles) {
          if ("pending" !== t.status) continue;
          const a = new Date(t.created_at).getTime() + Do,
            i = a - Date.now(),
            n = `${to(t.from_team_id)?.name} vs ${to(t.to_team_id)?.name}`;
          i <= 0
            ? ((t.status = "expired"),
              (t.decided_at = new Date(a).toISOString()),
              (e = !0),
              await Zo(t, `The shot clock ran out \u2014 ${to(t.to_team_id)?.name} dodged the gauntlet`),
              await (0, w.logAudit)("clan.gauntlet_dodged", null, { battle: t.id.slice(-6) }))
            : i <= 72e5 && !t.nudge2_at
              ? ((t.nudge2_at = new Date().toISOString()),
                (e = !0),
                await Zo(
                  t,
                  `FINAL WARNING \u2014 under 2h on the shot clock: ${n}. Answer or it counts as a dodge`,
                  "to",
                ),
                await (0, w.logAudit)("clan.gauntlet_warned", null, { battle: t.id.slice(-6), window: "2h" }))
              : i <= 864e5 &&
                !t.nudge24_at &&
                ((t.nudge24_at = new Date().toISOString()),
                (e = !0),
                await Zo(
                  t,
                  `24h left on the shot clock: ${n}. Accept or decline \u2014 silence is a dodge`,
                  "to",
                ),
                await (0, w.logAudit)("clan.gauntlet_warned", null, {
                  battle: t.id.slice(-6),
                  window: "24h",
                }));
        }
        e && (await Za(Ct, Qt.clanBattles));
      },
      cs = (e) => Qt.clanBattles.filter((t) => t.to_team_id === e && "expired" === t.status).length;
    r.mockGetH2HMap = async (e, t) => {
      await ei();
      const a = to(t);
      if (!a) throw new Error("not_found");
      ra(e, a.audience);
      const i = {},
        n = Qt.clanBattles
          .filter((e) => "completed" === e.status && (e.from_team_id === t || e.to_team_id === t))
          .sort(
            (e, t) =>
              new Date(e.decided_at ?? e.created_at).getTime() -
              new Date(t.decided_at ?? t.created_at).getTime(),
          );
      for (const e of n) {
        const a = e.from_team_id === t ? e.to_team_id : e.from_team_id,
          n = (i[a] ??= { mine: 0, theirs: 0, draws: 0, meetings: 0, last: null });
        ((n.meetings += 1),
          e.winner_team_id === t ? (n.mine += 1) : e.winner_team_id === a ? (n.theirs += 1) : (n.draws += 1));
        const [r, o] = (e.score ?? "0\u20130").split("\u2013").map((e) => parseInt(e, 10) || 0),
          s = e.from_team_id === t;
        n.last = {
          my_score: s ? r : o,
          their_score: s ? o : r,
          won: null == e.winner_team_id ? null : e.winner_team_id === t,
          at: e.decided_at ?? e.created_at,
        };
      }
      return i;
    };
    r.mockGetEscalatedBattleResults = async (e) => {
      if ((await ei(), await Xo(), !ro(e)))
        throw (
          await (0, w.logAudit)("admin.access_denied", (0, w.actorRef)(e), { area: "battle_results" }),
          new Error("E_ADMINS_ONLY")
        );
      return Qt.battleResults
        .filter((e) => "escalated" === e.status)
        .map((e) => {
          const t = Qt.clanBattles.find((t) => t.id === e.battle_id);
          return Object.assign({}, e, {
            from_name: (t && to(t.from_team_id)?.name) ?? "?",
            to_name: (t && to(t.to_team_id)?.name) ?? "?",
          });
        });
    };
    r.mockSendClanChallenge = async (e, t, a, i, n) => {
      if ((await ei(), await Bo(), t === a)) throw new Error("E_A_CLAN_CANNOT_CHALLENGE_ITSELF");
      const r = to(t),
        o = to(a);
      if (!r || !o) throw new Error("E_CLAN_NOT_FOUND");
      if ((ra(e, r.audience), !ia(r.audience, o.audience))) throw new Error(ta);
      if (!(0, x.canManageTeam)(io(t, e)))
        throw (
          await (0, w.logAudit)("clan.challenge_denied", (0, w.actorRef)(e), { from: t.slice(-6) }),
          new Error("E_ONLY_THE_CLAN_OWNER_OR_CAPTAINS_2")
        );
      const s = (e) =>
          (e.from_team_id === t && e.to_team_id === a) || (e.from_team_id === a && e.to_team_id === t),
        d = Date.now();
      if (Qt.clanBattles.some((e) => "pending" === e.status && s(e)))
        throw new Error("E_THERE_IS_ALREADY_A_PENDING_CHALLENGE");
      if (Qt.clanBattles.some((e) => "accepted" === e.status && s(e) && new Date(e.starts_at).getTime() > d))
        throw new Error("E_YOU_ALREADY_HAVE_A_BATTLE_BOOKED_WITH_THIS_CLAN");
      const l = {
        id: ea(),
        from_team_id: t,
        to_team_id: a,
        sport: r.sport,
        format: Go(r.sport),
        venue_name: (0, v.sanitizeText)(n, 60) || "TBD",
        starts_at: i,
        stake_pts: Ro,
        status: "pending",
        winner_team_id: null,
        score: null,
        game_id: null,
        created_at: new Date().toISOString(),
        decided_at: null,
      };
      return (
        Qt.clanBattles.push(l),
        await Za(Ct, Qt.clanBattles),
        await (0, w.logAudit)("clan.challenge_sent", (0, w.actorRef)(e), {
          from: t.slice(-6),
          to: a.slice(-6),
        }),
        await qo(
          t,
          `\u2694\ufe0f We threw a gauntlet at ${o.name} \u2014 ${Yo(l.starts_at)} \xb7 ${l.venue_name}`,
        ),
        await qo(a, `\u2694\ufe0f ${r.name} challenged us \u2014 answer on the battle board`),
        await bi({
          id: ea(),
          user_id: o.owner_id,
          type: "challenge_received",
          team_id: a,
          battle_id: l.id,
          other_clan_name: r.name,
          stake_pts: l.stake_pts,
          read: !1,
          created_at: new Date().toISOString(),
        }),
        Wo(l, e)
      );
    };
    r.mockRespondClanChallenge = async (e, t, a) => {
      await ei();
      const i = Qt.clanBattles.find((e) => e.id === t);
      if (!i) throw new Error("E_CHALLENGE_NOT_FOUND");
      if ("pending" !== i.status) throw new Error("E_THIS_CHALLENGE_WAS_ALREADY_ANSWERED");
      const n = to(i.from_team_id),
        r = to(i.to_team_id);
      if (n && r && !ia(n.audience, r.audience)) throw new Error(ta);
      if (Date.now() > new Date(i.created_at).getTime() + Do)
        throw new Error("E_THE_SHOT_CLOCK_RAN_OUT_THIS");
      if (!(0, x.canManageTeam)(io(i.to_team_id, e)))
        throw (
          await (0, w.logAudit)("clan.respond_denied", (0, w.actorRef)(e), { battle: t.slice(-6) }),
          new Error("E_ONLY_THE_CHALLENGED_CLAN_S_OWNER")
        );
      ((i.status = a ? "accepted" : "declined"), (i.decided_at = new Date().toISOString()));
      const o = to(i.from_team_id),
        s = to(i.to_team_id);
      if (a && o && s) {
        const t = fi(),
          a =
            t.find((e) => e.name.toLowerCase() === i.venue_name.toLowerCase()) ??
            t.find((e) => e.sports.includes(i.sport)) ??
            t[0],
          n = i.format.includes("11") ? 22 : i.format.includes("5") ? 10 : "football" === i.sport ? 14 : 4,
          r = Object.assign(
            {
              id: ea(),
              venue_id: a?.id ?? "",
              organizer_id: e,
              audience: o.audience,
              title: `Clan battle: ${o.name} vs ${s.name}`,
              sport: i.sport,
              format: Ia(i.sport, n),
              skill_level: "all",
              starts_at: i.starts_at,
              ends_at: new Date(new Date(i.starts_at).getTime() + 54e5).toISOString(),
              duration_minutes: 90,
              max_players: n,
              waitlist_capacity: Ma(n),
              price_kwd: 3.5,
              notes: `The gauntlet: ${o.name} vs ${s.name}. Winner takes ${i.stake_pts} clan pts on the ladder.`,
              visibility: "public",
              invite_code: null,
              approval_mode: "auto",
              status: "scheduled",
              cancellation_reason: null,
              cancelled_at: null,
            },
            Wt,
            Bt,
            Kt,
            $t,
            ge,
            { created_at: new Date().toISOString() },
          );
        (Qt.games.unshift(r),
          (i.game_id = r.id),
          await Za(te, Qt.games),
          await (0, w.logAudit)("match.created", (0, w.actorRef)(e), {
            game: r.id.slice(-6),
            battle: i.id.slice(-6),
          }));
      }
      return (
        await Za(Ct, Qt.clanBattles),
        await (0, w.logAudit)(a ? "clan.challenge_accepted" : "clan.challenge_declined", (0, w.actorRef)(e), {
          battle: t.slice(-6),
        }),
        o &&
          s &&
          (a
            ? (await qo(
                i.from_team_id,
                `\u2705 Battle confirmed: vs ${s.name} \u2014 ${Yo(i.starts_at)} \xb7 ${i.venue_name} \xb7 the game is live for booking`,
              ),
              await qo(
                i.to_team_id,
                `\u2705 Battle confirmed: vs ${o.name} \u2014 ${Yo(i.starts_at)} \xb7 ${i.venue_name} \xb7 the game is live for booking`,
              ))
            : await qo(i.from_team_id, `${s.name} declined our challenge.`),
          a
            ? await bi({
                id: ea(),
                user_id: o.owner_id,
                type: "challenge_accepted",
                team_id: i.from_team_id,
                battle_id: i.id,
                other_clan_name: s.name,
                read: !1,
                created_at: new Date().toISOString(),
              })
            : await bi({
                id: ea(),
                user_id: o.owner_id,
                type: "team_announcement",
                team_id: i.from_team_id,
                team_name: o.name,
                summary: `${s.name} declined your challenge.`,
                read: !1,
                created_at: new Date().toISOString(),
              })),
        Wo(i, e)
      );
    };
    const _s = "team-0000-strikers",
      us = "team-0001-smash",
      ms = "team-0002-hornets",
      ws = "team-0003-mavericks",
      ps = "team-0004-lions",
      fs = "team-0005-sabah",
      gs = "team-0006-fintas",
      hs = [_s, us, ms, ws, ps, fs, gs],
      ys = [
        { md: 1, home: _s, away: us, hs: 4, as: 2 },
        { md: 1, home: ms, away: ws, hs: 2, as: 1 },
        { md: 1, home: ps, away: gs, hs: 3, as: 1 },
        { md: 2, home: _s, away: fs, hs: 3, as: 1 },
        { md: 2, home: ps, away: us, hs: 2, as: 2 },
        { md: 2, home: gs, away: ms, hs: 0, as: 3 },
      ],
      ks = [
        { home: _s, away: ms, time: "20:00", venue: "PSA Kuwait" },
        { home: ps, away: ws, time: "20:00", venue: "Fahaheel Turf" },
        { home: us, away: gs, time: "21:00", venue: "PSA Kuwait" },
      ],
      vs = (e, t) => {
        const a = new Date();
        return (
          a.setDate(a.getDate() + ((((e - a.getDay()) % 7) + 7) % 7)),
          a.setHours(t, 0, 0, 0),
          a.getTime() <= Date.now() && a.setDate(a.getDate() + 7),
          a
        );
      },
      Ss = "wteam-0001-salwa-stars",
      Es = "wteam-0002-qortuba-queens",
      bs = "wteam-0003-rumaithiya-rockets",
      Ts = "wteam-0004-adailiya-aces",
      As = [Ss, Es, bs, Ts],
      Ds = [
        { md: 1, home: Ss, away: Es, hs: 3, as: 2 },
        { md: 1, home: bs, away: Ts, hs: 1, as: 1 },
      ],
      Os = [
        { home: Es, away: bs, time: "19:00", venue: "PSA Kuwait" },
        { home: Ts, away: Ss, time: "20:00", venue: "Salmiya Sports Hub" },
      ],
      Rs = (e) =>
        "female" === aa(e)
          ? {
              div: As,
              results: Ds,
              fixtures: Os,
              totalMd: 3,
              currentMd: 2,
              playoffTop: 2,
              relegation: 0,
              keyPrefix: "w",
              divisionName: "Division 1 \xb7 \u0633\u064a\u062f\u0627\u062a",
              divisionNo: 1,
              slot: "Sundays 19:00",
            }
          : {
              div: hs,
              results: ys,
              fixtures: ks,
              totalMd: 6,
              currentMd: 3,
              playoffTop: 4,
              relegation: 2,
              keyPrefix: "",
              divisionName: "Division 1",
              divisionNo: 1,
              slot: "Tuesdays 20:00",
            },
      Is = async (e) => {
        (await ei(), await Bo());
        const t = Rs(e),
          a = new Map(t.div.map((e) => [e, { p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0, form: [] }])),
          i = (e, t, i) => {
            const n = a.get(e);
            ((n.p += 1), (n.gf += t), (n.ga += i));
            const r = t > i ? "W" : t === i ? "D" : "L";
            ("W" === r ? ((n.w += 1), (n.pts += 3)) : "D" === r ? ((n.d += 1), (n.pts += 1)) : (n.l += 1),
              n.form.push(r));
          };
        for (const e of t.results) (i(e.home, e.hs, e.as), i(e.away, e.as, e.hs));
        const n = e
            ? new Set(
                Qt.teamMembers.filter((t) => t.user_id === e && "active" === t.status).map((e) => e.team_id),
              )
            : new Set(),
          r = t.div
            .map((e) => {
              const t = to(e),
                i = a.get(e);
              return t
                ? {
                    team: t,
                    p: i.p,
                    w: i.w,
                    d: i.d,
                    l: i.l,
                    gd: i.gf - i.ga,
                    pts: i.pts,
                    form: i.form.slice(-4),
                    mine: n.has(e),
                  }
                : null;
            })
            .filter((e) => !!e)
            .sort((e, t) => t.pts - e.pts || t.gd - e.gd || e.team.name.localeCompare(t.team.name)),
          o = "w" === t.keyPrefix ? vs(0, 19) : vs(2, 20),
          s = (e) => {
            const t = to(e);
            return { id: e, name: t?.name ?? "Clan", color: t?.color_primary ?? "#334155" };
          },
          d = (e) => {
            const [t, a] = e.split(":"),
              i = o.getFullYear(),
              n = String(o.getMonth() + 1).padStart(2, "0"),
              r = String(o.getDate()).padStart(2, "0");
            return new Date(
              `${i}-${n}-${r}T${t.padStart(2, "0")}:${(a ?? "00").padStart(2, "0")}:00+03:00`,
            ).toISOString();
          },
          l = t.fixtures
            .map((e) => {
              const a = `${t.keyPrefix}s1-md${t.currentMd}-${e.home}`;
              return {
                key: a,
                home: s(e.home),
                away: s(e.away),
                time: e.time,
                starts_at: d(e.time),
                venue: e.venue,
                mine: n.has(e.home) || n.has(e.away),
                squad_confirmed: Qt.leagueConfirms.includes(a),
                price_kwd: 3.5,
              };
            })
            .sort((e, t) => Number(t.mine) - Number(e.mine) || e.time.localeCompare(t.time)),
          c = new Set(t.fixtures.flatMap((e) => [e.home, e.away])),
          _ = t.div.find((e) => !c.has(e)) ?? null,
          u = r.findIndex((e) => e.mine),
          m = new Date(o.getTime() + 7 * (t.totalMd - t.currentMd + 1) * 864e5);
        return (
          m.setDate(m.getDate() + ((5 - m.getDay() + 7) % 7)),
          {
            season: 1,
            division: t.divisionName,
            division_no: t.divisionNo,
            clans: t.div.length,
            slot: t.slot,
            matchday: t.currentMd,
            total_matchdays: t.totalMd,
            matchday_date: o.toISOString(),
            my_team_id: r.find((e) => e.mine)?.team.id ?? null,
            my_position: u >= 0 ? u + 1 : null,
            fixtures: l,
            resting: _ ? s(_) : null,
            table: r,
            playoff_top: t.playoffTop,
            relegation: t.relegation,
            finale_date: m.toISOString(),
            last_results: (() => {
              const e = t.results.reduce((e, t) => Math.max(e, t.md), 0);
              return t.results
                .filter((t) => t.md === e)
                .map((e) => ({ md: e.md, home: s(e.home), away: s(e.away), hs: e.hs, as: e.as }));
            })(),
          }
        );
      };
    r.mockGetLeague = Is;
    r.mockConfirmLeagueSquad = async (e, t) => {
      await ei();
      const a = Rs(e),
        i = a.fixtures.find((e) => `${a.keyPrefix}s1-md${a.currentMd}-${e.home}` === t);
      if (!i) throw new Error("E_FIXTURE_NOT_FOUND");
      if (!((0, x.canManageTeam)(io(i.home, e)) || (0, x.canManageTeam)(io(i.away, e))))
        throw (
          await (0, w.logAudit)("league.squad_denied", (0, w.actorRef)(e), { fixture: t.slice(-8) }),
          new Error("E_ONLY_THE_CLAN_OWNER_OR_CAPTAINS")
        );
      return (
        Qt.leagueConfirms.includes(t) ||
          (Qt.leagueConfirms.push(t),
          await Za(Lt, Qt.leagueConfirms),
          await (0, w.logAudit)("league.squad_confirmed", (0, w.actorRef)(e), { fixture: t.slice(-8) })),
        Is(e)
      );
    };
    r.mockAdminSuspendTeam = async (e, t, a, i) => {
      (await ei(), await sn(e));
      const n = to(t);
      if (!n) throw new Error("E_TEAM_NOT_FOUND");
      ((n.status = a ? "suspended" : "active"),
        (n.suspended_reason = a ? (0, v.sanitizeText)(i ?? "", 200) || "Policy violation" : null),
        await Za(Ot, Qt.teams),
        await (0, w.logAdminAudit)("team.suspended", e, n.owner_id, { team: t.slice(-6), suspend: a }));
    };
    r.mockGetTeamAdminStats = async (e) => (
      await ei(),
      await sn(e),
      await mo(),
      {
        teams: Qt.teams.length,
        active: Qt.teams.filter((e) => "active" === e.status).length,
        suspended: Qt.teams.filter((e) => "suspended" === e.status).length,
        members: Qt.teamMembers.filter((e) => "active" === e.status).length,
        events: Qt.teamEvents.length,
      }
    );
    async function Ms(e) {
      const t = Qt.profiles.find((t) => t.id === e)?.role;
      if ("admin" !== t && "analyst" !== t)
        throw (
          await (0, w.logAudit)("bi.access_denied", (0, w.actorRef)(e), {}),
          new Error("E_YOU_DO_NOT_HAVE_ACCESS_TO")
        );
    }
    r.mockGetAllTeamsAdmin = async (e) => {
      (await ei(), await sn(e), await mo());
      return (await cn(e, Qt.teams, (e) => e.audience ?? "male", "admin.all_teams"))
        .map((t) => fo(t, e))
        .sort((e, t) => ("suspended" === e.status ? -1 : 1) - ("suspended" === t.status ? -1 : 1));
    };
    const Ns = new Set(["admin", "analyst"]),
      Cs = (e) => fr(e.court_id)?.sport ?? "padel",
      Ps = (e) => fi().find((t) => t.id === e)?.area ?? "Unknown";
    let Ls = null;
    const Gs = async (e, t = {}) => {
      (await ei(), await Ms(e), await tn(), await hn(), await Dr(), await mo());
      const a = JSON.stringify(t);
      if (Ls && Ls.key === a && Date.now() - Ls.at < 15e3)
        return (
          await adm2LogOncePerDay("bi.accessed", e),
          Object.assign({}, Ls.data, { cached: !0 })
        );
      const i = Date.now(),
        n = (e) => {
          const a = new Date(e).getTime();
          return !(t.from && a < new Date(t.from).getTime()) && !(t.to && a > new Date(t.to).getTime());
        };
      let r = gi().filter((e) => n(e.created_at));
      (t.sport && (r = r.filter((e) => e.sport === t.sport)),
        t.organizerId && (r = r.filter((e) => e.organizer_id === t.organizerId)),
        t.venueId && (r = r.filter((e) => e.venue_id === t.venueId)),
        t.area && (r = r.filter((e) => Ps(e.venue_id) === t.area)));
      let o = Qt.courtBookings.filter((e) => n(e.created_at));
      (t.sport && (o = o.filter((e) => Cs(e) === t.sport)),
        t.organizerId && (o = o.filter((e) => e.organizer_id === t.organizerId)),
        t.venueId && (o = o.filter((e) => e.venue_id === t.venueId)),
        t.area && (o = o.filter((e) => Ps(e.venue_id) === t.area)));
      const s = o.filter((e) => "confirmed" === e.status || "released" === e.status),
        d = new Set(o.map((e) => e.id));
      let l = Qt.settlements.filter((e) => d.has(e.booking_id) && n(e.created_at)),
        c = Qt.payments.filter((e) => 0 === d.size || d.has(e.booking_id));
      const _ = new Set(Qt.profiles.filter((e) => Ns.has(e.role)).map((e) => e.id)),
        u = new Set();
      for (const e of Qt.profiles) _.has(e.id) || u.add(e.id);
      for (const e of Qt.bookings) _.has(e.user_id) || u.add(e.user_id);
      for (const e of Qt.teamMembers) _.has(e.user_id) || u.add(e.user_id);
      for (const e of gi()) _.has(e.organizer_id) || u.add(e.organizer_id);
      const m = [];
      for (const e of Qt.bookings) m.push({ user: e.user_id, at: e.updated_at ?? e.created_at });
      for (const e of Qt.games) m.push({ user: e.organizer_id, at: e.created_at });
      for (const e of Qt.courtBookings) m.push({ user: e.organizer_id, at: e.created_at });
      for (const e of Qt.payments) e.paid_at && m.push({ user: e.payer_id, at: e.paid_at });
      for (const e of Qt.checkins) e.scanned_at && m.push({ user: e.player_id, at: e.scanned_at });
      const f = r.filter((e) => "completed" === Ji(e)),
        g = r.filter((e) => "cancelled" !== e.status),
        h = Qt.bookings.filter((e) => null != e.attendance),
        y = h.filter((e) => "attended" === e.attendance).length,
        k = (0, p.round2)(l.reduce((e, t) => e + t.gross_kwd, 0)),
        v = (0, p.round2)(l.reduce((e, t) => e + t.commission_kwd, 0)),
        S = {
          totalUsers: u.size,
          dau: (0, p.activeSince)(m, 1, i),
          wau: (0, p.activeSince)(m, 7, i),
          mau: (0, p.activeSince)(m, 30, i),
          verifiedOrganizers: Qt.applications.filter((e) => "approved" === e.status).length,
          verifiedVenues: Qt.venueProfiles.filter((e) => "approved" === e.status).length,
          matchesCreated: r.length,
          matchesCompleted: f.length,
          completionRate: (0, p.pct)((0, p.rate)(f.length, g.length)),
          courtBookings: s.length,
          revenueKwd: k,
          commissionKwd: v,
          attendanceRate: (0, p.pct)((0, p.rate)(y, h.length)),
        },
        E = (0, p.round2)(c.filter((e) => "refunded" === e.status).reduce((e, t) => e + t.amount_kwd, 0)),
        b = (0, p.round2)(c.filter((e) => "pending" === e.status).reduce((e, t) => e + t.amount_kwd, 0)),
        T = new Map(),
        A = new Map(),
        D = new Map();
      for (const e of s)
        (T.set(Cs(e), (0, p.round2)((T.get(Cs(e)) ?? 0) + e.court_price_kwd)),
          A.set(Ai(e.venue_id), (0, p.round2)((A.get(Ai(e.venue_id)) ?? 0) + e.court_price_kwd)),
          D.set(e.organizer_id, (0, p.round2)((D.get(e.organizer_id) ?? 0) + e.court_price_kwd)));
      const O = (0, p.countSince)(
          [...Qt.profiles].filter((e) => !_.has(e.id)),
          (e) => e.created_at,
          30,
          i,
        ),
        R = S.mau,
        I = (0, p.pct)(
          (0, p.rate)(
            Math.max(0, (0, p.activeSince)(m, 60, i) - (0, p.activeSince)(m, 30, i)),
            Math.max(1, (0, p.activeSince)(m, 60, i)),
          ),
        ),
        M = (0, p.arpu)(k, Math.max(1, R)),
        N = {
          revenueByDay: (0, p.sumByDay)(
            l,
            (e) => e.created_at,
            (e) => e.gross_kwd,
            14,
          ),
          revenueWeekKwd: (0, p.round2)(
            Qt.settlements
              .filter((e) => (0, p.countSince)([e], () => e.created_at, 7, i))
              .reduce((e, t) => e + t.gross_kwd, 0),
          ),
          revenueMonthKwd: (0, p.round2)(
            Qt.settlements
              .filter((e) => new Date(e.created_at).getTime() >= i - 2592e6)
              .reduce((e, t) => e + t.gross_kwd, 0),
          ),
          revenueYearKwd: (0, p.round2)(
            Qt.settlements
              .filter((e) => new Date(e.created_at).getTime() >= i - 31536e6)
              .reduce((e, t) => e + t.gross_kwd, 0),
          ),
          revenueBySport: [...T.entries()]
            .map(([e, t]) => ({ key: e, label: e, value: t }))
            .sort((e, t) => t.value - e.value),
          revenueByVenue: [...A.entries()]
            .map(([e, t]) => ({ key: e, label: e, value: t }))
            .sort((e, t) => t.value - e.value)
            .slice(0, 8),
          revenueByOrganizer: [...D.entries()]
            .map(([e, t]) => ({ key: e, label: or(e), value: t }))
            .sort((e, t) => t.value - e.value)
            .slice(0, 8),
          commissionKwd: v,
          refundsKwd: E,
          outstandingKwd: b,
          avgBookingValueKwd: (0, p.round2)((0, p.rate)(k, Math.max(1, s.length))),
          arpuKwd: M,
          ltvKwd: (0, p.ltv)(M, Math.max(0.01, I / 100)),
          cacKwd: (0, p.cac)(1.5 * u.size, Math.max(1, O)),
          cacModeled: !0,
        },
        C = Qt.profiles.filter((e) => !_.has(e.id)),
        P = new Map();
      for (const e of Qt.bookings) P.set(e.user_id, (P.get(e.user_id) ?? 0) + 1);
      const L = (e) => {
          const t = P.get(e) ?? 0;
          return 0 === t ? "segDormant" : t < 3 ? "segCasual" : t < 8 ? "segRegular" : "segPower";
        },
        G = (0, p.pct)((0, p.rate)(Qt.referrals.length, Math.max(1, u.size))),
        U = {
          registrationsByDay: (0, p.bucketByDay)(C, (e) => e.created_at, 30),
          newUsers30d: O,
          userGrowthPct: (0, p.pct)((0, p.growthRate)(C, (e) => e.created_at, 30, i)),
          churnPct: I,
          retention: {
            d1: (0, p.pct)(
              (0, p.rate)((0, p.activeSince)(m, 1, i), Math.max(1, (0, p.activeSince)(m, 30, i))),
            ),
            d7: (0, p.pct)(
              (0, p.rate)((0, p.activeSince)(m, 7, i), Math.max(1, (0, p.activeSince)(m, 30, i))),
            ),
            d30: (0, p.pct)((0, p.rate)((0, p.activeSince)(m, 30, i), Math.max(1, u.size))),
            d90: (0, p.pct)((0, p.rate)((0, p.activeSince)(m, 90, i), Math.max(1, u.size))),
          },
          referralRatePct: G,
          returningPlayers: [...P.values()].filter((e) => e >= 2).length,
          organizerGrowthPct: (0, p.pct)(
            (0, p.growthRate)(
              Qt.applications.filter((e) => "approved" === e.status),
              (e) => e.reviewed_at ?? e.created_at,
              90,
              i,
            ),
          ),
          venueGrowthPct: (0, p.pct)(
            (0, p.growthRate)(
              Qt.venueProfiles.filter((e) => "approved" === e.status),
              (e) => e.reviewed_at ?? e.created_at,
              90,
              i,
            ),
          ),
          bySport: (0, p.segmentCounts)(
            C.flatMap((e) => e.preferred_sports),
            (e) => e,
          ),
          byCity: (0, p.segmentCounts)([...u], (e) => Us(e)),
          bySkill: (0, p.segmentCounts)(C, (e) => e.skill_level),
          byActivity: (0, p.segmentCounts)([...u], (e) => L(e)),
        },
        x = (e) => Qt.bookings.filter((t) => t.game_id === e && "confirmed" === t.status).length,
        z = r.length ? r.reduce((e, t) => e + (0, p.rate)(x(t.id), t.max_players), 0) / r.length : 0,
        H = h.filter((e) => "no_show" === e.attendance).length,
        F = Qt.bookings.filter((e) => "waitlisted" === e.status).length,
        B = gi().filter((e) => e.npn_activation_count > 0),
        j = B.filter((e) => null != e.npn_filled_at).length,
        q = (0, p.segmentCounts)(r, (e) => e.organizer_id),
        Y = {
          fillRatePct: (0, p.pct)(z),
          avgTimeToFillHours: (0, p.round2)(
            (0, p.rate)(
              r.reduce((e, t) => e + t.duration_minutes / 60, 0),
              Math.max(1, r.length),
            ),
          ),
          npnSuccessRatePct: (0, p.pct)((0, p.rate)(j, Math.max(1, B.length))),
          cancellationRatePct: (0, p.pct)(
            (0, p.rate)(r.filter((e) => "cancelled" === e.status).length, Math.max(1, r.length)),
          ),
          noShowRatePct: (0, p.pct)((0, p.rate)(H, Math.max(1, h.length))),
          waitlistConversionPct: (0, p.pct)(
            (0, p.rate)(
              Qt.bookings.filter((e) => "confirmed" === e.status && null == e.reserved_until).length,
              Math.max(1, F + 1),
            ),
          ),
          avgPlayersPerMatch: (0, p.round2)(
            (0, p.rate)(
              f.reduce((e, t) => e + x(t.id), 0),
              Math.max(1, f.length),
            ),
          ),
          mostActiveOrganizers: (0, p.topN)(q, 5).map((e) => Object.assign({}, e, { label: or(e.key) })),
        };
      let W = 0,
        K = 0;
      for (const e of Qt.courts) {
        K += 30 * ((e.close_minutes - e.open_minutes) / 60);
        for (const t of s.filter((t) => t.court_id === e.id))
          W += (new Date(t.ends_at).getTime() - new Date(t.starts_at).getTime()) / 36e5;
      }
      const $ = (0, p.segmentCounts)(s, (e) => Ai(e.venue_id)),
        V = {
          courtUtilizationPct: (0, p.pct)((0, p.rate)(W, Math.max(1, K))),
          peakBookingHours: (0, p.peakHours)(s.map((e) => e.starts_at)),
          bookingTrend: (0, p.bucketByDay)(o, (e) => e.created_at, 14),
          revenuePerVenue: N.revenueByVenue,
          popularVenues: (0, p.topN)($, 6),
          occupancyPct: (0, p.pct)((0, p.rate)(s.length, Math.max(1, 30 * Qt.courts.length))),
        },
        J = (0, p.segmentCounts)(r, (e) => e.sport),
        Q = ["football", "padel", "tennis"]
          .map((e) => ({
            s: e,
            g: (0, p.growthRate)(
              gi().filter((t) => t.sport === e),
              (e) => e.created_at,
              30,
              i,
            ),
          }))
          .sort((e, t) => t.g - e.g),
        Z = {
          popularity: J,
          fastestGrowing: Q[0]?.s ?? "padel",
          peakDays: (0, p.peakDays)(r.map((e) => e.starts_at)),
          peakHours: (0, p.peakHours)(r.map((e) => e.starts_at)),
        },
        X = new Set(fi().map((e) => e.area)),
        ee = {
          areas: [...X]
            .map((e) => {
              const t = fi().filter((t) => t.area === e).length,
                a = gi().filter((t) => Ps(t.venue_id) === e).length,
                i = Qt.courtBookings.filter((t) => Ps(t.venue_id) === e).length,
                n = [...u].filter((t) => Us(t) === e).length,
                r = (0, p.round2)((0, p.rate)(a, Math.max(1, t)));
              return { area: e, users: n, matches: a, venues: t, bookings: i, supplyGap: r };
            })
            .sort((e, t) => t.matches - e.matches)
            .slice(0, 10),
        },
        te = [...new Set(gi().map((e) => e.organizer_id))],
        ae = {
          top: te
            .map((e) => {
              const t = gi().filter((t) => t.organizer_id === e),
                a = t.filter((e) => "completed" === Ji(e)).length,
                i = t.filter((e) => "cancelled" === e.status).length,
                n = (0, p.round2)(
                  Qt.courtBookings
                    .filter(
                      (t) => t.organizer_id === e && ("confirmed" === t.status || "released" === t.status),
                    )
                    .reduce((e, t) => e + t.court_price_kwd, 0),
                );
              return {
                id: e,
                name: or(e),
                hosted: t.length,
                completionRate: (0, p.pct)((0, p.rate)(a, Math.max(1, t.length))),
                cancellationRate: (0, p.pct)((0, p.rate)(i, Math.max(1, t.length))),
                revenueKwd: n,
              };
            })
            .sort((e, t) => t.hosted - e.hosted)
            .slice(0, 6),
        },
        ie = await (0, w.readAudit)(),
        ne = (...e) => ie.filter((t) => e.includes(t.type)).length,
        re = ie.filter((e) => /denied|locked|blocked|incident/.test(e.type)).length,
        oe = ne(
          "match.create_blocked",
          "booking.reserve_blocked",
          "npn.blocked",
          "invite.share_blocked",
          "skill.mismatch_blocked",
        ),
        se = {
          loginActivity: ne("auth.sign_in"),
          failedLogins: ne("auth.sign_in_failed", "auth.locked_out"),
          failedPayments: ne("payment.verify_failed"),
          securityEvents: re,
          fraudAlerts: oe,
          notificationsDelivered: Qt.notifications.length,
          // ADM2 (F-ADM2-19): these three have no infrastructure feed behind them. They are named
          // here so the dashboard can group and badge them apart from the counts above, which are real.
          errorRatePct: 0.4,
          uptimePct: 99.95,
          apiP95Ms: 180,
          simulated: !0,
          simulatedKeys: ["uptimePct", "apiP95Ms", "errorRatePct"],
        },
        de = {
          generatedAt: new Date().toISOString(),
          cached: !1,
          executive: S,
          financial: N,
          users: U,
          matches: Y,
          venues: V,
          sports: Z,
          geographic: ee,
          organizers: ae,
          health: se,
        };
      return (
        (Ls = { key: a, at: Date.now(), data: de }),
        await adm2LogOncePerDay("bi.accessed", e),
        de
      );
    };
    r.mockGetBIDashboard = Gs;
    const Us = (e) => {
      const t = Sa(e);
      let a = "Kuwait City",
        i = 1 / 0;
      for (const [e, [n, r]] of Object.entries(va)) {
        const o = (0, f.distanceKm)(t.lat, t.lng, n, r);
        o < i && ((i = o), (a = e));
      }
      return a;
    };
    r.mockExportBIReport = async (e, t, a = {}) => {
      (await ei(), await Ms(e));
      const i = await Gs(e, a);
      let n = [],
        r = [];
      if ("executive" === t) {
        n = ["Metric", "Value"];
        const e = i.executive;
        r = [
          ["Total users", e.totalUsers],
          ["DAU", e.dau],
          ["WAU", e.wau],
          ["MAU", e.mau],
          ["Verified organizers", e.verifiedOrganizers],
          ["Verified venues", e.verifiedVenues],
          ["Matches created", e.matchesCreated],
          ["Matches completed", e.matchesCompleted],
          ["Completion rate %", e.completionRate],
          ["Court bookings", e.courtBookings],
          ["Revenue KWD", e.revenueKwd],
          ["Commission KWD", e.commissionKwd],
          ["Attendance rate %", e.attendanceRate],
        ];
      } else if ("financial" === t)
        ((n = ["Day", "Revenue KWD"]), (r = i.financial.revenueByDay.map((e) => [e.key, e.value])));
      else if ("users" === t)
        ((n = ["Segment", "Count"]),
          (r = i.users.bySport
            .map((e) => [`sport:${e.label}`, e.value])
            .concat(i.users.bySkill.map((e) => [`skill:${e.label}`, e.value]))
            .concat(i.users.byActivity.map((e) => [`activity:${e.label}`, e.value]))));
      else if ("matches" === t) {
        n = ["Metric", "Value"];
        const e = i.matches;
        r = [
          ["Fill rate %", e.fillRatePct],
          ["NPN success %", e.npnSuccessRatePct],
          ["Cancellation %", e.cancellationRatePct],
          ["No-show %", e.noShowRatePct],
          ["Avg players/match", e.avgPlayersPerMatch],
        ];
      } else
        "venues" === t
          ? ((n = ["Venue", "Bookings"]), (r = i.venues.popularVenues.map((e) => [e.label, e.value])))
          : "organizers" === t
            ? ((n = ["Organizer", "Hosted", "Completion %", "Cancellation %", "Revenue KWD"]),
              (r = i.organizers.top.map((e) => [
                e.name,
                e.hosted,
                e.completionRate,
                e.cancellationRate,
                e.revenueKwd,
              ])))
            : ((n = ["Area", "Users", "Matches", "Venues", "Bookings", "Supply gap"]),
              (r = i.geographic.areas.map((e) => [
                e.area,
                e.users,
                e.matches,
                e.venues,
                e.bookings,
                e.supplyGap,
              ])));
      return (
        await (0, w.logAudit)("bi.exported", (0, w.actorRef)(e), { section: t, rows: r.length }),
        { filename: `playora-${t}-${new Date().toISOString().slice(0, 10)}.csv`, csv: (0, p.toCsv)(n, r) }
      );
    };
    const xs = new Set(["partner", "reward"]);
    let zs = null;
    const Hs = () =>
        Fa() ? (Qt.loyaltySeeded ? Promise.resolve() : (zs || (zs = Fs()), zs)) : Promise.resolve(),
      Fs = async () => {
        if ((await ei(), !Qt.loyaltySeeded)) {
          if (
            (Qt.loyaltyRules ||
              ((Qt.loyaltyRules = {
                earn: Object.assign({}, L.DEFAULT_EARN_RULES),
                updated_at: new Date().toISOString(),
              }),
              await Za(Dt, Qt.loyaltyRules)),
            0 === Qt.loyaltyRewards.length)
          ) {
            const e = (e, t, a, i, n, r, o) => ({
              id: ea(),
              name: e,
              description: t,
              category: a,
              cost_points: i,
              value: n,
              partner: r,
              active: !0,
              stock: o,
              created_at: new Date().toISOString(),
            });
            (Qt.loyaltyRewards.push(
              e(
                "10% off a court booking",
                "Apply at checkout on any court reservation.",
                "discount",
                200,
                "10%",
                null,
                null,
              ),
              e(
                "Free court hour",
                "One complimentary 60-minute court slot.",
                "discount",
                600,
                "60 min",
                null,
                null,
              ),
              e(
                "1 month Premium",
                "Unlock premium features for 30 days.",
                "premium",
                800,
                "30 days",
                null,
                null,
              ),
              e(
                "Rush X water bottle",
                "Branded stainless-steel bottle, collect at any partner venue.",
                "reward",
                350,
                null,
                null,
                50,
              ),
              e("Nike 15% voucher", "15% off at Nike Kuwait stores.", "partner", 700, "15%", "Nike", 100),
              e(
                "Caffeine Lab free coffee",
                "One free coffee at Caffeine Lab.",
                "partner",
                150,
                "Free coffee",
                "Caffeine Lab",
                200,
              ),
            ),
              await Za(Tt, Qt.loyaltyRewards));
          }
          Qt.loyaltySeeded = !0;
        }
      },
      Bs = () =>
        Qt.loyaltyRules ?? {
          earn: Object.assign({}, L.DEFAULT_EARN_RULES),
          updated_at: new Date().toISOString(),
        },
      js = (e) => Qt.loyaltyLedger.filter((t) => t.user_id === e),
      qs = (e) => js(e).reduce((e, t) => e + t.points, 0),
      Ys = (e) =>
        js(e)
          .filter((e) => e.points > 0)
          .reduce((e, t) => e + t.points, 0),
      Ws = async (e, t, a, i) => {
        if (Qt.loyaltyLedger.some((i) => i.user_id === e && i.action === t && i.ref_id === a)) return 0;
        const n = Bs().earn[t] ?? 0;
        if (n <= 0) return 0;
        const r = (0, L.earnAmount)(n, Ys(e));
        return (
          Qt.loyaltyLedger.push({
            id: ea(),
            user_id: e,
            type: "earn",
            action: t,
            points: r,
            reason: t,
            ref_id: a,
            created_at: i ?? new Date().toISOString(),
          }),
          r
        );
      },
      Ks = async (e) => {
        (await ei(), await Hs());
        const t = qs(e);
        for (const { game: t, attendance: a } of tr(e))
          (await Ws(e, "match_played", t.id, t.ends_at),
            "attended" === a && (await Ws(e, "attendance", t.id, t.ends_at)));
        for (const t of gi().filter((t) => t.organizer_id === e && "completed" === Ji(t)))
          await Ws(e, "match_hosted", t.id, t.ends_at);
        for (const t of Qt.courtBookings.filter(
          (t) => t.organizer_id === e && ("confirmed" === t.status || "released" === t.status),
        ))
          await Ws(e, "booking", t.id, t.created_at);
        for (const t of Qt.referrals.filter((t) => t.sharer_id === e && t.joined_user_id))
          await Ws(e, "referral", t.id, t.joined_at ?? t.created_at);
        for (const t of Qt.achievements.filter((t) => t.user_id === e))
          await Ws(e, "achievement", t.achievement_id, t.unlocked_at);
        return (
          qs(e) !== t &&
            (await Za(bt, Qt.loyaltyLedger),
            await (0, w.logAudit)("loyalty.earned", (0, w.actorRef)(e), { balance: qs(e) })),
          $s(e)
        );
      };
    r.mockSyncLoyalty = Ks;
    const $s = (e) => {
      const t = Ys(e),
        a = (0, L.tierFor)(t),
        i = (0, L.nextTierInfo)(t);
      return {
        user_id: e,
        balance: qs(e),
        lifetime: t,
        tier: a.tier,
        multiplier: a.multiplier,
        nextTier: i.next,
        pointsToNext: i.pointsToNext,
        progress: i.progress,
      };
    };
    r.mockGetLoyaltyAccount = async (e) => Ks(e);
    r.mockGetLoyaltyLedger = async (e) => (
      await ei(),
      js(e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .slice(0, 50)
    );
    r.mockGetLoyaltyEarnBreakdown = async (e) => {
      (await ei(), await Hs());
      const t = Bs().earn;
      return L.LOYALTY_ACTIONS.map(({ action: a }) => {
        const i = js(e).filter((e) => e.action === a);
        return { action: a, rate: t[a] ?? 0, earned: i.reduce((e, t) => e + t.points, 0), count: i.length };
      });
    };
    r.mockGetRewards = async (e) => {
      (await ei(), await Hs());
      const t = e ? qs(e) : 0;
      return Qt.loyaltyRewards
        .filter((e) => e.active && xs.has(e.category))
        .sort((e, t) => e.cost_points - t.cost_points)
        .map((e) =>
          Object.assign({}, e, {
            affordable: t >= e.cost_points,
            out_of_stock: null != e.stock && e.stock <= 0,
          }),
        );
    };
    r.mockRedeemReward = async (e, t) => {
      (await ei(), await Hs());
      const a = Qt.loyaltyRewards.find((e) => e.id === t);
      if (!a || !a.active || !xs.has(a.category)) throw new Error("E_REWARD_NOT_AVAILABLE");
      if (null != a.stock && a.stock <= 0) throw new Error("E_THIS_REWARD_IS_OUT_OF_STOCK");
      if (qs(e) < a.cost_points)
        throw (
          await (0, w.logAudit)("loyalty.redeem_denied", (0, w.actorRef)(e), {
            reward: a.id.slice(-6),
            reason: "insufficient",
          }),
          new Error("E_NOT_ENOUGH_POINTS_YET")
        );
      (Qt.loyaltyLedger.push({
        id: ea(),
        user_id: e,
        type: "redeem",
        action: null,
        points: -a.cost_points,
        reason: a.name,
        ref_id: a.id,
        created_at: new Date().toISOString(),
      }),
        null != a.stock && (a.stock -= 1));
      const i = {
        id: ea(),
        user_id: e,
        reward_id: a.id,
        reward_name: a.name,
        category: a.category,
        points_spent: a.cost_points,
        code: `PLR-${Hi()}`,
        status: "active",
        created_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 5184e6).toISOString(),
      };
      return (
        Qt.loyaltyRedemptions.push(i),
        await Promise.all([
          Za(bt, Qt.loyaltyLedger),
          Za(Tt, Qt.loyaltyRewards),
          Za(At, Qt.loyaltyRedemptions),
        ]),
        await (0, w.logAudit)("loyalty.redeemed", (0, w.actorRef)(e), {
          reward: a.id.slice(-6),
          points: a.cost_points,
        }),
        i
      );
    };
    r.mockGetMyRedemptions = async (e) => (
      await ei(),
      Qt.loyaltyRedemptions
        .filter((t) => t.user_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
    );
    r.mockGetLoyaltyRules = async (e) => (await ei(), await sn(e), await Hs(), Bs());
    r.mockSetEarnRule = async (e, t, a) => {
      (await ei(), await sn(e), await Hs());
      const i = Bs();
      return (
        (i.earn[t] = Math.max(0, Math.min(1e3, Math.round(a)))),
        (i.updated_at = new Date().toISOString()),
        (Qt.loyaltyRules = i),
        await Za(Dt, Qt.loyaltyRules),
        await (0, w.logAdminAudit)("loyalty.rule_changed", e, null, { action: t, points: i.earn[t] }),
        i
      );
    };
    r.mockUpsertReward = async (e, t) => {
      (await ei(), await sn(e), await Hs());
      const a = (0, v.sanitizeText)(t.name, 60);
      if (!a) throw new Error("E_ADD_A_REWARD_NAME");
      const i = Math.max(1, Math.min(1e5, Math.round(t.cost_points)));
      if (t.id) {
        const n = Qt.loyaltyRewards.find((e) => e.id === t.id);
        if (!n) throw new Error("E_REWARD_NOT_FOUND");
        return (
          (n.name = a),
          (n.description = (0, v.sanitizeText)(t.description ?? n.description, 200)),
          (n.category = t.category),
          (n.cost_points = i),
          (n.value = t.value ? (0, v.sanitizeText)(t.value, 40) : null),
          (n.partner = t.partner ? (0, v.sanitizeText)(t.partner, 40) : null),
          (n.stock = t.stock ?? null),
          await Za(Tt, Qt.loyaltyRewards),
          await (0, w.logAdminAudit)("loyalty.reward_changed", e, null, { reward: n.id.slice(-6) }),
          n
        );
      }
      const n = {
        id: ea(),
        name: a,
        description: (0, v.sanitizeText)(t.description ?? "", 200),
        category: t.category,
        cost_points: i,
        value: t.value ? (0, v.sanitizeText)(t.value, 40) : null,
        partner: t.partner ? (0, v.sanitizeText)(t.partner, 40) : null,
        active: !0,
        stock: t.stock ?? null,
        created_at: new Date().toISOString(),
      };
      return (
        Qt.loyaltyRewards.push(n),
        await Za(Tt, Qt.loyaltyRewards),
        await (0, w.logAdminAudit)("loyalty.reward_changed", e, null, {
          reward: n.id.slice(-6),
          created: !0,
        }),
        n
      );
    };
    r.mockSetRewardActive = async (e, t, a) => {
      (await ei(), await sn(e));
      const i = Qt.loyaltyRewards.find((e) => e.id === t);
      if (!i) throw new Error("E_REWARD_NOT_FOUND");
      ((i.active = a),
        await Za(Tt, Qt.loyaltyRewards),
        await (0, w.logAdminAudit)("loyalty.reward_changed", e, null, { reward: t.slice(-6), active: a }));
    };
    r.mockGetAllRewardsAdmin = async (e) => (
      await ei(),
      await sn(e),
      await Hs(),
      [...Qt.loyaltyRewards].sort((e, t) => e.cost_points - t.cost_points)
    );
    r.mockGetLoyaltyAdminStats = async (e) => {
      (await ei(), await sn(e), await Hs());
      const t = Qt.loyaltyLedger.filter((e) => e.points > 0).reduce((e, t) => e + t.points, 0),
        a = Qt.loyaltyLedger.filter((e) => e.points < 0).reduce((e, t) => e - t.points, 0);
      return {
        pointsIssued: t,
        pointsRedeemed: a,
        outstanding: t - a,
        redemptions: Qt.loyaltyRedemptions.length,
        activeRewards: Qt.loyaltyRewards.filter((e) => e.active).length,
        members: new Set(Qt.loyaltyLedger.map((e) => e.user_id)).size,
      };
    };
    r.mockGetLoyaltyTiers = () => L.TIERS;
    r.mockGetLoyaltyActions = () => L.LOYALTY_ACTIONS;
    r.mockGetRewardCategories = () => L.REWARD_CATEGORIES;
    const Vs = { padel: 3, tennis: 3, football: 2 },
      Js = async (e, t) => {
        (await ei(), await tn(), await on(e));
        const a = t.sport,
          i = Math.max(3, Math.min(30, t.horizonDays ?? 14)),
          n = Math.max(1, Math.min(12, t.limit ?? 8)),
          r = "padel" === a;
        let o = fi().filter((e) => e.sports.includes(a));
        if (t.area) {
          const e = o.filter((e) => e.area === t.area);
          e.length && (o = e);
        }
        if (((o = o.sort((e, t) => t.rating - e.rating).slice(0, 8)), 0 === o.length)) return [];
        const s = new Array(24).fill(0);
        for (const e of gi().filter((e) => e.sport === a)) s[new Date(e.starts_at).getHours()]++;
        const d = ["padel", "tennis", "football"],
          l = (e) => Qt.profiles.filter((t) => t.preferred_sports.includes(e)).length,
          c = (e) => gi().filter((t) => t.sport === e).length,
          _ = Math.max(1, ...d.map(l)),
          u = Math.max(1, ...d.map(c)),
          m = (l(a) / _) * 0.5 + (c(a) / u) * 0.5,
          p = Math.max(1, ...o.map((e) => gi().filter((t) => t.venue_id === e.id).length)),
          f = (e) => {
            const t = Qt.courts.find((t) => t.venue_id === e && t.sport === a && t.active);
            return Vs[a] + (t ? t.price_per_hour_kwd / 20 : 0);
          },
          g = Date.now(),
          h = [];
        for (let e = 0; e < i; e++) {
          const t = new Date();
          (t.setDate(t.getDate() + e), t.setHours(0, 0, 0, 0));
          const i = (0, G.holidayFor)(t),
            n = i ? "holiday" : (0, G.isWeekend)(t) ? "weekend" : 4 === t.getDay() ? "preWeekend" : "weekday",
            d = (0, G.dayScore)(t);
          for (const e of G.EVENING_HOURS) {
            const l = new Date(t);
            if ((l.setHours(e, 0, 0, 0), l.getTime() < g)) continue;
            const c = new Date(l.getTime() + 54e5),
              _ = (0, G.weatherFor)(t, e, r),
              u = (0, G.timeScore)(e, s);
            for (const e of o) {
              const t = { starts_at: l.toISOString(), ends_at: c.toISOString() },
                o = gi().some(
                  (a) => a.venue_id === e.id && "scheduled" === a.status && (0, H.windowsOverlap)(t, a),
                ),
                s = Qt.courtBookings.some(
                  (a) =>
                    a.venue_id === e.id &&
                    ("confirmed" === a.status ||
                      ("reserved" === a.status &&
                        (!a.reserved_until || new Date(a.reserved_until).getTime() > g))) &&
                    (0, H.windowsOverlap)(t, a),
                ),
                w = gi().filter((t) => t.venue_id === e.id && Un(t.starts_at, l)).length,
                y = o || s ? 0.12 : 1 - Math.min(0.4, 0.15 * w),
                k = gi().filter((t) => t.venue_id === e.id).length / p,
                v = Math.min(1, 0.6 * m + 0.4 * k),
                S = e.rating / 5,
                E = { time: u, day: d, weather: _.score, availability: y, demand: v, venue: S },
                b = (0, G.predictFill)(E);
              h.push({
                id: `${e.id}-${l.getTime()}`,
                starts_at: l.toISOString(),
                ends_at: c.toISOString(),
                venue_id: e.id,
                venue_name: e.name,
                area: e.area,
                sport: a,
                indoor: r,
                predicted_fill: Math.round(100 * b),
                suggested_price_kwd: (0, G.suggestedPrice)(f(e.id), v),
                factors: {
                  time: Math.round(100 * E.time),
                  day: Math.round(100 * E.day),
                  weather: Math.round(100 * E.weather),
                  availability: Math.round(100 * E.availability),
                  demand: Math.round(100 * E.demand),
                  venue: Math.round(100 * E.venue),
                },
                weather_key: _.key,
                weather_emoji: _.emoji,
                day_key: n,
                holiday_key: i,
              });
            }
          }
        }
        h.sort((e, t) => t.predicted_fill - e.predicted_fill);
        const y = new Map(),
          k = [];
        for (const e of h) {
          const t = y.get(e.venue_id) ?? 0;
          if (!(t >= 2) && (y.set(e.venue_id, t + 1), k.push(e), k.length >= n)) break;
        }
        return (
          await (0, w.logAudit)("schedule.recommended", (0, w.actorRef)(e), { sport: a, n: k.length }),
          k
        );
      };
    r.mockGetSmartSchedule = Js;
    const Qs = () => Qt.conciergeRules ?? U.DEFAULT_CONCIERGE_RULES,
      Zs = {
        football: { format: "football_5v5", players: 10 },
        padel: { format: "padel_4", players: 4 },
        tennis: { format: "tennis_doubles", players: 4 },
      },
      Xs = (e, t, a, i, n, r, o) =>
        Object.assign(
          {
            id: `draft-${ea()}`,
            venue_id: t,
            organizer_id: e,
            audience: aa(e),
            title: "Draft",
            sport: a,
            format: Zs[a].format,
            skill_level: "all",
            starts_at: i,
            ends_at: n,
            duration_minutes: Math.round((new Date(n).getTime() - new Date(i).getTime()) / 6e4),
            max_players: r,
            waitlist_capacity: 4,
            price_kwd: 0,
            notes: null,
            visibility: "public",
            invite_code: null,
            approval_mode: "auto",
            status: "scheduled",
            cancellation_reason: null,
            cancelled_at: null,
          },
          Wt,
          { skill_min: o.min, skill_max: o.max, skill_policy: "open" },
          Bt,
          Kt,
          $t,
          { npn_radius_km: null },
          ge,
          { created_at: new Date().toISOString() },
        ),
      ed = async (e, t, a, i) => {
        // The demo world appends synthetic npn-demo-N names to the candidate pool, and the shipped
        // config has demo on. They surfaced in the replacement shortlist, and offering one reserved a
        // real seat for the reservation window - nd subtracts outstanding offers from the open slots -
        // that no one could ever accept, because there is no account behind the id. Replacements move
        // real seats, so the pool here is real people only.
        const n = Sn(e, t).filter(
          (e) => !i.has(e.user_id) && !String(e.user_id).startsWith("npn-demo-"),
        ),
          r = [];
        for (const t of n) {
          const a = await lr(t.user_id, e),
            i = Qt.skillProfiles.find((a) => a.user_id === t.user_id && a.sport === e.sport),
            n = i?.rating ?? (0, y.defaultRatingForLevel)(e.sport, "all");
          r.push({
            user_id: t.user_id,
            display_name: t.display_name,
            distance_km: t.distance_km,
            played_before: t.played_before,
            skill_category_key: (0, y.levelKey)(e.sport, n),
            compat_class_key: (0, h.compatibilityClass)(a.score).key,
            compat_score: a.score,
            _s: a.score,
          });
        }
        return r
          .sort((e, t) => t._s - e._s)
          .slice(0, a)
          .map((e) => (0, d.default)(e, j));
      };
    r.mockGetConciergePlan = async (e, t) => {
      (await ei(), await tn(), await on(e));
      const a = Qs(),
        i = t.sport,
        n = (await Js(e, { sport: i, area: t.area, horizonDays: a.horizonDays, limit: 1 }))[0];
      if (!n) return null;
      const r = fi().find((e) => e.id === n.venue_id),
        o = y.SPORT_SCALES[i],
        s = Qt.skillProfiles.filter((e) => e.sport === i).map((e) => e.rating),
        d = (0, U.recommendSkillBand)(s, a.skillTolerance, o.min, o.max),
        l = Zs[i].players,
        c = Xs(e, n.venue_id, i, n.starts_at, n.ends_at, l, d),
        _ = await ed(c, r, Math.max(a.autoInviteCount, 6), new Set([e]));
      return (
        await (0, w.logAudit)("concierge.plan", (0, w.actorRef)(e), {
          sport: i,
          fill: n.predicted_fill,
          players: _.length,
        }),
        {
          sport: i,
          venue_id: n.venue_id,
          venue_name: n.venue_name,
          area: n.area,
          starts_at: n.starts_at,
          ends_at: n.ends_at,
          suggested_price_kwd: n.suggested_price_kwd,
          max_players: l,
          format: Zs[i].format,
          skill_level: null != d.min ? "intermediate" : "all",
          skill_min: d.min,
          skill_max: d.max,
          predicted_fill: n.predicted_fill,
          fill_key: (0, U.fillLabel)(n.predicted_fill).key,
          factors: n.factors,
          weather_emoji: n.weather_emoji,
          weather_key: n.weather_key,
          day_key: n.day_key,
          holiday_key: n.holiday_key,
          notify_at: (0, U.optimalNotifyTime)(n.starts_at, a),
          auto_invite: a.autoInvite,
          auto_invite_count: a.autoInviteCount,
          recommended_players: _,
        }
      );
    };
    const td = (e) => {
      const t = new Date(e.starts_at),
        a = t.getHours(),
        i = new Array(24).fill(0);
      for (const t of gi().filter((t) => t.sport === e.sport)) i[new Date(t.starts_at).getHours()]++;
      const n = Qt.bookings.filter((t) => t.game_id === e.id && "confirmed" === t.status).length,
        r = {
          time: (0, G.timeScore)(a, i),
          day: (0, G.dayScore)(t),
          weather: (0, G.weatherFor)(t, a, "padel" === e.sport).score,
          availability: Math.max(0, e.max_players - n) / Math.max(1, e.max_players),
          demand: 0.6,
          venue: 0.7,
        };
      return Math.round(100 * (0, G.predictFill)(r));
    };
    r.mockConciergeAutoInvite = async (e, t, a) => {
      await ei();
      const i = hi(t);
      if (!i) throw new Error("E_MATCH_NOT_FOUND");
      zi(i, e);
      // ORG2 (F-ORG2-15): only for open, scheduled matches; never the same player twice; 10-minute cooldown.
      if ("scheduled" !== i.status || i.registration_closed_at || new Date(i.starts_at).getTime() < Date.now())
        throw new Error("E_THIS_MATCH_IS_NO_LONGER_OPEN");
      if (i.concierge_last_invite_at && Date.now() - new Date(i.concierge_last_invite_at).getTime() < 6e5)
        throw new Error("E_PLEASE_WAIT_BEFORE_INVITING_AGAIN");
      const n = fi().find((e) => e.id === i.venue_id),
        r = Qs(),
        o = new Set(
          Qt.bookings.filter((e) => e.game_id === t && "cancelled" !== e.status).map((e) => e.user_id),
        );
      o.add(e);
      for (const e of i.concierge_invited_ids ?? []) o.add(e);
      const s = await ed(i, n, a ?? r.autoInviteCount, o),
        d = Math.max(
          0,
          i.max_players - Qt.bookings.filter((e) => e.game_id === t && "confirmed" === e.status).length,
        );
      for (const e of s)
        await bi({
          id: ea(),
          user_id: e.user_id,
          type: "need_player",
          game_id: t,
          venue_name: Ai(i.venue_id),
          sport: i.sport,
          urgency: "standard",
          slots: d,
          distance_km: e.distance_km,
          skill_level: i.skill_level,
          starts_at: i.starts_at,
          read: !1,
          created_at: new Date().toISOString(),
        });
      return (
        (i.npn_notifications_sent += s.length),
        await Za(te, Qt.games),
        Qt.conciergePredictions.some((e) => e.game_id === t) ||
          (Qt.conciergePredictions.push({
            id: ea(),
            game_id: t,
            predicted_fill: td(i),
            created_at: new Date().toISOString(),
          }),
          await Za(Et, Qt.conciergePredictions)),
        await (0, w.logAudit)("concierge.auto_invited", (0, w.actorRef)(e), {
          game: t.slice(-6),
          n: s.length,
        }),
        s.length
      );
    };
    r.mockGetConciergeReplacements = async (e, t, a) => {
      await ei();
      const i = hi(t);
      if (!i) throw new Error("E_MATCH_NOT_FOUND");
      zi(i, e);
      const n = fi().find((e) => e.id === i.venue_id),
        r = Qs(),
        o = new Set(
          Qt.bookings
            .filter((e) => e.game_id === t && ("confirmed" === e.status || "waitlisted" === e.status))
            .map((e) => e.user_id),
        );
      o.add(e);
      const s = await ed(i, n, a ?? r.replacementsCount, o);
      // ORG2 (F-ORG2-16): this read path no longer writes to the audit log.
      return s;
    };
    r.mockGetConciergeNotificationPlan = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      zi(a, e);
      const i = Qs(),
        n = fi().find((e) => e.id === a.venue_id),
        r = Sn(a, n).length;
      return {
        recommended_send_at: (0, U.optimalNotifyTime)(a.starts_at, i),
        lead_hours: i.notifyLeadHours,
        audience: r,
        in_quiet_hours: !1,
      };
    };
    r.mockGetConciergeRules = async (e) => (await ei(), await sn(e), Qs());
    // Bounds shared with the admin screen so the UI can never offer a value the store rejects.
    r.CONCIERGE_BOUNDS = {
      autoInviteCount: [0, 20, 1],
      minFillToPublish: [0, 100, 5],
      replacementsCount: [1, 12, 1],
      skillTolerance: [0, 5, 0.5],
      notifyLeadHours: [1, 72, 1],
      horizonDays: [3, 30, 1],
      quietStart: [0, 23, 1],
      quietEnd: [0, 23, 1],
    };
    r.mockSetConciergeRules = async (e, t, i) => {
      (await ei(), await sn(e));
      const n = adm2Reason(i),
        o = r.CONCIERGE_BOUNDS,
        s = {};
      for (const [e, [t, a, i]] of Object.entries(o))
        s[e] = (n) => Math.max(t, Math.min(a, Math.round(n / i) * i));
      const { next: a, diff: d } = adm2Apply(Qs(), t, s);
      return (
        (Qt.conciergeRules = a),
        await Za(St, Qt.conciergeRules),
        await (0, w.logAdminAudit)("concierge.rules_changed", e, null, { reason: n, changes: d }),
        a
      );
    };
    r.mockGetConciergeStats = async (e) => {
      (await ei(), await sn(e));
      const t = await (0, w.readAudit)(),
        a = Qt.conciergePredictions;
      let i = 0,
        n = 0,
        r = 0,
        o = 0;
      for (const e of a) {
        const t = hi(e.game_id);
        if (t && ((n += e.predicted_fill), "completed" === Ji(t))) {
          const a = Qt.bookings.filter(
              (e) => e.game_id === t.id && ("confirmed" === e.status || ("cancelled" !== e.status && "rejected" !== e.status && "attended" === e.attendance)),
            ).length,
            n = Math.round((a / Math.max(1, t.max_players)) * 100);
          ((r += n), (i += Math.abs(e.predicted_fill - n)), (o += 1));
        }
      }
      return {
        plansGenerated: t.filter((e) => "concierge.plan" === e.type).length,
        autoInvites: t.filter((e) => "concierge.auto_invited" === e.type).length,
        predictions: a.length,
        evaluated: o,
        accuracyPct: o ? Math.round(100 - i / o) : null,
        avgPredictedFill: a.length ? Math.round(n / a.length) : null,
        avgActualFill: o ? Math.round(r / o) : null,
      };
    };
    const ad = (e) => {
        const t = Qt.replacementSettings.find((t) => t.game_id === e.id);
        return (
          t || {
            game_id: e.id,
            mode: "auto",
            radius_km: e.npn_radius_km,
            reservation_minutes: P.DEFAULT_RESERVATION_MIN,
            updated_at: new Date(0).toISOString(),
          }
        );
      },
      id = (e, t = Date.now()) =>
        Qt.replacementOffers.filter(
          (a) => a.game_id === e && "offered" === a.status && new Date(a.reserved_until).getTime() > t,
        ),
      nd = (e, t = Date.now()) => Math.max(0, e.max_players - ki(e.id, t) - id(e.id, t).length),
      rd = async (e) => {
        const t = Date.now();
        let a = !1;
        for (const i of Qt.replacementOffers)
          i.game_id === e.id &&
            "offered" === i.status &&
            new Date(i.reserved_until).getTime() <= t &&
            ((i.status = "expired"),
            (i.responded_at = new Date(t).toISOString()),
            (a = !0),
            await (0, w.logAudit)("replacement.expired", (0, w.actorRef)(i.candidate_id), {
              game: e.id.slice(-6),
            }));
        const i = ad(e);
        if (
          "cancelled" !== e.status &&
          new Date(e.ends_at).getTime() > t &&
          "auto" === i.mode &&
          0 === vi(e.id).length
        ) {
          let n = nd(e, t);
          if (n > 0) {
            const r = fi().find((t) => t.id === e.venue_id);
            if (r) {
              const o = new Set([e.organizer_id]);
              for (const t of Qt.bookings)
                t.game_id === e.id && "cancelled" !== t.status && "rejected" !== t.status && o.add(t.user_id);
              for (const t of Qt.replacementOffers)
                t.game_id !== e.id ||
                  ("offered" !== t.status && "accepted" !== t.status && "declined" !== t.status) ||
                  o.add(t.candidate_id);
              const s = Object.assign({}, e, { npn_radius_km: i.radius_km }),
                d = await ed(s, r, n + P.REPLACEMENT_SHORTLIST, o);
              for (const r of d) {
                if (n <= 0) break;
                Qt.replacementOffers.filter(
                  (e) =>
                    e.candidate_id === r.user_id &&
                    t - new Date(e.created_at).getTime() < P.OFFER_RATE_WINDOW_MS,
                ).length >= P.OFFER_RATE_LIMIT
                  ? await (0, w.logAudit)("replacement.offer_blocked", (0, w.actorRef)(r.user_id), {
                      reason: "rate_limit",
                    })
                  : (await od(e, r.user_id, r.display_name, i.reservation_minutes, !1), (n -= 1), (a = !0));
              }
            }
          }
        }
        return (a && (await Promise.all([Za(vt, Qt.replacementOffers), Za(kt, Qt.replacementSettings)])), a);
      },
      od = async (e, t, a, i, n) => {
        const r = Date.now(),
          o = {
            id: ea(),
            game_id: e.id,
            candidate_id: t,
            candidate_name: a,
            status: "offered",
            reserved_until: new Date(r + 6e4 * i).toISOString(),
            triggered_at: new Date(r).toISOString(),
            manual: n,
            created_at: new Date(r).toISOString(),
            responded_at: null,
          };
        return (
          Qt.replacementOffers.push(o),
          await bi({
            id: ea(),
            user_id: t,
            type: "replacement_offer",
            game_id: e.id,
            offer_id: o.id,
            venue_name: Ai(e.venue_id),
            sport: e.sport,
            minutes: i,
            starts_at: e.starts_at,
            read: !1,
            created_at: new Date(r).toISOString(),
          }),
          await (0, w.logAudit)("replacement.offered", (0, w.actorRef)(t), {
            game: e.id.slice(-6),
            manual: n,
          }),
          o
        );
      },
      sd = (e) => {
        const t = hi(e);
        return t ? Xt(e, () => rd(t)) : Promise.resolve(!1);
      };
    r.mockAcceptReplacement = async (e, t) => {
      await ei();
      const a = Qt.replacementOffers.find((e) => e.id === t);
      if (!a) throw new Error("E_OFFER_NOT_FOUND");
      if (a.candidate_id !== e) throw new Error("E_THIS_OFFER_IS_NOT_YOURS");
      return Xt(a.game_id, async () => {
        const i = Qt.replacementOffers.find((e) => e.id === t);
        if ("offered" !== i.status) throw new Error("E_THIS_OFFER_IS_NO_LONGER_AVAILABLE");
        if (new Date(i.reserved_until).getTime() <= Date.now())
          throw (
            (i.status = "expired"),
            await Za(vt, Qt.replacementOffers),
            new Error("E_THIS_OFFER_HAS_EXPIRED")
          );
        const n = hi(a.game_id);
        if (!n || "cancelled" === n.status) throw new Error("E_MATCH_UNAVAILABLE");
        // This pushed a booking row straight in, checking only capacity and offer expiry - none of
        // the fourteen guards mockJoinMatch applies. A banned or suspended account, a guest, a
        // cross-partition candidate or a player the organizer had closed registration against could
        // all take a seat through an outstanding offer.
        (ra(e, n.audience), md(e), await wd(e));
        if (n.registration_closed_at) throw new Error("E_REGISTRATION_IS_CLOSED");
        const r = Date.now();
        if (ki(n.id, r) + id(n.id, r).filter((e) => e.id !== t).length >= n.max_players)
          throw (
            (i.status = "cancelled"),
            await Za(vt, Qt.replacementOffers),
            new Error("E_THE_MATCH_JUST_FILLED_UP")
          );
        const o = Qt.bookings.find(
          (t) => t.game_id === n.id && t.user_id === e && "cancelled" !== t.status && "rejected" !== t.status,
        );
        if (o) {
          ((i.status = "accepted"),
            (i.responded_at = new Date(r).toISOString()),
            await Za(vt, Qt.replacementOffers));
          const t = "confirmed" === o.status ? null : (Gr(n.id, e) ?? null);
          return { status: o.status, payment_due: Fr(t) };
        }
        const s = Number(n.price_kwd) > 0,
          d = new Date(r).toISOString(),
          l = {
            id: ea(),
            game_id: n.id,
            user_id: e,
            status: s ? "reserved" : "confirmed",
            display_name: or(e),
            attendance: null,
            reserved_until: s ? new Date(r + Jt).toISOString() : null,
            updated_at: d,
            created_at: d,
          };
        (Qt.bookings.push(l), (i.status = "accepted"), (i.responded_at = d));
        const c = s ? await Hr(n, e, l.id) : null;
        return (
          "confirmed" === l.status && zr(n, e),
          await Promise.all([Za(W, Qt.bookings), Za(vt, Qt.replacementOffers)]),
          s || (await Ti(n, or(e), [e])),
          await (0, w.logAudit)("replacement.accepted", (0, w.actorRef)(e), {
            game: n.id.slice(-6),
            fee_kwd: s ? (0, z.roundKwd)(Number(n.price_kwd)) : 0,
            held: s,
          }),
          { status: l.status, payment_due: Fr(c) }
        );
      });
    };
    r.mockDeclineReplacement = async (e, t) => {
      await ei();
      const a = Qt.replacementOffers.find((e) => e.id === t);
      a &&
        a.candidate_id === e &&
        (await Xt(a.game_id, async () => {
          "offered" === a.status &&
            ((a.status = "declined"),
            (a.responded_at = new Date().toISOString()),
            await Za(vt, Qt.replacementOffers),
            await (0, w.logAudit)("replacement.declined", (0, w.actorRef)(e), { game: a.game_id.slice(-6) }));
          const t = hi(a.game_id);
          t && (await rd(t));
        }));
    };
    const dd = (e) => {
      const t = hi(e.game_id);
      return t
        ? Object.assign({}, e, {
            venue_name: Ai(t.venue_id),
            sport: t.sport,
            starts_at: t.starts_at,
            max_players: t.max_players,
            confirmed: Qt.bookings.filter((e) => e.game_id === t.id && "confirmed" === e.status).length,
            expires_in_min: Math.max(
              0,
              Math.round((new Date(e.reserved_until).getTime() - Date.now()) / 6e4),
            ),
          })
        : null;
    };
    r.mockGetMyReplacementOffers = async (e) => (
      await ei(),
      Qt.replacementOffers
        .filter(
          (t) =>
            t.candidate_id === e &&
            "offered" === t.status &&
            new Date(t.reserved_until).getTime() > Date.now(),
        )
        .map(dd)
        .filter((e) => !!e)
    );
    r.mockGetReplacementOffer = async (e, t) => {
      await ei();
      const a = Qt.replacementOffers.find((t) => t.id === e);
      if (!a) return null;
      if (t && a.candidate_id !== t && !ro(t)) {
        const e = hi(a.game_id);
        if (!e || e.organizer_id !== t) return null;
      }
      return dd(a);
    };
    r.mockSetReplacementMode = async (e, t, a) => {
      await ei();
      const i = hi(t);
      if (!i) throw new Error("E_MATCH_NOT_FOUND");
      zi(i, e);
      const n = Qt.replacementSettings.findIndex((e) => e.game_id === t),
        r = Object.assign({}, ad(i), { mode: a, updated_at: new Date().toISOString() });
      return (
        n >= 0 ? (Qt.replacementSettings[n] = r) : Qt.replacementSettings.push(r),
        await Za(kt, Qt.replacementSettings),
        await (0, w.logAudit)("replacement.mode_changed", (0, w.actorRef)(e), { game: t.slice(-6), mode: a }),
        "auto" === a && (await Xt(t, () => rd(hi(t)))),
        r
      );
    };
    r.mockSetReplacementRadius = async (e, t, a) => {
      await ei();
      const i = hi(t);
      if (!i) throw new Error("E_MATCH_NOT_FOUND");
      zi(i, e);
      const n = Qt.replacementSettings.findIndex((e) => e.game_id === t),
        r = Object.assign({}, ad(i), { radius_km: a, updated_at: new Date().toISOString() });
      return (
        n >= 0 ? (Qt.replacementSettings[n] = r) : Qt.replacementSettings.push(r),
        await Za(kt, Qt.replacementSettings),
        "auto" === r.mode && (await Xt(t, () => rd(hi(t)))),
        r
      );
    };
    r.mockManualReplace = async (e, t, a) => {
      await ei();
      const i = hi(t);
      if (!i) throw new Error("E_MATCH_NOT_FOUND");
      // The candidate id comes from the organizer and nothing checked it: not that the profile
      // exists, not the audience partition, not sanctions. The auto path is safe only because its
      // shortlist is pre-filtered, and neither path checked bans - so an offer could reach an
      // account barred from matches, and accepting it seated them.
      if (!Qt.profiles.some((e) => e.id === a)) throw new Error("E_NO_SUCH_PLAYER");
      (ra(a, i.audience), await wd(a));
      (zi(i, e),
        await Xt(t, async () => {
          if (nd(i) <= 0) throw new Error("E_NO_OPEN_SLOTS_TO_FILL");
          const e = ad(i);
          (await od(i, a, or(a), e.reservation_minutes, !0), await Za(vt, Qt.replacementOffers));
        }));
    };
    r.mockGetReplacementState = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) return null;
      (zi(a, e), await sd(t));
      const i = hi(t),
        n = fi().find((e) => e.id === i.venue_id),
        r = new Set([i.organizer_id]);
      for (const e of Qt.bookings)
        e.game_id === t && "cancelled" !== e.status && "rejected" !== e.status && r.add(e.user_id);
      for (const e of id(t)) r.add(e.candidate_id);
      const o = n
        ? await ed(Object.assign({}, i, { npn_radius_km: ad(i).radius_km }), n, P.REPLACEMENT_SHORTLIST, r)
        : [];
      return {
        settings: ad(i),
        open_slots: nd(i),
        waitlist: vi(t).length,
        active_offers: id(t)
          .map(dd)
          .filter((e) => !!e),
        shortlist: o,
      };
    };
    const ld = (e) => {
      const t = new Set(e),
        a = Qt.replacementOffers.filter((e) => t.has(e.game_id)),
        i = a.filter((e) => "accepted" === e.status),
        n = a.filter((e) => "expired" === e.status).length,
        r = i
          .map((e) =>
            e.responded_at
              ? (new Date(e.responded_at).getTime() - new Date(e.triggered_at).getTime()) / 6e4
              : null,
          )
          .filter((e) => null != e && e >= 0),
        o = Qt.bookings.filter((e) => t.has(e.game_id)),
        s = o.filter((e) => "cancelled" === e.status).length,
        d = gi().filter((e) => t.has(e.id)),
        l = d.filter((e) => "cancelled" !== e.status),
        c = l.filter((e) => "completed" === Ji(e)).length,
        _ = o.filter((e) => "confirmed" === e.status).length,
        u = o.filter((e) => "waitlisted" === e.status).length;
      return {
        offers: a.length,
        accepted: i.length,
        expired: n,
        successRate: (0, P.successRate)(i.length, a.length),
        avgTimeToReplaceMin: (0, P.avgTimeToReplaceMin)(r),
        waitlistConversion: _ + u > 0 ? _ / (_ + u) : 0,
        cancellationRate: o.length > 0 ? s / o.length : 0,
        completionRate: l.length > 0 ? c / l.length : 0,
      };
    };
    r.mockGetReplacementMetrics = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      return (zi(a, e), await sd(t), ld([t]));
    };
    r.mockGetReplacementAdminStats = async (e) => (await ei(), await sn(e), ld(gi().map((e) => e.id)));
    const cd = (e) => Qt.sanctions.filter((t) => t.user_id === e && "active" === t.status),
      _d = (e) => (0, D.computeStanding)(cd(e)),
      ud = (e) => {
        const t = _d(e);
        return t.isBanned || t.isSuspended;
      },
      md = (e) => {
        if (e.startsWith("guest:")) throw new Error("E_SIGN_UP_TO_JOIN_BROWSING_IS");
      };
    async function wd(e) {
      if (!ud(e)) return;
      await (0, w.logAudit)("conduct.join_blocked", (0, w.actorRef)(e), {});
      const t = _d(e);
      throw new Error(t.isBanned ? "E_ACCOUNT_BANNED_FROM_MATCHES" : "E_ACCOUNT_SUSPENDED");
    }
    r.mockGetCoCStatus = async (e) => {
      await ei();
      const t = Qt.cocAcceptances.filter((t) => t.user_id === e).sort((e, t) => t.version - e.version)[0];
      return {
        version: D.CURRENT_COC_VERSION,
        accepted: !!t && t.version >= D.CURRENT_COC_VERSION,
        accepted_version: t?.version ?? null,
      };
    };
    r.mockAcceptCoC = async (e) => {
      (await ei(),
        Qt.cocAcceptances.some((t) => t.user_id === e && t.version === D.CURRENT_COC_VERSION) ||
          (Qt.cocAcceptances.push({
            user_id: e,
            version: D.CURRENT_COC_VERSION,
            accepted_at: new Date().toISOString(),
          }),
          await Za(yt, Qt.cocAcceptances),
          await (0, w.logAudit)("conduct.coc_accepted", (0, w.actorRef)(e), {
            version: D.CURRENT_COC_VERSION,
          })));
    };
    r.mockIssueSanction = async (e, t, a) => {
      await ei();
      const i = ro(e) ? "admin" : "organizer";
      if (("organizer" === i && (await on(e), oa(e, t)), e === t))
        throw new Error("E_YOU_CANNOT_SANCTION_YOURSELF");
      if ("organizer" === i) {
        // ORG2 (F-ORG2-8): organizers can only sanction players of a match they organized.
        const g9 = a?.game_id ? hi(a.game_id) : null;
        if (!g9) throw new Error("E_MATCH_NOT_FOUND");
        zi(g9, e);
        if (!Qt.bookings.some((e) => e.game_id === g9.id && e.user_id === t && "cancelled" !== e.status && "rejected" !== e.status))
          throw new Error("E_PLAYER_NOT_IN_THIS_MATCH");
      }
      const n = (0, v.sanitizeText)(a.reason, 400);
      if (!n) throw new Error("E_A_REASON_IS_REQUIRED");
      if ("organizer" === i && ro(t))
        throw (
          await (0, w.logAudit)("conduct.permission_denied", (0, w.actorRef)(e), { target: t.slice(-6) }),
          new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_SANCTION")
        );
      const r = (0, D.needsAdminApproval)(a.type, i),
        o = {
          id: ea(),
          user_id: t,
          type: a.type,
          category: a.category,
          reason: n,
          evidence_url: a.evidence_url ? (0, v.sanitizeText)(a.evidence_url, 300) : null,
          game_id: a.game_id ?? null,
          issued_by: e,
          issuer_role: i,
          status: r ? "pending_approval" : "active",
          created_at: new Date().toISOString(),
          reviewed_by: null,
          reviewed_at: null,
          review_note: null,
        };
      return (
        Qt.sanctions.push(o),
        await Za(gt, Qt.sanctions),
        r
          ? (await br((e) => ({
              id: ea(),
              user_id: e,
              type: "sanction_reviewed",
              sanction_id: o.id,
              sanction_type: o.type,
              upheld: !1,
              read: !1,
              created_at: new Date().toISOString(),
            })),
            await (0, w.logAudit)("conduct.ban_recommended", (0, w.actorRef)(e), {
              target: t.slice(-6),
              type: a.type,
            }))
          : (await bi({
              id: ea(),
              user_id: t,
              type: "sanction_issued",
              sanction_id: o.id,
              sanction_type: o.type,
              reason: n,
              read: !1,
              created_at: new Date().toISOString(),
            }),
            await (0, w.logAudit)("conduct.sanction_issued", (0, w.actorRef)(e), {
              target: t.slice(-6),
              type: a.type,
              category: a.category,
            })),
        o
      );
    };
    // ADM1 (F-ADM1-25): allow-listed actions and transition table for sanctions.
    const adm1SanctionTransitions = { pending_approval: ["approve", "reject"], active: ["overturn"] };
    r.mockReviewSanction = async (e, t, a, i) => {
      (await ei(), await sn(e));
      const n = Qt.sanctions.find((e) => e.id === t);
      if (!n) throw new Error("E_SANCTION_NOT_FOUND");
      await _n(e, un(n.user_id), "admin.review_sanction");
      // ADM1 (F-ADM1-29): the issuer cannot approve, reject or overturn their own sanction.
      if (n.issued_by === e)
        throw (
          await (0, w.logAdminAudit)("conduct.self_review_blocked", e, n.user_id, {
            sanction: t.slice(-6),
            action: String(a),
          }),
          new Error("E_YOU_CANNOT_REVIEW_YOUR_OWN")
        );
      if (!(adm1SanctionTransitions[n.status] ?? []).includes(a)) throw new Error("E_INVALID_TRANSITION");
      // ADM1 (F-ADM1-24): every decision carries a note that is stored, audited and sent to the player.
      const r = (0, v.sanitizeText)(i ?? "", 300);
      if (!r) throw new Error("E_A_REASON_IS_REQUIRED");
      const o = n.status,
        s = "approve" === a ? "active" : "reject" === a ? "rejected" : "overturned";
      ((n.reviewed_by = e),
        (n.reviewed_at = new Date().toISOString()),
        (n.review_note = r),
        (n.status = s),
        await Za(gt, Qt.sanctions));
      const d = "approve" === a;
      return (
        await bi({
          id: ea(),
          user_id: n.user_id,
          type: "sanction_reviewed",
          sanction_id: n.id,
          sanction_type: n.type,
          upheld: d,
          decision: s,
          note: r,
          read: !1,
          created_at: new Date().toISOString(),
        }),
        await (0, w.logAdminAudit)("conduct.sanction_reviewed", e, n.user_id, {
          sanction: t.slice(-6),
          decision: a,
          type: n.type,
          from: o,
          to: s,
          reason: r,
        }),
        n
      );
    };
    r.mockRestoreUser = async (e, t, a) => {
      (await ei(), await sn(e));
      // ADM1 (F-ADM1-26): same partition rule as every other conduct action, and a reason on record.
      if (!Qt.profiles.some((e) => e.id === t)) throw new Error("E_NO_SUCH_PLAYER");
      await _n(e, un(t), "admin.restore_user");
      const i = (0, v.sanitizeText)(a ?? "", 300);
      if (!i) throw new Error("E_A_REASON_IS_REQUIRED");
      const n = [];
      for (const a of Qt.sanctions)
        a.user_id !== t ||
          "active" !== a.status ||
          ("ban" !== a.type && "suspension" !== a.type) ||
          ((a.status = "overturned"),
          (a.reviewed_by = e),
          (a.reviewed_at = new Date().toISOString()),
          (a.review_note = i),
          n.push(a.id.slice(-6)));
      return (
        n.length &&
          (await Za(gt, Qt.sanctions),
          await bi({
            id: ea(),
            user_id: t,
            type: "sanction_reviewed",
            sanction_id: "restore",
            sanction_type: "ban",
            upheld: !1,
            decision: "overturned",
            note: i,
            read: !1,
            created_at: new Date().toISOString(),
          }),
          await (0, w.logAdminAudit)("conduct.user_restored", e, t, {
            lifted: n.length,
            sanctions: n,
            from: "active",
            to: "overturned",
            reason: i,
          })),
        n.length
      );
    };
    const pd = (e) =>
      Object.assign({}, e, {
        issuer_name: "admin" === e.issuer_role ? "Platform Admin" : or(e.issued_by),
        target_name: or(e.user_id),
      });
    r.mockGetUserSanctions = async (e, t) => {
      if ((await ei(), t !== e && !ro(t))) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW_2");
      return Qt.sanctions
        .filter((t) => t.user_id === e)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map(pd);
    };
    r.mockGetDisciplinaryStanding = async (e) => (await ei(), _d(e));
    r.mockGetIncidentQueue = async (e) => {
      (await ei(), await sn(e));
      return (await cn(e, Qt.sanctions, (e) => un(e.user_id), "admin.incident_queue"))
        .slice()
        .sort(
          (e, t) =>
            ("pending_approval" === e.status ? 0 : 1) - ("pending_approval" === t.status ? 0 : 1) ||
            new Date(t.created_at).getTime() - new Date(e.created_at).getTime(),
        )
        .map(pd);
    };
    r.mockGetConductAdminStats = async (e) => {
      (await ei(), await sn(e));
      // ADM1 (F-ADM1-10): tiles are computed over the same partitioned set as the incident queue.
      const t = adm1Visible(e, Qt.sanctions, (e) => un(e.user_id)),
        a = (e) => t.filter((t) => t.type === e && "active" === t.status).length,
        i = Qt.profiles.filter((e) => "admin" !== e.role && "analyst" !== e.role),
        n = new Set(
          Qt.cocAcceptances.filter((e) => e.version >= D.CURRENT_COC_VERSION).map((e) => e.user_id),
        );
      return {
        total: t.length,
        active: t.filter((e) => "active" === e.status).length,
        pending: t.filter((e) => "pending_approval" === e.status).length,
        warnings: a("warning"),
        yellowCards: a("yellow_card"),
        redCards: a("red_card"),
        suspensions: a("suspension"),
        bans: a("ban"),
        cocAcceptanceRate: i.length ? [...i].filter((e) => n.has(e.id)).length / i.length : 0,
      };
    };
    r.mockGetCoCVersion = () => D.CURRENT_COC_VERSION;
    // ADM2 (F-ADM2-1/4): platform-wide settings are validated against their defaults, require a reason,
    // and are audited with a per-key before/after diff.
    const adm2Apply = (e, t, a, i) => {
      const n = Object.assign({}, e),
        r = [];
      for (const [o, s] of Object.entries(t ?? {})) {
        if ("updated_at" === o) continue;
        if (!(o in e)) throw new Error("E_INVALID_VALUE");
        const d = Number(s);
        if (!Number.isFinite(d)) throw new Error("E_INVALID_VALUE");
        const l = a[o] ?? a["*"] ?? ((e) => e),
          c = l(d);
        c !== e[o] && (r.push({ key: o, from: e[o], to: c }), (n[o] = c));
      }
      return ((n.updated_at = new Date().toISOString()), { next: n, diff: r });
    };
    // ADM2 (F-ADM2-2): access to a read-only dashboard is recorded once per admin per day.
    const adm2LoggedToday = new Set();
    const adm2LogOncePerDay = async (e, t) => {
      const a = `${e}:${t}:${new Date().toISOString().slice(0, 10)}`;
      adm2LoggedToday.has(a) || (adm2LoggedToday.add(a), await (0, w.logAudit)(e, (0, w.actorRef)(t), {}));
    };
    const adm2Reason = (e) => {
      const t = (0, v.sanitizeText)(e ?? "", 200);
      if (t.length < 3) throw new Error("E_A_REASON_IS_REQUIRED");
      return t;
    };
    const fd = () => Qt.demandWeights ?? O.DEFAULT_DEMAND_WEIGHTS,
      gd = (e) => Math.min(1, Math.max(0, e)),
      hd = async (e, t) => {
        (await ei(), await tn(), await on(e));
        const a = fd(),
          i = t.sport,
          n = (await Js(e, { sport: i, area: t.area, limit: 1 }))[0];
        if (!n) return null;
        const r = new Date(n.starts_at),
          o = (r.getTime() - Date.now()) / 36e5,
          s = n.predicted_fill / 100,
          d = (n.factors.demand ?? 60) / 100,
          l = (n.factors.weather ?? 70) / 100,
          c = Qt.profiles
            .filter(
              (e) =>
                "admin" !== e.role &&
                "analyst" !== e.role &&
                (e.preferred_sports.includes(i) || 0 === e.preferred_sports.length),
            )
            .slice(0, 12);
        let _ = 0;
        for (const e of c) _ += (await Nn(e.id, i)).reliability / 100;
        const u = c.length ? _ / c.length : 0.7,
          m = await Zi(e),
          p = gd((1 - d) * (n.suggested_price_kwd > 0 ? 1 : 0.4)),
          f = (0, O.cancellationRisk)(
            { organizerCancelRate: m.cancellationRate, predictedFill: s, leadHours: o, priceVsDemand: p },
            a,
          ),
          g = (0, O.noShowRisk)({ rosterReliability: u, weatherScore: l, hour: r.getHours() }, a),
          h = (0, O.estimateTimeToFillHours)(s, d, a),
          k = Qt.profiles.filter((e) => e.preferred_sports.includes(i)).length,
          v = y.SPORT_SCALES[i],
          S = Qt.skillProfiles.filter((e) => e.sport === i).map((e) => e.rating),
          E = (0, U.recommendSkillBand)(S, 1, v.min, v.max);
        return (
          await (0, w.logAudit)("demand.predicted", (0, w.actorRef)(e), { sport: i, fill: n.predicted_fill }),
          {
            sport: i,
            venue_id: n.venue_id,
            venue_name: n.venue_name,
            area: n.area,
            starts_at: n.starts_at,
            ends_at: n.ends_at,
            suggested_price_kwd: n.suggested_price_kwd,
            predicted_fill: n.predicted_fill,
            fill_band_key: (0, O.demandBand)(n.predicted_fill).key,
            demand_band_key: (0, O.demandBand)(n.predicted_fill).key,
            time_to_fill_hours: h,
            cancellation_risk: Math.round(100 * f),
            cancel_band_key: (0, O.riskBand)(f).key,
            no_show_risk: Math.round(100 * g),
            no_show_band_key: (0, O.riskBand)(g).key,
            weather_key: n.weather_key,
            weather_emoji: n.weather_emoji,
            weather_score: Math.round(100 * l),
            recommended_players: Zs[i].players,
            recommended_skill_level: null != E.min ? "intermediate" : "all",
            recommended_skill_min: E.min,
            recommended_skill_max: E.max,
            travel_radius_km: (0, O.recommendTravelRadiusKm)(k),
            school_break: (0, O.isSchoolBreak)(r),
            local_event_impact: Math.round(100 * (0, O.localEventImpact)(r)),
            factors: n.factors,
          }
        );
      };
    r.mockGetDemandPrediction = hd;
    r.mockRecordDemandOutcome = async (e, t, a, i) => {
      (await ei(),
        Qt.demandLog.push({
          id: ea(),
          organizer_id: e,
          sport: t,
          predicted_fill: a,
          accepted: i,
          created_at: new Date().toISOString(),
        }),
        await Za(ke, Qt.demandLog),
        await (0, w.logAudit)(i ? "demand.accepted" : "demand.ignored", (0, w.actorRef)(e), {
          sport: t,
          fill: a,
        }));
    };
    r.mockGetDemandWeights = async (e) => (await ei(), await sn(e), fd());
    r.mockSetDemandWeights = async (e, t, i) => {
      (await ei(), await sn(e));
      const n = adm2Reason(i),
        { next: a, diff: r } = adm2Apply(fd(), t, {
          timeToFillHours: (e) => Math.max(1, Math.min(72, Math.round(e))),
          "*": (e) => Math.max(0, Math.min(1, Math.round(100 * e) / 100)),
        });
      return (
        (Qt.demandWeights = a),
        await Za(ye, Qt.demandWeights),
        await (0, w.logAdminAudit)("demand.weights_changed", e, null, { reason: n, changes: r }),
        a
      );
    };
    r.mockGetDemandModelStats = async (e) => {
      (await ei(), await sn(e));
      const t = gi().filter((e) => "completed" === Ji(e));
      let a = 0,
        i = 0,
        n = 0,
        r = 0;
      for (const e of t) {
        const t = td(e),
          o = Qt.bookings.filter(
            (t) => t.game_id === e.id && ("confirmed" === t.status || ("cancelled" !== t.status && "rejected" !== t.status && "attended" === t.attendance)),
          ).length,
          s = Math.round((o / Math.max(1, e.max_players)) * 100);
        ((a += Math.abs(t - s)), (i += t), (n += s), (r += 1));
      }
      const o = Qt.demandLog.filter((e) => e.accepted).length,
        // ADM2 (F-ADM2-12): the tuned weights are measured on their own model. Every past match is
        // scored with the current cancellation weights; a useful model scores matches that were
        // actually cancelled higher than the ones that went ahead. The gap moves when the weights move.
        s9 = fd(),
        d9 = gi().filter((e) => "cancelled" === e.status || "completed" === Ji(e)),
        l9 = [],
        c9 = [];
      for (const e of d9) {
        const t = Qt.bookings.filter((t) => t.game_id === e.id && "confirmed" === t.status).length,
          a = (new Date(e.starts_at).getTime() - new Date(e.created_at).getTime()) / 36e5,
          n = (0, O.cancellationRisk)(
            {
              organizerCancelRate: 0,
              predictedFill: Math.min(1, t / Math.max(1, e.max_players)),
              leadHours: Number.isFinite(a) ? a : 48,
              priceVsDemand: Math.min(1, (e.price_kwd ?? 0) / 10),
            },
            s9,
          );
        ("cancelled" === e.status ? l9 : c9).push(n);
      }
      const _9 = (e) => (e.length ? e.reduce((e, t) => e + t, 0) / e.length : null),
        u9 = _9(l9),
        m9 = _9(c9);
      return {
        evaluated: r,
        fillModel: "baseline",
        fillAccuracyPct: r ? Math.round(100 - a / r) : null,
        avgPredictedFill: r ? Math.round(i / r) : null,
        avgActualFill: r ? Math.round(n / r) : null,
        predictions: Qt.demandLog.length,
        acceptRatePct: Qt.demandLog.length ? Math.round((o / Qt.demandLog.length) * 100) : null,
        // Weighted-model evaluation (moves with the weights on this screen).
        riskEvaluated: d9.length,
        riskCancelledAvgPct: null === u9 ? null : Math.round(100 * u9),
        riskCompletedAvgPct: null === m9 ? null : Math.round(100 * m9),
        riskSeparationPct: null === u9 || null === m9 ? null : Math.round(100 * (u9 - m9)),
      };
    };
    const yd = () => Qt.optimizerWeights ?? R.DEFAULT_OPTIMIZER_WEIGHTS,
      kd = (e, t, a) => {
        const i = Qt.courts.find((a) => a.venue_id === e && a.sport === t && a.active);
        return i ? vd(i.price_per_hour_kwd * (a / 60)) : 0;
      },
      vd = (e) => Math.round(10 * e) / 10;
    r.mockGetMatchOptimization = async (e, t) => {
      (await ei(), await tn(), await on(e));
      const a = yd(),
        i = t.sport,
        n = new Set(t.locks ?? []),
        r = await hd(e, { sport: i, area: t.area });
      if (!r) return null;
      const o = new Date(r.starts_at),
        s = Math.max(30, Math.round((new Date(r.ends_at).getTime() - o.getTime()) / 6e4)),
        d = (o.getTime() - Date.now()) / 36e5,
        l = gd(r.predicted_fill / 100),
        c = gd(r.cancellation_risk / 100),
        _ = gd(r.no_show_risk / 100),
        u = gd(r.weather_score / 100),
        m = gd((r.factors.venue ?? 70) / 100),
        p = 1 - _,
        f = r.recommended_players,
        g = Er(r.venue_id),
        h = kd(r.venue_id, i, s) + ("fixed" === g.type ? g.value : 0),
        y = "percentage" === g.type ? g.value : 0,
        k = Math.max(1, Math.round(f * l)),
        v = h / k / Math.max(0.5, 1 - y / 100),
        S = Math.max(r.suggested_price_kwd, Math.round(1.3 * v * 4) / 4),
        E = {
          venue_id: r.venue_id,
          venue_name: r.venue_name,
          area: r.area,
          starts_at: r.starts_at,
          ends_at: r.ends_at,
          duration_minutes: s,
          price_kwd: S,
          max_players: f,
          skill_level: r.recommended_skill_level,
          skill_min: r.recommended_skill_min,
          skill_max: r.recommended_skill_max,
          radius_km: r.travel_radius_km,
          waitlist_cap: Math.max(2, Math.round(0.4 * f)),
          auto_invite: !0,
          auto_replacement: !0,
          notification_offsets: (0, R.notificationOffsets)(l, d),
        },
        b = (0, R.playerSatisfaction)(
          { skillFit: 0.85, priceFairness: 1, venueQuality: m, fill: l, weather: u, reliability: p },
          a,
        ),
        T = (0, R.matchSuccess)({ fill: l, cancelRisk: c, noShowRisk: _, satisfaction: b / 100 }, a),
        A = (0, R.revenueEstimate)(S, f, l),
        D = (0, R.profitEstimate)(A, h, y),
        I = Math.round(100 * (1 - u)),
        M = {
          fill_pct: r.predicted_fill,
          fill_band_key: r.fill_band_key,
          time_to_fill_hours: r.time_to_fill_hours,
          cancellation_risk: r.cancellation_risk,
          cancel_band_key: r.cancel_band_key,
          no_show_risk: r.no_show_risk,
          no_show_band_key: r.no_show_band_key,
          weather_risk: I,
          weather_band_key: (0, O.riskBand)(1 - u).key,
          weather_emoji: r.weather_emoji,
          weather_key: r.weather_key,
          revenue_kwd: A,
          profit_kwd: D,
          satisfaction_pct: b,
          satisfaction_band_key: (0, R.satisfactionBand)(b).key,
          success_pct: T,
          success_band_key: (0, R.successBand)(T).key,
        };
      let N = null;
      if (null != t.starts_at || null != t.price_kwd || null != t.venue_id) {
        const e = t.starts_at ? new Date(t.starts_at).getHours() : o.getHours(),
          i = G.EVENING_HOURS.includes(e) ? 1 : 0.85,
          n = gd(l * i),
          r = null != t.price_kwd ? t.price_kwd : S,
          s = (0, R.playerSatisfaction)(
            {
              skillFit: 0.85,
              priceFairness: (0, R.priceFairness)(r, S),
              venueQuality: m,
              fill: n,
              weather: u,
              reliability: p,
            },
            a,
          );
        N = (0, R.matchSuccess)({ fill: n, cancelRisk: c, noShowRisk: _, satisfaction: s / 100 }, a);
      }
      const C = [],
        P = (e, t, a) => {
          n.has(e) || C.push({ key: e, actionable: t, why: a });
        },
        L = `${o.getHours()}:${String(o.getMinutes()).padStart(2, "0")}`;
      if (
        ((t.venue_id && t.venue_id === E.venue_id) ||
          P("venue", !0, { k: "whyRecVenue", p: { venue: Ai(E.venue_id) } }),
        (t.starts_at && Un(t.starts_at, o)) || P("date", !0, { k: "whyRecDate" }),
        (t.starts_at &&
          new Date(t.starts_at).getHours() === o.getHours() &&
          new Date(t.starts_at).getMinutes() === o.getMinutes()) ||
          P("time", !0, { k: "whyRecTime", p: { time: L } }),
        t.starts_at && t.ends_at)
      ) {
        const e = Math.round((new Date(t.ends_at).getTime() - new Date(t.starts_at).getTime()) / 6e4);
        (0, R.materiallyDiffers)(e, s, 0.1) &&
          P("duration", !0, { k: "whyRecDuration", p: { min: String(s) } });
      }
      return (
        (0, R.materiallyDiffers)(t.price_kwd ?? 0, S, 0.12, 0.25) &&
          P("price", !0, { k: "whyRecPrice", p: { cost: h.toFixed(3), n: String(k) } }),
        null != t.max_players &&
          t.max_players !== E.max_players &&
          P("capacity", !0, { k: "whyRecCapacity", p: { n: String(E.max_players) } }),
        t.skill_level && t.skill_level !== E.skill_level && P("skill", !0, { k: "whyRecSkill" }),
        P("radius", !1, { k: "whyRecRadius" }),
        t.auto_replacement || P("replacement", !1, { k: "whyRecReplacement" }),
        (t.waitlist_cap ?? 0) <= 0 && P("waitlist", !0, { k: "whyRecWaitlist" }),
        !1 === t.auto_invite && P("autoInvite", !0, { k: "whyRecAutoInvite" }),
        P("notifications", !1, { k: "whyRecNotifications" }),
        await (0, w.logAudit)("optimizer.generated", (0, w.actorRef)(e), {
          sport: i,
          success: T,
          recs: C.length,
        }),
        {
          sport: i,
          predictions: M,
          current_success_pct: null != N && N < T - 2 ? N : null,
          recommendations: C,
          optimal: E,
          school_break: r.school_break,
          generated_at: new Date().toISOString(),
        }
      );
    };
    r.mockRecordOptimizerDecision = async (e, t, a, i, n) => {
      (await ei(),
        Qt.optimizerLog.push({
          id: ea(),
          organizer_id: e,
          sport: t,
          decision: a,
          field: i,
          predicted_success: n,
          created_at: new Date().toISOString(),
        }),
        await Za(Se, Qt.optimizerLog));
      const r =
        "accept_all" === a
          ? "optimizer.accept_all"
          : "accept" === a
            ? "optimizer.accept"
            : "lock" === a
              ? "optimizer.lock"
              : "optimizer.ignored";
      await (0, w.logAudit)(r, (0, w.actorRef)(e), { sport: t, field: i ?? "", success: n });
    };
    r.mockGetOptimizerWeights = async (e) => (await ei(), await sn(e), yd());
    r.mockSetOptimizerWeights = async (e, t, i) => {
      (await ei(), await sn(e));
      const n = adm2Reason(i),
        { next: a, diff: r } = adm2Apply(yd(), t, { "*": (e) => Math.max(0, Math.min(1, Math.round(100 * e) / 100)) });
      return (
        (Qt.optimizerWeights = a),
        await Za(ve, Qt.optimizerWeights),
        await (0, w.logAdminAudit)("optimizer.weights_changed", e, null, { reason: n, changes: r }),
        a
      );
    };
    const Sd = {
        successFill: "fiFill",
        successLowCancel: "fiLowCancel",
        successLowNoShow: "fiLowNoShow",
        successSatisfaction: "fiSatisfaction",
        satSkillFit: "fiSkillFit",
        satPriceFairness: "fiPriceFairness",
        satVenueQuality: "fiVenueQuality",
        satFill: "fiFillSignal",
        satWeather: "fiWeather",
        satReliability: "fiReliability",
      },
      Ed = 6048e5;
    r.mockGetOptimizerDashboard = async (e) => {
      (await ei(), await sn(e));
      const t = gi().filter((e) => "completed" === Ji(e));
      let a = 0,
        i = 0,
        n = 0,
        r = 0;
      for (const e of t) {
        const t = td(e),
          o = Qt.bookings.filter(
            (t) => t.game_id === e.id && ("confirmed" === t.status || ("cancelled" !== t.status && "rejected" !== t.status && "attended" === t.attendance)),
          ).length,
          s = Math.round((o / Math.max(1, e.max_players)) * 100);
        ((a += Math.abs(t - s)), (i += t), (n += s), (r += 1));
      }
      const o = yd(),
        s = (0, R.normalizeImportance)([
          ...R.SUCCESS_KEYS.map((e) => ({ key: Sd[e], weight: o[e] })),
          ...R.SATISFACTION_KEYS.map((e) => ({ key: Sd[e], weight: o[e] * o.successSatisfaction })),
        ]).slice(0, 8),
        d = Date.now(),
        l = gi(),
        c = [];
      for (let e = 5; e >= 0; e--) {
        const t = d - (e + 1) * Ed,
          a = d - e * Ed;
        c.push(
          l.filter((e) => {
            const i = new Date(e.starts_at).getTime();
            return i >= t && i < a;
          }).length,
        );
      }
      const _ = l.filter((e) => "scheduled" === e.status && new Date(e.starts_at).getTime() >= d),
        u = [],
        m = [];
      for (let e = 0; e < 4; e++) {
        const t = d + e * Ed,
          a = d + (e + 1) * Ed,
          i = _.filter((e) => {
            const i = new Date(e.starts_at).getTime();
            return i >= t && i < a;
          });
        let n = 0,
          r = 0;
        for (const e of i) {
          const t = td(e) / 100;
          ((n += (0, R.revenueEstimate)(e.price_kwd, e.max_players, t)), (r += td(e)));
        }
        (u.push(Math.round(n)), m.push(i.length ? Math.round(r / i.length) : 0));
      }
      const w = Qt.optimizerLog.filter((e) => "accept_all" === e.decision || "accept" === e.decision).length,
        p = Qt.optimizerLog.length;
      return {
        prediction_accuracy_pct: r ? Math.round(100 - a / r) : 0,
        evaluated: r,
        avg_predicted_fill: r ? Math.round(i / r) : 0,
        avg_actual_fill: r ? Math.round(n / r) : 0,
        decisions: p,
        accept_rate_pct: p ? Math.round((w / p) * 100) : 0,
        feature_importance: s,
        demand_trend: c,
        revenue_forecast: u,
        capacity_forecast: m,
      };
    };
    const bd = (e) => Qt.users.find((t) => t.id === e)?.email ?? "",
      Td = (e) => Qt.profiles.find((t) => t.id === e)?.full_name || bd(e) || "Member",
      Ad = (e) => Qt.clubs.find((t) => t.id === e),
      Dd = (e, t) => Qt.clubMembers.find((a) => a.club_id === e && a.user_id === t && "active" === a.status),
      Od = (e, t, a) => {
        const i = Ad(e);
        if (!i) throw new Error("club_not_found");
        const n = Dd(e, t);
        if (!n) throw new Error("forbidden");
        const r = (0, I.can)({ role: n.role, orgVerified: i.verified }, a);
        if (!r.allowed) throw new Error(r.reason);
        return { club: i, member: n };
      },
      Rd = () => Za(Ee, Qt.clubs);
    r.mockCreateClub = async (e, t) => {
      await ei();
      const a = t.name.trim();
      if (!a) throw new Error("name_required");
      const i = new Date().toISOString(),
        n = {
          id: ea(),
          name: a,
          type: t.type || "club",
          verified: !1,
          verification_status: "unverified",
          branding: { color: "#E8552D", logo_emoji: "\ud83c\udfdb\ufe0f" },
          timezone: "Asia/Kuwait",
          status: "active",
          created_by: e,
          created_at: i,
          updated_at: i,
        };
      return (
        Qt.clubs.push(n),
        Qt.clubMembers.push({
          id: ea(),
          club_id: n.id,
          user_id: e,
          name: Td(e),
          email: bd(e),
          role: "owner",
          status: "active",
          joined_at: i,
        }),
        await Rd(),
        await Za(be, Qt.clubMembers),
        await (0, w.logAudit)("club.created", (0, w.actorRef)(e), { club: n.id, name: a }),
        n
      );
    };
    r.mockListMyClubs = async (e) => {
      await ei();
      return Qt.clubMembers
        .filter((t) => t.user_id === e && "active" === t.status)
        .map((e) => ({
          club: Ad(e.club_id),
          role: e.role,
          member_count: Qt.clubMembers.filter((t) => t.club_id === e.club_id && "active" === t.status).length,
        }))
        .filter((e) => !!e.club);
    };
    r.mockGetClubDashboard = async (e, t) => {
      await ei();
      const a = Ad(t);
      if (!a) throw new Error("club_not_found");
      const i = Dd(t, e),
        n = "admin" === Qt.profiles.find((t) => t.id === e)?.role;
      if (!i && !n) throw new Error("forbidden");
      const r = i?.role ?? "admin",
        o = (0, I.permissionsForRole)(r),
        s = Qt.clubMembers.filter((e) => e.club_id === t && "active" === e.status),
        d = Qt.clubSubs.find((e) => e.club_id === t && "canceled" !== e.status) ?? null,
        l = o.includes("reports:view"),
        c = l && d ? (0, M.mrr)([{ price: d.price_minor, interval: d.interval, status: d.status }]) : 0,
        _ = l && d ? (0, M.mrr)([{ price: d.price_minor, interval: d.interval, status: "active" }]) : 0;
      return {
        club: a,
        my_role: r,
        my_permissions: o,
        members: s,
        pending_invites: o.includes("members:invite")
          ? Qt.clubInvites.filter((e) => e.club_id === t && "pending" === e.status)
          : [],
        subscription: l ? d : null,
        plans: ft,
        mrr_minor: c,
        monthly_minor: _,
        currency: d?.currency ?? "KWD",
      };
    };
    r.mockSubmitClubVerification = async (e, t) => {
      await ei();
      const { club: a } = Od(t, e, "org:verify_submit");
      if (!(0, I.canTransitionVerification)(a.verification_status, "pending_review"))
        throw new Error("invalid_transition");
      return (
        (a.verification_status = "pending_review"),
        (a.updated_at = new Date().toISOString()),
        await Rd(),
        await (0, w.logAudit)("club.verification_submitted", (0, w.actorRef)(e), { club: t }),
        a
      );
    };
    r.mockReviewClubVerification = async (e, t, a) => {
      (await ei(), await sn(e));
      const i = Ad(t);
      if (!i) throw new Error("club_not_found");
      const n = a ? "verified" : "rejected";
      if (!(0, I.canTransitionVerification)(i.verification_status, n)) throw new Error("invalid_transition");
      return (
        (i.verification_status = n),
        (i.verified = a),
        (i.updated_at = new Date().toISOString()),
        await Rd(),
        await (0, w.logAudit)("club.verified", (0, w.actorRef)(e), { club: t, approved: a }),
        i
      );
    };
    r.mockInviteClubMember = async (e, t, a) => {
      await ei();
      const { member: i } = Od(t, e, "members:invite");
      if (I.ROLE_RANK[a.role] >= I.ROLE_RANK[i.role]) throw new Error("forbidden");
      const n = Date.now() - 864e5;
      if (
        Qt.clubInvites.filter((e) => e.club_id === t && new Date(e.created_at).getTime() >= n).length >=
        I.DEFAULT_QUOTA.free.invitesPerDay
      )
        throw new Error("rate_limited");
      if (
        Qt.clubMembers.filter((e) => e.club_id === t && "active" === e.status).length >=
        I.DEFAULT_QUOTA.free.maxMembers
      )
        throw new Error("quota_exceeded");
      const r = new Date(),
        o = {
          id: ea(),
          club_id: t,
          email: a.email.trim().toLowerCase(),
          role: a.role,
          inviter_id: e,
          token: (ea() + ea()).replace(/-/g, ""),
          status: "pending",
          expires_at: new Date(r.getTime() + I.INVITE_TTL_MS).toISOString(),
          created_at: r.toISOString(),
        };
      return (
        Qt.clubInvites.push(o),
        await Za(Te, Qt.clubInvites),
        await (0, w.logAudit)("club.member_invited", (0, w.actorRef)(e), { club: t, role: a.role }),
        o
      );
    };
    r.mockAcceptClubInvitation = async (e, t) => {
      await ei();
      const a = Qt.clubInvites.find((e) => e.token === t.trim());
      if (!a || !(0, I.isInviteRedeemable)(a, Date.now())) throw new Error("invitation_invalid");
      const i = new Date().toISOString(),
        n = Qt.clubMembers.find((t) => t.club_id === a.club_id && t.user_id === e);
      return (
        n
          ? ((n.status = "active"), (n.role = "owner" === n.role ? "owner" : a.role))
          : Qt.clubMembers.push({
              id: ea(),
              club_id: a.club_id,
              user_id: e,
              name: Td(e),
              email: bd(e) || a.email,
              role: a.role,
              status: "active",
              joined_at: i,
            }),
        (a.status = "accepted"),
        await Za(be, Qt.clubMembers),
        await Za(Te, Qt.clubInvites),
        await (0, w.logAudit)("club.member_joined", (0, w.actorRef)(e), { club: a.club_id, role: a.role }),
        { club_id: a.club_id }
      );
    };
    r.mockStartClubSubscription = async (e, t, a, i) => {
      (await ei(), Od(t, e, "subscriptions:manage"));
      const n = ft.find((e) => e.id === a);
      if (!n) throw new Error("plan_not_found");
      const r = new Date().toISOString(),
        o = i.trial && n.trial_days > 0,
        s = o ? (0, M.trialEnd)(r, n.trial_days) : null,
        d = o ? "trialing" : "active",
        l = {
          id: ea(),
          club_id: t,
          plan_id: n.id,
          status: d,
          price_minor: n.price_minor,
          currency: n.currency,
          interval: n.interval,
          start_at: r,
          trial_end: s,
          next_billing: o ? s : (0, M.nextBillingDate)(r, n.interval, 1),
        };
      return (
        (Qt.clubSubs = Qt.clubSubs.filter((e) => e.club_id !== t)),
        Qt.clubSubs.push(l),
        await Za(Ae, Qt.clubSubs),
        await (0, w.logAudit)("club.subscription_started", (0, w.actorRef)(e), {
          club: t,
          plan: n.id,
          trial: o,
        }),
        l
      );
    };
    const Id = (e) => "admin" === Qt.profiles.find((t) => t.id === e)?.role,
      Md = new Map(),
      Nd = () => Za(ut, Qt.mediaUploads),
      Cd = async (e) =>
        Id(e)
          ? "admin"
          : Qt.venueProfiles.some((t) => t.owner_id === e)
            ? "venue"
            : (await on(e), "organizer"),
      Pd = async (e) => {
        const t = Md.get(e.id);
        if (t) return t;
        const a = (async () => {
          if (Qt.mediaClips.some((t) => t.upload_id === e.id)) return;
          const t = (0, N.detectEvents)(e.id, e.duration_seconds, e.sport),
            a = (0, N.buildClipSet)(t, e.sport, e.clip_length, e.duration_seconds),
            i = new Date().toISOString(),
            n = a.map((a) => ({
              id: ea(),
              upload_id: e.id,
              owner_id: e.owner_id,
              kind: a.kind,
              format: a.format,
              title: `mediaKind_${a.kind}`,
              start_seconds: a.start_seconds,
              end_seconds: a.end_seconds,
              duration_seconds: a.duration_seconds,
              thumbnail_ts: a.thumbnail_ts,
              events: t
                .filter((e) => e.at_seconds >= a.start_seconds && e.at_seconds <= a.end_seconds)
                .slice(0, 6),
              views: Math.round(40 * a.peak_intensity),
              shares: 0,
              player_id: null,
              created_at: i,
            }));
          for (const a of e.player_tags) {
            const r = (0, N.buildClip)(t, "player_reel", e.clip_length, e.duration_seconds);
            r &&
              n.push({
                id: ea(),
                upload_id: e.id,
                owner_id: e.owner_id,
                kind: "player_reel",
                format: r.format,
                title: "mediaKind_player_reel",
                start_seconds: r.start_seconds,
                end_seconds: r.end_seconds,
                duration_seconds: r.duration_seconds,
                thumbnail_ts: r.thumbnail_ts,
                events: [],
                views: 0,
                shares: 0,
                player_id: a,
                created_at: i,
              });
          }
          (Qt.mediaClips.push(...n),
            (e.status = "ready"),
            (e.progress = 100),
            (e.processed_at = i),
            await Za(mt, Qt.mediaClips),
            await Nd(),
            await (0, w.logAudit)("media.processed", (0, w.actorRef)(e.owner_id), {
              upload: e.id,
              clips: n.length,
            }));
        })();
        return (
          Md.set(
            e.id,
            a.finally(() => Md.delete(e.id)),
          ),
          a
        );
      },
      Ld = async (e) => {
        if ("ready" === e.status || "failed" === e.status) return e;
        const t = Date.now() - new Date(e.created_at).getTime();
        if (t < 1500) return e;
        if (t < 5500) {
          const a = Math.min(99, Math.round(((t - 1500) / 4e3) * 100));
          return (
            ("processing" === e.status && e.progress === a) ||
              ((e.status = "processing"), (e.progress = a), await Nd()),
            e
          );
        }
        return (await Pd(e), e);
      };
    r.mockUploadMatchVideo = async (e, t) => {
      await ei();
      const a = await Cd(e);
      if (!t.consent) throw new Error("consent_required");
      const i = {
        id: ea(),
        owner_id: e,
        owner_kind: a,
        game_id: t.game_id ?? null,
        sport: t.sport,
        title: t.title.trim() || "Match",
        duration_seconds: Math.max(30, Math.min(7200, Math.round(t.duration_seconds))),
        status: "queued",
        progress: 0,
        visibility: t.visibility ?? "unlisted",
        consent: !0,
        watermark: t.watermark ?? !0,
        clip_length: (0, N.clampClipLength)(t.clip_length ?? 30),
        player_tags: (t.player_tags ?? []).slice(0, 8),
        storage_key: `media/${ea()}.mp4`,
        flagged: !1,
        created_at: new Date().toISOString(),
        processed_at: null,
      };
      return (
        Qt.mediaUploads.unshift(i),
        await Nd(),
        await (0, w.logAudit)("media.uploaded", (0, w.actorRef)(e), { upload: i.id, sport: t.sport }),
        i
      );
    };
    r.mockGetMediaLibrary = async (e) => {
      await ei();
      const t = Id(e),
        a = Qt.mediaUploads.filter((a) => t || a.owner_id === e);
      for (const e of a) await Ld(e);
      return a
        .map((e) => ({ upload: e, clip_count: Qt.mediaClips.filter((t) => t.upload_id === e.id).length }))
        .sort((e, t) => new Date(t.upload.created_at).getTime() - new Date(e.upload.created_at).getTime());
    };
    r.mockGetMediaUpload = async (e, t) => {
      await ei();
      const a = Qt.mediaUploads.find((e) => e.id === t);
      if (!a) throw new Error("not_found");
      await Ld(a);
      const i = a.owner_id === e || Id(e);
      if (!i && "private" === a.visibility) throw new Error("forbidden");
      return { upload: a, clips: Qt.mediaClips.filter((e) => e.upload_id === t), can_manage: i };
    };
    r.mockRecordClipView = async (e) => {
      await ei();
      const t = Qt.mediaClips.find((t) => t.id === e);
      t && ((t.views += 1), await Za(mt, Qt.mediaClips));
    };
    r.mockShareClip = async (e, t, a) => {
      await ei();
      const i = Qt.mediaClips.find((e) => e.id === t);
      if (!i) throw new Error("not_found");
      const n = Qt.mediaUploads.find((e) => e.id === i.upload_id);
      if (!(i.owner_id === e || Id(e)) && "public" !== n?.visibility) throw new Error("forbidden");
      return (
        (i.shares += 1),
        Qt.mediaShares.push({
          id: ea(),
          clip_id: t,
          user_id: e,
          platform: a,
          created_at: new Date().toISOString(),
        }),
        await Za(mt, Qt.mediaClips),
        await Za(wt, Qt.mediaShares),
        await (0, w.logAudit)("media.shared", (0, w.actorRef)(e), { clip: t, platform: a }),
        (0, N.sharePayload)(a, n?.title ?? "Match highlight", t, n?.watermark ?? !0)
      );
    };
    r.mockGetClipSignedUrl = async (e, t) => {
      await ei();
      const a = Qt.mediaClips.find((e) => e.id === t);
      if (!a) throw new Error("not_found");
      const i = Qt.mediaUploads.find((e) => e.id === a.upload_id);
      if (!(a.owner_id === e || Id(e)) && "private" === i?.visibility) throw new Error("forbidden");
      const n = new Date(Date.now() + 6e5).toISOString(),
        r = (0, c.randomCode)(40);
      return (
        await (0, w.logAudit)("media.signed_url", (0, w.actorRef)(e), { clip: t }),
        {
          url: `https://cdn.playora.app/${i?.storage_key ?? "media"}/${a.id}?token=${r}&exp=${encodeURIComponent(n)}`,
          expires_at: n,
        }
      );
    };
    r.mockReportClipCopyright = async (e, t, a) => {
      await ei();
      const i = Qt.mediaClips.find((e) => e.id === t);
      if (!i) throw new Error("not_found");
      const n = {
        id: ea(),
        clip_id: t,
        upload_id: i.upload_id,
        reporter_id: e,
        reason: a.trim().slice(0, 500),
        status: "open",
        created_at: new Date().toISOString(),
      };
      Qt.mediaReports.push(n);
      const r = Qt.mediaUploads.find((e) => e.id === i.upload_id);
      return (
        r && ((r.flagged = !0), await Nd()),
        await Za(pt, Qt.mediaReports),
        await (0, w.logAudit)("media.copyright_reported", (0, w.actorRef)(e), { clip: t }),
        n
      );
    };
    r.mockGetMediaDashboard = async (e) => {
      await ei();
      const t = Id(e);
      t || (await on(e));
      const a = Qt.mediaUploads.filter((a) => t || a.owner_id === e);
      for (const e of a) await Ld(e);
      const i = new Set(a.map((e) => e.id)),
        n = Qt.mediaClips.filter((e) => i.has(e.upload_id)),
        r = { queued: 0, processing: 0, ready: 0, failed: 0 };
      for (const e of a) r[e.status] += 1;
      const o = n.reduce((e, t) => e + t.views, 0),
        s = n.reduce((e, t) => e + t.shares, 0),
        d = new Map();
      for (const e of Qt.mediaShares) {
        const t = Qt.mediaClips.find((t) => t.id === e.clip_id);
        t && i.has(t.upload_id) && d.set(e.platform, (d.get(e.platform) ?? 0) + 1);
      }
      const l = [...n]
        .map((e) => ({
          id: e.id,
          kind: e.kind,
          title: e.title,
          views: e.views,
          shares: e.shares,
          engagement: (0, N.engagementScore)(e.views, e.shares),
        }))
        .sort((e, t) => t.engagement - e.engagement)
        .slice(0, 5);
      return {
        uploads: a.length,
        clips: n.length,
        status: r,
        total_views: o,
        total_shares: s,
        engagement: n.reduce((e, t) => e + (0, N.engagementScore)(t.views, t.shares), 0),
        shares_by_platform: [...d.entries()]
          .map(([e, t]) => ({ platform: e, count: t }))
          .sort((e, t) => t.count - e.count),
        top_clips: l,
      };
    };
    const Gd = () => Za(De, Qt.friendships),
      Ud = () => Za(Oe, Qt.groupBookings),
      xd = () => Za(Re, Qt.groupMembers),
      zd = (e, t) =>
        Qt.friendships.find(
          (a) =>
            (a.requester_id === e && a.addressee_id === t) || (a.requester_id === t && a.addressee_id === e),
        );
    r.mockSearchUsers = async (e, t) => {
      await ei();
      const a = t.trim().toLowerCase();
      if (a.length < 1) return [];
      const i = aa(e);
      return Qt.profiles
        .filter(
          (t) =>
            t.id !== e &&
            "admin" !== t.role &&
            "analyst" !== t.role &&
            ia(i, t.audience ?? "male") &&
            !Ho(t.id) &&
            (t.full_name ?? "").toLowerCase().includes(a),
        )
        .slice(0, 20)
        .map((t) => {
          const a = zd(e, t.id),
            i = a
              ? "accepted" === a.status
                ? "friends"
                : a.requester_id === e
                  ? "pending_out"
                  : "pending_in"
              : "none";
          return { id: t.id, name: t.full_name || "Player", relation: i };
        });
    };
    r.mockSendFriendRequest = async (e, t) => {
      if ((await ei(), oa(e, t), e === t)) throw new Error("invalid");
      if (!Qt.profiles.some((e) => e.id === t)) throw new Error("not_found");
      if (zd(e, t)) throw new Error("already_exists");
      (Qt.friendships.push({
        id: ea(),
        requester_id: e,
        addressee_id: t,
        status: "pending",
        created_at: new Date().toISOString(),
      }),
        await Gd(),
        await (0, w.logAudit)("friend.requested", (0, w.actorRef)(e), { target: t.slice(-6) }));
    };
    r.mockRespondFriendRequest = async (e, t, a) => {
      await ei();
      const i = Qt.friendships.find(
        (a) => a.requester_id === t && a.addressee_id === e && "pending" === a.status,
      );
      if (!i) throw new Error("not_found");
      a
        ? ((i.status = "accepted"),
          await Gd(),
          await (0, w.logAudit)("friend.accepted", (0, w.actorRef)(e), { from: t.slice(-6) }))
        : ((Qt.friendships = Qt.friendships.filter((e) => e.id !== i.id)),
          await Gd(),
          await (0, w.logAudit)("friend.declined", (0, w.actorRef)(e), { from: t.slice(-6) }));
    };
    const Hd = async (e) => {
      await ei();
      const t = [],
        a = [],
        i = [];
      for (const n of Qt.friendships)
        if ("accepted" !== n.status || (n.requester_id !== e && n.addressee_id !== e))
          "pending" === n.status && n.addressee_id === e
            ? a.push({ id: n.requester_id, name: Td(n.requester_id) })
            : "pending" === n.status &&
              n.requester_id === e &&
              i.push({ id: n.addressee_id, name: Td(n.addressee_id) });
        else {
          const a = n.requester_id === e ? n.addressee_id : n.requester_id;
          t.push({ id: a, name: Td(a) });
        }
      return { friends: t, incoming: a, outgoing: i };
    };
    r.mockListFriends = Hd;
    const Fd = (e) => ({
        allow: !1 !== e.allow_group_booking,
        maxSize: e.max_group_size ?? C.DEFAULT_MAX_GROUP_SIZE,
      }),
      Bd = async (e) => {
        const t = Date.now();
        let a = !1;
        for (const i of Qt.groupBookings.filter((t) => t.game_id === e.id && "reserving" === t.status)) {
          if (new Date(i.expires_at).getTime() > t) continue;
          const e = Qt.groupMembers.filter((e) => e.group_id === i.id),
            n = e.filter(
              (e) => "pending_payment" === e.status || "invited" === e.status || "accepted" === e.status,
            );
          for (const e of n) {
            e.status = "cancelled";
            const t = e.booking_id ? Qt.bookings.find((t) => t.id === e.booking_id) : null;
            t &&
              "reserved" === t.status &&
              ((t.status = "cancelled"),
              (t.reserved_until = null),
              (t.updated_at = new Date().toISOString()));
          }
          ((i.status = e.some((e) => "confirmed" === e.status) ? "confirmed" : "expired"),
            (a = !0),
            await (0, w.logAudit)("group.expired", (0, w.actorRef)(i.leader_id), {
              group: i.id.slice(-6),
              released: n.length,
            }));
        }
        a && (await Za(W, Qt.bookings), await xd(), await Ud(), await Di(e), await rd(e));
      };
    r.mockGetGroupConfig = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("not_found");
      await Xt(t, async () => {
        (await Di(a), await Bd(a));
      });
      const i = Fd(a),
        { friends: n } = await Hd(e);
      return {
        allow: i.allow,
        max_size: i.maxSize,
        price_kwd: a.price_kwd,
        free_slots: Math.max(0, a.max_players - ki(t)),
        friends: n,
      };
    };
    r.mockCreateGroupBooking = async (e, t, a) => {
      await ei();
      const i = hi(t);
      if (!i) throw new Error("not_found");
      if ("scheduled" !== i.status) throw new Error("match_closed");
      if (new Date(i.starts_at).getTime() < Date.now()) throw new Error("match_started");
      return (
        md(e),
        await wd(e),
        Xt(t, async () => {
          (await Di(i), await Bd(i));
          const n = Fd(i);
          if (!n.allow) throw new Error("group_disabled");
          const r = [...new Set(a.friendIds)],
            o = a.guestNames.map((e) => e.trim()).filter(Boolean),
            s = (0, C.groupSeatCount)(r.length, o.length);
          if (s < 2) throw new Error("group_too_small");
          if (s > n.maxSize) throw new Error("group_too_large");
          for (const t of r) {
            if (!Qt.profiles.some((e) => e.id === t)) throw new Error("not_friends");
            oa(e, t);
          }
          const d = (e) =>
            Qt.bookings.some(
              (a) => a.game_id === t && a.user_id === e && yi(a, Date.now()) && "cancelled" !== a.status,
            );
          if (d(e)) throw new Error("already_booked");
          for (const e of r) if (d(e)) throw new Error("already_booked");
          if (s > Math.max(0, i.max_players - ki(t))) throw new Error("not_enough_slots");
          if (
            "custom" === a.paymentMode &&
            !(0, C.validateCustomSplit)(a.customAmounts ?? [], i.price_kwd, s)
          )
            throw new Error("invalid_split");
          const l = Date.now(),
            c = new Date(l).toISOString(),
            _ = new Date(l + C.GROUP_HOLD_MS).toISOString(),
            u = (0, C.splitAmounts)(i.price_kwd, s, a.paymentMode, a.customAmounts),
            m = {
              id: ea(),
              game_id: t,
              leader_id: e,
              payment_mode: a.paymentMode,
              status: "reserving",
              total_kwd: Math.round(i.price_kwd * s * 1e3) / 1e3,
              expires_at: _,
              created_at: c,
            };
          return (
            [
              { user_id: e, name: Td(e), kind: "leader" },
              ...r.map((e) => ({ user_id: e, name: Td(e), kind: "friend" })),
              ...o.map((e) => ({ user_id: null, name: e, kind: "guest" })),
            ].forEach((e, a) => {
              const i = u[a],
                n = !!("guest" === e.kind) || ("leader" !== e.kind && i.payer_is_leader),
                r = ea();
              (Qt.bookings.push({
                id: r,
                game_id: t,
                user_id: e.user_id ?? `guest:${m.id}:${a}`,
                status: "reserved",
                display_name: e.name,
                attendance: null,
                reserved_until: _,
                group_id: m.id,
                created_at: c,
                updated_at: c,
              }),
                Qt.groupMembers.push({
                  id: ea(),
                  group_id: m.id,
                  game_id: t,
                  user_id: e.user_id,
                  name: e.name,
                  kind: e.kind,
                  status: "pending_payment",
                  amount_kwd: i.amount_kwd,
                  paid_by_leader: n,
                  booking_id: r,
                  created_at: c,
                }));
            }),
            Qt.groupBookings.push(m),
            await Za(W, Qt.bookings),
            await xd(),
            await Ud(),
            await (0, w.logAudit)("group.created", (0, w.actorRef)(e), {
              group: m.id.slice(-6),
              seats: s,
              mode: a.paymentMode,
            }),
            m
          );
        })
      );
    };
    const jd = (e, t, a) =>
        t === a
          ? e.filter((e) => "leader" === e.kind || e.paid_by_leader)
          : e.filter((e) => e.user_id === t && !e.paid_by_leader && "leader" !== e.kind),
      qd = async (e, t) => {
        await ei();
        const a = Qt.groupBookings.find((e) => e.id === t);
        if (!a) throw new Error("not_found");
        const i = hi(a.game_id);
        i &&
          (await Xt(i.id, async () => {
            await Bd(i);
          }));
        const n = Qt.groupBookings.find((e) => e.id === t),
          r = Qt.groupMembers.filter((e) => e.group_id === t),
          o = n.leader_id === e,
          s = jd(r, e, n.leader_id)
            .filter((e) => "pending_payment" === e.status)
            .reduce((e, t) => e + t.amount_kwd, 0),
          d = Math.max(0, Math.round((new Date(n.expires_at).getTime() - Date.now()) / 1e3));
        return {
          group: n,
          members: r,
          is_leader: o,
          my_due_kwd: Math.round(1e3 * s) / 1e3,
          seconds_left: "reserving" === n.status ? d : 0,
        };
      };
    r.mockGetGroupBooking = qd;
    r.mockListMyGroups = async (e) => {
      await ei();
      const t = new Set(Qt.groupMembers.filter((t) => t.user_id === e).map((e) => e.group_id));
      return Qt.groupBookings
        .filter((a) => a.leader_id === e || t.has(a.id))
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
    };
    r.mockPayGroup = async (e, t, a = "wallet") => {
      await ei();
      const i = Qt.groupBookings.find((e) => e.id === t);
      if (!i) throw new Error("not_found");
      const n = hi(i.game_id);
      if (!n) throw new Error("not_found");
      if ((ra(e, n.audience), !(0, z.isOnlineMethod)(a))) throw new Error("E_PAY_ONLINE_TO_HOLD_A_SEAT");
      return (
        await Xt(n.id, async () => {
          if ((await Bd(n), "expired" === i.status || "cancelled" === i.status))
            throw new Error("group_expired");
          const r = jd(
            Qt.groupMembers.filter((e) => e.group_id === t),
            e,
            i.leader_id,
          ).filter((e) => "pending_payment" === e.status);
          if (0 === r.length) throw new Error("nothing_due");
          const o = new Date().toISOString(),
            s = (0, z.roundKwd)(r.reduce((e, t) => e + Number(t.amount_kwd ?? 0), 0));
          let d = null;
          if (s > 0) {
            d = await Yr(e, s, "match_payment", t, a);
            for (const i of r)
              Qt.payments.push({
                id: ea(),
                kind: "seat",
                booking_id: i.booking_id ?? t,
                game_id: n.id,
                payer_id: i.user_id ?? e,
                payer_name: or(i.user_id ?? e),
                payee_venue_id: n.venue_id,
                amount_kwd: (0, z.roundKwd)(Number(i.amount_kwd ?? 0)),
                status: "paid",
                method: a,
                gateway_ref: d,
                reminders_sent: 0,
                reserved_until: null,
                paid_at: o,
                refunded_at: null,
                created_at: o,
              });
            (await Za(we, Qt.payments), await rs({ id: t, payer_id: e, amount_kwd: s, game_id: n.id }));
          }
          for (const e of r) {
            e.status = "confirmed";
            const t = e.booking_id ? Qt.bookings.find((t) => t.id === e.booking_id) : null;
            t && ((t.status = "confirmed"), (t.reserved_until = null), (t.updated_at = o));
          }
          (Qt.groupMembers
            .filter((e) => e.group_id === t && "cancelled" !== e.status && "declined" !== e.status)
            .every((e) => "confirmed" === e.status) && (i.status = "confirmed"),
            await Za(W, Qt.bookings),
            await xd(),
            await Ud(),
            await (0, w.logAudit)("group.paid", (0, w.actorRef)(e), {
              group: t.slice(-6),
              seats: r.length,
              method: a,
              amount: s,
            }));
          const l = or(e);
          await Ti(n, r.length > 1 ? `${l} +${r.length - 1}` : l, [
            e,
            ...r.map((e) => e.user_id).filter((e) => !!e),
          ]);
        }),
        qd(e, t)
      );
    };
    r.mockCancelGroupMember = async (e, t, a) => {
      await ei();
      const i = Qt.groupBookings.find((e) => e.id === t);
      if (!i) throw new Error("not_found");
      const n = Qt.groupMembers.find((e) => e.id === a && e.group_id === t);
      if (!n) throw new Error("not_found");
      const r = hi(i.game_id);
      if (!r) throw new Error("not_found");
      if (!(e === i.leader_id || e === n.user_id || e === r.organizer_id || Id(e)))
        throw new Error("forbidden");
      return (
        await Xt(r.id, async () => {
          n.status = "cancelled";
          const o = n.booking_id ? Qt.bookings.find((e) => e.id === n.booking_id) : null;
          o &&
            "cancelled" !== o.status &&
            ((o.status = "cancelled"), (o.reserved_until = null), (o.updated_at = new Date().toISOString()));
          (0 ===
            Qt.groupMembers.filter(
              (e) => e.group_id === t && "cancelled" !== e.status && "declined" !== e.status,
            ).length && (i.status = "cancelled"),
            await Za(W, Qt.bookings),
            await xd(),
            await Ud(),
            await (0, w.logAudit)("group.member_cancelled", (0, w.actorRef)(e), {
              group: t.slice(-6),
              member: a.slice(-6),
            }),
            await Di(r),
            await rd(r));
        }),
        qd(e, t)
      );
    };
    r.mockGetGroupAnalytics = async (e) => {
      await ei();
      const t = Id(e);
      t || (await on(e));
      const a = new Set(
          gi()
            .filter((a) => t || a.organizer_id === e)
            .map((e) => e.id),
        ),
        i = Qt.groupBookings.filter((e) => a.has(e.game_id)),
        n = Qt.groupMembers.filter((e) => a.has(e.game_id)),
        r = i.map((e) => n.filter((t) => t.group_id === e.id).length),
        o = n.filter((e) => "confirmed" === e.status).length,
        s = new Map();
      for (const e of i) s.set(e.payment_mode, (s.get(e.payment_mode) ?? 0) + 1);
      return {
        group_bookings: i.length,
        avg_group_size: (0, C.avgGroupSize)(r),
        confirmed_rate_pct: n.length ? Math.round((o / n.length) * 100) : 0,
        guest_invites: n.filter((e) => "guest" === e.kind).length,
        payment_modes: [...s.entries()]
          .map(([e, t]) => ({ mode: e, count: t }))
          .sort((e, t) => t.count - e.count),
      };
    };
    r.mockGetGameGroups = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      if (a.organizer_id !== e && !Id(e)) throw new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_2");
      return (
        await Xt(t, async () => {
          await Bd(a);
        }),
        Qt.groupBookings
          .filter((e) => e.game_id === t && "cancelled" !== e.status && "expired" !== e.status)
          .map((e) => ({
            group: e,
            leader_name: Td(e.leader_id),
            members: Qt.groupMembers.filter((t) => t.group_id === e.id),
          }))
      );
    };
    r.mockSaveFriendGroup = async (e, t, a) => {
      await ei();
      const i = t.trim().slice(0, 40) || "My group",
        n = [...new Set(a)].filter((e) => Qt.profiles.some((t) => t.id === e)),
        r = aa(e);
      for (const t of n)
        if (!ia(aa(t), r))
          throw (
            await (0, w.logAudit)("group.cross_world_refused", (0, w.actorRef)(e), {
              target: (0, w.actorRef)(t) ?? "unknown",
            }),
            new Error(ta)
          );
      const o = n;
      let s = Qt.savedGroups.find((t) => t.owner_id === e && t.name.toLowerCase() === i.toLowerCase());
      return (
        s
          ? (s.member_ids = o)
          : ((s = { id: ea(), owner_id: e, name: i, member_ids: o, created_at: new Date().toISOString() }),
            Qt.savedGroups.push(s)),
        await Za(Ie, Qt.savedGroups),
        await (0, w.logAudit)("group.saved", (0, w.actorRef)(e), { name: i, size: o.length }),
        s
      );
    };
    const Yd = async (e) => (
      await ei(),
      Qt.savedGroups
        .filter((t) => t.owner_id === e)
        .map((e) => ({
          id: e.id,
          name: e.name,
          member_ids: e.member_ids,
          members: e.member_ids.map((e) => ({ id: e, name: Td(e) })),
        }))
        .sort((e, t) => e.name.localeCompare(t.name))
    );
    r.mockListSavedGroups = Yd;
    r.mockDeleteSavedGroup = async (e, t) => {
      (await ei(),
        (Qt.savedGroups = Qt.savedGroups.filter((a) => !(a.id === t && a.owner_id === e))),
        await Za(Ie, Qt.savedGroups));
    };
    r.mockSetSavedPayment = async (e, t) => {
      await ei();
      const a = Qt.savedPay.includes(e);
      return (
        t && !a && Qt.savedPay.push(e),
        !t && a && (Qt.savedPay = Qt.savedPay.filter((t) => t !== e)),
        await Za(Me, Qt.savedPay),
        await (0, w.logAudit)("pay.method_saved", (0, w.actorRef)(e), { enabled: t }),
        t
      );
    };
    const Wd = (e) => Qt.savedPay.includes(e);
    r.mockGetJoinSuggestions = async (e, t) => {
      await ei();
      const a = new Set(Qt.groupBookings.filter((t) => t.leader_id === e).map((e) => e.id)),
        i = new Map();
      for (const t of Qt.groupMembers)
        a.has(t.group_id) && t.user_id && t.user_id !== e && i.set(t.user_id, (i.get(t.user_id) ?? 0) + 1);
      let n = [...i.entries()]
        .sort((e, t) => t[1] - e[1])
        .slice(0, 5)
        .map(([e]) => ({ id: e, name: Td(e) }));
      0 === n.length && (n = (await Hd(e)).friends.slice(0, 5));
      const r = new Map();
      for (const t of Qt.groupBookings.filter((t) => t.leader_id === e))
        r.set(t.payment_mode, (r.get(t.payment_mode) ?? 0) + 1);
      const o = [...r.entries()].sort((e, t) => t[1] - e[1])[0]?.[0] ?? "group",
        s = Wd(e);
      return {
        frequent_friends: n,
        saved_groups: await Yd(e),
        preferred_payment_mode: o,
        has_saved_payment: s,
        fastest_option: s ? "one_tap" : n.length > 0 ? "friends" : "solo",
      };
    };
    r.mockOneTapJoin = async (e, t) => {
      if ((await ei(), !Wd(e))) throw new Error("no_saved_payment");
      const a = hi(t);
      if (a && Number(a.price_kwd) > 0) {
        const a = await jr(e, t, "wallet");
        return (
          await (0, w.logAudit)("join.one_tap", (0, w.actorRef)(e), {
            game: t.slice(-6),
            status: a.status,
            paid: null != a.receipt,
          }),
          { status: a.status, receipt: a.receipt }
        );
      }
      const i = await ji(t, e);
      return (
        await (0, w.logAudit)("join.one_tap", (0, w.actorRef)(e), { game: t.slice(-6), status: i.status }),
        i
      );
    };
    const Kd = (e) =>
        Qt.follows.filter((t) => t.followee_id === e && "accepted" === t.status).map((e) => e.follower_id),
      $d = (e) =>
        Qt.follows.filter((t) => t.follower_id === e && "accepted" === t.status).map((e) => e.followee_id),
      Vd = (e, t) =>
        Qt.follows.some((a) => a.follower_id === e && a.followee_id === t && "accepted" === a.status),
      Jd = (e, t) =>
        Qt.follows.some((a) => a.follower_id === e && a.followee_id === t && "pending" === a.status),
      Qd = (e) => {
        const t = new Set();
        for (const a of Qt.friendships)
          "accepted" === a.status &&
            (a.requester_id === e ? t.add(a.addressee_id) : a.addressee_id === e && t.add(a.requester_id));
        return t;
      },
      Zd = (e) =>
        new Set(Qt.teamMembers.filter((t) => t.user_id === e && "active" === t.status).map((e) => e.team_id)),
      Xd = (e, t) =>
        Qt.blocks.some(
          (a) => (a.blocker_id === e && a.blocked_id === t) || (a.blocker_id === t && a.blocked_id === e),
        ),
      el = (e, t) => Qt.blocks.some((a) => a.blocker_id === e && a.blocked_id === t),
      tl = (e, t) => Qt.mutes.some((a) => a.muter_id === e && a.muted_id === t),
      al = (e) =>
        Qt.privacySettings.find((t) => t.user_id === e) ??
        Object.assign({ user_id: e }, "female" === aa(e) ? _t : ct),
      il = (e) => Qt.presence.find((t) => t.user_id === e)?.last_active ?? null,
      nl = (e) => {
        if (!al(e).show_online) return !1;
        const t = il(e);
        return !!t && Date.now() - new Date(t).getTime() < 3e5;
      },
      rl = async (e) => {
        const t = Qt.presence.find((t) => t.user_id === e),
          a = Date.now();
        if (t && a - new Date(t.last_active).getTime() < 6e4) return;
        const i = new Date(a).toISOString();
        (t ? (t.last_active = i) : Qt.presence.push({ user_id: e, last_active: i }),
          await Za(Ye, Qt.presence));
      };
    r.mockFollow = async (e, t) => {
      if ((await ei(), e === t)) throw new Error("invalid");
      if (!Qt.profiles.some((e) => e.id === t)) throw new Error("not_found");
      if ((oa(e, t), el(e, t))) throw new Error("blocked");
      if (Qt.follows.find((a) => a.follower_id === e && a.followee_id === t)) return;
      const a = el(t, e),
        i = al(t).profile_visibility,
        n = !a && ("public" === i || Qd(e).has(t));
      (Qt.follows.push({
        id: ea(),
        follower_id: e,
        followee_id: t,
        status: n ? "accepted" : "pending",
        created_at: new Date().toISOString(),
      }),
        await Za(Ne, Qt.follows),
        await (0, w.logAudit)(n ? "social.followed" : "social.follow_requested", (0, w.actorRef)(e), {
          target: t.slice(-6),
        }),
        a ||
          (await bi({
            id: ea(),
            user_id: t,
            type: n ? "new_follower" : "follow_request",
            follower_id: e,
            follower_name: Qt.profiles.find((t) => t.id === e)?.full_name ?? "A player",
            read: !1,
            created_at: new Date().toISOString(),
          })));
    };
    r.mockUnfollow = async (e, t) => {
      (await ei(),
        (Qt.follows = Qt.follows.filter((a) => !(a.follower_id === e && a.followee_id === t))),
        await Za(Ne, Qt.follows),
        await (0, w.logAudit)("social.unfollowed", (0, w.actorRef)(e), { target: t.slice(-6) }));
    };
    r.mockRespondFollowRequest = async (e, t, a) => {
      await ei();
      const i = Qt.follows.find((a) => a.follower_id === t && a.followee_id === e && "pending" === a.status);
      if (!i) throw new Error("no_request");
      a
        ? ((i.status = "accepted"),
          await Za(Ne, Qt.follows),
          await (0, w.logAudit)("social.follow_accepted", (0, w.actorRef)(e), { target: t.slice(-6) }),
          await bi({
            id: ea(),
            user_id: t,
            type: "follow_accepted",
            follower_id: e,
            follower_name: Qt.profiles.find((t) => t.id === e)?.full_name ?? "A player",
            read: !1,
            created_at: new Date().toISOString(),
          }))
        : ((Qt.follows = Qt.follows.filter((e) => e !== i)),
          await Za(Ne, Qt.follows),
          await (0, w.logAudit)("social.follow_declined", (0, w.actorRef)(e), { target: t.slice(-6) }));
    };
    r.mockGetFollowRequests = async (e) => (
      await ei(),
      Qt.follows
        .filter((t) => t.followee_id === e && "pending" === t.status && !Xd(e, t.follower_id))
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map((e) => {
          const t = Qt.profiles.find((t) => t.id === e.follower_id);
          return {
            id: e.follower_id,
            name: Td(e.follower_id),
            avatar_url: t?.avatar_url ?? null,
            username: t?.username ?? null,
            requested_at: e.created_at,
          };
        })
    );
    r.mockGetFollowList = async (e, t, a) => {
      if ((await ei(), t !== e && oa(t, e), t !== e)) {
        if (!("public" === al(e).profile_visibility || Vd(t, e) || Qd(t).has(e)) || el(e, t))
          throw new Error("followers_only");
      }
      const i = aa(e);
      return ("followers" === a ? Kd(e) : $d(e))
        .filter((e) => ia(i, aa(e)))
        .map((e) => {
          const a = Qt.profiles.find((t) => t.id === e);
          return {
            id: e,
            name: Td(e),
            avatar_url: "initials" === a?.avatar_mode ? null : (a?.avatar_url ?? null),
            username: a?.username ?? null,
            is_following: Vd(t, e),
            is_requested: Jd(t, e),
            is_self: e === t,
          };
        });
    };
    r.mockGetSuggestedFollows = async (e) => {
      await ei();
      const t = aa(e),
        a = Qd(e),
        i = Zd(e),
        n = new Set(Qt.follows.filter((t) => t.follower_id === e).map((e) => e.followee_id)),
        r = [];
      for (const o of Qt.profiles) {
        if (o.id === e || n.has(o.id) || "admin" === o.role || "analyst" === o.role) continue;
        if (Ho(o.id)) continue;
        if (!ia(t, o.audience ?? "male")) continue;
        if (Xd(e, o.id) || tl(e, o.id)) continue;
        if ("private" === al(o.id).profile_visibility) continue;
        const s = Qd(o.id);
        let d = 0;
        for (const e of a) s.has(e) && d++;
        const l = Zd(o.id);
        for (const e of i) l.has(e) && d++;
        d > 0 && r.push({ id: o.id, name: o.full_name || "Player", mutuals: d });
      }
      return r.sort((e, t) => t.mutuals - e.mutuals).slice(0, 8);
    };
    r.mockCheckUsername = async (e, t) => {
      await ei();
      const a = String(t ?? "")
        .trim()
        .toLowerCase();
      if (!/^[a-z0-9_]{3,20}$/.test(a)) return { valid: !1, available: !1 };
      const i = aa(e);
      return {
        valid: !0,
        available: !Qt.profiles.some((t) => t.id !== e && t.audience === i && (t.username ?? null) === a),
      };
    };
    r.mockSearchPlayers = async (e, t = {}) => {
      await ei();
      const a = Qd(e),
        i = Zd(e),
        n = (t.query ?? "").trim().toLowerCase(),
        r = (t.area ?? "").trim().toLowerCase(),
        o = new Set(
          gi()
            .filter((e) => e.npn_active)
            .map((e) => e.organizer_id),
        ),
        s = [],
        d = aa(e),
        l = "female" === d,
        c = new Set(
          Qt.bookings
            .filter((t) => t.user_id === e && countsAsParticipant9(t))
            .map((e) => e.game_id),
        ),
        _ = (t) => {
          const i = al(t.id).allow_messages;
          return "none" !== i && ("everyone" === i || Vd(e, t.id) || a.has(t.id));
        };
      for (const u of Qt.profiles) {
        if (u.id === e || "admin" === u.role || "analyst" === u.role) continue;
        if (Ho(u.id)) continue;
        if (!ia(d, u.audience ?? "male")) continue;
        if (Xd(e, u.id) || tl(e, u.id)) continue;
        if ("private" === al(u.id).profile_visibility) continue;
        const m = u.full_name || "Player",
          w = u.username ?? "";
        if (n && !m.toLowerCase().includes(n) && !w.includes(n.replace(/^@/, ""))) continue;
        if (t.sport && !u.preferred_sports.includes(t.sport)) continue;
        if (t.skill && u.skill_level !== t.skill) continue;
        if (r) {
          const e = u.home_area ?? "";
          if (
            !(
              e.toLowerCase().includes(r) ||
              (0, k.areaName)(e, "en").toLowerCase().includes(r) ||
              (0, k.areaName)(e, "ar").includes(t.area ?? "")
            )
          )
            continue;
        }
        const p = o.has(u.id);
        if (t.lookingForGame && !p) continue;
        const f = Qd(u.id),
          g = Zd(u.id);
        let h = 0;
        for (const e of a) f.has(e) && h++;
        for (const e of i) g.has(e) && h++;
        const y = new Set();
        for (const e of Qt.bookings)
          e.user_id !== u.id ||
            (!countsAsParticipant9(e)) ||
            !c.has(e.game_id) ||
            y.add(e.game_id);
        const v = Qt.dmConversations.find((t) => t.id === _l(e, u.id)),
          S = v
            ? v.declined_at
              ? "declined"
              : v.accepted
                ? "active"
                : v.initiator_id === e
                  ? "pending_sent"
                  : "request_in"
            : "none";
        s.push({
          id: u.id,
          name: m,
          username: u.username ?? null,
          avatar_url: "photo" === u.avatar_mode ? u.avatar_url : null,
          skill_level: u.skill_level,
          sports: u.preferred_sports,
          area: l ? null : (u.home_area ?? null),
          looking_for_game: p,
          mutuals: h,
          mutual_games: y.size,
          is_following: Vd(e, u.id),
          is_friend: a.has(u.id),
          online: nl(u.id),
          can_message: _(u),
          dm_state: S,
        });
      }
      const u = s.sort(
          (e, t) =>
            t.mutuals + t.mutual_games - (e.mutuals + e.mutual_games) ||
            Number(t.looking_for_game) - Number(e.looking_for_game) ||
            Number(t.online) - Number(e.online) ||
            e.name.localeCompare(t.name),
        ),
        m = Math.max(0, t.offset ?? 0),
        w = Math.min(20, Math.max(1, t.limit ?? 20));
      return u.slice(m, m + w);
    };
    r.mockGetPlayerProfile = async (e, t) => {
      await ei();
      const a = Qt.profiles.find((e) => e.id === t);
      if (!a) throw new Error("not_found");
      const i = e === t;
      i || oa(e, t);
      const n = !i && el(t, e),
        r = !n && Qd(e).has(t),
        o = !n && Vd(e, t),
        s = al(t).profile_visibility,
        d = n || (!i && ("private" === s || ("followers" === s && !o && !r))),
        l = al(t).allow_messages,
        c = !i && !Xd(e, t) && ("everyone" === l || ("followers" === l && (o || r))),
        _ = {
          user_id: t,
          display_name: a.full_name || "Player",
          username: a.username ?? null,
          avatar_url: i || "initials" !== a.avatar_mode ? a.avatar_url : null,
          followers: Kd(t).length,
          following: $d(t).length,
          is_self: i,
          is_following: o,
          is_requested: !i && Jd(e, t),
          requested_me: !i && !n && !Xd(e, t) && Jd(t, e),
          is_friend: r,
          is_blocked: el(e, t),
          is_muted: tl(e, t),
          can_message: c && !n,
          online: !n && nl(t),
          last_active: !n && al(t).show_online ? il(t) : null,
        };
      if (d)
        return Object.assign({}, _, {
          bio: null,
          favorite_sports: [],
          skill_level: "all",
          matches_played: 0,
          matches_hosted: null,
          attendance: { key: "attendanceUnknown", tone: "neutral", emoji: "" },
          achievements: [],
          badges: [],
          longest_streak: 0,
          teams: [],
          mutual_friends: [],
          mutual_teams: [],
          looking_for_game: !1,
          limited: !0,
          limited_reason: n || "private" !== s ? "followers" : "private",
        });
      const u = await dr(t, e),
        m = Zd(e),
        w = Zd(t),
        p = [...w]
          .map((e) => Qt.teams.find((t) => t.id === e))
          .filter((e) => !!e)
          .map((e) => Object.assign({ id: e.id, name: e.name, emoji: e.logo_emoji }, So(e.id))),
        f = Qd(e),
        g = Qd(t),
        h = [...f].filter((e) => g.has(e)).map((e) => ({ id: e, name: Td(e) })),
        y = [...m]
          .filter((e) => w.has(e))
          .map((e) => {
            const t = Qt.teams.find((t) => t.id === e);
            return { id: e, name: t?.name ?? "Team" };
          }),
        k = gi().some((e) => e.organizer_id === t && e.npn_active);
      return Object.assign({}, _, {
        display_name: u.display_name,
        bio: a.bio,
        favorite_sports: a.preferred_sports,
        skill_level: a.skill_level,
        matches_played: u.matches_played,
        matches_hosted: u.matches_hosted,
        attendance: u.attendance,
        achievements: u.achievements,
        badges: u.badges,
        longest_streak: u.longest_streak,
        teams: p,
        mutual_friends: h,
        mutual_teams: y,
        looking_for_game: k,
        limited: !1,
        limited_reason: null,
      });
    };
    const ol = (e) => {
        const t = e.match(/#[\p{L}0-9_]+/gu) ?? [];
        return [...new Set(t.map((e) => e.slice(1).toLowerCase()))].slice(0, 10);
      },
      sl = (e, t) => ({
        post: e,
        author_id: e.author_id,
        author_name: Td(e.author_id),
        author_username: Qt.profiles.find((t) => t.id === e.author_id)?.username ?? null,
        like_count: Qt.postLikes.filter((t) => t.post_id === e.id).length,
        comment_count: Qt.postComments.filter((t) => t.post_id === e.id).length,
        share_count: Qt.postShares.filter((t) => t.post_id === e.id).length,
        liked: Qt.postLikes.some((a) => a.post_id === e.id && a.user_id === t),
        saved: Qt.postSaves.some((a) => a.post_id === e.id && a.user_id === t),
        clip: e.clip_id ? (Qt.mediaClips.find((t) => t.id === e.clip_id) ?? null) : null,
        media_uri: e.media_uri ?? null,
        media_type: e.media_type ?? null,
      });
    r.mockCreatePost = async (e, t) => {
      await ei();
      const a = t.caption.trim().slice(0, 2e3);
      if (!(a || t.clipId || t.achievementKey || t.mediaUri)) throw new Error("empty_post");
      const i = {
        id: ea(),
        author_id: e,
        kind: t.kind,
        caption: a,
        clip_id: t.clipId ?? null,
        achievement_key: t.achievementKey ?? null,
        media_uri: await Ya(t.mediaUri),
        media_type: t.mediaType ?? null,
        hashtags: ol(a),
        tagged_player_ids: (t.taggedPlayerIds ?? []).slice(0, 20),
        tagged_team_ids: (t.taggedTeamIds ?? []).slice(0, 10),
        created_at: new Date().toISOString(),
      };
      return (
        Qt.posts.unshift(i),
        await Za(Ce, Qt.posts),
        await (0, w.logAudit)("feed.posted", (0, w.actorRef)(e), { kind: t.kind }),
        i
      );
    };
    const dl = async () => {
      if (!Fa()) return;
      if ((await ei(), Qt.posts.some((e) => "seedpost-0001" === e.id))) return;
      const e = (e, t, a, i) => {
          return {
            id: e,
            author_id: t,
            kind: "text",
            caption: a,
            clip_id: null,
            achievement_key: null,
            media_uri: null,
            media_type: null,
            hashtags: ol(a),
            tagged_player_ids: [],
            tagged_team_ids: [],
            created_at: ((n = i), new Date(Date.now() - 60 * n * 60 * 1e3).toISOString()),
          };
          var n;
        },
        t = [
          e(
            "seedpost-0001",
            "demo:hassan-al-otaibi",
            "Late winner at Salmiya Sports Hub tonight \u2014 what a finish. Same time next week? #football #salmiya",
            3,
          ),
          e(
            "seedpost-0002",
            "demo:abdullah-al-hajeri",
            "Padel partners needed for Thursday. Intermediate+, we play to win \ud83c\udfc6 #padel",
            9,
          ),
          e(
            "seedpost-0003",
            "preview-user",
            "Strikers training block done. Ladder top 3 is not a dream, it is a schedule. #clans",
            26,
          ),
          e(
            "seedpost-0004",
            "demo:hassan-al-otaibi",
            "That tennis court at SRF at sunset\u2026 unbeatable. Book early, it fills fast.",
            50,
          ),
          e(
            "seedpost-1001",
            "demo:noura-almutairi",
            "\u0641\u0648\u0632 \u062c\u062f\u064a\u062f \u0644\u0646\u062c\u0645\u0627\u062a \u0633\u0644\u0648\u0649 \ud83c\udf1f \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0623\u0648\u0644 \u0642\u0631\u064a\u0628 \u2014 \u0645\u0646 \u062a\u0646\u0636\u0645 \u0644\u0644\u062a\u0634\u0643\u064a\u0644\u0629 \u0627\u0644\u0642\u0627\u062f\u0645\u0629\u061f #\u0633\u064a\u062f\u0627\u062a #\u0643\u0631\u0629_\u0642\u062f\u0645",
            2,
          ),
          e(
            "seedpost-1002",
            "demo:mariam-alfadhli",
            "Queens run drills every Sunday at PSA ladies hours. Come try one session \u2014 no pressure, all welcome \ud83d\udc51",
            7,
          ),
          e(
            "seedpost-1003",
            "demo:dana-alenezi",
            "\u0623\u062c\u0648\u0627\u0621 \u0627\u0644\u0628\u0627\u062f\u0644 \u0627\u0644\u064a\u0648\u0645 \u0643\u0627\u0646\u062a \u0631\u0647\u064a\u0628\u0629 \u2014 \u0627\u0644\u0645\u0644\u0639\u0628 \u0645\u062d\u062c\u0648\u0632 \u0644\u0646\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u062c\u0627\u064a \u0628\u0625\u0630\u0646 \u0627\u0644\u0644\u0647 #\u0628\u0627\u062f\u0644",
            22,
          ),
          e(
            "seedpost-1004",
            "demo:sara-alharbi",
            "Rockets bounced back 4\u20132. Never count us out \ud83d\ude80",
            47,
          ),
        ];
      Qt.posts.push(...t);
      const a = (e, t) => {
        Qt.postLikes.some((a) => a.post_id === e && a.user_id === t) ||
          Qt.postLikes.push({ post_id: e, user_id: t });
      };
      (a("seedpost-0001", "demo:abdullah-al-hajeri"),
        a("seedpost-0001", "preview-user"),
        a("seedpost-0003", "demo:hassan-al-otaibi"),
        a("seedpost-1001", "demo:mariam-alfadhli"),
        a("seedpost-1001", "demo:dana-alenezi"),
        a("seedpost-1002", "demo:noura-almutairi"),
        await Promise.all([Za(Ce, Qt.posts), Za(Le, Qt.postLikes)]));
    };
    r.mockGetFeed = async (e) => {
      (await ei(), await dl(), await rl(e));
      const t = new Set([...$d(e), e]),
        a = aa(e),
        i = (t) =>
          (t.author_id === e || ia(a, aa(t.author_id))) &&
          (t.author_id === e || (!tl(e, t.author_id) && !Xd(e, t.author_id))),
        n = Qt.posts.filter((e) => t.has(e.author_id)).filter(i);
      return (n.some((t) => t.author_id !== e) ? n : Qt.posts.filter(i))
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map((t) => sl(t, e));
    };
    r.mockGetUserPosts = async (e, t) => (
      await ei(),
      e !== t && oa(e, t),
      Qt.posts
        .filter((e) => e.author_id === t)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
        .map((t) => sl(t, e))
    );
    r.mockToggleLike = async (e, t) => {
      (await ei(), cl(e, t));
      const a = Qt.postLikes.find((a) => a.post_id === t && a.user_id === e);
      return (
        a
          ? (Qt.postLikes = Qt.postLikes.filter((e) => e !== a))
          : (Qt.postLikes.push({ post_id: t, user_id: e }),
            await (0, w.logAudit)("feed.liked", (0, w.actorRef)(e), { post: t.slice(-6) })),
        await Za(Le, Qt.postLikes),
        { liked: !a, count: Qt.postLikes.filter((e) => e.post_id === t).length }
      );
    };
    r.mockToggleSave = async (e, t) => {
      await ei();
      const a = Qt.postSaves.find((a) => a.post_id === t && a.user_id === e);
      return (
        a
          ? (Qt.postSaves = Qt.postSaves.filter((e) => e !== a))
          : Qt.postSaves.push({ post_id: t, user_id: e }),
        await Za(Ge, Qt.postSaves),
        { saved: !a }
      );
    };
    r.mockSharePost = async (e, t) => (
      await ei(),
      Qt.postShares.some((a) => a.post_id === t && a.user_id === e) ||
        (Qt.postShares.push({ post_id: t, user_id: e }), await Za(Ue, Qt.postShares)),
      await (0, w.logAudit)("feed.shared", (0, w.actorRef)(e), { post: t.slice(-6) }),
      {
        share_count: Qt.postShares.filter((e) => e.post_id === t).length,
        deep_link: `https://playora.app/post/${t}`,
      }
    );
    const ll = (e, t) => ({
        id: e.id,
        author_id: e.author_id,
        author_name: Td(e.author_id),
        author_username: Qt.profiles.find((t) => t.id === e.author_id)?.username ?? null,
        text: e.text,
        created_at: e.created_at,
        like_count: Qt.postCommentLikes.filter((t) => t.comment_id === e.id).length,
        liked: Qt.postCommentLikes.some((a) => a.comment_id === e.id && a.user_id === t),
      }),
      cl = (e, t) => {
        const a = Qt.posts.find((e) => e.id === t);
        if (!a) throw new Error("not_found");
        return (oa(e, a.author_id), a);
      };
    r.mockAddComment = async (e, t, a) => {
      (await ei(), cl(e, t));
      const i = a.trim().slice(0, 1e3);
      if (!i) throw new Error("empty_comment");
      const n = { id: ea(), post_id: t, author_id: e, text: i, created_at: new Date().toISOString() };
      return (
        Qt.postComments.push(n),
        await Za(Pe, Qt.postComments),
        await (0, w.logAudit)("feed.commented", (0, w.actorRef)(e), { post: t.slice(-6) }),
        ll(n, e)
      );
    };
    r.mockGetComments = async (e, t) => (
      await ei(),
      cl(e, t),
      Qt.postComments
        .filter((a) => a.post_id === t && !Xd(e, a.author_id) && !tl(e, a.author_id))
        .sort((e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime())
        .map((t) => ll(t, e))
    );
    r.mockToggleCommentLike = async (e, t) => {
      await ei();
      const a = Qt.postComments.find((e) => e.id === t);
      if (!a) throw new Error("not_found");
      cl(e, a.post_id);
      const i = Qt.postCommentLikes.findIndex((a) => a.comment_id === t && a.user_id === e);
      return (
        i >= 0 ? Qt.postCommentLikes.splice(i, 1) : Qt.postCommentLikes.push({ comment_id: t, user_id: e }),
        await Za(ze, Qt.postCommentLikes),
        await (0, w.logAudit)("feed.comment_liked", (0, w.actorRef)(e), { comment: t.slice(-6) }),
        { liked: i < 0, count: Qt.postCommentLikes.filter((e) => e.comment_id === t).length }
      );
    };
    r.mockReportPost = async (e, t, a) => {
      (await ei(),
        Qt.postReports.push({
          id: ea(),
          post_id: t,
          reporter_id: e,
          reason: a.trim().slice(0, 500),
          created_at: new Date().toISOString(),
        }),
        await Za(xe, Qt.postReports),
        await (0, w.logAudit)("feed.reported", (0, w.actorRef)(e), { post: t.slice(-6) }));
    };
    r.mockGetHighlightCollections = async (e) => {
      await ei();
      const t = Qt.mediaClips.filter((t) => t.owner_id === e),
        a = new Map();
      for (const e of t) {
        const t = a.get(e.kind) ?? [];
        (t.push(e), a.set(e.kind, t));
      }
      return [...a.entries()]
        .map(([e, t]) => ({ kind: e, label_key: `mediaKind_${e}`, count: t.length, cover_clip_id: t[0].id }))
        .sort((e, t) => t.count - e.count);
    };
    const _l = (e, t) => {
        const [a, i] = [e, t].sort();
        return `dm:${a}:${i}`;
      },
      ul = (e, t) => (e.participant_ids[0] === t ? e.participant_ids[1] : e.participant_ids[0]),
      ml = (e, t) => e.participant_ids.includes(t),
      wl = (e) =>
        Qt.dmMessages
          .filter((t) => t.conversation_id === e)
          .sort((e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime()),
      pl = (e, t) => {
        const a = ul(e, t),
          i = wl(e.id),
          n = i[i.length - 1],
          r = !!e.declined_at;
        return {
          id: e.id,
          other_id: a,
          other_name: Td(a),
          last_body: n && !n.deleted_at ? n.body : "",
          last_deleted: !!n?.deleted_at,
          last_at: n?.created_at ?? e.created_at,
          unread: i.filter((e) => e.sender_id !== t && !e.read && !e.deleted_at).length,
          is_request: !e.accepted && !r && e.initiator_id !== t,
          pending_sent: !e.accepted && !r && e.initiator_id === t,
          accepted: e.accepted,
          declined: r,
          initiated_by_me: e.initiator_id === t,
          blocked_by_me: el(t, a),
          blocked_me: el(a, t),
        };
      },
      fl = async (e, t) => {
        const a = _l(e, t);
        let i = Qt.dmConversations.find((e) => e.id === a);
        if (!i) {
          const n = Vd(t, e) || Qd(e).has(t),
            r = new Date().toISOString();
          ((i = {
            id: a,
            participant_ids: [e, t].sort(),
            initiator_id: e,
            accepted: n,
            created_at: r,
            last_message_at: r,
          }),
            Qt.dmConversations.push(i),
            await Za(He, Qt.dmConversations));
        }
        return i;
      },
      gl = (e, t) => {
        if ((oa(e, t), Xd(e, t))) throw new Error("blocked");
        const a = al(t).allow_messages;
        if ("none" === a) throw new Error("messages_disabled");
        if ("followers" === a && !Vd(e, t) && !Qd(e).has(t)) throw new Error("messages_followers_only");
      };
    r.mockStartConversation = async (e, t) => {
      if ((await ei(), e === t)) throw new Error("cannot_message_self");
      gl(e, t);
      const a = await fl(e, t);
      return pl(a, e);
    };
    r.mockGetConversations = async (e) => (
      await ei(),
      await rl(e),
      Qt.dmConversations
        .filter((t) => ml(t, e) && wl(t.id).length > 0 && !Xd(t.participant_ids[0], t.participant_ids[1]))
        .map((t) => pl(t, e))
        .sort((e, t) => new Date(t.last_at).getTime() - new Date(e.last_at).getTime())
    );
    r.mockGetUnreadDMCount = async (e) => (
      await ei(),
      Qt.dmMessages.filter((t) => {
        const a = Qt.dmConversations.find((e) => e.id === t.conversation_id);
        return a && ml(a, e) && t.sender_id !== e && !t.read && a.accepted;
      }).length
    );
    r.mockGetThread = async (e, t) => {
      await ei();
      const a = Qt.dmConversations.find((e) => e.id === t);
      if (!a || !ml(a, e)) throw new Error("forbidden");
      let i = !1;
      const n = new Date().toISOString();
      for (const a of Qt.dmMessages)
        a.conversation_id !== t || a.sender_id === e || a.read || ((a.read = !0), (a.read_at = n), (i = !0));
      i && (await Za(Fe, Qt.dmMessages));
      const r = !a.accepted,
        o = wl(t).map((t) => {
          const a = t.sender_id === e;
          return {
            id: t.id,
            body: t.deleted_at ? "" : t.body,
            created_at: t.created_at,
            is_self: a,
            read: (!a || !r) && t.read,
            read_at: a && r ? null : (t.read_at ?? null),
            deleted: !!t.deleted_at,
          };
        });
      return { conversation: pl(a, e), messages: o };
    };
    r.mockSendDirectMessage = async (e, t, a) => {
      await ei();
      const i = Qt.dmConversations.find((e) => e.id === t);
      if (!i || !ml(i, e)) throw new Error("forbidden");
      if (Xd(i.participant_ids[0], i.participant_ids[1])) throw new Error("blocked");
      if (i.declined_at) throw new Error("request_declined");
      const n = (0, v.sanitizeText)(a, 1e3);
      if (!n) throw new Error("empty_message");
      i.accepted ||
        i.initiator_id === e ||
        ((i.accepted = !0),
        await (0, w.logAudit)("dm.request_accepted", (0, w.actorRef)(e), { conv: t.slice(-6) }));
      const r = {
        id: ea(),
        conversation_id: t,
        sender_id: e,
        body: n,
        read: !1,
        created_at: new Date().toISOString(),
      };
      return (
        Qt.dmMessages.push(r),
        (i.last_message_at = r.created_at),
        await Promise.all([Za(Fe, Qt.dmMessages), Za(He, Qt.dmConversations)]),
        await (0, w.logAudit)("dm.sent", (0, w.actorRef)(e), { conv: t.slice(-6) }),
        {
          id: r.id,
          body: r.body,
          created_at: r.created_at,
          is_self: !0,
          read: !1,
          read_at: null,
          deleted: !1,
        }
      );
    };
    r.mockDeclineMessageRequest = async (e, t) => {
      await ei();
      const a = Qt.dmConversations.find((e) => e.id === t);
      if (!a || !ml(a, e)) throw new Error("forbidden");
      if (a.accepted || a.declined_at) throw new Error("not_a_request");
      if (a.initiator_id === e) throw new Error("forbidden");
      ((a.declined_at = new Date().toISOString()),
        await Za(He, Qt.dmConversations),
        await (0, w.logAudit)("dm.request_declined", (0, w.actorRef)(e), { conv: t.slice(-6) }));
    };
    r.mockDeleteDirectMessage = async (e, t) => {
      await ei();
      const a = Qt.dmMessages.find((e) => e.id === t);
      if (!a || a.sender_id !== e) throw new Error("forbidden");
      if (a.deleted_at) throw new Error("already_deleted");
      ((a.deleted_at = new Date().toISOString()),
        await Za(Fe, Qt.dmMessages),
        await (0, w.logAudit)("dm.message_deleted", (0, w.actorRef)(e), {
          conv: a.conversation_id.slice(-6),
        }));
    };
    r.mockAcceptMessageRequest = async (e, t) => {
      await ei();
      const a = Qt.dmConversations.find((e) => e.id === t);
      if (!a || !ml(a, e)) throw new Error("forbidden");
      if (a.declined_at) throw new Error("not_a_request");
      a.accepted ||
        a.initiator_id === e ||
        ((a.accepted = !0),
        await Za(He, Qt.dmConversations),
        await (0, w.logAudit)("dm.request_accepted", (0, w.actorRef)(e), { conv: t.slice(-6) }));
    };
    r.mockBlockUser = async (e, t) => {
      if ((await ei(), e === t)) throw new Error("invalid");
      el(e, t) ||
        (Qt.blocks.push({ blocker_id: e, blocked_id: t, created_at: new Date().toISOString() }),
        (Qt.follows = Qt.follows.filter(
          (a) =>
            !((a.follower_id === e && a.followee_id === t) || (a.follower_id === t && a.followee_id === e)),
        )),
        await Promise.all([Za(Be, Qt.blocks), Za(Ne, Qt.follows)]),
        await (0, w.logAudit)("privacy.blocked", (0, w.actorRef)(e), { target: t.slice(-6) }));
    };
    r.mockUnblockUser = async (e, t) => {
      (await ei(),
        (Qt.blocks = Qt.blocks.filter((a) => !(a.blocker_id === e && a.blocked_id === t))),
        await Za(Be, Qt.blocks),
        await (0, w.logAudit)("privacy.unblocked", (0, w.actorRef)(e), { target: t.slice(-6) }));
    };
    r.mockMuteUser = async (e, t) => {
      if ((await ei(), e === t)) throw new Error("invalid");
      tl(e, t) ||
        (Qt.mutes.push({ muter_id: e, muted_id: t, created_at: new Date().toISOString() }),
        await Za(je, Qt.mutes),
        await (0, w.logAudit)("privacy.muted", (0, w.actorRef)(e), { target: t.slice(-6) }));
    };
    r.mockUnmuteUser = async (e, t) => {
      (await ei(),
        (Qt.mutes = Qt.mutes.filter((a) => !(a.muter_id === e && a.muted_id === t))),
        await Za(je, Qt.mutes),
        await (0, w.logAudit)("privacy.unmuted", (0, w.actorRef)(e), { target: t.slice(-6) }));
    };
    r.mockGetBlockedList = async (e) => (
      await ei(),
      Qt.blocks.filter((t) => t.blocker_id === e).map((e) => ({ id: e.blocked_id, name: Td(e.blocked_id) }))
    );
    r.mockGetPrivacySettings = async (e) => (await ei(), al(e));
    r.mockSetPrivacySettings = async (e, t) => {
      await ei();
      const a = al(e),
        i = Object.assign({}, a, t, { user_id: e }),
        n = Qt.privacySettings.findIndex((t) => t.user_id === e);
      return (
        n >= 0 ? (Qt.privacySettings[n] = i) : Qt.privacySettings.push(i),
        await Za(qe, Qt.privacySettings),
        await (0, w.logAudit)("privacy.settings_changed", (0, w.actorRef)(e), t),
        i
      );
    };
    r.mockTouchPresence = async (e) => {
      (await ei(), await rl(e));
    };
    const hl = () => Qt.stories.filter((e) => new Date(e.expires_at).getTime() > Date.now()),
      yl = (e, t) => Qt.storyViews.some((a) => a.story_id === e && a.viewer_id === t);
    r.mockCreateStory = async (e, t) => {
      await ei();
      const a = (t.text ?? "").trim().slice(0, 280);
      if (!a && !t.clipId && !t.mediaUri) throw new Error("empty_story");
      const i = Date.now(),
        n = {
          id: ea(),
          author_id: e,
          kind: t.kind,
          text: a,
          clip_id: t.clipId ?? null,
          bg_color: t.bgColor ?? null,
          media_uri: await Ya(t.mediaUri),
          created_at: new Date(i).toISOString(),
          expires_at: new Date(i + $e).toISOString(),
        };
      return (
        Qt.stories.unshift(n),
        await Za(We, Qt.stories),
        await (0, w.logAudit)("story.posted", (0, w.actorRef)(e), { kind: t.kind }),
        n
      );
    };
    const kl = async () => {
      if (!Fa()) return;
      const e = [
        ["demo:hassan-al-otaibi", "Padel at 8 tonight \u2014 two spots left \u26a1", "#14532d"],
        ["demo:khalid-aldousari", "Derby week. Fahaheel Turf, Friday. Be loud \ud83d\udd25", "#1e3a8a"],
        [
          "demo:noura-almutairi",
          "\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0644\u064a\u0644\u0629 \u0627\u0644\u0633\u0627\u0639\u0629 \u0667 \u2014 \u0627\u0644\u062d\u0645\u0627\u0633 \u0639\u0627\u0644\u064a \ud83d\udcaa",
          "#831843",
        ],
        [
          "demo:dana-alenezi",
          "\u0645\u064a\u0646 \u062c\u0627\u0647\u0632\u0629 \u0644\u0645\u0628\u0627\u0631\u0627\u0629 \u0627\u0644\u062e\u0645\u064a\u0633\u061f \ud83c\udfbe",
          "#4c1d95",
        ],
      ];
      let t = !1;
      for (const [a, i, n] of e)
        hl().some((e) => e.author_id === a) ||
          (Qt.stories.unshift({
            id: ea(),
            author_id: a,
            kind: "text",
            text: i,
            clip_id: null,
            bg_color: n,
            media_uri: null,
            created_at: new Date().toISOString(),
            expires_at: new Date(Date.now() + $e).toISOString(),
          }),
          (t = !0));
      t && (await Za(We, Qt.stories));
    };
    r.mockGetStoryTray = async (e) => {
      (await ei(), await kl());
      const t = new Set([...$d(e), e]);
      if (Fa() && ![...t].some((t) => t !== e && hl().some((e) => e.author_id === t))) {
        const a = aa(e);
        for (const e of hl()) ia(a, aa(e.author_id)) && t.add(e.author_id);
      }
      const a = new Map();
      for (const i of hl()) {
        if (!t.has(i.author_id)) continue;
        if (i.author_id !== e && (Xd(e, i.author_id) || tl(e, i.author_id))) continue;
        const n = a.get(i.author_id) ?? [];
        (n.push(i), a.set(i.author_id, n));
      }
      return [...a.entries()]
        .map(([t, a]) => ({
          author_id: t,
          author_name: Td(t),
          count: a.length,
          all_seen: a.every((t) => yl(t.id, e)),
          latest_at: a.reduce((e, t) => (t.created_at > e ? t.created_at : e), a[0].created_at),
          is_self: t === e,
        }))
        .sort(
          (e, t) =>
            Number(t.is_self) - Number(e.is_self) ||
            Number(e.all_seen) - Number(t.all_seen) ||
            new Date(t.latest_at).getTime() - new Date(e.latest_at).getTime(),
        );
    };
    r.mockGetAuthorStories = async (e, t) => {
      if ((await ei(), t !== e && oa(e, t), t !== e && Xd(e, t))) throw new Error("blocked");
      const a = hl()
        .filter((e) => e.author_id === t)
        .sort((e, t) => new Date(e.created_at).getTime() - new Date(t.created_at).getTime());
      let i = !1;
      for (const n of a)
        e === t ||
          yl(n.id, e) ||
          (Qt.storyViews.push({ story_id: n.id, viewer_id: e, created_at: new Date().toISOString() }),
          (i = !0));
      return (
        i && (await Za(Ke, Qt.storyViews)),
        {
          author_name: Td(t),
          is_self: e === t,
          items: a.map((e) => ({
            id: e.id,
            kind: e.kind,
            text: e.text,
            bg_color: e.bg_color,
            media_uri: e.media_uri ?? null,
            clip: e.clip_id ? (Qt.mediaClips.find((t) => t.id === e.clip_id) ?? null) : null,
            created_at: e.created_at,
            view_count: Qt.storyViews.filter((t) => t.story_id === e.id).length,
          })),
        }
      );
    };
    const vl = (e) => !!e && "admin" === Qt.profiles.find((t) => t.id === e)?.role,
      Sl = (e) => {
        const t = hi(e),
          a = new Set();
        t && a.add(t.organizer_id);
        for (const t of Qt.bookings)
          t.game_id !== e || (!countsAsParticipant9(t)) || a.add(t.user_id);
        return [...a];
      },
      El = (e, t) => !!t && (t.organizer_id === e || vl(e)),
      bl = (e) => Qt.awardCustom.filter((t) => null === t.match_id || t.match_id === e),
      Tl = (e) => [...S.AWARD_CATALOG.map((e) => e.key), ...bl(e).map((e) => e.key)],
      Al = (e) => {
        const t = Qt.awardCustom.find((t) => t.key === e);
        return t
          ? { label_key: "", emoji: t.emoji, custom_label: t.label }
          : { label_key: (0, S.awardLabelKey)(e), emoji: (0, S.awardEmoji)(e), custom_label: null };
      },
      Dl = async (e) => {
        if ("completed" !== Ji(e)) return null;
        let t = Qt.awardVoting.find((t) => t.match_id === e.id);
        if (!t) {
          const a = e.ends_at;
          ((t = {
            match_id: e.id,
            opens_at: a,
            closes_at: new Date(new Date(a).getTime() + S.DEFAULT_VOTING_WINDOW_MS).toISOString(),
            published: !1,
          }),
            Qt.awardVoting.push(t),
            await Za(Qe, Qt.awardVoting));
          const i = Ai(e.venue_id);
          for (const t of Sl(e.id))
            await bi({
              id: ea(),
              user_id: t,
              type: "award_voting_open",
              game_id: e.id,
              venue_name: i,
              sport: e.sport,
              read: !1,
              created_at: new Date().toISOString(),
            });
        }
        return t;
      },
      Ol = (e) =>
        !e.published &&
        Date.now() >= new Date(e.opens_at).getTime() &&
        Date.now() < new Date(e.closes_at).getTime(),
      Rl = async (e, t) => {
        if (t.published) return;
        const a = (0, S.tallyVotes)(
            Qt.awardVotes
              .filter((t) => t.match_id === e.id)
              .map((e) => ({ award_key: e.award_key, nominee_id: e.nominee_id })),
          ),
          i = (0, S.seasonOf)(e.starts_at),
          n = new Map();
        for (const t of a)
          for (const a of t.winner_ids)
            (Qt.awardWins.push({
              id: ea(),
              match_id: e.id,
              award_key: t.award_key,
              winner_id: a,
              votes: t.votes,
              sport: e.sport,
              season: i,
              created_at: new Date().toISOString(),
              revoked: !1,
              revoked_by: null,
            }),
              n.has(a) || n.set(a, Al(t.award_key).custom_label ?? Al(t.award_key).label_key));
        ((t.published = !0),
          await Promise.all([Za(Je, Qt.awardWins), Za(Qe, Qt.awardVoting)]),
          await (0, w.logAudit)("award.published", (0, w.actorRef)(e.organizer_id), {
            match: e.id.slice(-6),
            awards: a.length,
          }));
        const r = Ai(e.venue_id);
        for (const t of Sl(e.id))
          await bi({
            id: ea(),
            user_id: t,
            type: "award_results",
            game_id: e.id,
            venue_name: r,
            sport: e.sport,
            won_label: n.get(t) ?? null,
            read: !1,
            created_at: new Date().toISOString(),
          });
      },
      Il = async (e) => {
        const t = await Dl(e);
        if (
          (t && !t.published && Date.now() >= new Date(t.closes_at).getTime() && (await Rl(e, t)),
          t && !t.published && !t.close_nudged)
        ) {
          const a = new Date(t.closes_at).getTime() - Date.now();
          if (a > 0 && a <= 108e5) {
            ((t.close_nudged = !0), await Za(Qe, Qt.awardVoting));
            const a = Ai(e.venue_id);
            for (const t of Sl(e.id))
              await bi({
                id: ea(),
                user_id: t,
                type: "award_voting_closing",
                game_id: e.id,
                venue_name: a,
                sport: e.sport,
                read: !1,
                created_at: new Date().toISOString(),
              });
          }
        }
        return t;
      };
    r.mockGetAwardBallot = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("not_found");
      const i = await Il(a),
        n = Sl(t),
        r = n.includes(e),
        o = El(e, a),
        s = i?.published
          ? Qt.awardWins
              .filter((e) => e.match_id === t && !e.revoked)
              .map((e) => {
                const t = Al(e.award_key);
                return {
                  id: e.id,
                  award_key: e.award_key,
                  label_key: t.label_key,
                  emoji: t.emoji,
                  custom_label: t.custom_label,
                  winner_id: e.winner_id,
                  winner_name: Td(e.winner_id),
                  votes: e.votes,
                };
              })
          : [],
        d = Qt.awardVotes.filter((a) => a.match_id === t && a.voter_id === e),
        l = Tl(t).map((e) => {
          const a = Al(e);
          return {
            key: e,
            label_key: a.label_key,
            emoji: a.emoji,
            custom_label: a.custom_label,
            my_vote: d.find((t) => t.award_key === e)?.nominee_id ?? null,
            total_votes: Qt.awardVotes.filter((a) => a.match_id === t && a.award_key === e).length,
          };
        }),
        c = i ? (i.published ? "published" : "voting") : "not_completed";
      return {
        match_id: t,
        state: c,
        closes_at: i?.closes_at ?? null,
        can_vote: "voting" === c && r && !!i && Ol(i),
        is_manager: o,
        is_admin: vl(e),
        awards: l,
        nominees: n.filter((t) => t !== e).map((e) => ({ id: e, name: Td(e) })),
        winners: s,
      };
    };
    r.mockGetMvpPanel = async (e, t) => {
      await ei();
      if (!hi(t)) throw new Error("E_MATCH_NOT_FOUND");
      const a = Qt.awardVoting.find((e) => e.match_id === t) ?? null,
        i = Sl(t),
        n = i.includes(e),
        r = Qt.awardVotes.filter((e) => e.match_id === t && "mvp" === e.award_key),
        o = new Map();
      for (const e of r) o.set(e.nominee_id, (o.get(e.nominee_id) ?? 0) + 1);
      const s = Qt.awardWins.filter((e) => e.match_id === t && "mvp" === e.award_key && !e.revoked),
        d = a
          ? a.published
            ? "published"
            : Date.now() >= new Date(a.closes_at).getTime()
              ? "tallying"
              : "voting"
          : "not_completed";
      return {
        state: d,
        closes_at: a?.closes_at ?? null,
        can_vote: "voting" === d && n,
        is_participant: n,
        my_vote: r.find((t) => t.voter_id === e)?.nominee_id ?? null,
        total_votes: r.length,
        participants: i.map((e) => ({ user_id: e, name: Td(e), votes: o.get(e) ?? 0 })),
        winners: s.map((e) => ({ user_id: e.winner_id, name: Td(e.winner_id), votes: e.votes })),
        tied: s.length > 1,
      };
    };
    r.mockCastAwardVote = async (e, t, a, i) => {
      await ei();
      const n = hi(t);
      if (!n) throw new Error("not_found");
      const r = await Il(n),
        o = async (a) => {
          throw (
            await (0, w.logAudit)("award.vote_blocked", (0, w.actorRef)(e), {
              match: t.slice(-6),
              reason: a,
            }),
            new Error(a)
          );
        };
      if (!r || !Ol(r)) return o("voting_closed");
      const s = Sl(t);
      if (!s.includes(e)) return o("not_participant");
      if (i === e) return o("no_self_vote");
      if (!s.includes(i)) return o("invalid_nominee");
      if (!Tl(t).includes(a)) return o("invalid_award");
      const d = Qt.awardVotes.find((i) => i.match_id === t && i.award_key === a && i.voter_id === e);
      (d
        ? (d.nominee_id = i)
        : Qt.awardVotes.push({
            id: ea(),
            match_id: t,
            award_key: a,
            voter_id: e,
            nominee_id: i,
            created_at: new Date().toISOString(),
          }),
        await Za(Ve, Qt.awardVotes),
        await (0, w.logAudit)("award.voted", (0, w.actorRef)(e), { match: t.slice(-6), award: a }));
    };
    r.mockOpenAwardVoting = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("not_found");
      if (!El(e, a)) throw new Error("forbidden");
      if (!(await Dl(a))) throw new Error("not_completed");
      await (0, w.logAudit)("award.voting_opened", (0, w.actorRef)(e), { match: t.slice(-6) });
    };
    r.mockPublishAwards = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("not_found");
      if (!El(e, a)) throw new Error("forbidden");
      const i = await Dl(a);
      if (!i) throw new Error("not_completed");
      await Rl(a, i);
    };
    r.mockCreateCustomAward = async (e, t) => {
      if ((await ei(), t.matchId)) {
        const a = hi(t.matchId);
        if (!El(e, a)) throw new Error("forbidden");
      } else if (!vl(e)) throw new Error("forbidden");
      const a = (0, v.sanitizeText)(t.label, 40);
      if (!a) throw new Error("empty_label");
      const i = {
        key: `custom_${ea().slice(0, 8)}`,
        label: a,
        emoji: t.emoji || "\ud83c\udfc5",
        created_by: e,
        match_id: t.matchId ?? null,
        created_at: new Date().toISOString(),
      };
      return (
        Qt.awardCustom.push(i),
        await Za(Ze, Qt.awardCustom),
        await (0, w.logAudit)("award.custom_created", (0, w.actorRef)(e), {
          key: i.key,
          scope: t.matchId ? "match" : "global",
        }),
        i
      );
    };
    r.mockGetMatchAwards = async (e) => {
      await ei();
      const t = hi(e);
      return (
        t && (await Il(t)),
        Qt.awardWins
          .filter((t) => t.match_id === e && !t.revoked)
          .map((e) => {
            const t = Al(e.award_key);
            return {
              id: e.id,
              award_key: e.award_key,
              label_key: t.label_key,
              emoji: t.emoji,
              custom_label: t.custom_label,
              winner_id: e.winner_id,
              winner_name: Td(e.winner_id),
              votes: e.votes,
            };
          })
      );
    };
    r.mockGetPlayerAwards = async (e) => {
      await ei();
      const t = Qt.awardWins.filter((t) => t.winner_id === e && !t.revoked),
        a = new Map(),
        i = new Map();
      for (const e of t)
        (a.set(e.award_key, (a.get(e.award_key) ?? 0) + 1), i.set(e.season, (i.get(e.season) ?? 0) + 1));
      const n = a.get("mvp") ?? 0,
        r = gi().filter(
          (t) =>
            "cancelled" !== t.status && new Date(t.ends_at).getTime() < Date.now() && Sl(t.id).includes(e),
        ).length,
        o = [...t]
          .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
          .slice(0, 10)
          .map((e) => {
            const t = Al(e.award_key),
              a = hi(e.match_id);
            return {
              match_id: e.match_id,
              award_key: e.award_key,
              label_key: t.label_key,
              emoji: t.emoji,
              custom_label: t.custom_label,
              date: a?.starts_at ?? e.created_at,
              venue: a ? Ai(a.venue_id) : "",
            };
          });
      return {
        total: t.length,
        mvp: n,
        games_played: r,
        mvp_win_rate: r > 0 ? n / r : 0,
        by_award: [...a.entries()]
          .map(([e, t]) => {
            const a = Al(e);
            return { key: e, label_key: a.label_key, emoji: a.emoji, custom_label: a.custom_label, count: t };
          })
          .sort((e, t) => t.count - e.count),
        recent: o,
        seasonal: [...i.entries()]
          .map(([e, t]) => ({ season: e, total: t }))
          .sort((e, t) => t.season.localeCompare(e.season)),
        achievements: (0, S.unlockedAwardAchievements)(t.length, n).map((e) => ({
          id: e.id,
          emoji: e.emoji,
          key: e.key,
        })),
      };
    };
    r.mockGetAwardLeaderboard = async (e = {}) => {
      await ei();
      const t = new Map();
      for (const a of Qt.awardWins) {
        if (a.revoked) continue;
        if (e.sport && a.sport !== e.sport) continue;
        if (e.season && a.season !== e.season) continue;
        const i = t.get(a.winner_id) ?? { total: 0, mvp: 0 };
        ((i.total += 1), "mvp" === a.award_key && (i.mvp += 1), t.set(a.winner_id, i));
      }
      const a = aa(e.viewerId);
      return [...t.entries()]
        .map(([e, t]) => ({ user_id: e, name: Td(e), total: t.total, mvp: t.mvp }))
        .filter((e) => ia(aa(e.user_id), a))
        .sort((e, t) => t.total - e.total || t.mvp - e.mvp || e.name.localeCompare(t.name))
        .slice(0, 50);
    };
    r.mockGetAwardSeasons = async () => (
      await ei(),
      [...new Set(Qt.awardWins.filter((e) => !e.revoked).map((e) => e.season))].sort((e, t) =>
        t.localeCompare(e),
      )
    );
    r.mockRevokeAward = async (e, t) => {
      (await ei(), await sn(e));
      const a = Qt.awardWins.find((e) => e.id === t);
      if (!a) throw new Error("not_found");
      ((a.revoked = !0),
        (a.revoked_by = e),
        await Za(Je, Qt.awardWins),
        await (0, w.logAdminAudit)("award.revoked", e, a.winner_id, {
          award: a.award_key,
          match: a.match_id.slice(-6),
        }));
    };
    // ADM2 (F-ADM2-9): reviewed fraud signals are remembered so the list shows what is still open.
    const FRAUD_KEY = "playora.mock.award.fraudreviews.v1";
    const adm2Fraud = async () => {
      try {
        const e = await l.default.getItem(FRAUD_KEY);
        return e ? JSON.parse(e) : {};
      } catch {
        return {};
      }
    };
    r.mockReviewFraudSignal = async (e, t, a) => {
      (await ei(), await sn(e));
      const i = adm2Reason(a),
        n = await adm2Fraud();
      ((n[String(t)] = { reviewed_by: e, reviewed_at: new Date().toISOString(), reason: i }),
        await l.default.setItem(FRAUD_KEY, JSON.stringify(n)),
        await (0, w.logAdminAudit)("award.fraud_reviewed", e, null, { signal: String(t).slice(-12), reason: i }));
      return n[String(t)];
    };
    r.mockGetAwardFraudSignals = async (e) => {
      (await ei(), await sn(e));
      const adm2Reviewed = await adm2Fraud();
      const t = [],
        a = new Map();
      for (const e of Qt.awardVotes) {
        const t = a.get(e.match_id) ?? [];
        (t.push(e), a.set(e.match_id, t));
      }
      for (const [i, n] of a) {
        const a = (0, S.detectCollusion)(n.map((e) => ({ voter_id: e.voter_id, nominee_id: e.nominee_id })));
        if (0 === a.length) continue;
        // ADM2 (F-ADM2-2): a read no longer writes to the audit log.
        const r = hi(i);
        for (const e of a) {
          const n = `${i}:${e.voter_id}:${e.nominee_id}`;
          t.push({
            id: n,
            match_id: i,
            venue: r ? Ai(r.venue_id) : "",
            voter_id: e.voter_id,
            voter_name: Td(e.voter_id),
            nominee_id: e.nominee_id,
            nominee_name: Td(e.nominee_id),
            categories: e.categories,
            review: adm2Reviewed[n] ?? null,
          });
        }
      }
      return t;
    };
    const Ml = () => Qt.feedWeights ?? E.DEFAULT_FEED_WEIGHTS,
      Nl = (e) => {
        const t = new Set(),
          a = tr(e).map((e) => e.game.id);
        for (const i of Qt.bookings)
          i.user_id === e || i.user_id.startsWith("guest:") || (a.includes(i.game_id) && t.add(i.user_id));
        return t;
      },
      Cl = (e) => {
        const t = new Set();
        for (const { game: a } of tr(e)) t.add(a.venue_id);
        return t;
      },
      Pl = (e) => {
        const t = { padel: 0, tennis: 0, football: 0 };
        for (const { game: a } of tr(e)) t[a.sport] += 1;
        const a = Math.max(1, ...Object.values(t));
        return { padel: t.padel / a, tennis: t.tennis / a, football: t.football / a };
      },
      Ll = (e, t) => {
        const a = [];
        for (const i of Qt.bookings)
          i.game_id === e && "confirmed" === i.status && t.has(i.user_id) && a.push(i.user_id);
        return [...new Set(a)];
      },
      Gl = async (e) => {
        await ei();
        const t = Qt.profiles.find((t) => t.id === e),
          a = Ml(),
          i = Sa(e),
          n = Qd(e),
          r = Zd(e),
          o = Nl(e),
          s = Cl(e),
          d = Pl(e),
          l = Date.now(),
          c = (await Mi({ userId: e })).filter(
            (t) => "confirmed" !== t.user_status && !Xd(e, t.organizer_id) && t.organizer_id !== e,
          ),
          _ = new Map();
        for (const e of new Set(c.map((e) => e.sport))) {
          const t = c
            .filter((t) => t.sport === e)
            .map((e) => Number(e.price_kwd))
            .sort((e, t) => e - t);
          t.length >= 3 && _.set(e, t[Math.floor(t.length / 2)]);
        }
        const u = await Promise.all(
          c.map(async (c) => {
            const u = (0, f.distanceKm)(i.lat, i.lng, c.venue.lat, c.venue.lng),
              m = Math.max(0, c.max_players - c.bookings_count),
              w = c.max_players > 0 ? c.bookings_count / c.max_players : 0,
              p = (new Date(c.starts_at).getTime() - l) / 36e5,
              g = (await lr(e, c)).score / 100,
              h = (await Zi(c.organizer_id)).score / 100,
              y = Ll(c.id, n),
              k = Qt.bookings
                .filter((e) => e.game_id === c.id && "confirmed" === e.status)
                .map((e) => e.user_id)
                .some((e) => o.has(e)),
              v = 0.5 * g + 0.3 * h + 0.2 * w,
              S = p < 0 ? 0.3 : p <= 8 ? 1 - p / 8 : 0.2,
              b = {
                favorite_sport: t?.preferred_sports.includes(c.sport) ? 1 : 0.3,
                skill_fit: g,
                distance: Math.max(0, 1 - u / 30),
                friends: Math.min(1, y.length / 3),
                organizer_rep: h,
                match_quality: v,
                fill: m > 0 ? w : 0,
                starting_soon: S,
                venue_favorite: s.has(c.venue_id) ? 1 : 0.3,
                played_together: k ? 1 : 0.2,
                availability: m > 0 ? 1 : 0,
                weather: 0.75,
                teams: r.size > 0 && [...r].some((e) => Zd(c.organizer_id).has(e)) ? 1 : 0,
                behavior: d[c.sport] || 0.3,
                good_price: (() => {
                  const e = Number(c.price_kwd);
                  if (e <= 0) return 1;
                  const t = _.get(c.sport);
                  return null == t || t <= 0
                    ? e <= 5
                      ? 1 - e / 10
                      : 0
                    : e < t
                      ? Math.min(1, (t - e) / t + 0.5)
                      : 0;
                })(),
                just_posted: Date.now() - new Date(c.created_at).getTime() <= 216e5 ? 1 : 0,
              },
              T = (0, E.scoreMatch)(b, a),
              A = Math.round(
                Math.min(
                  100,
                  ((c.bookings_count + 0.5 * y.length) / Math.max(1, c.max_players)) * 100 * 0.8 + 18,
                ),
              );
            return {
              item: {
                game: c,
                score: T,
                quality: Math.round(100 * v),
                fill_prob: A,
                reasons: (0, E.topReasons)(b, a).map(E.reasonKey),
                friends: y.map((e) => ({ id: e, name: Td(e) })),
                is_following_organizer: Vd(e, c.organizer_id),
              },
              dist: u,
              hoursUntil: p,
              fillMomentum: w,
              features: b,
            };
          }),
        );
        u.sort((e, t) => t.item.score - e.item.score);
        const m = new Set(),
          w = (e, t) => {
            const a = [];
            for (const i of e)
              if (!m.has(i.item.game.id) && (a.push(i.item), m.add(i.item.game.id), a.length >= t)) break;
            return a;
          },
          p = [],
          g = (e, t, a, i) => {
            i.length && p.push({ id: e, label_key: t, icon: a, items: i });
          };
        return (
          g("best_for_you", "secBestForYou", "sparkles", w(u, 5)),
          g(
            "friends_playing",
            "secFriendsPlaying",
            "people",
            w(
              u.filter((e) => e.item.friends.length > 0),
              8,
            ),
          ),
          g(
            "need_player_now",
            "secNeedPlayer",
            "flash",
            w(
              u.filter((e) => e.item.game.npn_active),
              8,
            ),
          ),
          g(
            "starting_soon",
            "secStartingSoon",
            "time",
            w(
              [...u]
                .filter((e) => e.hoursUntil >= 0 && e.hoursUntil <= 8)
                .sort((e, t) => e.hoursUntil - t.hoursUntil),
              8,
            ),
          ),
          g(
            "your_teams",
            "secYourTeams",
            "shield",
            w(
              u.filter((e) => 1 === e.features.teams),
              8,
            ),
          ),
          g(
            "recently_played_with",
            "secRecentlyPlayed",
            "refresh",
            w(
              u.filter((e) => e.features.played_together >= 1),
              8,
            ),
          ),
          g(
            "recommended_organizers",
            "secRecommendedOrganizers",
            "star",
            w(
              u.filter((e) => !e.item.is_following_organizer && e.features.organizer_rep > 0.6),
              8,
            ),
          ),
          g(
            "nearby",
            "secNearby",
            "location",
            w(
              [...u].filter((e) => e.dist < 15).sort((e, t) => e.dist - t.dist),
              8,
            ),
          ),
          g(
            "trending",
            "secTrending",
            "trending-up",
            w(
              [...u].sort((e, t) => t.fillMomentum - e.fillMomentum),
              8,
            ),
          ),
          { sections: p, predicted_join_game_id: u[0]?.item.game.id ?? null }
        );
      };
    r.mockGetMatchFeed = Gl;
    // ADM2 (F-ADM2-2/3): funnel counters live in their own store with a fixed event vocabulary and a
    // per-user daily cap, so they never evict audit records and cannot be poisoned with free text.
    const FUNNEL_EVENTS = new Set([
      "app_open", "signup_start", "signup_done", "browse", "game_view", "join_start", "join_paid",
      "join_done", "organizer_apply", "match_created", "booking_start", "booking_done", "invite_sent",
    ]);
    const FUNNEL_KEY = "playora.mock.funnel.v1";
    const adm2Funnel = async () => {
      try {
        const e = await l.default.getItem(FUNNEL_KEY);
        const t = e ? JSON.parse(e) : null;
        return t && "object" == typeof t ? { events: t.events ?? {}, quota: t.quota ?? {} } : { events: {}, quota: {} };
      } catch {
        return { events: {}, quota: {} };
      }
    };
    r.mockLogFunnel = async (e, t) => {
      await ei();
      const a = String(t ?? "");
      if (!FUNNEL_EVENTS.has(a)) return;
      const i = await adm2Funnel(),
        n = new Date().toISOString().slice(0, 10),
        r = `${e ?? "anon"}:${n}`;
      if ((i.quota[r] ?? 0) >= 200) return;
      ((i.quota[r] = (i.quota[r] ?? 0) + 1),
        (i.events[a] = i.events[a] ?? { total: 0, days: {} }),
        (i.events[a].total += 1),
        (i.events[a].days[n] = (i.events[a].days[n] ?? 0) + 1));
      for (const e of Object.keys(i.quota)) e.endsWith(n) || delete i.quota[e];
      try {
        await l.default.setItem(FUNNEL_KEY, JSON.stringify(i));
      } catch (e) {
        (0, w.noteWriteFailure)(FUNNEL_KEY, e);
      }
    };
    r.mockGetFunnelStats = async (e) => {
      (await ei(), await sn(e));
      const t = await adm2Funnel(),
        a = [];
      for (let e = 0; e < 7; e++) a.push(new Date(Date.now() - 864e5 * e).toISOString().slice(0, 10));
      return Object.entries(t.events)
        .map(([e, t]) => ({ event: e, total: t.total, last7d: a.reduce((e, a) => e + (t.days[a] ?? 0), 0) }))
        .sort((e, t) => t.total - e.total);
    };
    r.mockLogFeedSignal = async (e, t, a) => {
      if (
        (await ei(),
        Qt.feedSignals.unshift({
          id: ea(),
          user_id: e,
          type: t,
          game_id: a ?? null,
          created_at: new Date().toISOString(),
        }),
        Qt.feedSignals.length > 2e3 && (Qt.feedSignals = Qt.feedSignals.slice(0, 2e3)),
        a && ("join" === t || "click" === t || "cancel" === t))
      ) {
        const i = hi(a);
        if (i) {
          const a = Qt.profiles.find((t) => t.id === e),
            n = (await lr(e, i)).score / 100,
            r = [];
          (a?.preferred_sports.includes(i.sport) && r.push("favorite_sport"),
            n >= 0.5 && r.push("skill_fit"),
            Ll(i.id, Qd(e)).length > 0 && r.push("friends"));
          // ADM2 (F-ADM2-20): a single user can only nudge the global weights a bounded number of
          // times per day, and never while an administrator has frozen them.
          const s9 = Qt.feedWeightsFrozen ?? !1,
            d9 = new Date().toISOString().slice(0, 10),
            l9 = (Qt.feedNudgeQuota ??= {}),
            c9 = `${e}:${d9}`;
          if (!s9 && (l9[c9] ?? 0) < 20) {
            l9[c9] = (l9[c9] ?? 0) + 1;
            for (const e of Object.keys(l9)) e.endsWith(d9) || delete l9[e];
            const o = (0, E.nudgeWeights)(Ml(), t, r);
            ((Qt.feedWeights = o), await Za(et, o));
          }
        }
      }
      await Za(Xe, Qt.feedSignals);
    };
    // ADM2 (F-ADM2-20): administrators can freeze or reset the self-tuning feed weights.
    r.mockSetFeedWeights = async (e, t, a) => {
      (await ei(), await sn(e));
      const i = adm2Reason(a),
        n = Ml(),
        { next: o, diff: s } = adm2Apply(n, t, { "*": (e) => Math.max(0, Math.min(1, Math.round(100 * e) / 100)) });
      return (
        (Qt.feedWeights = o),
        await Za(et, o),
        await (0, w.logAdminAudit)("feed.weights_changed", e, null, { reason: i, changes: s }),
        o
      );
    };
    r.mockResetFeedWeights = async (e, t) => {
      (await ei(), await sn(e));
      const a = adm2Reason(t),
        i = "boolean" == typeof t ? t : void 0;
      return (
        (Qt.feedWeights = Object.assign({}, E.DEFAULT_FEED_WEIGHTS)),
        (Qt.feedNudgeQuota = {}),
        await Za(et, Qt.feedWeights),
        await (0, w.logAdminAudit)("feed.weights_reset", e, null, { reason: a }),
        Qt.feedWeights
      );
    };
    r.mockSetFeedFrozen = async (e, t, a) => {
      (await ei(), await sn(e));
      const i = adm2Reason(a);
      return (
        (Qt.feedWeightsFrozen = !!t),
        await (0, w.logAdminAudit)("feed.weights_frozen", e, null, { frozen: !!t, reason: i }),
        !!t
      );
    };
    r.mockGetFeedAnalytics = async (e) => {
      (await ei(), await Ms(e));
      const t = Qt.feedSignals,
        a = (e) => t.filter((t) => t.type === e).length,
        i = a("impression"),
        n = a("click"),
        r = a("join"),
        o = a("cancel"),
        s = a("search"),
        d = (e, t) => (t > 0 ? Math.round((e / t) * 1e3) / 10 : 0),
        l = new Set(
          t.filter((e) => Date.now() - new Date(e.created_at).getTime() < 6048e5).map((e) => e.user_id),
        ).size,
        c = new Set(t.map((e) => e.user_id)).size,
        _ = Ml();
      return {
        frozen: !!Qt.feedWeightsFrozen,
        impressions: i,
        clicks: n,
        joins: r,
        cancels: o,
        searches: s,
        ctr: d(n, i),
        join_conversion: d(r, n),
        cancel_rate: d(o, r),
        accuracy: d(r, i),
        retention: d(l, c),
        weights: Object.keys(_)
          .map((e) => ({ factor: e, weight: Math.round(100 * _[e]) / 100 }))
          .sort((e, t) => t.weight - e.weight),
      };
    };
    const Ul = (e, t) => {
        const a = hr(t);
        if (!a) return null;
        if (a.owner_id === e) return "owner";
        const i = a.staff.find((t) => t.user_id === e);
        return i ? i.role : "admin" === Qt.profiles.find((t) => t.id === e)?.role ? "owner" : null;
      },
      xl = async (e, t, a) => {
        const i = Ul(e, t);
        if (!i || !(0, b.venueCan)(i, a))
          throw (
            await (0, w.logAudit)("venue.access_denied", (0, w.actorRef)(e), { venue: t.slice(-6), perm: a }),
            new Error("forbidden")
          );
        return i;
      },
      zl = (e) => Qt.courts.find((t) => t.id === e)?.name ?? "Court",
      Hl = (e, t) => {
        const a = new Date(e);
        return (
          a.getFullYear() === t.getFullYear() && a.getMonth() === t.getMonth() && a.getDate() === t.getDate()
        );
      },
      Fl = (e) =>
        Qt.courts
          .filter((t) => t.venue_id === e && t.active)
          .reduce((e, t) => e + Math.max(0, t.close_minutes - t.open_minutes) / 60, 0);
    r.mockGetVenueCrmDashboard = async (e, t) => {
      await ei();
      const a = await xl(e, t, "crm");
      await (0, w.logAudit)("venue.crm_accessed", (0, w.actorRef)(e), { venue: t.slice(-6) });
      const i = new Date(),
        n = Date.now(),
        r = Qt.courtBookings.filter((e) => e.venue_id === t),
        o = r.filter((e) => Hl(e.starts_at, i)),
        s = o.filter((e) => "confirmed" === e.status),
        d = s.reduce((e, t) => e + (0, b.bookingHours)(t.starts_at, t.ends_at), 0),
        l = new Set(["cancelled", "released", "expired"]),
        c = r
          .filter(
            (e) =>
              new Date(e.starts_at).getTime() > n && ("confirmed" === e.status || "reserved" === e.status),
          )
          .sort((e, t) => new Date(e.starts_at).getTime() - new Date(t.starts_at).getTime())
          .slice(0, 6)
          .map((e) => ({
            id: e.id,
            court: zl(e.court_id),
            customer: Td(e.organizer_id),
            starts_at: e.starts_at,
            price_kwd: e.court_price_kwd,
            status: e.status,
          })),
        _ = new Set(r.filter((e) => n - new Date(e.starts_at).getTime() < 2592e6).map((e) => e.organizer_id)),
        u = new Set(o.map((e) => e.id)),
        m = Qt.checkins.filter((e) => u.has(e.booking_id)).length;
      return {
        role: a,
        can: Bl(a),
        today_bookings: o.length,
        occupancy_pct: (0, b.occupancyPct)(d, Fl(t)),
        revenue_today_kwd: s.reduce((e, t) => e + t.court_price_kwd, 0),
        active_players: _.size,
        cancellations_today: o.filter((e) => l.has(e.status)).length,
        checkins_today: m,
        peak_hours: (0, b.topPeakHours)(r.map((e) => e.starts_at)),
        upcoming: c,
      };
    };
    const Bl = (e) =>
      ["courts", "bookings", "finance", "staff", "marketing", "checkin", "crm"].filter((t) =>
        (0, b.venueCan)(e, t),
      );
    r.mockGetVenueCustomers = async (e, t) => {
      (await ei(), await xl(e, t, "crm"));
      const a = Qt.courtBookings.filter((e) => e.venue_id === t),
        i = new Map();
      for (const e of a) {
        const t = i.get(e.organizer_id) ?? [];
        (t.push(e), i.set(e.organizer_id, t));
      }
      const n = Date.now();
      return [...i.entries()]
        .map(([e, t]) => {
          const a = t.filter((e) => "confirmed" === e.status),
            i = new Map();
          for (const e of t) i.set(e.court_id, (i.get(e.court_id) ?? 0) + 1);
          const r = [...i.entries()].sort((e, t) => t[1] - e[1])[0]?.[0],
            o = a.filter(
              (t) =>
                new Date(t.ends_at).getTime() < n &&
                !Qt.checkins.some((a) => a.booking_id === t.id && a.player_id === e),
            ).length;
          return {
            user_id: e,
            name: Td(e),
            bookings: t.length,
            confirmed: a.length,
            spend_kwd: a.reduce((e, t) => e + t.court_price_kwd, 0),
            last_visit:
              t
                .map((e) => e.starts_at)
                .sort()
                .reverse()[0] ?? null,
            loyalty_points: js(e).reduce((e, t) => e + t.points, 0),
            favorite_court: r ? zl(r) : null,
            no_shows: o,
          };
        })
        .sort((e, t) => t.spend_kwd - e.spend_kwd);
    };
    r.mockGetVenueStaffList = async (e, t) => {
      (await ei(), await xl(e, t, "crm"));
      const a = hr(t);
      if (!a) throw new Error("not_found");
      return [
        { user_id: a.owner_id, name: Td(a.owner_id), role: "owner", is_owner: !0, added_at: null },
        ...a.staff.map((e) => ({
          user_id: e.user_id,
          name: e.name,
          role: e.role,
          is_owner: !1,
          added_at: e.added_at,
        })),
      ];
    };
    r.mockGetVenueAnalytics = async (e, t) => {
      (await ei(), await xl(e, t, "finance"));
      const a = Date.now(),
        i = Qt.courtBookings.filter((e) => e.venue_id === t),
        n = i.filter((e) => a - new Date(e.starts_at).getTime() < 2592e6),
        r = n.filter((e) => "confirmed" === e.status),
        o = r.reduce((e, t) => e + (0, b.bookingHours)(t.starts_at, t.ends_at), 0),
        s = new Map();
      for (const e of i) "confirmed" === e.status && s.set(e.organizer_id, (s.get(e.organizer_id) ?? 0) + 1);
      const d = [...s.values()].filter((e) => e > 1).length,
        l = new Map();
      for (const e of r) l.set(e.court_id, (l.get(e.court_id) ?? 0) + 1);
      const c = new Set(["cancelled", "released", "expired"]);
      return {
        occupancy_pct: (0, b.occupancyPct)(o, 30 * Fl(t)),
        revenue_kwd: r.reduce((e, t) => e + t.court_price_kwd, 0),
        repeat_rate_pct: s.size > 0 ? Math.round((d / s.size) * 100) : 0,
        no_shows: r.filter(
          (e) => new Date(e.ends_at).getTime() < a && !Qt.checkins.some((t) => t.booking_id === e.id),
        ).length,
        cancellations: n.filter((e) => c.has(e.status)).length,
        peak_hours: (0, b.topPeakHours)(
          i.map((e) => e.starts_at),
          5,
        ),
        court_utilization: [...l.entries()]
          .map(([e, t]) => ({ court: zl(e), bookings: t }))
          .sort((e, t) => t.bookings - e.bookings),
        sources: { match: r.filter((e) => e.game_id).length, direct: r.filter((e) => !e.game_id).length },
      };
    };
    r.mockListVenuePromos = async (e, t) => (
      await ei(),
      await xl(e, t, "marketing"),
      Qt.venuePromos
        .filter((e) => e.venue_id === t)
        .sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime())
    );
    r.mockCreateVenuePromo = async (e, t, a) => {
      (await ei(), await xl(e, t, "marketing"));
      const i = (0, b.normalizePromoCode)(a.code);
      if (!i) throw new Error("empty_code");
      if (Qt.venuePromos.some((e) => e.venue_id === t && e.code === i)) throw new Error("duplicate_code");
      const n =
          "percent" === a.kind ? Math.min(90, Math.max(1, Math.round(a.value))) : Math.max(0.25, a.value),
        r = {
          id: ea(),
          venue_id: t,
          code: i,
          kind: a.kind,
          value: n,
          active: !0,
          uses: 0,
          max_uses: a.maxUses ?? null,
          created_by: e,
          created_at: new Date().toISOString(),
        };
      return (
        Qt.venuePromos.unshift(r),
        await Za(tt, Qt.venuePromos),
        await (0, w.logAudit)("venue.promo_created", (0, w.actorRef)(e), { venue: t.slice(-6), code: i }),
        r
      );
    };
    r.mockToggleVenuePromo = async (e, t) => {
      await ei();
      const a = Qt.venuePromos.find((e) => e.id === t);
      if (!a) throw new Error("not_found");
      return (
        await xl(e, a.venue_id, "marketing"),
        (a.active = !a.active),
        await Za(tt, Qt.venuePromos),
        await (0, w.logAudit)("venue.promo_toggled", (0, w.actorRef)(e), { code: a.code, active: a.active }),
        a
      );
    };
    r.mockValidateVenuePromo = async (e, t, a, i) => {
      await ei();
      const n = (0, b.normalizePromoCode)(a),
        r = Qt.venuePromos.find((e) => e.venue_id === t && e.code === n);
      if (!r || !r.active) return { valid: !1, code: n, discounted_kwd: i, saved_kwd: 0, reason: "invalid" };
      if (null != r.max_uses && r.uses >= r.max_uses)
        return { valid: !1, code: n, discounted_kwd: i, saved_kwd: 0, reason: "exhausted" };
      const o = Math.round(1e3 * (0, b.applyPromo)(r.kind, r.value, i)) / 1e3;
      return { valid: !0, code: n, discounted_kwd: o, saved_kwd: Math.round(1e3 * (i - o)) / 1e3 };
    };
    const jl = new Map();
    async function ql(e, t) {
      const a = (jl.get(e) ?? Promise.resolve()).catch(() => {}).then(t);
      jl.set(e, a);
      try {
        return await a;
      } finally {
        jl.get(e) === a && jl.delete(e);
      }
    }
    async function Yl(e) {
      if (e.postings.length < 2 || !(0, A.postingsBalanced)(e.postings))
        throw new Error("E_LEDGER_POSTINGS_MUST_BALANCE");
      if (e.postings.some((e) => !Number.isInteger(e.delta_fils) || 0 === e.delta_fils))
        throw new Error("E_LEDGER_AMOUNTS_MUST_BE_NON_ZERO");
      const t = Object.assign({}, e, {
        id: ea(),
        currency: e.currency ?? A.WALLET_CURRENCY,
        created_at: new Date().toISOString(),
      });
      return (Qt.walletLedger.unshift(t), await Za(at, Qt.walletLedger), t);
    }
    function Wl(e) {
      let t = 0;
      for (const a of Qt.walletLedger) for (const i of a.postings) i.account === e && (t += i.delta_fils);
      return t;
    }
    function Kl(e) {
      return Qt.venueProfiles.filter((t) => t.owner_id === e).map((e) => e.venue_id);
    }
    function $l(e) {
      const t = new Set(Kl(e));
      if (0 === t.size) return [];
      const a = new Set(Qt.walletLedger.filter((e) => "venue_payout" === e.kind && e.ref).map((e) => e.ref));
      return Qt.settlements.filter((e) => t.has(e.venue_id) && "settled" === e.status && !a.has(e.id));
    }
    function Vl(e) {
      return Qt.walletKyc.find((t) => t.user_id === e) ?? null;
    }
    async function Jl(e, t, a, i, n) {
      await bi({
        id: ea(),
        user_id: e,
        type: "wallet_activity",
        kind_key: (0, A.walletKindKey)(t),
        direction: a,
        amount_fils: i,
        currency: A.WALLET_CURRENCY,
        counterparty_name: n,
        read: !1,
        created_at: new Date().toISOString(),
      });
    }
    function Ql(e) {
      return Object.assign({}, e, { requester_name: Td(e.requester_id), from_name: Td(e.from_user_id) });
    }
    const Zl = async (e, t) => {
      await ei();
      const a = t ?? e;
      if (a !== e && !ro(e))
        throw (
          await (0, w.logAudit)("wallet.access_denied", (0, w.actorRef)(e), {
            target: (0, w.actorRef)(a) ?? "unknown",
          }),
          new Error("E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW_3")
        );
      const i = `owner:${a}:`,
        n = [];
      for (const e of Qt.walletLedger) {
        let t = 0;
        for (const a of e.postings) a.account.startsWith(i) && (t += a.delta_fils);
        if (0 === t) continue;
        const r = e.actor_id === a ? e.counterparty_id : e.actor_id;
        n.push({
          id: e.id,
          kind: e.kind,
          kind_key: (0, A.walletKindKey)(e.kind),
          direction: (0, A.txnDirection)(e.kind, t),
          amount_fils: Math.abs(t),
          amount_kwd: Math.abs(t) / 1e3,
          currency: e.currency,
          counterparty_name: r && r !== a ? Td(r) : null,
          note: e.note,
          ref: e.ref,
          created_at: e.created_at,
        });
      }
      const r = Qt.profiles.find((e) => e.id === a),
        o = Qt.settlements
          .filter((e) => Kl(a).includes(e.venue_id) && "pending" === e.status)
          .reduce((e, t) => e + (0, A.toFils)(t.net_to_venue_kwd), 0);
      return {
        owner_id: a,
        currency: A.WALLET_CURRENCY,
        available_fils: Wl(A.acct.available(a)),
        pending_fils: Wl(A.acct.pending(a)) + o,
        credits_fils: Wl(A.acct.credits(a)),
        points: js(a).reduce((e, t) => e + t.points, 0),
        kyc_status: Vl(a)?.status ?? "unverified",
        withdraw_eligible: (0, A.withdrawEligible)(r?.role ?? "user", Kl(a).length > 0),
        claimable_payout_fils: $l(a).reduce((e, t) => e + (0, A.toFils)(t.net_to_venue_kwd), 0),
        requests_incoming: Qt.walletRequests
          .filter((e) => e.from_user_id === a && "pending" === e.status)
          .map(Ql),
        requests_outgoing: Qt.walletRequests
          .filter((e) => e.requester_id === a && "pending" === e.status)
          .map(Ql),
        transactions: n,
      };
    };
    r.mockGetWallet = Zl;
    r.mockWalletAddFunds = async (e, t, a) => {
      if (
        (await ei(),
        !Number.isInteger(t) || t < A.WALLET_LIMITS.topup_min_fils || t > A.WALLET_LIMITS.topup_max_fils)
      )
        throw new Error("E_AMOUNT_IS_OUTSIDE_THE_ALLOWED_TOP");
      if ("cash" === a || "wallet" === a) throw new Error("E_CHOOSE_A_CARD_OR_PAY_GATEWAY");
      const i = Qt.walletLedger
        .filter((t) => "add_funds" === t.kind && t.actor_id === e)
        .map((e) => e.created_at);
      if ((0, A.velocityExceeded)(i, A.DAY_MS, A.WALLET_LIMITS.topups_per_day))
        throw (
          await (0, w.logAudit)("wallet.blocked", (0, w.actorRef)(e), { reason: "topup_velocity" }),
          new Error("E_DAILY_TOP_UP_LIMIT_REACHED_TRY")
        );
      const n = `gw_${a}_${await (0, c.randomToken)(8)}`;
      if (!(await Vr(n, t / 1e3, a)))
        throw (
          await (0, w.logAudit)("payment.verify_failed", (0, w.actorRef)(e), { wallet: "topup" }),
          new Error("E_PAYMENT_COULD_NOT_BE_VERIFIED_PLEASE")
        );
      return (
        await ql(e, () =>
          Yl({
            kind: "add_funds",
            postings: (0, A.transferPostings)(A.acct.external(a), A.acct.available(e), t),
            actor_id: e,
            counterparty_id: null,
            ref: n,
            note: null,
          }),
        ),
        await (0, w.logAudit)("wallet.topup", (0, w.actorRef)(e), { amount_fils: t, method: a }),
        await Jl(e, "add_funds", "in", t, null),
        Zl(e)
      );
    };
    r.mockWalletWithdraw = async (e, t) => {
      await ei();
      const a = Qt.profiles.find((t) => t.id === e);
      if (!(0, A.withdrawEligible)(a?.role ?? "user", Kl(e).length > 0))
        throw (
          await (0, w.logAudit)("wallet.blocked", (0, w.actorRef)(e), { reason: "withdraw_ineligible" }),
          new Error("E_WITHDRAWALS_ARE_AVAILABLE_TO_VERIFIED_ORGANIZERS")
        );
      if ("verified" !== (Vl(e)?.status ?? "unverified"))
        throw (
          await (0, w.logAudit)("wallet.blocked", (0, w.actorRef)(e), { reason: "kyc_required" }),
          new Error("E_IDENTITY_VERIFICATION_KYC_IS_REQUIRED_BEFORE")
        );
      if (!Number.isInteger(t) || t < A.WALLET_LIMITS.withdraw_min_fils)
        throw new Error("E_AMOUNT_IS_BELOW_THE_MINIMUM_WITHDRAWAL");
      return (
        await ql(e, async () => {
          if (Wl(A.acct.available(e)) < t) throw new Error("E_INSUFFICIENT_WALLET_BALANCE");
          await Yl({
            kind: "withdrawal",
            postings: (0, A.transferPostings)(A.acct.available(e), A.acct.external("payout_rail"), t),
            actor_id: e,
            counterparty_id: null,
            ref: null,
            note: null,
          });
        }),
        await (0, w.logAudit)("wallet.withdrawal", (0, w.actorRef)(e), { amount_fils: t }),
        await Jl(e, "withdrawal", "out", t, null),
        Zl(e)
      );
    };
    r.mockSubmitWalletKyc = async (e, t, a) => {
      await ei();
      const i = t.trim();
      if (!i) throw new Error("E_ENTER_YOUR_LEGAL_NAME");
      if (!(0, A.looksLikeCivilId)(a)) throw new Error("E_ENTER_A_VALID_12_DIGIT_CIVIL");
      await (0, w.logAudit)("wallet.kyc_submitted", (0, w.actorRef)(e));
      // This used to stamp itself verified on submission, which made the identity gate in front of
      // withdrawals decorative. It waits for a human now, the same way venue and organizer
      // applications do.
      const n = {
        user_id: e,
        status: "pending",
        full_name: i,
        id_masked: (0, A.maskIdNumber)(a),
        submitted_at: new Date().toISOString(),
        reviewed_at: null,
        reviewed_by: null,
        review_note: null,
      };
      return (
        (Qt.walletKyc = [...Qt.walletKyc.filter((t) => t.user_id !== e), n]),
        await Za(it, Qt.walletKyc),
        await br((t9) => ({
          id: ea(),
          user_id: t9,
          type: "kyc_submitted",
          read: !1,
          created_at: new Date().toISOString(),
        })),
        n
      );
    };
    r.mockGetPendingWalletKyc = async (e) => (
      await ei(),
      await sn(e),
      Qt.walletKyc
        .filter((e) => "pending" === e.status)
        .map((e) => Object.assign({}, e, { display_name: or(e.user_id) }))
    );
    r.mockReviewWalletKyc = async (e, t, a, i) => {
      (await ei(), await sn(e));
      const n = Qt.walletKyc.find((e) => e.user_id === t);
      if (!n) throw new Error("E_APPLICATION_NOT_FOUND");
      if ("pending" !== n.status) throw new Error("E_KYC_ALREADY_REVIEWED");
      return (
        (n.status = a ? "verified" : "rejected"),
        (n.reviewed_at = new Date().toISOString()),
        (n.reviewed_by = e),
        (n.review_note = i ? (0, v.sanitizeText)(i, 200) : null),
        await Za(it, Qt.walletKyc),
        await bi({
          id: ea(),
          user_id: t,
          type: a ? "kyc_verified" : "kyc_rejected",
          read: !1,
          created_at: new Date().toISOString(),
        }),
        await (0, w.logAdminAudit)(a ? "wallet.kyc_verified" : "wallet.kyc_rejected", e, t, {
          note: n.review_note,
        }),
        n
      );
    };
    r.mockWalletTransfer = async (e, t, a, i) => {
      if ((await ei(), t === e)) throw new Error("E_YOU_CANNOT_SEND_MONEY_TO_YOURSELF");
      if (!Qt.profiles.some((e) => e.id === t)) throw new Error("E_RECIPIENT_NOT_FOUND");
      if (Xd(e, t)) throw new Error("E_YOU_CANNOT_TRANSACT_WITH_THIS_ACCOUNT");
      if (
        !Number.isInteger(a) ||
        a < A.WALLET_LIMITS.transfer_min_fils ||
        a > A.WALLET_LIMITS.transfer_max_fils
      )
        throw new Error("E_AMOUNT_IS_OUTSIDE_THE_ALLOWED_TRANSFER");
      const n = Qt.walletLedger
        .filter((t) => "transfer" === t.kind && t.actor_id === e)
        .map((e) => e.created_at);
      if ((0, A.velocityExceeded)(n, A.HOUR_MS, A.WALLET_LIMITS.transfers_per_hour))
        throw (
          await (0, w.logAudit)("wallet.blocked", (0, w.actorRef)(e), { reason: "transfer_velocity" }),
          new Error("E_TRANSFER_LIMIT_REACHED_TRY_AGAIN_LATER")
        );
      return (
        await ql(e, async () => {
          if (Wl(A.acct.available(e)) < a) throw new Error("E_INSUFFICIENT_WALLET_BALANCE");
          await Yl({
            kind: "transfer",
            postings: (0, A.transferPostings)(A.acct.available(e), A.acct.available(t), a),
            actor_id: e,
            counterparty_id: t,
            ref: null,
            note: i?.trim().slice(0, 140) || null,
          });
        }),
        await (0, w.logAudit)("wallet.transfer", (0, w.actorRef)(e), {
          to: (0, w.actorRef)(t) ?? "unknown",
          amount_fils: a,
        }),
        await Jl(t, "transfer", "in", a, Td(e)),
        Zl(e)
      );
    };
    r.mockCreateWalletRequest = async (e, t, a, i) => {
      if ((await ei(), t === e)) throw new Error("E_YOU_CANNOT_REQUEST_MONEY_FROM_YOURSELF");
      if (!Qt.profiles.some((e) => e.id === t)) throw new Error("E_RECIPIENT_NOT_FOUND");
      if (Xd(e, t)) throw new Error("E_YOU_CANNOT_TRANSACT_WITH_THIS_ACCOUNT");
      if (
        !Number.isInteger(a) ||
        a < A.WALLET_LIMITS.transfer_min_fils ||
        a > A.WALLET_LIMITS.transfer_max_fils
      )
        throw new Error("E_AMOUNT_IS_OUTSIDE_THE_ALLOWED_RANGE");
      const n = Qt.walletRequests.filter((t) => t.requester_id === e).map((e) => e.created_at);
      if ((0, A.velocityExceeded)(n, A.HOUR_MS, A.WALLET_LIMITS.requests_per_hour))
        throw (
          await (0, w.logAudit)("wallet.blocked", (0, w.actorRef)(e), { reason: "request_velocity" }),
          new Error("E_REQUEST_LIMIT_REACHED_TRY_AGAIN_LATER")
        );
      const r = {
        id: ea(),
        requester_id: e,
        from_user_id: t,
        amount_fils: a,
        note: i?.trim().slice(0, 140) || null,
        status: "pending",
        created_at: new Date().toISOString(),
        resolved_at: null,
      };
      return (
        Qt.walletRequests.unshift(r),
        await Za(nt, Qt.walletRequests),
        await (0, w.logAudit)("wallet.request_created", (0, w.actorRef)(e), {
          from: (0, w.actorRef)(t) ?? "unknown",
          amount_fils: a,
        }),
        await Jl(t, "request_payment", "out", a, Td(e)),
        Ql(r)
      );
    };
    r.mockRespondWalletRequest = async (e, t, a) => {
      await ei();
      const i = Qt.walletRequests.find((e) => e.id === t);
      if (!i || i.from_user_id !== e) throw new Error("E_REQUEST_NOT_FOUND");
      if ("pending" !== i.status) throw new Error("E_THIS_REQUEST_WAS_ALREADY_RESOLVED");
      return a
        ? (await ql(e, async () => {
            if (Wl(A.acct.available(e)) < i.amount_fils)
              throw new Error("E_INSUFFICIENT_WALLET_BALANCE_ADD_FUNDS_FIRST");
            (await Yl({
              kind: "request_payment",
              postings: (0, A.transferPostings)(
                A.acct.available(e),
                A.acct.available(i.requester_id),
                i.amount_fils,
              ),
              actor_id: e,
              counterparty_id: i.requester_id,
              ref: i.id,
              note: i.note,
            }),
              (i.status = "paid"),
              (i.resolved_at = new Date().toISOString()),
              await Za(nt, Qt.walletRequests));
          }),
          await (0, w.logAudit)("wallet.request_paid", (0, w.actorRef)(e), { amount_fils: i.amount_fils }),
          await Jl(i.requester_id, "request_payment", "in", i.amount_fils, Td(e)),
          Zl(e))
        : ((i.status = "declined"),
          (i.resolved_at = new Date().toISOString()),
          await Za(nt, Qt.walletRequests),
          await (0, w.logAudit)("wallet.request_declined", (0, w.actorRef)(e)),
          Zl(e));
    };
    r.mockAdminGrantCredit = async (e, t, a, i, n) => {
      if ((await sn(e), !Number.isInteger(a) || a <= 0)) throw new Error("E_ENTER_A_POSITIVE_AMOUNT");
      if (!Qt.profiles.some((e) => e.id === t)) throw new Error("E_USER_NOT_FOUND");
      const r = "prize" === i ? "prizes" : "promo";
      (await ql(t, () =>
        Yl({
          kind: i,
          postings: (0, A.transferPostings)(A.acct.platform(r), A.acct.credits(t), a),
          actor_id: e,
          counterparty_id: t,
          ref: null,
          note: n?.trim().slice(0, 140) || null,
        }),
      ),
        await (0, w.logAudit)("wallet.credit_granted", (0, w.actorRef)(e), {
          to: (0, w.actorRef)(t) ?? "unknown",
          amount_fils: a,
          kind: i,
        }),
        await Jl(t, i, "in", a, null));
    };
    const Xl = 1e3;
    async function ec(e, t) {
      e &&
        e !== t &&
        (await ql(e, () =>
          Yl({
            kind: "reward",
            postings: (0, A.transferPostings)(A.acct.platform("promo"), A.acct.credits(e), Xl),
            actor_id: e,
            counterparty_id: t,
            ref: null,
            note: "referral",
          }),
        ),
        await (0, w.logAudit)("wallet.credit_granted", (0, w.actorRef)(e), {
          amount_fils: Xl,
          kind: "referral",
        }),
        await Jl(e, "reward", "in", Xl, Td(t)));
    }
    async function tc(e, t, a, i, n) {
      if (!Number.isInteger(t) || t <= 0) throw new Error("E_INVALID_AMOUNT");
      return ql(e, async () => {
        const r = (0, A.planCombinedPayment)(t, Wl(A.acct.credits(e)), Wl(A.acct.available(e)));
        if (r.external_fils > 0) {
          if (!n || "wallet" === n || "cash" === n)
            throw new Error("E_INSUFFICIENT_WALLET_BALANCE_ADD_FUNDS_OR");
          const e = `gw_${n}_${await (0, c.randomToken)(8)}`;
          if (!(await Vr(e, r.external_fils / 1e3, n)))
            throw new Error("E_CARD_PAYMENT_COULD_NOT_BE_VERIFIED");
        }
        const o = [];
        (r.credits_fils > 0 && o.push({ account: A.acct.credits(e), delta_fils: -r.credits_fils }),
          r.wallet_fils > 0 && o.push({ account: A.acct.available(e), delta_fils: -r.wallet_fils }));
        const s = r.credits_fils + r.wallet_fils;
        return (
          s > 0 &&
            (o.push({ account: A.acct.external("clearing"), delta_fils: s }),
            await Yl({ kind: a, postings: o, actor_id: e, counterparty_id: null, ref: i, note: null }),
            await (0, w.logAudit)("wallet.paid", (0, w.actorRef)(e), {
              kind: a,
              amount_fils: s,
              ref: i.slice(-6),
            })),
          r
        );
      });
    }
    async function ac(e, t, a) {
      const i = (0, A.toFils)(t);
      i <= 0 ||
        (await ql(e, () =>
          Yl({
            kind: "refund",
            postings: (0, A.transferPostings)(A.acct.platform("refunds"), A.acct.available(e), i),
            actor_id: e,
            counterparty_id: null,
            ref: a,
            note: null,
          }),
        ),
        await (0, w.logAudit)("wallet.refund_credited", (0, w.actorRef)(e), {
          amount_fils: i,
          ref: a.slice(-6),
        }),
        await Jl(e, "refund", "in", i, null));
    }
    r.mockClaimVenuePayout = async (e) => {
      await ei();
      const t = $l(e);
      if (0 === t.length) throw new Error("E_NO_SETTLED_PAYOUTS_TO_CLAIM");
      await ql(e, async () => {
        for (const a of t) {
          const t = (0, A.toFils)(a.net_to_venue_kwd);
          t <= 0 ||
            (await Yl({
              kind: "venue_payout",
              postings: (0, A.transferPostings)(A.acct.platform("payouts"), A.acct.available(e), t),
              actor_id: e,
              counterparty_id: null,
              ref: a.id,
              note: null,
            }));
        }
      });
      const a = t.reduce((e, t) => e + (0, A.toFils)(t.net_to_venue_kwd), 0);
      return (
        await (0, w.logAudit)("wallet.payout_claimed", (0, w.actorRef)(e), {
          count: t.length,
          amount_fils: a,
        }),
        await Jl(e, "venue_payout", "in", a, null),
        Zl(e)
      );
    };
    const ic = 50;
    function nc(e) {
      switch (e.format) {
        case "football_5v5":
          return 5;
        case "football_7v7":
          return 7;
        case "football_11v11":
          return 11;
        case "padel_2":
        case "tennis_singles":
          return 1;
        case "padel_4":
        case "tennis_doubles":
          return 2;
        default:
          return Math.max(2, Math.min(11, Math.floor(e.max_players / 2)));
      }
    }
    function rc(e, sp9) {
      return {
        formation_key: e,
        slots: (0, T.formationSlots)(e, sp9).map((e) => ({
          slot_id: e.id,
          role: e.role,
          x: e.x,
          y: e.y,
          player_id: null,
          jersey: null,
          captain: !1,
        })),
      };
    }
    async function oc(e, t) {
      let a = Qt.lineups.find((t) => t.game_id === e);
      if (a) return a;
      const i = hi(e);
      if (!i) throw new Error("E_MATCH_NOT_FOUND");
      const n = nc(i),
        r = (0, T.suggestFormationKey)(n, 0.5, i.sport);
      a = {
        game_id: e,
        a: rc(r, i.sport),
        b: rc(r, i.sport),
        locked: !1,
        editor_user_ids: [],
        version: 1,
        history: [
          {
            version: 1,
            at: new Date().toISOString(),
            by_ref: (0, w.actorRef)(t) ?? "system",
            action: "created",
          },
        ],
        updated_at: new Date().toISOString(),
      };
      const o = await Ui(e, t);
      for (const e of ["A", "B"]) {
        const t = o.filter((t) => t.team === e),
          i = ("A" === e ? a.a : a.b).slots;
        t.slice(0, i.length).forEach((e, t) => {
          i[t].player_id = e.id;
        });
      }
      return (Qt.lineups.push(a), await Za(rt, Qt.lineups), a);
    }
    function sc(e, t, a) {
      return t.organizer_id === e || ro(e) || a.editor_user_ids.includes(e);
    }
    async function dc(e, t) {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      const i = await oc(t, e);
      if (!sc(e, a, i))
        throw (
          await (0, w.logAudit)("lineup.edit_denied", (0, w.actorRef)(e), { game: t.slice(-6) }),
          new Error("E_ONLY_THE_ORGANIZER_OR_AUTHORIZED_CAPTAINS")
        );
      return { game: a, lineup: i };
    }
    async function lc(e, t, a) {
      ((e.version += 1),
        e.history.unshift({
          version: e.version,
          at: new Date().toISOString(),
          by_ref: (0, w.actorRef)(t) ?? "unknown",
          action: a,
        }),
        (e.history = e.history.slice(0, ic)),
        (e.updated_at = new Date().toISOString()),
        await Za(rt, Qt.lineups));
    }
    const cc = (e, t, a) => {
        const i = ("A" === t ? e.a : e.b).slots.find((e) => e.slot_id === a);
        if (!i) throw new Error("E_POSITION_NOT_FOUND");
        return i;
      },
      _c = (e, t) => {
        for (const a of [e.a, e.b])
          for (const e of a.slots)
            e.player_id === t && ((e.player_id = null), (e.jersey = null), (e.captain = !1));
      },
      uc = async (e, t) => {
        await ei();
        const a = hi(e);
        if (!a) throw new Error("E_MATCH_NOT_FOUND");
        (ra(t, a.audience), maySeeMatch9(a, t) || err9());
        const i = await oc(e, t),
          n = await Ui(e, t),
          r = new Map(n.map((e) => [e.id, e])),
          o = (e) => ({
            formation_key: e.formation_key,
            slots: e.slots.map((e) => {
              const t = e.player_id ? r.get(e.player_id) : void 0;
              return Object.assign({}, e, {
                player_name: t?.display_name ?? null,
                user_id: t?.user_id ?? null,
                avatar_seed: t?.avatar_seed ?? 0,
                avatar_url: t?.avatar_url ?? null,
              });
            }),
          }),
          s = new Set([...i.a.slots, ...i.b.slots].map((e) => e.player_id).filter(Boolean)),
          d = sc(t, a, i),
          l = Date.now(),
          c = nc(a);
        return {
          game_id: e,
          version: i.version,
          locked: i.locked,
          can_edit: d,
          is_live:
            "scheduled" === a.status &&
            l >= new Date(a.starts_at).getTime() &&
            l <= new Date(a.ends_at).getTime(),
          team_size: c,
          a: o(i.a),
          b: o(i.b),
          bench: n
            .filter((e) => !s.has(e.id))
            .map((e) => ({
              player_id: e.id,
              name: e.display_name,
              user_id: e.user_id ?? null,
              avatar_seed: e.avatar_seed,
              avatar_url: e.avatar_url ?? null,
            })),
          sport: a.sport,
          formations: (0, T.formationsForSport)(c, a.sport).map((e) => ({
            key: e.key,
            label: e.label,
            labelKey: e.labelKey ?? null,
          })),
          suggested_key: (0, T.suggestFormationKey)(c, 0.5, a.sport),
          editor_user_ids: d ? i.editor_user_ids : [],
          history: d ? i.history : [],
        };
      };
    r.mockGetLineup = uc;
    r.mockSetLineupFormation = async (e, t, a, i) => {
      const { game: g9, lineup: n } = await dc(e, t);
      if (n.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      return Xt(t, async () => {
        const r = ("A" === a ? n.a : n.b).slots
            .map((e) => ({ player_id: e.player_id, jersey: e.jersey, captain: e.captain }))
            .filter((e) => e.player_id),
          o = rc(i, g9.sport);
        return (
          r.slice(0, o.slots.length).forEach((e, t) => {
            ((o.slots[t].player_id = e.player_id),
              (o.slots[t].jersey = e.jersey),
              (o.slots[t].captain = e.captain));
          }),
          "A" === a ? (n.a = o) : (n.b = o),
          await lc(n, e, `formation:${a}:${i}`),
          await (0, w.logAudit)("lineup.updated", (0, w.actorRef)(e), {
            game: t.slice(-6),
            action: "formation",
            key: i,
          }),
          uc(t, e)
        );
      });
    };
    r.mockAssignLineupSlot = async (e, t, a, i, n) => {
      const { lineup: r } = await dc(e, t);
      if (r.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      return Xt(t, async () => {
        if (n) {
          if (!(await Ui(t, e)).some((e) => e.id === n)) throw new Error("E_PLAYER_IS_NOT_IN_THIS_MATCH");
          _c(r, n);
        }
        const o = cc(r, a, i);
        return (
          (o.player_id = n),
          n || ((o.jersey = null), (o.captain = !1)),
          await lc(r, e, n ? `assign:${a}:${i}` : `clear:${a}:${i}`),
          await (0, w.logAudit)("lineup.updated", (0, w.actorRef)(e), {
            game: t.slice(-6),
            action: "assign",
          }),
          uc(t, e)
        );
      });
    };
    r.mockSwapLineupSlots = async (e, t, a, i, n) => {
      const { lineup: r } = await dc(e, t);
      if (r.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      return Xt(t, async () => {
        const o = cc(r, a, i),
          s = cc(r, a, n);
        return (
          ([o.player_id, s.player_id] = [s.player_id, o.player_id]),
          ([o.jersey, s.jersey] = [s.jersey, o.jersey]),
          ([o.captain, s.captain] = [s.captain, o.captain]),
          await lc(r, e, `swap:${a}:${i}<>${n}`),
          await (0, w.logAudit)("lineup.updated", (0, w.actorRef)(e), { game: t.slice(-6), action: "swap" }),
          uc(t, e)
        );
      });
    };
    r.mockSetLineupCaptain = async (e, t, a, i) => {
      const { lineup: n } = await dc(e, t);
      if (n.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      const r = "A" === a ? n.a : n.b;
      if (!cc(n, a, i).player_id) throw new Error("E_ASSIGN_A_PLAYER_FIRST");
      for (const e of r.slots) e.captain = e.slot_id === i;
      return (
        await lc(n, e, `captain:${a}:${i}`),
        await (0, w.logAudit)("lineup.updated", (0, w.actorRef)(e), { game: t.slice(-6), action: "captain" }),
        uc(t, e)
      );
    };
    r.mockSetLineupJersey = async (e, t, a, i, n) => {
      const { lineup: r } = await dc(e, t);
      if (r.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      if (null !== n && (!Number.isInteger(n) || n < 1 || n > 99))
        throw new Error("E_JERSEY_NUMBERS_RUN_1_99");
      const o = cc(r, a, i);
      if (!o.player_id) throw new Error("E_ASSIGN_A_PLAYER_FIRST");
      return (
        (o.jersey = n),
        await lc(r, e, `jersey:${a}:${i}:${n ?? "\u2014"}`),
        await (0, w.logAudit)("lineup.updated", (0, w.actorRef)(e), { game: t.slice(-6), action: "jersey" }),
        uc(t, e)
      );
    };
    r.mockToggleLineupLock = async (e, t) => {
      await ei();
      const a = hi(t);
      if (!a) throw new Error("E_MATCH_NOT_FOUND");
      if (a.organizer_id !== e && !ro(e))
        throw (
          await (0, w.logAudit)("lineup.edit_denied", (0, w.actorRef)(e), {
            game: t.slice(-6),
            action: "lock",
          }),
          new Error("E_ONLY_THE_ORGANIZER_CAN_LOCK_THE")
        );
      const i = await oc(t, e);
      return (
        (i.locked = !i.locked),
        await lc(i, e, i.locked ? "locked" : "unlocked"),
        await (0, w.logAudit)(i.locked ? "lineup.locked" : "lineup.unlocked", (0, w.actorRef)(e), {
          game: t.slice(-6),
        }),
        uc(t, e)
      );
    };
    r.mockGrantLineupEdit = async (e, t, a, i) => {
      await ei();
      const n = hi(t);
      if (!n) throw new Error("E_MATCH_NOT_FOUND");
      if (n.organizer_id !== e && !ro(e))
        throw (
          await (0, w.logAudit)("lineup.edit_denied", (0, w.actorRef)(e), {
            game: t.slice(-6),
            action: "grant",
          }),
          new Error("E_ONLY_THE_ORGANIZER_CAN_MANAGE_LINEUP")
        );
      const r = await oc(t, e);
      return (
        (r.editor_user_ids = r.editor_user_ids.filter((e) => e !== a)),
        i && r.editor_user_ids.push(a),
        await lc(r, e, `${i ? "grant" : "revoke"}:${(0, w.actorRef)(a)}`),
        await (0, w.logAudit)(i ? "lineup.edit_granted" : "lineup.edit_revoked", (0, w.actorRef)(e), {
          game: t.slice(-6),
          target: (0, w.actorRef)(a) ?? "unknown",
        }),
        uc(t, e)
      );
    };
    function mc(e) {
      const t = new Map(Qt.gamePlayers.map((e) => [e.id, e.user_id ?? null])),
        a = new Map();
      for (const i of Qt.lineups)
        if (i.game_id !== e)
          for (const e of [i.a, i.b])
            for (const i of e.slots) {
              const e = i.player_id ? t.get(i.player_id) : null;
              if (!e) continue;
              const n = a.get(e) ?? {};
              ((n[i.role] = (n[i.role] ?? 0) + 1), a.set(e, n));
            }
      const i = new Map();
      for (const [e, t] of a) {
        const a = Object.entries(t).sort((e, t) => t[1] - e[1])[0];
        a && i.set(e, a[0]);
      }
      return i;
    }
    r.mockRandomizeLineup = async (e, t) => {
      const { lineup: a } = await dc(e, t);
      if (a.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      return Xt(t, async () => {
        const i = await Ui(t, e),
          n = Date.now() % 2147483647,
          r = (0, T.seededShuffle)(
            i.map((e) => e.id),
            n,
          ),
          o = (e, t) => {
            e.slots.forEach((e, a) => {
              ((e.player_id = t[a] ?? null), (e.jersey = null), (e.captain = !1));
            });
          },
          s = Math.ceil(Math.min(r.length, a.a.slots.length + a.b.slots.length) / 2);
        return (
          o(a.a, r.slice(0, s)),
          o(a.b, r.slice(s)),
          await lc(a, e, `randomize:${n}`),
          await (0, w.logAudit)("lineup.randomized", (0, w.actorRef)(e), { game: t.slice(-6) }),
          uc(t, e)
        );
      });
    };
    function wc(e) {
      const t = new Set(e),
        a = new Map();
      for (const e of Qt.gamePlayers) {
        if (!e.user_id || !t.has(e.user_id)) continue;
        const i = a.get(e.game_id) ?? [];
        (i.push(e.user_id), a.set(e.game_id, i));
      }
      const i = new Map();
      for (const e of a.values())
        for (let t = 0; t < e.length; t++)
          for (let a = t + 1; a < e.length; a++) {
            const n = (0, T.pairKey)(e[t], e[a]);
            i.set(n, (i.get(n) ?? 0) + 1);
          }
      const n = new Map();
      for (const [e, t] of i) n.set(e, Math.min(1, t / 3));
      return n;
    }
    r.mockGetMyPosition = async (e) => {
      await ei();
      const t = Qt.profiles.find((t) => t.id === e);
      return t?.preferred_position ? t.preferred_position : (mc("").get(e) ?? null);
    };
    r.mockAutoBalanceLineup = async (e, t) => {
      const { game: a, lineup: i } = await dc(e, t);
      if (i.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      return Xt(t, async () => {
        const n = await Ui(t, e),
          r = mc(t),
          o = [];
        for (const e of n) {
          let t = 0.5,
            i = null;
          if (e.user_id) {
            const n = await Nn(e.user_id, a.sport);
            ((t = (0.6 * n.skill + 0.4 * n.reliability) / 100), (i = r.get(e.user_id) ?? null));
          }
          o.push({ id: e.id, composite: t, pref: i });
        }
        const s = wc(n.map((e) => e.user_id).filter(Boolean)),
          d = new Map();
        for (let e = 0; e < n.length; e++)
          for (let t = e + 1; t < n.length; t++) {
            const a = n[e].user_id,
              i = n[t].user_id;
            if (!a || !i) continue;
            const r = s.get((0, T.pairKey)(a, i));
            r && d.set((0, T.pairKey)(n[e].id, n[t].id), r);
          }
        const l = new Map(o.map((e) => [e.id, e])),
          { a: c, b: _ } = (0, T.balanceTeams)(o, d),
          u = (e, t) => {
            const a = (0, T.assignSlots)(
              e.slots.map((e) => ({ id: e.slot_id, role: e.role, x: e.x, y: e.y })),
              t,
              l,
            );
            for (const t of e.slots) ((t.player_id = a[t.slot_id]), (t.jersey = null), (t.captain = !1));
          };
        return (
          u(i.a, c),
          u(i.b, _),
          await lc(i, e, "auto-balance"),
          await (0, w.logAudit)("lineup.balanced", (0, w.actorRef)(e), { game: t.slice(-6) }),
          uc(t, e)
        );
      });
    };
    const pc = async (e, t, a, i) => {
      await ei();
      if (!hi(t)) throw new Error("E_MATCH_NOT_FOUND");
      return Xt(t, async () => {
        const n = await oc(t, e);
        if (n.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
        const r = (await Ui(t, e)).find((t) => t.user_id === e || t.is_self);
        if (!r)
          throw (
            await (0, w.logAudit)("lineup.edit_denied", (0, w.actorRef)(e), {
              game: t.slice(-6),
              action: "claim",
            }),
            new Error("E_JOIN_THE_MATCH_TO_TAKE_A")
          );
        const o = cc(n, a, i);
        if (o.player_id && o.player_id !== r.id) throw new Error("E_THAT_POSITION_IS_ALREADY_TAKEN");
        return (
          _c(n, r.id),
          (o.player_id = r.id),
          await lc(n, e, `claim:${a}:${i}`),
          await (0, w.logAudit)("lineup.updated", (0, w.actorRef)(e), { game: t.slice(-6), action: "claim" }),
          uc(t, e)
        );
      });
    };
    r.mockClaimLineupSlot = pc;
    r.mockJoinAtPosition = async (e, t, a, i) => {
      await ei();
      const n = hi(t);
      if (!n) throw new Error("E_MATCH_NOT_FOUND");
      ra(e, n.audience);
      const r = await oc(t, e);
      if (r.locked) throw new Error("E_THE_LINEUP_IS_LOCKED");
      if (cc(r, a, i).player_id) throw new Error("E_THAT_POSITION_IS_ALREADY_TAKEN");
      if (Qt.bookings.some((a) => a.game_id === t && a.user_id === e && yi(a, Date.now())))
        return { join_status: "already_in", seated: !0, lineup: await pc(e, t, a, i) };
      const o = await ji(t, e);
      if ("confirmed" !== o.status) return { join_status: o.status, seated: !1, lineup: await uc(t, e) };
      try {
        const n = await pc(e, t, a, i);
        return (
          await (0, w.logAudit)("lineup.joined_via_board", (0, w.actorRef)(e), {
            game: t.slice(-6),
            slot: `${a}:${i}`,
          }),
          { join_status: "confirmed", seated: !0, lineup: n }
        );
      } catch {
        return { join_status: "confirmed", seated: !1, lineup: await uc(t, e) };
      }
    };
    r.mockRecordLineupSubstitution = async (e, t, a, i, n) => {
      const { lineup: r } = await dc(e, t);
      return Xt(t, async () => {
        if (!(await Ui(t, e)).some((e) => e.id === n)) throw new Error("E_PLAYER_IS_NOT_IN_THIS_MATCH");
        const o = cc(r, a, i),
          s = o.player_id;
        return (
          _c(r, n),
          (o.player_id = n),
          (o.jersey = null),
          await lc(r, e, `sub:${a}:${i}:${s?.slice(-4) ?? "\u2014"}\u2192${n.slice(-4)}`),
          await (0, w.logAudit)("lineup.substitution", (0, w.actorRef)(e), { game: t.slice(-6) }),
          uc(t, e)
        );
      });
    };
    r.mockShareLineupToChat = async (e, t, a) => {
      await ei();
      const i = await uc(t, e),
        n = (e, t) =>
          `${t} (${e.formation_key}): ` +
          e.slots
            .filter((e) => e.player_name)
            .map((e) => `${e.captain ? "\xa9" : ""}${e.jersey ? `#${e.jersey} ` : ""}${e.player_name}`)
            .join(", ");
      (await Gi({
        game_id: t,
        channel: "general",
        user_id: e,
        user_name: a,
        body: `\ud83d\udccb ${n(i.a, "Team A")}\n${n(i.b, "Team B")}`,
      }),
        await (0, w.logAudit)("lineup.shared", (0, w.actorRef)(e), { game: t.slice(-6) }));
    };
    r.mockSaveLineupTemplate = async (e, t, a) => {
      await ei();
      const i = t.trim().slice(0, 40);
      if (!i) throw new Error("E_NAME_THE_TEMPLATE");
      const n = { id: ea(), owner_id: e, name: i, formation_key: a, created_at: new Date().toISOString() };
      return (
        Qt.lineupTemplates.unshift(n),
        await Za(lt, Qt.lineupTemplates),
        await (0, w.logAudit)("lineup.template_saved", (0, w.actorRef)(e), { key: a }),
        n
      );
    };
    r.mockListLineupTemplates = async (e) => (await ei(), Qt.lineupTemplates.filter((t) => t.owner_id === e));
    r.mockGetDiscover = async (e) => {
      await ei();
      const t = Qt.profiles.find((t) => t.id === e),
        a = Qt.users.find((t) => t.id === e)?.email ?? "",
        i = (t?.full_name ?? "player").toLowerCase().replace(/\s+/g, ""),
        n = a.endsWith("@otp.playora.app") ? i : a.split("@")[0] || i,
        r = An(e),
        o = Qt.awardWins.filter((t) => t.winner_id === e && !t.revoked).length,
        s = [],
        d = aa(e),
        l = (t, a) => {
          if (t === e) return null;
          return (
            (("public" === al(t).profile_visibility || Vd(e, t)) &&
              (a || Qt.profiles.find((e) => e.id === t)?.full_name)) ||
            null
          );
        },
        c = [...Qt.bookings]
          .filter((t) => t.user_id !== e && ("confirmed" === t.status || "cancelled" === t.status))
          .sort(
            (e, t) =>
              new Date(t.updated_at ?? t.created_at).getTime() -
              new Date(e.updated_at ?? e.created_at).getTime(),
          );
      for (const e of c) {
        const t = hi(e.game_id);
        if (
          t &&
          "private" !== t.visibility &&
          "cancelled" !== t.status &&
          ia(d, t.audience ?? "male") &&
          !(new Date(t.starts_at).getTime() < Date.now()) &&
          !Ho(e.user_id) &&
          (s.push({
            id: e.id,
            at: e.updated_at ?? e.created_at,
            actor_name: l(e.user_id, e.display_name),
            kind: "cancelled" === e.status ? "left" : "joined",
            game_id: t.id,
            game_title: t.title,
            venue_name: Ai(t.venue_id),
            starts_at: t.starts_at,
          }),
          s.length >= 8)
        )
          break;
      }
      for (const t of gi())
        "scheduled" === t.status &&
          "private" !== t.visibility &&
          ia(d, t.audience ?? "male") &&
          (t.organizer_id === e ||
            Ho(t.organizer_id) ||
            new Date(t.starts_at).getTime() < Date.now() ||
            Date.now() - new Date(t.created_at).getTime() > 1728e5 ||
            s.push({
              id: `posted-${t.id}`,
              at: t.created_at,
              actor_name: Td(t.organizer_id),
              kind: "posted",
              game_id: t.id,
              game_title: t.title,
              venue_name: Ai(t.venue_id),
              starts_at: t.starts_at,
            }));
      (s.sort((e, t) => new Date(t.at).getTime() - new Date(e.at).getTime()), s.splice(10), await en());
      const _ = await Gl(e),
        u = new Set(),
        m = [];
      e: for (const e of _.sections)
        for (const t of e.items)
          if (
            !u.has(t.game.id) &&
            (u.add(t.game.id),
            m.push({
              reasons: t.reasons.slice(0, 3),
              game_id: t.game.id,
              title: t.game.venue.name,
              sport: t.game.sport,
              area: t.game.venue.area,
              starts_at: t.game.starts_at,
              confirmed: t.game.bookings_count,
              max_players: t.game.max_players,
              organizer_name: Td(t.game.organizer_id),
              price_kwd: Number(t.game.price_kwd),
              predicted: t.game.id === _.predicted_join_game_id,
            }),
            m.length >= 24)
          )
            break e;
      const w = Date.now(),
        p = [];
      for (const t of Qt.bookings) {
        if (t.user_id !== e || !yi(t, w)) continue;
        const a = hi(t.game_id);
        !a ||
          "scheduled" !== a.status ||
          new Date(a.ends_at).getTime() < w ||
          p.push({ id: a.id, starts: new Date(a.starts_at).getTime(), organizer: !1 });
      }
      for (const t of gi())
        t.organizer_id === e &&
          "scheduled" === t.status &&
          (new Date(t.ends_at).getTime() < w ||
            (ia(d, t.audience ?? "male") &&
              p.push({ id: t.id, starts: new Date(t.starts_at).getTime(), organizer: !0 })));
      const f = new Map();
      for (const e of p) {
        const t = f.get(e.id);
        (!t || (e.organizer && !t.organizer)) && f.set(e.id, e);
      }
      let g = null;
      const h = [...f.values()].sort((e, t) => e.starts - t.starts)[0] ?? null,
        y = h?.id ?? _.predicted_join_game_id;
      if (y) {
        const t = await Ni(y, e).catch(() => null);
        if (t && "scheduled" === t.status && new Date(t.ends_at).getTime() > w) {
          g = {
            reasons: h
              ? []
              : (_.sections
                  .flatMap((e) => e.items)
                  .find((e) => e.game.id === y)
                  ?.reasons.slice(0, 3) ?? []),
            game_id: t.id,
            title: t.venue.name,
            sport: t.sport,
            area: t.venue.area,
            starts_at: t.starts_at,
            confirmed: t.bookings_count,
            max_players: t.max_players,
            organizer_name: Td(t.organizer_id),
            price_kwd: Number(t.price_kwd),
            predicted: !h,
            kind: h ? "booked" : "suggested",
            is_organizer: h?.organizer ?? !1,
          };
        }
      }
      return {
        handle: n,
        full_name: t?.full_name ?? "Player",
        games_played: r.played,
        awards_potm: o,
        wallet_fils: Wl(A.acct.available(e)),
        activity: s,
        suggested: m,
        next_up: g,
        following: $d(e).length,
      };
    };
    r.mockGetGameScreen = async (e, t) => {
      await ei();
      const a = await Ni(t, e);
      await Vi();
      // Ni is the gate and null is its refusal. Everything below used to be fetched regardless.
      if (!a)
        return {
          game: null,
          players: [],
          fit: null,
          eval_targets: [],
          lineup: null,
          seat_payment: null,
          squad_status: null,
        };
      const [i, n, r, o, s] = await Promise.all([
        Ui(t, e),
        Mn(t, e).catch(() => null),
        In(t, e).catch(() => []),
        uc(t, e).catch(() => null),
        qr(e, t).catch(() => null),
      ]);
      let d = null;
      if (a && "open" === a.squad_window_status && e) {
        const i = Qt.bookings.find((a) => a.game_id === t && a.user_id === e && "confirmed" === a.status);
        i && (d = i.squad_confirmed_at || e === a.organizer_id ? "confirmed" : "pending");
      }
      return { game: a, players: i, fit: n, eval_targets: r, lineup: o, seat_payment: s, squad_status: d };
    };
    r.mockGetOrganizerMatchScreen = async (e, t) => {
      await ei();
      const a = await Ni(t, e),
        i = await Qi(t);
      if (!(!!a && !!e && a.organizer_id === e))
        return { game: a, participants: { confirmed: [], reserved: [], pending: [], waitlist: [] }, candidates: [], intel: [] };
      const [n, r] = await Promise.all([
        bn(t, e).catch(() => []),
        i.pending.length > 0 ? Pn(e, t).catch(() => []) : Promise.resolve([]),
      ]);
      return { game: a, participants: i, candidates: n, intel: r };
    };
    // ORG2 (F-ORG2-22): the only way to change a final score is an audited admin correction.
    r.mockCorrectMatchScore = async (e, t, a, i, n) => {
      (await ei(), await sn(e));
      const r = Qt.games.findIndex((e) => e.id === t);
      if (r < 0) throw new Error("E_MATCH_NOT_FOUND");
      const o = Qt.games[r];
      if (!o.score_submitted_at) throw new Error("E_INVALID_TRANSITION");
      if (![a, i].every((e) => Number.isInteger(e) && e >= 0 && e <= 99)) throw new Error("E_ENTER_A_REAL_SCORE");
      const s = (0, v.sanitizeText)(n ?? "", 300);
      if (s.length < 3) throw new Error("E_A_REASON_IS_REQUIRED");
      const d = { home: o.score_home, away: o.score_away };
      return (
        (Qt.games[r] = Object.assign({}, o, {
          score_home: a,
          score_away: i,
          score_corrected_at: new Date().toISOString(),
          score_corrected_by: e,
        })),
        await Za(te, Qt.games),
        // mockSubmitMatchScore fans a match_score notification out to every participant; the
        // correction notified nobody, so players kept the wrong score they had been pushed and the
        // only legitimate way to change a final result was invisible to the people it was about.
        await Bi(Qt.games[r], (e) => ({
          id: ea(),
          user_id: e,
          type: "match_score",
          game_id: t,
          venue_name: Ai(o.venue_id),
          sport: o.sport,
          score_home: a,
          score_away: i,
          corrected: !0,
          read: !1,
          created_at: new Date().toISOString(),
        }), !0),
        await Yi(t, e, "score_corrected", { note: `${d.home}-${d.away} \u2192 ${a}-${i}: ${s}` }),
        await (0, w.logAdminAudit)("match.score_corrected", e, o.organizer_id, {
          game: t.slice(-6),
          from: `${d.home}-${d.away}`,
          to: `${a}-${i}`,
          reason: s,
        }),
        Qt.games[r]
      );
    };
  },
  631,
  [
    33, 24, 618, 632, 637, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656,
    657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670,
  ],
);
