__d(
  function (g, _r, i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, _.useAuth)(),
          { colors: c } = (0, P.useTheme)(),
          H = (0, f.useRouter)(),
          L = (0, B.useT)(),
          [F, A] = (0, l.useState)(""),
          [V, E] = (0, l.useState)(null),
          [q, N] = (0, l.useState)(null),
          [O, G] = (0, l.useState)(!1),
          [$, K] = (0, l.useState)(""),
          [U, Y] = (0, l.useState)(null),
          [J, Q] = (0, l.useState)(!1),
          [X, Z] = (0, l.useState)(!1),
          { profile: ee } = (0, _.useAuth)(),
          te = "female" === ee?.audience,
          ae = (0, l.useCallback)(
            (t) => ({
              query: F || void 0,
              sport: V ?? void 0,
              skill: q ?? void 0,
              lookingForGame: O || void 0,
              area: !te && $ ? $ : void 0,
              offset: t,
              limit: 20,
            }),
            [F, V, q, O, $, te],
          ),
          [er9, se9] = (0, l.useState)(null),
          // F-CQUAL-15: no catch, so a rejected search left the list at null for ever.
          le = (0, l.useCallback)(async () => {
            if (!t) return;
            se9(null);
            try {
              const l = await (0, k.searchPlayers)(t.id, ae(0));
              (Y(l), Q(20 === l.length));
            } catch (e) {
              (se9((0, G9.classifyError)(e).message || L("error")), Y([]), Q(!1));
            }
          }, [t, ae]),
          oe = (0, l.useRef)(null);
        ((0, l.useEffect)(
          () => (
            oe.current && clearTimeout(oe.current),
            (oe.current = setTimeout(() => {
              le();
            }, 300)),
            () => {
              oe.current && clearTimeout(oe.current);
            }
          ),
          [le],
        ),
          (0, f.useFocusEffect)(
            (0, l.useCallback)(() => {
              le();
            }, [le]),
          ));
        const se = !!F || !!V || !!q || O || !!$,
          ne = async (l) => {
            t &&
              (l.is_following
                ? await (0, k.unfollowPlayer)(t.id, l.id)
                : await (0, k.followPlayer)(t.id, l.id),
              await le());
          },
          re = async (l) => {
            if (t && "declined" !== l.dm_state)
              try {
                "none" !== l.dm_state ||
                  l.can_message ||
                  !te ||
                  l.is_following ||
                  (await (0, k.followPlayer)(t.id, l.id));
                const o = await (0, k.startConversation)(t.id, l.id);
                o.accepted || "active" === l.dm_state || "request_in" === l.dm_state
                  ? H.push(`/messages/${o.id}`)
                  : await le();
              } catch {
                await le();
              }
          };
        return (0, z.jsxs)(x.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: c.bg },
          children: [
            (0, z.jsxs)(h.default, {
              style: W.header,
              children: [
                (0, z.jsx)(n.default, {
                  onPress: () => (0, G9.safeBack)(H),
                  accessibilityRole: "button",
                  accessibilityLabel: L("back"),
                  style: [W.iconBtn, { backgroundColor: c.surface, borderColor: c.border }],
                  children: (0, z.jsx)(y.Ionicons, { name: (0, T.chevronBack)(), size: 22, color: c.text }),
                }),
                (0, z.jsxs)(h.default, {
                  style: { flex: 1, marginHorizontal: S.spacing.md },
                  children: [
                    (0, z.jsx)(u.default, {
                      style: [S.typography.h2, { color: c.text }],
                      children: L("discoverTitle"),
                    }),
                    (0, z.jsx)(u.default, {
                      style: [S.typography.small, { color: c.textMuted }],
                      children: L("discoverSub"),
                    }),
                  ],
                }),
              ],
            }),
            (0, z.jsx)(s.default, {
              data: U ?? [],
              keyExtractor: (t) => t.id,
              contentContainerStyle: { padding: S.spacing.lg, paddingBottom: S.spacing.xxxl },
              keyboardShouldPersistTaps: "handled",
              keyboardDismissMode: "on-drag",
              initialNumToRender: 10,
              maxToRenderPerBatch: 10,
              windowSize: 7,
              removeClippedSubviews: !0,
              ListHeaderComponent: (0, z.jsxs)(z.Fragment, {
                children: [
                  (0, z.jsxs)(h.default, {
                    style: [W.search, { backgroundColor: c.surface, borderColor: c.border }],
                    children: [
                      (0, z.jsx)(y.Ionicons, { name: "search", size: 18, color: c.textMuted }),
                      (0, z.jsx)(p.default, {
                        value: F,
                        onChangeText: A,
                        placeholder: L("searchPlayersPlaceholder"),
                        placeholderTextColor: c.textMuted,
                        style: [W.searchInput, S.typography.body, { color: c.text }],
                        returnKeyType: "search",
                      }),
                      F.length > 0 &&
                        (0, z.jsx)(n.default, {
                          onPress: () => A(""),
                          hitSlop: 8,
                          children: (0, z.jsx)(y.Ionicons, {
                            name: "close-circle",
                            size: 18,
                            color: c.textMuted,
                          }),
                        }),
                    ],
                  }),
                  (0, z.jsxs)(r.default, {
                    horizontal: !0,
                    showsHorizontalScrollIndicator: !1,
                    contentContainerStyle: { gap: S.spacing.sm, paddingVertical: S.spacing.md },
                    children: [
                      (0, z.jsx)(D, { label: L("anySport"), on: !V, onPress: () => E(null), colors: c }),
                      M.map((t) =>
                        (0, z.jsx)(
                          D,
                          { label: L(t), on: V === t, onPress: () => E(V === t ? null : t), colors: c },
                          t,
                        ),
                      ),
                    ],
                  }),
                  (0, z.jsxs)(r.default, {
                    horizontal: !0,
                    showsHorizontalScrollIndicator: !1,
                    contentContainerStyle: { gap: S.spacing.sm, paddingBottom: S.spacing.md },
                    children: [
                      (0, z.jsx)(D, { label: L("anySkill"), on: !q, onPress: () => N(null), colors: c }),
                      R.map((t) =>
                        (0, z.jsx)(
                          D,
                          { label: L(t), on: q === t, onPress: () => N(q === t ? null : t), colors: c },
                          t,
                        ),
                      ),
                      (0, z.jsx)(D, {
                        label: L("filterLfg"),
                        on: O,
                        onPress: () => G(!O),
                        colors: c,
                        icon: "flash",
                      }),
                      !te &&
                        (0, z.jsx)(p.default, {
                          value: $,
                          onChangeText: K,
                          placeholder: L("areaFilterPlaceholder"),
                          placeholderTextColor: c.textMuted,
                          style: [
                            W.areaInput,
                            S.typography.small,
                            {
                              color: c.text,
                              backgroundColor: c.surface,
                              borderColor: $ ? c.accent : c.border,
                            },
                          ],
                        }),
                    ],
                  }),
                  (0, z.jsx)(u.default, {
                    style: [S.typography.smallStrong, { color: c.textMuted, marginBottom: S.spacing.sm }],
                    children: se ? `${(0, v.formatNumber)(U?.length ?? 0)}` : L("suggestedForYou"),
                  }),
                ],
              }),
              ListEmptyComponent:
                null === U
                  ? (0, z.jsx)(o.default, { color: c.accentText })
                  : (0, z.jsx)(C.EmptyState, {
                      icon: "people-outline",
                      title: L("noPlayersFound"),
                      body: L("noPlayersSub"),
                    }),
              renderItem: ({ item: t }) =>
                (0, z.jsx)(b.Card, {
                  padding: "md",
                  style: { marginBottom: S.spacing.sm },
                  children: (0, z.jsxs)(h.default, {
                    style: { flexDirection: "row", alignItems: "center" },
                    children: [
                      (0, z.jsxs)(n.default, {
                        onPress: () => H.push(`/player/${t.id}`),
                        accessibilityRole: "button",
                        accessibilityLabel: t.name,
                        style: { flex: 1, flexDirection: "row", alignItems: "center" },
                        children: [
                          (0, z.jsxs)(h.default, {
                            style: [W.avatar, { backgroundColor: c.surfaceAlt }],
                            children: [
                              (0, z.jsx)(u.default, {
                                style: [S.typography.bodyStrong, { color: c.text }],
                                children: t.name.slice(0, 1).toUpperCase(),
                              }),
                              t.online &&
                                (0, z.jsx)(h.default, {
                                  style: [
                                    W.onlineDot,
                                    { backgroundColor: c.success, borderColor: c.surface },
                                  ],
                                }),
                            ],
                          }),
                          (0, z.jsxs)(h.default, {
                            style: { flex: 1, marginHorizontal: S.spacing.md },
                            children: [
                              (0, z.jsxs)(h.default, {
                                style: { flexDirection: "row", alignItems: "center", gap: S.spacing.xs },
                                children: [
                                  (0, z.jsxs)(u.default, {
                                    style: [S.typography.bodyStrong, { color: c.text, flexShrink: 1 }],
                                    numberOfLines: 1,
                                    children: [
                                      t.name,
                                      t.username
                                        ? (0, z.jsxs)(u.default, {
                                            style: [S.typography.caption, { color: c.textMuted }],
                                            children: [" \xb7 @", t.username],
                                          })
                                        : null,
                                    ],
                                  }),
                                  "pending_sent" === t.dm_state &&
                                    (0, z.jsx)(j.Badge, { label: L("pendingBadge"), tone: "warning" }),
                                  "active" === t.dm_state &&
                                    (0, z.jsx)(j.Badge, { label: L("followingBtn"), tone: "success" }),
                                ],
                              }),
                              (0, z.jsxs)(h.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  gap: S.spacing.xs,
                                  marginTop: 2,
                                  flexWrap: "wrap",
                                },
                                children: [
                                  t.sports.map((t) =>
                                    (0, z.jsxs)(
                                      h.default,
                                      {
                                        style: [W.sportPill, { backgroundColor: c.surfaceAlt }],
                                        children: [
                                          (0, z.jsx)(h.default, {
                                            style: [W.sportDot, { backgroundColor: (0, v.sportColor)(t) }],
                                          }),
                                          (0, z.jsx)(u.default, {
                                            style: [S.typography.caption, { color: c.text }],
                                            children: L(t),
                                          }),
                                        ],
                                      },
                                      t,
                                    ),
                                  ),
                                  (0, z.jsx)(j.Badge, {
                                    label: L("all" === t.skill_level ? "openToAll" : t.skill_level),
                                    tone: "neutral",
                                  }),
                                  t.looking_for_game &&
                                    (0, z.jsx)(j.Badge, { label: L("lookingForGame"), tone: "accent" }),
                                ],
                              }),
                              (0, z.jsxs)(h.default, {
                                style: {
                                  flexDirection: "row",
                                  alignItems: "center",
                                  gap: S.spacing.sm,
                                  marginTop: 2,
                                  flexWrap: "wrap",
                                },
                                children: [
                                  t.area &&
                                    (0, z.jsxs)(u.default, {
                                      style: [S.typography.caption, { color: c.textMuted }],
                                      numberOfLines: 1,
                                      children: [
                                        (0, z.jsx)(y.Ionicons, {
                                          name: "location-outline",
                                          size: 10,
                                          color: c.textMuted,
                                        }),
                                        " ",
                                        (0, I.areaName)(t.area, "ar" === (0, B.getLocale)() ? "ar" : "en"),
                                      ],
                                    }),
                                  t.mutual_games > 0 &&
                                    (0, z.jsx)(u.default, {
                                      style: [S.typography.caption, { color: c.accentText }],
                                      children: L("mutualGamesN", { n: t.mutual_games }),
                                    }),
                                  t.mutuals > 0 &&
                                    (0, z.jsx)(u.default, {
                                      style: [S.typography.caption, { color: c.textMuted }],
                                      children: L("mutualsCount", { n: (0, v.formatNumber)(t.mutuals) }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, z.jsxs)(h.default, {
                        style: { gap: S.spacing.xs, alignItems: "flex-end" },
                        children: [
                          "declined" === t.dm_state
                            ? null
                            : "pending_sent" === t.dm_state
                              ? (0, z.jsx)(w.Button, {
                                  title: L("requestSentShort"),
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: !0,
                                  onPress: () => {},
                                })
                              : "active" === t.dm_state || "request_in" === t.dm_state || t.can_message || te
                                ? (0, z.jsx)(w.Button, {
                                    title:
                                      "request_in" === t.dm_state
                                        ? L("replyBtn")
                                        : te && "none" === t.dm_state
                                          ? L("sendMessageCta")
                                          : L("messageBtn"),
                                    size: "sm",
                                    onPress: () => re(t),
                                  })
                                : null,
                          (0, z.jsx)(w.Button, {
                            title: t.is_following ? L("followingBtn") : L("followBtn"),
                            size: "sm",
                            variant: t.is_following ? "secondary" : "primary",
                            onPress: () => ne(t),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ListFooterComponent:
                U && U.length > 0
                  ? J
                    ? (0, z.jsx)(w.Button, {
                        title: L("loadMoreBtn"),
                        variant: "secondary",
                        fullWidth: !0,
                        loading: X,
                        onPress: async () => {
                          if (t && U && !X) {
                            Z(!0);
                            try {
                              const l = await (0, k.searchPlayers)(t.id, ae(U.length));
                              (Y([...U, ...l]), Q(20 === l.length));
                            } finally {
                              Z(!1);
                            }
                          }
                        },
                        style: { marginTop: S.spacing.sm },
                      })
                    : (0, z.jsx)(u.default, {
                        style: [
                          S.typography.caption,
                          { color: c.textMuted, textAlign: "center", marginTop: S.spacing.md },
                        ],
                        children: L("endOfPeople"),
                      })
                  : null,
            }),
          ],
        });
      }));
    var l = _r(d[1]),
      o = t(_r(d[2])),
      s = t(_r(d[3])),
      n = t(_r(d[4])),
      r = t(_r(d[5])),
      c = t(_r(d[6])),
      u = t(_r(d[7])),
      p = t(_r(d[8])),
      h = t(_r(d[9])),
      x = _r(d[10]),
      y = _r(d[11]),
      f = _r(d[12]),
      b = _r(d[13]),
      j = _r(d[14]),
      w = _r(d[15]),
      C = _r(d[16]),
      _ = _r(d[17]),
      P = _r(d[18]),
      S = _r(d[19]),
      k = _r(d[20]),
      v = _r(d[21]),
      I = _r(d[22]),
      B = _r(d[23]),
      T = _r(d[24]),
      z = _r(d[25]),
      G9 = _r(d[26]);
    const M = ["football", "padel", "tennis"],
      R = ["beginner", "intermediate", "advanced"];
    const D = ({ label: t, on: l, onPress: o, colors: s, icon: r }) =>
        (0, z.jsxs)(n.default, {
          onPress: o,
          accessibilityRole: "button",
          accessibilityLabel: t,
          style: [
            W.chip,
            { backgroundColor: l ? s.accent : s.surface, borderColor: l ? s.accent : s.border },
          ],
          children: [
            r &&
              (0, z.jsx)(y.Ionicons, {
                name: r,
                size: 14,
                color: l ? s.accentInk : s.textMuted,
                style: { marginEnd: 4 },
              }),
            (0, z.jsx)(u.default, {
              style: [S.typography.small, { color: l ? s.accentInk : s.text }],
              children: t,
            }),
          ],
        }),
      W = c.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: S.spacing.lg,
          paddingVertical: S.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: c.default.hairlineWidth,
        },
        search: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: S.spacing.md,
          height: 44,
          borderRadius: S.radius.md,
          borderWidth: c.default.hairlineWidth,
          gap: S.spacing.sm,
        },
        searchInput: { flex: 1, paddingVertical: 0 },
        chip: {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: S.spacing.sm,
          paddingHorizontal: S.spacing.md,
          borderRadius: S.radius.pill,
          borderWidth: c.default.hairlineWidth,
        },
        avatar: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
        onlineDot: {
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 12,
          height: 12,
          borderRadius: 6,
          borderWidth: 2,
        },
        areaInput: {
          paddingHorizontal: S.spacing.md,
          paddingVertical: S.spacing.sm,
          borderRadius: S.radius.pill,
          borderWidth: c.default.hairlineWidth,
          minWidth: 110,
        },
        sportPill: {
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          borderRadius: S.radius.pill,
          paddingHorizontal: S.spacing.sm,
          paddingVertical: 2,
        },
        sportDot: { width: 6, height: 6, borderRadius: 3 },
      });
  },
  2374,
  [
    33, 15, 461, 271, 369, 281, 158, 146, 394, 273, 381, 1086, 20, 1623, 1624, 626, 1627, 630, 615, 616, 671, 1311, 649, 675, 1171, 13, 9001,
  ],
);
