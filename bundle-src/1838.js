__d(
  function (g, r, i, a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, h.useLocalSearchParams)(),
          { user: c } = (0, w.useAuth)(),
          { colors: D } = (0, C.useTheme)(),
          R = (0, h.useRouter)(),
          q = (0, v.useT)(),
          [E, F] = (0, t.useState)(null),
          [L, H] = (0, t.useState)([]),
          [V, $] = (0, t.useState)([]),
          [A, O] = (0, t.useState)(!0),
          [N, G] = (0, t.useState)(!1),
          [, K] = (0, t.useState)(0),
          [J, Q] = (0, t.useState)(null),
          U = (0, t.useCallback)(async () => {
            if (!e || !c) return;
            let t;
            try {
              (Q(null), (t = await (0, _.fetchBooking)(e, c.id)));
            } catch (e) {
              return (Q((0, S.storeErrorText)(e?.message ?? "") || q("error")), void O(!1));
            }
            (F(t),
              t &&
                (H(await (0, _.fetchBookingPayments)(c.id, e).catch(() => [])),
                $(await (0, _.fetchBookingCheckins)(c.id, e).catch(() => []))),
              O(!1));
          }, [e, c]);
        (0, h.useFocusEffect)(
          (0, t.useCallback)(() => {
            U();
          }, [U]),
        );
        const X = !!c && !!E && E.organizer_id === c.id,
          Y = async (e) => {
            G(!0);
            try {
              (await e(), await U());
            } catch (e) {
              o.default.alert(q("error"), (0, S.storeErrorText)(e?.message ?? "") || q("error"));
            } finally {
              G(!1);
            }
          };
        (0, t.useEffect)(() => {
          if ("reserved" !== E?.status || !E.reserved_until) return;
          const e = setInterval(() => {
            (K((e) => e + 1), new Date(E.reserved_until).getTime() <= Date.now() && U());
          }, 3e4);
          return () => clearInterval(e);
        }, [E?.status, E?.reserved_until, U]);
        const Z = (e, t) => {
          c && E && Y(() => (0, _.scanCheckin)(c.id, E.qr_token, e, t));
        };
        if (!A && !E)
          return (0, I.jsxs)(m.SafeAreaView, {
            style: {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: D.bg,
              padding: k.spacing.xl,
            },
            children: [
              (0, I.jsx)(P.EmptyState, {
                icon: "cloud-offline-outline",
                title: q("error"),
                body: J ?? q("notFound"),
              }),
              (0, I.jsxs)(p.default, {
                style: { flexDirection: "row", gap: k.spacing.sm, marginTop: k.spacing.md },
                children: [
                  (0, I.jsx)(b.Button, { title: q("retry"), onPress: () => U() }),
                  (0, I.jsx)(b.Button, { title: q("back"), variant: "secondary", onPress: () => R.back() }),
                ],
              }),
            ],
          });
        if (A || !E)
          return (0, I.jsx)(m.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: D.bg },
            children: (0, I.jsx)(s.default, { color: D.accentText }),
          });
        const ee =
            "confirmed" === E.status
              ? "success"
              : "reserved" === E.status
                ? "warning"
                : "released" === E.status
                  ? "accent"
                  : "danger",
          te =
            "reserved" === E.status && E.reserved_until
              ? Math.max(0, Math.ceil((new Date(E.reserved_until).getTime() - Date.now()) / 6e4))
              : null,
          re = L.filter((e) => "paid" === e.status).reduce((e, t) => e + t.amount_kwd, 0),
          se = L.filter((e) => "pending" === e.status),
          ae = "confirmed" === E.status || "released" === E.status;
        return (0, I.jsxs)(m.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: D.bg },
          children: [
            (0, I.jsxs)(p.default, {
              style: W.header,
              children: [
                (0, I.jsx)(l.default, {
                  onPress: () => R.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: q("back"),
                  style: [W.iconBtn, { backgroundColor: D.surface, borderColor: D.border }],
                  children: (0, I.jsx)(y.Ionicons, { name: (0, T.chevronBack)(), size: 22, color: D.text }),
                }),
                (0, I.jsx)(u.default, {
                  style: [k.typography.h2, { color: D.text, flex: 1, marginHorizontal: k.spacing.md }],
                  children: q("bookingDetails"),
                }),
              ],
            }),
            (0, I.jsxs)(n.default, {
              contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
              children: [
                (0, I.jsxs)(x.Card, {
                  style: { marginBottom: k.spacing.md },
                  children: [
                    (0, I.jsxs)(p.default, {
                      style: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
                      children: [
                        (0, I.jsx)(u.default, {
                          style: [k.typography.h3, { color: D.text, flex: 1 }],
                          numberOfLines: 1,
                          children: E.venue_name,
                        }),
                        (0, I.jsx)(j.Badge, { label: q(`bstatus_${E.status}`), tone: ee }),
                      ],
                    }),
                    (0, I.jsxs)(u.default, {
                      style: [k.typography.small, { color: D.textMuted, marginTop: 2 }],
                      children: [E.court_name, " \xb7 ", (0, B.formatGameTime)(E.starts_at)],
                    }),
                    (0, I.jsxs)(p.default, {
                      style: [W.row, { borderTopColor: D.border, marginTop: k.spacing.sm }],
                      children: [
                        (0, I.jsx)(u.default, {
                          style: [k.typography.small, { color: D.textMuted }],
                          children: q("courtFee"),
                        }),
                        (0, I.jsx)(u.default, {
                          style: [k.typography.smallStrong, { color: D.text }],
                          children: (0, B.formatPrice)(E.court_price_kwd),
                        }),
                      ],
                    }),
                    "reserved" === E.status &&
                      (0, I.jsxs)(p.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: k.spacing.sm,
                          marginTop: k.spacing.sm,
                        },
                        children: [
                          null != te &&
                            (0, I.jsxs)(p.default, {
                              style: [W.holdChip, { backgroundColor: D.warning }],
                              children: [
                                (0, I.jsx)(y.Ionicons, { name: "time", size: 12, color: "#1F2937" }),
                                (0, I.jsx)(u.default, {
                                  style: W.holdChipText,
                                  maxFontSizeMultiplier: 1.3,
                                  children: q("holdEndsIn", { m: (0, B.formatNumber)(te) }),
                                }),
                              ],
                            }),
                          (0, I.jsx)(u.default, {
                            style: [k.typography.caption, { color: D.warning, flex: 1 }],
                            children: q("awaitingVenue"),
                          }),
                        ],
                      }),
                    (0, I.jsx)(f.KwdHint, { style: { marginTop: k.spacing.sm } }),
                  ],
                }),
                "expired" === E.status &&
                  (0, I.jsxs)(x.Card, {
                    padding: "md",
                    style: { marginBottom: k.spacing.md, borderColor: D.danger, borderWidth: 1 },
                    children: [
                      (0, I.jsx)(u.default, {
                        style: [k.typography.bodyStrong, { color: D.text }],
                        children: q("holdExpiredTitle"),
                      }),
                      (0, I.jsx)(u.default, {
                        style: [k.typography.small, { color: D.textMuted, marginTop: 2 }],
                        children: q("holdExpiredBody"),
                      }),
                      (0, I.jsx)(b.Button, {
                        title: q("rebookCta"),
                        fullWidth: !0,
                        style: { marginTop: k.spacing.md },
                        leftIcon: (0, I.jsx)(y.Ionicons, { name: "refresh", size: 16, color: D.accentInk }),
                        onPress: () => R.push(`/booking/venue/${E.venue_id}`),
                      }),
                    ],
                  }),
                X &&
                  "confirmed" === E.status &&
                  !E.game_id &&
                  (0, I.jsx)(b.Button, {
                    title: q("createMatch"),
                    fullWidth: !0,
                    style: { marginBottom: k.spacing.md },
                    leftIcon: (0, I.jsx)(y.Ionicons, {
                      name: "add-circle-outline",
                      size: 18,
                      color: D.accentInk,
                    }),
                    onPress: () => R.push(`/organizer/create?court_booking_id=${E.id}`),
                  }),
                X &&
                  E.game_id &&
                  (0, I.jsx)(b.Button, {
                    title: q("manage"),
                    variant: "secondary",
                    fullWidth: !0,
                    style: { marginBottom: k.spacing.md },
                    onPress: () => R.push(`/organizer/match/${E.game_id}`),
                  }),
                ae &&
                  (0, I.jsxs)(x.Card, {
                    style: { marginBottom: k.spacing.md, alignItems: "center" },
                    children: [
                      (0, I.jsx)(u.default, {
                        style: [k.typography.smallStrong, { color: D.text, alignSelf: "flex-start" }],
                        children: q("qrCheckin"),
                      }),
                      (0, I.jsx)(p.default, {
                        style: [W.qr, { borderColor: D.border }],
                        children: (0, I.jsx)(y.Ionicons, { name: "qr-code", size: 96, color: D.text }),
                      }),
                      (0, I.jsx)(u.default, {
                        style: [k.typography.caption, { color: D.textMuted, marginTop: k.spacing.xs }],
                        children: E.qr_token,
                      }),
                      (0, I.jsx)(u.default, {
                        style: [k.typography.caption, { color: D.textMuted, textAlign: "center" }],
                        children: q("qrCheckinHint"),
                      }),
                    ],
                  }),
                X &&
                  ae &&
                  (0, I.jsxs)(x.Card, {
                    style: { marginBottom: k.spacing.md },
                    children: [
                      (0, I.jsx)(u.default, {
                        style: [k.typography.h3, { color: D.text, marginBottom: k.spacing.xs }],
                        children: q("paymentPlan"),
                      }),
                      (0, I.jsx)(u.default, {
                        style: [k.typography.caption, { color: D.textMuted, marginBottom: k.spacing.sm }],
                        children: q("onlyPaidConfirmed"),
                      }),
                      0 === L.length
                        ? (0, I.jsx)(p.default, {
                            style: { flexDirection: "row", gap: k.spacing.sm, flexWrap: "wrap" },
                            children: M.map((e) =>
                              (0, I.jsx)(
                                b.Button,
                                {
                                  title: q("split_equal" === e ? "splitEqual" : "organizerPays"),
                                  size: "sm",
                                  variant: "split_equal" === e ? "primary" : "secondary",
                                  loading: N,
                                  onPress: () => Y(() => (0, _.createPaymentPlan)(c.id, E.id, e)),
                                },
                                e,
                              ),
                            ),
                          })
                        : (0, I.jsxs)(I.Fragment, {
                            children: [
                              L.map((e) =>
                                (0, I.jsxs)(
                                  p.default,
                                  {
                                    style: [W.row, { borderTopColor: D.border }],
                                    children: [
                                      (0, I.jsx)(u.default, {
                                        style: [k.typography.small, { color: D.text, flex: 1 }],
                                        numberOfLines: 1,
                                        children: e.payer_name,
                                      }),
                                      (0, I.jsx)(u.default, {
                                        style: [
                                          k.typography.small,
                                          { color: D.textMuted, marginEnd: k.spacing.sm },
                                        ],
                                        children:
                                          e.amount_kwd > 0
                                            ? (0, B.formatPrice)(e.amount_kwd)
                                            : q("freeLabel"),
                                      }),
                                      (0, I.jsx)(j.Badge, {
                                        label: q(`pstatus_${e.status}`),
                                        tone:
                                          "paid" === e.status
                                            ? "success"
                                            : "pending" === e.status
                                              ? "warning"
                                              : "neutral",
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                              (0, I.jsxs)(p.default, {
                                style: [W.row, { borderTopColor: D.border, marginTop: k.spacing.xs }],
                                children: [
                                  (0, I.jsx)(u.default, {
                                    style: [k.typography.smallStrong, { color: D.text, flex: 1 }],
                                    children: q("paidLabel"),
                                  }),
                                  (0, I.jsxs)(u.default, {
                                    style: [k.typography.smallStrong, { color: D.success }],
                                    children: [
                                      (0, B.formatPrice)(re),
                                      " / ",
                                      (0, B.formatPrice)(E.court_price_kwd),
                                    ],
                                  }),
                                ],
                              }),
                              se.length > 0 &&
                                (0, I.jsx)(b.Button, {
                                  title: q("sendReminders"),
                                  size: "sm",
                                  variant: "secondary",
                                  loading: N,
                                  style: { marginTop: k.spacing.sm },
                                  onPress: () =>
                                    Y(async () => {
                                      const e = await (0, _.sendPaymentReminders)(c.id, E.id);
                                      o.default.alert(q("remindersSent", { n: (0, B.formatNumber)(e) }));
                                    }),
                                }),
                            ],
                          }),
                    ],
                  }),
                X &&
                  ae &&
                  V.length > 0 &&
                  (0, I.jsxs)(x.Card, {
                    style: { marginBottom: k.spacing.md },
                    children: [
                      (0, I.jsx)(u.default, {
                        style: [k.typography.h3, { color: D.text, marginBottom: k.spacing.xs }],
                        children: q("checkInRoster"),
                      }),
                      (0, I.jsx)(u.default, {
                        style: [k.typography.caption, { color: D.textMuted, marginBottom: k.spacing.sm }],
                        children: q("attendanceFeedsReliability"),
                      }),
                      V.map((e) =>
                        (0, I.jsxs)(
                          p.default,
                          {
                            style: [W.row, { borderTopColor: D.border, flexWrap: "wrap" }],
                            children: [
                              (0, I.jsx)(u.default, {
                                style: [k.typography.small, { color: D.text, flex: 1, minWidth: 90 }],
                                numberOfLines: 1,
                                children: e.player_name,
                              }),
                              (0, I.jsxs)(p.default, {
                                style: { flexDirection: "row", gap: 6 },
                                children: [
                                  (0, I.jsx)(z, {
                                    label: q("present"),
                                    active: "present" === e.state,
                                    tone: D.success,
                                    onPress: () => Z(e.player_id, "present"),
                                    colors: D,
                                  }),
                                  (0, I.jsx)(z, {
                                    label: q("late"),
                                    active: "late" === e.state,
                                    tone: D.warning,
                                    onPress: () => Z(e.player_id, "late"),
                                    colors: D,
                                  }),
                                  (0, I.jsx)(z, {
                                    label: q("noShowLabel"),
                                    active: "no_show" === e.state,
                                    tone: D.danger,
                                    onPress: () => Z(e.player_id, "no_show"),
                                    colors: D,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                X &&
                  ae &&
                  (0, I.jsxs)(x.Card, {
                    style: { marginBottom: k.spacing.md },
                    children: [
                      (0, I.jsxs)(p.default, {
                        style: [W.row, { borderTopWidth: 0 }],
                        children: [
                          (0, I.jsx)(u.default, {
                            style: [k.typography.small, { color: D.textMuted }],
                            children: q("grossExpected"),
                          }),
                          (0, I.jsx)(u.default, {
                            style: [k.typography.smallStrong, { color: D.text }],
                            children: (0, B.formatAmount)(E.settlement.gross),
                          }),
                        ],
                      }),
                      (0, I.jsxs)(p.default, {
                        style: [W.row, { borderTopColor: D.border }],
                        children: [
                          (0, I.jsx)(u.default, {
                            style: [k.typography.small, { color: D.textMuted }],
                            children: q("grossRevenue"),
                          }),
                          (0, I.jsxs)(u.default, {
                            style: [k.typography.smallStrong, { color: re > 0 ? D.text : D.textMuted }],
                            children: [
                              (0, B.formatPrice)(re),
                              se.length ? ` \xb7 ${q("stillOwing", { n: String(se.length) })}` : "",
                            ],
                          }),
                        ],
                      }),
                      (0, I.jsxs)(p.default, {
                        style: [W.row, { borderTopColor: D.border }],
                        children: [
                          (0, I.jsx)(u.default, {
                            style: [k.typography.small, { color: D.textMuted }],
                            children: q("platformCommission"),
                          }),
                          (0, I.jsxs)(u.default, {
                            style: [k.typography.smallStrong, { color: D.text }],
                            children: ["\u2212", (0, B.formatAmount)(E.settlement.commission)],
                          }),
                        ],
                      }),
                      (0, I.jsxs)(p.default, {
                        style: [W.row, { borderTopColor: D.border }],
                        children: [
                          (0, I.jsx)(u.default, {
                            style: [k.typography.small, { color: D.textMuted }],
                            children: q("netPayout"),
                          }),
                          (0, I.jsx)(u.default, {
                            style: [k.typography.smallStrong, { color: D.success }],
                            children: (0, B.formatAmount)(E.settlement.net),
                          }),
                        ],
                      }),
                    ],
                  }),
                X &&
                  ("confirmed" === E.status || "reserved" === E.status) &&
                  (0, I.jsx)(b.Button, {
                    title: q("cancelBooking"),
                    variant: "danger",
                    fullWidth: !0,
                    loading: N,
                    onPress: () =>
                      o.default.alert(q("cancelBooking"), q("cancelBookingConfirm"), [
                        { text: q("keepBooking"), style: "cancel" },
                        {
                          text: q("cancelBooking"),
                          style: "destructive",
                          onPress: () => Y(() => (0, _.cancelCourtBooking)(c.id, E.id)),
                        },
                      ]),
                  }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[1]),
      s = e(r(d[2])),
      o = e(r(d[3])),
      l = e(r(d[4])),
      n = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      p = e(r(d[8])),
      m = r(d[9]),
      y = r(d[10]),
      h = r(d[11]),
      x = r(d[12]),
      f = r(d[13]),
      j = r(d[14]),
      b = r(d[15]),
      w = r(d[16]),
      C = r(d[17]),
      k = r(d[18]),
      _ = r(d[19]),
      B = r(d[20]),
      P = r(d[21]),
      v = r(d[22]),
      T = r(d[23]),
      S = r(d[24]),
      I = r(d[25]);
    const M = ["split_equal", "organizer_pays"];
    const z = ({ label: e, active: t, tone: s, onPress: o, colors: n }) =>
        (0, I.jsx)(l.default, {
          onPress: o,
          accessibilityRole: "button",
          accessibilityState: { selected: t },
          style: {
            paddingHorizontal: k.spacing.sm,
            minHeight: 30,
            borderRadius: k.radius.sm,
            borderWidth: c.default.hairlineWidth,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: t ? s : n.surface,
            borderColor: t ? s : n.border,
          },
          children: (0, I.jsx)(u.default, {
            style: [k.typography.caption, { color: t ? "#fff" : n.textMuted }],
            children: e,
          }),
        }),
      W = c.default.create({
        holdChip: {
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          borderRadius: 999,
          paddingHorizontal: 10,
          paddingVertical: 4,
        },
        holdChipText: { color: "#1F2937", fontSize: 12, fontWeight: "800" },
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: k.spacing.lg,
          paddingVertical: k.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: c.default.hairlineWidth,
        },
        row: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: k.spacing.sm,
          borderTopWidth: c.default.hairlineWidth,
        },
        qr: {
          width: 160,
          height: 160,
          borderRadius: k.radius.md,
          borderWidth: c.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
          marginTop: k.spacing.sm,
        },
      });
  },
  1838,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1839, 1624, 626, 630, 615, 616, 671, 1311,
    1627, 675, 1171, 674, 13,
  ],
);
