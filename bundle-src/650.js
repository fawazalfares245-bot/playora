__d(
  function (g, r, i, a, m, e, _d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.canonicalPhone = u),
      (e.checkPasswordStrength = n),
      (e.isDialablePhone = function (t) {
        const s = u(t);
        if (!s.startsWith("+")) return !1;
        const n = s.slice(1);
        return n.startsWith("965") ? c.test(n.slice(3)) : n.length >= 8 && n.length <= 15;
      }),
      (e.isStrongPassword = function (t) {
        return 0 === n(t).length;
      }),
      (e.isValidEmail = function (t) {
        return s.test(t) && t.length <= 254;
      }),
      (e.sanitizeName = function (t) {
        return t
          .replace(/[^\p{L}\s'\-.]/gu, "")
          .slice(0, 80)
          .trim();
      }),
      (e.sanitizePhone = function (t) {
        return t
          .replace(/[^\d+\-\s()]/g, "")
          .slice(0, 24)
          .trim();
      }),
      (e.sanitizeText = function (s, n = 2e3) {
        return s.replace(t, "").slice(0, n).trim();
      }));
    const t = new RegExp("[\\u0000-\\u001F\\u007F]", "g");
    const s = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    function n(t) {
      const s = [];
      return (
        t.length < 12 && s.push("too_short"),
        /[a-z]/.test(t) || s.push("needs_lower"),
        /[A-Z]/.test(t) || s.push("needs_upper"),
        /[0-9]/.test(t) || s.push("needs_number"),
        /[^A-Za-z0-9]/.test(t) || s.push("needs_symbol"),
        s
      );
    }
    const c = /^[569]\d{7}$/;
    function u(t) {
      const s = t
          .replace(/[\u0660-\u0669]/g, (t) => String(t.charCodeAt(0) - 1632))
          .replace(/[\u06f0-\u06f9]/g, (t) => String(t.charCodeAt(0) - 1776))
          .trim(),
        n = s.startsWith("+") || s.startsWith("00");
      let u = s.replace(/\D/g, "");
      return (
        s.startsWith("00") && (u = u.slice(2)),
        (u = u.slice(0, 15)),
        u
          ? (n || (u = u.replace(/^0+/, "")),
            u
              ? u.startsWith("965") && c.test(u.slice(3))
                ? "+965" + u.slice(3)
                : c.test(u)
                  ? "+965" + u
                  : n || u.length >= 10
                    ? "+" + u
                    : ""
              : "")
          : ""
      );
    }
  },
  650,
  [],
);
