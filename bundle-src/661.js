__d(
  function (g, r, _i, _a, _m, _e, d) {
    (Object.defineProperty(_e, "__esModule", { value: !0 }),
      (_e.sharePayload =
        _e.selectMoments =
        _e.evtLabelKey =
        _e.engagementScore =
        _e.detectEvents =
        _e.clipKindsForSport =
        _e.clampClipLength =
        _e.buildClipSet =
        _e.buildClip =
        _e.SPORT_EVENTS =
        _e.SHARE_PLATFORMS =
        _e.MIN_CLIP =
        _e.MAX_CLIP =
          void 0));
    const t = (t) => {
        let e = 2166136261;
        for (let a = 0; a < t.length; a++) ((e ^= t.charCodeAt(a)), (e = Math.imul(e, 16777619)));
        return e >>> 0;
      },
      e = (_e.SPORT_EVENTS = {
        football: ["goal", "save", "assist", "celebration", "crowd", "intensity", "score_change", "whistle"],
        padel: ["point", "celebration", "crowd", "intensity", "score_change", "whistle"],
        tennis: ["point", "celebration", "crowd", "intensity", "score_change", "whistle"],
      }),
      a = (t) => `mediaEvt_${t}`;
    _e.evtLabelKey = a;
    _e.detectEvents = (n, s, o, i = 4) => {
      const l =
        ((c = t(n)),
        () => {
          c = (c + 1831565813) | 0;
          let t = Math.imul(c ^ (c >>> 15), 1 | c);
          return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
        });
      var c;
      const h = e[o],
        p = Math.max(3, Math.round((s / 60) * i)),
        u = [],
        m = Math.max(30, s - 10);
      for (let t = 0; t < p; t++) {
        const e = h[Math.floor(l() * h.length)],
          s = "goal" === e || "point" === e ? 0.7 : "save" === e || "assist" === e ? 0.55 : 0.3,
          o = Math.min(1, s + 0.3 * l()),
          i = Math.round(5 + l() * (m - 5));
        u.push({
          id: `${n}-e${t}`,
          type: e,
          at_seconds: i,
          intensity: Math.round(100 * o) / 100,
          label_key: a(e),
        });
      }
      return u.sort((t, e) => t.at_seconds - e.at_seconds);
    };
    const n = (_e.MIN_CLIP = 15),
      s = (_e.MAX_CLIP = 90),
      o = (t) => Math.max(n, Math.min(s, Math.round(t)));
    _e.clampClipLength = o;
    const i = (t) =>
      "football" === t
        ? ["highlights", "goals", "top_saves", "assists", "key_moments", "reel", "horizontal", "recap"]
        : ["highlights", "top_points", "key_moments", "reel", "horizontal", "recap"];
    _e.clipKindsForSport = i;
    const l = { goals: ["goal"], top_saves: ["save"], top_points: ["point"], assists: ["assist"] },
      c = (t, e) => {
        const a = l[e];
        return [...(a ? t.filter((t) => a.includes(t.type)) : t)].sort((t, e) => e.intensity - t.intensity);
      };
    _e.selectMoments = c;
    const h = (t) =>
        "reel" === t || "player_reel" === t ? "9:16" : "horizontal" === t || "recap" === t ? "16:9" : "9:16",
      p = (t, e, a, n) => {
        const s = c(t, e);
        if (0 === s.length) return null;
        const i = o(a),
          l = h(e),
          p = "recap" === e ? 5 : Math.max(6, Math.round(i / Math.min(s.length, 4))),
          u =
            "recap" === e
              ? Math.min(s.length, Math.max(3, Math.round(i / p)))
              : Math.min(s.length, Math.ceil(i / p)),
          m = s.slice(0, u),
          M = m[0],
          _ = Math.max(0, Math.min(...m.map((t) => t.at_seconds)) - 3),
          y = Math.min(n, Math.max(...m.map((t) => t.at_seconds)) + 3),
          b = o(Math.min(i, u * p));
        return {
          kind: e,
          format: l,
          start_seconds: Math.round(_),
          end_seconds: Math.round(y),
          duration_seconds: b,
          thumbnail_ts: M.at_seconds,
          event_count: m.length,
          peak_intensity: M.intensity,
        };
      };
    _e.buildClip = p;
    _e.buildClipSet = (t, e, a, n) => {
      const s = [];
      for (const o of i(e)) {
        const e = p(t, o, a, n);
        e && s.push(e);
      }
      return s;
    };
    _e.SHARE_PLATFORMS = ["instagram", "tiktok", "snapchat", "whatsapp", "x", "facebook", "youtube"];
    const u = ["instagram", "tiktok", "snapchat", "youtube"];
    _e.sharePayload = (t, e, a, n) => ({
      platform: t,
      aspect: u.includes(t) ? "9:16" : "16:9",
      caption: `${e} \u2014 via Rush X \ud83c\udfc6`,
      hashtags: ["#RushX", "#MatchHighlights", "#Kuwait"],
      deep_link: `https://playora.app/clip/${a}?utm_source=${t}`,
      watermark: n,
    });
    _e.engagementScore = (t, e) => t + 6 * e;
  },
  661,
  [],
);
