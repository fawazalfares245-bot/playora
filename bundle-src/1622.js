__d(
  function (g, r, i, a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, profile: c } = (0, w.useAuth)(),
          { colors: u } = (0, S.useTheme)(),
          b = (0, x.useRouter)(),
          k = (0, z.useT)(),
          [T, v] = (0, t.useState)(null),
          [L, H] = (0, t.useState)([]),
          [W, D] = (0, t.useState)(null),
          [$, F] = (0, t.useState)(!1),
          [E, N] = (0, t.useState)(null),
          U = (0, t.useCallback)(async () => {
            if (
              e &&
              (v(await (0, P.fetchFeed)(e.id)),
              H(await (0, P.fetchStoryTray)(e.id)),
              "female" === c?.audience)
            )
              try {
                if (!(await s.default.getItem(`${R}:${e.id}`))) {
                  const t = await (0, P.fetchPrivacySettings)(e.id);
                  F("followers" === t.profile_visibility);
                }
              } catch {}
          }, [e, c?.audience]);
        (0, x.useFocusEffect)(
          (0, t.useCallback)(() => {
            U();
          }, [U]),
        );
        const V = () => {
            (F(!1), e && s.default.setItem(`${R}:${e.id}`, "1").catch(() => {}));
          },
          q = (e) => {
            (D(e), setTimeout(() => D(null), 2e3));
          };
        return (0, A.jsxs)(y.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: u.bg },
          children: [
            (0, A.jsxs)(p.default, {
              style: O.header,
              children: [
                (0, A.jsxs)(p.default, {
                  style: { flex: 1 },
                  children: [
                    (0, A.jsx)(h.default, {
                      style: [_.typography.display, { color: u.text }],
                      children: k("feedTitle"),
                    }),
                    (0, A.jsx)(h.default, {
                      style: [_.typography.small, { color: u.textMuted }],
                      children: k("feedSub"),
                    }),
                  ],
                }),
                (0, A.jsx)(l.default, {
                  onPress: () => b.push("/media"),
                  accessibilityRole: "button",
                  accessibilityLabel: k("mediaEntry"),
                  style: [
                    O.iconBtn,
                    { backgroundColor: u.surface, borderColor: u.border, marginEnd: _.spacing.sm },
                  ],
                  children: (0, A.jsx)(m.Ionicons, { name: "film-outline", size: 20, color: u.text }),
                }),
                (0, A.jsx)(l.default, {
                  onPress: () => b.push("/feed/compose"),
                  accessibilityRole: "button",
                  accessibilityLabel: k("composePost"),
                  style: [O.iconBtn, { backgroundColor: u.accent, borderColor: u.accent }],
                  children: (0, A.jsx)(m.Ionicons, { name: "create-outline", size: 20, color: u.accentInk }),
                }),
              ],
            }),
            (0, A.jsx)(n.default, {
              data: T ?? [],
              keyExtractor: (e) => e.post.id,
              contentContainerStyle: { paddingBottom: _.spacing.xxxl },
              initialNumToRender: 5,
              maxToRenderPerBatch: 5,
              windowSize: 7,
              removeClippedSubviews: !0,
              ListHeaderComponent: (0, A.jsxs)(A.Fragment, {
                children: [
                  (0, A.jsx)(M, {
                    tray: L,
                    userId: e?.id ?? "",
                    colors: u,
                    t: k,
                    onOpen: (e) => b.push(`/stories/${e}`),
                    onAdd: () => b.push("/stories/compose"),
                  }),
                  $ &&
                    (0, A.jsx)(p.default, {
                      style: { paddingHorizontal: _.spacing.lg },
                      children: (0, A.jsxs)(f.Card, {
                        padding: "md",
                        style: { marginBottom: _.spacing.md, borderColor: u.accent, borderWidth: 1.5 },
                        children: [
                          (0, A.jsxs)(p.default, {
                            style: { flexDirection: "row", alignItems: "center" },
                            children: [
                              (0, A.jsx)(p.default, {
                                style: [O.shieldWrap, { backgroundColor: u.accentMuted }],
                                children: (0, A.jsx)(m.Ionicons, {
                                  name: "shield-checkmark",
                                  size: 20,
                                  color: u.accentText,
                                }),
                              }),
                              (0, A.jsxs)(p.default, {
                                style: { flex: 1, marginStart: _.spacing.md },
                                children: [
                                  (0, A.jsx)(h.default, {
                                    style: [_.typography.bodyStrong, { color: u.text }],
                                    children: k("privacyCardTitle"),
                                  }),
                                  (0, A.jsx)(h.default, {
                                    style: [_.typography.small, { color: u.textMuted, marginTop: 1 }],
                                    children: k("privacyCardBody"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, A.jsxs)(p.default, {
                            style: { flexDirection: "row", gap: _.spacing.sm, marginTop: _.spacing.md },
                            children: [
                              (0, A.jsx)(j.Button, {
                                title: k("privacyCardOk"),
                                size: "sm",
                                onPress: V,
                                style: { flex: 1 },
                              }),
                              (0, A.jsx)(j.Button, {
                                title: k("settings"),
                                size: "sm",
                                variant: "secondary",
                                onPress: () => {
                                  (V(), b.push("/privacy"));
                                },
                                style: { flex: 1 },
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
              ListEmptyComponent: (0, A.jsx)(p.default, {
                style: { paddingHorizontal: _.spacing.lg },
                children:
                  null === T
                    ? (0, A.jsx)(o.default, { color: u.accentText })
                    : (0, A.jsxs)(p.default, {
                        children: [
                          (0, A.jsx)(I.EmptyState, {
                            icon: "newspaper-outline",
                            title: k("emptyFeed"),
                            body: k("emptyFeedSub"),
                          }),
                          (0, A.jsx)(j.Button, {
                            title: k("findPlayersToFollow"),
                            fullWidth: !0,
                            onPress: () => b.push("/discover"),
                            leftIcon: (0, A.jsx)(m.Ionicons, {
                              name: "search",
                              size: 16,
                              color: u.accentInk,
                            }),
                            style: { marginTop: _.spacing.md },
                          }),
                        ],
                      }),
              }),
              renderItem: ({ item: t }) =>
                (0, A.jsx)(p.default, {
                  style: { paddingHorizontal: _.spacing.lg },
                  children: (0, A.jsx)(B, {
                    item: t,
                    userId: e.id,
                    colors: u,
                    t: k,
                    onChange: U,
                    onToast: q,
                    onOpenAuthor: (e) => b.push(`/player/${e}`),
                    onOpenComments: () => N(t),
                  }),
                }),
            }),
            e &&
              (0, A.jsx)(C.CommentsSheet, {
                item: E,
                userId: e.id,
                onClose: () => N(null),
                onChange: U,
                onOpenAuthor: (e) => {
                  (N(null), b.push(`/player/${e}`));
                },
              }),
            W &&
              (0, A.jsx)(p.default, {
                style: [O.flash, { backgroundColor: u.text }],
                children: (0, A.jsx)(h.default, {
                  style: [_.typography.smallStrong, { color: u.bg, textAlign: "center" }],
                  children: W,
                }),
              }),
          ],
        });
      }));
    var t = r(d[1]),
      s = e(r(d[2])),
      o = e(r(d[3])),
      n = e(r(d[4])),
      l = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      h = e(r(d[8])),
      p = e(r(d[9])),
      y = r(d[10]),
      m = r(d[11]),
      x = r(d[12]),
      f = r(d[13]),
      b = r(d[14]),
      j = r(d[15]),
      C = r(d[16]),
      I = r(d[17]),
      k = r(d[18]),
      w = r(d[19]),
      S = r(d[20]),
      _ = r(d[21]),
      P = r(d[22]),
      T = r(d[23]),
      v = r(d[24]),
      z = r(d[25]),
      A = r(d[26]);
    const R = "playora.feedPrivacyCard.v1";
    const B = ({
        item: e,
        userId: t,
        colors: s,
        t: o,
        onChange: n,
        onToast: c,
        onOpenAuthor: u,
        onOpenComments: y,
      }) => {
        const x = e.post,
          j = !e.media_uri && !e.clip && !x.achievement_key;
        return (0, A.jsxs)(f.Card, {
          padding: "md",
          style: { marginBottom: _.spacing.md },
          children: [
            (0, A.jsxs)(p.default, {
              style: { flexDirection: "row", alignItems: "center" },
              children: [
                (0, A.jsx)(l.default, {
                  onPress: () => u(e.author_id),
                  style: [O.avatar, { backgroundColor: s.surfaceAlt }],
                  children: (0, A.jsx)(h.default, {
                    style: [_.typography.bodyStrong, { color: s.text }],
                    children: e.author_name.slice(0, 1).toUpperCase(),
                  }),
                }),
                (0, A.jsxs)(l.default, {
                  onPress: () => u(e.author_id),
                  style: { flex: 1, marginHorizontal: _.spacing.md },
                  children: [
                    (0, A.jsxs)(h.default, {
                      style: [_.typography.bodyStrong, { color: s.text }],
                      numberOfLines: 1,
                      children: [
                        e.author_name,
                        e.author_username
                          ? (0, A.jsxs)(h.default, {
                              style: [_.typography.caption, { color: s.textMuted }],
                              children: ["  \xb7  @", e.author_username],
                            })
                          : null,
                      ],
                    }),
                    (0, A.jsx)(h.default, {
                      style: [_.typography.caption, { color: s.textMuted }],
                      children: (0, v.formatRelative)(x.created_at),
                    }),
                  ],
                }),
                "text" !== x.kind &&
                  (0, A.jsx)(b.Badge, {
                    label: o("highlight" === x.kind ? "postHighlightTag" : "postAchievementTag"),
                    tone: "accent",
                  }),
                (0, A.jsx)(l.default, {
                  onPress: async () => {
                    (await (0, P.reportPost)(t, x.id, "inappropriate"), c(o("reportedToast")));
                  },
                  hitSlop: 8,
                  accessibilityRole: "button",
                  accessibilityLabel: o("reportPost"),
                  style: { marginStart: _.spacing.sm },
                  children: (0, A.jsx)(m.Ionicons, { name: "flag-outline", size: 16, color: s.textMuted }),
                }),
              ],
            }),
            !!x.caption &&
              (0, A.jsx)(h.default, {
                style: [
                  j ? _.typography.bodyStrong : _.typography.body,
                  { color: s.text, marginTop: _.spacing.sm, lineHeight: j ? 24 : 22 },
                ],
                children: x.caption,
              }),
            x.achievement_key &&
              (0, A.jsxs)(p.default, {
                style: [O.attach, { backgroundColor: s.surfaceAlt, borderColor: s.border }],
                children: [
                  (0, A.jsx)(h.default, { style: { fontSize: 18 }, children: "\ud83c\udfc6" }),
                  (0, A.jsx)(h.default, {
                    style: [_.typography.bodyStrong, { color: s.text, marginStart: _.spacing.sm }],
                    children: o(x.achievement_key),
                  }),
                ],
              }),
            e.media_uri &&
              e.media_type &&
              (0, A.jsx)(p.default, {
                style: { marginTop: _.spacing.sm },
                children: (0, A.jsx)(k.FeedMedia, {
                  uri: e.media_uri,
                  type: e.media_type,
                  height: 300,
                  radius: _.radius.md,
                }),
              }),
            !e.media_uri &&
              e.clip &&
              (0, A.jsxs)(p.default, {
                style: [O.clip, { backgroundColor: s.surfaceAlt }],
                children: [
                  (0, A.jsx)(m.Ionicons, { name: "play-circle", size: 32, color: s.accentText }),
                  (0, A.jsxs)(p.default, {
                    style: O.clipBadges,
                    children: [
                      (0, A.jsx)(b.Badge, { label: e.clip.format, tone: "neutral" }),
                      (0, A.jsx)(p.default, { style: { width: 6 } }),
                      (0, A.jsx)(b.Badge, { label: o(e.clip.title), tone: "neutral" }),
                    ],
                  }),
                ],
              }),
            x.hashtags.length > 0 &&
              (0, A.jsx)(h.default, {
                style: [_.typography.small, { color: s.accentText, marginTop: _.spacing.xs }],
                children: x.hashtags.map((e) => `#${e}`).join("  "),
              }),
            (0, A.jsxs)(p.default, {
              style: {
                flexDirection: "row",
                alignItems: "center",
                marginTop: _.spacing.sm,
                gap: _.spacing.lg,
              },
              children: [
                (0, A.jsx)(L, {
                  icon: e.liked ? "heart" : "heart-outline",
                  tint: e.liked ? s.danger : s.textMuted,
                  n: e.like_count,
                  onPress: async () => {
                    (await (0, P.toggleLike)(t, x.id), n());
                  },
                  colors: s,
                  label: e.liked ? o("unlikeA11y") : o("likeA11y"),
                }),
                (0, A.jsx)(L, {
                  icon: "chatbubble-outline",
                  tint: s.textMuted,
                  n: e.comment_count,
                  onPress: y,
                  colors: s,
                  label: o("commentA11y", { n: (0, T.formatNumber)(e.comment_count) }),
                }),
                (0, A.jsx)(L, {
                  icon: "share-social-outline",
                  tint: s.textMuted,
                  n: e.share_count,
                  onPress: async () => {
                    (await (0, P.sharePost)(t, x.id), c(o("linkCopiedToast")), n());
                  },
                  colors: s,
                  label: o("shareA11y"),
                }),
                (0, A.jsx)(p.default, { style: { flex: 1 } }),
                (0, A.jsx)(l.default, {
                  onPress: async () => {
                    (await (0, P.toggleSavePost)(t, x.id), n());
                  },
                  hitSlop: 8,
                  accessibilityRole: "button",
                  accessibilityLabel: o("saveLabel"),
                  children: (0, A.jsx)(m.Ionicons, {
                    name: e.saved ? "bookmark" : "bookmark-outline",
                    size: 18,
                    color: e.saved ? s.accent : s.textMuted,
                  }),
                }),
              ],
            }),
          ],
        });
      },
      M = ({ tray: e, userId: t, colors: s, t: o, onOpen: n, onAdd: u }) => {
        const y = e.find((e) => e.is_self),
          x = e.filter((e) => !e.is_self),
          f = ({ name: e, seen: t, onPress: n, showAdd: c }) =>
            (0, A.jsxs)(p.default, {
              style: { alignItems: "center", width: 72 },
              children: [
                (0, A.jsxs)(p.default, {
                  children: [
                    (0, A.jsx)(l.default, {
                      onPress: n,
                      accessibilityRole: "button",
                      accessibilityLabel: e,
                      style: [O.ring, { borderColor: t ? s.border : s.accent }],
                      children: (0, A.jsx)(p.default, {
                        style: [O.ringInner, { backgroundColor: s.surfaceAlt }],
                        children: (0, A.jsx)(h.default, {
                          style: [_.typography.bodyStrong, { color: s.text }],
                          children: e.slice(0, 1).toUpperCase(),
                        }),
                      }),
                    }),
                    c &&
                      (0, A.jsx)(l.default, {
                        onPress: u,
                        accessibilityRole: "button",
                        accessibilityLabel: o("addStory"),
                        style: [O.addBadge, { backgroundColor: s.accent, borderColor: s.bg }],
                        children: (0, A.jsx)(m.Ionicons, { name: "add", size: 13, color: "#131A03" }),
                      }),
                  ],
                }),
                (0, A.jsx)(h.default, {
                  style: [_.typography.caption, { color: s.textMuted, marginTop: 4 }],
                  numberOfLines: 1,
                  children: e,
                }),
              ],
            });
        return (0, A.jsxs)(c.default, {
          horizontal: !0,
          showsHorizontalScrollIndicator: !1,
          contentContainerStyle: O.rail,
          children: [
            (0, A.jsx)(f, { name: o("yourStory"), seen: !0, onPress: () => (y ? n(t) : u()), showAdd: !0 }),
            x.map((e) =>
              (0, A.jsx)(
                f,
                { name: e.author_name, seen: e.all_seen, onPress: () => n(e.author_id) },
                e.author_id,
              ),
            ),
          ],
        });
      },
      L = ({ icon: e, tint: t, n: s, onPress: o, colors: n, label: c }) =>
        (0, A.jsxs)(l.default, {
          onPress: o,
          hitSlop: 8,
          accessibilityRole: "button",
          accessibilityLabel: c,
          style: { flexDirection: "row", alignItems: "center" },
          children: [
            (0, A.jsx)(m.Ionicons, { name: e, size: 18, color: t }),
            s > 0 &&
              (0, A.jsx)(h.default, {
                style: [_.typography.caption, { color: n.textMuted, marginStart: 4 }],
                children: (0, T.formatNumber)(s),
              }),
          ],
        }),
      O = u.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: _.spacing.lg,
          paddingVertical: _.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: u.default.hairlineWidth,
        },
        shieldWrap: {
          width: 40,
          height: 40,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
        },
        avatar: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
        attach: {
          flexDirection: "row",
          alignItems: "center",
          padding: _.spacing.md,
          borderRadius: _.radius.md,
          borderWidth: u.default.hairlineWidth,
          marginTop: _.spacing.sm,
        },
        clip: {
          height: 120,
          borderRadius: _.radius.md,
          alignItems: "center",
          justifyContent: "center",
          marginTop: _.spacing.sm,
          overflow: "hidden",
        },
        clipBadges: { position: "absolute", top: 8, left: 8, flexDirection: "row" },
        flash: {
          position: "absolute",
          bottom: 28,
          left: _.spacing.lg,
          right: _.spacing.lg,
          padding: _.spacing.md,
          borderRadius: _.radius.md,
        },
        rail: { paddingHorizontal: _.spacing.lg, paddingBottom: _.spacing.md, gap: _.spacing.md },
        ring: {
          width: 60,
          height: 60,
          borderRadius: 30,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        },
        ringInner: {
          flex: 1,
          width: "100%",
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
        },
        addBadge: {
          position: "absolute",
          bottom: -2,
          right: -2,
          width: 20,
          height: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        },
      });
  },
  1622,
  [
    33, 15, 618, 461, 271, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 1625, 1627, 1628, 630,
    615, 616, 671, 1311, 1626, 675, 13,
  ],
);
