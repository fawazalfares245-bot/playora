__d(
  function (g, r, i, a, m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { id: e } = (0, y.useLocalSearchParams)(),
          { user: c } = (0, v.useAuth)(),
          { colors: N } = (0, _.useTheme)(),
          O = (0, y.useRouter)(),
          V = (0, k.useT)(),
          [R, W] = (0, s.useState)(null),
          [q, H] = (0, s.useState)(!0),
          [$, E] = (0, s.useState)(!1),
          [G, F] = (0, s.useState)(""),
          J = (0, s.useCallback)(async () => {
            if (c && e)
              try {
                W(await (0, I.fetchApplicationDetail)(c.id, e));
              } catch {
                W(null);
              } finally {
                H(!1);
              }
          }, [c, e]);
        (0, s.useEffect)(() => {
          J();
        }, [J]);
        const K = async (s) => {
          if (c && e) {
            E(!0);
            try {
              (await (0, I.reviewApplication)(c.id, e, s, { reason: G, notes: G }),
                F(""),
                await J(),
                t.default.alert(V("actionDone"), ""));
            } catch (e) {
              t.default.alert(V("error"), (0, S.storeErrorText)(e?.message ?? "") || V("error"));
            } finally {
              E(!1);
            }
          }
        };
        if (q)
          return (0, T.jsx)(p.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: N.bg },
            children: (0, T.jsx)(l.default, { color: N.accentText }),
          });
        if (!R)
          return (0, T.jsx)(p.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: N.bg },
            children: (0, T.jsx)(d.default, {
              style: [w.typography.body, { color: N.text }],
              children: V("error"),
            }),
          });
        const Q = D(R.status);
        return (0, T.jsxs)(p.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: N.bg },
          children: [
            (0, T.jsxs)(u.default, {
              style: M.header,
              children: [
                (0, T.jsx)(o.default, {
                  onPress: () => O.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: V("back"),
                  style: [M.iconBtn, { backgroundColor: N.surface, borderColor: N.border }],
                  children: (0, T.jsx)(x.Ionicons, { name: (0, B.chevronBack)(), size: 22, color: N.text }),
                }),
                (0, T.jsx)(d.default, {
                  style: [w.typography.h3, { color: N.text, flex: 1, marginHorizontal: w.spacing.md }],
                  numberOfLines: 1,
                  children: R.display_name,
                }),
                (0, T.jsx)(h.Badge, { label: V(`appStatus_${R.status}`), tone: z[R.status] }),
              ],
            }),
            (0, T.jsxs)(n.default, {
              contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
              children: [
                (0, T.jsxs)(f.Card, {
                  padding: "md",
                  style: { borderColor: R.risk_flags.length ? N.danger : N.border },
                  children: [
                    (0, T.jsx)(d.default, {
                      style: [w.typography.smallStrong, { color: N.textMuted, marginBottom: w.spacing.sm }],
                      children: V("riskIndicators"),
                    }),
                    0 === R.risk_flags.length
                      ? (0, T.jsxs)(u.default, {
                          style: { flexDirection: "row", alignItems: "center" },
                          children: [
                            (0, T.jsx)(x.Ionicons, { name: "shield-checkmark", size: 16, color: N.success }),
                            (0, T.jsx)(d.default, {
                              style: [w.typography.small, { color: N.success, marginStart: w.spacing.sm }],
                              children: V("riskNone"),
                            }),
                          ],
                        })
                      : (0, T.jsx)(u.default, {
                          style: { gap: w.spacing.xs },
                          children: R.risk_flags.map((e) =>
                            (0, T.jsxs)(
                              u.default,
                              {
                                style: { flexDirection: "row", alignItems: "center" },
                                children: [
                                  (0, T.jsx)(x.Ionicons, { name: "warning", size: 16, color: N.danger }),
                                  (0, T.jsx)(d.default, {
                                    style: [w.typography.small, { color: N.text, marginStart: w.spacing.sm }],
                                    children: V(`risk_${e}`),
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                  ],
                }),
                (0, T.jsxs)(L, {
                  title: V("sectionPersonal"),
                  colors: N,
                  children: [
                    (0, T.jsx)(P, { label: V("fullLegalName"), value: R.full_legal_name, colors: N }),
                    (0, T.jsx)(P, { label: V("mobileNumber"), value: R.mobile, colors: N }),
                    (0, T.jsx)(P, { label: V("emailAddress"), value: R.email, colors: N, last: !0 }),
                  ],
                }),
                (0, T.jsxs)(L, {
                  title: V("sectionOrganizer"),
                  colors: N,
                  children: [
                    (0, T.jsx)(P, { label: V("organizerDisplayName"), value: R.display_name, colors: N }),
                    (0, T.jsx)(P, {
                      label: V("organizerType"),
                      value: "business" === R.organizer_type ? V("typeBusiness") : V("typeIndividual"),
                      colors: N,
                    }),
                    (0, T.jsx)(P, {
                      label: V("sportsHosted"),
                      value: R.sports.map((e) => V(e)).join(" \xb7 "),
                      colors: N,
                    }),
                    (0, T.jsx)(P, {
                      label: V("expectedMatchesLabel"),
                      value: (0, C.formatNumber)(R.expected_monthly_matches),
                      colors: N,
                      last: !R.bio,
                    }),
                    !!R.bio &&
                      (0, T.jsxs)(u.default, {
                        style: { paddingTop: w.spacing.sm },
                        children: [
                          (0, T.jsx)(d.default, {
                            style: [w.typography.small, { color: N.textMuted }],
                            children: V("shortBio"),
                          }),
                          (0, T.jsx)(d.default, {
                            style: [w.typography.body, { color: N.text, marginTop: 2 }],
                            children: R.bio,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, T.jsxs)(L, {
                  title: V("sectionIdentity"),
                  colors: N,
                  children: [
                    (0, T.jsx)(P, { label: V("idDocType"), value: A(R.id_doc_type, V), colors: N }),
                    (0, T.jsx)(P, {
                      label: V("identityDocument"),
                      value: `\u2022\u2022\u2022\u2022 ${R.id_doc_last4}`,
                      colors: N,
                    }),
                    (0, T.jsxs)(u.default, {
                      style: { flexDirection: "row", alignItems: "center", paddingTop: w.spacing.sm },
                      children: [
                        (0, T.jsx)(x.Ionicons, {
                          name: R.id_doc_uploaded ? "lock-closed" : "alert-circle-outline",
                          size: 16,
                          color: R.id_doc_uploaded ? N.success : N.warning,
                        }),
                        (0, T.jsx)(d.default, {
                          style: [w.typography.small, { color: N.textMuted, marginStart: w.spacing.sm }],
                          children: R.id_doc_uploaded ? V("docVerifiedRef") : V("uploadDocument"),
                        }),
                      ],
                    }),
                  ],
                }),
                R.business &&
                  (0, T.jsxs)(L, {
                    title: V("sectionBusiness"),
                    colors: N,
                    children: [
                      (0, T.jsx)(P, { label: V("companyName"), value: R.business.company_name, colors: N }),
                      (0, T.jsx)(P, {
                        label: V("website"),
                        value: R.business.website || "\u2014",
                        colors: N,
                      }),
                      (0, T.jsx)(P, {
                        label: V("socialMedia"),
                        value: R.business.socials || "\u2014",
                        colors: N,
                        last: !0,
                      }),
                    ],
                  }),
                (0, T.jsxs)(L, {
                  title: V("previousActivity"),
                  colors: N,
                  children: [
                    (0, T.jsx)(P, {
                      label: V("matchesCreatedLabel"),
                      value: (0, C.formatNumber)(R.matches_created),
                      colors: N,
                    }),
                    (0, T.jsx)(P, {
                      label: V("matchesCancelledLabel"),
                      value: (0, C.formatNumber)(R.matches_cancelled),
                      colors: N,
                    }),
                    (0, T.jsx)(P, {
                      label: V("accountAgeLabel"),
                      value: V("daysOld", { n: R.account_age_days }),
                      colors: N,
                      last: !0,
                    }),
                  ],
                }),
                R.admin_notes &&
                  (0, T.jsxs)(f.Card, {
                    padding: "md",
                    style: { marginTop: w.spacing.md },
                    children: [
                      (0, T.jsx)(d.default, {
                        style: [w.typography.smallStrong, { color: N.textMuted }],
                        children: V("adminNotesLabel"),
                      }),
                      (0, T.jsx)(d.default, {
                        style: [w.typography.body, { color: N.text, marginTop: 2 }],
                        children: R.admin_notes,
                      }),
                    ],
                  }),
                (0, T.jsx)(d.default, {
                  style: [
                    w.typography.h3,
                    { color: N.text, marginTop: w.spacing.xl, marginBottom: w.spacing.sm },
                  ],
                  children: V("reviewDecision"),
                }),
                (0, T.jsx)(b.Input, {
                  label: V("decisionReason"),
                  value: G,
                  onChangeText: F,
                  placeholder: V("decisionReasonPlaceholder"),
                  multiline: !0,
                  numberOfLines: 2,
                  maxLength: 500,
                  style: { minHeight: 56, textAlignVertical: "top" },
                }),
                (0, T.jsxs)(u.default, {
                  style: { gap: w.spacing.sm, marginTop: w.spacing.sm },
                  children: [
                    Q.includes("approve") &&
                      (0, T.jsx)(j.Button, {
                        title: V("approveApplication"),
                        loading: $,
                        fullWidth: !0,
                        onPress: () => K("approve"),
                        leftIcon: (0, T.jsx)(x.Ionicons, {
                          name: "checkmark-circle",
                          size: 18,
                          color: "#fff",
                        }),
                      }),
                    (0, T.jsxs)(u.default, {
                      style: { flexDirection: "row", gap: w.spacing.sm },
                      children: [
                        Q.includes("request_info") &&
                          (0, T.jsx)(j.Button, {
                            title: V("requestInfo"),
                            variant: "secondary",
                            loading: $,
                            onPress: () => K("request_info"),
                            style: { flex: 1 },
                          }),
                        Q.includes("reject") &&
                          (0, T.jsx)(j.Button, {
                            title: V("rejectApplication"),
                            variant: "secondary",
                            loading: $,
                            onPress: () => K("reject"),
                            style: { flex: 1 },
                          }),
                      ],
                    }),
                    Q.includes("suspend") &&
                      (0, T.jsx)(j.Button, {
                        title: V("suspendOrganizer"),
                        variant: "danger",
                        loading: $,
                        fullWidth: !0,
                        onPress: () => K("suspend"),
                        leftIcon: (0, T.jsx)(x.Ionicons, { name: "pause-circle", size: 18, color: "#fff" }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }));
    var s = r(_d[1]),
      l = e(r(_d[2])),
      t = e(r(_d[3])),
      o = e(r(_d[4])),
      n = e(r(_d[5])),
      c = e(r(_d[6])),
      d = e(r(_d[7])),
      u = e(r(_d[8])),
      p = r(_d[9]),
      x = r(_d[10]),
      y = r(_d[11]),
      f = r(_d[12]),
      h = r(_d[13]),
      j = r(_d[14]),
      b = r(_d[15]),
      v = r(_d[16]),
      _ = r(_d[17]),
      w = r(_d[18]),
      I = r(_d[19]),
      C = r(_d[20]),
      k = r(_d[21]),
      B = r(_d[22]),
      S = r(_d[23]),
      T = r(_d[24]);
    const z = {
        draft: "neutral",
        submitted: "warning",
        under_review: "warning",
        approved: "success",
        rejected: "danger",
        suspended: "danger",
      },
      A = (e, s) => s("civil_id" === e ? "docCivilId" : "government_id" === e ? "docGovId" : "docPassport"),
      D = (e) => {
        switch (e) {
          case "approved":
            return ["suspend"];
          case "suspended":
          case "rejected":
            return ["approve"];
          default:
            return ["approve", "request_info", "reject"];
        }
      };
    const L = ({ title: e, colors: s, children: l }) =>
        (0, T.jsxs)(u.default, {
          style: { marginTop: w.spacing.lg },
          children: [
            (0, T.jsx)(d.default, {
              style: [w.typography.smallStrong, { color: s.textMuted, marginBottom: w.spacing.xs }],
              children: e,
            }),
            (0, T.jsx)(f.Card, { padding: "md", children: l }),
          ],
        }),
      P = ({ label: e, value: s, colors: l, last: t }) =>
        (0, T.jsxs)(u.default, {
          style: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: w.spacing.sm,
            borderBottomWidth: t ? 0 : c.default.hairlineWidth,
            borderBottomColor: l.border,
          },
          children: [
            (0, T.jsx)(d.default, {
              style: [w.typography.small, { color: l.textMuted, flex: 1 }],
              children: e,
            }),
            (0, T.jsx)(d.default, {
              style: [w.typography.smallStrong, { color: l.text, flex: 1, textAlign: "right" }],
              numberOfLines: 2,
              children: s,
            }),
          ],
        }),
      M = c.default.create({
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
          borderWidth: c.default.hairlineWidth,
        },
      });
  },
  1823,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 625, 630, 615, 616, 671, 1311,
    675, 1171, 674, 13,
  ],
);
