__d(
  function (g, _r, i, a, m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, C.useAuth)(),
          { colors: c } = (0, T.useTheme)(),
          _ = (0, x.useRouter)(),
          L = (0, I.useT)(),
          [B, D] = (0, t.useState)([]),
          [E, H] = (0, t.useState)(!0),
          [O, F] = (0, t.useState)(null),
          [N, V] = (0, t.useState)(null),
          [$, q] = (0, t.useState)(""),
          [G, U] = (0, t.useState)([]),
          [J, K] = (0, t.useState)(""),
          [Q, X] = (0, t.useState)(!1),
          [ra, setRa] = (0, t.useState)(null),
          [rr, setRr] = (0, t.useState)(""),
          [busy, setBusy] = (0, t.useState)(null),
          [hid, setHid] = (0, t.useState)(0),
          logged = (0, t.useRef)(!1),
          reqId = (0, t.useRef)(0),
          gate = (0, G9.useRoleGate)(["admin"]),
          Y = (0, t.useCallback)(async () => {
            if (e) {
              F(null);
              try {
                // Access to the full intel roster is logged once per screen mount, not on every refresh.
                const [t, a] = await Promise.all([
                  (0, w.fetchAdminPlayerIntel)(e.id, { logAccess: !logged.current }),
                  (0, w.fetchMyPartitionStance)(e.id).catch(() => null),
                ]);
                ((logged.current = !0), D(t), setHid(a?.hidden?.players ?? 0));
              } catch (e) {
                F(e);
              } finally {
                H(!1);
              }
            }
          }, [e]);
        (0, t.useEffect)(() => {
          gate.ready && gate.allowed && Y();
        }, [Y, gate.ready, gate.allowed]);
        // Rating adjustments need a reason and confirm the before/after values.
        const Z = async (t, r, a) => {
          if (!e) return;
          const stp = v.SPORT_SCALES[t.sport].step,
            i = Math.round(100 * (t.rating + r * stp)) / 100;
          setBusy(`${t.user_id}:${t.sport}`);
          try {
            (await (0, w.adminAdjustRating)(e.id, t.user_id, t.sport, i, a),
              setRa(null),
              setRr(""),
              await Y(),
              o.default.alert(L("ratingAdjusted", { from: t.rating.toFixed(1), to: i.toFixed(1) }), ""));
          } catch (e) {
            o.default.alert(L("error"), (0, G9.classifyError)(e).message || L("error"));
          } finally {
            setBusy(null);
          }
        };
        if (gate.ready && !gate.allowed) return (0, P.jsx)(G9.GateScreen, { kind: "denied", onBack: () => _.back() });
        if (O) {
          const e = (0, G9.classifyError)(O);
          return (0, P.jsx)(G9.GateScreen, {
            kind: e.isAuth ? "denied" : "error",
            body: e.isAuth ? void 0 : e.message,
            onRetry: () => {
              (H(!0), Y());
            },
            onBack: () => _.back(),
          });
        }
        return (0, P.jsxs)(h.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: c.bg },
          children: [
            (0, P.jsxs)(y.default, {
              style: A.header,
              children: [
                (0, P.jsx)(s.default, {
                  onPress: () => _.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: L("back"),
                  style: [A.iconBtn, { backgroundColor: c.surface, borderColor: c.border }],
                  children: (0, P.jsx)(f.Ionicons, { name: (0, R.chevronBack)(), size: 22, color: c.text }),
                }),
                (0, P.jsxs)(y.default, {
                  style: { flex: 1, marginHorizontal: k.spacing.md },
                  children: [
                    (0, P.jsx)(u.default, {
                      style: [k.typography.caption, { color: c.accentText }],
                      children: L("adminPanel").toUpperCase(),
                    }),
                    (0, P.jsx)(u.default, {
                      style: [k.typography.h2, { color: c.text }],
                      children: L("adminPlayersTitle"),
                    }),
                  ],
                }),
              ],
            }),
            E || !gate.ready
              ? (0, P.jsx)(y.default, {
                  style: { flex: 1, alignItems: "center", justifyContent: "center" },
                  children: (0, P.jsx)(r.default, { color: c.accentText }),
                })
              : !1
                ? null
                : (0, P.jsxs)(n.default, {
                    contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
                    children: [
                      (0, P.jsx)(p.default, {
                        value: $,
                        onChangeText: (t) => {
                          q(t);
                          const a = ++reqId.current;
                          if (!e || t.trim().length < 2) return void U([]);
                          setTimeout(async () => {
                            if (a !== reqId.current) return;
                            try {
                              const r = await (0, w.adminFindPlayers)(e.id, t);
                              a === reqId.current && U(r);
                            } catch (e) {
                              a === reqId.current && (U([]), o.default.alert(L("error"), (0, G9.classifyError)(e).message));
                            }
                          }, 300);
                        },
                        placeholder: L("adminFindPlayer"),
                        placeholderTextColor: c.textMuted,
                        accessibilityLabel: L("adminFindPlayer"),
                        style: [
                          k.typography.body,
                          A.reason,
                          {
                            marginTop: 0,
                            color: c.text,
                            backgroundColor: c.surfaceAlt,
                            borderColor: c.border,
                          },
                        ],
                      }),
                      G.map((e) =>
                        (0, P.jsx)(
                          b.Card,
                          {
                            padding: "md",
                            style: { marginBottom: k.spacing.sm },
                            children: (0, P.jsxs)(y.default, {
                              style: A.row,
                              children: [
                                (0, P.jsxs)(y.default, {
                                  style: { flex: 1 },
                                  children: [
                                    (0, P.jsx)(u.default, {
                                      style: [k.typography.bodyStrong, { color: c.text }],
                                      numberOfLines: 1,
                                      children: e.display_name,
                                    }),
                                    (0, P.jsx)(u.default, {
                                      style: [k.typography.caption, { color: c.textMuted }],
                                      children:
                                        "female" === e.audience
                                          ? L("forkWomen")
                                          : "male" === e.audience
                                            ? L("forkMen")
                                            : "\u2014",
                                    }),
                                  ],
                                }),
                                (0, P.jsx)(s.default, {
                                  onPress: () => {
                                    (V(e), K(""));
                                  },
                                  accessibilityRole: "button",
                                  accessibilityLabel: L("adminCorrectWorld"),
                                  hitSlop: 8,
                                  style: [A.step, { backgroundColor: c.surfaceAlt, borderColor: c.border }],
                                  children: (0, P.jsx)(f.Ionicons, {
                                    name: "swap-horizontal",
                                    size: 15,
                                    color: c.accentText,
                                  }),
                                }),
                              ],
                            }),
                          },
                          e.user_id,
                        ),
                      ),
                      (0, P.jsx)(u.default, {
                        style: [
                          k.typography.small,
                          { color: c.textMuted, marginBottom: k.spacing.md, marginTop: k.spacing.md },
                        ],
                        children: L("adminPlayersHint"),
                      }),
                      hid > 0 &&
                        (0, P.jsxs)(y.default, {
                          style: {
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            borderWidth: 1,
                            borderRadius: 12,
                            padding: 10,
                            marginBottom: k.spacing.md,
                            backgroundColor: c.surfaceAlt,
                            borderColor: c.border,
                          },
                          children: [
                            (0, P.jsx)(f.Ionicons, { name: "eye-off-outline", size: 16, color: c.textMuted }),
                            (0, P.jsxs)(y.default, {
                              style: { flex: 1 },
                              children: [
                                (0, P.jsx)(u.default, {
                                  style: [k.typography.smallStrong, { color: c.text }],
                                  children: L("hiddenOtherWorld", { n: String(hid) }),
                                }),
                                (0, P.jsx)(u.default, {
                                  style: [k.typography.caption, { color: c.textMuted }],
                                  children: L("hiddenOtherWorldBody"),
                                }),
                              ],
                            }),
                          ],
                        }),
                      0 === B.length
                        ? (0, P.jsx)(j.EmptyState, {
                            icon: "people-outline",
                            title: L("noPlayerProfilesTitle"),
                            body: L("noPlayerProfilesBody"),
                          })
                        : B.map((e) =>
                            (0, P.jsxs)(
                              b.Card,
                              {
                                padding: "md",
                                style: { marginBottom: k.spacing.sm },
                                children: [
                                  (0, P.jsxs)(y.default, {
                                    style: A.row,
                                    children: [
                                      (0, P.jsx)(y.default, {
                                        style: [A.sportIcon, { backgroundColor: (0, S.sportColor)(e.sport) }],
                                        children: (0, P.jsx)(f.Ionicons, {
                                          name: S.sportIcon[e.sport],
                                          size: 14,
                                          color: "#fff",
                                        }),
                                      }),
                                      (0, P.jsxs)(y.default, {
                                        style: { flex: 1, marginHorizontal: k.spacing.sm },
                                        children: [
                                          (0, P.jsx)(u.default, {
                                            style: [k.typography.bodyStrong, { color: c.text }],
                                            numberOfLines: 1,
                                            children: e.display_name,
                                          }),
                                          (0, P.jsxs)(u.default, {
                                            style: [k.typography.caption, { color: c.textMuted }],
                                            children: [
                                              L(e.sport),
                                              " \xb7 ",
                                              L("confidenceLabel"),
                                              " ",
                                              (0, S.formatNumber)(Math.round(100 * e.confidence)),
                                              "%",
                                            ],
                                          }),
                                          e.audience &&
                                            (0, P.jsxs)(s.default, {
                                              onPress: () => {
                                                (V(e), K(""));
                                              },
                                              accessibilityRole: "button",
                                              accessibilityLabel: L("adminCorrectWorld"),
                                              hitSlop: 8,
                                              style: {
                                                flexDirection: "row",
                                                alignItems: "center",
                                                gap: 4,
                                                marginTop: 2,
                                              },
                                              children: [
                                                (0, P.jsx)(u.default, {
                                                  style: [k.typography.caption, { color: c.textMuted }],
                                                  children:
                                                    "female" === e.audience ? L("forkWomen") : L("forkMen"),
                                                }),
                                                (0, P.jsx)(f.Ionicons, {
                                                  name: "swap-horizontal",
                                                  size: 12,
                                                  color: c.accentText,
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, P.jsx)(s.default, {
                                        onPress: () => (setRa({ key: `${e.user_id}:${e.sport}`, dir: -1 }), setRr("")),
                                        disabled: !!busy,
                                        accessibilityRole: "button",
                                        accessibilityLabel: L("decreaseRating"),
                                        style: [
                                          A.step,
                                          { backgroundColor: c.surfaceAlt, borderColor: c.border },
                                        ],
                                        children: (0, P.jsx)(f.Ionicons, {
                                          name: "remove",
                                          size: 15,
                                          color: c.text,
                                        }),
                                      }),
                                      (0, P.jsx)(u.default, {
                                        style: [
                                          k.typography.h3,
                                          { color: c.text, minWidth: 44, textAlign: "center" },
                                        ],
                                        children: e.rating.toFixed(1),
                                      }),
                                      (0, P.jsx)(s.default, {
                                        onPress: () => (setRa({ key: `${e.user_id}:${e.sport}`, dir: 1 }), setRr("")),
                                        disabled: !!busy,
                                        accessibilityRole: "button",
                                        accessibilityLabel: L("increaseRating"),
                                        style: [
                                          A.step,
                                          { backgroundColor: c.surfaceAlt, borderColor: c.border },
                                        ],
                                        children: (0, P.jsx)(f.Ionicons, {
                                          name: "add",
                                          size: 15,
                                          color: c.text,
                                        }),
                                      }),
                                    ],
                                  }),
                                  ra?.key === `${e.user_id}:${e.sport}` &&
                                    (0, P.jsxs)(y.default, {
                                      style: { marginTop: k.spacing.sm },
                                      children: [
                                        (0, P.jsx)(u.default, {
                                          style: [k.typography.smallStrong, { color: c.text, marginBottom: 4 }],
                                          children: `${L("adjustRatingTitle")}: ${e.rating.toFixed(1)} \u2192 ${(Math.round(100 * (e.rating + ra.dir * v.SPORT_SCALES[e.sport].step)) / 100).toFixed(1)}`,
                                        }),
                                        (0, P.jsx)(p.default, {
                                          value: rr,
                                          onChangeText: setRr,
                                          placeholder: L("adjustRatingReason"),
                                          placeholderTextColor: c.textMuted,
                                          accessibilityLabel: L("adjustRatingReason"),
                                          maxLength: 200,
                                          style: [
                                            A.reason,
                                            { marginTop: 0, color: c.text, backgroundColor: c.surfaceAlt, borderColor: c.border },
                                          ],
                                        }),
                                        (0, P.jsxs)(y.default, {
                                          style: { flexDirection: "row", gap: k.spacing.sm, marginTop: k.spacing.sm },
                                          children: [
                                            (0, P.jsx)(W.Button, {
                                              title: L("cancel"),
                                              size: "sm",
                                              variant: "ghost",
                                              style: { flex: 1 },
                                              onPress: () => (setRa(null), setRr("")),
                                            }),
                                            (0, P.jsx)(W.Button, {
                                              title: L("adjustRatingConfirm"),
                                              size: "sm",
                                              style: { flex: 1 },
                                              loading: busy === `${e.user_id}:${e.sport}`,
                                              disabled: rr.trim().length < 3,
                                              onPress: () => Z(e, ra.dir, rr.trim()),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, P.jsxs)(y.default, {
                                    style: [A.scores, { borderTopColor: c.border }],
                                    children: [
                                      (0, P.jsx)(z, {
                                        label: L("scoreSkill"),
                                        value: e.scores.skill,
                                        colors: c,
                                      }),
                                      (0, P.jsx)(z, {
                                        label: L("scoreReliability"),
                                        value: e.scores.reliability,
                                        colors: c,
                                      }),
                                      (0, P.jsx)(z, {
                                        label: L("scoreAttendance"),
                                        value: e.scores.attendance,
                                        colors: c,
                                      }),
                                      (0, P.jsx)(z, {
                                        label: L("scoreTrust"),
                                        value: e.scores.trust,
                                        colors: c,
                                      }),
                                    ],
                                  }),
                                  (0, P.jsx)(u.default, {
                                    style: [
                                      k.typography.caption,
                                      { color: c.textMuted, marginTop: k.spacing.xs },
                                    ],
                                    children: L("votesLine", {
                                      below: e.votes.below,
                                      expected: e.votes.expected,
                                      above: e.votes.above,
                                      noshow: e.no_shows,
                                    }),
                                  }),
                                ],
                              },
                              `${e.user_id}-${e.sport}`,
                            ),
                          ),
                    ],
                  }),
            (0, P.jsx)(l.default, {
              visible: null != N,
              transparent: !0,
              animationType: "fade",
              onRequestClose: () => V(null),
              children: (0, P.jsx)(y.default, {
                style: A.backdrop,
                children: (0, P.jsxs)(y.default, {
                  style: [A.sheet, { backgroundColor: c.surface, borderColor: c.border }],
                  children: [
                    (0, P.jsx)(u.default, {
                      style: [k.typography.h2, { color: c.text }],
                      children: L("adminCorrectWorldTitle"),
                    }),
                    N &&
                      (0, P.jsxs)(u.default, {
                        style: [k.typography.body, { color: c.textMuted, marginTop: k.spacing.xs }],
                        children: [
                          N.display_name,
                          " \xb7 ",
                          "female" === N.audience ? L("forkWomen") : L("forkMen"),
                          " \u2192 ",
                          "female" === N.audience ? L("forkMen") : L("forkWomen"),
                        ],
                      }),
                    (0, P.jsx)(u.default, {
                      style: [k.typography.small, { color: c.textMuted, marginTop: k.spacing.sm }],
                      children: `${L("adminCorrectWorldBody")} ${L("adminCorrectWorldFollowsNote")}`,
                    }),
                    (0, P.jsx)(p.default, {
                      value: J,
                      onChangeText: K,
                      placeholder: L("adminCorrectWorldReason"),
                      placeholderTextColor: c.textMuted,
                      accessibilityLabel: L("adminCorrectWorldReason"),
                      style: [
                        k.typography.body,
                        A.reason,
                        { color: c.text, backgroundColor: c.surfaceAlt, borderColor: c.border },
                      ],
                    }),
                    (0, P.jsxs)(y.default, {
                      style: { flexDirection: "row", gap: k.spacing.sm, marginTop: k.spacing.lg },
                      children: [
                        (0, P.jsx)(y.default, {
                          style: { flex: 1 },
                          children: (0, P.jsx)(W.Button, {
                            title: L("cancel"),
                            variant: "ghost",
                            fullWidth: !0,
                            onPress: () => V(null),
                          }),
                        }),
                        (0, P.jsx)(y.default, {
                          style: { flex: 1 },
                          children: (0, P.jsx)(W.Button, {
                            title: L("adminCorrectWorldConfirm"),
                            variant: "danger",
                            fullWidth: !0,
                            loading: Q,
                            disabled: !J.trim(),
                            onPress: async () => {
                              if (!e || !N) return;
                              const t = "female" === N.audience ? "male" : "female";
                              X(!0);
                              try {
                                const a = N.display_name ?? N.full_name ?? "";
                                (await (0, w.adminCorrectAudience)(e.id, N.user_id, t, J.trim()),
                                  V(null),
                                  K(""),
                                  U([]),
                                  q(""),
                                  Y(),
                                  o.default.alert(L("playerMovedToOtherWorld", { name: a }), ""));
                              } catch (e) {
                                o.default.alert(
                                  L("error"),
                                  (0, M.storeErrorText)(e?.message ?? "") || L("error"),
                                );
                              } finally {
                                X(!1);
                              }
                            },
                          }),
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
    var t = _r(d[1]),
      r = e(_r(d[2])),
      o = e(_r(d[3])),
      l = e(_r(d[4])),
      s = e(_r(d[5])),
      n = e(_r(d[6])),
      c = e(_r(d[7])),
      u = e(_r(d[8])),
      p = e(_r(d[9])),
      y = e(_r(d[10])),
      h = _r(d[11]),
      f = _r(d[12]),
      x = _r(d[13]),
      b = _r(d[14]),
      j = _r(d[15]),
      C = _r(d[16]),
      T = _r(d[17]),
      k = _r(d[18]),
      w = _r(d[19]),
      W = _r(d[20]),
      v = _r(d[21]),
      S = _r(d[22]),
      I = _r(d[23]),
      G9 = _r(d[27]),
      R = _r(d[24]),
      M = _r(d[25]),
      P = _r(d[26]);
    const z = ({ label: e, value: t, colors: r }) =>
        (0, P.jsxs)(y.default, {
          style: { flex: 1, alignItems: "center" },
          children: [
            (0, P.jsx)(u.default, {
              style: [k.typography.bodyStrong, { color: t < 50 ? r.danger : r.text }],
              children: (0, S.formatNumber)(t),
            }),
            (0, P.jsx)(u.default, { style: [k.typography.caption, { color: r.textMuted }], children: e }),
          ],
        }),
      A = c.default.create({
        backdrop: {
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          alignItems: "center",
          justifyContent: "center",
          padding: k.spacing.lg,
        },
        sheet: {
          width: "100%",
          maxWidth: 420,
          borderRadius: k.radius.lg,
          borderWidth: 1,
          padding: k.spacing.lg,
        },
        reason: {
          borderWidth: 1,
          borderRadius: k.radius.md,
          padding: k.spacing.md,
          marginTop: k.spacing.md,
          minHeight: 48,
        },
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
        row: { flexDirection: "row", alignItems: "center" },
        sportIcon: { width: 28, height: 28, borderRadius: 9, alignItems: "center", justifyContent: "center" },
        step: {
          width: 30,
          height: 30,
          borderRadius: k.radius.sm,
          borderWidth: c.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        scores: {
          flexDirection: "row",
          marginTop: k.spacing.sm,
          paddingTop: k.spacing.sm,
          borderTopWidth: c.default.hairlineWidth,
        },
      });
  },
  1833,
  [
    33, 15, 461, 445, 467, 369, 281, 158, 146, 394, 273, 381, 1086, 20, 1623, 1627, 630, 615, 616, 671, 626,
    648, 1311, 675, 1171, 674, 13, 9001,
  ],
);
