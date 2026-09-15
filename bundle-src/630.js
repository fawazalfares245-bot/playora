__d(
  function (g, r, i, a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.useAuth = e.AuthProvider = void 0));
    var t = r(d[0]),
      s = r(d[1]),
      u = r(d[2]),
      n = r(d[3]),
      o = r(d[4]),
      l = r(d[5]),
      c = r(d[6]),
      h = r(d[7]),
      f = r(d[8]);
    const S = (0, t.createContext)(void 0);
    // mockRunScheduledWork drives nine sweeps - series generation, court-booking expiry, seat-payment
    // expiry and reconciliation, gauntlets, submissions, squad drops, awards and the demo clock -
    // plus the reminder pass. Nothing in the bundle called it: with no server and no cron, the whole
    // clock was dead code and the only reconciliation that ever ran was the incidental one on the
    // payments screens. Run it on session boot and whenever the tab comes back to the foreground,
    // throttled so switching tabs is not a full sweep, and never blocking or failing a render.
    const M9 = 3e5;
    let N9 = 0;
    const O9 = async (t) => {
      const s = Date.now();
      if (s - N9 < M9) return;
      N9 = s;
      try {
        await t();
      } catch (u) {
        console.error("[clock] scheduled work failed:", u instanceof Error ? u.message : u);
      }
    };
    e.AuthProvider = ({ children: A }) => {
      const [v, w] = (0, t.useState)(null),
        [p, P] = (0, t.useState)(null),
        [k, y] = (0, t.useState)(!0);
      ((0, t.useEffect)(() => {
        let t = !0;
        return (
          (0, s.loadSession)()
            .then((t) => t ?? (0, h.restoreGuestSession)())
            .then((s) => {
              t && (w(s), y(!1));
            }),
          () => {
            t = !1;
          }
        );
      }, []),
        (0, t.useEffect)(() => {
          if ((v?.user && !v.user.id.startsWith("guest:") && (0, c.markReturning)(), !v?.user))
            return (P(null), void (0, o.setThemeAudience)("male"));
          ((0, u.fetchProfile)(v.user.id)
            .then((t) => {
              P(t);
              const s = "guest:female" === v.user.id ? "female" : "guest:male" === v.user.id ? "male" : null;
              (0, o.setThemeAudience)(t?.audience ?? s);
            })
            .catch(() => P(null)),
            (0, s.mockEnsureNotificationsSeed)(v.user.id).catch(() => {}));
        }, [v?.user?.id]),
        (0, t.useEffect)(() => {
          if (!v?.user || v.user.id.startsWith("guest:")) return;
          const u = () => O9(() => (0, s.mockRunScheduledWork)());
          if ((u(), "undefined" == typeof document)) return;
          const n = () => {
            "visible" === document.visibilityState && u();
          };
          return (
            document.addEventListener("visibilitychange", n),
            () => document.removeEventListener("visibilitychange", n)
          );
        }, [v?.user?.id]));
      const b = (0, t.useMemo)(
        () => ({
          session: v,
          user: v?.user ?? null,
          profile: p,
          loading: k,
          signIn: async (t, u) => {
            const o = (await (0, n.remoteAuthAvailable)())
              ? await (0, n.remoteSignIn)(t, u)
              : await (0, s.mockSignIn)(t, u);
            w(o);
          },
          signUp: async (t, u, o, l = "male") => {
            const c = (await (0, n.remoteAuthAvailable)())
              ? await (0, n.remoteSignUp)(t, u, o, l)
              : await (0, s.mockSignUp)(t, u, o, l);
            w(c);
          },
          signOut: async () => {
            (await (0, h.clearGuestSession)(),
              await (0, s.mockSignOut)(),
              (0, l.setSessionToken)(null),
              w(null),
              P(null));
          },
          refreshProfile: async () => {
            v?.user && P(await (0, u.fetchProfile)(v.user.id));
          },
          adoptSession: (t) => w(t),
          enterGuest: (t) => {
            (0, o.setThemeAudience)(t);
            const s = { user: { id: `guest:${t}`, email: "guest@playora.app" }, token: "guest" };
            (w(s), (0, h.persistGuestSession)(s));
          },
        }),
        [v, p, k],
      );
      return (0, f.jsx)(S.Provider, { value: b, children: A });
    };
    e.useAuth = () => {
      const s = (0, t.useContext)(S);
      if (!s) throw new Error("useAuth must be used inside <AuthProvider>");
      return s;
    };
  },
  630,
  [15, 631, 671, 913, 623, 673, 914, 915, 13],
);
