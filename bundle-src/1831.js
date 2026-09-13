__d(
  function (g, _r, _i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, x.useAuth)(),
          { colors: i } = (0, b.useTheme)(),
          s = (0, f.useRouter)(),
          y = (0, C.useT)(),
          [v, W] = (0, l.useState)(null),
          [F, K] = (0, l.useState)(null),
          [M, P] = (0, l.useState)(!0),
          [R, A] = (0, l.useState)(null),
          [rsn, setRsn] = (0, l.useState)(""),
          [busy, setBusy] = (0, l.useState)(!1),
          gate = (0, G9.useRoleGate)(["admin"]),
          D = (0, l.useCallback)(async () => {
            if (t) {
              A(null);
              try {
                (W(await (0, k.fetchOptimizerDashboard)(t.id)), K(await (0, k.fetchOptimizerWeights)(t.id)));
              } catch {
                A(!0);
              }
              P(!1);
            }
          }, [t]);
        (0, f.useFocusEffect)(
          (0, l.useCallback)(() => {
            D();
          }, [D]),
        );
        const L = async (l) => {
          if (!t || busy) return;
          if (rsn.trim().length < 3) return s9.default.alert(h("error"), h("changeReasonRequired"));
          setBusy(!0);
          try {
            // Re-fetch the dashboard so feature importance matches the saved weights.
            (K(await (0, k.setOptimizerWeights)(t.id, l, rsn.trim())), await D());
          } catch (e) {
            s9.default.alert(h("error"), (0, G9.classifyError)(e).message || h("error"));
          } finally {
            setBusy(!1);
          }
        };
        if (gate.ready && !gate.allowed) return (0, B.jsx)(G9.GateScreen, { kind: "denied", onBack: () => s.back() });
        if (M || !gate.ready)
          return (0, B.jsx)(u.SafeAreaView, {
            style: [N.center, { backgroundColor: i.bg }],
            children: (0, B.jsx)(r.default, { color: i.accentText }),
          });
        if (R || !v || !F)
          return (0, B.jsxs)(u.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: i.bg },
            children: [
              (0, B.jsx)(I, { colors: i, title: y("adminOptimizerTitle"), onBack: () => s.back() }),
              (0, B.jsx)(n.default, {
                style: { padding: j.spacing.lg },
                children: (0, B.jsx)(p.EmptyState, {
                  icon: "lock-closed-outline",
                  title: y("organizerGateTitle"),
                  body: y("adminPanel"),
                }),
              }),
            ],
          });
        return (0, B.jsxs)(u.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: i.bg },
          children: [
            (0, B.jsx)(I, { colors: i, title: y("adminOptimizerTitle"), onBack: () => s.back() }),
            (0, B.jsxs)(o.default, {
              contentContainerStyle: { padding: j.spacing.lg, paddingBottom: j.spacing.xxxl },
              children: [
                (0, B.jsx)(i9.Input, {
                  label: y("changeReasonLabel"),
                  placeholder: y("changeReasonPlaceholder"),
                  value: rsn,
                  onChangeText: setRsn,
                  maxLength: 200,
                }),
                (0, B.jsxs)(h.Card, {
                  style: { marginBottom: j.spacing.lg },
                  children: [
                    (0, B.jsx)(c.default, {
                      style: [j.typography.h3, { color: i.text, marginBottom: j.spacing.sm }],
                      children: y("optimizerPerfTitle"),
                    }),
                    (0, B.jsxs)(n.default, {
                      style: N.grid,
                      children: [
                        (0, B.jsx)(z, {
                          label: y("accuracyLabel"),
                          value: `${(0, w.formatNumber)(v.prediction_accuracy_pct)}%`,
                          colors: i,
                          accent: !0,
                        }),
                        (0, B.jsx)(z, {
                          label: y("perfEvaluated"),
                          value: (0, w.formatNumber)(v.evaluated),
                          colors: i,
                        }),
                        (0, B.jsx)(z, {
                          label: y("perfAvgPredicted"),
                          value: `${(0, w.formatNumber)(v.avg_predicted_fill)}%`,
                          colors: i,
                        }),
                        (0, B.jsx)(z, {
                          label: y("perfAvgActual"),
                          value: `${(0, w.formatNumber)(v.avg_actual_fill)}%`,
                          colors: i,
                        }),
                        (0, B.jsx)(z, {
                          label: y("perfPredictions"),
                          value: (0, w.formatNumber)(v.decisions),
                          colors: i,
                        }),
                        (0, B.jsx)(z, {
                          label: y("perfAcceptRate"),
                          value: `${(0, w.formatNumber)(v.accept_rate_pct)}%`,
                          colors: i,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, B.jsxs)(h.Card, {
                  style: { marginBottom: j.spacing.lg },
                  children: [
                    (0, B.jsx)(c.default, {
                      style: [j.typography.h3, { color: i.text, marginBottom: j.spacing.sm }],
                      children: y("featureImportanceTitle"),
                    }),
                    v.feature_importance.map((t) =>
                      (0, B.jsxs)(
                        n.default,
                        {
                          style: { marginBottom: j.spacing.sm },
                          children: [
                            (0, B.jsxs)(n.default, {
                              style: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 4,
                              },
                              children: [
                                (0, B.jsx)(c.default, {
                                  style: [j.typography.small, { color: i.text }],
                                  children: y(t.key),
                                }),
                                (0, B.jsxs)(c.default, {
                                  style: [j.typography.smallStrong, { color: i.text }],
                                  children: [(0, w.formatNumber)(t.pct), "%"],
                                }),
                              ],
                            }),
                            (0, B.jsx)(n.default, {
                              style: [N.track, { backgroundColor: i.surfaceAlt }],
                              children: (0, B.jsx)(n.default, {
                                style: [
                                  N.fill,
                                  { width: `${Math.min(100, t.pct)}%`, backgroundColor: i.accent },
                                ],
                              }),
                            }),
                          ],
                        },
                        t.key,
                      ),
                    ),
                  ],
                }),
                (0, B.jsxs)(h.Card, {
                  style: { marginBottom: j.spacing.lg },
                  children: [
                    (0, B.jsx)(c.default, {
                      style: [j.typography.h3, { color: i.text, marginBottom: j.spacing.sm }],
                      children: y("demandTrendTitle"),
                    }),
                    (0, B.jsx)(T, { data: v.demand_trend, colors: i, t: y }),
                    (0, B.jsx)(n.default, { style: { height: j.spacing.md } }),
                    (0, B.jsx)(c.default, {
                      style: [j.typography.h3, { color: i.text, marginBottom: j.spacing.sm }],
                      children: y("revenueForecastTitle"),
                    }),
                    (0, B.jsx)(T, {
                      data: v.revenue_forecast,
                      colors: i,
                      t: y,
                      fmt: (t) => (0, w.formatAmount)(t),
                    }),
                    (0, B.jsx)(n.default, { style: { height: j.spacing.md } }),
                    (0, B.jsx)(c.default, {
                      style: [j.typography.h3, { color: i.text, marginBottom: j.spacing.sm }],
                      children: y("capacityForecastTitle"),
                    }),
                    (0, B.jsx)(T, {
                      data: v.capacity_forecast,
                      colors: i,
                      t: y,
                      fmt: (t) => `${(0, w.formatNumber)(t)}%`,
                    }),
                  ],
                }),
                (0, B.jsx)(c.default, {
                  style: [j.typography.h3, { color: i.text, marginBottom: j.spacing.sm }],
                  children: y("optimizerWeightsTitle"),
                }),
                S.map((t) =>
                  (0, B.jsx)(
                    h.Card,
                    {
                      style: { marginBottom: j.spacing.sm },
                      children: (0, B.jsxs)(n.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          (0, B.jsx)(c.default, {
                            style: [j.typography.small, { color: i.text, flex: 1 }],
                            children: y(t.labelKey),
                          }),
                          (0, B.jsx)(_, {
                            value: (0, w.formatNumber)(Math.round(100 * F[t.key]) / 100),
                            onDec: () => L({ [t.key]: Math.max(0, F[t.key] - 0.05) }),
                            onInc: () => L({ [t.key]: Math.min(1, F[t.key] + 0.05) }),
                            disabled: busy || rsn.trim().length < 3,
                            colors: i,
                          }),
                        ],
                      }),
                    },
                    t.key,
                  ),
                ),
              ],
            }),
          ],
        });
      }));
    var l = _r(d[1]),
      r = t(_r(d[2])),
      i = t(_r(d[3])),
      o = t(_r(d[4])),
      s = t(_r(d[5])),
      c = t(_r(d[6])),
      n = t(_r(d[7])),
      u = _r(d[8]),
      y = _r(d[9]),
      f = _r(d[10]),
      h = _r(d[11]),
      p = _r(d[12]),
      x = _r(d[13]),
      b = _r(d[14]),
      j = _r(d[15]),
      k = _r(d[16]),
      w = _r(d[17]),
      C = _r(d[18]),
      v = _r(d[19]),
      B = _r(d[20]),
      G9 = _r(d[21]),
      i9 = _r(d[22]),
      s9 = _r(d[23]);
    const S = [
      { key: "successFill", labelKey: "fiFill" },
      { key: "successLowCancel", labelKey: "fiLowCancel" },
      { key: "successLowNoShow", labelKey: "fiLowNoShow" },
      { key: "successSatisfaction", labelKey: "fiSatisfaction" },
      { key: "satSkillFit", labelKey: "fiSkillFit" },
      { key: "satPriceFairness", labelKey: "fiPriceFairness" },
      { key: "satVenueQuality", labelKey: "fiVenueQuality" },
      { key: "satFill", labelKey: "fiFillSignal" },
      { key: "satWeather", labelKey: "fiWeather" },
      { key: "satReliability", labelKey: "fiReliability" },
    ];
    const T = ({ data: t, colors: l, t: r, fmt: i }) => {
        const o = Math.max(1, ...t);
        return (0, B.jsx)(n.default, {
          style: { flexDirection: "row", alignItems: "flex-end", gap: j.spacing.sm, height: 96 },
          children: t.map((t, s) =>
            (0, B.jsxs)(
              n.default,
              {
                style: { flex: 1, alignItems: "center" },
                children: [
                  (0, B.jsx)(c.default, {
                    style: [j.typography.caption, { color: l.text, marginBottom: 2 }],
                    numberOfLines: 1,
                    children: i ? i(t) : (0, w.formatNumber)(t),
                  }),
                  (0, B.jsx)(n.default, {
                    style: {
                      width: "70%",
                      height: Math.max(3, Math.round((t / o) * 64)),
                      borderRadius: 4,
                      backgroundColor: l.accent,
                    },
                  }),
                  (0, B.jsx)(c.default, {
                    style: [j.typography.caption, { color: l.textMuted, marginTop: 4 }],
                    children: r("wkLabel", { n: (0, w.formatNumber)(s + 1) }),
                  }),
                ],
              },
              s,
            ),
          ),
        });
      },
      _ = ({ value: t, onDec: l, onInc: r, colors: o, disabled: dz }) =>
        (0, B.jsxs)(n.default, {
          style: { flexDirection: "row", alignItems: "center", gap: j.spacing.sm },
          children: [
            (0, B.jsx)(i.default, {
              onPress: l,
              disabled: dz,
              accessibilityRole: "button",
              accessibilityLabel: "decrease",
              accessibilityState: { disabled: !!dz },
              style: [N.stepBtn, { borderColor: o.border, opacity: dz ? 0.4 : 1 }],
              children: (0, B.jsx)(y.Ionicons, { name: "remove", size: 18, color: o.text }),
            }),
            (0, B.jsx)(c.default, {
              style: [j.typography.bodyStrong, { color: o.text, minWidth: 40, textAlign: "center" }],
              children: t,
            }),
            (0, B.jsx)(i.default, {
              onPress: r,
              disabled: dz,
              accessibilityRole: "button",
              accessibilityLabel: "increase",
              accessibilityState: { disabled: !!dz },
              style: [N.stepBtn, { borderColor: o.border, opacity: dz ? 0.4 : 1 }],
              children: (0, B.jsx)(y.Ionicons, { name: "add", size: 18, color: o.text }),
            }),
          ],
        }),
      I = ({ colors: t, title: l, onBack: r }) => {
        const o = (0, C.useT)();
        return (0, B.jsxs)(n.default, {
          style: N.header,
          children: [
            (0, B.jsx)(i.default, {
              onPress: r,
              accessibilityRole: "button",
              accessibilityLabel: o("back"),
              style: [N.iconBtn, { backgroundColor: t.surface, borderColor: t.border }],
              children: (0, B.jsx)(y.Ionicons, { name: (0, v.chevronBack)(), size: 22, color: t.text }),
            }),
            (0, B.jsx)(c.default, {
              style: [j.typography.h2, { color: t.text, flex: 1, marginHorizontal: j.spacing.md }],
              children: l,
            }),
          ],
        });
      },
      z = ({ label: t, value: l, colors: r, accent: i }) =>
        (0, B.jsxs)(n.default, {
          style: [
            N.tile,
            { backgroundColor: i ? r.accentMuted : r.surface, borderColor: i ? r.accent : r.border },
          ],
          children: [
            (0, B.jsx)(c.default, {
              style: [j.typography.h3, { color: i ? r.accentText : r.text }],
              children: l,
            }),
            (0, B.jsx)(c.default, { style: [j.typography.caption, { color: r.textMuted }], children: t }),
          ],
        }),
      N = s.default.create({
        center: { flex: 1, alignItems: "center", justifyContent: "center" },
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: j.spacing.lg,
          paddingVertical: j.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: s.default.hairlineWidth,
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: j.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: j.radius.md,
          borderWidth: s.default.hairlineWidth,
          padding: j.spacing.md,
          minHeight: 66,
          justifyContent: "center",
        },
        track: { height: 8, borderRadius: 4, overflow: "hidden" },
        fill: { height: 8, borderRadius: 4 },
        stepBtn: {
          width: 34,
          height: 34,
          borderRadius: 10,
          borderWidth: s.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
      });
  },
  1831,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1627, 630, 615, 616, 671, 1311, 675, 1171, 13, 9001, 625, 445,
  ],
);
