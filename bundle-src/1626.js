__d(
  function (g, r, i, a, m, e, _d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.formatRelative = void 0));
    var t = r(_d[0]);
    const n = (t) =>
        t.replace(/[0-9]/g, (t) => "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669"[+t]),
      o = (o) => ("ar" === (0, t.getLocale)() ? n(o) : o);
    // Every string here reads "ago", so this only ever formatted the past - but it clamped a negative
    // delta to zero instead of saying so, which turned every future timestamp into "Just now". A
    // deadline half an hour out and one three days out rendered identically. Format both directions
    // rather than flattening one of them: a caller that passes a deadline now gets a deadline back.
    e.formatRelative = (n) => {
      const u = Date.now() - new Date(n).getTime(),
        f = u < 0,
        s = Math.round(Math.abs(u) / 6e4);
      if (s < 1) return (0, t.t)("justNow");
      if (s < 60) return o((0, t.t)(f ? "minutesShortIn" : "minutesShort", { n: s }));
      const c = Math.round(s / 60);
      if (c < 24) return o((0, t.t)(f ? "hoursShortIn" : "hoursShort", { n: c }));
      const d = Math.round(c / 24);
      return o((0, t.t)(f ? "daysShortIn" : "daysShort", { n: d }));
    };
  },
  1626,
  [675],
);
