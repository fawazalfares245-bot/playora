__d(
  function (g, _r, _i, a, _m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, b.useAuth)(),
          { colors: q } = (0, j.useTheme)(),
          z = (0, p.useRouter)(),
          M = (0, S.useT)(),
          [F, K] = (0, t.useState)(null),
          [D, V] = (0, t.useState)([]),
          [E, H] = (0, t.useState)(null),
          [L, O] = (0, t.useState)(!1),
          [N, $] = (0, t.useState)(null),
          [G, Y] = (0, t.useState)(20),
          [J, Q] = (0, t.useState)(null),
          [U, X] = (0, t.useState)(""),
          [Z, ee] = (0, t.useState)(""),
          [te, le] = (0, t.useState)("knet"),
          [ae, se] = (0, t.useState)(null),
          [oe, re] = (0, t.useState)(""),
          [ne, ie] = (0, t.useState)(""),
          de = (0, t.useCallback)(async () => {
            if (e)
              try {
                const [t, l] = await Promise.all([(0, C.fetchWallet)(e.id), (0, C.listFriends)(e.id)]);
                (K(t), V(l.friends));
              } catch (e) {
                $((0, T.storeErrorText)(e?.message ?? "") || M("error"));
              }
          }, [e, M]);
        (0, p.useFocusEffect)(
          (0, t.useCallback)(() => {
            de();
          }, [de]),
        );
        const ce = (e) => {
            (H((t) => (t === e ? null : e)), $(null), Q(null), X(""), ee(""), se(null));
          },
          ue = Math.round(1e3 * (parseFloat(U) || 0)),
          ge = async (t, l) => {
            if (e) {
              (O(!0), $(null));
              try {
                (await t(), Q(M(l)), H(null), await de());
              } catch (e) {
                $((0, T.storeErrorText)(e?.message ?? "") || M("error"));
              } finally {
                O(!1);
              }
            }
          },
          pe = (t, l) =>
            ge(() => (0, C.respondWalletRequest)(e.id, t, l), l ? "walletSent" : "walletRequestDeclined"),
          ye = "send" === E || "request" === E;
        return (0, W.jsxs)(c.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: q.bg },
          children: [
            (0, W.jsxs)(i.default, {
              style: A.header,
              children: [
                (0, W.jsx)(s.default, {
                  onPress: () => z.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: M("back"),
                  style: [A.iconBtn, { backgroundColor: q.surface, borderColor: q.border }],
                  children: (0, W.jsx)(u.Ionicons, { name: (0, B.chevronBack)(), size: 22, color: q.text }),
                }),
                (0, W.jsx)(n.default, {
                  style: [w.typography.h2, { color: q.text, marginHorizontal: w.spacing.md }],
                  children: M("walletTitle"),
                }),
              ],
            }),
            (0, W.jsx)(o.default, {
              contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
              children:
                null === F && N
                  ? (0, W.jsxs)(i.default, {
                      style: { paddingVertical: w.spacing.xl },
                      children: [
                        (0, W.jsx)(x.EmptyState, {
                          icon: "cloud-offline-outline",
                          title: M("error"),
                          body: N,
                        }),
                        (0, W.jsx)(y.Button, {
                          title: M("retry"),
                          onPress: () => de(),
                          style: { marginTop: w.spacing.md },
                        }),
                      ],
                    })
                  : null === F
                    ? (0, W.jsx)(l.default, { color: q.accentText })
                    : (0, W.jsxs)(W.Fragment, {
                        children: [
                          (0, W.jsxs)(i.default, {
                            style: [A.hero, { backgroundColor: q.accent }],
                            children: [
                              (0, W.jsx)(n.default, {
                                style: [w.typography.small, { color: "rgba(0,0,0,0.6)" }],
                                children: M("walletAvailable"),
                              }),
                              (0, W.jsx)(n.default, {
                                style: [A.heroAmount, { color: q.accentInk }],
                                children: I(F.available_fils),
                              }),
                              (0, W.jsxs)(i.default, {
                                style: A.heroRow,
                                children: [
                                  (0, W.jsx)(R, { label: M("walletPending"), value: I(F.pending_fils) }),
                                  (0, W.jsx)(R, { label: M("walletCredits"), value: I(F.credits_fils) }),
                                  (0, W.jsx)(R, {
                                    label: M("walletPoints"),
                                    value: (0, k.formatNumber)(F.points),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, W.jsxs)(i.default, {
                            style: A.actions,
                            children: [
                              (0, W.jsx)(v, {
                                icon: "add-circle-outline",
                                label: M("walletAddFunds"),
                                active: "topup" === E,
                                onPress: () => ce("topup"),
                                colors: q,
                              }),
                              (0, W.jsx)(v, {
                                icon: "arrow-up-circle-outline",
                                label: M("walletSend"),
                                active: "send" === E,
                                onPress: () => ce("send"),
                                colors: q,
                              }),
                              (0, W.jsx)(v, {
                                icon: "arrow-down-circle-outline",
                                label: M("walletRequestBtn"),
                                active: "request" === E,
                                onPress: () => ce("request"),
                                colors: q,
                              }),
                              F.withdraw_eligible &&
                                (0, W.jsx)(v, {
                                  icon: "cash-outline",
                                  label: M("walletWithdraw"),
                                  active: "withdraw" === E,
                                  onPress: () => ce("withdraw"),
                                  colors: q,
                                }),
                            ],
                          }),
                          J &&
                            (0, W.jsxs)(i.default, {
                              style: [A.banner, { backgroundColor: q.surfaceAlt, borderColor: q.success }],
                              children: [
                                (0, W.jsx)(u.Ionicons, {
                                  name: "checkmark-circle",
                                  size: 16,
                                  color: q.success,
                                }),
                                (0, W.jsx)(n.default, {
                                  style: [w.typography.small, { color: q.text, marginStart: w.spacing.xs }],
                                  children: J,
                                }),
                              ],
                            }),
                          N &&
                            (0, W.jsxs)(i.default, {
                              style: [A.banner, { backgroundColor: q.surfaceAlt, borderColor: q.danger }],
                              children: [
                                (0, W.jsx)(u.Ionicons, { name: "alert-circle", size: 16, color: q.danger }),
                                (0, W.jsx)(h.FormError, {
                                  text: N,
                                  style: { marginStart: w.spacing.xs, flex: 1 },
                                }),
                              ],
                            }),
                          "topup" === E &&
                            (0, W.jsxs)(m.Card, {
                              padding: "md",
                              style: { marginBottom: w.spacing.lg },
                              children: [
                                (0, W.jsx)(n.default, {
                                  style: [w.typography.h3, { color: q.text, marginBottom: w.spacing.sm }],
                                  children: M("walletAddFunds"),
                                }),
                                (0, W.jsx)(f.Input, {
                                  label: M("walletAmount"),
                                  value: U,
                                  onChangeText: X,
                                  keyboardType: "decimal-pad",
                                  placeholder: "10.000",
                                }),
                                (0, W.jsx)(n.default, {
                                  style: [
                                    w.typography.smallStrong,
                                    { color: q.textMuted, marginBottom: w.spacing.xs },
                                  ],
                                  children: M("walletMethod"),
                                }),
                                (0, W.jsx)(i.default, {
                                  style: A.chips,
                                  children: P.map((e) =>
                                    (0, W.jsxs)(
                                      s.default,
                                      {
                                        onPress: () => le(e.key),
                                        accessibilityRole: "button",
                                        style: [
                                          A.chip,
                                          {
                                            borderColor: te === e.key ? q.accent : q.border,
                                            backgroundColor: te === e.key ? q.surfaceAlt : q.surface,
                                          },
                                        ],
                                        children: [
                                          (0, W.jsx)(u.Ionicons, {
                                            name: e.icon,
                                            size: 14,
                                            color: te === e.key ? q.accent : q.textMuted,
                                          }),
                                          (0, W.jsx)(n.default, {
                                            style: [
                                              w.typography.small,
                                              { color: te === e.key ? q.accentText : q.text, marginStart: 4 },
                                            ],
                                            children: M(e.labelKey),
                                          }),
                                        ],
                                      },
                                      e.key,
                                    ),
                                  ),
                                }),
                                (0, W.jsx)(y.Button, {
                                  title: M("walletAddFunds"),
                                  onPress: () =>
                                    ge(() => (0, C.walletAddFunds)(e.id, ue, te), "walletTopupSuccess"),
                                  loading: L,
                                  disabled: ue <= 0,
                                  fullWidth: !0,
                                }),
                              ],
                            }),
                          ye &&
                            (0, W.jsxs)(m.Card, {
                              padding: "md",
                              style: { marginBottom: w.spacing.lg },
                              children: [
                                (0, W.jsx)(n.default, {
                                  style: [w.typography.h3, { color: q.text, marginBottom: w.spacing.sm }],
                                  children: M("send" === E ? "walletSendTitle" : "walletRequestTitle"),
                                }),
                                (0, W.jsx)(n.default, {
                                  style: [
                                    w.typography.smallStrong,
                                    { color: q.textMuted, marginBottom: w.spacing.xs },
                                  ],
                                  children: M("walletRecipient"),
                                }),
                                0 === D.length
                                  ? (0, W.jsx)(n.default, {
                                      style: [
                                        w.typography.small,
                                        { color: q.textMuted, marginBottom: w.spacing.sm },
                                      ],
                                      children: M("noFriendsYet"),
                                    })
                                  : (0, W.jsx)(i.default, {
                                      style: A.chips,
                                      children: D.map((e) =>
                                        (0, W.jsx)(
                                          s.default,
                                          {
                                            onPress: () => se(e),
                                            accessibilityRole: "button",
                                            style: [
                                              A.chip,
                                              {
                                                borderColor: ae?.id === e.id ? q.accent : q.border,
                                                backgroundColor: ae?.id === e.id ? q.surfaceAlt : q.surface,
                                              },
                                            ],
                                            children: (0, W.jsx)(n.default, {
                                              style: [
                                                w.typography.small,
                                                {
                                                  color: ae?.id === e.id ? q.accentText : q.text,
                                                  flexShrink: 1,
                                                  maxWidth: 160,
                                                },
                                              ],
                                              numberOfLines: 1,
                                              children: e.name,
                                            }),
                                          },
                                          e.id,
                                        ),
                                      ),
                                    }),
                                (0, W.jsx)(f.Input, {
                                  label: M("walletAmount"),
                                  value: U,
                                  onChangeText: X,
                                  keyboardType: "decimal-pad",
                                  placeholder: "5.000",
                                }),
                                (0, W.jsx)(f.Input, {
                                  label: M("walletNote"),
                                  value: Z,
                                  onChangeText: ee,
                                  placeholder: "\u26bd",
                                }),
                                (0, W.jsx)(y.Button, {
                                  title: M("send" === E ? "walletSend" : "walletRequestBtn"),
                                  onPress:
                                    "send" === E
                                      ? () =>
                                          ge(() => (0, C.walletTransfer)(e.id, ae.id, ue, Z), "walletSent")
                                      : () =>
                                          ge(
                                            () => (0, C.createWalletRequest)(e.id, ae.id, ue, Z),
                                            "walletRequested",
                                          ),
                                  loading: L,
                                  disabled: ue <= 0 || !ae,
                                  fullWidth: !0,
                                }),
                              ],
                            }),
                          "withdraw" === E &&
                            (0, W.jsxs)(m.Card, {
                              padding: "md",
                              style: { marginBottom: w.spacing.lg },
                              children: [
                                (0, W.jsx)(n.default, {
                                  style: [w.typography.h3, { color: q.text, marginBottom: w.spacing.sm }],
                                  children: M("walletWithdraw"),
                                }),
                                (0, W.jsx)(n.default, {
                                  style: [
                                    w.typography.small,
                                    { color: q.textMuted, marginBottom: w.spacing.sm },
                                  ],
                                  children: M("walletWithdrawHint"),
                                }),
                                "verified" !== F.kyc_status
                                  ? (0, W.jsxs)(W.Fragment, {
                                      children: [
                                        (0, W.jsx)(n.default, {
                                          style: [
                                            w.typography.smallStrong,
                                            { color: q.text, marginBottom: w.spacing.xs },
                                          ],
                                          children: M("walletKycTitle"),
                                        }),
                                        (0, W.jsx)(n.default, {
                                          style: [
                                            w.typography.small,
                                            { color: q.textMuted, marginBottom: w.spacing.sm },
                                          ],
                                          children: M("walletKycBody"),
                                        }),
                                        (0, W.jsx)(f.Input, {
                                          label: M("walletKycName"),
                                          value: oe,
                                          onChangeText: re,
                                        }),
                                        (0, W.jsx)(f.Input, {
                                          label: M("walletKycCivilId"),
                                          value: ne,
                                          onChangeText: ie,
                                          keyboardType: "number-pad",
                                          maxLength: 12,
                                        }),
                                        (0, W.jsx)(y.Button, {
                                          title: M("walletKycSubmit"),
                                          onPress: () =>
                                            ge(
                                              () => (0, C.submitWalletKyc)(e.id, oe, ne),
                                              "walletKycVerified",
                                            ),
                                          loading: L,
                                          disabled: !oe || 12 !== ne.length,
                                          fullWidth: !0,
                                        }),
                                      ],
                                    })
                                  : (0, W.jsxs)(W.Fragment, {
                                      children: [
                                        (0, W.jsxs)(i.default, {
                                          style: [
                                            A.banner,
                                            { backgroundColor: q.surfaceAlt, borderColor: q.success },
                                          ],
                                          children: [
                                            (0, W.jsx)(u.Ionicons, {
                                              name: "shield-checkmark",
                                              size: 16,
                                              color: q.success,
                                            }),
                                            (0, W.jsx)(n.default, {
                                              style: [
                                                w.typography.small,
                                                { color: q.text, marginStart: w.spacing.xs },
                                              ],
                                              children: M("walletKycVerified"),
                                            }),
                                          ],
                                        }),
                                        (0, W.jsx)(f.Input, {
                                          label: M("walletAmount"),
                                          value: U,
                                          onChangeText: X,
                                          keyboardType: "decimal-pad",
                                          placeholder: "25.000",
                                        }),
                                        (0, W.jsx)(y.Button, {
                                          title: M("walletWithdraw"),
                                          onPress: () =>
                                            ge(() => (0, C.walletWithdraw)(e.id, ue), "walletWithdrawn"),
                                          loading: L,
                                          disabled: ue <= 0,
                                          fullWidth: !0,
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                          F.claimable_payout_fils > 0 &&
                            (0, W.jsx)(y.Button, {
                              title: M("walletClaimPayout", { amount: I(F.claimable_payout_fils) }),
                              onPress: () => ge(() => (0, C.claimVenuePayout)(e.id), "walletPayoutClaimed"),
                              loading: L,
                              variant: "secondary",
                              fullWidth: !0,
                              style: { marginBottom: w.spacing.lg },
                            }),
                          F.requests_incoming.length > 0 &&
                            (0, W.jsxs)(W.Fragment, {
                              children: [
                                (0, W.jsx)(n.default, {
                                  style: [w.typography.h3, { color: q.text, marginBottom: w.spacing.sm }],
                                  children: M("walletRequestsIncoming"),
                                }),
                                (0, W.jsx)(m.Card, {
                                  padding: "md",
                                  style: { marginBottom: w.spacing.lg },
                                  children: F.requests_incoming.map((e, t) =>
                                    (0, W.jsxs)(
                                      i.default,
                                      {
                                        style: [
                                          A.reqRow,
                                          {
                                            borderTopColor: q.border,
                                            borderTopWidth: 0 === t ? 0 : r.default.hairlineWidth,
                                          },
                                        ],
                                        children: [
                                          (0, W.jsxs)(i.default, {
                                            style: { flex: 1 },
                                            children: [
                                              (0, W.jsx)(n.default, {
                                                style: [w.typography.bodyStrong, { color: q.text }],
                                                children: e.requester_name,
                                              }),
                                              (0, W.jsxs)(n.default, {
                                                style: [w.typography.small, { color: q.textMuted }],
                                                children: [I(e.amount_fils), e.note ? ` \xb7 ${e.note}` : ""],
                                              }),
                                            ],
                                          }),
                                          (0, W.jsx)(y.Button, {
                                            title: M("walletPayAction"),
                                            size: "sm",
                                            onPress: () => pe(e.id, !0),
                                            loading: L,
                                          }),
                                          (0, W.jsx)(y.Button, {
                                            title: M("walletDeclineAction"),
                                            size: "sm",
                                            variant: "ghost",
                                            onPress: () => pe(e.id, !1),
                                            style: { marginStart: w.spacing.xs },
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          F.requests_outgoing.length > 0 &&
                            (0, W.jsxs)(W.Fragment, {
                              children: [
                                (0, W.jsx)(n.default, {
                                  style: [w.typography.h3, { color: q.text, marginBottom: w.spacing.sm }],
                                  children: M("walletRequestsOutgoing"),
                                }),
                                (0, W.jsx)(m.Card, {
                                  padding: "md",
                                  style: { marginBottom: w.spacing.lg },
                                  children: F.requests_outgoing.map((e, t) =>
                                    (0, W.jsxs)(
                                      i.default,
                                      {
                                        style: [
                                          A.reqRow,
                                          {
                                            borderTopColor: q.border,
                                            borderTopWidth: 0 === t ? 0 : r.default.hairlineWidth,
                                          },
                                        ],
                                        children: [
                                          (0, W.jsxs)(i.default, {
                                            style: { flex: 1 },
                                            children: [
                                              (0, W.jsx)(n.default, {
                                                style: [w.typography.bodyStrong, { color: q.text }],
                                                children: e.from_name,
                                              }),
                                              (0, W.jsxs)(n.default, {
                                                style: [w.typography.small, { color: q.textMuted }],
                                                children: [I(e.amount_fils), e.note ? ` \xb7 ${e.note}` : ""],
                                              }),
                                            ],
                                          }),
                                          (0, W.jsx)(u.Ionicons, {
                                            name: "hourglass-outline",
                                            size: 16,
                                            color: q.textMuted,
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          (0, W.jsx)(n.default, {
                            style: [w.typography.h3, { color: q.text, marginBottom: w.spacing.sm }],
                            children: M("walletHistory"),
                          }),
                          0 === F.transactions.length
                            ? (0, W.jsx)(x.EmptyState, {
                                icon: "wallet-outline",
                                title: M("walletTitle"),
                                body: M("walletEmpty"),
                              })
                            : (0, W.jsxs)(W.Fragment, {
                                children: [
                                  (0, W.jsx)(m.Card, {
                                    padding: "md",
                                    children: F.transactions
                                      .slice(0, G)
                                      .map((e, t) =>
                                        (0, W.jsx)(_, { txn: e, first: 0 === t, colors: q, t: M }, e.id),
                                      ),
                                  }),
                                  F.transactions.length > G &&
                                    (0, W.jsx)(y.Button, {
                                      title: M("showMore"),
                                      variant: "secondary",
                                      size: "sm",
                                      onPress: () => Y((e) => e + 50),
                                      style: { marginTop: w.spacing.sm, alignSelf: "flex-start" },
                                    }),
                                ],
                              }),
                          (0, W.jsx)(n.default, {
                            style: [w.typography.caption, { color: q.textMuted, marginTop: w.spacing.sm }],
                            children: M("walletCombinedHint"),
                          }),
                        ],
                      }),
            }),
          ],
        });
      }));
    var t = _r(d[1]),
      l = e(_r(d[2])),
      s = e(_r(d[3])),
      o = e(_r(d[4])),
      r = e(_r(d[5])),
      n = e(_r(d[6])),
      i = e(_r(d[7])),
      c = _r(d[8]),
      u = _r(d[9]),
      p = _r(d[10]),
      y = _r(d[11]),
      h = _r(d[12]),
      m = _r(d[13]),
      x = _r(d[14]),
      f = _r(d[15]),
      b = _r(d[16]),
      j = _r(d[17]),
      w = _r(d[18]),
      C = _r(d[19]),
      k = _r(d[20]),
      S = _r(d[21]),
      B = _r(d[22]),
      T = _r(d[23]),
      W = _r(d[24]);
    const P = [
        { key: "knet", labelKey: "payKnet", icon: "card-outline" },
        { key: "apple_pay", labelKey: "payApplePay", icon: "logo-apple" },
        { key: "google_pay", labelKey: "payGooglePay", icon: "logo-google" },
        { key: "visa", labelKey: "payVisa", icon: "card" },
        { key: "mastercard", labelKey: "payMastercard", icon: "card" },
      ],
      // formatAmount, not formatPrice: these are balances. formatPrice turned every zero into the
      // word "Free", so a new user's wallet read Available Free / Pending Free / Credits Free in
      // display type, and transaction rows prefixed the sign onto it as +Free.
      I = (e) => (0, k.formatAmount)(e / 1e3);
    const R = ({ label: e, value: t }) => {
        const { colors: l } = (0, j.useTheme)();
        return (0, W.jsxs)(i.default, {
          style: { flex: 1 },
          children: [
            (0, W.jsx)(n.default, {
              style: [w.typography.caption, { color: "rgba(0,0,0,0.6)" }],
              children: e,
            }),
            (0, W.jsx)(n.default, { style: [w.typography.bodyStrong, { color: l.accentInk }], children: t }),
          ],
        });
      },
      v = ({ icon: e, label: t, active: l, onPress: o, colors: r }) =>
        (0, W.jsxs)(s.default, {
          onPress: o,
          accessibilityRole: "button",
          style: [
            A.action,
            { backgroundColor: l ? r.surfaceAlt : r.surface, borderColor: l ? r.accent : r.border },
          ],
          children: [
            (0, W.jsx)(u.Ionicons, { name: e, size: 20, color: l ? r.accent : r.text }),
            (0, W.jsx)(n.default, {
              style: [w.typography.caption, { color: l ? r.accentText : r.text, marginTop: 2 }],
              numberOfLines: 1,
              children: t,
            }),
          ],
        }),
      _ = ({ txn: e, first: t, colors: l, t: s }) => {
        const o = "in" === e.direction;
        return (0, W.jsxs)(i.default, {
          style: [A.txnRow, { borderTopColor: l.border, borderTopWidth: t ? 0 : r.default.hairlineWidth }],
          children: [
            (0, W.jsx)(i.default, {
              style: [A.txnIcon, { backgroundColor: l.surfaceAlt }],
              children: (0, W.jsx)(u.Ionicons, {
                name: o ? "arrow-down" : "arrow-up",
                size: 14,
                color: o ? l.success : l.danger,
              }),
            }),
            (0, W.jsxs)(i.default, {
              style: { flex: 1, marginHorizontal: w.spacing.sm },
              children: [
                (0, W.jsx)(n.default, {
                  style: [w.typography.smallStrong, { color: l.text }],
                  children: s(e.kind_key),
                }),
                (0, W.jsxs)(n.default, {
                  style: [w.typography.caption, { color: l.textMuted }],
                  numberOfLines: 1,
                  children: [
                    e.counterparty_name ?? new Date(e.created_at).toLocaleDateString(),
                    e.note ? ` \xb7 ${e.note}` : "",
                  ],
                }),
              ],
            }),
            (0, W.jsxs)(n.default, {
              style: [w.typography.smallStrong, { color: o ? l.success : l.text }],
              children: [o ? "+" : "\u2212", I(e.amount_fils)],
            }),
          ],
        });
      },
      A = r.default.create({
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
          borderWidth: r.default.hairlineWidth,
        },
        hero: { borderRadius: w.radius.lg, padding: w.spacing.lg, marginBottom: w.spacing.md },
        heroAmount: { color: "#131A03", fontSize: 34, fontWeight: "800", marginVertical: w.spacing.xs },
        heroCcy: { fontSize: 16, fontWeight: "600", color: "rgba(0,0,0,0.6)" },
        heroRow: { flexDirection: "row", gap: w.spacing.md, marginTop: w.spacing.sm },
        actions: { flexDirection: "row", gap: w.spacing.sm, marginBottom: w.spacing.md },
        action: {
          flex: 1,
          alignItems: "center",
          paddingVertical: w.spacing.sm,
          borderRadius: w.radius.md,
          borderWidth: r.default.hairlineWidth,
        },
        banner: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: w.radius.md,
          borderWidth: r.default.hairlineWidth,
          padding: w.spacing.sm,
          marginBottom: w.spacing.md,
        },
        chips: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.xs, marginBottom: w.spacing.md },
        chip: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: w.spacing.sm,
          paddingVertical: 6,
          borderRadius: w.radius.pill,
          borderWidth: 1,
        },
        reqRow: { flexDirection: "row", alignItems: "center", paddingVertical: w.spacing.sm },
        txnRow: { flexDirection: "row", alignItems: "center", paddingVertical: w.spacing.sm },
        txnIcon: { width: 28, height: 28, borderRadius: 14, alignItems: "center", justifyContent: "center" },
      });
  },
  2506,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 626, 624, 1623, 1627, 625, 630, 615, 616, 671, 1311,
    675, 1171, 674, 13,
  ],
);
