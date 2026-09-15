__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.LeaveMatchSheet = void 0));
    var t = r(d[1]),
      l = e(r(d[2])),
      s = e(r(d[3])),
      n = e(r(d[4])),
      o = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      f = r(d[8]),
      p = r(d[9]),
      h = r(d[10]),
      x = r(d[11]),
      y = r(d[12]),
      j = r(d[13]),
      b = r(d[14]),
      T = r(d[15]),
      v = r(d[16]),
      R = r(d[17]),
      w = r(d[18]),
      S = r(d[19]);
    _e.LeaveMatchSheet = ({
      visible: e,
      gameId: o,
      userId: M,
      startsAt: I,
      paidKwd: A,
      onClose: C,
      onLeft: B,
    }) => {
      const { colors: P } = (0, x.useTheme)(),
        F = (0, w.useT)(),
        D = (0, y.useReducedMotion)(),
        L = (0, p.useRouter)(),
        [z, E] = (0, t.useState)(!1),
        [W, V] = (0, t.useState)(null),
        [N, O] = (0, t.useState)(null);
      (0, t.useEffect)(() => {
        e || (V(null), O(null), E(!1));
      }, [e]);
      const [U, G] = (0, t.useState)(null);
      (0, t.useEffect)(() => {
        if (!e) return void G(null);
        let t = !0;
        return (
          (0, T.fetchSeatRefundQuote)(M, o)
            .then((e) => {
              t && G(e);
            })
            .catch(() => {}),
          () => {
            t = !1;
          }
        );
      }, [e, M, o]);
      const q = (U?.paid_kwd ?? A) > 0,
        H = U?.eligible ?? !1,
        K = U?.refund_kwd ?? 0,
        Q = U?.paid_kwd ?? A;
      return (0, S.jsx)(s.default, {
        visible: e,
        transparent: !0,
        animationType: (0, y.sheetAnimation)(D),
        onRequestClose: C,
        children: (0, S.jsx)(n.default, {
          style: k.scrim,
          onPress: W ? void 0 : C,
          accessibilityRole: "button",
          accessibilityLabel: F("closeLabel"),
          children: (0, S.jsx)(n.default, {
            style: [k.sheet, { backgroundColor: P.surface }],
            onPress: () => {},
            accessibilityViewIsModal: !0,
            children: W
              ? (0, S.jsxs)(u.default, {
                  style: { alignItems: "center", paddingVertical: j.spacing.lg },
                  children: [
                    (0, S.jsx)(f.Ionicons, {
                      name: "past_cutoff" === W.reason ? "close-circle" : "checkmark-circle",
                      size: 56,
                      color: "past_cutoff" === W.reason ? P.danger : P.success,
                    }),
                    (0, S.jsx)(c.default, {
                      style: [
                        j.typography.h2,
                        { color: P.text, marginTop: j.spacing.md, textAlign: "center" },
                      ],
                      children: W.paid_kwd > 0 ? F("leftTitle") : F("spotReleasedTitle"),
                    }),
                    (0, S.jsx)(c.default, {
                      style: [
                        j.typography.small,
                        { color: P.textMuted, marginTop: j.spacing.sm, textAlign: "center" },
                      ],
                      children: W.refunded
                        ? F("leftRefundBody", { amount: (0, v.formatAmount)(W.refund_kwd) })
                        : "past_cutoff" === W.reason
                          ? // Two picks the Arabic dual form; see the note in 2380.
                            F(
                              2 === b.SEAT_REFUND_CUTOFF_HOURS
                                ? "leftNoRefundBodyTwo"
                                : "leftNoRefundBody",
                              { hours: b.SEAT_REFUND_CUTOFF_HOURS },
                            )
                          : F("spotReleasedBody"),
                    }),
                    (0, S.jsx)(u.default, { style: { height: j.spacing.lg } }),
                    (0, S.jsx)(h.Button, {
                      title: F("backToGames"),
                      fullWidth: !0,
                      size: "lg",
                      onPress: () => {
                        (C(), L.replace("/(tabs)"));
                      },
                    }),
                  ],
                })
              : (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsx)(c.default, {
                      style: [j.typography.h3, { color: P.text }],
                      children: F("cancelSeatTitle"),
                    }),
                    (0, S.jsx)(u.default, {
                      style: [k.card, { backgroundColor: P.surfaceAlt, borderColor: P.border }],
                      children: q
                        ? (0, S.jsxs)(S.Fragment, {
                            children: [
                              (0, S.jsxs)(u.default, {
                                style: { flexDirection: "row", alignItems: "center", gap: j.spacing.sm },
                                children: [
                                  (0, S.jsx)(f.Ionicons, {
                                    name: H ? "checkmark-circle" : "warning",
                                    size: 18,
                                    color: H ? P.success : P.danger,
                                  }),
                                  (0, S.jsx)(c.default, {
                                    style: [j.typography.smallStrong, { color: P.text, flex: 1 }],
                                    children: F(H ? "refundFullTitle" : "refundNoneTitle"),
                                  }),
                                ],
                              }),
                              (0, S.jsxs)(u.default, {
                                style: { marginTop: j.spacing.sm },
                                children: [
                                  (0, S.jsx)(_, {
                                    label: F("youPaidRow"),
                                    value: (0, v.formatAmount)(Q),
                                    colors: P,
                                  }),
                                  (0, S.jsx)(_, {
                                    label: F("refundRow"),
                                    value: (0, v.formatAmount)(K),
                                    colors: P,
                                    tone: H ? "success" : "muted",
                                  }),
                                  (0, S.jsx)(_, {
                                    label: F("youReceiveRow"),
                                    value: (0, v.formatAmount)(K),
                                    colors: P,
                                    tone: H ? "success" : "muted",
                                    strong: !0,
                                  }),
                                ],
                              }),
                              U &&
                                (0, S.jsx)(c.default, {
                                  style: [
                                    j.typography.caption,
                                    { color: P.textMuted, marginTop: j.spacing.sm },
                                  ],
                                  children: F(H ? "refundDeadlineBefore" : "refundDeadlinePassed", {
                                    when: (0, v.formatGameTime)(U.deadline),
                                  }),
                                }),
                            ],
                          })
                        : (0, S.jsx)(c.default, {
                            style: [j.typography.small, { color: P.textMuted }],
                            children: F("refundFreeSpot"),
                          }),
                    }),
                    N &&
                      (0, S.jsxs)(u.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 6,
                          marginTop: j.spacing.md,
                        },
                        children: [
                          (0, S.jsx)(f.Ionicons, { name: "alert-circle", size: 16, color: P.danger }),
                          (0, S.jsx)(c.default, {
                            style: [j.typography.small, { color: P.danger, flex: 1 }],
                            children: N,
                          }),
                        ],
                      }),
                    (0, S.jsxs)(u.default, {
                      style: { marginTop: j.spacing.lg },
                      children: [
                        z
                          ? (0, S.jsx)(u.default, {
                              style: { alignItems: "center", paddingVertical: j.spacing.sm },
                              children: (0, S.jsx)(l.default, { color: P.accentText }),
                            })
                          : (0, S.jsx)(h.Button, {
                              title: F("leaveConfirmCta"),
                              variant: "danger",
                              fullWidth: !0,
                              size: "lg",
                              onPress: async () => {
                                (E(!0), O(null));
                                try {
                                  const e = await (0, T.leaveMatch)(o, M);
                                  (V(e), B());
                                } catch (e) {
                                  O((0, R.storeErrorText)(String(e?.message ?? "")));
                                } finally {
                                  E(!1);
                                }
                              },
                            }),
                        (0, S.jsx)(u.default, { style: { height: j.spacing.sm } }),
                        (0, S.jsx)(h.Button, {
                          title: F("keepMySpot"),
                          variant: "ghost",
                          fullWidth: !0,
                          onPress: C,
                        }),
                      ],
                    }),
                  ],
                }),
          }),
        }),
      });
    };
    const _ = ({ label: e, value: t, colors: l, tone: s, strong: n }) =>
        (0, S.jsxs)(u.default, {
          style: { flexDirection: "row", alignItems: "center", gap: j.spacing.md, paddingVertical: 4 },
          children: [
            (0, S.jsx)(c.default, {
              style: [j.typography.small, { color: l.textMuted, flex: 1 }],
              children: e,
            }),
            (0, S.jsx)(c.default, {
              style: [
                n ? j.typography.bodyStrong : j.typography.small,
                { color: "success" === s ? l.success : "muted" === s ? l.textMuted : l.text },
              ],
              children: t,
            }),
          ],
        }),
      k = o.default.create({
        scrim: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
        sheet: {
          borderTopLeftRadius: j.radius.xl,
          borderTopRightRadius: j.radius.xl,
          padding: j.spacing.lg,
          paddingBottom: j.spacing.xxxl,
        },
        card: {
          borderRadius: j.radius.lg,
          borderWidth: o.default.hairlineWidth,
          padding: j.spacing.md,
          marginTop: j.spacing.md,
        },
      });
  },
  2381,
  [33, 15, 461, 467, 369, 158, 146, 273, 1086, 20, 626, 615, 1621, 616, 670, 671, 1311, 674, 675, 13],
);
