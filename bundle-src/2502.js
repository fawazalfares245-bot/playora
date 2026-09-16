__d(
  function (g, _r, _i, a, m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, u.useLocalSearchParams)(),
          { user: l } = (0, w.useAuth)(),
          { colors: _ } = (0, S.useTheme)(),
          A = (0, u.useRouter)(),
          V = (0, k.useT)(),
          [L, M] = (0, t.useState)(null),
          [z, D] = (0, t.useState)([]),
          [E, W] = (0, t.useState)(!0),
          [O, H] = (0, t.useState)(0),
          [N, F] = (0, t.useState)(""),
          [Y, q] = (0, t.useState)(!1),
          G = (0, t.useCallback)(async () => {
            if (!e) return;
            const [t, r] = await Promise.all([(0, v.fetchVenue)(e), (0, v.fetchReviews)(e)]);
            (M(t), D(r), W(!1));
          }, [e]);
        (0, t.useEffect)(() => {
          G();
        }, [G]);
        if (E)
          return (0, I.jsx)(x.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: _.bg },
            children: (0, I.jsx)(r.default, { color: _.accentText }),
          });
        if (!L)
          return (0, I.jsx)(x.SafeAreaView, {
            style: { flex: 1, backgroundColor: _.bg },
            children: (0, I.jsx)(j.EmptyState, { title: V("venueNotFound") }),
          });
        return (0, I.jsx)(x.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: _.bg },
          children: (0, I.jsxs)(i.default, {
            contentContainerStyle: { padding: C.spacing.lg, paddingBottom: C.spacing.xxxl },
            children: [
              (0, I.jsx)(s.default, {
                onPress: () => A.back(),
                style: [P.back, { backgroundColor: _.surface, borderColor: _.border }],
                accessibilityRole: "button",
                accessibilityLabel: V("back"),
                children: (0, I.jsx)(p.Ionicons, { name: (0, B.chevronBack)(), size: 22, color: _.text }),
              }),
              (0, I.jsx)(o.default, {
                style: [C.typography.display, { color: _.text, marginTop: C.spacing.lg }],
                children: L.name,
              }),
              (0, I.jsxs)(o.default, {
                style: [C.typography.body, { color: _.textMuted }],
                children: [L.area, ", ", L.city],
              }),
              (0, I.jsxs)(c.default, {
                style: { flexDirection: "row", alignItems: "center", marginTop: C.spacing.sm },
                children: [
                  (0, I.jsx)(p.Ionicons, { name: "star", size: 16, color: _.warning }),
                  (0, I.jsx)(o.default, {
                    style: [C.typography.bodyStrong, { color: _.text, marginHorizontal: C.spacing.xs }],
                    children: (0, T.formatRating)(L.rating),
                  }),
                  (0, I.jsxs)(o.default, {
                    style: [C.typography.small, { color: _.textMuted }],
                    children: [(0, T.formatCountParens)(L.rating_count), " ", V("reviews").toLowerCase()],
                  }),
                ],
              }),
              (0, I.jsx)(c.default, {
                style: { flexDirection: "row", gap: C.spacing.xs, marginTop: C.spacing.md, flexWrap: "wrap" },
                children: L.sports.map((e) => (0, I.jsx)(b.Badge, { label: V(e), tone: "accent" }, e)),
              }),
              L.description &&
                (0, I.jsxs)(y.Card, {
                  style: { marginTop: C.spacing.lg },
                  children: [
                    (0, I.jsx)(o.default, {
                      style: [C.typography.smallStrong, { color: _.textMuted, marginBottom: C.spacing.xs }],
                      children: V("aboutVenue"),
                    }),
                    (0, I.jsx)(o.default, {
                      style: [C.typography.body, { color: _.text }],
                      children: L.description,
                    }),
                  ],
                }),
              (0, I.jsx)(o.default, {
                style: [
                  C.typography.h2,
                  { color: _.text, marginTop: C.spacing.xl, marginBottom: C.spacing.md },
                ],
                children: V("writeReview"),
              }),
              (0, I.jsxs)(y.Card, {
                children: [
                  (0, I.jsx)(o.default, {
                    style: [C.typography.smallStrong, { color: _.textMuted, marginBottom: C.spacing.sm }],
                    children: V("rateThisVenue"),
                  }),
                  (0, I.jsx)(c.default, {
                    style: { flexDirection: "row", marginBottom: C.spacing.md },
                    children: [1, 2, 3, 4, 5].map((e) =>
                      (0, I.jsx)(
                        s.default,
                        {
                          onPress: () => H(e),
                          hitSlop: 8,
                          accessibilityRole: "button",
                          accessibilityLabel: V("ratingStarA11y", { n: (0, T.formatNumber)(e) }),
                          children: (0, I.jsx)(p.Ionicons, {
                            name: e <= O ? "star" : "star-outline",
                            size: 32,
                            color: e <= O ? _.warning : _.textMuted,
                            style: { marginEnd: C.spacing.xs },
                          }),
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, I.jsx)(h.Input, {
                    placeholder: V("reviewPlaceholder"),
                    value: N,
                    onChangeText: F,
                    multiline: !0,
                    numberOfLines: 3,
                    style: { minHeight: 80, textAlignVertical: "top" },
                  }),
                  (0, I.jsx)(f.Button, {
                    title: V("submitReview"),
                    onPress: async () => {
                      if (l && L && 0 !== O) {
                        q(!0);
                        try {
                          (await (0, v.upsertReview)({
                            venue_id: L.id,
                            user_id: l.id,
                            rating: O,
                            comment: N,
                          }),
                            F(""),
                            H(0),
                            await G());
                        } catch (e) {
                          n.default.alert(V("error"), (0, R.storeErrorText)(e?.message ?? "") || V("error"));
                        } finally {
                          q(!1);
                        }
                      }
                    },
                    disabled: 0 === O,
                    loading: Y,
                    fullWidth: !0,
                  }),
                ],
              }),
              (0, I.jsx)(o.default, {
                style: [
                  C.typography.h2,
                  { color: _.text, marginTop: C.spacing.xl, marginBottom: C.spacing.md },
                ],
                children: V("reviews"),
              }),
              0 === z.length
                ? (0, I.jsx)(j.EmptyState, { icon: "chatbubble-outline", title: V("noReviewsYet") })
                : z.map((e) =>
                    (0, I.jsxs)(
                      y.Card,
                      {
                        style: { marginBottom: C.spacing.sm },
                        children: [
                          (0, I.jsxs)(c.default, {
                            style: { flexDirection: "row", justifyContent: "space-between" },
                            children: [
                              (0, I.jsx)(o.default, {
                                style: [C.typography.bodyStrong, { color: _.text, flexShrink: 1 }],
                                numberOfLines: 1,
                                children: e.author?.full_name || V("player"),
                              }),
                              (0, I.jsx)(c.default, {
                                style: { flexDirection: "row" },
                                children: Array.from({ length: 5 }).map((t, r) =>
                                  (0, I.jsx)(
                                    p.Ionicons,
                                    {
                                      name: r < e.rating ? "star" : "star-outline",
                                      size: 14,
                                      color: _.warning,
                                    },
                                    r,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          e.comment &&
                            (0, I.jsx)(o.default, {
                              style: [C.typography.body, { color: _.text, marginTop: C.spacing.xs }],
                              children: e.comment,
                            }),
                        ],
                      },
                      e.id,
                    ),
                  ),
            ],
          }),
        });
      }));
    var t = _r(d[1]),
      r = e(_r(d[2])),
      n = e(_r(d[3])),
      s = e(_r(d[4])),
      i = e(_r(d[5])),
      l = e(_r(d[6])),
      o = e(_r(d[7])),
      c = e(_r(d[8])),
      u = _r(d[9]),
      x = _r(d[10]),
      p = _r(d[11]),
      y = _r(d[12]),
      h = _r(d[13]),
      f = _r(d[14]),
      b = _r(d[15]),
      j = _r(d[16]),
      w = _r(d[17]),
      S = _r(d[18]),
      C = _r(d[19]),
      v = _r(d[20]),
      T = _r(d[21]),
      k = _r(d[22]),
      B = _r(d[23]),
      R = _r(d[24]),
      I = _r(d[25]);
    const P = l.default.create({
      back: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: l.default.hairlineWidth,
      },
    });
  },
  2502,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 20, 381, 1086, 1623, 625, 626, 1624, 1627, 630, 615, 616, 671,
    1311, 675, 1171, 674, 13,
  ],
);
