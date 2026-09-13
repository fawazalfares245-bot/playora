__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.sessionToken =
        _e.remoteSignUp =
        _e.remoteSignIn =
        _e.remoteResetRequest =
        _e.remoteResetConfirm =
        _e.remoteOtpVerify =
        _e.remoteOtpSignIn =
        _e.remoteOtpRequest =
        _e.remoteOtpCheck =
        _e.remoteAuthAvailable =
        _e.persistSession =
        _e.authFetch =
          void 0));
    e(r(d[1]));
    var t = r(d[2]),
      o = r(d[3]);
    const n = "secure.playora_session",
      s = async (e, o) => {
        const n = new AbortController(),
          s = setTimeout(() => n.abort(), 1e4);
        try {
          return await fetch(`${(0, t.backendBase)()}${e}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(o),
            signal: n.signal,
          });
        } catch (e) {
          throw new Error("NETWORK_TIMEOUT");
        } finally {
          clearTimeout(s);
        }
      };
    _e.authFetch = s;
    const c = async (e, t) => {
        if (429 === e.status) throw new Error("RATE_LIMITED");
        let o;
        try {
          o = await e.json();
        } catch {
          throw new Error("SERVER_TROUBLE");
        }
        if (!o.ok || void 0 === o.data) throw new Error(o.error ?? t);
        return o.data;
      },
      h = async (e, t) => {
        const o = await s(e, t),
          n = await c(o, "Authentication failed.");
        return (u(n), n);
      },
      u = (e) => {
        try {
          (e && "object" == typeof e && "number" != typeof e.expires_at && (e.expires_at = Date.now() + 2592e6),
            "undefined" != typeof localStorage)
            ? localStorage.setItem(n, JSON.stringify(e))
            : ((0, o.secureSet)("playora_session", JSON.stringify(e)),
              (0, t.setSessionToken)(e.token ?? null));
        } catch {}
      };
    _e.persistSession = u;
    _e.sessionToken = () => {
      try {
        if ("undefined" != typeof localStorage) {
          const e = localStorage.getItem(n);
          if (e) return JSON.parse(e).token ?? null;
        }
      } catch {}
      return null;
    };
    _e.remoteAuthAvailable = async () => (await (0, t.ensureBackend)(), (0, t.remoteEnabled)());
    _e.remoteSignIn = (e, t) => h("/auth/signin", { email: e, password: t });
    _e.remoteOtpRequest = async (e) => {
      const o = await fetch(`${(0, t.backendBase)()}/auth/otp/request`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ phone: e }),
        }),
        n = await o.json();
      if (!n.ok || !n.data) throw new Error(n.error ?? "Could not send the code.");
      return n.data;
    };
    _e.remoteOtpCheck = async (e, o) => {
      const n = await fetch(`${(0, t.backendBase)()}/auth/otp/check`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ phone: e, code: o }),
        }),
        s = await n.json();
      if (!s.ok || !s.data) throw new Error(s.error ?? "Could not check the code.");
      return s.data;
    };
    _e.remoteResetRequest = async (e) => {
      const o = await fetch(`${(0, t.backendBase)()}/auth/reset/request`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: e }),
        }),
        n = await o.json();
      if (!n.ok || !n.data) throw new Error(n.error ?? "Could not send the code.");
      return n.data;
    };
    _e.remoteResetConfirm = async (e, o, n) => {
      const s = await fetch(`${(0, t.backendBase)()}/auth/reset/confirm`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: e, code: o, new_password: n }),
        }),
        c = await s.json();
      if (!c.ok) throw new Error(c.error ?? "Could not reset the password.");
    };
    _e.remoteOtpSignIn = (e, t) => h("/auth/otp/signin", { phone: e, code: t });
    _e.remoteOtpVerify = (e, t, o, n, s, c) =>
      h("/auth/otp/verify", {
        phone: e,
        code: t,
        full_name: o,
        audience: n,
        birth_date: s,
        accepted_terms: c,
      });
    _e.remoteSignUp = (e, t, o, n = "male") =>
      h("/auth/signup", { email: e, password: t, full_name: o, audience: n });
  },
  913,
  [33, 137, 673, 637],
);
