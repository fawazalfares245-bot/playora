__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { gameId: e } = (0, x.useLocalSearchParams)(),
          { user: c } = (0, v.useAuth)(),
          { colors: W } = (0, k.useTheme)(),
          R = (0, x.useRouter)(),
          M = (0, L.useT)(),
          [D, E] = (0, t.useState)(null),
          [V, F] = (0, t.useState)("A"),
          [H, O] = (0, t.useState)(null),
          [$, J] = (0, t.useState)(!1),
          [q, G] = (0, t.useState)(null),
          [K, U] = (0, t.useState)(null),
          [N, Q] = (0, t.useState)(""),
          [X, Y] = (0, t.useState)(!1),
          Z = (0, t.useCallback)(async () => {
            if (c && e)
              try {
                E(await (0, B.fetchLineup)(e, c.id));
              } catch (e) {
                G((0, P.storeErrorText)(e?.message ?? "") || M("error"));
              }
          }, [c, e, M]);
        (0, x.useFocusEffect)(
          (0, t.useCallback)(() => {
            Z();
          }, [Z]),
        );
        const ee = async (e, t) => {
            if (c) {
              (J(!0), G(null), U(null));
              try {
                const s = await e();
                (s ? E(s) : await Z(), t && U(M(t)));
              } catch (e) {
                G((0, P.storeErrorText)(e?.message ?? "") || M("error"));
              } finally {
                (J(!1), O(null), Q(""));
              }
            }
          },
          te = !!D?.can_edit && !D.locked,
          ae =
            "slot" === H?.type && D
              ? ("A" === H.side ? D.a : D.b).slots.find((e) => e.slot_id === H.slot_id)
              : null,
          ie = "slot" === H?.type ? { side: H.side, slot_id: H.slot_id } : null,
          se = D ? ("A" === V ? D.a : D.b) : null;
        return (0, z.jsxs)(y.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: W.bg },
          children: [
            (0, z.jsxs)(p.default, {
              style: A.header,
              children: [
                (0, z.jsx)(n.default, {
                  onPress: () => R.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: M("back"),
                  style: [A.iconBtn, { backgroundColor: W.surface, borderColor: W.border }],
                  children: (0, z.jsx)(h.Ionicons, { name: (0, I.chevronBack)(), size: 22, color: W.text }),
                }),
                (0, z.jsx)(u.default, {
                  style: [S.typography.h2, { color: W.text, marginHorizontal: S.spacing.md, flex: 1 }],
                  children: M("lineupTitle"),
                }),
                D?.locked &&
                  (0, z.jsxs)(p.default, {
                    style: [A.badge, { backgroundColor: W.surfaceAlt, borderColor: W.border }],
                    children: [
                      (0, z.jsx)(h.Ionicons, { name: "lock-closed", size: 12, color: W.textMuted }),
                      (0, z.jsx)(u.default, {
                        style: [S.typography.caption, { color: W.textMuted, marginStart: 4 }],
                        children: M("lineupLockedBadge"),
                      }),
                    ],
                  }),
              ],
            }),
            (0, z.jsx)(o.default, {
              contentContainerStyle: { padding: S.spacing.lg, paddingBottom: S.spacing.xxxl },
              children:
                null === D && q
                  ? (0, z.jsxs)(p.default, {
                      style: { paddingVertical: S.spacing.xl },
                      children: [
                        (0, z.jsx)(w.EmptyState, {
                          icon: "cloud-offline-outline",
                          title: M("error"),
                          body: q,
                        }),
                        (0, z.jsx)(f.Button, {
                          title: M("retry"),
                          onPress: () => Z(),
                          style: { marginTop: S.spacing.md },
                        }),
                      ],
                    })
                  : null === D
                    ? (0, z.jsx)(s.default, { color: W.accentText })
                    : (0, z.jsxs)(z.Fragment, {
                        children: [
                          D.is_live &&
                            (0, z.jsxs)(p.default, {
                              style: [A.banner, { backgroundColor: W.surfaceAlt, borderColor: W.accent }],
                              children: [
                                (0, z.jsx)(h.Ionicons, {
                                  name: "radio-outline",
                                  size: 16,
                                  color: W.accentText,
                                }),
                                (0, z.jsx)(u.default, {
                                  style: [S.typography.small, { color: W.text, marginStart: S.spacing.xs }],
                                  children: M("liveSubsBadge"),
                                }),
                              ],
                            }),
                          q &&
                            (0, z.jsxs)(p.default, {
                              style: [A.banner, { backgroundColor: W.surfaceAlt, borderColor: W.danger }],
                              children: [
                                (0, z.jsx)(h.Ionicons, { name: "alert-circle", size: 16, color: W.danger }),
                                (0, z.jsx)(b.FormError, {
                                  text: q,
                                  style: { marginStart: S.spacing.xs, flex: 1 },
                                }),
                              ],
                            }),
                          K &&
                            (0, z.jsxs)(p.default, {
                              style: [A.banner, { backgroundColor: W.surfaceAlt, borderColor: W.success }],
                              children: [
                                (0, z.jsx)(h.Ionicons, {
                                  name: "checkmark-circle",
                                  size: 16,
                                  color: W.success,
                                }),
                                (0, z.jsx)(u.default, {
                                  style: [S.typography.small, { color: W.text, marginStart: S.spacing.xs }],
                                  children: K,
                                }),
                              ],
                            }),
                          (0, z.jsx)(_.FormationBoard, {
                            // Draws a padel or tennis court instead of a pitch when the match is one.
                            sport: D.sport,
                            a: D.a.slots,
                            b: D.b.slots,
                            selected: ie,
                            onSlotPress: (e, t) => {
                              if (D && c) {
                                if (!D.can_edit) {
                                  const s = ("A" === e ? D.a : D.b).slots.find((e) => e.slot_id === t);
                                  return void (s?.user_id && R.push(`/player/${s.user_id}`));
                                }
                                if ("bench" === H?.type) {
                                  const s = H.player_id;
                                  return void (D.is_live
                                    ? ee(() => (0, B.recordLineupSubstitution)(c.id, D.game_id, e, t, s))
                                    : ee(() => (0, B.assignLineupSlot)(c.id, D.game_id, e, t, s)));
                                }
                                if ("slot" === H?.type) {
                                  if (H.side === e && H.slot_id === t) return void O(null);
                                  if (H.side === e)
                                    return void ee(() =>
                                      (0, B.swapLineupSlots)(c.id, D.game_id, e, H.slot_id, t),
                                    );
                                  const s = ("A" === H.side ? D.a : D.b).slots.find(
                                    (e) => e.slot_id === H.slot_id,
                                  );
                                  return s?.player_id
                                    ? void ee(() =>
                                        (0, B.assignLineupSlot)(c.id, D.game_id, e, t, s.player_id),
                                      )
                                    : void O({ type: "slot", side: e, slot_id: t });
                                }
                                O({ type: "slot", side: e, slot_id: t });
                              }
                            },
                            selfUserId: c?.id ?? null,
                            onLeaveSelf: () => Y(!0),
                          }),
                          te &&
                            ae?.player_id &&
                            "slot" === H?.type &&
                            (0, z.jsxs)(j.Card, {
                              padding: "md",
                              style: { marginTop: S.spacing.md },
                              children: [
                                (0, z.jsx)(u.default, {
                                  style: [
                                    S.typography.bodyStrong,
                                    { color: W.text, marginBottom: S.spacing.sm },
                                  ],
                                  children: ae.player_name,
                                }),
                                (0, z.jsxs)(p.default, {
                                  style: A.rowWrap,
                                  children: [
                                    (0, z.jsx)(f.Button, {
                                      title: M("makeCaptain"),
                                      size: "sm",
                                      variant: "secondary",
                                      onPress: () =>
                                        ee(() => (0, B.setLineupCaptain)(c.id, D.game_id, H.side, H.slot_id)),
                                    }),
                                    (0, z.jsx)(f.Button, {
                                      title: M("removeFromSlot"),
                                      size: "sm",
                                      variant: "ghost",
                                      onPress: () =>
                                        ee(() =>
                                          (0, B.assignLineupSlot)(c.id, D.game_id, H.side, H.slot_id, null),
                                        ),
                                    }),
                                  ],
                                }),
                                (0, z.jsxs)(p.default, {
                                  style: {
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    gap: S.spacing.sm,
                                    marginTop: S.spacing.sm,
                                  },
                                  children: [
                                    (0, z.jsx)(p.default, {
                                      style: { flex: 1 },
                                      children: (0, z.jsx)(C.Input, {
                                        label: M("setJersey"),
                                        value: N,
                                        onChangeText: Q,
                                        keyboardType: "number-pad",
                                        maxLength: 2,
                                        placeholder: "7",
                                      }),
                                    }),
                                    (0, z.jsx)(f.Button, {
                                      title: "OK",
                                      size: "sm",
                                      onPress: () =>
                                        ee(() =>
                                          (0, B.setLineupJersey)(
                                            c.id,
                                            D.game_id,
                                            H.side,
                                            H.slot_id,
                                            N ? parseInt(N, 10) : null,
                                          ),
                                        ),
                                      style: { marginBottom: S.spacing.md },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          (0, z.jsx)(u.default, {
                            style: [
                              S.typography.h3,
                              { color: W.text, marginTop: S.spacing.lg, marginBottom: S.spacing.sm },
                            ],
                            children: M("benchLabel"),
                          }),
                          0 === D.bench.length
                            ? (0, z.jsx)(u.default, {
                                style: [S.typography.small, { color: W.textMuted }],
                                children: "\u2014",
                              })
                            : (0, z.jsx)(p.default, {
                                style: A.rowWrap,
                                children: D.bench.map((e) =>
                                  (0, z.jsx)(
                                    n.default,
                                    {
                                      accessibilityRole: "button",
                                      onPress: () => {
                                        D.can_edit
                                          ? O(
                                              "bench" === H?.type && H.player_id === e.player_id
                                                ? null
                                                : { type: "bench", player_id: e.player_id },
                                            )
                                          : e.user_id && R.push(`/player/${e.user_id}`);
                                      },
                                      style: [
                                        A.benchChip,
                                        {
                                          borderColor:
                                            "bench" === H?.type && H.player_id === e.player_id
                                              ? W.accent
                                              : W.border,
                                          backgroundColor:
                                            "bench" === H?.type && H.player_id === e.player_id
                                              ? W.surfaceAlt
                                              : W.surface,
                                        },
                                      ],
                                      children: (0, z.jsx)(u.default, {
                                        style: [S.typography.small, { color: W.text }],
                                        numberOfLines: 1,
                                        children: e.name,
                                      }),
                                    },
                                    e.player_id,
                                  ),
                                ),
                              }),
                          D.can_edit
                            ? (0, z.jsx)(u.default, {
                                style: [
                                  S.typography.caption,
                                  { color: W.textMuted, marginTop: S.spacing.xs },
                                ],
                                children: M("tapToPlace"),
                              })
                            : (0, z.jsx)(u.default, {
                                style: [
                                  S.typography.caption,
                                  { color: W.textMuted, marginTop: S.spacing.xs },
                                ],
                                children: M("viewOnlyHint"),
                              }),
                          D.can_edit &&
                            (0, z.jsxs)(z.Fragment, {
                              children: [
                                (0, z.jsx)(p.default, {
                                  style: [A.segment, { borderColor: W.border, marginTop: S.spacing.lg }],
                                  children: ["A", "B"].map((e) =>
                                    (0, z.jsx)(
                                      n.default,
                                      {
                                        accessibilityRole: "button",
                                        onPress: () => F(e),
                                        style: [A.segmentBtn, V === e && { backgroundColor: W.accent }],
                                        children: (0, z.jsx)(u.default, {
                                          style: [
                                            S.typography.smallStrong,
                                            { color: V === e ? W.accentInk : W.textMuted },
                                          ],
                                          children: M("A" === e ? "teamA" : "teamB"),
                                        }),
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                                (0, z.jsx)(u.default, {
                                  style: [
                                    S.typography.smallStrong,
                                    {
                                      color: W.textMuted,
                                      marginTop: S.spacing.md,
                                      marginBottom: S.spacing.xs,
                                    },
                                  ],
                                  children: M("formationLabel"),
                                }),
                                (0, z.jsx)(p.default, {
                                  style: A.rowWrap,
                                  children: D.formations.map((e) => {
                                    const t = se?.formation_key === e.key;
                                    return (0, z.jsx)(
                                      n.default,
                                      {
                                        accessibilityRole: "button",
                                        onPress: () =>
                                          ee(() => (0, B.setLineupFormation)(c.id, D.game_id, V, e.key)),
                                        style: [
                                          A.benchChip,
                                          {
                                            borderColor: t ? W.accent : W.border,
                                            backgroundColor: t ? W.surfaceAlt : W.surface,
                                          },
                                        ],
                                        children: (0, z.jsxs)(u.default, {
                                          style: [S.typography.small, { color: t ? W.accentText : W.text }],
                                          children: [
                                            e.labelKey ? M(e.labelKey) : e.label,
                                            e.key === D.suggested_key
                                              ? ` \u2605 ${M("lineupSuggested")}`
                                              : "",
                                          ],
                                        }),
                                      },
                                      e.key,
                                    );
                                  }),
                                }),
                                (0, z.jsxs)(p.default, {
                                  style: [A.rowWrap, { marginTop: S.spacing.lg }],
                                  children: [
                                    (0, z.jsx)(f.Button, {
                                      title: `\u2728 ${M("autoBalanceAI")}`,
                                      size: "sm",
                                      onPress: () => ee(() => (0, B.autoBalanceLineup)(c.id, D.game_id)),
                                      loading: $,
                                    }),
                                    (0, z.jsx)(f.Button, {
                                      title: M("randomizeTeams"),
                                      size: "sm",
                                      variant: "secondary",
                                      onPress: () => ee(() => (0, B.randomizeLineup)(c.id, D.game_id)),
                                    }),
                                    (0, z.jsx)(f.Button, {
                                      title: D.locked ? M("unlockLineup") : M("lockLineup"),
                                      size: "sm",
                                      variant: "secondary",
                                      onPress: () => ee(() => (0, B.toggleLineupLock)(c.id, D.game_id)),
                                    }),
                                    (0, z.jsx)(f.Button, {
                                      title: M("shareToChat"),
                                      size: "sm",
                                      variant: "ghost",
                                      onPress: async () => {
                                        if (!c || !D) return;
                                        const e = await (0, B.fetchProfile)(c.id);
                                        ee(
                                          () =>
                                            (0, B.shareLineupToChat)(
                                              c.id,
                                              D.game_id,
                                              e?.full_name ?? "Player",
                                            ),
                                          "lineupShared",
                                        );
                                      },
                                    }),
                                    (0, z.jsx)(f.Button, {
                                      title: M("exportImage"),
                                      size: "sm",
                                      variant: "ghost",
                                      onPress: () => D && (0, T.exportLineupImage)(D, M("lineupTitle")),
                                    }),
                                    (0, z.jsx)(f.Button, {
                                      title: M("saveTemplate"),
                                      size: "sm",
                                      variant: "ghost",
                                      onPress: () =>
                                        se &&
                                        ee(async () => {
                                          await (0, B.saveLineupTemplate)(
                                            c.id,
                                            se.formation_key,
                                            se.formation_key,
                                          );
                                        }, "templateSaved"),
                                    }),
                                  ],
                                }),
                                (0, z.jsx)(u.default, {
                                  style: [
                                    S.typography.h3,
                                    { color: W.text, marginTop: S.spacing.xl, marginBottom: S.spacing.sm },
                                  ],
                                  children: M("editorsLabel"),
                                }),
                                (0, z.jsx)(j.Card, {
                                  padding: "md",
                                  children:
                                    0 ===
                                    [...D.a.slots, ...D.b.slots].filter((e) => e.captain && e.user_id).length
                                      ? (0, z.jsx)(u.default, {
                                          style: [S.typography.small, { color: W.textMuted }],
                                          children: "\u2014",
                                        })
                                      : [...D.a.slots, ...D.b.slots]
                                          .filter((e) => e.captain && e.user_id)
                                          .map((e) => {
                                            const t = D.editor_user_ids.includes(e.user_id);
                                            return (0, z.jsxs)(
                                              p.default,
                                              {
                                                style: A.editorRow,
                                                children: [
                                                  (0, z.jsx)(u.default, {
                                                    style: [S.typography.body, { color: W.text, flex: 1 }],
                                                    children: e.player_name,
                                                  }),
                                                  (0, z.jsx)(f.Button, {
                                                    title: M(t ? "revokeEdit" : "grantEdit"),
                                                    size: "sm",
                                                    variant: t ? "ghost" : "secondary",
                                                    onPress: () =>
                                                      ee(() =>
                                                        (0, B.grantLineupEdit)(
                                                          c.id,
                                                          D.game_id,
                                                          e.user_id,
                                                          !t,
                                                        ),
                                                      ),
                                                  }),
                                                ],
                                              },
                                              e.user_id,
                                            );
                                          }),
                                }),
                                (0, z.jsx)(u.default, {
                                  style: [
                                    S.typography.h3,
                                    { color: W.text, marginTop: S.spacing.xl, marginBottom: S.spacing.sm },
                                  ],
                                  children: M("lineupHistory"),
                                }),
                                (0, z.jsx)(j.Card, {
                                  padding: "md",
                                  children: D.history
                                    .slice(0, 8)
                                    .map((e) =>
                                      (0, z.jsxs)(
                                        p.default,
                                        {
                                          style: A.historyRow,
                                          children: [
                                            (0, z.jsxs)(u.default, {
                                              style: [
                                                S.typography.caption,
                                                { color: W.textMuted, width: 34 },
                                              ],
                                              children: ["v", e.version],
                                            }),
                                            (0, z.jsx)(u.default, {
                                              style: [S.typography.caption, { color: W.text, flex: 1 }],
                                              numberOfLines: 1,
                                              children: e.action,
                                            }),
                                            (0, z.jsx)(u.default, {
                                              style: [S.typography.caption, { color: W.textMuted }],
                                              children: new Date(e.at).toLocaleTimeString(),
                                            }),
                                          ],
                                        },
                                        e.version,
                                      ),
                                    ),
                                }),
                              ],
                            }),
                        ],
                      }),
            }),
            (0, z.jsx)(l.default, {
              visible: X,
              transparent: !0,
              animationType: "fade",
              onRequestClose: () => Y(!1),
              children: (0, z.jsx)(n.default, {
                style: A.confirmScrim,
                onPress: () => Y(!1),
                children: (0, z.jsxs)(n.default, {
                  style: [A.confirmCard, { backgroundColor: W.surface, borderColor: W.border }],
                  onPress: () => {},
                  children: [
                    (0, z.jsx)(p.default, {
                      style: [A.confirmIcon, { backgroundColor: W.surfaceAlt }],
                      children: (0, z.jsx)(h.Ionicons, { name: "exit-outline", size: 24, color: W.danger }),
                    }),
                    (0, z.jsx)(u.default, {
                      style: [
                        S.typography.h3,
                        { color: W.text, textAlign: "center", marginTop: S.spacing.md },
                      ],
                      children: M("leaveMatchTitle"),
                    }),
                    (0, z.jsx)(u.default, {
                      style: [
                        S.typography.small,
                        { color: W.textMuted, textAlign: "center", marginTop: S.spacing.xs },
                      ],
                      children: M("leaveMatchBody"),
                    }),
                    (0, z.jsxs)(p.default, {
                      style: { marginTop: S.spacing.lg, gap: S.spacing.sm, alignSelf: "stretch" },
                      children: [
                        (0, z.jsx)(f.Button, {
                          title: M("leaveGame"),
                          variant: "danger",
                          fullWidth: !0,
                          loading: $,
                          onPress: () => {
                            (Y(!1),
                              ee(async () => {
                                await (0, B.leaveMatch)(D.game_id, c.id);
                              }));
                          },
                        }),
                        (0, z.jsx)(f.Button, {
                          title: M("stay"),
                          variant: "ghost",
                          fullWidth: !0,
                          onPress: () => Y(!1),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }));
    var t = r(d[1]),
      s = e(r(d[2])),
      l = e(r(d[3])),
      n = e(r(d[4])),
      o = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      p = e(r(d[8])),
      y = r(d[9]),
      h = r(d[10]),
      x = r(d[11]),
      f = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      _ = r(d[15]),
      C = r(d[16]),
      v = r(d[17]),
      k = r(d[18]),
      S = r(d[19]),
      B = r(d[20]),
      T = r(d[21]),
      w = r(d[22]),
      L = r(d[23]),
      I = r(d[24]),
      P = r(d[25]),
      z = r(d[26]);
    const A = c.default.create({
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
      badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: S.spacing.sm,
        paddingVertical: 4,
        borderRadius: S.radius.pill,
        borderWidth: c.default.hairlineWidth,
      },
      banner: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: S.radius.md,
        borderWidth: c.default.hairlineWidth,
        padding: S.spacing.sm,
        marginBottom: S.spacing.md,
      },
      rowWrap: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.xs },
      benchChip: {
        paddingHorizontal: S.spacing.sm,
        paddingVertical: 6,
        borderRadius: S.radius.pill,
        borderWidth: 1,
      },
      segment: {
        flexDirection: "row",
        borderWidth: c.default.hairlineWidth,
        borderRadius: S.radius.md,
        overflow: "hidden",
      },
      segmentBtn: { flex: 1, alignItems: "center", paddingVertical: S.spacing.sm },
      editorRow: { flexDirection: "row", alignItems: "center", paddingVertical: S.spacing.xs },
      historyRow: { flexDirection: "row", alignItems: "center", gap: S.spacing.sm, paddingVertical: 3 },
      confirmScrim: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.55)",
        justifyContent: "center",
        padding: S.spacing.xl,
      },
      confirmCard: {
        borderRadius: 20,
        borderWidth: c.default.hairlineWidth,
        padding: S.spacing.xl,
        alignItems: "center",
      },
      confirmIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
      },
    });
  },
  2448,
  [
    33, 15, 461, 467, 369, 281, 158, 146, 273, 381, 1086, 20, 626, 624, 1623, 2382, 625, 630, 615, 616, 671,
    2449, 1627, 675, 1171, 674, 13,
  ],
);
