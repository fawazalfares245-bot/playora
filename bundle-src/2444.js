__d(
  function (_g, _r, _i, a, _m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { gameId: e } = (0, p.useLocalSearchParams)(),
          { user: M } = (0, j.useAuth)(),
          { colors: D } = (0, b.useTheme)(),
          G = (0, p.useRouter)(),
          W = (0, _.useT)(),
          [L, A] = (0, t.useState)(null),
          [F, E] = (0, t.useState)(null),
          [R, O] = (0, t.useState)(null),
          [H, N] = (0, t.useState)(new Set()),
          [V, $] = (0, t.useState)({}),
          [q, U] = (0, t.useState)(""),
          [Y, J] = (0, t.useState)([]),
          [K, Q] = (0, t.useState)([]),
          [X, Z] = (0, t.useState)(""),
          [ee, te] = (0, t.useState)(null),
          [re, ae] = (0, t.useState)(""),
          [se, ne] = (0, t.useState)(!1),
          [oe, le] = (0, t.useState)("group"),
          [ie, de] = (0, t.useState)(!1),
          [ce, ue] = (0, t.useState)(null),
          ge = (0, t.useRef)(null),
          pe = (0, t.useCallback)(async () => {
            if (M && e)
              try {
                A(await (0, w.fetchGroupConfig)(M.id, e));
                const t = await (0, w.fetchJoinSuggestions)(M.id, e).catch(() => null);
                t && (te(t), ne(t.has_saved_payment), le(t.preferred_payment_mode));
                const r = (await (0, w.listMyGroups)(M.id)).find(
                  (t) => t.game_id === e && ("reserving" === t.status || "confirmed" === t.status),
                );
                // CARCH (consumer audit): setting only the id left R null, and R was the sole thing
                // that unlocked the reservation view. Load the booking here too, or the hold, the
                // countdown and "Pay your share" can never be shown.
                if (r) {
                  E(r.id);
                  O(await (0, w.fetchGroupBooking)(M.id, r.id).catch(() => null));
                }
              } catch (e) {
                ue(e.message);
              }
          }, [M, e]);
        (0, p.useFocusEffect)(
          (0, t.useCallback)(() => {
            pe();
          }, [pe]),
        );
        const me = "reserving" === R?.group.status;
        // CARCH (consumer audit): this used to be gated on `me`, which is derived from R — the very
        // state this effect is the only producer of. R could therefore never become non-null and the
        // payment view was unreachable. Key it on the group id alone and stop from inside.
        (0, t.useEffect)(() => {
          if (!M || !F) return;
          let alive = !0;
          const tick = async () => {
            try {
              const g9 = await (0, w.fetchGroupBooking)(M.id, F);
              if (!alive) return;
              O(g9);
              if ("reserving" !== g9?.group?.status && ge.current) {
                (clearInterval(ge.current), (ge.current = null));
              }
            } catch {}
          };
          tick();
          ge.current = setInterval(tick, 3e3);
          return () => {
            ((alive = !1), ge.current && clearInterval(ge.current), (ge.current = null));
          };
        }, [M, F]);
        const fe = (e) => {
            const t = {
              group_disabled: "errGroupDisabled",
              group_too_large: "errGroupTooLarge",
              group_too_small: "errGroupTooSmall",
              not_enough_slots: "errNotEnoughSlots",
              already_booked: "errAlreadyBooked",
              not_friends: "errNotFriends",
              invalid_split: "errInvalidSplit",
              nothing_due: "errNothingDue",
              group_expired: "errGroupExpired",
            };
            return t[e] ? W(t[e]) : e;
          },
          he = (e, t) => {
            (N((t) => {
              const r = new Set(t);
              return (r.has(e) ? r.delete(e) : r.add(e), r);
            }),
              t && $((r) => Object.assign({}, r, { [e]: t })));
          },
          xe = (e) => L?.friends.find((t) => t.id === e)?.name ?? V[e] ?? "Player",
          [ye, je] = (0, t.useState)("wallet"),
          be = async () => {
            if (M && F) {
              (de(!0), ue(null));
              try {
                O(await (0, w.payGroup)(M.id, F, ye));
              } catch (e) {
                ue(fe(e.message));
              } finally {
                de(!1);
              }
            }
          },
          Se = async (e) => {
            if (M && F)
              try {
                O(await (0, w.cancelGroupMember)(M.id, F, e));
              } catch (e) {
                ue(fe(e.message));
              }
          },
          we = (e) =>
            (0, I.jsxs)(c.default, {
              style: z.header,
              children: [
                (0, I.jsx)(s.default, {
                  onPress: () => G.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: W("back"),
                  style: [z.iconBtn, { backgroundColor: D.surface, borderColor: D.border }],
                  children: (0, I.jsx)(g.Ionicons, { name: (0, v.chevronBack)(), size: 22, color: D.text }),
                }),
                (0, I.jsx)(i.default, {
                  style: [S.typography.h2, { color: D.text, flex: 1, marginHorizontal: S.spacing.md }],
                  children: e,
                }),
              ],
            });
        if (F && R) {
          const e = R.members.length;
          return (0, I.jsxs)(u.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: D.bg },
            children: [
              we(W("groupBookingTitle")),
              (0, I.jsxs)(n.default, {
                contentContainerStyle: { padding: S.spacing.lg, paddingBottom: S.spacing.xxxl },
                children: [
                  "confirmed" === R.group.status
                    ? (0, I.jsx)(m.Card, {
                        padding: "md",
                        style: { marginBottom: S.spacing.lg, borderColor: D.success },
                        children: (0, I.jsx)(i.default, {
                          style: [S.typography.bodyStrong, { color: D.success }],
                          children: W("groupAllConfirmed"),
                        }),
                      })
                    : "expired" === R.group.status
                      ? (0, I.jsx)(m.Card, {
                          padding: "md",
                          style: { marginBottom: S.spacing.lg, borderColor: D.danger },
                          children: (0, I.jsx)(i.default, {
                            style: [S.typography.bodyStrong, { color: D.danger }],
                            children: W("groupExpiredLabel"),
                          }),
                        })
                      : (0, I.jsx)(m.Card, {
                          padding: "md",
                          style: { marginBottom: S.spacing.lg, borderColor: D.warning },
                          children: (0, I.jsxs)(c.default, {
                            style: { flexDirection: "row", alignItems: "center", gap: S.spacing.sm },
                            children: [
                              (0, I.jsx)(g.Ionicons, { name: "timer-outline", size: 18, color: D.warning }),
                              (0, I.jsx)(i.default, {
                                style: [S.typography.smallStrong, { color: D.text }],
                                children: W("expiresInLabel", { t: P(R.seconds_left) }),
                              }),
                            ],
                          }),
                        }),
                  (0, I.jsx)(i.default, {
                    style: [S.typography.h3, { color: D.text, marginBottom: S.spacing.sm }],
                    children: W("members_n", { n: e }),
                  }),
                  R.members.map((e) =>
                    (0, I.jsx)(
                      m.Card,
                      {
                        padding: "md",
                        style: { marginBottom: S.spacing.sm },
                        children: (0, I.jsxs)(c.default, {
                          style: { flexDirection: "row", alignItems: "center" },
                          children: [
                            (0, I.jsx)(c.default, {
                              style: [z.avatar, { backgroundColor: D.surfaceAlt }],
                              children: (0, I.jsx)(i.default, {
                                style: [S.typography.bodyStrong, { color: D.text }],
                                children: e.name.slice(0, 1).toUpperCase(),
                              }),
                            }),
                            (0, I.jsxs)(c.default, {
                              style: { flex: 1, marginHorizontal: S.spacing.md },
                              children: [
                                (0, I.jsx)(i.default, {
                                  style: [S.typography.bodyStrong, { color: D.text }],
                                  numberOfLines: 1,
                                  children: e.name,
                                }),
                                (0, I.jsxs)(i.default, {
                                  style: [S.typography.caption, { color: D.textMuted }],
                                  children: [
                                    W(`kind${e.kind[0].toUpperCase()}${e.kind.slice(1)}`),
                                    e.amount_kwd > 0 ? ` \xb7 ${(0, C.formatPrice)(e.amount_kwd)}` : "",
                                  ],
                                }),
                              ],
                            }),
                            (0, I.jsx)(h.Badge, {
                              label: W(`memberStatus_${e.status}`),
                              tone: (0, B.memberStatusTone)(e.status),
                            }),
                            R.is_leader &&
                              "cancelled" !== e.status &&
                              "confirmed" !== e.status &&
                              "reserving" === R.group.status &&
                              (0, I.jsx)(s.default, {
                                onPress: () => Se(e.id),
                                style: { marginStart: S.spacing.sm },
                                children: (0, I.jsx)(g.Ionicons, {
                                  name: "close-circle-outline",
                                  size: 20,
                                  color: D.textMuted,
                                }),
                              }),
                          ],
                        }),
                      },
                      e.id,
                    ),
                  ),
                  (0, I.jsx)(f.FormError, { text: ce ? fe(ce) : null, style: { marginTop: S.spacing.sm } }),
                  R.my_due_kwd > 0 &&
                    "reserving" === R.group.status &&
                    (0, I.jsxs)(I.Fragment, {
                      children: [
                        (0, I.jsx)(i.default, {
                          style: [S.typography.small, { color: D.textMuted, marginTop: S.spacing.md }],
                          children: W("groupYouOwe", { amt: (0, C.formatAmount)(R.my_due_kwd) }),
                        }),
                        (0, I.jsx)(c.default, {
                          style: {
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: S.spacing.xs,
                            marginTop: S.spacing.sm,
                          },
                          children: k.PAYMENT_METHODS.filter((e) => e.online).map((e) => {
                            const t = ye === e.method;
                            return (0, I.jsx)(
                              s.default,
                              {
                                onPress: () => je(e.method),
                                accessibilityRole: "button",
                                accessibilityState: { selected: t },
                                style: {
                                  paddingVertical: 6,
                                  paddingHorizontal: S.spacing.md,
                                  borderRadius: 999,
                                  borderWidth: o.default.hairlineWidth,
                                  backgroundColor: t ? D.accent : D.surfaceAlt,
                                  borderColor: t ? D.accent : D.border,
                                },
                                children: (0, I.jsx)(i.default, {
                                  style: [S.typography.smallStrong, { color: t ? D.accentInk : D.text }],
                                  children: W(e.labelKey),
                                }),
                              },
                              e.method,
                            );
                          }),
                        }),
                        (0, I.jsx)(x.Button, {
                          title: W("payShareBtn", { amt: (0, C.formatAmount)(R.my_due_kwd) }),
                          onPress: be,
                          loading: ie,
                          style: { marginTop: S.spacing.sm },
                          leftIcon: (0, I.jsx)(g.Ionicons, {
                            name: "card-outline",
                            size: 16,
                            color: D.accentInk,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        if (!L)
          return (0, I.jsx)(u.SafeAreaView, {
            style: [z.center, { backgroundColor: D.bg }],
            children: (0, I.jsx)(r.default, { color: D.accentText }),
          });
        const Ce = 1 + H.size + K.length;
        return (0, I.jsxs)(u.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: D.bg },
          children: [
            we(W("joinWithFriends")),
            (0, I.jsx)(n.default, {
              contentContainerStyle: { padding: S.spacing.lg, paddingBottom: S.spacing.xxxl },
              keyboardShouldPersistTaps: "handled",
              children: L.allow
                ? (0, I.jsxs)(I.Fragment, {
                    children: [
                      (0, I.jsxs)(c.default, {
                        style: { flexDirection: "row", gap: S.spacing.sm, marginBottom: S.spacing.md },
                        children: [
                          (0, I.jsx)(h.Badge, {
                            label: W("maxGroupLabel", { n: L.max_size }),
                            tone: "neutral",
                          }),
                          (0, I.jsx)(h.Badge, {
                            label: W("freeSlotsLabel", { n: L.free_slots }),
                            tone: "accent",
                          }),
                          (0, I.jsx)(h.Badge, {
                            label: W("groupSizeLabel", { n: Ce }),
                            tone: Ce > L.max_size ? "danger" : "success",
                          }),
                        ],
                      }),
                      ee &&
                        ee.saved_groups.length > 0 &&
                        (0, I.jsxs)(c.default, {
                          style: { marginBottom: S.spacing.md },
                          children: [
                            (0, I.jsx)(i.default, {
                              style: [
                                S.typography.smallStrong,
                                { color: D.textMuted, marginBottom: S.spacing.sm },
                              ],
                              children: W("savedGroups"),
                            }),
                            (0, I.jsx)(c.default, {
                              style: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.sm },
                              children: ee.saved_groups.map((e) =>
                                (0, I.jsxs)(
                                  s.default,
                                  {
                                    onPress: () => {
                                      return (
                                        (t = e.members),
                                        N(new Set(t.map((e) => e.id))),
                                        void $((e) => {
                                          const r = Object.assign({}, e);
                                          return (
                                            t.forEach((e) => {
                                              r[e.id] = e.name;
                                            }),
                                            r
                                          );
                                        })
                                      );
                                      var t;
                                    },
                                    style: [z.chip, { backgroundColor: D.surface, borderColor: D.border }],
                                    children: [
                                      (0, I.jsx)(g.Ionicons, {
                                        name: "bookmark",
                                        size: 12,
                                        color: D.accentText,
                                      }),
                                      (0, I.jsxs)(i.default, {
                                        style: [S.typography.smallStrong, { color: D.text, marginStart: 4 }],
                                        numberOfLines: 1,
                                        children: [e.name, " \xb7 ", e.members.length],
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ee &&
                        ee.frequent_friends.filter((e) => !H.has(e.id)).length > 0 &&
                        (0, I.jsxs)(c.default, {
                          style: { marginBottom: S.spacing.md },
                          children: [
                            (0, I.jsx)(i.default, {
                              style: [
                                S.typography.smallStrong,
                                { color: D.textMuted, marginBottom: S.spacing.sm },
                              ],
                              children: W("frequentFriends"),
                            }),
                            (0, I.jsx)(c.default, {
                              style: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.sm },
                              children: ee.frequent_friends
                                .filter((e) => !H.has(e.id))
                                .map((e) =>
                                  (0, I.jsxs)(
                                    s.default,
                                    {
                                      onPress: () => he(e.id, e.name),
                                      style: [z.chip, { backgroundColor: D.surface, borderColor: D.border }],
                                      children: [
                                        (0, I.jsx)(g.Ionicons, {
                                          name: "add",
                                          size: 13,
                                          color: D.accentText,
                                        }),
                                        (0, I.jsx)(i.default, {
                                          style: [
                                            S.typography.smallStrong,
                                            { color: D.text, marginStart: 2 },
                                          ],
                                          numberOfLines: 1,
                                          children: e.name,
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                            }),
                          ],
                        }),
                      (0, I.jsx)(i.default, {
                        style: [S.typography.smallStrong, { color: D.textMuted, marginBottom: S.spacing.sm }],
                        children: W("selectFriends"),
                      }),
                      0 === L.friends.length
                        ? (0, I.jsx)(i.default, {
                            style: [S.typography.caption, { color: D.textMuted }],
                            children: W("noFriendsYet"),
                          })
                        : (0, I.jsx)(c.default, {
                            style: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.sm },
                            children: L.friends.map((e) => {
                              const t = H.has(e.id);
                              return (0, I.jsx)(
                                s.default,
                                {
                                  onPress: () => he(e.id),
                                  style: [
                                    z.chip,
                                    {
                                      backgroundColor: t ? D.accent : D.surface,
                                      borderColor: t ? D.accent : D.border,
                                    },
                                  ],
                                  children: (0, I.jsxs)(i.default, {
                                    style: [S.typography.smallStrong, { color: t ? "#fff" : D.text }],
                                    children: [t ? "\u2713 " : "", e.name],
                                  }),
                                },
                                e.id,
                              );
                            }),
                          }),
                      (0, I.jsxs)(c.default, {
                        style: { marginTop: S.spacing.md },
                        children: [
                          (0, I.jsx)(y.Input, {
                            placeholder: W("searchPlayers"),
                            value: q,
                            onChangeText: async (e) => {
                              if ((U(e), !M || e.trim().length < 1)) return void J([]);
                              const t = await (0, w.searchUsers)(M.id, e);
                              J(t.map((e) => ({ id: e.id, name: e.name })));
                            },
                            autoCapitalize: "none",
                          }),
                          Y.filter((e) => !L.friends.some((t) => t.id === e.id)).map((e) => {
                            const t = H.has(e.id);
                            return (0, I.jsxs)(
                              s.default,
                              {
                                onPress: () => he(e.id, e.name),
                                style: [z.searchRow, { borderColor: D.border }],
                                children: [
                                  (0, I.jsx)(i.default, {
                                    style: [S.typography.small, { color: D.text, flex: 1 }],
                                    numberOfLines: 1,
                                    children: e.name,
                                  }),
                                  (0, I.jsx)(g.Ionicons, {
                                    name: t ? "checkmark-circle" : "add-circle-outline",
                                    size: 20,
                                    color: t ? D.success : D.accent,
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        ],
                      }),
                      [...H].filter((e) => !L.friends.some((t) => t.id === e)).length > 0 &&
                        (0, I.jsx)(c.default, {
                          style: {
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: S.spacing.sm,
                            marginTop: S.spacing.sm,
                          },
                          children: [...H]
                            .filter((e) => !L.friends.some((t) => t.id === e))
                            .map((e) =>
                              (0, I.jsx)(
                                s.default,
                                {
                                  onPress: () => he(e),
                                  style: [z.chip, { backgroundColor: D.accent, borderColor: D.accent }],
                                  children: (0, I.jsxs)(i.default, {
                                    style: [S.typography.smallStrong, { color: D.accentInk }],
                                    children: ["\u2713 ", xe(e), " \u2715"],
                                  }),
                                },
                                e,
                              ),
                            ),
                        }),
                      (0, I.jsx)(i.default, {
                        style: [
                          S.typography.smallStrong,
                          { color: D.textMuted, marginTop: S.spacing.lg, marginBottom: S.spacing.sm },
                        ],
                        children: W("addGuest"),
                      }),
                      (0, I.jsxs)(c.default, {
                        style: { flexDirection: "row", gap: S.spacing.sm },
                        children: [
                          (0, I.jsx)(c.default, {
                            style: { flex: 1 },
                            children: (0, I.jsx)(y.Input, {
                              placeholder: W("guestNamePlaceholder"),
                              value: X,
                              onChangeText: Z,
                            }),
                          }),
                          (0, I.jsx)(x.Button, {
                            title: W("addGuest"),
                            size: "sm",
                            variant: "secondary",
                            onPress: () => {
                              const e = X.trim();
                              e && (Q((t) => [...t, e]), Z(""));
                            },
                          }),
                        ],
                      }),
                      K.length > 0 &&
                        (0, I.jsx)(c.default, {
                          style: {
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: S.spacing.sm,
                            marginTop: S.spacing.sm,
                          },
                          children: K.map((e, t) =>
                            (0, I.jsx)(
                              s.default,
                              {
                                onPress: () => Q((e) => e.filter((e, r) => r !== t)),
                                style: [z.chip, { backgroundColor: D.surfaceAlt, borderColor: D.border }],
                                children: (0, I.jsxs)(i.default, {
                                  style: [S.typography.caption, { color: D.text }],
                                  children: [e, " \u2715"],
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                      (0, I.jsx)(i.default, {
                        style: [
                          S.typography.smallStrong,
                          { color: D.textMuted, marginTop: S.spacing.lg, marginBottom: S.spacing.sm },
                        ],
                        children: W("paymentModeLabel"),
                      }),
                      (0, I.jsx)(c.default, {
                        style: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.sm },
                        children: T.map((e) => {
                          const t = oe === e;
                          return (0, I.jsx)(
                            s.default,
                            {
                              onPress: () => le(e),
                              style: [
                                z.chip,
                                {
                                  backgroundColor: t ? D.accent : D.surface,
                                  borderColor: t ? D.accent : D.border,
                                },
                              ],
                              children: (0, I.jsx)(i.default, {
                                style: [S.typography.caption, { color: t ? "#fff" : D.text }],
                                children: W(`payMode_${e}`),
                              }),
                            },
                            e,
                          );
                        }),
                      }),
                      H.size > 0 &&
                        (0, I.jsxs)(c.default, {
                          style: { flexDirection: "row", gap: S.spacing.sm, marginTop: S.spacing.md },
                          children: [
                            (0, I.jsx)(c.default, {
                              style: { flex: 1 },
                              children: (0, I.jsx)(y.Input, {
                                placeholder: W("groupNamePlaceholder"),
                                value: re,
                                onChangeText: ae,
                              }),
                            }),
                            (0, I.jsx)(x.Button, {
                              title: W("saveAsGroup"),
                              size: "sm",
                              variant: "secondary",
                              disabled: !re.trim(),
                              onPress: async () => {
                                M &&
                                  0 !== H.size &&
                                  re.trim() &&
                                  (await (0, w.saveFriendGroup)(M.id, re.trim(), [...H]),
                                  ae(""),
                                  e && te(await (0, w.fetchJoinSuggestions)(M.id, e).catch(() => ee)));
                              },
                            }),
                          ],
                        }),
                      (0, I.jsxs)(c.default, {
                        style: { flexDirection: "row", alignItems: "center", marginTop: S.spacing.md },
                        children: [
                          (0, I.jsx)(g.Ionicons, { name: "flash-outline", size: 16, color: D.textMuted }),
                          (0, I.jsx)(i.default, {
                            style: [
                              S.typography.small,
                              { color: D.text, flex: 1, marginHorizontal: S.spacing.sm },
                            ],
                            children: W("rememberPayment"),
                          }),
                          (0, I.jsx)(l.default, {
                            value: se,
                            onValueChange: async (e) => {
                              M && (ne(e), await (0, w.setSavedPayment)(M.id, e).catch(() => {}));
                            },
                          }),
                        ],
                      }),
                      (0, I.jsx)(f.FormError, { text: ce, style: { marginTop: S.spacing.md } }),
                      (0, I.jsx)(i.default, {
                        style: [S.typography.caption, { color: D.textMuted, marginTop: S.spacing.md }],
                        children: W("holdNotice"),
                      }),
                      (0, I.jsx)(x.Button, {
                        title: W("reserveGroup"),
                        onPress: async () => {
                          if (M && e) {
                            (de(!0), ue(null));
                            try {
                              const t = await (0, w.createGroupBooking)(M.id, e, {
                                friendIds: [...H],
                                guestNames: K,
                                paymentMode: oe,
                              });
                              // Land on the reservation itself; the poll effect keys on this id.
                              (E(t.id), O(await (0, w.fetchGroupBooking)(M.id, t.id).catch(() => null)));
                            } catch (e) {
                              ue(fe(e.message));
                            } finally {
                              de(!1);
                            }
                          }
                        },
                        loading: ie,
                        disabled: Ce < 2 || Ce > L.max_size,
                        style: { marginTop: S.spacing.sm },
                        leftIcon: (0, I.jsx)(g.Ionicons, { name: "people", size: 16, color: D.accentInk }),
                      }),
                    ],
                  })
                : (0, I.jsx)(m.Card, {
                    padding: "md",
                    children: (0, I.jsx)(i.default, {
                      style: [S.typography.body, { color: D.textMuted }],
                      children: W("errGroupDisabled"),
                    }),
                  }),
            }),
          ],
        });
      }));
    var t = _r(d[1]),
      r = e(_r(d[2])),
      s = e(_r(d[3])),
      n = e(_r(d[4])),
      o = e(_r(d[5])),
      l = e(_r(d[6])),
      i = e(_r(d[7])),
      c = e(_r(d[8])),
      u = _r(d[9]),
      g = _r(d[10]),
      p = _r(d[11]),
      m = _r(d[12]),
      f = _r(d[13]),
      h = _r(d[14]),
      x = _r(d[15]),
      y = _r(d[16]),
      j = _r(d[17]),
      b = _r(d[18]),
      S = _r(d[19]),
      w = _r(d[20]),
      C = _r(d[21]),
      _ = _r(d[22]),
      k = _r(d[23]),
      v = _r(d[24]),
      B = _r(d[25]),
      I = _r(d[26]);
    const T = ["group", "split_equal", "individual", "self"],
      P = (e) => `${Math.floor(e / 60)}:${String(e % 60).padStart(2, "0")}`;
    const z = o.default.create({
      center: { flex: 1, alignItems: "center", justifyContent: "center" },
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
        borderWidth: o.default.hairlineWidth,
      },
      avatar: { width: 38, height: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" },
      chip: {
        paddingHorizontal: S.spacing.md,
        paddingVertical: S.spacing.sm,
        borderRadius: S.radius.pill,
        borderWidth: o.default.hairlineWidth,
      },
      searchRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: S.spacing.sm,
        paddingHorizontal: S.spacing.md,
        borderBottomWidth: o.default.hairlineWidth,
        gap: S.spacing.sm,
      },
    });
  },
  2444,
  [
    33, 15, 461, 369, 281, 158, 477, 146, 273, 381, 1086, 20, 1623, 624, 1624, 626, 625, 630, 615, 616, 671,
    1311, 675, 668, 1171, 662, 13,
  ],
);
