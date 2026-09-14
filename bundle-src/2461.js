__d(
  function (g, _r, _i, _a, m, _e, _d) {
    var e = _r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, refreshProfile: q } = (0, _.useAuth)(),
          { colors: K } = (0, S.useTheme)(),
          Q = (0, h.useRouter)(),
          G = (0, M.useT)(),
          J = "ar" === (0, M.getLocale)() ? R.ar : void 0,
          U = (0, h.useLocalSearchParams)(),
          X = U.court_booking_id,
          [Z, re] = (0, t.useState)(null),
          [oe, ie] = (0, t.useState)(!1),
          [ne, ce] = (0, t.useState)("football"),
          [de, ue] = (0, t.useState)("football_5v5"),
          [pe, me] = (0, t.useState)(10),
          [ge, he] = (0, t.useState)(""),
          xe = (0, t.useRef)(!1),
          [ye, fe] = (0, t.useState)(null),
          [be, je] = (0, t.useState)(!1),
          [ve, ke] = (0, t.useState)(null),
          [Se, we] = (0, t.useState)(null),
          [Te, Ce] = (0, t.useState)("once"),
          [Me, Ie] = (0, t.useState)("weekly"),
          [Pe, Re] = (0, t.useState)([]),
          [De, ze] = (0, t.useState)("first"),
          [Ae, Le] = (0, t.useState)(2),
          [He, Ee] = (0, t.useState)("none"),
          [Ne, Be] = (0, t.useState)(null),
          [Oe, We] = (0, t.useState)(!1),
          [$e, Ve] = (0, t.useState)(!0),
          [Fe, qe] = (0, t.useState)("list"),
          [Ke, Qe] = (0, t.useState)(null),
          [Ge, Je] = (0, t.useState)(""),
          [Ue, Xe] = (0, t.useState)(""),
          [Ye, Ze] = (0, t.useState)(""),
          [et, tt] = (0, t.useState)(null),
          [lt, at] = (0, t.useState)("all"),
          [st, rt] = (0, t.useState)("open"),
          [ot, it] = (0, t.useState)(D.SPORT_SCALES.football.min),
          [nt, ct] = (0, t.useState)(D.SPORT_SCALES.football.max),
          [dt, ut] = (0, t.useState)(5),
          [pt, mt] = (0, t.useState)(0),
          [gt, ht] = (0, t.useState)(""),
          [xt, yt] = (0, t.useState)(""),
          [ft, bt] = (0, t.useState)("public"),
          [jt, vt] = (0, t.useState)("auto"),
          [kt, _t] = (0, t.useState)([]),
          [St, wt] = (0, t.useState)(!1),
          [Tt, Ct] = (0, t.useState)(null),
          [Mt, It] = (0, t.useState)(null),
          [Pt, Rt] = (0, t.useState)(!1),
          [Dt, zt] = (0, t.useState)(!1),
          [At, Lt] = (0, t.useState)(new Set()),
          [Ht, Et] = (0, t.useState)(new Set()),
          [Nt, Bt] = (0, t.useState)("quick"),
          [apErr, setApErr] = (0, t.useState)(null);
        (0, t.useEffect)(() => {
          l.default
            .getItem("playora.createLane.v1")
            .then((e) => {
              "custom" === e && Bt("custom");
            })
            .catch(() => {});
        }, []);
        ((0, t.useEffect)(() => {
          (0, T.fetchVenues)()
            .then(_t)
            .catch(() => {});
        }, []),
          (0, t.useEffect)(() => {
            if (!e || X || Dt) return void It(null);
            let t = !1;
            Rt(!0);
            // ORG1 (F-ORG1-6): re-evaluated (debounced) whenever the inputs that feed it change.
            const dbTimer = setTimeout(() => {
              if (t) return;
              const l = ye && null != ve ? N(ye, ve).toISOString() : null,
                a = ye && null != Se ? N(ye, Se).toISOString() : null;
              (0, T.fetchMatchOptimization)(e.id, {
                sport: ne,
                venue_id: "list" === Fe ? Ke : null,
                starts_at: l,
                ends_at: a,
                price_kwd: 0 === pt ? (gt ? Number(gt) : 0) : pt,
                max_players: pe,
                skill_level: lt,
                waitlist_cap: dt,
                auto_invite: $e,
              })
                .then((e) => {
                  t || (It(e), Et(new Set()));
                })
                .catch(() => {
                  t || It(null);
                })
                .finally(() => {
                  t || Rt(!1);
                });
            }, 400);
            
            return () => {
              ((t = !0), clearTimeout(dbTimer));
            };
          }, [e, ne, X, Dt, Fe, Ke, ye, ve, Se, pt, gt, pe, lt, dt, $e]));
        const Ot = (e) => {
          if (!Mt) return;
          const t = Mt.optimal,
            l = new Date(t.starts_at),
            a = new Date(t.ends_at);
          switch (e) {
            case "venue":
              (qe("list"), Qe(t.venue_id));
              break;
            case "date": {
              const e = new Date(l);
              (e.setHours(0, 0, 0, 0), fe(e));
              break;
            }
            case "time":
              if (!ye) {
                const e = new Date(l);
                (e.setHours(0, 0, 0, 0), fe(e));
              }
              (ke(60 * l.getHours() + l.getMinutes()), we(60 * a.getHours() + a.getMinutes()));
              break;
            case "duration":
              null != ve
                ? we(ve + t.duration_minutes)
                : (ke(60 * l.getHours() + l.getMinutes()), we(60 * a.getHours() + a.getMinutes()));
              break;
            case "price":
              (mt(0), ht(String(t.price_kwd)));
              break;
            case "capacity":
              me(t.max_players);
              break;
            case "skill":
              (at(t.skill_level),
                null != t.skill_min && it(t.skill_min),
                null != t.skill_max && ct(t.skill_max));
              break;
            case "waitlist":
              ut(t.waitlist_cap);
              break;
            case "autoInvite":
              Ve(!0);
          }
        };
        (0, t.useEffect)(() => {
          e &&
            (0, T.fetchMyOrganizerApplication)(e.id)
              .then((e) => {
                "approved" === e?.status ? Ct(!0) : (Ct(!1), Q.replace("/organizer/apply"));
              })
              .catch((e) => {
                setApErr(e);
              });
        }, [e, Q]);
        const Wt = "football_custom" === de,
          $t = (0, t.useMemo)(() => `${G(ne)} ${G(`fmt_${de}`)}`, [ne, de, G]);
        (0, t.useEffect)(() => {
          xe.current || he($t);
        }, [$t]);
        const Vt = (e) => {
            ce(e);
            const t = W[e][0];
            if (
              (ue(t.format),
              me(t.players),
              ut($(t.players)),
              it(D.SPORT_SCALES[e].min),
              ct(D.SPORT_SCALES[e].max),
              Ke)
            ) {
              const t = kt.find((e) => e.id === Ke);
              t && !t.sports.includes(e) && Qe(null);
            }
          },
          Ft = (e) => {
            (ue(e.format), e.custom || (me(e.players), ut($(e.players))));
          };
        ((0, t.useEffect)(() => {
          "recurring" === Te && "weekly" === Me && 0 === Pe.length && ye && Re([ye.getDay()]);
        }, [Te, Me, ye]),
          (0, t.useEffect)(() => {
            if (X || oe || !U.start) return;
            const e = new Date(U.start);
            if (Number.isNaN(e.getTime())) return;
            ("football" !== U.sport && "padel" !== U.sport && "tennis" !== U.sport) || Vt(U.sport);
            const t = new Date(e);
            if ((t.setHours(0, 0, 0, 0), fe(t), ke(60 * e.getHours() + e.getMinutes()), U.end)) {
              const e = new Date(U.end);
              Number.isNaN(e.getTime()) || we(60 * e.getHours() + e.getMinutes());
            }
            (U.venue_id && (qe("list"), Qe(U.venue_id)), U.price && ht(U.price), ie(!0));
          }, [U, X, oe]),
          (0, t.useEffect)(() => {
            X &&
              (async () => {
                const e = await (0, T.fetchBooking)(X);
                if (!e) return;
                (re(`${e.venue_name} \xb7 ${e.court_name}`), ce(e.sport), ("football" === e.sport || "padel" === e.sport || "tennis" === e.sport) && Vt(e.sport));
                const t = new Date(e.starts_at),
                  l = new Date(e.ends_at),
                  a = new Date(t);
                (a.setHours(0, 0, 0, 0),
                  fe(a),
                  ke(60 * t.getHours() + t.getMinutes()),
                  we(60 * l.getHours() + l.getMinutes()),
                  qe("list"),
                  Qe(e.venue_id),
                  Ce("once"));
              })();
          }, [X]));
        const qt = (0, t.useMemo)(() => {
            const e = Ge.trim().toLowerCase();
            return kt
              .filter((e) => e.sports.includes(ne))
              .filter((t) => !e || `${t.name} ${t.area}`.toLowerCase().includes(e))
              .slice(0, 8);
          }, [kt, ne, Ge]),
          Kt = "" !== gt.trim() ? Number(gt) || 0 : pt,
          Qt = ye ? (0, P.format)(ye, "EEE, d MMM yyyy", { locale: J }) : G("fieldDate");
        if (apErr)
          return (0, A.jsx)(G9.GateScreen, {
            kind: "error",
            title: G("applicationLoadFailed"),
            body: (0, G9.classifyError)(apErr).message,
            onRetry: () => {
              (setApErr(null), Q.replace("/organizer/create"));
            },
            onBack: () => Q.back(),
          });
        if (!0 !== Tt)
          return (0, A.jsx)(u.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: K.bg },
            children: (0, A.jsx)(a.default, { color: K.accentText }),
          });
        return (0, A.jsxs)(u.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: K.bg },
          children: [
            (0, A.jsxs)(d.default, {
              style: se.header,
              children: [
                (0, A.jsx)(r.default, {
                  onPress: () => Q.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: G("back"),
                  style: [se.iconBtn, { backgroundColor: K.surface, borderColor: K.border }],
                  children: (0, A.jsx)(p.Ionicons, { name: (0, I.chevronBack)(), size: 22, color: K.text }),
                }),
                (0, A.jsxs)(d.default, {
                  style: { flex: 1, marginHorizontal: w.spacing.md },
                  children: [
                    (0, A.jsx)(c.default, {
                      style: [w.typography.h2, { color: K.text }],
                      children: G("createMatch"),
                    }),
                    (0, A.jsx)(c.default, {
                      style: [w.typography.small, { color: K.textMuted }],
                      children: G("createMatchSubtitle"),
                    }),
                  ],
                }),
              ],
            }),
            (0, A.jsxs)(o.default, {
              contentContainerStyle: { padding: w.spacing.lg, paddingBottom: 2 * w.spacing.xxxl },
              keyboardShouldPersistTaps: "handled",
              children: [
                (0, A.jsx)(te, {
                  options: [
                    { value: "quick", label: G("laneQuick") },
                    { value: "custom", label: G("laneCustom") },
                  ],
                  value: Nt,
                  onChange: (e) => {
                    return (Bt((t = e)), void l.default.setItem("playora.createLane.v1", t).catch(() => {}));
                    var t;
                  },
                  colors: K,
                }),
                "quick" === Nt &&
                  (0, A.jsx)(c.default, {
                    style: [w.typography.small, { color: K.textMuted, marginTop: w.spacing.xs }],
                    children: G("laneQuickHint"),
                  }),
                Z &&
                  (0, A.jsx)(x.Card, {
                    style: { marginBottom: w.spacing.lg, borderColor: K.success },
                    children: (0, A.jsxs)(d.default, {
                      style: { flexDirection: "row", alignItems: "center" },
                      children: [
                        (0, A.jsx)(p.Ionicons, { name: "checkmark-circle", size: 18, color: K.success }),
                        (0, A.jsxs)(d.default, {
                          style: { flex: 1, marginStart: w.spacing.sm },
                          children: [
                            (0, A.jsx)(y.Badge, { label: G("bookedAtVenue"), tone: "success" }),
                            (0, A.jsx)(c.default, {
                              style: [w.typography.small, { color: K.text, marginTop: 4 }],
                              children: Z,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                (0, A.jsx)(V, { colors: K, children: G("fieldSport") }),
                (0, A.jsx)(d.default, {
                  style: se.chipRow,
                  children: L.map((e) =>
                    (0, A.jsx)(
                      ee,
                      { sport: e, active: ne === e, onPress: () => Vt(e), colors: K, label: G(e) },
                      e,
                    ),
                  ),
                }),
                "custom" === Nt &&
                  !X &&
                  !Dt &&
                  (Pt || Mt) &&
                  (0, A.jsx)(Y, {
                    opt: Mt,
                    loading: Pt,
                    colors: K,
                    t: G,
                    locks: At,
                    applied: Ht,
                    onAccept: (t) => {
                      Mt &&
                        e &&
                        (Ot(t),
                        Et((e) => new Set(e).add(t)),
                        (0, T.recordOptimizerDecision)(
                          e.id,
                          ne,
                          "accept",
                          t,
                          Mt.predictions.success_pct,
                        ).catch(() => {}));
                    },
                    onAcceptAll: () => {
                      if (Mt && e) {
                        for (const e of Mt.recommendations) e.actionable && !At.has(e.key) && Ot(e.key);
                        (Et(new Set(Mt.recommendations.map((e) => e.key))),
                          (0, T.recordOptimizerDecision)(
                            e.id,
                            ne,
                            "accept_all",
                            null,
                            Mt.predictions.success_pct,
                          ).catch(() => {}),
                          zt(!0));
                      }
                    },
                    onIgnore: () => {
                      (e &&
                        Mt &&
                        (0, T.recordOptimizerDecision)(
                          e.id,
                          ne,
                          "ignore",
                          null,
                          Mt.predictions.success_pct,
                        ).catch(() => {}),
                        zt(!0));
                    },
                    onLock: (t) => {
                      (e &&
                        Mt &&
                        !At.has(t) &&
                        (0, T.recordOptimizerDecision)(e.id, ne, "lock", t, Mt.predictions.success_pct).catch(
                          () => {},
                        ),
                        Lt((e) => {
                          const l = new Set(e);
                          return (l.has(t) ? l.delete(t) : l.add(t), l);
                        }));
                    },
                  }),
                "custom" === Nt &&
                  (0, A.jsxs)(A.Fragment, {
                    children: [
                      (0, A.jsxs)(d.default, {
                        style: { marginTop: w.spacing.lg },
                        children: [
                          (0, A.jsx)(V, { colors: K, children: G("fieldTitle") }),
                          (0, A.jsx)(b.Input, {
                            value: ge,
                            onChangeText: (e) => {
                              ((xe.current = !0), he(e));
                            },
                            placeholder: G("matchTitlePlaceholder"),
                            maxLength: 100,
                          }),
                        ],
                      }),
                      (0, A.jsx)(V, { colors: K, children: G("fieldFormat") }),
                      (0, A.jsx)(d.default, {
                        style: se.chipRow,
                        children: W[ne].map((e) =>
                          (0, A.jsx)(
                            F,
                            {
                              label: G(`fmt_${e.format}`),
                              active: de === e.format,
                              onPress: () => Ft(e),
                              colors: K,
                            },
                            e.format,
                          ),
                        ),
                      }),
                    ],
                  }),
                (0, A.jsx)(V, { colors: K, style: { marginTop: w.spacing.lg }, children: G("fieldDate") }),
                (0, A.jsxs)(r.default, {
                  onPress: () => je((e) => !e),
                  accessibilityRole: "button",
                  style: [se.field, { backgroundColor: K.surface, borderColor: be ? K.accent : K.border }],
                  children: [
                    (0, A.jsx)(p.Ionicons, { name: "calendar-outline", size: 18, color: K.textMuted }),
                    (0, A.jsx)(c.default, {
                      style: [
                        w.typography.body,
                        { color: ye ? K.text : K.textMuted, flex: 1, marginHorizontal: w.spacing.sm },
                      ],
                      children: Qt,
                    }),
                    (0, A.jsx)(p.Ionicons, {
                      name: be ? "chevron-up" : "chevron-down",
                      size: 18,
                      color: K.textMuted,
                    }),
                  ],
                }),
                be &&
                  (0, A.jsx)(d.default, {
                    style: { marginTop: w.spacing.xs },
                    children: (0, A.jsx)(j.DatePicker, {
                      value: ye,
                      onChange: (e) => {
                        (fe(e), je(!1));
                      },
                    }),
                  }),
                (0, A.jsxs)(d.default, {
                  style: { flexDirection: "row", gap: w.spacing.md, marginTop: w.spacing.md },
                  children: [
                    (0, A.jsx)(d.default, {
                      style: { flex: 1 },
                      children: (0, A.jsx)(v.TimePicker, {
                        label: G("fieldStartTime"),
                        value: ve,
                        onChange: (e) => {
                          (ke(e), (null == Se || Se <= e) && we(Math.min(e + 90, 1439)));
                        },
                        placeholder: "--:--",
                      }),
                    }),
                    (0, A.jsx)(d.default, {
                      style: { flex: 1 },
                      children: (0, A.jsx)(v.TimePicker, {
                        label: G("fieldEndTime"),
                        value: Se,
                        onChange: we,
                        placeholder: "--:--",
                      }),
                    }),
                  ],
                }),
                "custom" === Nt &&
                  (0, A.jsxs)(A.Fragment, {
                    children: [
                      (0, A.jsx)(V, {
                        colors: K,
                        style: { marginTop: w.spacing.lg },
                        children: G("matchType"),
                      }),
                      (0, A.jsx)(te, {
                        options: [
                          { value: "once", label: G("oneTime") },
                          { value: "recurring", label: G("recurring") },
                        ],
                        value: Te,
                        onChange: (e) => Ce(e),
                        colors: K,
                      }),
                      "recurring" === Te &&
                        (0, A.jsxs)(x.Card, {
                          style: { marginTop: w.spacing.sm },
                          padding: "md",
                          children: [
                            (0, A.jsx)(V, { colors: K, children: G("repeatFrequency") }),
                            (0, A.jsx)(te, {
                              options: [
                                { value: "daily", label: G("freqDaily") },
                                { value: "weekly", label: G("freqWeekly") },
                                { value: "monthly", label: G("freqMonthly") },
                              ],
                              value: Me,
                              onChange: (e) => Ie(e),
                              colors: K,
                            }),
                            "weekly" === Me &&
                              (0, A.jsxs)(A.Fragment, {
                                children: [
                                  (0, A.jsx)(V, { colors: K, children: G("onDays") }),
                                  (0, A.jsx)(d.default, {
                                    style: se.chipRow,
                                    children: B.map((e) =>
                                      (0, A.jsx)(
                                        F,
                                        {
                                          label: G(e.key),
                                          active: Pe.includes(e.i),
                                          onPress: () =>
                                            Re((t) =>
                                              t.includes(e.i) ? t.filter((t) => t !== e.i) : [...t, e.i],
                                            ),
                                          colors: K,
                                        },
                                        e.i,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            "monthly" === Me &&
                              (0, A.jsxs)(A.Fragment, {
                                children: [
                                  (0, A.jsx)(V, { colors: K, children: G("monthlyOn") }),
                                  (0, A.jsx)(d.default, {
                                    style: se.chipRow,
                                    children: O.map((e) =>
                                      (0, A.jsx)(
                                        F,
                                        {
                                          label: G(`mw_${e}`),
                                          active: De === e,
                                          onPress: () => ze(e),
                                          colors: K,
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                  (0, A.jsx)(d.default, {
                                    style: [se.chipRow, { marginTop: w.spacing.xs }],
                                    children: B.map((e) =>
                                      (0, A.jsx)(
                                        F,
                                        {
                                          label: G(e.key),
                                          active: Ae === e.i,
                                          onPress: () => Le(e.i),
                                          colors: K,
                                        },
                                        e.i,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            (0, A.jsx)(V, { colors: K, children: G("ends") }),
                            (0, A.jsx)(te, {
                              options: [
                                { value: "none", label: G("noEndDate") },
                                { value: "date", label: G("onDate") },
                              ],
                              value: He,
                              onChange: (e) => Ee(e),
                              colors: K,
                            }),
                            "date" === He &&
                              (0, A.jsxs)(A.Fragment, {
                                children: [
                                  (0, A.jsxs)(r.default, {
                                    onPress: () => We((e) => !e),
                                    accessibilityRole: "button",
                                    style: [
                                      se.field,
                                      {
                                        backgroundColor: K.surface,
                                        borderColor: K.border,
                                        marginTop: w.spacing.sm,
                                      },
                                    ],
                                    children: [
                                      (0, A.jsx)(p.Ionicons, {
                                        name: "calendar-outline",
                                        size: 18,
                                        color: K.textMuted,
                                      }),
                                      (0, A.jsx)(c.default, {
                                        style: [
                                          w.typography.body,
                                          {
                                            color: Ne ? K.text : K.textMuted,
                                            flex: 1,
                                            marginHorizontal: w.spacing.sm,
                                          },
                                        ],
                                        children: Ne
                                          ? (0, P.format)(Ne, "EEE, d MMM yyyy", { locale: J })
                                          : G("fieldDate"),
                                      }),
                                      (0, A.jsx)(p.Ionicons, {
                                        name: Oe ? "chevron-up" : "chevron-down",
                                        size: 18,
                                        color: K.textMuted,
                                      }),
                                    ],
                                  }),
                                  Oe &&
                                    (0, A.jsx)(d.default, {
                                      style: { marginTop: w.spacing.xs },
                                      children: (0, A.jsx)(j.DatePicker, {
                                        value: Ne,
                                        onChange: (e) => {
                                          (Be(e), We(!1));
                                        },
                                      }),
                                    }),
                                ],
                              }),
                            (0, A.jsxs)(d.default, {
                              style: se.inviteRow,
                              children: [
                                (0, A.jsxs)(d.default, {
                                  style: { flex: 1, marginEnd: w.spacing.md },
                                  children: [
                                    (0, A.jsx)(c.default, {
                                      style: [w.typography.bodyStrong, { color: K.text }],
                                      children: G("autoInvite"),
                                    }),
                                    (0, A.jsx)(c.default, {
                                      style: [w.typography.small, { color: K.textMuted }],
                                      children: G("autoInviteHint"),
                                    }),
                                  ],
                                }),
                                (0, A.jsx)(n.default, {
                                  value: $e,
                                  onValueChange: Ve,
                                  trackColor: { false: K.surfaceAlt, true: K.accent },
                                  thumbColor: "#fff",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                (0, A.jsx)(V, { colors: K, children: G("fieldVenue") }),
                (0, A.jsx)(te, {
                  options: [
                    { value: "list", label: G("selectFromList") },
                    { value: "custom", label: G("customVenueTab") },
                  ],
                  value: Fe,
                  onChange: (e) => qe(e),
                  colors: K,
                }),
                "list" === Fe
                  ? (0, A.jsxs)(d.default, {
                      style: { marginTop: w.spacing.sm },
                      children: [
                        (0, A.jsx)(b.Input, {
                          value: Ge,
                          onChangeText: Je,
                          placeholder: G("searchVenuePlaceholder"),
                          style: { marginBottom: w.spacing.sm },
                        }),
                        (0, A.jsx)(x.Card, {
                          padding: "sm",
                          children:
                            0 === qt.length
                              ? (0, A.jsx)(c.default, {
                                  style: [w.typography.small, { color: K.textMuted, padding: w.spacing.sm }],
                                  children: G("searchVenuePlaceholder"),
                                })
                              : qt.map((e, t) => {
                                  const l = e.id === Ke;
                                  return (0, A.jsxs)(
                                    r.default,
                                    {
                                      onPress: () => Qe(e.id),
                                      accessibilityRole: "button",
                                      accessibilityState: { selected: l },
                                      style: [
                                        se.venueRow,
                                        {
                                          borderTopColor: K.border,
                                          borderTopWidth: 0 === t ? 0 : i.default.hairlineWidth,
                                        },
                                      ],
                                      children: [
                                        (0, A.jsx)(p.Ionicons, {
                                          name: l ? "radio-button-on" : "radio-button-off",
                                          size: 20,
                                          color: l ? K.accent : K.textMuted,
                                        }),
                                        (0, A.jsxs)(d.default, {
                                          style: { flex: 1, marginHorizontal: w.spacing.sm },
                                          children: [
                                            (0, A.jsx)(c.default, {
                                              style: [w.typography.bodyStrong, { color: K.text }],
                                              children: e.name,
                                            }),
                                            (0, A.jsx)(c.default, {
                                              style: [w.typography.small, { color: K.textMuted }],
                                              children: e.area,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  );
                                }),
                        }),
                      ],
                    })
                  : (0, A.jsxs)(d.default, {
                      style: { marginTop: w.spacing.sm },
                      children: [
                        (0, A.jsx)(b.Input, {
                          label: G("venueName"),
                          value: Ue,
                          onChangeText: Xe,
                          placeholder: G("venueNamePlaceholder"),
                          maxLength: 80,
                        }),
                        (0, A.jsx)(b.Input, {
                          label: G("venueAddress"),
                          value: Ye,
                          onChangeText: Ze,
                          placeholder: G("venueAddressPlaceholder"),
                          maxLength: 160,
                        }),
                        (0, A.jsx)(k.LocationPicker, { value: et, onChange: tt }),
                      ],
                    }),
                "quick" === Nt &&
                  (0, A.jsxs)(x.Card, {
                    padding: "md",
                    style: { marginTop: w.spacing.lg, borderColor: K.accent, borderWidth: 1.5 },
                    children: [
                      (0, A.jsxs)(d.default, {
                        style: { flexDirection: "row", alignItems: "center", marginBottom: w.spacing.xs },
                        children: [
                          (0, A.jsx)(p.Ionicons, { name: "sparkles", size: 16, color: K.accentText }),
                          (0, A.jsx)(c.default, {
                            style: [w.typography.bodyStrong, { color: K.text, marginStart: w.spacing.sm }],
                            children: G("quickAiTitle"),
                          }),
                        ],
                      }),
                      Pt
                        ? (0, A.jsx)(a.default, {
                            color: K.accentText,
                            style: { marginVertical: w.spacing.sm },
                          })
                        : !Mt
                          ? (0, A.jsxs)(c.default, {
                              style: [w.typography.small, { color: K.text }],
                              children: [
                                G("noRecommendationTitle"),
                                " \u2014 ",
                                G("noRecommendationBody", {
                                  price: (0, C.formatPrice)(Kt),
                                  n: (0, C.formatNumber)(pe),
                                  level: G(lt),
                                }),
                              ],
                            })
                          : (0, A.jsx)(c.default, {
                            style: [w.typography.small, { color: K.text }],
                            children: G("quickAiSummary", {
                              price: (0, C.formatPrice)(Mt.optimal.price_kwd),
                              n: (0, C.formatNumber)(Mt.optimal.max_players),
                              level: G(Mt.optimal.skill_level),
                            }),
                          }),
                      (0, A.jsx)(c.default, {
                        style: [w.typography.caption, { color: K.textMuted, marginTop: w.spacing.xs }],
                        children: G("quickAiNote"),
                      }),
                    ],
                  }),
                "custom" === Nt &&
                  (0, A.jsxs)(A.Fragment, {
                    children: [
                      (0, A.jsx)(V, {
                        colors: K,
                        style: { marginTop: w.spacing.lg },
                        children: G("fieldSkill"),
                      }),
                      (0, A.jsx)(d.default, {
                        style: se.chipRow,
                        children: H.map((e) =>
                          (0, A.jsx)(
                            F,
                            {
                              label: G("all" === e ? "openToAll" : e),
                              active: lt === e,
                              onPress: () => at(e),
                              colors: K,
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, A.jsx)(V, {
                        colors: K,
                        style: { marginTop: w.spacing.lg },
                        children: G("skillPolicyLabel"),
                      }),
                      (0, A.jsx)(te, {
                        options: [
                          { value: "open", label: G("policy_open") },
                          { value: "strict", label: G("policy_strict") },
                          { value: "approval", label: G("policy_approval") },
                        ],
                        value: st,
                        onChange: (e) => rt(e),
                        colors: K,
                      }),
                      (0, A.jsx)(c.default, {
                        style: [w.typography.small, { color: K.textMuted, marginTop: w.spacing.xs }],
                        children: G(
                          "open" === st
                            ? "policyOpenHint"
                            : "strict" === st
                              ? "policyStrictHint"
                              : "policyApprovalHint",
                        ),
                      }),
                      (0, A.jsx)(V, { colors: K, children: G("skillRangeLabel") }),
                      (0, A.jsxs)(x.Card, {
                        padding: "md",
                        children: [
                          (0, A.jsxs)(d.default, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            },
                            children: [
                              (0, A.jsx)(le, {
                                value: ot,
                                min: D.SPORT_SCALES[ne].min,
                                max: nt,
                                onChange: (e) => it((0, D.clampRating)(ne, e)),
                                colors: K,
                                small: !0,
                                step: D.SPORT_SCALES[ne].step,
                              }),
                              (0, A.jsx)(c.default, {
                                style: [w.typography.bodyStrong, { color: K.textMuted }],
                                children: "\u2014",
                              }),
                              (0, A.jsx)(le, {
                                value: nt,
                                min: ot,
                                max: D.SPORT_SCALES[ne].max,
                                onChange: (e) => ct((0, D.clampRating)(ne, e)),
                                colors: K,
                                small: !0,
                                step: D.SPORT_SCALES[ne].step,
                              }),
                            ],
                          }),
                          (0, A.jsx)(c.default, {
                            style: [
                              w.typography.caption,
                              { color: K.textMuted, marginTop: w.spacing.xs, textAlign: "center" },
                            ],
                            children: (0, D.isCategorical)(ne)
                              ? `${G((0, D.levelKey)(ne, ot))} \u2014 ${G((0, D.levelKey)(ne, nt))}`
                              : `${G((0, D.levelKey)(ne, ot))} ${ot.toFixed(1)} \u2014 ${G((0, D.levelKey)(ne, nt))} ${nt.toFixed(1)}`,
                          }),
                        ],
                      }),
                      (0, A.jsxs)(x.Card, {
                        style: { marginTop: w.spacing.lg },
                        padding: "md",
                        children: [
                          (0, A.jsx)(V, { colors: K, children: G("fieldPlayers") }),
                          (0, A.jsxs)(d.default, {
                            style: se.capRow,
                            children: [
                              (0, A.jsx)(le, {
                                value: pe,
                                min: 2,
                                max: 40,
                                onChange: me,
                                disabled: !Wt,
                                colors: K,
                              }),
                              (0, A.jsx)(d.default, { style: { flex: 1 } }),
                            ],
                          }),
                          (0, A.jsxs)(d.default, {
                            style: se.statsRow,
                            children: [
                              (0, A.jsx)(ae, {
                                label: G("currentPlayers"),
                                value: (0, C.formatNumber)(0),
                                colors: K,
                              }),
                              (0, A.jsx)(ae, {
                                label: G("availableSpots"),
                                value: (0, C.formatNumber)(pe),
                                colors: K,
                                accent: !0,
                              }),
                              (0, A.jsx)(ae, {
                                label: G("waitlistCapacityLabel"),
                                value: (0, C.formatNumber)(dt),
                                colors: K,
                              }),
                            ],
                          }),
                          (0, A.jsxs)(d.default, {
                            style: [se.waitRow, { borderTopColor: K.border }],
                            children: [
                              (0, A.jsx)(c.default, {
                                style: [w.typography.small, { color: K.textMuted, flex: 1 }],
                                children: G("waitlistCapacityLabel"),
                              }),
                              (0, A.jsx)(le, {
                                value: dt,
                                min: 0,
                                max: 20,
                                onChange: ut,
                                colors: K,
                                small: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, A.jsx)(V, {
                        colors: K,
                        style: { marginTop: w.spacing.lg },
                        children: G("fieldPrice"),
                      }),
                      (0, A.jsxs)(d.default, {
                        style: se.chipRow,
                        children: [
                          E.map((e) =>
                            (0, A.jsx)(
                              F,
                              {
                                label:
                                  0 === e
                                    ? G("free")
                                    : `${(0, C.formatNumber)(e)} ${"ar" === (0, M.getLocale)() ? "\u062f.\u0643" : "KWD"}`,
                                active: "" === gt.trim() && pt === e,
                                onPress: () => {
                                  (mt(e), ht(""));
                                },
                                colors: K,
                              },
                              e,
                            ),
                          ),
                          (0, A.jsx)(d.default, {
                            style: { width: 110 },
                            children: (0, A.jsx)(b.Input, {
                              value: gt,
                              onChangeText: ht,
                              placeholder: "KWD",
                              keyboardType: "decimal-pad",
                              style: { height: 36, paddingVertical: 0 },
                            }),
                          }),
                        ],
                      }),
                      (0, A.jsxs)(V, {
                        colors: K,
                        style: { marginTop: w.spacing.sm },
                        children: [G("fieldDescription"), " \xb7 ", G("optional")],
                      }),
                      (0, A.jsx)(b.Input, {
                        value: xt,
                        onChangeText: yt,
                        placeholder: G("descriptionPlaceholder"),
                        multiline: !0,
                        numberOfLines: 3,
                        maxLength: 500,
                        style: { minHeight: 76, textAlignVertical: "top" },
                      }),
                      (0, A.jsx)(V, { colors: K, children: G("fieldVisibility") }),
                      (0, A.jsx)(te, {
                        options: [
                          { value: "public", label: G("visibilityPublic") },
                          { value: "private", label: G("visibilityPrivate") },
                        ],
                        value: ft,
                        onChange: (e) => bt(e),
                        colors: K,
                      }),
                      (0, A.jsx)(c.default, {
                        style: [w.typography.small, { color: K.textMuted, marginTop: w.spacing.xs }],
                        children: G("public" === ft ? "visibilityPublicHint" : "visibilityPrivateHint"),
                      }),
                      (0, A.jsx)(V, {
                        colors: K,
                        style: { marginTop: w.spacing.lg },
                        children: G("fieldApproval"),
                      }),
                      (0, A.jsx)(te, {
                        options: [
                          { value: "auto", label: G("approvalAuto") },
                          { value: "manual", label: G("approvalManual") },
                        ],
                        value: jt,
                        onChange: (e) => vt(e),
                        colors: K,
                      }),
                      (0, A.jsx)(c.default, {
                        style: [w.typography.small, { color: K.textMuted, marginTop: w.spacing.xs }],
                        children: G("auto" === jt ? "approvalAutoHint" : "approvalManualHint"),
                      }),
                    ],
                  }),
              ],
            }),
            (0, A.jsx)(d.default, {
              style: [se.bottom, { backgroundColor: K.bg, borderTopColor: K.border }],
              children: (0, A.jsx)(f.Button, {
                title: G(
                  St
                    ? "publishing"
                    : "quick" === Nt
                      ? "quickPublish"
                      : "recurring" === Te
                        ? "publishSeries"
                        : "publishMatch",
                ),
                fullWidth: !0,
                size: "lg",
                loading: St,
                onPress: async () => {
                  if (!e) return;
                  if (!ge.trim()) return s.default.alert(G("error"), G("fieldTitle"));
                  if (!ye) return s.default.alert(G("error"), G("fieldDate"));
                  if (null == ve || null == Se) return s.default.alert(G("error"), G("fieldStartTime"));
                  if (Se <= ve) return s.default.alert(G("error"), G("fieldEndTime"));
                  if (!X && "list" === Fe && !Ke) return s.default.alert(G("error"), G("fieldVenue"));
                  if (!(X || "custom" !== Fe || (Ue.trim() && et)))
                    return s.default.alert(G("error"), G("fieldVenue"));
                  if ("recurring" === Te && "weekly" === Me && 0 === Pe.length)
                    return s.default.alert(G("error"), G("onDays"));
                  const t = (e) => {
                      const t = new Date(ye);
                      return (t.setHours(Math.floor(e / 60), e % 60, 0, 0), t.toISOString());
                    },
                    l = {
                      venue_id: "list" === Fe ? (Ke ?? void 0) : void 0,
                      custom_venue:
                        "custom" === Fe && et
                          ? { name: Ue.trim(), address: Ye.trim(), lat: et.lat, lng: et.lng }
                          : void 0,
                    },
                    a = ot > D.SPORT_SCALES[ne].min ? ot : null,
                    r = nt < D.SPORT_SCALES[ne].max ? nt : null;
                  wt(!0);
                  try {
                    if ("recurring" === Te) {
                      const { template: t, occurrences: o } = await (0, T.createSeries)(
                        e.id,
                        Object.assign(
                          {
                            sport: ne,
                            title: ge.trim(),
                            format: de,
                            skill_level: lt,
                            max_players: pe,
                            waitlist_capacity: dt,
                            price_kwd: Kt,
                            notes: xt,
                            visibility: ft,
                            approval_mode: jt,
                            skill_policy: st,
                            skill_min: a,
                            skill_max: r,
                            start_date: ye.toISOString(),
                            start_minutes: ve,
                            end_minutes: Se,
                            frequency: Me,
                            weekdays: "weekly" === Me ? Pe : [],
                            monthly_week: "monthly" === Me ? De : null,
                            monthly_weekday: "monthly" === Me ? Ae : null,
                            end_date: "date" === He && Ne ? Ne.toISOString() : null,
                            auto_invite: $e,
                          },
                          l,
                        ),
                      );
                      (await q(),
                        s.default.alert(G("seriesCreatedTitle"), G("seriesCreatedBody", { n: o })),
                        Q.replace(`/organizer/series/${t.id}`));
                    } else {
                      const o = "quick" === Nt && !X && Mt ? Mt.optimal : null,
                        i = await (0, T.createMatch)(
                          e.id,
                          Object.assign(
                            {
                              sport: ne,
                              title: ge.trim(),
                              format: de,
                              skill_level: o?.skill_level ?? lt,
                              starts_at: t(ve),
                              ends_at: t(Se),
                              max_players: o?.max_players ?? pe,
                              waitlist_capacity: o ? o.waitlist_cap : dt,
                              price_kwd: o?.price_kwd ?? Kt,
                              notes: xt,
                              visibility: ft,
                              approval_mode: jt,
                              skill_policy: st,
                              skill_min: a,
                              skill_max: r,
                            },
                            l,
                            { court_booking_id: X ?? null },
                          ),
                        );
                      (await q(),
                        s.default.alert(G("matchCreatedTitle"), G("matchCreatedBody")),
                        Q.replace(`/organizer/match/${i.id}`));
                    }
                  } catch (e) {
                    s.default.alert(G("error"), (0, z.storeErrorText)(e?.message ?? "") || G("error"));
                  } finally {
                    wt(!1);
                  }
                },
                leftIcon: (0, A.jsx)(p.Ionicons, { name: "rocket-outline", size: 18, color: K.accentInk }),
              }),
            }),
          ],
        });
      }));
    var t = _r(_d[1]),
      l = e(_r(_d[2])),
      a = e(_r(_d[3])),
      s = e(_r(_d[4])),
      r = e(_r(_d[5])),
      o = e(_r(_d[6])),
      i = e(_r(_d[7])),
      n = e(_r(_d[8])),
      c = e(_r(_d[9])),
      d = e(_r(_d[10])),
      u = _r(_d[11]),
      p = _r(_d[12]),
      h = _r(_d[13]),
      x = _r(_d[14]),
      y = _r(_d[15]),
      f = _r(_d[16]),
      b = _r(_d[17]),
      j = _r(_d[18]),
      v = _r(_d[19]),
      k = _r(_d[20]),
      _ = _r(_d[21]),
      S = _r(_d[22]),
      w = _r(_d[23]),
      T = _r(_d[24]),
      C = _r(_d[25]),
      M = _r(_d[26]),
      I = _r(_d[27]),
      P = _r(_d[28]),
      R = _r(_d[29]),
      D = _r(_d[30]),
      z = _r(_d[31]),
      A = _r(_d[32]),
      G9 = _r(_d[33]);
    const L = ["football", "padel", "tennis"],
      H = ["beginner", "intermediate", "advanced", "all"],
      E = [0, 3, 5, 10],
      N = (e, t) => {
        const l = new Date(e);
        return (l.setHours(Math.floor(t / 60), t % 60, 0, 0), l);
      },
      B = [
        { i: 0, key: "dow_0" },
        { i: 1, key: "dow_1" },
        { i: 2, key: "dow_2" },
        { i: 3, key: "dow_3" },
        { i: 4, key: "dow_4" },
        { i: 5, key: "dow_5" },
        { i: 6, key: "dow_6" },
      ],
      O = ["first", "second", "third", "fourth", "last"],
      W = {
        padel: [
          { format: "padel_2", players: 2 },
          { format: "padel_4", players: 4 },
        ],
        tennis: [
          { format: "tennis_singles", players: 2 },
          { format: "tennis_doubles", players: 4 },
        ],
        football: [
          { format: "football_5v5", players: 10 },
          { format: "football_7v7", players: 14 },
          { format: "football_11v11", players: 22 },
          { format: "football_custom", players: 12, custom: !0 },
        ],
      },
      $ = (e) => Math.max(2, Math.ceil(e / 2));
    const V = ({ children: e, colors: t, style: l }) =>
        (0, A.jsx)(c.default, {
          style: [
            w.typography.smallStrong,
            { color: t.textMuted, marginBottom: w.spacing.xs, marginTop: w.spacing.md },
            l,
          ],
          children: e,
        }),
      F = ({ label: e, active: t, onPress: l, colors: a }) =>
        (0, A.jsx)(r.default, {
          onPress: l,
          accessibilityRole: "button",
          accessibilityState: { selected: t },
          style: [
            se.chip,
            { backgroundColor: t ? a.accent : a.surface, borderColor: t ? a.accent : a.border },
          ],
          children: (0, A.jsx)(c.default, {
            style: [w.typography.smallStrong, { color: t ? a.accentInk : a.text }],
            children: e,
          }),
        }),
      q = (e) => ("riskLow" === e ? "success" : "riskMed" === e ? "warning" : "danger"),
      K = (e) => ("successHigh" === e ? "success" : "successMed" === e ? "warning" : "danger"),
      Q = () => ("ar" === (0, M.getLocale)() ? R.ar : void 0),
      G = (e, t) =>
        t(
          "all" === e
            ? "skillOpenAll"
            : "beginner" === e
              ? "skillBeginner"
              : "advanced" === e
                ? "skillAdvanced"
                : "skillIntermediate",
        ),
      J = {
        venue: "location-outline",
        date: "calendar-outline",
        time: "time-outline",
        duration: "hourglass-outline",
        price: "cash-outline",
        capacity: "people-outline",
        skill: "barbell-outline",
        radius: "navigate-outline",
        replacement: "swap-horizontal-outline",
        waitlist: "list-outline",
        autoInvite: "megaphone-outline",
        notifications: "notifications-outline",
      },
      U = (e, t, l) => {
        switch (e) {
          case "venue":
            return l("recVenue", { value: t.venue_name });
          case "date":
            return l("recDate", {
              value: (0, P.format)(new Date(t.starts_at), "EEE d MMM", { locale: Q() }),
            });
          case "time":
            return l("recTime", { value: (0, P.format)(new Date(t.starts_at), "h:mm a", { locale: Q() }) });
          case "duration":
            return l("recDuration", { value: (0, C.formatNumber)(t.duration_minutes) });
          case "price":
            return l("recPrice", { value: (0, C.formatPrice)(t.price_kwd) });
          case "capacity":
            return l("recCapacity", { value: (0, C.formatNumber)(t.max_players) });
          case "skill":
            return l("recSetSkill", { value: G(t.skill_level, l) });
          case "radius":
            return l("recSetRadius", { value: (0, C.formatNumber)(t.radius_km) });
          case "replacement":
            return l("recReplacement");
          case "waitlist":
            return l("recWaitlist", { value: (0, C.formatNumber)(t.waitlist_cap) });
          case "autoInvite":
            return l("recAutoInvite");
          case "notifications":
            return l("recNotifications", {
              value: t.notification_offsets
                .map((e) => l("hMark", { n: (0, C.formatNumber)(e) }))
                .join(" \xb7 "),
            });
          default:
            return "";
        }
      },
      X = ({
        rkey: e,
        actionable: t,
        why: l,
        o: a,
        colors: s,
        t: o,
        locked: i,
        applied: n,
        onAccept: u,
        onLock: h,
      }) =>
        (0, A.jsxs)(d.default, {
          style: { flexDirection: "row", alignItems: "center", paddingVertical: 6, gap: w.spacing.sm },
          children: [
            (0, A.jsx)(p.Ionicons, {
              name: n ? "checkmark-circle" : J[e],
              size: 16,
              color: n ? s.success : i ? s.textMuted : s.accent,
            }),
            (0, A.jsxs)(d.default, {
              style: { flex: 1, minWidth: 0 },
              children: [
                (0, A.jsx)(c.default, {
                  style: [
                    w.typography.small,
                    { color: n ? s.textMuted : s.text, textDecorationLine: n ? "line-through" : "none" },
                  ],
                  children: U(e, a, o),
                }),
                (0, A.jsx)(c.default, {
                  style: [w.typography.caption, { color: s.textMuted }],
                  children: o(l.k, l.p),
                }),
              ],
            }),
            t
              ? n
                ? (0, A.jsx)(c.default, {
                    style: [w.typography.caption, { color: s.success }],
                    children: o("appliedRec"),
                  })
                : i
                  ? (0, A.jsxs)(r.default, {
                      onPress: h,
                      accessibilityRole: "button",
                      style: { flexDirection: "row", alignItems: "center", gap: 4 },
                      children: [
                        (0, A.jsx)(p.Ionicons, { name: "lock-closed", size: 16, color: s.textMuted }),
                        (0, A.jsx)(c.default, {
                          style: [w.typography.caption, { color: s.textMuted }],
                          children: o("lockedRec"),
                        }),
                      ],
                    })
                  : (0, A.jsxs)(d.default, {
                      style: { flexDirection: "row", alignItems: "center", gap: w.spacing.sm },
                      children: [
                        (0, A.jsx)(f.Button, { title: o("applyRec"), size: "sm", onPress: u }),
                        (0, A.jsx)(r.default, {
                          onPress: h,
                          accessibilityRole: "button",
                          accessibilityLabel: o("lockRec"),
                          hitSlop: 8,
                          children: (0, A.jsx)(p.Ionicons, {
                            name: "lock-open-outline",
                            size: 18,
                            color: s.textMuted,
                          }),
                        }),
                      ],
                    })
              : (0, A.jsx)(y.Badge, { label: o("advisoryTag"), tone: "neutral" }),
          ],
        }),
      Y = ({
        opt: e,
        loading: t,
        colors: l,
        t: s,
        locks: r,
        applied: o,
        onAccept: n,
        onAcceptAll: u,
        onIgnore: h,
        onLock: b,
      }) => {
        const j = e?.predictions;
        return (0, A.jsxs)(x.Card, {
          style: { marginTop: w.spacing.lg, borderColor: l.accent },
          children: [
            (0, A.jsxs)(d.default, {
              style: { flexDirection: "row", alignItems: "center", marginBottom: w.spacing.sm },
              children: [
                (0, A.jsx)(p.Ionicons, { name: "sparkles", size: 18, color: l.accentText }),
                (0, A.jsxs)(d.default, {
                  style: { flex: 1, marginStart: w.spacing.sm },
                  children: [
                    (0, A.jsx)(c.default, {
                      style: [w.typography.smallStrong, { color: l.text }],
                      children: s("optimizerTitle"),
                    }),
                    (0, A.jsx)(c.default, {
                      style: [w.typography.caption, { color: l.textMuted }],
                      children: s("optimizerSub"),
                    }),
                  ],
                }),
                j && (0, A.jsx)(y.Badge, { label: s(j.success_band_key), tone: K(j.success_band_key) }),
              ],
            }),
            !t && e && j
              ? (0, A.jsxs)(A.Fragment, {
                  children: [
                    (0, A.jsxs)(d.default, {
                      style: { flexDirection: "row", alignItems: "baseline", marginBottom: 2 },
                      children: [
                        (0, A.jsxs)(c.default, {
                          style: [w.typography.h1, { color: l[K(j.success_band_key)] }],
                          children: [(0, C.formatNumber)(j.success_pct), "%"],
                        }),
                        (0, A.jsx)(c.default, {
                          style: [w.typography.small, { color: l.textMuted, marginStart: w.spacing.sm }],
                          children: s("matchSuccessLabel"),
                        }),
                      ],
                    }),
                    null != e.current_success_pct &&
                      (0, A.jsxs)(c.default, {
                        style: [w.typography.caption, { color: l.textMuted, marginBottom: w.spacing.sm }],
                        children: [
                          s("nowLabel"),
                          " ",
                          (0, C.formatNumber)(e.current_success_pct),
                          "%  \u2192  ",
                          s("optimizedLabel"),
                          " ",
                          (0, C.formatNumber)(j.success_pct),
                          "%",
                        ],
                      }),
                    e.school_break &&
                      (0, A.jsx)(d.default, {
                        style: { alignSelf: "flex-start", marginBottom: w.spacing.sm },
                        children: (0, A.jsx)(y.Badge, { label: s("schoolBreakOn"), tone: "accent" }),
                      }),
                    (0, A.jsx)(Z, {
                      icon: "trending-up-outline",
                      label: s("predFill"),
                      value: `${(0, C.formatNumber)(j.fill_pct)}%`,
                      colors: l,
                    }),
                    (0, A.jsx)(Z, {
                      icon: "hourglass-outline",
                      label: s("predTimeToFill"),
                      value: s("hMark", { n: (0, C.formatNumber)(j.time_to_fill_hours) }),
                      colors: l,
                    }),
                    (0, A.jsx)(Z, {
                      icon: "cash-outline",
                      label: s("predRevenue"),
                      value: (0, C.formatPrice)(j.revenue_kwd),
                      colors: l,
                    }),
                    (0, A.jsx)(Z, {
                      icon: "wallet-outline",
                      label: s("predProfit"),
                      value: (0, C.formatPrice)(j.profit_kwd),
                      colors: l,
                    }),
                    (0, A.jsx)(Z, {
                      icon: "close-circle-outline",
                      label: s("predCancel"),
                      colors: l,
                      badge: { label: s(j.cancel_band_key), tone: q(j.cancel_band_key) },
                    }),
                    (0, A.jsx)(Z, {
                      icon: "walk-outline",
                      label: s("predNoShow"),
                      colors: l,
                      badge: { label: s(j.no_show_band_key), tone: q(j.no_show_band_key) },
                    }),
                    (0, A.jsx)(Z, {
                      icon: "partly-sunny-outline",
                      label: `${j.weather_emoji} ${s("predWeatherRisk")}`,
                      colors: l,
                      badge: { label: s(j.weather_band_key), tone: q(j.weather_band_key) },
                    }),
                    (0, A.jsx)(Z, {
                      icon: "happy-outline",
                      label: s("predSatisfaction"),
                      colors: l,
                      badge: {
                        label: `${(0, C.formatNumber)(j.satisfaction_pct)}%`,
                        tone:
                          ((v = j.satisfaction_band_key),
                          "satHigh" === v ? "success" : "satMed" === v ? "warning" : "danger"),
                      },
                    }),
                    e.recommendations.length > 0 &&
                      (0, A.jsxs)(A.Fragment, {
                        children: [
                          (0, A.jsx)(d.default, {
                            style: {
                              height: i.default.hairlineWidth,
                              backgroundColor: l.border,
                              marginVertical: w.spacing.sm,
                            },
                          }),
                          (0, A.jsx)(c.default, {
                            style: [w.typography.smallStrong, { color: l.text, marginBottom: 2 }],
                            children: s("recommendationsTitle"),
                          }),
                          e.recommendations.map((t) =>
                            (0, A.jsx)(
                              X,
                              {
                                rkey: t.key,
                                actionable: t.actionable,
                                why: t.why,
                                o: e.optimal,
                                colors: l,
                                t: s,
                                locked: r.has(t.key),
                                applied: o.has(t.key),
                                onAccept: () => n(t.key),
                                onLock: () => b(t.key),
                              },
                              t.key,
                            ),
                          ),
                        ],
                      }),
                    (0, A.jsxs)(d.default, {
                      style: { flexDirection: "row", gap: w.spacing.sm, marginTop: w.spacing.md },
                      children: [
                        (0, A.jsx)(f.Button, {
                          title: s("acceptAllRecs"),
                          size: "sm",
                          onPress: u,
                          leftIcon: (0, A.jsx)(p.Ionicons, {
                            name: "sparkles-outline",
                            size: 15,
                            color: l.accentInk,
                          }),
                          style: { flex: 1 },
                        }),
                        (0, A.jsx)(f.Button, {
                          title: s("ignoreRecs"),
                          size: "sm",
                          variant: "secondary",
                          onPress: h,
                        }),
                      ],
                    }),
                    (0, A.jsx)(c.default, {
                      style: [w.typography.caption, { color: l.textMuted, marginTop: w.spacing.xs }],
                      children: s("optimizerModeledNote"),
                    }),
                  ],
                })
              : (0, A.jsxs)(d.default, {
                  style: { flexDirection: "row", alignItems: "center", paddingVertical: w.spacing.sm },
                  children: [
                    (0, A.jsx)(a.default, { color: l.accentText }),
                    (0, A.jsx)(c.default, {
                      style: [w.typography.caption, { color: l.textMuted, marginStart: w.spacing.sm }],
                      children: s("analyzingMatch"),
                    }),
                  ],
                }),
          ],
        });
        var v;
      },
      Z = ({ icon: e, label: t, value: l, badge: a, colors: s }) =>
        (0, A.jsxs)(d.default, {
          style: { flexDirection: "row", alignItems: "center", paddingVertical: 4 },
          children: [
            (0, A.jsx)(p.Ionicons, { name: e, size: 14, color: s.textMuted }),
            (0, A.jsx)(c.default, {
              style: [w.typography.small, { color: s.textMuted, flex: 1, marginStart: w.spacing.sm }],
              children: t,
            }),
            a
              ? (0, A.jsx)(y.Badge, { label: a.label, tone: a.tone })
              : (0, A.jsx)(c.default, { style: [w.typography.smallStrong, { color: s.text }], children: l }),
          ],
        }),
      ee = ({ sport: e, active: t, onPress: l, colors: a, label: s }) =>
        (0, A.jsxs)(r.default, {
          onPress: l,
          accessibilityRole: "button",
          accessibilityState: { selected: t },
          style: [
            se.chip,
            {
              backgroundColor: t ? a.accent : a.surface,
              borderColor: t ? a.accent : a.border,
              flexDirection: "row",
            },
          ],
          children: [
            (0, A.jsx)(p.Ionicons, { name: C.sportIcon[e], size: 15, color: t ? a.accentInk : a.textMuted }),
            (0, A.jsx)(c.default, {
              style: [
                w.typography.smallStrong,
                { color: t ? a.accentInk : a.text, marginStart: w.spacing.xs },
              ],
              children: s,
            }),
          ],
        }),
      te = ({ options: e, value: t, onChange: l, colors: a }) =>
        (0, A.jsx)(d.default, {
          style: [se.segmented, { backgroundColor: a.surfaceAlt, borderColor: a.border }],
          children: e.map((e) => {
            const s = e.value === t;
            return (0, A.jsx)(
              r.default,
              {
                onPress: () => l(e.value),
                accessibilityRole: "button",
                accessibilityState: { selected: s },
                style: [se.segment, s && { backgroundColor: a.accent }],
                children: (0, A.jsx)(c.default, {
                  style: [w.typography.smallStrong, { color: s ? a.accentInk : a.text }],
                  children: e.label,
                }),
              },
              e.value,
            );
          }),
        }),
      le = ({ value: e, min: t, max: l, onChange: a, colors: s, disabled: o, small: i, step: n = 1 }) => {
        const u = (0, M.useT)(),
          h = i ? 32 : 40,
          x = Number.isInteger(n) ? (0, C.formatNumber)(e) : e.toFixed(1);
        return (0, A.jsxs)(d.default, {
          style: [se.stepper, { opacity: o ? 0.5 : 1 }],
          children: [
            (0, A.jsx)(r.default, {
              disabled: o || e <= t,
              onPress: () => a(Math.max(t, e - n)),
              accessibilityRole: "button",
              accessibilityLabel: u("decreaseLabel"),
              style: [
                se.stepBtn,
                { width: h, height: h, backgroundColor: s.surfaceAlt, borderColor: s.border },
              ],
              children: (0, A.jsx)(p.Ionicons, { name: "remove", size: 18, color: s.text }),
            }),
            (0, A.jsx)(c.default, {
              style: [w.typography.h3, { color: s.text, minWidth: 40, textAlign: "center" }],
              children: x,
            }),
            (0, A.jsx)(r.default, {
              disabled: o || e >= l,
              onPress: () => a(Math.min(l, e + n)),
              accessibilityRole: "button",
              accessibilityLabel: u("increaseLabel"),
              style: [
                se.stepBtn,
                { width: h, height: h, backgroundColor: s.surfaceAlt, borderColor: s.border },
              ],
              children: (0, A.jsx)(p.Ionicons, { name: "add", size: 18, color: s.text }),
            }),
          ],
        });
      },
      ae = ({ label: e, value: t, colors: l, accent: a }) =>
        (0, A.jsxs)(d.default, {
          style: { flex: 1, alignItems: "center" },
          children: [
            (0, A.jsx)(c.default, {
              style: [w.typography.h2, { color: a ? l.accentText : l.text }],
              children: t,
            }),
            (0, A.jsx)(c.default, {
              style: [w.typography.caption, { color: l.textMuted, textAlign: "center" }],
              children: e,
            }),
          ],
        }),
      se = i.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: w.spacing.lg,
          paddingVertical: w.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: i.default.hairlineWidth,
        },
        chipRow: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm, alignItems: "center" },
        inviteRow: { flexDirection: "row", alignItems: "center", marginTop: w.spacing.md },
        chip: {
          minHeight: 38,
          paddingHorizontal: w.spacing.lg,
          borderRadius: w.radius.pill,
          borderWidth: i.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        field: {
          minHeight: 48,
          borderRadius: w.radius.md,
          borderWidth: i.default.hairlineWidth,
          paddingHorizontal: w.spacing.lg,
          flexDirection: "row",
          alignItems: "center",
        },
        segmented: {
          flexDirection: "row",
          borderRadius: w.radius.md,
          borderWidth: i.default.hairlineWidth,
          padding: 3,
          gap: 3,
        },
        segment: {
          flex: 1,
          height: 40,
          borderRadius: w.radius.sm,
          alignItems: "center",
          justifyContent: "center",
        },
        venueRow: {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: w.spacing.sm,
          paddingHorizontal: w.spacing.xs,
        },
        capRow: { flexDirection: "row", alignItems: "center", marginTop: w.spacing.sm },
        statsRow: { flexDirection: "row", marginTop: w.spacing.md },
        waitRow: {
          flexDirection: "row",
          alignItems: "center",
          marginTop: w.spacing.md,
          paddingTop: w.spacing.md,
          borderTopWidth: i.default.hairlineWidth,
        },
        stepper: { flexDirection: "row", alignItems: "center", gap: w.spacing.sm },
        stepBtn: {
          borderRadius: w.radius.md,
          borderWidth: i.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        bottom: {
          paddingHorizontal: w.spacing.lg,
          paddingTop: w.spacing.md,
          paddingBottom: w.spacing.xl,
          borderTopWidth: i.default.hairlineWidth,
        },
      });
  },
  2461,
  [
    33, 15, 618, 461, 445, 369, 281, 158, 477, 146, 273, 381, 1086, 20, 1623, 1624, 626, 625, 2462, 2463,
    2464, 630, 615, 616, 671, 1311, 675, 1171, 1312, 1848, 648, 674, 13, 9001,
  ],
);
