__d(
  function (g, r, i, a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0));
    var n = r(d[0]);
    const t = (Date.now() + "-" + Math.floor(1e9 * Math.random())).toString();
    function o() {
      if ("undefined" != typeof navigator && "string" == typeof navigator.userAgent) {
        const n = navigator.userAgent.toLowerCase();
        if (n.includes("edge")) return "Edge";
        if (n.includes("edg")) return "Chromium Edge";
        if (n.includes("opr") && window.opr) return "Opera";
        if (n.includes("chrome") && window.chrome) return "Chrome";
        if (n.includes("trident")) return "IE";
        if (n.includes("firefox")) return "Firefox";
        if (n.includes("safari")) return "Safari";
      }
    }
    e.default = {
      get appOwnership() {
        return null;
      },
      get executionEnvironment() {
        return n.ExecutionEnvironment.Bare;
      },
      get sessionId() {
        return t;
      },
      get isHeadless() {
        return "undefined" == typeof navigator || /\bHeadlessChrome\//.test(navigator.userAgent);
      },
      get expoVersion() {
        return this.manifest.sdkVersion || null;
      },
      get linkingUri() {
        return "undefined" != typeof location ? location.origin : "";
      },
      get expoRuntimeVersion() {
        return this.expoVersion;
      },
      get deviceName() {
        return o();
      },
      get systemFonts() {
        return [];
      },
      get statusBarHeight() {
        return 0;
      },
      get deviceYearClass() {
        return null;
      },
      get manifest() {
        return '{"name":"Rush X","slug":"playora","version":"0.1.0","orientation":"portrait","icon":"./assets/icon.png","scheme":"playora","userInterfaceStyle":"automatic","newArchEnabled":true,"splash":{"image":"./assets/splash.png","resizeMode":"contain","backgroundColor":"#0B0B0F"},"web":{"bundler":"metro","favicon":"./assets/favicon.png","output":"single","shortName":"Rush X","orientation":"portrait","backgroundColor":"#0B0B0F","name":"Rush X"},"experiments":{"typedRoutes":true},"sdkVersion":"52.0.0","platforms":["ios","android","web"],"extra":{"router":{"origin":false}}}';
      },
      get manifest2() {
        return null;
      },
      get experienceUrl() {
        return "undefined" != typeof location ? location.origin : "";
      },
      get debugMode() {
        return !1;
      },
      getWebViewUserAgentAsync: async () => ("undefined" != typeof navigator ? navigator.userAgent : null),
    };
  },
  543,
  [542],
);
