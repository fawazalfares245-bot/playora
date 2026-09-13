__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, _.useAuth)(),
          { colors: c } = (0, w.useTheme)(),
          D = (0, y.useRouter)(),
          z = (0, C.useT)(),
          [H, N] = (0, t.useState)("football"),
          [L, A] = (0, t.useState)(null),
          [V, O] = (0, t.useState)(!1),
          E = "fillHigh" === L?.fill_key ? "success" : "fillMed" === L?.fill_key ? "warning" : "danger";
        return (0, v.jsxs)(f.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: c.bg },
          children: [
            (0, v.jsxs)(u.default, {
              style: R.header,
              children: [
                (0, v.jsx)(n.default, {
                  onPress: () => D.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: z("back"),
                  style: [R.iconBtn, { backgroundColor: c.surface, borderColor: c.border }],
                  children: (0, v.jsx)(h.Ionicons, { name: (0, B.chevronBack)(), size: 22, color: c.text }),
                }),
                (0, v.jsxs)(u.default, {
                  style: { flex: 1, marginHorizontal: k.spacing.md },
                  children: [
                    (0, v.jsx)(p.default, {
                      style: [k.typography.h2, { color: c.text }],
                      children: z("conciergeTitle"),
                    }),
                    (0, v.jsx)(p.default, {
                      style: [k.typography.caption, { color: c.textMuted }],
                      children: z("conciergeSub"),
                    }),
                  ],
                }),
                (0, v.jsx)(h.Ionicons, { name: "sparkles", size: 22, color: c.accentText }),
              ],
            }),
            (0, v.jsxs)(s.default, {
              contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
              children: [
                (0, v.jsx)(p.default, {
                  style: [k.typography.small, { color: c.textMuted, marginBottom: k.spacing.md }],
                  children: z("conciergeIntro"),
                }),
                (0, v.jsx)(u.default, {
                  style: R.chipRow,
                  children: $.map((e) => {
                    const t = H === e;
                    return (0, v.jsxs)(
                      n.default,
                      {
                        onPress: () => N(e),
                        accessibilityRole: "button",
                        accessibilityState: { selected: t },
                        style: [
                          R.chip,
                          { backgroundColor: t ? c.accent : c.surface, borderColor: t ? c.accent : c.border },
                        ],
                        children: [
                          (0, v.jsx)(h.Ionicons, {
                            name: I.sportIcon[e],
                            size: 14,
                            color: t ? "#fff" : (0, I.sportColor)(e),
                          }),
                          (0, v.jsx)(p.default, {
                            style: [k.typography.smallStrong, { color: t ? "#fff" : c.text, marginStart: 4 }],
                            children: z(e),
                          }),
                        ],
                      },
                      e,
                    );
                  }),
                }),
                (0, v.jsx)(j.Button, {
                  title: z(L ? "regenerate" : "generatePlan"),
                  fullWidth: !0,
                  loading: V,
                  onPress: async () => {
                    if (e) {
                      (O(!0), A(null));
                      try {
                        A(await (0, T.fetchConciergePlan)(e.id, { sport: H }));
                      } catch (e) {
                        o.default.alert(z("error"), (0, M.storeErrorText)(e?.message ?? "") || z("error"));
                      } finally {
                        O(!1);
                      }
                    }
                  },
                  leftIcon: (0, v.jsx)(h.Ionicons, {
                    name: "sparkles-outline",
                    size: 16,
                    color: c.accentInk,
                  }),
                  style: { marginTop: k.spacing.md },
                }),
                V && (0, v.jsx)(l.default, { color: c.accentText, style: { marginTop: k.spacing.xl } }),
                L &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsxs)(x.Card, {
                        style: { marginTop: k.spacing.lg },
                        children: [
                          (0, v.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            },
                            children: [
                              (0, v.jsx)(p.default, {
                                style: [k.typography.h3, { color: c.text, flex: 1 }],
                                numberOfLines: 1,
                                children: L.venue_name,
                              }),
                              (0, v.jsxs)(u.default, {
                                style: { alignItems: "flex-end" },
                                children: [
                                  (0, v.jsxs)(p.default, {
                                    style: [k.typography.h3, { color: c.success }],
                                    children: [(0, I.formatNumber)(L.predicted_fill), "%"],
                                  }),
                                  (0, v.jsx)(p.default, {
                                    style: [k.typography.caption, { color: c.textMuted }],
                                    children: z("predictedFill"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsxs)(p.default, {
                            style: [k.typography.small, { color: c.textMuted, marginTop: 2 }],
                            children: [L.area, " \xb7 ", (0, I.formatGameTime)(L.starts_at)],
                          }),
                          (0, v.jsxs)(u.default, {
                            style: {
                              flexDirection: "row",
                              flexWrap: "wrap",
                              gap: 6,
                              marginTop: k.spacing.sm,
                            },
                            children: [
                              (0, v.jsx)(b.Badge, {
                                label: `${L.weather_emoji} ${z(L.weather_key)}`,
                                tone: "neutral",
                              }),
                              (0, v.jsx)(b.Badge, { label: z(L.fill_key), tone: E }),
                              (0, v.jsx)(b.Badge, {
                                label: `${z("suggestedPrice")}: ${(0, I.formatPrice)(L.suggested_price_kwd)}`,
                                tone: "success",
                              }),
                              (0, v.jsx)(b.Badge, {
                                label: `${z("suggestedPlayers")}: ${(0, I.formatNumber)(L.max_players)}`,
                                tone: "accent",
                              }),
                            ],
                          }),
                          (0, v.jsx)(p.default, {
                            style: [
                              k.typography.smallStrong,
                              { color: c.text, marginTop: k.spacing.md, marginBottom: k.spacing.xs },
                            ],
                            children: z("whyThisSlot"),
                          }),
                          S.map((e) => {
                            const t = Math.round(L.factors[e.k] ?? 0);
                            return (0, v.jsxs)(
                              u.default,
                              {
                                style: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
                                children: [
                                  (0, v.jsx)(p.default, {
                                    style: [k.typography.caption, { color: c.textMuted, width: 92 }],
                                    children: z(e.label),
                                  }),
                                  (0, v.jsx)(u.default, {
                                    style: {
                                      flex: 1,
                                      height: 6,
                                      borderRadius: 3,
                                      backgroundColor: c.border,
                                      overflow: "hidden",
                                    },
                                    children: (0, v.jsx)(u.default, {
                                      style: { width: `${t}%`, height: 6, backgroundColor: c.accent },
                                    }),
                                  }),
                                  (0, v.jsx)(p.default, {
                                    style: [
                                      k.typography.caption,
                                      { color: c.textMuted, width: 32, textAlign: "right" },
                                    ],
                                    children: (0, I.formatNumber)(t),
                                  }),
                                ],
                              },
                              e.k,
                            );
                          }),
                          (0, v.jsxs)(u.default, {
                            style: [R.line, { borderTopColor: c.border }],
                            children: [
                              (0, v.jsx)(h.Ionicons, {
                                name: "notifications-outline",
                                size: 14,
                                color: c.textMuted,
                              }),
                              (0, v.jsxs)(p.default, {
                                style: [k.typography.caption, { color: c.textMuted, marginStart: 6 }],
                                children: [z("bestNotifyTime"), ": ", (0, I.formatGameTime)(L.notify_at)],
                              }),
                            ],
                          }),
                        ],
                      }),
                      L.recommended_players.length > 0 &&
                        (0, v.jsxs)(x.Card, {
                          style: { marginTop: k.spacing.md },
                          children: [
                            (0, v.jsxs)(u.default, {
                              style: {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: k.spacing.sm,
                              },
                              children: [
                                (0, v.jsx)(p.default, {
                                  style: [k.typography.smallStrong, { color: c.text }],
                                  children: z("recommendedPlayersLabel"),
                                }),
                                L.auto_invite &&
                                  (0, v.jsx)(b.Badge, {
                                    label: z("autoInviteLabel", {
                                      n: (0, I.formatNumber)(L.auto_invite_count),
                                    }),
                                    tone: "accent",
                                  }),
                              ],
                            }),
                            L.recommended_players.map((e) =>
                              (0, v.jsxs)(
                                u.default,
                                {
                                  style: [R.playerRow, { borderTopColor: c.border }],
                                  children: [
                                    (0, v.jsx)(p.default, {
                                      style: [k.typography.small, { color: c.text, flex: 1 }],
                                      numberOfLines: 1,
                                      children: e.display_name,
                                    }),
                                    (0, v.jsxs)(p.default, {
                                      style: [
                                        k.typography.caption,
                                        { color: c.textMuted, marginEnd: k.spacing.sm },
                                      ],
                                      children: [(0, I.formatNumber)(Math.round(e.distance_km)), " km"],
                                    }),
                                    (0, v.jsx)(b.Badge, {
                                      label: `${P(e.compat_class_key)} ${z(e.compat_class_key)}`,
                                      tone: W(e.compat_class_key),
                                    }),
                                  ],
                                },
                                e.user_id,
                              ),
                            ),
                          ],
                        }),
                      (0, v.jsx)(j.Button, {
                        title: z("createWithPlan"),
                        fullWidth: !0,
                        onPress: () => {
                          L &&
                            D.push(
                              `/organizer/create?sport=${L.sport}&start=${encodeURIComponent(L.starts_at)}&end=${encodeURIComponent(L.ends_at)}&venue_id=${L.venue_id}&price=${L.suggested_price_kwd}`,
                            );
                        },
                        leftIcon: (0, v.jsx)(h.Ionicons, {
                          name: "add-circle-outline",
                          size: 18,
                          color: "#fff",
                        }),
                        style: { marginTop: k.spacing.lg },
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[1]),
      l = e(r(d[2])),
      o = e(r(d[3])),
      n = e(r(d[4])),
      s = e(r(d[5])),
      c = e(r(d[6])),
      p = e(r(d[7])),
      u = e(r(d[8])),
      f = r(d[9]),
      h = r(d[10]),
      y = r(d[11]),
      x = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      _ = r(d[15]),
      w = r(d[16]),
      k = r(d[17]),
      T = r(d[18]),
      I = r(d[19]),
      C = r(d[20]),
      B = r(d[21]),
      M = r(d[22]),
      v = r(d[23]);
    const $ = ["football", "padel", "tennis"],
      S = [
        { k: "time", label: "factorTime" },
        { k: "day", label: "factorDay" },
        { k: "weather", label: "factorWeather" },
        { k: "availability", label: "factorAvailability" },
        { k: "demand", label: "factorDemand" },
        { k: "venue", label: "factorVenue" },
      ],
      W = (e) => ("compatHigh" === e ? "success" : "compatMed" === e ? "warning" : "danger"),
      P = (e) => ("compatHigh" === e ? "\ud83d\udfe2" : "compatMed" === e ? "\ud83d\udfe1" : "\ud83d\udd34");
    const R = c.default.create({
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
        borderWidth: c.default.hairlineWidth,
      },
      chipRow: { flexDirection: "row", gap: k.spacing.sm },
      chip: {
        flexDirection: "row",
        alignItems: "center",
        minHeight: 38,
        paddingHorizontal: k.spacing.md,
        borderRadius: 999,
        borderWidth: c.default.hairlineWidth,
      },
      line: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: k.spacing.sm,
        marginTop: k.spacing.sm,
        borderTopWidth: c.default.hairlineWidth,
      },
      playerRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: k.spacing.sm,
        borderTopWidth: c.default.hairlineWidth,
      },
    });
  },
  2460,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 630, 615, 616, 671, 1311, 675,
    1171, 674, 13,
  ],
);
