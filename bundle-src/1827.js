__d(
  function (g, _r, i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, b.useAuth)(),
          { colors: o } = (0, j.useTheme)(),
          s = (0, x.useRouter)(),
          h = (0, C.useT)(),
          [S, I] = (0, l.useState)(null),
          [N, K] = (0, l.useState)(null),
          [R, z] = (0, l.useState)(!0),
          [F, L] = (0, l.useState)(null),
          [rsn, setRsn] = (0, l.useState)(""),
          [busy, setBusy] = (0, l.useState)(!1),
          gate = (0, G9.useRoleGate)(["admin"]),
          M = (0, l.useCallback)(async () => {
            if (t) {
              L(null);
              try {
                const [e, a] = await Promise.all([(0, k.fetchDemandWeights)(t.id), (0, k.fetchDemandModelStats)(t.id)]);
                (I(e), K(a));
              } catch (e) {
                L(e);
              }
              z(!1);
            }
          }, [t]);
        (0, x.useFocusEffect)(
          (0, l.useCallback)(() => {
            M();
          }, [M]),
        );
        const H = async (l) => {
          if (!t || busy) return;
          if (rsn.trim().length < 3) return s9.default.alert(h("error"), h("changeReasonRequired"));
          setBusy(!0);
          try {
            (I(await (0, k.setDemandWeights)(t.id, l, rsn.trim())), K(await (0, k.fetchDemandModelStats)(t.id).catch(() => N)));
          } catch (e) {
            s9.default.alert(h("error"), (0, G9.classifyError)(e).message || h("error"));
          } finally {
            setBusy(!1);
          }
        };
        if (gate.ready && !gate.allowed) return (0, B.jsx)(G9.GateScreen, { kind: "denied", onBack: () => s.back() });
        if (R || !gate.ready)
          return (0, B.jsx)(y.SafeAreaView, {
            style: [D.center, { backgroundColor: o.bg }],
            children: (0, B.jsx)(r.default, { color: o.accentText }),
          });
        if (F || !S)
          return (0, B.jsxs)(y.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: o.bg },
            children: [
              (0, B.jsx)(P, { colors: o, title: h("adminDemandTitle"), onBack: () => s.back() }),
              (0, B.jsx)(u.default, {
                style: { padding: w.spacing.lg },
                children: (0, B.jsx)(p.EmptyState, {
                  icon: "lock-closed-outline",
                  title: h("organizerGateTitle"),
                  body: h("adminPanel"),
                }),
              }),
            ],
          });
        return (0, B.jsxs)(y.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: o.bg },
          children: [
            (0, B.jsx)(P, { colors: o, title: h("adminDemandTitle"), onBack: () => s.back() }),
            (0, B.jsxs)(n.default, {
              contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
              children: [
                (0, B.jsx)(i9.Input, {
                  label: h("changeReasonLabel"),
                  placeholder: h("changeReasonPlaceholder"),
                  value: rsn,
                  onChangeText: setRsn,
                  maxLength: 200,
                }),
                N &&
                  (0, B.jsxs)(f.Card, {
                    style: { marginBottom: w.spacing.lg },
                    children: [
                      (0, B.jsx)(c.default, {
                        style: [w.typography.h3, { color: o.text, marginBottom: w.spacing.sm }],
                        children: h("demandPerfTitle"),
                      }),
                      (0, B.jsxs)(u.default, {
                        style: D.grid,
                        children: [
                          (0, B.jsx)(W, {
                            label: h("perfAccuracy"),
                            value: `${(0, v.formatNumber)(N.fillAccuracyPct)}%`,
                            colors: o,
                            accent: !0,
                          }),
                          (0, B.jsx)(W, {
                            label: h("perfEvaluated"),
                            value: (0, v.formatNumber)(N.evaluated),
                            colors: o,
                          }),
                          (0, B.jsx)(W, {
                            label: h("perfAvgPredicted"),
                            value: `${(0, v.formatNumber)(N.avgPredictedFill)}%`,
                            colors: o,
                          }),
                          (0, B.jsx)(W, {
                            label: h("perfAvgActual"),
                            value: `${(0, v.formatNumber)(N.avgActualFill)}%`,
                            colors: o,
                          }),
                          (0, B.jsx)(W, {
                            label: h("perfPredictions"),
                            value: (0, v.formatNumber)(N.predictions),
                            colors: o,
                          }),
                          (0, B.jsx)(W, {
                            label: h("perfAcceptRate"),
                            value: `${(0, v.formatNumber)(N.acceptRatePct)}%`,
                            colors: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, B.jsx)(c.default, {
                  style: [w.typography.h3, { color: o.text, marginBottom: w.spacing.sm }],
                  children: h("demandWeightsTitle"),
                }),
                T.map((t) => {
                  return (0, B.jsx)(
                    f.Card,
                    {
                      style: { marginBottom: w.spacing.sm },
                      children: (0, B.jsxs)(u.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          (0, B.jsx)(c.default, {
                            style: [w.typography.small, { color: o.text, flex: 1 }],
                            children: h(t.labelKey),
                          }),
                          (0, B.jsx)(A, {
                            value:
                              ((l = t.key),
                              "timeToFillHours" === l
                                ? (0, v.formatNumber)(S[l])
                                : (0, v.formatNumber)(Math.round(100 * S[l]) / 100)),
                            onDec: () => H({ [t.key]: Math.max(t.min, S[t.key] - t.step) }),
                            onInc: () => H({ [t.key]: Math.min(t.max, S[t.key] + t.step) }),
                            disabled: busy || rsn.trim().length < 3,
                            colors: o,
                          }),
                        ],
                      }),
                    },
                    t.key,
                  );
                  var l;
                }),
              ],
            }),
          ],
        });
      }));
    var l = _r(d[1]),
      r = t(_r(d[2])),
      o = t(_r(d[3])),
      n = t(_r(d[4])),
      s = t(_r(d[5])),
      c = t(_r(d[6])),
      u = t(_r(d[7])),
      y = _r(d[8]),
      h = _r(d[9]),
      x = _r(d[10]),
      f = _r(d[11]),
      p = _r(d[12]),
      b = _r(d[13]),
      j = _r(d[14]),
      w = _r(d[15]),
      k = _r(d[16]),
      v = _r(d[17]),
      C = _r(d[18]),
      S = _r(d[19]),
      B = _r(d[20]),
      G9 = _r(d[21]),
      i9 = _r(d[22]),
      s9 = _r(d[23]);
    const T = [
      { key: "cancelOrganizerHistory", labelKey: "wCancelOrganizer", step: 0.05, min: 0, max: 1 },
      { key: "cancelLowFill", labelKey: "wCancelLowFill", step: 0.05, min: 0, max: 1 },
      { key: "cancelShortLead", labelKey: "wCancelShortLead", step: 0.05, min: 0, max: 1 },
      { key: "cancelPriceAggressive", labelKey: "wCancelPrice", step: 0.05, min: 0, max: 1 },
      { key: "noShowReliability", labelKey: "wNoShowReliability", step: 0.05, min: 0, max: 1 },
      { key: "noShowWeather", labelKey: "wNoShowWeather", step: 0.05, min: 0, max: 1 },
      { key: "noShowLateSlot", labelKey: "wNoShowLate", step: 0.05, min: 0, max: 1 },
      { key: "timeToFillHours", labelKey: "wTimeToFill", step: 1, min: 1, max: 72 },
    ];
    const A = ({ value: t, onDec: l, onInc: r, colors: n, disabled: dz }) =>
        (0, B.jsxs)(u.default, {
          style: { flexDirection: "row", alignItems: "center", gap: w.spacing.sm },
          children: [
            (0, B.jsx)(o.default, {
              onPress: l,
              disabled: dz,
              accessibilityRole: "button",
              accessibilityLabel: "decrease",
              accessibilityState: { disabled: !!dz },
              style: [D.stepBtn, { borderColor: n.border, opacity: dz ? 0.4 : 1 }],
              children: (0, B.jsx)(h.Ionicons, { name: "remove", size: 18, color: n.text }),
            }),
            (0, B.jsx)(c.default, {
              style: [w.typography.bodyStrong, { color: n.text, minWidth: 40, textAlign: "center" }],
              children: t,
            }),
            (0, B.jsx)(o.default, {
              onPress: r,
              disabled: dz,
              accessibilityRole: "button",
              accessibilityLabel: "increase",
              accessibilityState: { disabled: !!dz },
              style: [D.stepBtn, { borderColor: n.border, opacity: dz ? 0.4 : 1 }],
              children: (0, B.jsx)(h.Ionicons, { name: "add", size: 18, color: n.text }),
            }),
          ],
        }),
      P = ({ colors: t, title: l, onBack: r }) => {
        const n = (0, C.useT)();
        return (0, B.jsxs)(u.default, {
          style: D.header,
          children: [
            (0, B.jsx)(o.default, {
              onPress: r,
              accessibilityRole: "button",
              accessibilityLabel: n("back"),
              style: [D.iconBtn, { backgroundColor: t.surface, borderColor: t.border }],
              children: (0, B.jsx)(h.Ionicons, { name: (0, S.chevronBack)(), size: 22, color: t.text }),
            }),
            (0, B.jsx)(c.default, {
              style: [w.typography.h2, { color: t.text, flex: 1, marginHorizontal: w.spacing.md }],
              children: l,
            }),
          ],
        });
      },
      W = ({ label: t, value: l, colors: r, accent: o }) =>
        (0, B.jsxs)(u.default, {
          style: [
            D.tile,
            { backgroundColor: o ? r.accentMuted : r.surface, borderColor: o ? r.accent : r.border },
          ],
          children: [
            (0, B.jsx)(c.default, {
              style: [w.typography.h3, { color: o ? r.accentText : r.text }],
              children: l,
            }),
            (0, B.jsx)(c.default, { style: [w.typography.caption, { color: r.textMuted }], children: t }),
          ],
        }),
      D = s.default.create({
        center: { flex: 1, alignItems: "center", justifyContent: "center" },
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
          borderWidth: s.default.hairlineWidth,
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: w.radius.md,
          borderWidth: s.default.hairlineWidth,
          padding: w.spacing.md,
          minHeight: 66,
          justifyContent: "center",
        },
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
  1827,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1627, 630, 615, 616, 671, 1311, 675, 1171, 13, 9001, 625, 445,
  ],
);
