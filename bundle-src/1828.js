__d(
  function (g, r, _i, _a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, x.useAuth)(),
          { colors: N } = (0, y.useTheme)(),
          W = (0, b.useRouter)(),
          M = (0, k.useT)(),
          [$, _] = (0, a.useState)(null),
          [B, S] = (0, a.useState)(!1),
          D = (0, a.useCallback)(async () => {
            if (t)
              try {
                _(await (0, w.fetchFeedAnalytics)(t.id));
              } catch {
                S(!0);
              }
          }, [t]);
        return (
          (0, b.useFocusEffect)(
            (0, a.useCallback)(() => {
              D();
            }, [D]),
          ),
          (0, R.jsxs)(u.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: N.bg },
            children: [
              (0, R.jsxs)(n.default, {
                style: A.header,
                children: [
                  (0, R.jsx)(o.default, {
                    onPress: () => W.back(),
                    accessibilityRole: "button",
                    accessibilityLabel: M("back"),
                    style: [A.iconBtn, { backgroundColor: N.surface, borderColor: N.border }],
                    children: (0, R.jsx)(h.Ionicons, { name: (0, L.chevronBack)(), size: 22, color: N.text }),
                  }),
                  (0, R.jsx)(c.default, {
                    style: [j.typography.h2, { color: N.text, marginHorizontal: j.spacing.md }],
                    children: M("feedAnalyticsTitle"),
                  }),
                ],
              }),
              (0, R.jsx)(i.default, {
                contentContainerStyle: { padding: j.spacing.lg, paddingBottom: j.spacing.xxxl },
                children: B
                  ? (0, R.jsx)(p.EmptyState, {
                      icon: "lock-closed-outline",
                      title: M("accessDenied"),
                      body: M("feedAnalyticsTitle"),
                    })
                  : null === $
                    ? (0, R.jsx)(l.default, { color: N.accentText })
                    : (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsxs)(n.default, {
                            style: A.grid,
                            children: [
                              (0, R.jsx)(T, {
                                label: M("ctrLabel"),
                                value: `${(0, v.formatNumber)($.ctr)}%`,
                                colors: N,
                              }),
                              (0, R.jsx)(T, {
                                label: M("joinConvLabel"),
                                value: `${(0, v.formatNumber)($.join_conversion)}%`,
                                colors: N,
                              }),
                              (0, R.jsx)(T, {
                                label: M("accuracyLabel"),
                                value: `${(0, v.formatNumber)($.accuracy)}%`,
                                colors: N,
                              }),
                              (0, R.jsx)(T, {
                                label: M("cancelRateLabel"),
                                value: `${(0, v.formatNumber)($.cancel_rate)}%`,
                                colors: N,
                              }),
                              (0, R.jsx)(T, {
                                label: M("retentionLabel"),
                                value: `${(0, v.formatNumber)($.retention)}%`,
                                colors: N,
                              }),
                              (0, R.jsx)(T, {
                                label: M("impressionsLabel"),
                                value: (0, v.formatNumber)($.impressions),
                                colors: N,
                              }),
                            ],
                          }),
                          (0, R.jsx)(c.default, {
                            style: [
                              j.typography.h3,
                              { color: N.text, marginTop: j.spacing.xl, marginBottom: j.spacing.sm },
                            ],
                            children: M("weightsLabel"),
                          }),
                          (0, R.jsx)(f.Card, {
                            padding: "md",
                            children: $.weights.map((t, a) =>
                              (0, R.jsxs)(
                                n.default,
                                {
                                  style: [
                                    A.wRow,
                                    {
                                      borderTopColor: N.border,
                                      borderTopWidth: 0 === a ? 0 : s.default.hairlineWidth,
                                    },
                                  ],
                                  children: [
                                    (0, R.jsx)(c.default, {
                                      style: [j.typography.small, { color: N.text, flex: 1 }],
                                      children: M((0, C.reasonKey)(t.factor)),
                                    }),
                                    (0, R.jsx)(n.default, {
                                      style: [A.bar, { backgroundColor: N.surfaceAlt }],
                                      children: (0, R.jsx)(n.default, {
                                        style: {
                                          height: "100%",
                                          width: `${Math.min(100, 250 * t.weight)}%`,
                                          backgroundColor: N.accent,
                                          borderRadius: 3,
                                        },
                                      }),
                                    }),
                                    (0, R.jsx)(c.default, {
                                      style: [
                                        j.typography.caption,
                                        { color: N.textMuted, width: 36, textAlign: "right" },
                                      ],
                                      children: t.weight.toFixed(2),
                                    }),
                                  ],
                                },
                                t.factor,
                              ),
                            ),
                          }),
                          (0, R.jsx)(c.default, {
                            style: [j.typography.caption, { color: N.textMuted, marginTop: j.spacing.sm }],
                            children: M("mediaModeledNote"),
                          }),
                        ],
                      }),
              }),
            ],
          })
        );
      }));
    var a = r(d[1]),
      l = t(r(d[2])),
      o = t(r(d[3])),
      i = t(r(d[4])),
      s = t(r(d[5])),
      c = t(r(d[6])),
      n = t(r(d[7])),
      u = r(d[8]),
      h = r(d[9]),
      b = r(d[10]),
      f = r(d[11]),
      p = r(d[12]),
      x = r(d[13]),
      y = r(d[14]),
      j = r(d[15]),
      w = r(d[16]),
      v = r(d[17]),
      C = r(d[18]),
      k = r(d[19]),
      L = r(d[20]),
      R = r(d[21]);
    const T = ({ label: t, value: a, colors: l }) =>
        (0, R.jsxs)(n.default, {
          style: [A.metric, { backgroundColor: l.surface, borderColor: l.border }],
          children: [
            (0, R.jsx)(c.default, { style: [j.typography.h2, { color: l.text }], children: a }),
            (0, R.jsx)(c.default, {
              style: [j.typography.caption, { color: l.textMuted }],
              numberOfLines: 2,
              children: t,
            }),
          ],
        }),
      A = s.default.create({
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
        metric: {
          width: "48%",
          borderRadius: j.radius.md,
          borderWidth: s.default.hairlineWidth,
          padding: j.spacing.md,
        },
        wRow: {
          flexDirection: "row",
          alignItems: "center",
          gap: j.spacing.sm,
          paddingVertical: j.spacing.sm,
        },
        bar: { flex: 1, height: 6, borderRadius: 3, overflow: "hidden" },
      });
  },
  1828,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1627, 630, 615, 616, 671, 1311, 652, 675, 1171,
    13,
  ],
);
