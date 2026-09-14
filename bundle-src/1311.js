__d(
  function (g, r, i, _a, m, e, _d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sportIcon =
        e.sportColor =
        e.formatScore =
        e.formatRatio =
        e.formatRating =
        e.formatPrice =
        e.formatNumber =
        e.formatHistoryDate =
        e.formatGameTime =
        e.formatDayLabel =
        e.formatCountParens =
        e.formatClock =
        e.formatAmount =
          void 0));
    var o = r(_d[0]),
      t = r(_d[1]),
      a = r(_d[2]);
    const n = (o) => (0, a.localizeNumerals)(o, "ar" === (0, t.getLocale)() ? "ar" : "en");
    e.formatNumber = (o) => n(String(o));
    e.formatScore = (o) => n(o);
    e.formatRatio = (o, t) => n(`${o}/${t}`);
    e.formatRating = (o) => n(o.toFixed(1));
    e.formatCountParens = (o) => n(`(${o})`);
    e.formatGameTime = (n) => {
      const f = new Date(n),
        l = "ar" === (0, t.getLocale)() ? "ar" : "en",
        c = (0, a.formatInZone)(n, l, { hour: "numeric", minute: "2-digit" });
      if ((0, o.isToday)(f)) return `${(0, t.t)("today")} \xb7 ${c}`;
      if ((0, o.isTomorrow)(f)) return `${(0, t.t)("tomorrow")} \xb7 ${c}`;
      return `${(0, a.formatInZone)(n, l, { weekday: "short", day: "numeric", month: "short" })} \xb7 ${c}`;
    };
    e.formatClock = (o) =>
      (0, a.formatInZone)(o, "ar" === (0, t.getLocale)() ? "ar" : "en", {
        hour: "numeric",
        minute: "2-digit",
      });
    e.formatDayLabel = (o) =>
      (0, a.formatInZone)(o, "ar" === (0, t.getLocale)() ? "ar" : "en", {
        weekday: "short",
        day: "numeric",
        month: "short",
      });
    e.formatHistoryDate = (o) =>
      (0, a.formatInZone)(o, "ar" === (0, t.getLocale)() ? "ar" : "en", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    e.formatAmount = (o) => (0, a.formatMoney)(o || 0, "ar" === (0, t.getLocale)() ? "ar" : "en");
    e.formatPrice = (o) =>
      o ? (0, a.formatMoney)(o, "ar" === (0, t.getLocale)() ? "ar" : "en") : (0, t.t)("free");
    e.sportIcon = { football: "football", padel: "tennisball", tennis: "tennisball" };
    e.sportColor = (o) => ("football" === o ? "#FF5A1F" : "padel" === o ? "#3F7DD6" : "#1FA974");
  },
  1311,
  [1312, 675, 912],
);
