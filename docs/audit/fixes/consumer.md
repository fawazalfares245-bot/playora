# Consumer-side audit — fix status

Fixes applied in the same pass as the audit. Everything here is covered by a test that fails without
the fix; run `node tools/rules.mjs` and `node tools/flows-consumer.mjs`.

- F-CQUAL-1: Fixed — `mockVerifyOtp` (bundle-src/631.js) read the stored OTP record without awaiting
  it, so every field read as undefined: the expiry check and the attempt cap were no-ops and the code
  comparison was always unequal. Every phone sign-in and sign-up threw "wrong code", and sign-up
  caught that by bouncing the user back to the code step and re-sending, which is an unbreakable loop.
  The read is now awaited, the attempt counter is persisted so the cap can trip, and the code is
  invalidated before a session is returned. `tools/rules.mjs` now drives request → check → verify end
  to end, and asserts a wrong code is rejected and a used code cannot be replayed.
- F-CARCH-1: Fixed — the group booking screen (bundle-src/2444.js) gated its loading effect on
  `"reserving" === R?.group.status`, where `R` was the state that effect alone produced. `R` could
  therefore never become non-null, so the hold countdown, the member statuses and "Pay your share"
  could never mount: seats were reserved and then stranded, and re-reserving threw already_booked
  while the hold was live. The screen now loads the booking when it finds an existing group and when
  one is created, and the poll keys on the group id alone and stops from inside. Covered by
  `tools/flows-consumer.mjs`, which fails against the previous code.
- F-CSEC-1: Fixed — the OTP branch hand-rolled its session write, dropping the 30-day expiry and
  deriving the bearer token from `Math.random`. Phone is the primary sign-in route, so that was every
  returning user. It now goes through `li()`, which stamps `expires_at`, and uses the CSPRNG.
- F-CSEC-1 (second half): Fixed — `loadSession` treated `expires_at` as optional, so any session
  written without one was honoured forever. A session with no expiry stamp is now rejected and
  cleared. `tools/smoke.mjs` was seeding exactly such a session, which is part of why this was not
  caught; the harness now seeds a realistic one.

Second pass (this branch) — the remaining confirmed findings:

- F-CSEC-5: Fixed — `mockSearchPlayers` only filtered `private`, so the listing returned exactly the
  attributes `mockGetPlayerProfile` withholds from a non-follower. The two settings are answered
  according to what each promises: `connections` drops the row entirely, `followers` reduces it
  (`skill_level: "all"`, `sports: []`, `area: null`, `limited: true`). A gated row is also dropped
  from a filtered search, so an attribute filter cannot be used to probe what the row hides.
- F-CSEC-7: Partially fixed — `mockUpsertReview` now requires the venue to exist
  (`E_VENUE_NOT_FOUND`) and the author to have actually played there: a match at that venue they
  participated in, or a court they booked. New code `E_ONLY_PLAYERS_WHO_HAVE_PLAYED_HERE`, mapped in
  674 and in both locales. The other half — that the author is taken from the payload rather than a
  session — is F-XC-1: there is no server, so the caller id is the credential everywhere in 631.
- F-CQUAL-7: Fixed — `mockSignIn` throws `E_INVALID_EMAIL_OR_PASSWORD`, mapped in 674 with
  `seInvalidEmailOrPassword` in both locales, instead of a hardcoded English sentence.
- F-CSEC-10: Fixed — `signIn`, `signUp` and `adoptSession` all clear the persisted guest record when
  the adopted session is not itself a guest. Checked structurally in `tools/rules.mjs`: the three
  call sites live on the AuthProvider's context value, which a page evaluate cannot reach without
  rendering through React, so the check is that none of them is missing the helper.
- F-CSEC-11: Fixed — `auth.otp_requested` records the canonical phone, and `auth.otp_verified` moved
  below the account lookup so it names the existing account; the creation path logs its own new id.

Home screen (module 1677):

- F-CARCH-2: Fixed — the list rendered `G.suggested` and the map rendered `fetchUpcomingGames`, two
  different sets behind one toggle. The map is now built from the rows the list is showing, so the
  toggle changes the presentation and never the membership. Driving both from `ce` is what the
  finding suggests first and would also have closed it, but it would put the viewer's own and
  already-joined matches into a personalised list that deliberately leaves them out — a product
  change rather than a fix.
- F-CQUAL-3: Fixed — the month picker built its availability set from the union of both sources, so
  a marked day could dead-end on an empty list. It comes from the rows the list renders.
- F-CQUAL-2: Fixed — the day key was `toISOString().slice(0, 10)`, a UTC key, so in Kuwait (UTC+3)
  every kick-off between 00:00 and 02:59 sat under the previous day's divider and disagreed with its
  own card time. The key, the morning/afternoon/evening classifier and the four remaining
  device-zone labels all go through module 912's region zone now.
- F-CARCH-3: Fixed — `mockGetUpcomingGames` returned every public future match with no window and no
  bound, and swept each one's expired holds on the way, on every focus. It takes an optional `days`
  window and a `limit` applied after the sort, and the per-match sweep now runs over the page it
  returns rather than the whole future table. The bound is far above what any screen renders: it
  exists so the query cannot grow without limit as the table does, not to paginate.
- F-CQUAL-10: Fixed — the 14-day strip was derived from `new Date()` once at mount, on a tab that
  stays mounted for a 30-day session, so after midnight its first chip was yesterday and always
  empty. The existing minute tick now carries the current day and the strip rebuilds when it rolls.
- F-CQUAL-11: Fixed — the first-week "join a game" row was guarded by `next_up` with no fallback, so
  with no next-up match the tap logged a funnel event and went nowhere. It falls back to /discover,
  like the row below it.
- F-CQUAL-12: Fixed — four counts were wrapped in `String()` before module 675 could decide whether
  to convert them to Arabic-Indic digits, so they rendered Western digits inside Arabic sentences.

Screen robustness (modules 2450, 2502, 1840, 1842, 2374, 2445, 1837, 9001):

- F-CQUAL-6 / F-CQUAL-16: Fixed — `safeBack(router)` is exported from module 9001 (the fallback was
  already written inline in `GateScreen`) and replaces the unguarded `router.back()` on all seven
  card-presented screens. On a deep link, a shared URL or a reload there is no history to pop, so the
  only exit did nothing. `tools/flows-discovery.mjs` opens one of them directly and asserts the back
  control actually leaves.
- F-CQUAL-15: Fixed — the four discovery loaders (`/map`, `/booking/search`, `/venue/[id]`,
  `/discover`) had no `catch`, so a rejected fetch left the spinner up for ever, or cleared it with
  an empty dataset that read as "nothing here". Each now sets a localized error state and renders
  `GateScreen`/retry.
- F-CQUAL-5: Fixed — `/booking/venue/[id]` conflated "still loading" with "no such venue" into one
  branch that rendered a bare spinner, and a rejected fetch never cleared the flag at all. The two
  are separate states now, and the not-found one has a header, a message and a way out. `/venue/[id]`
  had the same dead end in its own not-found branch, which returned before its header; it does not.
- F-CQUAL-13: Fixed — `/blocked` had no error handling on either the load or the unblock, so a
  failed unblock silently left the row in place. Both are wrapped, with a retry.
- F-CTEST-1: Fixed — `tools/flows-discovery.mjs` covers all five routes named in the finding plus
  `/blocked` and `/how-it-works`, for both roles, asserting a titled state rather than a spinner, no
  page errors, and a way out of both id-parameter screens when the id does not resolve.

Not fixed in this pass — scheduled, not urgent:

- F-CSEC-3: password reset routes the recovery code through the SMS provider addressed to an email
  address, so email account recovery cannot succeed. Needs an email transport, which needs the server.
- F-CSEC-5: guest mode issues one shared constant identity. Needs a per-device identity.
- The remaining 31 confirmed findings are quality, privacy and coverage work recorded in
  `docs/audit/findings/consumer.md`.

Not verified:

- 269 further candidate findings were produced by the auditors but never reached a verifier, because
  the run hit a session limit partway through verification. They are listed at the end of
  `docs/audit/findings/consumer.md` and are raw auditor output — on the portion that was verified,
  about one in eight was rejected. Treat them as a work queue, not a defect list.
