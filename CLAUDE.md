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

## The booking state machine

A booking has six statuses. Every one of them is written from more than one place, and almost every
defect the audit found was one of those places applying a guard the others applied too, or not
applying one they did. This is what owns each transition and what it has to check first.

| status | who writes it | what it must check |
| --- | --- | --- |
| `pending` | `ji` on a `approval_mode: 'manual'` match | a seat must still exist (`ki(game) < max_players`), or the request queues or is refused - not a pending row against a seat that is gone |
| `waitlisted` | `ji` when `ki(game) >= max_players` | the waitlist has its own capacity (`waitlist_capacity`) |
| `reserved` | `Di`, promoting the head of the waitlist | a future `reserved_until`; `Di` promotes only while the match is neither cancelled nor finished |
| `confirmed` | `ji` (free or immediately payable), `mockApproveParticipant`, `settleSeatPayment9`, `Wr` (a late payment with no row left), `mockGatewayWebhook`, `mockPayGroup` | `assertMayHoldSeat9` - audience, ban, active sanction, Code of Conduct - and `ki(game) < max_players`, inside `Xt(gameId, ...)` |
| `cancelled` | `qi` (`mockLeaveMatch`, and `mockCancelBooking` delegates to it), `mockKickPlayer`, `cancelGameLocked`, `Vi` (squad sweep), `mockExpireSeatHold`, `Zr` (hold sweep), `Jr` (reconciler), `Di` (expiry half), `mockAcceptReplacement`, `mockCancelGroupMember` | settle the payment, write a `seatCancellations` row with a reason, free the lineup slot, then `Di` to backfill. `tools/flows-cancel.mjs` holds the five paths to the same answer |
| `rejected` | `mockRejectParticipant` | terminal, like `cancelled`: neither may ever carry an `attendance` mark |

Three rules cut across all of it:

- **A seat is `yi`, a participant is `countsAsParticipant9`.** `yi` is confirmed-or-live-hold and is what
  `ki` counts against `max_players`. `countsAsParticipant9` is "was in this match" and is what the
  stats read. They are not interchangeable and both have one definition.
- **Attendance is written by two functions** - `mockSetAttendance` and `mockScanCheckin` - and both
  apply the same three guards: the booking is neither cancelled nor rejected, the match has ended,
  and it is within 48 h of `score_submitted_at`.
- **Expiry and promotion are lazy.** Nothing runs on a clock; both halves of `Di` run when the match
  is next read. A test that asserts a hold has lapsed must read the match first.
- **Four functions besides `ji` push a row into `Qt.bookings`**: `Wr`, `mockAcceptReplacement`,
  `mockCreateGroupBooking`, and `ji` itself (`Wi` seats the organizer on their own new match; `an`
  and `Fo` are demo seeding and reset). Each had grown its own guard list and each list had drifted -
  the group reservation had no audience or visibility check at all, the replacement path was missing
  the Code of Conduct check. They all call `assertMayHoldSeat9` now, and `tools/rules.mjs` pins the
  set, so a new writer fails the check rather than whatever it would have let through.

## Who may read a match

`maySeeMatch9(game, callerId)` (631) is the single visibility gate: a private match is readable by its
organizer, by anyone holding a live booking on it, and by an admin. `ra(callerId, game.audience)` is
the second gate and throws `AUDIENCE_MISMATCH`. Both are applied together by `Ni` (`mockGetGame`),
`Ui` (`mockGetGamePlayers`) and `uc` (`mockGetLineup`), and a caller who fails either is told the
match does not exist.

The gate used to live inside `Ni` alone, which is the shape this class of bug takes: the screen
assembles its payload from several readers and only one of them checks. `mockGetGameScreen` fetched
the roster, the lineup, the fit score and the evaluation targets before it looked at what `Ni` had
returned, so a stranger got `game: null` alongside every player's name and id. It now returns an
empty payload the moment `Ni` refuses. `Qi` (`mockGetMatchParticipants`) is organizer-or-admin: it
carries seat-payment ids, methods and amounts, so a participant does not get it either.

The same gate applies to `mockGetAwardBallot` (its nominee list is the roster), `mockGetGroupConfig`
and `mockGetMatchAwards`. `mockCreateGroupBooking` is a **write** that never went through `ji` - it
pushes `reserved` booking rows straight into `Qt.bookings` - so it takes `maySeeMatch9` and
`assertMayHoldSeat9`, for every friend on the reservation as well as the leader.

Match chat is narrower than the match: `mayChat9(gameId, callerId)` requires the visibility and
audience gates **and** that the caller is a participant, the organizer, or an admin. It guards
`mockGetChatMessages`, `mockSendChatMessage` and `mockEnsureChatSeed`. Neither side had any gate at
all - a signed-out visitor could read a private match's whole conversation, and a stranger could post
into any match under any display name, because the author's name arrived in the payload. It comes
from the profile now. `/chat/[gameId]` (module 1843) enforces nothing itself and renders whatever id
is in the URL, so it must handle the refusal: it catches, shows the `chatClosed*` empty state and
hides the composer.

Anything new that reads or seats against a match by id belongs behind the same calls.
`tools/rules.mjs` asserts the matrix - outsider, guest, participant, organizer, admin, against both
a private and a public match. Test the organizer too: a reader with no data refuses everyone and
looks gated when it is not, and two of these were "verified" that way before the control was added.

## Profile privacy: two models, one of them was decorative

There are two, side by side, set from different screens:

- `privacySettings.profile_visibility` - `public` / `followers` / `private`. Enforced by
  `mockGetPlayerProfile`, `mockGetFollowList` and the discovery lists.
- `profiles.privacy_visibility` - `everyone` / `same_audience` / `connections`, set from
  `/privacy-controls` (module 2477), which previews what each option hides. It was written and read
  by nothing. `same_audience` needed no wiring: `oa` blocks every cross-audience profile read for
  everyone, whatever they choose - so it is already the floor, and `everyone` is the option that does
  not do what it says. `connections` did nothing at all, so the restrictive choice left the bio, the
  favourite sports and the stats readable by a stranger. It now feeds the same limited branch, with
  `limited_reason: 'connections'`, and takes the display name with it because that is what the
  screen's own preview promises.

`isConnection9(a, b)` is the test: self, either follows the other, friends, or they have played in
the same match (`countsAsParticipant9` on both sides of one game).

**Not changed, and a product decision rather than a bug:** `everyone` cannot open a profile across
audiences, because `oa` is the stronger rule and relaxing it would weaken a safety boundary.

## A trap in the smoke harness

`seedScript` is installed with `page.addInitScript`, so it runs on **every navigation and reload**,
and it rewrites `playora.mock.profiles.v1` wholesale with `privacy_visibility: 'everyone'`. Any
fixture that changes a profile and then navigates is silently reset - the assertion afterwards
measures the seed, not the change. Games, bookings and the other collections are not re-seeded, which
is why the `goto`-then-assert pattern works for them. To set up profile state across a navigation,
pass `initScript` to `openApp`: it runs after the seed and can patch it.

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
