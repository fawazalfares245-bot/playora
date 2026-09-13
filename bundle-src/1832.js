__d(
  function (g, r, i, _a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t, profile: n } = (0, j.useAuth)(),
          { colors: I } = (0, v.useTheme)(),
          D = (0, x.useRouter)(),
          W = (0, N.useT)(),
          [M, P] = (0, l.useState)(!0),
          [$, F] = (0, l.useState)(null),
          [hid, setHid] = (0, l.useState)(0),
          gate = (0, G9.useRoleGate)(["admin"]),
          [O, E] = (0, l.useState)([]),
          [H, L] = (0, l.useState)("under_review"),
          [U, V] = (0, l.useState)(null),
          [q, J] = (0, l.useState)(null),
          [G, Q] = (0, l.useState)(null),
          [K, X] = (0, l.useState)(null),
          Y = (0, l.useCallback)(async () => {
            if (t) {
              F(null);
              try {
                const [e, a, i, n, r, o] = await Promise.all([
                  (0, S.fetchOrganizerApplications)(t.id),
                  (0, S.fetchNpnAdminStats)(t.id).catch(() => null),
                  (0, S.fetchSkillAdminStats)(t.id).catch(() => null),
                  (0, S.fetchGrowthAdminStats)(t.id).catch(() => null),
                  (0, S.fetchCompatAdminStats)(t.id).catch(() => null),
                  (0, S.fetchMyPartitionStance)(t.id).catch(() => null),
                ]);
                (E(e), V(a), J(i), Q(n), X(r), setHid(o?.hidden?.applications ?? 0));
              } catch (e) {
                F(e);
              } finally {
                P(!1);
              }
            }
          }, [t]);
        (0, x.useFocusEffect)(
          (0, l.useCallback)(() => {
            gate.ready && gate.allowed && Y();
          }, [Y, gate.ready, gate.allowed]),
        );
        const Z = O.filter((t) => "all" === H || t.status === H),
          ee = O.filter((t) => "under_review" === t.status).length;
        if (gate.ready && !gate.allowed) return (0, B.jsx)(G9.GateScreen, { kind: "denied", onBack: () => D.back() });
        if ($) {
          const e = (0, G9.classifyError)($);
          return (0, B.jsx)(G9.GateScreen, {
            kind: e.isAuth ? "denied" : "error",
            body: e.isAuth ? void 0 : e.message,
            onRetry: () => {
              (P(!0), Y());
            },
            onBack: () => D.back(),
          });
        }
        return (0, B.jsxs)(p.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: I.bg },
          children: [
            (0, B.jsx)(R, {
              colors: I,
              t: W,
              onBack: () => D.back(),
              count: ee,
              onPlayers: () => D.push("/admin/players"),
            }),
            M
              ? (0, B.jsx)(u.default, {
                  style: { flex: 1, alignItems: "center", justifyContent: "center" },
                  children: (0, B.jsx)(a.default, { color: I.accentText }),
                })
              : (0, B.jsxs)(s.default, {
                  contentContainerStyle: {
                    padding: w.spacing.lg,
                    paddingTop: w.spacing.sm,
                    paddingBottom: w.spacing.xxxl,
                  },
                  children: [
                    (0, B.jsx)(s.default, {
                      horizontal: !0,
                      showsHorizontalScrollIndicator: !1,
                      contentContainerStyle: { gap: w.spacing.sm, paddingBottom: w.spacing.md },
                      children: A.map((t) => {
                        const l = H === t.value,
                          a = "all" === t.value ? O.length : O.filter((l) => l.status === t.value).length;
                        return (0, B.jsx)(
                          o.default,
                          {
                            onPress: () => L(t.value),
                            accessibilityRole: "button",
                            accessibilityState: { selected: l },
                            style: [
                              _.filter,
                              {
                                backgroundColor: l ? I.accent : I.surface,
                                borderColor: l ? I.accent : I.border,
                              },
                            ],
                            children: (0, B.jsxs)(c.default, {
                              style: [w.typography.smallStrong, { color: l ? "#fff" : I.text }],
                              children: [W(t.key), a > 0 ? ` \xb7 ${(0, k.formatNumber)(a)}` : ""],
                            }),
                          },
                          t.value,
                        );
                      }),
                    }),
                    U &&
                      (U.activations > 0 || U.activeNow > 0) &&
                      (0, B.jsxs)(h.Card, {
                        padding: "md",
                        style: { marginBottom: w.spacing.md },
                        children: [
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", alignItems: "center", marginBottom: w.spacing.sm },
                            children: [
                              (0, B.jsx)(f.Ionicons, { name: "flash", size: 16, color: I.accentText }),
                              (0, B.jsx)(c.default, {
                                style: [
                                  w.typography.smallStrong,
                                  { color: I.text, marginStart: w.spacing.xs },
                                ],
                                children: W("npnAdminTitle"),
                              }),
                            ],
                          }),
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", flexWrap: "wrap" },
                            children: [
                              (0, B.jsx)(T, {
                                label: W("npnActivations"),
                                value: (0, k.formatNumber)(U.activations),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("npnActiveNow"),
                                value: (0, k.formatNumber)(U.activeNow),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("npnFilledCount"),
                                value: (0, k.formatNumber)(U.filled),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("npnAvgFill"),
                                value:
                                  null == U.avgFillMinutes
                                    ? "\u2014"
                                    : `${(0, k.formatNumber)(U.avgFillMinutes)} ${W("minutesShortUnit")}`,
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("npnStatsSent"),
                                value: (0, k.formatNumber)(U.notificationsSent),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("npnConversion"),
                                value: `${(0, k.formatNumber)(Math.round(100 * U.conversionRate))}%`,
                                colors: I,
                              }),
                            ],
                          }),
                        ],
                      }),
                    G &&
                      G.invitationsSent > 0 &&
                      (0, B.jsxs)(h.Card, {
                        padding: "md",
                        style: { marginBottom: w.spacing.md },
                        children: [
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", alignItems: "center", marginBottom: w.spacing.sm },
                            children: [
                              (0, B.jsx)(f.Ionicons, { name: "logo-whatsapp", size: 16, color: "#25D366" }),
                              (0, B.jsx)(c.default, {
                                style: [
                                  w.typography.smallStrong,
                                  { color: I.text, marginStart: w.spacing.xs },
                                ],
                                children: W("growthTitle"),
                              }),
                            ],
                          }),
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", flexWrap: "wrap" },
                            children: [
                              (0, B.jsx)(T, {
                                label: W("growthSent"),
                                value: (0, k.formatNumber)(G.invitationsSent),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("growthOpened"),
                                value: (0, k.formatNumber)(G.invitationsOpened),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("growthAcquired"),
                                value: (0, k.formatNumber)(G.usersAcquired),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("growthJoined"),
                                value: (0, k.formatNumber)(G.matchesJoined),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("growthOpenRate"),
                                value: `${(0, k.formatNumber)(Math.round(100 * G.openRate))}%`,
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("growthConversion"),
                                value: `${(0, k.formatNumber)(Math.round(100 * G.joinConversion))}%`,
                                colors: I,
                              }),
                            ],
                          }),
                        ],
                      }),
                    q &&
                      (0, B.jsxs)(h.Card, {
                        padding: "md",
                        style: { marginBottom: w.spacing.md },
                        children: [
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", alignItems: "center", marginBottom: w.spacing.sm },
                            children: [
                              (0, B.jsx)(f.Ionicons, {
                                name: "speedometer-outline",
                                size: 16,
                                color: I.accentText,
                              }),
                              (0, B.jsx)(c.default, {
                                style: [
                                  w.typography.smallStrong,
                                  { color: I.text, marginStart: w.spacing.xs },
                                ],
                                children: W("skillAdminTitle"),
                              }),
                            ],
                          }),
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", flexWrap: "wrap" },
                            children: [
                              (0, B.jsx)(T, {
                                label: W("skillPlayersLabel"),
                                value: (0, k.formatNumber)(q.perSport.reduce((t, l) => t + l.players, 0)),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("skillAvgConfidence"),
                                value: `${(0, k.formatNumber)(
                                  Math.round(
                                    (q.perSport.reduce((t, l) => t + l.avgConfidence * l.players, 0) /
                                      Math.max(
                                        1,
                                        q.perSport.reduce((t, l) => t + l.players, 0),
                                      )) *
                                      100,
                                  ),
                                )}%`,
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("skillVerifiedCount"),
                                value: (0, k.formatNumber)(q.perSport.reduce((t, l) => t + l.verified, 0)),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("skillEvalsCount"),
                                value: (0, k.formatNumber)(q.evaluations),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("skillMismatches"),
                                value: (0, k.formatNumber)(q.mismatchIncidents),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("skillBlockedJoins"),
                                value: (0, k.formatNumber)(q.blockedJoins),
                                colors: I,
                              }),
                            ],
                          }),
                        ],
                      }),
                    K &&
                      K.computed > 0 &&
                      (0, B.jsxs)(h.Card, {
                        padding: "md",
                        style: { marginBottom: w.spacing.md },
                        children: [
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", alignItems: "center", marginBottom: w.spacing.xs },
                            children: [
                              (0, B.jsx)(f.Ionicons, {
                                name: "people-circle-outline",
                                size: 16,
                                color: I.accentText,
                              }),
                              (0, B.jsx)(c.default, {
                                style: [
                                  w.typography.smallStrong,
                                  { color: I.text, marginStart: w.spacing.xs },
                                ],
                                children: W("compatAdminTitle"),
                              }),
                            ],
                          }),
                          (0, B.jsx)(c.default, {
                            style: [w.typography.caption, { color: I.textMuted, marginBottom: w.spacing.sm }],
                            children: W("compatAdminSubtitle"),
                          }),
                          (0, B.jsxs)(u.default, {
                            style: { flexDirection: "row", flexWrap: "wrap" },
                            children: [
                              (0, B.jsx)(T, {
                                label: W("compatComputed"),
                                value: (0, k.formatNumber)(K.computed),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("compatAvg"),
                                value: (0, k.formatNumber)(K.avgScore),
                                colors: I,
                              }),
                              (0, B.jsx)(T, {
                                label: W("compatFlagged"),
                                value: (0, k.formatNumber)(K.anomaliesFlagged),
                                colors: I,
                              }),
                            ],
                          }),
                        ],
                      }),
                    hid > 0 &&
                      (0, B.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                          borderWidth: 1,
                          borderRadius: 12,
                          padding: 10,
                          marginBottom: w.spacing.md,
                          backgroundColor: I.surfaceAlt,
                          borderColor: I.border,
                        },
                        children: [
                          (0, B.jsx)(f.Ionicons, { name: "eye-off-outline", size: 16, color: I.textMuted }),
                          (0, B.jsxs)(u.default, {
                            style: { flex: 1 },
                            children: [
                              (0, B.jsx)(c.default, {
                                style: [w.typography.smallStrong, { color: I.text }],
                                children: W("hiddenOtherWorld", { n: String(hid) }),
                              }),
                              (0, B.jsx)(c.default, {
                                style: [w.typography.caption, { color: I.textMuted }],
                                children: W("hiddenOtherWorldBody"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    0 === Z.length
                      ? (0, B.jsx)(b.EmptyState, {
                          icon: "checkmark-done-outline",
                          title: W("queueEmpty"),
                          body: W("queueEmptyBody"),
                        })
                      : Z.map((t) =>
                          (0, B.jsxs)(
                            h.Card,
                            {
                              onPress: () => D.push(`/admin/application/${t.id}`),
                              style: { marginBottom: w.spacing.sm },
                              padding: "md",
                              children: [
                                (0, B.jsxs)(u.default, {
                                  style: { flexDirection: "row", alignItems: "center" },
                                  children: [
                                    (0, B.jsx)(u.default, {
                                      style: [
                                        _.avatar,
                                        { backgroundColor: I.surfaceAlt, borderColor: I.border },
                                      ],
                                      children: (0, B.jsx)(c.default, {
                                        style: [w.typography.bodyStrong, { color: I.text }],
                                        children: t.display_name
                                          .split(" ")
                                          .map((t) => t[0])
                                          .slice(0, 2)
                                          .join("")
                                          .toUpperCase(),
                                      }),
                                    }),
                                    (0, B.jsxs)(u.default, {
                                      style: { flex: 1, marginHorizontal: w.spacing.sm },
                                      children: [
                                        (0, B.jsx)(c.default, {
                                          style: [w.typography.bodyStrong, { color: I.text }],
                                          numberOfLines: 1,
                                          children: t.display_name,
                                        }),
                                        (0, B.jsxs)(c.default, {
                                          style: [w.typography.small, { color: I.textMuted }],
                                          numberOfLines: 1,
                                          children: [
                                            t.full_legal_name,
                                            " \xb7 ",
                                            (0, C.formatRelative)(t.submitted_at),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, B.jsx)(y.Badge, {
                                      label: W(`appStatus_${t.status}`),
                                      tone: z[t.status],
                                    }),
                                  ],
                                }),
                                (0, B.jsxs)(u.default, {
                                  style: [_.metaRow, { borderTopColor: I.border }],
                                  children: [
                                    (0, B.jsxs)(u.default, {
                                      style: { flexDirection: "row", gap: 6, flex: 1, flexWrap: "wrap" },
                                      children: [
                                        t.sports.map((t) =>
                                          (0, B.jsx)(
                                            u.default,
                                            {
                                              style: [_.sportDot, { backgroundColor: (0, k.sportColor)(t) }],
                                              children: (0, B.jsx)(f.Ionicons, {
                                                name: k.sportIcon[t],
                                                size: 11,
                                                color: "#fff",
                                              }),
                                            },
                                            t,
                                          ),
                                        ),
                                        "business" === t.organizer_type &&
                                          (0, B.jsx)(f.Ionicons, {
                                            name: "business-outline",
                                            size: 14,
                                            color: I.textMuted,
                                          }),
                                      ],
                                    }),
                                    t.risk_flags.length > 0 &&
                                      (0, B.jsxs)(u.default, {
                                        style: _.riskPill,
                                        children: [
                                          (0, B.jsx)(f.Ionicons, {
                                            name: "warning",
                                            size: 12,
                                            color: I.danger,
                                          }),
                                          (0, B.jsxs)(c.default, {
                                            style: [
                                              w.typography.caption,
                                              { color: I.danger, marginStart: 4, fontWeight: "700" },
                                            ],
                                            children: [
                                              (0, k.formatNumber)(t.risk_flags.length),
                                              " ",
                                              W("riskIndicators"),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            },
                            t.id,
                          ),
                        ),
                  ],
                }),
          ],
        });
      }));
    var l = r(d[1]),
      a = t(r(d[2])),
      o = t(r(d[3])),
      s = t(r(d[4])),
      n = t(r(d[5])),
      c = t(r(d[6])),
      u = t(r(d[7])),
      p = r(d[8]),
      f = r(d[9]),
      x = r(d[10]),
      h = r(d[11]),
      y = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      v = r(d[15]),
      w = r(d[16]),
      S = r(d[17]),
      k = r(d[18]),
      C = r(d[19]),
      N = r(d[20]),
      I = r(d[21]),
      B = r(d[22]),
      G9 = r(d[23]);
    const A = [
        { value: "under_review", key: "filterUnderReview" },
        { value: "info_requested", key: "filterInfoRequested" },
        { value: "approved", key: "filterApproved" },
        { value: "rejected", key: "filterRejected" },
        { value: "suspended", key: "filterSuspended" },
        { value: "all", key: "filterAll" },
      ],
      z = {
        draft: "neutral",
        submitted: "warning",
        under_review: "warning",
        info_requested: "warning",
        approved: "success",
        rejected: "danger",
        suspended: "danger",
      };
    const T = ({ label: t, value: l, colors: a }) =>
        (0, B.jsxs)(u.default, {
          style: { width: "33.3%", paddingVertical: w.spacing.xs },
          children: [
            (0, B.jsx)(c.default, { style: [w.typography.bodyStrong, { color: a.text }], children: l }),
            (0, B.jsx)(c.default, { style: [w.typography.caption, { color: a.textMuted }], children: t }),
          ],
        }),
      R = ({ colors: t, t: l, onBack: a, count: s, onPlayers: n }) =>
        (0, B.jsxs)(u.default, {
          style: _.header,
          children: [
            (0, B.jsx)(o.default, {
              onPress: a,
              accessibilityRole: "button",
              accessibilityLabel: l("back"),
              style: [_.iconBtn, { backgroundColor: t.surface, borderColor: t.border }],
              children: (0, B.jsx)(f.Ionicons, { name: (0, I.chevronBack)(), size: 22, color: t.text }),
            }),
            (0, B.jsxs)(u.default, {
              style: { flex: 1, marginHorizontal: w.spacing.md },
              children: [
                (0, B.jsx)(c.default, {
                  style: [w.typography.caption, { color: t.accentText }],
                  children: l("adminPanel").toUpperCase(),
                }),
                (0, B.jsx)(c.default, {
                  style: [w.typography.h2, { color: t.text }],
                  children: l("approvalQueue"),
                }),
              ],
            }),
            s > 0 &&
              (0, B.jsx)(y.Badge, {
                label: `${(0, k.formatNumber)(s)} ${l("filterUnderReview")}`,
                tone: "warning",
              }),
            n &&
              (0, B.jsx)(o.default, {
                onPress: n,
                accessibilityRole: "button",
                accessibilityLabel: l("adminPlayersTitle"),
                style: [
                  _.iconBtn,
                  { backgroundColor: t.surface, borderColor: t.border, marginStart: w.spacing.sm },
                ],
                children: (0, B.jsx)(f.Ionicons, { name: "people-outline", size: 20, color: t.text }),
              }),
          ],
        }),
      _ = n.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: w.spacing.lg,
          paddingVertical: w.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: n.default.hairlineWidth,
        },
        filter: {
          height: 36,
          paddingHorizontal: w.spacing.lg,
          borderRadius: w.radius.pill,
          borderWidth: n.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        avatar: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: n.default.hairlineWidth,
        },
        metaRow: {
          flexDirection: "row",
          alignItems: "center",
          marginTop: w.spacing.sm,
          paddingTop: w.spacing.sm,
          borderTopWidth: n.default.hairlineWidth,
        },
        sportDot: { width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center" },
        riskPill: { flexDirection: "row", alignItems: "center" },
      });
  },
  1832,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 1627, 630, 615, 616, 671, 1311, 1626,
    675, 1171, 13, 9001,
  ],
);
