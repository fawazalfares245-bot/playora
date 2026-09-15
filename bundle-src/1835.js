__d(
  function (g, r, i, _a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { gameId: t } = (0, f.useLocalSearchParams)(),
          { user: T } = (0, C.useAuth)(),
          { colors: L } = (0, _.useTheme)(),
          M = (0, f.useRouter)(),
          H = (0, A.useT)(),
          [N, W] = (0, a.useState)(null),
          [D, O] = (0, a.useState)(null),
          [V, E] = (0, a.useState)(!1),
          [F, $] = (0, a.useState)(""),
          [q, U] = (0, a.useState)(!1),
          G = (0, a.useCallback)(async () => {
            T && t && W(await (0, R.fetchAwardBallot)(T.id, t));
          }, [T, t]);
        (0, f.useFocusEffect)(
          (0, a.useCallback)(() => {
            G();
          }, [G]),
        );
        const J = async (a) => {
            if (!T || !t || !D) return;
            const s = D.key;
            (O(null), await (0, R.castAwardVote)(T.id, t, s, a), await G());
          },
          K = (t) => t.custom_label ?? H(t.label_key);
        return (0, z.jsxs)(x.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: L.bg },
          children: [
            (0, z.jsxs)(y.default, {
              style: P.header,
              children: [
                (0, z.jsx)(l.default, {
                  onPress: () => M.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: H("back"),
                  style: [P.iconBtn, { backgroundColor: L.surface, borderColor: L.border }],
                  children: (0, z.jsx)(p.Ionicons, { name: (0, I.chevronBack)(), size: 22, color: L.text }),
                }),
                (0, z.jsxs)(y.default, {
                  style: { flex: 1, marginHorizontal: k.spacing.md },
                  children: [
                    (0, z.jsx)(u.default, {
                      style: [k.typography.h2, { color: L.text }],
                      children: H("matchAwards"),
                    }),
                    N &&
                      "not_completed" !== N.state &&
                      ("published" !== N.state && N.closes_at
                        ? // This read "Voting closes Just now" for every deadline, because
                          // formatRelative clamped the future to zero - and after the deadline it
                          // flipped to "closes 3h ago" inches from a badge reading "Voting closed".
                          // CountdownTimer already does this properly: it ticks every second, colours
                          // at ten minutes and an hour, and fires onExpire, so the ballot refetches
                          // and the screen corrects itself the moment voting closes.
                          (0, z.jsx)(Q9.CountdownTimer, { deadlineIso: N.closes_at, onExpire: G })
                        : (0, z.jsx)(u.default, {
                            style: [k.typography.small, { color: L.textMuted }],
                            children: "published" === N.state ? H("awardResults") : H("votingOpen"),
                          })),
                  ],
                }),
                N &&
                  (0, z.jsx)(j.Badge, {
                    label:
                      "published" === N.state
                        ? H("votingClosed")
                        : "voting" === N.state
                          ? H("votingOpen")
                          : "",
                    tone: "published" === N.state ? "neutral" : "success",
                  }),
              ],
            }),
            N
              ? "not_completed" === N.state
                ? (0, z.jsx)(v.EmptyState, {
                    icon: "trophy-outline",
                    title: H("matchAwards"),
                    body: H("matchCompletedSoon"),
                  })
                : (0, z.jsxs)(n.default, {
                    contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
                    children: [
                      "voting" === N.state &&
                        (0, z.jsx)(u.default, {
                          style: [k.typography.small, { color: L.textMuted, marginBottom: k.spacing.md }],
                          children: N.can_vote ? H("matchAwardsSub") : H("noNominees"),
                        }),
                      "published" === N.state &&
                        (0 === N.winners.length
                          ? (0, z.jsx)(v.EmptyState, {
                              icon: "trophy-outline",
                              title: H("awardResults"),
                              body: H("noNominees"),
                            })
                          : N.winners.map((t) =>
                              (0, z.jsx)(
                                b.Card,
                                {
                                  padding: "md",
                                  style: { marginBottom: k.spacing.sm },
                                  children: (0, z.jsxs)(y.default, {
                                    style: { flexDirection: "row", alignItems: "center" },
                                    children: [
                                      (0, z.jsx)(u.default, { style: { fontSize: 26 }, children: t.emoji }),
                                      (0, z.jsxs)(y.default, {
                                        style: { flex: 1, marginHorizontal: k.spacing.md },
                                        children: [
                                          (0, z.jsx)(u.default, {
                                            style: [k.typography.caption, { color: L.textMuted }],
                                            children: K(t),
                                          }),
                                          (0, z.jsx)(l.default, {
                                            onPress: () => M.push(`/player/${t.winner_id}`),
                                            accessibilityRole: "button",
                                            accessibilityLabel: t.winner_name,
                                            children: (0, z.jsxs)(u.default, {
                                              style: [k.typography.bodyStrong, { color: L.text }],
                                              children: ["\ud83c\udfc6 ", t.winner_name],
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, z.jsx)(j.Badge, {
                                        label: H("votesLabel", { n: (0, S.formatNumber)(t.votes) }),
                                        tone: "accent",
                                      }),
                                      N.is_admin &&
                                        (0, z.jsx)(l.default, {
                                          onPress: async () => {
                                            T && (await (0, R.revokeAward)(T.id, t.id), await G());
                                          },
                                          accessibilityRole: "button",
                                          accessibilityLabel: H("revokeBtn"),
                                          hitSlop: 8,
                                          style: { marginStart: k.spacing.sm },
                                          children: (0, z.jsx)(p.Ionicons, {
                                            name: "trash-outline",
                                            size: 18,
                                            color: L.danger,
                                          }),
                                        }),
                                    ],
                                  }),
                                },
                                t.award_key,
                              ),
                            )),
                      "voting" === N.state &&
                        N.awards.map((t) => {
                          return (0, z.jsx)(
                            b.Card,
                            {
                              padding: "md",
                              style: { marginBottom: k.spacing.sm },
                              children: (0, z.jsxs)(l.default, {
                                onPress: () => N.can_vote && O(t),
                                accessibilityRole: "button",
                                disabled: !N.can_vote,
                                style: { flexDirection: "row", alignItems: "center" },
                                children: [
                                  (0, z.jsx)(u.default, { style: { fontSize: 24 }, children: t.emoji }),
                                  (0, z.jsxs)(y.default, {
                                    style: { flex: 1, marginHorizontal: k.spacing.md },
                                    children: [
                                      (0, z.jsx)(u.default, {
                                        style: [k.typography.bodyStrong, { color: L.text }],
                                        children: K(t),
                                      }),
                                      (0, z.jsx)(u.default, {
                                        style: [
                                          k.typography.small,
                                          { color: t.my_vote ? L.accentText : L.textMuted },
                                        ],
                                        children: t.my_vote
                                          ? `\u2713 ${H("votedForLabel")}: ${((a = t.my_vote), N?.nominees.find((t) => t.id === a)?.name ?? "\u2014")}`
                                          : N.can_vote
                                            ? H("pickNominee")
                                            : H("votesLabel", { n: (0, S.formatNumber)(t.total_votes) }),
                                      }),
                                    ],
                                  }),
                                  N.can_vote &&
                                    (0, z.jsx)(p.Ionicons, {
                                      name: (0, I.chevronForward)(),
                                      size: 18,
                                      color: L.textMuted,
                                    }),
                                ],
                              }),
                            },
                            t.key,
                          );
                          var a;
                        }),
                      N.is_manager &&
                        "voting" === N.state &&
                        (0, z.jsxs)(y.default, {
                          style: { marginTop: k.spacing.lg, gap: k.spacing.sm },
                          children: [
                            V
                              ? (0, z.jsxs)(y.default, {
                                  style: { flexDirection: "row", gap: k.spacing.sm },
                                  children: [
                                    (0, z.jsx)(y.default, {
                                      style: { flex: 1 },
                                      children: (0, z.jsx)(h.default, {
                                        value: F,
                                        onChangeText: $,
                                        placeholder: H("customAwardName"),
                                        placeholderTextColor: L.textMuted,
                                        style: [
                                          k.typography.body,
                                          {
                                            color: L.text,
                                            backgroundColor: L.surface,
                                            borderColor: L.border,
                                            borderWidth: c.default.hairlineWidth,
                                            borderRadius: k.radius.md,
                                            paddingHorizontal: k.spacing.md,
                                            height: 44,
                                          },
                                        ],
                                      }),
                                    }),
                                    (0, z.jsx)(w.Button, {
                                      title: H("addCustomAward"),
                                      size: "sm",
                                      onPress: async () => {
                                        T &&
                                          t &&
                                          F.trim() &&
                                          (await (0, R.createCustomAward)(T.id, {
                                            label: F.trim(),
                                            emoji: "\ud83c\udfc5",
                                            matchId: t,
                                          }),
                                          $(""),
                                          E(!1),
                                          await G());
                                      },
                                      disabled: !F.trim(),
                                    }),
                                  ],
                                })
                              : (0, z.jsx)(w.Button, {
                                  title: H("addCustomAward"),
                                  variant: "secondary",
                                  onPress: () => E(!0),
                                  leftIcon: (0, z.jsx)(p.Ionicons, { name: "add", size: 16, color: L.text }),
                                }),
                            (0, z.jsx)(w.Button, {
                              title: H("publishResults"),
                              onPress: async () => {
                                if (T && t) {
                                  U(!0);
                                  try {
                                    (await (0, R.publishAwards)(T.id, t), await G());
                                  } finally {
                                    U(!1);
                                  }
                                }
                              },
                              loading: q,
                              leftIcon: (0, z.jsx)(p.Ionicons, {
                                name: "trophy-outline",
                                size: 16,
                                color: "#fff",
                              }),
                            }),
                          ],
                        }),
                    ],
                  })
              : (0, z.jsx)(s.default, { color: L.accentText, style: { marginTop: k.spacing.xl } }),
            (0, z.jsx)(o.default, {
              visible: !!D,
              transparent: !0,
              animationType: "fade",
              onRequestClose: () => O(null),
              children: (0, z.jsx)(l.default, {
                style: P.scrim,
                onPress: () => O(null),
                children: (0, z.jsxs)(l.default, {
                  style: [P.sheet, { backgroundColor: L.surface }],
                  onPress: () => {},
                  children: [
                    (0, z.jsx)(u.default, {
                      style: [k.typography.h3, { color: L.text, marginBottom: k.spacing.sm }],
                      children: D ? K(D) : "",
                    }),
                    (0, z.jsx)(n.default, {
                      style: { maxHeight: 360 },
                      children:
                        0 === (N?.nominees ?? []).length
                          ? (0, z.jsx)(u.default, {
                              style: [k.typography.small, { color: L.textMuted }],
                              children: H("noNominees"),
                            })
                          : N.nominees.map((t) => {
                              const a = D?.my_vote === t.id;
                              return (0, z.jsxs)(
                                l.default,
                                {
                                  onPress: () => J(t.id),
                                  accessibilityRole: "button",
                                  style: [P.nomRow, { borderBottomColor: L.border }],
                                  children: [
                                    (0, z.jsx)(y.default, {
                                      style: [P.nomAvatar, { backgroundColor: L.surfaceAlt }],
                                      children: (0, z.jsx)(u.default, {
                                        style: [k.typography.bodyStrong, { color: L.text }],
                                        children: t.name.slice(0, 1).toUpperCase(),
                                      }),
                                    }),
                                    (0, z.jsx)(u.default, {
                                      style: [
                                        k.typography.body,
                                        { color: L.text, flex: 1, marginHorizontal: k.spacing.md },
                                      ],
                                      numberOfLines: 1,
                                      children: t.name,
                                    }),
                                    a &&
                                      (0, z.jsx)(p.Ionicons, {
                                        name: "checkmark-circle",
                                        size: 20,
                                        color: L.accentText,
                                      }),
                                  ],
                                },
                                t.id,
                              );
                            }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }));
    var a = r(d[1]),
      s = t(r(d[2])),
      o = t(r(d[3])),
      l = t(r(d[4])),
      n = t(r(d[5])),
      c = t(r(d[6])),
      u = t(r(d[7])),
      h = t(r(d[8])),
      y = t(r(d[9])),
      x = r(d[10]),
      p = r(d[11]),
      f = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      w = r(d[15]),
      v = r(d[16]),
      C = r(d[17]),
      _ = r(d[18]),
      k = r(d[19]),
      R = r(d[20]),
      S = r(d[21]),
      B = r(d[22]),
      A = r(d[23]),
      I = r(d[24]),
      z = r(d[25]),
      Q9 = r(d[26]);
    const P = c.default.create({
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
      scrim: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "flex-end" },
      sheet: {
        borderTopLeftRadius: k.radius.xl,
        borderTopRightRadius: k.radius.xl,
        padding: k.spacing.lg,
        paddingBottom: k.spacing.xxxl,
      },
      nomRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: k.spacing.sm,
        borderBottomWidth: c.default.hairlineWidth,
      },
      nomAvatar: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
    });
  },
  1835,
  [
    33, 15, 461, 467, 369, 281, 158, 146, 394, 273, 381, 1086, 20, 1623, 1624, 626, 1627, 630, 615, 616, 671,
    1311, 1626, 675, 1171, 13, 2384,
  ],
);
