__d(
  function (g, _r, _i, a, m, e, d) {
    // The /admin index. It was an unmatched route, so every admin screen was reachable only by typing
    // its URL, and mockReconcileSeatPayments - a complete, cursor-paged seat-payment reconciler - had
    // no caller anywhere in the bundle. This gives it a button and the screens a door. Admin only.
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: u } = (0, A.useAuth)(),
          { colors: c } = (0, T.useTheme)(),
          nav = (0, R.useRouter)(),
          tr = (0, L.useT)(),
          gate = (0, G9.useRoleGate)(["admin"]),
          [busy, setBusy] = (0, n.useState)(!1),
          [res, setRes] = (0, n.useState)(null),
          [err, setErr] = (0, n.useState)(null),
          [kyc, setKyc] = (0, n.useState)([]),
          run = (0, n.useCallback)(async () => {
            (setBusy(!0), setErr(null));
            try {
              setRes(await (0, F.reconcileSeatPayments)());
            } catch (x) {
              (setRes(null), setErr((0, G9.classifyError)(x)));
            }
            setBusy(!1);
          }, []),
          // Wallet identity checks used to stamp themselves verified on submission, so the gate in
          // front of withdrawals was decorative. They wait for a human now, which means a human
          // needs somewhere to look.
          loadKyc = (0, n.useCallback)(async () => {
            if (!u) return;
            try {
              setKyc(await (0, F.fetchPendingWalletKyc)(u.id));
            } catch {
              setKyc([]);
            }
          }, [u]),
          decide = (0, n.useCallback)(
            async (t9, ok9) => {
              if (!u) return;
              try {
                (await (0, F.reviewWalletKyc)(u.id, t9, ok9, null), await loadKyc());
              } catch (x) {
                setErr((0, G9.classifyError)(x));
              }
            },
            [u, loadKyc],
          );
        (0, n.useEffect)(() => {
          loadKyc();
        }, [loadKyc]);
        if (gate.ready && !gate.allowed)
          return (0, J.jsx)(G9.GateScreen, { kind: "denied", onBack: () => nav.back() });
        if (!gate.ready)
          return (0, J.jsx)(S.SafeAreaView, {
            style: [D.center, { backgroundColor: c.bg }],
            children: (0, J.jsx)(l.default, { color: c.accentText }),
          });
        // Only the screens that already carry a title string; the rest keep their own entry points.
        const screens = [
          ["/admin/audit", "adminAuditTitle"],
          ["/admin/players", "adminPlayersTitle"],
          ["/admin/venues", "adminVenuesTitle"],
          ["/admin/conduct", "adminConductTitle"],
          ["/admin/concierge", "adminConciergeTitle"],
          ["/admin/demand", "adminDemandTitle"],
          ["/admin/optimizer", "adminOptimizerTitle"],
        ];
        return (0, J.jsxs)(S.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: c.bg },
          children: [
            (0, J.jsxs)(s.default, {
              style: D.header,
              children: [
                (0, J.jsx)(o.default, {
                  onPress: () => nav.back(),
                  accessibilityRole: "button",
                  style: [D.iconBtn, { borderColor: c.border }],
                  children: (0, J.jsx)(P.Ionicons, { name: B.chevronBack(), size: 20, color: c.text }),
                }),
                (0, J.jsxs)(s.default, {
                  style: { flex: 1, marginLeft: b.spacing.md },
                  children: [
                    (0, J.jsx)(i.default, {
                      style: [b.typography.h2, { color: c.text }],
                      children: tr("adminMaintenanceTitle"),
                    }),
                    (0, J.jsx)(i.default, {
                      style: [b.typography.caption, { color: c.textMuted }],
                      children: tr("adminMaintenanceSubtitle"),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(y.default, {
              contentContainerStyle: {
                paddingHorizontal: b.spacing.lg,
                paddingBottom: b.spacing.xxxl,
                gap: b.spacing.lg,
              },
              children: [
                (0, J.jsxs)(s.default, {
                  style: [D.card, { borderColor: c.border, backgroundColor: c.surface }],
                  children: [
                    (0, J.jsx)(i.default, {
                      style: [b.typography.h3, { color: c.text }],
                      children: tr("adminReconcileTitle"),
                    }),
                    (0, J.jsx)(i.default, {
                      style: [b.typography.caption, { color: c.textMuted, marginTop: 4 }],
                      children: tr("adminReconcileBody"),
                    }),
                    (0, J.jsx)(o.default, {
                      onPress: run,
                      disabled: busy,
                      accessibilityRole: "button",
                      accessibilityState: { disabled: busy },
                      style: [
                        D.cta,
                        { backgroundColor: c.accent, opacity: busy ? 0.6 : 1, marginTop: b.spacing.md },
                      ],
                      children: busy
                        ? (0, J.jsx)(l.default, { color: c.accentInk })
                        : (0, J.jsx)(i.default, {
                            style: [b.typography.body, { color: c.accentInk, fontWeight: "700" }],
                            children: tr("adminReconcileCta"),
                          }),
                    }),
                    res
                      ? (0, J.jsxs)(s.default, {
                          style: { marginTop: b.spacing.md },
                          children: [
                            (0, J.jsx)(i.default, {
                              style: [b.typography.body, { color: c.text, fontWeight: "700" }],
                              children: tr("adminReconcileResult", {
                                scanned: String(res.scanned ?? 0),
                                seated: String(res.seated ?? 0),
                                refunded: String(res.refunded ?? 0),
                                voided: String(res.seats_voided ?? 0),
                              }),
                            }),
                            (0, J.jsx)(i.default, {
                              style: [b.typography.caption, { color: c.textMuted, marginTop: 2 }],
                              children: tr(res.done ? "adminReconcileDone" : "adminReconcileMore"),
                            }),
                          ],
                        })
                      : null,
                    err
                      ? (0, J.jsx)(i.default, {
                          style: [b.typography.caption, { color: c.danger, marginTop: b.spacing.md }],
                          children: err.message,
                        })
                      : null,
                  ],
                }),
                kyc.length
                  ? (0, J.jsxs)(s.default, {
                      style: [D.card, { borderColor: c.border, backgroundColor: c.surface }],
                      children: [
                        (0, J.jsx)(i.default, {
                          style: [b.typography.h3, { color: c.text }],
                          children: tr("adminKycTitle"),
                        }),
                        ...kyc.map((k9) =>
                          (0, J.jsxs)(
                            s.default,
                            {
                              style: [D.row, { borderColor: c.border }],
                              children: [
                                (0, J.jsxs)(s.default, {
                                  style: { flex: 1 },
                                  children: [
                                    (0, J.jsx)(i.default, {
                                      style: [b.typography.body, { color: c.text }],
                                      children: k9.full_name || k9.display_name,
                                    }),
                                    (0, J.jsx)(i.default, {
                                      style: [b.typography.caption, { color: c.textMuted }],
                                      children: k9.id_masked,
                                    }),
                                  ],
                                }),
                                (0, J.jsx)(o.default, {
                                  onPress: () => decide(k9.user_id, !0),
                                  accessibilityRole: "button",
                                  style: [D.chip, { backgroundColor: c.accent }],
                                  children: (0, J.jsx)(i.default, {
                                    style: [b.typography.caption, { color: c.accentInk, fontWeight: "700" }],
                                    children: tr("adminKycApprove"),
                                  }),
                                }),
                                (0, J.jsx)(o.default, {
                                  onPress: () => decide(k9.user_id, !1),
                                  accessibilityRole: "button",
                                  style: [D.chip, { borderWidth: 1, borderColor: c.border }],
                                  children: (0, J.jsx)(i.default, {
                                    style: [b.typography.caption, { color: c.text, fontWeight: "700" }],
                                    children: tr("adminKycReject"),
                                  }),
                                }),
                              ],
                            },
                            k9.user_id,
                          ),
                        ),
                      ],
                    })
                  : null,
                (0, J.jsxs)(s.default, {
                  children: [
                    (0, J.jsx)(i.default, {
                      style: [b.typography.caption, { color: c.textMuted, marginBottom: 6 }],
                      children: tr("adminScreens"),
                    }),
                    ...screens.map(([href, key]) =>
                      (0, J.jsxs)(
                        o.default,
                        {
                          onPress: () => nav.push(href),
                          accessibilityRole: "link",
                          style: [D.row, { borderColor: c.border }],
                          children: [
                            (0, J.jsx)(i.default, {
                              style: [b.typography.body, { color: c.text, flex: 1 }],
                              children: tr(key),
                            }),
                            (0, J.jsx)(P.Ionicons, {
                              name: B.chevronForward(),
                              size: 18,
                              color: c.textMuted,
                            }),
                          ],
                        },
                        href,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          ],
        });
      }));
    var n = _r(d[1]),
      l = t(_r(d[2])),
      o = t(_r(d[3])),
      y = t(_r(d[4])),
      k = t(_r(d[5])),
      i = t(_r(d[6])),
      s = t(_r(d[7])),
      S = _r(d[8]),
      P = _r(d[9]),
      R = _r(d[10]),
      A = _r(d[11]),
      T = _r(d[12]),
      b = _r(d[13]),
      F = _r(d[14]),
      L = _r(d[15]),
      B = _r(d[16]),
      J = _r(d[17]),
      G9 = _r(d[18]);
    const D = k.default.create({
      center: { flex: 1, alignItems: "center", justifyContent: "center" },
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: b.spacing.lg,
        paddingVertical: b.spacing.md,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: k.default.hairlineWidth,
      },
      card: {
        borderRadius: b.radius.lg,
        borderWidth: k.default.hairlineWidth,
        padding: b.spacing.lg,
      },
      cta: {
        borderRadius: b.radius.pill,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: b.spacing.md,
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: k.default.hairlineWidth,
        paddingVertical: b.spacing.md,
      },
      chip: {
        borderRadius: b.radius.pill,
        paddingHorizontal: b.spacing.md,
        paddingVertical: 6,
        marginLeft: b.spacing.sm,
      },
    });
  },
  9006,
  [33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 630, 615, 616, 671, 675, 1171, 13, 9001],
);
