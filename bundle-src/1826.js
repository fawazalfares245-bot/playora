__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.default = function () {
        const { user: e } = (0, S.useAuth)(),
          { colors: o } = (0, C.useTheme)(),
          c = (0, f.useRouter)(),
          y = (0, A.useT)(),
          [z, N] = (0, t.useState)([]),
          [D, V] = (0, t.useState)(null),
          [H, $] = (0, t.useState)(!0),
          [F, L] = (0, t.useState)(null),
          [O, Q] = (0, t.useState)(null),
          [hid, setHid] = (0, t.useState)(0),
          [pa, setPa] = (0, t.useState)(null),
          [rs, setRs] = (0, t.useState)(""),
          gate = (0, G9.useRoleGate)(["admin"]),
          U = (0, t.useCallback)(async () => {
            if (e) {
              L(null);
              try {
                const [t, a, i] = await Promise.all([
                  (0, B.fetchIncidentQueue)(e.id),
                  (0, B.fetchConductAdminStats)(e.id),
                  (0, B.fetchMyPartitionStance)(e.id).catch(() => null),
                ]);
                (N(t), V(a), setHid(i?.hidden?.sanctions ?? 0));
              } catch (e) {
                L(e);
              }
              $(!1);
            }
          }, [e]);
        (0, f.useFocusEffect)(
          (0, t.useCallback)(() => {
            gate.ready && gate.allowed && U();
          }, [U, gate.ready, gate.allowed]),
        );
        // Runs one decision for one record: busy state is per record, the reason is required, and the
        // outcome is reported back to the admin.
        const G = async (t, a, i) => {
          Q(t);
          try {
            const e = await a();
            (setPa(null), setRs(""), await U(), s.default.alert(i ? i(e) : y("actionDone"), ""));
          } catch (e) {
            s.default.alert(y("error"), (0, G9.classifyError)(e).message || y("error"));
          } finally {
            Q(null);
          }
        };
        if (gate.ready && !gate.allowed)
          return (0, R.jsx)(G9.GateScreen, { kind: "denied", onBack: () => c.back() });
        if (H || !gate.ready)
          return (0, R.jsx)(x.SafeAreaView, {
            style: [E.center, { backgroundColor: o.bg }],
            children: (0, R.jsx)(n.default, { color: o.accentText }),
          });
        if (F) {
          const t = (0, G9.classifyError)(F);
          return (0, R.jsx)(G9.GateScreen, {
            kind: t.isAuth ? "denied" : "error",
            body: t.isAuth ? void 0 : t.message,
            onRetry: () => {
              ($(!0), U());
            },
            onBack: () => c.back(),
          });
        }
        return (0, R.jsxs)(x.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: o.bg },
          children: [
            (0, R.jsx)(M, { colors: o, title: y("adminConductTitle"), onBack: () => c.back() }),
            (0, R.jsxs)(l.default, {
              contentContainerStyle: { padding: w.spacing.lg, paddingBottom: w.spacing.xxxl },
              children: [
                D &&
                  (0, R.jsxs)(h.Card, {
                    style: { marginBottom: w.spacing.lg },
                    children: [
                      (0, R.jsx)(u.default, {
                        style: [w.typography.h3, { color: o.text, marginBottom: w.spacing.sm }],
                        children: y("conductStatsTitle"),
                      }),
                      (0, R.jsxs)(p.default, {
                        style: E.grid,
                        children: [
                          (0, R.jsx)(W, {
                            label: y("statActiveSanctions"),
                            value: (0, _.formatNumber)(D.active),
                            colors: o,
                          }),
                          (0, R.jsx)(W, {
                            label: y("statPendingReview"),
                            value: (0, _.formatNumber)(D.pending),
                            colors: o,
                            accent: !0,
                          }),
                          (0, R.jsx)(W, {
                            label: y("sanction_red_card"),
                            value: (0, _.formatNumber)(D.redCards),
                            colors: o,
                          }),
                          (0, R.jsx)(W, {
                            label: y("statBans"),
                            value: (0, _.formatNumber)(D.bans),
                            colors: o,
                          }),
                          (0, R.jsx)(W, {
                            label: y("statCocAcceptance"),
                            value: `${(0, _.formatNumber)(Math.round(100 * D.cocAcceptanceRate))}%`,
                            colors: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, R.jsx)(u.default, {
                  style: [w.typography.h3, { color: o.text, marginBottom: w.spacing.sm }],
                  children: y("incidentQueue"),
                }),
                hid > 0 &&
                  (0, R.jsxs)(p.default, {
                    style: [E.hiddenNote, { backgroundColor: o.surfaceAlt, borderColor: o.border }],
                    children: [
                      (0, R.jsx)(y9.Ionicons, { name: "eye-off-outline", size: 16, color: o.textMuted }),
                      (0, R.jsxs)(p.default, {
                        style: { flex: 1 },
                        children: [
                          (0, R.jsx)(u.default, {
                            style: [w.typography.smallStrong, { color: o.text }],
                            children: y("hiddenOtherWorld", { n: String(hid) }),
                          }),
                          (0, R.jsx)(u.default, {
                            style: [w.typography.caption, { color: o.textMuted }],
                            children: y("hiddenOtherWorldBody"),
                          }),
                        ],
                      }),
                    ],
                  }),
                0 === z.length
                  ? (0, R.jsx)(v.EmptyState, { icon: "shield-checkmark-outline", title: y("noSanctions") })
                  : z.map((t) => {
                      const n = (0, k.sanctionMeta)(t.type),
                        s =
                          "active" === t.status
                            ? n.tone
                            : "pending_approval" === t.status
                              ? "warning"
                              : "neutral";
                      return (0, R.jsxs)(
                        h.Card,
                        {
                          style: { marginBottom: w.spacing.sm },
                          children: [
                            (0, R.jsxs)(p.default, {
                              style: { flexDirection: "row", alignItems: "center" },
                              children: [
                                (0, R.jsx)(u.default, {
                                  style: { fontSize: 18, marginEnd: 6 },
                                  children: n.emoji,
                                }),
                                (0, R.jsxs)(p.default, {
                                  style: { flex: 1 },
                                  children: [
                                    (0, R.jsxs)(u.default, {
                                      style: [w.typography.smallStrong, { color: o.text }],
                                      numberOfLines: 1,
                                      children: [t.target_name, " \xb7 ", y(n.labelKey)],
                                    }),
                                    (0, R.jsxs)(u.default, {
                                      style: [w.typography.caption, { color: o.textMuted }],
                                      children: [
                                        y(
                                          (k.VIOLATION_CATEGORIES ?? []).find((e) => e.category === t.category)
                                            ?.labelKey ?? `vio${I(t.category)}`,
                                        ),
                                        " \xb7 ",
                                        y("issuedBy", { name: t.issuer_name }),
                                        " \xb7 ",
                                        (0, T.formatRelative)(t.created_at),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, R.jsx)(j.Badge, { label: y(`sStatus_${t.status}`), tone: s }),
                              ],
                            }),
                            (0, R.jsx)(u.default, {
                              style: [w.typography.small, { color: o.text, marginTop: w.spacing.xs }],
                              children: t.reason,
                            }),
                            !!t.evidence_url &&
                              (0, R.jsxs)(o9.default, {
                                onPress: () => {
                                  const e = String(t.evidence_url);
                                  /^https?:\/\/\S+$/i.test(e) && "undefined" != typeof window
                                    ? window.open(e, "_blank", "noopener,noreferrer")
                                    : s.default.alert(y("error"), y("evidenceLinkInvalid"));
                                },
                                accessibilityRole: "link",
                                accessibilityLabel: y("openEvidence"),
                                style: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 4 },
                                children: [
                                  (0, R.jsx)(y9.Ionicons, { name: "open-outline", size: 14, color: o.accentText }),
                                  (0, R.jsx)(u.default, {
                                    style: [w.typography.caption, { color: o.accentText }],
                                    numberOfLines: 1,
                                    children: `${y("openEvidence")} \u00b7 ${t.evidence_url}`,
                                  }),
                                ],
                              }),
                            t.issued_by === e?.id &&
                              (0, R.jsx)(u.default, {
                                style: [w.typography.caption, { color: o.warning, marginTop: 4 }],
                                children: y("ownSanctionNotice"),
                              }),
                            (0, R.jsxs)(p.default, {
                              style: {
                                flexDirection: "row",
                                gap: w.spacing.sm,
                                marginTop: w.spacing.sm,
                                flexWrap: "wrap",
                              },
                              children:
                                t.issued_by === e?.id
                                  ? null
                                  : [
                                      "pending_approval" === t.status &&
                                        (0, R.jsxs)(
                                          R.Fragment,
                                          {
                                            children: [
                                              (0, R.jsx)(b.Button, {
                                                title: y("approveBan"),
                                                size: "sm",
                                                loading: O === t.id,
                                                disabled: !!O && O !== t.id,
                                                onPress: () => (setPa({ id: t.id, action: "approve" }), setRs("")),
                                              }),
                                              (0, R.jsx)(b.Button, {
                                                title: y("rejectBan"),
                                                size: "sm",
                                                variant: "secondary",
                                                loading: O === t.id,
                                                disabled: !!O && O !== t.id,
                                                onPress: () => (setPa({ id: t.id, action: "reject" }), setRs("")),
                                              }),
                                            ],
                                          },
                                          "pending",
                                        ),
                                      "active" === t.status &&
                                        (0, R.jsx)(
                                          b.Button,
                                          {
                                            title: y("overturnSanction"),
                                            size: "sm",
                                            variant: "secondary",
                                            loading: O === t.id,
                                            disabled: !!O && O !== t.id,
                                            onPress: () => (setPa({ id: t.id, action: "overturn" }), setRs("")),
                                          },
                                          "overturn",
                                        ),
                                      "active" === t.status &&
                                        ("ban" === t.type || "suspension" === t.type) &&
                                        (0, R.jsx)(
                                          b.Button,
                                          {
                                            title: y("restoreAccount"),
                                            size: "sm",
                                            variant: "secondary",
                                            loading: O === t.id,
                                            disabled: !!O && O !== t.id,
                                            onPress: () => (setPa({ id: t.id, action: "restore" }), setRs("")),
                                          },
                                          "restore",
                                        ),
                                    ],
                            }),
                            pa?.id === t.id &&
                              (0, R.jsxs)(p.default, {
                                style: {
                                  marginTop: w.spacing.sm,
                                  borderTopWidth: c9.default.hairlineWidth,
                                  borderTopColor: o.border,
                                  paddingTop: w.spacing.sm,
                                },
                                children: [
                                  (0, R.jsx)(u.default, {
                                    style: [w.typography.smallStrong, { color: o.text, marginBottom: 4 }],
                                    children:
                                      "restore" === pa.action
                                        ? y("confirmRestoreTitle")
                                        : "approve" === pa.action
                                          ? y("approveBan")
                                          : "reject" === pa.action
                                            ? y("rejectBan")
                                            : y("overturnSanction"),
                                  }),
                                  "restore" === pa.action &&
                                    (0, R.jsx)(u.default, {
                                      style: [w.typography.caption, { color: o.textMuted, marginBottom: 6 }],
                                      children: y("confirmRestoreBody", { name: t.target_name }),
                                    }),
                                  (0, R.jsx)(i9.Input, {
                                    label: "restore" === pa.action ? y("restoreReason") : y("sanctionDecisionReason"),
                                    value: rs,
                                    onChangeText: setRs,
                                    multiline: !0,
                                    numberOfLines: 2,
                                    maxLength: 300,
                                    style: { minHeight: 48, textAlignVertical: "top" },
                                  }),
                                  (0, R.jsxs)(p.default, {
                                    style: { flexDirection: "row", gap: w.spacing.sm, marginTop: w.spacing.sm },
                                    children: [
                                      (0, R.jsx)(b.Button, {
                                        title: y("cancel"),
                                        size: "sm",
                                        variant: "ghost",
                                        style: { flex: 1 },
                                        onPress: () => (setPa(null), setRs("")),
                                      }),
                                      (0, R.jsx)(b.Button, {
                                        title: y("confirmDecision"),
                                        size: "sm",
                                        variant:
                                          "overturn" === pa.action || "restore" === pa.action ? "danger" : "primary",
                                        style: { flex: 1 },
                                        loading: O === t.id,
                                        disabled: rs.trim().length < 3,
                                        onPress: () =>
                                          "restore" === pa.action
                                            ? G(
                                                t.id,
                                                () => (0, B.restoreUser)(e.id, t.user_id, rs.trim()),
                                                (e) =>
                                                  Number(e) > 0
                                                    ? y("restoredCount", { n: String(Number(e)) })
                                                    : y("nothingToRestore"),
                                              )
                                            : G(t.id, () =>
                                                (0, B.reviewSanction)(e.id, t.id, pa.action, rs.trim()),
                                              ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        },
                        t.id,
                      );
                    }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[1]),
      n = e(r(d[2])),
      s = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      p = e(r(d[8])),
      x = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      h = r(d[12]),
      j = r(d[13]),
      b = r(d[14]),
      v = r(d[15]),
      S = r(d[16]),
      C = r(d[17]),
      w = r(d[18]),
      B = r(d[19]),
      k = r(d[20]),
      _ = r(d[21]),
      T = r(d[22]),
      A = r(d[23]),
      z = r(d[24]),
      P = r(d[25]),
      R = r(d[26]),
      G9 = r(d[27]),
      i9 = r(d[28]),
      y9 = y,
      o9 = o,
      c9 = c;
    const I = (e) =>
        e
          .split("_")
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(""),
      M = ({ colors: e, title: t, onBack: n }) => {
        const s = (0, A.useT)();
        return (0, R.jsxs)(p.default, {
          style: E.header,
          children: [
            (0, R.jsx)(o.default, {
              onPress: n,
              accessibilityRole: "button",
              accessibilityLabel: s("back"),
              style: [E.iconBtn, { backgroundColor: e.surface, borderColor: e.border }],
              children: (0, R.jsx)(y.Ionicons, { name: (0, z.chevronBack)(), size: 22, color: e.text }),
            }),
            (0, R.jsx)(u.default, {
              style: [w.typography.h2, { color: e.text, flex: 1, marginHorizontal: w.spacing.md }],
              children: t,
            }),
          ],
        });
      },
      W = ({ label: e, value: t, colors: n, accent: s }) =>
        (0, R.jsxs)(p.default, {
          style: [
            E.tile,
            { backgroundColor: s ? n.accentMuted : n.surface, borderColor: s ? n.accent : n.border },
          ],
          children: [
            (0, R.jsx)(u.default, {
              style: [w.typography.h3, { color: s ? n.accentText : n.text }],
              children: t,
            }),
            (0, R.jsx)(u.default, { style: [w.typography.caption, { color: n.textMuted }], children: e }),
          ],
        }),
      E = c.default.create({
        hiddenNote: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          borderWidth: 1,
          borderRadius: 12,
          padding: 10,
          marginBottom: 12,
        },
        center: { flex: 1, alignItems: "center", justifyContent: "center" },
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
        grid: { flexDirection: "row", flexWrap: "wrap", gap: w.spacing.sm },
        tile: {
          width: "31.5%",
          borderRadius: w.radius.md,
          borderWidth: c.default.hairlineWidth,
          padding: w.spacing.md,
          minHeight: 66,
          justifyContent: "center",
        },
      });
  },
  1826,
  [
    33, 15, 461, 445, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 1624, 626, 1627, 630, 615, 616, 671, 656,
    1311, 1626, 675, 1171, 674, 13, 9001, 625,
  ],
);
