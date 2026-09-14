__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t, profile: u, refreshProfile: M, signOut: H } = (0, C.useAuth)(),
          { colors: O } = (0, w.useTheme)(),
          D = (0, b.useRouter)(),
          z = (0, S.useT)(),
          [E, R] = (0, l.useState)(u?.consent ?? { analytics: !1, marketing: !1 }),
          [V, F] = (0, l.useState)(!1),
          [L, W] = (0, l.useState)(null),
          [N, J] = (0, l.useState)(0);
        (0, b.useFocusEffect)(
          (0, l.useCallback)(() => {
            t &&
              ((0, B.fetchPrivacySettings)(t.id).then(W),
              (0, B.fetchBlockedList)(t.id).then((t) => J(t.length)));
          }, [t]),
        );
        const U = async (l) => {
            t && (W((t) => (t ? Object.assign({}, t, l) : t)), W(await (0, B.setPrivacySettings)(t.id, l)));
          },
          $ = async (l, o) => {
            if (!t) return;
            const s = Object.assign({}, E, { [l]: o });
            (R(s), await (0, B.updateConsent)(t.id, s), await M());
          };
        return (0, T.jsxs)(x.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: O.bg },
          children: [
            (0, T.jsx)(h.default, {
              style: I.header,
              children: (0, T.jsx)(s.default, {
                onPress: () => D.back(),
                accessibilityRole: "button",
                accessibilityLabel: z("close"),
                style: [I.back, { backgroundColor: O.surface, borderColor: O.border }],
                children: (0, T.jsx)(f.Ionicons, { name: (0, A.chevronBack)(), size: 22, color: O.text }),
              }),
            }),
            (0, T.jsxs)(n.default, {
              contentContainerStyle: { padding: k.spacing.lg, paddingBottom: k.spacing.xxxl },
              children: [
                (0, T.jsx)(p.default, {
                  style: [k.typography.display, { color: O.text }],
                  children: z("privacy"),
                }),
                (0, T.jsx)(p.default, {
                  style: [
                    k.typography.body,
                    { color: O.textMuted, marginTop: k.spacing.xs, marginBottom: k.spacing.xl },
                  ],
                  children: z("privacyIntro"),
                }),
                L &&
                  (0, T.jsxs)(T.Fragment, {
                    children: [
                      (0, T.jsx)(p.default, {
                        style: [k.typography.h3, { color: O.text, marginBottom: k.spacing.sm }],
                        children: z("safetyTitle"),
                      }),
                      (0, T.jsxs)(j.Card, {
                        padding: "md",
                        style: { marginBottom: k.spacing.xl },
                        children: [
                          (0, T.jsx)(p.default, {
                            style: [k.typography.bodyStrong, { color: O.text, marginBottom: k.spacing.sm }],
                            children: z("profileVisibility"),
                          }),
                          (0, T.jsx)(_, {
                            options: [
                              { value: "public", label: z("visibilityPublic") },
                              { value: "followers", label: z("visibilityFollowers") },
                              { value: "private", label: z("visibilityPrivate") },
                            ],
                            value: L.profile_visibility,
                            onChange: (t) => U({ profile_visibility: t }),
                            colors: O,
                          }),
                          (0, T.jsx)(h.default, { style: [I.divider, { backgroundColor: O.border }] }),
                          (0, T.jsx)(p.default, {
                            style: [k.typography.bodyStrong, { color: O.text, marginBottom: k.spacing.sm }],
                            children: z("allowMessages"),
                          }),
                          (0, T.jsx)(_, {
                            options: [
                              { value: "everyone", label: z("msgEveryone") },
                              { value: "followers", label: z("msgFollowers") },
                              { value: "none", label: z("msgNone") },
                            ],
                            value: L.allow_messages,
                            onChange: (t) => U({ allow_messages: t }),
                            colors: O,
                          }),
                          (0, T.jsx)(h.default, { style: [I.divider, { backgroundColor: O.border }] }),
                          (0, T.jsxs)(h.default, {
                            style: I.row,
                            children: [
                              (0, T.jsxs)(h.default, {
                                style: { flex: 1, marginEnd: k.spacing.md },
                                children: [
                                  (0, T.jsx)(p.default, {
                                    style: [k.typography.bodyStrong, { color: O.text }],
                                    children: z("showOnline"),
                                  }),
                                  (0, T.jsx)(p.default, {
                                    style: [k.typography.small, { color: O.textMuted, marginTop: 2 }],
                                    children: z("showOnlineHint"),
                                  }),
                                ],
                              }),
                              (0, T.jsx)(y.default, {
                                value: L.show_online,
                                onValueChange: (t) => U({ show_online: t }),
                                trackColor: { false: O.surfaceAlt, true: O.accent },
                                thumbColor: "#fff",
                                ios_backgroundColor: O.surfaceAlt,
                                accessibilityLabel: z("showOnline"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, T.jsx)(j.Card, {
                        onPress: () => D.push("/blocked"),
                        padding: "md",
                        style: { marginBottom: k.spacing.xl },
                        children: (0, T.jsxs)(h.default, {
                          style: I.row,
                          children: [
                            (0, T.jsx)(f.Ionicons, { name: "ban-outline", size: 20, color: O.text }),
                            (0, T.jsxs)(h.default, {
                              style: { flex: 1, marginHorizontal: k.spacing.md },
                              children: [
                                (0, T.jsxs)(p.default, {
                                  style: [k.typography.bodyStrong, { color: O.text }],
                                  children: [z("blockedAccounts"), N > 0 ? ` \xb7 ${N}` : ""],
                                }),
                                (0, T.jsx)(p.default, {
                                  style: [k.typography.small, { color: O.textMuted, marginTop: 2 }],
                                  children: z("blockedAccountsHint"),
                                }),
                              ],
                            }),
                            (0, T.jsx)(f.Ionicons, {
                              name: (0, A.chevronForward)(),
                              size: 18,
                              color: O.textMuted,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                (0, T.jsx)(p.default, {
                  style: [k.typography.h3, { color: O.text, marginBottom: k.spacing.sm }],
                  children: z("consentTitle"),
                }),
                (0, T.jsxs)(j.Card, {
                  padding: "md",
                  children: [
                    (0, T.jsx)(P, {
                      label: z("consentAnalytics"),
                      hint: z("consentAnalyticsHint"),
                      value: E.analytics,
                      onChange: (t) => $("analytics", t),
                      colors: O,
                    }),
                    (0, T.jsx)(h.default, { style: [I.divider, { backgroundColor: O.border }] }),
                    (0, T.jsx)(P, {
                      label: z("consentMarketing"),
                      hint: z("consentMarketingHint"),
                      value: E.marketing,
                      onChange: (t) => $("marketing", t),
                      colors: O,
                    }),
                  ],
                }),
                (0, T.jsx)(p.default, {
                  style: [
                    k.typography.h3,
                    { color: O.text, marginTop: k.spacing.xl, marginBottom: k.spacing.sm },
                  ],
                  children: z("yourData"),
                }),
                (0, T.jsxs)(j.Card, {
                  padding: "md",
                  children: [
                    (0, T.jsx)(p.default, {
                      style: [k.typography.bodyStrong, { color: O.text }],
                      children: z("exportData"),
                    }),
                    (0, T.jsx)(p.default, {
                      style: [
                        k.typography.small,
                        { color: O.textMuted, marginTop: 2, marginBottom: k.spacing.sm },
                      ],
                      children: z("exportDataHint"),
                    }),
                    (0, T.jsx)(v.Button, {
                      title: z("exportData"),
                      variant: "secondary",
                      onPress: async () => {
                        if (t) {
                          F(!0);
                          try {
                            const l = await (0, B.exportUserData)(t.id),
                              s = JSON.stringify(l, null, 2);
                            try {
                              await c.default.share({ message: s, title: "Rush X data export" });
                            } catch {
                              o.default.alert(z("dataExported"), z("dataExportedBody"));
                            }
                          } finally {
                            F(!1);
                          }
                        }
                      },
                      loading: V,
                      leftIcon: (0, T.jsx)(f.Ionicons, { name: "download-outline", size: 18, color: O.text }),
                    }),
                  ],
                }),
                (0, T.jsxs)(j.Card, {
                  padding: "md",
                  style: { marginTop: k.spacing.md, borderColor: O.danger },
                  children: [
                    (0, T.jsx)(p.default, {
                      style: [k.typography.bodyStrong, { color: O.danger }],
                      children: z("deleteAccount"),
                    }),
                    (0, T.jsx)(p.default, {
                      style: [
                        k.typography.small,
                        { color: O.textMuted, marginTop: 2, marginBottom: k.spacing.sm },
                      ],
                      children: z("deleteAccountHint"),
                    }),
                    (0, T.jsx)(v.Button, {
                      title: z("deleteAccount"),
                      variant: "danger",
                      onPress: () => {
                        t &&
                          o.default.alert(z("deleteConfirmTitle"), z("deleteConfirmBody"), [
                            { text: z("cancel"), style: "cancel" },
                            {
                              text: z("deleteAccount"),
                              style: "destructive",
                              onPress: async () => {
                                (await (0, B.deleteAccount)(t.id), await H());
                              },
                            },
                          ]);
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }));
    var l = r(d[1]),
      o = t(r(d[2])),
      s = t(r(d[3])),
      n = t(r(d[4])),
      c = t(r(d[5])),
      u = t(r(d[6])),
      y = t(r(d[7])),
      p = t(r(d[8])),
      h = t(r(d[9])),
      x = r(d[10]),
      f = r(d[11]),
      b = r(d[12]),
      j = r(d[13]),
      v = r(d[14]),
      C = r(d[15]),
      w = r(d[16]),
      k = r(d[17]),
      B = r(d[18]),
      S = r(d[19]),
      A = r(d[20]),
      T = r(d[21]);
    const P = ({ label: t, hint: l, value: o, onChange: s, colors: n }) =>
        (0, T.jsxs)(h.default, {
          style: I.row,
          children: [
            (0, T.jsxs)(h.default, {
              style: { flex: 1, marginEnd: k.spacing.md },
              children: [
                (0, T.jsx)(p.default, { style: [k.typography.bodyStrong, { color: n.text }], children: t }),
                (0, T.jsx)(p.default, {
                  style: [k.typography.small, { color: n.textMuted, marginTop: 2 }],
                  children: l,
                }),
              ],
            }),
            (0, T.jsx)(y.default, {
              value: o,
              onValueChange: s,
              trackColor: { false: n.surfaceAlt, true: n.accent },
              thumbColor: "#fff",
              ios_backgroundColor: n.surfaceAlt,
              accessibilityLabel: t,
            }),
          ],
        }),
      _ = ({ options: t, value: l, onChange: o, colors: n }) =>
        (0, T.jsx)(h.default, {
          style: [I.segment, { backgroundColor: n.surfaceAlt }],
          children: t.map((t) => {
            const c = t.value === l;
            return (0, T.jsx)(
              s.default,
              {
                onPress: () => o(t.value),
                accessibilityRole: "button",
                accessibilityLabel: t.label,
                style: [I.segmentItem, c && { backgroundColor: n.accent }],
                children: (0, T.jsx)(p.default, {
                  style: [k.typography.smallStrong, { color: c ? "#fff" : n.text }],
                  children: t.label,
                }),
              },
              t.value,
            );
          }),
        }),
      I = u.default.create({
        header: { paddingHorizontal: k.spacing.lg, paddingTop: k.spacing.lg },
        segment: { flexDirection: "row", borderRadius: k.radius.md, padding: 3, gap: 3 },
        segmentItem: {
          flex: 1,
          paddingVertical: k.spacing.sm,
          borderRadius: k.radius.sm,
          alignItems: "center",
        },
        back: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: u.default.hairlineWidth,
        },
        row: { flexDirection: "row", alignItems: "center" },
        divider: { height: u.default.hairlineWidth, marginVertical: k.spacing.md },
      });
  },
  2478,
  [
    33, 15, 445, 369, 281, 459, 158, 477, 146, 273, 381, 1086, 20, 1623, 626, 630, 615, 616, 671, 675, 1171,
    13,
  ],
);
