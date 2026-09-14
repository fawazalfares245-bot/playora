__d(
  function (g, r, i, _a, m, e, d) {
    var t = r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.FormationBoard = void 0));
    var o = r(d[1]),
      l = t(r(d[2])),
      s = t(r(d[3])),
      a = t(r(d[4])),
      n = t(r(d[5])),
      c = t(r(d[6])),
      u = r(d[7]),
      h = r(d[8]),
      f = r(d[9]),
      b = r(d[10]),
      p = r(d[11]),
      y = r(d[12]);
    const x = (t, o) => {
        const l = `pitchRole_${t}`,
          s = o(l);
        return s === l ? t : s;
      },
      j = "rgba(255,255,255,0.55)";
    // Each sport gets its own surface, proportions and markings. A padel or tennis lineup drawn on a
    // football pitch reads as a bug, and the net line is what makes a racket formation legible at all.
    const SURFACE = {
      football: { bg: "#17683B", ratio: 0.68 },
      // Real padel is 20x10m and tennis 23.8x11m. Drawn at true ratio they fill a phone screen, so
      // both are compressed slightly — still unmistakably longer and narrower than a pitch.
      padel: { bg: "#2B5FAE", ratio: 0.6 },
      tennis: { bg: "#B4593A", ratio: 0.56 },
    };
    // Racket slot geometry is chosen to sit inside the court already (baseline y 0.22-0.24, net 0.76),
    // so no clamping is needed. Football keeps its original mapping: clamping it would push the
    // goalkeeper down into the defenders, which is worse than the sliver of the chip that overhangs.
    const topPct = (v) => `${v}%`;
    const Court = ({ sport: sp }) => {
      if ("padel" === sp)
        return (0, y.jsxs)(y.Fragment, {
          children: [
            // glass back walls, the thing that makes padel padel
            (0, y.jsx)(c.default, { style: [_.wall, { top: 0 }] }),
            (0, y.jsx)(c.default, { style: [_.wall, { bottom: 0 }] }),
            (0, y.jsx)(c.default, { style: _.net }),
            // service lines sit 6.95m from the net on a 20m court
            (0, y.jsx)(c.default, { style: [_.hLine, { top: "15.3%" }] }),
            (0, y.jsx)(c.default, { style: [_.hLine, { top: "84.7%" }] }),
            // centre service line runs from each service line to the wall
            (0, y.jsx)(c.default, { style: [_.vLine, { top: 0, height: "15.3%" }] }),
            (0, y.jsx)(c.default, { style: [_.vLine, { bottom: 0, height: "15.3%" }] }),
          ],
        });
      if ("tennis" === sp)
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(c.default, { style: _.net }),
            // service lines 6.4m from the net on a 23.77m court
            (0, y.jsx)(c.default, { style: [_.hLine, { top: "23.1%" }] }),
            (0, y.jsx)(c.default, { style: [_.hLine, { top: "76.9%" }] }),
            // centre service line, between the two service lines only
            (0, y.jsx)(c.default, { style: [_.vLine, { top: "23.1%", height: "53.8%" }] }),
            // singles sidelines inside the doubles tramlines
            (0, y.jsx)(c.default, { style: [_.tram, { left: "12.5%" }] }),
            (0, y.jsx)(c.default, { style: [_.tram, { right: "12.5%" }] }),
          ],
        });
      return (0, y.jsxs)(y.Fragment, {
        children: [
          (0, y.jsx)(c.default, { style: _.halfwayLine }),
          (0, y.jsx)(c.default, { style: _.centerCircle }),
          (0, y.jsx)(c.default, { style: [_.box, { bottom: 0 }] }),
          (0, y.jsx)(c.default, { style: [_.box, { top: 0 }] }),
        ],
      });
    };
    e.FormationBoard = ({
      a: t,
      b: o,
      selected: l,
      onSlotPress: s,
      selfUserId: a,
      onLeaveSelf: n,
      sport: sp9,
    }) =>
      (0, y.jsxs)(c.default, {
        style: [
          _.pitch,
          {
            backgroundColor: (SURFACE[sp9] ?? SURFACE.football).bg,
            aspectRatio: (SURFACE[sp9] ?? SURFACE.football).ratio,
          },
        ],
        children: [
          (0, y.jsx)(Court, { sport: sp9 }),
          t.map((t) =>
            (0, y.jsx)(
              C,
              {
                slot: t,
                selected: "A" === l?.side && l.slot_id === t.slot_id,
                top: topPct(100 * (1 - 0.5 * t.y) - 9),
                left: 100 * t.x - 9 + "%",
                onPress: () => s("A", t.slot_id),
                onLeaveSelf: null != a && t.user_id === a ? n : void 0,
              },
              `A-${t.slot_id}`,
            ),
          ),
          o.map((t) =>
            (0, y.jsx)(
              C,
              {
                slot: t,
                selected: "B" === l?.side && l.slot_id === t.slot_id,
                top: topPct(0.5 * t.y * 100 - 9),
                left: 100 * (1 - t.x) - 9 + "%",
                onPress: () => s("B", t.slot_id),
                onLeaveSelf: null != a && t.user_id === a ? n : void 0,
              },
              `B-${t.slot_id}`,
            ),
          ),
        ],
      });
    const C = ({ slot: t, selected: a, top: j, left: C, onPress: v, onLeaveSelf: R }) => {
        const {
            colors: { accent: S, accentMuted: w },
          } = (0, p.useTheme)(),
          I = (0, b.useT)(),
          W = (0, o.useRef)(new l.default.Value(1)).current,
          k = () => l.default.spring(W, { toValue: 1.15, friction: 5, useNativeDriver: !0 }).start(),
          T = () => l.default.spring(W, { toValue: 1, friction: 5, useNativeDriver: !0 }).start(),
          A = !(!t.player_id || !t.player_name),
          B = !!R;
        return (0, y.jsxs)(c.default, {
          style: [_.slot, { top: j, left: C }],
          children: [
            (0, y.jsx)(s.default, {
              onPress: v,
              onHoverIn: k,
              onHoverOut: T,
              onPressIn: k,
              onPressOut: T,
              accessibilityRole: "button",
              accessibilityLabel: A
                ? B
                  ? I("slotTakenSelfA11y", { role: x(t.role, I) })
                  : I("slotTakenA11y", { role: x(t.role, I), name: t.player_name ?? "" })
                : I("slotEmptyA11y", { role: x(t.role, I) }),
              style: { alignSelf: "stretch", alignItems: "center" },
              children: (0, y.jsxs)(l.default.View, {
                style: { alignItems: "center", transform: [{ scale: W }] },
                children: [
                  A
                    ? (0, y.jsxs)(c.default, {
                        children: [
                          (0, y.jsx)(h.PlayerAvatar, {
                            name: t.player_name,
                            seed: t.avatar_seed,
                            uri: t.avatar_url,
                            size: 40,
                            style: { borderWidth: 2, borderColor: a ? S : "rgba(255,255,255,0.9)" },
                          }),
                          null != t.jersey &&
                            (0, y.jsx)(c.default, {
                              style: _.jerseyBadge,
                              children: (0, y.jsx)(n.default, { style: _.jerseyText, children: t.jersey }),
                            }),
                          t.captain &&
                            (0, y.jsx)(c.default, {
                              style: _.captainBadge,
                              children: (0, y.jsx)(n.default, { style: _.captainText, children: "C" }),
                            }),
                        ],
                      })
                    : (0, y.jsx)(c.default, {
                        style: [_.emptyChip, a && [_.chipSelected, { borderColor: S, backgroundColor: w }]],
                        children: (0, y.jsx)(u.Ionicons, { name: "add", size: 20, color: "#fff" }),
                      }),
                  (0, y.jsx)(n.default, {
                    numberOfLines: 1,
                    style: [f.typography.caption, _.name],
                    children: t.player_name ?? I(`pitchRole_${t.role}`),
                  }),
                  "GK" === t.role &&
                    null != t.player_id &&
                    (0, y.jsx)(n.default, {
                      style: [f.typography.caption, _.gkTag],
                      children: I("pitchRole_GK"),
                    }),
                ],
              }),
            }),
            A &&
              R &&
              (0, y.jsx)(s.default, {
                onPress: R,
                accessibilityRole: "button",
                accessibilityLabel: I("leaveGame"),
                hitSlop: 8,
                style: _.leaveX,
                children: (0, y.jsx)(u.Ionicons, { name: "close", size: 11, color: "#fff" }),
              }),
          ],
        });
      },
      _ = a.default.create({
        pitch: {
          width: "100%",
          borderRadius: 14,
          overflow: "hidden",
          borderWidth: 2,
          borderColor: j,
        },
        net: {
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: "rgba(255,255,255,0.92)",
        },
        hLine: { position: "absolute", left: 0, right: 0, height: 1.5, backgroundColor: j },
        vLine: { position: "absolute", left: "50%", width: 1.5, backgroundColor: j },
        tram: { position: "absolute", top: 0, bottom: 0, width: 1.5, backgroundColor: j },
        wall: {
          position: "absolute",
          left: 0,
          right: 0,
          height: "3%",
          backgroundColor: "rgba(255,255,255,0.16)",
          borderBottomWidth: 1.5,
          borderTopWidth: 1.5,
          borderColor: "rgba(255,255,255,0.75)",
        },
        halfwayLine: { position: "absolute", top: "50%", left: 0, right: 0, height: 1.5, backgroundColor: j },
        centerCircle: {
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 84,
          height: 84,
          borderRadius: 42,
          borderWidth: 1.5,
          borderColor: j,
          transform: [{ translateX: -42 }, { translateY: -42 }],
        },
        box: {
          position: "absolute",
          left: "26%",
          width: "48%",
          height: "13%",
          borderWidth: 1.5,
          borderColor: j,
        },
        slot: { position: "absolute", width: "18%", alignItems: "center" },
        emptyChip: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "rgba(255,255,255,0.18)",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "rgba(255,255,255,0.85)",
          borderStyle: "dashed",
        },
        chipSelected: { borderWidth: 2 },
        jerseyBadge: {
          position: "absolute",
          bottom: -3,
          right: -5,
          minWidth: 16,
          height: 16,
          borderRadius: 8,
          paddingHorizontal: 3,
          backgroundColor: "#0F172A",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.85)",
          alignItems: "center",
          justifyContent: "center",
        },
        jerseyText: { color: "#fff", fontSize: 9, fontWeight: "800" },
        captainBadge: {
          position: "absolute",
          top: -5,
          right: -5,
          width: 15,
          height: 15,
          borderRadius: 8,
          backgroundColor: "#FACC15",
          alignItems: "center",
          justifyContent: "center",
        },
        captainText: { color: "#1F2937", fontSize: 9, fontWeight: "900" },
        leaveX: {
          position: "absolute",
          top: -6,
          right: "50%",
          marginRight: 8,
          width: 18,
          height: 18,
          borderRadius: 9,
          backgroundColor: "#DC2626",
          borderWidth: 1.5,
          borderColor: "rgba(255,255,255,0.9)",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
        },
        name: {
          color: "#fff",
          marginTop: 2,
          maxWidth: 64,
          textShadowColor: "rgba(0,0,0,0.6)",
          textShadowRadius: 3,
        },
        gkTag: { color: "#FDE68A", fontWeight: "700" },
      });
  },
  2382,
  [33, 15, 267, 369, 158, 146, 273, 1086, 1679, 616, 675, 615, 13],
);
