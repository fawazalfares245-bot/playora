__d(
  function (g, _r, _i, _a, _m, _e, _d) {
    var e = _r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, profile: s } = (0, f.useAuth)(),
          { colors: m } = (0, x.useTheme)(),
          j = (0, d.useRouter)(),
          w = (0, k.useT)(),
          [V, A] = (0, t.useState)(null),
          [E, G] = (0, t.useState)("executive"),
          [L, U] = (0, t.useState)(90),
          [_, Y] = (0, t.useState)(null),
          [q, J] = (0, t.useState)(!0),
          [Q, X] = (0, t.useState)(null),
          gate = (0, G9.useRoleGate)(["admin", "analyst"]),
          Z = () => ({
            from: L ? new Date(Date.now() - 864e5 * L).toISOString() : void 0,
            sport: _ ?? void 0,
          }),
          ee = (0, t.useCallback)(async () => {
            if (e) {
              // ADM2 (F-ADM2-17): the error flag is cleared on every attempt so a transient failure
              // does not lock the screen until it is unmounted.
              (J(!0), X(null));
              try {
                A(await (0, h.fetchBIDashboard)(e.id, Z()));
              } catch (e) {
                X(e);
              }
              J(!1);
            }
          }, [e, L, _]);
        (0, d.useFocusEffect)(
          (0, t.useCallback)(() => {
            ee();
          }, [ee]),
        );
        if (q && !V)
          return (0, N.jsx)(c.SafeAreaView, {
            style: [F.center, { backgroundColor: m.bg }],
            children: (0, N.jsx)(l.default, { color: m.accentText }),
          });
        if (gate.ready && !gate.allowed)
          return (0, N.jsx)(G9.GateScreen, {
            kind: "denied",
            roles: ["admin", "analyst"],
            onBack: () => j.back(),
          });
        if (Q || !V) {
          const e = Q ? (0, G9.classifyError)(Q) : null;
          return (0, N.jsx)(G9.GateScreen, {
            kind: e?.isAuth ? "denied" : "error",
            roles: ["admin", "analyst"],
            body: e && !e.isAuth ? e.message : void 0,
            onRetry: () => {
              (X(null), ee());
            },
            onBack: () => j.back(),
          });
        }
        const te = "analyst" === s?.role;
        return (0, N.jsxs)(c.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: m.bg },
          children: [
            (0, N.jsx)(I, {
              colors: m,
              t: w,
              onBack: () => j.back(),
              // ADM2 (F-ADM2-14/16): only tabs with a real report can be exported, the anchor is attached
              // before clicking, the object URL is revoked afterwards, and success is only claimed when a
              // download actually started.
              hideExport: !EXPORTABLE.includes(E),
              onExport: async () => {
                if (!e) return;
                if (!EXPORTABLE.includes(E)) return r.default.alert(w("biExport"), w("exportNotAvailable"));
                try {
                  const { filename: t, csv: l } = await (0, h.exportBIReport)(e.id, E, Z());
                  if ("undefined" == typeof document)
                    return void r.default.alert(w("error"), w("exportNotAvailable"));
                  const o = new Blob([l], { type: "text/csv" }),
                    n = URL.createObjectURL(o),
                    s = document.createElement("a");
                  ((s.href = n),
                    (s.download = t),
                    (s.style.display = "none"),
                    document.body.appendChild(s),
                    s.click(),
                    setTimeout(() => {
                      (document.body.removeChild(s), URL.revokeObjectURL(n));
                    }, 1e3),
                    r.default.alert(w("biExport"), w("exportStarted", { file: t })));
                } catch (e) {
                  r.default.alert(w("error"), (0, G9.classifyError)(e).message || w("error"));
                }
              },
            }),
            (0, N.jsxs)(n.default, {
              style: { paddingHorizontal: y.spacing.lg },
              children: [
                (0, N.jsxs)(n.default, {
                  style: {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: y.spacing.sm,
                    marginBottom: y.spacing.sm,
                  },
                  children: [
                    S.map((e) =>
                      (0, N.jsx)(
                        W,
                        { label: w(e.labelKey), active: L === e.days, onPress: () => U(e.days), colors: m },
                        e.key,
                      ),
                    ),
                    (0, N.jsx)(n.default, { style: { flex: 1 } }),
                    te && (0, N.jsx)(p.Badge, { label: w("biReadOnly"), tone: "neutral" }),
                  ],
                }),
                (0, N.jsxs)(a.default, {
                  horizontal: !0,
                  showsHorizontalScrollIndicator: !1,
                  contentContainerStyle: { gap: y.spacing.sm, paddingBottom: y.spacing.xs },
                  children: [
                    (0, N.jsx)(W, {
                      label: w("anySport"),
                      active: null === _,
                      onPress: () => Y(null),
                      colors: m,
                    }),
                    B.map((e) =>
                      (0, N.jsx)(W, { label: w(e), active: _ === e, onPress: () => Y(e), colors: m }, e),
                    ),
                  ],
                }),
              ],
            }),
            (0, N.jsx)(a.default, {
              horizontal: !0,
              showsHorizontalScrollIndicator: !1,
              style: { flexGrow: 0 },
              contentContainerStyle: {
                paddingHorizontal: y.spacing.lg,
                gap: y.spacing.sm,
                paddingVertical: y.spacing.sm,
              },
              children: C.map((e) => {
                const t = E === e.key;
                return (0, N.jsxs)(
                  o.default,
                  {
                    onPress: () => G(e.key),
                    accessibilityRole: "tab",
                    accessibilityState: { selected: t },
                    style: [
                      F.tab,
                      { backgroundColor: t ? m.accent : m.surface, borderColor: t ? m.accent : m.border },
                    ],
                    children: [
                      (0, N.jsx)(u.Ionicons, { name: e.icon, size: 14, color: t ? "#fff" : m.textMuted }),
                      (0, N.jsx)(i.default, {
                        style: [y.typography.smallStrong, { color: t ? "#fff" : m.text, marginStart: 4 }],
                        children: w(e.labelKey),
                      }),
                    ],
                  },
                  e.key,
                );
              }),
            }),
            (0, N.jsxs)(a.default, {
              contentContainerStyle: { padding: y.spacing.lg, paddingBottom: y.spacing.xxxl },
              children: [
                // ADM2 (F-ADM2-18): a filter change re-fetches. Say so inline and dim the figures
                // below, so the previous period's numbers are never mistaken for the new one's.
                (0, N.jsxs)(n.default, {
                  style: {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: y.spacing.sm,
                    marginBottom: y.spacing.md,
                  },
                  accessibilityLiveRegion: "polite",
                  children: [
                    (0, N.jsxs)(i.default, {
                      style: [y.typography.caption, { color: m.textMuted, flex: 1 }],
                      children: [
                        w("biGenerated", { time: (0, v.formatRelative)(V.generatedAt) }),
                        V.cached ? ` \xb7 ${w("biCached")}` : "",
                      ],
                    }),
                    q && (0, N.jsx)(l.default, { size: "small", color: m.accentText }),
                    q &&
                      (0, N.jsx)(i.default, {
                        style: [y.typography.caption, { color: m.accentText, fontWeight: "700" }],
                        children: w("refreshing"),
                      }),
                  ],
                }),
                (0, N.jsxs)(n.default, {
                  style: { opacity: q ? 0.45 : 1 },
                  children: [
                    "executive" === E && (0, N.jsx)(R, { d: V, colors: m, t: w }),
                    "financial" === E && (0, N.jsx)(z, { d: V, colors: m, t: w }),
                    "users" === E && (0, N.jsx)(K, { d: V, colors: m, t: w }),
                    "matches" === E && (0, N.jsx)(M, { d: V, colors: m, t: w }),
                    "venues" === E && (0, N.jsx)(T, { d: V, colors: m, t: w }),
                    "sports" === E && (0, N.jsx)(D, { d: V, colors: m, t: w }),
                    "geographic" === E && (0, N.jsx)($, { d: V, colors: m, t: w }),
                    "organizers" === E && (0, N.jsx)(O, { d: V, colors: m, t: w }),
                    "health" === E && (0, N.jsx)(H, { d: V, colors: m, t: w }),
                  ],
                }),
              ],
            }),
          ],
        });
      }));
    var t = _r(_d[1]),
      l = e(_r(_d[2])),
      r = e(_r(_d[3])),
      o = (e(_r(_d[4])), e(_r(_d[5]))),
      a = e(_r(_d[6])),
      s = e(_r(_d[7])),
      i = e(_r(_d[8])),
      n = e(_r(_d[9])),
      c = _r(_d[10]),
      u = _r(_d[11]),
      d = _r(_d[12]),
      m = _r(_d[13]),
      p = _r(_d[14]),
      b = _r(_d[15]),
      f = _r(_d[16]),
      x = _r(_d[17]),
      y = _r(_d[18]),
      h = _r(_d[19]),
      j = _r(_d[20]),
      v = _r(_d[21]),
      k = _r(_d[22]),
      w = _r(_d[23]),
      P = _r(_d[24]),
      N = _r(_d[25]),
      G9 = _r(_d[26]);
    const EXPORTABLE = ["executive", "financial", "users", "matches", "venues", "organizers", "geographic"];
    const C = [
        { key: "executive", labelKey: "secExecutive", icon: "speedometer-outline" },
        { key: "financial", labelKey: "secFinancial", icon: "cash-outline" },
        { key: "users", labelKey: "secUsers", icon: "people-outline" },
        { key: "matches", labelKey: "secMatches", icon: "football-outline" },
        { key: "venues", labelKey: "secVenues", icon: "business-outline" },
        { key: "sports", labelKey: "secSports", icon: "tennisball-outline" },
        { key: "geographic", labelKey: "secGeographic", icon: "map-outline" },
        { key: "organizers", labelKey: "secOrganizers", icon: "megaphone-outline" },
        { key: "health", labelKey: "secHealth", icon: "pulse-outline" },
      ],
      S = [
        { key: "7", labelKey: "rng7", days: 7 },
        { key: "30", labelKey: "rng30", days: 30 },
        { key: "90", labelKey: "rng90", days: 90 },
        { key: "all", labelKey: "rngAll", days: null },
      ],
      B = ["football", "padel", "tennis"];
    const R = ({ d: e, colors: t, t: l }) => {
        const r = e.executive;
        return (0, N.jsxs)(n.default, {
          style: F.grid,
          children: [
            (0, N.jsx)(V, { label: l("kpiTotalUsers"), value: (0, j.formatNumber)(r.totalUsers), colors: t }),
            (0, N.jsx)(V, { label: l("kpiDau"), value: (0, j.formatNumber)(r.dau), colors: t }),
            (0, N.jsx)(V, { label: l("kpiWau"), value: (0, j.formatNumber)(r.wau), colors: t }),
            (0, N.jsx)(V, { label: l("kpiMau"), value: (0, j.formatNumber)(r.mau), colors: t }),
            (0, N.jsx)(V, {
              label: l("kpiVerifiedOrganizers"),
              value: (0, j.formatNumber)(r.verifiedOrganizers),
              colors: t,
            }),
            (0, N.jsx)(V, {
              label: l("kpiVerifiedVenues"),
              value: (0, j.formatNumber)(r.verifiedVenues),
              colors: t,
            }),
            (0, N.jsx)(V, {
              label: l("kpiMatchesCreated"),
              value: (0, j.formatNumber)(r.matchesCreated),
              colors: t,
            }),
            (0, N.jsx)(V, {
              label: l("kpiMatchesCompleted"),
              value: (0, j.formatNumber)(r.matchesCompleted),
              colors: t,
            }),
            (0, N.jsx)(V, {
              label: l("kpiCompletionRate"),
              value: `${(0, j.formatNumber)(r.completionRate)}%`,
              colors: t,
            }),
            (0, N.jsx)(V, {
              label: l("kpiCourtBookings"),
              value: (0, j.formatNumber)(r.courtBookings),
              colors: t,
            }),
            (0, N.jsx)(V, {
              label: l("kpiRevenue"),
              value: (0, j.formatAmount)(r.revenueKwd),
              colors: t,
              accent: !0,
            }),
            (0, N.jsx)(V, {
              label: l("kpiCommission"),
              value: (0, j.formatAmount)(r.commissionKwd),
              colors: t,
              accent: !0,
            }),
            (0, N.jsx)(V, {
              label: l("kpiAttendance"),
              value: `${(0, j.formatNumber)(r.attendanceRate)}%`,
              colors: t,
            }),
          ],
        });
      },
      z = ({ d: e, colors: t, t: l }) => {
        const r = e.financial;
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(A, { title: l("finDailyRevenue"), buckets: r.revenueByDay, colors: t, money: !0 }),
            (0, N.jsxs)(n.default, {
              style: F.grid,
              children: [
                (0, N.jsx)(V, {
                  label: l("finWeek"),
                  value: (0, j.formatAmount)(r.revenueWeekKwd),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("finMonth"),
                  value: (0, j.formatAmount)(r.revenueMonthKwd),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("finYear"),
                  value: (0, j.formatAmount)(r.revenueYearKwd),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("kpiCommission"),
                  value: (0, j.formatAmount)(r.commissionKwd),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("finRefunds"),
                  value: (0, j.formatAmount)(r.refundsKwd),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("finOutstanding"),
                  value: (0, j.formatAmount)(r.outstandingKwd),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("finAvgBooking"),
                  value: (0, j.formatAmount)(r.avgBookingValueKwd),
                  colors: t,
                }),
                (0, N.jsx)(V, { label: l("finArpu"), value: (0, j.formatAmount)(r.arpuKwd), colors: t }),
                (0, N.jsx)(V, { label: l("finLtv"), value: (0, j.formatAmount)(r.ltvKwd), colors: t }),
                (0, N.jsx)(V, {
                  label: l("finCac"),
                  value: (0, j.formatAmount)(r.cacKwd),
                  colors: t,
                  sub: l("biModeled"),
                }),
              ],
            }),
            (0, N.jsx)(E, {
              title: l("finBySport"),
              rows: r.revenueBySport.map((e) => [e.label, (0, j.formatAmount)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(E, {
              title: l("finByVenue"),
              rows: r.revenueByVenue.map((e) => [e.label, (0, j.formatAmount)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(E, {
              title: l("finByOrganizer"),
              rows: r.revenueByOrganizer.map((e) => [e.label, (0, j.formatAmount)(e.value)]),
              colors: t,
            }),
          ],
        });
      },
      K = ({ d: e, colors: t, t: l }) => {
        const r = e.users;
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(A, { title: l("usrRegTrend"), buckets: r.registrationsByDay, colors: t }),
            (0, N.jsxs)(n.default, {
              style: F.grid,
              children: [
                (0, N.jsx)(V, {
                  label: l("usrNewRegs"),
                  value: (0, j.formatNumber)(r.newUsers30d),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("usrGrowth"),
                  value: `${(0, j.formatNumber)(r.userGrowthPct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("usrChurn"),
                  value: `${(0, j.formatNumber)(r.churnPct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("usrReferralRate"),
                  value: `${(0, j.formatNumber)(r.referralRatePct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("usrReturning"),
                  value: (0, j.formatNumber)(r.returningPlayers),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("usrOrgGrowth"),
                  value: `${(0, j.formatNumber)(r.organizerGrowthPct)}%`,
                  colors: t,
                }),
              ],
            }),
            (0, N.jsxs)(m.Card, {
              style: { marginBottom: y.spacing.md },
              children: [
                (0, N.jsx)(i.default, {
                  style: [y.typography.smallStrong, { color: t.text, marginBottom: y.spacing.sm }],
                  children: l("usrRetention"),
                }),
                (0, N.jsx)(n.default, {
                  style: { flexDirection: "row", justifyContent: "space-between" },
                  children: [
                    ["retD1", r.retention.d1],
                    ["retD7", r.retention.d7],
                    ["retD30", r.retention.d30],
                    ["retD90", r.retention.d90],
                  ].map(([e, r]) =>
                    (0, N.jsxs)(
                      n.default,
                      {
                        style: { alignItems: "center" },
                        children: [
                          (0, N.jsxs)(i.default, {
                            style: [y.typography.h3, { color: t.text }],
                            children: [(0, j.formatNumber)(r), "%"],
                          }),
                          (0, N.jsx)(i.default, {
                            style: [y.typography.caption, { color: t.textMuted }],
                            children: l(e),
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, N.jsx)(E, {
              title: l("segBySport"),
              rows: r.bySport.map((e) => [l(e.label), (0, j.formatNumber)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(E, {
              title: l("segByCity"),
              rows: r.byCity.slice(0, 6).map((e) => [e.label, (0, j.formatNumber)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(E, {
              title: l("segBySkill"),
              rows: r.bySkill.map((e) => [l(e.label), (0, j.formatNumber)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(E, {
              title: l("segByActivity"),
              rows: r.byActivity.map((e) => [l(e.key), (0, j.formatNumber)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(i.default, {
              style: [y.typography.caption, { color: t.textMuted }],
              children: l("premiumSoon"),
            }),
          ],
        });
      },
      M = ({ d: e, colors: t, t: l }) => {
        const r = e.matches;
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)(n.default, {
              style: F.grid,
              children: [
                (0, N.jsx)(V, {
                  label: l("mFillRate"),
                  value: `${(0, j.formatNumber)(r.fillRatePct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("mNpnSuccess"),
                  value: `${(0, j.formatNumber)(r.npnSuccessRatePct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("mCancellation"),
                  value: `${(0, j.formatNumber)(r.cancellationRatePct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("mNoShow"),
                  value: `${(0, j.formatNumber)(r.noShowRatePct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("mWaitlistConv"),
                  value: `${(0, j.formatNumber)(r.waitlistConversionPct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("mAvgPlayers"),
                  value: (0, j.formatNumber)(r.avgPlayersPerMatch),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("mTimeToFill"),
                  value: `${(0, j.formatNumber)(r.avgTimeToFillHours)}h`,
                  colors: t,
                  sub: l("biModeled"),
                }),
              ],
            }),
            (0, N.jsx)(E, {
              title: l("mTopOrganizers"),
              rows: r.mostActiveOrganizers.map((e) => [e.label, (0, j.formatNumber)(e.value)]),
              colors: t,
            }),
          ],
        });
      },
      T = ({ d: e, colors: t, t: l }) => {
        const r = e.venues;
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)(n.default, {
              style: F.grid,
              children: [
                (0, N.jsx)(V, {
                  label: l("vUtilization"),
                  value: `${(0, j.formatNumber)(r.courtUtilizationPct)}%`,
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("vOccupancy"),
                  value: `${(0, j.formatNumber)(r.occupancyPct)}%`,
                  colors: t,
                }),
              ],
            }),
            (0, N.jsx)(A, {
              title: l("vPeakHours"),
              buckets: r.peakBookingHours.filter((e) => Number(e.key) >= 6),
              colors: t,
            }),
            (0, N.jsx)(A, { title: l("vBookingTrend"), buckets: r.bookingTrend, colors: t }),
            (0, N.jsx)(E, {
              title: l("vPopular"),
              rows: r.popularVenues.map((e) => [e.label, (0, j.formatNumber)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(E, {
              title: l("finByVenue"),
              rows: r.revenuePerVenue.map((e) => [e.label, (0, j.formatAmount)(e.value)]),
              colors: t,
            }),
          ],
        });
      },
      D = ({ d: e, colors: t, t: l }) => {
        const r = e.sports;
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)(m.Card, {
              style: { marginBottom: y.spacing.md },
              children: [
                (0, N.jsx)(i.default, {
                  style: [y.typography.smallStrong, { color: t.textMuted }],
                  children: l("spFastestGrowing"),
                }),
                (0, N.jsx)(i.default, {
                  style: [y.typography.h2, { color: t.text }],
                  children: l(r.fastestGrowing),
                }),
              ],
            }),
            (0, N.jsx)(E, {
              title: l("spPopularity"),
              rows: r.popularity.map((e) => [l(e.label), (0, j.formatNumber)(e.value)]),
              colors: t,
            }),
            (0, N.jsx)(A, { title: l("spPeakDays"), buckets: r.peakDays, colors: t }),
            (0, N.jsx)(A, {
              title: l("spPeakHours"),
              buckets: r.peakHours.filter((e) => Number(e.key) >= 6),
              colors: t,
            }),
          ],
        });
      },
      $ = ({ d: e, colors: t, t: l }) => {
        const r = [...e.geographic.areas].sort((e, t) => t.supplyGap - e.supplyGap).slice(0, 5);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(A, {
              title: l("geoDensity"),
              buckets: e.geographic.areas
                .slice(0, 8)
                .map((e) => ({ key: e.area, label: e.area, value: e.matches })),
              colors: t,
            }),
            (0, N.jsxs)(m.Card, {
              style: { marginBottom: y.spacing.md },
              children: [
                (0, N.jsx)(i.default, {
                  style: [y.typography.smallStrong, { color: t.text, marginBottom: y.spacing.sm }],
                  children: l("geoUndersupplied"),
                }),
                r.map((e) =>
                  (0, N.jsxs)(
                    n.default,
                    {
                      style: [F.row, { borderTopColor: t.border }],
                      children: [
                        (0, N.jsx)(i.default, {
                          style: [y.typography.small, { color: t.text, flex: 1 }],
                          children: e.area,
                        }),
                        (0, N.jsxs)(i.default, {
                          style: [y.typography.caption, { color: t.textMuted, marginEnd: y.spacing.md }],
                          children: [
                            (0, j.formatNumber)(e.matches),
                            " ",
                            l("geoMatches"),
                            " \xb7 ",
                            (0, j.formatNumber)(e.venues),
                            " ",
                            l("geoVenues"),
                          ],
                        }),
                        (0, N.jsx)(p.Badge, {
                          label: `${(0, j.formatNumber)(e.supplyGap)}\xd7`,
                          tone: e.supplyGap > 5 ? "danger" : "neutral",
                        }),
                      ],
                    },
                    e.area,
                  ),
                ),
              ],
            }),
            (0, N.jsx)(E, {
              title: l("geoUsers"),
              rows: [...e.geographic.areas]
                .sort((e, t) => t.users - e.users)
                .slice(0, 6)
                .map((e) => [e.area, (0, j.formatNumber)(e.users)]),
              colors: t,
            }),
          ],
        });
      },
      O = ({ d: e, colors: t, t: l }) =>
        (0, N.jsxs)(m.Card, {
          children: [
            (0, N.jsx)(i.default, {
              style: [y.typography.smallStrong, { color: t.text, marginBottom: y.spacing.sm }],
              children: l("oTopOrganizers"),
            }),
            e.organizers.top.map((e, r) =>
              (0, N.jsxs)(
                n.default,
                {
                  style: [
                    F.row,
                    { borderTopColor: t.border, borderTopWidth: 0 === r ? 0 : s.default.hairlineWidth },
                  ],
                  children: [
                    (0, N.jsx)(i.default, {
                      style: [y.typography.small, { color: t.text, flex: 1 }],
                      numberOfLines: 1,
                      children: e.name,
                    }),
                    (0, N.jsxs)(i.default, {
                      style: [y.typography.caption, { color: t.textMuted, marginEnd: y.spacing.sm }],
                      children: [
                        (0, j.formatNumber)(e.hosted),
                        " ",
                        l("oHosted"),
                        " \xb7 ",
                        (0, j.formatNumber)(e.completionRate),
                        "%",
                      ],
                    }),
                    (0, N.jsx)(i.default, {
                      style: [y.typography.smallStrong, { color: t.success }],
                      children: (0, j.formatAmount)(e.revenueKwd),
                    }),
                  ],
                },
                e.id,
              ),
            ),
          ],
        }),
      H = ({ d: e, colors: t, t: l }) => {
        const r = e.health;
        // ADM2 (F-ADM2-19): measured counts and placeholder infrastructure figures are never mixed
        // in the same grid. The placeholders sit under their own heading with a badge and a note.
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(i.default, {
              style: [y.typography.smallStrong, { color: t.textMuted, marginBottom: y.spacing.xs }],
              children: l("biHealthMeasured"),
            }),
            (0, N.jsxs)(n.default, {
              style: F.grid,
              children: [
                (0, N.jsx)(V, {
                  label: l("hLogins"),
                  value: (0, j.formatNumber)(r.loginActivity),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("hFailedLogins"),
                  value: (0, j.formatNumber)(r.failedLogins),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("hFailedPayments"),
                  value: (0, j.formatNumber)(r.failedPayments),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("hSecurityEvents"),
                  value: (0, j.formatNumber)(r.securityEvents),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("hFraudAlerts"),
                  value: (0, j.formatNumber)(r.fraudAlerts),
                  colors: t,
                }),
                (0, N.jsx)(V, {
                  label: l("hNotifications"),
                  value: (0, j.formatNumber)(r.notificationsDelivered),
                  colors: t,
                }),
              ],
            }),
            (0, N.jsxs)(n.default, {
              style: {
                flexDirection: "row",
                alignItems: "center",
                gap: y.spacing.sm,
                marginTop: y.spacing.md,
                marginBottom: y.spacing.xs,
              },
              children: [
                (0, N.jsx)(i.default, {
                  style: [y.typography.smallStrong, { color: t.textMuted }],
                  children: l("biHealthSimulated"),
                }),
                (0, N.jsx)(n.default, {
                  style: {
                    borderRadius: y.radius.pill,
                    borderWidth: s.default.hairlineWidth,
                    borderColor: t.warning ?? t.border,
                    paddingHorizontal: y.spacing.sm,
                    paddingVertical: 2,
                  },
                  children: (0, N.jsx)(i.default, {
                    style: [y.typography.caption, { color: t.warning ?? t.textMuted, fontWeight: "800" }],
                    children: l("simulatedBadge"),
                  }),
                }),
              ],
            }),
            (0, N.jsx)(i.default, {
              style: [y.typography.caption, { color: t.textMuted, marginBottom: y.spacing.sm }],
              children: l("biHealthSimulatedNote"),
            }),
            (0, N.jsxs)(n.default, {
              style: F.grid,
              children: [
                (0, N.jsx)(V, {
                  label: l("hUptime"),
                  value: `${r.uptimePct}%`,
                  colors: t,
                  sub: l("simulatedBadge"),
                }),
                (0, N.jsx)(V, {
                  label: l("hApiP95"),
                  value: `${r.apiP95Ms}ms`,
                  colors: t,
                  sub: l("simulatedBadge"),
                }),
                (0, N.jsx)(V, {
                  label: l("hErrorRate"),
                  value: `${r.errorRatePct}%`,
                  colors: t,
                  sub: l("simulatedBadge"),
                }),
              ],
            }),
          ],
        });
      },
      I = ({ colors: e, t: t, onBack: l, onExport: r, hideExport: a }) =>
        (0, N.jsxs)(n.default, {
          style: F.header,
          children: [
            (0, N.jsx)(o.default, {
              onPress: l,
              accessibilityRole: "button",
              accessibilityLabel: t("back"),
              style: [F.iconBtn, { backgroundColor: e.surface, borderColor: e.border }],
              children: (0, N.jsx)(u.Ionicons, { name: (0, w.chevronBack)(), size: 22, color: e.text }),
            }),
            (0, N.jsxs)(n.default, {
              style: { flex: 1, marginHorizontal: y.spacing.md },
              children: [
                (0, N.jsx)(i.default, {
                  style: [y.typography.h2, { color: e.text }],
                  children: t("biTitle"),
                }),
                (0, N.jsx)(i.default, {
                  style: [y.typography.caption, { color: e.textMuted }],
                  children: t("biSubtitle"),
                }),
              ],
            }),
            !a &&
              (0, N.jsx)(o.default, {
                onPress: r,
                accessibilityRole: "button",
                accessibilityLabel: t("biExport"),
                style: [F.iconBtn, { backgroundColor: e.surface, borderColor: e.border }],
                children: (0, N.jsx)(u.Ionicons, { name: "download-outline", size: 20, color: e.text }),
              }),
          ],
        }),
      V = ({ label: e, value: t, colors: l, accent: r, sub: o }) =>
        (0, N.jsxs)(n.default, {
          style: [
            F.kpi,
            { backgroundColor: r ? l.accentMuted : l.surface, borderColor: r ? l.accent : l.border },
          ],
          children: [
            (0, N.jsx)(i.default, {
              style: [y.typography.h3, { color: r ? l.accentText : l.text }],
              numberOfLines: 1,
              children: t,
            }),
            (0, N.jsx)(i.default, {
              style: [y.typography.caption, { color: l.textMuted }],
              numberOfLines: 2,
              children: e,
            }),
            o &&
              (0, N.jsx)(i.default, {
                style: [y.typography.caption, { color: l.textMuted, fontSize: 9, opacity: 0.7 }],
                children: o,
              }),
          ],
        }),
      A = ({ title: e, buckets: t, colors: l, money: r }) => {
        const o = Math.max(1, ...t.map((e) => e.value));
        return (0, N.jsxs)(m.Card, {
          style: { marginBottom: y.spacing.md },
          children: [
            (0, N.jsx)(i.default, {
              style: [y.typography.smallStrong, { color: l.text, marginBottom: y.spacing.sm }],
              children: e,
            }),
            (0, N.jsx)(n.default, {
              style: { flexDirection: "row", alignItems: "flex-end", height: 90, gap: 2 },
              children: t.map((e) =>
                (0, N.jsx)(
                  n.default,
                  {
                    style: { flex: 1, alignItems: "center", justifyContent: "flex-end" },
                    children: (0, N.jsx)(n.default, {
                      style: {
                        width: "70%",
                        height: Math.max(2, (e.value / o) * 78),
                        backgroundColor: e.value > 0 ? l.accent : l.border,
                        borderRadius: 2,
                      },
                    }),
                  },
                  e.key,
                ),
              ),
            }),
            (0, N.jsxs)(n.default, {
              style: { flexDirection: "row", justifyContent: "space-between", marginTop: 4 },
              children: [
                (0, N.jsx)(i.default, {
                  style: [y.typography.caption, { color: l.textMuted, fontSize: 9 }],
                  children: t[0]?.label,
                }),
                (0, N.jsx)(i.default, {
                  style: [y.typography.caption, { color: l.textMuted, fontSize: 9 }],
                  children: t[t.length - 1]?.label,
                }),
              ],
            }),
          ],
        });
      },
      E = ({ title: e, rows: t, colors: l }) =>
        0 === t.length
          ? null
          : (0, N.jsxs)(m.Card, {
              style: { marginBottom: y.spacing.md },
              children: [
                (0, N.jsx)(i.default, {
                  style: [y.typography.smallStrong, { color: l.text, marginBottom: y.spacing.xs }],
                  children: e,
                }),
                t.map(([e, t], r) =>
                  (0, N.jsxs)(
                    n.default,
                    {
                      style: [
                        F.row,
                        { borderTopColor: l.border, borderTopWidth: 0 === r ? 0 : s.default.hairlineWidth },
                      ],
                      children: [
                        (0, N.jsx)(i.default, {
                          style: [y.typography.small, { color: l.text, flex: 1 }],
                          numberOfLines: 1,
                          children: e,
                        }),
                        (0, N.jsx)(i.default, {
                          style: [y.typography.smallStrong, { color: l.text }],
                          children: t,
                        }),
                      ],
                    },
                    `${e}-${r}`,
                  ),
                ),
              ],
            }),
      W = ({ label: e, active: t, onPress: l, colors: r }) =>
        (0, N.jsx)(o.default, {
          onPress: l,
          accessibilityRole: "button",
          accessibilityState: { selected: t },
          style: {
            minHeight: 32,
            paddingHorizontal: y.spacing.md,
            borderRadius: 999,
            borderWidth: s.default.hairlineWidth,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: t ? r.accent : r.surface,
            borderColor: t ? r.accent : r.border,
          },
          children: (0, N.jsx)(i.default, {
            style: [y.typography.caption, { color: t ? "#fff" : r.text }],
            children: e,
          }),
        }),
      F = s.default.create({
        center: { flex: 1, alignItems: "center", justifyContent: "center" },
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: y.spacing.lg,
          paddingVertical: y.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: s.default.hairlineWidth,
        },
        tab: {
          flexDirection: "row",
          alignItems: "center",
          minHeight: 34,
          paddingHorizontal: y.spacing.md,
          borderRadius: 999,
          borderWidth: s.default.hairlineWidth,
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: y.spacing.sm, marginBottom: y.spacing.md },
        kpi: {
          width: "31.5%",
          borderRadius: y.radius.md,
          borderWidth: s.default.hairlineWidth,
          padding: y.spacing.sm,
          minHeight: 64,
          justifyContent: "center",
        },
        row: { flexDirection: "row", alignItems: "center", paddingVertical: y.spacing.sm },
      });
  },
  1830,
  [
    33, 15, 461, 445, 137, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 1627, 630, 615, 616, 671, 1311,
    1626, 675, 1171, 674, 13, 9001,
  ],
);
