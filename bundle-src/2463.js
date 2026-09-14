__d(
  function (g, r, i, a, _m, e, _d) {
    var t = r(_d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TimePicker = void 0));
    var o = r(_d[1]),
      l = t(r(_d[2])),
      s = t(r(_d[3])),
      n = t(r(_d[4])),
      c = t(r(_d[5])),
      d = r(_d[6]),
      u = r(_d[7]),
      p = r(_d[8]),
      h = r(_d[9]),
      m = r(_d[10]),
      f = r(_d[11]),
      b = r(_d[12]),
      x = r(_d[13]),
      sv9 = t(r(_d[14]));
    // The picker speaks minutes-since-midnight to its callers; only the UI changed. Whole hours only:
    // the app is a 24-hour clock now, and a quarter-hour grid plus an AM/PM toggle was three rows of
    // chips for something a single collapsed list does in one.
    // `s` (StyleSheet) is shadowed by the `value` prop inside the component, so keep what is needed here.
    const hair9 = s.default.hairlineWidth,
      HOURS9 = Array.from({ length: 24 }, (t, o) => o),
      hhmm9 = (t) =>
        (0, b.formatNumber)(
          `${String(Math.floor(t / 60) % 24).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`,
        );
    e.TimePicker = ({ label: t, value: s, onChange: C, placeholder: R }) => {
      const { colors: W } = (0, h.useTheme)(),
        [S, z] = (0, o.useState)(!1),
        // A value that did not come from this picker (a seeded game at 21:30, say) still has to read
        // correctly, so the field renders the real value and only the matching hour is ticked.
        H = null == s ? null : Math.floor(s / 60) % 24;
      return (0, x.jsxs)(c.default, {
        style: { marginBottom: m.spacing.md },
        children: [
          (0, x.jsx)(n.default, {
            style: [m.typography.smallStrong, { color: W.textMuted, marginBottom: m.spacing.xs }],
            children: t,
          }),
          (0, x.jsxs)(l.default, {
            onPress: () => z((t) => !t),
            accessibilityRole: "button",
            accessibilityLabel: t,
            style: [P.field, { backgroundColor: W.surface, borderColor: S ? W.accent : W.border }],
            children: [
              (0, x.jsx)(d.Ionicons, { name: "time-outline", size: 18, color: W.textMuted }),
              (0, x.jsx)(n.default, {
                style: [
                  m.typography.body,
                  { color: null == s ? W.textMuted : W.text, flex: 1, marginHorizontal: m.spacing.sm },
                ],
                children: null == s ? (R ?? "--:--") : hhmm9(s),
              }),
              (0, x.jsx)(d.Ionicons, {
                name: S ? "chevron-up" : "chevron-down",
                size: 18,
                color: W.textMuted,
              }),
            ],
          }),
          S &&
            (0, x.jsx)(sv9.default, {
              style: [P.menu, { backgroundColor: W.surface, borderColor: W.border }],
              nestedScrollEnabled: !0,
              keyboardShouldPersistTaps: "handled",
              children: HOURS9.map((t, o) => {
                const b = t === H;
                return (0, x.jsxs)(
                  l.default,
                  {
                    onPress: () => {
                      (C(60 * t), z(!1));
                    },
                    accessibilityRole: "button",
                    accessibilityState: { selected: b },
                    style: ({ pressed: t }) => [
                      P.option,
                      {
                        borderTopColor: W.border,
                        borderTopWidth: 0 === o ? 0 : hair9,
                        backgroundColor: t ? W.surfaceAlt : "transparent",
                      },
                    ],
                    children: [
                      (0, x.jsx)(n.default, {
                        style: [m.typography.body, { color: b ? W.accentText : W.text, flex: 1 }],
                        children: hhmm9(60 * t),
                      }),
                      b && (0, x.jsx)(d.Ionicons, { name: "checkmark", size: 18, color: W.accentText }),
                    ],
                  },
                  t,
                );
              }),
            }),
        ],
      });
    };
    const P = s.default.create({
        field: {
          minHeight: 48,
          borderRadius: m.radius.md,
          borderWidth: s.default.hairlineWidth,
          paddingHorizontal: m.spacing.lg,
          flexDirection: "row",
          alignItems: "center",
        },
        menu: {
          marginTop: m.spacing.xs,
          borderRadius: m.radius.md,
          borderWidth: s.default.hairlineWidth,
          overflow: "hidden",
          maxHeight: 260,
        },
        option: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: m.spacing.lg,
          paddingVertical: m.spacing.md,
          minHeight: 48,
        },
      });
  },
  2463,
  [33, 15, 369, 158, 146, 273, 1086, 1312, 1848, 615, 616, 675, 1311, 13, 281],
);
