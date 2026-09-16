__d(
  function (g, r, _i, _a, _m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, u.useLocalSearchParams)(),
          { user: A } = (0, b.useAuth)(),
          { colors: q } = (0, j.useTheme)(),
          L = (0, u.useRouter)(),
          F = (0, B.useT)(),
          O = (0, w.useReducedMotion)(),
          [H, V] = (0, t.useState)(null),
          [U, K] = (0, t.useState)([]),
          [Q, X] = (0, t.useState)(!0),
          [Z, ee] = (0, t.useState)(!1),
          [te, ie] = (0, t.useState)(null),
          [ae, se] = (0, t.useState)([]),
          [le, re] = (0, t.useState)(!1),
          [ne, oe] = (0, t.useState)(!1),
          [de, ce] = (0, t.useState)(null),
          [ue, ge] = (0, t.useState)(null),
          [me, pe] = (0, t.useState)(null),
          [fe, he] = (0, t.useState)(null),
          [xe, ye] = (0, t.useState)(null),
          [be, je] = (0, t.useState)(null),
          [we, Te] = (0, t.useState)(null),
          [ve, Se] = (0, t.useState)(!1),
          [ke, Ce] = (0, t.useState)(null),
          Pe = (0, t.useCallback)(async () => {
            if (!e || !A) return;
            let t;
            Se(!1);
            try {
              t = await (0, T.fetchGameScreen)(A.id, e);
            } catch (e) {
              return (0, T.isAudienceError)(e)
                ? (Se(!0), void X(!1))
                : (Ce((0, N.storeErrorText)(e?.message ?? "") || F("error")), void X(!1));
            }
            (V(t.game),
              K(t.players),
              // e is the match id, A.id the viewer. A non-organizer is refused now, and the catch
              // below leaves the share link unrendered, which is the point: the code is a capability.
              (0, T.fetchMatchInvite)(e, A.id)
                .then((e) => he(e?.link ?? null))
                .catch(() => he(null)),
              ie(t.fit),
              se(t.eval_targets),
              Te(t.lineup),
              pe(t.seat_payment),
              ye(t.squad_status),
              X(!1));
          }, [e, A?.id]),
          Be = async () => {
            if (A && e && de) {
              ee(!0);
              try {
                const t = await (0, T.joinAtPosition)(A.id, e, de.side, de.slotId);
                (ce(null),
                  t.seated
                    ? a.default.alert(
                        F("bookedConfirmed"),
                        `${H.venue.name} \xb7 ${(0, P.formatGameTime)(H.starts_at)}`,
                      )
                    : "pending" === t.join_status
                      ? a.default.alert(F("requestPending"), F("joinPosPendingBody"))
                      : "waitlisted" === t.join_status
                        ? a.default.alert(F("onWaitlist"), F("joinPosWaitlistBody"))
                        : a.default.alert(F("bookedConfirmed"), F("joinPosTakenBody")),
                  await Pe());
              } catch (e) {
                (ce(null),
                  a.default.alert(F("error"), (0, N.storeErrorText)(e?.message ?? "") || F("error")));
              } finally {
                ee(!1);
              }
            }
          },
          Ie = async (t, i) => {
            if (A && e)
              try {
                (await (0, T.submitSkillEvaluation)(A.id, { game_id: e, ratee_id: t, verdict: i }),
                  se((e) => e.map((e) => (e.user_id === t ? Object.assign({}, e, { my_verdict: i }) : e))));
              } catch (e) {
                a.default.alert(F("error"), (0, N.storeErrorText)(e?.message ?? "") || F("error"));
              }
          },
          ze = (0, t.useCallback)(
            async (e, t) => {
              K((i) => i.map((i) => (i.id === e ? Object.assign({}, i, { team: t }) : i)));
              const i = U.find((t) => t.id === e);
              i?.is_self
                ? await (0, T.upsertSelfPlayer)(Object.assign({}, i, { team: t }))
                : await (0, T.setPlayerTeam)(A.id, e, t);
            },
            [U, A],
          );
        if (
          ((0, t.useEffect)(() => {
            Pe();
          }, [Pe]),
          (0, W.useLiveRefresh)(Pe),
          ve)
        )
          return (0, E.jsx)(D.NotAvailable, {});
        if (!Q && ke && !H)
          return (0, E.jsxs)(m.SafeAreaView, {
            style: {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: q.bg,
              padding: _.spacing.xl,
            },
            children: [
              (0, E.jsx)(y.EmptyState, { icon: "cloud-offline-outline", title: F("error"), body: ke }),
              (0, E.jsxs)(c.default, {
                style: { flexDirection: "row", gap: _.spacing.sm, marginTop: _.spacing.md },
                children: [
                  (0, E.jsx)(x.Button, { title: F("retry"), onPress: () => Pe() }),
                  (0, E.jsx)(x.Button, { title: F("back"), variant: "secondary", onPress: () => L.back() }),
                ],
              }),
            ],
          });
        if (Q)
          return (0, E.jsx)(m.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: q.bg },
            children: (0, E.jsx)(i.default, { color: q.accentText }),
          });
        if (!H)
          return (0, E.jsx)(m.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: q.bg },
            children: (0, E.jsx)(d.default, {
              style: [_.typography.body, { color: q.text }],
              children: F("error"),
            }),
          });
        const We = Math.max(0, H.max_players - H.bookings_count),
          De = H.user_status ?? null,
          Me = !!A && H.organizer_id === A.id,
          Re = !!A && A.id.startsWith("guest:"),
          $e = "cancelled" === H.status,
          Ae = !$e && new Date(H.ends_at).getTime() < Date.now(),
          qe = new Date(H.starts_at).getTime() < Date.now(),
          Le = "manual" === H.approval_mode,
          Ne = Number(H.price_kwd) > 0,
          Ee = (H.waitlist_count ?? 0) >= H.waitlist_capacity,
          Ge = async () => {
            if (A) {
              ee(!0);
              try {
                const e = await (0, T.joinMatch)(H.id, A.id),
                  t =
                    "confirmed" === e.status
                      ? F("bookedConfirmed")
                      : "pending" === e.status
                        ? F("requestPending")
                        : F("onWaitlist");
                (a.default.alert(t, `${H.venue.name} \xb7 ${(0, P.formatGameTime)(H.starts_at)}`),
                  await Pe());
              } catch (e) {
                a.default.alert(F("error"), (0, N.storeErrorText)(e?.message ?? "") || F("error"));
              } finally {
                ee(!1);
              }
            }
          },
          Fe = (e) => {
            const t = k.PAYMENT_METHODS.find((t) => t.method === e);
            return t ? F(t.labelKey) : (e ?? "");
          },
          Oe = () => oe(!0);
        return (0, E.jsxs)(m.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: q.bg },
          children: [
            (0, E.jsxs)(n.default, {
              contentContainerStyle: { padding: _.spacing.lg, paddingBottom: 140 },
              children: [
                (0, E.jsxs)(c.default, {
                  style: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
                  children: [
                    (0, E.jsx)(l.default, {
                      onPress: () => L.back(),
                      accessibilityRole: "button",
                      accessibilityLabel: F("back"),
                      style: [Y.back, { backgroundColor: q.surface, borderColor: q.border }],
                      children: (0, E.jsx)(p.Ionicons, {
                        name: (0, I.chevronBack)(),
                        size: 22,
                        color: q.text,
                      }),
                    }),
                    (0, E.jsxs)(c.default, {
                      style: { flexDirection: "row", alignItems: "center", gap: _.spacing.sm },
                      children: [
                        (0, E.jsx)($.ShareMatchButton, { game: H, compact: !0 }),
                        (0, E.jsx)(l.default, {
                          onPress: () => L.push(`/chat/${H.id}`),
                          accessibilityRole: "button",
                          accessibilityLabel: F("chat"),
                          style: [Y.chatBtn, { backgroundColor: q.surface, borderColor: q.border }],
                          children: (0, E.jsx)(p.Ionicons, {
                            name: "chatbubbles-outline",
                            size: 20,
                            color: q.text,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, E.jsx)(J, {
                  seatFee: me,
                  game: H,
                  isOrganizer: Me,
                  showQr: Me || "confirmed" === De,
                  going: Math.max(U.length, H.bookings_count),
                  colors: q,
                  t: F,
                  onVenue: () => L.push(`/venue/${H.venue.id}`),
                  inviteLink: fe,
                }),
                U.length > 0 &&
                  (0, E.jsxs)(c.default, {
                    style: { flexDirection: "row", alignItems: "center", marginTop: _.spacing.lg },
                    children: [
                      (0, E.jsx)(d.default, {
                        style: [_.typography.h2, { color: q.text, flex: 1 }],
                        children: F("whoGoing"),
                      }),
                      (0, E.jsx)(d.default, {
                        style: [_.typography.small, { color: q.textMuted }],
                        children: F("whoGoingCount", {
                          a: (0, P.formatNumber)(U.length),
                          b: (0, P.formatNumber)(H.max_players),
                        }),
                      }),
                    ],
                  }),
                U.length > 0 &&
                  (() => {
                    const e = [...U].sort((e, t) => Number(!!t.is_self) - Number(!!e.is_self)).slice(0, 4);
                    return (0, E.jsxs)(c.default, {
                      style: Y.goingRow,
                      children: [
                        (0, E.jsx)(c.default, {
                          style: { flexDirection: "row" },
                          children: e.map((e, t) =>
                            (0, E.jsxs)(
                              c.default,
                              {
                                style: { marginStart: 0 === t ? 0 : -10 },
                                children: [
                                  (0, E.jsx)(R.PlayerAvatar, {
                                    name: e.display_name,
                                    seed: e.avatar_seed,
                                    uri: e.avatar_url,
                                    size: 40,
                                    style: { borderWidth: 2, borderColor: q.bg },
                                  }),
                                  e.is_self &&
                                    (0, E.jsx)(l.default, {
                                      onPress: Oe,
                                      accessibilityRole: "button",
                                      accessibilityLabel: F("leaveGame"),
                                      hitSlop: 8,
                                      style: [Y.leaveX, { backgroundColor: q.danger, borderColor: q.bg }],
                                      children: (0, E.jsx)(p.Ionicons, {
                                        name: "close",
                                        size: 12,
                                        color: "#fff",
                                      }),
                                    }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                        (0, E.jsx)(d.default, {
                          style: [
                            _.typography.small,
                            { color: q.textMuted, flex: 1, marginStart: _.spacing.sm },
                          ],
                          numberOfLines: 1,
                          children: e
                            .map((e) => (e.is_self ? F("you") : e.display_name.split(" ")[0]))
                            .join(", "),
                        }),
                      ],
                    });
                  })(),
                (0, E.jsxs)(c.default, {
                  style: {
                    flexDirection: "row",
                    gap: _.spacing.sm,
                    marginTop: _.spacing.sm,
                    flexWrap: "wrap",
                  },
                  children: [
                    (0, E.jsx)(h.Badge, {
                      label: "all" === H.skill_level ? F("openToAll") : F(H.skill_level),
                      tone: "accent",
                    }),
                    "confirmed" === De &&
                      (0, E.jsx)(h.Badge, { label: F("bookedConfirmed"), tone: "success" }),
                    "reserved" === De &&
                      (0, E.jsx)(h.Badge, { label: F("spotReservedTitle"), tone: "warning" }),
                    "pending" === De && (0, E.jsx)(h.Badge, { label: F("requestPending"), tone: "warning" }),
                    "waitlisted" === De && (0, E.jsx)(h.Badge, { label: F("onWaitlist"), tone: "neutral" }),
                    $e && (0, E.jsx)(h.Badge, { label: F("tabCancelled"), tone: "danger" }),
                    !De && !$e && 0 === We && (0, E.jsx)(h.Badge, { label: F("full"), tone: "danger" }),
                    "private" === H.visibility &&
                      (0, E.jsx)(h.Badge, { label: F("visibilityPrivate"), tone: "neutral" }),
                    H.series_frequency &&
                      (0, E.jsx)(h.Badge, {
                        label: `\ud83d\udd01 ${F(`freq${H.series_frequency.charAt(0).toUpperCase() + H.series_frequency.slice(1)}`)}`,
                        tone: "accent",
                      }),
                    (null != H.skill_min || null != H.skill_max) &&
                      (0, E.jsx)(h.Badge, {
                        label: F("skillRangeBadge", {
                          min: H.skill_min ?? "\xb7",
                          max: H.skill_max ?? "\xb7",
                        }),
                        tone: "neutral",
                      }),
                  ],
                }),
                H.series_id &&
                  !Me &&
                  !$e &&
                  !Re &&
                  "confirmed" !== De &&
                  (0, E.jsxs)(f.Card, {
                    style: { marginTop: _.spacing.md, borderColor: q.accent },
                    children: [
                      (0, E.jsxs)(c.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          (0, E.jsx)(p.Ionicons, { name: "repeat", size: 20, color: q.accentText }),
                          (0, E.jsx)(d.default, {
                            style: [
                              _.typography.bodyStrong,
                              { color: q.text, flex: 1, marginHorizontal: _.spacing.sm },
                            ],
                            children: F("recurringMatch"),
                          }),
                        ],
                      }),
                      (0, E.jsx)(d.default, {
                        style: [_.typography.small, { color: q.textMuted, marginVertical: _.spacing.sm }],
                        children: F("joinSeriesHint"),
                      }),
                      (0, E.jsx)(x.Button, {
                        title: F("joinSeriesAction"),
                        loading: Z,
                        onPress: async () => {
                          if (A && H.series_id) {
                            ee(!0);
                            try {
                              const e = await (0, T.joinSeries)(H.series_id, A.id),
                                // On a paid series every seat comes back reserved with a payment
                                // deadline, so joined and waitlisted are both zero and the old
                                // message said nothing had happened. A refusal that stopped every
                                // occurrence used to read the same way.
                                landed9 = (e.joined || 0) + (e.waitlisted || 0) + (e.reserved || 0);
                              (!landed9 && e.blocked
                                ? a.default.alert(
                                    F("error"),
                                    (0, N.storeErrorText)(e.blocked) || F("error"),
                                  )
                                : a.default.alert(
                                    F("joinedSeriesTitle"),
                                    F("joinedSeriesBody", {
                                      joined: e.joined,
                                      waitlisted: e.waitlisted,
                                    }) +
                                      (e.payments_due && e.payments_due.length
                                        ? `\n${F("joinedSeriesReserved", { n: String(e.payments_due.length) })}`
                                        : ""),
                                  ),
                                await Pe());
                            } catch (e) {
                              a.default.alert(
                                F("error"),
                                (0, N.storeErrorText)(e?.message ?? "") || F("error"),
                              );
                            } finally {
                              ee(!1);
                            }
                          }
                        },
                        leftIcon: (0, E.jsx)(p.Ionicons, { name: "repeat", size: 16, color: q.accentInk }),
                      }),
                    ],
                  }),
                te &&
                  "none" !== te.severity &&
                  !Me &&
                  !De &&
                  !$e &&
                  (0, E.jsxs)(c.default, {
                    style: {
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: q.surfaceAlt,
                      borderColor: "significant" === te.severity ? q.danger : q.warning,
                      borderWidth: 1,
                      borderRadius: 12,
                      padding: _.spacing.md,
                      marginTop: _.spacing.md,
                    },
                    children: [
                      (0, E.jsx)(p.Ionicons, {
                        name: "warning-outline",
                        size: 18,
                        color: "significant" === te.severity ? q.danger : q.warning,
                      }),
                      (0, E.jsxs)(d.default, {
                        style: [
                          _.typography.small,
                          { color: q.text, flex: 1, marginHorizontal: _.spacing.sm },
                        ],
                        children: [
                          "below" === te.direction ? F("skillWarnAbove") : F("skillWarnBelow"),
                          " ",
                          F("yourSkillCategory", { level: F(te.level_key) }),
                        ],
                      }),
                    ],
                  }),
                Le &&
                  !De &&
                  !Me &&
                  !$e &&
                  (0, E.jsx)(d.default, {
                    style: [_.typography.small, { color: q.textMuted, marginTop: _.spacing.sm }],
                    children: F("manualApprovalNote"),
                  }),
                H.notes &&
                  (0, E.jsxs)(f.Card, {
                    style: { marginTop: _.spacing.md },
                    children: [
                      (0, E.jsx)(d.default, {
                        style: [_.typography.smallStrong, { color: q.textMuted, marginBottom: _.spacing.xs }],
                        children: F("notes"),
                      }),
                      (0, E.jsx)(d.default, {
                        style: [_.typography.body, { color: q.text }],
                        children: H.notes,
                      }),
                    ],
                  }),
                U.length > 0 &&
                  (0, E.jsxs)(c.default, {
                    style: { marginTop: _.spacing.xl },
                    children: [
                      (0, E.jsx)(d.default, {
                        style: [_.typography.h2, { color: q.text, marginBottom: _.spacing.md }],
                        children: F("teams"),
                      }),
                      (0, E.jsx)(M.TeamAllocation, {
                        players: U,
                        onMove: ze,
                        onOpenProfile: (e) => L.push(`/player/${e}`),
                      }),
                    ],
                  }),
                we &&
                  (0, E.jsxs)(c.default, {
                    style: { marginTop: _.spacing.xl },
                    children: [
                      (0, E.jsxs)(c.default, {
                        style: { flexDirection: "row", alignItems: "center", marginBottom: _.spacing.md },
                        children: [
                          (0, E.jsx)(d.default, {
                            style: [_.typography.h2, { color: q.text, flex: 1 }],
                            children: F("lineupTitle"),
                          }),
                          we.locked &&
                            (0, E.jsx)(p.Ionicons, {
                              name: "lock-closed",
                              size: 16,
                              color: q.textMuted,
                              style: { marginEnd: _.spacing.sm },
                            }),
                          we.can_edit &&
                            (0, E.jsxs)(l.default, {
                              onPress: () => L.push(`/lineup/${H.id}`),
                              accessibilityRole: "button",
                              accessibilityLabel: F("lineupTitle"),
                              hitSlop: 8,
                              style: { flexDirection: "row", alignItems: "center" },
                              children: [
                                (0, E.jsx)(d.default, {
                                  style: [_.typography.smallStrong, { color: q.accentText }],
                                  children: F("manage"),
                                }),
                                (0, E.jsx)(p.Ionicons, {
                                  name: (0, I.chevronForward)(),
                                  size: 16,
                                  color: q.accentText,
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, E.jsx)(C.FormationBoard, {
                        a: we.a.slots,
                        b: we.b.slots,
                        selected: null,
                        onSlotPress: async (t, i) => {
                          if (!(A && e && we && H)) return;
                          const s = ("A" === t ? we.a : we.b).slots.find((e) => e.slot_id === i);
                          if (s?.player_id) return void (s.user_id && L.push(`/player/${s.user_id}`));
                          if (we.can_edit) return void L.push(`/lineup/${e}`);
                          if (A.id.startsWith("guest:"))
                            return void L.replace({
                              pathname: "/(auth)/sign-up",
                              params: { preferred: A.id.split(":")[1], next: `/game/${H.id}` },
                            });
                          const l = H.user_status ?? null;
                          if ("confirmed" !== l && "reserved" !== l)
                            "pending" !== l
                              ? "waitlisted" !== l
                                ? H.registration_closed_at ||
                                  "scheduled" !== H.status ||
                                  new Date(H.starts_at).getTime() < Date.now() ||
                                  (Math.max(0, H.max_players - H.bookings_count) <= 0
                                    ? a.default.alert(F("full"), F("joinPosWaitlistBody"))
                                    : ce({ side: t, slotId: i, role: s?.role ?? "" }))
                                : a.default.alert(F("onWaitlist"), F("joinPosWaitlistBody"))
                              : a.default.alert(F("requestPending"), F("joinPosPendingBody"));
                          else
                            try {
                              Te(await (0, T.claimLineupSlot)(A.id, e, t, i));
                            } catch (e) {
                              a.default.alert(
                                F("error"),
                                (0, N.storeErrorText)(e?.message ?? "") || F("error"),
                              );
                            }
                        },
                        selfUserId: A?.id ?? null,
                        onLeaveSelf: Me || ("confirmed" !== De && "reserved" !== De) ? void 0 : Oe,
                      }),
                      !we.locked &&
                        !we.can_edit &&
                        (0, E.jsx)(d.default, {
                          style: [_.typography.caption, { color: q.textMuted, marginTop: _.spacing.sm }],
                          children: F(
                            "confirmed" === De || "reserved" === De
                              ? "lineupClaimHint"
                              : H.registration_closed_at
                                ? "registrationClosedBadge"
                                : "lineupJoinHint",
                          ),
                        }),
                    ],
                  }),
                !Ae &&
                  !$e &&
                  "open" === H.squad_window_status &&
                  "confirmed" === De &&
                  (0, E.jsxs)(f.Card, {
                    onPress: () => L.push(`/squad/${H.id}`),
                    padding: "md",
                    style: {
                      marginTop: _.spacing.md,
                      borderColor: "confirmed" === xe ? q.success : q.accent,
                      borderWidth: 1,
                    },
                    children: [
                      (0, E.jsxs)(c.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          (0, E.jsx)(p.Ionicons, {
                            name: "confirmed" === xe ? "checkmark-circle" : "hand-right-outline",
                            size: 20,
                            color: "confirmed" === xe ? q.success : q.accentText,
                          }),
                          (0, E.jsxs)(c.default, {
                            style: { flex: 1, marginHorizontal: _.spacing.md },
                            children: [
                              (0, E.jsx)(d.default, {
                                style: [_.typography.bodyStrong, { color: q.text }],
                                children: F("confirmed" === xe ? "squadYouAreConfirmed" : "squadAreYouIn"),
                              }),
                              (0, E.jsx)(d.default, {
                                style: [_.typography.small, { color: q.textMuted }],
                                children: F("squadTitle"),
                              }),
                            ],
                          }),
                          (0, E.jsx)(p.Ionicons, {
                            name: (0, I.chevronForward)(),
                            size: 18,
                            color: q.textMuted,
                          }),
                        ],
                      }),
                      "pending" === xe &&
                        (0, E.jsx)(c.default, {
                          style: { marginTop: _.spacing.sm },
                          children: (0, E.jsx)(x.Button, {
                            title: F("squadImIn"),
                            fullWidth: !0,
                            loading: Z,
                            onPress: async () => {
                              if (A) {
                                ee(!0);
                                try {
                                  (await (0, T.confirmSquadSpot)(A.id, H.id), await Pe());
                                } catch (e) {
                                  a.default.alert(
                                    F("error"),
                                    (0, N.storeErrorText)(e?.message ?? "") || F("error"),
                                  );
                                } finally {
                                  ee(!1);
                                }
                              }
                            },
                          }),
                        }),
                    ],
                  }),
                Ae &&
                  H.score_submitted_at &&
                  (0, E.jsxs)(f.Card, {
                    padding: "md",
                    style: { marginTop: _.spacing.md },
                    children: [
                      (0, E.jsx)(d.default, {
                        style: [
                          _.typography.caption,
                          { color: q.textMuted, letterSpacing: 1.2, textTransform: "uppercase" },
                        ],
                        children: F("finalScoreTitle"),
                      }),
                      (0, E.jsxs)(d.default, {
                        style: [
                          _.typography.h1,
                          { color: q.text, textAlign: "center", marginTop: _.spacing.xs },
                        ],
                        children: [
                          (0, P.formatNumber)(H.score_home ?? 0),
                          "\u2013",
                          (0, P.formatNumber)(H.score_away ?? 0),
                        ],
                      }),
                    ],
                  }),
                Ae && (0, E.jsx)(z.MvpVotingPanel, { gameId: H.id }),
                Ae &&
                  (0, E.jsx)(f.Card, {
                    onPress: () => L.push(`/awards/${H.id}`),
                    padding: "md",
                    style: { marginTop: _.spacing.md },
                    children: (0, E.jsxs)(c.default, {
                      style: { flexDirection: "row", alignItems: "center" },
                      children: [
                        (0, E.jsx)(d.default, { style: { fontSize: 22 }, children: "\ud83c\udfc6" }),
                        (0, E.jsxs)(c.default, {
                          style: { flex: 1, marginHorizontal: _.spacing.md },
                          children: [
                            (0, E.jsx)(d.default, {
                              style: [_.typography.bodyStrong, { color: q.text }],
                              children: F("matchAwards"),
                            }),
                            (0, E.jsx)(d.default, {
                              style: [_.typography.small, { color: q.textMuted }],
                              children: F("otherAwardsSub"),
                            }),
                          ],
                        }),
                        (0, E.jsx)(p.Ionicons, {
                          name: (0, I.chevronForward)(),
                          size: 18,
                          color: q.textMuted,
                        }),
                      ],
                    }),
                  }),
                ae.length > 0 &&
                  (0, E.jsxs)(c.default, {
                    style: { marginTop: _.spacing.xl },
                    children: [
                      (0, E.jsx)(d.default, {
                        style: [_.typography.h2, { color: q.text }],
                        children: F("skillEvalTitle"),
                      }),
                      (0, E.jsx)(d.default, {
                        style: [
                          _.typography.small,
                          { color: q.textMuted, marginTop: 2, marginBottom: _.spacing.md },
                        ],
                        children: F("skillEvalHint"),
                      }),
                      (0, E.jsx)(f.Card, {
                        padding: "md",
                        children: ae.map((e, t) =>
                          (0, E.jsxs)(
                            c.default,
                            {
                              style: {
                                paddingVertical: _.spacing.sm,
                                borderTopWidth: 0 === t ? 0 : o.default.hairlineWidth,
                                borderTopColor: q.border,
                              },
                              children: [
                                (0, E.jsx)(d.default, {
                                  style: [
                                    _.typography.bodyStrong,
                                    { color: q.text, marginBottom: _.spacing.xs },
                                  ],
                                  children: e.display_name,
                                }),
                                (0, E.jsx)(c.default, {
                                  style: { flexDirection: "row", gap: _.spacing.sm },
                                  children: ["below", "expected", "above"].map((t) => {
                                    const i = e.my_verdict === t,
                                      a = "expected" === t ? q.success : "above" === t ? q.accent : q.warning;
                                    return (0, E.jsx)(
                                      l.default,
                                      {
                                        onPress: () => Ie(e.user_id, t),
                                        accessibilityRole: "button",
                                        accessibilityState: { selected: i },
                                        style: {
                                          flex: 1,
                                          height: 34,
                                          borderRadius: 8,
                                          borderWidth: 1,
                                          alignItems: "center",
                                          justifyContent: "center",
                                          backgroundColor: i ? a : "transparent",
                                          borderColor: a,
                                        },
                                        children: (0, E.jsx)(d.default, {
                                          style: [
                                            _.typography.caption,
                                            { color: i ? "#fff" : a, fontWeight: "700" },
                                          ],
                                          children: F(`verdict_${t}`),
                                        }),
                                      },
                                      t,
                                    );
                                  }),
                                }),
                              ],
                            },
                            e.user_id,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
            (0, E.jsx)(c.default, {
              style: [Y.bottom, { backgroundColor: q.bg, borderTopColor: q.border }],
              children: $e
                ? (0, E.jsx)(x.Button, { title: F("tabCancelled"), fullWidth: !0, size: "lg", disabled: !0 })
                : Re
                  ? (0, E.jsx)(x.Button, {
                      title: Ne
                        ? `${F("signUpToPlay")} \xb7 ${(0, P.formatPrice)(Number(H.price_kwd))}`
                        : F("signUpToPlay"),
                      fullWidth: !0,
                      size: "lg",
                      onPress: () =>
                        L.replace({
                          pathname: "/(auth)/sign-up",
                          params: { preferred: A?.id.split(":")[1] ?? "", next: `/game/${H.id}` },
                        }),
                    })
                  : Me
                    ? (0, E.jsx)(x.Button, {
                        title: F("manageThisMatch"),
                        fullWidth: !0,
                        size: "lg",
                        onPress: () => L.push(`/organizer/match/${H.id}`),
                        leftIcon: (0, E.jsx)(p.Ionicons, {
                          name: "settings-outline",
                          size: 18,
                          color: q.accentInk,
                        }),
                      })
                    : "confirmed" === De
                      ? "pending" === me?.status
                        ? (0, E.jsxs)(c.default, {
                            style: { gap: _.spacing.xs },
                            children: [
                              (0, E.jsxs)(c.default, {
                                style: { flexDirection: "row", gap: _.spacing.sm },
                                children: [
                                  (0, E.jsx)(x.Button, {
                                    title: F("leaveGame"),
                                    variant: "secondary",
                                    size: "lg",
                                    loading: Z,
                                    onPress: Oe,
                                    style: { flex: 1 },
                                  }),
                                  (0, E.jsx)(x.Button, {
                                    title: F("payToKeepSpot", { amount: (0, P.formatPrice)(me.amount_kwd) }),
                                    size: "lg",
                                    onPress: () => je({}),
                                    style: { flex: 2 },
                                  }),
                                ],
                              }),
                              !!me.reserved_until &&
                                (0, E.jsx)(d.default, {
                                  style: [_.typography.caption, { color: q.warning, textAlign: "center" }],
                                  children: F("heldUntil", { time: (0, P.formatClock)(me.reserved_until) }),
                                }),
                            ],
                          })
                        : (0, E.jsx)(x.Button, {
                            title: F("leaveGame"),
                            variant: "secondary",
                            fullWidth: !0,
                            size: "lg",
                            loading: Z,
                            onPress: Oe,
                          })
                      : "reserved" === De
                        ? (0, E.jsxs)(c.default, {
                            style: { gap: _.spacing.xs },
                            children: [
                              (0, E.jsxs)(c.default, {
                                style: { flexDirection: "row", gap: _.spacing.sm },
                                children: [
                              (0, E.jsx)(x.Button, {
                                title: F("leaveGame"),
                                variant: "secondary",
                                size: "lg",
                                loading: Z,
                                onPress: Oe,
                                style: { flex: 1 },
                              }),
                              (0, E.jsx)(x.Button, {
                                title:
                                  Ne && "paid" !== me?.status
                                    ? F("payToKeepSpot", { amount: (0, P.formatPrice)(Number(H.price_kwd)) })
                                    : F("confirmSpot"),
                                size: "lg",
                                loading: Z,
                                onPress: () => (Ne && "paid" !== me?.status ? je({}) : Ge()),
                                style: { flex: 2 },
                              }),
                                ],
                              }),
                              // The promotion holds this seat for fifteen minutes and said so only in
                              // the notification. Show the clock the player is racing.
                              !!H.user_reserved_until &&
                                (0, E.jsx)(d.default, {
                                  style: [_.typography.caption, { color: q.warning, textAlign: "center" }],
                                  children: F("heldUntil", {
                                    time: (0, P.formatClock)(H.user_reserved_until),
                                  }),
                                }),
                            ],
                          })
                        : "pending" === De
                          ? (0, E.jsxs)(c.default, {
                              style: { flexDirection: "row", gap: _.spacing.sm },
                              children: [
                                (0, E.jsx)(x.Button, {
                                  title: F("requestPending"),
                                  size: "lg",
                                  disabled: !0,
                                  style: { flex: 2 },
                                }),
                                (0, E.jsx)(x.Button, {
                                  title: F("withdrawRequest"),
                                  variant: "secondary",
                                  size: "lg",
                                  loading: Z,
                                  onPress: Oe,
                                  style: { flex: 1 },
                                }),
                              ],
                            })
                          : "waitlisted" === De
                            ? (0, E.jsx)(x.Button, {
                                title: F("leaveWaitlist"),
                                variant: "secondary",
                                fullWidth: !0,
                                size: "lg",
                                loading: Z,
                                onPress: Oe,
                              })
                            : qe
                              ? (0, E.jsx)(x.Button, {
                                  title: F("full"),
                                  fullWidth: !0,
                                  size: "lg",
                                  disabled: !0,
                                })
                              : H.registration_closed_at
                                ? (0, E.jsxs)(c.default, {
                                    style: {
                                      flexDirection: "row",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      gap: _.spacing.sm,
                                      paddingVertical: _.spacing.md,
                                    },
                                    children: [
                                      (0, E.jsx)(p.Ionicons, {
                                        name: "lock-closed",
                                        size: 16,
                                        color: q.textMuted,
                                      }),
                                      (0, E.jsxs)(d.default, {
                                        style: [
                                          _.typography.small,
                                          { color: q.textMuted, textAlign: "center" },
                                        ],
                                        children: [
                                          F("registrationClosedBadge"),
                                          " \xb7 ",
                                          H.organizer_name
                                            ? F("registrationClosedBy", { name: H.organizer_name })
                                            : F("registrationClosedGeneric"),
                                        ],
                                      }),
                                    ],
                                  })
                                : Le
                                  ? (0, E.jsx)(x.Button, {
                                      title: F("requestToJoin"),
                                      fullWidth: !0,
                                      size: "lg",
                                      loading: Z,
                                      onPress: Ge,
                                    })
                                  : We > 0
                                    ? (0, E.jsx)(x.Button, {
                                        title: `${F("joinGame")} \xb7 ${(0, P.formatPrice)(Number(H.price_kwd))}`,
                                        fullWidth: !0,
                                        size: "lg",
                                        loading: Z,
                                        onPress: () => {
                                          (re(!0),
                                            A &&
                                              (0, T.fetchJoinSuggestions)(A.id, H.id)
                                                .then(ge)
                                                .catch(() => ge(null)));
                                        },
                                      })
                                    : Ee
                                      ? (0, E.jsx)(x.Button, {
                                          title: F("full"),
                                          fullWidth: !0,
                                          size: "lg",
                                          disabled: !0,
                                        })
                                      : (0, E.jsx)(x.Button, {
                                          title: F("joinWaitlistAction"),
                                          fullWidth: !0,
                                          size: "lg",
                                          loading: Z,
                                          onPress: Ge,
                                        }),
            }),
            (0, E.jsx)(s.default, {
              visible: le,
              transparent: !0,
              animationType: (0, w.sheetAnimation)(O),
              onRequestClose: () => re(!1),
              children: (0, E.jsx)(l.default, {
                style: Y.scrim,
                onPress: () => re(!1),
                children: (0, E.jsxs)(l.default, {
                  style: [Y.sheet, { backgroundColor: q.surface }],
                  onPress: () => {},
                  children: [
                    (0, E.jsx)(d.default, {
                      style: [_.typography.h3, { color: q.text, marginBottom: _.spacing.md }],
                      children: F("joinSheetTitle"),
                    }),
                    ue?.has_saved_payment &&
                      (0, E.jsx)(G, {
                        icon: "flash",
                        title: F("oneTapJoin"),
                        sub: F("oneTapJoinSub"),
                        recommended: !0,
                        colors: q,
                        t: F,
                        onPress: async () => {
                          if (A) {
                            ee(!0);
                            try {
                              const e = await (0, T.oneTapJoin)(A.id, H.id);
                              (re(!1),
                                e.receipt
                                  ? a.default.alert(
                                      F("seatPaidTitle"),
                                      F("paidLine", {
                                        amount: (0, P.formatPrice)(e.receipt.amount_kwd),
                                        method: Fe(e.receipt.method),
                                      }),
                                    )
                                  : a.default.alert(
                                      "confirmed" === e.status ? F("bookedConfirmed") : F("onWaitlist"),
                                      `${H.venue.name} \xb7 ${(0, P.formatGameTime)(H.starts_at)}`,
                                    ),
                                await Pe());
                            } catch (e) {
                              a.default.alert(
                                F("error"),
                                (0, N.storeErrorText)(e?.message ?? "") || F("error"),
                              );
                            } finally {
                              ee(!1);
                            }
                          }
                        },
                      }),
                    (0, E.jsx)(G, {
                      icon: "person",
                      title: F("joinMyself"),
                      sub: F("joinMyselfSub"),
                      recommended: !ue?.has_saved_payment && "solo" === ue?.fastest_option,
                      colors: q,
                      t: F,
                      onPress: () => {
                        (re(!1), Ne && !Le ? je({}) : Ge());
                      },
                    }),
                    !1 !== H.allow_group_booking &&
                      (0, E.jsx)(G, {
                        icon: "people",
                        title: F("joinWithFriends"),
                        sub: F("joinWithFriendsSub"),
                        recommended: "friends" === ue?.fastest_option,
                        colors: q,
                        t: F,
                        onPress: () => {
                          (re(!1), L.push(`/group/${H.id}`));
                        },
                      }),
                    (0, E.jsx)(G, {
                      icon: "shield",
                      title: F("joinWithTeam"),
                      sub: F("joinWithTeamSoon"),
                      disabled: !0,
                      colors: q,
                      t: F,
                      onPress: () => {},
                    }),
                  ],
                }),
              }),
            }),
            (0, E.jsx)(s.default, {
              visible: !!de,
              transparent: !0,
              animationType: "fade",
              onRequestClose: () => ce(null),
              children: (0, E.jsx)(l.default, {
                style: Y.confirmScrim,
                onPress: () => ce(null),
                children: (0, E.jsxs)(l.default, {
                  style: [Y.confirmCard, { backgroundColor: q.surface, borderColor: q.border }],
                  onPress: () => {},
                  children: [
                    (0, E.jsx)(c.default, {
                      style: [Y.confirmIcon, { backgroundColor: q.surfaceAlt }],
                      children: (0, E.jsx)(p.Ionicons, { name: "football", size: 24, color: q.accentText }),
                    }),
                    (0, E.jsx)(d.default, {
                      style: [
                        _.typography.h3,
                        { color: q.text, textAlign: "center", marginTop: _.spacing.md },
                      ],
                      children: F("joinPosTitle", { role: de ? F(`pitchRole_${de.role}`) : "" }),
                    }),
                    (0, E.jsx)(d.default, {
                      style: [
                        _.typography.small,
                        { color: q.textMuted, textAlign: "center", marginTop: _.spacing.xs },
                      ],
                      children: F("joinPosBody"),
                    }),
                    (0, E.jsxs)(d.default, {
                      style: [
                        _.typography.smallStrong,
                        { color: q.text, textAlign: "center", marginTop: _.spacing.sm },
                      ],
                      children: [H.venue.name, " \xb7 ", (0, P.formatGameTime)(H.starts_at)],
                    }),
                    (0, E.jsxs)(c.default, {
                      style: { marginTop: _.spacing.lg, gap: _.spacing.sm },
                      children: [
                        (0, E.jsx)(x.Button, {
                          title: Le
                            ? F("requestToJoin")
                            : Ne
                              ? F("payAmountBtn", { amount: (0, P.formatPrice)(Number(H.price_kwd)) })
                              : `${F("joinGame")} \xb7 ${(0, P.formatPrice)(Number(H.price_kwd))}`,
                          fullWidth: !0,
                          loading: Z,
                          onPress: () => {
                            if (Ne && !Le && de) {
                              const e = { side: de.side, slotId: de.slotId };
                              (ce(null), je({ thenClaim: e }));
                            } else Be();
                          },
                        }),
                        (0, E.jsx)(x.Button, {
                          title: F("cancel"),
                          variant: "ghost",
                          fullWidth: !0,
                          onPress: () => ce(null),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            A &&
              (0, E.jsx)(v.CheckoutSheet, {
                visible: !!be,
                gameId: H.id,
                priceKwd: Number(H.price_kwd),
                userId: A.id,
                summary: {
                  title: H.title,
                  venue: H.venue.name,
                  when: (0, P.formatGameTime)(H.starts_at),
                  spot: F(be?.thenClaim ? "positionLabel" : "reviewSpotOpen"),
                },
                onClose: () => je(null),
                onDone: async (e) => {
                  const t = be?.thenClaim;
                  if ((je(null), "confirmed" === e.status)) {
                    if (t && A && H)
                      try {
                        await (0, T.claimLineupSlot)(A.id, H.id, t.side, t.slotId);
                      } catch {}
                    a.default.alert(
                      F("seatPaidTitle"),
                      e.receipt
                        ? F("paidLine", {
                            amount: (0, P.formatPrice)(e.receipt.amount_kwd),
                            method: Fe(e.receipt.method),
                          })
                        : `${H.venue.name} \xb7 ${(0, P.formatGameTime)(H.starts_at)}`,
                    );
                  } else
                    "waitlisted" === e.status
                      ? a.default.alert(F("onWaitlist"), F("payWhenSpotOpens"))
                      : "pending" === e.status && a.default.alert(F("requestPending"), F("payWhenApproved"));
                  await Pe();
                },
              }),
            A &&
              (0, E.jsx)(S.LeaveMatchSheet, {
                visible: ne,
                gameId: H.id,
                userId: A.id,
                startsAt: H.starts_at,
                paidKwd: "paid" === me?.status ? me.amount_kwd : 0,
                onClose: () => oe(!1),
                onLeft: Pe,
              }),
          ],
        });
      }));
    var t = r(_d[1]),
      i = e(r(_d[2])),
      a = e(r(_d[3])),
      s = e(r(_d[4])),
      l = e(r(_d[5])),
      n = e(r(_d[6])),
      o = e(r(_d[7])),
      d = e(r(_d[8])),
      c = e(r(_d[9])),
      u = r(_d[10]),
      m = r(_d[11]),
      p = r(_d[12]),
      f = r(_d[13]),
      h = r(_d[14]),
      x = r(_d[15]),
      y = r(_d[16]),
      b = r(_d[17]),
      j = r(_d[18]),
      w = r(_d[19]),
      _ = r(_d[20]),
      T = r(_d[21]),
      v = r(_d[22]),
      S = r(_d[23]),
      k = r(_d[24]),
      C = r(_d[25]),
      P = r(_d[26]),
      B = r(_d[27]),
      I = r(_d[28]),
      z = r(_d[29]),
      W = r(_d[30]),
      D = r(_d[31]),
      M = r(_d[32]),
      R = r(_d[33]),
      $ = r(_d[34]),
      A = e(r(_d[35])),
      q = r(_d[36]),
      L = r(_d[37]),
      N = r(_d[38]),
      E = r(_d[39]);
    const G = ({ icon: e, title: t, sub: i, recommended: a, disabled: s, colors: n, t: u, onPress: m }) =>
        (0, E.jsxs)(l.default, {
          onPress: s ? void 0 : m,
          accessibilityRole: "button",
          disabled: s,
          style: {
            flexDirection: "row",
            alignItems: "center",
            padding: _.spacing.md,
            borderRadius: 14,
            borderWidth: o.default.hairlineWidth,
            borderColor: a ? n.accent : n.border,
            backgroundColor: a ? n.accentMuted : n.bg,
            marginBottom: _.spacing.sm,
            opacity: s ? 0.5 : 1,
          },
          children: [
            (0, E.jsx)(c.default, {
              style: {
                width: 38,
                height: 38,
                borderRadius: 19,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: n.surface,
              },
              children: (0, E.jsx)(p.Ionicons, { name: e, size: 20, color: a ? n.accent : n.text }),
            }),
            (0, E.jsxs)(c.default, {
              style: { flex: 1, marginHorizontal: _.spacing.md },
              children: [
                (0, E.jsx)(d.default, { style: [_.typography.bodyStrong, { color: n.text }], children: t }),
                (0, E.jsx)(d.default, { style: [_.typography.caption, { color: n.textMuted }], children: i }),
              ],
            }),
            a && (0, E.jsx)(h.Badge, { label: u("aiRecommended"), tone: "accent" }),
            !s &&
              (0, E.jsx)(p.Ionicons, {
                name: (0, I.chevronForward)(),
                size: 18,
                color: n.textMuted,
                style: { marginStart: _.spacing.sm },
              }),
          ],
        }),
      F = "#F2EDE2",
      O = "#17130B",
      H = "rgba(23,19,11,0.55)",
      V = ({ bg: e }) =>
        (0, E.jsxs)(c.default, {
          style: K.perfRow,
          children: [
            (0, E.jsx)(c.default, { style: [K.notch, { backgroundColor: e, left: -_.spacing.lg - 10 }] }),
            (0, E.jsx)(c.default, { style: K.perfLine }),
            (0, E.jsx)(c.default, { style: [K.notch, { backgroundColor: e, right: -_.spacing.lg - 10 }] }),
          ],
        }),
      U = ({ label: e, value: t, sub: i, flex: a = 1 }) =>
        (0, E.jsxs)(c.default, {
          style: { flex: a },
          children: [
            (0, E.jsx)(d.default, { style: K.label, children: e.toUpperCase() }),
            (0, E.jsx)(d.default, { style: K.value, children: t }),
            !!i && (0, E.jsx)(d.default, { style: K.sub, children: i }),
          ],
        }),
      J = ({
        game: e,
        isOrganizer: t,
        going: i,
        colors: a,
        t: s,
        onVenue: n,
        showQr: o,
        seatFee: u,
        inviteLink: m,
      }) => {
        const f = (0, q.paperAccent)((0, q.useAudience)()),
          h = Math.max(0, e.max_players - i),
          x = new Date(e.starts_at),
          y = x.toLocaleDateString(void 0, { weekday: "short", day: "numeric", month: "long" }),
          b = (0, P.formatClock)(x),
          j = Math.max(
            0,
            Math.round(
              (new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime() -
                new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()) /
                864e5,
            ),
          ),
          w =
            0 === j ? s("today") : 1 === j ? s("tomorrow") : s("ticketInDays", { n: (0, P.formatNumber)(j) }),
          T = `PLY\xb7${e.id
            .replace(/[^a-z0-9]/gi, "")
            .slice(-4)
            .toUpperCase()}\xb7KWT`;
        return (0, E.jsxs)(c.default, {
          style: [K.card, { marginTop: _.spacing.lg }],
          children: [
            (0, E.jsxs)(c.default, {
              style: K.head,
              children: [
                (0, E.jsx)(d.default, {
                  style: [K.brand, { color: f }],
                  children: s("appName").toUpperCase(),
                }),
                (0, E.jsx)(c.default, {
                  style: K.sportTag,
                  children: (0, E.jsx)(d.default, {
                    style: K.sportTagText,
                    children: s(e.sport).toUpperCase(),
                  }),
                }),
              ],
            }),
            (0, E.jsx)(d.default, { style: K.title, children: e.title || s(e.sport) }),
            (0, E.jsx)(d.default, {
              style: K.organiser,
              children: s(t ? "youOrganize" : "communityOrganizer"),
            }),
            (0, E.jsx)(V, { bg: a.bg }),
            (0, E.jsxs)(c.default, {
              style: K.grid,
              children: [
                (0, E.jsx)(U, { label: s("ticketDate"), value: y, sub: w }),
                (0, E.jsx)(U, {
                  label: s("ticketKickoff"),
                  value: b,
                  sub: `${(0, P.formatNumber)(e.duration_minutes)} ${s("minutes")}`,
                }),
              ],
            }),
            (0, E.jsxs)(c.default, {
              style: { marginTop: _.spacing.md },
              children: [
                (0, E.jsx)(d.default, { style: K.label, children: s("location").toUpperCase() }),
                (0, E.jsx)(l.default, {
                  onPress: n,
                  accessibilityRole: "button",
                  accessibilityLabel: e.venue.name,
                  children: (0, E.jsxs)(c.default, {
                    style: { flexDirection: "row", alignItems: "center", gap: 4 },
                    children: [
                      (0, E.jsx)(p.Ionicons, { name: "location-outline", size: 16, color: f }),
                      (0, E.jsx)(d.default, {
                        style: [K.value, { flexShrink: 1 }],
                        numberOfLines: 1,
                        children: e.venue.name,
                      }),
                    ],
                  }),
                }),
                (0, E.jsx)(l.default, {
                  onPress: () => (0, L.openDirections)(e.venue.lat, e.venue.lng),
                  accessibilityRole: "button",
                  accessibilityLabel: s("directions"),
                  children: (0, E.jsxs)(d.default, {
                    style: K.sub,
                    children: [
                      e.venue.area,
                      " \xb7 ",
                      (0, E.jsx)(d.default, {
                        style: { color: f, fontWeight: "700" },
                        children: s("directions"),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, E.jsxs)(c.default, {
              style: [K.grid, { marginTop: _.spacing.md }],
              children: [
                (0, E.jsx)(U, {
                  label: s("price"),
                  value: (0, P.formatPrice)(Number(e.price_kwd)),
                  sub: s("ticketPerPlayer"),
                }),
                (0, E.jsx)(U, {
                  label: s("ticketSpots"),
                  value: (0, P.formatRatio)(i, e.max_players),
                  sub: `${(0, P.formatNumber)(h)} ${s("spotsLeft")}`,
                }),
              ],
            }),
            "paid" === u?.status &&
              (0, E.jsx)(c.default, {
                style: [K.grid, { marginTop: _.spacing.sm }],
                children: (0, E.jsx)(U, {
                  label: `\u2713 ${s("seatPaidTitle")}`,
                  value: (0, P.formatPrice)(u.amount_kwd),
                  sub: `${(() => {
                    const e = k.PAYMENT_METHODS.find((e) => e.method === u.method);
                    return e ? s(e.labelKey) : (u.method ?? "");
                  })()}${u.paid_at ? ` \xb7 ${(0, P.formatClock)(u.paid_at)}` : ""}`,
                }),
              }),
            (0, E.jsx)(V, { bg: a.bg }),
            (0, E.jsxs)(c.default, {
              style: K.qrRow,
              children: [
                o && m
                  ? (0, E.jsx)(c.default, {
                      style: K.qrBox,
                      children: (0, E.jsx)(A.default, { value: m, size: 88, color: O, backgroundColor: F }),
                    })
                  : (0, E.jsxs)(c.default, {
                      style: K.qrLocked,
                      children: [
                        (0, E.jsx)(d.default, { style: { fontSize: 18 }, children: "\ud83d\udd12" }),
                        (0, E.jsx)(d.default, { style: [K.qrLockedText], children: s("qrAfterJoin") }),
                      ],
                    }),
                (0, E.jsx)(d.default, { style: K.code, children: T }),
              ],
            }),
          ],
        });
      },
      K = o.default.create({
        card: { backgroundColor: F, borderRadius: 24, padding: _.spacing.lg, overflow: "hidden" },
        head: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
        brand: { fontFamily: "SpaceMonoBold", fontSize: 12, letterSpacing: 3 },
        sportTag: {
          backgroundColor: O,
          paddingHorizontal: _.spacing.md,
          paddingVertical: 4,
          borderRadius: 999,
        },
        sportTagText: { color: F, fontSize: 11, fontWeight: "800", letterSpacing: 1 },
        title: { color: O, fontSize: 26, fontWeight: "800", marginTop: _.spacing.md },
        organiser: { color: H, fontSize: 14, marginTop: 2 },
        perfRow: { height: 20, justifyContent: "center", marginVertical: _.spacing.sm },
        perfLine: { borderTopWidth: 1.5, borderStyle: "dashed", borderColor: "rgba(23,19,11,0.25)" },
        notch: { position: "absolute", top: 0, width: 20, height: 20, borderRadius: 10 },
        grid: { flexDirection: "row", gap: _.spacing.md },
        label: {
          color: "rgba(23,19,11,0.45)",
          fontFamily: "SpaceMonoBold",
          fontSize: 10,
          letterSpacing: 2,
          marginBottom: 3,
        },
        value: { color: O, fontSize: 18, fontWeight: "800" },
        sub: { color: H, fontSize: 12, marginTop: 2 },
        qrRow: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: _.spacing.xs,
        },
        qrBox: { padding: 6, backgroundColor: F },
        qrLocked: {
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          paddingVertical: 30,
          maxWidth: "60%",
        },
        qrLockedText: { color: "#6b6b5e", fontSize: 12, fontWeight: "600", flexShrink: 1 },
        code: { color: H, fontFamily: "SpaceMonoBold", fontSize: 12, letterSpacing: 2 },
      }),
      Y = o.default.create({
        goingRow: { flexDirection: "row", alignItems: "center", marginTop: _.spacing.sm },
        leaveX: {
          position: "absolute",
          top: -4,
          right: -4,
          width: 18,
          height: 18,
          borderRadius: 9,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
        },
        scrim: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "flex-end" },
        confirmScrim: {
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.55)",
          justifyContent: "center",
          padding: _.spacing.xl,
        },
        confirmCard: {
          borderRadius: 20,
          borderWidth: o.default.hairlineWidth,
          padding: _.spacing.xl,
          alignItems: "center",
        },
        confirmIcon: {
          width: 48,
          height: 48,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
        },
        sheet: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: _.spacing.lg,
          paddingBottom: _.spacing.xxxl,
        },
        chatBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: o.default.hairlineWidth,
        },
        back: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: o.default.hairlineWidth,
        },
        heroIcon: { width: 72, height: 72, borderRadius: 20, alignItems: "center", justifyContent: "center" },
        bottom: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: _.spacing.lg,
          paddingTop: _.spacing.md,
          paddingBottom: _.spacing.xl,
          borderTopWidth: o.default.hairlineWidth,
        },
      });
  },
  2379,
  [
    33, 15, 461, 445, 467, 369, 281, 158, 146, 273, 20, 381, 1086, 1623, 1624, 626, 1627, 630, 615, 1621, 616,
    671, 2380, 2381, 668, 2382, 1311, 675, 1171, 2383, 1676, 2385, 2386, 1679, 2387, 2389, 623, 1803, 674, 13,
  ],
);
