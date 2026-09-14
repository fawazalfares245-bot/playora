__d(
  function (g, _r, _i, a, m, e, d) {
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Dock = void 0));
    var o = _r(d[1]),
      n = t(_r(d[2])),
      s = t(_r(d[3])),
      r = t(_r(d[4])),
      i = t(_r(d[5])),
      l = t(_r(d[6])),
      c = _r(d[7]),
      u = _r(d[8]),
      h = _r(d[9]),
      p = _r(d[10]),
      b = _r(d[11]),
      y = _r(d[12]),
      f = _r(d[13]),
      x = _r(d[14]),
      j = _r(d[15]),
      k = _r(d[16]),
      C = _r(d[17]);
    const I = {
      index: "home-outline",
      feed: "newspaper-outline",
      games: "football-outline",
      profile: "person-outline",
    };
    e.Dock = ({ state: t, descriptors: w, navigation: z }) => {
      const { colors: M } = (0, y.useTheme)(),
        { profile: S, user: v } = (0, p.useAuth)(),
        B = (0, h.useSafeAreaInsets)(),
        T = (0, u.useRouter)(),
        L = (0, j.useT)(),
        A = (0, f.useReducedMotion)(),
        [W, H] = (0, o.useState)(!1),
        [stale9, setStale9] = (0, o.useState)(!1),
        O = "organizer" === S?.role || "admin" === S?.role,
        P = !S || Date.now() - new Date(S.created_at).getTime() < 6048e5,
        D = (o, n, r) => {
          const u = t.index === r,
            h = w[o]?.options.title ?? n;
          return (0, C.jsxs)(
            s.default,
            {
              onPress: () => z.navigate(n),
              accessibilityRole: "button",
              accessibilityLabel: h,
              accessibilityState: { selected: u },
              style: R.item,
              children: [
                (0, C.jsx)(l.default, {
                  style: [R.iconWrap, u && { backgroundColor: M.accent }],
                  children: (0, C.jsx)(c.Ionicons, {
                    name: I[n] ?? "ellipse-outline",
                    size: 22,
                    color: u ? M.accentInk : M.textMuted,
                  }),
                }),
                P &&
                  (0, C.jsx)(i.default, {
                    style: [R.itemLabel, { color: u ? M.accentText : M.textMuted }],
                    numberOfLines: 1,
                    maxFontSizeMultiplier: 1.2,
                    children: h,
                  }),
              ],
            },
            o,
          );
        },
        F = (t) => {
          (H(!1), T.push(t));
        },
        _ = v?.id.startsWith("guest:") ? v.id.split(":")[1] : null;
      // The app is one big HTML file with no cache busting, so a phone can sit on an old shell
      // indefinitely and there is no way for the person holding it to tell. Ask the server what the
      // current build is; if it differs from the one running, offer a reload rather than hoping.
      (0, o.useEffect)(() => {
        if ("undefined" == typeof window || !window.fetch) return;
        const mine = globalThis.__PLAYORA_CONFIG__?.buildId;
        if (!mine || "dev" === mine) return;
        let alive = !0;
        const check = async () => {
          try {
            // no-store already bypasses the cache; a ?v= buster only risks a 404 on strict hosts.
            const r = await fetch(`${location.origin}/`, { cache: "no-store" });
            if (!r.ok) return;
            const m = /buildId:\s*"([^"]+)"/.exec((await r.text()).slice(0, 4000));
            alive && m && m[1] !== mine && setStale9(!0);
          } catch {}
        };
        check();
        const iv = setInterval(check, 3e5);
        return () => {
          ((alive = !1), clearInterval(iv));
        };
      }, []);
      return (0, C.jsxs)(l.default, {
        style: {
          paddingHorizontal: x.spacing.lg,
          paddingBottom: Math.max(B.bottom, x.spacing.sm),
          backgroundColor: M.bg,
        },
        children: [
          stale9 &&
            (0, C.jsxs)(s.default, {
              onPress: () => {
                try {
                  location.reload();
                } catch {}
              },
              accessibilityRole: "button",
              accessibilityLabel: L("updateAvailable"),
              style: [R.guestBar, { backgroundColor: M.accent }],
              children: [
                (0, C.jsx)(c.Ionicons, { name: "arrow-down-circle", size: 14, color: M.accentInk }),
                (0, C.jsx)(i.default, {
                  style: [x.typography.smallStrong, { color: M.accentInk, flex: 1 }],
                  numberOfLines: 2,
                  children: L("updateAvailable"),
                }),
              ],
            }),
          // XC (F-XC-5): when the demo flag is on, every screen says so. Seeded venues, the fixed
          // verification code and auto-approved organizers must never be mistaken for real data.
          !0 === globalThis.__PLAYORA_CONFIG__?.demo &&
            (0, C.jsxs)(l.default, {
              style: [R.guestBar, { backgroundColor: M.warning ?? M.surfaceAlt }],
              accessibilityLiveRegion: "polite",
              children: [
                (0, C.jsx)(c.Ionicons, {
                  name: "flask-outline",
                  size: 14,
                  color: M.warning ? "#131A03" : M.textMuted,
                }),
                (0, C.jsx)(i.default, {
                  style: [x.typography.smallStrong, { color: M.warning ? "#131A03" : M.textMuted, flex: 1 }],
                  // One line clipped this mid-word on a phone; the banner has to be readable to do its job.
                  numberOfLines: 2,
                  children: L("demoModeBanner"),
                }),
              ],
            }),
          // Only warn about being offline when a server is configured but unreachable; a purely
          // client-side build has nothing to be offline from.
          !!globalThis.__PLAYORA_CONFIG__?.backendUrl &&
            "mock" === (0, b.backendMode)() &&
            (0, C.jsx)(l.default, {
              style: [R.guestBar, { backgroundColor: M.surfaceAlt }],
              accessibilityLiveRegion: "polite",
              children: (0, C.jsx)(i.default, {
                style: [x.typography.smallStrong, { color: M.textMuted, flex: 1 }],
                numberOfLines: 1,
                children: L("offlineBanner"),
              }),
            }),
          _ &&
            (0, C.jsxs)(s.default, {
              onPress: () => T.replace({ pathname: "/(auth)/sign-up", params: { preferred: _ } }),
              accessibilityRole: "button",
              accessibilityLabel: `${L("guestBanner")} \u2014 ${L("signUp")}`,
              style: [R.guestBar, { backgroundColor: M.accent }],
              children: [
                (0, C.jsx)(i.default, {
                  style: [x.typography.smallStrong, { color: M.accentInk, flex: 1 }],
                  numberOfLines: 1,
                  children: L("guestBanner"),
                }),
                (0, C.jsx)(l.default, {
                  style: [R.guestCta, { backgroundColor: M.accentInk }],
                  children: (0, C.jsx)(i.default, {
                    style: [x.typography.smallStrong, { color: M.accent }],
                    children: L("signUp"),
                  }),
                }),
              ],
            }),
          (0, C.jsxs)(l.default, {
            style: [R.bar, { backgroundColor: M.surface, borderColor: M.border }],
            children: [
              t.routes.slice(0, 2).map((t, o) => D(t.key, t.name, o)),
              (0, C.jsx)(s.default, {
                onPress: () => H(!0),
                accessibilityRole: "button",
                accessibilityLabel: L("playTab"),
                style: [R.playBtn, { backgroundColor: M.accent, shadowColor: M.accent }],
                children: (0, C.jsx)(c.Ionicons, { name: "add", size: 32, color: "#131A03" }),
              }),
              t.routes.slice(2).map((t, o) => D(t.key, t.name, o + 2)),
            ],
          }),
          (0, C.jsx)(n.default, {
            visible: W,
            transparent: !0,
            animationType: (0, f.sheetAnimation)(A),
            onRequestClose: () => H(!1),
            children: (0, C.jsxs)(l.default, {
              style: { flex: 1, justifyContent: "flex-end" },
              children: [
                (0, C.jsx)(s.default, {
                  style: [r.default.absoluteFill, { backgroundColor: "rgba(0,0,0,0.55)" }],
                  onPress: () => H(!1),
                  accessibilityRole: "button",
                  accessibilityLabel: L("cancel"),
                }),
                (0, C.jsxs)(l.default, {
                  style: [
                    R.sheet,
                    { backgroundColor: M.surface, paddingBottom: Math.max(B.bottom, x.spacing.lg) },
                  ],
                  children: [
                    (0, C.jsx)(l.default, { style: [R.grabber, { backgroundColor: M.border }] }),
                    (0, C.jsx)(i.default, {
                      style: [x.typography.h2, { color: M.text, marginBottom: x.spacing.md }],
                      children: L("playTab"),
                    }),
                    (0, C.jsxs)(s.default, {
                      onPress: () => F("/discover"),
                      accessibilityRole: "button",
                      style: [R.sheetRow, { borderColor: M.border }],
                      children: [
                        (0, C.jsx)(l.default, {
                          style: [R.sheetIcon, { backgroundColor: M.accent }],
                          children: (0, C.jsx)(c.Ionicons, {
                            name: "search-outline",
                            size: 20,
                            color: M.accentInk,
                          }),
                        }),
                        (0, C.jsxs)(l.default, {
                          style: { flex: 1, marginHorizontal: x.spacing.md },
                          children: [
                            (0, C.jsx)(i.default, {
                              style: [x.typography.bodyStrong, { color: M.text }],
                              children: L("findAGame"),
                            }),
                            (0, C.jsx)(i.default, {
                              style: [x.typography.caption, { color: M.textMuted }],
                              children: L("findAGameSub"),
                            }),
                          ],
                        }),
                        (0, C.jsx)(c.Ionicons, {
                          name: (0, k.chevronForward)(),
                          size: 18,
                          color: M.textMuted,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(s.default, {
                      onPress: () => F(O ? "/booking/search" : "/organizer/apply"),
                      accessibilityRole: "button",
                      style: [R.sheetRow, { borderColor: M.border }],
                      children: [
                        (0, C.jsx)(l.default, {
                          style: [R.sheetIcon, { backgroundColor: M.accent }],
                          children: (0, C.jsx)(c.Ionicons, {
                            name: "tennisball-outline",
                            size: 20,
                            color: M.accentInk,
                          }),
                        }),
                        (0, C.jsxs)(l.default, {
                          style: { flex: 1, marginHorizontal: x.spacing.md },
                          children: [
                            (0, C.jsx)(i.default, {
                              style: [x.typography.bodyStrong, { color: M.text }],
                              children: L("bookACourt"),
                            }),
                            (0, C.jsx)(i.default, {
                              style: [x.typography.caption, { color: M.textMuted }],
                              children: L(O ? "bookableVenues" : "bookACourtNeedsOrganizer"),
                            }),
                          ],
                        }),
                        (0, C.jsx)(c.Ionicons, {
                          name: (0, k.chevronForward)(),
                          size: 18,
                          color: M.textMuted,
                        }),
                      ],
                    }),
                    (0, C.jsxs)(s.default, {
                      onPress: () => F(O ? "/organizer/quick" : "/organizer/apply"),
                      accessibilityRole: "button",
                      style: [R.sheetRow, { borderColor: M.border }],
                      children: [
                        (0, C.jsx)(l.default, {
                          style: [R.sheetIcon, { backgroundColor: M.accent }],
                          children: (0, C.jsx)(c.Ionicons, {
                            name: "megaphone-outline",
                            size: 20,
                            color: M.accentInk,
                          }),
                        }),
                        (0, C.jsxs)(l.default, {
                          style: { flex: 1, marginHorizontal: x.spacing.md },
                          children: [
                            (0, C.jsx)(i.default, {
                              style: [x.typography.bodyStrong, { color: M.text }],
                              children: L("hostMatch"),
                            }),
                            (0, C.jsx)(i.default, {
                              style: [x.typography.caption, { color: M.textMuted }],
                              children: L(O ? "hostMatchSub" : "becomeOrganizerHint"),
                            }),
                          ],
                        }),
                        (0, C.jsx)(c.Ionicons, {
                          name: (0, k.chevronForward)(),
                          size: 18,
                          color: M.textMuted,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    };
    const R = r.default.create({
      guestBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: x.spacing.sm,
        borderRadius: x.radius.pill,
        paddingVertical: 8,
        paddingHorizontal: x.spacing.md,
        marginBottom: x.spacing.sm,
      },
      guestCta: { borderRadius: x.radius.pill, paddingVertical: 4, paddingHorizontal: x.spacing.md },
      itemLabel: { fontSize: 9, fontWeight: "700", marginTop: 2, maxWidth: 58, textAlign: "center" },
      bar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        borderRadius: 32,
        borderWidth: r.default.hairlineWidth,
        paddingHorizontal: x.spacing.lg,
      },
      item: { width: 48, alignItems: "center" },
      iconWrap: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
      playBtn: {
        width: 58,
        height: 58,
        borderRadius: 29,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -26,
        shadowOpacity: 0.55,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
      },
      sheet: { borderTopLeftRadius: x.radius.xl, borderTopRightRadius: x.radius.xl, padding: x.spacing.lg },
      grabber: { alignSelf: "center", width: 40, height: 4, borderRadius: 2, marginBottom: x.spacing.md },
      sheetRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: x.spacing.md,
        borderTopWidth: r.default.hairlineWidth,
      },
      sheetIcon: { width: 40, height: 40, borderRadius: 12, alignItems: "center", justifyContent: "center" },
    });
  },
  1620,
  [33, 15, 467, 369, 158, 146, 273, 1086, 20, 381, 630, 673, 615, 1621, 616, 675, 1171, 13],
);
