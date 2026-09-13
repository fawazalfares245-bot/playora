__d(
  function (_g, r, i, a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.fetchCrossPartitionGrants =
        e.fetchCourts =
        e.fetchCourtAvailability =
        e.fetchConversations =
        e.fetchConductAdminStats =
        e.fetchConciergeStats =
        e.fetchConciergeRules =
        e.fetchConciergeReplacements =
        e.fetchConciergePlan =
        e.fetchConciergeNotificationPlan =
        e.fetchCompatAdminStats =
        e.fetchComments =
        e.fetchCoCStatus =
        e.fetchClubDashboard =
        e.fetchClipSignedUrl =
        e.fetchClanBattles =
        e.fetchClanBattle =
        e.fetchChatMessages =
        e.fetchBookingPayments =
        e.fetchBookingCheckins =
        e.fetchBooking =
        e.fetchBlockedList =
        e.fetchBattleResult =
        e.fetchBIDashboard =
        e.fetchAwardSeasons =
        e.fetchAwardLeaderboard =
        e.fetchAwardFraudSignals =
        e.fetchAwardBallot =
        e.fetchAuthorStories =
        e.fetchApplicationDetail =
        e.fetchAllTeamsAdmin =
        e.fetchAllRewardsAdmin =
        e.fetchAdminPlayerIntel =
        e.fetchAdminFinancials =
        e.fetchAdminCompatibility =
        e.exportUserData =
        e.exportBIReport =
        e.ensureChatSeed =
        e.endSeries =
        e.editFutureOccurrences =
        e.discardMatchDraft =
        e.deleteTeamChat =
        e.deleteSavedGroup =
        e.deleteDirectMessage =
        e.deleteAccount =
        e.declineReplacement =
        e.declineMessageRequest =
        e.decideJoinRequest =
        e.deactivateNeedPlayer =
        e.createWalletRequest =
        e.createTeam =
        e.createStory =
        e.createSeries =
        e.createPost =
        e.createPaymentPlan =
        e.createMatch =
        e.createGroupBooking =
        e.createCustomAward =
        e.createClub =
        e.createBooking =
        e.counterBattleResult =
        e.confirmSquadSpot =
        e.confirmLeagueSquad =
        e.conciergeAutoInvite =
        e.cocVersion =
        e.closeSquadWindowEarly =
        e.closeRegistration =
        e.claimVenuePayout =
        e.claimLineupSlot =
        e.checkoutJoin =
        e.checkUsername =
        e.changeMemberRole =
        e.castMvpVote =
        e.castAwardVote =
        e.cancelSeries =
        e.cancelMatch =
        e.cancelGroupMember =
        e.cancelCourtBooking =
        e.cancelBooking =
        e.blockUser =
        e.blockCourtTime =
        e.autoBalanceLineup =
        e.auditSeatConsistency =
        e.auditReplacementLeak =
        e.assignLineupSlot =
        e.approveParticipant =
        e.applyVenue =
        e.adminSuspendTeam =
        e.adminRemoveAchievement =
        e.adminGrantCredit =
        e.adminFindPlayers =
        e.adminCorrectAudience =
        e.adminAdjustRating =
        e.addVenueStaff =
        e.addComment =
        e.activateNeedPlayer =
        e.acceptReplacement =
        e.acceptMessageRequest =
        e.acceptCoC =
        e.acceptClubInvitation =
          void 0),
      (e.fetchTeam =
        e.fetchSuggestedFollows =
        e.fetchStoryTray =
        e.fetchSquadState =
        e.fetchSmartSchedule =
        e.fetchSmartDefaults =
        e.fetchSkillFit =
        e.fetchSkillEvalTargets =
        e.fetchSkillAdminStats =
        e.fetchSeriesAnalytics =
        e.fetchSeries =
        e.fetchSeatRefundQuote =
        e.fetchRewards =
        e.fetchReviews =
        e.fetchReplacementState =
        e.fetchReplacementOffer =
        e.fetchReplacementMetrics =
        e.fetchReplacementAdminStats =
        e.fetchRecommendedGames =
        e.fetchRecentBattleResults =
        e.fetchProfile =
        e.fetchPrivacySettings =
        e.fetchPrivacy =
        e.fetchPlayerProfile =
        e.fetchPlayerAwards =
        e.fetchPendingVenues =
        e.fetchPendingCeremony =
        e.fetchPayment =
        e.fetchPassportPrivacy =
        e.fetchPassport =
        e.fetchOrganizerTrustScore =
        e.fetchOrganizerStats =
        e.fetchOrganizerSeries =
        e.fetchOrganizerReputation =
        e.fetchOrganizerReferralStats =
        e.fetchOrganizerRatings =
        e.fetchOrganizerMatches =
        e.fetchOrganizerMatchScreen =
        e.fetchOrganizerBookings =
        e.fetchOrganizerApplications =
        e.fetchOptimizerWeights =
        e.fetchOptimizerDashboard =
        e.fetchNpnCandidates =
        e.fetchNpnAdminStats =
        e.fetchNotifications =
        e.fetchNeedPlayerFeed =
        e.fetchMyVenues =
        e.fetchMyTeams =
        e.fetchMySkillSummary =
        e.fetchMySeatPayment =
        e.fetchMyReplacementOffers =
        e.fetchMyRedemptions =
        e.fetchMyPosition =
        e.fetchMyPaymentRequests =
        e.fetchMyPartitionStance =
        e.fetchMyOrganizerApplication =
        e.fetchMyCourtBookings =
        e.fetchMyCancellations =
        e.fetchMyBookings =
        e.fetchMvpPanel =
        e.fetchMediaUpload =
        e.fetchMediaLibrary =
        e.fetchMediaDashboard =
        e.fetchMatchParticipants =
        e.fetchMatchOptimization =
        e.fetchMatchInvite =
        e.fetchMatchFeed =
        e.fetchMatchDraft =
        e.fetchMatchAwards =
        e.fetchMatchActivity =
        e.fetchLoyaltyRules =
        e.fetchLoyaltyLedger =
        e.fetchLoyaltyEarnBreakdown =
        e.fetchLoyaltyAdminStats =
        e.fetchLoyaltyAccount =
        e.fetchLineup =
        e.fetchLeague =
        e.fetchJoinSuggestions =
        e.fetchJoinRequestIntel =
        e.fetchIncidentQueue =
        e.fetchHighlightCollections =
        e.fetchH2HMap =
        e.fetchGrowthAdminStats =
        e.fetchGroupConfig =
        e.fetchGroupBooking =
        e.fetchGroupAnalytics =
        e.fetchGameScreen =
        e.fetchGamePlayers =
        e.fetchGameGroups =
        e.fetchGame =
        e.fetchFunnelStats =
        e.fetchFollowRequests =
        e.fetchFollowList =
        e.fetchFeedAnalytics =
        e.fetchFeed =
        e.fetchDiscover =
        e.fetchDisciplinaryStanding =
        e.fetchDemandWeights =
        e.fetchDemandPrediction =
        e.fetchDemandModelStats =
          void 0),
      (e.inviteClubMember =
        e.grantLineupEdit =
        e.grantCrossPartition =
        e.followPlayer =
        e.fetchWallet =
        e.fetchVenues =
        e.fetchVenueRevenue =
        e.fetchVenueBookings =
        e.fetchVenueBookingDetail =
        e.fetchVenue =
        e.fetchUserSanctions =
        e.fetchUserPosts =
        e.fetchUpcomingGames =
        e.fetchUnreadDMCount =
        e.fetchUnreadCount =
        e.fetchThread =
        e.fetchTeams =
        e.fetchTeamStats =
        e.fetchTeamRankings =
        e.fetchTeamMembers =
        e.fetchTeamInvite =
        e.fetchTeamEvents =
        e.fetchTeamChat =
        e.fetchTeamCalendar =
        e.fetchTeamBattles =
        e.fetchTeamAdminStats =
        e.fetchTeamAchievements =
          void 0),
      Object.defineProperty(e, "isAudienceError", {
        enumerable: !0,
        get: function () {
          return o.isAudienceError;
        },
      }),
      (e.saveLineupTemplate =
        e.saveFriendGroup =
        e.rewardCategories =
        e.revokeCrossPartition =
        e.revokeAward =
        e.reviewVenue =
        e.reviewSanction =
        e.reviewClubVerification =
        e.reviewApplication =
        e.resumeSeries =
        e.restoreUser =
        e.respondWalletRequest =
        e.respondFriendRequest =
        e.respondFollowRequest =
        e.respondClanChallenge =
        e.resolveInviteCode =
        e.reserveCourt =
        e.reportPost =
        e.reportClipCopyright =
        e.reopenRegistration =
        e.removeVenueStaff =
        e.removeTeamMember =
        e.remediateReplacementLeak =
        e.rejectParticipant =
        e.refundPayment =
        e.redeemReward =
        e.recordTeamResult =
        e.recordOptimizerDecision =
        e.recordLineupSubstitution =
        e.recordDemandOutcome =
        e.recordClipView =
        e.reconcileSeatPayments =
        e.rateOrganizer =
        e.randomizeLineup =
        e.quickCreateMatch =
        e.publishAwards =
        e.postTeamChat =
        e.pinTeamChat =
        e.paymentMethods =
        e.payRequest =
        e.payGroup =
        e.pauseSeries =
        e.optOutSquad =
        e.openSquadWindow =
        e.openAwardVoting =
        e.oneTapJoin =
        e.muteUser =
        e.markNotificationRead =
        e.markCeremonySeen =
        e.markAllNotificationsRead =
        e.manualReplace =
        e.loyaltyTiers =
        e.loyaltyActions =
        e.logTeamInviteShare =
        e.logShare =
        e.logFunnel =
        e.logFeedSignal =
        e.listSavedGroups =
        e.listMyGroups =
        e.listMyClubs =
        e.listLineupTemplates =
        e.listFriends =
        e.leaveTeam =
        e.leaveMatch =
        e.kickPlayer =
        e.joinTeamByCode =
        e.joinTeam =
        e.joinSeries =
        e.joinMatch =
        e.joinByCode =
        e.joinAtPosition =
        e.issueSanction =
          void 0),
      (e.walletWithdraw =
        e.walletTransfer =
        e.walletAddFunds =
        e.venueDecideBooking =
        e.upsertSelfPlayer =
        e.upsertReward =
        e.upsertReview =
        e.upsertCourt =
        e.uploadMatchVideo =
        e.updateVenueProfile =
        e.updateTeam =
        e.updateProfile =
        e.updatePrivacy =
        e.updatePassportPrivacy =
        e.updateNeedPlayer =
        e.updateMatch =
        e.updateConsent =
        e.unmuteUser =
        e.unfollowPlayer =
        e.unblockUser =
        e.unblockCourtTime =
        e.touchPresence =
        e.toggleSavePost =
        e.toggleLineupLock =
        e.toggleLike =
        e.toggleCommentLike =
        e.syncLoyalty =
        e.swapLineupSlots =
        e.submitWalletKyc =
        e.submitSkillEvaluation =
        e.submitOrganizerApplication =
        e.submitMatchScore =
        e.submitContact =
        e.submitClubVerification =
        e.submitBattleResult =
        e.startConversation =
        e.startClubSubscription =
        e.sharePost =
        e.shareLineupToChat =
        e.shareClip =
        e.setVenueCommission =
        e.setTeamBadge =
        e.setSelfCategory =
        e.setSavedPayment =
        e.setRewardActive =
        e.setReplacementRadius =
        e.setReplacementMode =
        e.setPrivacySettings =
        e.setPlayerTeam =
        e.setOptimizerWeights =
        e.setLineupJersey =
        e.setLineupFormation =
        e.setLineupCaptain =
        e.setEarnRule =
        e.setDemandWeights =
        e.setCourtActive =
        e.setConciergeRules =
        e.setAttendance =
        e.sendPaymentReminders =
        e.sendFriendRequest =
        e.sendDirectMessage =
        e.sendClanChallenge =
        e.sendChatMessage =
        e.searchUsers =
        e.searchPlayers =
        e.searchBookableVenues =
        e.scheduleTeamEvent =
        e.scanCheckin =
        e.saveMatchDraft =
          void 0));
    var t = r(d[0]),
      o = r(d[1]);
    e.fetchUpcomingGames = (o) =>
      t.store
        .mockGetUpcomingGames(o)
        .then((t) =>
          o?.search
            ? t.filter((t) =>
                `${t.venue.name} ${t.venue.area} ${t.sport}`.toLowerCase().includes(o.search.toLowerCase()),
              )
            : t,
        );
    e.fetchGame = (o, c) => t.store.mockGetGame(o, c);
    e.fetchVenues = () => t.store.mockGetVenues();
    e.fetchVenue = (o) => t.store.mockGetVenue(o);
    e.fetchReviews = (o) => t.store.mockGetReviews(o);
    e.upsertReview = (o) => t.store.mockUpsertReview(o);
    e.fetchMyBookings = (o) => t.store.mockGetMyBookings(o);
    e.createBooking = (o, c) => t.store.mockCreateBooking(o, c);
    e.cancelBooking = (o, c) => t.store.mockCancelBooking(o, c);
    e.fetchProfile = (o) => t.store.mockGetProfile(o);
    e.updateProfile = (o, c) => t.store.mockUpdateProfile(o, c);
    e.fetchNotifications = (o) => t.store.mockGetNotifications(o);
    e.fetchUnreadCount = (o) => t.store.mockGetUnreadCount(o);
    e.markNotificationRead = (o, c) => t.store.mockMarkNotificationRead(o, c);
    e.markAllNotificationsRead = (o) => t.store.mockMarkAllNotificationsRead(o);
    e.fetchGamePlayers = (o, c) => t.store.mockGetGamePlayers(o, c);
    e.setPlayerTeam = (o, c, s) => t.store.mockSetPlayerTeam(o, c, s);
    e.upsertSelfPlayer = (o) => t.store.mockUpsertSelfPlayer(o);
    e.ensureChatSeed = (o) => t.store.mockEnsureChatSeed(o);
    e.fetchChatMessages = (o, c, s) => t.store.mockGetChatMessages(o, c, s);
    e.sendChatMessage = (o) => t.store.mockSendChatMessage(o);
    e.submitContact = (o) => t.store.mockSubmitContact(o);
    e.updateConsent = (o, c) => t.store.mockUpdateConsent(o, c);
    e.exportUserData = (o) => t.store.mockExportUserData(o);
    e.deleteAccount = (o) => t.store.mockDeleteAccount(o);
    e.joinMatch = (o, c) => t.store.mockJoinMatch(o, c);
    e.checkoutJoin = (o, c, s) => t.store.mockCheckoutJoin(o, c, s);
    e.fetchMySeatPayment = (o, c) => t.store.mockGetMySeatPayment(o, c);
    e.leaveMatch = (o, c) => t.store.mockLeaveMatch(o, c);
    e.createMatch = (o, c) => t.store.mockCreateMatch(o, c);
    e.updateMatch = (o, c, s) => t.store.mockUpdateMatch(o, c, s);
    e.cancelMatch = (o, c, s) => t.store.mockCancelMatch(o, c, s);
    e.approveParticipant = (o, c, s) => t.store.mockApproveParticipant(o, c, s);
    e.rejectParticipant = (o, c, s, n) => t.store.mockRejectParticipant(o, c, s, n);
    e.correctMatchScore = (o, c, s, n, l) => t.store.mockCorrectMatchScore(o, c, s, n, l);
    e.setAttendance = (o, c, s, n) => t.store.mockSetAttendance(o, c, s, n);
    e.fetchSmartDefaults = (o, c, s) => t.store.mockGetSmartDefaults(o, c, s);
    e.quickCreateMatch = (o, c) => t.store.mockQuickCreateMatch(o, c);
    e.kickPlayer = (o, c, s, n) => t.store.mockKickPlayer(o, c, s, n);
    e.closeRegistration = (o, c) => t.store.mockCloseRegistration(o, c);
    e.reopenRegistration = (o, c) => t.store.mockReopenRegistration(o, c);
    e.submitMatchScore = (o, c, s, n) => t.store.mockSubmitMatchScore(o, c, s, n);
    e.fetchMatchActivity = (o, c) => t.store.mockGetMatchActivity(o, c);
    e.fetchSeatRefundQuote = (o, c) => t.store.mockGetSeatRefundQuote(o, c);
    e.fetchMyCancellations = (o) => t.store.mockGetMyCancellations(o);
    e.openSquadWindow = (o, c, s) => t.store.mockOpenSquadWindow(o, c, s);
    e.closeSquadWindowEarly = (o, c) => t.store.mockCloseSquadWindowEarly(o, c);
    e.confirmSquadSpot = (o, c) => t.store.mockConfirmSquadSpot(o, c);
    e.optOutSquad = (o, c) => t.store.mockOptOutSquad(o, c);
    e.fetchSquadState = (o, c) => t.store.mockGetSquadState(o, c);
    e.fetchOrganizerMatches = (o) => t.store.mockGetOrganizerMatches(o);
    e.reconcileSeatPayments = () => t.store.mockReconcileSeatPayments();
    e.auditSeatConsistency = () => t.store.mockAuditSeatConsistency();
    e.fetchMatchParticipants = (o) => t.store.mockGetMatchParticipants(o);
    e.fetchOrganizerStats = (o) => t.store.mockGetOrganizerStats(o);
    e.fetchOrganizerReputation = (o) => t.store.mockGetOrganizerReputation(o);
    e.fetchOrganizerRatings = (o) => t.store.mockGetOrganizerRatings(o);
    e.rateOrganizer = (o) => t.store.mockRateOrganizer(o);
    e.fetchMyOrganizerApplication = (o) => t.store.mockGetMyOrganizerApplication(o);
    e.submitOrganizerApplication = (o, c) => t.store.mockSubmitOrganizerApplication(o, c);
    e.fetchOrganizerTrustScore = (o) => t.store.mockGetOrganizerTrustScore(o);
    e.fetchOrganizerApplications = (o, c) => t.store.mockGetOrganizerApplications(o, c);
    e.fetchApplicationDetail = (o, c) => t.store.mockGetApplicationDetail(o, c);
    e.reviewApplication = (o, c, s, n) => t.store.mockReviewApplication(o, c, s, n);
    e.fetchMySkillSummary = (o) => t.store.mockGetMySkillSummary(o);
    e.setSelfCategory = (o, c, s) => t.store.mockSetSelfCategory(o, c, s);
    e.fetchJoinRequestIntel = (o, c) => t.store.mockGetJoinRequestIntel(o, c);
    e.fetchAdminPlayerIntel = (o, c) => t.store.mockAdminGetPlayerIntel(o, c);
    e.adminAdjustRating = (o, c, s, n, l) => t.store.mockAdminAdjustRating(o, c, s, n, l);
    e.adminFindPlayers = (o, c) => t.store.mockAdminFindPlayers(o, c);
    e.adminCorrectAudience = (o, c, s, n) => t.store.mockAdminCorrectAudience(o, c, s, n);
    e.fetchMyCourtBookings = (o) => t.store.mockGetMyCourtBookings(o);
    e.saveMatchDraft = (o, c) => t.store.mockSaveMatchDraft(o, c);
    e.fetchMatchDraft = (o) => t.store.mockGetMatchDraft(o);
    e.discardMatchDraft = (o) => t.store.mockDiscardMatchDraft(o);
    e.fetchMvpPanel = (o, c) => t.store.mockGetMvpPanel(o, c);
    e.castMvpVote = (o, c, s) => t.store.mockCastAwardVote(o, c, "mvp", s);
    e.submitSkillEvaluation = (o, c) => t.store.mockSubmitSkillEvaluation(o, c);
    e.fetchSkillEvalTargets = (o, c) => t.store.mockGetSkillEvalTargets(o, c);
    e.fetchSkillFit = (o, c) => t.store.mockGetSkillFit(o, c);
    e.fetchRecommendedGames = (o) => t.store.mockGetRecommendedGames(o);
    e.fetchSkillAdminStats = (o) => t.store.mockGetSkillAdminStats(o);
    e.createSeries = (o, c) => t.store.mockCreateSeries(o, c);
    e.editFutureOccurrences = (o, c, s) => t.store.mockEditFutureOccurrences(o, c, s);
    e.pauseSeries = (o, c) => t.store.mockPauseSeries(o, c);
    e.resumeSeries = (o, c, s) => t.store.mockResumeSeries(o, c, s);
    e.endSeries = (o, c) => t.store.mockEndSeries(o, c);
    e.cancelSeries = (o, c, s) => t.store.mockCancelSeries(o, c, s);
    e.joinSeries = (o, c) => t.store.mockJoinSeries(o, c);
    e.fetchOrganizerSeries = (o) => t.store.mockGetOrganizerSeries(o);
    e.fetchSeries = (o, c) => t.store.mockGetSeries(o, c);
    e.fetchSeriesAnalytics = (o, c) => t.store.mockGetSeriesAnalytics(o, c);
    e.activateNeedPlayer = (o, c, s) => t.store.mockActivateNeedPlayer(o, c, s);
    e.updateNeedPlayer = (o, c, s) => t.store.mockUpdateNeedPlayer(o, c, s);
    e.deactivateNeedPlayer = (o, c) => t.store.mockDeactivateNeedPlayer(o, c);
    e.fetchNeedPlayerFeed = (o) => t.store.mockGetNeedPlayerFeed(o);
    e.fetchNpnCandidates = (o, c, s) => t.store.mockGetNpnCandidates(o, c, s);
    e.fetchNpnAdminStats = (o) => t.store.mockGetNpnAdminStats(o);
    e.fetchCompatAdminStats = (o) => t.store.mockGetCompatAdminStats(o);
    e.grantCrossPartition = (o, c, s) => t.store.mockGrantCrossPartition(o, c, s);
    e.revokeCrossPartition = (o, c) => t.store.mockRevokeCrossPartition(o, c);
    e.fetchCrossPartitionGrants = (o) => t.store.mockGetCrossPartitionGrants(o);
    e.fetchMyPartitionStance = (o) => t.store.mockGetMyPartitionStance(o);
    e.auditReplacementLeak = (o) => t.store.mockAuditReplacementLeak(o);
    e.remediateReplacementLeak = (o, c, s) => t.store.mockRemediateReplacementLeak(o, c, s);
    e.fetchAdminCompatibility = (o, c, s) => t.store.mockAdminGetCompatibility(o, c, s);
    e.fetchPassport = (o, c) => t.store.mockGetPassport(o, c);
    e.fetchPassportPrivacy = (o) => t.store.mockGetPassportPrivacy(o);
    e.updatePassportPrivacy = (o, c) => t.store.mockUpdatePassportPrivacy(o, c);
    e.adminRemoveAchievement = (o, c, s) => t.store.mockAdminRemoveAchievement(o, c, s);
    e.fetchMatchInvite = (o) => t.store.mockGetMatchInvite(o);
    e.resolveInviteCode = (o, c) => t.store.mockResolveInviteCode(o, c);
    e.logShare = (o, c, s) => t.store.mockLogShare(o, c, s);
    e.joinByCode = (o, c) => t.store.mockJoinByCode(o, c);
    e.fetchOrganizerReferralStats = (o) => t.store.mockGetOrganizerReferralStats(o);
    e.fetchGrowthAdminStats = (o) => t.store.mockGetGrowthAdminStats(o);
    e.searchBookableVenues = (o) => t.store.mockSearchBookableVenues(o);
    e.fetchVenueBookingDetail = (o) => t.store.mockGetVenueBookingDetail(o);
    e.applyVenue = (o, c) => t.store.mockApplyVenue(o, c);
    e.fetchMyVenues = (o) => t.store.mockGetMyVenues(o);
    e.updateVenueProfile = (o, c, s) => t.store.mockUpdateVenueProfile(o, c, s);
    e.addVenueStaff = (o, c, s, n) => t.store.mockAddVenueStaff(o, c, s, n);
    e.removeVenueStaff = (o, c, s) => t.store.mockRemoveVenueStaff(o, c, s);
    e.fetchPendingVenues = (o) => t.store.mockGetPendingVenues(o);
    e.reviewVenue = (o, c, s, n) => t.store.mockAdminReviewVenue(o, c, s, n);
    e.setVenueCommission = (o, c, s, n, l) => t.store.mockAdminSetCommission(o, c, s, n, l);
    e.fetchAdminFinancials = (o) => t.store.mockGetAdminFinancials(o);
    e.fetchCourts = (o, c) => t.store.mockGetCourts(o, c);
    e.upsertCourt = (o, c, s) => t.store.mockUpsertCourt(o, c, s);
    e.setCourtActive = (o, c, s) => t.store.mockSetCourtActive(o, c, s);
    e.blockCourtTime = (o, c, s, n, l) => t.store.mockBlockCourtTime(o, c, s, n, l);
    e.unblockCourtTime = (o, c) => t.store.mockUnblockCourtTime(o, c);
    e.fetchCourtAvailability = (o, c, s) => t.store.mockGetCourtAvailability(o, c, s);
    e.reserveCourt = (o, c, s, n, l) => t.store.mockReserveCourt(o, c, s, n, l);
    e.venueDecideBooking = (o, c, s) => t.store.mockVenueDecideBooking(o, c, s);
    e.cancelCourtBooking = (o, c, s) => t.store.mockCancelCourtBooking(o, c, s);
    e.fetchOrganizerBookings = (o) => t.store.mockGetOrganizerBookings(o);
    e.fetchVenueBookings = (o, c) => t.store.mockGetVenueBookings(o, c);
    e.fetchBooking = (o, c) => t.store.mockGetBooking(o, c);
    e.createPaymentPlan = (o, c, s, n) => t.store.mockCreatePaymentPlan(o, c, s, n);
    e.fetchBookingPayments = (o, c) => t.store.mockGetBookingPayments(o, c);
    e.fetchMyPaymentRequests = (o) => t.store.mockGetMyPaymentRequests(o);
    e.fetchPayment = (o, c) => t.store.mockGetPayment(o, c);
    e.payRequest = (o, c, s) => t.store.mockPayRequest(o, c, s);
    e.refundPayment = (o, c) => t.store.mockRefundPayment(o, c);
    e.sendPaymentReminders = (o, c) => t.store.mockSendPaymentReminders(o, c);
    e.paymentMethods = () => t.store.mockGetPaymentMethods();
    e.fetchBookingCheckins = (o, c) => t.store.mockGetBookingCheckins(o, c);
    e.scanCheckin = (o, c, s, n) => t.store.mockScanCheckin(o, c, s, n);
    e.fetchVenueRevenue = (o, c) => t.store.mockGetVenueRevenue(o, c);
    e.createTeam = (o, c) => t.store.mockCreateTeam(o, c);
    e.fetchTeams = (o, c) => t.store.mockGetTeams(o, c);
    e.fetchMyTeams = (o) => t.store.mockGetMyTeams(o);
    e.fetchTeam = (o, c) => t.store.mockGetTeam(o, c);
    e.updateTeam = (o, c, s) => t.store.mockUpdateTeam(o, c, s);
    e.fetchTeamMembers = (o, c) => t.store.mockGetTeamMembers(o, c);
    e.joinTeam = (o, c) => t.store.mockJoinTeam(o, c);
    e.joinTeamByCode = (o, c) => t.store.mockJoinTeamByCode(o, c);
    e.setTeamBadge = (o, c, s) => t.store.mockSetTeamBadge(o, c, s);
    e.fetchBattleResult = (o, c) => t.store.mockGetBattleResult(o, c);
    e.submitBattleResult = (o, c, s, n) => t.store.mockSubmitBattleResult(o, c, s, n);
    e.counterBattleResult = (o, c, s, n) => t.store.mockCounterBattleResult(o, c, s, n);
    e.fetchPendingCeremony = (o) => t.store.mockGetPendingCeremony(o);
    e.markCeremonySeen = (o, c) => t.store.mockMarkCeremonySeen(o, c);
    e.fetchH2HMap = (o, c) => t.store.mockGetH2HMap(o, c);
    e.decideJoinRequest = (o, c, s, n) => t.store.mockDecideJoinRequest(o, c, s, n);
    e.leaveTeam = (o, c) => t.store.mockLeaveTeam(o, c);
    e.removeTeamMember = (o, c, s) => t.store.mockRemoveMember(o, c, s);
    e.changeMemberRole = (o, c, s, n) => t.store.mockChangeMemberRole(o, c, s, n);
    e.fetchTeamStats = (o) => t.store.mockGetTeamStats(o);
    e.fetchTeamAchievements = (o, c) => t.store.mockGetTeamAchievements(o, c);
    e.scheduleTeamEvent = (o, c, s) => t.store.mockScheduleTeamEvent(o, c, s);
    e.recordTeamResult = (o, c, s, n, l, h, k) => t.store.mockRecordTeamResult(o, c, s, n, l, h, k);
    e.fetchTeamEvents = (o, c) => t.store.mockGetTeamEvents(o, c);
    e.fetchTeamCalendar = (o, c) => t.store.mockGetTeamCalendar(o, c);
    e.fetchTeamChat = (o, c) => t.store.mockGetTeamChat(o, c);
    e.postTeamChat = (o, c, s, n, l) => t.store.mockPostTeamChat(o, c, s, n, l);
    e.pinTeamChat = (o, c, s, n) => t.store.mockPinTeamChat(o, c, s, n);
    e.deleteTeamChat = (o, c, s) => t.store.mockDeleteTeamChat(o, c, s);
    e.fetchTeamRankings = (o, c) => t.store.mockGetTeamRankings(o ?? {}, c);
    e.fetchPrivacy = (o) => t.store.mockGetPrivacy(o);
    e.updatePrivacy = (o, c) => t.store.mockUpdatePrivacy(o, c);
    e.fetchClanBattles = (o) => t.store.mockGetClanBattles(o);
    e.fetchClanBattle = (o, c) => t.store.mockGetClanBattle(o, c);
    e.fetchTeamBattles = (o, c, s) => t.store.mockGetTeamBattles(o, c, s);
    e.fetchRecentBattleResults = (o, c) => t.store.mockGetRecentBattleResults(o, c);
    e.sendClanChallenge = (o, c, s, n, l) => t.store.mockSendClanChallenge(o, c, s, n, l);
    e.respondClanChallenge = (o, c, s) => t.store.mockRespondClanChallenge(o, c, s);
    e.fetchLeague = (o) => t.store.mockGetLeague(o);
    e.confirmLeagueSquad = (o, c) => t.store.mockConfirmLeagueSquad(o, c);
    e.fetchTeamInvite = (o) => t.store.mockGetTeamInvite(o);
    e.logTeamInviteShare = (o, c, s) => t.store.mockLogTeamInviteShare(o, c, s);
    e.adminSuspendTeam = (o, c, s, n) => t.store.mockAdminSuspendTeam(o, c, s, n);
    e.fetchTeamAdminStats = (o) => t.store.mockGetTeamAdminStats(o);
    e.fetchAllTeamsAdmin = (o) => t.store.mockGetAllTeamsAdmin(o);
    e.fetchBIDashboard = (o, c) => t.store.mockGetBIDashboard(o, c);
    e.exportBIReport = (o, c, s) => t.store.mockExportBIReport(o, c, s);
    e.syncLoyalty = (o) => t.store.mockSyncLoyalty(o);
    e.fetchLoyaltyAccount = (o) => t.store.mockGetLoyaltyAccount(o);
    e.fetchLoyaltyLedger = (o) => t.store.mockGetLoyaltyLedger(o);
    e.fetchLoyaltyEarnBreakdown = (o) => t.store.mockGetLoyaltyEarnBreakdown(o);
    e.fetchRewards = (o) => t.store.mockGetRewards(o);
    e.redeemReward = (o, c) => t.store.mockRedeemReward(o, c);
    e.fetchMyRedemptions = (o) => t.store.mockGetMyRedemptions(o);
    e.loyaltyTiers = () => t.store.mockGetLoyaltyTiers();
    e.loyaltyActions = () => t.store.mockGetLoyaltyActions();
    e.rewardCategories = () => t.store.mockGetRewardCategories();
    e.fetchLoyaltyRules = (o) => t.store.mockGetLoyaltyRules(o);
    e.setEarnRule = (o, c, s) => t.store.mockSetEarnRule(o, c, s);
    e.upsertReward = (o, c) => t.store.mockUpsertReward(o, c);
    e.setRewardActive = (o, c, s) => t.store.mockSetRewardActive(o, c, s);
    e.fetchAllRewardsAdmin = (o) => t.store.mockGetAllRewardsAdmin(o);
    e.fetchLoyaltyAdminStats = (o) => t.store.mockGetLoyaltyAdminStats(o);
    e.fetchSmartSchedule = (o, c) => t.store.mockGetSmartSchedule(o, c);
    e.fetchDemandPrediction = (o, c) => t.store.mockGetDemandPrediction(o, c);
    e.recordDemandOutcome = (o, c, s, n) => t.store.mockRecordDemandOutcome(o, c, s, n);
    e.fetchDemandWeights = (o) => t.store.mockGetDemandWeights(o);
    e.setDemandWeights = (o, c, s) => t.store.mockSetDemandWeights(o, c, s);
    e.fetchDemandModelStats = (o) => t.store.mockGetDemandModelStats(o);
    e.fetchMatchOptimization = (o, c) => t.store.mockGetMatchOptimization(o, c);
    e.recordOptimizerDecision = (o, c, s, n, l) => t.store.mockRecordOptimizerDecision(o, c, s, n, l);
    e.fetchOptimizerWeights = (o) => t.store.mockGetOptimizerWeights(o);
    e.setOptimizerWeights = (o, c, s) => t.store.mockSetOptimizerWeights(o, c, s);
    e.fetchOptimizerDashboard = (o) => t.store.mockGetOptimizerDashboard(o);
    e.createClub = (o, c) => t.store.mockCreateClub(o, c);
    e.listMyClubs = (o) => t.store.mockListMyClubs(o);
    e.fetchClubDashboard = (o, c) => t.store.mockGetClubDashboard(o, c);
    e.submitClubVerification = (o, c) => t.store.mockSubmitClubVerification(o, c);
    e.reviewClubVerification = (o, c, s) => t.store.mockReviewClubVerification(o, c, s);
    e.inviteClubMember = (o, c, s) => t.store.mockInviteClubMember(o, c, s);
    e.acceptClubInvitation = (o, c) => t.store.mockAcceptClubInvitation(o, c);
    e.startClubSubscription = (o, c, s, n) => t.store.mockStartClubSubscription(o, c, s, n);
    e.uploadMatchVideo = (o, c) => t.store.mockUploadMatchVideo(o, c);
    e.fetchMediaLibrary = (o) => t.store.mockGetMediaLibrary(o);
    e.fetchMediaUpload = (o, c) => t.store.mockGetMediaUpload(o, c);
    e.recordClipView = (o) => t.store.mockRecordClipView(o);
    e.shareClip = (o, c, s) => t.store.mockShareClip(o, c, s);
    e.fetchClipSignedUrl = (o, c) => t.store.mockGetClipSignedUrl(o, c);
    e.reportClipCopyright = (o, c, s) => t.store.mockReportClipCopyright(o, c, s);
    e.fetchMediaDashboard = (o) => t.store.mockGetMediaDashboard(o);
    e.searchUsers = (o, c) => t.store.mockSearchUsers(o, c);
    e.sendFriendRequest = (o, c) => t.store.mockSendFriendRequest(o, c);
    e.respondFriendRequest = (o, c, s) => t.store.mockRespondFriendRequest(o, c, s);
    e.listFriends = (o) => t.store.mockListFriends(o);
    e.fetchGroupConfig = (o, c) => t.store.mockGetGroupConfig(o, c);
    e.createGroupBooking = (o, c, s) => t.store.mockCreateGroupBooking(o, c, s);
    e.fetchGroupBooking = (o, c) => t.store.mockGetGroupBooking(o, c);
    e.listMyGroups = (o) => t.store.mockListMyGroups(o);
    e.payGroup = (o, c, s = "wallet") => t.store.mockPayGroup(o, c, s);
    e.cancelGroupMember = (o, c, s) => t.store.mockCancelGroupMember(o, c, s);
    e.fetchGroupAnalytics = (o) => t.store.mockGetGroupAnalytics(o);
    e.fetchGameGroups = (o, c) => t.store.mockGetGameGroups(o, c);
    e.saveFriendGroup = (o, c, s) => t.store.mockSaveFriendGroup(o, c, s);
    e.listSavedGroups = (o) => t.store.mockListSavedGroups(o);
    e.deleteSavedGroup = (o, c) => t.store.mockDeleteSavedGroup(o, c);
    e.setSavedPayment = (o, c) => t.store.mockSetSavedPayment(o, c);
    e.fetchJoinSuggestions = (o, c) => t.store.mockGetJoinSuggestions(o, c);
    e.oneTapJoin = (o, c) => t.store.mockOneTapJoin(o, c);
    e.followPlayer = (o, c) => t.store.mockFollow(o, c);
    e.unfollowPlayer = (o, c) => t.store.mockUnfollow(o, c);
    e.checkUsername = (o, c) => t.store.mockCheckUsername(o, c);
    e.respondFollowRequest = (o, c, s) => t.store.mockRespondFollowRequest(o, c, s);
    e.fetchFollowRequests = (o) => t.store.mockGetFollowRequests(o);
    e.fetchFollowList = (o, c, s) => t.store.mockGetFollowList(o, c, s);
    e.fetchSuggestedFollows = (o) => t.store.mockGetSuggestedFollows(o);
    e.fetchPlayerProfile = (o, c) => t.store.mockGetPlayerProfile(o, c);
    e.createPost = (o, c) => t.store.mockCreatePost(o, c);
    e.fetchFeed = (o) => t.store.mockGetFeed(o);
    e.fetchUserPosts = (o, c) => t.store.mockGetUserPosts(o, c);
    e.toggleLike = (o, c) => t.store.mockToggleLike(o, c);
    e.toggleSavePost = (o, c) => t.store.mockToggleSave(o, c);
    e.sharePost = (o, c) => t.store.mockSharePost(o, c);
    e.addComment = (o, c, s) => t.store.mockAddComment(o, c, s);
    e.fetchComments = (o, c) => t.store.mockGetComments(o, c);
    e.toggleCommentLike = (o, c) => t.store.mockToggleCommentLike(o, c);
    e.reportPost = (o, c, s) => t.store.mockReportPost(o, c, s);
    e.fetchHighlightCollections = (o) => t.store.mockGetHighlightCollections(o);
    e.startConversation = (o, c) => t.store.mockStartConversation(o, c);
    e.fetchConversations = (o) => t.store.mockGetConversations(o);
    e.fetchUnreadDMCount = (o) => t.store.mockGetUnreadDMCount(o);
    e.fetchThread = (o, c) => t.store.mockGetThread(o, c);
    e.sendDirectMessage = (o, c, s) => t.store.mockSendDirectMessage(o, c, s);
    e.acceptMessageRequest = (o, c) => t.store.mockAcceptMessageRequest(o, c);
    e.declineMessageRequest = (o, c) => t.store.mockDeclineMessageRequest(o, c);
    e.deleteDirectMessage = (o, c) => t.store.mockDeleteDirectMessage(o, c);
    e.searchPlayers = (o, c) => t.store.mockSearchPlayers(o, c);
    e.blockUser = (o, c) => t.store.mockBlockUser(o, c);
    e.unblockUser = (o, c) => t.store.mockUnblockUser(o, c);
    e.muteUser = (o, c) => t.store.mockMuteUser(o, c);
    e.unmuteUser = (o, c) => t.store.mockUnmuteUser(o, c);
    e.fetchBlockedList = (o) => t.store.mockGetBlockedList(o);
    e.fetchPrivacySettings = (o) => t.store.mockGetPrivacySettings(o);
    e.setPrivacySettings = (o, c) => t.store.mockSetPrivacySettings(o, c);
    e.touchPresence = (o) => t.store.mockTouchPresence(o);
    e.createStory = (o, c) => t.store.mockCreateStory(o, c);
    e.fetchStoryTray = (o) => t.store.mockGetStoryTray(o);
    e.fetchAuthorStories = (o, c) => t.store.mockGetAuthorStories(o, c);
    e.fetchAwardBallot = (o, c) => t.store.mockGetAwardBallot(o, c);
    e.castAwardVote = (o, c, s, n) => t.store.mockCastAwardVote(o, c, s, n);
    e.openAwardVoting = (o, c) => t.store.mockOpenAwardVoting(o, c);
    e.publishAwards = (o, c) => t.store.mockPublishAwards(o, c);
    e.createCustomAward = (o, c) => t.store.mockCreateCustomAward(o, c);
    e.fetchMatchAwards = (o) => t.store.mockGetMatchAwards(o);
    e.fetchPlayerAwards = (o) => t.store.mockGetPlayerAwards(o);
    e.fetchAwardLeaderboard = (o) => t.store.mockGetAwardLeaderboard(o);
    e.fetchAwardSeasons = () => t.store.mockGetAwardSeasons();
    e.revokeAward = (o, c) => t.store.mockRevokeAward(o, c);
    e.fetchAwardFraudSignals = (o) => t.store.mockGetAwardFraudSignals(o);
    e.fetchMatchFeed = (o) => t.store.mockGetMatchFeed(o);
    e.fetchDiscover = (o) => t.store.mockGetDiscover(o);
    e.logFeedSignal = (o, c, s) => t.store.mockLogFeedSignal(o, c, s);
    e.logFunnel = (o, c) => t.store.mockLogFunnel(o, c).catch(() => {});
    e.fetchFunnelStats = (o) => t.store.mockGetFunnelStats(o);
    e.fetchFeedAnalytics = (o) => t.store.mockGetFeedAnalytics(o);
    e.fetchWallet = (o, c) => t.store.mockGetWallet(o, c);
    e.walletAddFunds = (o, c, s) => t.store.mockWalletAddFunds(o, c, s);
    e.walletWithdraw = (o, c) => t.store.mockWalletWithdraw(o, c);
    e.submitWalletKyc = (o, c, s) => t.store.mockSubmitWalletKyc(o, c, s);
    e.walletTransfer = (o, c, s, n) => t.store.mockWalletTransfer(o, c, s, n);
    e.createWalletRequest = (o, c, s, n) => t.store.mockCreateWalletRequest(o, c, s, n);
    e.respondWalletRequest = (o, c, s) => t.store.mockRespondWalletRequest(o, c, s);
    e.adminGrantCredit = (o, c, s, n, l) => t.store.mockAdminGrantCredit(o, c, s, n, l);
    e.claimVenuePayout = (o) => t.store.mockClaimVenuePayout(o);
    e.fetchLineup = (o, c) => t.store.mockGetLineup(o, c);
    e.fetchMyPosition = (o) => t.store.mockGetMyPosition(o);
    e.setLineupFormation = (o, c, s, n) => t.store.mockSetLineupFormation(o, c, s, n);
    e.assignLineupSlot = (o, c, s, n, l) => t.store.mockAssignLineupSlot(o, c, s, n, l);
    e.claimLineupSlot = (o, c, s, n) => t.store.mockClaimLineupSlot(o, c, s, n);
    e.joinAtPosition = (o, c, s, n) => t.store.mockJoinAtPosition(o, c, s, n);
    e.swapLineupSlots = (o, c, s, n, l) => t.store.mockSwapLineupSlots(o, c, s, n, l);
    e.setLineupCaptain = (o, c, s, n) => t.store.mockSetLineupCaptain(o, c, s, n);
    e.setLineupJersey = (o, c, s, n, l) => t.store.mockSetLineupJersey(o, c, s, n, l);
    e.toggleLineupLock = (o, c) => t.store.mockToggleLineupLock(o, c);
    e.grantLineupEdit = (o, c, s, n) => t.store.mockGrantLineupEdit(o, c, s, n);
    e.randomizeLineup = (o, c) => t.store.mockRandomizeLineup(o, c);
    e.autoBalanceLineup = (o, c) => t.store.mockAutoBalanceLineup(o, c);
    e.recordLineupSubstitution = (o, c, s, n, l) => t.store.mockRecordLineupSubstitution(o, c, s, n, l);
    e.shareLineupToChat = (o, c, s) => t.store.mockShareLineupToChat(o, c, s);
    e.saveLineupTemplate = (o, c, s) => t.store.mockSaveLineupTemplate(o, c, s);
    e.listLineupTemplates = (o) => t.store.mockListLineupTemplates(o);
    e.fetchConciergePlan = (o, c) => t.store.mockGetConciergePlan(o, c);
    e.conciergeAutoInvite = (o, c, s) => t.store.mockConciergeAutoInvite(o, c, s);
    e.fetchConciergeReplacements = (o, c, s) => t.store.mockGetConciergeReplacements(o, c, s);
    e.fetchConciergeNotificationPlan = (o, c) => t.store.mockGetConciergeNotificationPlan(o, c);
    e.fetchConciergeRules = (o) => t.store.mockGetConciergeRules(o);
    e.setConciergeRules = (o, c, s) => t.store.mockSetConciergeRules(o, c, s);
    e.reviewFraudSignal = (o, c, s) => t.store.mockReviewFraudSignal(o, c, s);
    e.setFeedWeights = (o, c, s) => t.store.mockSetFeedWeights(o, c, s);
    e.setFeedFrozen = (o, c, s) => t.store.mockSetFeedFrozen(o, c, s);
    e.resetFeedWeights = (o, c) => t.store.mockResetFeedWeights(o, c);
    e.fetchConciergeStats = (o) => t.store.mockGetConciergeStats(o);
    e.acceptReplacement = (o, c) => t.store.mockAcceptReplacement(o, c);
    e.declineReplacement = (o, c) => t.store.mockDeclineReplacement(o, c);
    e.fetchMyReplacementOffers = (o) => t.store.mockGetMyReplacementOffers(o);
    e.fetchReplacementOffer = (o, c) => t.store.mockGetReplacementOffer(o, c);
    e.setReplacementMode = (o, c, s) => t.store.mockSetReplacementMode(o, c, s);
    e.setReplacementRadius = (o, c, s) => t.store.mockSetReplacementRadius(o, c, s);
    e.manualReplace = (o, c, s) => t.store.mockManualReplace(o, c, s);
    e.fetchReplacementState = (o, c) => t.store.mockGetReplacementState(o, c);
    e.fetchReplacementMetrics = (o, c) => t.store.mockGetReplacementMetrics(o, c);
    e.fetchReplacementAdminStats = (o) => t.store.mockGetReplacementAdminStats(o);
    e.fetchCoCStatus = (o) => t.store.mockGetCoCStatus(o);
    e.acceptCoC = (o) => t.store.mockAcceptCoC(o);
    e.cocVersion = () => t.store.mockGetCoCVersion();
    e.issueSanction = (o, c, s) => t.store.mockIssueSanction(o, c, s);
    e.reviewSanction = (o, c, s, n) => t.store.mockReviewSanction(o, c, s, n);
    e.restoreUser = (o, c, s) => t.store.mockRestoreUser(o, c, s);
    e.fetchUserSanctions = (o, c) => t.store.mockGetUserSanctions(o, c);
    e.fetchDisciplinaryStanding = (o) => t.store.mockGetDisciplinaryStanding(o);
    e.fetchIncidentQueue = (o) => t.store.mockGetIncidentQueue(o);
    e.fetchConductAdminStats = (o) => t.store.mockGetConductAdminStats(o);
    e.fetchGameScreen = (o, c) => t.store.mockGetGameScreen(o, c);
    e.fetchOrganizerMatchScreen = (o, c) => t.store.mockGetOrganizerMatchScreen(o, c);
  },
  671,
  [672, 631],
);
