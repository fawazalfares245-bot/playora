__d(
  function (g, r, _i, a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { battleId: e } = (0, y.useLocalSearchParams)(),
          { user: c } = (0, j.useAuth)(),
          { colors: W } = (0, _.useTheme)(),
          B = (0, y.useRouter)(),
          N = (0, D.useT)(),
          [U, H] = (0, t.useState)(null),
          [$, O] = (0, t.useState)(!1),
          [V, G] = (0, t.useState)(!1),
          [Y, q] = (0, t.useState)("gauntlet"),
          [J, K] = (0, t.useState)(Date.now()),
          [Q, X] = (0, t.useState)(null),
          Z = (0, t.useCallback)(async () => {
            if (e && c) {
              O(!1);
              try {
                (H(await (0, k.fetchClanBattle)(e, c?.id)),
                  c && X(await (0, k.fetchBattleResult)(c.id, e).catch(() => null)));
              } catch (e) {
                if ((0, k.isAudienceError)(e)) return void O(!0);
                throw e;
              }
            }
          }, [e, c?.id]);
        ((0, y.useFocusEffect)(
          (0, t.useCallback)(() => {
            Z();
          }, [Z]),
        ),
          (0, t.useEffect)(() => {
            if ("pending" !== U?.view_status) return;
            const e = setInterval(() => K(Date.now()), 1e3);
            return () => clearInterval(e);
          }, [U?.view_status]));
        const ee = (0, t.useRef)(0);
        (0, t.useEffect)(() => {
          if (!U || "pending" !== U.view_status) return;
          const e = new Date(U.expires_at).getTime() - J,
            t = e <= 0 ? 3 : e <= 72e5 ? 2 : e <= 864e5 ? 1 : 0;
          t > ee.current &&
            ((ee.current = t), t > 0 && l.default.announceForAccessibility?.((0, T.coarseClockA11y)(e, N)));
        }, [J, U, N]);
        const te = U ? new Date(U.expires_at).getTime() - J : 0,
          re = "pending" === U?.view_status ? (0, S.shotClockUrgency)(te) : "calm",
          ae = U ? new Date(U.result_deadline).getTime() - J : 0,
          le = !!U && new Date(U.starts_at).getTime() <= J,
          se = (0, S.resultDeadlineUrgency)(ae),
          oe = (0, S.shotClockInk)(re, W),
          ne = async (e) => {
            if (c && U && !V) {
              G(!0);
              try {
                H(await (0, k.respondClanChallenge)(c.id, U.id, e));
              } catch (e) {
                o.default.alert(N("error"), (0, R.storeErrorText)(e?.message ?? "") || N("error"));
              } finally {
                G(!1);
              }
            }
          };
        if ($) return (0, v.jsx)(A.NotAvailable, {});
        if (!U)
          return (0, v.jsx)(m.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: W.bg, alignItems: "center", justifyContent: "center" },
            children: (0, v.jsx)(s.default, { color: W.accentText }),
          });
        const ie = U.my_team_id === U.from_team_id,
          de = ie
            ? { name: U.from_name, color: U.from_color, rank: U.from_rank, pts: U.from_pts }
            : { name: U.to_name, color: U.to_color, rank: U.to_rank, pts: U.to_pts },
          ce = ie
            ? { name: U.to_name, color: U.to_color, rank: U.to_rank, pts: U.to_pts }
            : { name: U.from_name, color: U.from_color, rank: U.from_rank, pts: U.from_pts },
          ue = Math.max(0, new Date(U.expires_at).getTime() - J),
          ge = Math.floor(ue / 36e5),
          pe = Math.floor((ue % 36e5) / 6e4),
          me = Math.floor((ue % 6e4) / 1e3),
          he = `${String(ge).padStart(2, "0")}:${String(pe).padStart(2, "0")}:${String(me).padStart(2, "0")}`,
          ye = Math.max(0.02, ue / 2592e5),
          fe =
            new Date(U.expires_at).toLocaleDateString(void 0, { weekday: "short" }) +
            " " +
            (0, w.formatClock)(U.expires_at),
          xe = ie ? "to" : "from",
          be = U.underdog?.side === xe ? U.underdog : null,
          je = U.underdog && U.underdog.side !== xe ? U.underdog : null,
          Ce = new Date(U.starts_at),
          ke =
            "pending" === U.view_status
              ? null
              : "expired" === U.view_status
                ? { label: N("dodgedChip"), bg: "rgba(225,72,125,0.14)", fg: I }
                : "accepted" === U.view_status
                  ? { label: N("confirmedBattle"), bg: "rgba(31,169,116,0.18)", fg: "#1FA974" }
                  : "completed" === U.view_status
                    ? {
                        label:
                          U.winner_team_id === U.my_team_id
                            ? N("wonChip", { s: U.score ?? "" })
                            : N("lostChip", { s: U.score ?? "" }),
                        bg: "rgba(31,169,116,0.14)",
                        fg: U.winner_team_id === U.my_team_id ? "#1FA974" : W.danger,
                      }
                    : { label: N("declinedChip"), bg: W.surfaceAlt, fg: W.textMuted };
        return (0, v.jsxs)(m.SafeAreaView, {
          edges: ["top", "bottom"],
          style: { flex: 1, backgroundColor: W.bg },
          children: [
            (0, v.jsxs)(p.default, {
              style: [P.topRow, { paddingStart: C.spacing.lg }],
              children: [
                (0, v.jsx)(n.default, {
                  onPress: () => B.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: N("back"),
                  hitSlop: 8,
                  style: [P.backBtn, { backgroundColor: W.surface, borderColor: W.border }],
                  children: (0, v.jsx)(h.Ionicons, { name: (0, M.chevronBack)(), size: 20, color: W.text }),
                }),
                (0, v.jsx)(p.default, {
                  style: [P.segment, { backgroundColor: W.surface, borderColor: W.border }],
                  children: ["gauntlet", "recap"].map((e) => {
                    const t = Y === e;
                    return (0, v.jsx)(
                      n.default,
                      {
                        onPress: () => q(e),
                        accessibilityRole: "button",
                        accessibilityState: { selected: t },
                        style: [P.segBtn, t && { backgroundColor: W.accent }],
                        children: (0, v.jsx)(u.default, {
                          style: [C.typography.smallStrong, { color: t ? W.accentInk : W.textMuted }],
                          children: N("gauntlet" === e ? "gauntletTab" : "recapTab"),
                        }),
                      },
                      e,
                    );
                  }),
                }),
              ],
            }),
            (0, v.jsx)(i.default, {
              contentContainerStyle: { padding: C.spacing.lg, paddingBottom: C.spacing.xxxl },
              children:
                "recap" === Y
                  ? (0, v.jsx)(E, { b: U, colors: W, t: N })
                  : (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsxs)(p.default, {
                          style: [
                            P.hero,
                            { backgroundColor: W.surface, borderColor: U.can_respond ? W.accent : W.border },
                          ],
                          children: [
                            (0, v.jsxs)(p.default, {
                              style: { flexDirection: "row", alignItems: "center", gap: C.spacing.sm },
                              children: [
                                U.is_derby &&
                                  (0, v.jsx)(b.Explainer, {
                                    k: "derby",
                                    children: (0, v.jsx)(p.default, {
                                      style: [P.derbyChip, { backgroundColor: "rgba(225,72,125,0.16)" }],
                                      children: (0, v.jsx)(u.default, {
                                        style: [
                                          C.typography.caption,
                                          { color: I, fontWeight: "800", letterSpacing: 1 },
                                        ],
                                        children: N("derbyChip", { n: L(U.meeting_no) }).toUpperCase(),
                                      }),
                                    }),
                                  }),
                                (0, v.jsx)(u.default, {
                                  style: [
                                    C.typography.caption,
                                    { color: W.textMuted, letterSpacing: 2, fontWeight: "700" },
                                  ],
                                  children: N("ladderTag").toUpperCase(),
                                }),
                              ],
                            }),
                            (0, v.jsxs)(p.default, {
                              style: {
                                flexDirection: "row",
                                alignItems: "flex-start",
                                marginTop: C.spacing.lg,
                              },
                              children: [
                                (0, v.jsxs)(p.default, {
                                  style: { flex: 1, alignItems: "center" },
                                  children: [
                                    (0, v.jsx)(x.ClanCrest, { name: de.name, color: de.color, size: 72 }),
                                    (0, v.jsx)(u.default, {
                                      style: [
                                        C.typography.bodyStrong,
                                        { color: W.text, marginTop: C.spacing.sm, textAlign: "center" },
                                      ],
                                      numberOfLines: 2,
                                      children: de.name,
                                    }),
                                    null != de.rank &&
                                      (0, v.jsxs)(u.default, {
                                        style: [C.typography.caption, { color: W.textMuted, marginTop: 2 }],
                                        children: [
                                          "#",
                                          (0, w.formatNumber)(de.rank),
                                          " \xb7 ",
                                          (0, w.formatNumber)(de.pts ?? 0),
                                          " pts",
                                        ],
                                      }),
                                  ],
                                }),
                                (0, v.jsxs)(p.default, {
                                  style: {
                                    alignItems: "center",
                                    paddingTop: 18,
                                    marginHorizontal: C.spacing.sm,
                                  },
                                  children: [
                                    (0, v.jsx)(u.default, {
                                      style: [P.vs, { color: W.textMuted }],
                                      children: N("vsLabel"),
                                    }),
                                    U.all_time.mine + U.all_time.theirs > 0
                                      ? (0, v.jsxs)(v.Fragment, {
                                          children: [
                                            (0, v.jsxs)(u.default, {
                                              style: [
                                                C.typography.smallStrong,
                                                { color: "#1FA974", marginTop: 4 },
                                              ],
                                              children: [
                                                (0, w.formatNumber)(U.all_time.mine),
                                                "\u2013",
                                                (0, w.formatNumber)(U.all_time.theirs),
                                              ],
                                            }),
                                            (0, v.jsx)(u.default, {
                                              style: [P.allTime, { color: W.textMuted }],
                                              children: N("allTimeLabel").toUpperCase(),
                                            }),
                                          ],
                                        })
                                      : (0, v.jsx)(u.default, {
                                          style: [P.allTime, { color: W.textMuted, marginTop: 4 }],
                                          children: N("firstMeetingShort").toUpperCase(),
                                        }),
                                  ],
                                }),
                                (0, v.jsxs)(p.default, {
                                  style: { flex: 1, alignItems: "center" },
                                  children: [
                                    (0, v.jsx)(x.ClanCrest, { name: ce.name, color: ce.color, size: 72 }),
                                    (0, v.jsx)(u.default, {
                                      style: [
                                        C.typography.bodyStrong,
                                        { color: W.text, marginTop: C.spacing.sm, textAlign: "center" },
                                      ],
                                      numberOfLines: 2,
                                      children: ce.name,
                                    }),
                                    null != ce.rank &&
                                      (0, v.jsxs)(u.default, {
                                        style: [C.typography.caption, { color: W.textMuted, marginTop: 2 }],
                                        children: [
                                          "#",
                                          (0, w.formatNumber)(ce.rank),
                                          " \xb7 ",
                                          (0, w.formatNumber)(ce.pts ?? 0),
                                          " pts",
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            "pending" === U.view_status
                              ? (0, v.jsxs)(p.default, {
                                  style: [P.clockCard, { backgroundColor: W.surfaceAlt }],
                                  accessible: !0,
                                  accessibilityLabel: (0, T.coarseClockA11y)(ue, N),
                                  children: [
                                    (0, v.jsxs)(p.default, {
                                      style: { flexDirection: "row", alignItems: "center" },
                                      importantForAccessibility: "no-hide-descendants",
                                      children: [
                                        (0, v.jsx)(b.Explainer, {
                                          k: "shotclock",
                                          style: { flex: 1 },
                                          children: (0, v.jsx)(u.default, {
                                            style: [
                                              C.typography.caption,
                                              { color: I, fontWeight: "800", letterSpacing: 2 },
                                            ],
                                            children: N("shotClock").toUpperCase(),
                                          }),
                                        }),
                                        (0, v.jsx)(u.default, {
                                          style: [P.clockDigits, { color: oe }],
                                          children: he,
                                        }),
                                      ],
                                    }),
                                    (0, v.jsx)(p.default, {
                                      style: [P.clockTrack, { backgroundColor: W.border }],
                                      children: (0, v.jsx)(p.default, {
                                        style: [P.clockFill, { width: 100 * ye + "%" }],
                                      }),
                                    }),
                                    (0, v.jsx)(u.default, {
                                      style: [
                                        C.typography.caption,
                                        { color: W.textMuted, marginTop: C.spacing.xs },
                                      ],
                                      children: N("shotClockHint", { when: fe }),
                                    }),
                                    "calm" !== re &&
                                      (0, v.jsxs)(p.default, {
                                        style: [
                                          P.clockWarn,
                                          {
                                            backgroundColor:
                                              "final" === re
                                                ? "rgba(214,88,79,0.15)"
                                                : "rgba(224,161,0,0.15)",
                                          },
                                        ],
                                        children: [
                                          (0, v.jsx)(h.Ionicons, { name: "warning", size: 13, color: oe }),
                                          (0, v.jsx)(u.default, {
                                            style: [
                                              C.typography.caption,
                                              { color: oe, flex: 1, marginStart: 6 },
                                            ],
                                            children: N("final" === re ? "shotClockFinal" : "shotClockWarn"),
                                          }),
                                        ],
                                      }),
                                  ],
                                })
                              : ke
                                ? (0, v.jsxs)(p.default, {
                                    style: [P.clockCard, { backgroundColor: ke.bg, alignItems: "center" }],
                                    children: [
                                      (0, v.jsx)(u.default, {
                                        style: [C.typography.smallStrong, { color: ke.fg, letterSpacing: 1 }],
                                        children: ke.label.toUpperCase(),
                                      }),
                                      "expired" === U.view_status &&
                                        (0, v.jsx)(u.default, {
                                          style: [C.typography.caption, { color: W.textMuted, marginTop: 4 }],
                                          children: N("expiredHint"),
                                        }),
                                    ],
                                  })
                                : null,
                          ],
                        }),
                        (0, v.jsxs)(p.default, {
                          style: { flexDirection: "row", gap: C.spacing.sm, marginTop: C.spacing.md },
                          children: [
                            (0, v.jsx)(b.Explainer, {
                              k: "stake",
                              style: { flex: 1 },
                              children: (0, v.jsxs)(p.default, {
                                style: [
                                  P.stakeCard,
                                  { backgroundColor: W.surface, borderColor: W.border, flex: void 0 },
                                ],
                                children: [
                                  (0, v.jsx)(u.default, {
                                    style: [P.cardLabel, { color: W.textMuted }],
                                    children: N("stakeLabel").toUpperCase(),
                                  }),
                                  (0, v.jsxs)(u.default, {
                                    style: [C.typography.h2, { color: W.text }],
                                    children: [(0, w.formatNumber)(U.stake_pts), " pts"],
                                  }),
                                  (0, v.jsx)(u.default, {
                                    style: [C.typography.caption, { color: W.textMuted }],
                                    children: N("loserDrops", { n: (0, w.formatNumber)(10) }),
                                  }),
                                ],
                              }),
                            }),
                            (be || je) &&
                              (0, v.jsxs)(p.default, {
                                style: [
                                  P.stakeCard,
                                  {
                                    backgroundColor: "rgba(242,179,0,0.08)",
                                    borderColor: "rgba(242,179,0,0.5)",
                                  },
                                ],
                                children: [
                                  (0, v.jsx)(u.default, {
                                    style: [P.cardLabel, { color: z }],
                                    children: N(be ? "theirUnderdog" : "yourUnderdog").toUpperCase(),
                                  }),
                                  (0, v.jsxs)(u.default, {
                                    style: [C.typography.h2, { color: z }],
                                    children: ["+50% \u2192 ", (0, w.formatNumber)((be ?? je).boosted_pts)],
                                  }),
                                  (0, v.jsx)(u.default, {
                                    style: [C.typography.caption, { color: W.textMuted }],
                                    children: be
                                      ? N("placesAbove", { n: (0, w.formatNumber)(be.places) })
                                      : N("placesBelow", { n: (0, w.formatNumber)(je.places) }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, v.jsxs)(p.default, {
                          style: [P.h2hCard, { backgroundColor: W.surface, borderColor: W.border }],
                          children: [
                            (0, v.jsx)(u.default, {
                              style: [P.cardLabel, { color: W.textMuted, marginBottom: C.spacing.sm }],
                              children: N("headToHead").toUpperCase(),
                            }),
                            0 === U.h2h.length
                              ? (0, v.jsx)(u.default, {
                                  style: [C.typography.small, { color: W.textMuted }],
                                  children: N("firstMeeting"),
                                })
                              : U.h2h.map((e, t) =>
                                  (0, v.jsxs)(
                                    p.default,
                                    {
                                      style: P.h2hRow,
                                      children: [
                                        (0, v.jsx)(u.default, {
                                          style: [C.typography.caption, { color: W.textMuted, width: 52 }],
                                          children: new Date(e.date).toLocaleDateString(void 0, {
                                            day: "numeric",
                                            month: "short",
                                          }),
                                        }),
                                        (0, v.jsx)(u.default, {
                                          style: [C.typography.smallStrong, { color: W.text, flex: 1 }],
                                          numberOfLines: 1,
                                          children: e.line,
                                        }),
                                        (0, v.jsx)(p.default, {
                                          style: [
                                            P.h2hChip,
                                            {
                                              backgroundColor: e.won
                                                ? "rgba(31,169,116,0.18)"
                                                : "rgba(214,88,79,0.18)",
                                            },
                                          ],
                                          children: (0, v.jsx)(u.default, {
                                            style: [
                                              C.typography.caption,
                                              { color: e.won ? "#1FA974" : W.danger, fontWeight: "800" },
                                            ],
                                            children: e.won
                                              ? N("wonShort").toUpperCase()
                                              : N("lostShort").toUpperCase(),
                                          }),
                                        }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                            (0, v.jsx)(p.default, {
                              style: [P.fixtureLine, { borderTopColor: W.border }],
                              children: (0, v.jsxs)(u.default, {
                                style: [C.typography.caption, { color: W.textMuted }],
                                numberOfLines: 1,
                                children: [
                                  Ce.toLocaleDateString(void 0, {
                                    weekday: "short",
                                    day: "numeric",
                                    month: "short",
                                  }),
                                  " \xb7 ",
                                  (0, w.formatClock)(Ce),
                                  " \xb7 ",
                                  U.venue_name,
                                  " \xb7 ",
                                  N(U.sport),
                                  " ",
                                  U.format,
                                ],
                              }),
                            }),
                          ],
                        }),
                        U.can_respond &&
                          (0, v.jsxs)(v.Fragment, {
                            children: [
                              (0, v.jsx)(f.Button, {
                                title: N("acceptGauntlet"),
                                size: "lg",
                                fullWidth: !0,
                                loading: V,
                                onPress: () => ne(!0),
                                style: { marginTop: C.spacing.lg },
                              }),
                              (0, v.jsx)(n.default, {
                                onPress: () => ne(!1),
                                accessibilityRole: "button",
                                disabled: V,
                                style: [P.declineBtn, { borderColor: W.border }],
                                children: (0, v.jsx)(u.default, {
                                  style: [C.typography.bodyStrong, { color: W.textMuted }],
                                  children: N("declinePride"),
                                }),
                              }),
                            ],
                          }),
                        "completed" === U.view_status &&
                          (0, v.jsx)(f.Button, {
                            title: `\u25b6 ${N("ceremonyReplay")}`,
                            size: "lg",
                            fullWidth: !0,
                            onPress: () => B.push(`/teams/battle/ceremony/${U.id}`),
                            style: { marginTop: C.spacing.lg },
                          }),
                        "unplayed" === U.view_status &&
                          (0, v.jsx)(u.default, {
                            style: [
                              C.typography.small,
                              { color: W.textMuted, textAlign: "center", marginTop: C.spacing.lg },
                            ],
                            children: N("unplayedBody"),
                          }),
                        "accepted" === U.view_status &&
                          (0, v.jsxs)(v.Fragment, {
                            children: [
                              (0, v.jsx)(u.default, {
                                style: [
                                  C.typography.small,
                                  { color: W.textMuted, textAlign: "center", marginTop: C.spacing.lg },
                                ],
                                children: N("fixtureLocked"),
                              }),
                              le &&
                                (0, v.jsxs)(p.default, {
                                  style: [
                                    P.clockWarn,
                                    {
                                      backgroundColor:
                                        "final" === se
                                          ? "rgba(214,88,79,0.15)"
                                          : "warn" === se
                                            ? "rgba(224,161,0,0.15)"
                                            : W.surfaceAlt,
                                      marginTop: C.spacing.md,
                                    },
                                  ],
                                  children: [
                                    (0, v.jsx)(h.Ionicons, {
                                      name: "calm" === se ? "time-outline" : "warning",
                                      size: 13,
                                      color: (0, S.shotClockInk)(se, W),
                                    }),
                                    (0, v.jsx)(u.default, {
                                      style: [
                                        C.typography.caption,
                                        { color: (0, S.shotClockInk)(se, W), flex: 1, marginStart: 6 },
                                      ],
                                      children:
                                        ae <= 0
                                          ? N("resultDeadlinePassed")
                                          : "final" === se
                                            ? N("resultDeadlineFinal")
                                            : "warn" === se
                                              ? N("resultDeadlineWarn")
                                              : N("resultDeadlineCalm", {
                                                  when: (0, w.formatGameTime)(U.result_deadline),
                                                }),
                                    }),
                                  ],
                                }),
                              U.game_id &&
                                (0, v.jsx)(f.Button, {
                                  title: N("bookBattleSpot"),
                                  size: "lg",
                                  fullWidth: !0,
                                  onPress: () => B.push(`/game/${U.game_id}`),
                                  style: { marginTop: C.spacing.md },
                                }),
                              (0, v.jsx)(F, {
                                b: U,
                                result: Q,
                                userId: c?.id ?? null,
                                colors: W,
                                t: N,
                                reload: Z,
                              }),
                            ],
                          }),
                      ],
                    }),
            }),
          ],
        });
      }));
    var t = r(d[1]),
      l = e(r(d[2])),
      s = e(r(d[3])),
      o = e(r(d[4])),
      n = e(r(d[5])),
      i = e(r(d[6])),
      c = e(r(d[7])),
      u = e(r(d[8])),
      p = e(r(d[9])),
      m = r(d[10]),
      h = r(d[11]),
      y = r(d[12]),
      f = r(d[13]),
      x = r(d[14]),
      b = r(d[15]),
      j = r(d[16]),
      _ = r(d[17]),
      C = r(d[18]),
      k = r(d[19]),
      w = r(d[20]),
      T = r(d[21]),
      S = r(d[22]),
      D = r(d[23]),
      M = r(d[24]),
      A = r(d[25]),
      W = r(d[26]),
      R = r(d[27]),
      v = r(d[28]);
    const I = "#E1487D",
      B = (e) => (e ? `${(0, w.formatNumber)(e.home)}\u2013${(0, w.formatNumber)(e.away)}` : "\u2014"),
      z = "#F2B300",
      L = (e) => (1 === e ? "1st" : 2 === e ? "2nd" : 3 === e ? "3rd" : `${e}th`);
    const N = ({ b: e, home: t, away: l, setHome: s, setAway: o }) =>
        (0, v.jsxs)(p.default, {
          style: { flexDirection: "row", gap: C.spacing.sm, marginTop: C.spacing.sm },
          children: [
            (0, v.jsx)(p.default, {
              style: { flex: 1 },
              children: (0, v.jsx)(W.Input, {
                label: e.from_name,
                keyboardType: "number-pad",
                value: t,
                onChangeText: (e) => s(e.replace(/[^0-9]/g, "").slice(0, 2)),
                placeholder: "0",
              }),
            }),
            (0, v.jsx)(p.default, {
              style: { flex: 1 },
              children: (0, v.jsx)(W.Input, {
                label: e.to_name,
                keyboardType: "number-pad",
                value: l,
                onChangeText: (e) => o(e.replace(/[^0-9]/g, "").slice(0, 2)),
                placeholder: "0",
              }),
            }),
          ],
        }),
      F = ({ b: e, result: l, userId: s, colors: i, t: c, reload: m }) => {
        const [h, y] = (0, t.useState)(""),
          [x, b] = (0, t.useState)(""),
          [j, _] = (0, t.useState)(!1),
          [S, D] = (0, t.useState)(!1),
          M = (0, t.useRef)(null),
          A = Date.now() > new Date(e.starts_at).getTime() + 54e5,
          W = l?.submitted_team_id === e.my_team_id,
          I = async (e) => {
            if (s && !S) {
              D(!0);
              try {
                (await e(), y(""), b(""), _(!1), await m(), setTimeout(() => (0, T.focusA11y)(M), 350));
              } catch (e) {
                o.default.alert(c("error"), (0, R.storeErrorText)(e?.message ?? ""));
              } finally {
                D(!1);
              }
            }
          },
          L = {
            backgroundColor: i.surface,
            borderColor: i.border,
            borderWidth: 1,
            borderRadius: C.radius.lg,
            padding: C.spacing.md,
            marginTop: C.spacing.lg,
          };
        return l
          ? "escalated" === l.status
            ? (0, v.jsxs)(p.default, {
                ref: M,
                accessible: !0,
                style: [L, { borderColor: i.danger }],
                children: [
                  (0, v.jsx)(u.default, {
                    style: [C.typography.smallStrong, { color: i.danger }],
                    children: c("resultEscalated"),
                  }),
                  (0, v.jsx)(u.default, {
                    style: [C.typography.small, { color: i.textMuted, marginTop: 4 }],
                    children: c("resultEscalatedBody"),
                  }),
                  (0, v.jsx)(u.default, {
                    style: [C.typography.small, { color: i.text, marginTop: C.spacing.sm }],
                    children: c("resultEscalatedNext"),
                  }),
                ],
              })
            : "disputed" === l.status
              ? (0, v.jsxs)(p.default, {
                  ref: M,
                  accessible: !0,
                  style: [L, { borderColor: z }],
                  children: [
                    (0, v.jsx)(u.default, {
                      style: [C.typography.smallStrong, { color: z }],
                      children: c("resultDisputed"),
                    }),
                    (0, v.jsx)(u.default, {
                      style: [C.typography.small, { color: i.textMuted, marginTop: 4 }],
                      children: c("resultDisputedBody"),
                    }),
                    (0, v.jsxs)(p.default, {
                      style: { marginTop: C.spacing.sm, gap: 2 },
                      children: [
                        (0, v.jsx)(u.default, {
                          style: [C.typography.caption, { color: i.text }],
                          children: c("resultYouSaid", { score: B(l.my_entry) }),
                        }),
                        (0, v.jsx)(u.default, {
                          style: [C.typography.caption, { color: i.textMuted }],
                          children: c("resultTheySaid", { score: B(l.their_entry) }),
                        }),
                        (0, v.jsx)(u.default, {
                          style: [C.typography.caption, { color: i.textMuted }],
                          children: c("resultAttemptOf", { n: l.attempt, max: l.max_attempts }),
                        }),
                      ],
                    }),
                    (0, v.jsx)(N, { b: e, home: h, away: x, setHome: y, setAway: b }),
                    (0, v.jsx)(f.Button, {
                      title: c("resultResubmit"),
                      size: "lg",
                      fullWidth: !0,
                      loading: S,
                      disabled: "" === h || "" === x,
                      onPress: () => I(() => (0, k.submitBattleResult)(s, e.id, Number(h), Number(x))),
                      style: { marginTop: C.spacing.sm },
                    }),
                  ],
                })
              : W
                ? (0, v.jsxs)(p.default, {
                    ref: M,
                    accessible: !0,
                    style: L,
                    children: [
                      (0, v.jsx)(u.default, {
                        style: [C.typography.smallStrong, { color: i.text }],
                        children: l.my_entry
                          ? `${(0, w.formatNumber)(l.my_entry.home)}\u2013${(0, w.formatNumber)(l.my_entry.away)}`
                          : "\u2014",
                      }),
                      (0, v.jsx)(u.default, {
                        style: [C.typography.small, { color: i.textMuted, marginTop: 4 }],
                        children: c("resultWaiting", {
                          clan: l.submitted_team_id === e.from_team_id ? e.to_name : e.from_name,
                        }),
                      }),
                      j
                        ? (0, v.jsxs)(v.Fragment, {
                            children: [
                              (0, v.jsx)(N, { b: e, home: h, away: x, setHome: y, setAway: b }),
                              (0, v.jsx)(f.Button, {
                                title: c("resultResubmit"),
                                size: "lg",
                                fullWidth: !0,
                                loading: S,
                                disabled: "" === h || "" === x,
                                onPress: () =>
                                  I(() => (0, k.submitBattleResult)(s, e.id, Number(h), Number(x))),
                                style: { marginTop: C.spacing.sm },
                              }),
                            ],
                          })
                        : (0, v.jsx)(n.default, {
                            onPress: () => _(!0),
                            accessibilityRole: "button",
                            hitSlop: 10,
                            style: { alignItems: "center", marginTop: C.spacing.sm },
                            children: (0, v.jsx)(u.default, {
                              style: [C.typography.small, { color: i.accentText }],
                              children: c("resultChangeMine"),
                            }),
                          }),
                    ],
                  })
                : (0, v.jsxs)(p.default, {
                    ref: M,
                    accessible: !0,
                    style: L,
                    children: [
                      (0, v.jsx)(u.default, {
                        style: [C.typography.smallStrong, { color: i.text }],
                        children: c("resultTheirTurnTitle"),
                      }),
                      (0, v.jsx)(u.default, {
                        style: [C.typography.small, { color: i.textMuted, marginTop: 4 }],
                        children: c("resultBlindBody"),
                      }),
                      (0, v.jsx)(N, { b: e, home: h, away: x, setHome: y, setAway: b }),
                      (0, v.jsx)(f.Button, {
                        title: c("resultSubmitDifferent"),
                        size: "lg",
                        fullWidth: !0,
                        loading: S,
                        disabled: "" === h || "" === x,
                        onPress: () => I(() => (0, k.submitBattleResult)(s, e.id, Number(h), Number(x))),
                        style: { marginTop: C.spacing.sm },
                      }),
                    ],
                  })
          : A
            ? (0, v.jsxs)(p.default, {
                style: L,
                children: [
                  (0, v.jsx)(u.default, {
                    style: [C.typography.smallStrong, { color: i.text }],
                    children: c("resultSectionTitle"),
                  }),
                  (0, v.jsx)(N, { b: e, home: h, away: x, setHome: y, setAway: b }),
                  (0, v.jsx)(f.Button, {
                    title: c("submitResult"),
                    size: "lg",
                    fullWidth: !0,
                    loading: S,
                    disabled: "" === h || "" === x,
                    onPress: () => I(() => (0, k.submitBattleResult)(s, e.id, Number(h), Number(x))),
                    style: { marginTop: C.spacing.sm },
                  }),
                ],
              })
            : (0, v.jsx)(u.default, {
                style: [
                  C.typography.caption,
                  { color: i.textMuted, textAlign: "center", marginTop: C.spacing.md },
                ],
                children: c("resultOpensAfter"),
              });
      },
      E = ({ b: e, colors: t, t: l }) => {
        if ("completed" !== e.view_status)
          return (0, v.jsxs)(p.default, {
            style: [P.recapEmpty, { backgroundColor: t.surface, borderColor: t.border }],
            children: [
              (0, v.jsx)(h.Ionicons, { name: "image-outline", size: 30, color: t.textMuted }),
              (0, v.jsx)(u.default, {
                style: [
                  C.typography.body,
                  { color: t.textMuted, marginTop: C.spacing.md, textAlign: "center" },
                ],
                children: l("recapAfterMatch"),
              }),
            ],
          });
        const s = e.winner_team_id === e.from_team_id;
        return (0, v.jsxs)(p.default, {
          style: [P.recapCard, { backgroundColor: t.accentInk }],
          children: [
            (0, v.jsxs)(u.default, {
              style: [C.typography.caption, { color: t.accent, letterSpacing: 3, fontWeight: "800" }],
              children: ["PLAYORA \xb7 ", l("ladderTag").toUpperCase()],
            }),
            (0, v.jsxs)(p.default, {
              style: { flexDirection: "row", alignItems: "center", marginTop: C.spacing.lg },
              children: [
                (0, v.jsxs)(p.default, {
                  style: { flex: 1, alignItems: "center" },
                  children: [
                    (0, v.jsx)(x.ClanCrest, { name: e.from_name, color: e.from_color, size: 56 }),
                    (0, v.jsx)(u.default, {
                      style: [
                        C.typography.smallStrong,
                        { color: "#fff", marginTop: C.spacing.xs, textAlign: "center" },
                      ],
                      numberOfLines: 1,
                      children: e.from_name,
                    }),
                  ],
                }),
                (0, v.jsx)(u.default, {
                  maxFontSizeMultiplier: 1.3,
                  style: { color: t.accent, fontSize: 40, fontWeight: "900", marginHorizontal: C.spacing.md },
                  children: e.score,
                }),
                (0, v.jsxs)(p.default, {
                  style: { flex: 1, alignItems: "center" },
                  children: [
                    (0, v.jsx)(x.ClanCrest, { name: e.to_name, color: e.to_color, size: 56 }),
                    (0, v.jsx)(u.default, {
                      style: [
                        C.typography.smallStrong,
                        { color: "#fff", marginTop: C.spacing.xs, textAlign: "center" },
                      ],
                      numberOfLines: 1,
                      children: e.to_name,
                    }),
                  ],
                }),
              ],
            }),
            (0, v.jsx)(u.default, {
              style: [
                C.typography.small,
                { color: "rgba(255,255,255,0.75)", textAlign: "center", marginTop: C.spacing.lg },
              ],
              children: l("recapWinnerLine", {
                name: s ? e.from_name : e.to_name,
                pts: (0, w.formatNumber)(e.stake_pts),
              }),
            }),
            (0, v.jsxs)(u.default, {
              style: [
                C.typography.caption,
                { color: "rgba(255,255,255,0.5)", textAlign: "center", marginTop: 4 },
              ],
              children: [
                new Date(e.starts_at).toLocaleDateString(void 0, {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                }),
                " \xb7 ",
                e.venue_name,
              ],
            }),
          ],
        });
      },
      P = c.default.create({
        topRow: { flexDirection: "row", alignItems: "center" },
        segment: {
          flex: 1,
          flexDirection: "row",
          marginHorizontal: C.spacing.lg,
          marginTop: C.spacing.md,
          marginBottom: C.spacing.xs,
          borderRadius: C.radius.pill,
          borderWidth: c.default.hairlineWidth,
          padding: 4,
        },
        segBtn: { flex: 1, alignItems: "center", paddingVertical: C.spacing.sm, borderRadius: C.radius.pill },
        hero: { borderRadius: C.radius.lg, borderWidth: 1.5, padding: C.spacing.lg },
        derbyChip: { paddingHorizontal: C.spacing.sm, paddingVertical: 4, borderRadius: C.radius.pill },
        vs: { fontSize: 20, fontWeight: "900", fontStyle: "italic" },
        allTime: { fontSize: 8, fontWeight: "700", letterSpacing: 1.5, marginTop: 1 },
        clockCard: { borderRadius: C.radius.md, padding: C.spacing.md, marginTop: C.spacing.lg },
        clockDigits: { fontSize: 24, fontWeight: "900", fontVariant: ["tabular-nums"] },
        clockWarn: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 7,
          marginTop: C.spacing.sm,
        },
        clockTrack: { height: 5, borderRadius: 3, marginTop: C.spacing.sm, overflow: "hidden" },
        clockFill: { height: 5, borderRadius: 3, backgroundColor: "#E1487D" },
        stakeCard: { flex: 1, borderRadius: C.radius.lg, borderWidth: 1, padding: C.spacing.md, gap: 2 },
        cardLabel: { fontSize: 10, fontWeight: "800", letterSpacing: 1.5 },
        h2hCard: {
          borderRadius: C.radius.lg,
          borderWidth: c.default.hairlineWidth,
          padding: C.spacing.md,
          marginTop: C.spacing.md,
        },
        h2hRow: { flexDirection: "row", alignItems: "center", paddingVertical: 6, gap: C.spacing.sm },
        h2hChip: { paddingHorizontal: C.spacing.sm, paddingVertical: 3, borderRadius: C.radius.pill },
        fixtureLine: {
          borderTopWidth: c.default.hairlineWidth,
          paddingTop: C.spacing.sm,
          marginTop: C.spacing.xs,
        },
        declineBtn: {
          borderWidth: 1,
          borderRadius: C.radius.pill,
          alignItems: "center",
          paddingVertical: 14,
          marginTop: C.spacing.sm,
        },
        backBtn: {
          width: 34,
          height: 34,
          borderRadius: 17,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: c.default.hairlineWidth,
          opacity: 0.92,
        },
        recapEmpty: {
          borderRadius: C.radius.lg,
          borderWidth: c.default.hairlineWidth,
          alignItems: "center",
          padding: C.spacing.xxl,
        },
        recapCard: { borderRadius: 20, padding: C.spacing.xl },
      });
  },
  2495,
  [
    33, 15, 444, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 626, 1631, 1668, 630, 615, 616, 671, 1311,
    1616, 1669, 675, 1171, 2385, 625, 674, 13,
  ],
);
