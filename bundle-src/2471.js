__d(
  function (_g, r, _i, _a, _m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, g.useLocalSearchParams)(),
          { user: z } = (0, p.useAuth)(),
          { colors: B } = (0, x.useTheme)(),
          M = (0, g.useRouter)(),
          P = (0, v.useT)(),
          [T, $] = (0, t.useState)(null),
          [W, N] = (0, t.useState)(null),
          [O, A] = (0, t.useState)([]),
          [D, H] = (0, t.useState)(!0),
          [L, q] = (0, t.useState)(!1),
          [V, F] = (0, t.useState)(!1),
          [E, G] = (0, t.useState)(""),
          K = (0, t.useCallback)(async () => {
            if (!e || !z) return;
            const [t, s, a] = await Promise.all([
              (0, b.fetchSeries)(e, z.id),
              (0, b.fetchSeriesAnalytics)(e),
              (0, b.fetchOrganizerMatches)(z.id),
            ]);
            ($(t), N(s), A(a.filter((t) => t.series_id === e)), H(!1));
          }, [e, z]);
        (0, g.useFocusEffect)(
          (0, t.useCallback)(() => {
            K();
          }, [K]),
        );
        const J = async (e) => {
          q(!0);
          try {
            (await e(), await K());
          } catch (e) {
            a.default.alert(P("error"), (0, C.storeErrorText)(e?.message ?? "") || P("error"));
          } finally {
            q(!1);
          }
        };
        if (D || !T)
          return (0, _.jsx)(d.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: B.bg },
            children: (0, _.jsx)(s.default, { color: B.accentText }),
          });
        const Q = (0, w.sportColor)(T.sport),
          U = "active" === T.status ? "success" : "paused" === T.status ? "warning" : "danger",
          X = O.filter((e) => "upcoming" === e.effective_status);
        return (0, _.jsxs)(d.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: B.bg },
          children: [
            (0, _.jsxs)(c.default, {
              style: R.header,
              children: [
                (0, _.jsx)(n.default, {
                  onPress: () => M.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: P("back"),
                  style: [R.iconBtn, { backgroundColor: B.surface, borderColor: B.border }],
                  children: (0, _.jsx)(u.Ionicons, { name: (0, S.chevronBack)(), size: 22, color: B.text }),
                }),
                (0, _.jsx)(i.default, {
                  style: [j.typography.h3, { color: B.text, flex: 1, marginHorizontal: j.spacing.md }],
                  numberOfLines: 1,
                  children: P("seriesTitle"),
                }),
              ],
            }),
            (0, _.jsxs)(l.default, {
              contentContainerStyle: { padding: j.spacing.lg, paddingBottom: j.spacing.xxxl },
              children: [
                (0, _.jsxs)(c.default, {
                  style: { flexDirection: "row", alignItems: "center", marginBottom: j.spacing.md },
                  children: [
                    (0, _.jsx)(c.default, {
                      style: [R.sportIcon, { backgroundColor: Q }],
                      children: (0, _.jsx)(u.Ionicons, { name: "repeat", size: 22, color: "#fff" }),
                    }),
                    (0, _.jsxs)(c.default, {
                      style: { flex: 1, marginHorizontal: j.spacing.sm },
                      children: [
                        (0, _.jsx)(i.default, {
                          style: [j.typography.h2, { color: B.text }],
                          numberOfLines: 2,
                          children: T.title,
                        }),
                        (0, _.jsxs)(i.default, {
                          style: [j.typography.small, { color: B.textMuted }],
                          children: [
                            T.venue_name,
                            " \xb7 ",
                            (() => {
                              if ("daily" === T.frequency) return P("freqDaily");
                              if ("weekly" === T.frequency) {
                                const e = T.weekdays.map((e) => P(I[e])).join(", ");
                                return `${P("freqWeekly")} \xb7 ${e}`;
                              }
                              const e = P(`mw_${T.monthly_week}`),
                                t = null != T.monthly_weekday ? P(I[T.monthly_weekday]) : "";
                              return `${P("freqMonthly")} \xb7 ${e} ${t}`;
                            })(),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(h.Badge, { label: P(`seriesStatus_${T.status}`), tone: U }),
                  ],
                }),
                W &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(i.default, {
                        style: [j.typography.h3, { color: B.text, marginBottom: j.spacing.sm }],
                        children: P("analytics"),
                      }),
                      (0, _.jsxs)(c.default, {
                        style: R.grid,
                        children: [
                          (0, _.jsx)(k, {
                            label: P("seriesOccurrences"),
                            value: (0, w.formatNumber)(W.occurrences),
                            colors: B,
                          }),
                          (0, _.jsx)(k, {
                            label: P("seriesRetention"),
                            value: `${(0, w.formatNumber)(Math.round(100 * W.retentionRate))}%`,
                            colors: B,
                          }),
                          (0, _.jsx)(k, {
                            label: P("statFillRate"),
                            value: `${(0, w.formatNumber)(Math.round(100 * W.fillRate))}%`,
                            colors: B,
                          }),
                          (0, _.jsx)(k, {
                            label: P("seriesAvgAttendance"),
                            value: `${(0, w.formatNumber)(Math.round(100 * W.avgAttendance))}%`,
                            colors: B,
                          }),
                          (0, _.jsx)(k, {
                            label: P("statReturningPlayers"),
                            value: (0, w.formatNumber)(W.returningPlayers),
                            colors: B,
                          }),
                          (0, _.jsx)(k, {
                            label: P("seriesRevenue"),
                            value: (0, w.formatPrice)(W.revenueKwd),
                            colors: B,
                          }),
                        ],
                      }),
                    ],
                  }),
                "ended" !== T.status &&
                  (0, _.jsxs)(c.default, {
                    style: { flexDirection: "row", gap: j.spacing.sm, marginTop: j.spacing.lg },
                    children: [
                      "active" === T.status
                        ? (0, _.jsx)(m.Button, {
                            title: P("pauseSeries"),
                            variant: "secondary",
                            loading: L,
                            onPress: () => J(() => (0, b.pauseSeries)(e, z.id)),
                            leftIcon: (0, _.jsx)(u.Ionicons, { name: "pause", size: 16, color: B.text }),
                            style: { flex: 1 },
                          })
                        : (0, _.jsx)(m.Button, {
                            title: P("resumeSeries"),
                            loading: L,
                            onPress: () => J(() => (0, b.resumeSeries)(e, z.id)),
                            leftIcon: (0, _.jsx)(u.Ionicons, { name: "play", size: 16, color: "#fff" }),
                            style: { flex: 1 },
                          }),
                      (0, _.jsx)(m.Button, {
                        title: P("endSeries"),
                        variant: "secondary",
                        loading: L,
                        onPress: () => J(() => (0, b.endSeries)(e, z.id)),
                        style: { flex: 1 },
                      }),
                    ],
                  }),
                "ended" !== T.status &&
                  (0, _.jsx)(m.Button, {
                    title: P("cancelSeries"),
                    variant: "danger",
                    onPress: () => F((e) => !e),
                    style: { marginTop: j.spacing.sm },
                    fullWidth: !0,
                    leftIcon: (0, _.jsx)(u.Ionicons, {
                      name: "close-circle-outline",
                      size: 16,
                      color: "#fff",
                    }),
                  }),
                V &&
                  (0, _.jsxs)(f.Card, {
                    style: { marginTop: j.spacing.md, borderColor: B.danger },
                    children: [
                      (0, _.jsx)(i.default, {
                        style: [j.typography.h3, { color: B.text }],
                        children: P("cancelSeriesTitle"),
                      }),
                      (0, _.jsx)(i.default, {
                        style: [j.typography.small, { color: B.textMuted, marginVertical: j.spacing.sm }],
                        children: P("cancelSeriesBody"),
                      }),
                      (0, _.jsx)(y.Input, {
                        value: E,
                        onChangeText: G,
                        placeholder: P("cancelReasonPlaceholder"),
                        maxLength: 200,
                      }),
                      (0, _.jsxs)(c.default, {
                        style: { flexDirection: "row", gap: j.spacing.sm },
                        children: [
                          (0, _.jsx)(m.Button, {
                            title: P("keepMatch"),
                            variant: "secondary",
                            onPress: () => F(!1),
                            style: { flex: 1 },
                          }),
                          (0, _.jsx)(m.Button, {
                            title: P("cancelSeries"),
                            variant: "danger",
                            loading: L,
                            onPress: async () => {
                              z && e && (await J(() => (0, b.cancelSeries)(e, z.id, E)), F(!1));
                            },
                            style: { flex: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, _.jsxs)(i.default, {
                  style: [
                    j.typography.h3,
                    { color: B.text, marginTop: j.spacing.xl, marginBottom: j.spacing.sm },
                  ],
                  children: [P("upcomingOccurrences"), " \xb7 ", (0, w.formatNumber)(X.length)],
                }),
                (0, _.jsx)(f.Card, {
                  padding: "sm",
                  children:
                    0 === X.length
                      ? (0, _.jsx)(i.default, {
                          style: [j.typography.small, { color: B.textMuted, padding: j.spacing.sm }],
                          children: P("noOrganizerMatches"),
                        })
                      : X.slice(0, 12).map((e, t) =>
                          (0, _.jsxs)(
                            n.default,
                            {
                              onPress: () => M.push(`/organizer/match/${e.id}`),
                              accessibilityRole: "button",
                              style: [
                                R.occRow,
                                {
                                  borderTopColor: B.border,
                                  borderTopWidth: 0 === t ? 0 : o.default.hairlineWidth,
                                },
                              ],
                              children: [
                                (0, _.jsx)(c.default, {
                                  style: [R.dot, { backgroundColor: Q }],
                                  children: (0, _.jsx)(u.Ionicons, {
                                    name: w.sportIcon[e.sport],
                                    size: 12,
                                    color: "#fff",
                                  }),
                                }),
                                (0, _.jsx)(i.default, {
                                  style: [
                                    j.typography.small,
                                    { color: B.text, flex: 1, marginHorizontal: j.spacing.sm },
                                  ],
                                  numberOfLines: 1,
                                  children: (0, w.formatGameTime)(e.starts_at),
                                }),
                                (0, _.jsxs)(i.default, {
                                  style: [
                                    j.typography.small,
                                    { color: B.textMuted, marginEnd: j.spacing.sm },
                                  ],
                                  children: [
                                    (0, w.formatNumber)(e.bookings_count),
                                    "/",
                                    (0, w.formatNumber)(e.max_players),
                                  ],
                                }),
                                (0, _.jsx)(u.Ionicons, {
                                  name: (0, S.chevronForward)(),
                                  size: 16,
                                  color: B.textMuted,
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                }),
                (0, _.jsx)(i.default, {
                  style: [j.typography.caption, { color: B.textMuted, marginTop: j.spacing.sm }],
                  children: P("editSingleHint"),
                }),
              ],
            }),
          ],
        });
      }));
    var t = r(_d[1]),
      s = e(r(_d[2])),
      a = e(r(_d[3])),
      n = e(r(_d[4])),
      l = e(r(_d[5])),
      o = e(r(_d[6])),
      i = e(r(_d[7])),
      c = e(r(_d[8])),
      d = r(_d[9]),
      u = r(_d[10]),
      g = r(_d[11]),
      f = r(_d[12]),
      h = r(_d[13]),
      m = r(_d[14]),
      y = r(_d[15]),
      p = r(_d[16]),
      x = r(_d[17]),
      j = r(_d[18]),
      b = r(_d[19]),
      w = r(_d[20]),
      v = r(_d[21]),
      S = r(_d[22]),
      C = r(_d[23]),
      _ = r(_d[24]);
    const I = ["dow_0", "dow_1", "dow_2", "dow_3", "dow_4", "dow_5", "dow_6"];
    const k = ({ label: e, value: t, colors: s }) =>
        (0, _.jsxs)(c.default, {
          style: [R.tile, { backgroundColor: s.surface, borderColor: s.border }],
          children: [
            (0, _.jsx)(i.default, { style: [j.typography.h2, { color: s.text }], children: t }),
            (0, _.jsx)(i.default, { style: [j.typography.caption, { color: s.textMuted }], children: e }),
          ],
        }),
      R = o.default.create({
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
          borderWidth: o.default.hairlineWidth,
        },
        sportIcon: {
          width: 44,
          height: 44,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: j.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: j.radius.md,
          borderWidth: o.default.hairlineWidth,
          padding: j.spacing.md,
          minHeight: 72,
          justifyContent: "center",
        },
        occRow: {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: j.spacing.sm,
          paddingHorizontal: j.spacing.xs,
        },
        dot: { width: 26, height: 26, borderRadius: 8, alignItems: "center", justifyContent: "center" },
      });
  },
  2471,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 625, 630, 615, 616, 671, 1311,
    675, 1171, 674, 13,
  ],
);
