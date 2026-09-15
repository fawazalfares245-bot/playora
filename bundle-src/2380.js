__d(
  function (g, r, i, a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.CheckoutSheet = void 0));
    var t = r(d[1]),
      l = e(r(d[2])),
      o = e(r(d[3])),
      s = e(r(d[4])),
      n = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      p = r(d[8]),
      y = r(d[9]),
      h = r(d[10]),
      x = r(d[11]),
      f = r(d[12]),
      m = r(d[13]),
      b = r(d[14]),
      j = r(d[15]),
      w = r(d[16]),
      T = r(d[17]),
      v = r(d[18]),
      C = r(d[19]);
    const S = b.PAYMENT_METHODS.filter((e) => e.online);
    _e.CheckoutSheet = ({
      visible: e,
      gameId: n,
      priceKwd: b,
      userId: P,
      summary: W,
      onClose: k,
      onDone: A,
    }) => {
      const { colors: I } = (0, h.useTheme)(),
        _ = (0, T.useT)(),
        D = (0, x.useReducedMotion)(),
        [B, E] = (0, t.useState)("wallet"),
        [O, V] = (0, t.useState)(null),
        [F, L] = (0, t.useState)(!1),
        [z, H] = (0, t.useState)(null);
      (0, t.useEffect)(() => {
        if (!e) return (H(null), void L(!1));
        (E("wallet"),
          (0, m.fetchWallet)(P)
            .then((e) => V(e.available_fils + e.credits_fils))
            .catch(() => V(null)));
      }, [e, P]);
      const K = "wallet" === B && null != O && O < Math.round(1e3 * b);
      return (0, C.jsx)(o.default, {
        visible: e,
        transparent: !0,
        animationType: (0, x.sheetAnimation)(D),
        onRequestClose: k,
        children: (0, C.jsx)(s.default, {
          style: M.scrim,
          onPress: k,
          accessibilityRole: "button",
          accessibilityLabel: _("cancel"),
          children: (0, C.jsxs)(s.default, {
            style: [M.sheet, { backgroundColor: I.surface }],
            onPress: () => {},
            accessibilityViewIsModal: !0,
            children: [
              (0, C.jsx)(c.default, {
                style: [f.typography.h3, { color: I.text }],
                children: _(W ? "reviewBookingTitle" : "checkoutTitle"),
              }),
              W &&
                (0, C.jsxs)(u.default, {
                  style: [M.summary, { backgroundColor: I.surfaceAlt, borderColor: I.border }],
                  children: [
                    (0, C.jsx)(R, { label: _("reviewGameRow"), value: W.title, colors: I }),
                    (0, C.jsx)(R, { label: _("reviewVenueRow"), value: W.venue, colors: I }),
                    (0, C.jsx)(R, { label: _("reviewDateRow"), value: W.when, colors: I }),
                    (0, C.jsx)(R, { label: _("reviewSpotRow"), value: W.spot, colors: I }),
                  ],
                }),
              (0, C.jsxs)(u.default, {
                style: [M.row, { borderColor: I.border, marginTop: f.spacing.md }],
                children: [
                  (0, C.jsx)(c.default, {
                    style: [f.typography.body, { color: I.textMuted, flex: 1 }],
                    children: _(W ? "reviewGameFee" : "perPlayer"),
                  }),
                  (0, C.jsx)(c.default, {
                    style: [f.typography.body, { color: I.text }],
                    children: (0, j.formatAmount)(b),
                  }),
                ],
              }),
              (0, C.jsxs)(u.default, {
                style: [M.row, { borderColor: I.border }],
                children: [
                  (0, C.jsx)(c.default, {
                    style: [f.typography.body, { color: I.textMuted, flex: 1 }],
                    children: _("reviewPlayoraFee"),
                  }),
                  (0, C.jsx)(c.default, {
                    style: [f.typography.body, { color: I.textMuted }],
                    children: (0, j.formatAmount)(0),
                  }),
                ],
              }),
              (0, C.jsxs)(u.default, {
                style: [M.total, { borderColor: I.text }],
                children: [
                  (0, C.jsx)(c.default, {
                    style: [f.typography.bodyStrong, { color: I.text, flex: 1 }],
                    children: _("reviewYouPay"),
                  }),
                  (0, C.jsx)(c.default, {
                    style: [f.typography.h3, { color: I.accentText }],
                    children: (0, j.formatAmount)(b),
                  }),
                ],
              }),
              null != O &&
                (0, C.jsxs)(u.default, {
                  style: [M.row, { borderColor: I.border }],
                  children: [
                    (0, C.jsx)(c.default, {
                      style: [f.typography.body, { color: I.textMuted, flex: 1 }],
                      children: _("walletBalanceLine"),
                    }),
                    (0, C.jsx)(c.default, {
                      style: [f.typography.bodyStrong, { color: I.text }],
                      children: (0, j.formatAmount)(O / 1e3),
                    }),
                  ],
                }),
              K &&
                (0, C.jsx)(c.default, {
                  style: [f.typography.caption, { color: I.warning, marginTop: f.spacing.xs }],
                  children: _("remainderOnKnet"),
                }),
              (0, C.jsx)(u.default, {
                style: { flexDirection: "row", flexWrap: "wrap", gap: f.spacing.xs, marginTop: f.spacing.md },
                children: S.map((e) => {
                  const t = B === e.method;
                  return (0, C.jsx)(
                    s.default,
                    {
                      onPress: () => E(e.method),
                      accessibilityRole: "button",
                      accessibilityState: { selected: t },
                      style: [
                        M.chip,
                        {
                          backgroundColor: t ? I.accent : I.surfaceAlt,
                          borderColor: t ? I.accent : I.border,
                        },
                      ],
                      children: (0, C.jsxs)(c.default, {
                        style: [f.typography.smallStrong, { color: t ? I.accentInk : I.text }],
                        children: [e.emoji ? `${e.emoji} ` : "", _(e.labelKey)],
                      }),
                    },
                    e.method,
                  );
                }),
              }),
              (0, C.jsx)(c.default, {
                style: [f.typography.caption, { color: I.textMuted, marginTop: f.spacing.md }],
                // The Arabic copy used to hardcode the dual form of "two hours" instead of
                // interpolating, so moving SEAT_REFUND_CUTOFF_HOURS told English users the new window
                // and Arabic users the old one, on the screens that decide whether their money comes
                // back. The base string now interpolates; the dual form survives as a Two sibling
                // because Arabic agreement makes "%{hours} hours" wrong when the number is exactly 2.
                children: _(
                  2 === v.SEAT_REFUND_CUTOFF_HOURS ? "refundPolicyNoteTwo" : "refundPolicyNote",
                  { hours: v.SEAT_REFUND_CUTOFF_HOURS },
                ),
              }),
              z &&
                (0, C.jsxs)(u.default, {
                  style: { flexDirection: "row", alignItems: "center", marginTop: f.spacing.md },
                  children: [
                    (0, C.jsx)(p.Ionicons, { name: "alert-circle", size: 16, color: I.danger }),
                    (0, C.jsx)(c.default, {
                      style: [f.typography.small, { color: I.danger, marginStart: 6, flex: 1 }],
                      children: z,
                    }),
                  ],
                }),
              (0, C.jsxs)(u.default, {
                style: { marginTop: f.spacing.lg },
                children: [
                  F
                    ? (0, C.jsx)(u.default, {
                        style: { alignItems: "center", paddingVertical: f.spacing.sm },
                        children: (0, C.jsx)(l.default, { color: I.accentText }),
                      })
                    : (0, C.jsx)(y.Button, {
                        title: _("payAmountBtn", { amount: (0, j.formatPrice)(b) }),
                        fullWidth: !0,
                        size: "lg",
                        onPress: async () => {
                          (L(!0), H(null));
                          try {
                            const e = await (0, m.checkoutJoin)(P, n, B);
                            A(e);
                          } catch (e) {
                            H((0, w.storeErrorText)(String(e?.message ?? "")));
                          } finally {
                            L(!1);
                          }
                        },
                      }),
                  (0, C.jsx)(u.default, { style: { height: f.spacing.sm } }),
                  (0, C.jsx)(y.Button, { title: _("cancel"), variant: "ghost", fullWidth: !0, onPress: k }),
                ],
              }),
            ],
          }),
        }),
      });
    };
    const R = ({ label: e, value: t, colors: l }) =>
        (0, C.jsxs)(u.default, {
          style: { flexDirection: "row", alignItems: "center", gap: f.spacing.md, paddingVertical: 4 },
          children: [
            (0, C.jsx)(c.default, {
              style: [f.typography.small, { color: l.textMuted, flex: 1 }],
              children: e,
            }),
            (0, C.jsx)(c.default, {
              style: [f.typography.small, { color: l.text, maxWidth: "62%" }],
              numberOfLines: 1,
              children: t,
            }),
          ],
        }),
      M = n.default.create({
        scrim: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
        sheet: {
          borderTopLeftRadius: f.radius.xl,
          borderTopRightRadius: f.radius.xl,
          padding: f.spacing.lg,
          paddingBottom: f.spacing.xxxl,
        },
        row: {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: f.spacing.sm,
          borderBottomWidth: n.default.hairlineWidth,
        },
        chip: {
          paddingVertical: f.spacing.sm,
          paddingHorizontal: f.spacing.md,
          borderRadius: f.radius.pill,
          borderWidth: n.default.hairlineWidth,
        },
        summary: {
          borderRadius: f.radius.lg,
          borderWidth: n.default.hairlineWidth,
          padding: f.spacing.md,
          marginTop: f.spacing.md,
        },
        total: {
          flexDirection: "row",
          alignItems: "center",
          paddingTop: f.spacing.sm,
          marginTop: 2,
          borderTopWidth: 1,
        },
      });
  },
  2380,
  [33, 15, 461, 467, 369, 158, 146, 273, 1086, 626, 615, 1621, 616, 671, 668, 1311, 674, 675, 631, 13],
);
