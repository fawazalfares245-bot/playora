__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, profile: pr } = (0, v.useAuth)(),
          { colors: s } = (0, C.useTheme)(),
          I = (0, y.useRouter)(),
          R = (0, k.useT)(),
          [V, W] = (0, t.useState)(""),
          [z, L] = (0, t.useState)(""),
          [_, D] = (0, t.useState)(["padel"]),
          [M, N] = (0, t.useState)(!1),
          E = (e) => D((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        // Administrators review venue registrations, so they cannot submit one themselves (F-ADM1-19).
        if ("admin" === pr?.role)
          return (0, H.jsx)(G9.GateScreen, {
            kind: "denied",
            title: R("adminCannotRegisterVenueTitle"),
            body: R("adminCannotRegisterVenueBody"),
            onBack: () => I.back(),
          });
        return (0, H.jsxs)(p.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: s.bg },
          children: [
            (0, H.jsxs)(u.default, {
              style: A.header,
              children: [
                (0, H.jsx)(l.default, {
                  onPress: () => I.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: R("back"),
                  style: [A.iconBtn, { backgroundColor: s.surface, borderColor: s.border }],
                  children: (0, H.jsx)(h.Ionicons, { name: (0, P.chevronBack)(), size: 22, color: s.text }),
                }),
                (0, H.jsx)(c.default, {
                  style: [S.typography.h2, { color: s.text, flex: 1, marginHorizontal: S.spacing.md }],
                  children: R("registerVenue"),
                }),
              ],
            }),
            (0, H.jsxs)(o.default, {
              contentContainerStyle: { padding: S.spacing.lg, paddingBottom: S.spacing.xxxl },
              children: [
                (0, H.jsx)(f.Card, {
                  style: { marginBottom: S.spacing.lg },
                  children: (0, H.jsx)(c.default, {
                    style: [S.typography.small, { color: s.textMuted }],
                    children: R("venueApplicationHint"),
                  }),
                }),
                (0, H.jsx)(c.default, {
                  style: [S.typography.smallStrong, { color: s.text, marginBottom: S.spacing.xs }],
                  children: R("venueNameLabel"),
                }),
                (0, H.jsx)(b.Input, { value: V, onChangeText: W, placeholder: R("venueNameLabel") }),
                (0, H.jsx)(c.default, {
                  style: [
                    S.typography.smallStrong,
                    { color: s.text, marginTop: S.spacing.md, marginBottom: S.spacing.xs },
                  ],
                  children: R("areaLabel"),
                }),
                (0, H.jsx)(j.AreaPicker, { value: z || null, onChange: (e) => L(e ?? "") }),
                (0, H.jsx)(c.default, {
                  style: [
                    S.typography.smallStrong,
                    { color: s.text, marginTop: S.spacing.md, marginBottom: S.spacing.xs },
                  ],
                  children: R("players"),
                }),
                (0, H.jsx)(u.default, {
                  style: { flexDirection: "row", gap: S.spacing.sm },
                  children: w.map((e) => {
                    const t = _.includes(e);
                    return (0, H.jsx)(
                      l.default,
                      {
                        onPress: () => E(e),
                        accessibilityRole: "button",
                        accessibilityState: { selected: t },
                        style: [
                          A.chip,
                          { backgroundColor: t ? s.accent : s.surface, borderColor: t ? s.accent : s.border },
                        ],
                        children: (0, H.jsx)(c.default, {
                          style: [S.typography.smallStrong, { color: t ? "#fff" : s.text }],
                          children: R(e),
                        }),
                      },
                      e,
                    );
                  }),
                }),
                (0, H.jsx)(x.Button, {
                  title: R("submitVenueApplication"),
                  fullWidth: !0,
                  loading: M,
                  disabled: !V.trim() || 0 === _.length,
                  style: { marginTop: S.spacing.xl },
                  onPress: async () => {
                    if (e) {
                      N(!0);
                      try {
                        (await (0, B.applyVenue)(e.id, {
                          name: V.trim(),
                          area: z.trim() || void 0,
                          sports: _,
                        }),
                          n.default.alert(R("venuePending"), R("venuePendingHint")),
                          I.replace("/venue/portal"));
                      } catch (e) {
                        n.default.alert(R("error"), (0, T.storeErrorText)(e?.message ?? "") || R("error"));
                      } finally {
                        N(!1);
                      }
                    }
                  },
                }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[1]),
      n = e(r(d[2])),
      l = e(r(d[3])),
      o = e(r(d[4])),
      s = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      p = r(d[8]),
      h = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      x = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      v = r(d[15]),
      C = r(d[16]),
      S = r(d[17]),
      B = r(d[18]),
      k = r(d[19]),
      P = r(d[20]),
      T = r(d[21]),
      H = r(d[22]),
      G9 = r(d[23]);
    const w = ["padel", "tennis", "football"];
    const A = s.default.create({
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
        borderWidth: s.default.hairlineWidth,
      },
      chip: {
        minHeight: 38,
        paddingHorizontal: S.spacing.lg,
        borderRadius: 999,
        borderWidth: s.default.hairlineWidth,
        alignItems: "center",
        justifyContent: "center",
      },
    });
  },
  2503,
  [
    33, 15, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 626, 625, 1841, 630, 615, 616, 671, 675, 1171,
    674, 13, 9001,
  ],
);
