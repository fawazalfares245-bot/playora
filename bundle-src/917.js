__d(
  function (g, _r, _i, _a, m, _e, _d) {
    var e = _r(_d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { adoptSession: e, enterGuest: a } = (0, x.useAuth)(),
          { colors: G } = (0, b.useTheme)(),
          q = (0, d.useRouter)(),
          U = (0, S.useT)(),
          { width: Y, height: X } = (0, i.default)(),
          Z = (0, c.useReducedMotion)(),
          J = (0, d.useLocalSearchParams)(),
          K = "female" === J.preferred ? "female" : "male" === J.preferred ? "male" : null,
          Q = "string" == typeof J.phone ? J.phone : "",
          ee = "sent" === J.otp && Q.length >= 8,
          te = "string" == typeof J.next && /^\/[A-Za-z0-9\-_/[\]]*$/.test(J.next) ? J.next : null,
          [re, ne] = (0, t.useState)(ee ? "otp" : "phone"),
          [ae, oe] = (0, t.useState)(null),
          [se, le] = (0, t.useState)(null),
          ie = (0, t.useRef)(!1),
          ce = (0, t.useRef)(null);
        (0, t.useEffect)(() => {
          (0, v.focusA11y)(ce);
        }, [re]);
        const de = (0, t.useRef)([]),
          ue = (0, t.useRef)(!1),
          pe = (e) => {
            const t = De.current?.user.id;
            t ? (0, W.logFunnel)(t, e) : de.current.push(e);
          };
        (0, t.useEffect)(() => {
          ue.current ||
            ((ue.current = !0),
            de.current.push("wizard:start"),
            (0, P.loadWizardDraft)().then((e) => {
              !e ||
                ee ||
                Q ||
                (e.phone && fe(e.phone),
                e.fullName && we(e.fullName),
                e.birthDate && le(e.birthDate),
                ("otp" !== e.step && "name" !== e.step) || ne(e.step));
            }));
        }, []);
        const ge = (e) => {
            const t = de.current;
            de.current = [];
            for (const r of t) (0, W.logFunnel)(e, r);
          },
          he = !!se && (0, _.isRealDate)(se) && (0, _.ageOn)(se) >= A.MIN_AGE,
          [me, fe] = (0, t.useState)(Q),
          [ye, xe] = (0, t.useState)(""),
          [be, je] = (0, t.useState)(null),
          [Te, Se] = (0, t.useState)(0),
          [ke, we] = (0, t.useState)(""),
          [Ce, ve] = (0, t.useState)(null),
          [Pe, Ae] = (0, t.useState)([]),
          [Me, Re] = (0, t.useState)(""),
          [ze, We] = (0, t.useState)(null),
          [Be, Ie] = (0, t.useState)(!1),
          [Oe, Ee] = (0, t.useState)(null),
          // Email sign-up. The wizard was phone-OTP only, so anyone who could not or would not take an
          // SMS had no way in at all - and the backend has had email account creation the whole time
          // (mockSignUp), reachable only from the sign-in screen for accounts that already existed.
          // The mode decides the first step and which call creates the account; everything after it -
          // name, date of birth, audience, clan - is the same wizard.
          [md9, smd9] = (0, t.useState)("phone"),
          [em9, sem9] = (0, t.useState)(""),
          [pw9, spw9] = (0, t.useState)("");
        const eml9 = "email" === md9,
          pwIssues9 = (0, T.checkPasswordStrength)(pw9),
          emailOk9 = (0, T.isValidEmail)(em9.trim()) && 0 === pwIssues9.length;
        (0, t.useEffect)(() => {
          Oe || eml9
            ? (0, P.clearWizardDraft)()
            : (0, P.saveWizardDraft)({ step: re, phone: me, fullName: ke, birthDate: se ?? "" });
        }, [re, me, ke, se, Oe, eml9]);
        const De = (0, t.useRef)(null),
          [Fe, Le] = (0, t.useState)(null),
          [Ne, Ve] = (0, t.useState)(!1),
          [He, $e] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          if (Te <= 0) return;
          const e = setInterval(() => Se((e) => e - 1), 1e3);
          return () => clearInterval(e);
        }, [Te > 0]);
        const Ge = (0, c.useSharedValue)(0),
          [qe, Ue] = (0, t.useState)(F),
          Ye = (0, t.useRef)({ x: 0, y: 0 }),
          Xe = (0, c.useAnimatedStyle)(
            (function () {
              const e = () => ({ opacity: 0 === Ge.value ? 0 : 1, transform: [{ scale: Ge.value }] });
              return (
                (e.__closure = { sweep: Ge }),
                (e.__workletHash = 6580151836695),
                (e.__initData = N),
                e
              );
            })(),
          ),
          Ze = (e) => {
            Ne || ie.current || ((0, B.buzz)(), oe(e), Le(null));
          },
          Je = (e, t) => {
            const r = ae;
            if (r && !Ne && !ie.current) {
              if (
                ((ie.current = !0),
                (0, B.buzz)(),
                ve(r),
                pe("wizard:fork"),
                Ue("female" === r ? E : F),
                (Ye.current = { x: e, y: t }),
                Z)
              )
                return ((0, M.setThemeAudience)(r), void Ke(r));
              ((Ge.value = (0, c.withTiming)(1, { duration: 520, easing: c.Easing.out(c.Easing.cubic) })),
                setTimeout(() => {
                  ((0, M.setThemeAudience)(r), Ke(r));
                }, 560));
            }
          },
          Ke = async (e) => {
            (await et(e))
              ? (pe("wizard:clan_seen"), ne("clan"))
              : ((ie.current = !1), ve(null), (Ge.value = (0, c.withTiming)(0, { duration: 200 })));
          };
        (0, t.useEffect)(() => {
          "clan" === re && (Ge.value = (0, c.withTiming)(0, { duration: 360 }));
        }, [re]);
        const Qe = async () => {
            (Le(null), Ve(!0));
            try {
              const e = (await (0, R.remoteAuthAvailable)())
                ? await (0, R.remoteOtpRequest)(me)
                : await z.store.mockRequestOtp(me);
              (je(e.demo_code ?? null), Se(30), ne("otp"), pe("wizard:otp_sent"));
            } catch (e) {
              Le((0, I.storeErrorText)(e?.message ?? "") || U("error"));
            } finally {
              Ve(!1);
            }
          },
          et = async (e) => {
            const t = e ?? Ce;
            if (!t) return null;
            (Le(null), Ve(!0));
            try {
              // The two ways to mint the account. The email path hands the date of birth to
              // mockSignUp, which applies the same age gate and records the same terms acceptance the
              // phone path does - an account should not differ by the door it came through.
              const e = eml9
                ? (await (0, R.remoteAuthAvailable)())
                  ? await (0, R.remoteSignUp)(em9.trim(), pw9, (0, T.sanitizeName)(ke), t, se ?? "")
                  : await z.store.mockSignUp(em9.trim(), pw9, (0, T.sanitizeName)(ke), t, se ?? "")
                : (await (0, R.remoteAuthAvailable)())
                  ? await (0, R.remoteOtpVerify)(me, ye.trim(), (0, T.sanitizeName)(ke), t, se ?? "", !0)
                  : await z.store.mockVerifyOtp(me, ye.trim(), (0, T.sanitizeName)(ke), t, se ?? "", !0);
              return (
                (0, R.persistSession)(e),
                (De.current = e),
                Ee(e.user.id),
                pe("wizard:account_created"),
                ge(e.user.id),
                (0, W.fetchTeamRankings)(void 0, e.user.id)
                  .then((e) => Ae(e.slice(0, 4)))
                  .catch(() => Ae([])),
                e.user.id
              );
            } catch (e) {
              const t = (0, I.storeErrorText)(e?.message ?? "") || U("error");
              if (eml9) {
                // No code to resend; send them back to the field that can actually be corrected.
                (Le(t), ne("email"));
                return null;
              }
              if ("OTP_EXPIRED" === t || "OTP_WRONG" === t || "OTP_ATTEMPTS" === t) {
                (xe(""), ne("otp"), Le(U("otpRestart")));
                try {
                  const e = (await (0, R.remoteAuthAvailable)())
                    ? await (0, R.remoteOtpRequest)(me)
                    : await z.store.mockRequestOtp(me);
                  (je(e.demo_code ?? null), Se(30));
                } catch {}
              } else Le(t);
              return null;
            } finally {
              Ve(!1);
            }
          },
          tt = () => {
            (pe("wizard:done"), De.current && e(De.current), te ? q.replace(te) : q.replace("/(tabs)"));
          },
          rt = ({ value: e, accent: t, ink: r }) => {
            const a = (0, c.useSharedValue)(0),
              s = (0, c.useAnimatedStyle)(
                (function () {
                  const e = () => ({
                    transform: Z ? [] : [{ scale: 1 + 0.04 * a.value }, { translateY: -4 * a.value }],
                  });
                  return (
                    (e.__closure = { reducedMotion: Z, lift: a }),
                    (e.__workletHash = 0xbd87a183ea8),
                    (e.__initData = V),
                    e
                  );
                })(),
              ),
              i = ae === e,
              d = !ae && K === e && null === Ce;
            return (0, O.jsx)(c.default.View, {
              style: [{ flex: 1 }, s],
              children: (0, O.jsxs)(n.default, {
                onPressIn: () => {
                  a.value = (0, c.withSpring)(1, { damping: 14 });
                },
                onPressOut: () => {
                  a.value = (0, c.withSpring)(0);
                },
                onPress: () => Ze(e),
                disabled: null !== Ce,
                accessibilityRole: "button",
                accessibilityLabel: `${U("female" === e ? "forkWomen" : "forkMen")} \xb7 ${"female" === e ? "Women" : "Men"}`,
                accessibilityHint: U("forkLockShort"),
                accessibilityState: { selected: i },
                style: [
                  $.forkCard,
                  {
                    backgroundColor: i ? t + "1F" : G.surface,
                    borderColor: t,
                    borderWidth: i || d ? 3 : 1.5,
                    opacity: ae && !i ? 0.55 : 1,
                  },
                ],
                children: [
                  (0, O.jsx)(l.default, {
                    style: [$.forkIcon, { backgroundColor: t }],
                    children: (0, O.jsx)(u.Ionicons, { name: "person", size: 34, color: r }),
                  }),
                  (0, O.jsx)(o.default, {
                    style: [$.forkArabic, { color: G.text }],
                    children: "female" === e ? "\u0633\u064a\u062f\u0627\u062a" : "\u0631\u062c\u0627\u0644",
                  }),
                  (0, O.jsx)(o.default, {
                    style: [j.typography.smallStrong, { color: G.textMuted }],
                    children: "female" === e ? "Women" : "Men",
                  }),
                  i
                    ? (0, O.jsxs)(l.default, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 4,
                          marginTop: j.spacing.sm,
                        },
                        children: [
                          (0, O.jsx)(u.Ionicons, { name: "checkmark-circle", size: 16, color: G.text }),
                          (0, O.jsx)(o.default, {
                            style: [j.typography.caption, { color: G.text, fontWeight: "800" }],
                            children: U("forkSelected"),
                          }),
                        ],
                      })
                    : d
                      ? (0, O.jsx)(o.default, {
                          style: [
                            j.typography.caption,
                            { color: G.textMuted, marginTop: j.spacing.sm, fontWeight: "800" },
                          ],
                          children: U("forkPreferred"),
                        })
                      : null,
                ],
              }),
            });
          },
          nt = ({ ix: e, total: tot9 = eml9 ? 4 : 5 }) =>
            (0, O.jsx)(l.default, {
              style: $.dots,
              accessibilityRole: "progressbar",
              accessible: !0,
              accessibilityLabel: U("stepOfSteps", { n: String(e + 1), total: String(tot9) }),
              children: Array.from({ length: tot9 }, (t, r) =>
                (0, O.jsx)(
                  l.default,
                  { style: [$.dot, { backgroundColor: r <= e ? G.accent : G.border }] },
                  r,
                ),
              ),
            }),
          at = () => {
            (ne("phone"), xe(""), Le(null), Se(0));
          },
          ot = ({ onPress: e }) =>
            (0, O.jsx)(n.default, {
              onPress: e,
              accessibilityRole: "button",
              accessibilityLabel: U("back"),
              hitSlop: 10,
              style: [$.stepBack, { backgroundColor: G.surface, borderColor: G.border }],
              children: (0, O.jsx)(u.Ionicons, { name: (0, k.chevronBack)(), size: 22, color: G.text }),
            }),
          st = ({ row: e, index: t, selected: r, onPick: a }) => {
            const s = (0, c.useSharedValue)(0),
              i = (0, c.useAnimatedStyle)(
                (function () {
                  const e = () => ({ transform: Z ? [] : [{ scale: 1 + 0.02 * s.value }] });
                  return (
                    (e.__closure = { reducedMotion: Z, lift: s }),
                    (e.__workletHash = 0xc6ddfde4261),
                    (e.__initData = H),
                    e
                  );
                })(),
              );
            return (0, O.jsx)(c.default.View, {
              style: i,
              children: (0, O.jsxs)(n.default, {
                onPressIn: () => {
                  s.value = (0, c.withSpring)(1, { damping: 14 });
                },
                onPressOut: () => {
                  s.value = (0, c.withSpring)(0);
                },
                onPress: () => {
                  ((0, B.buzz)(), a());
                },
                accessibilityRole: "button",
                accessibilityLabel: e.team.name,
                accessibilityState: { selected: r },
                style: [
                  $.clanRow,
                  {
                    backgroundColor: r ? G.accentMuted : G.surface,
                    borderColor: r ? G.accent : G.border,
                    borderWidth: r ? 2 : 1,
                  },
                ],
                children: [
                  (0, O.jsx)(o.default, { style: { fontSize: 22 }, children: e.team.logo_emoji }),
                  (0, O.jsxs)(l.default, {
                    style: { flex: 1, marginStart: j.spacing.sm },
                    children: [
                      (0, O.jsx)(o.default, {
                        style: [j.typography.bodyStrong, { color: G.text }],
                        numberOfLines: 1,
                        children: e.team.name,
                      }),
                      (0, O.jsx)(o.default, {
                        style: [j.typography.caption, { color: G.textMuted }],
                        children: `#${t + 1} \xb7 ${1 === e.member_count ? U("memberCountOne") : 2 === e.member_count ? U("memberCountTwo") : U("memberCount", { n: String(e.member_count) })} \xb7 ${e.team.home_area}`,
                      }),
                    ],
                  }),
                  r
                    ? (0, O.jsx)(l.default, {
                        style: [$.clanCheck, { backgroundColor: G.accent }],
                        children: (0, O.jsx)(u.Ionicons, { name: "checkmark", size: 16, color: G.accentInk }),
                      })
                    : (0, O.jsx)(u.Ionicons, { name: "add-circle-outline", size: 22, color: G.textMuted }),
                ],
              }),
            });
          };
        return (0, O.jsxs)(p.Screen, {
          scroll: !0,
          children: [
            (0, O.jsx)(r.default, {
              behavior: void 0,
              style: { flex: 1 },
              children: (0, O.jsxs)(l.default, {
                children: [
                  "phone" === re &&
                    (0, O.jsxs)(O.Fragment, {
                      children: [
                        (0, O.jsx)(ot, { onPress: () => q.replace("/(auth)/sign-in") }),
                        (0, O.jsx)(nt, { ix: 0 }),
                        (0, O.jsx)(o.default, {
                          ref: ce,
                          accessibilityRole: "header",
                          style: [j.typography.h1, { color: G.text }],
                          children: U("phoneStepTitle"),
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.body,
                            { color: G.textMuted, marginTop: j.spacing.xs, marginBottom: j.spacing.lg },
                          ],
                          children: U("phoneStepBody"),
                        }),
                        (0, O.jsx)(f.Input, {
                          affix: "+965",
                          placeholder: "5000 0000",
                          accessibilityLabel: U("phoneStepTitle"),
                          value: me,
                          onChangeText: (e) => fe(e.replace(/[^0-9]/g, "").slice(0, 8)),
                          keyboardType: "phone-pad",
                          autoComplete: "tel",
                          textContentType: "telephoneNumber",
                          maxLength: 8,
                        }),
                        (0, O.jsx)(h.FormError, {
                          text: (0, w.authErrorText)(Fe, U),
                          style: { marginTop: j.spacing.sm },
                        }),
                        (0, O.jsx)(y.Button, {
                          title: U("sendCode"),
                          size: "lg",
                          fullWidth: !0,
                          loading: Ne,
                          disabled: !(0, T.isDialablePhone)(me),
                          onPress: Qe,
                          style: { marginTop: j.spacing.lg },
                        }),
                        (0, O.jsx)(d.Link, {
                          href: "/sign-in",
                          asChild: !0,
                          children: (0, O.jsx)(n.default, {
                            accessibilityRole: "button",
                            hitSlop: 12,
                            style: { alignItems: "center", marginTop: j.spacing.lg },
                            children: (0, O.jsx)(o.default, {
                              style: [j.typography.small, { color: G.textMuted }],
                              children: U("haveAccount"),
                            }),
                          }),
                        }),
                        (0, O.jsx)(n.default, {
                          onPress: () => {
                            (smd9("email"), ne("email"), Le(null), pe("wizard:email_chosen"));
                          },
                          accessibilityRole: "button",
                          hitSlop: 12,
                          style: { alignItems: "center", marginTop: j.spacing.sm },
                          children: (0, O.jsx)(o.default, {
                            style: [j.typography.smallStrong, { color: G.accentText }],
                            children: U("useEmailInstead"),
                          }),
                        }),
                        He
                          ? (0, O.jsxs)(l.default, {
                              style: { marginTop: j.spacing.lg },
                              children: [
                                (0, O.jsx)(o.default, {
                                  style: [
                                    j.typography.smallStrong,
                                    { color: G.textMuted, textAlign: "center", marginBottom: j.spacing.sm },
                                  ],
                                  children: U("guestChooserTitle"),
                                }),
                                (0, O.jsx)(l.default, {
                                  style: { flexDirection: "row", gap: j.spacing.sm },
                                  children: [
                                    ["female", "\u0633\u064a\u062f\u0627\u062a", E, D],
                                    ["male", "\u0631\u062c\u0627\u0644", F, L],
                                  ].map(([e, t, r, s]) =>
                                    (0, O.jsxs)(
                                      n.default,
                                      {
                                        onPress: () => {
                                          (a(e), q.replace("/(tabs)"));
                                        },
                                        accessibilityRole: "button",
                                        accessibilityLabel: t,
                                        style: {
                                          flex: 1,
                                          alignItems: "center",
                                          borderRadius: 16,
                                          borderWidth: 1.5,
                                          borderColor: r,
                                          backgroundColor: G.surface,
                                          paddingVertical: j.spacing.md,
                                        },
                                        children: [
                                          (0, O.jsx)(l.default, {
                                            style: {
                                              width: 34,
                                              height: 34,
                                              borderRadius: 12,
                                              backgroundColor: r,
                                              alignItems: "center",
                                              justifyContent: "center",
                                            },
                                            children: (0, O.jsx)(o.default, {
                                              style: { color: s, fontWeight: "800" },
                                              children: t.slice(0, 1),
                                            }),
                                          }),
                                          (0, O.jsx)(o.default, {
                                            style: [j.typography.bodyStrong, { color: G.text, marginTop: 6 }],
                                            children: t,
                                          }),
                                        ],
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                                (0, O.jsx)(o.default, {
                                  style: [
                                    j.typography.caption,
                                    { color: G.textMuted, textAlign: "center", marginTop: j.spacing.sm },
                                  ],
                                  children: U("guestChooserNote"),
                                }),
                              ],
                            })
                          : (0, O.jsx)(n.default, {
                              onPress: () => $e(!0),
                              accessibilityRole: "button",
                              style: { alignItems: "center", marginTop: j.spacing.md },
                              children: (0, O.jsx)(o.default, {
                                style: [j.typography.smallStrong, { color: G.accentText }],
                                children: U("lookAroundFirst"),
                              }),
                            }),
                      ],
                    }),
                  "email" === re &&
                    (0, O.jsxs)(O.Fragment, {
                      children: [
                        (0, O.jsx)(ot, {
                          onPress: () => {
                            (smd9("phone"), ne("phone"), Le(null));
                          },
                        }),
                        (0, O.jsx)(nt, { ix: 0 }),
                        (0, O.jsx)(o.default, {
                          ref: ce,
                          accessibilityRole: "header",
                          style: [j.typography.h1, { color: G.text }],
                          children: U("emailStepTitle"),
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.body,
                            { color: G.textMuted, marginTop: j.spacing.xs, marginBottom: j.spacing.lg },
                          ],
                          children: U("emailStepBody"),
                        }),
                        (0, O.jsx)(f.Input, {
                          label: U("email"),
                          placeholder: "you@example.com",
                          accessibilityLabel: U("emailStepTitle"),
                          value: em9,
                          onChangeText: sem9,
                          autoCapitalize: "none",
                          autoCorrect: !1,
                          autoComplete: "email",
                          keyboardType: "email-address",
                          textContentType: "emailAddress",
                          maxLength: 254,
                        }),
                        (0, O.jsx)(f.Input, {
                          label: U("password"),
                          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                          accessibilityLabel: U("password"),
                          value: pw9,
                          onChangeText: spw9,
                          secureTextEntry: !0,
                          autoCapitalize: "none",
                          autoComplete: "new-password",
                          textContentType: "newPassword",
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.caption,
                            {
                              // Red only once they have typed something that does not qualify; an
                              // untouched field is not a failure.
                              color: pw9.length > 0 && pwIssues9.length > 0 ? G.danger ?? G.accentText : G.textMuted,
                              marginTop: -j.spacing.xs,
                              marginBottom: j.spacing.md,
                            },
                          ],
                          children: U("emailPwHint"),
                        }),
                        (0, O.jsx)(h.FormError, {
                          text: (0, w.authErrorText)(Fe, U),
                          style: { marginTop: j.spacing.sm },
                        }),
                        (0, O.jsx)(y.Button, {
                          title: U("continueBtn"),
                          size: "lg",
                          fullWidth: !0,
                          loading: Ne,
                          disabled: !emailOk9,
                          onPress: () => {
                            (Le(null), pe("wizard:email_ok"), ne("name"));
                          },
                          style: { marginTop: j.spacing.lg },
                        }),
                        (0, O.jsx)(n.default, {
                          onPress: () => {
                            (smd9("phone"), ne("phone"), Le(null));
                          },
                          accessibilityRole: "button",
                          hitSlop: 12,
                          style: { alignItems: "center", marginTop: j.spacing.lg },
                          children: (0, O.jsx)(o.default, {
                            style: [j.typography.small, { color: G.textMuted }],
                            children: U("usePhoneInstead"),
                          }),
                        }),
                      ],
                    }),
                  "otp" === re &&
                    (0, O.jsxs)(O.Fragment, {
                      children: [
                        (0, O.jsx)(ot, { onPress: at }),
                        (0, O.jsx)(nt, { ix: 1 }),
                        (0, O.jsx)(o.default, {
                          ref: ce,
                          accessibilityRole: "header",
                          style: [j.typography.h1, { color: G.text }],
                          children: U("otpStepTitle"),
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.body,
                            { color: G.textMuted, marginTop: j.spacing.xs, marginBottom: j.spacing.lg },
                          ],
                          children: U("otpStepBody", { phone: me }),
                        }),
                        (0, O.jsx)(s.default, {
                          value: ye,
                          onChangeText: (e) => xe(e.replace(/[^0-9]/g, "").slice(0, 6)),
                          keyboardType: "number-pad",
                          maxLength: 6,
                          accessibilityLabel: U("otpA11yLabel"),
                          accessibilityHint: U("otpA11yHint"),
                          textContentType: "oneTimeCode",
                          autoComplete: "one-time-code",
                          style: [
                            $.otpInput,
                            {
                              color: G.text,
                              borderColor: 6 === ye.length ? G.accent : G.border,
                              backgroundColor: G.surface,
                            },
                          ],
                          placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
                          placeholderTextColor: G.textMuted,
                        }),
                        be &&
                          (0, O.jsx)(o.default, {
                            style: [
                              j.typography.caption,
                              { color: G.textMuted, textAlign: "center", marginTop: j.spacing.sm },
                            ],
                            children: U("otpDemoHint", { code: be }),
                          }),
                        (0, O.jsx)(h.FormError, {
                          text: Fe,
                          style: { marginTop: j.spacing.sm, textAlign: "center" },
                        }),
                        (0, O.jsx)(y.Button, {
                          title: U("continueBtn"),
                          size: "lg",
                          fullWidth: !0,
                          disabled: ye.length < 6,
                          loading: Ne,
                          onPress: async () => {
                            (Le(null), Ve(!0));
                            try {
                              const t = await (0, R.remoteAuthAvailable)(),
                                r = t
                                  ? await (0, R.remoteOtpCheck)(me, ye.trim())
                                  : await z.store.mockCheckOtp(me, ye.trim());
                              if ((pe("wizard:code_ok"), r.existing)) {
                                const r = t
                                  ? await (0, R.remoteOtpVerify)(me, ye.trim(), "", "male")
                                  : await z.store.mockVerifyOtp(me, ye.trim(), "", "male");
                                return ((0, R.persistSession)(r), e(r), void q.replace("/(tabs)"));
                              }
                              ne("name");
                            } catch (e) {
                              ("OTP_WRONG" === e?.message && xe(""),
                                Le((0, I.storeErrorText)(e?.message ?? "") || U("error")));
                            } finally {
                              Ve(!1);
                            }
                          },
                          style: { marginTop: j.spacing.lg },
                        }),
                        (0, O.jsx)(n.default, {
                          disabled: Te > 0,
                          onPress: Qe,
                          accessibilityRole: "button",
                          hitSlop: 12,
                          style: {
                            alignItems: "center",
                            marginTop: j.spacing.md,
                            minHeight: j.touch.minTarget,
                            justifyContent: "center",
                          },
                          children: (0, O.jsx)(o.default, {
                            style: [j.typography.small, { color: Te > 0 ? G.textMuted : G.accentText }],
                            children: Te > 0 ? U("resendIn", { s: String(Te) }) : U("resendCode"),
                          }),
                        }),
                        (0, O.jsx)(o.default, {
                          style: [j.typography.caption, { color: G.textMuted, textAlign: "center" }],
                          children: U("otpValidFor"),
                        }),
                        (0, O.jsxs)(n.default, {
                          onPress: at,
                          accessibilityRole: "button",
                          hitSlop: 12,
                          style: {
                            alignItems: "center",
                            marginTop: j.spacing.sm,
                            minHeight: j.touch.minTarget,
                            justifyContent: "center",
                          },
                          children: [
                            (0, O.jsx)(o.default, {
                              style: [j.typography.small, { color: G.accentText }],
                              children: U("otpNotArrived"),
                            }),
                            (0, O.jsx)(o.default, {
                              style: [j.typography.caption, { color: G.textMuted }],
                              children: U("otpCheckNumber"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  "name" === re &&
                    (0, O.jsxs)(O.Fragment, {
                      children: [
                        (0, O.jsx)(ot, {
                          onPress: () => {
                            (ne(eml9 ? "email" : "otp"), Le(null));
                          },
                        }),
                        (0, O.jsx)(nt, { ix: eml9 ? 1 : 2 }),
                        (0, O.jsx)(o.default, {
                          ref: ce,
                          accessibilityRole: "header",
                          style: [j.typography.h1, { color: G.text }],
                          children: U("nameStepTitle"),
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.body,
                            { color: G.textMuted, marginTop: j.spacing.xs, marginBottom: j.spacing.lg },
                          ],
                          children: U("nameStepBody"),
                        }),
                        (0, O.jsx)(f.Input, {
                          placeholder: U("fullNamePlaceholder"),
                          accessibilityLabel: U("nameStepTitle"),
                          value: ke,
                          onChangeText: we,
                          autoComplete: "name",
                          textContentType: "name",
                          autoCapitalize: "words",
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.smallStrong,
                            { color: G.textMuted, marginBottom: j.spacing.xs },
                          ],
                          children: U("dobLabel"),
                        }),
                        (0, O.jsx)(_.DateOfBirth, { value: se, onChange: le }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.caption,
                            { color: G.textMuted, marginTop: -j.spacing.xs, marginBottom: j.spacing.md },
                          ],
                          children: U("minAgeNote", { n: String(A.MIN_AGE) }),
                        }),
                        (0, O.jsx)(h.FormError, { text: (0, w.authErrorText)(Fe, U) }),
                        (0, O.jsx)(y.Button, {
                          title: U("continueBtn"),
                          size: "lg",
                          fullWidth: !0,
                          disabled: !ke.trim() || !he,
                          onPress: () => {
                            (Le(null), pe("wizard:name_ok"), ne("fork"));
                          },
                          style: { marginTop: j.spacing.lg },
                        }),
                      ],
                    }),
                  "fork" === re &&
                    (0, O.jsxs)(O.Fragment, {
                      children: [
                        (0, O.jsx)(ot, {
                          onPress: () => {
                            (oe(null), ne("name"));
                          },
                        }),
                        (0, O.jsx)(nt, { ix: eml9 ? 2 : 3 }),
                        (0, O.jsx)(o.default, {
                          ref: ce,
                          accessibilityRole: "header",
                          style: [$.forkTitleAr, { color: G.text }],
                          children:
                            "\u0644\u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u062d\u0633\u0627\u0628\u061f",
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.body,
                            { color: G.textMuted, textAlign: "center", marginBottom: j.spacing.lg },
                          ],
                          children: "Who is this account for?",
                        }),
                        (0, O.jsxs)(l.default, {
                          style: { flexDirection: "row", gap: j.spacing.md, height: 300 },
                          children: [
                            (0, O.jsx)(rt, { value: "female", accent: E, ink: D }),
                            (0, O.jsx)(rt, { value: "male", accent: F, ink: L }),
                          ],
                        }),
                        ae &&
                          (0, O.jsx)(o.default, {
                            style: [
                              j.typography.body,
                              { color: G.text, textAlign: "center", marginTop: j.spacing.lg },
                            ],
                            children: U("female" === ae ? "forkPickedWomen" : "forkPickedMen"),
                          }),
                        (0, O.jsxs)(o.default, {
                          style: [
                            j.typography.caption,
                            {
                              color: G.textMuted,
                              textAlign: "center",
                              marginTop: j.spacing.md,
                              lineHeight: 18,
                            },
                          ],
                          children: [
                            "\u0647\u0630\u0627 \u064a\u062d\u062f\u062f \u0645\u0633\u0627\u062d\u062a\u0643 \u0641\u064a Rush X \u0648\u0644\u0627 \u064a\u0645\u0643\u0646 \u062a\u063a\u064a\u064a\u0631\u0647 \u062f\u0627\u062e\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u2014 \u0644\u0623\u0646 \u0643\u0644 \u0639\u0627\u0644\u0645 \u0645\u0633\u0627\u062d\u0629 \u062e\u0627\u0635\u0629 \u0648\u0645\u0646\u0641\u0635\u0644\u0629.",
                            "\n",
                            "\u2066This sets your Rush X space and can\u2019t be changed in the app \u2014 each world is its own private, separate space.\u2069",
                          ],
                        }),
                        (0, O.jsx)(h.FormError, {
                          text: (0, w.authErrorText)(Fe, U),
                          style: { textAlign: "center", marginTop: j.spacing.sm },
                        }),
                        (0, O.jsxs)(o.default, {
                          style: [
                            j.typography.caption,
                            {
                              color: G.textMuted,
                              textAlign: "center",
                              marginTop: j.spacing.lg,
                              lineHeight: 18,
                            },
                          ],
                          children: [
                            U("termsAcceptPre"),
                            (0, O.jsx)(o.default, {
                              style: { color: G.accentText, fontWeight: "700" },
                              onPress: () => q.push("/conduct"),
                              children: U("termsCoc"),
                            }),
                            U("termsAcceptMid"),
                            (0, O.jsx)(o.default, {
                              style: { color: G.accentText, fontWeight: "700" },
                              onPress: () => q.push("/privacy"),
                              children: U("termsPrivacy"),
                            }),
                            U("termsAcceptEnd"),
                          ],
                        }),
                        (0, O.jsx)(y.Button, {
                          title: U("forkConfirm"),
                          size: "lg",
                          fullWidth: !0,
                          loading: Ne,
                          disabled: !ae || null !== Ce,
                          onPress: () => Je(Y / 2, X / 2),
                          style: { marginTop: j.spacing.md },
                        }),
                      ],
                    }),
                  "clan" === re &&
                    (0, O.jsxs)(O.Fragment, {
                      children: [
                        (0, O.jsx)(nt, { ix: eml9 ? 3 : 4 }),
                        (0, O.jsx)(o.default, {
                          ref: ce,
                          accessibilityRole: "header",
                          style: [j.typography.h1, { color: G.text }],
                          children: U("clanStepTitle"),
                        }),
                        (0, O.jsx)(o.default, {
                          style: [
                            j.typography.body,
                            { color: G.textMuted, marginTop: j.spacing.xs, marginBottom: j.spacing.lg },
                          ],
                          children: U("clanStepBody"),
                        }),
                        Pe.map((e, t) =>
                          (0, O.jsx)(
                            st,
                            {
                              row: e,
                              index: t,
                              selected: ze === e.team.id,
                              onPick: () => {
                                (We((t) => (t === e.team.id ? null : e.team.id)), Re(""), Le(null));
                              },
                            },
                            e.team.id,
                          ),
                        ),
                        (0, O.jsx)(f.Input, {
                          placeholder: U("inviteCodePlaceholder"),
                          value: Me,
                          onChangeText: (e) => {
                            (Re(e), e.trim() && We(null));
                          },
                          autoCapitalize: "characters",
                        }),
                        (0, O.jsx)(h.FormError, { text: Fe, style: { marginTop: j.spacing.sm } }),
                        (0, O.jsx)(y.Button, {
                          title: ze
                            ? U("joinNamed").replace(
                                "{name}",
                                Pe.find((e) => e.team.id === ze)?.team.name ?? "",
                              )
                            : U("joinTeam"),
                          size: "lg",
                          fullWidth: !0,
                          loading: Be,
                          disabled: !Me.trim() && !ze,
                          onPress: async () => {
                            const e = Pe.find((e) => e.team.id === ze),
                              t = e?.team.invite_code ?? Me.trim();
                            if (Oe && t) {
                              (Le(null), Ie(!0));
                              try {
                                (await (0, W.joinTeamByCode)(Oe, t), tt());
                              } catch (e) {
                                (Le((0, I.storeErrorText)(e?.message ?? "") || U("error")), Ie(!1));
                              }
                            }
                          },
                          style: { marginTop: j.spacing.md },
                        }),
                        (0, O.jsx)(y.Button, {
                          title: U("continueBtn"),
                          variant: "ghost",
                          size: "lg",
                          fullWidth: !0,
                          onPress: tt,
                          style: { marginTop: j.spacing.sm },
                        }),
                        (0, O.jsxs)(l.default, {
                          style: [$.pushCard, { backgroundColor: G.surface, borderColor: G.border }],
                          children: [
                            (0, O.jsx)(o.default, {
                              style: [j.typography.bodyStrong, { color: G.text }],
                              children: U("pushPromptTitle"),
                            }),
                            (0, O.jsx)(o.default, {
                              style: [
                                j.typography.small,
                                { color: G.textMuted, marginTop: 2, marginBottom: j.spacing.sm },
                              ],
                              children: U("pushPromptBody"),
                            }),
                            (0, O.jsx)(y.Button, {
                              title: U("pushPromptCta"),
                              variant: "secondary",
                              fullWidth: !0,
                              onPress: async () => {
                                const e = De.current?.user.id ?? Oe;
                                if (e)
                                  try {
                                    await (0, C.registerForPush)(e);
                                  } catch {}
                                tt();
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
            (0, O.jsx)(c.default.View, {
              pointerEvents: "none",
              style: [
                {
                  position: "absolute",
                  left: Ye.current.x - Math.max(Y, X),
                  top: Ye.current.y - Math.max(Y, X),
                  width: 2 * Math.max(Y, X),
                  height: 2 * Math.max(Y, X),
                  borderRadius: Math.max(Y, X),
                  backgroundColor: qe,
                },
                Xe,
              ],
            }),
          ],
        });
      }));
    var t = _r(_d[1]),
      r = e(_r(_d[2])),
      n = (e(_r(_d[3])), e(_r(_d[4]))),
      a = e(_r(_d[5])),
      o = e(_r(_d[6])),
      s = e(_r(_d[7])),
      l = e(_r(_d[8])),
      i = e(_r(_d[9])),
      c = (function (e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            o,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e)) return s;
          if ((a = t ? n : r)) {
            if (a.has(e)) return a.get(e);
            a.set(e, s);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((o = (a = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (o.get || o.set)
                ? a(s, t, o)
                : (s[t] = e[t]));
          return s;
        })(e, t);
      })(_r(_d[10])),
      d = _r(_d[11]),
      u = _r(_d[12]),
      p = _r(_d[13]),
      h = _r(_d[14]),
      f = _r(_d[15]),
      y = _r(_d[16]),
      x = _r(_d[17]),
      b = _r(_d[18]),
      j = _r(_d[19]),
      T = _r(_d[20]),
      S = _r(_d[21]),
      k = _r(_d[22]),
      w = _r(_d[23]),
      C = _r(_d[24]),
      _ = _r(_d[25]),
      v = _r(_d[26]),
      P = _r(_d[27]),
      A = _r(_d[28]),
      M = _r(_d[29]),
      R = _r(_d[30]),
      z = _r(_d[31]),
      W = _r(_d[32]),
      B = _r(_d[33]),
      I = _r(_d[34]),
      O = _r(_d[35]);
    const E = "#FF9EC4",
      D = "#2B0A1A",
      F = "#CCFF00",
      L = "#1A2000",
      N = {
        code: "function signUpTsx1(){const{sweep}=this.__closure;return{opacity:sweep.value===0?0:1,transform:[{scale:sweep.value}]};}",
      },
      V = {
        code: "function signUpTsx2(){const{reducedMotion,lift}=this.__closure;return{transform:reducedMotion?[]:[{scale:1+0.04*lift.value},{translateY:-4*lift.value}]};}",
      },
      H = {
        code: "function signUpTsx3(){const{reducedMotion,lift}=this.__closure;return{transform:reducedMotion?[]:[{scale:1+0.02*lift.value}]};}",
      };
    const $ = a.default.create({
      dots: { flexDirection: "row", gap: 6, justifyContent: "center", marginBottom: j.spacing.lg },
      stepBack: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: a.default.hairlineWidth,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: j.spacing.sm,
        alignSelf: "flex-start",
      },
      dot: { width: 22, height: 4, borderRadius: 2 },
      otpInput: {
        borderWidth: 1.5,
        borderRadius: j.radius.lg,
        fontSize: 30,
        fontWeight: "800",
        letterSpacing: 12,
        textAlign: "center",
        paddingVertical: j.spacing.md,
      },
      forkTitleAr: {
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        marginTop: j.spacing.xl,
        marginBottom: 4,
      },
      forkCard: {
        flex: 1,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        padding: j.spacing.lg,
      },
      forkIcon: { width: 72, height: 72, borderRadius: 24, alignItems: "center", justifyContent: "center" },
      forkArabic: { fontSize: 30, fontWeight: "800", marginTop: j.spacing.md },
      chip: {
        flex: 1,
        alignItems: "center",
        borderRadius: j.radius.pill,
        borderWidth: 1,
        paddingVertical: 12,
      },
      pushCard: { borderWidth: 1, borderRadius: j.radius.lg, padding: j.spacing.md, marginTop: j.spacing.lg },
      areaChip: {
        borderRadius: j.radius.pill,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: j.spacing.md,
      },
      clanRow: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: j.radius.lg,
        borderWidth: 1,
        padding: j.spacing.md,
        marginBottom: j.spacing.sm,
      },
      clanCheck: { width: 26, height: 26, borderRadius: 13, alignItems: "center", justifyContent: "center" },
    });
  },
  917,
  [
    33, 15, 466, 137, 369, 158, 146, 394, 273, 493, 918, 20, 1086, 614, 624, 625, 626, 630, 615, 616, 650,
    675, 1171, 916, 1172, 1309, 1616, 1617, 631, 623, 913, 672, 671, 1618, 674, 13,
  ],
);
