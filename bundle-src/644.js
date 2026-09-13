__d(
  function (g, _r, _i, _a, _m, _e, _d) {
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.activeSince = function (e, t, n = Date.now()) {
        const o = n - 864e5 * t,
          r = new Set();
        for (const t of e) new Date(t.at).getTime() >= o && r.add(t.user);
        return r.size;
      }),
      (_e.arpu = void 0),
      (_e.bucketByDay = function (e, t, r) {
        const a = new Map(),
          s = n(new Date());
        for (let e = r - 1; e >= 0; e--) {
          const t = new Date(s.getTime() - 864e5 * e);
          a.set(o(t), 0);
        }
        for (const n of e) {
          const e = o(new Date(t(n)));
          a.has(e) && a.set(e, (a.get(e) ?? 0) + 1);
        }
        return [...a.entries()].map(([e, t]) => ({ key: e, value: t, label: e.slice(5) }));
      }),
      (_e.cac = void 0),
      (_e.countSince = r),
      (_e.growthRate = function (e, t, n, o = Date.now()) {
        const a = r(e, t, n, o),
          s = o - 864e5 * n,
          c = e.filter((e) => {
            const o = new Date(t(e)).getTime();
            return o >= s - 864e5 * n && o < s;
          }).length;
        return c > 0 ? (a - c) / c : a > 0 ? 1 : 0;
      }),
      (_e.pct = _e.ltv = void 0),
      (_e.peakDays = function (e) {
        const t = new Array(7).fill(0);
        for (const n of e) t[new Date(n).getDay()]++;
        return t.map((e, t) => ({ key: String(t), label: a[t], value: e }));
      }),
      (_e.peakHours = function (e) {
        const t = new Array(24).fill(0);
        for (const n of e) t[new Date(n).getHours()]++;
        return t.map((e, t) => ({ key: String(t), label: `${String(t).padStart(2, "0")}`, value: e }));
      }),
      (_e.round2 = _e.rate = void 0),
      (_e.segmentCounts = function (e, t) {
        const n = new Map();
        for (const o of e) {
          const e = t(o);
          e && n.set(e, (n.get(e) ?? 0) + 1);
        }
        return [...n.entries()]
          .map(([e, t]) => ({ key: e, value: t, label: e }))
          .sort((e, t) => t.value - e.value);
      }),
      (_e.sumByDay = function (e, r, a, s) {
        const c = new Map(),
          u = n(new Date());
        for (let e = s - 1; e >= 0; e--) c.set(o(new Date(u.getTime() - 864e5 * e)), 0);
        for (const n of e) {
          const e = o(new Date(r(n)));
          c.has(e) && c.set(e, t((c.get(e) ?? 0) + a(n)));
        }
        return [...c.entries()].map(([e, t]) => ({ key: e, value: t, label: e.slice(5) }));
      }),
      (_e.toCsv = function (e, t) {
        // ADM2 (F-ADM2-15): values that a spreadsheet would treat as a formula are neutralised.
        const n = (e) => {
          let t = String(e);
          /^[=+\-@\t\r]/.test(t) && (t = `'${t}`);
          return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
        };
        return [e.map(n).join(","), ...t.map((e) => e.map(n).join(","))].join("\n");
      }),
      (_e.topN = function (e, t) {
        return [...e].sort((e, t) => t.value - e.value).slice(0, t);
      }));
    const e = (e, t) => (t > 0 ? e / t : 0);
    _e.rate = e;
    _e.pct = (e) => Math.round(1e3 * e) / 10;
    const t = (e) => Math.round(100 * e) / 100;
    _e.round2 = t;
    const n = (e) => {
        const t = new Date(e);
        return (t.setHours(0, 0, 0, 0), t);
      },
      o = (e) => n(e).toISOString().slice(0, 10);
    function r(e, t, n, o = Date.now()) {
      const r = o - 864e5 * n;
      return e.filter((e) => new Date(t(e)).getTime() >= r).length;
    }
    const a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    _e.arpu = (n, o) => t(e(n, o));
    _e.ltv = (e, n) => t(e * (n > 0 ? 1 / n : 12));
    _e.cac = (n, o) => t(e(n, o));
  },
  644,
  [],
);
