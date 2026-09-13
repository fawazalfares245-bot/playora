__d(
  function (g, r, i, a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.smsProvider = e.smsConfigured = e.logProvider = e.httpProvider = void 0));
    const o = (o) => ("undefined" != typeof process ? process.env?.[o] : void 0) || void 0,
      t = (e.logProvider = {
        name: "log",
        send: async (o, t) => {
          console.log(`[sms:log] to \u2026${o.slice(-4)}: message sent (${t.length} chars)`);
        },
      }),
      s = (t, s, n) => ({
        name: "http",
        send: async (c, S) => {
          const p = o("SMS_PROVIDER_BODY"),
            _ = p
              ? p
                  .replace("{{to}}", c)
                  .replace("{{text}}", S)
                  .replace("{{sender}}", n ?? "")
              : JSON.stringify({ to: c, text: S, sender: n }),
            l = await fetch(t, {
              method: "POST",
              headers: Object.assign(
                { "content-type": "application/json" },
                s ? { authorization: `Bearer ${s}` } : {},
              ),
              body: _,
            });
          if (!l.ok) throw new Error(`SMS provider rejected the send (${l.status})`);
        },
      });
    e.httpProvider = s;
    e.smsConfigured = () => !!o("SMS_PROVIDER_URL");
    e.smsProvider = () => {
      const n = o("SMS_PROVIDER_URL");
      return n ? s(n, o("SMS_PROVIDER_TOKEN"), o("SMS_SENDER_ID")) : t;
    };
  },
  642,
  [],
);
