__d(
  function (_g, _r, _i, a, _m, _e, _d) {
    var e = _r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, p.useLocalSearchParams)(),
          { user: o } = (0, b.useAuth)(),
          { colors: v } = (0, _.useTheme)(),
          T = (0, p.useRouter)(),
          C = (0, P.useT)(),
          [k, M] = (0, t.useState)(null),
          [L, $] = (0, t.useState)(null),
          [Y, X] = (0, t.useState)(!0),
          [Z, ee] = (0, t.useState)(!1),
          [te, ae] = (0, t.useState)(!1),
          [le, re] = (0, t.useState)(null),
          [ne, se] = (0, t.useState)(!1),
          [oe, ie] = (0, t.useState)(null),
          [ce, de] = (0, t.useState)(null),
          [ue, ge] = (0, t.useState)("all"),
          [pe, me] = (0, t.useState)(10),
          [xe, ye] = (0, t.useState)(""),
          [he, fe] = (0, t.useState)(!1),
          [je, be] = (0, t.useState)(!1),
          [Se, we] = (0, t.useState)(null),
          [ve, Te] = (0, t.useState)(""),
          [Ce, Ie] = (0, t.useState)(!1),
          [ke, Me] = (0, t.useState)(null),
          [Be, Pe] = (0, t.useState)(""),
          [Re, De] = (0, t.useState)(""),
          [ze, We] = (0, t.useState)(""),
          [Ae, Ne] = (0, t.useState)(!1),
          [Le, He] = (0, t.useState)([]),
          [Ee, $e] = (0, t.useState)(!1),
          [Oe, Ve] = (0, t.useState)(new Map()),
          [Ke, Fe] = (0, t.useState)(null),
          qe = (0, t.useCallback)(async () => {
            if (!e) return;
            const t = await (0, w.fetchOrganizerMatchScreen)(o?.id ?? "", e);
            (M(t.game),
              $(t.participants),
              He(t.candidates),
              Ve(new Map(t.intel.map((e) => [e.user_id, e]))),
              X(!1));
          }, [e, o?.id]);
        ((0, t.useEffect)(() => {
          qe();
        }, [qe]),
          (0, t.useEffect)(() => {
            if (!Ce || !o || !e) return void (Ce || Me(null));
            let t = !0;
            return (
              (0, w.fetchMatchActivity)(o.id, e)
                .then((e) => {
                  t && Me(e);
                })
                .catch(() => {
                  t && Me([]);
                }),
              () => {
                t = !1;
              }
            );
          }, [Ce, o, e, k]));
        const Ge = () => {
            if (!k) return;
            const e = new Date(k.starts_at),
              t = new Date(k.ends_at);
            (re(e),
              ie(60 * e.getHours() + e.getMinutes()),
              de(60 * t.getHours() + t.getMinutes()),
              ge(k.skill_level),
              me(k.max_players),
              ye(k.notes ?? ""),
              ae(!0));
          },
          Ue = async (e) => {
            ee(!0);
            try {
              (await e(), await qe());
            } catch (e) {
              r.default.alert(C("error"), (0, z.storeErrorText)(e?.message ?? "") || C("error"));
            } finally {
              ee(!1);
            }
          },
          Ye = async (e) => {
            $e(!0);
            try {
              (await e(), await qe());
            } catch (e) {
              r.default.alert(C("error"), (0, z.storeErrorText)(e?.message ?? "") || C("error"));
            } finally {
              $e(!1);
            }
          },
          Je = async (e) => {
            "copied" === (await (0, R.copyText)(e)) && (Ne(!0), setTimeout(() => Ne(!1), 1500));
          },
          Qe = !Y && !!k && !!o && k.organizer_id !== o.id;
        if (
          ((0, t.useEffect)(() => {
            Qe && k && T.replace(`/game/${k.id}`);
          }, [Qe, k, T]),
          Y)
        )
          return (0, W.jsx)(u.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: v.bg },
            children: (0, W.jsx)(l.default, { color: v.accentText }),
          });
        if (!k || !L)
          return (0, W.jsx)(u.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: v.bg },
            children: (0, W.jsx)(i.default, {
              style: [S.typography.body, { color: v.text }],
              children: C("error"),
            }),
          });
        const Xe = k.organizer_id === o?.id,
          Ze = "cancelled" === k.status,
          et = !Ze && new Date(k.ends_at).getTime() < Date.now(),
          tt = (0, B.sportColor)(k.sport);
        return (0, W.jsxs)(u.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: v.bg },
          children: [
            (0, W.jsxs)(d.default, {
              style: q.header,
              children: [
                (0, W.jsx)(n.default, {
                  onPress: () => T.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: C("back"),
                  style: [q.iconBtn, { backgroundColor: v.surface, borderColor: v.border }],
                  children: (0, W.jsx)(g.Ionicons, { name: (0, D.chevronBack)(), size: 22, color: v.text }),
                }),
                (0, W.jsx)(i.default, {
                  style: [S.typography.h3, { color: v.text, flex: 1, marginHorizontal: S.spacing.md }],
                  numberOfLines: 1,
                  children: C("manage"),
                }),
                !Ze && (0, W.jsx)(I.ShareMatchButton, { game: k, compact: !0 }),
                (0, W.jsx)(n.default, {
                  onPress: () => T.push(`/game/${k.id}`),
                  accessibilityRole: "button",
                  accessibilityLabel: C("viewMatch"),
                  style: [
                    q.iconBtn,
                    { backgroundColor: v.surface, borderColor: v.border, marginStart: S.spacing.sm },
                  ],
                  children: (0, W.jsx)(g.Ionicons, { name: "eye-outline", size: 20, color: v.text }),
                }),
              ],
            }),
            (0, W.jsxs)(s.default, {
              contentContainerStyle: { padding: S.spacing.lg, paddingBottom: S.spacing.xxxl },
              children: [
                (0, W.jsxs)(d.default, {
                  style: { flexDirection: "row", alignItems: "center", marginBottom: S.spacing.md },
                  children: [
                    (0, W.jsx)(d.default, {
                      style: [q.sportIcon, { backgroundColor: tt }],
                      children: (0, W.jsx)(g.Ionicons, {
                        name: B.sportIcon[k.sport],
                        size: 22,
                        color: "#fff",
                      }),
                    }),
                    (0, W.jsxs)(d.default, {
                      style: { flex: 1, marginHorizontal: S.spacing.sm },
                      children: [
                        (0, W.jsx)(i.default, {
                          style: [S.typography.h2, { color: v.text }],
                          numberOfLines: 2,
                          children: k.title,
                        }),
                        (0, W.jsxs)(i.default, {
                          style: [S.typography.small, { color: v.textMuted }],
                          children: [k.venue.name, " \xb7 ", k.venue.area],
                        }),
                      ],
                    }),
                    Ze
                      ? (0, W.jsx)(x.Badge, { label: C("tabCancelled"), tone: "danger" })
                      : et
                        ? (0, W.jsx)(x.Badge, { label: C("tabCompleted"), tone: "neutral" })
                        : k.registration_closed_at
                          ? (0, W.jsx)(x.Badge, { label: C("registrationClosedBadge"), tone: "warning" })
                          : (0, W.jsx)(x.Badge, { label: C("tabUpcoming"), tone: "success" }),
                  ],
                }),
                (0, W.jsxs)(m.Card, {
                  padding: "md",
                  children: [
                    (0, W.jsx)(F, {
                      label: C("fieldDate"),
                      value: (0, B.formatGameTime)(k.starts_at),
                      colors: v,
                    }),
                    (0, W.jsx)(F, {
                      label: C("fieldFormat"),
                      value: `${C(`fmt_${k.format}`)} \xb7 ${C("minutesN", { n: k.duration_minutes })}`,
                      colors: v,
                    }),
                    (0, W.jsx)(F, {
                      label: C("fieldSkill"),
                      value: "all" === k.skill_level ? C("openToAll") : C(k.skill_level),
                      colors: v,
                    }),
                    (0, W.jsx)(F, {
                      label: C("participantsLabel"),
                      value: `${(0, B.formatNumber)(k.bookings_count)} / ${(0, B.formatNumber)(k.max_players)}`,
                      colors: v,
                    }),
                    (0, W.jsx)(F, {
                      label: C("fieldPrice"),
                      value: (0, B.formatPrice)(Number(k.price_kwd)),
                      colors: v,
                    }),
                    (0, W.jsx)(F, {
                      label: C("fieldApproval"),
                      value: "manual" === k.approval_mode ? C("approvalManual") : C("approvalAuto"),
                      colors: v,
                      last: "public" === k.visibility,
                    }),
                    "private" === k.visibility &&
                      k.invite_code &&
                      (0, W.jsxs)(d.default, {
                        style: [q.codeRow, { borderTopColor: v.border }],
                        children: [
                          (0, W.jsxs)(d.default, {
                            style: { flex: 1 },
                            children: [
                              (0, W.jsx)(i.default, {
                                style: [S.typography.small, { color: v.textMuted }],
                                children: C("inviteCodeLabel"),
                              }),
                              (0, W.jsx)(i.default, {
                                style: [S.typography.h3, { color: v.text, letterSpacing: 2 }],
                                children: k.invite_code,
                              }),
                            ],
                          }),
                          (0, W.jsx)(y.Button, {
                            title: C(Ae ? "copied" : "copyCode"),
                            variant: "secondary",
                            size: "sm",
                            onPress: () => Je(k.invite_code),
                            leftIcon: (0, W.jsx)(g.Ionicons, {
                              name: Ae ? "checkmark" : "copy-outline",
                              size: 15,
                              color: v.text,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                Xe &&
                  !Ze &&
                  !et &&
                  (0, W.jsxs)(d.default, {
                    style: { flexDirection: "row", gap: S.spacing.sm, marginTop: S.spacing.md },
                    children: [
                      (0, W.jsx)(y.Button, {
                        title: C("editMatchTitle"),
                        variant: "secondary",
                        onPress: () => (te ? ae(!1) : Ge()),
                        leftIcon: (0, W.jsx)(g.Ionicons, { name: "create-outline", size: 16, color: v.text }),
                        style: { flex: 1 },
                      }),
                      (0, W.jsx)(y.Button, {
                        title: C("cancelMatch"),
                        variant: "danger",
                        onPress: () => fe((e) => !e),
                        leftIcon: (0, W.jsx)(g.Ionicons, {
                          name: "close-circle-outline",
                          size: 16,
                          color: "#fff",
                        }),
                        style: { flex: 1 },
                      }),
                    ],
                  }),
                Xe &&
                  !Ze &&
                  !et &&
                  (0, W.jsx)(y.Button, {
                    title: C("squadConfirmAction"),
                    variant: "secondary",
                    onPress: () => T.push(`/squad/${k.id}`),
                    leftIcon: (0, W.jsx)(g.Ionicons, { name: "people-outline", size: 16, color: v.text }),
                    style: { marginTop: S.spacing.sm },
                    fullWidth: !0,
                  }),
                Xe &&
                  !Ze &&
                  !et &&
                  (k.registration_closed_at
                    ? (0, W.jsx)(y.Button, {
                        title: C("reopenRegistration"),
                        variant: "secondary",
                        onPress: () => Ue(() => (0, w.reopenRegistration)(o.id, k.id)),
                        leftIcon: (0, W.jsx)(g.Ionicons, {
                          name: "lock-open-outline",
                          size: 16,
                          color: v.text,
                        }),
                        style: { marginTop: S.spacing.sm },
                        fullWidth: !0,
                      })
                    : je
                      ? (0, W.jsxs)(m.Card, {
                          style: { marginTop: S.spacing.sm },
                          children: [
                            (0, W.jsx)(i.default, {
                              style: [S.typography.small, { color: v.textMuted }],
                              children: C("closeRegConfirm"),
                            }),
                            (0, W.jsxs)(d.default, {
                              style: { flexDirection: "row", gap: S.spacing.sm, marginTop: S.spacing.sm },
                              children: [
                                (0, W.jsx)(y.Button, {
                                  title: C("back"),
                                  variant: "ghost",
                                  onPress: () => be(!1),
                                  style: { flex: 1 },
                                }),
                                (0, W.jsx)(y.Button, {
                                  title: C("closeRegistration"),
                                  onPress: () => {
                                    (be(!1), Ue(() => (0, w.closeRegistration)(o.id, k.id)));
                                  },
                                  style: { flex: 1 },
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, W.jsx)(y.Button, {
                          title: C("closeRegistration"),
                          variant: "secondary",
                          onPress: () => be(!0),
                          leftIcon: (0, W.jsx)(g.Ionicons, {
                            name: "lock-closed-outline",
                            size: 16,
                            color: v.text,
                          }),
                          style: { marginTop: S.spacing.sm },
                          fullWidth: !0,
                        })),
                Xe &&
                  et &&
                  !Ze &&
                  (0, W.jsxs)(m.Card, {
                    style: { marginTop: S.spacing.md },
                    children: [
                      (0, W.jsx)(i.default, {
                        style: [S.typography.smallStrong, { color: v.text }],
                        children: C("finalScoreTitle"),
                      }),
                      k.score_submitted_at
                        ? (0, W.jsxs)(i.default, {
                            style: [
                              S.typography.h1,
                              { color: v.text, textAlign: "center", marginTop: S.spacing.sm },
                            ],
                            children: [
                              (0, B.formatNumber)(k.score_home ?? 0),
                              "\u2013",
                              (0, B.formatNumber)(k.score_away ?? 0),
                            ],
                          })
                        : (0, W.jsxs)(W.Fragment, {
                            children: [
                              (0, W.jsx)(d.default, {
                                style: { flexDirection: "row", gap: S.spacing.sm, marginTop: S.spacing.sm },
                                children: [
                                  [Be, Pe, C("teamALabel")],
                                  [Re, De, C("teamBLabel")],
                                ].map(([e, t, l]) =>
                                  (0, W.jsxs)(
                                    d.default,
                                    {
                                      style: { flex: 1 },
                                      children: [
                                        (0, W.jsx)(i.default, {
                                          style: [
                                            S.typography.caption,
                                            { color: v.textMuted, textAlign: "center" },
                                          ],
                                          children: l,
                                        }),
                                        (0, W.jsx)(c.default, {
                                          value: e,
                                          onChangeText: (e) => t(e.replace(/[^0-9]/g, "").slice(0, 2)),
                                          keyboardType: "number-pad",
                                          inputMode: "numeric",
                                          placeholder: "0",
                                          placeholderTextColor: v.textMuted,
                                          style: [
                                            q.scoreInput,
                                            {
                                              color: v.text,
                                              backgroundColor: v.surfaceAlt,
                                              borderColor: v.border,
                                            },
                                          ],
                                        }),
                                      ],
                                    },
                                    l,
                                  ),
                                ),
                              }),
                              "" !== Be &&
                                "" !== Re &&
                                (0, W.jsx)(i.default, {
                                  style: [
                                    S.typography.caption,
                                    {
                                      color: v.textMuted,
                                      textAlign: "center",
                                      marginTop: S.spacing.sm,
                                      fontStyle: "italic",
                                    },
                                  ],
                                  children:
                                    Number(Be) === Number(Re)
                                      ? C("scoreDraw")
                                      : Number(Be) > Number(Re)
                                        ? C("scoreTeamAWins")
                                        : C("scoreTeamBWins"),
                                }),
                              (0, W.jsx)(y.Button, {
                                title: C("submitScoreCta"),
                                size: "lg",
                                fullWidth: !0,
                                disabled: "" === Be || "" === Re,
                                onPress: () =>
                                  Ue(() => (0, w.submitMatchScore)(o.id, k.id, Number(Be), Number(Re))),
                                style: { marginTop: S.spacing.sm },
                              }),
                              (0, W.jsx)(i.default, {
                                style: [
                                  S.typography.caption,
                                  { color: v.textMuted, textAlign: "center", marginTop: S.spacing.xs },
                                ],
                                children: C("scoreCannotBeUndone"),
                              }),
                            ],
                          }),
                    ],
                  }),
                Xe &&
                  !Ze &&
                  !et &&
                  (0, W.jsx)(O, {
                    game: k,
                    candidates: Le,
                    busy: Ee,
                    colors: v,
                    t: C,
                    onActivate: (e) => Ye(() => (0, w.activateNeedPlayer)(k.id, o.id, { radius_km: e })),
                    onDeactivate: () => Ye(() => (0, w.deactivateNeedPlayer)(k.id, o.id)),
                    onRadius: (e) => Ye(() => (0, w.updateNeedPlayer)(k.id, o.id, { radius_km: e })),
                  }),
                Xe &&
                  !Ze &&
                  !et &&
                  o &&
                  (0, W.jsx)(G, {
                    gameId: k.id,
                    userId: o.id,
                    hasOpenSlots: k.bookings_count < k.max_players,
                    colors: v,
                    t: C,
                  }),
                Xe && !Ze && !et && o && (0, W.jsx)(U, { gameId: k.id, userId: o.id, colors: v, t: C }),
                Xe && o && (0, W.jsx)(J, { gameId: k.id, userId: o.id, colors: v, t: C }),
                te &&
                  (0, W.jsxs)(m.Card, {
                    style: { marginTop: S.spacing.md },
                    children: [
                      (0, W.jsx)(i.default, {
                        style: [S.typography.h3, { color: v.text, marginBottom: S.spacing.sm }],
                        children: C("editMatchTitle"),
                      }),
                      (0, W.jsxs)(n.default, {
                        onPress: () => se((e) => !e),
                        style: [q.field, { backgroundColor: v.surface, borderColor: v.border }],
                        children: [
                          (0, W.jsx)(g.Ionicons, { name: "calendar-outline", size: 18, color: v.textMuted }),
                          (0, W.jsx)(i.default, {
                            style: [
                              S.typography.body,
                              { color: v.text, flex: 1, marginHorizontal: S.spacing.sm },
                            ],
                            children: le
                              ? (0, B.formatGameTime)(le.toISOString()).split("\xb7")[0].trim()
                              : C("fieldDate"),
                          }),
                          (0, W.jsx)(g.Ionicons, {
                            name: ne ? "chevron-up" : "chevron-down",
                            size: 18,
                            color: v.textMuted,
                          }),
                        ],
                      }),
                      ne &&
                        (0, W.jsx)(d.default, {
                          style: { marginTop: S.spacing.xs },
                          children: (0, W.jsx)(f.DatePicker, {
                            value: le,
                            onChange: (e) => {
                              (re(e), se(!1));
                            },
                          }),
                        }),
                      (0, W.jsxs)(d.default, {
                        style: { flexDirection: "row", gap: S.spacing.md, marginTop: S.spacing.md },
                        children: [
                          (0, W.jsx)(d.default, {
                            style: { flex: 1 },
                            children: (0, W.jsx)(j.TimePicker, {
                              label: C("fieldStartTime"),
                              value: oe,
                              onChange: ie,
                            }),
                          }),
                          (0, W.jsx)(d.default, {
                            style: { flex: 1 },
                            children: (0, W.jsx)(j.TimePicker, {
                              label: C("fieldEndTime"),
                              value: ce,
                              onChange: de,
                            }),
                          }),
                        ],
                      }),
                      (0, W.jsx)(i.default, {
                        style: [S.typography.smallStrong, { color: v.textMuted, marginBottom: S.spacing.xs }],
                        children: C("fieldSkill"),
                      }),
                      (0, W.jsx)(d.default, {
                        style: q.chipRow,
                        children: A.map((e) => {
                          const t = ue === e;
                          return (0, W.jsx)(
                            n.default,
                            {
                              onPress: () => ge(e),
                              style: [
                                q.chip,
                                {
                                  backgroundColor: t ? v.accent : v.surface,
                                  borderColor: t ? v.accent : v.border,
                                },
                              ],
                              children: (0, W.jsx)(i.default, {
                                style: [S.typography.smallStrong, { color: t ? "#fff" : v.text }],
                                children: C("all" === e ? "openToAll" : e),
                              }),
                            },
                            e,
                          );
                        }),
                      }),
                      (0, W.jsxs)(d.default, {
                        style: [q.capRow, { marginTop: S.spacing.md }],
                        children: [
                          (0, W.jsx)(i.default, {
                            style: [S.typography.smallStrong, { color: v.textMuted, flex: 1 }],
                            children: C("fieldPlayers"),
                          }),
                          (0, W.jsx)(n.default, {
                            onPress: () => me(Math.max(k.bookings_count || 2, pe - 1)),
                            style: [q.stepBtn, { backgroundColor: v.surfaceAlt, borderColor: v.border }],
                            children: (0, W.jsx)(g.Ionicons, { name: "remove", size: 18, color: v.text }),
                          }),
                          (0, W.jsx)(i.default, {
                            style: [S.typography.h3, { color: v.text, minWidth: 40, textAlign: "center" }],
                            children: (0, B.formatNumber)(pe),
                          }),
                          (0, W.jsx)(n.default, {
                            onPress: () => me(Math.min(40, pe + 1)),
                            style: [q.stepBtn, { backgroundColor: v.surfaceAlt, borderColor: v.border }],
                            children: (0, W.jsx)(g.Ionicons, { name: "add", size: 18, color: v.text }),
                          }),
                        ],
                      }),
                      (0, W.jsx)(d.default, {
                        style: { marginTop: S.spacing.md },
                        children: (0, W.jsx)(h.Input, {
                          label: C("fieldDescription"),
                          value: xe,
                          onChangeText: ye,
                          multiline: !0,
                          numberOfLines: 3,
                          maxLength: 500,
                          style: { minHeight: 70, textAlignVertical: "top" },
                        }),
                      }),
                      (0, W.jsx)(y.Button, {
                        title: C("saveChanges"),
                        fullWidth: !0,
                        loading: Z,
                        onPress: async () => {
                          if (!k || !o || !le || null == oe || null == ce) return;
                          if (ce <= oe) return r.default.alert(C("error"), C("fieldEndTime"));
                          const e = (e) => {
                            const t = new Date(le);
                            return (t.setHours(Math.floor(e / 60), e % 60, 0, 0), t.toISOString());
                          };
                          ee(!0);
                          try {
                            (await (0, w.updateMatch)(k.id, o.id, {
                              starts_at: e(oe),
                              ends_at: e(ce),
                              skill_level: ue,
                              max_players: pe,
                              notes: xe,
                            }),
                              ae(!1),
                              r.default.alert(C("changesSaved"), ""),
                              await qe());
                          } catch (e) {
                            r.default.alert(
                              C("error"),
                              (0, z.storeErrorText)(e?.message ?? "") || C("error"),
                            );
                          } finally {
                            ee(!1);
                          }
                        },
                      }),
                    ],
                  }),
                he &&
                  (0, W.jsxs)(m.Card, {
                    style: { marginTop: S.spacing.md, borderColor: v.danger },
                    children: [
                      (0, W.jsx)(i.default, {
                        style: [S.typography.h3, { color: v.text }],
                        children: C("cancelMatchTitle"),
                      }),
                      (0, W.jsx)(i.default, {
                        style: [S.typography.small, { color: v.textMuted, marginVertical: S.spacing.sm }],
                        children: C("cancelMatchBody"),
                      }),
                      (0, W.jsx)(h.Input, {
                        label: C("cancelReasonLabel"),
                        value: ze,
                        onChangeText: We,
                        placeholder: C("cancelReasonPlaceholder"),
                        maxLength: 200,
                      }),
                      (0, W.jsxs)(d.default, {
                        style: { flexDirection: "row", gap: S.spacing.sm },
                        children: [
                          (0, W.jsx)(y.Button, {
                            title: C("keepMatch"),
                            variant: "secondary",
                            onPress: () => fe(!1),
                            style: { flex: 1 },
                          }),
                          (0, W.jsx)(y.Button, {
                            title: C("confirmCancelMatch"),
                            variant: "danger",
                            loading: Z,
                            onPress: async () => {
                              if (k && o) {
                                ee(!0);
                                try {
                                  (await (0, w.cancelMatch)(k.id, o.id, ze), fe(!1), await qe());
                                } catch (e) {
                                  r.default.alert(
                                    C("error"),
                                    (0, z.storeErrorText)(e?.message ?? "") || C("error"),
                                  );
                                } finally {
                                  ee(!1);
                                }
                              }
                            },
                            style: { flex: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                L.pending.length > 0 &&
                  (0, W.jsx)(K, {
                    title: `${C("pendingLabel")} \xb7 ${(0, B.formatNumber)(L.pending.length)}`,
                    colors: v,
                    children: L.pending.map((e) => {
                      const t = Oe.get(e.user_id);
                      return (0, W.jsxs)(
                        d.default,
                        {
                          children: [
                            (0, W.jsxs)(N, {
                              b: e,
                              colors: v,
                              children: [
                                (0, W.jsx)(y.Button, {
                                  title: C("approve"),
                                  size: "sm",
                                  onPress: () => Ue(() => (0, w.approveParticipant)(k.id, o.id, e.id)),
                                }),
                                (0, W.jsx)(y.Button, {
                                  title: C("reject"),
                                  size: "sm",
                                  variant: "secondary",
                                  onPress: () => Ue(() => (0, w.rejectParticipant)(k.id, o.id, e.id)),
                                }),
                              ],
                            }),
                            t &&
                              (0, W.jsxs)(d.default, {
                                style: q.intelRow,
                                children: [
                                  t.compat_class_key && (0, W.jsx)(V, { classKey: t.compat_class_key, t: C }),
                                  (0, W.jsx)(x.Badge, {
                                    label: t.verified ? C("intelVerified") : C("intelUnverified"),
                                    tone: t.verified ? "success" : "neutral",
                                  }),
                                  (0, W.jsx)(x.Badge, { label: C(t.skill_category_key), tone: "accent" }),
                                  (0, W.jsx)(x.Badge, {
                                    label: C(t.reliability_category_key),
                                    tone: "relRisky" === t.reliability_category_key ? "danger" : "neutral",
                                  }),
                                  (0, W.jsx)(x.Badge, {
                                    label: C(t.attendance_category_key),
                                    tone: "neutral",
                                  }),
                                  (0, W.jsx)(x.Badge, {
                                    label: `${(0, B.formatNumber)(t.completed_matches)} ${C("matchesPlayedLabel")}`,
                                    tone: "neutral",
                                  }),
                                ],
                              }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  }),
                (0, W.jsx)(K, {
                  title: `${C("confirmedLabel")} \xb7 ${(0, B.formatNumber)(L.confirmed.length)}`,
                  colors: v,
                  children:
                    0 === L.confirmed.length
                      ? (0, W.jsx)(i.default, {
                          style: [S.typography.small, { color: v.textMuted, padding: S.spacing.sm }],
                          children: C("noParticipantsYet"),
                        })
                      : L.confirmed.map((e) =>
                          (0, W.jsxs)(
                            N,
                            {
                              b: e,
                              colors: v,
                              children: [
                                et
                                  ? (0, W.jsxs)(W.Fragment, {
                                      children: [
                                        (0, W.jsx)(E, {
                                          active: "attended" === e.attendance,
                                          label: C("attended"),
                                          tone: "success",
                                          colors: v,
                                          onPress: () =>
                                            Ue(() =>
                                              (0, w.setAttendance)(
                                                k.id,
                                                o.id,
                                                e.id,
                                                "attended" === e.attendance ? null : "attended",
                                              ),
                                            ),
                                        }),
                                        (0, W.jsx)(E, {
                                          active: "no_show" === e.attendance,
                                          label: C("noShow"),
                                          tone: "danger",
                                          colors: v,
                                          onPress: () =>
                                            Ue(() =>
                                              (0, w.setAttendance)(
                                                k.id,
                                                o.id,
                                                e.id,
                                                "no_show" === e.attendance ? null : "no_show",
                                              ),
                                            ),
                                        }),
                                      ],
                                    })
                                  : (0, W.jsx)(x.Badge, { label: C("confirmedLabel"), tone: "success" }),
                                (0, W.jsx)(n.default, {
                                  onPress: () => Fe({ id: e.user_id, name: e.display_name ?? "Player" }),
                                  hitSlop: 8,
                                  accessibilityLabel: C("cardPlayer"),
                                  style: { marginStart: S.spacing.sm },
                                  children: (0, W.jsx)(g.Ionicons, {
                                    name: "flag-outline",
                                    size: 18,
                                    color: v.textMuted,
                                  }),
                                }),
                                Xe &&
                                  !et &&
                                  !Ze &&
                                  e.user_id !== k.organizer_id &&
                                  (0, W.jsx)(n.default, {
                                    onPress: () => {
                                      (Te(""), we({ id: e.user_id, name: e.display_name ?? "Player" }));
                                    },
                                    hitSlop: 8,
                                    accessibilityLabel: C("removePlayer"),
                                    style: { marginStart: S.spacing.sm },
                                    children: (0, W.jsx)(g.Ionicons, {
                                      name: "person-remove-outline",
                                      size: 18,
                                      color: v.danger,
                                    }),
                                  }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                }),
                Xe &&
                  Se &&
                  o &&
                  (0, W.jsxs)(m.Card, {
                    style: { marginTop: S.spacing.md, borderColor: v.danger, borderWidth: 1 },
                    children: [
                      (0, W.jsx)(i.default, {
                        style: [S.typography.smallStrong, { color: v.text }],
                        children: C("removePlayerTitle", { name: Se.name }),
                      }),
                      (0, W.jsx)(i.default, {
                        style: [S.typography.small, { color: v.textMuted, marginTop: 4 }],
                        children: C("removePlayerBody"),
                      }),
                      (0, W.jsx)(c.default, {
                        value: ve,
                        onChangeText: Te,
                        placeholder: C("removeNotePlaceholder"),
                        placeholderTextColor: v.textMuted,
                        maxLength: 200,
                        multiline: !0,
                        style: [
                          q.kickNote,
                          { color: v.text, backgroundColor: v.surfaceAlt, borderColor: v.border },
                        ],
                      }),
                      (0, W.jsxs)(d.default, {
                        style: { flexDirection: "row", gap: S.spacing.sm, marginTop: S.spacing.sm },
                        children: [
                          (0, W.jsx)(y.Button, {
                            title: C("back"),
                            variant: "ghost",
                            onPress: () => we(null),
                            style: { flex: 1 },
                          }),
                          (0, W.jsx)(y.Button, {
                            title: C("removePlayer"),
                            variant: "danger",
                            loading: Z,
                            onPress: () => {
                              const e = Se;
                              (we(null), Ue(() => (0, w.kickPlayer)(o.id, k.id, e.id, ve || void 0)));
                            },
                            style: { flex: 1 },
                          }),
                        ],
                      }),
                    ],
                  }),
                Xe &&
                  Ke &&
                  o &&
                  (0, W.jsx)(Q, {
                    target: Ke,
                    gameId: k.id,
                    issuerId: o.id,
                    colors: v,
                    t: C,
                    onClose: () => Fe(null),
                    onDone: () => {
                      (Fe(null), qe());
                    },
                  }),
                L.reserved.length > 0 &&
                  (0, W.jsx)(K, {
                    title: `${C("reservedLabel")} \xb7 ${(0, B.formatNumber)(L.reserved.length)}`,
                    colors: v,
                    children: L.reserved.map((e) => {
                      const t = e.reserved_until
                        ? Math.max(0, Math.round((new Date(e.reserved_until).getTime() - Date.now()) / 6e4))
                        : 0;
                      return (0, W.jsx)(
                        N,
                        {
                          b: e,
                          colors: v,
                          children: (0, W.jsx)(x.Badge, {
                            label: C("reservedHold", { minutes: t }),
                            tone: "warning",
                          }),
                        },
                        e.id,
                      );
                    }),
                  }),
                L.waitlist.length > 0 &&
                  (0, W.jsx)(K, {
                    title: `${C("waitlistLabel")} \xb7 ${(0, B.formatNumber)(L.waitlist.length)}`,
                    colors: v,
                    children: L.waitlist.map((e, t) =>
                      (0, W.jsxs)(
                        N,
                        {
                          b: e,
                          colors: v,
                          index: t + 1,
                          children: [
                            (0, W.jsx)(i.default, {
                              style: [S.typography.small, { color: v.textMuted }],
                              children: C("waitlistPosition", { n: t + 1 }),
                            }),
                            Xe &&
                              !et &&
                              !Ze &&
                              (0, W.jsx)(n.default, {
                                onPress: () => {
                                  (Te(""), we({ id: e.user_id, name: e.display_name ?? "Player" }));
                                },
                                hitSlop: 8,
                                accessibilityLabel: C("removePlayer"),
                                style: { marginStart: S.spacing.sm },
                                children: (0, W.jsx)(g.Ionicons, {
                                  name: "person-remove-outline",
                                  size: 18,
                                  color: v.danger,
                                }),
                              }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                Xe &&
                  (0, W.jsxs)(d.default, {
                    style: { marginTop: S.spacing.xl },
                    children: [
                      (0, W.jsxs)(n.default, {
                        onPress: () => Ie((e) => !e),
                        accessibilityRole: "button",
                        accessibilityState: { expanded: Ce },
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: S.spacing.sm,
                          paddingVertical: S.spacing.xs,
                        },
                        children: [
                          (0, W.jsx)(i.default, {
                            style: [S.typography.h3, { color: v.text, flex: 1 }],
                            children: C("activityLogTitle"),
                          }),
                          (0, W.jsx)(g.Ionicons, {
                            name: Ce ? "chevron-up" : "chevron-down",
                            size: 18,
                            color: v.textMuted,
                          }),
                        ],
                      }),
                      Ce &&
                        (0, W.jsx)(m.Card, {
                          padding: "sm",
                          children:
                            null === ke
                              ? [0, 1, 2].map((e) =>
                                  (0, W.jsxs)(
                                    d.default,
                                    {
                                      style: [q.logRow, { borderTopColor: v.border, opacity: 0.5 }],
                                      children: [
                                        (0, W.jsx)(d.default, {
                                          style: [
                                            q.logDot,
                                            q.logDotSkeleton,
                                            { backgroundColor: v.surfaceAlt },
                                          ],
                                        }),
                                        (0, W.jsxs)(d.default, {
                                          style: { flex: 1, gap: 6 },
                                          children: [
                                            (0, W.jsx)(d.default, {
                                              style: {
                                                height: 10,
                                                width: "55%",
                                                borderRadius: 4,
                                                backgroundColor: v.surfaceAlt,
                                              },
                                            }),
                                            (0, W.jsx)(d.default, {
                                              style: {
                                                height: 8,
                                                width: "30%",
                                                borderRadius: 4,
                                                backgroundColor: v.surfaceAlt,
                                              },
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e,
                                  ),
                                )
                              : 0 === ke.length
                                ? (0, W.jsx)(i.default, {
                                    style: [
                                      S.typography.small,
                                      { color: v.textMuted, padding: S.spacing.sm },
                                    ],
                                    children: C("noActivityYet"),
                                  })
                                : ke.map((e) => (0, W.jsx)(H, { e: e, colors: v, t: C }, e.id)),
                        }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }));
    var t = _r(_d[1]),
      l = e(_r(_d[2])),
      r = e(_r(_d[3])),
      n = e(_r(_d[4])),
      s = e(_r(_d[5])),
      o = e(_r(_d[6])),
      i = e(_r(_d[7])),
      c = e(_r(_d[8])),
      d = e(_r(_d[9])),
      u = _r(_d[10]),
      g = _r(_d[11]),
      p = _r(_d[12]),
      m = _r(_d[13]),
      x = _r(_d[14]),
      y = _r(_d[15]),
      h = _r(_d[16]),
      f = _r(_d[17]),
      j = _r(_d[18]),
      b = _r(_d[19]),
      _ = _r(_d[20]),
      S = _r(_d[21]),
      w = _r(_d[22]),
      v = _r(_d[23]),
      T = _r(_d[24]),
      C = _r(_d[25]),
      I = _r(_d[26]),
      k = _r(_d[27]),
      M = _r(_d[28]),
      B = _r(_d[29]),
      P = _r(_d[30]),
      R = _r(_d[31]),
      D = _r(_d[32]),
      z = _r(_d[33]),
      W = _r(_d[34]);
    const A = ["beginner", "intermediate", "advanced", "all"];
    const N = ({ b: e, colors: t, children: l, index: r }) => {
        return (0, W.jsxs)(d.default, {
          style: [q.partRow, { borderTopColor: t.border }],
          children: [
            (0, W.jsx)(d.default, {
              style: [q.avatar, { backgroundColor: t.surfaceAlt, borderColor: t.border }],
              children: (0, W.jsx)(i.default, {
                style: [S.typography.smallStrong, { color: t.text }],
                children:
                  ((n = e.display_name ?? "P"),
                  n
                    .split(" ")
                    .map((e) => e[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()),
              }),
            }),
            (0, W.jsx)(i.default, {
              style: [S.typography.body, { color: t.text, flex: 1, marginHorizontal: S.spacing.sm }],
              numberOfLines: 1,
              children: e.display_name ?? "Player",
            }),
            (0, W.jsx)(d.default, {
              style: { flexDirection: "row", alignItems: "center", gap: S.spacing.xs },
              children: l,
            }),
          ],
        });
        var n;
      },
      L = {
        player_removed: { icon: "person-remove-outline", labelKey: "actPlayerRemoved", tone: "danger" },
        registration_closed: {
          icon: "lock-closed-outline",
          labelKey: "actRegistrationClosed",
          tone: "muted",
        },
        registration_reopened: {
          icon: "lock-open-outline",
          labelKey: "actRegistrationReopened",
          tone: "success",
        },
        squad_window_opened: { icon: "time-outline", labelKey: "actSquadWindowOpened", tone: "accent" },
        squad_window_closed: {
          icon: "checkmark-circle-outline",
          labelKey: "actSquadWindowClosed",
          tone: "success",
        },
        score_submitted: { icon: "trophy-outline", labelKey: "actScoreSubmitted", tone: "accent" },
      },
      H = ({ e: e, colors: t, t: l }) => {
        const r = L[e.action],
          n =
            "danger" === r.tone
              ? t.danger
              : "success" === r.tone
                ? t.success
                : "accent" === r.tone
                  ? t.accentText
                  : t.textMuted;
        return (0, W.jsxs)(d.default, {
          style: [q.logRow, { borderTopColor: t.border }],
          children: [
            (0, W.jsx)(g.Ionicons, { name: r.icon, size: 16, color: n, style: q.logDot }),
            (0, W.jsxs)(d.default, {
              style: { flex: 1 },
              children: [
                (0, W.jsxs)(d.default, {
                  style: { flexDirection: "row", alignItems: "center", gap: S.spacing.sm },
                  children: [
                    (0, W.jsxs)(i.default, {
                      style: [S.typography.small, { color: t.text, flex: 1 }],
                      children: [l(r.labelKey), e.target_name ? ` \xb7 ${e.target_name}` : ""],
                    }),
                    (0, W.jsx)(i.default, {
                      style: [S.typography.caption, { color: t.textMuted }],
                      children: (0, M.formatRelative)(e.created_at),
                    }),
                  ],
                }),
                !!e.note &&
                  (0, W.jsx)(i.default, {
                    style: [S.typography.caption, { color: t.textMuted, fontStyle: "italic", marginTop: 2 }],
                    children: e.note,
                  }),
                (0, W.jsx)(i.default, {
                  style: [S.typography.caption, { color: t.textMuted, marginTop: 2 }],
                  children: e.actor_name ? l("activityBy", { name: e.actor_name }) : l("activityByClock"),
                }),
              ],
            }),
          ],
        });
      },
      E = ({ active: e, label: t, tone: l, colors: r, onPress: s }) => {
        const o = "success" === l ? r.success : r.danger;
        return (0, W.jsx)(n.default, {
          onPress: s,
          accessibilityRole: "button",
          accessibilityState: { selected: e },
          style: [q.attBtn, { backgroundColor: e ? o : "transparent", borderColor: o }],
          children: (0, W.jsx)(i.default, {
            style: [S.typography.caption, { color: e ? "#fff" : o, fontWeight: "700" }],
            children: t,
          }),
        });
      },
      $ = [10, 20, 30, null],
      O = ({
        game: e,
        candidates: l,
        busy: r,
        colors: s,
        t: c,
        onActivate: u,
        onDeactivate: p,
        onRadius: h,
      }) => {
        const [f, j] = (0, t.useState)(e.npn_radius_km ?? 10),
          b = (new Date(e.starts_at).getTime() - Date.now()) / 36e5,
          _ = Math.max(0, e.max_players - e.bookings_count),
          w = b > 0 && b <= 24 && _ > 0,
          v = e.npn_active,
          T = (0, k.deriveNpnUrgency)(e.starts_at),
          C = "critical" === T ? s.danger : "urgent" === T ? s.warning : s.accent,
          P = v ? e.npn_radius_km : f;
        return (0, W.jsxs)(m.Card, {
          style: {
            marginTop: S.spacing.md,
            borderColor: v ? C : s.border,
            borderWidth: v ? 1 : o.default.hairlineWidth,
          },
          children: [
            (0, W.jsxs)(d.default, {
              style: { flexDirection: "row", alignItems: "center" },
              children: [
                (0, W.jsx)(g.Ionicons, { name: "flash", size: 20, color: C }),
                (0, W.jsx)(i.default, {
                  style: [S.typography.h3, { color: s.text, flex: 1, marginHorizontal: S.spacing.sm }],
                  children: c("needPlayerNow"),
                }),
                v &&
                  (0, W.jsx)(x.Badge, {
                    label: c(`npnBadge_${T}`),
                    tone: "critical" === T ? "danger" : "urgent" === T ? "warning" : "accent",
                  }),
              ],
            }),
            w || v
              ? (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)(i.default, {
                      style: [S.typography.small, { color: s.textMuted, marginTop: S.spacing.sm }],
                      children:
                        v && e.npn_activated_at
                          ? c("npnActiveSince", { time: (0, M.formatRelative)(e.npn_activated_at) })
                          : c("npnPanelHint"),
                    }),
                    v &&
                      (0, W.jsxs)(d.default, {
                        style: { flexDirection: "row", gap: S.spacing.lg, marginTop: S.spacing.md },
                        children: [
                          (0, W.jsxs)(d.default, {
                            style: { flexDirection: "row", alignItems: "center" },
                            children: [
                              (0, W.jsx)(g.Ionicons, {
                                name: "paper-plane-outline",
                                size: 14,
                                color: s.textMuted,
                              }),
                              (0, W.jsxs)(i.default, {
                                style: [S.typography.smallStrong, { color: s.text, marginStart: 4 }],
                                children: [
                                  (0, B.formatNumber)(e.npn_notifications_sent),
                                  " ",
                                  c("npnStatsSent"),
                                ],
                              }),
                            ],
                          }),
                          (0, W.jsxs)(d.default, {
                            style: { flexDirection: "row", alignItems: "center" },
                            children: [
                              (0, W.jsx)(g.Ionicons, {
                                name: "person-add-outline",
                                size: 14,
                                color: s.textMuted,
                              }),
                              (0, W.jsxs)(i.default, {
                                style: [S.typography.smallStrong, { color: s.text, marginStart: 4 }],
                                children: [(0, B.formatNumber)(e.npn_joins), " ", c("npnStatsJoins")],
                              }),
                            ],
                          }),
                          (0, W.jsx)(i.default, {
                            style: [S.typography.smallStrong, { color: C }],
                            children: c("npnSlotsOpen", { n: _ }),
                          }),
                        ],
                      }),
                    (0, W.jsx)(i.default, {
                      style: [
                        S.typography.smallStrong,
                        { color: s.textMuted, marginTop: S.spacing.md, marginBottom: S.spacing.xs },
                      ],
                      children: c("npnRadius"),
                    }),
                    (0, W.jsx)(d.default, {
                      style: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.sm },
                      children: $.map((e) => {
                        const t = P === e || (null === e && null == P);
                        return (0, W.jsx)(
                          n.default,
                          {
                            disabled: r,
                            onPress: () => (v ? h(e) : j(e)),
                            accessibilityRole: "button",
                            accessibilityState: { selected: t },
                            style: {
                              minHeight: 34,
                              paddingHorizontal: S.spacing.md,
                              borderRadius: 999,
                              borderWidth: o.default.hairlineWidth,
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: t ? s.accent : s.surface,
                              borderColor: t ? s.accent : s.border,
                            },
                            children: (0, W.jsx)(i.default, {
                              style: [S.typography.smallStrong, { color: t ? "#fff" : s.text }],
                              children: null === e ? c("npnAllKuwait") : `${(0, B.formatNumber)(e)} km`,
                            }),
                          },
                          String(e),
                        );
                      }),
                    }),
                    l.length > 0 &&
                      (0, W.jsxs)(W.Fragment, {
                        children: [
                          (0, W.jsx)(i.default, {
                            style: [
                              S.typography.smallStrong,
                              { color: s.textMuted, marginTop: S.spacing.md, marginBottom: S.spacing.xs },
                            ],
                            children: c("npnCandidates"),
                          }),
                          l
                            .slice(0, 4)
                            .map((e) =>
                              (0, W.jsxs)(
                                d.default,
                                {
                                  style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingVertical: 6,
                                    flexWrap: "wrap",
                                    gap: 4,
                                  },
                                  children: [
                                    (0, W.jsx)(i.default, {
                                      style: [S.typography.small, { color: s.text, flex: 1, minWidth: 110 }],
                                      numberOfLines: 1,
                                      children: e.display_name,
                                    }),
                                    e.played_before &&
                                      (0, W.jsx)(g.Ionicons, { name: "repeat", size: 13, color: s.success }),
                                    (0, W.jsx)(i.default, {
                                      style: [S.typography.caption, { color: s.textMuted }],
                                      children: c("npnKmAway", { km: e.distance_km }),
                                    }),
                                    e.compat_class_key &&
                                      (0, W.jsx)(V, { classKey: e.compat_class_key, t: c }),
                                    (0, W.jsx)(x.Badge, { label: c(e.skill_category_key), tone: "accent" }),
                                    (0, W.jsx)(x.Badge, {
                                      label: c(e.reliability_category_key),
                                      tone: "relRisky" === e.reliability_category_key ? "danger" : "neutral",
                                    }),
                                  ],
                                },
                                e.user_id,
                              ),
                            ),
                        ],
                      }),
                    v &&
                      (0, W.jsx)(d.default, {
                        style: { marginTop: S.spacing.md },
                        children: (0, W.jsx)(I.ShareMatchButton, { game: e, variant: "npn" }),
                      }),
                    (0, W.jsx)(d.default, {
                      style: { marginTop: S.spacing.md },
                      children: v
                        ? (0, W.jsx)(y.Button, {
                            title: c("npnDeactivate"),
                            variant: "secondary",
                            fullWidth: !0,
                            loading: r,
                            onPress: p,
                          })
                        : (0, W.jsx)(y.Button, {
                            title: c("npnActivate"),
                            fullWidth: !0,
                            loading: r,
                            onPress: () => u(f),
                            leftIcon: (0, W.jsx)(g.Ionicons, { name: "flash", size: 16, color: "#fff" }),
                          }),
                    }),
                  ],
                })
              : (0, W.jsx)(i.default, {
                  style: [S.typography.small, { color: s.textMuted, marginTop: S.spacing.sm }],
                  children: c("npnNotEligible"),
                }),
          ],
        });
      },
      V = ({ classKey: e, t: t }) => {
        const l = {
            compatHigh: { tone: "success", emoji: "\ud83d\udfe2" },
            compatMed: { tone: "warning", emoji: "\ud83d\udfe1" },
            compatLow: { tone: "danger", emoji: "\ud83d\udd34" },
          },
          r = l[e] ?? l.compatMed;
        return (0, W.jsx)(x.Badge, { label: `${r.emoji} ${t(e)}`, tone: r.tone });
      },
      K = ({ title: e, colors: t, children: l }) =>
        (0, W.jsxs)(d.default, {
          style: { marginTop: S.spacing.xl },
          children: [
            (0, W.jsx)(i.default, {
              style: [S.typography.h3, { color: t.text, marginBottom: S.spacing.sm }],
              children: e,
            }),
            (0, W.jsx)(m.Card, { padding: "sm", children: l }),
          ],
        }),
      F = ({ label: e, value: t, colors: l, last: r }) =>
        (0, W.jsxs)(d.default, {
          style: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: S.spacing.sm,
            borderBottomWidth: r ? 0 : o.default.hairlineWidth,
            borderBottomColor: l.border,
          },
          children: [
            (0, W.jsx)(i.default, { style: [S.typography.small, { color: l.textMuted }], children: e }),
            (0, W.jsx)(i.default, { style: [S.typography.smallStrong, { color: l.text }], children: t }),
          ],
        }),
      q = o.default.create({
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
        sportIcon: {
          width: 44,
          height: 44,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
        },
        field: {
          minHeight: 48,
          borderRadius: S.radius.md,
          borderWidth: o.default.hairlineWidth,
          paddingHorizontal: S.spacing.lg,
          flexDirection: "row",
          alignItems: "center",
        },
        chipRow: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.sm },
        chip: {
          minHeight: 36,
          paddingHorizontal: S.spacing.md,
          borderRadius: S.radius.pill,
          borderWidth: o.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        capRow: { flexDirection: "row", alignItems: "center", gap: S.spacing.sm },
        stepBtn: {
          width: 40,
          height: 40,
          borderRadius: S.radius.md,
          borderWidth: o.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        codeRow: {
          flexDirection: "row",
          alignItems: "center",
          paddingTop: S.spacing.sm,
          marginTop: S.spacing.xs,
          borderTopWidth: o.default.hairlineWidth,
        },
        logRow: {
          flexDirection: "row",
          alignItems: "flex-start",
          gap: S.spacing.sm,
          paddingVertical: S.spacing.sm,
          borderTopWidth: o.default.hairlineWidth,
        },
        logDot: { width: 18, marginTop: 1 },
        logDotSkeleton: { height: 14, borderRadius: 7 },
        partRow: {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: S.spacing.sm,
          paddingHorizontal: S.spacing.xs,
        },
        intelRow: {
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
          paddingHorizontal: S.spacing.xs,
          paddingBottom: S.spacing.sm,
        },
        avatar: {
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: o.default.hairlineWidth,
        },
        kickNote: {
          borderWidth: 1,
          borderRadius: S.radius.md,
          padding: S.spacing.sm,
          marginTop: S.spacing.sm,
          minHeight: 44,
          textAlignVertical: "top",
        },
        scoreInput: {
          borderWidth: 1,
          borderRadius: S.radius.md,
          textAlign: "center",
          fontSize: 34,
          fontWeight: "900",
          paddingVertical: S.spacing.sm,
          marginTop: 4,
          fontVariant: ["tabular-nums"],
        },
        attBtn: {
          paddingHorizontal: S.spacing.sm,
          height: 30,
          borderRadius: S.radius.sm,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      }),
      G = ({ gameId: e, userId: l, hasOpenSlots: n, colors: s, t: o }) => {
        const [c, u] = (0, t.useState)([]),
          [p, x] = (0, t.useState)(!1),
          h = (0, t.useCallback)(async () => {
            u(n ? await (0, w.fetchConciergeReplacements)(l, e).catch(() => []) : []);
          }, [e, l, n]);
        if (
          ((0, t.useEffect)(() => {
            h();
          }, [h]),
          !n)
        )
          return null;
        return (0, W.jsxs)(m.Card, {
          style: { marginTop: S.spacing.md, borderColor: s.accent },
          children: [
            (0, W.jsxs)(d.default, {
              style: { flexDirection: "row", alignItems: "center", marginBottom: S.spacing.sm },
              children: [
                (0, W.jsx)(g.Ionicons, { name: "sparkles", size: 18, color: s.accentText }),
                (0, W.jsx)(i.default, {
                  style: [S.typography.h3, { color: s.text, flex: 1, marginStart: S.spacing.sm }],
                  children: o("suggestedReplacements"),
                }),
              ],
            }),
            0 === c.length
              ? (0, W.jsx)(i.default, {
                  style: [S.typography.small, { color: s.textMuted }],
                  children: "\u2014",
                })
              : c.map((e) =>
                  (0, W.jsxs)(
                    d.default,
                    {
                      style: { flexDirection: "row", alignItems: "center", paddingVertical: S.spacing.xs },
                      children: [
                        (0, W.jsx)(i.default, {
                          style: [S.typography.small, { color: s.text, flex: 1 }],
                          numberOfLines: 1,
                          children: e.display_name,
                        }),
                        (0, W.jsxs)(i.default, {
                          style: [S.typography.caption, { color: s.textMuted, marginEnd: S.spacing.sm }],
                          children: [(0, B.formatNumber)(Math.round(e.distance_km)), " km"],
                        }),
                        (0, W.jsx)(V, { classKey: e.compat_class_key, t: o }),
                      ],
                    },
                    e.user_id,
                  ),
                ),
            (0, W.jsx)(y.Button, {
              title: o("autoInviteAction"),
              size: "sm",
              loading: p,
              onPress: async () => {
                x(!0);
                try {
                  const t = await (0, w.conciergeAutoInvite)(l, e);
                  (r.default.alert(o("conciergeTitle"), o("autoInvitedToast", { n: (0, B.formatNumber)(t) })),
                    await h());
                } catch (e) {
                  r.default.alert(o("error"), (0, z.storeErrorText)(e?.message ?? "") || o("error"));
                } finally {
                  x(!1);
                }
              },
              style: { marginTop: S.spacing.sm },
              leftIcon: (0, W.jsx)(g.Ionicons, { name: "paper-plane-outline", size: 15, color: "#fff" }),
            }),
          ],
        });
      },
      U = ({ gameId: e, userId: l, colors: s, t: c }) => {
        const [u, p] = (0, t.useState)(null),
          [y, h] = (0, t.useState)(null),
          [f, j] = (0, t.useState)(!1),
          b = (0, t.useCallback)(async () => {
            (p(await (0, w.fetchReplacementState)(l, e).catch(() => null)),
              h(await (0, w.fetchReplacementMetrics)(l, e).catch(() => null)));
          }, [e, l]);
        (0, t.useEffect)(() => {
          b();
        }, [b]);
        const _ = async (e) => {
          j(!0);
          try {
            (await e(), await b());
          } catch (e) {
            r.default.alert(c("error"), (0, z.storeErrorText)(e?.message ?? "") || c("error"));
          } finally {
            j(!1);
          }
        };
        if (!u) return null;
        const T = u.settings.mode;
        return (0, W.jsxs)(m.Card, {
          style: { marginTop: S.spacing.md },
          children: [
            (0, W.jsxs)(d.default, {
              style: { flexDirection: "row", alignItems: "center", marginBottom: S.spacing.sm },
              children: [
                (0, W.jsx)(g.Ionicons, { name: "swap-horizontal", size: 18, color: s.accentText }),
                (0, W.jsx)(i.default, {
                  style: [S.typography.h3, { color: s.text, flex: 1, marginStart: S.spacing.sm }],
                  children: c("smartReplacement"),
                }),
                (0, W.jsx)(x.Badge, {
                  label: c("openSlots", { n: (0, B.formatNumber)(u.open_slots) }),
                  tone: u.open_slots > 0 ? "warning" : "neutral",
                }),
              ],
            }),
            (0, W.jsx)(d.default, {
              style: { flexDirection: "row", gap: S.spacing.sm },
              children: v.REPLACEMENT_MODES.map((t) => {
                const r = T === t.mode;
                return (0, W.jsxs)(
                  n.default,
                  {
                    onPress: () => _(() => (0, w.setReplacementMode)(l, e, t.mode)),
                    accessibilityRole: "button",
                    accessibilityState: { selected: r },
                    style: {
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 38,
                      borderRadius: S.radius.md,
                      borderWidth: o.default.hairlineWidth,
                      backgroundColor: r ? s.accent : s.surface,
                      borderColor: r ? s.accent : s.border,
                    },
                    children: [
                      (0, W.jsx)(g.Ionicons, { name: t.icon, size: 14, color: r ? "#fff" : s.textMuted }),
                      (0, W.jsx)(i.default, {
                        style: [S.typography.caption, { color: r ? "#fff" : s.text, marginStart: 4 }],
                        children: c(t.labelKey),
                      }),
                    ],
                  },
                  t.mode,
                );
              }),
            }),
            (0, W.jsx)(i.default, {
              style: [S.typography.caption, { color: s.textMuted, marginTop: S.spacing.xs }],
              children: c("replaceAutoHint"),
            }),
            u.active_offers.length > 0 &&
              (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)(i.default, {
                    style: [
                      S.typography.smallStrong,
                      { color: s.text, marginTop: S.spacing.md, marginBottom: S.spacing.xs },
                    ],
                    children: c("activeOffers"),
                  }),
                  u.active_offers.map((e) =>
                    (0, W.jsxs)(
                      d.default,
                      {
                        style: { flexDirection: "row", alignItems: "center", paddingVertical: 4 },
                        children: [
                          (0, W.jsx)(i.default, {
                            style: [S.typography.small, { color: s.text, flex: 1 }],
                            numberOfLines: 1,
                            children: e.candidate_name,
                          }),
                          (0, W.jsx)(i.default, {
                            style: [S.typography.caption, { color: s.textMuted, marginEnd: S.spacing.sm }],
                            children: c("offerExpiresIn", { n: (0, B.formatNumber)(e.expires_in_min) }),
                          }),
                          (0, W.jsx)(x.Badge, { label: c(`offerStatus_${e.status}`), tone: "warning" }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
            "paused" !== T &&
              u.open_slots > 0 &&
              u.shortlist.length > 0 &&
              (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)(i.default, {
                    style: [
                      S.typography.smallStrong,
                      { color: s.text, marginTop: S.spacing.md, marginBottom: S.spacing.xs },
                    ],
                    children: c("replacementShortlist"),
                  }),
                  u.shortlist
                    .slice(0, 4)
                    .map((t) =>
                      (0, W.jsxs)(
                        d.default,
                        {
                          style: { flexDirection: "row", alignItems: "center", paddingVertical: 4 },
                          children: [
                            (0, W.jsx)(i.default, {
                              style: [S.typography.small, { color: s.text, flex: 1 }],
                              numberOfLines: 1,
                              children: t.display_name,
                            }),
                            (0, W.jsxs)(i.default, {
                              style: [S.typography.caption, { color: s.textMuted, marginEnd: S.spacing.sm }],
                              children: [(0, B.formatNumber)(Math.round(t.distance_km)), " km"],
                            }),
                            (0, W.jsx)(V, { classKey: t.compat_class_key, t: c }),
                            (0, W.jsx)(n.default, {
                              onPress: () => _(() => (0, w.manualReplace)(l, e, t.user_id)),
                              disabled: f,
                              hitSlop: 6,
                              style: { marginStart: S.spacing.sm },
                              children: (0, W.jsx)(g.Ionicons, {
                                name: "paper-plane-outline",
                                size: 18,
                                color: s.accentText,
                              }),
                            }),
                          ],
                        },
                        t.user_id,
                      ),
                    ),
                ],
              }),
            y &&
              y.offers > 0 &&
              (0, W.jsxs)(d.default, {
                style: { flexDirection: "row", flexWrap: "wrap", gap: S.spacing.sm, marginTop: S.spacing.md },
                children: [
                  (0, W.jsx)(Y, {
                    label: c("metricOffers"),
                    value: (0, B.formatNumber)(y.offers),
                    colors: s,
                  }),
                  (0, W.jsx)(Y, {
                    label: c("metricFilled"),
                    value: (0, B.formatNumber)(y.accepted),
                    colors: s,
                  }),
                  (0, W.jsx)(Y, {
                    label: c("metricSuccess"),
                    value: `${(0, B.formatNumber)(Math.round(100 * y.successRate))}%`,
                    colors: s,
                  }),
                  null != y.avgTimeToReplaceMin &&
                    (0, W.jsx)(Y, {
                      label: c("metricTimeToReplace"),
                      value: `${(0, B.formatNumber)(y.avgTimeToReplaceMin)}m`,
                      colors: s,
                    }),
                ],
              }),
          ],
        });
      },
      Y = ({ label: e, value: t, colors: l }) =>
        (0, W.jsxs)(d.default, {
          style: {
            minWidth: "30%",
            flexGrow: 1,
            backgroundColor: l.surface,
            borderColor: l.border,
            borderWidth: o.default.hairlineWidth,
            borderRadius: S.radius.md,
            padding: S.spacing.sm,
          },
          children: [
            (0, W.jsx)(i.default, { style: [S.typography.bodyStrong, { color: l.text }], children: t }),
            (0, W.jsx)(i.default, { style: [S.typography.caption, { color: l.textMuted }], children: e }),
          ],
        }),
      J = ({ gameId: e, userId: l, colors: r, t: n }) => {
        const [s, c] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            (0, w.fetchGameGroups)(l, e)
              .then(c)
              .catch(() => c([]));
          }, [e, l]),
          s && 0 !== s.length
            ? (0, W.jsxs)(m.Card, {
                style: { marginTop: S.spacing.md },
                children: [
                  (0, W.jsxs)(d.default, {
                    style: { flexDirection: "row", alignItems: "center", marginBottom: S.spacing.sm },
                    children: [
                      (0, W.jsx)(g.Ionicons, { name: "people", size: 18, color: r.accentText }),
                      (0, W.jsx)(i.default, {
                        style: [S.typography.h3, { color: r.text, flex: 1, marginStart: S.spacing.sm }],
                        children: n("groupBookingTitle"),
                      }),
                      (0, W.jsx)(x.Badge, { label: (0, B.formatNumber)(s.length), tone: "neutral" }),
                    ],
                  }),
                  s.map((e) =>
                    (0, W.jsxs)(
                      d.default,
                      {
                        style: {
                          marginTop: S.spacing.sm,
                          paddingTop: S.spacing.sm,
                          borderTopWidth: o.default.hairlineWidth,
                          borderTopColor: r.border,
                        },
                        children: [
                          (0, W.jsxs)(i.default, {
                            style: [S.typography.smallStrong, { color: r.text, marginBottom: 4 }],
                            children: [
                              n("kindLeader"),
                              ": ",
                              e.leader_name,
                              " \xb7 ",
                              n(
                                "confirmed" === e.group.status
                                  ? "memberStatus_confirmed"
                                  : "memberStatus_pending_payment",
                              ),
                            ],
                          }),
                          e.members.map((e) =>
                            (0, W.jsxs)(
                              d.default,
                              {
                                style: { flexDirection: "row", alignItems: "center", paddingVertical: 3 },
                                children: [
                                  (0, W.jsx)(g.Ionicons, {
                                    name:
                                      "guest" === e.kind
                                        ? "person-outline"
                                        : "leader" === e.kind
                                          ? "star"
                                          : "person",
                                    size: 13,
                                    color: r.textMuted,
                                  }),
                                  (0, W.jsx)(i.default, {
                                    style: [
                                      S.typography.small,
                                      { color: r.text, flex: 1, marginStart: S.spacing.sm },
                                    ],
                                    numberOfLines: 1,
                                    children: e.name,
                                  }),
                                  (0, W.jsx)(x.Badge, {
                                    label: n(`memberStatus_${e.status}`),
                                    tone: (0, C.memberStatusTone)(e.status),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        ],
                      },
                      e.group.id,
                    ),
                  ),
                ],
              })
            : null
        );
      },
      Q = ({ target: e, gameId: l, issuerId: s, colors: c, t: u, onClose: p, onDone: x }) => {
        const [f, j] = (0, t.useState)("lateness"),
          [b, _] = (0, t.useState)("warning"),
          [v, C] = (0, t.useState)(""),
          [I, k] = (0, t.useState)(""),
          [M, B] = (0, t.useState)(!1),
          P = "ban" === b || "suspension" === b;
        return (0, W.jsxs)(m.Card, {
          style: { marginTop: S.spacing.md, borderColor: c.danger },
          children: [
            (0, W.jsxs)(d.default, {
              style: { flexDirection: "row", alignItems: "center", marginBottom: S.spacing.sm },
              children: [
                (0, W.jsx)(g.Ionicons, { name: "flag", size: 18, color: c.danger }),
                (0, W.jsxs)(i.default, {
                  style: [S.typography.h3, { color: c.text, flex: 1, marginStart: S.spacing.sm }],
                  children: [u("issueSanctionTitle"), " \xb7 ", e.name],
                }),
                (0, W.jsx)(n.default, {
                  onPress: p,
                  hitSlop: 8,
                  children: (0, W.jsx)(g.Ionicons, { name: "close", size: 20, color: c.textMuted }),
                }),
              ],
            }),
            (0, W.jsx)(i.default, {
              style: [S.typography.caption, { color: c.textMuted, marginBottom: S.spacing.xs }],
              children: u("chooseCategory"),
            }),
            (0, W.jsx)(d.default, {
              style: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
              children: T.VIOLATION_CATEGORIES.map((e) => {
                const t = f === e.category;
                return (0, W.jsx)(
                  n.default,
                  {
                    onPress: () => {
                      return ((t = e.category), j(t), void _((0, T.tierForCategory)(t)));
                      var t;
                    },
                    accessibilityRole: "button",
                    accessibilityState: { selected: t },
                    style: {
                      paddingHorizontal: S.spacing.sm,
                      minHeight: 30,
                      borderRadius: 999,
                      borderWidth: o.default.hairlineWidth,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: t ? c.accent : c.surface,
                      borderColor: t ? c.accent : c.border,
                    },
                    children: (0, W.jsx)(i.default, {
                      style: [S.typography.caption, { color: t ? "#fff" : c.text }],
                      children: u(e.labelKey),
                    }),
                  },
                  e.category,
                );
              }),
            }),
            (0, W.jsx)(i.default, {
              style: [
                S.typography.caption,
                { color: c.textMuted, marginTop: S.spacing.md, marginBottom: S.spacing.xs },
              ],
              children: u("chooseSanction"),
            }),
            (0, W.jsx)(d.default, {
              style: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
              children: T.SANCTION_TYPES.map((e) => {
                const t = b === e.type;
                return (0, W.jsxs)(
                  n.default,
                  {
                    onPress: () => _(e.type),
                    accessibilityRole: "button",
                    accessibilityState: { selected: t },
                    style: {
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: S.spacing.sm,
                      minHeight: 32,
                      borderRadius: 999,
                      borderWidth: o.default.hairlineWidth,
                      backgroundColor: t ? c.accent : c.surface,
                      borderColor: t ? c.accent : c.border,
                    },
                    children: [
                      (0, W.jsx)(i.default, { style: { fontSize: 13 }, children: e.emoji }),
                      (0, W.jsx)(i.default, {
                        style: [S.typography.caption, { color: t ? "#fff" : c.text, marginStart: 4 }],
                        children: u(e.labelKey),
                      }),
                    ],
                  },
                  e.type,
                );
              }),
            }),
            (0, W.jsx)(d.default, {
              style: { marginTop: S.spacing.md },
              children: (0, W.jsx)(h.Input, {
                value: v,
                onChangeText: C,
                placeholder: u("sanctionReasonLabel"),
                multiline: !0,
                maxLength: 400,
              }),
            }),
            (0, W.jsx)(d.default, {
              style: { marginTop: S.spacing.sm },
              children: (0, W.jsx)(h.Input, {
                value: I,
                onChangeText: k,
                placeholder: u("evidenceLabel"),
                autoCapitalize: "none",
              }),
            }),
            P &&
              (0, W.jsxs)(i.default, {
                style: [S.typography.caption, { color: c.warning, marginTop: S.spacing.xs }],
                children: [
                  (0, W.jsx)(g.Ionicons, { name: "information-circle-outline", size: 11 }),
                  " ",
                  u("banNeedsApproval"),
                ],
              }),
            (0, W.jsx)(y.Button, {
              title: u("submitSanction"),
              variant: "danger",
              fullWidth: !0,
              loading: M,
              disabled: !v.trim(),
              style: { marginTop: S.spacing.md },
              onPress: async () => {
                if (!v.trim()) return r.default.alert(u("error"), u("sanctionReasonLabel"));
                B(!0);
                try {
                  (await (0, w.issueSanction)(s, e.id, {
                    type: b,
                    category: f,
                    reason: v.trim(),
                    evidence_url: I.trim() || null,
                    game_id: l,
                  }),
                    r.default.alert(u("sanctionIssuedToast"), ""),
                    x());
                } catch (e) {
                  r.default.alert(u("error"), (0, z.storeErrorText)(e?.message ?? "") || u("error"));
                } finally {
                  B(!1);
                }
              },
            }),
          ],
        });
      };
  },
  2466,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 394, 273, 381, 1086, 20, 1623, 1624, 626, 625, 2462, 2463, 630, 615,
    616, 671, 663, 656, 662, 2387, 631, 1626, 1311, 675, 2467, 1171, 674, 13,
  ],
);
