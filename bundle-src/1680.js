__d(
  function (_g, _r, _i, a, m, _e, d) {
    var e = _r(d[0]);
    (Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.VenueMap = void 0));
    var t = _r(d[1]),
      n = e(_r(d[2])),
      l = e(_r(d[3])),
      o = e(_r(d[4])),
      s = e(_r(d[5])),
      i = _r(d[6]),
      r = _r(d[7]),
      u = S(_r(d[8])),
      c = _r(d[9]),
      h = _r(d[10]),
      f = S(_r(d[11])),
      p = _r(d[12]),
      g = _r(d[13]),
      x = _r(d[14]),
      v = _r(d[15]),
      y = _r(d[16]),
      b = _r(d[17]),
      _ = _r(d[18]),
      w = _r(d[19]),
      j = _r(d[20]),
      M = _r(d[21]);
    function S(e, t) {
      if ("function" == typeof WeakMap)
        var n = new WeakMap(),
          l = new WeakMap();
      return (S = function (e, t) {
        if (!t && e && e.__esModule) return e;
        var o,
          s,
          i = { __proto__: null, default: e };
        if (null === e || ("object" != typeof e && "function" != typeof e)) return i;
        if ((o = t ? l : n)) {
          if (o.has(e)) return o.get(e);
          o.set(e, i);
        }
        for (const t in e)
          "default" !== t &&
            {}.hasOwnProperty.call(e, t) &&
            ((s = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (s.get || s.set)
              ? o(i, t, s)
              : (i[t] = e[t]));
        return i;
      })(e, t);
    }
    const T = { latMin: 29.1, latMax: 29.42, lngMin: 47.6, lngMax: 48.2 },
      C = 11,
      I = { code: "function clamp_VenueMapTsx1(v,min,max){return Math.min(Math.max(v,min),max);}" },
      P = (function () {
        const e = function (e, t, n) {
          return Math.min(Math.max(e, t), n);
        };
        return ((e.__closure = {}), (e.__workletHash = 7948278275838), (e.__initData = I), e);
      })(),
      L = {
        code: "function VenueMapTsx2(e){const{tx,savedTx,ty,savedTy}=this.__closure;tx.value=savedTx.value+e.translationX;ty.value=savedTy.value+e.translationY;}",
      },
      k = {
        code: "function VenueMapTsx3(){const{savedTx,tx,savedTy,ty}=this.__closure;savedTx.value=tx.value;savedTy.value=ty.value;}",
      },
      E = {
        code: "function VenueMapTsx4(e){const{scale,clamp,savedScale,MIN_SCALE,MAX_SCALE}=this.__closure;scale.value=clamp(savedScale.value*e.scale,MIN_SCALE,MAX_SCALE);}",
      },
      V = {
        code: "function VenueMapTsx5(){const{savedScale,scale,runOnJS,setJsScale}=this.__closure;savedScale.value=scale.value;runOnJS(setJsScale)(scale.value);}",
      },
      R = {
        code: "function VenueMapTsx6(){const{tx,ty,scale}=this.__closure;return{transform:[{translateX:tx.value},{translateY:ty.value},{scale:scale.value}]};}",
      };
    _e.VenueMap = ({ venues: e, focusVenueId: S, onExpand: I, games: A }) => {
      const { colors: z, isDark: W } = (0, x.useTheme)(),
        X = (0, v.useT)(),
        H = (0, h.useRouter)(),
        [Y, B] = (0, t.useState)({ w: 0, h: 0 }),
        [J, N] = (0, t.useState)(S ?? null),
        [$, G] = (0, t.useState)(1),
        [Z, U] = (0, t.useState)(!1),
        F = (0, t.useRef)(!1),
        q = (0, t.useMemo)(() => (0, w.tileGrid)(T, C), []),
        K = (0, t.useMemo)(() => {
          const t = S ? e.find((e) => e.id === S) : null;
          if (t) return { lat: t.lat, lng: t.lng };
          if (e.length) {
            return {
              lat: e.reduce((e, t) => e + t.lat, 0) / e.length,
              lng: e.reduce((e, t) => e + t.lng, 0) / e.length,
            };
          }
          return { lat: (T.latMin + T.latMax) / 2, lng: (T.lngMin + T.lngMax) / 2 };
        }, [e, S]),
        Q = (0, u.useSharedValue)(1),
        ee = (0, u.useSharedValue)(1),
        te = (0, u.useSharedValue)(0),
        ne = (0, u.useSharedValue)(0),
        ae = (0, u.useSharedValue)(0),
        le = (0, u.useSharedValue)(0),
        oe = (e, t) => {
          const n = (0, w.pinPx)(K.lat, K.lng, C, q.minX, q.minY);
          ((te.value = e / 2 - n.left),
            (ae.value = t / 2 - n.top),
            (ne.value = te.value),
            (le.value = ae.value),
            (Q.value = 1),
            (ee.value = 1));
        };
      (0, t.useEffect)(() => {
        S && N(S);
      }, [S]);
      const se = r.Gesture.Pan()
          .minDistance(4)
          .onUpdate(
            (function () {
              const e = function (e) {
                ((te.value = ne.value + e.translationX), (ae.value = le.value + e.translationY));
              };
              return (
                (e.__closure = { tx: te, savedTx: ne, ty: ae, savedTy: le }),
                (e.__workletHash = 5554335906218),
                (e.__initData = L),
                e
              );
            })(),
          )
          .onEnd(
            (function () {
              const e = function () {
                ((ne.value = te.value), (le.value = ae.value));
              };
              return (
                (e.__closure = { savedTx: ne, tx: te, savedTy: le, ty: ae }),
                (e.__workletHash = 0xfac1a511b4f),
                (e.__initData = k),
                e
              );
            })(),
          ),
        ie = r.Gesture.Pinch()
          .onUpdate(
            (function () {
              const e = function (e) {
                Q.value = P(ee.value * e.scale, 0.6, 4);
              };
              return (
                (e.__closure = { scale: Q, clamp: P, savedScale: ee, MIN_SCALE: 0.6, MAX_SCALE: 4 }),
                (e.__workletHash = 0xdaac86aa17f),
                (e.__initData = E),
                e
              );
            })(),
          )
          .onEnd(
            (function () {
              const e = function () {
                ((ee.value = Q.value), (0, u.runOnJS)(G)(Q.value));
              };
              return (
                (e.__closure = { savedScale: ee, scale: Q, runOnJS: u.runOnJS, setJsScale: G }),
                (e.__workletHash = 7488997342473),
                (e.__initData = V),
                e
              );
            })(),
          ),
        re = r.Gesture.Simultaneous(se, ie),
        ue = (0, u.useAnimatedStyle)(
          (function () {
            const e = () => ({
              transform: [{ translateX: te.value }, { translateY: ae.value }, { scale: Q.value }],
            });
            return (
              (e.__closure = { tx: te, ty: ae, scale: Q }),
              (e.__workletHash = 4231611317057),
              (e.__initData = R),
              e
            );
          })(),
        ),
        ce = (e) => {
          const t = P(ee.value * e, 0.6, 4);
          ((Q.value = (0, u.withTiming)(t, { duration: 160 })), (ee.value = t), G(t));
        },
        de = (0, t.useMemo)(() => {
          const t = 52 / $,
            n = new Map();
          for (const l of e) {
            const e = (0, w.pinPx)(l.lat, l.lng, C, q.minX, q.minY),
              o = `${Math.round(e.left / t)}:${Math.round(e.top / t)}`,
              s = n.get(o) ?? { venues: [], left: 0, top: 0 };
            (s.venues.push(l), (s.left += e.left), (s.top += e.top), n.set(o, s));
          }
          return [...n.values()].map((e) => ({
            venues: e.venues,
            left: e.left / e.venues.length,
            top: e.top / e.venues.length,
          }));
        }, [e, $, q]),
        he = e.find((e) => e.id === J) ?? null;
      return (0, M.jsxs)(s.default, {
        style: [O.fill, { backgroundColor: W ? "#0b1722" : "#e8eef2" }],
        onLayout: (e) => {
          const { width: t, height: n } = e.nativeEvent.layout;
          (B({ w: t, h: n }), !F.current && t > 0 && (oe(t, n), (F.current = !0)));
        },
        children: [
          (0, M.jsx)(r.GestureDetector, {
            gesture: re,
            children: (0, M.jsxs)(u.default.View, {
              style: [{ position: "absolute", width: q.width, height: q.height }, ue],
              children: [
                q.tiles.map((e) =>
                  (0, M.jsx)(
                    i.AppImage,
                    {
                      uri: (0, w.tileUrl)(e.x, e.y, C, W),
                      onLoad: () => U(!0),
                      style: {
                        position: "absolute",
                        left: (e.x - q.minX) * w.TILE_SIZE,
                        top: (e.y - q.minY) * w.TILE_SIZE,
                        width: w.TILE_SIZE,
                        height: w.TILE_SIZE,
                      },
                    },
                    `${e.x}-${e.y}`,
                  ),
                ),
                de.map((e, t) => {
                  if (e.venues.length > 1)
                    return (0, M.jsx)(
                      n.default,
                      {
                        onPress: () => {
                          (f.selectionAsync().catch(() => {}), ce(1.7));
                        },
                        accessibilityRole: "button",
                        accessibilityLabel: X("mapClusterA11y", { n: (0, b.formatNumber)(e.venues.length) }),
                        style: [O.pin, { left: e.left - 20, top: e.top - 20, zIndex: 5 }],
                        children: (0, M.jsx)(s.default, {
                          style: [O.clusterBubble, { backgroundColor: z.accent, borderColor: "#fff" }],
                          children: (0, M.jsx)(o.default, {
                            style: [O.clusterCount, { color: z.accentInk }],
                            children: e.venues.length,
                          }),
                        }),
                      },
                      `cluster-${t}`,
                    );
                  const l = e.venues[0],
                    i = e.left,
                    r = e.top,
                    u = l.sports[0],
                    h = l.id === J;
                  return (0, M.jsxs)(
                    n.default,
                    {
                      onPress: () => {
                        (f.selectionAsync().catch(() => {}), N(l.id));
                      },
                      accessibilityRole: "button",
                      accessibilityLabel: l.name,
                      style: [O.pin, { left: i - 18, top: r - 40, zIndex: h ? 20 : 1 }],
                      children: [
                        (0, M.jsx)(s.default, {
                          style: [
                            O.pinBubble,
                            {
                              backgroundColor: (0, b.sportColor)(u),
                              borderColor: h ? z.text : "#fff",
                              borderWidth: h ? 3 : 2,
                              transform: [{ scale: h ? 1.15 : 1 }],
                            },
                          ],
                          children: (0, M.jsx)(c.Ionicons, { name: b.sportIcon[u], size: 16, color: "#fff" }),
                        }),
                        (0, M.jsx)(s.default, {
                          style: [O.pinTail, { borderTopColor: (0, b.sportColor)(u) }],
                        }),
                      ],
                    },
                    l.id,
                  );
                }),
              ],
            }),
          }),
          !Z &&
            (0, M.jsx)(s.default, {
              style: l.default.absoluteFill,
              pointerEvents: "none",
              children: (0, M.jsx)(j.Shimmer, { height: Y.h || 320, round: 0 }),
            }),
          (0, M.jsx)(o.default, {
            style: [O.attribution, { color: z.textMuted, backgroundColor: z.overlay }],
            children: "\xa9 OpenStreetMap \xa9 CARTO",
          }),
          (0, M.jsxs)(s.default, {
            style: O.controls,
            children: [
              I && (0, M.jsx)(D, { icon: "expand", onPress: I, colors: z, label: X("expandMap") }),
              (0, M.jsx)(D, { icon: "add", onPress: () => ce(1.5), colors: z, label: X("zoomIn") }),
              (0, M.jsx)(D, {
                icon: "remove",
                onPress: () => ce(0.6666666666666666),
                colors: z,
                label: X("zoomOut"),
              }),
              (0, M.jsx)(D, {
                icon: "locate",
                onPress: () => {
                  Y.w > 0 &&
                    ((te.value = (0, u.withTiming)(
                      Y.w / 2 - (0, w.pinPx)(K.lat, K.lng, C, q.minX, q.minY).left,
                      { duration: 220 },
                    )),
                    (ae.value = (0, u.withTiming)(
                      Y.h / 2 - (0, w.pinPx)(K.lat, K.lng, C, q.minX, q.minY).top,
                      { duration: 220 },
                    )),
                    (Q.value = (0, u.withTiming)(1, { duration: 220 })),
                    (ne.value = Y.w / 2 - (0, w.pinPx)(K.lat, K.lng, C, q.minX, q.minY).left),
                    (le.value = Y.h / 2 - (0, w.pinPx)(K.lat, K.lng, C, q.minX, q.minY).top),
                    (ee.value = 1),
                    G(1));
                },
                colors: z,
                label: X("recenterMap"),
              }),
            ],
          }),
          he &&
            (0, M.jsx)(s.default, {
              style: O.callout,
              pointerEvents: "box-none",
              children: (0, M.jsxs)(p.Card, {
                style: { borderColor: z.border },
                children: [
                  (0, M.jsxs)(s.default, {
                    style: O.calloutHeader,
                    children: [
                      (0, M.jsxs)(s.default, {
                        style: { flex: 1 },
                        children: [
                          (0, M.jsx)(o.default, {
                            style: [y.typography.h3, { color: z.text }],
                            children: he.name,
                          }),
                          (0, M.jsxs)(o.default, {
                            style: [y.typography.small, { color: z.textMuted, marginTop: 2 }],
                            children: [he.area, " \xb7 ", he.sports.map((e) => X(e)).join(" \xb7 ")],
                          }),
                        ],
                      }),
                      (0, M.jsx)(n.default, {
                        onPress: () => N(null),
                        accessibilityRole: "button",
                        accessibilityLabel: X("close"),
                        hitSlop: 8,
                        children: (0, M.jsx)(c.Ionicons, { name: "close", size: 22, color: z.textMuted }),
                      }),
                    ],
                  }),
                  (0, M.jsxs)(s.default, {
                    style: O.calloutMeta,
                    children: [
                      (0, M.jsx)(c.Ionicons, { name: "star", size: 14, color: z.warning }),
                      (0, M.jsx)(o.default, {
                        style: [y.typography.smallStrong, { color: z.text, marginHorizontal: y.spacing.xs }],
                        children: (0, b.formatRating)(he.rating),
                      }),
                      (0, M.jsx)(o.default, {
                        style: [y.typography.small, { color: z.textMuted }],
                        children: (0, b.formatCountParens)(he.rating_count),
                      }),
                    ],
                  }),
                  (A ?? [])
                    .filter((e) => e.venue.id === he.id)
                    .slice(0, 3)
                    .map((e) =>
                      (0, M.jsxs)(
                        n.default,
                        {
                          onPress: () => H.push(`/game/${e.id}`),
                          accessibilityRole: "button",
                          accessibilityLabel: e.venue.name,
                          style: [O.gameRow, { borderTopColor: z.border }],
                          children: [
                            (0, M.jsx)(s.default, {
                              style: [O.gameTime, { backgroundColor: z.accent }],
                              children: (0, M.jsx)(o.default, {
                                style: [y.typography.caption, { color: z.accentInk, fontWeight: "800" }],
                                children: (0, b.formatClock)(e.starts_at),
                              }),
                            }),
                            (0, M.jsxs)(o.default, {
                              style: [
                                y.typography.small,
                                { color: z.text, flex: 1, marginHorizontal: y.spacing.sm },
                              ],
                              numberOfLines: 1,
                              children: [
                                new Date(e.starts_at).toLocaleDateString(void 0, {
                                  weekday: "short",
                                  day: "numeric",
                                }),
                                " \xb7 ",
                                X(e.sport),
                                " \xb7 ",
                                (0, b.formatNumber)(e.bookings_count),
                                "/",
                                (0, b.formatNumber)(e.max_players),
                              ],
                            }),
                            (0, M.jsx)(o.default, {
                              style: [y.typography.smallStrong, { color: z.text }],
                              children: Number(e.price_kwd).toFixed(3),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  (0, M.jsxs)(s.default, {
                    style: O.calloutActions,
                    children: [
                      (0, M.jsx)(g.Button, {
                        title: X("directions"),
                        variant: "secondary",
                        onPress: () => (0, _.openDirections)(he.lat, he.lng),
                        leftIcon: (0, M.jsx)(c.Ionicons, { name: "navigate", size: 16, color: z.text }),
                        style: { flex: 1 },
                      }),
                      (0, M.jsx)(g.Button, {
                        title: X("viewVenue"),
                        onPress: () => H.push(`/venue/${he.id}`),
                        style: { flex: 1 },
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      });
    };
    const D = ({ icon: e, onPress: t, colors: l, label: o }) =>
        (0, M.jsx)(n.default, {
          onPress: t,
          accessibilityRole: "button",
          accessibilityLabel: o,
          style: ({ pressed: e }) => [
            O.mapBtn,
            { backgroundColor: l.surface, borderColor: l.border, opacity: e ? 0.8 : 1 },
          ],
          children: (0, M.jsx)(c.Ionicons, { name: e, size: 20, color: l.text }),
        }),
      O = l.default.create({
        fill: { flex: 1, overflow: "hidden" },
        pin: { position: "absolute", alignItems: "center" },
        pinBubble: {
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOpacity: 0.4,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          elevation: 5,
        },
        pinTail: {
          width: 0,
          height: 0,
          borderLeftWidth: 5,
          borderRightWidth: 5,
          borderTopWidth: 8,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          marginTop: -1,
        },
        clusterBubble: {
          width: 40,
          height: 40,
          borderRadius: 20,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOpacity: 0.4,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          elevation: 5,
        },
        clusterCount: { fontSize: 15, fontWeight: "800", fontVariant: ["tabular-nums"] },
        gameRow: {
          flexDirection: "row",
          alignItems: "center",
          borderTopWidth: l.default.hairlineWidth,
          paddingVertical: y.spacing.sm,
          marginTop: y.spacing.sm,
        },
        gameTime: { borderRadius: y.radius.pill, paddingHorizontal: y.spacing.sm, paddingVertical: 3 },
        attribution: {
          position: "absolute",
          bottom: 4,
          left: 4,
          fontSize: 9,
          paddingHorizontal: 4,
          paddingVertical: 1,
          borderRadius: 3,
          overflow: "hidden",
        },
        controls: { position: "absolute", right: y.spacing.lg, top: y.spacing.lg, gap: y.spacing.sm },
        mapBtn: {
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: l.default.hairlineWidth,
        },
        callout: { position: "absolute", left: y.spacing.lg, right: y.spacing.lg, bottom: y.spacing.lg },
        calloutHeader: { flexDirection: "row", alignItems: "flex-start" },
        calloutMeta: { flexDirection: "row", alignItems: "center", marginTop: y.spacing.sm },
        calloutActions: { flexDirection: "row", gap: y.spacing.sm, marginTop: y.spacing.md },
      });
  },
  1680,
  [
    33, 15, 369, 158, 146, 273, 1632, 1681, 918, 1086, 20, 627, 1623, 626, 615, 675, 616, 1311, 1803, 1804,
    1618, 13,
  ],
);
