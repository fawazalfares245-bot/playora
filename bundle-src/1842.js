__d(
  function (g, r, _i, a, m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, y.useLocalSearchParams)(),
          { user: c, profile: P } = (0, x.useAuth)(),
          { colors: H } = (0, b.useTheme)(),
          z = (0, y.useRouter)(),
          L = (0, T.useT)(),
          [A, $] = (0, t.useState)(null),
          [O, E] = (0, t.useState)(null),
          [U, V] = (0, t.useState)(0),
          [q, F] = (0, t.useState)(60),
          [G, N] = (0, t.useState)([]),
          [K, J] = (0, t.useState)(!0),
          [Q, X] = (0, t.useState)(!1),
          [Y, Z] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          (async () => {
            if (!e) return;
            const t = await (0, S.fetchVenueBookingDetail)(e);
            ($(t), E(t?.courts[0] ?? null), J(!1));
          })();
        }, [e]);
        const [ee, te] = (0, t.useState)(null),
          [ae, re] = (0, t.useState)(0);
        (0, t.useEffect)(() => {
          if (!O) return;
          let e = !1;
          return (
            (async () => {
              (X(!0), te(null));
              try {
                const t = new Date();
                t.setDate(t.getDate() + U);
                const l = await (0, S.fetchCourtAvailability)(O.id, t.toISOString(), q);
                e || N(l?.slots ?? []);
              } catch (t) {
                e || (N([]), te((0, v.storeErrorText)(t?.message ?? "") || L("error")));
              } finally {
                e || X(!1);
              }
            })(),
            () => {
              e = !0;
            }
          );
        }, [O, U, q, ae]);
        const [le, oe] = (0, t.useState)(null),
          se = async (e) => {
            if (c && O) {
              (oe(null), Z(!0));
              try {
                const t = await (0, S.reserveCourt)(c.id, O.id, e.starts_at, e.ends_at, "split_equal");
                z.replace(`/booking/${t.id}`);
              } catch (e) {
                (o.default.alert(L("error"), (0, v.storeErrorText)(e?.message ?? "") || L("error")),
                  re((e) => e + 1));
              } finally {
                Z(!1);
              }
            }
          };
        if (K || !A)
          return (0, B.jsx)(p.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: H.bg },
            children: (0, B.jsx)(l.default, { color: H.accentText }),
          });
        const ne = O ? (0, k.formatPrice)((O.price_per_hour_kwd * q) / 60) : "",
          ie = A?.profile?.cancellation_cutoff_hours ?? 0;
        return (0, B.jsxs)(p.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: H.bg },
          children: [
            (0, B.jsxs)(u.default, {
              style: I.header,
              children: [
                (0, B.jsx)(n.default, {
                  onPress: () => z.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: L("back"),
                  style: [I.iconBtn, { backgroundColor: H.surface, borderColor: H.border }],
                  children: (0, B.jsx)(f.Ionicons, { name: (0, _.chevronBack)(), size: 22, color: H.text }),
                }),
                (0, B.jsx)(d.default, {
                  style: [j.typography.h2, { color: H.text, flex: 1, marginHorizontal: j.spacing.md }],
                  numberOfLines: 1,
                  children: A.venue.name,
                }),
              ],
            }),
            (0, B.jsxs)(i.default, {
              contentContainerStyle: { padding: j.spacing.lg, paddingBottom: j.spacing.xxxl },
              children: [
                (0, B.jsx)(d.default, {
                  style: [j.typography.small, { color: H.textMuted, marginBottom: j.spacing.xs }],
                  children: A.venue.area,
                }),
                ie > 0 &&
                  (0, B.jsx)(d.default, {
                    style: [j.typography.small, { color: H.text, marginBottom: j.spacing.md }],
                    children: L("freeCancelUpTo", { h: ie }),
                  }),
                "female" === P?.audience &&
                  (A.venue.ladies_hours?.length ?? 0) > 0 &&
                  (0, B.jsxs)(u.default, {
                    style: [M.ladies, { borderColor: H.accent, backgroundColor: H.accentMuted }],
                    children: [
                      (0, B.jsx)(d.default, {
                        style: [j.typography.smallStrong, { color: H.text }],
                        children: L("ladiesHoursTitle"),
                      }),
                      (0, B.jsx)(d.default, {
                        style: [j.typography.small, { color: H.textMuted, marginTop: 2 }],
                        children: A.venue.ladies_hours
                          .map((e) => `${L(D[e.day])} ${e.start}\u2013${e.end}`)
                          .join(" \xb7 "),
                      }),
                      A.venue.staffing_note &&
                        (0, B.jsx)(d.default, {
                          style: [j.typography.caption, { color: H.textMuted, marginTop: 2 }],
                          children: A.venue.staffing_note,
                        }),
                    ],
                  }),
                (0, B.jsx)(d.default, {
                  style: [j.typography.smallStrong, { color: H.textMuted, marginBottom: j.spacing.xs }],
                  children: L("selectCourt"),
                }),
                (0, B.jsx)(C.KwdHint, { style: { marginBottom: j.spacing.sm } }),
                (0, B.jsx)(u.default, {
                  style: I.chipRow,
                  children: A.courts.map((e) => {
                    const t = O?.id === e.id;
                    return (0, B.jsxs)(
                      n.default,
                      {
                        onPress: () => E(e),
                        accessibilityRole: "button",
                        accessibilityState: { selected: t },
                        style: [
                          I.courtChip,
                          { backgroundColor: t ? H.accent : H.surface, borderColor: t ? H.accent : H.border },
                        ],
                        children: [
                          (0, B.jsx)(f.Ionicons, {
                            name: k.sportIcon[e.sport],
                            size: 13,
                            color: t ? "#fff" : (0, k.sportColor)(e.sport),
                          }),
                          (0, B.jsx)(d.default, {
                            style: [
                              j.typography.smallStrong,
                              { color: t ? "#fff" : H.text, marginStart: 4, flexShrink: 1, maxWidth: 150 },
                            ],
                            numberOfLines: 1,
                            children: e.name,
                          }),
                          (0, B.jsxs)(d.default, {
                            style: [
                              j.typography.caption,
                              { color: t ? "#fff" : H.textMuted, marginStart: 6 },
                            ],
                            children: [(0, k.formatPrice)(e.price_per_hour_kwd), L("perHour")],
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                }),
                (0, B.jsx)(d.default, {
                  style: [
                    j.typography.smallStrong,
                    { color: H.textMuted, marginTop: j.spacing.md, marginBottom: j.spacing.xs },
                  ],
                  children: L("pickDate"),
                }),
                (0, B.jsx)(i.default, {
                  horizontal: !0,
                  showsHorizontalScrollIndicator: !1,
                  contentContainerStyle: { gap: j.spacing.sm },
                  children: Array.from({ length: 7 }).map((e, t) => {
                    const l = U === t,
                      o = 0 === t ? L("todayLabel") : 1 === t ? L("tomorrowLabel") : R(t);
                    return (0, B.jsx)(
                      n.default,
                      {
                        onPress: () => V(t),
                        accessibilityRole: "button",
                        accessibilityState: { selected: l },
                        style: [
                          I.dayChip,
                          { backgroundColor: l ? H.accent : H.surface, borderColor: l ? H.accent : H.border },
                        ],
                        children: (0, B.jsx)(d.default, {
                          style: [j.typography.small, { color: l ? "#fff" : H.text, textAlign: "center" }],
                          children: o,
                        }),
                      },
                      t,
                    );
                  }),
                }),
                (0, B.jsx)(d.default, {
                  style: [
                    j.typography.smallStrong,
                    { color: H.textMuted, marginTop: j.spacing.md, marginBottom: j.spacing.xs },
                  ],
                  children: L("durationLabel"),
                }),
                (0, B.jsx)(u.default, {
                  style: I.chipRow,
                  children: W.map((e) => {
                    const t = q === e;
                    return (0, B.jsx)(
                      n.default,
                      {
                        onPress: () => F(e),
                        accessibilityRole: "button",
                        accessibilityState: { selected: t },
                        style: [
                          I.courtChip,
                          { backgroundColor: t ? H.accent : H.surface, borderColor: t ? H.accent : H.border },
                        ],
                        children: (0, B.jsx)(d.default, {
                          style: [j.typography.smallStrong, { color: t ? "#fff" : H.text }],
                          children:
                            e % 60 == 0
                              ? L("hoursUnitShort", { n: (0, k.formatNumber)(e / 60) })
                              : L("minUnit", { n: (0, k.formatNumber)(e) }),
                        }),
                      },
                      e,
                    );
                  }),
                }),
                (0, B.jsxs)(u.default, {
                  style: {
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: j.spacing.lg,
                    marginBottom: j.spacing.sm,
                  },
                  children: [
                    (0, B.jsx)(d.default, {
                      style: [j.typography.h3, { color: H.text, flex: 1 }],
                      children: L("availableSlots"),
                    }),
                    O && (0, B.jsx)(h.Badge, { label: `${ne} \xb7 ${L("courtFee")}`, tone: "accent" }),
                  ],
                }),
                Q
                  ? (0, B.jsx)(l.default, { color: H.accentText, style: { marginTop: j.spacing.lg } })
                  : ee
                    ? (0, B.jsxs)(u.default, {
                        style: { padding: j.spacing.md },
                        children: [
                          (0, B.jsx)(d.default, {
                            style: [j.typography.small, { color: H.danger }],
                            children: ee,
                          }),
                          (0, B.jsx)(w.Button, {
                            title: L("retry"),
                            size: "sm",
                            variant: "secondary",
                            onPress: () => re((e) => e + 1),
                            style: { marginTop: j.spacing.sm, alignSelf: "flex-start" },
                          }),
                        ],
                      })
                    : 0 === G.length
                      ? (0, B.jsx)(d.default, {
                          style: [j.typography.small, { color: H.textMuted, padding: j.spacing.md }],
                          children: L("noSlots"),
                        })
                      : (0, B.jsx)(u.default, {
                          style: I.slotGrid,
                          children: G.map((e) => {
                            const t = (0, k.formatClock)(e.starts_at);
                            return (0, B.jsxs)(
                              n.default,
                              {
                                disabled: !e.available || Y,
                                onPress: () => oe(e),
                                accessibilityRole: "button",
                                style: [
                                  I.slot,
                                  {
                                    backgroundColor: e.available ? H.surface : H.surfaceAlt,
                                    borderColor: e.available ? H.accent : H.border,
                                    opacity: e.available ? 1 : 0.5,
                                  },
                                ],
                                children: [
                                  (0, B.jsx)(d.default, {
                                    style: [
                                      j.typography.smallStrong,
                                      { color: e.available ? H.text : H.textMuted },
                                    ],
                                    children: t,
                                  }),
                                  !e.available &&
                                    (0, B.jsx)(d.default, {
                                      style: [j.typography.caption, { color: H.textMuted }],
                                      children: L("slotTaken"),
                                    }),
                                ],
                              },
                              e.starts_at,
                            );
                          }),
                        }),
                Y && (0, B.jsx)(l.default, { color: H.accentText, style: { marginTop: j.spacing.md } }),
              ],
            }),
            (0, B.jsx)(s.default, {
              visible: null != le,
              transparent: !0,
              animationType: "fade",
              onRequestClose: () => oe(null),
              children: (0, B.jsx)(u.default, {
                style: I.backdrop,
                children: (0, B.jsxs)(u.default, {
                  style: [I.sheet, { backgroundColor: H.surface, borderColor: H.border }],
                  children: [
                    (0, B.jsx)(d.default, {
                      style: [j.typography.h2, { color: H.text }],
                      children: L("confirmBookingTitle"),
                    }),
                    le &&
                      O &&
                      (0, B.jsxs)(u.default, {
                        style: { marginTop: j.spacing.sm, gap: 4 },
                        children: [
                          (0, B.jsxs)(d.default, {
                            style: [j.typography.body, { color: H.text }],
                            children: [A.venue.name, " \xb7 ", O.name],
                          }),
                          (0, B.jsxs)(d.default, {
                            style: [j.typography.body, { color: H.textMuted }],
                            children: [
                              (0, k.formatDayLabel)(le.starts_at),
                              " \xb7 ",
                              (0, k.formatClock)(le.starts_at),
                              " \u2013 ",
                              (0, k.formatClock)(le.ends_at),
                            ],
                          }),
                          (0, B.jsx)(d.default, {
                            style: [j.typography.bodyStrong, { color: H.text, marginTop: j.spacing.xs }],
                            children: (0, k.formatPrice)((O.price_per_hour_kwd * q) / 60),
                          }),
                          ie > 0 &&
                            (0, B.jsx)(d.default, {
                              style: [j.typography.small, { color: H.textMuted, marginTop: j.spacing.xs }],
                              children: L("freeCancelUpTo", { h: ie }),
                            }),
                        ],
                      }),
                    (0, B.jsxs)(u.default, {
                      style: { flexDirection: "row", gap: j.spacing.sm, marginTop: j.spacing.lg },
                      children: [
                        (0, B.jsx)(u.default, {
                          style: { flex: 1 },
                          children: (0, B.jsx)(w.Button, {
                            title: L("cancel"),
                            variant: "ghost",
                            fullWidth: !0,
                            onPress: () => oe(null),
                          }),
                        }),
                        (0, B.jsx)(u.default, {
                          style: { flex: 1 },
                          children: (0, B.jsx)(w.Button, {
                            title: L("reserveBtn"),
                            fullWidth: !0,
                            loading: Y,
                            onPress: () => le && se(le),
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
    var t = r(_d[1]),
      l = e(r(_d[2])),
      o = e(r(_d[3])),
      s = e(r(_d[4])),
      n = e(r(_d[5])),
      i = e(r(_d[6])),
      c = e(r(_d[7])),
      d = e(r(_d[8])),
      u = e(r(_d[9])),
      p = r(_d[10]),
      f = r(_d[11]),
      y = r(_d[12]),
      h = r(_d[13]),
      x = r(_d[14]),
      b = r(_d[15]),
      j = r(_d[16]),
      S = r(_d[17]),
      C = r(_d[18]),
      k = r(_d[19]),
      w = r(_d[20]),
      T = r(_d[21]),
      _ = r(_d[22]),
      v = r(_d[23]),
      B = r(_d[24]);
    const W = [60, 90, 120],
      D = ["daySun", "dayMon", "dayTue", "dayWed", "dayThu", "dayFri", "daySat"],
      R = (e) => {
        const t = new Date();
        return (t.setDate(t.getDate() + e), (0, k.formatDayLabel)(t.toISOString()));
      };
    const M = c.default.create({
        ladies: {
          borderWidth: 1,
          borderRadius: j.radius.md,
          padding: j.spacing.md,
          marginBottom: j.spacing.md,
        },
      }),
      I = c.default.create({
        backdrop: {
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          alignItems: "center",
          justifyContent: "center",
          padding: j.spacing.lg,
        },
        sheet: {
          width: "100%",
          maxWidth: 420,
          borderRadius: j.radius.lg,
          borderWidth: 1,
          padding: j.spacing.lg,
        },
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: j.spacing.lg,
          paddingVertical: j.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: c.default.hairlineWidth,
        },
        chipRow: { flexDirection: "row", flexWrap: "wrap", gap: j.spacing.sm },
        courtChip: {
          flexDirection: "row",
          alignItems: "center",
          minHeight: 36,
          paddingHorizontal: j.spacing.md,
          borderRadius: 999,
          borderWidth: c.default.hairlineWidth,
        },
        dayChip: {
          minWidth: 84,
          minHeight: 40,
          paddingHorizontal: j.spacing.sm,
          borderRadius: j.radius.md,
          borderWidth: c.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        slotGrid: { flexDirection: "row", flexWrap: "wrap", gap: j.spacing.sm },
        slot: {
          width: "22%",
          minHeight: 48,
          borderRadius: j.radius.md,
          borderWidth: c.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
      });
  },
  1842,
  [
    33, 15, 461, 445, 467, 369, 281, 158, 146, 273, 381, 1086, 20, 1624, 630, 615, 616, 671, 1839, 1311, 626,
    675, 1171, 674, 13,
  ],
);
