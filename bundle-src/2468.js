__d(
  function (g, _r, _i, _a, _m, _e, _d) {
    var e = _r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, profile: n } = (0, f.useAuth)(),
          { colors: p } = (0, x.useTheme)(),
          N = (0, u.useRouter)(),
          V = (0, T.useT)(),
          [L, E] = (0, t.useState)("sport"),
          [K, $] = (0, t.useState)(null),
          [G, Y] = (0, t.useState)(null),
          [U, q] = (0, t.useState)(null),
          [J, Q] = (0, t.useState)(0),
          [X, Z] = (0, t.useState)(!0),
          [ee, te] = (0, t.useState)(null),
          [ae, re] = (0, t.useState)([]),
          [le, ne] = (0, t.useState)(null),
          [se, oe] = (0, t.useState)(""),
          [ie, ce] = (0, t.useState)(!1),
          [de, ue] = (0, t.useState)(""),
          [pe, ge] = (0, t.useState)(""),
          [he, me] = (0, t.useState)(null),
          [ye, fe] = (0, t.useState)(null),
          [xe, be] = (0, t.useState)(null),
          [je, we] = (0, t.useState)("players"),
          [Se, ve] = (0, t.useState)("0"),
          [ke, Ce] = (0, t.useState)("public"),
          [Te, Pe] = (0, t.useState)(""),
          [Ie, Me] = (0, t.useState)(!1),
          [De, We] = (0, t.useState)(null),
          [Be, Re] = (0, t.useState)(null),
          [ze, Ae] = (0, t.useState)(!1),
          [Ne, Oe] = (0, t.useState)(null),
          He = I.indexOf(L),
          Fe = "female" === n?.audience;
        ((0, t.useEffect)(() => {
          (0, j.fetchVenues)()
            .then(re)
            .catch(() => re([]));
        }, []),
          (0, t.useEffect)(() => {
            e &&
              (0, j.fetchMyOrganizerApplication)(e.id)
                .then((e) => Oe("approved" === e?.status))
                .catch(() => Oe(!1));
          }, [e]),
          (0, t.useEffect)(() => {
            e &&
              (0, j.fetchMatchDraft)(e.id)
                .then((e) => {
                  const t = e?.payload;
                  t &&
                    (t.sport && $(t.sport),
                    t.date && Y(new Date(t.date)),
                    "number" == typeof t.hour && q(t.hour),
                    "number" == typeof t.minute && Q(t.minute),
                    "boolean" == typeof t.pm && Z(t.pm),
                    t.duration && te(t.duration),
                    t.venueId && ne(t.venueId),
                    t.format && me(t.format),
                    t.level && fe(t.level),
                    t.formation && be(t.formation),
                    t.price && ve(String(t.price)),
                    t.notes && Pe(t.notes));
                })
                .catch(() => {});
          }, [e]));
        const Ve = K ? D[K] : [],
          Le = Ve.find((e) => e.format === he) ?? null,
          Ee = Le?.players ?? 0,
          Ke = Ee / 2,
          $e = (0, t.useMemo)(() => (Ke >= 2 ? (0, w.formationsForSize)(Ke) : []), [Ke]);
        ((0, t.useEffect)(() => {
          (me(null), be(null));
        }, [K]),
          (0, t.useEffect)(() => {
            $e.length && !$e.some((e) => e.key === xe) && be($e[0].key);
          }, [$e, xe]));
        const Ge = (0, t.useMemo)(() => {
            if (!G || null === U) return null;
            const e = new Date(G),
              t = (U % 12) + (X ? 12 : 0);
            return (e.setHours(t, J, 0, 0), e);
          }, [G, U, J, X]),
          Ye = ae.find((e) => e.id === le) ?? null,
          Ue = Ye?.name ?? (de.trim() || null),
          qe = {
            sport: !!K,
            when: !!G && null !== U && !!ee,
            where: !!le || de.trim().length > 1,
            format: !!he && !!ye,
            formation: !!xe || 0 === $e.length,
            price: "" !== Se.trim() && Number(Se) >= 0 && Number(Se) <= 50,
            review: !0,
          },
          Je = (0, t.useCallback)(() => {
            e &&
              (0, j.saveMatchDraft)(e.id, {
                sport: K,
                date: G?.toISOString() ?? null,
                hour: U,
                minute: J,
                pm: X,
                duration: ee,
                venueId: le,
                format: he,
                level: ye,
                formation: xe,
                price: Number(Se) || 0,
                notes: Te,
              }).catch(() => {});
          }, [e, K, G, U, J, X, ee, le, he, ye, xe, Se, Te]);
        if (Be) return (0, P.jsx)(O, { gameId: Be, sport: K, venueName: Ue ?? "" });
        if (!1 === Ne)
          return (0, P.jsxs)(c.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: p.bg, padding: b.spacing.lg },
            children: [
              (0, P.jsx)(s.default, {
                style: [b.typography.h1, { color: p.text, marginTop: b.spacing.xl }],
                children: V("newNeedsOrganizer"),
              }),
              (0, P.jsx)(s.default, {
                style: [b.typography.body, { color: p.textMuted, marginTop: b.spacing.sm }],
                children: V("newNeedsOrganizerSub"),
              }),
              (0, P.jsx)(h.Button, {
                title: V("becomeOrganizer"),
                size: "lg",
                fullWidth: !0,
                style: { marginTop: b.spacing.xl },
                onPress: () => N.replace("/organizer/apply"),
              }),
              (0, P.jsx)(r.default, {
                onPress: () => N.back(),
                accessibilityRole: "button",
                hitSlop: 10,
                style: {
                  alignItems: "center",
                  marginTop: b.spacing.md,
                  minHeight: b.touch.minTarget,
                  justifyContent: "center",
                },
                children: (0, P.jsx)(s.default, {
                  style: [b.typography.small, { color: p.textMuted }],
                  children: V("back"),
                }),
              }),
            ],
          });
        const Qe = ({ on: e, label: t, onPress: a, sub: l }) =>
          (0, P.jsxs)(r.default, {
            onPress: a,
            accessibilityRole: "button",
            accessibilityState: { selected: e },
            style: [
              F.chip,
              {
                backgroundColor: e ? p.accent : p.surface,
                borderColor: e ? p.accent : p.border,
                minHeight: b.touch.minTarget,
              },
            ],
            children: [
              (0, P.jsx)(s.default, {
                style: [b.typography.smallStrong, { color: e ? p.accentInk : p.text }],
                children: t,
              }),
              l &&
                (0, P.jsx)(s.default, {
                  style: [b.typography.caption, { color: e ? p.accentInk : p.textMuted, marginTop: 2 }],
                  children: l,
                }),
            ],
          });
        return (0, P.jsxs)(c.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: p.bg },
          children: [
            (0, P.jsx)(i.default, {
              style: { height: 3, backgroundColor: p.border },
              children: (0, P.jsx)(i.default, {
                style: { height: 3, width: ((He + 1) / I.length) * 100 + "%", backgroundColor: p.accent },
              }),
            }),
            (0, P.jsxs)(i.default, {
              style: F.header,
              children: [
                (0, P.jsx)(r.default, {
                  onPress: () => {
                    const e = I.indexOf(L);
                    0 === e ? N.back() : E(I[e - 1]);
                  },
                  accessibilityRole: "button",
                  accessibilityLabel: V("back"),
                  hitSlop: 10,
                  style: [F.iconBtn, { backgroundColor: p.surface, borderColor: p.border }],
                  children: (0, P.jsx)(d.Ionicons, { name: (0, C.chevronBack)(), size: 22, color: p.text }),
                }),
                (0, P.jsx)(s.default, {
                  style: [b.typography.small, { color: p.textMuted, flex: 1, textAlign: "center" }],
                  children: V("stepOfSteps", { n: String(He + 1), total: String(I.length) }),
                }),
                (0, P.jsx)(r.default, {
                  onPress: () => Ae(!0),
                  accessibilityRole: "button",
                  hitSlop: 10,
                  style: {
                    minHeight: b.touch.minTarget,
                    justifyContent: "center",
                    paddingHorizontal: b.spacing.sm,
                  },
                  children: (0, P.jsx)(s.default, {
                    style: [b.typography.small, { color: p.textMuted }],
                    children: V("cancel"),
                  }),
                }),
              ],
            }),
            (0, P.jsxs)(l.default, {
              contentContainerStyle: { padding: b.spacing.lg, paddingBottom: b.spacing.xxxl },
              keyboardShouldPersistTaps: "handled",
              children: [
                "sport" === L &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(s.default, {
                        style: [b.typography.h1, { color: p.text, marginBottom: b.spacing.lg }],
                        children: V("newWhatPlaying"),
                      }),
                      M.map((e) => {
                        const t = K === e;
                        return (0, P.jsxs)(
                          r.default,
                          {
                            onPress: () => $(e),
                            accessibilityRole: "button",
                            accessibilityState: { selected: t },
                            style: [
                              F.sportCard,
                              {
                                backgroundColor: p.surface,
                                borderColor: t ? p.accent : p.border,
                                borderWidth: t ? 2 : 1,
                              },
                            ],
                            children: [
                              (0, P.jsx)(i.default, { style: [F.sportBar, { backgroundColor: H(e) }] }),
                              (0, P.jsx)(d.Ionicons, {
                                name: S.sportIcon[e],
                                size: 24,
                                color: H(e),
                                style: { marginHorizontal: b.spacing.md },
                              }),
                              (0, P.jsx)(s.default, {
                                style: [b.typography.bodyStrong, { color: p.text, flex: 1 }],
                                children: V(e),
                              }),
                              t &&
                                (0, P.jsx)(d.Ionicons, {
                                  name: "checkmark-circle",
                                  size: 22,
                                  color: p.accentText,
                                }),
                            ],
                          },
                          e,
                        );
                      }),
                    ],
                  }),
                "when" === L &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(s.default, {
                        style: [b.typography.h1, { color: p.text, marginBottom: b.spacing.md }],
                        children: V("newWhenIsIt"),
                      }),
                      (0, P.jsx)(l.default, {
                        horizontal: !0,
                        showsHorizontalScrollIndicator: !1,
                        contentContainerStyle: { gap: b.spacing.sm, paddingVertical: 2 },
                        children: Array.from({ length: 14 }, (e, t) => {
                          const a = new Date();
                          (a.setDate(a.getDate() + t), a.setHours(0, 0, 0, 0));
                          const l = G?.toDateString() === a.toDateString(),
                            n = (0, v.toHijri)(a);
                          return (0, P.jsxs)(
                            r.default,
                            {
                              onPress: () => Y(a),
                              accessibilityRole: "button",
                              accessibilityState: { selected: l },
                              style: [
                                F.dateChip,
                                {
                                  backgroundColor: l ? p.accent : p.surface,
                                  borderColor: l ? p.accent : p.border,
                                },
                              ],
                              children: [
                                (0, P.jsx)(s.default, {
                                  style: [b.typography.caption, { color: l ? p.accentInk : p.textMuted }],
                                  children: V(R[a.getDay()]),
                                }),
                                (0, P.jsx)(s.default, {
                                  style: [b.typography.bodyStrong, { color: l ? p.accentInk : p.text }],
                                  children: a.getDate(),
                                }),
                                (0, P.jsxs)(s.default, {
                                  style: [
                                    b.typography.caption,
                                    { color: l ? p.accentInk : p.textMuted, opacity: 0.8 },
                                  ],
                                  children: [n.day, " ", V((0, v.hijriMonthKey)(n.month))],
                                }),
                              ],
                            },
                            t,
                          );
                        }),
                      }),
                      (0, P.jsx)(s.default, {
                        style: [
                          b.typography.smallStrong,
                          { color: p.textMuted, marginTop: b.spacing.lg, marginBottom: b.spacing.xs },
                        ],
                        children: V("newKickoff"),
                      }),
                      (0, P.jsx)(i.default, {
                        style: { flexDirection: "row", flexWrap: "wrap", gap: b.spacing.sm },
                        children: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5].map((e) =>
                          (0, P.jsx)(Qe, { on: U === e, label: String(e), onPress: () => q(e) }, e),
                        ),
                      }),
                      (0, P.jsxs)(i.default, {
                        style: { flexDirection: "row", gap: b.spacing.sm, marginTop: b.spacing.sm },
                        children: [
                          [0, 15, 30, 45].map((e) =>
                            (0, P.jsx)(
                              Qe,
                              { on: J === e, label: `:${String(e).padStart(2, "0")}`, onPress: () => Q(e) },
                              e,
                            ),
                          ),
                          (0, P.jsx)(Qe, { on: !X, label: V("am"), onPress: () => Z(!1) }),
                          (0, P.jsx)(Qe, { on: X, label: V("pm"), onPress: () => Z(!0) }),
                        ],
                      }),
                      (0, P.jsx)(s.default, {
                        style: [
                          b.typography.smallStrong,
                          { color: p.textMuted, marginTop: b.spacing.lg, marginBottom: b.spacing.xs },
                        ],
                        children: V("newHowLong"),
                      }),
                      (0, P.jsx)(i.default, {
                        style: { flexDirection: "row", gap: b.spacing.sm },
                        children: _.map((e) =>
                          (0, P.jsx)(
                            Qe,
                            { on: ee === e, label: V("minutesN", { n: String(e) }), onPress: () => te(e) },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                "where" === L &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(s.default, {
                        style: [b.typography.h1, { color: p.text, marginBottom: b.spacing.md }],
                        children: V("newWhere"),
                      }),
                      (0, P.jsx)(y.Input, {
                        placeholder: V("searchVenuePlaceholder"),
                        value: se,
                        onChangeText: oe,
                        autoCorrect: !1,
                      }),
                      ae
                        .filter(
                          (e) =>
                            !se.trim() ||
                            `${e.name} ${e.area}`.toLowerCase().includes(se.trim().toLowerCase()),
                        )
                        .slice(0, 25)
                        .map((e) => {
                          const t = le === e.id;
                          return (0, P.jsxs)(
                            r.default,
                            {
                              onPress: () => {
                                (ne(e.id), ce(!1));
                              },
                              accessibilityRole: "button",
                              accessibilityState: { selected: t },
                              style: [
                                F.venueRow,
                                {
                                  backgroundColor: p.surface,
                                  borderColor: t ? p.accent : p.border,
                                  borderWidth: t ? 2 : 1,
                                },
                              ],
                              children: [
                                (0, P.jsxs)(i.default, {
                                  style: { flex: 1 },
                                  children: [
                                    (0, P.jsx)(s.default, {
                                      style: [b.typography.bodyStrong, { color: p.text }],
                                      numberOfLines: 1,
                                      children: e.name,
                                    }),
                                    (0, P.jsx)(s.default, {
                                      style: [b.typography.small, { color: p.textMuted }],
                                      children: e.area,
                                    }),
                                  ],
                                }),
                                t &&
                                  (0, P.jsx)(d.Ionicons, {
                                    name: "checkmark-circle",
                                    size: 20,
                                    color: p.accentText,
                                  }),
                              ],
                            },
                            e.id,
                          );
                        }),
                      (0, P.jsx)(r.default, {
                        onPress: () => {
                          (ce((e) => !e), ne(null));
                        },
                        accessibilityRole: "button",
                        hitSlop: 10,
                        style: {
                          alignItems: "center",
                          marginTop: b.spacing.md,
                          minHeight: b.touch.minTarget,
                          justifyContent: "center",
                        },
                        children: (0, P.jsx)(s.default, {
                          style: [b.typography.small, { color: p.accentText }],
                          children: V("newCustomVenue"),
                        }),
                      }),
                      ie &&
                        (0, P.jsxs)(i.default, {
                          style: { marginTop: b.spacing.sm },
                          children: [
                            (0, P.jsx)(y.Input, {
                              placeholder: V("venueNameLabel"),
                              value: de,
                              onChangeText: ue,
                            }),
                            (0, P.jsx)(y.Input, { placeholder: V("areaLabel"), value: pe, onChangeText: ge }),
                          ],
                        }),
                    ],
                  }),
                "format" === L &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(s.default, {
                        style: [b.typography.h1, { color: p.text, marginBottom: b.spacing.md }],
                        children: V("newWhosPlaying"),
                      }),
                      (0, P.jsx)(s.default, {
                        style: [b.typography.smallStrong, { color: p.textMuted, marginBottom: b.spacing.xs }],
                        children: V("newGameFormat"),
                      }),
                      (0, P.jsx)(i.default, {
                        style: { flexDirection: "row", flexWrap: "wrap", gap: b.spacing.sm },
                        children: Ve.map((e) =>
                          (0, P.jsx)(
                            Qe,
                            {
                              on: he === e.format,
                              label: e.label,
                              sub: V("playersN", { n: String(e.players) }),
                              onPress: () => me(e.format),
                            },
                            e.format,
                          ),
                        ),
                      }),
                      (0, P.jsx)(s.default, {
                        style: [
                          b.typography.smallStrong,
                          { color: p.textMuted, marginTop: b.spacing.lg, marginBottom: b.spacing.xs },
                        ],
                        children: V("levelLabel"),
                      }),
                      W.map((e) => {
                        const t = ye === e.key;
                        return (0, P.jsxs)(
                          r.default,
                          {
                            onPress: () => fe(e.key),
                            accessibilityRole: "button",
                            accessibilityState: { selected: t },
                            style: [
                              F.levelRow,
                              {
                                backgroundColor: t ? p.accent : p.surface,
                                borderColor: t ? p.accent : p.border,
                              },
                            ],
                            children: [
                              (0, P.jsx)(s.default, {
                                style: [b.typography.bodyStrong, { color: t ? p.accentInk : p.text }],
                                children: V(e.key).toUpperCase(),
                              }),
                              (0, P.jsx)(s.default, {
                                style: [b.typography.small, { color: t ? p.accentInk : p.textMuted }],
                                children: V(e.descKey),
                              }),
                            ],
                          },
                          e.key,
                        );
                      }),
                      Fe &&
                        (0, P.jsx)(s.default, {
                          style: [b.typography.caption, { color: p.textMuted, marginTop: b.spacing.md }],
                          children: V("newSayidatNote"),
                        }),
                    ],
                  }),
                "formation" === L &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(s.default, {
                        style: [b.typography.h1, { color: p.text }],
                        children: V("newFormation"),
                      }),
                      (0, P.jsxs)(s.default, {
                        style: [
                          b.typography.small,
                          { color: p.textMuted, marginTop: 2, marginBottom: b.spacing.md },
                        ],
                        children: [Le?.label, " \xb7 ", V("playersN", { n: String(Ee) })],
                      }),
                      $e.length > 1 &&
                        (0, P.jsx)(i.default, {
                          style: {
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: b.spacing.sm,
                            marginBottom: b.spacing.md,
                          },
                          children: $e.map((e) =>
                            (0, P.jsx)(
                              Qe,
                              { on: xe === e.key, label: e.label, onPress: () => be(e.key) },
                              e.key,
                            ),
                          ),
                        }),
                      (0, P.jsx)(A, { formationKey: xe, teamSize: Ke }),
                      (0, P.jsx)(s.default, {
                        style: [
                          b.typography.smallStrong,
                          { color: p.textMuted, marginTop: b.spacing.lg, marginBottom: b.spacing.xs },
                        ],
                        children: V("newWhoPicks"),
                      }),
                      (0, P.jsxs)(i.default, {
                        style: { flexDirection: "row", gap: b.spacing.sm },
                        children: [
                          (0, P.jsx)(Qe, {
                            on: "players" === je,
                            label: V("newPlayersChoose"),
                            onPress: () => we("players"),
                          }),
                          (0, P.jsx)(Qe, {
                            on: "organizer" === je,
                            label: V("newOrganiserAssigns"),
                            onPress: () => we("organizer"),
                          }),
                        ],
                      }),
                    ],
                  }),
                "price" === L &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(s.default, {
                        style: [b.typography.h1, { color: p.text, marginBottom: b.spacing.md }],
                        children: V("newFinalDetails"),
                      }),
                      (0, P.jsx)(s.default, {
                        style: [b.typography.smallStrong, { color: p.textMuted, marginBottom: b.spacing.xs }],
                        children: V("pricePerPlayer"),
                      }),
                      (0, P.jsx)(y.Input, {
                        value: Se,
                        onChangeText: (e) => ve(e.replace(/[^0-9.]/g, "").slice(0, 6)),
                        keyboardType: "decimal-pad",
                        affix: V("kwd"),
                      }),
                      (0, P.jsx)(i.default, {
                        style: { flexDirection: "row", flexWrap: "wrap", gap: b.spacing.sm },
                        children: B.map((e) =>
                          (0, P.jsx)(
                            Qe,
                            {
                              on: Number(Se) === e,
                              label: 0 === e ? V("free") : (0, S.formatPrice)(e),
                              onPress: () => ve(String(e)),
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, P.jsx)(s.default, {
                        style: [
                          b.typography.smallStrong,
                          { color: p.textMuted, marginTop: b.spacing.lg, marginBottom: b.spacing.xs },
                        ],
                        children: V("newWhoCanJoin"),
                      }),
                      (0, P.jsxs)(i.default, {
                        style: { flexDirection: "row", gap: b.spacing.sm },
                        children: [
                          (0, P.jsx)(Qe, {
                            on: "public" === ke,
                            label: V("visPublic"),
                            onPress: () => Ce("public"),
                          }),
                          (0, P.jsx)(Qe, {
                            on: "private" === ke,
                            label: V("visInvite"),
                            onPress: () => Ce("private"),
                          }),
                        ],
                      }),
                      (0, P.jsx)(o.default, {
                        value: Te,
                        onChangeText: (e) => Pe(e.slice(0, 280)),
                        placeholder: V("newNotesPlaceholder"),
                        placeholderTextColor: p.textMuted,
                        accessibilityLabel: V("newNotesPlaceholder"),
                        multiline: !0,
                        style: [
                          b.typography.body,
                          F.notes,
                          { color: p.text, backgroundColor: p.surface, borderColor: p.border },
                        ],
                      }),
                      (0, P.jsxs)(s.default, {
                        style: [b.typography.caption, { color: p.textMuted, textAlign: "right" }],
                        children: [Te.length, "/280"],
                      }),
                    ],
                  }),
                "review" === L &&
                  (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(s.default, {
                        style: [b.typography.h1, { color: p.text, marginBottom: b.spacing.md }],
                        children: V("newReview"),
                      }),
                      (0, P.jsxs)(m.Card, {
                        padding: "md",
                        children: [
                          (0, P.jsx)(s.default, {
                            style: [b.typography.caption, { color: p.textMuted }],
                            children: V("appName").toUpperCase(),
                          }),
                          (0, P.jsxs)(s.default, {
                            style: [b.typography.h2, { color: p.text, marginTop: 2 }],
                            children: [ye ? V(ye) : "", " ", K ? V(K) : ""],
                          }),
                          (0, P.jsx)(z, {
                            label: V("date"),
                            value: Ge ? Ge.toLocaleString() : "\u2014",
                            colors: p,
                          }),
                          (0, P.jsx)(z, { label: V("venueLabel"), value: Ue ?? "\u2014", colors: p }),
                          (0, P.jsx)(z, {
                            label: V("fieldPrice"),
                            value: Number(Se) ? (0, S.formatPrice)(Number(Se)) : V("free"),
                            colors: p,
                          }),
                          (0, P.jsx)(z, { label: V("spotsLabel"), value: `1 / ${Ee}`, colors: p }),
                          (0, P.jsx)(z, {
                            label: V("newGameFormat"),
                            value: Le?.label ?? "\u2014",
                            colors: p,
                          }),
                          !!Te.trim() && (0, P.jsx)(z, { label: V("notes"), value: Te.trim(), colors: p }),
                        ],
                      }),
                      (0, P.jsx)(s.default, {
                        style: [b.typography.caption, { color: p.textMuted, marginTop: b.spacing.sm }],
                        children: V("newYouAreIn"),
                      }),
                      De &&
                        (0, P.jsx)(s.default, {
                          style: [b.typography.small, { color: p.danger, marginTop: b.spacing.sm }],
                          children: De,
                        }),
                    ],
                  }),
              ],
            }),
            (0, P.jsx)(i.default, {
              style: { padding: b.spacing.lg, paddingTop: 0 },
              children:
                "review" === L
                  ? (0, P.jsxs)(P.Fragment, {
                      children: [
                        (0, P.jsx)(h.Button, {
                          title: V(Ie ? "newPosting" : "newPostGame"),
                          size: "lg",
                          fullWidth: !0,
                          loading: Ie,
                          onPress: async () => {
                            if (e && K && Ge && he && ye && ee) {
                              (We(null), Me(!0));
                              try {
                                const t = new Date(Ge.getTime() + 6e4 * ee),
                                  a = await (0, j.createMatch)(
                                    e.id,
                                    Object.assign(
                                      {
                                        sport: K,
                                        title: `${V(ye)} ${V(K)}`,
                                        format: he,
                                        skill_level: ye,
                                        starts_at: Ge.toISOString(),
                                        ends_at: t.toISOString(),
                                        max_players: Ee,
                                        price_kwd: Number(Se) || 0,
                                        notes: Te.trim() || void 0,
                                        visibility: ke,
                                        approval_mode: "private" === ke ? "manual" : "auto",
                                      },
                                      le ? { venue_id: le } : {},
                                      le
                                        ? {}
                                        : {
                                            custom_venue: {
                                              name: de.trim(),
                                              address: pe.trim(),
                                              lat: 29.32,
                                              lng: 47.99,
                                            },
                                          },
                                      { formation_key: xe ?? void 0, spot_assignment: je },
                                    ),
                                  );
                                (await (0, j.discardMatchDraft)(e.id).catch(() => {}), Re(a.id));
                              } catch (e) {
                                We((0, k.storeErrorText)(e?.message ?? ""));
                              } finally {
                                Me(!1);
                              }
                            }
                          },
                        }),
                        (0, P.jsx)(r.default, {
                          onPress: () => {
                            (Je(), N.back());
                          },
                          accessibilityRole: "button",
                          hitSlop: 10,
                          style: {
                            alignItems: "center",
                            marginTop: b.spacing.sm,
                            minHeight: b.touch.minTarget,
                            justifyContent: "center",
                          },
                          children: (0, P.jsx)(s.default, {
                            style: [b.typography.small, { color: p.textMuted }],
                            children: V("newSaveDraft"),
                          }),
                        }),
                      ],
                    })
                  : (0, P.jsx)(h.Button, {
                      title: V("continueBtn"),
                      size: "lg",
                      fullWidth: !0,
                      disabled: !qe[L],
                      onPress: () => {
                        Je();
                        const e = I.indexOf(L);
                        e < I.length - 1 && E(I[e + 1]);
                      },
                    }),
            }),
            (0, P.jsx)(a.default, {
              visible: ze,
              transparent: !0,
              animationType: "fade",
              onRequestClose: () => Ae(!1),
              children: (0, P.jsx)(i.default, {
                style: F.backdrop,
                children: (0, P.jsxs)(i.default, {
                  style: [F.sheet, { backgroundColor: p.surface, borderColor: p.border }],
                  children: [
                    (0, P.jsx)(s.default, {
                      style: [b.typography.h2, { color: p.text }],
                      children: V("newDiscardTitle"),
                    }),
                    (0, P.jsx)(s.default, {
                      style: [b.typography.small, { color: p.textMuted, marginTop: b.spacing.xs }],
                      children: V("newDiscardBody"),
                    }),
                    (0, P.jsxs)(i.default, {
                      style: { flexDirection: "row", gap: b.spacing.sm, marginTop: b.spacing.lg },
                      children: [
                        (0, P.jsx)(i.default, {
                          style: { flex: 1 },
                          children: (0, P.jsx)(h.Button, {
                            title: V("newKeepEditing"),
                            variant: "ghost",
                            fullWidth: !0,
                            onPress: () => Ae(!1),
                          }),
                        }),
                        (0, P.jsx)(i.default, {
                          style: { flex: 1 },
                          children: (0, P.jsx)(h.Button, {
                            title: V("newDiscard"),
                            variant: "danger",
                            fullWidth: !0,
                            onPress: async () => {
                              (e && (await (0, j.discardMatchDraft)(e.id).catch(() => {})), Ae(!1), N.back());
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
    var t = _r(_d[1]),
      a = e(_r(_d[2])),
      r = e(_r(_d[3])),
      l = e(_r(_d[4])),
      n = e(_r(_d[5])),
      s = e(_r(_d[6])),
      o = e(_r(_d[7])),
      i = e(_r(_d[8])),
      c = _r(_d[9]),
      d = _r(_d[10]),
      u = _r(_d[11]),
      p = (function (e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            r = new WeakMap();
        return (function (e, t) {
          if (!t && e && e.__esModule) return e;
          var l,
            n,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e)) return s;
          if ((l = t ? r : a)) {
            if (l.has(e)) return l.get(e);
            l.set(e, s);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((n = (l = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (n.get || n.set)
                ? l(s, t, n)
                : (s[t] = e[t]));
          return s;
        })(e, t);
      })(_r(_d[12])),
      h = _r(_d[13]),
      m = _r(_d[14]),
      y = _r(_d[15]),
      f = _r(_d[16]),
      x = _r(_d[17]),
      b = _r(_d[18]),
      j = _r(_d[19]),
      w = _r(_d[20]),
      S = _r(_d[21]),
      v = _r(_d[22]),
      k = _r(_d[23]),
      C = _r(_d[24]),
      T = _r(_d[25]),
      P = _r(_d[26]);
    const I = ["sport", "when", "where", "format", "formation", "price", "review"],
      M = ["football", "padel", "tennis"],
      D = {
        football: [
          { format: "football_5v5", label: "5v5", players: 10 },
          { format: "football_7v7", label: "7v7", players: 14 },
          { format: "football_11v11", label: "11v11", players: 22 },
        ],
        padel: [{ format: "padel_4", label: "2v2", players: 4 }],
        tennis: [
          { format: "tennis_singles", label: "1v1", players: 2 },
          { format: "tennis_doubles", label: "2v2", players: 4 },
        ],
      },
      W = [
        { key: "beginner", descKey: "lvlBeginnerDesc" },
        { key: "intermediate", descKey: "lvlIntermediateDesc" },
        { key: "advanced", descKey: "lvlAdvancedDesc" },
      ],
      _ = [60, 90, 120],
      B = [0, 1.5, 2, 2.5, 3, 3.5, 4],
      R = ["daySun", "dayMon", "dayTue", "dayWed", "dayThu", "dayFri", "daySat"];
    const z = ({ label: e, value: t, colors: a }) =>
        (0, P.jsxs)(i.default, {
          style: [F.reviewRow, { borderTopColor: a.border }],
          children: [
            (0, P.jsx)(s.default, { style: [b.typography.small, { color: a.textMuted }], children: e }),
            (0, P.jsx)(s.default, {
              style: [b.typography.smallStrong, { color: a.text, flex: 1, textAlign: "right" }],
              numberOfLines: 2,
              children: t,
            }),
          ],
        }),
      A = ({ formationKey: e, teamSize: a }) => {
        const { colors: r } = (0, x.useTheme)(),
          l = (0, t.useMemo)(() => {
            const t = e ? /^(\d+(?:-\d+)+)$/.exec(e) : null;
            if (t) return t[1].split("-").map(Number);
            const r = Math.max(1, a - 1);
            return [Math.ceil(r / 2), Math.floor(r / 2)].filter((e) => e > 0);
          }, [e, a]),
          n = (e) =>
            (0, P.jsx)(i.default, {
              style: { flex: 1, justifyContent: "space-evenly", transform: [{ scaleY: e ? -1 : 1 }] },
              children: [[1], ...l].map((t, a) =>
                (0, P.jsx)(
                  i.default,
                  {
                    style: { flexDirection: "row", justifyContent: "space-evenly" },
                    children: Array.from({ length: Array.isArray(t) ? t[0] : t }, (t, a) =>
                      (0, P.jsx)(
                        i.default,
                        {
                          style: [
                            F.slot,
                            { borderColor: "rgba(255,255,255,0.55)", transform: [{ scaleY: e ? -1 : 1 }] },
                          ],
                          children: (0, P.jsx)(d.Ionicons, {
                            name: "add",
                            size: 14,
                            color: "rgba(255,255,255,0.7)",
                          }),
                        },
                        a,
                      ),
                    ),
                  },
                  a,
                ),
              ),
            });
        return (0, P.jsxs)(i.default, {
          style: [F.pitch, { borderColor: r.border }],
          children: [n(!1), (0, P.jsx)(i.default, { style: F.halfway }), n(!0)],
        });
      },
      N = {
        code: "function newTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.value}]};}",
      },
      O = ({ gameId: e, sport: a, venueName: r }) => {
        const { colors: l } = (0, x.useTheme)(),
          n = (0, u.useRouter)(),
          o = (0, T.useT)(),
          m = (0, p.useReducedMotion)(),
          y = (0, p.useSharedValue)(0),
          f = (0, p.useAnimatedStyle)(
            (function () {
              const e = () => ({ transform: [{ scale: y.value }] });
              return ((e.__closure = { scale: y }), (e.__workletHash = 0xb2fec63246a), (e.__initData = N), e);
            })(),
          );
        return (
          (0, t.useEffect)(() => {
            y.value = m ? 1 : (0, p.withSpring)(1, { damping: 12 });
            const t = setTimeout(() => n.replace(`/game/${e}`), 4e3);
            return () => clearTimeout(t);
          }, [e]),
          (0, P.jsxs)(c.SafeAreaView, {
            style: {
              flex: 1,
              backgroundColor: l.bg,
              alignItems: "center",
              justifyContent: "center",
              padding: b.spacing.xl,
            },
            children: [
              (0, P.jsx)(p.default.View, {
                style: [{ alignItems: "center" }, f],
                children: (0, P.jsx)(i.default, {
                  style: [F.tick, { backgroundColor: l.accent }],
                  children: (0, P.jsx)(d.Ionicons, { name: "checkmark", size: 44, color: l.accentInk }),
                }),
              }),
              (0, P.jsx)(s.default, {
                style: [b.typography.h1, { color: l.text, marginTop: b.spacing.lg }],
                children: o("newPosted"),
              }),
              (0, P.jsx)(s.default, {
                style: [
                  b.typography.body,
                  { color: l.textMuted, marginTop: b.spacing.xs, textAlign: "center" },
                ],
                children: o("newPostedSub"),
              }),
              (0, P.jsx)(i.default, {
                style: { alignSelf: "stretch", marginTop: b.spacing.xl, gap: b.spacing.sm },
                children: (0, P.jsx)(h.Button, {
                  title: o("newViewGame"),
                  size: "lg",
                  fullWidth: !0,
                  onPress: () => n.replace(`/game/${e}`),
                }),
              }),
            ],
          })
        );
      },
      H = (e) => ("football" === e ? "#E85D1A" : "padel" === e ? "#2D6BE4" : "#1FA974"),
      F = n.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: b.spacing.lg,
          paddingVertical: b.spacing.sm,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        sportCard: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: b.radius.lg,
          marginBottom: b.spacing.sm,
          overflow: "hidden",
          minHeight: 76,
        },
        sportBar: { width: 6, alignSelf: "stretch" },
        chip: {
          borderWidth: 1,
          borderRadius: b.radius.pill,
          paddingHorizontal: b.spacing.md,
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "center",
        },
        dateChip: {
          borderWidth: 1,
          borderRadius: b.radius.md,
          paddingHorizontal: b.spacing.md,
          paddingVertical: b.spacing.sm,
          alignItems: "center",
          minWidth: 70,
        },
        venueRow: {
          flexDirection: "row",
          alignItems: "center",
          borderRadius: b.radius.md,
          padding: b.spacing.md,
          marginTop: b.spacing.sm,
        },
        levelRow: {
          borderWidth: 1,
          borderRadius: b.radius.md,
          padding: b.spacing.md,
          marginBottom: b.spacing.sm,
        },
        pitch: {
          height: 320,
          backgroundColor: "#1A4A2A",
          borderRadius: b.radius.lg,
          borderWidth: 1,
          padding: b.spacing.sm,
          overflow: "hidden",
        },
        halfway: { height: 1, backgroundColor: "rgba(255,255,255,0.5)" },
        slot: {
          width: 34,
          height: 34,
          borderRadius: 17,
          borderWidth: 1,
          borderStyle: "dashed",
          alignItems: "center",
          justifyContent: "center",
        },
        notes: {
          borderWidth: 1,
          borderRadius: b.radius.md,
          padding: b.spacing.md,
          marginTop: b.spacing.lg,
          minHeight: 90,
          textAlignVertical: "top",
        },
        reviewRow: {
          flexDirection: "row",
          alignItems: "center",
          gap: b.spacing.sm,
          borderTopWidth: n.default.hairlineWidth,
          paddingVertical: 10,
          marginTop: 10,
        },
        backdrop: {
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          alignItems: "center",
          justifyContent: "center",
          padding: b.spacing.lg,
        },
        sheet: {
          width: "100%",
          maxWidth: 420,
          borderRadius: b.radius.lg,
          borderWidth: 1,
          padding: b.spacing.lg,
        },
        tick: { width: 92, height: 92, borderRadius: 46, alignItems: "center", justifyContent: "center" },
      });
  },
  2468,
  [
    33, 15, 467, 369, 281, 158, 146, 394, 273, 381, 1086, 20, 918, 626, 1623, 625, 630, 615, 616, 671, 654,
    1311, 2469, 674, 1171, 675, 13,
  ],
);
