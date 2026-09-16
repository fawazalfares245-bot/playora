__d(
  function (g, _r, _i, a, _m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { gameId: e } = (0, p.useLocalSearchParams)(),
          { user: s, profile: I } = (0, C.useAuth)(),
          { colors: W } = (0, k.useTheme)(),
          z = (0, p.useRouter)(),
          B = (0, T.useT)(),
          [E, R] = (0, t.useState)("general"),
          [H, O] = (0, t.useState)([]),
          [P, A] = (0, t.useState)(""),
          [V, L] = (0, t.useState)(!0),
          [D, q] = (0, t.useState)(!1),
          // The backend now refuses match chat to anyone outside the match. Without this the throw
          // left the spinner up for ever and surfaced as an unhandled rejection.
          [cl9, sc9] = (0, t.useState)(!1),
          F = (0, t.useRef)(null),
          K = (0, t.useCallback)(async () => {
            if (!e) return;
            try {
              await (0, _.ensureChatSeed)(e, s?.id);
              const t = await (0, _.fetchChatMessages)(e, E, s?.id);
              (sc9(!1),
                O(t),
                L(!1),
                requestAnimationFrame(() => F.current?.scrollToEnd?.({ animated: !1 })));
            } catch (t) {
              (sc9(!0), O([]), L(!1));
            }
          }, [e, E, s?.id]);
        (0, t.useEffect)(() => {
          (L(!0), K());
        }, [K]);
        const Q = async (t) => {
          const n = (t ?? P).trim();
          if (n && s && e && !D) {
            (q(!0), b.selectionAsync().catch(() => {}));
            try {
              const t = await (0, _.sendChatMessage)({
                game_id: e,
                channel: E,
                user_id: s.id,
                user_name: I?.full_name || "You",
                body: n,
              });
              (O((e) => [...e, t]),
                A(""),
                requestAnimationFrame(() => F.current?.scrollToEnd?.({ animated: !0 })));
            } finally {
              q(!1);
            }
          }
        };
        return (0, M.jsxs)(f.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: W.bg },
          children: [
            (0, M.jsxs)(u.default, {
              style: v.header,
              children: [
                (0, M.jsx)(i.default, {
                  onPress: () => z.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: B("back"),
                  style: [v.back, { backgroundColor: W.surface, borderColor: W.border }],
                  children: (0, M.jsx)(h.Ionicons, { name: (0, w.chevronBack)(), size: 22, color: W.text }),
                }),
                (0, M.jsx)(l.default, {
                  style: [S.typography.h1, { color: W.text, marginHorizontal: S.spacing.md }],
                  children: B("chat"),
                }),
              ],
            }),
            (0, M.jsx)(y.ChannelTabs, { value: E, onChange: R }),
            (0, M.jsxs)(o.default, {
              behavior: void 0,
              style: { flex: 1 },
              keyboardVerticalOffset: 0,
              children: [
                V
                  ? (0, M.jsx)(u.default, {
                      style: { flex: 1, alignItems: "center", justifyContent: "center" },
                      children: (0, M.jsx)(n.default, { color: W.accentText }),
                    })
                  : (0, M.jsx)(r.default, {
                      ref: F,
                      data: H,
                      keyExtractor: (e) => e.id,
                      contentContainerStyle: { padding: S.spacing.lg, paddingBottom: S.spacing.lg },
                      ListEmptyComponent: (0, M.jsx)(j.EmptyState, {
                        icon: cl9 ? "lock-closed-outline" : "chatbubbles-outline",
                        title: B(cl9 ? "chatClosedTitle" : "noMessagesTitle"),
                        body: B(cl9 ? "chatClosedBody" : "noMessagesBody"),
                      }),
                      renderItem: ({ item: e, index: t }) => {
                        const n = t > 0 ? H[t - 1] : null,
                          r = !n || n.author_id !== e.author_id;
                        return (0, M.jsx)(m.ChatBubble, { message: e, showAuthor: r });
                      },
                      onContentSizeChange: () => F.current?.scrollToEnd?.({ animated: !1 }),
                    }),
                cl9 ? null : (0, M.jsxs)(u.default, {
                  style: [v.bottom, { backgroundColor: W.bg, borderTopColor: W.border }],
                  children: [
                    (0, M.jsx)(x.QuickReplyBar, { onSelect: (e) => Q(e) }),
                    (0, M.jsxs)(u.default, {
                      style: [v.composer, { borderColor: W.border, backgroundColor: W.surface }],
                      children: [
                        (0, M.jsx)(c.default, {
                          value: P,
                          onChangeText: A,
                          placeholder: B("typeMessage"),
                          placeholderTextColor: W.textMuted,
                          style: [v.input, S.typography.body, { color: W.text }],
                          multiline: !0,
                          onSubmitEditing: () => Q(),
                          blurOnSubmit: !1,
                          returnKeyType: "send",
                        }),
                        (0, M.jsx)(i.default, {
                          onPress: () => Q(),
                          disabled: !P.trim() || D,
                          accessibilityRole: "button",
                          accessibilityLabel: B("send"),
                          hitSlop: 8,
                          style: ({ pressed: e }) => [
                            v.sendBtn,
                            { backgroundColor: W.accent, opacity: !P.trim() || D ? 0.5 : e ? 0.85 : 1 },
                          ],
                          children: (0, M.jsx)(h.Ionicons, {
                            name: "paper-plane",
                            size: 18,
                            color: W.accentInk,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }));
    var t = _r(d[1]),
      n = e(_r(d[2])),
      r = e(_r(d[3])),
      o = e(_r(d[4])),
      i = (e(_r(d[5])), e(_r(d[6]))),
      s = e(_r(d[7])),
      l = e(_r(d[8])),
      c = e(_r(d[9])),
      u = e(_r(d[10])),
      p = _r(d[11]),
      f = _r(d[12]),
      h = _r(d[13]),
      b = (function (e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e)) return s;
          if ((o = t ? r : n)) {
            if (o.has(e)) return o.get(e);
            o.set(e, s);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set)
                ? o(s, t, i)
                : (s[t] = e[t]));
          return s;
        })(e, t);
      })(_r(d[14])),
      m = _r(d[15]),
      y = _r(d[16]),
      x = _r(d[17]),
      j = _r(d[18]),
      C = _r(d[19]),
      k = _r(d[20]),
      S = _r(d[21]),
      _ = _r(d[22]),
      T = _r(d[23]),
      w = _r(d[24]),
      M = _r(d[25]);
    const v = s.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: S.spacing.lg,
        paddingVertical: S.spacing.lg,
      },
      back: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: s.default.hairlineWidth,
      },
      bottom: {
        paddingHorizontal: 0,
        paddingTop: S.spacing.xs,
        paddingBottom: S.spacing.md,
        borderTopWidth: s.default.hairlineWidth,
      },
      composer: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginHorizontal: S.spacing.lg,
        paddingHorizontal: S.spacing.md,
        paddingVertical: S.spacing.xs,
        borderRadius: S.radius.lg,
        borderWidth: s.default.hairlineWidth,
      },
      input: { flex: 1, minHeight: S.touch.minTarget, maxHeight: 120, paddingVertical: S.spacing.sm },
      sendBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        marginStart: S.spacing.sm,
      },
    });
  },
  1843,
  [
    33, 15, 461, 271, 466, 137, 369, 158, 146, 394, 273, 20, 381, 1086, 627, 1844, 1845, 1846, 1627, 630, 615,
    616, 671, 675, 1171, 13,
  ],
);
