__d(
  function (g, r, i, _a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, I.useAuth)(),
          { colors: n } = (0, j.useTheme)(),
          z = (0, x.useRouter)(),
          M = (0, P.useT)(),
          [V, W] = (0, l.useState)(null),
          [L, D] = (0, l.useState)(null),
          [O, E] = (0, l.useState)(null),
          [F, N] = (0, l.useState)(""),
          [$, q] = (0, l.useState)([]),
          [G, J] = (0, l.useState)(!0),
          // F-CQUAL-15: no catch, so a rejected search left the loading flag set for ever.
          [er9, se9] = (0, l.useState)(null),
          K = (0, l.useCallback)(async () => {
            (J(!0), se9(null));
            try {
              const l = await (0, v.searchBookableVenues)({
                sport: V ?? void 0,
                maxPricePerHour: L ?? void 0,
                area: O ?? void 0,
                query: F.trim() || void 0,
                viewerId: t?.id,
              });
              q(l);
            } catch (e) {
              (se9((0, G9.classifyError)(e).message || M("error")), q([]));
            } finally {
              J(!1);
            }
          }, [V, L, O, F, t]);
        return (
          (0, x.useFocusEffect)(
            (0, l.useCallback)(() => {
              K();
            }, [K]),
          ),
          (0, B.jsxs)(p.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: n.bg },
            children: [
              (0, B.jsxs)(u.default, {
                style: H.header,
                children: [
                  (0, B.jsx)(o.default, {
                    onPress: () => (0, G9.safeBack)(z),
                    accessibilityRole: "button",
                    accessibilityLabel: M("back"),
                    style: [H.iconBtn, { backgroundColor: n.surface, borderColor: n.border }],
                    children: (0, B.jsx)(h.Ionicons, { name: (0, S.chevronBack)(), size: 22, color: n.text }),
                  }),
                  (0, B.jsx)(c.default, {
                    style: [k.typography.h2, { color: n.text, flex: 1, marginHorizontal: k.spacing.md }],
                    children: M("bookACourt"),
                  }),
                ],
              }),
              (0, B.jsxs)(s.default, {
                contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
                keyboardShouldPersistTaps: "handled",
                children: [
                  (0, B.jsx)(w.Input, {
                    placeholder: M("searchVenuePlaceholder"),
                    accessibilityLabel: M("searchVenuePlaceholder"),
                    value: F,
                    onChangeText: N,
                    autoCorrect: !1,
                  }),
                  (0, B.jsx)(c.default, {
                    style: [k.typography.smallStrong, { color: n.textMuted, marginBottom: k.spacing.xs }],
                    children: M("anySport"),
                  }),
                  (0, B.jsxs)(u.default, {
                    style: H.chipRow,
                    children: [
                      (0, B.jsx)(A, {
                        label: M("anySport"),
                        active: null === V,
                        onPress: () => W(null),
                        colors: n,
                      }),
                      R.map((t) =>
                        (0, B.jsx)(A, { label: M(t), active: V === t, onPress: () => W(t), colors: n }, t),
                      ),
                    ],
                  }),
                  (0, B.jsx)(c.default, {
                    style: [
                      k.typography.smallStrong,
                      { color: n.textMuted, marginTop: k.spacing.md, marginBottom: k.spacing.xs },
                    ],
                    children: M("maxPrice"),
                  }),
                  (0, B.jsxs)(u.default, {
                    style: H.chipRow,
                    children: [
                      (0, B.jsx)(A, {
                        label: M("anyArea"),
                        active: null === L,
                        onPress: () => D(null),
                        colors: n,
                      }),
                      T.map((t) =>
                        (0, B.jsx)(
                          A,
                          { label: (0, C.formatPrice)(t), active: L === t, onPress: () => D(t), colors: n },
                          t,
                        ),
                      ),
                    ],
                  }),
                  (0, B.jsx)(c.default, {
                    style: [
                      k.typography.smallStrong,
                      { color: n.textMuted, marginTop: k.spacing.md, marginBottom: k.spacing.xs },
                    ],
                    children: M("areaLabel"),
                  }),
                  (0, B.jsx)(_.AreaPicker, {
                    value: O,
                    onChange: E,
                    allowAny: !0,
                    placeholder: M("anyArea"),
                  }),
                  (0, B.jsx)(u.default, { style: { height: k.spacing.lg } }),
                  G
                    ? (0, B.jsx)(a.default, { color: n.accentText, style: { marginTop: k.spacing.xl } })
                    : 0 === $.length
                      ? (0, B.jsx)(b.EmptyState, { icon: "business-outline", title: M("noVenuesFound") })
                      : $.map((t) =>
                          (0, B.jsx)(
                            o.default,
                            {
                              onPress: () => z.push(`/booking/venue/${t.id}`),
                              accessibilityRole: "button",
                              children: (0, B.jsxs)(f.Card, {
                                style: { marginBottom: k.spacing.md },
                                children: [
                                  (0, B.jsxs)(u.default, {
                                    style: { flexDirection: "row", alignItems: "center" },
                                    children: [
                                      (0, B.jsx)(u.default, {
                                        style: [
                                          H.vIcon,
                                          { backgroundColor: (0, C.sportColor)(t.sports_bookable[0]) },
                                        ],
                                        children: (0, B.jsx)(h.Ionicons, {
                                          name: C.sportIcon[t.sports_bookable[0]],
                                          size: 20,
                                          color: "#fff",
                                        }),
                                      }),
                                      (0, B.jsxs)(u.default, {
                                        style: { flex: 1, marginHorizontal: k.spacing.sm },
                                        children: [
                                          (0, B.jsx)(c.default, {
                                            style: [k.typography.h3, { color: n.text }],
                                            numberOfLines: 1,
                                            children: t.name,
                                          }),
                                          (0, B.jsxs)(c.default, {
                                            style: [k.typography.small, { color: n.textMuted }],
                                            numberOfLines: 1,
                                            children: [
                                              t.area,
                                              " \xb7 ",
                                              M("courtsCount", { n: (0, C.formatNumber)(t.court_count) }),
                                              null != t.distance_km
                                                ? ` \xb7 ${M("kmAway", { n: (0, C.formatNumber)(t.distance_km) })}`
                                                : "",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, B.jsxs)(u.default, {
                                        style: { alignItems: "flex-end" },
                                        children: [
                                          (0, B.jsx)(c.default, {
                                            style: [k.typography.smallStrong, { color: n.text }],
                                            children: M("fromPrice", {
                                              price: (0, C.formatPrice)(t.min_price_kwd),
                                            }),
                                          }),
                                          (0, B.jsx)(c.default, {
                                            style: [k.typography.caption, { color: n.textMuted }],
                                            children: M("perHour"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, B.jsxs)(u.default, {
                                    style: {
                                      flexDirection: "row",
                                      flexWrap: "wrap",
                                      gap: 6,
                                      marginTop: k.spacing.sm,
                                    },
                                    children: [
                                      t.sports_bookable.map((t) =>
                                        (0, B.jsx)(y.Badge, { label: M(t), tone: "accent" }, t),
                                      ),
                                      t.amenities
                                        .slice(0, 2)
                                        .map((t) => (0, B.jsx)(y.Badge, { label: t, tone: "neutral" }, t)),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            t.id,
                          ),
                        ),
                ],
              }),
            ],
          })
        );
      }));
    var l = r(d[1]),
      a = t(r(d[2])),
      o = t(r(d[3])),
      s = t(r(d[4])),
      n = t(r(d[5])),
      c = t(r(d[6])),
      u = t(r(d[7])),
      p = r(d[8]),
      h = r(d[9]),
      x = r(d[10]),
      f = r(d[11]),
      y = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      k = r(d[15]),
      v = r(d[16]),
      C = r(d[17]),
      P = r(d[18]),
      S = r(d[19]),
      w = r(d[20]),
      I = r(d[21]),
      _ = r(d[22]),
      B = r(d[23]),
      G9 = r(d[24]);
    const R = ["padel", "tennis", "football"],
      T = [10, 15, 25, 50];
    const A = ({ label: t, active: l, onPress: a, colors: s }) =>
        (0, B.jsx)(o.default, {
          onPress: a,
          accessibilityRole: "button",
          accessibilityState: { selected: l },
          style: {
            minHeight: 36,
            paddingHorizontal: k.spacing.md,
            borderRadius: 999,
            borderWidth: n.default.hairlineWidth,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: l ? s.accent : s.surface,
            borderColor: l ? s.accent : s.border,
          },
          children: (0, B.jsx)(c.default, {
            style: [k.typography.smallStrong, { color: l ? "#fff" : s.text }],
            children: t,
          }),
        }),
      H = n.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: k.spacing.lg,
          paddingVertical: k.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: n.default.hairlineWidth,
        },
        chipRow: { flexDirection: "row", flexWrap: "wrap", gap: k.spacing.sm },
        vIcon: { width: 44, height: 44, borderRadius: 14, alignItems: "center", justifyContent: "center" },
      });
  },
  1840,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 1627, 615, 616, 671, 1311, 675, 1171, 625, 630, 1841, 13, 9001,
  ],
);
