__d(
  function (_g, r, i, _a, _m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.splitAmounts =
        e.settlement =
        e.roundKwd =
        e.isOnlineMethod =
        e.hoursBetween =
        e.courtPrice =
        e.PAYMENT_METHODS =
          void 0));
    const t = (t) => Math.round(1e3 * t) / 1e3;
    e.roundKwd = t;
    const o = (t, o) => Math.max(0, (new Date(o).getTime() - new Date(t).getTime()) / 36e5);
    e.hoursBetween = o;
    e.courtPrice = (n, a, l) => t(Math.max(0, n) * o(a, l));
    e.splitAmounts = (o) => {
      const { mode: n, total: a, payerIds: l, organizerId: m, custom: s } = o,
        h = t(Math.max(0, a)),
        c = {};
      if (0 === l.length) return c;
      if ("organizer_pays" === n) {
        for (const t of l) c[t] = 0;
        return ((c[m] = h), c);
      }
      if ("custom" === n) {
        // The organizer supplies these amounts and nothing bounded them. The correction below is
        // clamped at zero, so a sum over the total simply survived: a 12 KWD court split 50/50/0
        // returned 50/50/0 and mockCreatePaymentPlan billed 100 for it, while the settlement row
        // still recorded 12 - the surplus was invisible to every financial report. Sum first and
        // refuse, rather than clamping away the evidence.
        let o = 0;
        for (const n of l) o += t(Math.max(0, s?.[n] ?? 0));
        if (t(o) - h > 5e-4) throw new Error("E_SPLIT_EXCEEDS_TOTAL");
        for (const n of l) c[n] = t(Math.max(0, s?.[n] ?? 0));
        return ((c[m] = t(Math.max(0, (c[m] ?? 0) + (h - o)))), c);
      }
      const y = Math.floor((h / l.length) * 1e3) / 1e3;
      let M = 0;
      for (const t of l) ((c[t] = y), (M += y));
      const p = t(h - M);
      return ((c[m] = t((c[m] ?? 0) + p)), c);
    };
    e.settlement = (o, n, a) => {
      const l = t(Math.max(0, o)),
        m = "percentage" === n ? l * (Math.max(0, Math.min(100, a)) / 100) : Math.max(0, a),
        s = t(Math.min(l, m));
      return { gross: l, commission: s, net: t(l - s) };
    };
    const n = (e.PAYMENT_METHODS = [
      { method: "knet", labelKey: "payKnet", emoji: "\ud83d\udcb3", online: !0 },
      { method: "apple_pay", labelKey: "payApplePay", emoji: "", online: !0 },
      { method: "google_pay", labelKey: "payGooglePay", emoji: "G", online: !0 },
      { method: "visa", labelKey: "payVisa", emoji: "\ud83d\udcb3", online: !0 },
      { method: "mastercard", labelKey: "payMastercard", emoji: "\ud83d\udcb3", online: !0 },
      { method: "wallet", labelKey: "payWallet", emoji: "\ud83d\udc5b", online: !0 },
      { method: "cash", labelKey: "payCash", emoji: "\ud83d\udcb5", online: !1 },
    ]);
    e.isOnlineMethod = (t) => n.find((o) => o.method === t)?.online ?? !1;
  },
  668,
  [],
);
