__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { user: t } = (0, k.useAuth)(),
          { colors: c } = (0, C.useTheme)(),
          I = (0, b.useRouter)(),
          H = (0, v.useT)(),
          [R, _] = (0, n.useState)(null),
          // F-CQUAL-13: neither the load nor the unblock had a catch, so a rejected fetch left the
          // list at null - a spinner with no end - and a failed unblock left the row sitting there
          // as if nothing had happened.
          [er9, se9] = (0, n.useState)(null),
          L = (0, n.useCallback)(async () => {
            if (!t) return;
            try {
              (se9(null), _(await (0, w.fetchBlockedList)(t.id)));
            } catch (e) {
              (se9((0, G9.classifyError)(e).message || H("error")), _([]));
            }
          }, [t]);
        (0, b.useFocusEffect)(
          (0, n.useCallback)(() => {
            L();
          }, [L]),
        );
        const P = async (n) => {
          if (!t) return;
          try {
            (se9(null), await (0, w.unblockUser)(t.id, n), await L());
          } catch (e) {
            se9((0, G9.classifyError)(e).message || H("error"));
          }
        };
        return (0, z.jsxs)(f.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: c.bg },
          children: [
            (0, z.jsxs)(h.default, {
              style: A.header,
              children: [
                (0, z.jsx)(l.default, {
                  onPress: () => (0, G9.safeBack)(I),
                  accessibilityRole: "button",
                  accessibilityLabel: H("back"),
                  style: [A.iconBtn, { backgroundColor: c.surface, borderColor: c.border }],
                  children: (0, z.jsx)(y.Ionicons, { name: (0, S.chevronBack)(), size: 22, color: c.text }),
                }),
                (0, z.jsx)(u.default, {
                  style: [B.typography.h2, { color: c.text, marginHorizontal: B.spacing.md }],
                  children: H("blockedAccounts"),
                }),
              ],
            }),
            (0, z.jsx)(s.default, {
              contentContainerStyle: { padding: B.spacing.lg, paddingBottom: B.spacing.xxxl },
              children:
                er9
                  ? (0, z.jsxs)(h.default, {
                      children: [
                        (0, z.jsx)(j.EmptyState, {
                          icon: "alert-circle-outline",
                          title: H("loadFailedTitle"),
                          body: er9,
                        }),
                        (0, z.jsx)(G9.RetryButton, { onPress: L }),
                      ],
                    })
                  : null === R
                  ? (0, z.jsx)(o.default, { color: c.accentText })
                  : 0 === R.length
                    ? (0, z.jsx)(j.EmptyState, {
                        icon: "ban-outline",
                        title: H("noBlocked"),
                        body: H("blockedAccountsHint"),
                      })
                    : R.map((t) =>
                        (0, z.jsx)(
                          x.Card,
                          {
                            padding: "md",
                            style: { marginBottom: B.spacing.sm },
                            children: (0, z.jsxs)(h.default, {
                              style: { flexDirection: "row", alignItems: "center" },
                              children: [
                                (0, z.jsx)(h.default, {
                                  style: [A.avatar, { backgroundColor: c.surfaceAlt }],
                                  children: (0, z.jsx)(u.default, {
                                    style: [B.typography.bodyStrong, { color: c.text }],
                                    children: t.name.slice(0, 1).toUpperCase(),
                                  }),
                                }),
                                (0, z.jsx)(u.default, {
                                  style: [
                                    B.typography.bodyStrong,
                                    { color: c.text, flex: 1, marginHorizontal: B.spacing.md },
                                  ],
                                  numberOfLines: 1,
                                  children: t.name,
                                }),
                                (0, z.jsx)(p.Button, {
                                  title: H("unblockBtn"),
                                  size: "sm",
                                  variant: "secondary",
                                  onPress: () => P(t.id),
                                }),
                              ],
                            }),
                          },
                          t.id,
                        ),
                      ),
            }),
          ],
        });
      }));
    var n = r(d[1]),
      o = t(r(d[2])),
      l = t(r(d[3])),
      s = t(r(d[4])),
      c = t(r(d[5])),
      u = t(r(d[6])),
      h = t(r(d[7])),
      f = r(d[8]),
      y = r(d[9]),
      b = r(d[10]),
      x = r(d[11]),
      p = r(d[12]),
      j = r(d[13]),
      k = r(d[14]),
      C = r(d[15]),
      B = r(d[16]),
      w = r(d[17]),
      v = r(d[18]),
      S = r(d[19]),
      z = r(d[20]),
      G9 = r(d[21]);
    const A = c.default.create({
      header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: B.spacing.lg,
        paddingVertical: B.spacing.md,
      },
      iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: c.default.hairlineWidth,
      },
      avatar: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
    });
  },
  1837,
  [
    33, 15, 461, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 626, 1627, 630, 615, 616, 671, 675, 1171, 13, 9001,
  ],
);
