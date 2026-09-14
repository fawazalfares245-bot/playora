__d(
  function (g, r, i, a, _m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, h.useLocalSearchParams)(),
          { user: v } = (0, x.useAuth)(),
          { colors: z } = (0, j.useTheme)(),
          D = (0, h.useRouter)(),
          I = (0, R.useT)(),
          [q, M] = (0, t.useState)(null),
          [P, W] = (0, t.useState)([]),
          [L, A] = (0, t.useState)(""),
          [H, E] = (0, t.useState)(!0),
          [V, O] = (0, t.useState)(!1),
          [F, U] = (0, t.useState)(null),
          [G, K] = (0, t.useState)(!1),
          [Q, Y] = (0, t.useState)(!1),
          [$, J] = (0, t.useState)(null),
          N = (0, t.useRef)(null),
          X = (0, t.useCallback)(async () => {
            if (v && e) {
              try {
                const { conversation: t, messages: s } = await (0, k.fetchThread)(v.id, e);
                (M(t), W(s));
              } catch {}
              (E(!1), requestAnimationFrame(() => N.current?.scrollToEnd?.({ animated: !1 })));
            }
          }, [v, e]);
        (0, h.useFocusEffect)(
          (0, t.useCallback)(() => {
            X();
          }, [X]),
        );
        const Z = async () => {
            const t = L.trim();
            if (t && v && e && !V) {
              O(!0);
              try {
                const s = await (0, k.sendDirectMessage)(v.id, e, t);
                (W((e) => [...e, s]),
                  M((e) => (e ? Object.assign({}, e, { is_request: !1, accepted: !0 }) : e)),
                  A(""),
                  requestAnimationFrame(() => N.current?.scrollToEnd?.({ animated: !0 })));
              } catch (e) {
                U((0, w.storeErrorText)(e?.message ?? "") || I("error"));
              } finally {
                O(!1);
              }
            }
          },
          ee = async () => {
            if (v && q) {
              K(!1);
              try {
                (q.blocked_by_me
                  ? await (0, k.unblockUser)(v.id, q.other_id)
                  : await (0, k.blockUser)(v.id, q.other_id),
                  await X());
              } catch (e) {
                U((0, w.storeErrorText)(e.message));
              }
            }
          },
          te = (e) => {
            const t = new Date(e);
            t.setHours(0, 0, 0, 0);
            const s = new Date();
            s.setHours(0, 0, 0, 0);
            const o = Math.round((s.getTime() - t.getTime()) / 864e5);
            return 0 === o
              ? I("groupToday")
              : 1 === o
                ? I("groupYesterday")
                : new Date(e).toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" });
          },
          re = q?.accepted
            ? ([...P].reverse().find((e) => e.is_self && e.read && !e.deleted)?.id ?? null)
            : null,
          se = !!q && (q.declined || q.blocked_by_me || q.blocked_me);
        return (0, T.jsxs)(b.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: z.bg },
          children: [
            (0, T.jsxs)(m.default, {
              style: S.header,
              children: [
                (0, T.jsx)(n.default, {
                  onPress: () => D.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: I("back"),
                  style: [S.iconBtn, { backgroundColor: z.surface, borderColor: z.border }],
                  children: (0, T.jsx)(y.Ionicons, { name: (0, B.chevronBack)(), size: 22, color: z.text }),
                }),
                (0, T.jsxs)(n.default, {
                  onPress: () => q && D.push(`/player/${q.other_id}`),
                  style: {
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: _.spacing.md,
                  },
                  children: [
                    (0, T.jsx)(m.default, {
                      style: [S.avatar, { backgroundColor: z.surfaceAlt }],
                      children: (0, T.jsx)(c.default, {
                        style: [_.typography.bodyStrong, { color: z.text }],
                        children: (q?.other_name ?? "?").slice(0, 1).toUpperCase(),
                      }),
                    }),
                    (0, T.jsx)(c.default, {
                      style: [_.typography.h3, { color: z.text, marginHorizontal: _.spacing.md }],
                      numberOfLines: 1,
                      children: q?.other_name ?? "",
                    }),
                  ],
                }),
                q &&
                  (0, T.jsx)(n.default, {
                    onPress: () => K((e) => !e),
                    accessibilityRole: "button",
                    accessibilityLabel: I("moreOptions"),
                    style: [S.iconBtn, { backgroundColor: z.surface, borderColor: z.border }],
                    children: (0, T.jsx)(y.Ionicons, {
                      name: "ellipsis-vertical",
                      size: 18,
                      color: z.textMuted,
                    }),
                  }),
              ],
            }),
            G &&
              q &&
              !q.blocked_me &&
              (0, T.jsxs)(n.default, {
                onPress: ee,
                accessibilityRole: "button",
                style: [S.menuRow, { backgroundColor: z.surface, borderColor: z.border }],
                children: [
                  (0, T.jsx)(y.Ionicons, {
                    name: q.blocked_by_me ? "shield-outline" : "remove-circle-outline",
                    size: 16,
                    color: q.blocked_by_me ? z.text : z.danger,
                  }),
                  (0, T.jsx)(c.default, {
                    style: [_.typography.smallStrong, { color: q.blocked_by_me ? z.text : z.danger }],
                    children: q.blocked_by_me ? I("unblockBtn") : I("blockBtn"),
                  }),
                ],
              }),
            (0, T.jsxs)(l.default, {
              behavior: void 0,
              style: { flex: 1 },
              keyboardVerticalOffset: 0,
              children: [
                H
                  ? (0, T.jsx)(m.default, {
                      style: { flex: 1, alignItems: "center", justifyContent: "center" },
                      children: (0, T.jsx)(s.default, { color: z.accentText }),
                    })
                  : (0, T.jsx)(o.default, {
                      ref: N,
                      data: P,
                      keyExtractor: (e) => e.id,
                      contentContainerStyle: { padding: _.spacing.lg, flexGrow: 1 },
                      ListEmptyComponent: (0, T.jsx)(p.EmptyState, {
                        icon: "chatbubble-ellipses-outline",
                        title: I("noConversations"),
                        body: I("noConversationsSub"),
                      }),
                      renderItem: ({ item: e, index: t }) => {
                        const s = P[t - 1],
                          o = P[t + 1],
                          l =
                            !s ||
                            new Date(s.created_at).toDateString() !== new Date(e.created_at).toDateString(),
                          u =
                            !o ||
                            o.is_self !== e.is_self ||
                            new Date(o.created_at).getTime() - new Date(e.created_at).getTime() > 3e5;
                        return (0, T.jsxs)(T.Fragment, {
                          children: [
                            l &&
                              (0, T.jsxs)(m.default, {
                                style: S.dayRow,
                                children: [
                                  (0, T.jsx)(m.default, {
                                    style: [S.dayRule, { backgroundColor: z.border }],
                                  }),
                                  (0, T.jsx)(c.default, {
                                    style: [S.dayLabel, { color: z.textMuted }],
                                    children: te(e.created_at).toUpperCase(),
                                  }),
                                  (0, T.jsx)(m.default, {
                                    style: [S.dayRule, { backgroundColor: z.border }],
                                  }),
                                ],
                              }),
                            (0, T.jsx)(m.default, {
                              style: [
                                S.bubbleRow,
                                {
                                  justifyContent: e.is_self ? "flex-end" : "flex-start",
                                  marginBottom: u ? _.spacing.sm : 2,
                                },
                              ],
                              children: e.deleted
                                ? (0, T.jsx)(m.default, {
                                    style: [
                                      S.tombstone,
                                      { borderColor: z.border, backgroundColor: z.surfaceAlt },
                                    ],
                                    children: (0, T.jsx)(c.default, {
                                      style: [
                                        _.typography.caption,
                                        { color: z.textMuted, fontStyle: "italic" },
                                      ],
                                      children: I("messageDeleted"),
                                    }),
                                  })
                                : (0, T.jsxs)(n.default, {
                                    onLongPress: e.is_self ? () => J(e) : void 0,
                                    delayLongPress: 500,
                                    accessibilityRole: e.is_self ? "button" : void 0,
                                    style: [
                                      S.bubble,
                                      {
                                        backgroundColor: e.is_self ? z.accent : z.surface,
                                        borderColor: z.border,
                                        borderWidth: e.is_self ? 0 : d.default.hairlineWidth,
                                      },
                                    ],
                                    children: [
                                      (0, T.jsx)(c.default, {
                                        style: [
                                          _.typography.body,
                                          { color: e.is_self ? z.accentInk : z.text },
                                        ],
                                        children: e.body,
                                      }),
                                      u &&
                                        (0, T.jsx)(c.default, {
                                          style: [
                                            _.typography.caption,
                                            {
                                              color: e.is_self ? z.accentInk : z.textMuted,
                                              opacity: 0.7,
                                              marginTop: 2,
                                              alignSelf: "flex-end",
                                            },
                                          ],
                                          children: (0, C.formatRelative)(e.created_at),
                                        }),
                                    ],
                                  }),
                            }),
                            e.id === re &&
                              e.read_at &&
                              (0, T.jsx)(m.default, {
                                style: { alignItems: "flex-end", marginTop: -4, marginBottom: _.spacing.sm },
                                children: (0, T.jsx)(c.default, {
                                  style: [_.typography.caption, { color: z.textMuted }],
                                  children: I("readReceipt", {
                                    time:
                                      ((b = e.read_at),
                                      (0, fc9.formatClock)(b)),
                                  }),
                                }),
                              }),
                          ],
                        });
                        var b;
                      },
                      onContentSizeChange: () => N.current?.scrollToEnd?.({ animated: !1 }),
                    }),
                q?.is_request &&
                  !Q &&
                  (0, T.jsxs)(m.default, {
                    style: [S.requestBar, { backgroundColor: z.surfaceAlt, borderTopColor: z.border }],
                    children: [
                      (0, T.jsx)(c.default, {
                        style: [_.typography.small, { color: z.text, flex: 1 }],
                        children: I("messageRequestBanner", { name: q.other_name }),
                      }),
                      (0, T.jsx)(f.Button, {
                        title: I("declineRequest"),
                        size: "sm",
                        variant: "ghost",
                        onPress: () => Y(!0),
                      }),
                      (0, T.jsx)(f.Button, {
                        title: I("acceptRequest"),
                        size: "sm",
                        onPress: async () => {
                          v &&
                            e &&
                            (await (0, k.acceptMessageRequest)(v.id, e),
                            M((e) => (e ? Object.assign({}, e, { is_request: !1, accepted: !0 }) : e)));
                        },
                      }),
                    ],
                  }),
                q?.is_request &&
                  Q &&
                  (0, T.jsxs)(m.default, {
                    style: [S.requestBar, { backgroundColor: z.surfaceAlt, borderTopColor: z.border }],
                    children: [
                      (0, T.jsx)(c.default, {
                        style: [_.typography.small, { color: z.text, flex: 1 }],
                        children: I("declineConfirmBody"),
                      }),
                      (0, T.jsx)(f.Button, {
                        title: I("back"),
                        size: "sm",
                        variant: "ghost",
                        onPress: () => Y(!1),
                      }),
                      (0, T.jsx)(f.Button, {
                        title: I("declineRequest"),
                        size: "sm",
                        variant: "danger",
                        onPress: async () => {
                          if (v && e)
                            try {
                              (await (0, k.declineMessageRequest)(v.id, e), Y(!1), await X());
                            } catch (e) {
                              U((0, w.storeErrorText)(e.message));
                            }
                        },
                      }),
                    ],
                  }),
                q?.declined &&
                  (0, T.jsxs)(m.default, {
                    style: [S.requestBar, { backgroundColor: z.surfaceAlt, borderTopColor: z.border }],
                    children: [
                      (0, T.jsx)(y.Ionicons, { name: "close-circle-outline", size: 16, color: z.danger }),
                      (0, T.jsx)(c.default, {
                        style: [_.typography.small, { color: z.textMuted, flex: 1 }],
                        children: I("requestDeclinedLine"),
                      }),
                    ],
                  }),
                q?.blocked_by_me &&
                  (0, T.jsxs)(m.default, {
                    style: [S.requestBar, { backgroundColor: z.surfaceAlt, borderTopColor: z.border }],
                    children: [
                      (0, T.jsx)(y.Ionicons, { name: "shield-outline", size: 16, color: z.textMuted }),
                      (0, T.jsx)(c.default, {
                        style: [_.typography.small, { color: z.textMuted, flex: 1 }],
                        children: I("youBlockedThem"),
                      }),
                      (0, T.jsx)(f.Button, {
                        title: I("unblockBtn"),
                        size: "sm",
                        variant: "secondary",
                        onPress: ee,
                      }),
                    ],
                  }),
                q?.blocked_me &&
                  !q.blocked_by_me &&
                  (0, T.jsxs)(m.default, {
                    style: [S.requestBar, { backgroundColor: z.surfaceAlt, borderTopColor: z.border }],
                    children: [
                      (0, T.jsx)(y.Ionicons, { name: "shield", size: 16, color: z.danger }),
                      (0, T.jsx)(c.default, {
                        style: [_.typography.small, { color: z.textMuted, flex: 1 }],
                        children: I("cannotMessageHere"),
                      }),
                    ],
                  }),
                $ &&
                  (0, T.jsxs)(m.default, {
                    style: [S.requestBar, { backgroundColor: z.surfaceAlt, borderTopColor: z.border }],
                    children: [
                      (0, T.jsx)(c.default, {
                        style: [_.typography.small, { color: z.text, flex: 1 }],
                        children: I("deleteMessageQ"),
                      }),
                      (0, T.jsx)(f.Button, {
                        title: I("back"),
                        size: "sm",
                        variant: "ghost",
                        onPress: () => J(null),
                      }),
                      (0, T.jsx)(f.Button, {
                        title: I("deleteBtn"),
                        size: "sm",
                        variant: "danger",
                        onPress: async () => {
                          if (v && $)
                            try {
                              (await (0, k.deleteDirectMessage)(v.id, $.id), J(null), await X());
                            } catch (e) {
                              (J(null), U((0, w.storeErrorText)(e.message)));
                            }
                        },
                      }),
                    ],
                  }),
                F &&
                  (0, T.jsx)(c.default, {
                    accessibilityRole: "alert",
                    accessibilityLiveRegion: "polite",
                    style: [
                      _.typography.small,
                      { color: z.danger, marginHorizontal: _.spacing.lg, marginBottom: _.spacing.xs },
                    ],
                    children: F,
                  }),
                !se &&
                  (0, T.jsxs)(m.default, {
                    style: [S.composer, { borderColor: z.border, backgroundColor: z.surface }],
                    children: [
                      (0, T.jsx)(u.default, {
                        value: L,
                        onChangeText: (e) => {
                          (A(e), F && U(null));
                        },
                        placeholder: I("typeMessage"),
                        placeholderTextColor: z.textMuted,
                        style: [S.input, _.typography.body, { color: z.text }],
                        multiline: !0,
                        onSubmitEditing: Z,
                        blurOnSubmit: !1,
                        returnKeyType: "send",
                      }),
                      (0, T.jsx)(n.default, {
                        onPress: Z,
                        disabled: !L.trim() || V,
                        accessibilityRole: "button",
                        accessibilityLabel: I("send"),
                        hitSlop: 8,
                        style: ({ pressed: e }) => [
                          S.sendBtn,
                          { backgroundColor: z.accent, opacity: !L.trim() || V ? 0.5 : e ? 0.85 : 1 },
                        ],
                        children: (0, T.jsx)(y.Ionicons, {
                          name: "paper-plane",
                          size: 18,
                          color: z.accentInk,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }));
    var t = r(_d[1]),
      s = e(r(_d[2])),
      o = e(r(_d[3])),
      l = e(r(_d[4])),
      n = (e(r(_d[5])), e(r(_d[6]))),
      d = e(r(_d[7])),
      c = e(r(_d[8])),
      u = e(r(_d[9])),
      m = e(r(_d[10])),
      b = r(_d[11]),
      y = r(_d[12]),
      h = r(_d[13]),
      f = r(_d[14]),
      p = r(_d[15]),
      x = r(_d[16]),
      j = r(_d[17]),
      _ = r(_d[18]),
      k = r(_d[19]),
      C = r(_d[20]),
      w = r(_d[21]),
      R = r(_d[22]),
      B = r(_d[23]),
      T = r(_d[24]),
      fc9 = r(_d[25]);
    const S = d.default.create({
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
        borderWidth: d.default.hairlineWidth,
      },
      avatar: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
      bubbleRow: { flexDirection: "row", marginBottom: _.spacing.sm },
      bubble: {
        maxWidth: "78%",
        paddingHorizontal: _.spacing.md,
        paddingVertical: _.spacing.sm,
        borderRadius: _.radius.lg,
      },
      requestBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: _.spacing.sm,
        padding: _.spacing.md,
        borderTopWidth: d.default.hairlineWidth,
      },
      composer: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: _.spacing.sm,
        margin: _.spacing.lg,
        marginTop: _.spacing.sm,
        paddingHorizontal: _.spacing.md,
        paddingVertical: _.spacing.xs,
        borderRadius: _.radius.lg,
        borderWidth: d.default.hairlineWidth,
      },
      input: { flex: 1, minHeight: _.touch.minTarget, maxHeight: 120, paddingVertical: _.spacing.sm },
      sendBtn: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
      menuRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: _.spacing.sm,
        marginHorizontal: _.spacing.lg,
        marginBottom: _.spacing.sm,
        padding: _.spacing.md,
        borderRadius: _.radius.md,
        borderWidth: d.default.hairlineWidth,
      },
      dayRow: { flexDirection: "row", alignItems: "center", gap: _.spacing.sm, marginVertical: _.spacing.md },
      dayRule: { flex: 1, height: d.default.hairlineWidth },
      dayLabel: { fontSize: 10, fontWeight: "800", letterSpacing: 1.2, textAlign: "center" },
      tombstone: {
        maxWidth: "78%",
        paddingHorizontal: _.spacing.md,
        paddingVertical: _.spacing.sm,
        borderRadius: _.radius.lg,
        borderWidth: 1,
        borderStyle: "dashed",
      },
    });
  },
  2455,
  [33, 15, 461, 271, 466, 137, 369, 158, 146, 394, 273, 381, 1086, 20, 626, 1627, 630, 615, 616, 671, 1626, 674, 675, 1171, 13, 1311],
);
