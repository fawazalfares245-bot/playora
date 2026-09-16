__d(
  function (g, r, _i, _a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, p.useLocalSearchParams)(),
          { user: i } = (0, b.useAuth)(),
          { colors: W } = (0, j.useTheme)(),
          D = (0, p.useRouter)(),
          A = (0, B.useT)(),
          [F, M] = (0, t.useState)(null),
          [$, H] = (0, t.useState)([]),
          [q, V] = (0, t.useState)(!1),
          [N, U] = (0, t.useState)(!1),
          [O, E] = (0, t.useState)(!1),
          [G, Y] = (0, t.useState)(null),
          J = (e) => {
            (Y(e), setTimeout(() => Y(null), 2e3));
          },
          K = (0, t.useCallback)(async () => {
            if (i && e)
              try {
                const t = await (0, _.fetchPlayerProfile)(i.id, e);
                (M(t), E(!1), H(t.limited ? [] : await (0, _.fetchHighlightCollections)(e)));
              } catch {
                E(!0);
              }
          }, [i, e]);
        (0, p.useFocusEffect)(
          (0, t.useCallback)(() => {
            K();
          }, [K]),
        );
        const Q = async () => {
            i &&
              F &&
              (U(!1),
              F.is_blocked
                ? (await (0, _.unblockUser)(i.id, F.user_id), J(A("unblockedToast")))
                : (await (0, _.blockUser)(i.id, F.user_id), J(A("blockedToast"))),
              await K());
          },
          X = async (e) => {
            if (i && F) {
              V(!0);
              try {
                (await (0, _.respondFollowRequest)(i.id, F.user_id, e), await K());
              } finally {
                V(!1);
              }
            }
          };
        if (O)
          return (0, S.jsxs)(u.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: W.bg },
            children: [
              (0, S.jsx)(c.default, {
                style: L.header,
                children: (0, S.jsx)(a.default, {
                  onPress: () => D.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: A("back"),
                  style: [L.iconBtn, { backgroundColor: W.surface, borderColor: W.border }],
                  children: (0, S.jsx)(h.Ionicons, { name: (0, R.chevronBack)(), size: 22, color: W.text }),
                }),
              }),
              (0, S.jsxs)(c.default, {
                style: [L.center, { paddingHorizontal: w.spacing.xl }],
                children: [
                  (0, S.jsx)(h.Ionicons, {
                    name: "lock-closed-outline",
                    size: 36,
                    color: W.textMuted,
                    style: { marginBottom: w.spacing.md },
                  }),
                  (0, S.jsx)(n.default, {
                    style: [w.typography.h3, { color: W.text, textAlign: "center" }],
                    children: A("privateAccount"),
                  }),
                  (0, S.jsx)(n.default, {
                    style: [
                      w.typography.body,
                      { color: W.textMuted, textAlign: "center", marginTop: w.spacing.xs },
                    ],
                    children: A("privateAccountBody"),
                  }),
                ],
              }),
            ],
          });
        return F
          ? (0, S.jsxs)(u.SafeAreaView, {
              edges: ["top"],
              style: { flex: 1, backgroundColor: W.bg },
              children: [
                (0, S.jsxs)(o.default, {
                  contentContainerStyle: { paddingBottom: w.spacing.xxxl },
                  children: [
                    (0, S.jsxs)(c.default, {
                      style: [L.cover, { backgroundColor: W.accentMuted }],
                      children: [
                        (0, S.jsx)(a.default, {
                          onPress: () => D.back(),
                          accessibilityRole: "button",
                          accessibilityLabel: A("back"),
                          style: [L.iconBtn, { backgroundColor: W.surface, borderColor: W.border }],
                          children: (0, S.jsx)(h.Ionicons, {
                            name: (0, R.chevronBack)(),
                            size: 22,
                            color: W.text,
                          }),
                        }),
                        !F.is_self &&
                          (0, S.jsx)(a.default, {
                            onPress: () => U(!0),
                            accessibilityRole: "button",
                            accessibilityLabel: A("moreActions"),
                            style: [
                              L.iconBtn,
                              {
                                backgroundColor: W.surface,
                                borderColor: W.border,
                                position: "absolute",
                                top: w.spacing.md,
                              },
                              (0, R.inlineEnd)(w.spacing.lg),
                            ],
                            children: (0, S.jsx)(h.Ionicons, {
                              name: "ellipsis-horizontal",
                              size: 20,
                              color: W.text,
                            }),
                          }),
                      ],
                    }),
                    (0, S.jsxs)(c.default, {
                      style: { paddingHorizontal: w.spacing.lg, marginTop: -34 },
                      children: [
                        F.avatar_url
                          ? (0, S.jsx)(c.default, {
                              style: [L.avatar, { borderColor: W.bg, overflow: "hidden" }],
                              children: (0, S.jsx)(C.PlayerAvatar, {
                                name: F.display_name || "P",
                                seed: 0,
                                uri: F.avatar_url,
                                size: 70,
                              }),
                            })
                          : (0, S.jsx)(c.default, {
                              style: [L.avatar, { backgroundColor: W.surface, borderColor: W.bg }],
                              children: (0, S.jsx)(n.default, {
                                style: [w.typography.h1, { color: W.accentText }],
                                children: (F.display_name || "?").slice(0, 1).toUpperCase(),
                              }),
                            }),
                        (0, S.jsxs)(c.default, {
                          style: { flexDirection: "row", alignItems: "center", marginTop: w.spacing.sm },
                          children: [
                            (0, S.jsxs)(c.default, {
                              style: { flex: 1 },
                              children: [
                                (0, S.jsx)(n.default, {
                                  style: [w.typography.h2, { color: W.text }],
                                  numberOfLines: 1,
                                  children: F.display_name,
                                }),
                                !!F.username &&
                                  (0, S.jsxs)(n.default, {
                                    style: [w.typography.caption, { color: W.textMuted }],
                                    children: ["@", F.username],
                                  }),
                                F.online
                                  ? (0, S.jsxs)(c.default, {
                                      style: { flexDirection: "row", alignItems: "center", marginTop: 2 },
                                      children: [
                                        (0, S.jsx)(c.default, {
                                          style: [L.dot, { backgroundColor: W.success }],
                                        }),
                                        (0, S.jsx)(n.default, {
                                          style: [w.typography.caption, { color: W.success, marginStart: 5 }],
                                          children: A("activeNow"),
                                        }),
                                      ],
                                    })
                                  : F.last_active
                                    ? (0, S.jsx)(n.default, {
                                        style: [w.typography.caption, { color: W.textMuted, marginTop: 2 }],
                                        children: (0, T.formatRelative)(F.last_active),
                                      })
                                    : null,
                              ],
                            }),
                            !F.is_self &&
                              (0, S.jsxs)(c.default, {
                                style: { flexDirection: "row", alignItems: "center", gap: w.spacing.sm },
                                children: [
                                  F.can_message &&
                                    (0, S.jsx)(a.default, {
                                      onPress: async () => {
                                        if (!i || !F) return;
                                        try {
                                          const e = await (0, _.startConversation)(i.id, F.user_id);
                                          D.push(`/messages/${e.id}`);
                                        } catch (e) {
                                          const t = String(e.message);
                                          J(
                                            A(
                                              "messages_followers_only" === t
                                                ? "msgFollowersToast"
                                                : "messages_disabled" === t
                                                  ? "msgDisabledToast"
                                                  : "cannotMessageBlocked",
                                            ),
                                          );
                                        }
                                      },
                                      accessibilityRole: "button",
                                      accessibilityLabel: A("messageBtn"),
                                      style: [
                                        L.msgBtn,
                                        { backgroundColor: W.surface, borderColor: W.border },
                                      ],
                                      children: (0, S.jsx)(h.Ionicons, {
                                        name: "chatbubble-ellipses-outline",
                                        size: 18,
                                        color: W.text,
                                      }),
                                    }),
                                  F.is_blocked
                                    ? (0, S.jsx)(y.Button, {
                                        title: A("unblockBtn"),
                                        size: "sm",
                                        variant: "secondary",
                                        onPress: Q,
                                      })
                                    : (0, S.jsx)(k.FollowButton, {
                                        viewerId: i.id,
                                        targetId: F.user_id,
                                        targetName: F.display_name,
                                        isFollowing: F.is_following,
                                        isRequested: F.is_requested,
                                        onChanged: K,
                                      }),
                                ],
                              }),
                          ],
                        }),
                        (0, S.jsxs)(c.default, {
                          style: {
                            flexDirection: "row",
                            gap: w.spacing.sm,
                            marginTop: w.spacing.xs,
                            flexWrap: "wrap",
                          },
                          children: [
                            F.is_friend && (0, S.jsx)(m.Badge, { label: A("friendLabel"), tone: "success" }),
                            F.looking_for_game &&
                              (0, S.jsx)(m.Badge, { label: A("lookingForGame"), tone: "accent" }),
                            F.is_muted && (0, S.jsx)(m.Badge, { label: A("muteBtn"), tone: "warning" }),
                          ],
                        }),
                        F.requested_me &&
                          (0, S.jsxs)(x.Card, {
                            padding: "lg",
                            style: { marginTop: w.spacing.lg },
                            children: [
                              (0, S.jsx)(n.default, {
                                style: [w.typography.bodyStrong, { color: W.text }],
                                children: A("followRequestFrom", { name: F.display_name }),
                              }),
                              (0, S.jsxs)(c.default, {
                                style: { flexDirection: "row", gap: w.spacing.sm, marginTop: w.spacing.md },
                                children: [
                                  (0, S.jsx)(c.default, {
                                    style: { flex: 1 },
                                    children: (0, S.jsx)(y.Button, {
                                      title: A("approve"),
                                      size: "sm",
                                      fullWidth: !0,
                                      loading: q,
                                      onPress: () => X(!0),
                                    }),
                                  }),
                                  (0, S.jsx)(c.default, {
                                    style: { flex: 1 },
                                    children: (0, S.jsx)(y.Button, {
                                      title: A("declineBtn"),
                                      size: "sm",
                                      fullWidth: !0,
                                      variant: "secondary",
                                      loading: q,
                                      onPress: () => X(!1),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        F.limited &&
                          (0, S.jsxs)(S.Fragment, {
                            children: [
                              (0, S.jsxs)(c.default, {
                                style: [L.statsRow, { borderColor: W.border }],
                                children: [
                                  (0, S.jsx)(P, { n: F.followers, label: A("followersLabel"), colors: W }),
                                  (0, S.jsx)(P, { n: F.following, label: A("followingLabel"), colors: W }),
                                  (0, S.jsx)(P, { n: "\u2014", label: A("matchesPlayedLabel"), colors: W }),
                                  (0, S.jsx)(P, { n: "\u2014", label: A("hostedLabel"), colors: W }),
                                ],
                              }),
                              (0, S.jsxs)(x.Card, {
                                padding: "lg",
                                style: { marginTop: w.spacing.lg, alignItems: "center" },
                                children: [
                                  (0, S.jsx)(h.Ionicons, {
                                    name: "lock-closed-outline",
                                    size: 32,
                                    color: W.accentText,
                                  }),
                                  (0, S.jsx)(n.default, {
                                    style: [
                                      w.typography.bodyStrong,
                                      { color: W.text, marginTop: w.spacing.sm, textAlign: "center" },
                                    ],
                                    children:
                                      "private" === F.limited_reason
                                        ? A("privateAccount")
                                        : A("limitedFollowHint", { name: F.display_name }),
                                  }),
                                  (0, S.jsx)(n.default, {
                                    style: [
                                      w.typography.small,
                                      { color: W.textMuted, textAlign: "center", marginTop: 2 },
                                    ],
                                    children:
                                      "private" === F.limited_reason
                                        ? A("privateAccountStrict")
                                        : A("limitedProfileSub"),
                                  }),
                                  "private" !== F.limited_reason &&
                                    !F.is_blocked &&
                                    (0, S.jsx)(c.default, {
                                      style: { alignSelf: "stretch", marginTop: w.spacing.lg },
                                      children: (0, S.jsx)(k.FollowButton, {
                                        viewerId: i.id,
                                        targetId: F.user_id,
                                        targetName: F.display_name,
                                        isFollowing: F.is_following,
                                        isRequested: F.is_requested,
                                        onChanged: K,
                                        fullWidth: !0,
                                        size: "md",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !F.limited &&
                          (0, S.jsxs)(S.Fragment, {
                            children: [
                              (0, S.jsxs)(c.default, {
                                style: [L.statsRow, { borderColor: W.border }],
                                children: [
                                  (0, S.jsx)(P, {
                                    n: F.followers,
                                    label: A("followersLabel"),
                                    colors: W,
                                    onPress: () => D.push(`/follows/${F.user_id}?kind=followers`),
                                  }),
                                  (0, S.jsx)(P, {
                                    n: F.following,
                                    label: A("followingLabel"),
                                    colors: W,
                                    onPress: () => D.push(`/follows/${F.user_id}?kind=following`),
                                  }),
                                  (0, S.jsx)(P, {
                                    n: F.matches_played,
                                    label: A("matchesPlayedLabel"),
                                    colors: W,
                                  }),
                                  null != F.matches_hosted &&
                                    (0, S.jsx)(P, {
                                      n: F.matches_hosted,
                                      label: A("hostedLabel"),
                                      colors: W,
                                    }),
                                ],
                              }),
                              (0, S.jsx)(z, {
                                title: A("aboutLabel"),
                                colors: W,
                                children: (0, S.jsx)(n.default, {
                                  style: [w.typography.body, { color: F.bio ? W.text : W.textMuted }],
                                  children: F.bio || A("noBioYet"),
                                }),
                              }),
                              (0, S.jsx)(z, {
                                title: A("favoriteSports"),
                                colors: W,
                                children: (0, S.jsxs)(c.default, {
                                  style: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm },
                                  children: [
                                    F.favorite_sports.map((e) =>
                                      (0, S.jsx)(m.Badge, { label: A(I[e]), tone: "neutral" }, e),
                                    ),
                                    (0, S.jsx)(f.Explainer, {
                                      k: "classification",
                                      children: (0, S.jsx)(m.Badge, {
                                        label: A(F.skill_level),
                                        tone: "accent",
                                      }),
                                    }),
                                    (0, S.jsx)(m.Badge, {
                                      label: `${F.attendance.emoji ?? ""} ${A(F.attendance.key)}`.trim(),
                                      tone: F.attendance.tone,
                                    }),
                                  ],
                                }),
                              }),
                              (F.achievements.length > 0 || F.badges.length > 0) &&
                                (0, S.jsx)(z, {
                                  title: A("achievementsTitle"),
                                  colors: W,
                                  children: (0, S.jsx)(c.default, {
                                    style: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm },
                                    children: [...F.achievements, ...F.badges]
                                      .slice(0, 12)
                                      .map((e) =>
                                        (0, S.jsxs)(
                                          c.default,
                                          {
                                            style: [
                                              L.badgeChip,
                                              { backgroundColor: W.surface, borderColor: W.border },
                                            ],
                                            children: [
                                              (0, S.jsx)(n.default, {
                                                style: { fontSize: 16 },
                                                children: e.emoji,
                                              }),
                                              (0, S.jsx)(n.default, {
                                                style: [
                                                  w.typography.caption,
                                                  { color: W.text, marginStart: 4 },
                                                ],
                                                children: A(e.key),
                                              }),
                                            ],
                                          },
                                          e.id,
                                        ),
                                      ),
                                  }),
                                }),
                              $.length > 0 &&
                                (0, S.jsx)(z, {
                                  title: A("highlightsTitle"),
                                  colors: W,
                                  children: (0, S.jsx)(c.default, {
                                    style: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm },
                                    children: $.map((e) =>
                                      (0, S.jsxs)(
                                        c.default,
                                        {
                                          style: [
                                            L.badgeChip,
                                            { backgroundColor: W.surface, borderColor: W.border },
                                          ],
                                          children: [
                                            (0, S.jsx)(h.Ionicons, {
                                              name: "film-outline",
                                              size: 15,
                                              color: W.accentText,
                                            }),
                                            (0, S.jsx)(n.default, {
                                              style: [
                                                w.typography.caption,
                                                { color: W.text, marginHorizontal: 4 },
                                              ],
                                              children: A(e.label_key),
                                            }),
                                            (0, S.jsx)(n.default, {
                                              style: [w.typography.caption, { color: W.textMuted }],
                                              children: A("collectionCount", {
                                                n: (0, v.formatNumber)(e.count),
                                              }),
                                            }),
                                          ],
                                        },
                                        e.cover_clip_id,
                                      ),
                                    ),
                                  }),
                                }),
                              F.teams.length > 0 &&
                                (0, S.jsx)(z, {
                                  title: A("teamsLabel"),
                                  colors: W,
                                  children: (0, S.jsx)(c.default, {
                                    style: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm },
                                    children: F.teams.map((e) => {
                                      const t = (e.win_streak ?? 0) >= 2,
                                        l = (e.loss_streak ?? 0) >= 2;
                                      return (0, S.jsxs)(
                                        a.default,
                                        {
                                          onPress: () => D.push(`/teams/${e.id}`),
                                          style: [
                                            L.badgeChip,
                                            { backgroundColor: W.surface, borderColor: W.border },
                                          ],
                                          children: [
                                            (0, S.jsx)(n.default, {
                                              style: { fontSize: 15 },
                                              children: e.emoji,
                                            }),
                                            (0, S.jsx)(n.default, {
                                              style: [
                                                w.typography.caption,
                                                {
                                                  color: W.text,
                                                  marginStart: 4,
                                                  flexShrink: 1,
                                                  maxWidth: 150,
                                                },
                                              ],
                                              numberOfLines: 1,
                                              children: e.name,
                                            }),
                                            t &&
                                              (0, S.jsxs)(n.default, {
                                                style: [w.typography.caption, { marginStart: 3 }],
                                                children: ["\ud83d\udd25", e.win_streak],
                                              }),
                                            l &&
                                              (0, S.jsxs)(n.default, {
                                                style: [w.typography.caption, { marginStart: 3 }],
                                                children: ["\ud83e\uddca", e.loss_streak],
                                              }),
                                          ],
                                        },
                                        e.id,
                                      );
                                    }),
                                  }),
                                }),
                              F.mutual_friends.length > 0 &&
                                (0, S.jsx)(z, {
                                  title: `${A("mutualFriends")} \xb7 ${F.mutual_friends.length}`,
                                  colors: W,
                                  children: (0, S.jsx)(c.default, {
                                    style: { flexDirection: "row", flexWrap: "wrap" },
                                    children: F.mutual_friends.map((e, t) =>
                                      (0, S.jsx)(
                                        a.default,
                                        {
                                          onPress: () => D.push(`/player/${e.id}`),
                                          accessibilityRole: "button",
                                          accessibilityLabel: e.name,
                                          children: (0, S.jsxs)(n.default, {
                                            style: [w.typography.small, { color: W.accentText }],
                                            children: [e.name, t < F.mutual_friends.length - 1 ? ", " : ""],
                                          }),
                                        },
                                        e.id,
                                      ),
                                    ),
                                  }),
                                }),
                              F.mutual_teams.length > 0 &&
                                (0, S.jsx)(z, {
                                  title: `${A("mutualTeams")} \xb7 ${F.mutual_teams.length}`,
                                  colors: W,
                                  children: (0, S.jsx)(n.default, {
                                    style: [w.typography.small, { color: W.textMuted }],
                                    numberOfLines: 2,
                                    children: F.mutual_teams.map((e) => e.name).join(", "),
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, S.jsx)(s.default, {
                  visible: N,
                  transparent: !0,
                  animationType: "fade",
                  onRequestClose: () => U(!1),
                  children: (0, S.jsx)(a.default, {
                    style: L.scrim,
                    onPress: () => U(!1),
                    children: (0, S.jsxs)(a.default, {
                      style: [L.sheet, { backgroundColor: W.surface }],
                      onPress: () => {},
                      children: [
                        (0, S.jsxs)(a.default, {
                          onPress: async () => {
                            if (!i || !F) return;
                            (U(!1),
                              F.is_muted
                                ? (await (0, _.unmuteUser)(i.id, F.user_id), J(A("unmutedToast")))
                                : (await (0, _.muteUser)(i.id, F.user_id), J(A("mutedToast"))));
                            await K();
                          },
                          accessibilityRole: "button",
                          style: L.sheetRow,
                          children: [
                            (0, S.jsx)(h.Ionicons, {
                              name: F.is_muted ? "volume-high-outline" : "volume-mute-outline",
                              size: 20,
                              color: W.text,
                            }),
                            (0, S.jsx)(n.default, {
                              style: [w.typography.body, { color: W.text, marginStart: w.spacing.md }],
                              children: F.is_muted ? A("unmuteBtn") : A("muteBtn"),
                            }),
                          ],
                        }),
                        (0, S.jsx)(c.default, { style: [L.sheetDivider, { backgroundColor: W.border }] }),
                        (0, S.jsxs)(a.default, {
                          onPress: Q,
                          accessibilityRole: "button",
                          style: L.sheetRow,
                          children: [
                            (0, S.jsx)(h.Ionicons, { name: "ban-outline", size: 20, color: W.danger }),
                            (0, S.jsx)(n.default, {
                              style: [w.typography.body, { color: W.danger, marginStart: w.spacing.md }],
                              children: F.is_blocked ? A("unblockBtn") : A("blockBtn"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                G &&
                  (0, S.jsx)(c.default, {
                    style: [L.toast, { backgroundColor: W.text }],
                    children: (0, S.jsx)(n.default, {
                      style: [w.typography.smallStrong, { color: W.bg, textAlign: "center" }],
                      children: G,
                    }),
                  }),
              ],
            })
          : (0, S.jsx)(u.SafeAreaView, {
              style: [L.center, { backgroundColor: W.bg }],
              children: (0, S.jsx)(l.default, { color: W.accentText }),
            });
      }));
    var t = r(d[1]),
      l = e(r(d[2])),
      s = e(r(d[3])),
      a = e(r(d[4])),
      o = e(r(d[5])),
      i = e(r(d[6])),
      n = e(r(d[7])),
      c = e(r(d[8])),
      u = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      x = r(d[12]),
      m = r(d[13]),
      f = r(d[14]),
      y = r(d[15]),
      b = r(d[16]),
      j = r(d[17]),
      w = r(d[18]),
      _ = r(d[19]),
      k = r(d[20]),
      C = r(d[21]),
      v = r(d[22]),
      T = r(d[23]),
      B = r(d[24]),
      R = r(d[25]),
      S = r(d[26]);
    const I = { football: "football", padel: "padel", tennis: "tennis" };
    const P = ({ n: e, label: t, colors: l, onPress: s }) => {
        const o = (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(n.default, {
              style: [w.typography.h3, { color: l.text }],
              children: "number" == typeof e ? (0, v.formatNumber)(e) : e,
            }),
            (0, S.jsx)(n.default, { style: [w.typography.caption, { color: l.textMuted }], children: t }),
          ],
        });
        return s
          ? (0, S.jsx)(a.default, {
              onPress: s,
              accessibilityRole: "button",
              accessibilityLabel: t,
              style: { alignItems: "center", flex: 1 },
              children: o,
            })
          : (0, S.jsx)(c.default, { style: { alignItems: "center", flex: 1 }, children: o });
      },
      z = ({ title: e, colors: t, children: l }) =>
        (0, S.jsxs)(c.default, {
          style: { marginTop: w.spacing.lg },
          children: [
            (0, S.jsx)(n.default, {
              style: [w.typography.smallStrong, { color: t.textMuted, marginBottom: w.spacing.sm }],
              children: e,
            }),
            l,
          ],
        }),
      L = i.default.create({
        center: { flex: 1, alignItems: "center", justifyContent: "center" },
        cover: { height: 120, paddingTop: w.spacing.md, paddingHorizontal: w.spacing.lg },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: i.default.hairlineWidth,
        },
        avatar: {
          width: 76,
          height: 76,
          borderRadius: 38,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 3,
        },
        statsRow: {
          flexDirection: "row",
          marginTop: w.spacing.lg,
          paddingVertical: w.spacing.md,
          borderTopWidth: i.default.hairlineWidth,
          borderBottomWidth: i.default.hairlineWidth,
        },
        badgeChip: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: w.spacing.md,
          paddingVertical: 6,
          borderRadius: w.radius.pill,
          borderWidth: i.default.hairlineWidth,
        },
        msgBtn: {
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: i.default.hairlineWidth,
        },
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: w.spacing.lg,
          paddingVertical: w.spacing.md,
        },
        dot: { width: 8, height: 8, borderRadius: 4 },
        scrim: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "flex-end" },
        sheet: {
          borderTopLeftRadius: w.radius.xl,
          borderTopRightRadius: w.radius.xl,
          padding: w.spacing.sm,
          paddingBottom: w.spacing.xxxl,
        },
        sheetRow: { flexDirection: "row", alignItems: "center", padding: w.spacing.lg },
        sheetDivider: { height: i.default.hairlineWidth, marginHorizontal: w.spacing.lg },
        toast: {
          position: "absolute",
          bottom: 28,
          left: w.spacing.lg,
          right: w.spacing.lg,
          padding: w.spacing.md,
          borderRadius: w.radius.md,
        },
      });
  },
  2475,
  [
    33, 15, 461, 467, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 1668, 626, 630, 615, 616, 671, 2377,
    1679, 1311, 1626, 675, 1171, 13,
  ],
);
