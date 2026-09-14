__d(
  function (g, r, i, _a, _m, _e, d) {
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.rankingScore =
        _e.metricValuesOf =
        _e.isOwnerRole =
        _e.googleCalendarUrl =
        _e.fixedSportFor =
        _e.evaluateTeamAchievements =
        _e.computeTeamStats =
        _e.canManageTeam =
        _e.buildIcs =
        _e.TEAM_TYPES =
        _e.TEAM_ACHIEVEMENTS =
        _e.ROLE_RANK =
        _e.RANKING_WEIGHTS =
        _e.ACTIVITY_WINDOW_MS =
        _e.ACTIVITY_WINDOW_DAYS =
          void 0));
    const e = (_e.TEAM_TYPES = [
      { type: "football", labelKey: "teamTypeFootball", emoji: "\u26bd", fixedSport: "football" },
      { type: "padel", labelKey: "teamTypePadel", emoji: "\ud83c\udfbe", fixedSport: "padel" },
      { type: "tennis", labelKey: "teamTypeTennis", emoji: "\ud83c\udfbe", fixedSport: "tennis" },
      { type: "corporate", labelKey: "teamTypeCorporate", emoji: "\ud83c\udfe2" },
      { type: "university", labelKey: "teamTypeUniversity", emoji: "\ud83c\udf93" },
      { type: "friends", labelKey: "teamTypeFriends", emoji: "\ud83d\udc65" },
    ]);
    _e.fixedSportFor = (t) => e.find((e) => e.type === t)?.fixedSport ?? null;
    const t = (_e.ROLE_RANK = { owner: 4, captain: 3, co_captain: 2, manager: 1, player: 0 });
    _e.canManageTeam = (e) => !!e && t[e] >= t.co_captain;
    _e.isOwnerRole = (e) => "owner" === e;
    const n = (_e.ACTIVITY_WINDOW_DAYS = 90),
      a = (_e.ACTIVITY_WINDOW_MS = 24 * n * 60 * 60 * 1e3);
    _e.computeTeamStats = (e, t, n = Date.now()) => {
      const l = e.filter((e) => null != e.result),
        s = l.filter((e) => "win" === e.result).length,
        o = l.filter((e) => "loss" === e.result).length,
        m = l.filter((e) => "draw" === e.result).length,
        c = l.length,
        y = e.filter((e) => null != e.attended_count && null != e.invited_count && e.invited_count > 0),
        h = y.length ? y.reduce((e, t) => e + t.attended_count / t.invited_count, 0) / y.length : 0,
        _ = n - a;
      return {
        played: c,
        playedInWindow: l.filter((e) => new Date(e.starts_at).getTime() >= _).length,
        wins: s,
        losses: o,
        draws: m,
        winRate: c ? s / c : 0,
        attendanceRate: h,
        activeMembers: t,
        hosted: e.filter((e) => "match" === e.kind || "friendly" === e.kind).length,
        tournaments: e.filter((e) => "tournament" === e.kind).length,
      };
    };
    const l = (_e.TEAM_ACHIEVEMENTS = [
      { key: "first_victory", emoji: "\ud83e\udd47", tier: "bronze", metric: "wins", threshold: 1 },
      { key: "ten_wins", emoji: "\ud83d\udd1f", tier: "bronze", metric: "wins", threshold: 10 },
      { key: "fifty_wins", emoji: "\ud83c\udfc6", tier: "silver", metric: "wins", threshold: 50 },
      { key: "hundred_wins", emoji: "\ud83d\udc51", tier: "gold", metric: "wins", threshold: 100 },
      { key: "twentyfive_matches", emoji: "\ud83d\udcc5", tier: "bronze", metric: "played", threshold: 25 },
      { key: "hundred_matches", emoji: "\ud83d\udcaf", tier: "silver", metric: "played", threshold: 100 },
      { key: "five_gauntlets", emoji: "\u26a1", tier: "bronze", metric: "gauntlets_played", threshold: 5 },
      {
        key: "twentyfive_gauntlets",
        emoji: "\ud83c\udf96\ufe0f",
        tier: "silver",
        metric: "gauntlets_played",
        threshold: 25,
      },
      {
        key: "ten_gauntlet_wins",
        emoji: "\u2694\ufe0f",
        tier: "silver",
        metric: "gauntlets_won",
        threshold: 10,
      },
      {
        key: "twentyfive_gauntlet_wins",
        emoji: "\ud83c\udf1f",
        tier: "gold",
        metric: "gauntlets_won",
        threshold: 25,
      },
      { key: "five_members", emoji: "\ud83d\udd90\ufe0f", tier: "bronze", metric: "members", threshold: 5 },
      { key: "community_team", emoji: "\ud83e\udd1d", tier: "silver", metric: "members", threshold: 10 },
      { key: "fifteen_members", emoji: "\ud83d\udc65", tier: "silver", metric: "members", threshold: 15 },
      {
        key: "five_clean_sheets",
        emoji: "\ud83e\udde4",
        tier: "bronze",
        metric: "clean_sheets",
        threshold: 5,
      },
      { key: "three_streak", emoji: "\ud83d\udd25", tier: "bronze", metric: "streak", threshold: 3 },
      { key: "five_streak", emoji: "\ud83d\ude80", tier: "gold", metric: "streak", threshold: 5 },
      {
        key: "perfect_attendance",
        emoji: "\ud83d\udccb",
        tier: "silver",
        test: (e) => e.played >= 3 && e.attendanceRate >= 0.99,
      },
      {
        key: "undefeated_season",
        emoji: "\ud83d\udee1\ufe0f",
        tier: "gold",
        test: (e) => e.played >= 5 && 0 === e.losses,
      },
    ]);
    _e.metricValuesOf = (e, t, n, a) => {
      const l = t
        .filter((e) => "win" === e.result || "loss" === e.result)
        .sort((e, t) => new Date(t.starts_at).getTime() - new Date(e.starts_at).getTime());
      let s = 0;
      for (const e of l) {
        if ("win" !== e.result) break;
        s += 1;
      }
      return {
        wins: e.wins,
        played: e.played,
        members: e.activeMembers,
        gauntlets_played: n,
        gauntlets_won: a,
        clean_sheets: t.filter((e) => null != e.result && 0 === e.their_score).length,
        streak: s,
      };
    };
    const s = (e, t, n, a) =>
      null != e.metric ? a[e.metric] >= (e.threshold ?? 1 / 0) : (e.test?.(t, n) ?? !1);
    _e.evaluateTeamAchievements = (e, t, n) => l.filter((a) => s(a, e, t, n));
    const o = (_e.RANKING_WEIGHTS = { winRate: 0.4, activity: 0.2, reliability: 0.25, sportsmanship: 0.15 });
    _e.rankingScore = ({ stats: e, sportsmanship: t = 0.7 }) => {
      const n = e.playedInWindow ?? e.played,
        a = Math.min(1, n / 20),
        l = o.winRate * e.winRate + o.activity * a + o.reliability * e.attendanceRate + o.sportsmanship * t;
      return Math.round(100 * l);
    };
    const m = (e) =>
      new Date(e)
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "");
    _e.googleCalendarUrl = (e, t, n, a = "") =>
      `https://calendar.google.com/calendar/render?${new URLSearchParams({ action: "TEMPLATE", text: e, dates: `${m(t)}/${m(n)}`, details: a }).toString()}`;
    _e.buildIcs = (e, t, n, a = "") =>
      [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Rush X//Teams//EN",
        "BEGIN:VEVENT",
        `UID:${m(t)}-${Math.random().toString(36).slice(2, 8)}@playora.app`,
        `DTSTART:${m(t)}`,
        `DTEND:${m(n)}`,
        `SUMMARY:${e}`,
        `DESCRIPTION:${a}`,
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\n");
  },
  667,
  [],
);
