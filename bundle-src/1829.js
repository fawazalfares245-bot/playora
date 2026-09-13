__d(
  function (g, _r, i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, j.useAuth)(),
          { colors: s } = (0, b.useTheme)(),
          k = (0, f.useRouter)(),
          A = (0, B.useT)(),
          [E, z] = (0, l.useState)(null);
        return (
          (0, f.useFocusEffect)(
            (0, l.useCallback)(() => {
              t &&
                (0, S.fetchFunnelStats)(t.id)
                  .then(z)
                  .catch(() => z([]));
            }, [t]),
          ),
          (0, M.jsxs)(h.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: s.bg },
            children: [
              (0, M.jsxs)(u.default, {
                style: T.header,
                children: [
                  (0, M.jsx)(r.default, {
                    onPress: () => k.back(),
                    accessibilityRole: "button",
                    accessibilityLabel: A("back"),
                    style: [T.iconBtn, { backgroundColor: s.surface, borderColor: s.border }],
                    children: (0, M.jsx)(x.Ionicons, { name: (0, C.chevronBack)(), size: 22, color: s.text }),
                  }),
                  (0, M.jsxs)(u.default, {
                    style: { flex: 1, marginHorizontal: w.spacing.md },
                    children: [
                      (0, M.jsx)(c.default, {
                        style: [w.typography.h2, { color: s.text }],
                        children: A("funnelTitle"),
                      }),
                      (0, M.jsx)(c.default, {
                        style: [w.typography.small, { color: s.textMuted }],
                        children: A("funnelSub"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, M.jsx)(o.default, {
                contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
                children:
                  null === E
                    ? (0, M.jsx)(n.default, { color: s.accentText })
                    : 0 === E.length
                      ? (0, M.jsx)(p.EmptyState, {
                          icon: "analytics-outline",
                          title: A("funnelEmpty"),
                          body: A("funnelEmptyBody"),
                        })
                      : (0, M.jsxs)(M.Fragment, {
                          children: [
                            (0, M.jsxs)(u.default, {
                              style: {
                                flexDirection: "row",
                                paddingHorizontal: w.spacing.md,
                                marginBottom: w.spacing.xs,
                              },
                              children: [
                                (0, M.jsx)(c.default, {
                                  style: [w.typography.caption, { color: s.textMuted, flex: 1 }],
                                  children: A("funnelEvent"),
                                }),
                                (0, M.jsx)(c.default, {
                                  style: [
                                    w.typography.caption,
                                    { color: s.textMuted, width: 64, textAlign: "right" },
                                  ],
                                  children: A("funnel7d"),
                                }),
                                (0, M.jsx)(c.default, {
                                  style: [
                                    w.typography.caption,
                                    { color: s.textMuted, width: 64, textAlign: "right" },
                                  ],
                                  children: A("funnelTotal"),
                                }),
                              ],
                            }),
                            E.map((t) =>
                              (0, M.jsx)(
                                y.Card,
                                {
                                  padding: "md",
                                  style: { marginBottom: w.spacing.sm },
                                  children: (0, M.jsxs)(u.default, {
                                    style: { flexDirection: "row", alignItems: "center" },
                                    children: [
                                      (0, M.jsx)(c.default, {
                                        style: [w.typography.smallStrong, { color: s.text, flex: 1 }],
                                        numberOfLines: 1,
                                        children: t.event,
                                      }),
                                      (0, M.jsx)(c.default, {
                                        style: [
                                          w.typography.smallStrong,
                                          { color: s.accentText, width: 64, textAlign: "right" },
                                        ],
                                        children: (0, v.formatNumber)(t.last7d),
                                      }),
                                      (0, M.jsx)(c.default, {
                                        style: [
                                          w.typography.small,
                                          { color: s.textMuted, width: 64, textAlign: "right" },
                                        ],
                                        children: (0, v.formatNumber)(t.total),
                                      }),
                                    ],
                                  }),
                                },
                                t.event,
                              ),
                            ),
                            (0, M.jsx)(c.default, {
                              style: [w.typography.caption, { color: s.textMuted, marginTop: w.spacing.sm }],
                              children: A("funnelNote"),
                            }),
                          ],
                        }),
              }),
            ],
          })
        );
      }));
    var l = _r(d[1]),
      n = t(_r(d[2])),
      r = t(_r(d[3])),
      o = t(_r(d[4])),
      s = t(_r(d[5])),
      c = t(_r(d[6])),
      u = t(_r(d[7])),
      h = _r(d[8]),
      x = _r(d[9]),
      f = _r(d[10]),
      y = _r(d[11]),
      p = _r(d[12]),
      j = _r(d[13]),
      b = _r(d[14]),
      w = _r(d[15]),
      S = _r(d[16]),
      v = _r(d[17]),
      B = _r(d[18]),
      C = _r(d[19]),
      M = _r(d[20]);
    const T = s.default.create({
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
    });
  },
  1829,
  [33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1627, 630, 615, 616, 671, 1311, 675, 1171, 13],
);
