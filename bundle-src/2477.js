__d(
  function (g, r, i, _a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t, profile: M } = (0, x.useAuth)(),
          { colors: T } = (0, v.useTheme)(),
          I = (0, f.useRouter)(),
          A = (0, S.useT)(),
          [P, R] = (0, a.useState)(null),
          [B, W] = (0, a.useState)(!1);
        (0, f.useFocusEffect)(
          (0, a.useCallback)(() => {
            t &&
              (0, C.fetchPrivacy)(t.id)
                .then(R)
                .catch(() => R(null));
          }, [t]),
        );
        const z = async (a) => {
          if (t && !B) {
            W(!0);
            try {
              R(await (0, C.updatePrivacy)(t.id, a));
            } finally {
              W(!1);
            }
          }
        };
        if (!P)
          return (0, w.jsx)(p.SafeAreaView, {
            style: { flex: 1, backgroundColor: T.bg, alignItems: "center", justifyContent: "center" },
            children: (0, w.jsx)(o.default, { color: T.accentText }),
          });
        const V = M?.full_name ?? "Player",
          D = V.split(" ")
            .map((t) => t[0])
            .slice(0, 2)
            .join("")
            .toUpperCase(),
          E = [
            { key: "everyone", label: A("visEveryone"), sub: A("visEveryoneSub") },
            { key: "same_audience", label: A("visSameAudience"), sub: A("visSameAudienceSub") },
            { key: "connections", label: A("visConnections"), sub: A("visConnectionsSub") },
          ],
          L = [
            { key: "photo", label: A("avatarPhoto") },
            { key: "initials", label: A("avatarInitials") },
          ];
        return (0, w.jsxs)(p.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: T.bg },
          children: [
            (0, w.jsxs)(y.default, {
              style: _.header,
              children: [
                (0, w.jsx)(l.default, {
                  onPress: () => I.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: A("back"),
                  style: [_.iconBtn, { backgroundColor: T.surface, borderColor: T.border }],
                  children: (0, w.jsx)(b.Ionicons, { name: (0, k.chevronBack)(), size: 22, color: T.text }),
                }),
                (0, w.jsx)(u.default, {
                  style: [j.typography.h2, { color: T.text, flex: 1, textAlign: "center" }],
                  children: A("privacyTitle"),
                }),
                (0, w.jsx)(y.default, { style: { width: 40 } }),
              ],
            }),
            (0, w.jsxs)(n.default, {
              contentContainerStyle: { padding: j.spacing.lg, paddingBottom: j.spacing.xxxl },
              children: [
                (0, w.jsxs)(y.default, {
                  style: [_.preview, { backgroundColor: T.surface, borderColor: T.border }],
                  children: [
                    (0, w.jsx)(u.default, {
                      style: [_.caption, { color: T.textMuted }],
                      children: A("howOthersSeeMe").toUpperCase(),
                    }),
                    (0, w.jsxs)(y.default, {
                      style: { flexDirection: "row", alignItems: "center", marginTop: j.spacing.md },
                      children: [
                        "initials" === P.avatar_mode
                          ? (0, w.jsx)(y.default, {
                              style: [_.initialsAvatar, { backgroundColor: T.accent }],
                              children: (0, w.jsx)(u.default, {
                                style: [j.typography.bodyStrong, { color: T.accentInk }],
                                children: D,
                              }),
                            })
                          : (0, w.jsx)(h.PlayerAvatar, {
                              name: V,
                              seed: 3,
                              size: 44,
                              uri: M?.avatar_url ?? void 0,
                            }),
                        (0, w.jsxs)(y.default, {
                          style: { flex: 1, marginStart: j.spacing.md },
                          children: [
                            (0, w.jsx)(u.default, {
                              style: [j.typography.bodyStrong, { color: T.text }],
                              children: "connections" === P.privacy_visibility ? A("previewNameHidden") : V,
                            }),
                            (0, w.jsx)(u.default, {
                              style: [j.typography.caption, { color: T.textMuted, marginTop: 2 }],
                              children:
                                "everyone" === P.privacy_visibility
                                  ? A("visEveryoneSub")
                                  : "same_audience" === P.privacy_visibility
                                    ? A("visSameAudienceSub")
                                    : A("visConnectionsSub"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, w.jsx)(u.default, {
                      style: [j.typography.caption, { color: T.textMuted, marginTop: j.spacing.md }],
                      children: A("privacyNeverShown"),
                    }),
                  ],
                }),
                (0, w.jsx)(u.default, {
                  style: [
                    _.caption,
                    { color: T.textMuted, marginTop: j.spacing.lg, marginBottom: j.spacing.sm },
                  ],
                  children: A("visibilityLabel").toUpperCase(),
                }),
                E.map((t) => {
                  const a = P.privacy_visibility === t.key;
                  return (0, w.jsxs)(
                    l.default,
                    {
                      onPress: () => z({ privacy_visibility: t.key }),
                      accessibilityRole: "button",
                      accessibilityState: { selected: a },
                      style: [
                        _.row,
                        {
                          backgroundColor: T.surface,
                          borderColor: a ? T.accent : T.border,
                          borderWidth: a ? 1.5 : s.default.hairlineWidth,
                        },
                      ],
                      children: [
                        (0, w.jsxs)(y.default, {
                          style: { flex: 1 },
                          children: [
                            (0, w.jsx)(u.default, {
                              style: [j.typography.bodyStrong, { color: T.text }],
                              children: t.label,
                            }),
                            (0, w.jsx)(u.default, {
                              style: [j.typography.caption, { color: T.textMuted, marginTop: 2 }],
                              children: t.sub,
                            }),
                          ],
                        }),
                        (0, w.jsx)(b.Ionicons, {
                          name: a ? "radio-button-on" : "radio-button-off",
                          size: 20,
                          color: a ? T.accent : T.textMuted,
                        }),
                      ],
                    },
                    t.key,
                  );
                }),
                (0, w.jsx)(u.default, {
                  style: [
                    _.caption,
                    { color: T.textMuted, marginTop: j.spacing.lg, marginBottom: j.spacing.sm },
                  ],
                  children: A("avatarModeLabel").toUpperCase(),
                }),
                (0, w.jsx)(y.default, {
                  style: { flexDirection: "row", gap: j.spacing.sm },
                  children: L.map((t) => {
                    const a = P.avatar_mode === t.key;
                    return (0, w.jsx)(
                      l.default,
                      {
                        onPress: () => z({ avatar_mode: t.key }),
                        accessibilityRole: "button",
                        accessibilityState: { selected: a },
                        style: [
                          _.avatarOpt,
                          { backgroundColor: a ? T.accent : T.surface, borderColor: a ? T.accent : T.border },
                        ],
                        children: (0, w.jsx)(u.default, {
                          style: [j.typography.smallStrong, { color: a ? T.accentInk : T.text }],
                          children: t.label,
                        }),
                      },
                      t.key,
                    );
                  }),
                }),
                (0, w.jsx)(u.default, {
                  style: [j.typography.caption, { color: T.textMuted, marginTop: j.spacing.xs }],
                  children: A("avatarModeSub"),
                }),
                (0, w.jsxs)(y.default, {
                  style: [
                    _.row,
                    { backgroundColor: T.surface, borderColor: T.border, marginTop: j.spacing.lg },
                  ],
                  children: [
                    (0, w.jsxs)(y.default, {
                      style: { flex: 1 },
                      children: [
                        (0, w.jsx)(u.default, {
                          style: [j.typography.bodyStrong, { color: T.text }],
                          children: A("mediaConsentLabel"),
                        }),
                        (0, w.jsx)(u.default, {
                          style: [j.typography.caption, { color: T.textMuted, marginTop: 2 }],
                          children: A("mediaConsentSub"),
                        }),
                      ],
                    }),
                    (0, w.jsx)(c.default, {
                      value: P.media_consent,
                      onValueChange: (t) => z({ media_consent: t }),
                      trackColor: { true: T.accent, false: T.surfaceAlt },
                      thumbColor: "#fff",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }));
    var a = r(d[1]),
      o = t(r(d[2])),
      l = t(r(d[3])),
      n = t(r(d[4])),
      s = t(r(d[5])),
      c = t(r(d[6])),
      u = t(r(d[7])),
      y = t(r(d[8])),
      p = r(d[9]),
      b = r(d[10]),
      f = r(d[11]),
      h = r(d[12]),
      x = r(d[13]),
      v = r(d[14]),
      j = r(d[15]),
      C = r(d[16]),
      S = r(d[17]),
      k = r(d[18]),
      w = r(d[19]);
    const _ = s.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: j.spacing.lg,
        paddingVertical: j.spacing.sm,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      caption: { fontSize: 10.5, fontWeight: "800", letterSpacing: 1.5 },
      preview: { borderRadius: j.radius.lg, borderWidth: 1, padding: j.spacing.md },
      initialsAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: j.radius.lg,
        padding: j.spacing.md,
        marginBottom: j.spacing.sm,
      },
      avatarOpt: {
        flex: 1,
        alignItems: "center",
        borderRadius: j.radius.pill,
        borderWidth: 1,
        paddingVertical: 12,
      },
    });
  },
  2477,
  [33, 15, 461, 369, 281, 158, 477, 146, 273, 381, 1086, 20, 1679, 630, 615, 616, 671, 675, 1171, 13],
);
