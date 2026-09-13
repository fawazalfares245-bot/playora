__d(
  function (g, _r, _i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, p.useAuth)(),
          { colors: i } = (0, j.useTheme)(),
          B = (0, f.useRouter)(),
          I = (0, S.useT)(),
          [L, A] = (0, n.useState)(null),
          [er, setEr] = (0, n.useState)(null),
          [showRev, setShowRev] = (0, n.useState)(!1),
          [rev, setRev] = (0, n.useState)(null),
          [rrs, setRrs] = (0, n.useState)(""),
          [busy, setBusy] = (0, n.useState)(null),
          gate = (0, G9.useRoleGate)(["admin"]),
          F = (0, n.useCallback)(async () => {
            if (t) {
              setEr(null);
              try {
                A(await (0, k.fetchAwardFraudSignals)(t.id));
              } catch (e) {
                (A([]), setEr(e));
              }
            }
          }, [t]);
        return (
          (0, f.useFocusEffect)(
            (0, n.useCallback)(() => {
              gate.ready && gate.allowed && F();
            }, [F, gate.ready, gate.allowed]),
          ),
          gate.ready && !gate.allowed
            ? (0, C.jsx)(G9.GateScreen, { kind: "denied", onBack: () => B.back() })
            : er && (0, G9.classifyError)(er).isAuth
              ? (0, C.jsx)(G9.GateScreen, { kind: "denied", onBack: () => B.back() })
              : er
                ? (0, C.jsx)(G9.GateScreen, {
                    kind: "error",
                    body: (0, G9.classifyError)(er).message,
                    onRetry: () => {
                      (A(null), F());
                    },
                    onBack: () => B.back(),
                  })
                : (0, C.jsxs)(u.SafeAreaView, {
            edges: ["top"],
            style: { flex: 1, backgroundColor: i.bg },
            children: [
              (0, C.jsxs)(c.default, {
                style: z.header,
                children: [
                  (0, C.jsx)(r.default, {
                    onPress: () => B.back(),
                    accessibilityRole: "button",
                    accessibilityLabel: I("back"),
                    style: [z.iconBtn, { backgroundColor: i.surface, borderColor: i.border }],
                    children: (0, C.jsx)(h.Ionicons, { name: (0, _.chevronBack)(), size: 22, color: i.text }),
                  }),
                  (0, C.jsxs)(c.default, {
                    style: { flex: 1, marginHorizontal: w.spacing.md },
                    children: [
                      (0, C.jsx)(o.default, {
                        style: [w.typography.h2, { color: i.text }],
                        children: I("matchAwards"),
                      }),
                      (0, C.jsx)(o.default, {
                        style: [w.typography.small, { color: i.textMuted }],
                        children: I("fraudTitle"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, C.jsx)(r.default, {
                onPress: () => setShowRev((e) => !e),
                accessibilityRole: "button",
                style: { paddingHorizontal: w.spacing.lg, paddingBottom: w.spacing.xs },
                children: (0, C.jsx)(o.default, {
                  style: [w.typography.smallStrong, { color: i.accentText }],
                  children: I(showRev ? "fraudHideReviewed" : "fraudShowReviewed"),
                }),
              }),
              rev &&
                (0, C.jsxs)(c.default, {
                  style: { paddingHorizontal: w.spacing.lg, paddingBottom: w.spacing.sm },
                  children: [
                    (0, C.jsx)(i9.Input, {
                      label: I("fraudReviewReason"),
                      value: rrs,
                      onChangeText: setRrs,
                      maxLength: 200,
                    }),
                    (0, C.jsxs)(c.default, {
                      style: { flexDirection: "row", gap: w.spacing.sm, marginTop: w.spacing.xs },
                      children: [
                        (0, C.jsx)(b9.Button, {
                          title: I("cancel"),
                          size: "sm",
                          variant: "ghost",
                          style: { flex: 1 },
                          onPress: () => (setRev(null), setRrs("")),
                        }),
                        (0, C.jsx)(b9.Button, {
                          title: I("fraudReview"),
                          size: "sm",
                          style: { flex: 1 },
                          loading: !!busy,
                          disabled: rrs.trim().length < 3,
                          onPress: async () => {
                            setBusy(rev);
                            try {
                              (await (0, k.reviewFraudSignal)(t.id, rev, rrs.trim()), setRev(null), setRrs(""), await F());
                            } catch (e) {
                              a9.default.alert(I("error"), (0, G9.classifyError)(e).message || I("error"));
                            } finally {
                              setBusy(null);
                            }
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              (0, C.jsx)(s.default, {
                contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
                children:
                  null === L
                    ? (0, C.jsx)(l.default, { color: i.accentText })
                    : 0 === (showRev ? L : L.filter((e) => !e.review)).length
                      ? (0, C.jsx)(b.EmptyState, {
                          icon: "shield-checkmark-outline",
                          title: I("noFraud"),
                          body: I("noFraudBody"),
                        })
                      : (showRev ? L : L.filter((e) => !e.review)).map((t, n) =>
                          (0, C.jsx)(
                            x.Card,
                            {
                              padding: "md",
                              style: { marginBottom: w.spacing.sm },
                              children: (0, C.jsxs)(c.default, {
                                style: { flexDirection: "row", alignItems: "center" },
                                children: [
                                  (0, C.jsx)(h.Ionicons, {
                                    name: "warning-outline",
                                    size: 20,
                                    color: i.warning,
                                  }),
                                  (0, C.jsxs)(c.default, {
                                    style: { flex: 1, marginHorizontal: w.spacing.md },
                                    children: [
                                      (0, C.jsxs)(o.default, {
                                        style: [w.typography.bodyStrong, { color: i.text }],
                                        numberOfLines: 1,
                                        children: [t.voter_name, " \u2192 ", t.nominee_name],
                                      }),
                                      (0, C.jsx)(o.default, {
                                        style: [w.typography.caption, { color: i.textMuted }],
                                        numberOfLines: 1,
                                        children: t.venue,
                                      }),
                                    ],
                                  }),
                                  (0, C.jsx)(y.Badge, {
                                    label: I("votesLabel", { n: (0, v.formatNumber)(t.categories) }),
                                    tone: "warning",
                                  }),
                                  (0, C.jsx)(r.default, {
                                    onPress: () => (setRev(t.id), setRrs("")),
                                    accessibilityRole: "button",
                                    accessibilityLabel: I("fraudReview"),
                                    hitSlop: 8,
                                    style: { marginStart: w.spacing.sm },
                                    children: (0, C.jsx)(h.Ionicons, {
                                      name: t.review ? "checkmark-done" : "checkmark-circle-outline",
                                      size: 18,
                                      color: t.review ? i.success : i.textMuted,
                                    }),
                                  }),
                                  (0, C.jsx)(r.default, {
                                    onPress: () => B.push(`/awards/${t.match_id}`),
                                    accessibilityRole: "button",
                                    accessibilityLabel: I("openLabel"),
                                    hitSlop: 8,
                                    style: { marginStart: w.spacing.sm },
                                    children: (0, C.jsx)(h.Ionicons, {
                                      name: (0, _.chevronForward)(),
                                      size: 18,
                                      color: i.textMuted,
                                    }),
                                  }),
                                ],
                              }),
                            },
                            `${t.match_id}-${t.voter_id}-${n}`,
                          ),
                        ),
              }),
            ],
          })
        );
      }));
    var n = _r(d[1]),
      l = t(_r(d[2])),
      r = t(_r(d[3])),
      s = t(_r(d[4])),
      i = t(_r(d[5])),
      o = t(_r(d[6])),
      c = t(_r(d[7])),
      u = _r(d[8]),
      h = _r(d[9]),
      f = _r(d[10]),
      x = _r(d[11]),
      y = _r(d[12]),
      b = _r(d[13]),
      p = _r(d[14]),
      j = _r(d[15]),
      w = _r(d[16]),
      k = _r(d[17]),
      v = _r(d[18]),
      S = _r(d[19]),
      _ = _r(d[20]),
      C = _r(d[21]),
      G9 = _r(d[22]),
      i9 = _r(d[23]),
      b9 = _r(d[24]),
      a9 = _r(d[25]);
    const z = i.default.create({
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
        borderWidth: i.default.hairlineWidth,
      },
    });
  },
  1824,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 1627, 630, 615, 616, 671, 1311, 675, 1171, 13, 9001, 625, 626, 445,
  ],
);
