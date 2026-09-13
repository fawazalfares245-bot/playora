__d(
  function (g, _r, _i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, b.useAuth)(),
          { colors: i } = (0, j.useTheme)(),
          T = (0, h.useRouter)(),
          v = (0, S.useT)(),
          [$, z] = (0, l.useState)("football"),
          [D, K] = (0, l.useState)([]),
          [H, P] = (0, l.useState)(!0),
          [er, setEr] = (0, l.useState)(null),
          W = (0, l.useCallback)(async () => {
            if (t) {
              (P(!0), setEr(null));
              try {
                K(await (0, w.fetchSmartSchedule)(t.id, { sport: $ }));
              } catch (e) {
                (K([]), setEr(e));
              }
              P(!1);
            }
          }, [t, $]);
        (0, h.useFocusEffect)(
          (0, l.useCallback)(() => {
            W();
          }, [W]),
        );
        const A = (t) => {
          T.push(
            `/organizer/create?sport=${t.sport}&start=${encodeURIComponent(t.starts_at)}&end=${encodeURIComponent(t.ends_at)}&venue_id=${t.venue_id}&price=${t.suggested_price_kwd}`,
          );
        };
        return (0, I.jsxs)(u.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: i.bg },
          children: [
            (0, I.jsxs)(c.default, {
              style: M.header,
              children: [
                (0, I.jsx)(r.default, {
                  onPress: () => T.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: v("back"),
                  style: [M.iconBtn, { backgroundColor: i.surface, borderColor: i.border }],
                  children: (0, I.jsx)(y.Ionicons, { name: (0, C.chevronBack)(), size: 22, color: i.text }),
                }),
                (0, I.jsxs)(c.default, {
                  style: { flex: 1, marginHorizontal: k.spacing.md },
                  children: [
                    (0, I.jsx)(s.default, {
                      style: [k.typography.h2, { color: i.text }],
                      children: v("smartScheduleTitle"),
                    }),
                    (0, I.jsx)(s.default, {
                      style: [k.typography.caption, { color: i.textMuted }],
                      children: v("smartScheduleSubtitle"),
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsx)(c.default, {
              style: { paddingHorizontal: k.spacing.lg },
              children: (0, I.jsx)(c.default, {
                style: M.chipRow,
                children: B.map((t) => {
                  const l = $ === t;
                  return (0, I.jsxs)(
                    r.default,
                    {
                      onPress: () => z(t),
                      accessibilityRole: "button",
                      accessibilityState: { selected: l },
                      style: [
                        M.chip,
                        { backgroundColor: l ? i.accent : i.surface, borderColor: l ? i.accent : i.border },
                      ],
                      children: [
                        (0, I.jsx)(y.Ionicons, {
                          name: _.sportIcon[t],
                          size: 14,
                          color: l ? "#fff" : (0, _.sportColor)(t),
                        }),
                        (0, I.jsx)(s.default, {
                          style: [k.typography.smallStrong, { color: l ? "#fff" : i.text, marginStart: 4 }],
                          children: v(t),
                        }),
                      ],
                    },
                    t,
                  );
                }),
              }),
            }),
            (0, I.jsxs)(n.default, {
              contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
              children: [
                (0, I.jsx)(s.default, {
                  style: [k.typography.caption, { color: i.textMuted, marginBottom: k.spacing.md }],
                  children: v("smartScheduleHint"),
                }),
                H
                  ? (0, I.jsx)(o.default, { color: i.accentText, style: { marginTop: k.spacing.xl } })
                  : er
                    ? (0, I.jsxs)(I.Fragment, {
                        children: [
                          (0, I.jsx)(x.EmptyState, {
                            icon: "alert-circle-outline",
                            title: v("loadFailedTitle"),
                            body: (0, G9.classifyError)(er).message,
                          }),
                          (0, I.jsx)(G9.RetryButton, { onPress: W, label: v("retry") }),
                        ],
                      })
                    : 0 === D.length
                      ? (0, I.jsx)(x.EmptyState, { icon: "calendar-outline", title: v("noRecommendations") })
                    : D.map((t, l) => {
                        const o =
                          t.predicted_fill >= 75 ? i.success : t.predicted_fill >= 55 ? i.warning : i.danger;
                        return (0, I.jsxs)(
                          p.Card,
                          {
                            style: { marginBottom: k.spacing.md },
                            children: [
                              (0, I.jsxs)(c.default, {
                                style: { flexDirection: "row", alignItems: "center" },
                                children: [
                                  (0, I.jsx)(s.default, {
                                    style: [k.typography.h3, { color: i.textMuted, width: 24 }],
                                    children: (0, _.formatNumber)(l + 1),
                                  }),
                                  (0, I.jsxs)(c.default, {
                                    style: { flex: 1 },
                                    children: [
                                      (0, I.jsx)(s.default, {
                                        style: [k.typography.bodyStrong, { color: i.text }],
                                        numberOfLines: 1,
                                        children: t.venue_name,
                                      }),
                                      (0, I.jsxs)(s.default, {
                                        style: [k.typography.small, { color: i.textMuted }],
                                        children: [t.area, " \xb7 ", (0, _.formatGameTime)(t.starts_at)],
                                      }),
                                    ],
                                  }),
                                  (0, I.jsxs)(c.default, {
                                    style: { alignItems: "flex-end" },
                                    children: [
                                      (0, I.jsxs)(s.default, {
                                        style: [k.typography.h2, { color: o }],
                                        children: [(0, _.formatNumber)(t.predicted_fill), "%"],
                                      }),
                                      (0, I.jsx)(s.default, {
                                        style: [k.typography.caption, { color: i.textMuted }],
                                        children: v("predictedFill"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.jsxs)(c.default, {
                                style: {
                                  flexDirection: "row",
                                  flexWrap: "wrap",
                                  gap: 6,
                                  marginTop: k.spacing.sm,
                                },
                                children: [
                                  (0, I.jsx)(f.Badge, {
                                    label: `${t.weather_emoji} ${v(t.weather_key)}`,
                                    tone: "neutral",
                                  }),
                                  (0, I.jsx)(f.Badge, {
                                    label: t.holiday_key ? v(t.holiday_key) : v(`dayKey_${t.day_key}`),
                                    tone: "weekday" === t.day_key ? "neutral" : "accent",
                                  }),
                                  (0, I.jsx)(f.Badge, {
                                    label: `${v("suggestedPrice")}: ${(0, _.formatPrice)(t.suggested_price_kwd)}`,
                                    tone: "success",
                                  }),
                                ],
                              }),
                              (0, I.jsx)(s.default, {
                                style: [
                                  k.typography.caption,
                                  { color: i.textMuted, marginTop: k.spacing.md, marginBottom: k.spacing.xs },
                                ],
                                children: v("whyThisSlot"),
                              }),
                              R.map((l) =>
                                (0, I.jsxs)(
                                  c.default,
                                  {
                                    style: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
                                    children: [
                                      (0, I.jsx)(y.Ionicons, { name: l.icon, size: 13, color: i.textMuted }),
                                      (0, I.jsx)(s.default, {
                                        style: [
                                          k.typography.caption,
                                          { color: i.textMuted, width: 90, marginStart: 4 },
                                        ],
                                        children: v(l.labelKey),
                                      }),
                                      (0, I.jsx)(c.default, {
                                        style: {
                                          flex: 1,
                                          height: 6,
                                          borderRadius: 3,
                                          backgroundColor: i.surfaceAlt,
                                          overflow: "hidden",
                                        },
                                        children: (0, I.jsx)(c.default, {
                                          style: {
                                            width: `${t.factors[l.key]}%`,
                                            height: 6,
                                            backgroundColor: i.accent,
                                          },
                                        }),
                                      }),
                                      (0, I.jsx)(s.default, {
                                        style: [
                                          k.typography.caption,
                                          { color: i.textMuted, width: 34, textAlign: "right" },
                                        ],
                                        children: (0, _.formatNumber)(t.factors[l.key]),
                                      }),
                                    ],
                                  },
                                  l.key,
                                ),
                              ),
                              (0, I.jsxs)(r.default, {
                                onPress: () => A(t),
                                accessibilityRole: "button",
                                style: [M.useBtn, { backgroundColor: i.accent }],
                                children: [
                                  (0, I.jsx)(y.Ionicons, {
                                    name: "add-circle-outline",
                                    size: 16,
                                    color: i.accentInk,
                                  }),
                                  (0, I.jsx)(s.default, {
                                    style: [k.typography.smallStrong, { color: i.accentInk, marginStart: 6 }],
                                    children: v("useThisSlot"),
                                  }),
                                ],
                              }),
                            ],
                          },
                          t.id,
                        );
                      }),
                D.length > 0 &&
                  (0, I.jsx)(s.default, {
                    style: [k.typography.caption, { color: i.textMuted, fontSize: 10 }],
                    children: v("weatherModeledNote"),
                  }),
              ],
            }),
          ],
        });
      }));
    var l = _r(d[1]),
      o = t(_r(d[2])),
      r = t(_r(d[3])),
      n = t(_r(d[4])),
      i = t(_r(d[5])),
      s = t(_r(d[6])),
      c = t(_r(d[7])),
      u = _r(d[8]),
      y = _r(d[9]),
      h = _r(d[10]),
      p = _r(d[11]),
      f = _r(d[12]),
      x = _r(d[13]),
      b = _r(d[14]),
      j = _r(d[15]),
      k = _r(d[16]),
      w = _r(d[17]),
      _ = _r(d[18]),
      S = _r(d[19]),
      C = _r(d[20]),
      I = _r(d[21]),
      G9 = _r(d[22]);
    const B = ["football", "padel", "tennis"],
      R = [
        { key: "time", labelKey: "factorTime", icon: "time-outline" },
        { key: "day", labelKey: "factorDay", icon: "calendar-outline" },
        { key: "weather", labelKey: "factorWeather", icon: "partly-sunny-outline" },
        { key: "availability", labelKey: "factorAvailability", icon: "checkmark-done-outline" },
        { key: "demand", labelKey: "factorDemand", icon: "trending-up-outline" },
        { key: "venue", labelKey: "factorVenue", icon: "business-outline" },
      ];
    const M = i.default.create({
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
        borderWidth: i.default.hairlineWidth,
      },
      chipRow: { flexDirection: "row", gap: k.spacing.sm, marginBottom: k.spacing.sm },
      chip: {
        flexDirection: "row",
        alignItems: "center",
        minHeight: 36,
        paddingHorizontal: k.spacing.md,
        borderRadius: 999,
        borderWidth: i.default.hairlineWidth,
      },
      useBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 40,
        borderRadius: k.radius.md,
        marginTop: k.spacing.md,
      },
    });
  },
  2472,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 1627, 630, 615, 616, 671, 1311, 675,
    1171, 13, 9001,
  ],
);
