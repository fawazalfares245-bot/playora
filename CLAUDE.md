# Rush X (rush-x.xyz)

Single-page Expo Router / React Native Web app shipped as one self-contained HTML file and deployed on
Vercel as a static site. The original Expo project source is not in this repository; the compiled bundle is
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
  `tools/flows-xcut.mjs`, `tools/flows-kids.mjs`, `tools/flows-consumer.mjs`, `tools/flows-lifecycle.mjs`,
  `tools/flows-cancel.mjs`, `tools/rules.mjs` – the regression suites. Run all ten after any bundle change.
  `flows-cancel.mjs` runs one fixture - a paid, seated, boarded player - out through all five exits
  (`mockLeaveMatch`, `mockCancelBooking`, `mockKickPlayer`, `cancelGameLocked`, the squad sweep) and
  diffs the same five-part answer from each: booking status, payment status, wallet delta,
  cancellation reason and lineup slot. Only the reason is allowed to differ.
  `flows-lifecycle.mjs` is the odd one out: instead of testing a screen it drives one world through
  the whole booking sequence (reserve a court, create a paid match, join, waitlist, pay, leave,
  refund, promote, check in, mark attendance, submit a score), checking the money at each step. Most
  of the audit's defects were correct in isolation and only wrong in sequence, which is what it is
  for. `bookingInvariants`/`assertBookingInvariants` in `tools/smoke.mjs` assert the four properties
  every booking transition must preserve - one live booking per player per match, no attendance on a
  cancelled or rejected row, no reserved row without a future hold, no match seated past capacity -
  and any suite can run them over the world it has just built.
- `tools/smoke.mjs` – headless Playwright harness: `node tools/smoke.mjs /admin/organizers --role admin`
  boots the app with a seeded session and prints visible text and console/page errors. Import `openApp`
  from it to script flows.
- `docs/audit/` – two audit reports (PDF), raw findings, fix status files and the route → module map.
  `Playora_Admin_Organizer_Audit.pdf` covers the staff surface; `Playora_Consumer_Audit.pdf` covers the
  68 player-facing routes.
- `vercel.json` – the deployment. Vercel serves the repo root statically: every path rewrites to
  `index.html` (client-side routing) and everything is sent `Cache-Control: no-store`, so a phone
  cannot sit on an old shell. There is no build step; `index.html` is committed ready to serve.
- `package.json` – tooling only (prettier for `tools/bundle.py`, the smoke harness). Nothing here runs
  in production.
- `rpc.ts`, `auth/jwt.ts`, `.env.example` – server-side stubs for a future API; not used by the bundle.

## Deployment, and where the real source lives

Three facts that cost a long diagnosis to establish. Read them before concluding a shipped change is a
code bug.

- **This repo is not the only thing that deploys.** Builds can also be pushed straight from a laptop with
  the Vercel CLI, which never touches GitHub. The live site has carried changes that exist in no
  repository at all (the 16+ age gate arrived that way while this repo still said 13). Before assuming
  production matches `main`, compare the `buildId` on the profile screen against `index.html` here.
- **Four Vercel projects are connected to this repo** - `playora`, `playora-app`, `playora-9eza` and
  `fawazalfares245-bot-playora`. Every push builds all four, and a PR is two pushes, which is how a
  normal day hit the Hobby plan's 100-builds-per-day cap and pinned every deployment at "rate limited,
  retry in 24 hours" for a full day. `vercel.json`'s `ignoreCommand` now limits builds to `main`; it
  exits 1 on `main` (build) and 0 elsewhere (skip), because Vercel treats exit 0 as "skip".
- **The Expo source that produces `index.html` is not in any repo.** It lives on one laptop, uncommitted.
  Anything edited in `bundle-src/` is a patch to a build artifact: the next Expo build overwrites it
  silently and without conflict. That has already happened at least once. Until the Expo project is
  pushed somewhere, treat every bundle edit as temporary and keep a replay list.


## Key module ids

631 mock backend (all business rules, `Qt` in-memory DB, persistence via localStorage keys `playora.mock.*.v1`),
671 API facade, 672 store proxy (tries `POST {backendUrl}/rpc`, falls back to the mock), 673 backend transport,
674 error-code → i18n key map, 909 translations (`en`/`ar`, keep both in sync — no duplicate keys), 643 audit log
(`playora.audit.v1` general, `playora.audit.admin.v1` privileged), 630 AuthProvider, 1809 root layout,
654 formation catalog (football rows + padel/tennis net-and-baseline shapes; `formationsForSport`,
`formationSlots(key, sport)`), 2382 FormationBoard (draws the pitch or court), 2449 lineup image export,
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

## Lineup & formation (654, 2382, 2448, 2449)

The board is sport-aware. Football keeps rows and a goalkeeper; padel and tennis get net/baseline
shapes with no keeper, their own court markings, surface colour and aspect ratio. Three rules:

- `formationSlots(key, sport)` must be given the sport, or a racket side falls back to the football
  auto-shape and gains a goalkeeper.
- Racket slot geometry must keep `y` within roughly 0.22-0.78. The board maps `y` to a percentage and
  clips at the court edge, and football's mapping is deliberately left alone (clamping it pushes the
  goalkeeper into the defenders).
- Racket formation names are words, so they carry a `labelKey` the screen translates; football names
  are numbers and use `label` directly.

## Working in this repo

- Never edit the minified bundle in `index.html` directly. Split the module, edit `bundle-src/<id>.js`, rebuild.
- New error codes: throw `E_SOME_CODE`, map it in 674, add `seSomeCode` to both locales in 909.
- New UI strings go into both `en` and `ar` in 909.
- Run the smoke harness for every screen you touch; it must report no console or page errors.
- `index.html` is large; use targeted `grep`/`python` rather than reading the whole file.
- Do not commit real secrets. Runtime configuration lives in the config block in `index.html`.
- `tools/bundle.py build` stamps `buildId` in that config block with a hash of the bundle. It is
  logged to the console on boot and shown at the bottom of the profile screen. When someone reports
  stale UI, compare that id against the one in `index.html` on `main` before assuming a code bug.
- The product is **Rush X**. The name is user-facing text only: `appName` and ~60 strings in 909 (both
  locales), the `<title>`, and the Expo manifest `name`/`shortName` in 543. Everything still spelled
  `playora` is an internal identifier and must NOT be renamed — the 104 `playora.mock.*.v1` storage
  keys, `playora_session`, `playora.audit.*`, the `@otp.playora.app` address that identifies every
  phone-created account, the `playora.app/t/` invite links already sent out, `__PLAYORA_CONFIG__`,
  and the Expo `slug`/`scheme`. Renaming those logs every user out or orphans their account.

## Scheduled work

`mockRunScheduledWork` (631) drives nine sweeps plus the reminder pass. There is no server and no cron,
so it is called from the AuthProvider (630) on session boot and on tab foreground, throttled to once
every five minutes and skipped for guests. `/admin` (module 9006) is the maintenance screen: it runs
`reconcileSeatPayments` on demand and lists the admin screens, which were previously reachable only by
typing their URLs. Anything that needs to run on a clock has to be hung off that boot hook until the
backend exists.

## The per-game and per-court locks

`Xt(gameId, fn)` and `pr(courtId, fn)` chain work per id in an in-memory Map and then call
`Ha(name, keys, fn)` (631), which looks for `withAdvisoryLock`, `getRows` and `setRows` on the storage
adapter. All three were absent, so the locks were per-tab promise chains and the re-read of the named
row sets was skipped entirely. Module 618 now provides them: `withAdvisoryLock` over the Web Locks API
(origin-scoped, so tabs queue against each other), and `getRows`/`setRows` as JSON row accessors.

Two things to keep in mind when touching this. Web Locks are not reentrant: taking the same lock name
inside a callback that already holds it deadlocks - the in-memory chain would have hung on that too, so
no current call site nests, and new ones must not. And each `Ha` call names the collections it re-reads;
a callback that writes a collection the call does not name still runs against whatever was in memory.
`Xt` names bookings only, while `qi` also writes payments, lineups and seatCancellations.
