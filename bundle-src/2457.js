__d(
  function (g, _r, i, a, m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, C.useAuth)(),
          { colors: c } = (0, w.useTheme)(),
          R = (0, h.useRouter)(),
          S = (0, I.useT)(),
          [z, W] = (0, t.useState)([]),
          [E, D] = (0, t.useState)([]),
          [A, H] = (0, t.useState)(!0),
          [$, G] = (0, t.useState)(null),
          // The cancel sheet asked for a confirmation without saying what it costs. The refund rules
          // are already computed by fetchSeatRefundQuote, which the leave sheet on /game/[id] uses -
          // this sheet just never asked, so a player past the cutoff lost their money with no warning.
          [quote9, setQuote9] = (0, t.useState)(null),
          O = (0, t.useCallback)(async () => {
            if (e)
              try {
                const [t, s] = await Promise.all([
                  (0, T.fetchMyBookings)(e.id),
                  (0, T.fetchMyCourtBookings)(e.id).catch(() => []),
                ]);
                (W(t), D(s));
              } finally {
                H(!1);
              }
          }, [e]);
        ((0, t.useEffect)(() => {
          if (!$ || !e) return void setQuote9(null);
          let live9 = !0;
          return (
            (0, T.fetchSeatRefundQuote)(e.id, $.game.id)
              .then((q9) => {
                live9 && setQuote9(q9);
              })
              .catch(() => {
                live9 && setQuote9(null);
              }),
            () => {
              live9 = !1;
            }
          );
        }, [$, e]),
          (0, h.useFocusEffect)(
            (0, t.useCallback)(() => {
              O();
            }, [O]),
          ));
        return (0, L.jsxs)(p.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: c.bg },
          children: [
            (0, L.jsxs)(y.default, {
              style: M.header,
              children: [
                (0, L.jsx)(l.default, {
                  onPress: () => R.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: S("back"),
                  style: [M.iconBtn, { backgroundColor: c.surface, borderColor: c.border }],
                  children: (0, L.jsx)(f.Ionicons, { name: (0, v.chevronBack)(), size: 22, color: c.text }),
                }),
                (0, L.jsx)(u.default, {
                  style: [B.typography.h2, { color: c.text, flex: 1, textAlign: "center" }],
                  children: S("myBookings"),
                }),
                (0, L.jsx)(y.default, { style: { width: 40 } }),
              ],
            }),
            A
              ? (0, L.jsx)(y.default, {
                  style: { flex: 1, alignItems: "center", justifyContent: "center" },
                  children: (0, L.jsx)(s.default, { color: c.accentText }),
                })
              : (0, L.jsx)(o.default, {
                  data: z,
                  keyExtractor: (e) => e.id,
                  contentContainerStyle: { padding: B.spacing.lg, paddingBottom: B.spacing.xxxl },
                  ListEmptyComponent: E.length
                    ? null
                    : (0, L.jsx)(k.EmptyState, {
                        icon: "bookmark-outline",
                        title: S("noBookingsTitle"),
                        body: S("noBookingsBody"),
                      }),
                  ListFooterComponent: (0, L.jsxs)(l.default, {
                    onPress: () => R.push("/refunds"),
                    accessibilityRole: "button",
                    accessibilityLabel: S("refundsTitle"),
                    style: [M.refundsLink, { backgroundColor: c.surface, borderColor: c.border }],
                    children: [
                      (0, L.jsx)(f.Ionicons, { name: "receipt-outline", size: 18, color: c.accentText }),
                      (0, L.jsxs)(y.default, {
                        style: { flex: 1 },
                        children: [
                          (0, L.jsx)(u.default, {
                            style: [B.typography.bodyStrong, { color: c.text }],
                            children: S("refundsTitle"),
                          }),
                          (0, L.jsx)(u.default, {
                            style: [B.typography.caption, { color: c.textMuted }],
                            children: S("refundsEmptyBody"),
                          }),
                        ],
                      }),
                      (0, L.jsx)(f.Ionicons, {
                        name: "chevron-back" === (0, v.chevronBack)() ? "chevron-forward" : "chevron-back",
                        size: 16,
                        color: c.textMuted,
                      }),
                    ],
                  }),
                  ListHeaderComponent: E.length
                    ? (0, L.jsxs)(y.default, {
                        style: { marginBottom: B.spacing.lg },
                        children: [
                          (0, L.jsx)(u.default, {
                            style: [
                              B.typography.smallStrong,
                              { color: c.textMuted, marginBottom: B.spacing.sm },
                            ],
                            children: S("myCourtsTitle"),
                          }),
                          E.map((e) =>
                            (0, L.jsx)(
                              j.Card,
                              {
                                style: { marginBottom: B.spacing.sm },
                                children: (0, L.jsxs)(l.default, {
                                  onPress: () => R.push(`/booking/${e.id}`),
                                  accessibilityRole: "button",
                                  accessibilityLabel: e.venue_name,
                                  style: M.row,
                                  children: [
                                    (0, L.jsx)(y.default, {
                                      style: [M.sportIcon, { backgroundColor: c.accentMuted }],
                                      children: (0, L.jsx)(f.Ionicons, {
                                        name: "calendar-outline",
                                        size: 18,
                                        color: c.accentText,
                                      }),
                                    }),
                                    (0, L.jsxs)(y.default, {
                                      style: { flex: 1, marginHorizontal: B.spacing.sm },
                                      children: [
                                        (0, L.jsxs)(u.default, {
                                          style: [B.typography.bodyStrong, { color: c.text }],
                                          numberOfLines: 1,
                                          children: [
                                            e.venue_name,
                                            e.court_name ? ` \xb7 ${e.court_name}` : "",
                                          ],
                                        }),
                                        (0, L.jsxs)(u.default, {
                                          style: [B.typography.small, { color: c.textMuted }],
                                          children: [
                                            (0, _.formatGameTime)(e.starts_at),
                                            " \xb7 ",
                                            (0, _.formatPrice)(Number(e.court_price_kwd)),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, L.jsx)(x.Badge, {
                                      label: S(`cbstatus_${e.status}`),
                                      tone: "confirmed" === e.status ? "success" : "neutral",
                                    }),
                                  ],
                                }),
                              },
                              e.id,
                            ),
                          ),
                        ],
                      })
                    : null,
                  renderItem: ({ item: e }) =>
                    (0, L.jsxs)(j.Card, {
                      style: { marginBottom: B.spacing.md },
                      children: [
                        (0, L.jsxs)(l.default, {
                          onPress: () => R.push(`/game/${e.game.id}`),
                          accessibilityRole: "button",
                          accessibilityLabel: e.game.venue.name,
                          style: M.row,
                          children: [
                            (0, L.jsx)(y.default, {
                              style: [M.sportIcon, { backgroundColor: c.accentMuted }],
                              children: (0, L.jsx)(f.Ionicons, {
                                name: _.sportIcon[e.game.sport],
                                size: 18,
                                color: c.accentText,
                              }),
                            }),
                            (0, L.jsxs)(y.default, {
                              style: { flex: 1, marginHorizontal: B.spacing.sm },
                              children: [
                                (0, L.jsx)(u.default, {
                                  style: [B.typography.bodyStrong, { color: c.text }],
                                  numberOfLines: 1,
                                  children: e.game.venue.name,
                                }),
                                (0, L.jsx)(u.default, {
                                  style: [B.typography.small, { color: c.textMuted }],
                                  children: (0, _.formatGameTime)(e.game.starts_at),
                                }),
                              ],
                            }),
                            (0, L.jsx)(x.Badge, {
                              label: "confirmed" === e.status ? S("confirmed") : S("cancelled"),
                              tone: "confirmed" === e.status ? "success" : "danger",
                            }),
                          ],
                        }),
                        (0, L.jsxs)(y.default, {
                          style: [M.metaRow, { borderTopColor: c.border }],
                          children: [
                            "paid" === e.seat_payment?.status
                              ? (0, L.jsxs)(u.default, {
                                  style: [B.typography.small, { color: c.success }],
                                  children: [
                                    "\u2713 ",
                                    S("paidLine", {
                                      amount: (0, _.formatPrice)(e.seat_payment.amount_kwd),
                                      method: e.seat_payment.method ?? "",
                                    }),
                                  ],
                                })
                              : "pending" === e.seat_payment?.status && "cancelled" !== e.status
                                ? (0, L.jsx)(u.default, {
                                    style: [B.typography.small, { color: c.warning }],
                                    children: S("payToKeepSpot", {
                                      amount: (0, _.formatPrice)(e.seat_payment.amount_kwd),
                                    }),
                                  })
                                : (0, L.jsx)(u.default, {
                                    style: [B.typography.small, { color: c.textMuted }],
                                    children: (0, _.formatPrice)(Number(e.game.price_kwd)),
                                  }),
                            "confirmed" === e.status &&
                              (0, L.jsx)(b.Button, {
                                title: S("cancel"),
                                variant: "ghost",
                                size: "sm",
                                onPress: () => G(e),
                              }),
                          ],
                        }),
                      ],
                    }),
                }),
            (0, L.jsx)(r.default, {
              visible: null != $,
              transparent: !0,
              animationType: "fade",
              onRequestClose: () => G(null),
              children: (0, L.jsx)(y.default, {
                style: M.backdrop,
                children: (0, L.jsxs)(y.default, {
                  style: [M.sheet, { backgroundColor: c.surface, borderColor: c.border }],
                  children: [
                    (0, L.jsx)(u.default, {
                      style: [B.typography.h2, { color: c.text }],
                      children: S("cancelBookingTitle"),
                    }),
                    $ &&
                      (0, L.jsxs)(u.default, {
                        style: [B.typography.body, { color: c.textMuted, marginTop: B.spacing.xs }],
                        children: [$.game.venue.name, " \xb7 ", (0, _.formatGameTime)($.game.starts_at)],
                      }),
                    quote9 && quote9.paid_kwd > 0
                      ? (0, L.jsx)(u.default, {
                          style: [
                            B.typography.body,
                            {
                              color: quote9.eligible ? c.success : c.danger,
                              marginTop: B.spacing.sm,
                              fontWeight: "700",
                            },
                          ],
                          children: quote9.eligible
                            ? S("refundFullTitle")
                            : S(
                                2 === quote9.cutoff_hours ? "refundNoneWhyTwo" : "refundNoneWhy",
                                { hours: quote9.cutoff_hours },
                              ),
                        })
                      : null,
                    quote9 && quote9.paid_kwd > 0 && quote9.eligible
                      ? (0, L.jsx)(u.default, {
                          style: [B.typography.caption, { color: c.textMuted, marginTop: 2 }],
                          children: S("refundRow") + ": " + (0, _.formatAmount)(quote9.refund_kwd),
                        })
                      : null,
                    (0, L.jsxs)(y.default, {
                      style: { flexDirection: "row", gap: B.spacing.sm, marginTop: B.spacing.lg },
                      children: [
                        (0, L.jsx)(y.default, {
                          style: { flex: 1 },
                          children: (0, L.jsx)(b.Button, {
                            title: S("keep"),
                            variant: "ghost",
                            fullWidth: !0,
                            onPress: () => G(null),
                          }),
                        }),
                        (0, L.jsx)(y.default, {
                          style: { flex: 1 },
                          children: (0, L.jsx)(b.Button, {
                            title: S("cancelBookingAction"),
                            variant: "danger",
                            fullWidth: !0,
                            onPress: async () => {
                              if ($ && e)
                                try {
                                  (await (0, T.cancelBooking)($.id, e.id), G(null), O());
                                } catch (e) {
                                  (G(null),
                                    n.default.alert(
                                      S("error"),
                                      (0, P.storeErrorText)(e?.message ?? "") || S("error"),
                                    ));
                                }
                            },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }));
    var t = _r(d[1]),
      s = e(_r(d[2])),
      n = e(_r(d[3])),
      o = e(_r(d[4])),
      r = e(_r(d[5])),
      l = e(_r(d[6])),
      c = e(_r(d[7])),
      u = e(_r(d[8])),
      y = e(_r(d[9])),
      p = _r(d[10]),
      f = _r(d[11]),
      h = _r(d[12]),
      x = _r(d[13]),
      b = _r(d[14]),
      j = _r(d[15]),
      k = _r(d[16]),
      C = _r(d[17]),
      w = _r(d[18]),
      B = _r(d[19]),
      T = _r(d[20]),
      _ = _r(d[21]),
      I = _r(d[22]),
      v = _r(d[23]),
      P = _r(d[24]),
      L = _r(d[25]);
    const M = c.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: B.spacing.lg,
        paddingVertical: B.spacing.sm,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      refundsLink: {
        flexDirection: "row",
        alignItems: "center",
        gap: B.spacing.sm,
        borderWidth: 1,
        borderRadius: B.radius.lg,
        padding: B.spacing.md,
        marginTop: B.spacing.md,
      },
      row: { flexDirection: "row", alignItems: "center" },
      sportIcon: { width: 36, height: 36, borderRadius: 12, alignItems: "center", justifyContent: "center" },
      metaRow: {
        marginTop: B.spacing.md,
        paddingTop: B.spacing.md,
        borderTopWidth: c.default.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        alignItems: "center",
        justifyContent: "center",
        padding: B.spacing.lg,
      },
      sheet: {
        width: "100%",
        maxWidth: 420,
        borderRadius: B.radius.lg,
        borderWidth: 1,
        padding: B.spacing.lg,
      },
    });
  },
  2457,
  [
    33, 15, 461, 445, 271, 467, 369, 158, 146, 273, 381, 1086, 20, 1624, 626, 1623, 1627, 630, 615, 616, 671,
    1311, 675, 1171, 674, 13,
  ],
);
