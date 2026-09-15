__d(
  function (g, _r, _i, _a, m, e, _d) {
    var t = _r(_d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { colors: t } = (0, h.useTheme)(),
          r = (0, c.useRouter)(),
          S = (0, b.useT)(),
          { locale: _, setLocale: L, region: E, updateRegion: I, chooseRegion: O } = (0, u.useLocale)(),
          T = new Date(Date.now() + 1296e5).toISOString();
        return (0, j.jsxs)(i.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: t.bg },
          children: [
            (0, j.jsxs)(s.default, {
              style: k.header,
              children: [
                (0, j.jsx)(l.default, {
                  onPress: () => r.back(),
                  accessibilityRole: "button",
                  accessibilityLabel: S("back"),
                  style: [k.iconBtn, { backgroundColor: t.surface, borderColor: t.border }],
                  children: (0, j.jsx)(n.Ionicons, { name: (0, x.chevronBack)(), size: 22, color: t.text }),
                }),
                (0, j.jsx)(a.default, {
                  style: [y.typography.h2, { color: t.text, flex: 1, marginHorizontal: y.spacing.md }],
                  children: S("regionTitle"),
                }),
              ],
            }),
            (0, j.jsxs)(o.default, {
              contentContainerStyle: { padding: y.spacing.lg, paddingBottom: y.spacing.xxxl },
              children: [
                (0, j.jsxs)(d.Card, {
                  style: { marginBottom: y.spacing.lg },
                  children: [
                    (0, j.jsx)(a.default, {
                      style: [y.typography.caption, { color: t.textMuted }],
                      children: S("previewLabel"),
                    }),
                    (0, j.jsx)(a.default, {
                      style: [y.typography.h3, { color: t.text, marginTop: 2 }],
                      children: (0, p.formatGameTime)(T),
                    }),
                    (0, j.jsx)(a.default, {
                      style: [y.typography.body, { color: t.accentText }],
                      children: (0, p.formatPrice)(12),
                    }),
                    (0, j.jsxs)(a.default, {
                      style: [y.typography.caption, { color: t.textMuted, marginTop: 4 }],
                      children: [E.timeZone, " \xb7 ", (0, f.tzOffsetLabel)(E.timeZone)],
                    }),
                  ],
                }),
                (0, j.jsxs)(C, {
                  title: S("language"),
                  colors: t,
                  children: [
                    (0, j.jsx)(P, {
                      a: { label: "English", active: "en" === _, onPress: () => L("en") },
                      b: {
                        label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                        active: "ar" === _,
                        onPress: () => L("ar"),
                      },
                      colors: t,
                    }),
                    (0, j.jsx)(a.default, {
                      style: [y.typography.caption, { color: t.textMuted, marginTop: y.spacing.xs }],
                      children: S("rtlReloadNote"),
                    }),
                  ],
                }),
                (0, j.jsx)(C, {
                  title: S("regionLabel"),
                  colors: t,
                  children: (0, j.jsx)(s.default, {
                    style: k.wrap,
                    children: f.REGIONS.map((l) =>
                      (0, j.jsx)(
                        R,
                        {
                          label: `${l.flag} ${S(l.labelKey)}`,
                          active: E.region === l.key,
                          onPress: () => O(l.key),
                          colors: t,
                        },
                        l.key,
                      ),
                    ),
                  }),
                }),
                (0, j.jsx)(C, {
                  title: S("timeZoneLabel"),
                  colors: t,
                  children: (0, j.jsx)(s.default, {
                    style: k.wrap,
                    children: f.TIME_ZONES.map((l) =>
                      (0, j.jsx)(
                        R,
                        {
                          label: `${l.split("/").pop()} ${(0, f.tzOffsetLabel)(l)}`,
                          active: E.timeZone === l,
                          onPress: () => I({ timeZone: l }),
                          colors: t,
                        },
                        l,
                      ),
                    ),
                  }),
                }),
                // The currency picker is gone. formatMoney only swapped the symbol and the decimal
                // count - there is no exchange rate anywhere in the bundle - so choosing GBP showed a
                // 25 KWD court as 25 GBP while still charging 25 KWD, and the 2-decimal currencies
                // rounded away the fils digit the wallet ledger is denominated in. Prices are KWD.
                // Bringing this back needs a rate source and a settlement policy first.
                (0, j.jsx)(C, {
                  title: S("timeFormatLabel"),
                  colors: t,
                  children: (0, j.jsx)(P, {
                    a: { label: S("clock12"), active: E.hour12, onPress: () => I({ hour12: !0 }) },
                    b: { label: S("clock24"), active: !E.hour12, onPress: () => I({ hour12: !1 }) },
                    colors: t,
                  }),
                }),
                (0, j.jsx)(C, {
                  title: S("firstDayLabel"),
                  colors: t,
                  children: (0, j.jsx)(s.default, {
                    style: k.wrap,
                    children: [6, 0, 1].map((l) =>
                      (0, j.jsx)(
                        R,
                        {
                          label: S(v[l]),
                          active: E.firstDayOfWeek === l,
                          onPress: () => I({ firstDayOfWeek: l }),
                          colors: t,
                        },
                        l,
                      ),
                    ),
                  }),
                }),
                (0, j.jsx)(C, {
                  title: S("numeralsLabel"),
                  colors: t,
                  children: (0, j.jsx)(s.default, {
                    style: k.wrap,
                    children: w.map((l) =>
                      (0, j.jsx)(
                        R,
                        {
                          label: S(`numerals_${l}`),
                          active: E.numerals === l,
                          onPress: () => I({ numerals: l }),
                          colors: t,
                        },
                        l,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      }));
    var l = t(_r(_d[1])),
      o = t(_r(_d[2])),
      r = t(_r(_d[3])),
      a = t(_r(_d[4])),
      s = t(_r(_d[5])),
      i = _r(_d[6]),
      n = _r(_d[7]),
      c = _r(_d[8]),
      d = _r(_d[9]),
      u = _r(_d[10]),
      h = _r(_d[11]),
      y = _r(_d[12]),
      f = _r(_d[13]),
      p = _r(_d[14]),
      b = _r(_d[15]),
      x = _r(_d[16]),
      j = _r(_d[17]);
    const w = ["auto", "western", "eastern"],
      v = ["dow_0", "dow_1", "dow_2", "dow_3", "dow_4", "dow_5", "dow_6"];
    const C = ({ title: t, colors: l, children: o }) =>
        (0, j.jsxs)(s.default, {
          style: { marginBottom: y.spacing.lg },
          children: [
            (0, j.jsx)(a.default, {
              style: [y.typography.smallStrong, { color: l.textMuted, marginBottom: y.spacing.sm }],
              children: t,
            }),
            o,
          ],
        }),
      R = ({ label: t, active: o, onPress: s, colors: i }) =>
        (0, j.jsx)(l.default, {
          onPress: s,
          accessibilityRole: "button",
          accessibilityState: { selected: o },
          style: {
            minHeight: 38,
            paddingHorizontal: y.spacing.md,
            borderRadius: 999,
            borderWidth: r.default.hairlineWidth,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: o ? i.accent : i.surface,
            borderColor: o ? i.accent : i.border,
          },
          children: (0, j.jsx)(a.default, {
            style: [y.typography.smallStrong, { color: o ? "#fff" : i.text }],
            children: t,
          }),
        }),
      P = ({ a: t, b: o, colors: r }) =>
        (0, j.jsx)(s.default, {
          style: [k.toggle, { borderColor: r.border }],
          children: [t, o].map((t, o) =>
            (0, j.jsx)(
              l.default,
              {
                onPress: t.onPress,
                accessibilityRole: "button",
                accessibilityState: { selected: t.active },
                style: [k.toggleHalf, { backgroundColor: t.active ? r.accent : "transparent" }],
                children: (0, j.jsx)(a.default, {
                  style: [y.typography.bodyStrong, { color: t.active ? "#fff" : r.text }],
                  children: t.label,
                }),
              },
              o,
            ),
          ),
        }),
      k = r.default.create({
        header: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: y.spacing.lg,
          paddingVertical: y.spacing.md,
        },
        iconBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: r.default.hairlineWidth,
        },
        wrap: { flexDirection: "row", flexWrap: "wrap", gap: y.spacing.sm },
        toggle: {
          flexDirection: "row",
          borderRadius: y.radius.md,
          borderWidth: r.default.hairlineWidth,
          overflow: "hidden",
        },
        toggleHalf: { flex: 1, minHeight: 44, alignItems: "center", justifyContent: "center" },
      });
  },
  2485,
  [33, 369, 281, 158, 146, 273, 381, 1086, 20, 1623, 911, 615, 616, 912, 1311, 675, 1171, 13],
);
