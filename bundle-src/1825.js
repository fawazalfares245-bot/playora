__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, k.useAuth)(),
          { colors: o } = (0, C.useTheme)(),
          c = (0, p.useRouter)(),
          h = (0, S.useT)(),
          [B, R] = (0, l.useState)(null),
          [W, N] = (0, l.useState)(null),
          [M, F] = (0, l.useState)(!0),
          [H, V] = (0, l.useState)(!1),
          E = (0, l.useCallback)(async () => {
            if (t) {
              try {
                (R(await (0, I.fetchConciergeRules)(t.id)), N(await (0, I.fetchConciergeStats)(t.id)));
              } catch {
                V(!0);
              }
              F(!1);
            }
          }, [t]);
        (0, p.useFocusEffect)(
          (0, l.useCallback)(() => {
            E();
          }, [E]),
        );
        const L = async (l) => {
          if (!t) return;
          const n = await (0, I.setConciergeRules)(t.id, l);
          R(n);
        };
        if (M)
          return (0, A.jsx)(f.SafeAreaView, {
            style: [D.center, { backgroundColor: o.bg }],
            children: (0, A.jsx)(n.default, { color: o.accentText }),
          });
        if (H || !B)
          return (0, A.jsxs)(f.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: o.bg },
            children: [
              (0, A.jsx)(K, { colors: o, title: h("adminConciergeTitle"), onBack: () => c.back() }),
              (0, A.jsx)(x.default, {
                style: { padding: v.spacing.lg },
                children: (0, A.jsx)(j.EmptyState, {
                  icon: "lock-closed-outline",
                  title: h("organizerGateTitle"),
                  body: h("adminPanel"),
                }),
              }),
            ],
          });
        return (0, A.jsxs)(f.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: o.bg },
          children: [
            (0, A.jsx)(K, { colors: o, title: h("adminConciergeTitle"), onBack: () => c.back() }),
            (0, A.jsxs)(s.default, {
              contentContainerStyle: { padding: v.spacing.lg, paddingBottom: v.spacing.xxxl },
              children: [
                W &&
                  (0, A.jsxs)(b.Card, {
                    style: { marginBottom: v.spacing.lg },
                    children: [
                      (0, A.jsx)(y.default, {
                        style: [v.typography.h3, { color: o.text, marginBottom: v.spacing.sm }],
                        children: h("conciergeLearning"),
                      }),
                      (0, A.jsxs)(x.default, {
                        style: D.grid,
                        children: [
                          (0, A.jsx)(z, {
                            label: h("statPlans"),
                            value: (0, w.formatNumber)(W.plansGenerated),
                            colors: o,
                          }),
                          (0, A.jsx)(z, {
                            label: h("statAutoInvites"),
                            value: (0, w.formatNumber)(W.autoInvites),
                            colors: o,
                          }),
                          (0, A.jsx)(z, {
                            label: h("statAccuracy"),
                            value: `${(0, w.formatNumber)(W.accuracyPct)}%`,
                            colors: o,
                            accent: !0,
                          }),
                          (0, A.jsx)(z, {
                            label: h("statAvgPredicted"),
                            value: `${(0, w.formatNumber)(W.avgPredictedFill)}%`,
                            colors: o,
                          }),
                          (0, A.jsx)(z, {
                            label: h("statAvgActual"),
                            value: `${(0, w.formatNumber)(W.avgActualFill)}%`,
                            colors: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, A.jsx)(b.Card, {
                  style: { marginBottom: v.spacing.md },
                  children: (0, A.jsxs)(x.default, {
                    style: { flexDirection: "row", alignItems: "center" },
                    children: [
                      (0, A.jsx)(y.default, {
                        style: [v.typography.bodyStrong, { color: o.text, flex: 1 }],
                        children: h("ruleAutoInvite"),
                      }),
                      (0, A.jsx)(u.default, {
                        value: B.autoInvite,
                        onValueChange: (t) => L({ autoInvite: t }),
                      }),
                    ],
                  }),
                }),
                T.map((t) =>
                  (0, A.jsx)(
                    b.Card,
                    {
                      style: { marginBottom: v.spacing.sm },
                      children: (0, A.jsxs)(x.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          (0, A.jsx)(y.default, {
                            style: [v.typography.small, { color: o.text, flex: 1 }],
                            children: h(t.labelKey),
                          }),
                          (0, A.jsx)(P, {
                            value: B[t.key],
                            onDec: () => L({ [t.key]: Math.max(t.min, B[t.key] - t.step) }),
                            onInc: () => L({ [t.key]: Math.min(t.max, B[t.key] + t.step) }),
                            colors: o,
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
    var l = r(d[1]),
      n = t(r(d[2])),
      o = t(r(d[3])),
      s = t(r(d[4])),
      c = t(r(d[5])),
      u = t(r(d[6])),
      y = t(r(d[7])),
      x = t(r(d[8])),
      f = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      b = r(d[12]),
      j = r(d[13]),
      k = r(d[14]),
      C = r(d[15]),
      v = r(d[16]),
      I = r(d[17]),
      w = r(d[18]),
      S = r(d[19]),
      B = r(d[20]),
      A = r(d[21]);
    const T = [
      { key: "autoInviteCount", labelKey: "ruleAutoInviteCount", min: 0, max: 20, step: 1 },
      { key: "minFillToPublish", labelKey: "ruleMinFill", min: 0, max: 100, step: 5 },
      { key: "replacementsCount", labelKey: "ruleReplacements", min: 1, max: 12, step: 1 },
      { key: "skillTolerance", labelKey: "ruleSkillTolerance", min: 0, max: 5, step: 0.5 },
      { key: "notifyLeadHours", labelKey: "ruleNotifyLead", min: 1, max: 72, step: 1 },
      { key: "horizonDays", labelKey: "ruleHorizon", min: 3, max: 30, step: 1 },
      { key: "quietStart", labelKey: "ruleQuietStart", min: 0, max: 23, step: 1 },
      { key: "quietEnd", labelKey: "ruleQuietEnd", min: 0, max: 23, step: 1 },
    ];
    const P = ({ value: t, onDec: l, onInc: n, colors: s }) =>
        (0, A.jsxs)(x.default, {
          style: { flexDirection: "row", alignItems: "center", gap: v.spacing.sm },
          children: [
            (0, A.jsx)(o.default, {
              onPress: l,
              style: [D.stepBtn, { borderColor: s.border }],
              children: (0, A.jsx)(h.Ionicons, { name: "remove", size: 18, color: s.text }),
            }),
            (0, A.jsx)(y.default, {
              style: [v.typography.bodyStrong, { color: s.text, minWidth: 36, textAlign: "center" }],
              children: (0, w.formatNumber)(t),
            }),
            (0, A.jsx)(o.default, {
              onPress: n,
              style: [D.stepBtn, { borderColor: s.border }],
              children: (0, A.jsx)(h.Ionicons, { name: "add", size: 18, color: s.text }),
            }),
          ],
        }),
      K = ({ colors: t, title: l, onBack: n }) => {
        const s = (0, S.useT)();
        return (0, A.jsxs)(x.default, {
          style: D.header,
          children: [
            (0, A.jsx)(o.default, {
              onPress: n,
              accessibilityRole: "button",
              accessibilityLabel: s("back"),
              style: [D.iconBtn, { backgroundColor: t.surface, borderColor: t.border }],
              children: (0, A.jsx)(h.Ionicons, { name: (0, B.chevronBack)(), size: 22, color: t.text }),
            }),
            (0, A.jsx)(y.default, {
              style: [v.typography.h2, { color: t.text, flex: 1, marginHorizontal: v.spacing.md }],
              children: l,
            }),
          ],
        });
      },
      z = ({ label: t, value: l, colors: n, accent: o }) =>
        (0, A.jsxs)(x.default, {
          style: [
            D.tile,
            { backgroundColor: o ? n.accentMuted : n.surface, borderColor: o ? n.accent : n.border },
          ],
          children: [
            (0, A.jsx)(y.default, {
              style: [v.typography.h3, { color: o ? n.accentText : n.text }],
              children: l,
            }),
            (0, A.jsx)(y.default, { style: [v.typography.caption, { color: n.textMuted }], children: t }),
          ],
        }),
      D = c.default.create({
        center: { flex: 1, alignItems: "center", justifyContent: "center" },
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: v.spacing.lg,
          paddingVertical: v.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: c.default.hairlineWidth,
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: v.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: v.radius.md,
          borderWidth: c.default.hairlineWidth,
          padding: v.spacing.md,
          minHeight: 66,
          justifyContent: "center",
        },
        stepBtn: {
          width: 34,
          height: 34,
          borderRadius: 10,
          borderWidth: c.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
      });
  },
  1825,
  [
    33, 15, 461, 369, 281, 158, 477, 146, 273, 381, 1086, 20, 1623, 1627, 630, 615, 616, 671, 1311, 675, 1171,
    13,
  ],
);
