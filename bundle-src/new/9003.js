__d(
  function (g, _r, _i, a, m, e, d) {
    // XC (F-XC-7) / ADM1 (F-ADM1-32): the privileged-action log, readable inside the product.
    // Admin only. Newest first, filterable by action type and by free text over actor, target and meta.
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: u } = (0, A.useAuth)(),
          { colors: c } = (0, T.useTheme)(),
          nav = (0, R.useRouter)(),
          tr = (0, L.useT)(),
          [data, setData] = (0, n.useState)(null),
          [loading, setLoading] = (0, n.useState)(!0),
          [err, setErr] = (0, n.useState)(null),
          [type, setType] = (0, n.useState)(null),
          [q, setQ] = (0, n.useState)(""),
          gate = (0, G9.useRoleGate)(["admin"]),
          load = (0, n.useCallback)(async () => {
            if (!u) return;
            setErr(null);
            try {
              setData(await (0, F.fetchAdminAuditLog)(u.id, { type: type, query: q, limit: 200 }));
            } catch (x) {
              setErr(x);
            }
            setLoading(!1);
          }, [u, type, q]);
        (0, R.useFocusEffect)(
          (0, n.useCallback)(() => {
            load();
          }, [load]),
        );
        if (gate.ready && !gate.allowed)
          return (0, J.jsx)(G9.GateScreen, { kind: "denied", onBack: () => nav.back() });
        if ((loading && !data) || !gate.ready)
          return (0, J.jsx)(S.SafeAreaView, {
            style: [D.center, { backgroundColor: c.bg }],
            children: (0, J.jsx)(l.default, { color: c.accentText }),
          });
        if (err || !data) {
          const ce = err ? (0, G9.classifyError)(err) : null;
          return (0, J.jsx)(G9.GateScreen, {
            kind: ce?.isAuth ? "denied" : "error",
            body: ce && !ce.isAuth ? ce.message : void 0,
            onRetry: () => {
              (setLoading(!0), load());
            },
            onBack: () => nav.back(),
          });
        }
        const fmt = (v) => {
          try {
            return new Date(v).toLocaleString(void 0, {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            });
          } catch {
            return String(v);
          }
        };
        const metaLine = (o) => {
          const ks = Object.keys(o || {});
          if (!ks.length) return null;
          return ks
            .slice(0, 6)
            .map((k) => `${k}: ${"object" == typeof o[k] ? JSON.stringify(o[k]) : String(o[k])}`)
            .join(" · ");
        };
        return (0, J.jsxs)(S.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: c.bg },
          children: [
            (0, J.jsxs)(s.default, {
              style: D.header,
              children: [
                (0, J.jsx)(o.default, {
                  onPress: () => nav.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: tr("back"),
                  style: [D.iconBtn, { backgroundColor: c.surface, borderColor: c.border }],
                  children: (0, J.jsx)(P.Ionicons, { name: (0, B.chevronBack)(), size: 22, color: c.text }),
                }),
                (0, J.jsxs)(s.default, {
                  style: { flex: 1, marginHorizontal: b.spacing.md },
                  children: [
                    (0, J.jsx)(i.default, {
                      style: [b.typography.h2, { color: c.text }],
                      children: tr("adminAuditTitle"),
                    }),
                    (0, J.jsx)(i.default, {
                      style: [b.typography.caption, { color: c.textMuted }],
                      children: tr("adminAuditSubtitle", {
                        shown: String(data.rows.length),
                        total: String(data.total),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(s.default, {
              style: { paddingHorizontal: b.spacing.lg },
              children: [
                (0, J.jsxs)(s.default, {
                  style: [D.searchWrap, { backgroundColor: c.surface, borderColor: c.border }],
                  children: [
                    (0, J.jsx)(P.Ionicons, { name: "search-outline", size: 18, color: c.textMuted }),
                    (0, J.jsx)(X.default, {
                      value: q,
                      onChangeText: setQ,
                      placeholder: tr("adminAuditSearchPlaceholder"),
                      placeholderTextColor: c.textMuted,
                      accessibilityLabel: tr("adminAuditSearchPlaceholder"),
                      autoCapitalize: "none",
                      autoCorrect: !1,
                      maxLength: 60,
                      style: [D.searchInput, { color: c.text }],
                    }),
                    q.length > 0 &&
                      (0, J.jsx)(o.default, {
                        onPress: () => setQ(""),
                        accessibilityRole: "button",
                        accessibilityLabel: tr("homeSearchClear"),
                        style: [D.clearBtn, { backgroundColor: c.surfaceAlt }],
                        children: (0, J.jsx)(P.Ionicons, { name: "close", size: 14, color: c.textMuted }),
                      }),
                  ],
                }),
                (0, J.jsx)(y.default, {
                  horizontal: !0,
                  showsHorizontalScrollIndicator: !1,
                  contentContainerStyle: { gap: b.spacing.sm, paddingBottom: b.spacing.sm },
                  children: (0, J.jsx)(s.default, {
                    style: { flexDirection: "row", gap: b.spacing.sm },
                    children: [null, ...data.types].map((k) => {
                      const on = type === k;
                      return (0, J.jsx)(
                        o.default,
                        {
                          onPress: () => setType(on ? null : k),
                          accessibilityRole: "button",
                          accessibilityState: { selected: on },
                          style: [
                            D.chip,
                            {
                              backgroundColor: on ? c.accent : c.surface,
                              borderColor: on ? c.accent : c.border,
                            },
                          ],
                          children: (0, J.jsx)(i.default, {
                            style: [b.typography.caption, { color: on ? c.accentInk : c.text, fontWeight: "700" }],
                            children: null === k ? tr("all") : k,
                          }),
                        },
                        k ?? "all",
                      );
                    }),
                  }),
                }),
              ],
            }),
            (0, J.jsx)(y.default, {
              contentContainerStyle: {
                paddingHorizontal: b.spacing.lg,
                paddingBottom: b.spacing.xxxl,
              },
              children:
                0 === data.rows.length
                  ? (0, J.jsx)(V.EmptyState, {
                      icon: "document-text-outline",
                      title: tr("adminAuditEmptyTitle"),
                      body: tr("adminAuditEmptyBody"),
                    })
                  : data.rows.map((row) =>
                      (0, J.jsxs)(
                        s.default,
                        {
                          style: [D.row, { borderColor: c.border }],
                          children: [
                            (0, J.jsxs)(s.default, {
                              style: { flexDirection: "row", alignItems: "center", gap: b.spacing.sm },
                              children: [
                                (0, J.jsx)(i.default, {
                                  style: [b.typography.smallStrong, { color: c.text, flex: 1 }],
                                  numberOfLines: 1,
                                  children: row.type,
                                }),
                                (0, J.jsx)(i.default, {
                                  style: [b.typography.caption, { color: c.textMuted }],
                                  children: fmt(row.at),
                                }),
                              ],
                            }),
                            (0, J.jsx)(i.default, {
                              style: [b.typography.caption, { color: c.textMuted, marginTop: 2 }],
                              children: tr("adminAuditActorLine", {
                                actor: row.actor_name || row.actor_ref || tr("adminAuditUnknownActor"),
                                target: row.target_name || row.target_id || "—",
                              }),
                            }),
                            !!metaLine(row.meta) &&
                              (0, J.jsx)(i.default, {
                                style: [b.typography.caption, { color: c.textMuted, marginTop: 2, opacity: 0.85 }],
                                children: metaLine(row.meta),
                              }),
                            !!row.device &&
                              (0, J.jsx)(i.default, {
                                style: [b.typography.caption, { color: c.textMuted, marginTop: 2, opacity: 0.6 }],
                                numberOfLines: 1,
                                children: row.device,
                              }),
                          ],
                        },
                        row.id,
                      ),
                    ),
            }),
          ],
        });
      }));
    var n = _r(d[1]),
      l = t(_r(d[2])),
      o = t(_r(d[3])),
      y = t(_r(d[4])),
      k = t(_r(d[5])),
      i = t(_r(d[6])),
      s = t(_r(d[7])),
      S = _r(d[8]),
      P = _r(d[9]),
      R = _r(d[10]),
      V = _r(d[11]),
      A = _r(d[12]),
      T = _r(d[13]),
      b = _r(d[14]),
      F = _r(d[15]),
      L = _r(d[16]),
      B = _r(d[17]),
      J = _r(d[18]),
      G9 = _r(d[19]),
      X = t(_r(d[20]));
    const D = k.default.create({
      center: { flex: 1, alignItems: "center", justifyContent: "center" },
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: b.spacing.lg,
        paddingVertical: b.spacing.md,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: k.default.hairlineWidth,
      },
      searchWrap: {
        flexDirection: "row",
        alignItems: "center",
        gap: b.spacing.sm,
        borderRadius: b.radius.pill,
        borderWidth: k.default.hairlineWidth,
        paddingHorizontal: b.spacing.md,
        height: 44,
        marginBottom: b.spacing.sm,
      },
      searchInput: { flex: 1, paddingVertical: 0, fontSize: 14, fontWeight: "600" },
      clearBtn: {
        width: 26,
        height: 26,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
      },
      chip: {
        borderRadius: b.radius.pill,
        borderWidth: k.default.hairlineWidth,
        paddingHorizontal: b.spacing.md,
        paddingVertical: 6,
      },
      row: {
        borderTopWidth: k.default.hairlineWidth,
        paddingVertical: b.spacing.md,
      },
    });
  },
  9003,
  [33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1627, 630, 615, 616, 671, 675, 1171, 13, 9001, 394],
);
