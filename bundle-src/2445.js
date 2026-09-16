__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { colors: t } = (0, y.useTheme)(),
          l = (0, p.useRouter)(),
          C = (0, k.useT)();
        return (0, j.jsxs)(u.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: t.bg },
          children: [
            (0, j.jsxs)(s.default, {
              style: I.header,
              children: [
                (0, j.jsx)(n.default, {
                  onPress: () => (0, G9.safeBack)(l),
                  accessibilityRole: "button",
                  accessibilityLabel: C("back"),
                  style: [I.iconBtn, { backgroundColor: t.surface, borderColor: t.border }],
                  children: (0, j.jsx)(h.Ionicons, { name: (0, b.chevronBack)(), size: 22, color: t.text }),
                }),
                (0, j.jsxs)(s.default, {
                  style: { flex: 1, marginHorizontal: f.spacing.md },
                  children: [
                    (0, j.jsx)(c.default, {
                      style: [f.typography.h2, { color: t.text }],
                      children: C("howItWorksTitle"),
                    }),
                    (0, j.jsx)(c.default, {
                      style: [f.typography.small, { color: t.textMuted }],
                      children: C("howItWorksSub"),
                    }),
                  ],
                }),
              ],
            }),
            (0, j.jsxs)(o.default, {
              contentContainerStyle: { padding: f.spacing.lg, paddingBottom: f.spacing.xxxl },
              children: [
                w.map(({ k: n, icon: o }) =>
                  (0, j.jsxs)(
                    x.Card,
                    {
                      padding: "md",
                      style: { marginBottom: f.spacing.sm },
                      children: [
                        (0, j.jsxs)(s.default, {
                          style: { flexDirection: "row", alignItems: "center" },
                          children: [
                            (0, j.jsx)(s.default, {
                              style: [I.iconWrap, { backgroundColor: t.accentMuted }],
                              children: (0, j.jsx)(h.Ionicons, { name: o, size: 18, color: t.accentText }),
                            }),
                            (0, j.jsx)(c.default, {
                              style: [
                                f.typography.bodyStrong,
                                { color: t.text, marginStart: f.spacing.md, flex: 1 },
                              ],
                              children: C(`explain_${n}_t`),
                            }),
                          ],
                        }),
                        (0, j.jsx)(c.default, {
                          style: [
                            f.typography.small,
                            { color: t.textMuted, marginTop: f.spacing.sm, lineHeight: 21 },
                          ],
                          children: C(`explain_${n}_b`),
                        }),
                      ],
                    },
                    n,
                  ),
                ),
                (0, j.jsx)(c.default, {
                  style: [
                    f.typography.caption,
                    { color: t.textMuted, textAlign: "center", marginTop: f.spacing.md },
                  ],
                  children: C("howItWorksFooter"),
                }),
              ],
            }),
          ],
        });
      }));
    var n = t(r(d[1])),
      o = t(r(d[2])),
      l = t(r(d[3])),
      c = t(r(d[4])),
      s = t(r(d[5])),
      u = r(d[6]),
      h = r(d[7]),
      p = r(d[8]),
      x = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      k = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      G9 = r(d[15]);
    const w = [
      { k: "gauntlet", icon: "flag" },
      { k: "shotclock", icon: "timer-outline" },
      { k: "stake", icon: "trophy-outline" },
      { k: "dodged", icon: "walk-outline" },
      { k: "derby", icon: "flame-outline" },
      { k: "form", icon: "trending-up-outline" },
      { k: "rank", icon: "podium-outline" },
      { k: "clanpts", icon: "stats-chart-outline" },
      { k: "classification", icon: "ribbon-outline" },
    ];
    const I = l.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: f.spacing.lg,
        paddingVertical: f.spacing.md,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: l.default.hairlineWidth,
      },
      iconWrap: {
        width: 34,
        height: 34,
        borderRadius: f.radius.md,
        alignItems: "center",
        justifyContent: "center",
      },
    });
  },
  2445,
  [
    33, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 615, 616, 675, 1171, 13, 9001,
  ],
);
