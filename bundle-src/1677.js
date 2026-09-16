__d(
  function (_g, _r, _i, _a, _m, _e, _d) {
    var e = _r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, profile: B } = (0, w.useAuth)(),
          { colors: A } = (0, I.useTheme)(),
          F = (0, m.useRouter)(),
          O = (0, t.useRef)(!1);
        (0, t.useEffect)(() => {
          e &&
            !O.current &&
            ((O.current = !0),
            (async () => {
              try {
                const t = await (0, k.fetchPendingCeremony)(e.id);
                t && (await (0, k.markCeremonySeen)(e.id, t), F.push(`/teams/battle/ceremony/${t}`));
              } catch {}
            })());
        }, [e, F]);
        const E = (0, D.useT)(),
          [G, J] = (0, t.useState)(null),
          [Y, q] = (0, t.useState)(!1),
          [K, Q] = (0, t.useState)(null),
          [X, Z] = (0, t.useState)(null),
          [ee, te] = (0, t.useState)(null),
          [re, oe] = (0, t.useState)([]),
          [ae, ne] = (0, t.useState)([]),
          [se, le] = (0, t.useState)(null),
          [ie, de] = (0, t.useState)([]),
          [ce, ue] = (0, t.useState)([]),
          [pe, me] = (0, t.useState)("list"),
          [ge, fe] = (0, t.useState)(!1),
          [he, ye] = (0, t.useState)(!1),
          [qq, qqSet] = (0, t.useState)(""),
          xe = (0, t.useRef)(null),
          be = (0, t.useRef)(!1),
          je = (0, t.useCallback)(async () => {
            if (!e) return;
            let t;
            try {
              (Q(null), (t = await (0, k.fetchDiscover)(e.id)), J(t));
            } catch (e) {
              return void Q((0, M.storeErrorText)(e?.message ?? "") || E("error"));
            } finally {
              q(!1);
            }
            ((0, k.fetchMyTeams)(e.id)
              .then(oe)
              .catch(() => oe([])),
              (0, k.fetchTeamRankings)(void 0, e.id)
                .then(ne)
                .catch(() => ne([])),
              (0, k.fetchClanBattles)(e.id)
                .then((e) => le(e.find((e) => "pending" === e.status && e.can_respond) ?? null))
                .catch(() => le(null)),
              (0, k.fetchAwardLeaderboard)({ viewerId: e.id })
                .then(de)
                .catch(() => de([])),
              (0, k.fetchUpcomingGames)({ userId: e.id })
                .then(ue)
                .catch(() => ue([])),
              be.current ||
                ((be.current = !0),
                t.suggested.forEach((t) => (0, k.logFeedSignal)(e.id, "impression", t.game_id))));
          }, [e]);
        ((0, m.useFocusEffect)(
          (0, t.useCallback)(() => {
            je();
          }, [je]),
        ),
          (0, v.useLiveRefresh)(je));
        const [Ce, we] = (0, t.useState)(!0),
          [Ie, Se] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          e &&
            (r.default
              .getItem(`playora.firstweek.done:${e.id}`)
              .then((e) => we(!!e))
              .catch(() => {}),
            r.default
              .getItem(`playora.visitedCompete:${e.id}`)
              .then((e) => Se(!!e))
              .catch(() => {}));
        }, [e]);
        const ke = () => {
            (we(!0), e && r.default.setItem(`playora.firstweek.done:${e.id}`, "1").catch(() => {}));
          },
          [, Re] = (0, t.useState)(0),
          // F-CQUAL-10: the strip was derived from new Date() once, at mount, on a tab screen that
          // stays mounted for the life of a 30-day session - so after midnight its first chip was
          // yesterday, and always empty. The minute tick carries the current day, and the strip
          // rebuilds when it rolls over.
          [dk9, sdk9] = (0, t.useState)(() => new Date().toDateString());
        (0, t.useEffect)(() => {
          const e = setInterval(() => {
            (Re((e) => e + 1), sdk9(new Date().toDateString()));
          }, 6e4);
          return () => clearInterval(e);
        }, []);
        const De = (t) => {
            (e && (0, k.logFeedSignal)(e.id, "click", t), F.push(`/game/${t}`));
          },
          // Free-text search over venue name, area and organiser name.
          q9 = qq.trim().toLowerCase(),
          m9 = (gq) => {
            if (!q9) return !0;
            const vn9 = gq && "object" == typeof gq.venue ? gq.venue : null;
            return [gq?.title, vn9?.name, gq?.venue_name, gq?.area, vn9?.area, gq?.organizer_name].some(
              (s9) =>
                String(s9 ?? "")
                  .toLowerCase()
                  .includes(q9),
            );
          },
          ze = (0, t.useMemo)(() => {
            const e = new Date();
            return Array.from(
              { length: P },
              (t, r) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + r, 12),
            );
          }, [dk9]),
          ve = (0, t.useMemo)(
            () =>
              (G?.suggested ?? []).filter(
                (e) => !((X && e.sport !== X) || (ee && L(new Date(e.starts_at)) !== ee) || !m9(e)),
              ),
            [G, X, ee, q9],
          ),
          Me = (0, t.useMemo)(() => {
            const e = new Map();
            for (const t of ve) {
              const r = L(new Date(t.starts_at)),
                o = e.get(r) ?? [];
              (o.push(t), e.set(r, o));
            }
            return [...e.entries()].sort(([e], [t]) => e.localeCompare(t));
          }, [ve]),
          Te = (e) => {
            const t = new Date();
            return e === L(t)
              ? E("todayLabel")
              : e === L(new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 12))
                ? E("tomorrowLabel")
                : (0, Z9.formatInZone)(new Date(`${e}T12:00:00`), "en", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  });
          },
          // F-CARCH-2: the list rendered G.suggested and the map rendered ce - two different sets
          // behind one toggle - so the same filters could show a game in one view and not the other.
          // The map is now built from the rows the list is showing, so the toggle changes the
          // presentation and never the membership. Driving both from ce would also have closed it,
          // and is what the finding suggests first, but it would put the viewer's own and already-
          // joined matches into a personalised list that deliberately leaves them out: a product
          // change rather than a fix.
          We = (0, t.useMemo)(() => {
            const e = new Set(ve.map((e) => e.game_id));
            return ce.filter((t) => e.has(t.id));
          }, [ce, ve]),
          Pe = (0, t.useMemo)(() => {
            const e = new Map();
            for (const t of We) e.has(t.venue.id) || e.set(t.venue.id, t.venue);
            return [...e.values()];
          }, [We]),
          // F-CQUAL-3: this advertised availability from the union of ce and G.suggested while the
          // list can only render G.suggested, so tapping a marked day could land on an empty one.
          // Marked days come from the rows the list renders.
          Le = (0, t.useMemo)(() => {
            const e = new Set();
            for (const t of G?.suggested ?? [])
              (X && t.sport !== X) || !m9(t) || e.add(L(new Date(t.starts_at)));
            return e;
          }, [G, X, q9]);
        return (0, T.jsxs)(u.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: A.bg },
          children: [
            (0, T.jsxs)(d.default, {
              style: V.header,
              children: [
                (0, T.jsx)(i.default, {
                  style: [S.typography.h2, { color: A.text, flex: 1 }],
                  children: E("appName"),
                }),
                (0, T.jsx)(y.HeaderActions, {}),
              ],
            }),
            null === G && K
              ? (0, T.jsxs)(d.default, {
                  style: { flex: 1, alignItems: "center", justifyContent: "center", padding: S.spacing.xl },
                  children: [
                    (0, T.jsx)(h.EmptyState, { icon: "cloud-offline-outline", title: E("error"), body: K }),
                    (0, T.jsx)(g.Button, {
                      title: E("retry"),
                      onPress: () => je(),
                      style: { marginTop: S.spacing.md },
                    }),
                  ],
                })
              : null === G
                ? (0, T.jsx)(d.default, {
                    style: { flex: 1, alignItems: "center", justifyContent: "center" },
                    children: (0, T.jsx)(o.default, { color: A.accentText }),
                  })
                : (0, T.jsxs)(s.default, {
                    contentContainerStyle: [
                      { paddingHorizontal: S.spacing.lg, paddingBottom: S.spacing.xxxl },
                      { maxWidth: 480, width: "100%", alignSelf: "center" },
                    ],
                    refreshControl: (0, T.jsx)(n.default, {
                      refreshing: Y,
                      onRefresh: () => {
                        (q(!0), je());
                      },
                      tintColor: A.accent,
                    }),
                    children: [
                      se &&
                        (0, T.jsx)(d.default, {
                          style: { marginBottom: S.spacing.md },
                          children: (0, T.jsx)(C.GauntletStrip, {
                            battle: se,
                            busy: he,
                            onRespond: async (t, r) => {
                              if (e && !he) {
                                ye(!0);
                                try {
                                  (await (0, k.respondClanChallenge)(e.id, t, r), await je());
                                } catch {
                                } finally {
                                  ye(!1);
                                }
                              }
                            },
                          }),
                        }),
                      "booked" === G.next_up?.kind &&
                        m9(G.next_up) &&
                        (0, T.jsx)(H, {
                          row: G.next_up,
                          colors: A,
                          t: E,
                          onPress: () => De(G.next_up.game_id),
                        }),
                      (0, T.jsx)(d.default, {
                        style: [V.profileCard, { backgroundColor: A.surface, borderColor: A.border }],
                        children: (0, T.jsxs)(a.default, {
                          onPress: () => e && F.push(`/passport/${e.id}`),
                          accessibilityRole: "button",
                          style: V.profileTop,
                          children: [
                            (0, T.jsx)(d.default, {
                              style: [V.avatar, { backgroundColor: A.surfaceAlt, overflow: "hidden" }],
                              children: B?.avatar_url
                                ? (0, T.jsx)(c.AppImage, {
                                    uri: B.avatar_url,
                                    style: l.default.absoluteFill,
                                    priority: "high",
                                  })
                                : (0, T.jsx)(p.Ionicons, { name: "person", size: 20, color: A.textMuted }),
                            }),
                            (0, T.jsxs)(d.default, {
                              style: { flex: 1, marginStart: S.spacing.md },
                              children: [
                                (0, T.jsxs)(i.default, {
                                  style: [S.typography.bodyStrong, { color: A.text }],
                                  numberOfLines: 1,
                                  children: ["@", G.handle],
                                }),
                                (0, T.jsx)(i.default, {
                                  style: [S.typography.caption, { color: A.textMuted }],
                                  numberOfLines: 1,
                                  children: G.full_name,
                                }),
                              ],
                            }),
                            (0, T.jsx)(p.Ionicons, {
                              name: (0, z.chevronForward)(),
                              size: 16,
                              color: A.textMuted,
                            }),
                          ],
                        }),
                      }),
                      B &&
                        0 === (B.preferred_sports?.length ?? 0) &&
                        (0, T.jsxs)(a.default, {
                          onPress: () => F.push("/preferences"),
                          accessibilityRole: "button",
                          accessibilityLabel: E("prefsPromptTitle"),
                          style: [V.prefsPrompt, { backgroundColor: A.surface, borderColor: A.border }],
                          children: [
                            (0, T.jsxs)(d.default, {
                              style: { flex: 1 },
                              children: [
                                (0, T.jsx)(i.default, {
                                  style: [S.typography.bodyStrong, { color: A.text }],
                                  children: E("prefsPromptTitle"),
                                }),
                                (0, T.jsx)(i.default, {
                                  style: [S.typography.small, { color: A.textMuted, marginTop: 2 }],
                                  children: E("prefsPromptBody"),
                                }),
                              ],
                            }),
                            (0, T.jsx)(p.Ionicons, {
                              name: (0, z.chevronForward)(),
                              size: 20,
                              color: A.accentText,
                            }),
                          ],
                        }),
                      (() => {
                        if (Ce || !B) return null;
                        if (!(Date.now() - new Date(B.created_at).getTime() < 6048e5)) return null;
                        const t = [
                          {
                            done: (G.games_played ?? 0) > 0 || "booked" === G.next_up?.kind,
                            label: E("fwGoalJoin"),
                            // F-CQUAL-11: guarded by next_up with no fallback, so with no next-up
                            // game the tap logged a funnel event and went nowhere. The other two
                            // goals navigate unconditionally.
                            go: () => (G.next_up ? De(G.next_up.game_id) : F.push("/discover")),
                          },
                          {
                            done: G.following >= 3,
                            label: E("fwGoalFollow", { n: (0, _.formatNumber)(3) }),
                            go: () => F.push("/discover"),
                          },
                          { done: Ie, label: E("fwGoalCompete"), go: () => F.push("/(tabs)/games") },
                        ];
                        return t.every((e) => e.done)
                          ? null
                          : (0, T.jsxs)(d.default, {
                              style: [V.fwCard, { backgroundColor: A.surface, borderColor: A.accent }],
                              children: [
                                (0, T.jsxs)(d.default, {
                                  style: { flexDirection: "row", alignItems: "center" },
                                  children: [
                                    (0, T.jsx)(i.default, {
                                      style: [S.typography.bodyStrong, { color: A.text, flex: 1 }],
                                      children: E("fwTitle"),
                                    }),
                                    (0, T.jsx)(a.default, {
                                      onPress: ke,
                                      accessibilityRole: "button",
                                      accessibilityLabel: E("cancel"),
                                      hitSlop: 10,
                                      children: (0, T.jsx)(p.Ionicons, {
                                        name: "close",
                                        size: 16,
                                        color: A.textMuted,
                                      }),
                                    }),
                                  ],
                                }),
                                t.map((t, r) =>
                                  (0, T.jsxs)(
                                    a.default,
                                    {
                                      onPress: t.done
                                        ? void 0
                                        : () => {
                                            (e && (0, k.logFunnel)(e.id, `firstweek:tap${r + 1}`), t.go());
                                          },
                                      accessibilityRole: "button",
                                      accessibilityState: { checked: t.done },
                                      style: {
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginTop: S.spacing.sm,
                                        minHeight: 32,
                                      },
                                      children: [
                                        (0, T.jsx)(p.Ionicons, {
                                          name: t.done ? "checkmark-circle" : "ellipse-outline",
                                          size: 20,
                                          color: t.done ? A.success : A.textMuted,
                                        }),
                                        (0, T.jsx)(i.default, {
                                          style: [
                                            S.typography.small,
                                            {
                                              color: t.done ? A.textMuted : A.text,
                                              marginStart: S.spacing.sm,
                                              flex: 1,
                                              textDecorationLine: t.done ? "line-through" : "none",
                                            },
                                          ],
                                          children: t.label,
                                        }),
                                        !t.done &&
                                          (0, T.jsx)(p.Ionicons, {
                                            name: (0, z.chevronForward)(),
                                            size: 15,
                                            color: A.accentText,
                                          }),
                                      ],
                                    },
                                    r,
                                  ),
                                ),
                              ],
                            });
                      })(),
                      se
                        ? null
                        : re.length > 0
                          ? (0, T.jsx)(s.default, {
                              horizontal: !0,
                              showsHorizontalScrollIndicator: !1,
                              contentContainerStyle: { gap: S.spacing.sm, paddingBottom: S.spacing.md },
                              children: re.map((e) => {
                                const t = ae.findIndex((t) => t.team.id === e.id),
                                  r = t >= 0 ? ae[t] : null;
                                return (0, T.jsxs)(
                                  a.default,
                                  {
                                    onPress: () => F.push(`/teams/${e.id}`),
                                    accessibilityRole: "button",
                                    accessibilityLabel: e.name,
                                    style: [
                                      V.clanCard,
                                      { backgroundColor: A.surface, borderColor: A.border },
                                    ],
                                    children: [
                                      (0, T.jsx)(f.ClanCrest, {
                                        name: e.name,
                                        color: e.color_primary,
                                        size: 38,
                                      }),
                                      (0, T.jsxs)(d.default, {
                                        style: { marginStart: S.spacing.sm, minWidth: 0 },
                                        children: [
                                          (0, T.jsx)(i.default, {
                                            style: [S.typography.smallStrong, { color: A.text }],
                                            numberOfLines: 1,
                                            children: e.name,
                                          }),
                                          (0, T.jsxs)(i.default, {
                                            style: [S.typography.caption, { color: A.textMuted }],
                                            numberOfLines: 1,
                                            children: [
                                              t >= 0 ? `#${(0, _.formatNumber)(t + 1)} \xb7 ` : "",
                                              r
                                                ? `W${(0, _.formatNumber)(r.stats.wins)} L${(0, _.formatNumber)(r.stats.losses)}`
                                                : E(e.sport),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                            })
                          : (0, T.jsxs)(a.default, {
                              onPress: () => F.push("/teams"),
                              accessibilityRole: "button",
                              accessibilityLabel: E("homeClansCta"),
                              style: [V.clanCta, { backgroundColor: A.surface, borderColor: A.accent }],
                              children: [
                                (0, T.jsx)(d.default, {
                                  style: [V.clanCtaIcon, { backgroundColor: A.accent }],
                                  children: (0, T.jsx)(p.Ionicons, {
                                    name: "flag-outline",
                                    size: 18,
                                    color: A.accentInk,
                                  }),
                                }),
                                (0, T.jsxs)(d.default, {
                                  style: { flex: 1, marginStart: S.spacing.md },
                                  children: [
                                    (0, T.jsx)(i.default, {
                                      style: [S.typography.bodyStrong, { color: A.text }],
                                      children: E("homeClansCta"),
                                    }),
                                    (0, T.jsx)(i.default, {
                                      style: [S.typography.caption, { color: A.textMuted }],
                                      numberOfLines: 1,
                                      children: E("homeClansCtaBody"),
                                    }),
                                  ],
                                }),
                                (0, T.jsx)(p.Ionicons, {
                                  name: (0, z.chevronForward)(),
                                  size: 16,
                                  color: A.textMuted,
                                }),
                              ],
                            }),
                      "suggested" === G.next_up?.kind &&
                        m9(G.next_up) &&
                        (0, T.jsxs)(a.default, {
                          onPress: () => De(G.next_up.game_id),
                          accessibilityRole: "button",
                          style: { marginBottom: S.spacing.md },
                          children: [
                            (0, T.jsx)(H, {
                              row: G.next_up,
                              colors: A,
                              t: E,
                              onPress: () => De(G.next_up.game_id),
                            }),
                            (0, T.jsx)(N, { row: G.next_up, colors: A, t: E }),
                          ],
                        }),
                      ie.length > 0 &&
                        (0, T.jsxs)(T.Fragment, {
                          children: [
                            (0, T.jsxs)(d.default, {
                              style: V.leadersHead,
                              children: [
                                (0, T.jsx)(i.default, {
                                  style: [V.leadersLabel, { color: A.textMuted, flex: 1 }],
                                  children: E("topPlayers").toUpperCase(),
                                }),
                                (0, T.jsx)(a.default, {
                                  onPress: () => F.push("/awards/leaderboard"),
                                  accessibilityRole: "button",
                                  accessibilityLabel: E("viewAll"),
                                  hitSlop: 8,
                                  children: (0, T.jsx)(i.default, {
                                    style: [S.typography.smallStrong, { color: A.accentText }],
                                    children: E("viewAll"),
                                  }),
                                }),
                              ],
                            }),
                            (0, T.jsx)(s.default, {
                              horizontal: !0,
                              showsHorizontalScrollIndicator: !1,
                              contentContainerStyle: { gap: S.spacing.sm, paddingBottom: S.spacing.md },
                              children: ie.slice(0, 8).map((e, t) =>
                                (0, T.jsxs)(
                                  a.default,
                                  {
                                    onPress: () => F.push(`/player/${e.user_id}`),
                                    accessibilityRole: "button",
                                    accessibilityLabel: e.name,
                                    style: [
                                      V.leaderChip,
                                      {
                                        backgroundColor: A.surface,
                                        borderColor: 0 === t ? A.accent : A.border,
                                      },
                                    ],
                                    children: [
                                      (0, T.jsx)(i.default, {
                                        style: [
                                          S.typography.smallStrong,
                                          { color: 0 === t ? A.accentText : A.textMuted, width: 16 },
                                        ],
                                        children: (0, _.formatNumber)(t + 1),
                                      }),
                                      (0, T.jsx)(b.PlayerAvatar, { name: e.name, seed: t + 2, size: 28 }),
                                      (0, T.jsxs)(d.default, {
                                        style: { marginStart: S.spacing.xs, minWidth: 0 },
                                        children: [
                                          (0, T.jsx)(i.default, {
                                            style: [
                                              S.typography.caption,
                                              { color: A.text, fontWeight: "700" },
                                            ],
                                            numberOfLines: 1,
                                            children: e.name,
                                          }),
                                          (0, T.jsxs)(i.default, {
                                            style: [V.leaderMeta, { color: A.textMuted }],
                                            children: [
                                              "\ud83c\udfc6 ",
                                              (0, _.formatNumber)(e.total),
                                              " \xb7 MVP ",
                                              (0, _.formatNumber)(e.mvp),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.user_id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      (0, T.jsx)(d.default, {
                        style: V.sportRow,
                        children: W.map((e) => {
                          const t = X === e;
                          return (0, T.jsxs)(
                            a.default,
                            {
                              onPress: () => Z(t ? null : e),
                              accessibilityRole: "button",
                              accessibilityState: { selected: t },
                              style: [
                                V.sportBox,
                                {
                                  backgroundColor: t ? A.accent : A.surface,
                                  borderColor: t ? A.accent : A.border,
                                },
                              ],
                              children: [
                                (0, T.jsx)(d.default, {
                                  style: [
                                    V.sportIconWrap,
                                    { backgroundColor: t ? "rgba(0,0,0,0.14)" : (0, _.sportColor)(e) },
                                  ],
                                  children: (0, T.jsx)(p.Ionicons, {
                                    name: _.sportIcon[e],
                                    size: 20,
                                    color: t ? A.accentInk : "#fff",
                                  }),
                                }),
                                (0, T.jsx)(i.default, {
                                  style: [
                                    S.typography.smallStrong,
                                    { color: t ? A.accentInk : A.text, marginTop: 6 },
                                  ],
                                  children: E(e),
                                }),
                              ],
                            },
                            e,
                          );
                        }),
                      }),
                      (0, T.jsxs)(s.default, {
                        ref: xe,
                        horizontal: !0,
                        showsHorizontalScrollIndicator: !1,
                        contentContainerStyle: { gap: S.spacing.xs, paddingVertical: S.spacing.md },
                        children: [
                          (0, T.jsx)(a.default, {
                            onPress: () => te(null),
                            accessibilityRole: "button",
                            style: [
                              V.dayCell,
                              {
                                backgroundColor: null === ee ? A.accent : A.surface,
                                borderColor: null === ee ? A.accent : A.border,
                              },
                            ],
                            children: (0, T.jsx)(i.default, {
                              style: [
                                S.typography.smallStrong,
                                { color: null === ee ? A.accentInk : A.text },
                              ],
                              children: E("all"),
                            }),
                          }),
                          ze.map((e) => {
                            const t = L(e),
                              r = ee === t;
                            return (0, T.jsxs)(
                              a.default,
                              {
                                onPress: () => te(r ? null : t),
                                accessibilityRole: "button",
                                accessibilityState: { selected: r },
                                style: [
                                  V.dayCell,
                                  {
                                    backgroundColor: r ? A.accent : A.surface,
                                    borderColor: r ? A.accent : A.border,
                                  },
                                ],
                                children: [
                                  (0, T.jsx)(i.default, {
                                    style: [V.dayDow, { color: r ? A.accentInk : A.textMuted }],
                                    children: (0, Z9.formatInZone)(e, "en", { weekday: "short" }).toUpperCase(),
                                  }),
                                  (0, T.jsx)(i.default, {
                                    style: [S.typography.bodyStrong, { color: r ? A.accentInk : A.text }],
                                    children: (0, _.formatNumber)(e.getDate()),
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                          (0, T.jsxs)(a.default, {
                            onPress: () => fe(!0),
                            accessibilityRole: "button",
                            accessibilityLabel: E("monthView"),
                            style: [
                              V.dayCell,
                              {
                                backgroundColor: A.surfaceAlt,
                                borderColor: A.border,
                                justifyContent: "center",
                              },
                            ],
                            children: [
                              (0, T.jsx)(p.Ionicons, {
                                name: "calendar-outline",
                                size: 18,
                                color: A.accentText,
                              }),
                              (0, T.jsx)(p.Ionicons, {
                                name: "chevron-down",
                                size: 10,
                                color: A.textMuted,
                                style: { marginTop: 2 },
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, T.jsxs)(a.default, {
                        onPress: () => F.push("/organizer/quick"),
                        accessibilityRole: "button",
                        style: [V.hostCta, { backgroundColor: A.accent }],
                        children: [
                          (0, T.jsx)(p.Ionicons, {
                            name: "add-circle-outline",
                            size: 20,
                            color: A.accentInk,
                          }),
                          (0, T.jsx)(i.default, {
                            style: [
                              S.typography.bodyStrong,
                              { color: A.accentInk, flex: 1, marginStart: S.spacing.sm },
                            ],
                            children: E("hostAGame"),
                          }),
                          (0, T.jsx)(p.Ionicons, {
                            name: (0, z.chevronForward)(),
                            size: 16,
                            color: A.accentInk,
                          }),
                        ],
                      }),
                      // Search games by venue name, area or organiser name.
                      (0, T.jsxs)(d.default, {
                        style: [V.searchWrap, { backgroundColor: A.surface, borderColor: A.border }],
                        children: [
                          (0, T.jsx)(p.Ionicons, { name: "search-outline", size: 18, color: A.textMuted }),
                          (0, T.jsx)(Q9.default, {
                            value: qq,
                            onChangeText: qqSet,
                            placeholder: E("homeSearchPlaceholder"),
                            placeholderTextColor: A.textMuted,
                            accessibilityLabel: E("homeSearchLabel"),
                            autoCapitalize: "none",
                            autoCorrect: !1,
                            returnKeyType: "search",
                            maxLength: 60,
                            style: [V.searchInput, { color: A.text }],
                          }),
                          qq.length > 0 &&
                            (0, T.jsx)(a.default, {
                              onPress: () => qqSet(""),
                              accessibilityRole: "button",
                              accessibilityLabel: E("homeSearchClear"),
                              style: [V.searchClear, { backgroundColor: A.surfaceAlt }],
                              children: (0, T.jsx)(p.Ionicons, {
                                name: "close",
                                size: 14,
                                color: A.textMuted,
                              }),
                            }),
                        ],
                      }),
                      q9.length > 0 &&
                        (0, T.jsx)(i.default, {
                          style: [
                            S.typography.caption,
                            { color: A.textMuted, marginTop: -6, marginBottom: S.spacing.md },
                          ],
                          accessibilityLiveRegion: "polite",
                          children: E("homeSearchResults", { n: ve.length, q: qq.trim() }),
                        }),
                      (0, T.jsx)(d.default, {
                        style: V.modeRow,
                        children: (0, T.jsx)(d.default, {
                          style: [V.modeSeg, { backgroundColor: A.surfaceAlt, borderColor: A.border }],
                          children: ["list", "map"].map((e) => {
                            const t = pe === e;
                            return (0, T.jsxs)(
                              a.default,
                              {
                                onPress: () => me(e),
                                accessibilityRole: "button",
                                accessibilityState: { selected: t },
                                style: [V.modeBtn, t && { backgroundColor: A.accent }],
                                children: [
                                  (0, T.jsx)(p.Ionicons, {
                                    name: "list" === e ? "list-outline" : "map-outline",
                                    size: 13,
                                    color: t ? A.accentInk : A.textMuted,
                                  }),
                                  (0, T.jsx)(i.default, {
                                    style: [V.modeText, { color: t ? A.accentInk : A.textMuted }],
                                    children: E("list" === e ? "listView" : "mapView"),
                                  }),
                                ],
                              },
                              e,
                            );
                          }),
                        }),
                      }),
                      "map" === pe
                        ? (0, T.jsx)(d.default, {
                            style: [V.mapWrap, { borderColor: A.border }],
                            children: (0, T.jsx)(j.VenueMap, {
                              venues: Pe,
                              games: We,
                              onExpand: () => F.push({ pathname: "/map", params: X ? { sport: X } : {} }),
                            }),
                          })
                        : 0 === ve.length
                          ? q9
                            ? (0, T.jsx)(h.EmptyState, {
                                icon: "search-outline",
                                title: E("homeSearchNoneTitle", { q: qq.trim() }),
                                body: E("homeSearchNoneBody"),
                              })
                            : ee
                              ? (0, T.jsxs)(d.default, {
                                  style: [V.emptyDay, { backgroundColor: A.surface, borderColor: A.border }],
                                  children: [
                                    (0, T.jsx)(i.default, {
                                      style: { fontSize: 30 },
                                      children: "\ud83c\udf19",
                                    }),
                                    (0, T.jsx)(i.default, {
                                      style: [
                                        S.typography.bodyStrong,
                                        { color: A.text, marginTop: S.spacing.sm },
                                      ],
                                      children: E(
                                        "female" === B?.audience ? "emptyDayTitleW" : "emptyDayTitle",
                                      ),
                                    }),
                                    (0, T.jsx)(i.default, {
                                      style: [
                                        S.typography.small,
                                        {
                                          color: A.textMuted,
                                          textAlign: "center",
                                          marginTop: 2,
                                          marginBottom: S.spacing.md,
                                        },
                                      ],
                                      children: E("emptyDayBody"),
                                    }),
                                    "organizer" === B?.role || "admin" === B?.role
                                      ? (0, T.jsx)(g.Button, {
                                          title: E("emptyDayCta"),
                                          onPress: () => F.push("/booking/search"),
                                        })
                                      : (0, T.jsx)(g.Button, {
                                          title: E("emptyDayCtaPlayer"),
                                          onPress: () => F.push("/discover"),
                                        }),
                                  ],
                                })
                              : (0, T.jsx)(h.EmptyState, {
                                  icon: "calendar-outline",
                                  title: E("noGamesMatchTitle"),
                                  body: E("noGamesMatchBody"),
                                })
                          : Me.map(([e, t]) => {
                              // Games are grouped by day (prominent divider) and, inside a day, by time band.
                              const r = [...t].sort((e, t) =>
                                  String(e.starts_at).localeCompare(String(t.starts_at)),
                                ),
                                o = new Date(`${e}T12:00:00`),
                                n = new Date(),
                                s = e === L(n),
                                c = e === L(new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1, 12)),
                                l = (0, Z9.formatInZone)(o, "en", {
                                  weekday: "long",
                                  day: "numeric",
                                  month: "long",
                                }),
                                u = (e) => {
                                  // Same zone as the key above, or a match can sit under an
                                  // "evening" heading while its card reads 01:00.
                                  const t = Number(
                                    (0, Z9.formatInZone)(e.starts_at, "en", { hour: "2-digit", hour12: !1 }).slice(0, 2),
                                  );
                                  return t < 12
                                    ? "morning"
                                    : t < 17
                                      ? "afternoon"
                                      : t < 21
                                        ? "evening"
                                        : "night";
                                },
                                f = [];
                              for (const e of r) {
                                const t = u(e),
                                  o = f[f.length - 1];
                                o && o[0] === t ? o[1].push(e) : f.push([t, [e]]);
                              }
                              let h = 0;
                              return (0, T.jsxs)(
                                d.default,
                                {
                                  children: [
                                    (0, T.jsxs)(d.default, {
                                      style: V.dayDivider,
                                      accessibilityRole: "header",
                                      children: [
                                        (0, T.jsx)(d.default, {
                                          style: [
                                            V.dayDividerIcon,
                                            {
                                              backgroundColor: s ? A.accent : A.surface,
                                              borderColor: A.border,
                                            },
                                          ],
                                          children: (0, T.jsx)(p.Ionicons, {
                                            name: "calendar-outline",
                                            size: 16,
                                            color: s ? "#0f0f0f" : A.text,
                                          }),
                                        }),
                                        (0, T.jsxs)(d.default, {
                                          style: { flex: 1 },
                                          children: [
                                            (0, T.jsx)(i.default, {
                                              style: [V.dayDividerTitle, { color: A.text }],
                                              children: s ? E("todayLabel") : c ? E("tomorrowLabel") : l,
                                            }),
                                            (s || c) &&
                                              (0, T.jsx)(i.default, {
                                                style: [V.dayDividerSub, { color: A.textMuted }],
                                                children: l,
                                              }),
                                          ],
                                        }),
                                        (0, T.jsx)(d.default, {
                                          style: [
                                            V.dayCount,
                                            { backgroundColor: A.surface, borderColor: A.border },
                                          ],
                                          children: (0, T.jsx)(i.default, {
                                            style: [V.dayCountText, { color: A.textMuted }],
                                            children: E("dayGamesCount", { n: r.length }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, T.jsx)(d.default, {
                                      style: [V.dayRule, { backgroundColor: A.border }],
                                    }),
                                    f.map(([e, t]) =>
                                      (0, T.jsxs)(
                                        d.default,
                                        {
                                          children: [
                                            (0, T.jsxs)(d.default, {
                                              style: V.bandHeader,
                                              children: [
                                                (0, T.jsx)(p.Ionicons, {
                                                  name:
                                                    "morning" === e
                                                      ? "sunny-outline"
                                                      : "afternoon" === e
                                                        ? "partly-sunny-outline"
                                                        : "evening" === e
                                                          ? "cloudy-night-outline"
                                                          : "moon-outline",
                                                  size: 13,
                                                  color: A.textMuted,
                                                }),
                                                (0, T.jsx)(i.default, {
                                                  style: [V.bandHeaderText, { color: A.textMuted }],
                                                  children: E(`band_${e}`).toUpperCase(),
                                                }),
                                                (0, T.jsx)(i.default, {
                                                  style: [V.bandHeaderRange, { color: A.textMuted }],
                                                  children: (() => {
                                                    const e = (e) => (0, _.formatClock)(e.starts_at),
                                                      r = e(t[0]),
                                                      o = e(t[t.length - 1]);
                                                    return r === o ? r : `${r} \u2013 ${o}`;
                                                  })(),
                                                }),
                                              ],
                                            }),
                                            t.map((e) => {
                                              const t = h++;
                                              return t >= 3
                                                ? (0, T.jsx)(
                                                    $,
                                                    { row: e, colors: A, t: E, onPress: () => De(e.game_id) },
                                                    e.game_id,
                                                  )
                                                : (0, T.jsx)(
                                                    U,
                                                    { row: e, colors: A, t: E, onPress: () => De(e.game_id) },
                                                    e.game_id,
                                                  );
                                            }),
                                          ],
                                        },
                                        e,
                                      ),
                                    ),
                                  ],
                                },
                                e,
                              );
                            }),
                    ],
                  }),
            (0, T.jsx)(x.MonthDropdown, {
              visible: ge,
              onClose: () => fe(!1),
              datesWithGames: Le,
              selected: ee,
              onPick: (e) => {
                (te(e), fe(!1));
                const t = ze.findIndex((t) => L(t) === e);
                t >= 0 && xe.current?.scrollTo({ x: 56 * t, animated: !0 });
              },
            }),
          ],
        });
      }));
    var t = _r(_d[1]),
      r = e(_r(_d[2])),
      o = e(_r(_d[3])),
      a = (e(_r(_d[4])), e(_r(_d[5]))),
      n = e(_r(_d[6])),
      s = e(_r(_d[7])),
      l = e(_r(_d[8])),
      i = e(_r(_d[9])),
      d = e(_r(_d[10])),
      c = _r(_d[11]),
      u = _r(_d[12]),
      p = _r(_d[13]),
      m = _r(_d[14]),
      g = _r(_d[15]),
      f = _r(_d[16]),
      h = _r(_d[17]),
      y = _r(_d[18]),
      x = _r(_d[19]),
      b = _r(_d[20]),
      j = _r(_d[21]),
      C = _r(_d[22]),
      w = _r(_d[23]),
      I = _r(_d[24]),
      S = _r(_d[25]),
      k = _r(_d[26]),
      _ = _r(_d[27]),
      R = _r(_d[28]),
      D = _r(_d[29]),
      z = _r(_d[30]),
      v = _r(_d[31]),
      M = _r(_d[32]),
      T = _r(_d[33]),
      Q9 = e(_r(_d[34])),
      Z9 = _r(_d[35]);
    const W = ["football", "padel", "tennis"],
      P = 14,
      // F-CQUAL-2: this was `toISOString().slice(0, 10)`, a UTC key. Kuwait is UTC+3, so every
      // kick-off between 00:00 and 02:59 local landed under the previous day's divider - and the
      // divider label is rebuilt from the key at local noon, so the heading and the card time
      // disagreed. The key is the calendar date in the region's own zone, which is the zone the
      // "next up" card was already using.
      L = (e) => {
        try {
          return new Intl.DateTimeFormat("en-CA", {
            timeZone: (0, Z9.getRegionSettings)().timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date(e));
        } catch {
          return new Date(e).toISOString().slice(0, 10);
        }
      };
    const B = (e, t) => {
        const r = new Date(t).getTime() - Date.now();
        if (r <= 0) return e("nextUpNow");
        const o = Math.max(1, Math.floor(r / 6e4));
        if (o < 60) return e("nextUpInM", { n: (0, _.formatNumber)(o) });
        const a = Math.floor(o / 60);
        return a < 24
          ? e("nextUpInHM", { h: (0, _.formatNumber)(a), m: (0, _.formatNumber)(o % 60) })
          : e("nextUpInD", { n: (0, _.formatNumber)(Math.floor(a / 24)) });
      },
      H = ({ row: e, colors: t, t: r, onPress: o }) => {
        const n = r(
            "booked" === e.kind ? (e.is_organizer ? "nextUpHosting" : "nextUpBooked") : "nextUpSuggested",
          ),
          s = `${(0, _.formatGameTime)(e.starts_at)} \xb7 ${e.area}`,
          l = B(r, e.starts_at),
          c = Math.max(0, e.max_players - e.confirmed),
          u =
            "suggested" === e.kind
              ? ` \xb7 ${(0, _.formatNumber)(e.confirmed)}/${(0, _.formatNumber)(e.max_players)}`
              : "",
          m =
            "booked" === e.kind && e.is_organizer
              ? r("nextUpHostingFill", { n: (0, _.formatNumber)(e.confirmed), left: (0, _.formatNumber)(c) })
              : null;
        return (0, T.jsxs)(a.default, {
          onPress: o,
          accessibilityRole: "button",
          accessibilityLabel: `${n}. ${e.title}. ${s}. ${l}`,
          style: [V.nextUp, { backgroundColor: t.surface, borderColor: t.accent }],
          children: [
            (0, T.jsx)(d.default, {
              style: [V.nextUpIcon, { backgroundColor: (0, _.sportColor)(e.sport) }],
              children: (0, T.jsx)(p.Ionicons, { name: _.sportIcon[e.sport], size: 22, color: "#fff" }),
            }),
            (0, T.jsxs)(d.default, {
              style: { flex: 1, marginHorizontal: S.spacing.md, minWidth: 0 },
              children: [
                (0, T.jsx)(i.default, {
                  style: [V.nextUpLabel, { color: t.accentText }],
                  numberOfLines: 2,
                  children: n.toUpperCase(),
                }),
                (0, T.jsx)(i.default, {
                  style: [S.typography.bodyStrong, { color: t.text }],
                  numberOfLines: 1,
                  maxFontSizeMultiplier: 1.4,
                  children: e.title,
                }),
                (0, T.jsxs)(i.default, {
                  style: [S.typography.caption, { color: t.textMuted }],
                  numberOfLines: 1,
                  children: [s, u],
                }),
                m &&
                  (0, T.jsx)(i.default, {
                    style: [S.typography.caption, { color: t.accentText }],
                    numberOfLines: 1,
                    children: m,
                  }),
              ],
            }),
            (0, T.jsx)(d.default, {
              style: [V.nextUpChip, { backgroundColor: t.accent }],
              children: (0, T.jsx)(i.default, {
                style: [V.nextUpChipText, { color: t.accentInk }],
                maxFontSizeMultiplier: 1.3,
                children: l,
              }),
            }),
            (0, T.jsx)(p.Ionicons, {
              name: (0, z.chevronForward)(),
              size: 16,
              color: t.textMuted,
              style: { marginStart: S.spacing.xs },
            }),
          ],
        });
      },
      N = ({ row: e, colors: t, t: r }) => {
        const o = e.max_players > 0 ? Math.min(1, e.confirmed / e.max_players) : 0,
          a = o >= 0.8 ? t.danger : o >= 0.6 ? t.warning : t.success;
        return (0, T.jsxs)(d.default, {
          style: { marginTop: S.spacing.sm },
          children: [
            e.reasons.length > 0 &&
              (0, T.jsx)(d.default, {
                style: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.xs },
                children: e.reasons.map((e) =>
                  (0, T.jsxs)(
                    d.default,
                    {
                      style: [V.reasonChip, { borderColor: t.accent }],
                      children: [
                        (0, T.jsx)(d.default, { style: [V.reasonDot, { backgroundColor: t.accent }] }),
                        (0, T.jsx)(i.default, {
                          style: [S.typography.caption, { color: t.accentText }],
                          children: r(e),
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            (0, T.jsxs)(d.default, {
              style: { flexDirection: "row", alignItems: "center", marginTop: S.spacing.sm },
              children: [
                (0, T.jsx)(d.default, {
                  style: [V.fillTrack, { backgroundColor: t.border }],
                  children: (0, T.jsx)(d.default, {
                    style: [V.fillBar, { backgroundColor: a, width: `${Math.round(100 * o)}%` }],
                  }),
                }),
                (0, T.jsxs)(i.default, {
                  style: [S.typography.caption, { color: t.textMuted, marginStart: S.spacing.sm }],
                  children: [
                    (0, _.formatNumber)(e.confirmed),
                    "/",
                    (0, _.formatNumber)(e.max_players),
                    " \xb7 ",
                    (0, _.formatPrice)(Number(e.price_kwd)),
                  ],
                }),
              ],
            }),
          ],
        });
      },
      $ = ({ row: e, colors: t, t: r, onPress: o }) => {
        const n = (0, _.formatClock)(e.starts_at);
        return (0, T.jsxs)(a.default, {
          onPress: o,
          accessibilityRole: "button",
          accessibilityLabel: `${e.title}. ${n} ${e.area}. ${(0, _.formatNumber)(e.confirmed)}/${(0, _.formatNumber)(e.max_players)}`,
          style: [V.compactCard, { backgroundColor: t.surface, borderColor: t.border }],
          children: [
            (0, T.jsx)(d.default, {
              style: [V.compactIcon, { backgroundColor: (0, _.sportColor)(e.sport) }],
              children: (0, T.jsx)(p.Ionicons, { name: _.sportIcon[e.sport], size: 18, color: "#fff" }),
            }),
            (0, T.jsxs)(d.default, {
              style: { flex: 1, marginHorizontal: S.spacing.md, minWidth: 0 },
              children: [
                (0, T.jsx)(i.default, {
                  style: [S.typography.smallStrong, { color: t.text }],
                  numberOfLines: 1,
                  children: e.title,
                }),
                (0, T.jsxs)(i.default, {
                  style: [S.typography.caption, { color: t.textMuted }],
                  numberOfLines: 1,
                  children: [n, " \xb7 ", e.area, " \xb7 ", e.organizer_name],
                }),
              ],
            }),
            (0, T.jsx)(d.default, {
              style: [V.compactPill, { backgroundColor: e.predicted ? t.accent : t.surfaceAlt }],
              children: (0, T.jsxs)(i.default, {
                style: [
                  S.typography.caption,
                  { color: e.predicted ? t.accentInk : t.text, fontWeight: "700" },
                ],
                children: [
                  e.predicted ? "\u2728 " : "",
                  (0, _.formatNumber)(e.confirmed),
                  "/",
                  (0, _.formatNumber)(e.max_players),
                ],
              }),
            }),
            (0, T.jsx)(i.default, {
              style: [S.typography.smallStrong, { color: t.text, marginStart: S.spacing.sm }],
              children: (0, _.formatPrice)(e.price_kwd),
            }),
          ],
        });
      },
      U = ({ row: e, colors: t, t: r, onPress: o }) => {
        const n = new Date(e.starts_at),
          s = (0, Z9.formatInZone)(n, "en", { weekday: "short", day: "numeric", month: "short" }).toUpperCase(),
          l = (0, _.formatClock)(n);
        return (0, T.jsxs)(a.default, {
          onPress: o,
          accessibilityRole: "button",
          accessibilityLabel: e.title,
          style: [V.card, { backgroundColor: t.surface, borderColor: t.border }],
          children: [
            (0, T.jsxs)(d.default, {
              style: [V.photo, { backgroundColor: (0, _.sportColor)(e.sport) }],
              children: [
                (0, T.jsx)(p.Ionicons, {
                  name: _.sportIcon[e.sport],
                  size: 96,
                  color: "rgba(255,255,255,0.28)",
                  style: V.photoIcon,
                }),
                (0, T.jsx)(d.default, {
                  style: V.stamp,
                  children: (0, T.jsx)(i.default, { style: V.stampText, children: s }),
                }),
              ],
            }),
            (0, T.jsxs)(d.default, {
              style: [V.banner, { backgroundColor: t.accent }],
              children: [
                (0, T.jsx)(p.Ionicons, { name: "time-outline", size: 14, color: t.accentInk }),
                (0, T.jsxs)(i.default, {
                  style: [V.bannerText, { color: t.accentInk }],
                  numberOfLines: 1,
                  children: [l, " \xb7 ", e.area],
                }),
              ],
            }),
            (0, T.jsxs)(d.default, {
              style: V.body,
              children: [
                (0, T.jsxs)(d.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, T.jsx)(i.default, {
                      style: [S.typography.bodyStrong, { color: t.text }],
                      numberOfLines: 1,
                      children: e.title,
                    }),
                    (0, T.jsx)(i.default, {
                      style: [S.typography.caption, { color: t.textMuted }],
                      numberOfLines: 1,
                      children: r("organisedBy", { name: e.organizer_name }),
                    }),
                  ],
                }),
                (0, T.jsxs)(d.default, {
                  style: { alignItems: "flex-end", marginStart: S.spacing.sm },
                  children: [
                    (0, T.jsx)(d.default, {
                      style: [V.capacityPill, { backgroundColor: e.predicted ? t.accent : t.surfaceAlt }],
                      children: (0, T.jsxs)(i.default, {
                        style: [
                          S.typography.caption,
                          { color: e.predicted ? t.accentInk : t.text, fontWeight: "700" },
                        ],
                        children: [
                          e.predicted ? "\u2728 " : "",
                          (0, _.formatNumber)(e.confirmed),
                          " / ",
                          (0, _.formatNumber)(e.max_players),
                        ],
                      }),
                    }),
                    (0, T.jsx)(i.default, {
                      style: [S.typography.smallStrong, { color: t.text, marginTop: 4 }],
                      children: (0, _.formatPrice)(e.price_kwd),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      },
      V = l.default.create({
        reasonChip: {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          borderWidth: 1,
          borderRadius: S.radius.pill,
          paddingHorizontal: S.spacing.sm,
          paddingVertical: 3,
        },
        reasonDot: { width: 5, height: 5, borderRadius: 3 },
        fillTrack: { flex: 1, height: 6, borderRadius: 3, overflow: "hidden" },
        fillBar: { height: 6, borderRadius: 3 },
        searchWrap: {
          flexDirection: "row",
          alignItems: "center",
          gap: S.spacing.sm,
          borderRadius: S.radius.pill,
          borderWidth: l.default.hairlineWidth,
          paddingHorizontal: S.spacing.md,
          height: 44,
          marginBottom: S.spacing.md,
        },
        // height:"100%" so the tap target is the whole 44px pill, not the 16px text box.
        searchInput: { flex: 1, height: "100%", paddingVertical: 0, fontSize: 14, fontWeight: "600" },
        searchClear: {
          width: 26,
          height: 26,
          borderRadius: 13,
          alignItems: "center",
          justifyContent: "center",
        },
        hostCta: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: S.radius.pill,
          paddingHorizontal: S.spacing.lg,
          paddingVertical: 14,
          marginBottom: S.spacing.md,
        },
        prefsPrompt: {
          flexDirection: "row",
          alignItems: "center",
          gap: S.spacing.sm,
          borderWidth: 1,
          borderRadius: S.radius.lg,
          padding: S.spacing.md,
          marginBottom: S.spacing.md,
        },
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: S.spacing.lg,
          paddingTop: S.spacing.lg,
          paddingBottom: S.spacing.sm,
        },
        fwCard: {
          borderRadius: S.radius.lg,
          borderWidth: 1.5,
          padding: S.spacing.md,
          marginBottom: S.spacing.md,
        },
        dayHeader: {
          fontSize: 11,
          fontWeight: "800",
          letterSpacing: 1.2,
          marginTop: S.spacing.md,
          marginBottom: S.spacing.sm,
        },
        dayDivider: {
          flexDirection: "row",
          alignItems: "center",
          gap: S.spacing.sm,
          marginTop: S.spacing.lg,
          marginBottom: S.spacing.xs,
        },
        dayDividerIcon: {
          width: 30,
          height: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: l.default.hairlineWidth,
        },
        dayDividerTitle: { fontSize: 17, fontWeight: "800", letterSpacing: 0.2 },
        dayDividerSub: { fontSize: 12, fontWeight: "600", marginTop: 1 },
        dayCount: {
          borderRadius: 999,
          borderWidth: l.default.hairlineWidth,
          paddingHorizontal: 10,
          paddingVertical: 4,
        },
        dayCountText: { fontSize: 11, fontWeight: "700" },
        dayRule: { height: 2, borderRadius: 1, marginBottom: S.spacing.sm },
        bandHeader: {
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
          marginTop: S.spacing.xs,
          marginBottom: S.spacing.xs,
          paddingStart: 2,
        },
        bandHeaderText: { fontSize: 10.5, fontWeight: "800", letterSpacing: 1.1 },
        bandHeaderRange: { fontSize: 10.5, fontWeight: "600", marginStart: 2 },
        compactCard: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: S.radius.lg,
          borderWidth: l.default.hairlineWidth,
          padding: S.spacing.md,
          marginBottom: S.spacing.sm,
          minHeight: 60,
        },
        compactIcon: {
          width: 36,
          height: 36,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        },
        compactPill: { borderRadius: 999, paddingHorizontal: S.spacing.sm, paddingVertical: 4 },
        nextUp: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: S.radius.lg,
          borderWidth: 1.5,
          paddingVertical: S.spacing.md,
          paddingHorizontal: S.spacing.md,
          marginBottom: S.spacing.md,
          minHeight: 72,
        },
        nextUpIcon: {
          width: 44,
          height: 44,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
        },
        nextUpLabel: { fontSize: 10, fontWeight: "800", letterSpacing: 1.1, marginBottom: 1 },
        nextUpChip: { borderRadius: 999, paddingHorizontal: S.spacing.md, paddingVertical: 7 },
        nextUpChipText: { fontSize: 13, fontWeight: "800" },
        profileCard: {
          borderRadius: S.radius.lg,
          borderWidth: l.default.hairlineWidth,
          overflow: "hidden",
          marginBottom: S.spacing.md,
        },
        profileTop: { flexDirection: "row", alignItems: "center", padding: S.spacing.md },
        avatar: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
        clanCard: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: S.radius.lg,
          borderWidth: l.default.hairlineWidth,
          paddingHorizontal: S.spacing.md,
          paddingVertical: S.spacing.sm,
          maxWidth: 230,
        },
        modeRow: { flexDirection: "row", justifyContent: "flex-end", marginBottom: S.spacing.sm },
        modeSeg: {
          flexDirection: "row",
          borderRadius: S.radius.pill,
          borderWidth: l.default.hairlineWidth,
          padding: 2,
        },
        modeBtn: {
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          paddingHorizontal: S.spacing.sm,
          height: 26,
          borderRadius: S.radius.pill,
        },
        modeText: { fontSize: 11, fontWeight: "700" },
        mapWrap: {
          height: 440,
          borderRadius: S.radius.lg,
          borderWidth: l.default.hairlineWidth,
          overflow: "hidden",
        },
        emptyDay: { alignItems: "center", borderRadius: S.radius.lg, borderWidth: 1, padding: S.spacing.lg },
        clanCta: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: S.radius.lg,
          borderWidth: 1,
          padding: S.spacing.md,
          marginBottom: S.spacing.md,
        },
        clanCtaIcon: {
          width: 36,
          height: 36,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        },
        leadersHead: { flexDirection: "row", alignItems: "center", marginBottom: S.spacing.xs },
        leadersLabel: { fontSize: 11, fontWeight: "800", letterSpacing: 2 },
        leaderChip: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: S.radius.lg,
          borderWidth: l.default.hairlineWidth,
          paddingHorizontal: S.spacing.sm,
          paddingVertical: 6,
          maxWidth: 210,
        },
        leaderMeta: { fontSize: 10, marginTop: 1 },
        sportRow: { flexDirection: "row", gap: S.spacing.sm },
        sportBox: {
          flex: 1,
          alignItems: "center",
          paddingVertical: S.spacing.md,
          borderRadius: S.radius.lg,
          borderWidth: l.default.hairlineWidth,
        },
        sportIconWrap: {
          width: 40,
          height: 40,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        },
        dayCell: {
          width: 52,
          alignItems: "center",
          paddingVertical: S.spacing.sm,
          borderRadius: S.radius.md,
          borderWidth: l.default.hairlineWidth,
        },
        dayDow: { fontSize: 9, fontWeight: "700", letterSpacing: 1, marginBottom: 2 },
        card: {
          borderRadius: S.radius.lg,
          borderWidth: l.default.hairlineWidth,
          overflow: "hidden",
          marginBottom: S.spacing.md,
        },
        photo: { height: 120, justifyContent: "center" },
        photoIcon: { position: "absolute", right: -6, bottom: -14 },
        stamp: {
          position: "absolute",
          top: S.spacing.sm,
          left: S.spacing.sm,
          backgroundColor: "rgba(0,0,0,0.65)",
          paddingHorizontal: S.spacing.sm,
          paddingVertical: 4,
          borderRadius: 8,
        },
        stampText: { color: "#fff", fontSize: 11, fontWeight: "800", letterSpacing: 1 },
        banner: {
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
          paddingHorizontal: S.spacing.md,
          paddingVertical: 7,
        },
        bannerText: { fontSize: 13, fontWeight: "800", flex: 1 },
        body: { flexDirection: "row", alignItems: "center", padding: S.spacing.md },
        capacityPill: { paddingHorizontal: S.spacing.sm, paddingVertical: 3, borderRadius: S.radius.pill },
      });
  },
  1677,
  [
    33, 15, 618, 461, 137, 369, 280, 281, 158, 146, 273, 1632, 381, 1086, 20, 626, 1631, 1627, 1662, 1678,
    1679, 1680, 1667, 630, 615, 616, 671, 1311, 1626, 675, 1171, 1676, 674, 13, 394, 912,
  ],
);
