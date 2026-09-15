__d(
  function (g, _r, i, a, m, e, _d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.tzOffsetLabel =
        e.setRegionSettings =
        e.localizeNumerals =
        e.getRegionSettings =
        e.formatMoney =
        e.formatInZone =
        e.easternDigitsEnabled =
        e.applyRegionDefaults =
        e.TIME_ZONES =
        e.REGIONS =
        e.DEFAULT_REGION =
        e.CURRENCIES =
          void 0));
    const n = (e.REGIONS = [
        {
          key: "KW",
          labelKey: "regionKW",
          flag: "\ud83c\uddf0\ud83c\uddfc",
          timeZone: "Asia/Kuwait",
          currency: "KWD",
          firstDayOfWeek: 6,
        },
        {
          key: "SA",
          labelKey: "regionSA",
          flag: "\ud83c\uddf8\ud83c\udde6",
          timeZone: "Asia/Riyadh",
          currency: "SAR",
          firstDayOfWeek: 0,
        },
        {
          key: "AE",
          labelKey: "regionAE",
          flag: "\ud83c\udde6\ud83c\uddea",
          timeZone: "Asia/Dubai",
          currency: "AED",
          firstDayOfWeek: 1,
        },
        {
          key: "QA",
          labelKey: "regionQA",
          flag: "\ud83c\uddf6\ud83c\udde6",
          timeZone: "Asia/Qatar",
          currency: "QAR",
          firstDayOfWeek: 6,
        },
        {
          key: "BH",
          labelKey: "regionBH",
          flag: "\ud83c\udde7\ud83c\udded",
          timeZone: "Asia/Bahrain",
          currency: "BHD",
          firstDayOfWeek: 6,
        },
        {
          key: "GB",
          labelKey: "regionGB",
          flag: "\ud83c\uddec\ud83c\udde7",
          timeZone: "Europe/London",
          currency: "GBP",
          firstDayOfWeek: 1,
        },
      ]),
      t =
        ((e.TIME_ZONES = [
          "Asia/Kuwait",
          "Asia/Riyadh",
          "Asia/Dubai",
          "Asia/Qatar",
          "Asia/Bahrain",
          "Europe/London",
          "UTC",
        ]),
        (e.CURRENCIES = {
          KWD: { symbolEn: "KWD", symbolAr: "\u062f.\u0643", decimals: 3 },
          SAR: { symbolEn: "SAR", symbolAr: "\u0631.\u0633", decimals: 2 },
          AED: { symbolEn: "AED", symbolAr: "\u062f.\u0625", decimals: 2 },
          QAR: { symbolEn: "QAR", symbolAr: "\u0631.\u0642", decimals: 2 },
          BHD: { symbolEn: "BHD", symbolAr: "\u062f.\u0628", decimals: 3 },
          GBP: { symbolEn: "\xa3", symbolAr: "\xa3", decimals: 2 },
          USD: { symbolEn: "$", symbolAr: "$", decimals: 2 },
        })),
      r = (e.DEFAULT_REGION = {
        region: "KW",
        timeZone: "Asia/Kuwait",
        currency: "KWD",
        // Every displayed time goes through formatInZone, so this is the one place the app's clock is
        // decided. The pickers write 20:00; a card reading "8:00 PM" beside one looks like a bug.
        hour12: !1,
        firstDayOfWeek: 6,
        numerals: "auto",
      });
    let o = Object.assign({}, r);
    e.getRegionSettings = () => o;
    // Currency is pinned. formatMoney below applies no exchange rate - it only swaps the symbol and
    // the decimal count - so any other value misstates the price of something still charged in KWD
    // fils, and the 2-decimal currencies round the fils digit away entirely. Both writers therefore
    // force it back, so a stored region carrying GBP from before this change cannot reintroduce it.
    e.setRegionSettings = (n) => ((o = Object.assign({}, o, n, { currency: "KWD" })), o);
    e.applyRegionDefaults = (t) => {
      const r = n.find((n) => n.key === t);
      return r
        ? ((o = Object.assign({}, o, {
            region: r.key,
            timeZone: r.timeZone,
            firstDayOfWeek: r.firstDayOfWeek,
            currency: "KWD",
          })),
          o)
        : o;
    };
    const s = "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669",
      l = (n) => n.replace(/[0-9]/g, (n) => s[+n]),
      y = (n) => n.replace(/[\u0660-\u0669]/g, (n) => String(s.indexOf(n))),
      c = (n) => {
        const t = o.numerals;
        return "eastern" === t || ("auto" === t && "ar" === n);
      };
    e.easternDigitsEnabled = c;
    const f = (n, t) => (c(t) ? l(n) : y(n));
    e.localizeNumerals = f;
    e.formatInZone = (n, t, r) => {
      const { timeZone: s, hour12: l } = o;
      try {
        const o = new Intl.DateTimeFormat(
          "ar" === t ? "ar" : "en-GB",
          Object.assign({ timeZone: s, hour12: l }, r),
        );
        return f(o.format(new Date(n)), t);
      } catch {
        return new Date(n).toLocaleString();
      }
    };
    e.tzOffsetLabel = (n) => {
      try {
        const t = new Intl.DateTimeFormat("en-GB", {
          timeZone: n,
          timeZoneName: "shortOffset",
        }).formatToParts(new Date());
        return t.find((n) => "timeZoneName" === n.type)?.value ?? "";
      } catch {
        return "";
      }
    };
    e.formatMoney = (n, r) => {
      const s = t[o.currency] ?? t.KWD,
        l = "ar" === r ? s.symbolAr : s.symbolEn;
      return `${f(n.toFixed(s.decimals), r)} ${l}`;
    };
  },
  912,
  [],
);
