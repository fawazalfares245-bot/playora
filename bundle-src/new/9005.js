__d(
  function (g, _r, _i, a, m, e, d) {
    // ---------------------------------------------------------------------------------------------
    // /kids — a live specimen screen for the Kid UI Kit (module 9004).
    //
    // It exists so the primitives can be felt and regression-tested, not to replace any real screen.
    // It renders 2,000 cards on purpose: if virtualisation regresses, this screen is where it shows.
    // ---------------------------------------------------------------------------------------------
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function () {
        const { colors: C } = (0, Th.useTheme)(),
          nav = (0, R.useRouter)(),
          kit = K.useKidSound(),
          [idx, setIdx] = (0, n.useState)(0),
          [liked, setLiked] = (0, n.useState)(() => new Set());

        // A large synthetic set. Built once; the list never holds more than a screenful of views.
        const data = (0, n.useMemo)(
          () =>
            Array.from({ length: 2e3 }, (_x, i) => ({
              id: `c${i}`,
              hue: (i * 47) % 360,
              icon: ICONS[i % ICONS.length],
              img: null,
            })),
          [],
        );

        const toggleLike = (0, n.useCallback)(
          (id) => {
            (setLiked((prev) => {
              const next = new Set(prev);
              return (next.has(id) ? next.delete(id) : next.add(id), next);
            }),
              kit.play("chime"));
          },
          [kit],
        );

        const renderCard = (0, n.useCallback)(
          ({ item: item }) =>
            (0, J.jsxs)(V.default, {
              style: {
                flex: 1,
                borderRadius: b.radius.xl,
                backgroundColor: C.surface,
                borderWidth: 1,
                borderColor: C.border,
                overflow: "hidden",
              },
              children: [
                // A flat colour block stands in for artwork so the specimen needs no network at all.
                (0, J.jsx)(V.default, {
                  style: {
                    height: CARD_H - 96,
                    backgroundColor: `hsl(${item.hue} 70% 62%)`,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: (0, J.jsx)(Ico.Ionicons, { name: item.icon, size: 84, color: "#11140a" }),
                }),
                (0, J.jsxs)(V.default, {
                  style: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: b.spacing.md,
                  },
                  children: [
                    (0, J.jsx)(K.BigButton, {
                      icon: liked.has(item.id) ? "heart" : "heart-outline",
                      label: "Like",
                      size: 64,
                      round: !0,
                      color: liked.has(item.id) ? (C.danger ?? "#E5484D") : C.surfaceAlt,
                      inkColor: liked.has(item.id) ? "#fff" : C.text,
                      onPress: () => toggleLike(item.id),
                    }),
                    (0, J.jsx)(K.BigButton, {
                      icon: "play",
                      label: "Play",
                      size: 64,
                      round: !0,
                      onPress: () => kit.play("pop"),
                    }),
                    (0, J.jsx)(K.BigButton, {
                      icon: "star",
                      label: "Favourite",
                      size: 64,
                      round: !0,
                      color: C.surfaceAlt,
                      inkColor: C.text,
                      onPress: () => kit.play("chime"),
                    }),
                  ],
                }),
              ],
            }),
          [C, liked, toggleLike, kit],
        );

        return (0, J.jsxs)(SA.SafeAreaView, {
          edges: ["top"],
          style: { flex: 1, backgroundColor: C.bg },
          children: [
            (0, J.jsxs)(V.default, {
              style: {
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: b.spacing.lg,
                paddingVertical: b.spacing.sm,
                gap: b.spacing.md,
              },
              children: [
                (0, J.jsx)(K.BigButton, {
                  icon: "arrow-back",
                  label: "Back",
                  size: 56,
                  round: !0,
                  color: C.surfaceAlt,
                  inkColor: C.text,
                  onPress: () => nav.back(),
                }),
                (0, J.jsx)(V.default, {
                  style: { flex: 1 },
                  children: (0, J.jsx)(K.ProgressDots, { count: 9, index: idx % 9 }),
                }),
                (0, J.jsx)(K.BigButton, {
                  icon: kit.muted ? "volume-mute" : "volume-high",
                  label: kit.muted ? "Sound off" : "Sound on",
                  size: 56,
                  round: !0,
                  color: C.surfaceAlt,
                  inkColor: C.text,
                  onPress: () => kit.setMuted(!kit.muted),
                }),
              ],
            }),
            (0, J.jsx)(K.KidScroll, {
              data: data,
              itemHeight: CARD_H,
              keyExtractor: keyOf,
              renderItem: renderCard,
              onIndexChange: setIdx,
              tickOnSnap: !0,
            }),
            // The whole tour: a hand that swipes up over the list until the child swipes, then never again.
            (0, J.jsx)(K.CoachHand, {
              gesture: "swipe-up",
              storageKey: "playora.kid.tour.list.v1",
              loops: 3,
            }),
          ],
        });
      }));
    var n = _r(d[1]),
      V = t(_r(d[2])),
      Tx = t(_r(d[3])),
      S = t(_r(d[4])),
      SA = _r(d[5]),
      R = _r(d[6]),
      Th = _r(d[7]),
      b = _r(d[8]),
      Ico = _r(d[9]),
      J = _r(d[10]),
      K = _r(d[11]);
    // Fixed card height is what makes getItemLayout possible, which is what makes 2,000 rows free.
    const CARD_H = 300;
    const keyOf = (x) => x.id;
    const ICONS = [
      "football",
      "tennisball",
      "basketball",
      "bicycle",
      "rocket",
      "planet",
      "musical-notes",
      "ice-cream",
      "paw",
      "balloon",
    ];
  },
  9005,
  [33, 15, 273, 146, 158, 381, 20, 615, 616, 1086, 13, 9004],
);
