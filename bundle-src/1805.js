__d(
  function (g, _r, i, a, m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, profile: M, refreshProfile: $, signOut: G } = (0, T.useAuth)(),
          { highContrast: K, setHighContrast: Q } = (0, v.useThemeMode)(),
          { colors: q } = (0, P.useTheme)(),
          J = (0, x.useRouter)(),
          X = (0, _.useT)(),
          [Y, Z] = (0, t.useState)(M?.full_name ?? ""),
          [ee, te] = (0, t.useState)(M?.bio ?? ""),
          [le, se] = (0, t.useState)(M?.preferred_position ?? null),
          [ae, oe] = (0, t.useState)(null),
          [re, ne] = (0, t.useState)(M?.avatar_url ?? null),
          [ie, ce] = (0, t.useState)(""),
          [de, ue] = (0, t.useState)(null),
          pe = (0, t.useRef)(null),
          [ge, he] = (0, t.useState)(M?.preferred_sports ?? []),
          [me, fe] = (0, t.useState)(M?.skill_level ?? "all"),
          [ye, xe] = (0, t.useState)(null),
          [be, je] = (0, t.useState)(!1),
          [we, Se] = (0, t.useState)(!1),
          [Ce, Te] = (0, t.useState)(!1),
          [ve, Pe] = (0, t.useState)(null),
          [ke, Ie] = (0, t.useState)(0),
          [Re, ze] = (0, t.useState)(0),
          [Me, Be] = (0, t.useState)(0),
          [Ae, Le] = (0, t.useState)(0),
          [De, Fe] = (0, t.useState)(null),
          [We, He] = (0, t.useState)(0),
          [Ve, Ne] = (0, t.useState)(0),
          [Oe, Ue] = (0, t.useState)(null),
          [Ee, $e] = (0, t.useState)(null);
        (0, t.useEffect)(() => {
          e &&
            (0, I.fetchMyOrganizerApplication)(e.id)
              .then(() => $())
              .catch(() => {});
        }, [e?.id]);
        const Ge = (0, t.useCallback)(async () => {
          e &&
            ((0, I.fetchPassport)(e.id)
              .then(Pe)
              .catch(() => Pe(null)),
            (0, I.fetchPlayerAwards)(e.id)
              .then((e) => {
                (Ie(e.mvp), ze(e.total));
              })
              .catch(() => {}),
            (0, I.listFriends)(e.id)
              .then((e) => Be(e.friends.length))
              .catch(() => {}),
            (0, I.fetchHighlightCollections)(e.id)
              .then((e) => Le(e.reduce((e, t) => e + t.count, 0)))
              .catch(() => {}),
            (0, I.fetchLoyaltyAccount)(e.id)
              .then(Fe)
              .catch(() => {}),
            (0, I.fetchWallet)(e.id)
              .then((e) => He(e.available_fils))
              .catch(() => {}),
            (0, I.fetchMyPosition)(e.id)
              .then(oe)
              .catch(() => {}),
            (0, I.fetchPrivacySettings)(e.id)
              .then((e) => {
                (xe("followers" === e.profile_visibility), je("private" === e.profile_visibility));
              })
              .catch(() => {}),
            (0, I.fetchConversations)(e.id)
              .then((e) => Ne(e.reduce((e, t) => e + t.unread, 0)))
              .catch(() => {}),
            (0, I.fetchMyVenues)(e.id)
              .then((t) => Ue(t[0] ? { name: t[0].venue.name, owner: t[0].profile.owner_id === e.id } : null))
              .catch(() => Ue(null)),
            (0, I.listMyClubs)(e.id)
              .then((e) =>
                $e(e.find((e) => "owner" === e.role || "admin" === e.role || "manager" === e.role) ?? null),
              )
              .catch(() => $e(null)));
        }, [e]);
        (0, x.useFocusEffect)(
          (0, t.useCallback)(() => {
            Ge();
          }, [Ge]),
        );
        const Ke = "female" === M?.audience,
          Qe = (M?.full_name ?? "P")
            .trim()
            .split(/\s+/)
            .map((e) => e[0])
            .slice(0, 2)
            .join("")
            .toUpperCase(),
          qe = ve?.sports_played?.length ? ve.sports_played : (M?.preferred_sports ?? []),
          Je = "admin" === M?.role;
        return (0, L.jsx)(f.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: q.bg },
          children: (0, L.jsxs)(o.default, {
            contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
            children: [
              (0, L.jsxs)(u.default, {
                style: E.topBar,
                children: [
                  (0, L.jsx)(s.default, {
                    onPress: () => e && J.push(`/passport/${e.id}`),
                    accessibilityRole: "button",
                    accessibilityLabel: X("sportsPassport"),
                    style: [E.miniAvatar, { backgroundColor: q.accent, overflow: "hidden" }],
                    children: M?.avatar_url
                      ? (0, L.jsx)(h.AppImage, {
                          uri: M.avatar_url,
                          style: r.default.absoluteFill,
                          priority: "high",
                        })
                      : (0, L.jsx)(c.default, {
                          style: [E.miniAvatarText, { color: q.accentInk }],
                          children: Qe,
                        }),
                  }),
                  (0, L.jsx)(c.default, {
                    style: [E.wordmark, { color: q.text }],
                    children: X("appName").toUpperCase(),
                  }),
                  (0, L.jsxs)(s.default, {
                    onPress: () => J.push("/messages"),
                    accessibilityRole: "button",
                    accessibilityLabel: X("messagesTitle"),
                    style: [E.dmBtn, { backgroundColor: q.surface, borderColor: q.border }],
                    children: [
                      (0, L.jsx)(y.Ionicons, { name: "chatbubble-outline", size: 18, color: q.text }),
                      Ve > 0 &&
                        (0, L.jsx)(u.default, {
                          style: [E.dmBadge, { backgroundColor: q.accent }],
                          children: (0, L.jsx)(c.default, {
                            style: [E.dmBadgeText, { color: q.accentInk }],
                            children: (0, R.formatNumber)(Ve),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, L.jsxs)(u.default, {
                style: [E.playerCard, { backgroundColor: q.accent }],
                children: [
                  (0, L.jsxs)(u.default, {
                    style: E.cardHead,
                    children: [
                      (0, L.jsx)(c.default, {
                        style: E.cardLabel,
                        children: X("playerCardLabel").toUpperCase(),
                      }),
                      (0, L.jsxs)(u.default, {
                        style: { alignItems: "flex-end", gap: 6 },
                        children: [
                          (0, L.jsxs)(u.default, {
                            style: { flexDirection: "row", alignItems: "center", gap: k.spacing.sm },
                            children: [
                              (0, L.jsx)(s.default, {
                                onPress: () => {
                                  (Z(M?.full_name ?? ""),
                                    te(M?.bio ?? ""),
                                    se(M?.preferred_position ?? null),
                                    ne(M?.avatar_url ?? null),
                                    ce(""),
                                    he(M?.preferred_sports ?? []),
                                    fe(M?.skill_level ?? "all"),
                                    Te((e) => !e));
                                },
                                accessibilityRole: "button",
                                accessibilityLabel: X("editProfile"),
                                hitSlop: 8,
                                children: (0, L.jsx)(y.Ionicons, {
                                  name: "pencil",
                                  size: 14,
                                  color: "rgba(0,0,0,0.65)",
                                }),
                              }),
                              De &&
                                (0, L.jsx)(s.default, {
                                  onPress: () => J.push("/rewards"),
                                  accessibilityRole: "button",
                                  accessibilityLabel: X("loyaltyTitle"),
                                  style: E.lvlChip,
                                  children: (0, L.jsx)(c.default, {
                                    style: E.lvlText,
                                    children: V(De.tier, X),
                                  }),
                                }),
                            ],
                          }),
                          (0, L.jsx)(s.default, {
                            onPress: () => J.push("/wallet"),
                            accessibilityRole: "button",
                            accessibilityLabel: X("walletTitle"),
                            style: E.walletChip,
                            children: (0, L.jsxs)(u.default, {
                              style: { flexDirection: "row", alignItems: "center", gap: 6 },
                              children: [
                                (0, L.jsx)(y.Ionicons, {
                                  name: "wallet-outline",
                                  size: 18,
                                  color: "rgba(0,0,0,0.8)",
                                }),
                                (0, L.jsxs)(c.default, {
                                  style: E.walletText,
                                  children: [(We / 1e3).toFixed(3), " KWD"],
                                }),
                              ],
                            }),
                          }),
                          ae &&
                            (0, L.jsxs)(u.default, {
                              style: E.posChip,
                              children: [
                                (0, L.jsx)(y.Ionicons, {
                                  name: "locate-outline",
                                  size: 17,
                                  color: "rgba(0,0,0,0.8)",
                                }),
                                (0, L.jsx)(c.default, { style: E.posText, children: X(`pitchRole_${ae}`) }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, L.jsx)(c.default, {
                    style: [E.playerName, { color: q.accentInk }],
                    numberOfLines: 2,
                    maxFontSizeMultiplier: 1.2,
                    adjustsFontSizeToFit: !0,
                    minimumFontScale: 0.6,
                    children: (M?.full_name || X("player")).toUpperCase(),
                  }),
                  M?.username
                    ? (0, L.jsxs)(c.default, { style: E.handle, children: ["@", M.username] })
                    : (0, L.jsx)(s.default, {
                        accessibilityRole: "button",
                        accessibilityLabel: X("usernameSetPrompt"),
                        onPress: () => {
                          (Z(M?.full_name ?? ""),
                            te(M?.bio ?? ""),
                            se(M?.preferred_position ?? null),
                            ne(M?.avatar_url ?? null),
                            ce(""),
                            he(M?.preferred_sports ?? []),
                            fe(M?.skill_level ?? "all"),
                            Te(!0));
                        },
                        children: (0, L.jsx)(c.default, {
                          style: [E.handle, { textDecorationLine: "underline" }],
                          children: X("usernameSetPrompt"),
                        }),
                      }),
                  qe.length > 0 &&
                    (0, L.jsx)(u.default, {
                      style: E.sportRow,
                      children: qe
                        .slice(0, 3)
                        .map((e) =>
                          (0, L.jsx)(
                            u.default,
                            {
                              style: E.sportChip,
                              children: (0, L.jsx)(c.default, { style: E.sportChipText, children: e }),
                            },
                            e,
                          ),
                        ),
                    }),
                  (0, L.jsxs)(u.default, {
                    style: E.statsBar,
                    children: [
                      (0, L.jsx)(H, {
                        value: (0, R.formatNumber)(ve?.matches_played ?? 0),
                        label: X("gamesPlayed"),
                      }),
                      (0, L.jsx)(u.default, { style: E.statDivider }),
                      (0, L.jsx)(H, {
                        value: (0, R.formatNumber)(ve?.followers ?? 0),
                        label: X("followersLabel"),
                      }),
                      (0, L.jsx)(u.default, { style: E.statDivider }),
                      (0, L.jsx)(H, { value: (0, R.formatNumber)(ke), label: X("mvpsLabel") }),
                    ],
                  }),
                ],
              }),
              Ce &&
                (0, L.jsxs)(L.Fragment, {
                  children: [
                    (0, L.jsxs)(b.Card, {
                      style: { marginTop: k.spacing.md },
                      children: [
                        (0, L.jsx)(c.default, {
                          style: [
                            k.typography.smallStrong,
                            { color: q.textMuted, marginBottom: k.spacing.xs },
                          ],
                          children: X("profilePhoto"),
                        }),
                        (0, L.jsxs)(u.default, {
                          style: {
                            flexDirection: "row",
                            alignItems: "center",
                            gap: k.spacing.md,
                            marginBottom: k.spacing.md,
                          },
                          children: [
                            (0, L.jsx)(S.PlayerAvatar, { name: Y || "P", seed: 0, uri: re, size: 56 }),
                            (0, L.jsx)(w.Button, {
                              title: X("changePhoto"),
                              size: "sm",
                              variant: "secondary",
                              onPress: async () => {
                                const e = await (0, z.pickAvatarImage)();
                                e && ne(e);
                              },
                            }),
                            re &&
                              (0, L.jsx)(w.Button, {
                                title: X("removePhoto"),
                                size: "sm",
                                variant: "ghost",
                                onPress: () => ne(null),
                              }),
                          ],
                        }),
                        (0, L.jsx)(j.Input, { label: X("fullName"), value: Y, onChangeText: Z }),
                        M?.username
                          ? (0, L.jsxs)(u.default, {
                              style: { marginBottom: k.spacing.md },
                              children: [
                                (0, L.jsx)(c.default, {
                                  style: [
                                    k.typography.smallStrong,
                                    { color: q.textMuted, marginBottom: k.spacing.xs },
                                  ],
                                  children: X("usernameLabel"),
                                }),
                                (0, L.jsxs)(u.default, {
                                  style: { flexDirection: "row", alignItems: "center", gap: k.spacing.sm },
                                  children: [
                                    (0, L.jsxs)(c.default, {
                                      style: [k.typography.body, { color: q.textMuted }],
                                      children: ["@", M.username],
                                    }),
                                    (0, L.jsx)(y.Ionicons, {
                                      name: "lock-closed",
                                      size: 13,
                                      color: q.textMuted,
                                    }),
                                  ],
                                }),
                                (0, L.jsx)(c.default, {
                                  style: [k.typography.caption, { color: q.textMuted, marginTop: 2 }],
                                  children: X("usernameLockedHint"),
                                }),
                              ],
                            })
                          : (0, L.jsxs)(u.default, {
                              children: [
                                (0, L.jsx)(j.Input, {
                                  label: X("usernameLabel"),
                                  value: ie,
                                  onChangeText: (t) => {
                                    (ce(t), ue(null), pe.current && clearTimeout(pe.current));
                                    const l = t.trim();
                                    l &&
                                      e &&
                                      (pe.current = setTimeout(async () => {
                                        try {
                                          const t = await (0, I.checkUsername)(e.id, l);
                                          if (!t.valid) return void ue(null);
                                          ue(t.available ? "available" : "taken");
                                        } catch {
                                          ue(null);
                                        }
                                      }, 300));
                                  },
                                  placeholder: X("usernamePlaceholder"),
                                  autoCapitalize: "none",
                                  affix: "@",
                                }),
                                (0, L.jsx)(c.default, {
                                  style: [
                                    k.typography.caption,
                                    {
                                      color:
                                        "available" === de
                                          ? q.success
                                          : "taken" === de
                                            ? q.danger
                                            : q.textMuted,
                                      marginTop: -k.spacing.sm,
                                      marginBottom: k.spacing.md,
                                    },
                                  ],
                                  children:
                                    "available" === de
                                      ? `\u2713 ${X("usernameAvailable")}`
                                      : "taken" === de
                                        ? `\u2715 ${X("usernameTaken")}`
                                        : X("usernameHint"),
                                }),
                              ],
                            }),
                        (0, L.jsx)(j.Input, {
                          label: X("bio"),
                          value: ee,
                          onChangeText: (e) => te(e.slice(0, 160)),
                          multiline: !0,
                          numberOfLines: 3,
                          maxLength: 160,
                          style: { minHeight: 80, textAlignVertical: "top" },
                        }),
                        (0, L.jsx)(c.default, {
                          style: [
                            k.typography.caption,
                            {
                              color: q.textMuted,
                              textAlign: "right",
                              marginTop: -k.spacing.sm,
                              marginBottom: k.spacing.md,
                            },
                          ],
                          children: X("charCounter", { n: ee.length, m: 160 }),
                        }),
                        (0, L.jsx)(c.default, {
                          style: [
                            k.typography.smallStrong,
                            { color: q.textMuted, marginBottom: k.spacing.xs },
                          ],
                          children: X("positionLabel"),
                        }),
                        (0, L.jsx)(u.default, {
                          style: { flexDirection: "row", gap: k.spacing.xs, marginBottom: k.spacing.md },
                          children: D.map((e) => {
                            const t = le === e;
                            return (0, L.jsx)(
                              s.default,
                              {
                                onPress: () => se(t ? null : e),
                                accessibilityRole: "button",
                                accessibilityState: { selected: t },
                                style: [
                                  E.posPick,
                                  {
                                    backgroundColor: t ? q.accent : q.surface,
                                    borderColor: t ? q.accent : q.border,
                                  },
                                ],
                                children: (0, L.jsx)(c.default, {
                                  style: [k.typography.smallStrong, { color: t ? q.accentInk : q.text }],
                                  children: X(`pitchRole_${e}`),
                                }),
                              },
                              e,
                            );
                          }),
                        }),
                        (0, L.jsx)(c.default, {
                          style: [
                            k.typography.smallStrong,
                            { color: q.textMuted, marginBottom: k.spacing.xs },
                          ],
                          children: X("favoriteSports"),
                        }),
                        (0, L.jsx)(u.default, {
                          style: {
                            flexDirection: "row",
                            gap: k.spacing.xs,
                            marginBottom: k.spacing.md,
                            flexWrap: "wrap",
                          },
                          children: F.map((e) => {
                            const t = ge.includes(e);
                            return (0, L.jsx)(
                              s.default,
                              {
                                onPress: () => he(t ? ge.filter((t) => t !== e) : [...ge, e]),
                                accessibilityRole: "button",
                                accessibilityState: { selected: t },
                                style: [
                                  E.posPick,
                                  {
                                    backgroundColor: t ? q.accent : q.surface,
                                    borderColor: t ? q.accent : q.border,
                                  },
                                ],
                                children: (0, L.jsx)(c.default, {
                                  style: [k.typography.smallStrong, { color: t ? q.accentInk : q.text }],
                                  children: X(e),
                                }),
                              },
                              e,
                            );
                          }),
                        }),
                        (0, L.jsx)(c.default, {
                          style: [
                            k.typography.smallStrong,
                            { color: q.textMuted, marginBottom: k.spacing.xs },
                          ],
                          children: X("skillLevelLabel"),
                        }),
                        (0, L.jsx)(u.default, {
                          style: { flexDirection: "row", gap: k.spacing.xs, marginBottom: k.spacing.md },
                          children: W.map((e) => {
                            const t = me === e;
                            return (0, L.jsx)(
                              s.default,
                              {
                                onPress: () => fe(e),
                                accessibilityRole: "button",
                                accessibilityState: { selected: t },
                                style: [
                                  E.posPick,
                                  {
                                    backgroundColor: t ? q.accent : q.surface,
                                    borderColor: t ? q.accent : q.border,
                                  },
                                ],
                                children: (0, L.jsx)(c.default, {
                                  style: [k.typography.smallStrong, { color: t ? q.accentInk : q.text }],
                                  children: X(e),
                                }),
                              },
                              e,
                            );
                          }),
                        }),
                        Ke &&
                          null != ye &&
                          !be &&
                          (0, L.jsxs)(u.default, {
                            style: [E.switchRow, { marginBottom: k.spacing.md }],
                            children: [
                              (0, L.jsxs)(u.default, {
                                style: { flex: 1, marginEnd: k.spacing.md },
                                children: [
                                  (0, L.jsx)(c.default, {
                                    style: [k.typography.bodyStrong, { color: q.text }],
                                    children: X("followersOnlyToggle"),
                                  }),
                                  (0, L.jsx)(c.default, {
                                    style: [k.typography.small, { color: q.textMuted, marginTop: 2 }],
                                    children: X("followersOnlyHint"),
                                  }),
                                ],
                              }),
                              (0, L.jsx)(n.default, {
                                value: ye,
                                onValueChange: xe,
                                trackColor: { false: q.surfaceAlt, true: q.accent },
                                thumbColor: "#fff",
                                ios_backgroundColor: q.surfaceAlt,
                                accessibilityLabel: X("followersOnlyToggle"),
                              }),
                            ],
                          }),
                        (0, L.jsx)(w.Button, {
                          title: X("save"),
                          onPress: async () => {
                            if (e) {
                              Se(!0);
                              try {
                                const t = ie.trim();
                                (await (0, I.updateProfile)(
                                  e.id,
                                  Object.assign(
                                    {
                                      full_name: Y,
                                      bio: ee.slice(0, 160),
                                      preferred_position: le,
                                      avatar_url: re,
                                      preferred_sports: ge,
                                      skill_level: me,
                                    },
                                    null == M?.username && t ? { username: t } : {},
                                  ),
                                ),
                                  Ke &&
                                    null != ye &&
                                    !be &&
                                    (await (0, I.setPrivacySettings)(e.id, {
                                      profile_visibility: ye ? "followers" : "public",
                                    })),
                                  await $(),
                                  (0, I.fetchMyPosition)(e.id)
                                    .then(oe)
                                    .catch(() => {}),
                                  Te(!1));
                              } catch (e) {
                                l.default.alert(
                                  X("error"),
                                  (0, A.storeErrorText)(e?.message ?? "") || X("error"),
                                );
                              } finally {
                                Se(!1);
                              }
                            }
                          },
                          loading: we,
                          fullWidth: !0,
                        }),
                        (0, L.jsxs)(u.default, {
                          style: [E.switchRow, { marginTop: k.spacing.md }],
                          children: [
                            (0, L.jsxs)(u.default, {
                              style: { flex: 1, marginEnd: k.spacing.md },
                              children: [
                                (0, L.jsx)(c.default, {
                                  style: [k.typography.bodyStrong, { color: q.text }],
                                  children: X("highContrast"),
                                }),
                                (0, L.jsx)(c.default, {
                                  style: [k.typography.small, { color: q.textMuted, marginTop: 2 }],
                                  children: X("highContrastHint"),
                                }),
                              ],
                            }),
                            (0, L.jsx)(n.default, {
                              value: K,
                              onValueChange: Q,
                              trackColor: { false: q.surfaceAlt, true: q.accent },
                              thumbColor: "#fff",
                              ios_backgroundColor: q.surfaceAlt,
                              accessibilityLabel: X("highContrast"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, L.jsx)(C.SkillRatings, {}),
                  ],
                }),
              (0, L.jsxs)(u.default, {
                style: E.tileGrid,
                children: [
                  (0, L.jsx)(N, {
                    icon: "time-outline",
                    title: X("matchHistoryTile"),
                    sub: X("playedCount", { n: (0, R.formatNumber)(ve?.matches_played ?? 0) }),
                    onPress: () => e && J.push(`/passport/${e.id}`),
                    colors: q,
                  }),
                  (0, L.jsx)(N, {
                    icon: "albums-outline",
                    title: X("highlightsTile"),
                    sub: X("clipsCount", { n: (0, R.formatNumber)(Ae) }),
                    onPress: () => J.push("/media"),
                    colors: q,
                  }),
                  (0, L.jsx)(N, {
                    icon: "trophy-outline",
                    title: X("awardsTile"),
                    sub: X("awardsWonCount", { n: (0, R.formatNumber)(Re) }),
                    onPress: () => J.push("/awards/leaderboard"),
                    colors: q,
                  }),
                  (0, L.jsx)(N, {
                    icon: "people-outline",
                    title: X("friendsTile"),
                    sub: X("friendsCount", { n: (0, R.formatNumber)(Me) }),
                    onPress: () => J.push("/friends"),
                    colors: q,
                  }),
                  (0, L.jsx)(N, {
                    icon: "gift-outline",
                    title: X("loyaltyTitle"),
                    sub: De
                      ? X("rewardsTileSub", { n: (0, R.formatNumber)(De.balance), tier: V(De.tier, X) })
                      : X("loyaltySubtitle"),
                    onPress: () => J.push("/rewards"),
                    colors: q,
                  }),
                  (0, L.jsx)(N, {
                    icon: "bookmark-outline",
                    title: X("myBookings"),
                    sub: X("myBookingsTileSub"),
                    onPress: () => J.push("/my-bookings"),
                    colors: q,
                  }),
                  (0, L.jsx)(N, {
                    icon: "shield-checkmark-outline",
                    title: X("privacyTitle"),
                    sub: X("privacyTileSub"),
                    onPress: () => J.push("/privacy-controls"),
                    colors: q,
                  }),
                  "female" === M?.audience &&
                    (0, L.jsx)(N, {
                      icon: "logo-whatsapp",
                      title: X("womensSupport"),
                      sub: X("womensSupportSub"),
                      onPress: () =>
                        p.default.openURL(
                          "https://wa.me/96500000000?text=" + encodeURIComponent(X("womensSupportMsg")),
                        ),
                      colors: q,
                    }),
                ],
              }),
              (0, L.jsxs)(s.default, {
                onPress: () => J.push(Oe ? "/venue/portal" : Ee ? `/clubs/${Ee.club.id}` : "/venue/apply"),
                accessibilityRole: "button",
                style: [E.toolsCard, { backgroundColor: q.surface, borderColor: q.accent }],
                children: [
                  (0, L.jsx)(u.default, {
                    style: [E.toolsIcon, { backgroundColor: q.accent }],
                    children: (0, L.jsx)(y.Ionicons, {
                      name: "business-outline",
                      size: 18,
                      color: "#131A03",
                    }),
                  }),
                  (0, L.jsxs)(u.default, {
                    style: { flex: 1, marginHorizontal: k.spacing.md },
                    children: [
                      (0, L.jsxs)(u.default, {
                        style: { flexDirection: "row", alignItems: "center", gap: k.spacing.sm },
                        children: [
                          (0, L.jsx)(c.default, {
                            style: [k.typography.bodyStrong, { color: q.text }],
                            children: X("venueClubTools"),
                          }),
                          (Oe || Ee) &&
                            (0, L.jsx)(u.default, {
                              style: [E.ownerBadge, { backgroundColor: q.accentMuted }],
                              children: (0, L.jsx)(c.default, {
                                style: [E.ownerBadgeText, { color: q.accentText }],
                                children: (Oe && !Oe.owner ? X("badgeStaff") : X("badgeOwner")).toUpperCase(),
                              }),
                            }),
                        ],
                      }),
                      (0, L.jsx)(c.default, {
                        style: [k.typography.caption, { color: q.textMuted }],
                        numberOfLines: 1,
                        children: Oe?.name ?? Ee?.club.name ?? X("venueApplySub"),
                      }),
                    ],
                  }),
                  (0, L.jsx)(y.Ionicons, { name: (0, B.chevronForward)(), size: 18, color: q.accentText }),
                ],
              }),
              (Je || "analyst" === M?.role) &&
                (0, L.jsxs)(L.Fragment, {
                  children: [
                    (0, L.jsx)(c.default, {
                      style: [E.section, { color: q.textMuted }],
                      children: X("adminPanel").toUpperCase(),
                    }),
                    (0, L.jsx)(O, {
                      icon: "speedometer-outline",
                      title: X("biTitle"),
                      onPress: () => J.push("/admin/insights"),
                      colors: q,
                    }),
                    (0, L.jsx)(O, {
                      icon: "analytics",
                      title: X("feedAnalyticsTitle"),
                      onPress: () => J.push("/admin/feed"),
                      colors: q,
                    }),
                    Je &&
                      (0, L.jsxs)(L.Fragment, {
                        children: [
                          (0, L.jsx)(O, {
                            icon: "shield-checkmark",
                            title: X("approvalQueue"),
                            onPress: () => J.push("/admin/organizers"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "business",
                            title: X("adminVenuesTitle"),
                            onPress: () => J.push("/admin/venues"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "sparkles",
                            title: X("adminConciergeTitle"),
                            onPress: () => J.push("/admin/concierge"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "shield-half-outline",
                            title: X("adminConductTitle"),
                            onPress: () => J.push("/admin/conduct"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "trophy-outline",
                            title: X("matchAwards"),
                            onPress: () => J.push("/admin/awards"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "people-outline",
                            title: X("adminPlayersLink"),
                            onPress: () => J.push("/admin/players"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "analytics-outline",
                            title: X("funnelTitle"),
                            onPress: () => J.push("/admin/funnel"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "trending-up",
                            title: X("adminDemandTitle"),
                            onPress: () => J.push("/admin/demand"),
                            colors: q,
                          }),
                          (0, L.jsx)(O, {
                            icon: "hardware-chip-outline",
                            title: X("adminOptimizerTitle"),
                            onPress: () => J.push("/admin/optimizer"),
                            colors: q,
                          }),
                          // XC (F-XC-7) / ADM1 (F-ADM1-32): the privileged action log is reachable in
                          // the product, not only through devtools.
                          (0, L.jsx)(O, {
                            icon: "document-text-outline",
                            title: X("adminAuditLink"),
                            onPress: () => J.push("/admin/audit"),
                            colors: q,
                          }),
                        ],
                      }),
                  ],
                }),
              (0, L.jsxs)(u.default, {
                style: E.footerRow,
                children: [
                  (0, L.jsx)(U, { label: X("privacy"), onPress: () => J.push("/privacy"), colors: q }),
                  (0, L.jsx)(c.default, {
                    style: [k.typography.caption, { color: q.textMuted }],
                    children: "\xb7",
                  }),
                  (0, L.jsx)(U, { label: X("cocTitle"), onPress: () => J.push("/conduct"), colors: q }),
                  (0, L.jsx)(c.default, {
                    style: [k.typography.caption, { color: q.textMuted }],
                    children: "\xb7",
                  }),
                  (0, L.jsx)(U, { label: X("signOut"), onPress: G, colors: q, accent: !0 }),
                ],
              }),
              // Which build is this phone actually running? Without this the only answer was devtools.
              (0, L.jsx)(c.default, {
                accessibilityLabel: `build ${globalThis.__PLAYORA_CONFIG__?.buildId ?? "dev"}`,
                selectable: !0,
                style: [
                  k.typography.caption,
                  { color: q.textMuted, opacity: 0.55, textAlign: "center", marginTop: k.spacing.sm },
                ],
                children: `${X("appName")} \u00b7 ${globalThis.__PLAYORA_CONFIG__?.buildId ?? "dev"}`,
              }),
              (0, L.jsxs)(u.default, {
                style: [E.footerRow, { marginTop: k.spacing.sm }],
                children: [
                  (0, L.jsx)(U, {
                    label: X("howItWorksTitle"),
                    onPress: () => J.push("/how-it-works"),
                    colors: q,
                  }),
                  (0, L.jsx)(c.default, {
                    style: [k.typography.caption, { color: q.textMuted }],
                    children: "\xb7",
                  }),
                  (0, L.jsx)(U, {
                    label: X("a11yTitle"),
                    onPress: () => J.push("/settings/access"),
                    colors: q,
                  }),
                  (0, L.jsx)(c.default, {
                    style: [k.typography.caption, { color: q.textMuted }],
                    children: "\xb7",
                  }),
                  (0, L.jsx)(U, { label: X("walletTitle"), onPress: () => J.push("/wallet"), colors: q }),
                  (0, L.jsx)(c.default, {
                    style: [k.typography.caption, { color: q.textMuted }],
                    children: "\xb7",
                  }),
                  (0, L.jsx)(U, {
                    label: X("regionTitle"),
                    onPress: () => J.push("/settings/region"),
                    colors: q,
                  }),
                  (0, L.jsx)(c.default, {
                    style: [k.typography.caption, { color: q.textMuted }],
                    children: "\xb7",
                  }),
                  (0, L.jsx)(U, { label: X("contactSupport"), onPress: () => J.push("/contact"), colors: q }),
                ],
              }),
            ],
          }),
        });
      }));
    var t = _r(d[1]),
      l = e(_r(d[2])),
      s = e(_r(d[3])),
      o = e(_r(d[4])),
      r = e(_r(d[5])),
      n = e(_r(d[6])),
      c = e(_r(d[7])),
      u = e(_r(d[8])),
      p = e(_r(d[9])),
      h = _r(d[10]),
      f = _r(d[11]),
      y = _r(d[12]),
      x = _r(d[13]),
      b = _r(d[14]),
      j = _r(d[15]),
      w = _r(d[16]),
      S = _r(d[17]),
      C = _r(d[18]),
      T = _r(d[19]),
      v = _r(d[20]),
      P = _r(d[21]),
      k = _r(d[22]),
      I = _r(d[23]),
      R = _r(d[24]),
      z = _r(d[25]),
      _ = _r(d[26]),
      M = _r(d[27]),
      B = _r(d[28]),
      A = _r(d[29]),
      L = _r(d[30]);
    const D = ["GK", "DF", "MF", "FW"],
      F = ["football", "padel", "tennis"],
      W = ["beginner", "intermediate", "advanced"];
    const H = ({ value: e, label: t }) =>
        (0, L.jsxs)(u.default, {
          style: { flex: 1, alignItems: "center" },
          children: [
            (0, L.jsx)(c.default, { style: E.statValue, children: e }),
            (0, L.jsx)(c.default, { style: E.statLabel, children: t.toUpperCase() }),
          ],
        }),
      V = (e, t) => {
        const l = M.TIERS.find((t) => t.tier === e) ?? M.TIERS[0];
        return l.emoji + " " + t(l.labelKey);
      },
      N = ({ icon: e, title: t, sub: l, onPress: o, colors: r }) =>
        (0, L.jsxs)(s.default, {
          onPress: o,
          accessibilityRole: "button",
          accessibilityLabel: t,
          style: [E.tile, { backgroundColor: r.surface, borderColor: r.border }],
          children: [
            (0, L.jsx)(y.Ionicons, { name: e, size: 20, color: r.accentText }),
            (0, L.jsx)(c.default, {
              style: [k.typography.bodyStrong, { color: r.text, marginTop: k.spacing.sm }],
              children: t,
            }),
            (0, L.jsx)(c.default, {
              style: [k.typography.caption, { color: r.textMuted, marginTop: 2 }],
              children: l,
            }),
          ],
        }),
      O = ({ icon: e, title: t, onPress: l, colors: s }) =>
        (0, L.jsx)(b.Card, {
          onPress: l,
          padding: "md",
          style: { marginTop: k.spacing.sm },
          children: (0, L.jsxs)(u.default, {
            style: { flexDirection: "row", alignItems: "center" },
            children: [
              (0, L.jsx)(y.Ionicons, { name: e, size: 18, color: s.accentText }),
              (0, L.jsx)(c.default, {
                style: [k.typography.bodyStrong, { color: s.text, flex: 1, marginHorizontal: k.spacing.md }],
                children: t,
              }),
              (0, L.jsx)(y.Ionicons, { name: (0, B.chevronForward)(), size: 16, color: s.textMuted }),
            ],
          }),
        }),
      U = ({ label: e, onPress: t, colors: l, accent: o }) =>
        (0, L.jsx)(s.default, {
          onPress: t,
          accessibilityRole: "button",
          hitSlop: 8,
          children: (0, L.jsx)(c.default, {
            style: [k.typography.small, { color: o ? l.accentText : l.textMuted }],
            children: e,
          }),
        }),
      E = r.default.create({
        topBar: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: k.spacing.lg,
        },
        miniAvatar: {
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
        },
        miniAvatarText: { color: "#131A03", fontSize: 13, fontWeight: "800" },
        wordmark: { fontSize: 13, fontWeight: "800", letterSpacing: 4 },
        dmBtn: {
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: r.default.hairlineWidth,
        },
        dmBadge: {
          position: "absolute",
          top: -4,
          right: -4,
          minWidth: 16,
          height: 16,
          borderRadius: 8,
          paddingHorizontal: 4,
          alignItems: "center",
          justifyContent: "center",
        },
        dmBadgeText: { color: "#131A03", fontSize: 9, fontWeight: "800" },
        playerCard: { borderRadius: k.radius.xl, padding: k.spacing.lg },
        cardHead: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" },
        cardLabel: {
          color: "rgba(0,0,0,0.55)",
          fontFamily: "SpaceMonoBold",
          fontSize: 12,
          letterSpacing: 3,
          marginTop: 4,
        },
        lvlChip: {
          backgroundColor: "rgba(0,0,0,0.14)",
          paddingHorizontal: k.spacing.lg,
          paddingVertical: 8,
          borderRadius: 12,
        },
        lvlText: { color: "rgba(0,0,0,0.8)", fontFamily: "SpaceMonoBold", fontSize: 15, letterSpacing: 1 },
        walletChip: {
          backgroundColor: "rgba(0,0,0,0.14)",
          paddingHorizontal: k.spacing.lg,
          paddingVertical: 9,
          borderRadius: 12,
        },
        posChip: {
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
          backgroundColor: "rgba(0,0,0,0.14)",
          paddingHorizontal: k.spacing.lg,
          paddingVertical: 8,
          borderRadius: 12,
        },
        posText: { color: "rgba(0,0,0,0.8)", fontFamily: "SpaceMonoBold", fontSize: 15, letterSpacing: 1 },
        posPick: {
          flex: 1,
          alignItems: "center",
          paddingVertical: k.spacing.sm,
          borderRadius: k.radius.md,
          borderWidth: 1,
        },
        walletText: {
          color: "rgba(0,0,0,0.8)",
          fontFamily: "SpaceMonoBold",
          fontSize: 16,
          letterSpacing: 0.5,
        },
        playerName: {
          color: "#131A03",
          fontFamily: "Anton",
          fontSize: 44,
          lineHeight: 48,
          marginTop: k.spacing.md,
        },
        handle: { color: "rgba(0,0,0,0.6)", fontSize: 16, fontWeight: "600", marginTop: 6 },
        sportRow: { flexDirection: "row", gap: k.spacing.sm, marginTop: k.spacing.md },
        sportChip: {
          backgroundColor: "rgba(0,0,0,0.14)",
          paddingHorizontal: k.spacing.md,
          paddingVertical: 6,
          borderRadius: k.radius.pill,
        },
        sportChipText: {
          color: "rgba(0,0,0,0.85)",
          fontSize: 13,
          fontWeight: "700",
          textTransform: "capitalize",
        },
        statsBar: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#12160A",
          borderRadius: k.radius.lg,
          paddingVertical: k.spacing.md,
          marginTop: k.spacing.lg,
        },
        statDivider: {
          width: 1,
          alignSelf: "stretch",
          marginVertical: 6,
          backgroundColor: "rgba(255,255,255,0.14)",
        },
        statValue: { color: "#fff", fontSize: 20, fontWeight: "800" },
        statLabel: {
          color: "rgba(255,255,255,0.55)",
          fontFamily: "SpaceMono",
          fontSize: 9,
          letterSpacing: 2,
          marginTop: 3,
        },
        tileGrid: { flexDirection: "row", flexWrap: "wrap", gap: k.spacing.sm, marginTop: k.spacing.md },
        tile: {
          width: "48.5%",
          borderRadius: k.radius.lg,
          borderWidth: r.default.hairlineWidth,
          padding: k.spacing.md,
        },
        toolsCard: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: k.radius.lg,
          borderWidth: 1,
          padding: k.spacing.md,
          marginTop: k.spacing.md,
        },
        toolsIcon: {
          width: 36,
          height: 36,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        },
        ownerBadge: { paddingHorizontal: k.spacing.sm, paddingVertical: 2, borderRadius: 5 },
        ownerBadgeText: { fontSize: 9, fontWeight: "800", letterSpacing: 1 },
        section: Object.assign({}, k.typography.caption, {
          letterSpacing: 1.2,
          marginTop: k.spacing.xl,
          marginBottom: k.spacing.xs,
        }),
        switchRow: { flexDirection: "row", alignItems: "center" },
        footerRow: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: k.spacing.md,
          marginTop: k.spacing.xl,
        },
      });
  },
  1805,
  [
    33, 15, 445, 369, 281, 158, 477, 146, 273, 454, 1632, 381, 1086, 20, 1623, 625, 626, 1679, 1806, 630, 617,
    615, 616, 671, 1311, 1807, 675, 664, 1171, 674, 13,
  ],
);
