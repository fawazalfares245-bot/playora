__d(
  function (g, _r, _i, a, m, e, d) {
    // Shared screen-guard helpers added by the fix batch.
    //   useRoleGate(roles)  -> { ready, allowed, role }
    //   classifyError(err)  -> { code, message, isAuth }
    //   GateScreen props    -> { kind: "denied" | "error", title?, body?, onRetry?, onBack? }
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.useRoleGate = e.classifyError = e.GateScreen = e.AUTH_CODES = void 0));
    var n = _r(d[1]),
      s = _r(d[2]),
      o = _r(d[3]),
      c = _r(d[4]),
      u = _r(d[5]),
      l = _r(d[6]),
      f = _r(d[7]),
      h = _r(d[8]),
      p = _r(d[9]),
      x = _r(d[10]),
      y = t(_r(d[11])),
      b = t(_r(d[12])),
      j = t(_r(d[13])),
      v = _r(d[14]),
      w = _r(d[15]),
      k = _r(d[16]);
    const C = (e.AUTH_CODES = new Set([
      "E_ADMINISTRATOR_AUTHORIZATION_REQUIRED",
      "E_ADMINS_ONLY",
      "E_YOU_DO_NOT_HAVE_ACCESS_TO",
      "E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE",
      "E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_2",
      "E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_3",
      "E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_4",
      "E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW",
      "E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW_2",
      "E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW_3",
      "forbidden",
    ]));
    e.useRoleGate = (t = ["admin"]) => {
      const { profile: e, loading: r, user: i } = (0, s.useAuth)(),
        [a, l] = (0, n.useState)(!1);
      // The profile arrives one tick after the session; give it a short grace period so a refresh
      // does not flash the "denied" screen for legitimate admins.
      return (
        (0, n.useEffect)(() => {
          if (r) return;
          if (e || !i) return void l(!0);
          const t = setTimeout(() => l(!0), 1500);
          return () => clearTimeout(t);
        }, [r, e, i]),
        { ready: !r && (a || !!e), allowed: !!e && t.includes(e.role), role: e?.role ?? null, isGuest: !!i?.id?.startsWith("guest:") }
      );
    };
    e.classifyError = (e) => {
      const t = e && "object" == typeof e ? (e.code ?? e.message ?? String(e)) : String(e ?? ""),
        r = "string" == typeof t ? t.split(":")[0] : "";
      return { code: r, message: (0, o.storeErrorText)("string" == typeof t ? t : ""), isAuth: C.has(r) };
    };
    e.GateScreen = ({ kind: t = "denied", title: n, body: s, onRetry: o, onBack: I, roles: S }) => {
      const { colors: _ } = (0, c.useTheme)(),
        E = (0, u.useT)(),
        T = (0, f.useRouter)(),
        z = "denied" === t,
        A = I ?? (() => (T.canGoBack?.() ? T.back() : T.replace("/(tabs)")));
      return (0, k.jsxs)(l.SafeAreaView, {
        edges: ["top"],
        style: { flex: 1, backgroundColor: _.bg },
        children: [
          (0, k.jsx)(v.default, {
            style: { flexDirection: "row", alignItems: "center", paddingHorizontal: h.spacing.lg, paddingVertical: h.spacing.md },
            children: (0, k.jsx)(y.default, {
              onPress: A,
              accessibilityRole: "button",
              accessibilityLabel: E("back"),
              style: {
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: j.default.hairlineWidth,
                backgroundColor: _.surface,
                borderColor: _.border,
              },
              children: (0, k.jsx)(p.Ionicons, { name: (0, w.chevronBack)(), size: 22, color: _.text }),
            }),
          }),
          (0, k.jsx)(v.default, {
            style: { flex: 1, justifyContent: "center", padding: h.spacing.xl },
            children: (0, k.jsx)(x.EmptyState, {
              icon: z ? "lock-closed-outline" : "alert-circle-outline",
              title: n ?? (z ? E("adminOnlyTitle") : E("loadFailedTitle")),
              body: s ?? (z ? (S && S.includes("analyst") ? E("analystOrAdminBody") : E("adminOnlyBody")) : void 0),
            }),
          }),
          (0, k.jsxs)(v.default, {
            style: { padding: h.spacing.lg, gap: h.spacing.sm },
            children: [
              !z && o && (0, k.jsx)(b.Button, { title: E("retry"), fullWidth: !0, onPress: o }),
              (0, k.jsx)(b.Button, { title: E("goBack"), variant: "secondary", fullWidth: !0, onPress: A }),
            ],
          }),
        ],
      });
    };
  },
  9001,
  [33, 15, 630, 674, 615, 675, 381, 20, 616, 1086, 1627, 369, 626, 158, 273, 1171, 13],
);
