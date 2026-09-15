__d(
  function (g, _r, i, _a, _m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, h.useAuth)(),
          { colors: n } = (0, x.useTheme)(),
          m = (0, p.useRouter)(),
          b = (0, S.useT)(),
          [w, T] = (0, t.useState)([]),
          [E, L] = (0, t.useState)([]),
          [R, B] = (0, t.useState)(!0),
          [D, O] = (0, t.useState)(null),
          F = (0, t.useCallback)(async () => {
            if (e) {
              O(null);
              try {
                const [t, s] = await Promise.all([
                  (0, _.fetchMyCancellations)(e.id),
                  (0, _.fetchMyPaymentRequests)(e.id),
                ]);
                (T(t), L(s));
              } catch (e) {
                O((0, C.storeErrorText)(e?.message ?? "") || b("error"));
              } finally {
                B(!1);
              }
            }
          }, [e, b]);
        (0, p.useFocusEffect)(
          (0, t.useCallback)(() => {
            F();
          }, [F]),
        );
        const W = (0, t.useMemo)(() => {
            const e = Date.now();
            return E.filter(
              (t) => "pending" === t.status && (!t.reserved_until || Date.parse(t.reserved_until) > e),
            ).sort((e, t) => Date.parse(e.reserved_until ?? "") - Date.parse(t.reserved_until ?? ""));
          }, [E]),
          G = (0, t.useMemo)(() => {
            const e = new Map();
            for (const t of E) {
              if ("seat" !== t.kind || !t.game_id) continue;
              const s = e.get(t.game_id);
              (!s || Date.parse(t.created_at) > Date.parse(s.created_at)) && e.set(t.game_id, t);
            }
            return e;
          }, [E]);
        return (0, M.jsxs)(c.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: n.bg },
          children: [
            (0, M.jsxs)(l.default, {
              style: A.header,
              children: [
                (0, M.jsx)(r.default, {
                  onPress: () => m.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: b("back"),
                  style: [A.iconBtn, { backgroundColor: n.surface, borderColor: n.border }],
                  children: (0, M.jsx)(u.Ionicons, { name: (0, k.chevronBack)(), size: 22, color: n.text }),
                }),
                (0, M.jsx)(o.default, {
                  style: [j.typography.h2, { color: n.text, flex: 1, textAlign: "center" }],
                  children: b("refundsTitle"),
                }),
                (0, M.jsx)(l.default, { style: { width: 40 } }),
              ],
            }),
            R
              ? (0, M.jsx)(l.default, {
                  style: { flex: 1, alignItems: "center", justifyContent: "center" },
                  children: (0, M.jsx)(s.default, { color: n.accentText }),
                })
              : D
                ? (0, M.jsxs)(l.default, {
                    style: { paddingVertical: j.spacing.xl, paddingHorizontal: j.spacing.lg },
                    children: [
                      (0, M.jsx)(y.EmptyState, {
                        icon: "cloud-offline-outline",
                        title: b("error"),
                        body: b("refundsErrorBody"),
                      }),
                      (0, M.jsx)(f.Button, {
                        title: b("retry"),
                        fullWidth: !0,
                        onPress: () => {
                          (B(!0), F());
                        },
                        style: { marginTop: j.spacing.md },
                      }),
                    ],
                  })
                : (0, M.jsx)(a.default, {
                    data: w,
                    keyExtractor: (e) => e.id,
                    contentContainerStyle: {
                      padding: j.spacing.lg,
                      paddingBottom: j.spacing.xxxl,
                      flexGrow: 1,
                    },
                    ListHeaderComponent: W.length
                      ? (0, M.jsxs)(l.default, {
                          style: { marginBottom: j.spacing.lg },
                          children: [
                            (0, M.jsx)(o.default, {
                              style: [
                                j.typography.smallStrong,
                                { color: n.textMuted, marginBottom: j.spacing.sm },
                              ],
                              children: b("refundsStillToPay"),
                            }),
                            W.map((e) =>
                              (0, M.jsx)(
                                v,
                                { p: e, colors: n, t: b, onPress: () => m.push(`/pay/${e.id}`) },
                                e.id,
                              ),
                            ),
                          ],
                        })
                      : null,
                    ListEmptyComponent: (0, M.jsxs)(l.default, {
                      children: [
                        (0, M.jsx)(y.EmptyState, {
                          icon: "receipt-outline",
                          title: b("refundsEmptyTitle"),
                          body: b("refundsEmptyBody"),
                        }),
                        (0, M.jsx)(f.Button, {
                          title: b("findAGame"),
                          variant: "ghost",
                          fullWidth: !0,
                          onPress: () => m.push("/(tabs)/games"),
                        }),
                      ],
                    }),
                    renderItem: ({ item: e }) =>
                      (0, M.jsx)(P, {
                        row: e,
                        paid: G.get(e.game_id) ?? null,
                        colors: n,
                        t: b,
                        onPress: () => m.push(`/game/${e.game_id}`),
                      }),
                  }),
          ],
        });
      }));
    var t = _r(d[1]),
      s = e(_r(d[2])),
      a = e(_r(d[3])),
      r = e(_r(d[4])),
      n = e(_r(d[5])),
      o = e(_r(d[6])),
      l = e(_r(d[7])),
      c = _r(d[8]),
      u = _r(d[9]),
      p = _r(d[10]),
      f = _r(d[11]),
      m = _r(d[12]),
      y = _r(d[13]),
      h = _r(d[14]),
      x = _r(d[15]),
      j = _r(d[16]),
      _ = _r(d[17]),
      b = _r(d[18]),
      w = _r(d[19]),
      T = _r(d[20]),
      C = _r(d[21]),
      S = _r(d[22]),
      k = _r(d[23]),
      M = _r(d[24]);
    const v = ({ p: e, colors: t, t: s, onPress: a }) => {
        const r = s("seat" === e.kind ? "refundsSeatFee" : "refundsCourtShare"),
          n = (0, b.formatAmount)(e.amount_kwd);
        return (0, M.jsx)(m.Card, {
          style: { marginBottom: j.spacing.sm, borderColor: t.accent },
          onPress: a,
          accessibilityLabel: s("refundsPayA11y", { amount: n, what: r }),
          children: (0, M.jsxs)(l.default, {
            style: A.top,
            children: [
              (0, M.jsxs)(l.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, M.jsx)(o.default, {
                    style: [j.typography.bodyStrong, { color: t.text }],
                    numberOfLines: 1,
                    children: r,
                  }),
                  (0, M.jsx)(o.default, {
                    style: [j.typography.caption, { color: t.textMuted }],
                    numberOfLines: 1,
                    children: e.venue_name,
                  }),
                  e.reserved_until
                    ? (0, M.jsx)(o.default, {
                        style: [j.typography.caption, { color: t.text }],
                        numberOfLines: 1,
                        children: s("refundsHoldEnds", { when: (0, b.formatGameTime)(e.reserved_until) }),
                      })
                    : null,
                ],
              }),
              (0, M.jsx)(o.default, {
                style: [j.typography.bodyStrong, { color: t.accentText }],
                children: n,
              }),
            ],
          }),
        });
      },
      P = ({ row: e, paid: t, colors: s, t: a, onPress: r }) => {
        const n = e.paid_kwd > 0 && 0 === e.refunded_kwd,
          c = e.refunded_kwd > 0,
          u = "free_spot" === e.reason || "unpaid" === e.reason,
          p = n ? s.danger : c ? s.success : s.textMuted,
          f = a(c ? "refundedChip" : n ? "keptChip" : "noChargeChip"),
          y = t?.method ? w.PAYMENT_METHODS.find((e) => e.method === t.method) : null,
          h = y ? a(y.labelKey) : (t?.method ?? null);
        return (0, M.jsxs)(m.Card, {
          style: { marginBottom: j.spacing.sm },
          onPress: r,
          accessibilityLabel: a("refundsRowA11y", { title: e.title || a("matchLabel"), state: f }),
          children: [
            (0, M.jsxs)(l.default, {
              style: A.top,
              children: [
                (0, M.jsxs)(l.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, M.jsx)(o.default, {
                      style: [j.typography.bodyStrong, { color: s.text }],
                      numberOfLines: 1,
                      children: e.title || a("matchLabel"),
                    }),
                    (0, M.jsxs)(o.default, {
                      style: [j.typography.caption, { color: s.textMuted }],
                      numberOfLines: 1,
                      children: [
                        e.venue_name,
                        e.starts_at ? ` \xb7 ${(0, b.formatGameTime)(e.starts_at)}` : "",
                      ],
                    }),
                  ],
                }),
                (0, M.jsx)(l.default, {
                  style: [A.chip, { backgroundColor: s.surfaceAlt }],
                  children: (0, M.jsx)(o.default, {
                    style: [A.chipText, { color: p }],
                    numberOfLines: 1,
                    children: f.toUpperCase(),
                  }),
                }),
              ],
            }),
            !u &&
              (0, M.jsxs)(l.default, {
                style: { marginTop: j.spacing.sm },
                children: [
                  (0, M.jsx)(E, {
                    label: a("youPaidRow"),
                    value: (0, b.formatAmount)(e.paid_kwd),
                    colors: s,
                  }),
                  (0, M.jsx)(E, {
                    label: a("refundRow"),
                    value: (0, b.formatAmount)(e.refunded_kwd),
                    colors: s,
                    tone: c ? "success" : "muted",
                  }),
                  (0, M.jsx)(E, {
                    label: a("youReceiveRow"),
                    value: (0, b.formatAmount)(e.refunded_kwd),
                    colors: s,
                    tone: c ? "success" : "muted",
                    strong: !0,
                  }),
                  h && t?.paid_at
                    ? (0, M.jsx)(o.default, {
                        style: [j.typography.caption, { color: s.textMuted, marginTop: 2 }],
                        children: a("refundsPaidBy", { method: h, when: (0, b.formatGameTime)(t.paid_at) }),
                      })
                    : null,
                ],
              }),
            "past_cutoff" === e.reason && e.starts_at
              ? (0, M.jsxs)(l.default, {
                  style: { marginTop: j.spacing.sm, gap: 2 },
                  children: [
                    (0, M.jsx)(o.default, {
                      style: [j.typography.caption, { color: s.textMuted }],
                      children: a("forfeitKickoff", { when: (0, b.formatGameTime)(e.starts_at) }),
                    }),
                    (0, M.jsx)(o.default, {
                      style: [j.typography.caption, { color: s.textMuted }],
                      // Two picks the Arabic dual form; see the note in 2380.
                      children: a(
                        2 === T.SEAT_REFUND_CUTOFF_HOURS
                          ? "forfeitWindowClosedTwo"
                          : "forfeitWindowClosed",
                        {
                          when: (0, b.formatGameTime)((0, T.refundDeadlineIso)(e.starts_at)),
                          hours: T.SEAT_REFUND_CUTOFF_HOURS,
                        },
                      ),
                    }),
                    (0, M.jsx)(o.default, {
                      style: [j.typography.caption, { color: s.text }],
                      children: a("forfeitYouLeft", { when: (0, b.formatGameTime)(e.cancelled_at) }),
                    }),
                  ],
                })
              : (0, M.jsxs)(M.Fragment, {
                  children: [
                    (0, M.jsx)(o.default, {
                      style: [j.typography.caption, { color: s.textMuted, marginTop: j.spacing.sm }],
                      children:
                        "past_cutoff" === e.reason
                          ? a(2 === T.SEAT_REFUND_CUTOFF_HOURS ? "refundNoneWhyTwo" : "refundNoneWhy", {
                              hours: T.SEAT_REFUND_CUTOFF_HOURS,
                            })
                          : "free_spot" === e.reason
                            ? a("refundFreeSpot")
                            : "unpaid" === e.reason
                              ? a("refundUnpaidWhy")
                              : a("refundedInFullWhy"),
                    }),
                    (0, M.jsx)(o.default, {
                      style: [j.typography.caption, { color: s.textMuted, marginTop: 2 }],
                      children: a("cancelledOn", { when: (0, b.formatGameTime)(e.cancelled_at) }),
                    }),
                  ],
                }),
          ],
        });
      },
      E = ({ label: e, value: t, colors: s, tone: a, strong: r }) =>
        (0, M.jsxs)(l.default, {
          style: A.money,
          children: [
            (0, M.jsx)(o.default, {
              style: [j.typography.small, { color: s.textMuted, flex: 1 }],
              children: e,
            }),
            (0, M.jsx)(o.default, {
              style: [
                r ? j.typography.bodyStrong : j.typography.small,
                { color: "success" === a ? s.success : "muted" === a ? s.textMuted : s.text },
              ],
              children: t,
            }),
          ],
        }),
      A = n.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: j.spacing.lg,
          paddingVertical: j.spacing.sm,
          gap: j.spacing.sm,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        top: { flexDirection: "row", alignItems: "flex-start", gap: j.spacing.sm },
        chip: { borderRadius: j.radius.pill, paddingHorizontal: j.spacing.sm, paddingVertical: 3 },
        chipText: { fontSize: 10, fontWeight: "800", letterSpacing: 0.6 },
        money: { flexDirection: "row", alignItems: "center", gap: j.spacing.md, paddingVertical: 3 },
      });
  },
  2479,
  [
    33, 15, 461, 271, 369, 158, 146, 273, 381, 1086, 20, 626, 1623, 1627, 630, 615, 616, 671, 1311, 668, 670,
    674, 675, 1171, 13,
  ],
);
