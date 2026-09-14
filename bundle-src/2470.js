__d(
  function (g, r, _i, _a, _m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, p.useAuth)(),
          { colors: l } = (0, h.useTheme)(),
          I = (0, d.useRouter)(),
          P = (0, S.useT)(),
          [z, M] = (0, t.useState)(null),
          [R, W] = (0, t.useState)([]),
          [v, A] = (0, t.useState)(null),
          [_, q] = (0, t.useState)(null),
          // Kick-off is picked on a 24-hour clock, so the hour IS the hour: no 12-hour wrap, no AM/PM
          // flag, and minutes are always on the hour.
          [H, O] = (0, t.useState)(null),
          [F, K] = (0, t.useState)(null),
          [L, $] = (0, t.useState)(!1),
          [G, J] = (0, t.useState)(!1),
          [Q, U] = (0, t.useState)(null),
          [X, Y] = (0, t.useState)(null);
        ((0, t.useEffect)(() => {
          (0, m.fetchVenues)()
            .then(W)
            .catch(() => W([]));
        }, []),
          (0, t.useEffect)(() => {
            e &&
              (0, m.fetchMyOrganizerApplication)(e.id)
                .then((e) => Y("approved" === e?.status))
                .catch(() => Y(!1));
          }, [e]));
        const Z = (0, t.useMemo)(() => (z ? R.filter((e) => e.sports.includes(z)) : []), [R, z]);
        (0, t.useEffect)(() => {
          v && z && !Z.some((e) => e.id === v) && A(null);
        }, [z, v, Z]);
        const ee = (0, t.useMemo)(() => {
            if (!_ || null == H) return null;
            const t = new Date(_);
            return (t.setHours(H, 0, 0, 0), t);
          }, [_, H]),
          te = (z ? 1 : 0) + (v ? 1 : 0) + (ee ? 1 : 0),
          re = 3 === te,
          ae = !!ee && ee.getTime() < Date.now();
        (0, t.useEffect)(() => {
          if ((K(null), $(!1), !e || !z || !v)) return;
          let t = !0;
          return (
            (0, m.fetchSmartDefaults)(e.id, z, v)
              .then((e) => {
                t && (K(e), $(!0));
              })
              .catch(() => {
                t && $(!0);
              }),
            () => {
              t = !1;
            }
          );
        }, [e, z, v]);
        if (!1 === X)
          return (0, k.jsxs)(i.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: l.bg, padding: y.spacing.lg },
            children: [
              (0, k.jsx)(n.default, {
                style: [y.typography.h1, { color: l.text, marginTop: y.spacing.xl }],
                children: P("newNeedsOrganizer"),
              }),
              (0, k.jsx)(n.default, {
                style: [y.typography.body, { color: l.textMuted, marginTop: y.spacing.sm }],
                children: P("newNeedsOrganizerSub"),
              }),
              (0, k.jsx)(u.Button, {
                title: P("becomeOrganizer"),
                size: "lg",
                fullWidth: !0,
                style: { marginTop: y.spacing.xl },
                onPress: () => I.replace("/organizer/apply"),
              }),
              (0, k.jsx)(a.default, {
                onPress: () => I.back(),
                accessibilityRole: "button",
                hitSlop: 10,
                style: {
                  alignItems: "center",
                  marginTop: y.spacing.md,
                  minHeight: y.touch.minTarget,
                  justifyContent: "center",
                },
                children: (0, k.jsx)(n.default, {
                  style: [y.typography.small, { color: l.textMuted }],
                  children: P("back"),
                }),
              }),
            ],
          });
        const se = ({ on: e, label: t, onPress: s }) =>
            (0, k.jsx)(a.default, {
              onPress: s,
              accessibilityRole: "button",
              accessibilityState: { selected: e },
              style: [
                D.chip,
                {
                  backgroundColor: e ? l.accent : l.surface,
                  borderColor: e ? l.accent : l.border,
                  minHeight: y.touch.minTarget,
                },
              ],
              children: (0, k.jsx)(n.default, {
                style: [y.typography.smallStrong, { color: e ? l.accentInk : l.text }],
                children: t,
              }),
            }),
          le = ({ n: e, title: t, done: a, dim: s, children: i }) =>
            (0, k.jsxs)(o.default, {
              style: [D.card, { backgroundColor: l.surface, borderColor: l.border, opacity: s ? 0.45 : 1 }],
              pointerEvents: s ? "none" : "auto",
              children: [
                (0, k.jsxs)(o.default, {
                  style: { flexDirection: "row", alignItems: "center", marginBottom: y.spacing.sm },
                  children: [
                    (0, k.jsx)(o.default, {
                      style: [
                        D.stepDot,
                        {
                          backgroundColor: a ? l.accent : l.surfaceAlt,
                          borderColor: a ? l.accent : l.border,
                        },
                      ],
                      children: a
                        ? (0, k.jsx)(c.Ionicons, { name: "checkmark", size: 14, color: l.accentInk })
                        : (0, k.jsx)(n.default, {
                            style: [y.typography.caption, { color: l.textMuted }],
                            children: (0, f.formatNumber)(e),
                          }),
                    }),
                    (0, k.jsx)(n.default, {
                      style: [y.typography.bodyStrong, { color: l.text, marginStart: y.spacing.sm }],
                      children: t,
                    }),
                  ],
                }),
                i,
              ],
            });
        return (0, k.jsxs)(i.SafeAreaView, {
          edges: ["top", "bottom"],
          style: { flex: 1, backgroundColor: l.bg },
          children: [
            (0, k.jsxs)(o.default, {
              style: D.header,
              children: [
                (0, k.jsx)(a.default, {
                  onPress: () => I.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: P("back"),
                  style: [D.iconBtn, { borderColor: l.border }],
                  children: (0, k.jsx)(c.Ionicons, { name: (0, j.chevronBack)(), size: 20, color: l.text }),
                }),
                (0, k.jsx)(n.default, {
                  style: [y.typography.h2, { color: l.text, flex: 1, textAlign: "center" }],
                  children: P("quickMatchTitle"),
                }),
                (0, k.jsx)(o.default, { style: { width: 40 } }),
              ],
            }),
            (0, k.jsx)(o.default, {
              style: [D.progressTrack, { backgroundColor: l.border }],
              children: (0, k.jsx)(o.default, {
                style: [D.progressFill, { backgroundColor: l.accent, width: (te / 3) * 100 + "%" }],
              }),
            }),
            (0, k.jsxs)(s.default, {
              contentContainerStyle: { padding: y.spacing.lg, paddingBottom: y.spacing.xxxl },
              keyboardShouldPersistTaps: "handled",
              children: [
                (0, k.jsx)(le, {
                  n: 1,
                  title: P("quickPickSport"),
                  done: !!z,
                  dim: !1,
                  children: (0, k.jsx)(o.default, {
                    style: { flexDirection: "row", gap: y.spacing.sm },
                    children: T.map((e) => {
                      const t = z === e;
                      return (0, k.jsxs)(
                        a.default,
                        {
                          onPress: () => M(e),
                          accessibilityRole: "button",
                          accessibilityState: { selected: t },
                          style: [
                            D.sportCard,
                            {
                              backgroundColor: l.surfaceAlt,
                              borderColor: t ? l.accent : l.border,
                              borderWidth: t ? 2 : 1,
                            },
                          ],
                          children: [
                            (0, k.jsx)(c.Ionicons, { name: f.sportIcon[e], size: 22, color: C(e) }),
                            (0, k.jsx)(n.default, {
                              style: [y.typography.smallStrong, { color: l.text, marginTop: 4 }],
                              children: P(e),
                            }),
                          ],
                        },
                        e,
                      );
                    }),
                  }),
                }),
                (0, k.jsxs)(le, {
                  n: 2,
                  title: P("quickPickVenue"),
                  done: !!v,
                  dim: !z,
                  children: [
                    Z.slice(0, 8).map((e) => {
                      const t = v === e.id;
                      return (0, k.jsxs)(
                        a.default,
                        {
                          onPress: () => A(e.id),
                          accessibilityRole: "button",
                          accessibilityState: { selected: t },
                          style: [
                            D.venueRow,
                            {
                              backgroundColor: l.surfaceAlt,
                              borderColor: t ? l.accent : l.border,
                              borderWidth: t ? 2 : 1,
                            },
                          ],
                          children: [
                            (0, k.jsxs)(o.default, {
                              style: { flex: 1 },
                              children: [
                                (0, k.jsx)(n.default, {
                                  style: [y.typography.smallStrong, { color: l.text }],
                                  numberOfLines: 1,
                                  children: e.name,
                                }),
                                (0, k.jsx)(n.default, {
                                  style: [y.typography.caption, { color: l.textMuted }],
                                  children: e.area,
                                }),
                              ],
                            }),
                            t &&
                              (0, k.jsx)(c.Ionicons, {
                                name: "checkmark-circle",
                                size: 20,
                                color: l.accentText,
                              }),
                          ],
                        },
                        e.id,
                      );
                    }),
                    z &&
                      0 === Z.length &&
                      (0, k.jsx)(n.default, {
                        style: [y.typography.small, { color: l.textMuted }],
                        children: P("quickNoVenues"),
                      }),
                  ],
                }),
                (0, k.jsxs)(le, {
                  n: 3,
                  title: P("quickPickKickoff"),
                  done: !!ee && !ae,
                  dim: !v,
                  children: [
                    (0, k.jsx)(s.default, {
                      horizontal: !0,
                      showsHorizontalScrollIndicator: !1,
                      contentContainerStyle: { gap: y.spacing.sm, paddingVertical: 2 },
                      children: Array.from({ length: 14 }, (e, t) => {
                        const s = new Date();
                        (s.setDate(s.getDate() + t), s.setHours(0, 0, 0, 0));
                        const o = _?.toDateString() === s.toDateString();
                        return (0, k.jsxs)(
                          a.default,
                          {
                            onPress: () => q(s),
                            accessibilityRole: "button",
                            accessibilityState: { selected: o },
                            style: [
                              D.dateChip,
                              {
                                backgroundColor: o ? l.accent : l.surfaceAlt,
                                borderColor: o ? l.accent : l.border,
                              },
                            ],
                            children: [
                              (0, k.jsx)(n.default, {
                                style: [y.typography.caption, { color: o ? l.accentInk : l.textMuted }],
                                children: P(w[s.getDay()]),
                              }),
                              (0, k.jsx)(n.default, {
                                style: [y.typography.bodyStrong, { color: o ? l.accentInk : l.text }],
                                children: (0, f.formatNumber)(s.getDate()),
                              }),
                              (0, k.jsx)(n.default, {
                                style: [
                                  y.typography.caption,
                                  { color: o ? l.accentInk : l.textMuted, opacity: 0.8 },
                                ],
                                // App locale, not the device's: a user can pick Arabic on an
                                // English phone, and the month must follow the app.
                                children: s.toLocaleDateString(
                                  "ar" === (0, S.getLocale)() ? "ar" : "en",
                                  { month: "short" },
                                ),
                              }),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                    (0, k.jsx)(o.default, {
                      // One grid, 00:00 to 23:00, flowing into the room the AM/PM row used to take.
                      style: {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: y.spacing.sm,
                        marginTop: y.spacing.sm,
                      },
                      children: Array.from({ length: 24 }, (e, t) => t).map((e) =>
                        (0, k.jsx)(
                          se,
                          {
                            on: H === e,
                            label: (0, f.formatNumber)(`${String(e).padStart(2, "0")}:00`),
                            onPress: () => O(e),
                          },
                          e,
                        ),
                      ),
                    }),
                    ae &&
                      (0, k.jsx)(n.default, {
                        style: [y.typography.caption, { color: l.danger, marginTop: y.spacing.sm }],
                        children: P("quickKickoffPast"),
                      }),
                  ],
                }),
                re &&
                  L &&
                  (0, k.jsxs)(o.default, {
                    style: [D.card, { backgroundColor: l.surfaceAlt, borderColor: l.border }],
                    children: [
                      (0, k.jsxs)(o.default, {
                        style: { flexDirection: "row", alignItems: "center" },
                        children: [
                          (0, k.jsx)(c.Ionicons, { name: "sparkles", size: 16, color: l.accentText }),
                          (0, k.jsx)(n.default, {
                            style: [y.typography.smallStrong, { color: l.text, marginStart: y.spacing.xs }],
                            children: P("smartDefaultsTitle"),
                          }),
                        ],
                      }),
                      F
                        ? (0, k.jsxs)(k.Fragment, {
                            children: [
                              (0, k.jsx)(n.default, {
                                style: [y.typography.caption, { color: l.textMuted, marginTop: 2 }],
                                children: P("smartDefaultsSub"),
                              }),
                              (0, k.jsx)(o.default, {
                                style: D.grid,
                                children: [
                                  [P("smartPrice"), (0, f.formatPrice)(F.price_kwd)],
                                  [P("smartSquad"), P("playersN", { n: String(F.max_players) })],
                                  [P("smartSkill"), P("all" === F.skill_level ? "allLevels" : F.skill_level)],
                                  [P("smartWaitlist"), F.waitlist_on ? P("switchOn") : P("switchOff")],
                                  [P("smartDuration"), P("minutesN", { n: String(F.duration_minutes ?? 90) })],
                                  [P("smartVisibility"), P("public" === (F.visibility ?? "public") ? "visibilityPublic" : "visibilityPrivate")],
                                  [P("smartApproval"), P("auto" === (F.approval_mode ?? "auto") ? "approvalAuto" : "approvalManual")],
                                ].map(([e, t]) =>
                                  (0, k.jsxs)(
                                    o.default,
                                    {
                                      style: { width: "50%", marginTop: y.spacing.sm },
                                      children: [
                                        (0, k.jsx)(n.default, {
                                          style: [
                                            y.typography.caption,
                                            {
                                              color: l.textMuted,
                                              letterSpacing: 1.2,
                                              textTransform: "uppercase",
                                            },
                                          ],
                                          children: e,
                                        }),
                                        (0, k.jsx)(n.default, {
                                          style: [y.typography.smallStrong, { color: l.text, marginTop: 2 }],
                                          children: t,
                                        }),
                                      ],
                                    },
                                    e,
                                  ),
                                ),
                              }),
                              (0, k.jsx)(n.default, {
                                style: [
                                  y.typography.caption,
                                  { color: l.textMuted, marginTop: y.spacing.sm },
                                ],
                                children:
                                  "default" === F.source
                                    ? P("smartDefaultsFallback")
                                    : P("smartBasedOn", { n: String(F.based_on_games) }),
                              }),
                            ],
                          })
                        : (0, k.jsx)(n.default, {
                            style: [y.typography.caption, { color: l.textMuted, marginTop: 2 }],
                            children: P("smartNoData"),
                          }),
                    ],
                  }),
                Q &&
                  (0, k.jsx)(n.default, {
                    style: [y.typography.small, { color: l.danger, marginTop: y.spacing.sm }],
                    children: Q,
                  }),
                (0, k.jsx)(u.Button, {
                  title: P("quickPost"),
                  size: "lg",
                  fullWidth: !0,
                  loading: G,
                  disabled: !re || ae,
                  onPress: async () => {
                    if (e && z && v && ee && !G) {
                      (J(!0), U(null));
                      try {
                        const t = await (0, m.quickCreateMatch)(e.id, {
                          sport: z,
                          venue_id: v,
                          starts_at: ee.toISOString(),
                        });
                        I.replace(`/organizer/match/${t.id}`);
                      } catch (e) {
                        (U((0, b.storeErrorText)(e.message)), J(!1));
                      }
                    }
                  },
                  style: { marginTop: y.spacing.lg },
                }),
                (0, k.jsx)(a.default, {
                  onPress: () => I.replace("/organizer/create"),
                  accessibilityRole: "button",
                  style: {
                    alignItems: "center",
                    marginTop: y.spacing.md,
                    minHeight: y.touch.minTarget,
                    justifyContent: "center",
                  },
                  children: (0, k.jsxs)(n.default, {
                    style: [y.typography.small, { color: l.textMuted }],
                    children: [
                      P("quickWantControl"),
                      " ",
                      (0, k.jsx)(n.default, {
                        style: { color: l.accentText },
                        children: P("quickSwitchCustom"),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }));
    var t = r(_d[1]),
      a = e(r(_d[2])),
      s = e(r(_d[3])),
      l = e(r(_d[4])),
      n = e(r(_d[5])),
      o = e(r(_d[6])),
      i = r(_d[7]),
      c = r(_d[8]),
      d = r(_d[9]),
      u = r(_d[10]),
      p = r(_d[11]),
      h = r(_d[12]),
      y = r(_d[13]),
      m = r(_d[14]),
      f = r(_d[15]),
      x = r(_d[16]),
      b = r(_d[17]),
      j = r(_d[18]),
      S = r(_d[19]),
      k = r(_d[20]);
    const T = ["football", "padel", "tennis"],
      C = (e) => ("football" === e ? "#E85D1A" : "padel" === e ? "#2D6BE4" : "#1FA974"),
      w = ["daySun", "dayMon", "dayTue", "dayWed", "dayThu", "dayFri", "daySat"];
    const D = l.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: y.spacing.lg,
        paddingVertical: y.spacing.sm,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      progressTrack: { height: 3, marginHorizontal: y.spacing.lg, borderRadius: 2, overflow: "hidden" },
      progressFill: { height: 3, borderRadius: 2 },
      card: { borderWidth: 1, borderRadius: y.radius.lg, padding: y.spacing.md, marginTop: y.spacing.md },
      stepDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      sportCard: { flex: 1, alignItems: "center", borderRadius: y.radius.md, paddingVertical: y.spacing.md },
      venueRow: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: y.radius.md,
        padding: y.spacing.md,
        marginTop: y.spacing.sm,
      },
      chip: {
        borderWidth: 1,
        borderRadius: y.radius.pill,
        paddingHorizontal: y.spacing.md,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      dateChip: {
        borderWidth: 1,
        borderRadius: y.radius.md,
        paddingHorizontal: y.spacing.md,
        paddingVertical: y.spacing.sm,
        alignItems: "center",
        minWidth: 70,
      },
      grid: { flexDirection: "row", flexWrap: "wrap" },
    });
  },
  2470,
  [33, 15, 369, 281, 158, 146, 273, 381, 1086, 20, 626, 630, 615, 616, 671, 1311, 2469, 674, 1171, 675, 13],
);
