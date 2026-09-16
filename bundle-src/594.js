__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    var t = r(d[0]),
      n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Unmatched = void 0));
    const o = r(d[1]),
      l = n(r(d[2])),
      s = r(d[3]),
      c = r(d[4]),
      u = r(d[5]),
      h = r(d[6]),
      f = r(d[7]),
      x = l.default.useLayoutEffect;
    function p() {
      // The 404 illustration resolves to /assets/node_modules/expo-router/assets/unmatched...png, a
      // path that does not exist in this repo, and the CSP's img-src blocks same-origin images anyway.
      // Every unmatched route therefore logged a console error for a picture nobody ever saw. It is
      // decoration on an error page; drop it rather than inline another copy of the bitmap.
      return null;
    }
    e.Unmatched = function () {
      const [n, b] = l.default.useState(!1),
        j = (0, c.useRouter)(),
        k = (0, h.useNavigation)(),
        P = (0, c.usePathname)(),
        T = (0, o.createURL)(P);
      return (
        l.default.useEffect(() => {
          b(!0);
        }, []),
        x(() => {
          k.setOptions({ title: "Not Found" });
        }, [k]),
        t.jsxs(s.View, {
          style: y.container,
          children: [
            t.jsx(p, {}),
            t.jsx(s.Text, { role: "heading", "aria-level": 1, style: y.title, children: "Unmatched Route" }),
            t.jsx(s.Text, {
              role: "heading",
              "aria-level": 2,
              style: [y.subtitle, y.secondaryText],
              children: "Page could not be found.",
            }),
            n
              ? t.jsx(
                  u.Link,
                  Object.assign({ href: P, replace: !0 }, s.Platform.select({ native: { asChild: !0 } }), {
                    children: t.jsx(f.Pressable, {
                      children: ({ hovered: n, pressed: o }) =>
                        t.jsx(s.Text, {
                          style: [
                            y.pageLink,
                            y.secondaryText,
                            s.Platform.select({ web: { transitionDuration: "200ms", opacity: 1 } }),
                            n && { opacity: 0.8, textDecorationLine: "underline" },
                            o && { opacity: 0.8 },
                          ],
                          children: T,
                        }),
                    }),
                  }),
                )
              : t.jsx(s.View, { style: [y.pageLink, y.placeholder] }),
            t.jsxs(s.View, {
              style: y.linkContainer,
              children: [
                t.jsx(f.Pressable, {
                  children: ({ hovered: n, pressed: o }) =>
                    t.jsx(s.Text, {
                      onPress: () => {
                        j.canGoBack() ? j.back() : j.replace("/");
                      },
                      style: [
                        y.link,
                        s.Platform.select({ web: { transitionDuration: "200ms", opacity: 1 } }),
                        n && { opacity: 0.8, textDecorationLine: "underline" },
                        o && { opacity: 0.8 },
                      ],
                      children: "Go back",
                    }),
                }),
                // The Sitemap link is gone with the sitemap itself - it published the whole route
                // table, every admin screen included, to anyone who typed the URL.
              ],
            }),
          ],
        })
      );
    };
    const y = s.StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "black",
        padding: 24,
        paddingBottom: 64,
        alignItems: "center",
        justifyContent: "center",
      },
      image: { width: 270, height: 168, resizeMode: "contain", marginBottom: 28 },
      title: Object.assign(
        {},
        s.Platform.select({
          web: { fontSize: 64, lineHeight: 64 },
          default: { fontSize: 56, lineHeight: 56 },
        }),
        { color: "#fff", fontWeight: "800", textAlign: "center" },
      ),
      subtitle: { fontSize: 34, marginTop: 4, marginBottom: 12, fontWeight: "200", textAlign: "center" },
      pageLink: { minHeight: 20 },
      secondaryText: { color: "#9ba1a6" },
      placeholder: { backgroundColor: "#9ba1a644", minWidth: 180, borderRadius: 5 },
      linkContainer: { marginTop: 28, flexDirection: "row", gap: 12 },
      link: { fontSize: 20, textAlign: "center", color: "#52a9ff" },
      linkSeparator: { fontSize: 20 },
    });
  },
  594,
  [13, 549, 15, 439, 580, 578, 539, 576, 595],
);
