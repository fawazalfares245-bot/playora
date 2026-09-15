__d(
  function (g, r, i, a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, h.useLocalSearchParams)(),
          { user: c } = (0, b.useAuth)(),
          { colors: z } = (0, k.useTheme)(),
          v = (0, h.useRouter)(),
          H = (0, P.useT)(),
          [R, A] = (0, t.useState)(null),
          [W, D] = (0, t.useState)("knet"),
          [E, F] = (0, t.useState)(!0),
          [L, O] = (0, t.useState)(!1),
          [$, q] = (0, t.useState)(null),
          K = (0, S.paymentMethods)(),
          N = (0, t.useCallback)(async () => {
            if (e)
              try {
                (q(null), A(await (0, S.fetchPayment)(e, c?.id)));
              } catch (e) {
                q((0, T.storeErrorText)(e?.message ?? "") || H("error"));
              } finally {
                F(!1);
              }
          }, [e, c]);
        (0, h.useFocusEffect)(
          (0, t.useCallback)(() => {
            N();
          }, [N]),
        );
        if (!E && !R)
          return (0, _.jsxs)(y.SafeAreaView, {
            style: {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: z.bg,
              padding: C.spacing.xl,
            },
            children: [
              (0, _.jsx)(B.EmptyState, {
                icon: "cloud-offline-outline",
                title: H("error"),
                body: $ ?? H("notFound"),
              }),
              (0, _.jsxs)(m.default, {
                style: { flexDirection: "row", gap: C.spacing.sm, marginTop: C.spacing.md },
                children: [
                  (0, _.jsx)(j.Button, { title: H("retry"), onPress: () => N() }),
                  (0, _.jsx)(j.Button, { title: H("back"), variant: "secondary", onPress: () => v.back() }),
                ],
              }),
            ],
          });
        if (E || !R)
          return (0, _.jsx)(y.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: z.bg },
            children: (0, _.jsx)(s.default, { color: z.accentText }),
          });
        const G = "paid" === R.status;
        return (0, _.jsxs)(y.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: z.bg },
          children: [
            (0, _.jsxs)(m.default, {
              style: V.header,
              children: [
                (0, _.jsx)(l.default, {
                  onPress: () => v.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: H("back"),
                  style: [V.iconBtn, { backgroundColor: z.surface, borderColor: z.border }],
                  children: (0, _.jsx)(p.Ionicons, { name: (0, M.chevronBack)(), size: 22, color: z.text }),
                }),
                (0, _.jsx)(u.default, {
                  style: [C.typography.h2, { color: z.text, flex: 1, marginHorizontal: C.spacing.md }],
                  children: H("payShare"),
                }),
              ],
            }),
            (0, _.jsxs)(o.default, {
              contentContainerStyle: { padding: C.spacing.lg, paddingBottom: C.spacing.xxxl },
              children: [
                (0, _.jsxs)(x.Card, {
                  style: { marginBottom: C.spacing.md, alignItems: "center" },
                  children: [
                    (0, _.jsx)(u.default, {
                      style: [C.typography.small, { color: z.textMuted }],
                      numberOfLines: 2,
                      children: R.venue_name,
                    }),
                    (0, _.jsx)(u.default, {
                      style: [C.typography.h1, { color: z.text, marginVertical: C.spacing.xs }],
                      children: (0, w.formatAmount)(R.amount_kwd),
                    }),
                    (0, _.jsx)(u.default, {
                      style: [C.typography.small, { color: z.textMuted }],
                      children: H("amountDue"),
                    }),
                    G && (0, _.jsx)(f.Badge, { label: H("pstatus_paid"), tone: "success" }),
                  ],
                }),
                G
                  ? (0, _.jsxs)(x.Card, {
                      style: { alignItems: "center", paddingVertical: C.spacing.xl },
                      children: [
                        (0, _.jsx)(p.Ionicons, { name: "checkmark-circle", size: 48, color: z.success }),
                        (0, _.jsx)(u.default, {
                          style: [C.typography.h3, { color: z.text, marginTop: C.spacing.sm }],
                          children: H("paymentSuccess"),
                        }),
                        (0, _.jsx)(u.default, {
                          style: [
                            C.typography.small,
                            { color: z.textMuted, textAlign: "center", marginTop: C.spacing.xs },
                          ],
                          children: H("paymentVerifiedHint"),
                        }),
                      ],
                    })
                  : "pending" !== R.status
                    ? (0, _.jsx)(x.Card, {
                        style: { alignItems: "center" },
                        children: (0, _.jsx)(f.Badge, { label: H(`pstatus_${R.status}`), tone: "neutral" }),
                      })
                    : (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(u.default, {
                            style: [
                              C.typography.smallStrong,
                              { color: z.textMuted, marginBottom: C.spacing.sm },
                            ],
                            children: H("choosePayment"),
                          }),
                          K.map((e) => {
                            const t = W === e.method;
                            return (0, _.jsxs)(
                              l.default,
                              {
                                onPress: () => D(e.method),
                                accessibilityRole: "button",
                                accessibilityState: { selected: t },
                                style: [
                                  V.method,
                                  {
                                    borderColor: t ? z.accent : z.border,
                                    backgroundColor: t ? z.accentMuted : z.surface,
                                  },
                                ],
                                children: [
                                  (0, _.jsx)(u.default, {
                                    style: { fontSize: 18, width: 26 },
                                    children: e.emoji || "\ud83d\udcb3",
                                  }),
                                  (0, _.jsx)(u.default, {
                                    style: [C.typography.body, { color: z.text, flex: 1 }],
                                    children: H(e.labelKey),
                                  }),
                                  t &&
                                    (0, _.jsx)(p.Ionicons, {
                                      name: "checkmark-circle",
                                      size: 20,
                                      color: z.accentText,
                                    }),
                                ],
                              },
                              e.method,
                            );
                          }),
                          (0, _.jsxs)(u.default, {
                            style: [
                              C.typography.caption,
                              { color: z.textMuted, marginTop: C.spacing.sm, marginBottom: C.spacing.md },
                            ],
                            children: [
                              (0, _.jsx)(p.Ionicons, { name: "lock-closed", size: 11, color: z.textMuted }),
                              " ",
                              H("serverVerifiedHint"),
                            ],
                          }),
                          (0, _.jsx)(j.Button, {
                            title: L
                              ? H("paying")
                              : `${H("payNow")} \xb7 ${(0, w.formatAmount)(R.amount_kwd)}`,
                            fullWidth: !0,
                            loading: L,
                            onPress: async () => {
                              if (c && R) {
                                O(!0);
                                try {
                                  (await (0, S.payRequest)(c.id, R.id, W),
                                    (0, I.isOnlineMethod)(W)
                                      ? n.default.alert(H("paymentSuccess"), H("paymentVerifiedHint"))
                                      : n.default.alert(
                                          H("payCash"),
                                          H("payCashPending", { amount: (0, w.formatAmount)(R.amount_kwd) }),
                                        ),
                                    await N().catch(() => {}));
                                } catch (e) {
                                  n.default.alert(
                                    H("error"),
                                    (0, T.storeErrorText)(e?.message ?? "") || H("error"),
                                  );
                                } finally {
                                  O(!1);
                                }
                              }
                            },
                          }),
                        ],
                      }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[1]),
      s = e(r(d[2])),
      n = e(r(d[3])),
      l = e(r(d[4])),
      o = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      m = e(r(d[8])),
      y = r(d[9]),
      p = r(d[10]),
      h = r(d[11]),
      x = r(d[12]),
      f = r(d[13]),
      j = r(d[14]),
      b = r(d[15]),
      k = r(d[16]),
      C = r(d[17]),
      S = r(d[18]),
      w = r(d[19]),
      B = r(d[20]),
      P = r(d[21]),
      I = r(d[22]),
      M = r(d[23]),
      T = r(d[24]),
      _ = r(d[25]);
    const V = c.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: C.spacing.lg,
        paddingVertical: C.spacing.md,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: c.default.hairlineWidth,
      },
      method: {
        flexDirection: "row",
        alignItems: "center",
        gap: C.spacing.sm,
        minHeight: 52,
        paddingHorizontal: C.spacing.md,
        borderRadius: C.radius.md,
        borderWidth: c.default.hairlineWidth,
        marginBottom: C.spacing.sm,
      },
    });
  },
  2474,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 630, 615, 616, 671, 1311, 1627,
    675, 668, 1171, 674, 13,
  ],
);
