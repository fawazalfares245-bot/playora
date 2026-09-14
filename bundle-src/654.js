__d(
  function (g, _r, _i, _a, _m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.suggestFormationKey =
        e.sportOf =
        e.racketShape =
        e.formationsForSport =
        e.RACKET_CATALOG =
        e.slotsForShape =
        e.seededShuffle =
        e.roleLabelKey =
        e.pairKey =
        e.formationsForSize =
        e.formationSlots =
        e.balanceTeams =
        e.autoRows =
        e.assignSlots =
        e.FORMATION_CATALOG =
          void 0));
    const o = {
        "4-4-2": { label: "4-4-2", rows: [4, 4, 2] },
        "4-3-3": { label: "4-3-3", rows: [4, 3, 3] },
        "3-5-2": { label: "3-5-2", rows: [3, 5, 2] },
        "5-3-2": { label: "5-3-2", rows: [5, 3, 2] },
        "4-2-3-1": { label: "4-2-3-1", rows: [4, 2, 3, 1] },
        "9v9-3-3-2": { label: "3-3-2", rows: [3, 3, 2] },
        "8v8-3-3-1": { label: "3-3-1", rows: [3, 3, 1] },
        "7v7-2-3-1": { label: "2-3-1", rows: [2, 3, 1] },
        "5v5-1-2-1": { label: "1-2-1", rows: [1, 2, 1] },
      },
      t = (o) => {
        const t = [{ id: "gk", role: "GK", x: 0.5, y: 0.08 }],
          s = {};
        return (
          o.forEach((r, l) => {
            const n = ((a = l), (c = o.length), 0 === a ? "DF" : a === c - 1 ? "FW" : "MF");
            var a, c;
            const i = 0.28 + (l / Math.max(1, o.length - 1)) * 0.6;
            for (let l = 0; l < r; l++) {
              const a = (l + 1) / (r + 1),
                c = (s[n] = (s[n] ?? 0) + 1);
              t.push({ id: `${n.toLowerCase()}-${c}`, role: n, x: a, y: 1 === o.length ? 0.6 : i });
            }
          }),
          t
        );
      };
    e.slotsForShape = t;

    // Racket sports are not football with fewer players: there is no goalkeeper, the court is a
    // different shape, and the tactics are about depth (who is at the net, who is at the back).
    // y = 0 is your own baseline and y = 1 is the net, matching the board's coordinate system.
    const p = {
      "padel-singles": {
        sport: "padel",
        labelKey: "formPadelSingles",
        slots: [{ id: "p1", role: "BASE", x: 0.5, y: 0.24 }],
      },
      "padel-both-back": {
        sport: "padel",
        labelKey: "formPadelBothBack",
        slots: [
          { id: "back-l", role: "BASE", x: 0.3, y: 0.24 },
          { id: "back-r", role: "BASE", x: 0.7, y: 0.24 },
        ],
      },
      "padel-one-up": {
        sport: "padel",
        labelKey: "formPadelOneUp",
        slots: [
          { id: "net-1", role: "NET", x: 0.34, y: 0.76 },
          { id: "back-1", role: "BASE", x: 0.66, y: 0.24 },
        ],
      },
      "padel-both-net": {
        sport: "padel",
        labelKey: "formPadelBothNet",
        slots: [
          { id: "net-l", role: "NET", x: 0.3, y: 0.76 },
          { id: "net-r", role: "NET", x: 0.7, y: 0.76 },
        ],
      },
      "tennis-singles": {
        sport: "tennis",
        labelKey: "formTennisSingles",
        slots: [{ id: "p1", role: "BASE", x: 0.5, y: 0.24 }],
      },
      "tennis-standard": {
        sport: "tennis",
        labelKey: "formTennisStandard",
        slots: [
          { id: "net-1", role: "NET", x: 0.32, y: 0.76 },
          { id: "back-1", role: "BASE", x: 0.68, y: 0.22 },
        ],
      },
      "tennis-both-back": {
        sport: "tennis",
        labelKey: "formTennisBothBack",
        slots: [
          { id: "back-l", role: "BASE", x: 0.3, y: 0.22 },
          { id: "back-r", role: "BASE", x: 0.7, y: 0.22 },
        ],
      },
      "tennis-both-net": {
        sport: "tennis",
        labelKey: "formTennisBothNet",
        slots: [
          { id: "net-l", role: "NET", x: 0.3, y: 0.76 },
          { id: "net-r", role: "NET", x: 0.7, y: 0.76 },
        ],
      },
      "tennis-australian": {
        sport: "tennis",
        labelKey: "formTennisAustralian",
        slots: [
          { id: "net-1", role: "NET", x: 0.6, y: 0.76 },
          { id: "back-1", role: "BASE", x: 0.7, y: 0.22 },
        ],
      },
    };
    e.RACKET_CATALOG = p;
    const R = (o) => "padel" === o || "tennis" === o;
    e.sportOf = (o) => p[o]?.sport ?? "football";
    // Fallback shape for a racket side of any size: spread across the court, alternating net and back.
    const S = (o, t) => {
      const s = [];
      for (let r = 0; r < o; r++) {
        const l = o === 1 ? 0.5 : (r + 1) / (o + 1),
          n = r % 2 == 0 && o > 1;
        s.push({ id: `${n ? "net" : "base"}-${r + 1}`, role: n ? "NET" : "BASE", x: l, y: n ? 0.76 : 0.24 });
      }
      return s;
    };
    e.racketShape = S;
    const s = (e.FORMATION_CATALOG = Object.entries(o).map(([o, t]) => ({
      key: o,
      label: t.label,
      team_size: t.rows.reduce((o, t) => o + t, 0) + 1,
    })));
    e.formationSlots = (s, f) => {
      if (p[s]) return p[s].slots.map((o) => Object.assign({}, o));
      const l = o[s];
      if (l) return t(l.rows);
      const n = /^custom-(\d+)$/.exec(s),
        a = n ? Math.max(1, Math.min(11, parseInt(n[1], 10))) : 7;
      // A racket side has no goalkeeper, so the football fallback (which always prepends one) is wrong.
      if (R(f)) return S(a, f);
      return t(r(Math.max(1, a - 1)));
    };
    const r = (o) => {
      if (o <= 3) return [o];
      const t = Math.ceil(o / 3),
        s = Math.floor(o / 4) || 1;
      return [t, o - t - s, s];
    };
    e.autoRows = r;
    const F = (o, t) => {
      if (R(t)) {
        const r = Object.entries(p)
          .filter(([, s]) => s.sport === t && s.slots.length === o)
          .map(([r, s]) => ({ key: r, label: s.labelKey, labelKey: s.labelKey, team_size: o }));
        return [...r, { key: `custom-${o}`, label: "Custom", labelKey: "formCustom", team_size: o }];
      }
      return [...s.filter((t) => t.team_size === o), { key: `custom-${o}`, label: "Custom", team_size: o }];
    };
    e.formationsForSport = F;
    e.formationsForSize = (o, t) => F(o, t);
    e.suggestFormationKey = (o, t = 0.5, f) => {
      if (R(f)) {
        const r = Object.entries(p).filter(([, s]) => s.sport === f && s.slots.length === o);
        if (!r.length) return `custom-${o}`;
        // One up, one back is the default shape both sports are actually taught with.
        const l = r.find(([s]) => s.endsWith("one-up") || s.endsWith("standard") || s.endsWith("singles"));
        return (l ?? r[0])[0];
      }
      const s = {
        11: ["4-3-3", "5-3-2"],
        9: ["9v9-3-3-2", "9v9-3-3-2"],
        8: ["8v8-3-3-1", "8v8-3-3-1"],
        7: ["7v7-2-3-1", "7v7-2-3-1"],
        5: ["5v5-1-2-1", "5v5-1-2-1"],
      }[o];
      return s ? (t < 0.4 ? s[1] : s[0]) : `custom-${o}`;
    };
    const l = (o, t) => (o < t ? `${o}|${t}` : `${t}|${o}`);
    e.pairKey = l;
    const n = (o, t, s) => {
      let r = 0;
      for (const s of o) r += t.get(s)?.composite ?? 0;
      let n = 0;
      for (let t = 0; t < o.length; t++)
        for (let r = t + 1; r < o.length; r++) n += s.get(l(o[t], o[r])) ?? 0;
      return r + 0.15 * n;
    };
    e.balanceTeams = (o, t = new Map()) => {
      const s = [...o].sort((o, t) => t.composite - o.composite || o.id.localeCompare(t.id)),
        r = [],
        l = [];
      s.forEach((o, t) => (t % 4 == 0 || t % 4 == 3 ? r : l).push(o.id));
      const a = new Map(o.map((o) => [o.id, o]));
      for (let o = 0; o < 60; o++) {
        const o = () => Math.abs(n(r, a, t) - n(l, a, t));
        let s = !1;
        for (let t = 0; t < r.length && !s; t++)
          for (let n = 0; n < l.length && !s; n++) {
            const a = o();
            (([r[t], l[n]] = [l[n], r[t]]), o() < a - 1e-9 ? (s = !0) : ([r[t], l[n]] = [l[n], r[t]]));
          }
        if (!s) break;
      }
      return { a: r, b: l };
    };
    e.assignSlots = (o, t, s) => {
      const r = Object.fromEntries(o.map((o) => [o.id, null])),
        l = [...t].sort(
          (o, t) => (s.get(t)?.composite ?? 0) - (s.get(o)?.composite ?? 0) || o.localeCompare(t),
        );
      for (const t of ["GK", "DF", "MF", "FW"])
        for (const n of o.filter((o) => o.role === t)) {
          const o = l.findIndex((o) => s.get(o)?.pref === t);
          o >= 0 && (r[n.id] = l.splice(o, 1)[0]);
        }
      for (const t of o) null === r[t.id] && l.length > 0 && (r[t.id] = l.shift());
      return r;
    };
    e.roleLabelKey = (o) => `pitchRole_${o}`;
    e.seededShuffle = (o, t) => {
      const s = [...o];
      let r = t >>> 0;
      const l = () => {
        r = (r + 1831565813) >>> 0;
        let o = Math.imul(r ^ (r >>> 15), 1 | r);
        return ((o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o), ((o ^ (o >>> 14)) >>> 0) / 4294967296);
      };
      for (let o = s.length - 1; o > 0; o--) {
        const t = Math.floor(l() * (o + 1));
        [s[o], s[t]] = [s[t], s[o]];
      }
      return s;
    };
  },
  654,
  [],
);
