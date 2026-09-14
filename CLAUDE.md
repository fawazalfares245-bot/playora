# Playora (rush-x.xyz)

Single-page Expo Router / React Native Web app shipped as one self-contained HTML file and deployed on
Railway as a static site. The original Expo project source is not in this repository; the compiled bundle is
edited through the module tooling described below.

## Layout

- `index.html` – the full app. Line ~6: Content-Security-Policy. Next: the `window.__PLAYORA_CONFIG__` runtime
  config block (demo flag, admin emails, backend URL). Line ~30: inlined font/image assets. Then the Metro
  bundle (`__d(function(){...},<id>,[deps])` modules) and the entry call `__r(0)`.
- `bundle-src/<id>.js` – prettified copies of the modules that have been modified. `tools/bundle.py build`
  splices them back into `index.html` (idempotent). `bundle-src/new/<id>.js` are modules added by this repo
  (9001 = shared role-gate / error helpers, 9002 = `/organizer/new` redirect, 9003 = `/admin/audit` screen,
  9004 = kid UI kit, 9005 = `/kids` specimen screen).
- `tools/bundle.py` – `split <id...>` extracts modules from index.html into bundle-src; `build` rebuilds.
- `tools/flows-admin.mjs`, `tools/flows-organizer.mjs`, `tools/flows-org1.mjs`, `tools/flows-search.mjs`,
  `tools/flows-xcut.mjs`, `tools/flows-kids.mjs`, `tools/flows-consumer.mjs`, `tools/rules.mjs` – the
  regression suites. Run all eight after any bundle change.
- `tools/smoke.mjs` – headless Playwright harness: `node tools/smoke.mjs /admin/organizers --role admin`
  boots the app with a seeded session and prints visible text and console/page errors. Import `openApp`
  from it to script flows.
- `docs/audit/` – two audit reports (PDF), raw findings, fix status files and the route → module map.
  `Playora_Admin_Organizer_Audit.pdf` covers the staff surface; `Playora_Consumer_Audit.pdf` covers the
  68 player-facing routes.
- `package.json`, `serve.json`, `railway.json`, `nixpacks.toml` – static hosting via `serve -s` with SPA rewrites.
- `rpc.ts`, `auth/jwt.ts`, `.env.example` – server-side stubs for a future API; not used by the bundle.

## Key module ids

631 mock backend (all business rules, `Qt` in-memory DB, persistence via localStorage keys `playora.mock.*.v1`),
671 API facade, 672 store proxy (tries `POST {backendUrl}/rpc`, falls back to the mock), 673 backend transport,
674 error-code → i18n key map, 909 translations (`en`/`ar`, keep both in sync — no duplicate keys), 643 audit log
(`playora.audit.v1` general, `playora.audit.admin.v1` privileged), 630 AuthProvider, 1809 root layout,
18 Expo Router context (route table), 9001 shared role-gate/error helpers, 9002 `/organizer/new` redirect,
9003 `/admin/audit` privileged-action log screen, 9004 kid UI kit (snap/virtualised `KidScroll`,
`BigButton`, `LazyImage`, `CoachHand`, WebAudio feedback), 9005 `/kids` specimen screen.

## Kid UI kit (module 9004)

Web-only CSS that React Native Web's StyleSheet drops (scroll-snap, overscroll-behavior, keyframes) is
injected once as a `<style>` tag and targeted through the `dataSet` prop, which RNW turns into a
`data-` attribute. Two rules are load-bearing and easy to break:

- Snap must stay `proximity`. `mandatory` traps a fast flick and strands the scroller when a
  virtualised row unmounts mid-snap.
- `onViewableItemsChanged` and `viewabilityConfig` must never change identity, or VirtualizedList
  throws and unmounts the tree. Both are pinned with `useRef` and read live handlers from a ref.
  Any hook feeding them (`useKidSound`) therefore returns stable function identities. Route → module map: `docs/audit/findings/route-module-map.txt`.

## Working in this repo

- Never edit the minified bundle in `index.html` directly. Split the module, edit `bundle-src/<id>.js`, rebuild.
- New error codes: throw `E_SOME_CODE`, map it in 674, add `seSomeCode` to both locales in 909.
- New UI strings go into both `en` and `ar` in 909.
- Run the smoke harness for every screen you touch; it must report no console or page errors.
- `index.html` is large; use targeted `grep`/`python` rather than reading the whole file.
- Do not commit real secrets. Runtime configuration lives in the config block in `index.html`.
