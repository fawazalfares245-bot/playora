__d(
  function (g, r, _i, a, m, e, d) {
    var o = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Select = function ({ label: o, placeholder: x, value: y, options: j, onChange: v, error: T }) {
        const { colors: C } = (0, p.useTheme)(),
          [k, W] = (0, t.useState)(!1),
          H = j.find((o) => o.value === y) ?? null;
        return (0, b.jsxs)(c.default, {
          style: { marginBottom: h.spacing.md },
          children: [
            o &&
              (0, b.jsx)(s.default, {
                style: [h.typography.smallStrong, { color: C.textMuted, marginBottom: h.spacing.xs }],
                children: o,
              }),
            (0, b.jsxs)(l.default, {
              onPress: () => W((o) => !o),
              accessibilityRole: "button",
              accessibilityLabel: o ?? x,
              style: [
                f.field,
                { backgroundColor: C.surface, borderColor: T ? C.danger : k ? C.accent : C.border },
              ],
              children: [
                (0, b.jsx)(s.default, {
                  style: [h.typography.body, { color: H ? C.text : C.textMuted, flex: 1 }],
                  children: H ? H.label : x,
                }),
                (0, b.jsx)(u.Ionicons, {
                  name: k ? "chevron-up" : "chevron-down",
                  size: 18,
                  color: C.textMuted,
                }),
              ],
            }),
            k &&
              (0, b.jsx)(n.default, {
                style: [f.menu, { backgroundColor: C.surface, borderColor: C.border }],
                nestedScrollEnabled: !0,
                keyboardShouldPersistTaps: "handled",
                children: j.map((o, t) => {
                  const n = o.value === y;
                  return (0, b.jsxs)(
                    l.default,
                    {
                      onPress: () => {
                        (v(o.value), W(!1));
                      },
                      accessibilityRole: "button",
                      style: ({ pressed: o }) => [
                        f.option,
                        {
                          borderTopColor: C.border,
                          borderTopWidth: 0 === t ? 0 : i.default.hairlineWidth,
                          backgroundColor: o ? C.surfaceAlt : "transparent",
                        },
                      ],
                      children: [
                        (0, b.jsx)(s.default, {
                          style: [h.typography.body, { color: n ? C.accentText : C.text, flex: 1 }],
                          children: o.label,
                        }),
                        n && (0, b.jsx)(u.Ionicons, { name: "checkmark", size: 18, color: C.accentText }),
                      ],
                    },
                    o.value,
                  );
                }),
              }),
            T &&
              (0, b.jsx)(s.default, {
                style: [h.typography.small, { color: C.danger, marginTop: h.spacing.xs }],
                children: T,
              }),
          ],
        });
      }));
    var t = r(d[1]),
      l = o(r(d[2])),
      n = o(r(d[3])),
      i = o(r(d[4])),
      s = o(r(d[5])),
      c = o(r(d[6])),
      u = r(d[7]),
      p = r(d[8]),
      h = r(d[9]),
      b = r(d[10]);
    const f = i.default.create({
      field: {
        minHeight: 48,
        borderRadius: h.radius.md,
        borderWidth: i.default.hairlineWidth,
        paddingHorizontal: h.spacing.lg,
        paddingVertical: h.spacing.md,
        flexDirection: "row",
        alignItems: "center",
      },
      menu: {
        marginTop: h.spacing.xs,
        borderRadius: h.radius.md,
        borderWidth: i.default.hairlineWidth,
        overflow: "hidden",
        maxHeight: 260,
      },
      option: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: h.spacing.lg,
        paddingVertical: h.spacing.md,
        minHeight: 48,
      },
    });
  },
  1310,
  [33, 15, 369, 281, 158, 146, 273, 1086, 615, 616, 13],
);
