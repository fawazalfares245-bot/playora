__d(
  function (g, _r, _i, _a, _m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, y.useAuth)(),
          { colors: k } = (0, b.useTheme)(),
          _ = (0, m.useRouter)(),
          O = (0, v.useT)(),
          [N, $] = (0, r.useState)(!0),
          [D, P] = (0, r.useState)([]),
          [W, F] = (0, r.useState)(null),
          [L, H] = (0, r.useState)(null),
          [E, A] = (0, r.useState)([]),
          [V, J] = (0, r.useState)(null),
          [q, U] = (0, r.useState)([]),
          [G, K] = (0, r.useState)("upcoming"),
          [Q, X] = (0, r.useState)(null),
          [er, setEr] = (0, r.useState)(null);
        (0, r.useEffect)(() => {
          t &&
            (0, C.fetchMyOrganizerApplication)(t.id)
              .then((t) => {
                "approved" === t?.status ? X(!0) : (X(!1), _.replace("/organizer/apply"));
              })
              .catch((e) => setEr(e));
        }, [t, _]);
        const Y = (0, r.useCallback)(async () => {
          if (!t) return;
          setEr(null);
          try {
            const [r, a, s, l, o, n] = await Promise.all([
              (0, C.fetchOrganizerMatches)(t.id, t.id),
              (0, C.fetchOrganizerStats)(t.id, t.id),
              (0, C.fetchOrganizerReputation)(t.id),
              (0, C.fetchOrganizerRatings)(t.id, t.id),
              (0, C.fetchOrganizerReferralStats)(t.id, t.id),
              (0, C.fetchOrganizerSeries)(t.id, t.id),
            ]);
            (P(r), F(a), H(s), A(l), J(o), U(n));
          } catch (e) {
            setEr(e);
          } finally {
            $(!1);
          }
        }, [t]);
        (0, m.useFocusEffect)(
          (0, r.useCallback)(() => {
            Q && Y();
          }, [Y, Q]),
        );
        const Z = D.filter((t) => t.effective_status === G),
          ee = (t) => `${(0, w.formatNumber)(Math.round(100 * t))}%`;
        if (er)
          return (0, R.jsx)(G9.GateScreen, {
            kind: "error",
            body: (0, G9.classifyError)(er).message,
            onRetry: () => {
              ($(!0), Y());
            },
            onBack: () => _.back(),
          });
        if (!0 !== Q)
          return (0, R.jsx)(c.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: k.bg },
            children: (0, R.jsx)(a.default, { color: k.accentText }),
          });
        return (0, R.jsxs)(c.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: k.bg },
          children: [
            (0, R.jsxs)(i.default, {
              style: B.header,
              children: [
                (0, R.jsx)(s.default, {
                  onPress: () => _.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: O("back"),
                  style: [B.iconBtn, { backgroundColor: k.surface, borderColor: k.border }],
                  children: (0, R.jsx)(u.Ionicons, { name: (0, z.chevronBack)(), size: 22, color: k.text }),
                }),
                (0, R.jsx)(n.default, {
                  style: [j.typography.h1, { color: k.text, flex: 1, marginHorizontal: j.spacing.md }],
                  children: O("organizerDashboard"),
                }),
                (0, R.jsx)(s.default, {
                  onPress: () => _.push("/organizer/concierge"),
                  accessibilityRole: "button",
                  accessibilityLabel: O("conciergeTitle"),
                  style: [
                    B.iconBtn,
                    { backgroundColor: k.accentMuted, borderColor: k.accent, marginEnd: j.spacing.sm },
                  ],
                  children: (0, R.jsx)(u.Ionicons, { name: "sparkles", size: 20, color: k.accentText }),
                }),
                (0, R.jsx)(s.default, {
                  onPress: () => _.push("/organizer/smart-schedule"),
                  accessibilityRole: "button",
                  accessibilityLabel: O("smartScheduleTitle"),
                  style: [
                    B.iconBtn,
                    { backgroundColor: k.surface, borderColor: k.border, marginEnd: j.spacing.sm },
                  ],
                  children: (0, R.jsx)(u.Ionicons, {
                    name: "calendar-outline",
                    size: 20,
                    color: k.accentText,
                  }),
                }),
                (0, R.jsx)(s.default, {
                  onPress: () => _.push("/organizer/quick"),
                  accessibilityRole: "button",
                  accessibilityLabel: O("quickMatchCta"),
                  style: [
                    B.createBtn,
                    {
                      backgroundColor: k.surface,
                      borderWidth: 1,
                      borderColor: k.border,
                      marginEnd: j.spacing.sm,
                    },
                  ],
                  children: (0, R.jsx)(u.Ionicons, { name: "flash", size: 20, color: k.accentText }),
                }),
                (0, R.jsx)(s.default, {
                  onPress: () => _.push("/organizer/create"),
                  accessibilityRole: "button",
                  accessibilityLabel: O("createMatch"),
                  style: [B.createBtn, { backgroundColor: k.accent }],
                  children: (0, R.jsx)(u.Ionicons, { name: "add", size: 22, color: k.accentInk }),
                }),
              ],
            }),
            N
              ? (0, R.jsx)(i.default, {
                  style: { flex: 1, alignItems: "center", justifyContent: "center" },
                  children: (0, R.jsx)(a.default, { color: k.accentText }),
                })
              : (0, R.jsxs)(l.default, {
                  contentContainerStyle: { padding: j.spacing.lg, paddingBottom: j.spacing.xxxl },
                  children: [
                    L &&
                      (0, R.jsx)(p.Card, {
                        children: (0, R.jsxs)(i.default, {
                          style: B.repRow,
                          children: [
                            (0, R.jsxs)(i.default, {
                              style: [B.scoreRing, { borderColor: k.accent }],
                              children: [
                                (0, R.jsx)(n.default, {
                                  style: [j.typography.display, { color: k.text }],
                                  children: (0, w.formatNumber)(L.score),
                                }),
                                (0, R.jsxs)(n.default, {
                                  style: [j.typography.caption, { color: k.textMuted }],
                                  children: ["/ ", (0, w.formatNumber)(100)],
                                }),
                              ],
                            }),
                            (0, R.jsxs)(i.default, {
                              style: { flex: 1, marginStart: j.spacing.lg },
                              children: [
                                (0, R.jsxs)(i.default, {
                                  style: { flexDirection: "row", alignItems: "center", gap: j.spacing.sm },
                                  children: [
                                    (0, R.jsx)(n.default, {
                                      style: [j.typography.h3, { color: k.text }],
                                      children: O("reputationScore"),
                                    }),
                                    (0, R.jsx)(h.Badge, { label: O(`tier_${L.tier}`), tone: I[L.tier] }),
                                  ],
                                }),
                                (0, R.jsxs)(i.default, {
                                  style: { marginTop: j.spacing.sm, gap: 4 },
                                  children: [
                                    (0, R.jsx)(S, {
                                      label: O("completionRate"),
                                      value: ee(L.completionRate),
                                      colors: k,
                                    }),
                                    (0, R.jsx)(S, {
                                      label: O("statCancellationRate"),
                                      value: ee(L.cancellationRate),
                                      colors: k,
                                    }),
                                    (0, R.jsx)(S, {
                                      label: O("attendanceAccuracy"),
                                      value: ee(L.attendanceAccuracy),
                                      colors: k,
                                    }),
                                    L.ratingCount > 0 &&
                                      (0, R.jsx)(S, {
                                        label: O("reputation"),
                                        value: `\u2605 ${L.avgRating.toFixed(1)} (${(0, w.formatNumber)(L.ratingCount)})`,
                                        colors: k,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    W &&
                      (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsx)(n.default, {
                            style: [
                              j.typography.h3,
                              { color: k.text, marginTop: j.spacing.xl, marginBottom: j.spacing.sm },
                            ],
                            children: O("analytics"),
                          }),
                          (0, R.jsxs)(i.default, {
                            style: B.grid,
                            children: [
                              (0, R.jsx)(T, {
                                label: O("statMatchesCreated"),
                                value: (0, w.formatNumber)(W.matchesCreated),
                                colors: k,
                              }),
                              (0, R.jsx)(T, {
                                label: O("statMatchesCompleted"),
                                value: (0, w.formatNumber)(W.matchesCompleted),
                                colors: k,
                              }),
                              (0, R.jsx)(T, {
                                label: O("statFillRate"),
                                value: ee(W.avgFillRate),
                                colors: k,
                              }),
                              (0, R.jsx)(T, {
                                label: O("statTimeToFill"),
                                value:
                                  null == W.avgTimeToFillHours
                                    ? "\u2014"
                                    : `${(0, w.formatNumber)(W.avgTimeToFillHours)}${O("hoursUnit")}`,
                                colors: k,
                              }),
                              (0, R.jsx)(T, {
                                label: O("statCancellationRate"),
                                value: ee(W.cancellationRate),
                                colors: k,
                              }),
                              (0, R.jsx)(T, {
                                label: O("statReturningPlayers"),
                                value: (0, w.formatNumber)(W.returningPlayers),
                                colors: k,
                              }),
                            ],
                          }),
                        ],
                      }),
                    V &&
                      (V.invitesSent > 0 || V.playersJoined > 0) &&
                      (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsxs)(i.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              marginTop: j.spacing.xl,
                              marginBottom: j.spacing.sm,
                            },
                            children: [
                              (0, R.jsx)(u.Ionicons, { name: "logo-whatsapp", size: 18, color: "#25D366" }),
                              (0, R.jsx)(n.default, {
                                style: [j.typography.h3, { color: k.text, marginStart: j.spacing.xs }],
                                children: O("referralTitle"),
                              }),
                            ],
                          }),
                          (0, R.jsxs)(i.default, {
                            style: B.grid,
                            children: [
                              (0, R.jsx)(T, {
                                label: O("referralSent"),
                                value: (0, w.formatNumber)(V.invitesSent),
                                colors: k,
                              }),
                              (0, R.jsx)(T, {
                                label: O("referralJoined"),
                                value: (0, w.formatNumber)(V.playersJoined),
                                colors: k,
                              }),
                              (0, R.jsx)(T, {
                                label: O("referralConversion"),
                                value: ee(V.conversionRate),
                                colors: k,
                              }),
                            ],
                          }),
                        ],
                      }),
                    q.length > 0 &&
                      (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsxs)(i.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              marginTop: j.spacing.xl,
                              marginBottom: j.spacing.sm,
                            },
                            children: [
                              (0, R.jsx)(u.Ionicons, { name: "repeat", size: 18, color: k.accentText }),
                              (0, R.jsx)(n.default, {
                                style: [j.typography.h3, { color: k.text, marginStart: j.spacing.xs }],
                                children: O("recurringSeries"),
                              }),
                            ],
                          }),
                          q.map((t) =>
                            (0, R.jsx)(
                              p.Card,
                              {
                                onPress: () => _.push(`/organizer/series/${t.id}`),
                                style: { marginBottom: j.spacing.sm },
                                padding: "md",
                                children: (0, R.jsxs)(i.default, {
                                  style: { flexDirection: "row", alignItems: "center" },
                                  children: [
                                    (0, R.jsx)(i.default, {
                                      style: [B.sportIcon, { backgroundColor: (0, w.sportColor)(t.sport) }],
                                      children: (0, R.jsx)(u.Ionicons, {
                                        name: "repeat",
                                        size: 16,
                                        color: "#fff",
                                      }),
                                    }),
                                    (0, R.jsxs)(i.default, {
                                      style: { flex: 1, marginHorizontal: j.spacing.sm },
                                      children: [
                                        (0, R.jsx)(n.default, {
                                          style: [j.typography.bodyStrong, { color: k.text }],
                                          numberOfLines: 1,
                                          children: t.title,
                                        }),
                                        (0, R.jsxs)(n.default, {
                                          style: [j.typography.small, { color: k.textMuted }],
                                          numberOfLines: 1,
                                          children: [
                                            t.venue_name,
                                            " \xb7 ",
                                            (0, w.formatNumber)(t.upcoming_occurrences),
                                            " ",
                                            O("upcomingOccurrences").toLowerCase(),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, R.jsx)(h.Badge, {
                                      label: O(`seriesStatus_${t.status}`),
                                      tone:
                                        "active" === t.status
                                          ? "success"
                                          : "paused" === t.status
                                            ? "warning"
                                            : "danger",
                                    }),
                                    (0, R.jsx)(u.Ionicons, {
                                      name: (0, z.chevronForward)(),
                                      size: 18,
                                      color: k.textMuted,
                                      style: { marginStart: 6 },
                                    }),
                                  ],
                                }),
                              },
                              t.id,
                            ),
                          ),
                        ],
                      }),
                    (0, R.jsx)(n.default, {
                      style: [
                        j.typography.h3,
                        { color: k.text, marginTop: j.spacing.xl, marginBottom: j.spacing.sm },
                      ],
                      children: O("myMatches"),
                    }),
                    (0, R.jsx)(i.default, {
                      style: [B.tabs, { backgroundColor: k.surfaceAlt, borderColor: k.border }],
                      children: ["upcoming", "completed", "cancelled"].map((t) => {
                        const r = t === G,
                          a = D.filter((r) => r.effective_status === t).length;
                        return (0, R.jsx)(
                          s.default,
                          {
                            onPress: () => K(t),
                            accessibilityRole: "button",
                            accessibilityState: { selected: r },
                            style: [B.tab, r && { backgroundColor: k.accent }],
                            children: (0, R.jsxs)(n.default, {
                              style: [j.typography.smallStrong, { color: r ? "#fff" : k.text }],
                              children: [
                                O(
                                  "upcoming" === t
                                    ? "tabUpcoming"
                                    : "completed" === t
                                      ? "tabCompleted"
                                      : "tabCancelled",
                                ),
                                a > 0 ? ` \xb7 ${(0, w.formatNumber)(a)}` : "",
                              ],
                            }),
                          },
                          t,
                        );
                      }),
                    }),
                    0 === Z.length
                      ? (0, R.jsx)(f.EmptyState, {
                          icon: "football-outline",
                          title: O("noOrganizerMatches"),
                          body: O("noOrganizerMatchesBody"),
                        })
                      : Z.map((t) =>
                          (0, R.jsx)(
                            M,
                            { match: t, colors: k, t: O, onPress: () => _.push(`/organizer/match/${t.id}`) },
                            t.id,
                          ),
                        ),
                    "upcoming" === G &&
                      0 === Z.length &&
                      (0, R.jsx)(x.Button, {
                        title: O("createMatch"),
                        fullWidth: !0,
                        onPress: () => _.push("/organizer/create"),
                        style: { marginTop: j.spacing.md },
                      }),
                    E.length > 0 &&
                      (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsx)(n.default, {
                            style: [
                              j.typography.h3,
                              { color: k.text, marginTop: j.spacing.xl, marginBottom: j.spacing.sm },
                            ],
                            children: O("reputation"),
                          }),
                          (0, R.jsx)(p.Card, {
                            padding: "md",
                            children: E.slice(0, 6).map((t, r) =>
                              (0, R.jsxs)(
                                i.default,
                                {
                                  style: [
                                    B.ratingRow,
                                    {
                                      borderTopColor: k.border,
                                      borderTopWidth: 0 === r ? 0 : o.default.hairlineWidth,
                                    },
                                  ],
                                  children: [
                                    (0, R.jsx)(n.default, {
                                      style: [j.typography.smallStrong, { color: k.warning, width: 64 }],
                                      children: "\u2605".repeat(t.rating),
                                    }),
                                    (0, R.jsxs)(i.default, {
                                      style: { flex: 1, marginHorizontal: j.spacing.sm },
                                      children: [
                                        (0, R.jsx)(n.default, {
                                          style: [j.typography.small, { color: k.text }],
                                          numberOfLines: 1,
                                          children: t.player_name,
                                        }),
                                        (0, R.jsx)(n.default, {
                                          style: [j.typography.caption, { color: k.textMuted }],
                                          numberOfLines: 1,
                                          children: t.match_title,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
          ],
        });
      }));
    var r = _r(d[1]),
      a = t(_r(d[2])),
      s = t(_r(d[3])),
      l = t(_r(d[4])),
      o = t(_r(d[5])),
      n = t(_r(d[6])),
      i = t(_r(d[7])),
      c = _r(d[8]),
      u = _r(d[9]),
      m = _r(d[10]),
      p = _r(d[11]),
      h = _r(d[12]),
      x = _r(d[13]),
      f = _r(d[14]),
      y = _r(d[15]),
      b = _r(d[16]),
      j = _r(d[17]),
      C = _r(d[18]),
      w = _r(d[19]),
      v = _r(d[20]),
      z = _r(d[21]),
      R = _r(d[22]),
      G9 = _r(d[23]);
    const I = { new: "neutral", rising: "warning", trusted: "success", elite: "accent" };
    const S = ({ label: t, value: r, colors: a }) =>
        (0, R.jsxs)(i.default, {
          style: { flexDirection: "row", justifyContent: "space-between" },
          children: [
            (0, R.jsx)(n.default, { style: [j.typography.small, { color: a.textMuted }], children: t }),
            (0, R.jsx)(n.default, { style: [j.typography.smallStrong, { color: a.text }], children: r }),
          ],
        }),
      T = ({ label: t, value: r, colors: a }) =>
        (0, R.jsxs)(i.default, {
          style: [B.tile, { backgroundColor: a.surface, borderColor: a.border }],
          children: [
            (0, R.jsx)(n.default, { style: [j.typography.h2, { color: a.text }], children: r }),
            (0, R.jsx)(n.default, { style: [j.typography.caption, { color: a.textMuted }], children: t }),
          ],
        }),
      M = ({ match: t, colors: r, t: a, onPress: s }) => {
        const l = (0, w.sportColor)(t.sport);
        return (0, R.jsxs)(p.Card, {
          onPress: s,
          style: { marginBottom: j.spacing.sm },
          padding: "md",
          children: [
            (0, R.jsxs)(i.default, {
              style: { flexDirection: "row", alignItems: "center" },
              children: [
                (0, R.jsx)(i.default, {
                  style: [B.sportIcon, { backgroundColor: l }],
                  children: (0, R.jsx)(u.Ionicons, { name: w.sportIcon[t.sport], size: 18, color: "#fff" }),
                }),
                (0, R.jsxs)(i.default, {
                  style: { flex: 1, marginHorizontal: j.spacing.sm },
                  children: [
                    (0, R.jsx)(n.default, {
                      style: [j.typography.bodyStrong, { color: r.text }],
                      numberOfLines: 1,
                      children: t.title,
                    }),
                    (0, R.jsxs)(n.default, {
                      style: [j.typography.small, { color: r.textMuted }],
                      numberOfLines: 1,
                      children: [t.venue?.name ?? "\u2014", " \xb7 ", (0, w.formatGameTime)(t.starts_at)],
                    }),
                  ],
                }),
                "private" === t.visibility &&
                  (0, R.jsx)(u.Ionicons, {
                    name: "lock-closed",
                    size: 14,
                    color: r.textMuted,
                    style: { marginEnd: 6 },
                  }),
                (0, R.jsx)(u.Ionicons, { name: (0, z.chevronForward)(), size: 18, color: r.textMuted }),
              ],
            }),
            (0, R.jsxs)(i.default, {
              style: [B.metaRow, { borderTopColor: r.border }],
              children: [
                (0, R.jsx)(k, {
                  icon: "people",
                  text: `${(0, w.formatNumber)(t.bookings_count)}/${(0, w.formatNumber)(t.max_players)}`,
                  colors: r,
                }),
                !!t.waitlist_count &&
                  (0, R.jsx)(k, {
                    icon: "hourglass-outline",
                    text: `${(0, w.formatNumber)(t.waitlist_count)} ${a("waitlistedCount")}`,
                    colors: r,
                  }),
                !!t.pending_count &&
                  (0, R.jsx)(k, {
                    icon: "alert-circle-outline",
                    text: `${(0, w.formatNumber)(t.pending_count)} ${a("pendingCount")}`,
                    colors: r,
                    accent: !0,
                  }),
              ],
            }),
          ],
        });
      },
      k = ({ icon: t, text: r, colors: a, accent: s }) =>
        (0, R.jsxs)(i.default, {
          style: { flexDirection: "row", alignItems: "center", marginEnd: j.spacing.md },
          children: [
            (0, R.jsx)(u.Ionicons, { name: t, size: 14, color: s ? a.accent : a.textMuted }),
            (0, R.jsx)(n.default, {
              style: [
                j.typography.small,
                { color: s ? a.accentText : a.textMuted, marginHorizontal: j.spacing.xs },
              ],
              children: r,
            }),
          ],
        }),
      B = o.default.create({
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
        createBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        },
        repRow: { flexDirection: "row", alignItems: "center" },
        scoreRing: {
          width: 96,
          height: 96,
          borderRadius: 48,
          borderWidth: 4,
          alignItems: "center",
          justifyContent: "center",
        },
        grid: { flexDirection: "row", flexWrap: "wrap", gap: j.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: j.radius.md,
          borderWidth: o.default.hairlineWidth,
          padding: j.spacing.md,
          minHeight: 76,
          justifyContent: "center",
        },
        tabs: {
          flexDirection: "row",
          borderRadius: j.radius.md,
          borderWidth: o.default.hairlineWidth,
          padding: 3,
          gap: 3,
          marginBottom: j.spacing.md,
        },
        tab: {
          flex: 1,
          height: 38,
          borderRadius: j.radius.sm,
          alignItems: "center",
          justifyContent: "center",
        },
        sportIcon: {
          width: 38,
          height: 38,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        },
        metaRow: {
          flexDirection: "row",
          alignItems: "center",
          marginTop: j.spacing.sm,
          paddingTop: j.spacing.sm,
          borderTopWidth: o.default.hairlineWidth,
        },
        ratingRow: { flexDirection: "row", alignItems: "center", paddingVertical: j.spacing.sm },
      });
  },
  2465,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 1627, 630, 615, 616, 671, 1311, 675,
    1171, 13, 9001,
  ],
);
