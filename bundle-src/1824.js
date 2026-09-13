__d(
  function (g, _r, _i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, p.useAuth)(),
          { colors: i } = (0, j.useTheme)(),
          B = (0, f.useRouter)(),
          I = (0, S.useT)(),
          [L, A] = (0, n.useState)(null),
          F = (0, n.useCallback)(async () => {
            if (t)
              try {
                A(await (0, k.fetchAwardFraudSignals)(t.id));
              } catch {
                A([]);
              }
          }, [t]);
        return (
          (0, f.useFocusEffect)(
            (0, n.useCallback)(() => {
              F();
            }, [F]),
          ),
          (0, C.jsxs)(u.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: i.bg },
            children: [
              (0, C.jsxs)(c.default, {
                style: z.header,
                children: [
                  (0, C.jsx)(r.default, {
                    onPress: () => B.back(),
                    accessibilityRole: "button",
                    accessibilityLabel: I("back"),
                    style: [z.iconBtn, { backgroundColor: i.surface, borderColor: i.border }],
                    children: (0, C.jsx)(h.Ionicons, { name: (0, _.chevronBack)(), size: 22, color: i.text }),
                  }),
                  (0, C.jsxs)(c.default, {
                    style: { flex: 1, marginHorizontal: w.spacing.md },
                    children: [
                      (0, C.jsx)(o.default, {
                        style: [w.typography.h2, { color: i.text }],
                        children: I("matchAwards"),
                      }),
                      (0, C.jsx)(o.default, {
                        style: [w.typography.small, { color: i.textMuted }],
                        children: I("fraudTitle"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsx)(s.default, {
                contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
                children:
                  null === L
                    ? (0, C.jsx)(l.default, { color: i.accentText })
                    : 0 === L.length
                      ? (0, C.jsx)(b.EmptyState, {
                          icon: "shield-checkmark-outline",
                          title: I("noFraud"),
                          body: I("leaderboardSub"),
                        })
                      : L.map((t, n) =>
                          (0, C.jsx)(
                            x.Card,
                            {
                              padding: "md",
                              style: { marginBottom: w.spacing.sm },
                              children: (0, C.jsxs)(c.default, {
                                style: { flexDirection: "row", alignItems: "center" },
                                children: [
                                  (0, C.jsx)(h.Ionicons, {
                                    name: "warning-outline",
                                    size: 20,
                                    color: i.warning,
                                  }),
                                  (0, C.jsxs)(c.default, {
                                    style: { flex: 1, marginHorizontal: w.spacing.md },
                                    children: [
                                      (0, C.jsxs)(o.default, {
                                        style: [w.typography.bodyStrong, { color: i.text }],
                                        numberOfLines: 1,
                                        children: [t.voter_name, " \u2192 ", t.nominee_name],
                                      }),
                                      (0, C.jsx)(o.default, {
                                        style: [w.typography.caption, { color: i.textMuted }],
                                        numberOfLines: 1,
                                        children: t.venue,
                                      }),
                                    ],
                                  }),
                                  (0, C.jsx)(y.Badge, {
                                    label: I("votesLabel", { n: (0, v.formatNumber)(t.categories) }),
                                    tone: "warning",
                                  }),
                                  (0, C.jsx)(r.default, {
                                    onPress: () => B.push(`/awards/${t.match_id}`),
                                    accessibilityRole: "button",
                                    accessibilityLabel: I("openLabel"),
                                    hitSlop: 8,
                                    style: { marginStart: w.spacing.sm },
                                    children: (0, C.jsx)(h.Ionicons, {
                                      name: (0, _.chevronForward)(),
                                      size: 18,
                                      color: i.textMuted,
                                    }),
                                  }),
                                ],
                              }),
                            },
                            `${t.match_id}-${t.voter_id}-${n}`,
                          ),
                        ),
              }),
            ],
          })
        );
      }));
    var n = _r(d[1]),
      l = t(_r(d[2])),
      r = t(_r(d[3])),
      s = t(_r(d[4])),
      i = t(_r(d[5])),
      o = t(_r(d[6])),
      c = t(_r(d[7])),
      u = _r(d[8]),
      h = _r(d[9]),
      f = _r(d[10]),
      x = _r(d[11]),
      y = _r(d[12]),
      b = _r(d[13]),
      p = _r(d[14]),
      j = _r(d[15]),
      w = _r(d[16]),
      k = _r(d[17]),
      v = _r(d[18]),
      S = _r(d[19]),
      _ = _r(d[20]),
      C = _r(d[21]);
    const z = i.default.create({
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
        borderWidth: i.default.hairlineWidth,
      },
    });
  },
  1824,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 1627, 630, 615, 616, 671, 1311, 675,
    1171, 13,
  ],
);
