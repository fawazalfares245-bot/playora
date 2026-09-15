__d(
  function (g, r, i, a, m, e, d) {
    "use strict";
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.generateDynamic = e.extrapolateGroups = e.getIgnoreList = e.getRoutes = void 0));
    const t = r(d[0]),
      o = new Set(["android", "ios", "native", "web"]);
    function n(t, o) {
      o.importMode;
      const n = [/^\.\/\+(html|native-intent)\.[tj]sx?$/];
      (o.ignore && n.push(...o.ignore), o.preserveApiRoutes || n.push(/\+api\.[tj]sx?$/));
      const s = { files: new Map(), subdirectories: new Map() };
      let c = !1,
        h = !1;
      for (const f of t.keys()) {
        if (n.some((t) => t.test(f))) continue;
        h = !0;
        const p = u(f, o);
        if (p.specificity < 0) continue;
        let w = {
          type: p.isApi ? "api" : p.isLayout ? "layout" : "route",
          loadRoute() {
            let n;
            if (o.ignoreRequireErrors)
              try {
                n = t(f);
              } catch {
                n = {};
              }
            else n = t(f);
            return n;
          },
          contextKey: f,
          route: "",
          dynamic: null,
          children: [],
        };
        for (const t of l(p.route)) {
          const n = t.split("/").slice(0, -1);
          let u = s;
          for (const t of n) {
            let o = u.subdirectories.get(t);
            (o || ((o = { files: new Map(), subdirectories: new Map() }), u.subdirectories.set(t, o)),
              (u = o));
          }
          if (((w = Object.assign({}, w, { route: t })), p.isLayout)) {
            u.layout ??= [];
            u.layout[p.specificity] || ((w = y(w, o)), (u.layout[p.specificity] = w));
          } else if (p.isApi) {
            const o = `${t}+api`;
            let n = u.files.get(o);
            n || ((n = []), u.files.set(o, n));
            n[0] || (n[0] = w);
          } else {
            let o = u.files.get(t);
            o || ((o = []), u.files.set(t, o));
            o[p.specificity] || ((c ||= !0), (o[p.specificity] = w));
          }
        }
      }
      return h
        ? (s.layout || (s.layout = [o.getSystemRoute({ type: "layout", route: "" })]),
          o.skipGenerated || (c && !1 !== o.sitemap && f(s, o), !1 !== o.notFound && p(s, o)),
          s)
        : null;
    }
    function s(t, o, n, u = "") {
      if (t.layout) {
        const s = n;
        ((n = w(t.layout)), s && s.children.push(n), o.internal_stripLoadRoute && delete n.loadRoute);
        const l = n.route.replace(u, "");
        ((u = n.route ? `${n.route}/` : ""), (n.route = l), (n.dynamic = c(n.contextKey.slice(0))));
      }
      if (!n) throw new Error("Expo Router Internal Error: No nearest layout");
      for (const s of t.files.values()) {
        const t = w(s);
        ((t.route = t.route.replace(u, "")),
          (t.dynamic = c(t.route)),
          o.internal_stripLoadRoute && delete t.loadRoute,
          n.children.push(t));
      }
      for (const l of t.subdirectories.values()) s(l, o, n, u);
      return n;
    }
    function u(n, s) {
      const u = (n = n.replace(/^\.\//, "")).split("/");
      let l = (0, t.removeSupportedExtensions)(n);
      const c = u[u.length - 1],
        [f, p] = (0, t.removeSupportedExtensions)(c).split("."),
        y = "_layout" === f,
        h = c.match(/\+api\.(\w+\.)?[jt]sx?$/);
      if (f.startsWith("(") && f.endsWith(")"))
        throw new Error(`Invalid route ./${n}. Routes cannot end with '(group)' syntax`);
      if (!h && c.startsWith("+") && "+not-found" !== f) {
        const t = [...u.slice(0, -1), c.slice(1)].join("/");
        throw new Error(
          `Invalid route ./${n}. Route nodes cannot start with the '+' character. "Please rename to ${t}"`,
        );
      }
      let w = 0;
      const R = o.has(p),
        $ = s.platformRoutes ?? !0;
      if (R) {
        if (
          ($ && s.platform
            ? p === s.platform
              ? (w = 2)
              : "native" === p && "web" !== s.platform
                ? (w = 1)
                : p !== s.platform && (w = -1)
            : (w = -1),
          h && 0 !== w)
        )
          throw new Error(`Api routes cannot have platform extensions. Please remove '.${p}' from './${n}'`);
        l = l.replace(new RegExp(`.${p}$`), "");
      }
      return { route: l, specificity: w, isLayout: y, isApi: h };
    }
    function l(o, n = new Set()) {
      const s = (0, t.matchArrayGroupName)(o);
      if (!s) return (n.add(o), n);
      const u = s.split(",");
      if (new Set(u).size !== u.length)
        throw new Error(`Array syntax cannot contain duplicate group name "${u}" in "${o}".`);
      if (1 === u.length) return (n.add(o), n);
      for (const t of u) l(o.replace(s, t.trim()), n);
      return n;
    }
    function c(o) {
      const n = o
        .split("/")
        .map((o) => {
          if ("+not-found" === o) return { name: "+not-found", deep: !0, notFound: !0 };
          const n = (0, t.matchDeepDynamicRouteName)(o),
            s = n ?? (0, t.matchDynamicName)(o);
          return s ? { name: s, deep: !!n } : null;
        })
        .filter((t) => !!t);
      return 0 === n.length ? null : n;
    }
    function f(t, o) {
      // Expo Router's built-in sitemap is not registered. It rendered the whole route table as a plain
      // list of .tsx filenames - every admin screen, the venue portal and the scanner among them - to
      // anyone who typed the URL, and vercel.json rewrites every path to index.html so it was live.
      // Admin authorization in 631 is caller-supplied, so publishing the admin route inventory is
      // reconnaissance, not untidiness. Nothing in the app links to it except the unmatched-route
      // screen. vercel.json also redirects /_sitemap, which is the half that survives an Expo build.
      return;
    }
    function p(t, o) {
      !t.files.has("+not-found") &&
        o.getSystemRoute &&
        t.files.set("+not-found", [o.getSystemRoute({ type: "route", route: "+not-found" })]);
    }
    function y(o, n) {
      const s = (0, t.matchLastGroupName)(o.route),
        u = o.children.find((t) => t.route.replace(/\/index$/, "") === s);
      let l = u?.route;
      const c = o.loadRoute();
      if (c?.unstable_settings) {
        try {
          l = c.unstable_settings.initialRouteName ?? l;
        } catch (t) {
          if (t instanceof Error && !t.message.match(/You cannot dot into a client module/)) throw t;
        }
        if (s) {
          const t = c.unstable_settings?.[s]?.initialRouteName;
          l = t ?? l;
        }
      }
      return Object.assign({}, o, {
        route: o.route.replace(/\/?_layout$/, ""),
        children: [],
        initialRouteName: l,
      });
    }
    function h(o, n, s = []) {
      if ("route" === o.type) o.entryPoints = [...new Set([...s, o.contextKey])];
      else if ("layout" === o.type) {
        if (!o.children) throw new Error(`Layout "${o.contextKey}" does not contain any child routes`);
        s = [...s, o.contextKey];
        const u = (0, t.matchGroupName)(o.route),
          l = o.children.find((t) => t.route.replace(/\/index$/, "") === u);
        let c = l?.route;
        if (!n.internal_stripLoadRoute) {
          const t = o.loadRoute();
          if (t?.unstable_settings) {
            try {
              c = t.unstable_settings.initialRouteName ?? c;
            } catch (t) {
              if (t instanceof Error && !t.message.match(/You cannot dot into a client module/)) throw t;
            }
            if (u) {
              const o = t.unstable_settings?.[u]?.initialRouteName;
              c = o ?? c;
            }
          }
        }
        if (c) {
          const t = o.children.find((t) => t.route === c);
          if (!t) {
            const t = o.children
              .filter((t) => !t.generated)
              .map((t) => `'${t.route}'`)
              .join(", ");
            throw u
              ? new Error(
                  `Layout ${o.contextKey} has invalid initialRouteName '${c}' for group '(${u})'. Valid options are: ${t}`,
                )
              : new Error(
                  `Layout ${o.contextKey} has invalid initialRouteName '${c}'. Valid options are: ${t}`,
                );
          }
          ((o.initialRouteName = c), s.push(t.contextKey));
        }
        for (const t of o.children) h(t, n, s);
      }
    }
    function w(t) {
      const o = t[t.length - 1];
      if (!t[0])
        throw new Error(
          `The file ${o.contextKey} does not have a fallback sibling file without a platform extension.`,
        );
      return t[t.length - 1];
    }
    ((e.getRoutes = function (t, o) {
      const u = n(t, o);
      if (!u) return null;
      const l = s(u, o);
      return (o.ignoreEntryPoints || h(l, o), l);
    }),
      (e.getIgnoreList = function (t) {
        const o = [/^\.\/\+html\.[tj]sx?$/, ...(t?.ignore ?? [])];
        return (!0 !== t?.preserveApiRoutes && o.push(/\+api\.[tj]sx?$/), o);
      }),
      (e.extrapolateGroups = l),
      (e.generateDynamic = c));
  },
  573,
  [26],
);
