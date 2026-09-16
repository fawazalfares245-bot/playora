__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { focus: t, sport: n } = (0, b.useLocalSearchParams)(),
          { colors: p } = (0, x.useTheme)(),
          I = (0, b.useRouter)(),
          S = (0, y.useT)(),
          [V, _] = (0, s.useState)([]),
          [k, P] = (0, s.useState)(!0),
          // F-CQUAL-15: a rejected fetchVenues cleared the spinner with an empty dataset and produced
          // an unhandled rejection, so the map read as "no venues" when it meant "the load failed".
          [er9, se9] = (0, s.useState)(null),
          ld9 = (0, s.useCallback)(async () => {
            (P(!0), se9(null));
            try {
              const t = await (0, j.fetchVenues)();
              _(n ? t.filter((t) => t.sports.includes(n)) : t);
            } catch (e) {
              se9((0, G9.classifyError)(e).message || S("error"));
            } finally {
              P(!1);
            }
          }, [n]);
        return (
          (0, s.useEffect)(() => {
            ld9();
          }, [ld9]),
          (0, C.jsxs)(u.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: p.bg },
            children: [
              k
                ? (0, C.jsx)(c.default, {
                    style: { flex: 1, alignItems: "center", justifyContent: "center" },
                    children: (0, C.jsx)(o.default, { color: p.accentText }),
                  })
                : er9
                  ? (0, C.jsx)(G9.GateScreen, {
                      kind: "error",
                      body: er9,
                      onRetry: ld9,
                      onBack: () => (0, G9.safeBack)(I),
                    })
                  : (0, C.jsx)(h.VenueMap, { venues: V, focusVenueId: t ?? null }),
              (0, C.jsx)(l.default, {
                onPress: () => (0, G9.safeBack)(I),
                accessibilityRole: "button",
                accessibilityLabel: S("close"),
                style: [v.close, { backgroundColor: p.surface, borderColor: p.border }],
                children: (0, C.jsx)(f.Ionicons, { name: "close", size: 22, color: p.text }),
              }),
            ],
          })
        );
      }));
    var s = r(d[1]),
      o = t(r(d[2])),
      l = t(r(d[3])),
      n = t(r(d[4])),
      c = t(r(d[5])),
      u = r(d[6]),
      f = r(d[7]),
      b = r(d[8]),
      h = r(d[9]),
      x = r(d[10]),
      p = r(d[11]),
      j = r(d[12]),
      y = r(d[13]),
      C = r(d[14]),
      G9 = r(d[15]);
    const v = n.default.create({
      close: {
        position: "absolute",
        top: p.spacing.xl + p.spacing.lg,
        left: p.spacing.lg,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: n.default.hairlineWidth,
      },
    });
  },
  2450,
  [
    33, 15, 461, 369, 158, 273, 381, 1086, 20, 1680, 615, 616, 671, 675, 13, 9001,
  ],
);
