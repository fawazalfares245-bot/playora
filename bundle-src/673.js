__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.setSessionToken =
        e.rpc =
        e.remoteEnabled =
        e.ensureBackend =
        e.backendMode =
        e.backendBase =
          void 0));
    (t(r(d[1])), t(r(d[2])), r(d[3]));
    // The API origin comes only from the runtime config baked into index.html (window.__PLAYORA_CONFIG__.backendUrl).
    // It is intentionally NOT overridable from localStorage.
    const n = () => {
      const t = "undefined" != typeof globalThis ? globalThis.__PLAYORA_CONFIG__?.backendUrl : null;
      return "string" == typeof t && /^https?:\/\//.test(t) ? t.replace(/\/+$/, "") : null;
    };
    let o = null,
      c = n(),
      l = null;
    const u = async (t, n) => {
        try {
          const o = new AbortController(),
            c = setTimeout(() => o.abort(), n),
            l = await fetch(`${t}/health`, { signal: o.signal });
          return (clearTimeout(c), l.ok);
        } catch {
          return !1;
        }
      },
      k = () =>
        null !== o
          ? Promise.resolve()
          : (l ||
              (l = (async () => {
                c = n();
                o = c && (await u(c, 900)) ? "remote" : "mock";
              })()),
            l);
    e.ensureBackend = k;
    e.remoteEnabled = () => "remote" === o;
    e.backendMode = () => o;
    let y;
    e.backendBase = () => c;
    e.setSessionToken = (t) => {
      y = t;
    };
    const h = async () => {
      const t = (t) => (t && "preview" !== t && "guest" !== t ? t : null);
      try {
        if ("undefined" != typeof localStorage) {
          const n = localStorage.getItem("secure.playora_session");
          return t(n ? JSON.parse(n).token : null);
        }
      } catch {}
      return null;
    };
    e.rpc = async (t, n, l) => {
      if ((await k(), "remote" !== o)) return l();
      for (; n.length && void 0 === n[n.length - 1]; ) n = n.slice(0, -1);
      const s = await h(),
        u = s ? `Bearer ${s}` : null;
      let y;
      try {
        y = await fetch(`${c}/rpc`, {
          method: "POST",
          headers: Object.assign({ "content-type": "application/json" }, u ? { authorization: u } : {}),
          body: JSON.stringify({ fn: t, args: n }),
        });
      } catch {
        return ((o = "mock"), console.warn("[backend] unreachable, falling back to local store"), l());
      }
      const f = await y.json();
      if (!f.ok) throw new Error(f.error ?? "Server error.");
      return f.data;
    };
  },
  673,
  [33, 137, 541, 637],
);
