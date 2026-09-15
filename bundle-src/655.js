__d(
  function (g, r, i, _a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.withdrawEligible =
        e.walletKindKey =
        e.velocityExceeded =
        e.txnDirection =
        e.transferPostings =
        e.toFils =
        e.postingsBalanced =
        e.planCombinedPayment =
        e.maskIdNumber =
        e.looksLikeCivilId =
        e.fromFils =
        e.acct =
        e.accountBalance =
        e.WALLET_LIMITS =
        e.WALLET_CURRENCY =
        e.HOUR_MS =
        e.DAY_MS =
        e.CREDIT_KINDS =
          void 0));
    e.WALLET_CURRENCY = "KWD";
    e.toFils = (t) => Math.round(1e3 * t);
    e.fromFils = (t) => t / 1e3;
    const t = (e.CREDIT_KINDS = new Set([
      "add_funds",
      "refund",
      "organizer_payout",
      "venue_payout",
      "reward",
      "promo_credit",
      "prize",
      "admin_credit",
    ]));
    e.acct = {
      available: (t) => `owner:${t}:available`,
      credits: (t) => `owner:${t}:credits`,
      pending: (t) => `owner:${t}:pending`,
      external: (t) => `external:${t}`,
      platform: (t) => `platform:${t}`,
    };
    e.postingsBalanced = (t) => 0 === t.reduce((t, a) => t + a.delta_fils, 0);
    e.transferPostings = (t, a, n) => [
      { account: t, delta_fils: -n },
      { account: a, delta_fils: n },
    ];
    e.accountBalance = (t, a) =>
      t.reduce((t, n) => t + n.filter((t) => t.account === a).reduce((t, a) => t + a.delta_fils, 0), 0);
    e.planCombinedPayment = (t, a, n) => {
      const l = Math.max(0, Math.round(t)),
        o = Math.min(l, Math.max(0, a)),
        s = Math.min(l - o, Math.max(0, n));
      return { credits_fils: o, wallet_fils: s, external_fils: l - o - s };
    };
    e.WALLET_LIMITS = {
      topup_min_fils: 1e3,
      topup_max_fils: 5e5,
      topups_per_day: 5,
      transfer_min_fils: 100,
      transfer_max_fils: 2e5,
      transfers_per_hour: 10,
      withdraw_min_fils: 5e3,
      requests_per_hour: 10,
    };
    e.velocityExceeded = (t, a, n, l = Date.now()) =>
      t.filter((t) => l - new Date(t).getTime() < a).length >= n;
    ((e.HOUR_MS = 36e5), (e.DAY_MS = 864e5));
    // Every approved organizer used to qualify regardless of earnings, but there is no code path
    // that writes the organizer_payout ledger kind - seat money never reaches the ledger at all -
    // so an organizer with no venue saw a Withdraw button over a zero balance with nothing
    // claimable behind it. Eligibility follows the money: a venue owner, or an admin.
    e.withdrawEligible = (t, a) => a || "admin" === t;
    e.maskIdNumber = (t) => `\u2026${t.replace(/\s/g, "").slice(-4)}`;
    e.looksLikeCivilId = (t) => /^\d{12}$/.test(t.replace(/\s/g, ""));
    e.walletKindKey = (t) => `walletKind_${t}`;
    e.txnDirection = (a, n) => (0 !== n ? (n > 0 ? "in" : "out") : t.has(a) ? "in" : "out");
  },
  655,
  [],
);
