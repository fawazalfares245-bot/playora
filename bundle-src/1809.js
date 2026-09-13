__d(
  function (g, r, i, a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        return (
          (0, S.useFonts)({
            Anton: p.Anton_400Regular,
            SpaceMono: h.SpaceMono_400Regular,
            SpaceMonoBold: h.SpaceMono_700Bold,
          }),
          (0, k.jsx)(s.GestureHandlerRootView, {
            style: { flex: 1 },
            children: (0, k.jsx)(c.SafeAreaProvider, {
              children: (0, k.jsx)(j.ThemeProvider, {
                children: (0, k.jsx)(x.LocaleProvider, {
                  children: (0, k.jsxs)(l.AuthProvider, {
                    children: [(0, k.jsx)(o.StatusBar, { style: "auto" }), (0, k.jsx)(w, {})],
                  }),
                }),
              }),
            }),
          })
        );
      }));
    var n = r(d[0]),
      t = r(d[1]),
      o = r(d[2]),
      s = r(d[3]),
      c = r(d[4]),
      S = r(d[5]),
      p = r(d[6]),
      h = r(d[7]),
      l = r(d[8]),
      u = r(d[9]),
      x = r(d[10]),
      j = r(d[11]),
      k = r(d[12]);
    if (
      ((0, u.installWebAlert)(), "undefined" != typeof document && !document.getElementById("pl-focus-style"))
    ) {
      const n = document.createElement("style");
      ((n.id = "pl-focus-style"),
        (n.textContent =
          "\n    :focus-visible { outline: 2px solid var(--pl-accent, #CCFF00); outline-offset: 2px; border-radius: 4px; }\n    :focus:not(:focus-visible) { outline: none; }\n  "),
        document.head.appendChild(n));
    }
    const w = () => {
      const { session: o, loading: s } = (0, l.useAuth)(),
        c = (0, t.useSegments)(),
        S = (0, t.useRouter)();
      return (
        (0, n.useEffect)(() => {
          if (s) return;
          const n = "(auth)" === c[0],
            t = o?.user.id.startsWith("guest:") ?? !1;
          o || n ? o && !t && n && S.replace("/(tabs)") : S.replace("/(auth)/sign-in");
        }, [o, s, c, S]),
        (0, k.jsxs)(t.Stack, {
          screenOptions: { headerShown: !1 },
          children: [
            (0, k.jsx)(t.Stack.Screen, { name: "(auth)" }),
            (0, k.jsx)(t.Stack.Screen, { name: "(tabs)" }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "game/[id]",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "venue/[id]",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "notifications",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "chat/[gameId]",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "contact",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "map",
              options: { presentation: "fullScreenModal", headerShown: !1, animation: "fade" },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "privacy",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "preferences",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "organizer/index",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "organizer/apply",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "organizer/create",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "organizer/new",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "organizer/quick",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "squad/[gameId]",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "organizer/match/[id]",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "organizer/series/[id]",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "admin/organizers",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "admin/application/[id]",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "admin/players",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "join-code",
              options: { presentation: "card", headerShown: !1 },
            }),
            (0, k.jsx)(t.Stack.Screen, {
              name: "passport/[id]",
              options: { presentation: "card", headerShown: !1 },
            }),
          ],
        })
      );
    };
  },
  1809,
  [15, 20, 1810, 1681, 381, 1089, 1811, 1815, 630, 1822, 911, 617, 13],
);
