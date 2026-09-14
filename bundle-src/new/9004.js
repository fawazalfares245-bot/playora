__d(
  function (g, _r, _i, a, m, e, d) {
    // ---------------------------------------------------------------------------------------------
    // KID UI KIT — primitives for a screen a seven-year-old can drive without reading anything.
    //
    //   useKidCss()      one-time <style> injection (scroll snap, press physics, coach keyframes)
    //   useKidSound()    WebAudio blips. No asset files, no network, no decode cost.
    //   useHaptics()     navigator.vibrate where it exists, silent elsewhere.
    //   BigButton        oversized icon target that sinks under the finger and springs back.
    //   KidScroll        virtualised + snap-scrolling list with rubber-band overscroll.
    //   LazyImage        IntersectionObserver-gated image with a shimmer placeholder.
    //   CoachHand        text-free animated onboarding hand. Shows once, never blocks a tap.
    //   ProgressDots     text-free "where am I" indicator.
    //
    // Everything respects prefers-reduced-motion and carries an accessibilityLabel even though no
    // label is drawn: a zero-text interface must not become a zero-information one for screen readers.
    // ---------------------------------------------------------------------------------------------
    var t = _r(d[0]);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.BigButton =
        e.CoachHand =
        e.KID =
        e.KidScroll =
        e.LazyImage =
        e.ProgressDots =
        e.useHaptics =
        e.useKidCss =
        e.useKidSound =
          void 0));
    var n = _r(d[1]),
      V = t(_r(d[2])),
      Tx = t(_r(d[3])),
      S = t(_r(d[4])),
      P = t(_r(d[5])),
      FL = t(_r(d[6])),
      Ico = _r(d[7]),
      Th = _r(d[8]),
      tok = _r(d[9]),
      RM = _r(d[10]),
      AS = t(_r(d[11])),
      Img = _r(d[12]),
      J = _r(d[13]);

    // === Design tokens =============================================================================
    // Adult minimum touch target is 44pt. A 7-year-old's index finger contact patch is wider and their
    // aim is worse, so every interactive thing here starts at 88 and the primary actions are 96-120.
    const KID = {
      tap: 88,
      tapLarge: 112,
      icon: 44,
      iconLarge: 56,
      gap: 16,
      card: 12, // cards per screen is capped by design; see ROWS_VISIBLE in the blueprint
      pressScale: 0.93,
      pressMs: 120,
      springMs: 260,
      spring: "cubic-bezier(.2,.9,.3,1.3)",
      overscrollMax: 90, // px of rubber band before the pull stops moving anything
    };
    e.KID = KID;

    // === One-time stylesheet =======================================================================
    // These are web-only CSS features (scroll-snap, overscroll-behavior, keyframes) that React Native
    // Web's StyleSheet does not forward, so they are injected once and targeted with data- attributes
    // set through RNW's `dataSet` prop.
    const CSS_ID = "kid-ui-v1";
    const CSS = `
[data-kid-scroll]{
  scroll-snap-type:y proximity;        /* proximity, never mandatory: mandatory traps a fast flick */
  overscroll-behavior-y:contain;       /* a bounce at the end must not scroll the page behind it */
  -webkit-overflow-scrolling:touch;    /* iOS momentum */
  scrollbar-width:none;-ms-overflow-style:none;
}
[data-kid-scroll]::-webkit-scrollbar{width:0;height:0;display:none}
[data-kid-snap]{scroll-snap-align:center;scroll-snap-stop:normal}
[data-kid-press]{
  transition:transform ${KID.pressMs}ms ${KID.spring}, filter ${KID.pressMs}ms linear;
  will-change:transform;-webkit-tap-highlight-color:transparent;touch-action:manipulation;
}
[data-kid-press="down"]{transform:scale(${KID.pressScale});filter:brightness(.9) saturate(1.25)}
[data-kid-band]{will-change:transform}
@keyframes kid-swipe-up{
  0%{transform:translate3d(0,26px,0) scale(1);opacity:0}
  14%{opacity:1}
  55%{transform:translate3d(0,-26px,0) scale(.94);opacity:1}
  78%{transform:translate3d(0,-26px,0) scale(.94);opacity:0}
  100%{transform:translate3d(0,26px,0) scale(1);opacity:0}
}
@keyframes kid-swipe-left{
  0%{transform:translate3d(26px,0,0);opacity:0}
  14%{opacity:1}
  55%{transform:translate3d(-26px,0,0) scale(.94);opacity:1}
  78%{transform:translate3d(-26px,0,0) scale(.94);opacity:0}
  100%{transform:translate3d(26px,0,0);opacity:0}
}
@keyframes kid-tap{
  0%{transform:scale(1);opacity:.95}
  40%{transform:scale(.82);opacity:1}
  60%{transform:scale(.82);opacity:1}
  100%{transform:scale(1);opacity:.95}
}
@keyframes kid-ring{
  0%{transform:scale(.6);opacity:.55}
  70%{transform:scale(1.7);opacity:0}
  100%{transform:scale(1.7);opacity:0}
}
@keyframes kid-shimmer{0%{background-position:-220px 0}100%{background-position:220px 0}}
[data-kid-shimmer]{
  background-image:linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,.14) 50%,rgba(255,255,255,0) 100%);
  background-size:220px 100%;background-repeat:no-repeat;
  animation:kid-shimmer 1.1s linear infinite;
}
@media (prefers-reduced-motion: reduce){
  [data-kid-scroll]{scroll-snap-type:none}
  [data-kid-press]{transition-duration:1ms}
  [data-kid-anim],[data-kid-shimmer]{animation:none!important}
}`;
    const injectCss = () => {
      if ("undefined" == typeof document || document.getElementById(CSS_ID)) return;
      try {
        const s = document.createElement("style");
        ((s.id = CSS_ID), (s.textContent = CSS), document.head.appendChild(s));
      } catch {}
    };
    const useKidCss = () => {
      (0, n.useEffect)(() => {
        injectCss();
      }, []);
    };
    e.useKidCss = useKidCss;

    // === Audio =====================================================================================
    // Synthesised, not sampled: four sounds cost zero bytes and zero decode time, and they can never
    // be the reason a first tap feels slow. The context is created on the first gesture because every
    // browser blocks audio before one.
    let AC = null;
    const audioCtx = () => {
      if ("undefined" == typeof window) return null;
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      try {
        (AC || (AC = new C()), "suspended" === AC.state && AC.resume().catch(() => {}));
        return AC;
      } catch {
        return null;
      }
    };
    const blip = (freqs, ms, type, peak) => {
      const c = audioCtx();
      if (!c) return;
      try {
        const t0 = c.currentTime;
        freqs.forEach((f, i) => {
          const o = c.createOscillator(),
            gn = c.createGain(),
            at = t0 + i * (ms / 1e3) * 0.6;
          ((o.type = type || "sine"), o.frequency.setValueAtTime(f, at));
          (gn.gain.setValueAtTime(1e-4, at),
            gn.gain.exponentialRampToValueAtTime(peak || 0.12, at + 0.012),
            gn.gain.exponentialRampToValueAtTime(1e-4, at + ms / 1e3));
          (o.connect(gn), gn.connect(c.destination), o.start(at), o.stop(at + ms / 1e3 + 0.02));
        });
      } catch {}
    };
    const MUTE_KEY = "playora.kid.muted.v1";
    const useKidSound = () => {
      const [muted, setMutedState] = (0, n.useState)(!1),
        // The mute flag is mirrored into a ref so `play` can keep ONE identity for the life of the
        // component. Anything that feeds a React Native list prop must be referentially stable, and a
        // hook that hands back a fresh function every render quietly breaks those lists.
        mutedRef = (0, n.useRef)(!1);
      (0, n.useEffect)(() => {
        let alive = !0;
        return (
          AS.default
            .getItem(MUTE_KEY)
            .then((v) => {
              const b = "1" === v;
              alive && ((mutedRef.current = b), setMutedState(b));
            })
            .catch(() => {}),
          () => {
            alive = !1;
          }
        );
      }, []);
      const setMuted = (0, n.useCallback)((v) => {
        ((mutedRef.current = !!v),
          setMutedState(!!v),
          AS.default.setItem(MUTE_KEY, v ? "1" : "0").catch(() => {}));
      }, []);
      const play = (0, n.useCallback)((kind) => {
        if (mutedRef.current) return;
        if ("pop" === kind) return blip([520, 780], 90, "sine", 0.1);
        if ("tick" === kind) return blip([660], 45, "sine", 0.05);
        if ("chime" === kind) return blip([660, 880, 1320], 160, "triangle", 0.09);
        if ("thud" === kind) return blip([150], 130, "sine", 0.09);
      }, []);
      return (0, n.useMemo)(
        () => ({ play: play, muted: muted, setMuted: setMuted }),
        [play, muted, setMuted],
      );
    };
    e.useKidSound = useKidSound;

    // === Haptics ===================================================================================
    const useHaptics = () =>
      (0, n.useCallback)((pattern) => {
        try {
          "undefined" != typeof navigator && navigator.vibrate && navigator.vibrate(pattern ?? 12);
        } catch {}
      }, []);
    e.useHaptics = useHaptics;

    // === BigButton =================================================================================
    // One job per button, stated by a single icon. The press is confirmed three ways at once —
    // it sinks and darkens, it clicks, and it buzzes — because a child who is unsure whether the tap
    // registered will tap again, and a double-fire is the most common source of confusion.
    const BigButton = (props) => {
      const {
        icon: icon,
        label: label,
        onPress: onPress,
        size: size,
        color: color,
        inkColor: inkColor,
        disabled: disabled,
        round: round,
        sound: sound,
        badge: badge,
        style: style,
      } = props;
      useKidCss();
      const { colors: C } = (0, Th.useTheme)(),
        reduced = (0, RM.useReducedMotion)(),
        snd = useKidSound(),
        buzz = useHaptics(),
        ref = (0, n.useRef)(null),
        [down, setDown] = (0, n.useState)(!1),
        box = size || KID.tap,
        bg = disabled ? C.surfaceAlt : (color ?? C.accent),
        ink = disabled ? C.textMuted : (inkColor ?? C.accentInk);
      const release = () => {
        // Overshoot on release: the button springs past its resting size before settling. This is what
        // reads as "alive" rather than "a rectangle that changed colour".
        if (reduced || !ref.current || !ref.current.animate) return;
        try {
          ref.current.animate(
            [
              { transform: `scale(${KID.pressScale})` },
              { transform: "scale(1.07)" },
              { transform: "scale(1)" },
            ],
            { duration: KID.springMs, easing: KID.spring },
          );
        } catch {}
      };
      return (0, J.jsxs)(P.default, {
        ref: ref,
        onPressIn: () => {
          (setDown(!0), buzz(12), snd.play(disabled ? "thud" : (sound ?? "pop")));
        },
        onPressOut: () => {
          (setDown(!1), release());
        },
        onPress: () => {
          disabled || !onPress || onPress();
        },
        disabled: !!disabled,
        accessibilityRole: "button",
        // The icon carries the meaning on screen; the label carries it for anyone who cannot see it.
        accessibilityLabel: label,
        accessibilityState: { disabled: !!disabled },
        dataSet: { kidPress: down ? "down" : "up" },
        style: [
          {
            width: box,
            height: box,
            borderRadius: round ? box / 2 : tok.radius.xl,
            backgroundColor: bg,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOpacity: disabled ? 0 : 0.22,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            opacity: disabled ? 0.55 : 1,
          },
          style,
        ],
        children: [
          (0, J.jsx)(Ico.Ionicons, {
            name: icon,
            size: size && size >= KID.tapLarge ? KID.iconLarge : KID.icon,
            color: ink,
          }),
          badge
            ? (0, J.jsx)(V.default, {
                style: {
                  position: "absolute",
                  top: 6,
                  right: 6,
                  minWidth: 22,
                  height: 22,
                  paddingHorizontal: 5,
                  borderRadius: 11,
                  backgroundColor: C.danger ?? "#E5484D",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: (0, J.jsx)(Tx.default, {
                  style: { color: "#fff", fontSize: 12, fontWeight: "800" },
                  children: badge,
                }),
              })
            : null,
        ],
      });
    };
    e.BigButton = BigButton;

    // === ProgressDots ==============================================================================
    // Replaces "3 of 12". A child reads position from the size and brightness of the dots.
    const ProgressDots = ({ count: count, index: index, colors: colors }) => {
      const { colors: C } = (0, Th.useTheme)(),
        col = colors ?? C,
        n9 = Math.min(count ?? 0, 9);
      return (0, J.jsx)(V.default, {
        accessibilityRole: "progressbar",
        accessibilityValue: { min: 1, max: count, now: (index ?? 0) + 1 },
        style: { flexDirection: "row", gap: 6, alignItems: "center", justifyContent: "center" },
        children: Array.from({ length: n9 }, (_x, i) => {
          const on = i === Math.min(index ?? 0, n9 - 1);
          return (0, J.jsx)(
            V.default,
            {
              style: {
                width: on ? 22 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: on ? col.accent : col.border,
              },
            },
            i,
          );
        }),
      });
    };
    e.ProgressDots = ProgressDots;

    // === LazyImage =================================================================================
    // The URL is not even requested until the card is within one screen of the viewport, so a list of
    // a thousand cards costs one screen of network and memory rather than a thousand.
    const LazyImage = ({
      uri: uri,
      width: width,
      height: height,
      radius: radius,
      label: label,
      recyclingKey: recyclingKey,
    }) => {
      useKidCss();
      const { colors: C } = (0, Th.useTheme)(),
        hostRef = (0, n.useRef)(null),
        [near, setNear] = (0, n.useState)(!1),
        [loaded, setLoaded] = (0, n.useState)(!1);
      (0, n.useEffect)(() => {
        const el = hostRef.current;
        if (!el || "undefined" == typeof IntersectionObserver) return void setNear(!0);
        let io;
        try {
          io = new IntersectionObserver(
            (entries) => {
              entries.some((en) => en.isIntersecting) && (setNear(!0), io && io.disconnect());
            },
            { rootMargin: "400px 0px", threshold: 0.01 },
          );
          io.observe(el);
        } catch {
          setNear(!0);
        }
        return () => {
          try {
            io && io.disconnect();
          } catch {}
        };
      }, []);
      return (0, J.jsxs)(V.default, {
        ref: hostRef,
        style: {
          width: width ?? "100%",
          height: height ?? 160,
          borderRadius: radius ?? tok.radius.lg,
          backgroundColor: C.surfaceAlt,
          overflow: "hidden",
        },
        children: [
          !loaded && (0, J.jsx)(V.default, { dataSet: { kidShimmer: "1" }, style: S.default.absoluteFill }),
          near &&
            uri &&
            (0, J.jsx)(Img.AppImage, {
              uri: uri,
              accessibilityLabel: label,
              recyclingKey: recyclingKey,
              transitionMs: 180,
              style: S.default.absoluteFill,
              onLoad: () => setLoaded(!0),
            }),
        ],
      });
    };
    e.LazyImage = LazyImage;

    // === KidScroll =================================================================================
    // Virtualised list + snap + rubber band.
    //
    // Virtualisation: getItemLayout lets the list skip measurement entirely, which is what keeps a
    // 5,000-row list at the same cost as a 10-row one. It needs a fixed itemHeight, so the design
    // fixes the card height rather than letting content decide it.
    //
    // Rubber band: iOS gives elastic overscroll for free, Android and desktop give none. Rather than
    // ship two different feels, the end-of-list pull is synthesised here for everyone: the pull is
    // damped asymptotically towards a ceiling, then released on a critically damped spring.
    const KidScroll = (props) => {
      const {
        data: data,
        renderItem: renderItem,
        keyExtractor: keyExtractor,
        itemHeight: itemHeight,
        snap: snap,
        onIndexChange: onIndexChange,
        header: header,
        footer: footer,
        empty: empty,
        contentPadding: contentPadding,
        tickOnSnap: tickOnSnap,
      } = props;
      useKidCss();
      const reduced = (0, RM.useReducedMotion)(),
        snd = useKidSound(),
        hostRef = (0, n.useRef)(null),
        lastIdx = (0, n.useRef)(-1);

      // --- rubber-band overscroll -----------------------------------------------------------------
      (0, n.useEffect)(() => {
        if (reduced || "undefined" == typeof window) return;
        const host = hostRef.current;
        if (!host || !host.querySelector) return;
        const sc = host.querySelector("[data-kid-scroll]");
        const content = sc && sc.firstElementChild;
        if (!sc || !content) return;
        let pull = 0,
          raf = 0,
          v = 0,
          touchY = null;
        content.setAttribute("data-kid-band", "1");
        const apply = () => {
          content.style.transform = pull ? `translate3d(0,${pull.toFixed(2)}px,0)` : "";
        };
        // Asymptotic damping: the first pixels move freely, the last ones barely move at all, so the
        // list feels like it is attached to something rather than simply stopping.
        const damp = (raw) => {
          const s = raw < 0 ? -1 : 1,
            x = Math.abs(raw);
          return s * KID.overscrollMax * (1 - Math.exp(-x / KID.overscrollMax));
        };
        const settle = () => {
          cancelAnimationFrame(raf);
          let last = performance.now();
          const step = (now) => {
            const dt = Math.min(0.032, (now - last) / 1e3);
            last = now;
            // critically damped spring towards 0
            const k = 260,
              c = 2 * Math.sqrt(k);
            ((v += (-k * pull - c * v) * dt), (pull += v * dt));
            if (Math.abs(pull) < 0.4 && Math.abs(v) < 4) return ((pull = 0), (v = 0), apply());
            (apply(), (raf = requestAnimationFrame(step)));
          };
          raf = requestAnimationFrame(step);
        };
        const atTop = () => sc.scrollTop <= 0;
        const atBottom = () => sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 1;
        const onWheel = (ev) => {
          const dy = ev.deltaY;
          if ((dy < 0 && atTop()) || (dy > 0 && atBottom())) {
            (ev.preventDefault(), cancelAnimationFrame(raf));
            ((pull = damp(pull - dy * 0.5)), (v = 0), apply());
            (clearTimeout(onWheel._t), (onWheel._t = setTimeout(settle, 90)));
          }
        };
        const onTouchStart = (ev) => {
          touchY = ev.touches && ev.touches.length ? ev.touches[0].clientY : null;
        };
        const onTouchMove = (ev) => {
          if (null == touchY || !ev.touches || !ev.touches.length) return;
          const y = ev.touches[0].clientY,
            dy = y - touchY;
          if ((dy > 0 && atTop()) || (dy < 0 && atBottom())) {
            (cancelAnimationFrame(raf), (pull = damp(dy)), (v = 0), apply());
          }
        };
        const onTouchEnd = () => {
          ((touchY = null), pull && settle());
        };
        (sc.addEventListener("wheel", onWheel, { passive: !1 }),
          sc.addEventListener("touchstart", onTouchStart, { passive: !0 }),
          sc.addEventListener("touchmove", onTouchMove, { passive: !0 }),
          sc.addEventListener("touchend", onTouchEnd, { passive: !0 }),
          sc.addEventListener("touchcancel", onTouchEnd, { passive: !0 }));
        return () => {
          (cancelAnimationFrame(raf),
            clearTimeout(onWheel._t),
            sc.removeEventListener("wheel", onWheel),
            sc.removeEventListener("touchstart", onTouchStart),
            sc.removeEventListener("touchmove", onTouchMove),
            sc.removeEventListener("touchend", onTouchEnd),
            sc.removeEventListener("touchcancel", onTouchEnd),
            (content.style.transform = ""));
        };
      }, [reduced]);

      const layout = (0, n.useCallback)(
        (_x, i) => ({ length: itemHeight, offset: itemHeight * i, index: i }),
        [itemHeight],
      );
      // VirtualizedList throws "Changing onViewableItemsChanged on the fly is not supported" if either
      // of these two props is ever a new value. Both are therefore pinned for the component's life and
      // read the current handlers out of a ref, which is allowed to change as often as it likes.
      const viewability = (0, n.useRef)({ itemVisiblePercentThreshold: 60 }).current;
      const live = (0, n.useRef)({});
      live.current = { onIndexChange: onIndexChange, tick: tickOnSnap, play: snd.play };
      const onViewable = (0, n.useRef)(({ viewableItems: vis }) => {
        if (!vis || !vis.length) return;
        const i = vis[0].index ?? 0;
        if (i === lastIdx.current) return;
        lastIdx.current = i;
        const h = live.current;
        (h.onIndexChange && h.onIndexChange(i), h.tick && h.play && h.play("tick"));
      }).current;
      const row = (0, n.useCallback)(
        (info) =>
          (0, J.jsx)(V.default, {
            dataSet: !1 === snap ? void 0 : { kidSnap: "1" },
            style: itemHeight ? { height: itemHeight } : void 0,
            children: renderItem(info),
          }),
        [renderItem, itemHeight, snap],
      );

      return (0, J.jsx)(V.default, {
        ref: hostRef,
        style: { flex: 1 },
        children: (0, J.jsx)(FL.default, {
          data: data,
          renderItem: row,
          keyExtractor: keyExtractor,
          dataSet: { kidScroll: "1" },
          // --- virtualisation budget --------------------------------------------------------------
          getItemLayout: itemHeight ? layout : void 0,
          initialNumToRender: 4,
          maxToRenderPerBatch: 4,
          updateCellsBatchingPeriod: 50,
          windowSize: 5,
          removeClippedSubviews: !0,
          // --- feel ---------------------------------------------------------------------------------
          decelerationRate: "fast",
          showsVerticalScrollIndicator: !1,
          onViewableItemsChanged: onViewable,
          viewabilityConfig: viewability,
          ListHeaderComponent: header,
          ListFooterComponent: footer,
          ListEmptyComponent: empty,
          contentContainerStyle: { padding: contentPadding ?? tok.spacing.lg, gap: KID.gap },
        }),
      });
    };
    e.KidScroll = KidScroll;

    // === CoachHand =================================================================================
    // The onboarding tour. No words, no "next" button, no modal to dismiss. A hand shows the gesture
    // on a loop over the real screen, and it disappears the moment the child does the thing — or after
    // a few loops if they are just watching. pointerEvents is never enabled, so it can never be the
    // reason a tap does not land.
    const CoachHand = ({
      gesture: gesture,
      x: x,
      y: y,
      loops: loops,
      storageKey: storageKey,
      active: active,
      onDone: onDone,
    }) => {
      useKidCss();
      const { colors: C } = (0, Th.useTheme)(),
        reduced = (0, RM.useReducedMotion)(),
        [show, setShow] = (0, n.useState)(!1),
        done = (0, n.useRef)(!1);
      // Seen-once memory. A tour that replays on every visit stops being help and becomes noise.
      (0, n.useEffect)(() => {
        let alive = !0;
        if (reduced) return;
        if (!storageKey) return void (alive && setShow(!1 !== active));
        AS.default
          .getItem(storageKey)
          .then((v) => {
            alive && setShow(!v && !1 !== active);
          })
          .catch(() => alive && setShow(!1 !== active));
        return () => {
          alive = !1;
        };
      }, [storageKey, active, reduced]);
      const finish = (0, n.useCallback)(() => {
        if (done.current) return;
        ((done.current = !0),
          setShow(!1),
          storageKey && AS.default.setItem(storageKey, "1").catch(() => {}),
          onDone && onDone());
      }, [storageKey, onDone]);
      (0, n.useEffect)(() => {
        if (!show) return;
        const ms = 1600 * (loops ?? 3),
          t9 = setTimeout(finish, ms);
        return () => clearTimeout(t9);
      }, [show, loops, finish]);
      // Any real interaction retires the hint immediately.
      (0, n.useEffect)(() => {
        if (!show || "undefined" == typeof window) return;
        const go = () => finish();
        (window.addEventListener("pointerdown", go, { once: !0, passive: !0 }),
          window.addEventListener("wheel", go, { once: !0, passive: !0 }),
          window.addEventListener("touchmove", go, { once: !0, passive: !0 }));
        return () => {
          (window.removeEventListener("pointerdown", go),
            window.removeEventListener("wheel", go),
            window.removeEventListener("touchmove", go));
        };
      }, [show, finish]);
      if (!show) return null;
      const anim =
        "tap" === gesture ? "kid-tap" : "swipe-left" === gesture ? "kid-swipe-left" : "kid-swipe-up";
      // `accessibilityHidden` is the prop React Native Web maps to aria-hidden; the React Native
      // native spellings (accessibilityElementsHidden / importantForAccessibility) are dropped on web.
      // The hint is decoration, so it must not be announced, and `pointerEvents: none` is what keeps a
      // child's tap going through to the screen it is pointing at.
      return (0, J.jsxs)(V.default, {
        pointerEvents: "none",
        accessibilityHidden: !0,
        dataSet: { kidCoach: "root" },
        style: [
          S.default.absoluteFill,
          { alignItems: "center", justifyContent: "center", pointerEvents: "none" },
        ],
        children: [
          (0, J.jsxs)(V.default, {
            pointerEvents: "none",
            style: {
              pointerEvents: "none",
              position: "absolute",
              left: x ?? "50%",
              top: y ?? "58%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: -36,
              marginTop: -36,
              width: 72,
              height: 72,
            },
            children: [
              (0, J.jsx)(V.default, {
                dataSet: { kidAnim: "ring" },
                style: {
                  position: "absolute",
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  backgroundColor: C.accent,
                  opacity: 0.35,
                  animationName: "kid-ring",
                  animationDuration: "1.6s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-out",
                },
              }),
              (0, J.jsx)(V.default, {
                dataSet: { kidAnim: "hand" },
                style: {
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: C.surface,
                  borderWidth: 2,
                  borderColor: C.accent,
                  animationName: anim,
                  animationDuration: "1.6s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                },
                children: (0, J.jsx)(Ico.Ionicons, { name: "hand-left", size: 30, color: C.accentText }),
              }),
            ],
          }),
        ],
      });
    };
    e.CoachHand = CoachHand;
  },
  9004,
  [33, 15, 273, 146, 158, 369, 272, 1086, 615, 616, 1621, 618, 1632, 13],
);
