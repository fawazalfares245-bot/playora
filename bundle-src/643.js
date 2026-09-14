__d(
  function (g, r, i, a, m, _e, d) {
    var e = r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.actorRef = s),
      (_e.beginWrite = void 0),
      (_e.deviceInfo = c),
      (_e.endWrite = void 0),
      (_e.logAdminAudit = void 0),
      (_e.readAdminAudit = void 0),
      (_e.logAudit = l),
      (_e.persistenceHealth = _e.noteWriteFailure = _e.noteReadFailure = void 0),
      (_e.readAudit = async function () {
        const e = await t.default.getItem(n);
        return e ? JSON.parse(e) : [];
      }));
    var t = e(r(d[1]));
    e(r(d[2]));
    const n = "playora.audit.v1",
      o = 500,
      A = "playora.audit.admin.v1",
      C = 5e3;
    function s(e) {
      return e ? `\u2026${e.slice(-6)}` : null;
    }
    function c() {
      try {
        if ("undefined" != typeof navigator && navigator.userAgent) return `web:${navigator.userAgent.slice(0, 120)}`;
      } catch {}
      return "web";
    }
    const h = async (e, a, i) => {
      try {
        const l = await t.default.getItem(e),
          u = l ? JSON.parse(l) : [];
        (u.unshift(Object.assign({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, at: new Date().toISOString() }, i)),
          await t.default.setItem(e, JSON.stringify(u.slice(0, a))));
      } catch (t) {
        y(e, t);
      }
    };
    async function l(e, s, c) {
      await h(n, o, { type: e, actorRef: s, meta: c });
      const l = t.default.appendAudit;
      l && l({ type: e, actorRef: s, meta: c }).catch((e) => y("audit_log", e));
    }
    // Privileged (admin) actions get their own append-only store with the full actor id, a much larger cap,
    // and no placeholder fields. Read-only access to admin screens must NOT be written here.
    _e.logAdminAudit = async function (e, t, n, o) {
      const i = Object.assign({}, o ?? {});
      await h(A, C, { type: e, actor: t ?? null, actorRef: s(t), target: n ?? null, device: c(), meta: i });
      await l(e, s(t), Object.assign({ applicant: s(n) ?? "unknown", device: "web" }, i));
    };
    _e.readAdminAudit = async function () {
      const e = await t.default.getItem(A);
      return e ? JSON.parse(e) : [];
    };
    let u = 0,
      f = 0,
      p = 0,
      w = null;
    const v = (e) => (e instanceof Error ? e.message : String(e)),
      y = (e, t) => {
        ((u += 1),
          (w = { key: e, at: new Date().toISOString().slice(0, 16) + "Z" }),
          console.error(`[persist] write failed for ${e} (total ${u}): ${v(t)}`));
      };
    _e.noteWriteFailure = y;
    _e.noteReadFailure = (e, t) => {
      ((f += 1), console.error(`[persist] read failed for ${e} (total ${f}): ${v(t)}`));
    };
    _e.beginWrite = () => {
      p += 1;
    };
    _e.endWrite = () => {
      p -= 1;
    };
    _e.persistenceHealth = () => ({
      write_failures: u,
      read_failures: f,
      pending_writes: p,
      last_write_failure: w,
    });
  },
  643,
  [33, 618, 137],
);
