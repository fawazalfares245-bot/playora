__d(
  function (g, r, _i, a, m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.ChallengeSheet = void 0));
    var t = r(_d[1]),
      n = e(r(_d[2])),
      l = e(r(_d[3])),
      o = (e(r(_d[4])), e(r(_d[5]))),
      i = e(r(_d[6])),
      s = e(r(_d[7])),
      c = e(r(_d[8])),
      d = r(_d[9]),
      u = r(_d[10]),
      f = r(_d[11]),
      h = r(_d[12]),
      p = r(_d[13]),
      y = r(_d[14]),
      x = r(_d[15]),
      b = r(_d[16]),
      j = r(_d[17]),
      C = r(_d[18]),
      S = r(_d[19]),
      v = r(_d[20]),
      T = r(_d[21]);
    const M = () => {
      const e = (e, t) => {
        const n = new Date();
        return (n.setDate(n.getDate() + ((((e - n.getDay()) % 7) + 7) % 7 || 7)), n.setHours(t, 0, 0, 0), n);
      };
      return [e(5, 20), e(6, 21), e(0, 19)];
    };
    _e.ChallengeSheet = ({ target: e, fromTeams: i, onClose: w, onSent: R }) => {
      const { user: D } = (0, h.useAuth)(),
        { colors: L } = (0, p.useTheme)(),
        W = (0, v.useT)(),
        E = (0, y.useReducedMotion)(),
        [I, A] = (0, t.useState)(0),
        [B, _] = (0, t.useState)(0),
        [P, z] = (0, t.useState)("PSA Kuwait"),
        [N, H] = (0, t.useState)(!1),
        O = (0, t.useMemo)(M, []),
        V = (0, t.useRef)(null),
        K = (0, t.useRef)(w);
      ((K.current = w),
        (0, t.useEffect)(() => {
          if (!e) return;
          if ("undefined" == typeof document) return;
          const t = document.activeElement,
            n = V.current;
          (n?.setAttribute?.("tabindex", "-1"), n?.focus?.());
          const l = (e) => {
            if ("Escape" === e.key) return void K.current();
            if ("Tab" !== e.key || !n) return;
            const t = n.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            );
            if (0 === t.length) return;
            const l = t[0],
              o = t[t.length - 1];
            e.shiftKey && document.activeElement === l
              ? (e.preventDefault(), o.focus())
              : ((e.shiftKey || document.activeElement !== o) && n.contains(document.activeElement)) ||
                (e.preventDefault(), l.focus());
          };
          return (
            document.addEventListener("keydown", l, !0),
            () => {
              (document.removeEventListener("keydown", l, !0), t?.focus?.());
            }
          );
        }, [e]));
      const [q, F] = (0, t.useState)(null),
        [U, G] = (0, t.useState)(0),
        J = (i ?? []).filter((t) => t.id !== e?.id),
        Q = J[Math.min(B, Math.max(0, J.length - 1))] ?? null;
      (0, t.useEffect)(() => {
        if (!D || !Q || !e) return (F(null), void G(0));
        ((0, b.fetchH2HMap)(D.id, Q.id)
          .then((t) => F(t[e.id] ?? null))
          .catch(() => F(null)),
          (0, b.fetchTeam)(e.id, D.id)
            .then((e) => G(e?.dodges ?? 0))
            .catch(() => G(0)));
      }, [D, Q?.id, e?.id]);
      return (0, T.jsx)(l.default, {
        visible: !!e,
        transparent: !0,
        animationType: (0, y.sheetAnimation)(E),
        onRequestClose: w,
        children: (0, T.jsx)(o.default, {
          style: k.scrim,
          onPress: w,
          accessibilityRole: "button",
          accessibilityLabel: W("cancel"),
          children: (0, T.jsxs)(o.default, {
            ref: V,
            style: [k.sheet, { backgroundColor: L.surface }],
            onPress: () => {},
            accessibilityViewIsModal: !0,
            children: [
              e &&
                (0, T.jsxs)(c.default, {
                  style: k.vsRow,
                  children: [
                    (0, T.jsxs)(c.default, {
                      style: k.vsSide,
                      children: [
                        (0, T.jsx)(u.ClanCrest, {
                          name: Q?.name ?? "",
                          color: Q?.color_primary ?? L.accent,
                          size: 40,
                          uri: Q?.logo_uri,
                        }),
                        (0, T.jsx)(s.default, {
                          style: [x.typography.caption, { color: L.textMuted, marginTop: 4 }],
                          numberOfLines: 1,
                          children: Q?.name ?? "",
                        }),
                      ],
                    }),
                    (0, T.jsx)(s.default, {
                      style: [k.vsMark, { color: L.textMuted }],
                      children: W("vsLabel"),
                    }),
                    (0, T.jsxs)(c.default, {
                      style: k.vsSide,
                      children: [
                        (0, T.jsx)(u.ClanCrest, {
                          name: e.name,
                          color: e.color_primary ?? L.surfaceAlt,
                          size: 40,
                          uri: e.logo_uri,
                        }),
                        (0, T.jsx)(s.default, {
                          style: [x.typography.caption, { color: L.text, marginTop: 4 }],
                          numberOfLines: 1,
                          children: e.name,
                        }),
                      ],
                    }),
                  ],
                }),
              (0, T.jsx)(s.default, {
                style: [x.typography.h3, { color: L.text }],
                children: W("sendChallengeTitle", { name: e?.name ?? "" }),
              }),
              q &&
                (0, T.jsxs)(s.default, {
                  style: [
                    x.typography.small,
                    { color: q.mine > q.theirs ? L.accentText : L.textMuted, marginTop: 2 },
                  ],
                  children: [
                    W("h2hMeetings", { n: (0, j.formatNumber)(q.meetings + 1) }),
                    " \xb7 ",
                    (0, C.h2hLine)(q, W),
                  ],
                }),
              U > 0 &&
                (0, T.jsxs)(c.default, {
                  style: [k.dodgeWarn, { backgroundColor: "rgba(224,161,0,0.15)" }],
                  children: [
                    (0, T.jsx)(s.default, { style: { fontSize: 13 }, children: "\ud83c\udfc3" }),
                    (0, T.jsx)(s.default, {
                      style: [x.typography.caption, { color: L.warning, flex: 1, marginStart: 6 }],
                      children: W("challengeDodgeWarn", { n: (0, j.formatNumber)(U) }),
                    }),
                  ],
                }),
              (0, T.jsx)(s.default, {
                style: [x.typography.small, { color: L.textMuted, marginTop: 2 }],
                children: W("stakeNote", { n: (0, j.formatNumber)(30) }),
              }),
              (0, T.jsx)(s.default, {
                style: [x.typography.small, { color: L.textMuted, marginTop: 2, marginBottom: x.spacing.md }],
                children: W("challengeClockNote", { h: (0, j.formatNumber)(72) }),
              }),
              J.length > 1 &&
                (0, T.jsxs)(T.Fragment, {
                  children: [
                    (0, T.jsx)(s.default, {
                      style: [x.typography.smallStrong, { color: L.textMuted, marginBottom: x.spacing.xs }],
                      children: W("sendAsClan"),
                    }),
                    (0, T.jsx)(c.default, {
                      style: {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: x.spacing.xs,
                        marginBottom: x.spacing.md,
                      },
                      children: J.map((e, t) => {
                        const n = Q?.id === e.id;
                        return (0, T.jsx)(
                          o.default,
                          {
                            onPress: () => _(t),
                            accessibilityRole: "button",
                            accessibilityState: { selected: n },
                            style: [
                              k.fromChip,
                              {
                                backgroundColor: n ? L.accent : L.surfaceAlt,
                                borderColor: n ? L.accent : L.border,
                              },
                            ],
                            children: (0, T.jsx)(s.default, {
                              style: [x.typography.smallStrong, { color: n ? L.accentInk : L.text }],
                              numberOfLines: 1,
                              children: e.name,
                            }),
                          },
                          e.id,
                        );
                      }),
                    }),
                  ],
                }),
              (0, T.jsx)(s.default, {
                style: [x.typography.smallStrong, { color: L.textMuted, marginBottom: x.spacing.xs }],
                children: W("proposeTime"),
              }),
              (0, T.jsx)(c.default, {
                style: { flexDirection: "row", gap: x.spacing.xs, marginBottom: x.spacing.md },
                children: O.map((e, t) => {
                  const n = I === t;
                  return (0, T.jsxs)(
                    o.default,
                    {
                      onPress: () => A(t),
                      accessibilityRole: "button",
                      accessibilityState: { selected: n },
                      style: [
                        k.slotChip,
                        {
                          backgroundColor: n ? L.accent : L.surfaceAlt,
                          borderColor: n ? L.accent : L.border,
                        },
                      ],
                      children: [
                        (0, T.jsx)(s.default, {
                          style: [
                            x.typography.caption,
                            { color: n ? L.accentInk : L.textMuted, fontWeight: "700" },
                          ],
                          children: e.toLocaleDateString(void 0, { weekday: "short" }).toUpperCase(),
                        }),
                        (0, T.jsx)(s.default, {
                          style: [x.typography.smallStrong, { color: n ? L.accentInk : L.text }],
                          children: (0, j.formatClock)(e),
                        }),
                      ],
                    },
                    t,
                  );
                }),
              }),
              (0, T.jsx)(f.Input, { label: W("venueLabelClan"), value: P, onChangeText: z }),
              (0, T.jsx)(d.Button, {
                title: W("sendChallenge"),
                fullWidth: !0,
                loading: N,
                onPress: async () => {
                  if (D && e && Q && !N) {
                    H(!0);
                    try {
                      (await (0, b.sendClanChallenge)(D.id, Q.id, e.id, O[I].toISOString(), P), R());
                    } catch (e) {
                      n.default.alert(W("error"), (0, S.storeErrorText)(e?.message ?? "") || W("error"));
                    } finally {
                      H(!1);
                    }
                  }
                },
              }),
            ],
          }),
        }),
      });
    };
    const k = i.default.create({
      vsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: x.spacing.md,
        marginBottom: x.spacing.md,
      },
      vsSide: { alignItems: "center", flex: 1 },
      vsMark: { fontSize: 13, fontWeight: "900", fontStyle: "italic" },
      dodgeWarn: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginTop: 6,
      },
      scrim: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
      sheet: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: x.spacing.lg,
        paddingBottom: x.spacing.xxxl,
      },
      slotChip: {
        flex: 1,
        alignItems: "center",
        paddingVertical: x.spacing.sm,
        borderRadius: x.radius.md,
        borderWidth: i.default.hairlineWidth,
        gap: 2,
      },
      fromChip: {
        paddingHorizontal: x.spacing.md,
        paddingVertical: x.spacing.sm,
        borderRadius: x.radius.pill,
        borderWidth: i.default.hairlineWidth,
        maxWidth: "100%",
      },
    });
  },
  1630,
  [
    33, 15, 445, 467, 137, 369, 158, 146, 273, 626, 1631, 625, 630, 615, 1621, 616, 671, 1311, 1661, 674, 675,
    13,
  ],
);
