__d(
  function (g, r, i, a, _m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { signIn: e, enterGuest: P, adoptSession: R } = (0, y.useAuth)(),
          { colors: v } = (0, x.useTheme)(),
          F = (0, c.useRouter)(),
          E = (0, b.useT)(),
          [O, k] = (0, t.useState)("phone"),
          [N, _] = (0, t.useState)(""),
          [M, B] = (0, t.useState)(""),
          [W, D] = (0, t.useState)(""),
          [z, H] = (0, t.useState)(""),
          [q, L] = (0, t.useState)(!1),
          [U, V] = (0, t.useState)(null),
          [G, J] = (0, t.useState)(null),
          [K, Q] = (0, t.useState)(!1),
          [X, Y] = (0, t.useState)(!1),
          [Z, $] = (0, t.useState)(!1),
          [ee, te] = (0, t.useState)(!1),
          [le, se] = (0, t.useState)(""),
          [ae, re] = (0, t.useState)(null),
          [oe, ne] = (0, t.useState)(""),
          [ie, ce] = (0, t.useState)(null),
          [de, ue] = (0, t.useState)(null),
          [pe, ge] = (0, t.useState)(0);
        ((0, t.useEffect)(() => {
          if (pe <= 0) return;
          const e = setTimeout(() => ge((e) => e - 1), 1e3);
          return () => clearTimeout(e);
        }, [pe]),
          (0, t.useEffect)(() => {
            (0, C.isReturning)().then(ue);
          }, []));
        const he = async () => {
            (J(null), Q(!0));
            try {
              const e = (await (0, j.remoteAuthAvailable)())
                ? await (0, j.remoteOtpRequest)(W)
                : await T.store.mockRequestOtp(W);
              (V(e.demo_code ?? null), L(!0), ge(30));
            } catch (e) {
              J((0, A.storeErrorText)(e?.message ?? "") || E("error"));
            } finally {
              Q(!1);
            }
          },
          me = "NO_ACCOUNT_FOR_PHONE" === G;
        return (0, I.jsx)(u.Screen, {
          scroll: !0,
          children: (0, I.jsxs)(l.default, {
            behavior: void 0,
            children: [
              (0, I.jsxs)(n.default, {
                style: { marginTop: f.spacing.xxxl, marginBottom: f.spacing.xl },
                children: [
                  (0, I.jsx)(o.default, {
                    style: [f.typography.display, { color: v.text }],
                    children: E("appName"),
                  }),
                  (0, I.jsx)(o.default, {
                    style: [f.typography.body, { color: v.textMuted, marginTop: f.spacing.xs }],
                    children: E("tagline"),
                  }),
                ],
              }),
              (0, I.jsx)(o.default, {
                style: [f.typography.h1, { color: v.text }],
                children: E(!1 === de ? "welcomeFirst" : "welcomeBack"),
              }),
              !1 === de &&
                (0, I.jsx)(o.default, {
                  style: [f.typography.body, { color: v.textMuted, marginTop: f.spacing.xs }],
                  children: E("welcomeFirstSub"),
                }),
              (0, I.jsx)(n.default, { style: { height: f.spacing.lg } }),
              (0, I.jsx)(n.default, {
                style: { flexDirection: "row", gap: f.spacing.xs, marginBottom: f.spacing.md },
                children: ["phone", "email"].map((e) => {
                  const t = O === e;
                  return (0, I.jsx)(
                    s.default,
                    {
                      onPress: () => {
                        (k(e), J(null));
                      },
                      accessibilityRole: "button",
                      accessibilityState: { selected: t },
                      style: {
                        flex: 1,
                        alignItems: "center",
                        paddingVertical: 9,
                        borderRadius: f.radius.pill,
                        backgroundColor: t ? v.accent : v.surface,
                        borderWidth: 1,
                        borderColor: t ? v.accent : v.border,
                      },
                      children: (0, I.jsx)(o.default, {
                        style: [f.typography.smallStrong, { color: t ? v.accentInk : v.textMuted }],
                        children: E("phone" === e ? "signInPhoneTab" : "signInEmailTab"),
                      }),
                    },
                    e,
                  );
                }),
              }),
              "phone" === O
                ? (0, I.jsxs)(I.Fragment, {
                    children: [
                      (0, I.jsx)(h.Input, {
                        label: E("phoneStepTitle"),
                        affix: "+965",
                        keyboardType: "phone-pad",
                        autoComplete: "tel",
                        textContentType: "telephoneNumber",
                        maxLength: 8,
                        value: W,
                        onChangeText: (e) => {
                          (D(e.replace(/[^0-9]/g, "").slice(0, 8)), L(!1), H(""));
                        },
                        placeholder: "5000 0000",
                      }),
                      q &&
                        (0, I.jsx)(h.Input, {
                          label: E("otpStepTitle"),
                          keyboardType: "number-pad",
                          autoComplete: "one-time-code",
                          textContentType: "oneTimeCode",
                          maxLength: 6,
                          value: z,
                          onChangeText: (e) => H(e.replace(/[^0-9]/g, "").slice(0, 6)),
                          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
                          error: me ? void 0 : ((0, S.authErrorText)(G, E) ?? void 0),
                        }),
                      q &&
                        U &&
                        (0, I.jsx)(o.default, {
                          style: [f.typography.caption, { color: v.textMuted, textAlign: "center" }],
                          children: E("otpDemoHint", { code: U }),
                        }),
                      !q &&
                        (0, I.jsx)(p.FormError, {
                          text: me ? null : (0, S.authErrorText)(G, E),
                          style: { marginTop: f.spacing.xs },
                        }),
                      me
                        ? (0, I.jsxs)(n.default, {
                            style: { marginTop: f.spacing.md, gap: f.spacing.sm },
                            children: [
                              (0, I.jsx)(o.default, {
                                style: [f.typography.body, { color: v.text, textAlign: "center" }],
                                children: E("noAccountForPhone"),
                              }),
                              (0, I.jsx)(m.Button, {
                                title: E("useThisNumber"),
                                onPress: () => {
                                  F.push({
                                    pathname: "/(auth)/sign-up",
                                    params: Object.assign({ phone: W }, q ? { otp: "sent" } : {}),
                                  });
                                },
                                fullWidth: !0,
                                size: "lg",
                              }),
                            ],
                          })
                        : (0, I.jsx)(m.Button, {
                            title: E(q ? "signIn" : "sendCode"),
                            onPress: q
                              ? async () => {
                                  (J(null), Q(!0));
                                  try {
                                    const e = (await (0, j.remoteAuthAvailable)())
                                      ? await (0, j.remoteOtpSignIn)(W, z.trim())
                                      : await T.store.mockSignInWithOtp(W, z.trim());
                                    (R(e), F.replace("/(tabs)"));
                                  } catch (e) {
                                    J(
                                      "NO_ACCOUNT_FOR_PHONE" === e?.message
                                        ? "NO_ACCOUNT_FOR_PHONE"
                                        : (0, A.storeErrorText)(e?.message ?? "") || E("error"),
                                    );
                                  } finally {
                                    Q(!1);
                                  }
                                }
                              : he,
                            loading: K,
                            disabled: q ? z.length < 6 : !(0, w.isDialablePhone)(W),
                            fullWidth: !0,
                            size: "lg",
                            style: { marginTop: f.spacing.md },
                          }),
                      q &&
                        !me &&
                        (0, I.jsxs)(I.Fragment, {
                          children: [
                            (0, I.jsx)(s.default, {
                              disabled: pe > 0,
                              onPress: he,
                              accessibilityRole: "button",
                              hitSlop: 12,
                              style: { alignItems: "center", marginTop: f.spacing.sm },
                              children: (0, I.jsx)(o.default, {
                                style: [f.typography.small, { color: pe > 0 ? v.textMuted : v.accentText }],
                                children: pe > 0 ? E("resendIn", { s: String(pe) }) : E("resendCode"),
                              }),
                            }),
                            (0, I.jsx)(o.default, {
                              style: [f.typography.caption, { color: v.textMuted, textAlign: "center" }],
                              children: E("otpValidFor"),
                            }),
                            (0, I.jsxs)(s.default, {
                              onPress: () => {
                                (L(!1), H(""), J(null));
                              },
                              accessibilityRole: "button",
                              hitSlop: 12,
                              style: { alignItems: "center", marginTop: f.spacing.sm },
                              children: [
                                (0, I.jsx)(o.default, {
                                  style: [f.typography.small, { color: v.accentText }],
                                  children: E("otpNotArrived"),
                                }),
                                (0, I.jsx)(o.default, {
                                  style: [f.typography.caption, { color: v.textMuted }],
                                  children: E("otpCheckNumber"),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  })
                : (0, I.jsxs)(I.Fragment, {
                    children: [
                      ie &&
                        !Z &&
                        (0, I.jsx)(o.default, {
                          style: [f.typography.small, { color: v.accentText, marginBottom: f.spacing.sm }],
                          children: ie,
                        }),
                      (0, I.jsx)(h.Input, {
                        label: E("email"),
                        autoCapitalize: "none",
                        autoComplete: "email",
                        keyboardType: "email-address",
                        value: N,
                        onChangeText: _,
                        placeholder: "you@example.com",
                      }),
                      Z
                        ? (0, I.jsxs)(I.Fragment, {
                            children: [
                              ee &&
                                (0, I.jsxs)(I.Fragment, {
                                  children: [
                                    (0, I.jsx)(h.Input, {
                                      label: E("otpStepTitle"),
                                      keyboardType: "number-pad",
                                      value: le,
                                      onChangeText: (e) => se(e.replace(/[^0-9]/g, "").slice(0, 6)),
                                      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
                                    }),
                                    ae &&
                                      (0, I.jsx)(o.default, {
                                        style: [
                                          f.typography.caption,
                                          { color: v.textMuted, textAlign: "center" },
                                        ],
                                        children: E("otpDemoHint", { code: ae }),
                                      }),
                                    (0, I.jsx)(h.Input, {
                                      label: E("newPasswordLabel"),
                                      secureTextEntry: !0,
                                      value: oe,
                                      onChangeText: ne,
                                      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                    }),
                                  ],
                                }),
                              (0, I.jsx)(p.FormError, { text: G, style: { marginTop: f.spacing.xs } }),
                              (0, I.jsx)(m.Button, {
                                title: E(ee ? "resetCta" : "sendCode"),
                                onPress: ee
                                  ? async () => {
                                      (J(null), Q(!0));
                                      try {
                                        ((await (0, j.remoteAuthAvailable)())
                                          ? await (0, j.remoteResetConfirm)(N.trim(), le.trim(), oe)
                                          : await T.store.mockResetPassword(N.trim(), le.trim(), oe),
                                          $(!1),
                                          te(!1),
                                          se(""),
                                          ne(""),
                                          B(""),
                                          ce(E("resetDone")));
                                      } catch (e) {
                                        J((0, A.storeErrorText)(e?.message ?? "") || E("error"));
                                      } finally {
                                        Q(!1);
                                      }
                                    }
                                  : async () => {
                                      (J(null), Q(!0));
                                      try {
                                        const e = (await (0, j.remoteAuthAvailable)())
                                          ? await (0, j.remoteResetRequest)(N.trim())
                                          : await T.store.mockRequestPasswordReset(N.trim());
                                        (re(e.demo_code ?? null), te(!0));
                                      } catch (e) {
                                        J((0, A.storeErrorText)(e?.message ?? "") || E("error"));
                                      } finally {
                                        Q(!1);
                                      }
                                    },
                                loading: K,
                                disabled: ee ? le.length < 6 || oe.length < 8 : !N.trim(),
                                fullWidth: !0,
                                size: "lg",
                                style: { marginTop: f.spacing.md },
                              }),
                              (0, I.jsx)(s.default, {
                                onPress: () => {
                                  ($(!1), te(!1), J(null));
                                },
                                accessibilityRole: "button",
                                style: { alignItems: "center", marginTop: f.spacing.sm },
                                children: (0, I.jsx)(o.default, {
                                  style: [f.typography.small, { color: v.textMuted }],
                                  children: E("backToSignIn"),
                                }),
                              }),
                            ],
                          })
                        : (0, I.jsxs)(I.Fragment, {
                            children: [
                              (0, I.jsx)(h.Input, {
                                label: E("password"),
                                secureTextEntry: !0,
                                autoComplete: "password",
                                value: M,
                                onChangeText: B,
                                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                error: G ?? void 0,
                              }),
                              (0, I.jsx)(s.default, {
                                onPress: () => {
                                  ($(!0), J(null), ce(null));
                                },
                                accessibilityRole: "button",
                                style: { alignSelf: "flex-end" },
                                children: (0, I.jsx)(o.default, {
                                  style: [f.typography.small, { color: v.accentText }],
                                  children: E("forgotPassword"),
                                }),
                              }),
                              (0, I.jsx)(m.Button, {
                                title: E("signIn"),
                                onPress: async () => {
                                  (J(null), Q(!0));
                                  try {
                                    (await e(N.trim(), M), F.replace("/(tabs)"));
                                  } catch (e) {
                                    J((0, A.storeErrorText)(e?.message ?? "") || E("error"));
                                  } finally {
                                    Q(!1);
                                  }
                                },
                                loading: K,
                                fullWidth: !0,
                                size: "lg",
                                style: { marginTop: f.spacing.md },
                              }),
                            ],
                          }),
                    ],
                  }),
              (0, I.jsxs)(n.default, {
                style: { marginTop: f.spacing.xl },
                children: [
                  (0, I.jsx)(o.default, {
                    style: [
                      f.typography.small,
                      { color: v.textMuted, textAlign: "center", marginBottom: f.spacing.sm },
                    ],
                    children: E("noAccount"),
                  }),
                  (0, I.jsx)(m.Button, {
                    title: E("createAccountCta"),
                    variant: "ghost",
                    fullWidth: !0,
                    onPress: () => F.push("/(auth)/sign-up"),
                  }),
                ],
              }),
              X
                ? (0, I.jsxs)(n.default, {
                    style: { marginTop: f.spacing.lg },
                    children: [
                      (0, I.jsx)(o.default, {
                        style: [
                          f.typography.smallStrong,
                          { color: v.textMuted, textAlign: "center", marginBottom: f.spacing.sm },
                        ],
                        children: E("guestChooserTitle"),
                      }),
                      (0, I.jsx)(n.default, {
                        style: { flexDirection: "row", gap: f.spacing.sm },
                        children: [
                          ["female", "\u0633\u064a\u062f\u0627\u062a", "#FF9EC4", "#2B0A1A"],
                          ["male", "\u0631\u062c\u0627\u0644", "#CCFF00", "#1A2000"],
                        ].map(([e, t, l, c]) =>
                          (0, I.jsxs)(
                            s.default,
                            {
                              onPress: () => {
                                (P(e), F.replace("/(tabs)"));
                              },
                              accessibilityRole: "button",
                              accessibilityLabel: t,
                              style: {
                                flex: 1,
                                alignItems: "center",
                                borderRadius: 16,
                                borderWidth: 1.5,
                                borderColor: l,
                                backgroundColor: v.surface,
                                paddingVertical: f.spacing.md,
                              },
                              children: [
                                (0, I.jsx)(n.default, {
                                  style: {
                                    width: 34,
                                    height: 34,
                                    borderRadius: 12,
                                    backgroundColor: l,
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: (0, I.jsx)(o.default, {
                                    style: { color: c, fontWeight: "800" },
                                    children: t.slice(0, 1),
                                  }),
                                }),
                                (0, I.jsx)(o.default, {
                                  style: [f.typography.bodyStrong, { color: v.text, marginTop: 6 }],
                                  children: t,
                                }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, I.jsx)(o.default, {
                        style: [
                          f.typography.caption,
                          { color: v.textMuted, textAlign: "center", marginTop: f.spacing.sm },
                        ],
                        children: E("guestChooserNote"),
                      }),
                    ],
                  })
                : (0, I.jsx)(s.default, {
                    onPress: () => Y(!0),
                    accessibilityRole: "button",
                    style: { alignItems: "center", marginTop: f.spacing.lg },
                    children: (0, I.jsx)(o.default, {
                      style: [f.typography.smallStrong, { color: v.textMuted }],
                      children: E("browseAsGuest"),
                    }),
                  }),
            ],
          }),
        });
      }));
    var t = r(d[1]),
      l = e(r(d[2])),
      s = (e(r(d[3])), e(r(d[4]))),
      o = e(r(d[5])),
      n = e(r(d[6])),
      c = r(d[7]),
      u = r(d[8]),
      p = r(d[9]),
      h = r(d[10]),
      m = r(d[11]),
      y = r(d[12]),
      x = r(d[13]),
      f = r(d[14]),
      b = r(d[15]),
      j = r(d[16]),
      T = r(d[17]),
      C = r(d[18]),
      S = r(d[19]),
      w = r(d[20]),
      A = r(d[21]),
      I = r(d[22]);
  },
  613,
  [
    33, 15, 466, 137, 369, 146, 273, 20, 614, 624, 625, 626, 630, 615, 616, 675, 913, 672, 914, 916, 650, 674,
    13,
  ],
);
