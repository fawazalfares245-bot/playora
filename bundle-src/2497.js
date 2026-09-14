__d(
  function (g, r, i, _a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { teamId: e } = (0, p.useLocalSearchParams)(),
          { user: z } = (0, y.useAuth)(),
          { colors: M } = (0, C.useTheme)(),
          _ = (0, p.useRouter)(),
          B = (0, T.useT)(),
          [L, P] = (0, t.useState)(null),
          [H, A] = (0, t.useState)([]),
          [D, E] = (0, t.useState)(!0),
          [V, O] = (0, t.useState)(""),
          [F, N] = (0, t.useState)(!1),
          [$, q] = (0, t.useState)(!1),
          G = (0, t.useRef)(null),
          J = (0, t.useCallback)(async () => {
            if (!e || !z) return;
            const t = await (0, k.fetchTeam)(e, z.id);
            (P(t), t?.viewer_member && A(await (0, k.fetchTeamChat)(e, z.id).catch(() => [])), E(!1));
          }, [e, z]);
        ((0, p.useFocusEffect)(
          (0, t.useCallback)(() => {
            J();
          }, [J]),
        ),
          (0, I.useLiveRefresh)(J));
        const K = (0, w.canManageTeam)(L?.viewer_role),
          Q = [...H].reverse().find((e) => e.pinned);
        return (0, R.jsxs)(b.SafeAreaView, {
          edges: ["top", "bottom"],
          style: { flex: 1, backgroundColor: M.bg },
          children: [
            (0, R.jsxs)(m.default, {
              style: v.header,
              children: [
                (0, R.jsx)(s.default, {
                  onPress: () => _.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: B("back"),
                  style: [v.iconBtn, { backgroundColor: M.surface, borderColor: M.border }],
                  children: (0, R.jsx)(f.Ionicons, { name: (0, S.chevronBack)(), size: 22, color: M.text }),
                }),
                L && (0, R.jsx)(x.ClanCrest, { name: L.name, color: L.color_primary, size: 34 }),
                (0, R.jsxs)(m.default, {
                  style: { flex: 1, marginStart: j.spacing.sm },
                  children: [
                    (0, R.jsx)(u.default, {
                      style: [j.typography.bodyStrong, { color: M.text }],
                      numberOfLines: 1,
                      children: L?.name ?? "",
                    }),
                    (0, R.jsx)(u.default, {
                      style: [j.typography.caption, { color: M.textMuted }],
                      children: B("clanChatTitle"),
                    }),
                  ],
                }),
              ],
            }),
            D
              ? (0, R.jsx)(m.default, {
                  style: { flex: 1, alignItems: "center", justifyContent: "center" },
                  children: (0, R.jsx)(a.default, { color: M.accentText }),
                })
              : L?.viewer_member
                ? (0, R.jsxs)(l.default, {
                    behavior: void 0,
                    style: { flex: 1 },
                    children: [
                      Q &&
                        (0, R.jsxs)(m.default, {
                          style: [v.pinnedBar, { backgroundColor: M.surfaceAlt, borderColor: M.border }],
                          children: [
                            (0, R.jsx)(f.Ionicons, { name: "pin", size: 13, color: M.accentText }),
                            (0, R.jsx)(u.default, {
                              style: [
                                j.typography.small,
                                { color: M.text, flex: 1, marginStart: j.spacing.xs },
                              ],
                              numberOfLines: 1,
                              children: Q.body,
                            }),
                          ],
                        }),
                      (0, R.jsx)(o.default, {
                        ref: G,
                        data: H,
                        keyExtractor: (e) => e.id,
                        contentContainerStyle: { padding: j.spacing.lg, gap: j.spacing.sm },
                        onContentSizeChange: () => G.current?.scrollToEnd({ animated: !1 }),
                        initialNumToRender: 20,
                        maxToRenderPerBatch: 20,
                        windowSize: 11,
                        removeClippedSubviews: !0,
                        ListEmptyComponent: (0, R.jsx)(u.default, {
                          style: [
                            j.typography.small,
                            { color: M.textMuted, textAlign: "center", marginTop: j.spacing.xl },
                          ],
                          children: B("clanChatEmpty"),
                        }),
                        renderItem: ({ item: e }) => {
                          if ("system" === e.kind)
                            return (0, R.jsx)(
                              m.default,
                              {
                                style: v.sysRow,
                                children: (0, R.jsx)(m.default, {
                                  style: [
                                    v.sysPill,
                                    { backgroundColor: M.surfaceAlt, borderColor: M.border },
                                  ],
                                  children: (0, R.jsx)(u.default, {
                                    style: [
                                      j.typography.caption,
                                      { color: M.textMuted, textAlign: "center" },
                                    ],
                                    children: e.body,
                                  }),
                                }),
                              },
                              e.id,
                            );
                          const t = e.author_id === z?.id,
                            a = "announcement" === e.kind;
                          return (0, R.jsx)(
                            m.default,
                            {
                              style: { alignItems: t ? "flex-end" : "flex-start" },
                              children: (0, R.jsxs)(m.default, {
                                style: [
                                  v.bubble,
                                  a
                                    ? {
                                        backgroundColor: M.accentMuted,
                                        borderColor: M.accent,
                                        borderWidth: 1,
                                        alignSelf: "stretch",
                                      }
                                    : t
                                      ? { backgroundColor: M.accent }
                                      : {
                                          backgroundColor: M.surface,
                                          borderColor: M.border,
                                          borderWidth: c.default.hairlineWidth,
                                        },
                                ],
                                children: [
                                  !t &&
                                    (0, R.jsx)(u.default, {
                                      style: [
                                        j.typography.caption,
                                        {
                                          color: a ? M.accentText : M.textMuted,
                                          fontWeight: "700",
                                          marginBottom: 2,
                                        },
                                      ],
                                      children: a ? `\ud83d\udce3 ${e.author_name}` : e.author_name,
                                    }),
                                  t &&
                                    a &&
                                    (0, R.jsxs)(u.default, {
                                      style: [
                                        j.typography.caption,
                                        { color: M.accentText, fontWeight: "700", marginBottom: 2 },
                                      ],
                                      children: ["\ud83d\udce3 ", B("announceLabel")],
                                    }),
                                  (0, R.jsx)(u.default, {
                                    style: [
                                      j.typography.body,
                                      { color: a ? M.text : t ? M.accentInk : M.text },
                                    ],
                                    children: e.body,
                                  }),
                                  (0, R.jsxs)(u.default, {
                                    style: [
                                      v.time,
                                      { color: a ? M.textMuted : t ? "rgba(0,0,0,0.5)" : M.textMuted },
                                    ],
                                    children: [
                                      ((n = e.created_at),
                                      new Date(n).toLocaleDateString(void 0, {
                                        weekday: "short",
                                        day: "numeric",
                                        month: "short",
                                      })),
                                      " \xb7 ",
                                      (0, fc9.formatClock)(e.created_at),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            e.id,
                          );
                          var n;
                        },
                      }),
                      (0, R.jsxs)(m.default, {
                        style: [v.composer, { borderTopColor: M.border, backgroundColor: M.bg }],
                        children: [
                          K &&
                            (0, R.jsx)(s.default, {
                              onPress: () => N((e) => !e),
                              accessibilityRole: "button",
                              accessibilityLabel: B("announceLabel"),
                              accessibilityState: { selected: F },
                              style: [
                                v.megaBtn,
                                {
                                  backgroundColor: F ? M.accent : M.surface,
                                  borderColor: F ? M.accent : M.border,
                                },
                              ],
                              children: (0, R.jsx)(f.Ionicons, {
                                name: "megaphone-outline",
                                size: 18,
                                color: F ? M.accentInk : M.textMuted,
                              }),
                            }),
                          (0, R.jsx)(h.default, {
                            value: V,
                            onChangeText: O,
                            placeholder: B(F ? "announcePlaceholder" : "clanChatPlaceholder"),
                            placeholderTextColor: M.textMuted,
                            style: [
                              v.input,
                              {
                                backgroundColor: M.surface,
                                borderColor: F ? M.accent : M.border,
                                color: M.text,
                              },
                            ],
                            multiline: !0,
                          }),
                          (0, R.jsx)(s.default, {
                            onPress: async () => {
                              if (z && e && V.trim() && !$) {
                                q(!0);
                                try {
                                  (await (0, k.postTeamChat)(z.id, e, F ? "announcement" : "text", V.trim()),
                                    O(""),
                                    N(!1),
                                    await J());
                                } catch (e) {
                                  n.default.alert(
                                    B("error"),
                                    (0, W.storeErrorText)(e?.message ?? "") || B("error"),
                                  );
                                } finally {
                                  q(!1);
                                }
                              }
                            },
                            disabled: !V.trim() || $,
                            accessibilityRole: "button",
                            accessibilityLabel: B("sendMessage"),
                            style: [
                              v.sendBtn,
                              { backgroundColor: M.accent, opacity: V.trim() && !$ ? 1 : 0.5 },
                            ],
                            children: (0, R.jsx)(f.Ionicons, {
                              name: "arrow-up",
                              size: 20,
                              color: M.accentInk,
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, R.jsxs)(m.default, {
                    style: { flex: 1, alignItems: "center", justifyContent: "center", padding: j.spacing.xl },
                    children: [
                      (0, R.jsx)(f.Ionicons, { name: "lock-closed-outline", size: 32, color: M.textMuted }),
                      (0, R.jsx)(u.default, {
                        style: [
                          j.typography.body,
                          { color: M.textMuted, marginTop: j.spacing.md, textAlign: "center" },
                        ],
                        children: B("membersOnlyChat"),
                      }),
                    ],
                  }),
          ],
        });
      }));
    var t = r(d[1]),
      a = e(r(d[2])),
      n = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5])),
      s = (e(r(d[6])), e(r(d[7]))),
      c = e(r(d[8])),
      u = e(r(d[9])),
      h = e(r(d[10])),
      m = e(r(d[11])),
      b = r(d[12]),
      f = r(d[13]),
      p = r(d[14]),
      x = r(d[15]),
      y = r(d[16]),
      C = r(d[17]),
      j = r(d[18]),
      k = r(d[19]),
      w = r(d[20]),
      T = r(d[21]),
      S = r(d[22]),
      I = r(d[23]),
      W = r(d[24]),
      R = r(d[25]),
      fc9 = r(d[26]);
    const v = c.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: j.spacing.lg,
        paddingVertical: j.spacing.md,
        gap: j.spacing.sm,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: c.default.hairlineWidth,
      },
      pinnedBar: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: j.spacing.lg,
        paddingHorizontal: j.spacing.md,
        paddingVertical: j.spacing.sm,
        borderRadius: j.radius.md,
        borderWidth: c.default.hairlineWidth,
      },
      sysRow: { alignItems: "center" },
      sysPill: {
        maxWidth: "86%",
        paddingHorizontal: j.spacing.md,
        paddingVertical: 6,
        borderRadius: j.radius.pill,
        borderWidth: c.default.hairlineWidth,
      },
      bubble: {
        maxWidth: "82%",
        borderRadius: 16,
        paddingHorizontal: j.spacing.md,
        paddingVertical: j.spacing.sm,
      },
      time: { fontSize: 10, marginTop: 3, alignSelf: "flex-end" },
      composer: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: j.spacing.sm,
        padding: j.spacing.md,
        borderTopWidth: c.default.hairlineWidth,
      },
      megaBtn: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: c.default.hairlineWidth,
      },
      input: {
        flex: 1,
        minHeight: 42,
        maxHeight: 120,
        borderRadius: 21,
        borderWidth: 1,
        paddingHorizontal: j.spacing.md,
        paddingVertical: 10,
        fontSize: 15,
      },
      sendBtn: { width: 42, height: 42, borderRadius: 21, alignItems: "center", justifyContent: "center" },
    });
  },
  2497,
  [33, 15, 461, 445, 271, 466, 137, 369, 158, 146, 394, 273, 381, 1086, 20, 1631, 630, 615, 616, 671, 667, 675, 1171, 1676, 674, 13, 1311],
);
