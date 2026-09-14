__d(
  function (g, r, i, _a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.exportLineupImage = async function (t, l) {
        const n = document.createElement("canvas");
        ((n.width = 900), (n.height = 1300));
        const s = n.getContext("2d");
        if (!s) return !1;
        // The shared image has to match the sport too, or a padel lineup is exported as a football pitch.
        const sp = t.sport,
          T9 = 90,
          B9 = 1260,
          H9 = B9 - T9,
          MID = T9 + H9 / 2,
          line = (y) => {
            (s.beginPath(), s.moveTo(20, y), s.lineTo(880, y), s.stroke());
          },
          vline = (y1, y2) => {
            (s.beginPath(), s.moveTo(450, y1), s.lineTo(450, y2), s.stroke());
          };
        ((s.fillStyle = "padel" === sp ? "#2B5FAE" : "tennis" === sp ? "#B4593A" : "#17683B"),
          s.fillRect(0, 0, 900, 1300),
          (s.strokeStyle = "rgba(255,255,255,0.65)"),
          (s.lineWidth = 3),
          s.strokeRect(20, T9, 860, H9));
        if ("padel" === sp) {
          // net, then the service lines 6.95m from it on a 20m court, then the centre service lines
          ((s.lineWidth = 5), line(MID), (s.lineWidth = 3));
          (line(T9 + 0.153 * H9), line(T9 + 0.847 * H9));
          (vline(T9, T9 + 0.153 * H9), vline(T9 + 0.847 * H9, B9));
          // glass back walls
          ((s.fillStyle = "rgba(255,255,255,0.16)"),
            s.fillRect(20, T9, 860, 0.04 * H9),
            s.fillRect(20, B9 - 0.04 * H9, 860, 0.04 * H9));
        } else if ("tennis" === sp) {
          ((s.lineWidth = 5), line(MID), (s.lineWidth = 3));
          (line(T9 + 0.231 * H9), line(T9 + 0.769 * H9));
          vline(T9 + 0.231 * H9, T9 + 0.769 * H9);
          // singles sidelines inside the doubles tramlines
          for (const x of [20 + 0.125 * 860, 880 - 0.125 * 860]) {
            (s.beginPath(), s.moveTo(x, T9), s.lineTo(x, B9), s.stroke());
          }
        } else {
          (line(MID), s.beginPath(), s.arc(450, MID, 90, 0, 2 * Math.PI), s.stroke());
        }
        ((s.fillStyle = "#fff"),
          (s.font = "bold 40px system-ui, sans-serif"),
          (s.textAlign = "center"),
          s.fillText(l.slice(0, 40), 450, 58));
        const f = (t, l, n, f) => {
          ((s.font = "bold 26px system-ui, sans-serif"),
            (s.fillStyle = "#FDE68A"),
            (s.textAlign = l ? "right" : "left"),
            s.fillText(`${n} \xb7 ${f}`, l ? 864 : 36, l ? 130 : 1244));
          for (const n of t) {
            const t = 780 * (l ? 1 - n.x : n.x) + 60,
              f = T9 + H9 * (l ? 0.5 * n.y : 1 - 0.5 * n.y);
            (s.beginPath(),
              s.arc(t, f, 26, 0, 2 * Math.PI),
              (s.fillStyle = n.player_id ? "#0F172A" : "rgba(255,255,255,0.25)"),
              s.fill(),
              (s.strokeStyle = "#fff"),
              (s.lineWidth = 3),
              s.stroke(),
              (s.fillStyle = "#fff"),
              (s.font = "bold 20px system-ui, sans-serif"),
              (s.textAlign = "center"));
            const a = n.player_name
              ? n.player_name
                  .split(" ")
                  .map((t) => t[0])
                  .slice(0, 2)
                  .join("")
              : "\xb7";
            (s.fillText(null != n.jersey ? String(n.jersey) : a, t, f + 7),
              n.captain &&
                ((s.fillStyle = "#FACC15"),
                s.beginPath(),
                s.arc(t + 22, f - 22, 11, 0, 2 * Math.PI),
                s.fill(),
                (s.fillStyle = "#1F2937"),
                (s.font = "bold 14px system-ui, sans-serif"),
                s.fillText("C", t + 22, f - 17)),
              (s.fillStyle = "#fff"),
              (s.font = "16px system-ui, sans-serif"),
              s.fillText((n.player_name ?? n.role).slice(0, 14), t, f + 48));
          }
        };
        (f(t.a.slots, !1, "Team A", t.a.formation_key), f(t.b.slots, !0, "Team B", t.b.formation_key));
        const a = document.createElement("a");
        return (
          (a.href = n.toDataURL("image/png")),
          (a.download = `lineup-${t.game_id.slice(-6)}.png`),
          a.click(),
          !0
        );
      }));
  },
  2449,
  [],
);
