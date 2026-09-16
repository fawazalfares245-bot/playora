__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = void 0),
      Object.defineProperty(e, "useAsyncStorage", {
        enumerable: !0,
        get: function () {
          return n.useAsyncStorage;
        },
      }));
    var u = t(r(d[1])),
      n = r(d[2]);
    // 631 looks for three optional hooks on this adapter and silently degrades when they are absent,
    // which they were: withAdvisoryLock, getRows and setRows. Without withAdvisoryLock the per-game
    // and per-court mutexes were only in-memory promise chains, so two tabs of the same origin both
    // read stale rows, both passed the capacity and overlap tests, and both wrote - last write wins.
    // Without getRows, the re-read those locks are supposed to perform was skipped too, so even
    // within one tab a guarded transition ran against whatever happened to be in memory.
    //
    // Web Locks are scoped to the origin and shared across tabs, which is exactly the scope needed
    // here. They need a secure context; localhost and https qualify, and anywhere else this falls
    // through to running the work directly, which is no worse than before - and 631 still performs
    // its re-read, because it keys that off this hook being present rather than off the lock working.
    const L9 = async (o9, f9) => {
      const n9 = "undefined" != typeof navigator ? navigator : null;
      return n9 && n9.locks && n9.locks.request
        ? n9.locks.request("playora:" + o9, f9)
        : f9();
    };
    const G9 = async (k9) => {
      const v9 = await u.default.getItem(k9);
      if (!v9) return null;
      try {
        const p9 = JSON.parse(v9);
        return Array.isArray(p9) ? p9 : null;
      } catch {
        return null;
      }
    };
    const S9 = async (k9, rows9) => u.default.setItem(k9, JSON.stringify(rows9));
    ((u.default.withAdvisoryLock = L9), (u.default.getRows = G9), (u.default.setRows = S9));
    e.default = u.default;
  },
  618,
  [33, 619, 622],
);
