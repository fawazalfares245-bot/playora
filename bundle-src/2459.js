__d(
  function (g, r, i, a, m, _e, _d) {
    var e = r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e, profile: d, refreshProfile: W } = (0, j.useAuth)(),
          { colors: N } = (0, C.useTheme)(),
          H = (0, x.useRouter)(),
          O = (0, w.useT)(),
          [U, V] = (0, t.useState)(!0),
          [F, E] = (0, t.useState)(null),
          [q, G] = (0, t.useState)(!1),
          [J, K] = (0, t.useState)("individual"),
          [Q, X] = (0, t.useState)(d?.full_name ?? ""),
          [Y, Z] = (0, t.useState)(""),
          [$, ee] = (0, t.useState)(e?.email ?? ""),
          [te, ae] = (0, t.useState)(d?.full_name ?? ""),
          [oe, se] = (0, t.useState)(""),
          [le, ne] = (0, t.useState)(new Set()),
          [re, ie] = (0, t.useState)(4),
          [de, ce] = (0, t.useState)("civil_id"),
          [ue, pe] = (0, t.useState)(""),
          [ge, he] = (0, t.useState)(!1),
          [docImg, setDocImg] = (0, t.useState)(null),
          [ed, setEd] = (0, t.useState)(!1),
          [ldErr, setLdErr] = (0, t.useState)(null),
          [me, xe] = (0, t.useState)(""),
          [ye, be] = (0, t.useState)(""),
          [fe, je] = (0, t.useState)(""),
          [Ce, ve] = (0, t.useState)(""),
          [Se, Te] = (0, t.useState)(""),
          we = (0, t.useCallback)(async () => {
            if (!e) return;
            setLdErr(null);
            try {
              E(await (0, S.fetchMyOrganizerApplication)(e.id));
            } catch (e) {
              setLdErr(e);
            } finally {
              V(!1);
            }
          }, [e]),
          // Pre-fills the form from the stored application so it can be updated and resubmitted.
          prefill = (t) => {
            (X(t.full_legal_name ?? ""),
              Z(t.mobile ?? ""),
              ee(t.email ?? e?.email ?? ""),
              ae(t.display_name ?? ""),
              se(t.bio ?? ""),
              ne(new Set(t.sports ?? [])),
              ie(t.expected_monthly_matches ?? 4),
              K(t.organizer_type ?? "individual"),
              ce(t.id_doc_type ?? "civil_id"),
              xe(t.business?.company_name ?? ""),
              ve(t.business?.website ?? ""),
              Te(t.business?.socials ?? ""),
              setDocImg(null),
              he(!1),
              setEd(!0));
          },
          pickDoc = () => {
            if ("undefined" == typeof document) return;
            const e = document.createElement("input");
            ((e.type = "file"), (e.accept = "image/*"), (e.style.display = "none"));
            e.onchange = () => {
              const t = e.files && e.files[0];
              if ((document.body.removeChild(e), !t)) return;
              if (t.size > 716800) return void s.default.alert(O("error"), O("idDocTooLarge"));
              const a = new FileReader();
              ((a.onload = () => {
                (setDocImg(String(a.result)), he(!0));
              }),
                a.readAsDataURL(t));
            };
            (document.body.appendChild(e), e.click());
          };
        (0, x.useFocusEffect)(
          (0, t.useCallback)(() => {
            we();
          }, [we]),
        );
        if (U)
          return (0, R.jsx)(p.SafeAreaView, {
            style: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: N.bg },
            children: (0, R.jsx)(o.default, { color: N.accentText }),
          });
        if (ldErr)
          return (0, R.jsx)(G9.GateScreen, {
            kind: "error",
            title: O("applicationLoadFailed"),
            body: (0, G9.classifyError)(ldErr).message,
            onRetry: () => {
              (V(!0), we());
            },
            onBack: () => H.back(),
          });
        const Ie = Date.now(),
          Re = "rejected" === F?.status && (!F.reapply_after || new Date(F.reapply_after).getTime() <= Ie),
          ze = !F || ed;
        return (0, R.jsxs)(p.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: N.bg },
          children: [
            (0, R.jsxs)(u.default, {
              style: P.header,
              children: [
                (0, R.jsx)(l.default, {
                  onPress: () => H.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: O("back"),
                  style: [P.iconBtn, { backgroundColor: N.surface, borderColor: N.border }],
                  children: (0, R.jsx)(h.Ionicons, { name: (0, I.chevronBack)(), size: 22, color: N.text }),
                }),
                (0, R.jsx)(c.default, {
                  style: [v.typography.h2, { color: N.text, flex: 1, marginHorizontal: v.spacing.md }],
                  children: O("becomeOrganizerTitle"),
                }),
              ],
            }),
            (0, R.jsx)(n.default, {
              contentContainerStyle: { padding: v.spacing.lg, paddingBottom: 2 * v.spacing.xxxl },
              keyboardShouldPersistTaps: "handled",
              children:
                !ze && F
                  ? (0, R.jsx)(B, {
                      app: F,
                      colors: N,
                      t: O,
                      onDashboard: () => H.replace("/organizer"),
                      onReapply: () => prefill(F),
                      onContact: () => H.push("/contact"),
                    })
                  : (0, R.jsxs)(R.Fragment, {
                      children: [
                        (0, R.jsx)(c.default, {
                          style: [v.typography.body, { color: N.textMuted, marginBottom: v.spacing.lg }],
                          children: O("applyIntro"),
                        }),
                        Re &&
                          F?.rejection_reason &&
                          (0, R.jsxs)(y.Card, {
                            style: { marginBottom: v.spacing.lg, borderColor: N.danger },
                            padding: "md",
                            children: [
                              (0, R.jsx)(c.default, {
                                style: [v.typography.smallStrong, { color: N.danger }],
                                children: O("rejectionReasonLabel"),
                              }),
                              (0, R.jsx)(c.default, {
                                style: [v.typography.small, { color: N.text, marginTop: 2 }],
                                children: F.rejection_reason,
                              }),
                            ],
                          }),
                        (0, R.jsx)(D, {
                          options: [
                            { value: "individual", label: O("typeIndividual") },
                            { value: "business", label: O("typeBusiness") },
                          ],
                          value: J,
                          onChange: (e) => K(e),
                          colors: N,
                        }),
                        (0, R.jsx)(A, { colors: N, children: O("sectionPersonal") }),
                        (0, R.jsx)(f.Input, {
                          label: O("fullLegalName"),
                          value: Q,
                          onChangeText: X,
                          maxLength: 80,
                        }),
                        (0, R.jsx)(f.Input, {
                          label: O("mobileNumber"),
                          value: Y,
                          onChangeText: Z,
                          keyboardType: "phone-pad",
                          placeholder: "+965 \u2026",
                          maxLength: 24,
                        }),
                        (0, R.jsx)(f.Input, {
                          label: O("emailAddress"),
                          value: $,
                          onChangeText: ee,
                          keyboardType: "email-address",
                          autoCapitalize: "none",
                          maxLength: 254,
                        }),
                        (0, R.jsx)(A, { colors: N, children: O("sectionOrganizer") }),
                        (0, R.jsx)(f.Input, {
                          label: O("organizerDisplayName"),
                          value: te,
                          onChangeText: ae,
                          maxLength: 60,
                        }),
                        (0, R.jsx)(f.Input, {
                          label: O("shortBio"),
                          value: oe,
                          onChangeText: se,
                          multiline: !0,
                          numberOfLines: 3,
                          maxLength: 500,
                          style: { minHeight: 70, textAlignVertical: "top" },
                        }),
                        (0, R.jsx)(c.default, {
                          style: [
                            v.typography.smallStrong,
                            { color: N.textMuted, marginBottom: v.spacing.xs },
                          ],
                          children: O("sportsHosted"),
                        }),
                        (0, R.jsx)(u.default, {
                          style: P.chipRow,
                          children: z.map((e) => {
                            const t = le.has(e);
                            return (0, R.jsxs)(
                              l.default,
                              {
                                onPress: () =>
                                  ne((t) => {
                                    const o = new Set(t);
                                    return (o.has(e) ? o.delete(e) : o.add(e), o);
                                  }),
                                accessibilityRole: "button",
                                accessibilityState: { selected: t },
                                style: [
                                  P.chip,
                                  {
                                    backgroundColor: t ? (0, T.sportColor)(e) : N.surface,
                                    borderColor: t ? (0, T.sportColor)(e) : N.border,
                                    flexDirection: "row",
                                  },
                                ],
                                children: [
                                  (0, R.jsx)(h.Ionicons, {
                                    name: T.sportIcon[e],
                                    size: 15,
                                    color: t ? "#fff" : N.textMuted,
                                  }),
                                  (0, R.jsx)(c.default, {
                                    style: [
                                      v.typography.smallStrong,
                                      { color: t ? "#fff" : N.text, marginStart: v.spacing.xs },
                                    ],
                                    children: O(e),
                                  }),
                                ],
                              },
                              e,
                            );
                          }),
                        }),
                        (0, R.jsxs)(u.default, {
                          style: [P.stepRow, { marginTop: v.spacing.md }],
                          children: [
                            (0, R.jsx)(c.default, {
                              style: [v.typography.smallStrong, { color: N.textMuted, flex: 1 }],
                              children: O("expectedMonthlyMatches"),
                            }),
                            (0, R.jsx)(L, { value: re, min: 0, max: 200, onChange: ie, colors: N }),
                          ],
                        }),
                        (0, R.jsx)(A, { colors: N, children: O("sectionIdentity") }),
                        (0, R.jsx)(u.default, {
                          style: P.chipRow,
                          children: k.map((e) =>
                            (0, R.jsx)(
                              M,
                              {
                                label: O(
                                  "civil_id" === e
                                    ? "docCivilId"
                                    : "government_id" === e
                                      ? "docGovId"
                                      : "docPassport",
                                ),
                                active: de === e,
                                onPress: () => ce(e),
                                colors: N,
                              },
                              e,
                            ),
                          ),
                        }),
                        (0, R.jsx)(f.Input, {
                          label: O("idDocNumber"),
                          value: ue,
                          onChangeText: pe,
                          maxLength: 32,
                          style: { marginTop: v.spacing.sm },
                        }),
                        (0, R.jsx)(c.default, {
                          style: [
                            v.typography.caption,
                            { color: N.textMuted, marginTop: -v.spacing.sm, marginBottom: v.spacing.sm },
                          ],
                          children: O("idDocNumberHint"),
                        }),
                        (0, R.jsxs)(l.default, {
                          onPress: pickDoc,
                          accessibilityRole: "button",
                          accessibilityLabel: O(ge ? "idDocReplace" : "idDocPickImage"),
                          style: [
                            P.upload,
                            { borderColor: ge ? N.success : N.border, backgroundColor: N.surface },
                          ],
                          children: [
                            (0, R.jsx)(h.Ionicons, {
                              name: ge ? "checkmark-circle" : "cloud-upload-outline",
                              size: 22,
                              color: ge ? N.success : N.accent,
                            }),
                            (0, R.jsx)(c.default, {
                              style: [
                                v.typography.bodyStrong,
                                { color: N.text, marginHorizontal: v.spacing.sm },
                              ],
                              children: O(ge ? "idDocAttached" : "idDocPickImage"),
                            }),
                          ],
                        }),
                        (0, R.jsxs)(u.default, {
                          style: [P.secureNote, { backgroundColor: N.surfaceAlt }],
                          children: [
                            (0, R.jsx)(h.Ionicons, { name: "lock-closed", size: 14, color: N.textMuted }),
                            (0, R.jsx)(c.default, {
                              style: [
                                v.typography.caption,
                                { color: N.textMuted, flex: 1, marginHorizontal: v.spacing.sm },
                              ],
                              children: O("secureStorageNote"),
                            }),
                          ],
                        }),
                        "business" === J &&
                          (0, R.jsxs)(R.Fragment, {
                            children: [
                              (0, R.jsx)(A, { colors: N, children: O("sectionBusiness") }),
                              (0, R.jsx)(f.Input, {
                                label: O("companyName"),
                                value: me,
                                onChangeText: xe,
                                maxLength: 120,
                              }),
                              (0, R.jsx)(f.Input, {
                                label: O("registrationNumber"),
                                value: ye,
                                onChangeText: be,
                                maxLength: 40,
                              }),
                              (0, R.jsx)(f.Input, {
                                label: O("commercialLicense"),
                                value: fe,
                                onChangeText: je,
                                maxLength: 40,
                              }),
                              (0, R.jsx)(f.Input, {
                                label: O("website"),
                                value: Ce,
                                onChangeText: ve,
                                autoCapitalize: "none",
                                maxLength: 200,
                              }),
                              (0, R.jsx)(f.Input, {
                                label: O("socialMedia"),
                                value: Se,
                                onChangeText: Te,
                                autoCapitalize: "none",
                                maxLength: 200,
                              }),
                            ],
                          }),
                      ],
                    }),
            }),
            ze &&
              (0, R.jsx)(u.default, {
                style: [P.bottom, { backgroundColor: N.bg, borderTopColor: N.border }],
                children: (0, R.jsx)(b.Button, {
                  title: O("submitApplication"),
                  fullWidth: !0,
                  size: "lg",
                  loading: q,
                  onPress: async () => {
                    if (e) {
                      G(!0);
                      try {
                        (await (0, S.submitOrganizerApplication)(e.id, {
                          full_legal_name: Q,
                          mobile: Y,
                          email: $,
                          display_name: te,
                          bio: oe,
                          sports: Array.from(le),
                          expected_monthly_matches: re,
                          organizer_type: J,
                          id_doc_type: de,
                          id_doc_number: ue,
                          id_doc_uploaded: ge,
                          id_doc_image: docImg,
                          business:
                            "business" === J
                              ? {
                                  company_name: me,
                                  registration_number: ye,
                                  license_number: fe,
                                  website: Ce,
                                  socials: Se,
                                }
                              : null,
                        }),
                          await W(),
                          s.default.alert(O("applicationSubmittedTitle"), O("applicationSubmittedBody")),
                          await we());
                      } catch (e) {
                        s.default.alert(O("error"), (0, _.storeErrorText)(e?.message ?? "") || O("error"));
                      } finally {
                        G(!1);
                      }
                    }
                  },
                  leftIcon: (0, R.jsx)(h.Ionicons, {
                    name: "shield-checkmark-outline",
                    size: 18,
                    color: "#fff",
                  }),
                }),
              }),
          ],
        });
      }));
    var t = r(_d[1]),
      o = e(r(_d[2])),
      s = e(r(_d[3])),
      l = e(r(_d[4])),
      n = e(r(_d[5])),
      d = e(r(_d[6])),
      c = e(r(_d[7])),
      u = e(r(_d[8])),
      p = r(_d[9]),
      h = r(_d[10]),
      x = r(_d[11]),
      y = r(_d[12]),
      b = r(_d[13]),
      f = r(_d[14]),
      j = r(_d[15]),
      C = r(_d[16]),
      v = r(_d[17]),
      S = r(_d[18]),
      T = r(_d[19]),
      w = r(_d[20]),
      I = r(_d[21]),
      _ = r(_d[22]),
      R = r(_d[23]),
      G9 = r(_d[24]);
    const z = ["football", "padel", "tennis"],
      k = ["civil_id", "government_id", "passport"];
    const B = ({ app: e, colors: t, t: o, onDashboard: s, onReapply: l, onContact: cs }) => {
        const n = {
            approved: {
              icon: "ribbon",
              tone: t.success,
              title: o("statusApprovedTitle"),
              body: o("statusApprovedBody"),
            },
            under_review: {
              icon: "hourglass",
              tone: t.warning,
              title: o("statusUnderReviewTitle"),
              body: o("statusUnderReviewBody"),
            },
            rejected: {
              icon: "close-circle",
              tone: t.danger,
              title: o("statusRejectedTitle"),
              body: o("statusRejectedBody"),
            },
            suspended: {
              icon: "pause-circle",
              tone: t.danger,
              title: o("statusSuspendedTitle"),
              body: o("statusSuspendedBody"),
            },
            info_requested: {
              icon: "chatbubble-ellipses",
              tone: t.warning,
              title: o("statusInfoRequestedTitle"),
              body: o("statusInfoRequestedBody"),
            },
            submitted: {
              icon: "hourglass",
              tone: t.warning,
              title: o("statusUnderReviewTitle"),
              body: o("statusUnderReviewBody"),
            },
            draft: { icon: "create", tone: t.textMuted, title: o("appStatus_draft"), body: "" },
          }[e.status],
          d = e.reapply_after
            ? Math.max(0, Math.ceil((new Date(e.reapply_after).getTime() - Date.now()) / 864e5))
            : 0;
        return (0, R.jsxs)(u.default, {
          style: { alignItems: "center", paddingTop: v.spacing.xl },
          children: [
            (0, R.jsx)(u.default, {
              style: [P.statusIcon, { backgroundColor: t.surfaceAlt, borderColor: n.tone }],
              children: (0, R.jsx)(h.Ionicons, { name: n.icon, size: 40, color: n.tone }),
            }),
            (0, R.jsx)(c.default, {
              style: [v.typography.h1, { color: t.text, marginTop: v.spacing.lg, textAlign: "center" }],
              children: n.title,
            }),
            (0, R.jsx)(c.default, {
              style: [
                v.typography.body,
                { color: t.textMuted, marginTop: v.spacing.sm, textAlign: "center" },
              ],
              children: n.body,
            }),
            ("under_review" === e.status || "submitted" === e.status) &&
              (0, R.jsx)(c.default, {
                style: [
                  v.typography.smallStrong,
                  { color: t.text, marginTop: v.spacing.sm, textAlign: "center" },
                ],
                children: o("reviewTimeline"),
              }),
            ("rejected" === e.status || "suspended" === e.status) &&
              e.rejection_reason &&
              (0, R.jsxs)(y.Card, {
                style: { marginTop: v.spacing.lg, alignSelf: "stretch" },
                padding: "md",
                children: [
                  (0, R.jsx)(c.default, {
                    style: [v.typography.smallStrong, { color: t.textMuted }],
                    children: o("suspended" === e.status ? "suspensionReasonLabel" : "rejectionReasonLabel"),
                  }),
                  (0, R.jsx)(c.default, {
                    style: [v.typography.body, { color: t.text, marginTop: 2 }],
                    children: e.rejection_reason,
                  }),
                ],
              }),
            "info_requested" === e.status &&
              e.applicant_message &&
              (0, R.jsxs)(y.Card, {
                style: { marginTop: v.spacing.lg, alignSelf: "stretch" },
                padding: "md",
                children: [
                  (0, R.jsx)(c.default, {
                    style: [v.typography.smallStrong, { color: t.warning }],
                    children: o("additionalInfoRequested"),
                  }),
                  (0, R.jsx)(c.default, {
                    style: [v.typography.body, { color: t.text, marginTop: 2 }],
                    children: e.applicant_message,
                  }),
                ],
              }),
            (0, R.jsx)(u.default, { style: { height: v.spacing.xl } }),
            "approved" === e.status &&
              (0, R.jsx)(b.Button, { title: o("goToDashboard"), fullWidth: !0, size: "lg", onPress: s }),
            "info_requested" === e.status &&
              (0, R.jsx)(b.Button, { title: o("updateApplication"), fullWidth: !0, size: "lg", onPress: l }),
            "suspended" === e.status &&
              (0, R.jsx)(b.Button, { title: o("contactSupport"), fullWidth: !0, size: "lg", variant: "secondary", onPress: cs }),
            "rejected" === e.status &&
              (d > 0
                ? (0, R.jsx)(c.default, {
                    style: [v.typography.small, { color: t.textMuted }],
                    children: o("reapplyIn", { days: d }),
                  })
                : (0, R.jsx)(b.Button, { title: o("reapplyNow"), fullWidth: !0, size: "lg", onPress: l })),
          ],
        });
      },
      A = ({ children: e, colors: t }) =>
        (0, R.jsx)(c.default, {
          style: [v.typography.h3, { color: t.text, marginTop: v.spacing.xl, marginBottom: v.spacing.md }],
          children: e,
        }),
      M = ({ label: e, active: t, onPress: o, colors: s }) =>
        (0, R.jsx)(l.default, {
          onPress: o,
          accessibilityRole: "button",
          accessibilityState: { selected: t },
          style: [
            P.chip,
            { backgroundColor: t ? s.accent : s.surface, borderColor: t ? s.accent : s.border },
          ],
          children: (0, R.jsx)(c.default, {
            style: [v.typography.smallStrong, { color: t ? "#fff" : s.text }],
            children: e,
          }),
        }),
      D = ({ options: e, value: t, onChange: o, colors: s }) =>
        (0, R.jsx)(u.default, {
          style: [P.segmented, { backgroundColor: s.surfaceAlt, borderColor: s.border }],
          children: e.map((e) => {
            const n = e.value === t;
            return (0, R.jsx)(
              l.default,
              {
                onPress: () => o(e.value),
                accessibilityRole: "button",
                style: [P.segment, n && { backgroundColor: s.accent }],
                children: (0, R.jsx)(c.default, {
                  style: [v.typography.smallStrong, { color: n ? "#fff" : s.text }],
                  children: e.label,
                }),
              },
              e.value,
            );
          }),
        }),
      L = ({ value: e, min: t, max: o, onChange: s, colors: n }) =>
        (0, R.jsxs)(u.default, {
          style: { flexDirection: "row", alignItems: "center", gap: v.spacing.sm },
          children: [
            (0, R.jsx)(l.default, {
              onPress: () => s(Math.max(t, e - 1)),
              style: [P.stepBtn, { backgroundColor: n.surfaceAlt, borderColor: n.border }],
              children: (0, R.jsx)(h.Ionicons, { name: "remove", size: 18, color: n.text }),
            }),
            (0, R.jsx)(c.default, {
              style: [v.typography.h3, { color: n.text, minWidth: 36, textAlign: "center" }],
              children: (0, T.formatNumber)(e),
            }),
            (0, R.jsx)(l.default, {
              onPress: () => s(Math.min(o, e + 1)),
              style: [P.stepBtn, { backgroundColor: n.surfaceAlt, borderColor: n.border }],
              children: (0, R.jsx)(h.Ionicons, { name: "add", size: 18, color: n.text }),
            }),
          ],
        }),
      P = d.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: v.spacing.lg,
          paddingVertical: v.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: d.default.hairlineWidth,
        },
        chipRow: { flexDirection: "row", flexWrap: "wrap", gap: v.spacing.sm },
        chip: {
          minHeight: 38,
          paddingHorizontal: v.spacing.lg,
          borderRadius: v.radius.pill,
          borderWidth: d.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        segmented: {
          flexDirection: "row",
          borderRadius: v.radius.md,
          borderWidth: d.default.hairlineWidth,
          padding: 3,
          gap: 3,
        },
        segment: {
          flex: 1,
          height: 40,
          borderRadius: v.radius.sm,
          alignItems: "center",
          justifyContent: "center",
        },
        stepRow: { flexDirection: "row", alignItems: "center" },
        stepBtn: {
          width: 40,
          height: 40,
          borderRadius: v.radius.md,
          borderWidth: d.default.hairlineWidth,
          alignItems: "center",
          justifyContent: "center",
        },
        upload: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 52,
          borderRadius: v.radius.md,
          borderWidth: 1,
          borderStyle: "dashed",
        },
        secureNote: {
          flexDirection: "row",
          alignItems: "center",
          padding: v.spacing.sm,
          borderRadius: v.radius.sm,
          marginTop: v.spacing.sm,
        },
        statusIcon: {
          width: 84,
          height: 84,
          borderRadius: 42,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
        },
        bottom: {
          paddingHorizontal: v.spacing.lg,
          paddingTop: v.spacing.md,
          paddingBottom: v.spacing.xl,
          borderTopWidth: d.default.hairlineWidth,
        },
      });
  },
  2459,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 626, 625, 630, 615, 616, 671, 1311, 675,
    1171, 674, 13, 9001,
  ],
);
