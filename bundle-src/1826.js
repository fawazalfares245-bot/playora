__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, S.useAuth)(),
          { colors: o } = (0, C.useTheme)(),
          c = (0, f.useRouter)(),
          y = (0, A.useT)(),
          [z, N] = (0, t.useState)([]),
          [D, V] = (0, t.useState)(null),
          [H, $] = (0, t.useState)(!0),
          [F, L] = (0, t.useState)(!1),
          [O, Q] = (0, t.useState)(!1),
          U = (0, t.useCallback)(async () => {
            if (e) {
              try {
                (N(await (0, B.fetchIncidentQueue)(e.id)), V(await (0, B.fetchConductAdminStats)(e.id)));
              } catch {
                L(!0);
              }
              $(!1);
            }
          }, [e]);
        (0, f.useFocusEffect)(
          (0, t.useCallback)(() => {
            U();
          }, [U]),
        );
        const G = async (e) => {
          Q(!0);
          try {
            (await e(), await U());
          } catch (e) {
            s.default.alert(y("error"), (0, P.storeErrorText)(e?.message ?? "") || y("error"));
          } finally {
            Q(!1);
          }
        };
        if (H)
          return (0, R.jsx)(x.SafeAreaView, {
            style: [E.center, { backgroundColor: o.bg }],
            children: (0, R.jsx)(n.default, { color: o.accentText }),
          });
        if (F)
          return (0, R.jsxs)(x.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: o.bg },
            children: [
              (0, R.jsx)(M, { colors: o, title: y("adminConductTitle"), onBack: () => c.back() }),
              (0, R.jsx)(p.default, {
                style: { padding: w.spacing.lg },
                children: (0, R.jsx)(v.EmptyState, {
                  icon: "lock-closed-outline",
                  title: y("organizerGateTitle"),
                  body: y("adminPanel"),
                }),
              }),
            ],
          });
        return (0, R.jsxs)(x.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: o.bg },
          children: [
            (0, R.jsx)(M, { colors: o, title: y("adminConductTitle"), onBack: () => c.back() }),
            (0, R.jsxs)(l.default, {
              contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
              children: [
                D &&
                  (0, R.jsxs)(h.Card, {
                    style: { marginBottom: w.spacing.lg },
                    children: [
                      (0, R.jsx)(u.default, {
                        style: [w.typography.h3, { color: o.text, marginBottom: w.spacing.sm }],
                        children: y("conductStatsTitle"),
                      }),
                      (0, R.jsxs)(p.default, {
                        style: E.grid,
                        children: [
                          (0, R.jsx)(W, {
                            label: y("statActiveSanctions"),
                            value: (0, _.formatNumber)(D.active),
                            colors: o,
                          }),
                          (0, R.jsx)(W, {
                            label: y("statPendingReview"),
                            value: (0, _.formatNumber)(D.pending),
                            colors: o,
                            accent: !0,
                          }),
                          (0, R.jsx)(W, {
                            label: y("sanction_red_card"),
                            value: (0, _.formatNumber)(D.redCards),
                            colors: o,
                          }),
                          (0, R.jsx)(W, {
                            label: y("statBans"),
                            value: (0, _.formatNumber)(D.bans),
                            colors: o,
                          }),
                          (0, R.jsx)(W, {
                            label: y("statCocAcceptance"),
                            value: `${(0, _.formatNumber)(Math.round(100 * D.cocAcceptanceRate))}%`,
                            colors: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, R.jsx)(u.default, {
                  style: [w.typography.h3, { color: o.text, marginBottom: w.spacing.sm }],
                  children: y("incidentQueue"),
                }),
                0 === z.length
                  ? (0, R.jsx)(v.EmptyState, { icon: "shield-checkmark-outline", title: y("noSanctions") })
                  : z.map((t) => {
                      const n = (0, k.sanctionMeta)(t.type),
                        s =
                          "active" === t.status
                            ? n.tone
                            : "pending_approval" === t.status
                              ? "warning"
                              : "neutral";
                      return (0, R.jsxs)(
                        h.Card,
                        {
                          style: { marginBottom: w.spacing.sm },
                          children: [
                            (0, R.jsxs)(p.default, {
                              style: { flexDirection: "row", alignItems: "center" },
                              children: [
                                (0, R.jsx)(u.default, {
                                  style: { fontSize: 18, marginEnd: 6 },
                                  children: n.emoji,
                                }),
                                (0, R.jsxs)(p.default, {
                                  style: { flex: 1 },
                                  children: [
                                    (0, R.jsxs)(u.default, {
                                      style: [w.typography.smallStrong, { color: o.text }],
                                      numberOfLines: 1,
                                      children: [t.target_name, " \xb7 ", y(n.labelKey)],
                                    }),
                                    (0, R.jsxs)(u.default, {
                                      style: [w.typography.caption, { color: o.textMuted }],
                                      children: [
                                        y(`vio${I(t.category)}`),
                                        " \xb7 ",
                                        y("issuedBy", { name: t.issuer_name }),
                                        " \xb7 ",
                                        (0, T.formatRelative)(t.created_at),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, R.jsx)(j.Badge, { label: y(`sStatus_${t.status}`), tone: s }),
                              ],
                            }),
                            (0, R.jsx)(u.default, {
                              style: [w.typography.small, { color: o.text, marginTop: w.spacing.xs }],
                              children: t.reason,
                            }),
                            !!t.evidence_url &&
                              (0, R.jsx)(u.default, {
                                style: [w.typography.caption, { color: o.accentText, marginTop: 2 }],
                                children: t.evidence_url,
                              }),
                            (0, R.jsxs)(p.default, {
                              style: {
                                flexDirection: "row",
                                gap: w.spacing.sm,
                                marginTop: w.spacing.sm,
                                flexWrap: "wrap",
                              },
                              children: [
                                "pending_approval" === t.status &&
                                  (0, R.jsxs)(R.Fragment, {
                                    children: [
                                      (0, R.jsx)(b.Button, {
                                        title: y("approveBan"),
                                        size: "sm",
                                        loading: O,
                                        onPress: () => G(() => (0, B.reviewSanction)(e.id, t.id, "approve")),
                                      }),
                                      (0, R.jsx)(b.Button, {
                                        title: y("rejectBan"),
                                        size: "sm",
                                        variant: "secondary",
                                        loading: O,
                                        onPress: () => G(() => (0, B.reviewSanction)(e.id, t.id, "reject")),
                                      }),
                                    ],
                                  }),
                                "active" === t.status &&
                                  (0, R.jsx)(b.Button, {
                                    title: y("overturnSanction"),
                                    size: "sm",
                                    variant: "secondary",
                                    loading: O,
                                    onPress: () => G(() => (0, B.reviewSanction)(e.id, t.id, "overturn")),
                                  }),
                                "active" === t.status &&
                                  ("ban" === t.type || "suspension" === t.type) &&
                                  (0, R.jsx)(b.Button, {
                                    title: y("restoreAccount"),
                                    size: "sm",
                                    variant: "secondary",
                                    loading: O,
                                    onPress: () => G(() => (0, B.restoreUser)(e.id, t.user_id)),
                                  }),
                              ],
                            }),
                          ],
                        },
                        t.id,
                      );
                    }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[1]),
      n = e(r(d[2])),
      s = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      p = e(r(d[8])),
      x = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      h = r(d[12]),
      j = r(d[13]),
      b = r(d[14]),
      v = r(d[15]),
      S = r(d[16]),
      C = r(d[17]),
      w = r(d[18]),
      B = r(d[19]),
      k = r(d[20]),
      _ = r(d[21]),
      T = r(d[22]),
      A = r(d[23]),
      z = r(d[24]),
      P = r(d[25]),
      R = r(d[26]);
    const I = (e) =>
        e
          .split("_")
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(""),
      M = ({ colors: e, title: t, onBack: n }) => {
        const s = (0, A.useT)();
        return (0, R.jsxs)(p.default, {
          style: E.header,
          children: [
            (0, R.jsx)(o.default, {
              onPress: n,
              accessibilityRole: "button",
              accessibilityLabel: s("back"),
              style: [E.iconBtn, { backgroundColor: e.surface, borderColor: e.border }],
              children: (0, R.jsx)(y.Ionicons, { name: (0, z.chevronBack)(), size: 22, color: e.text }),
            }),
            (0, R.jsx)(u.default, {
              style: [w.typography.h2, { color: e.text, flex: 1, marginHorizontal: w.spacing.md }],
              children: t,
            }),
          ],
        });
      },
      W = ({ label: e, value: t, colors: n, accent: s }) =>
        (0, R.jsxs)(p.default, {
          style: [
            E.tile,
            { backgroundColor: s ? n.accentMuted : n.surface, borderColor: s ? n.accent : n.border },
          ],
          children: [
            (0, R.jsx)(u.default, {
              style: [w.typography.h3, { color: s ? n.accentText : n.text }],
              children: t,
            }),
            (0, R.jsx)(u.default, { style: [w.typography.caption, { color: n.textMuted }], children: e }),
          ],
        }),
      E = c.default.create({
        center: { flex: 1, alignItems: "center", justifyContent: "center" },
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
          borderWidth: c.default.hairlineWidth,
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: w.radius.md,
          borderWidth: c.default.hairlineWidth,
          padding: w.spacing.md,
          minHeight: 66,
          justifyContent: "center",
        },
      });
  },
  1826,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 1627, 630, 615, 616, 671, 656,
    1311, 1626, 675, 1171, 674, 13,
  ],
);
