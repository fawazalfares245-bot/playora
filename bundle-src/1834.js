__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, C.useAuth)(),
          { colors: x } = (0, k.useTheme)(),
          V = (0, h.useRouter)(),
          I = (0, T.useT)(),
          [D, R] = (0, t.useState)([]),
          [E, F] = (0, t.useState)(null),
          [H, K] = (0, t.useState)(!0),
          [N, M] = (0, t.useState)(!1),
          [G, O] = (0, t.useState)(!1),
          [$, q] = (0, t.useState)(null),
          [J, Q] = (0, t.useState)("percentage"),
          [U, X] = (0, t.useState)("10"),
          Y = (0, t.useCallback)(async () => {
            if (e) {
              try {
                (R(await (0, S.fetchPendingVenues)(e.id)), F(await (0, S.fetchAdminFinancials)(e.id)));
              } catch {
                M(!0);
              }
              K(!1);
            }
          }, [e]);
        (0, h.useFocusEffect)(
          (0, t.useCallback)(() => {
            Y();
          }, [Y]),
        );
        const Z = async (e) => {
          O(!0);
          try {
            (await e(), await Y());
          } catch (e) {
            n.default.alert(I("error"), (0, z.storeErrorText)(e?.message ?? "") || I("error"));
          } finally {
            O(!1);
          }
        };
        if (H)
          return (0, W.jsx)(f.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: x.bg },
            children: (0, W.jsx)(s.default, { color: x.accentText }),
          });
        if (N)
          return (0, W.jsxs)(f.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: x.bg },
            children: [
              (0, W.jsx)(_, { colors: x, title: I("adminVenuesTitle"), onBack: () => V.back() }),
              (0, W.jsx)(p.default, {
                style: { padding: B.spacing.lg },
                children: (0, W.jsx)(w.EmptyState, {
                  icon: "lock-closed-outline",
                  title: I("organizerGateTitle"),
                  body: I("adminPanel"),
                }),
              }),
            ],
          });
        return (0, W.jsxs)(f.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: x.bg },
          children: [
            (0, W.jsx)(_, { colors: x, title: I("adminVenuesTitle"), onBack: () => V.back() }),
            (0, W.jsxs)(l.default, {
              contentContainerStyle: { padding: B.spacing.lg, paddingBottom: B.spacing.xxxl },
              children: [
                E &&
                  (0, W.jsxs)(y.Card, {
                    style: { marginBottom: B.spacing.lg },
                    children: [
                      (0, W.jsx)(u.default, {
                        style: [B.typography.h3, { color: x.text, marginBottom: B.spacing.sm }],
                        children: I("platformFinancials"),
                      }),
                      (0, W.jsxs)(p.default, {
                        style: A.grid,
                        children: [
                          (0, W.jsx)(L, {
                            label: I("totalGross"),
                            value: (0, P.formatPrice)(E.grossKwd),
                            colors: x,
                          }),
                          (0, W.jsx)(L, {
                            label: I("commissionEarned"),
                            value: (0, P.formatPrice)(E.commissionKwd),
                            colors: x,
                          }),
                          (0, W.jsx)(L, {
                            label: I("payoutsLabel"),
                            value: (0, P.formatPrice)(E.payoutsKwd),
                            colors: x,
                          }),
                          (0, W.jsx)(L, {
                            label: I("activeVenuesLabel"),
                            value: (0, P.formatNumber)(E.venues),
                            colors: x,
                          }),
                          (0, W.jsx)(L, {
                            label: I("totalBookingsLabel"),
                            value: (0, P.formatNumber)(E.bookings),
                            colors: x,
                          }),
                          (0, W.jsx)(L, {
                            label: I("refundsLabel"),
                            value: (0, P.formatPrice)(E.refundsKwd),
                            colors: x,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, W.jsx)(u.default, {
                  style: [B.typography.h3, { color: x.text, marginBottom: B.spacing.sm }],
                  children: I("venueApprovals"),
                }),
                0 === D.length
                  ? (0, W.jsx)(w.EmptyState, { icon: "business-outline", title: I("noVenuesFound") })
                  : D.map(({ venue: t, profile: s }) => {
                      const n =
                        "approved" === s.status ? "success" : "pending" === s.status ? "warning" : "danger";
                      return (0, W.jsxs)(
                        y.Card,
                        {
                          style: { marginBottom: B.spacing.md },
                          children: [
                            (0, W.jsxs)(p.default, {
                              style: { flexDirection: "row", alignItems: "center" },
                              children: [
                                (0, W.jsx)(u.default, {
                                  style: [B.typography.smallStrong, { color: x.text, flex: 1 }],
                                  numberOfLines: 1,
                                  children: t.name,
                                }),
                                (0, W.jsx)(b.Badge, { label: I(`vstatus_${s.status}`), tone: n }),
                              ],
                            }),
                            (0, W.jsxs)(u.default, {
                              style: [B.typography.caption, { color: x.textMuted, marginTop: 2 }],
                              children: [
                                t.area,
                                " \xb7 ",
                                I("commissionLabel"),
                                " ",
                                "percentage" === s.commission_type
                                  ? `${(0, P.formatNumber)(s.commission_value)}%`
                                  : (0, P.formatPrice)(s.commission_value),
                              ],
                            }),
                            (0, W.jsxs)(p.default, {
                              style: {
                                flexDirection: "row",
                                gap: B.spacing.sm,
                                marginTop: B.spacing.sm,
                                flexWrap: "wrap",
                              },
                              children: [
                                "approved" !== s.status &&
                                  (0, W.jsx)(j.Button, {
                                    title: I("approveVenue"),
                                    size: "sm",
                                    loading: G,
                                    onPress: () => Z(() => (0, S.reviewVenue)(e.id, t.id, "approve")),
                                  }),
                                "pending" === s.status &&
                                  (0, W.jsx)(j.Button, {
                                    title: I("rejectVenueLabel"),
                                    size: "sm",
                                    variant: "secondary",
                                    loading: G,
                                    onPress: () => Z(() => (0, S.reviewVenue)(e.id, t.id, "reject")),
                                  }),
                                "approved" === s.status &&
                                  (0, W.jsx)(j.Button, {
                                    title: I("suspendVenue"),
                                    size: "sm",
                                    variant: "danger",
                                    loading: G,
                                    onPress: () => Z(() => (0, S.reviewVenue)(e.id, t.id, "suspend")),
                                  }),
                                (0, W.jsx)(j.Button, {
                                  title: I("commissionLabel"),
                                  size: "sm",
                                  variant: "secondary",
                                  onPress: () => {
                                    (q($ === t.id ? null : t.id),
                                      Q(s.commission_type),
                                      X(String(s.commission_value)));
                                  },
                                }),
                              ],
                            }),
                            $ === t.id &&
                              (0, W.jsxs)(p.default, {
                                style: {
                                  marginTop: B.spacing.sm,
                                  borderTopWidth: c.default.hairlineWidth,
                                  borderTopColor: x.border,
                                  paddingTop: B.spacing.sm,
                                },
                                children: [
                                  (0, W.jsx)(p.default, {
                                    style: {
                                      flexDirection: "row",
                                      gap: B.spacing.sm,
                                      marginBottom: B.spacing.sm,
                                    },
                                    children: ["percentage", "fixed"].map((e) =>
                                      (0, W.jsx)(
                                        o.default,
                                        {
                                          onPress: () => Q(e),
                                          accessibilityRole: "button",
                                          accessibilityState: { selected: J === e },
                                          style: [
                                            A.chip,
                                            {
                                              backgroundColor: J === e ? x.accent : x.surface,
                                              borderColor: J === e ? x.accent : x.border,
                                            },
                                          ],
                                          children: (0, W.jsx)(u.default, {
                                            style: [
                                              B.typography.smallStrong,
                                              { color: J === e ? "#fff" : x.text },
                                            ],
                                            children: I(
                                              "percentage" === e ? "commissionPercentage" : "commissionFixed",
                                            ),
                                          }),
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                  (0, W.jsxs)(p.default, {
                                    style: { flexDirection: "row", gap: B.spacing.sm },
                                    children: [
                                      (0, W.jsx)(v.Input, {
                                        value: U,
                                        onChangeText: (e) => X(e.replace(/[^0-9.]/g, "")),
                                        keyboardType: "numeric",
                                        style: { flex: 1 },
                                      }),
                                      (0, W.jsx)(j.Button, {
                                        title: I("setCommission"),
                                        size: "sm",
                                        loading: G,
                                        onPress: () =>
                                          Z(async () => {
                                            (await (0, S.setVenueCommission)(e.id, t.id, J, Number(U) || 0),
                                              q(null));
                                          }),
                                      }),
                                    ],
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
      s = e(r(d[2])),
      n = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      p = e(r(d[8])),
      f = r(d[9]),
      x = r(d[10]),
      h = r(d[11]),
      y = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      v = r(d[15]),
      w = r(d[16]),
      C = r(d[17]),
      k = r(d[18]),
      B = r(d[19]),
      S = r(d[20]),
      P = r(d[21]),
      T = r(d[22]),
      V = r(d[23]),
      z = r(d[24]),
      W = r(d[25]);
    const _ = ({ colors: e, title: t, onBack: s }) => {
        const n = (0, T.useT)();
        return (0, W.jsxs)(p.default, {
          style: A.header,
          children: [
            (0, W.jsx)(o.default, {
              onPress: s,
              accessibilityRole: "button",
              accessibilityLabel: n("back"),
              style: [A.iconBtn, { backgroundColor: e.surface, borderColor: e.border }],
              children: (0, W.jsx)(x.Ionicons, { name: (0, V.chevronBack)(), size: 22, color: e.text }),
            }),
            (0, W.jsx)(u.default, {
              style: [B.typography.h2, { color: e.text, flex: 1, marginHorizontal: B.spacing.md }],
              children: t,
            }),
          ],
        });
      },
      L = ({ label: e, value: t, colors: s }) =>
        (0, W.jsxs)(p.default, {
          style: [A.tile, { backgroundColor: s.surfaceAlt, borderColor: s.border }],
          children: [
            (0, W.jsx)(u.default, { style: [B.typography.h3, { color: s.text }], children: t }),
            (0, W.jsx)(u.default, { style: [B.typography.caption, { color: s.textMuted }], children: e }),
          ],
        }),
      A = c.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: B.spacing.lg,
          paddingVertical: B.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: c.default.hairlineWidth,
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: B.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: B.radius.md,
          borderWidth: c.default.hairlineWidth,
          padding: B.spacing.md,
          minHeight: 66,
          justifyContent: "center",
        },
        chip: {
          minHeight: 34,
          paddingHorizontal: B.spacing.md,
          borderRadius: 999,
          borderWidth: c.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
      });
  },
  1834,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 625, 1627, 630, 615, 616, 671,
    1311, 675, 1171, 674, 13,
  ],
);
