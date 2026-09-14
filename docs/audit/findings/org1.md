# ORG1 — Organizer onboarding & match-creation screens

Scope: organizer/apply (2459), organizer/index (2465), organizer/create (2461), organizer/new (2468),
organizer/quick (2470), organizer/smart-schedule (2472), organizer/concierge (2460), plus the 631.js mock
backend functions they call.

## Pre-checks requested by the brief

- `t("auto")` / `t("public")` in 2461: NOT a bug. In 2461.js:47-48 `"public"` and `"auto"` are `useState`
  initial values; the i18n function `G = (0, M.useT)()` (2461.js:9) is only called with
  `visibilityPublic`/`visibilityPrivate`/`approvalAuto`/`approvalManual` (2461.js:976-1003), and those keys
  exist in 909.js:1015-1020 (en) and 909.js:4811-4818 (ar). The grep hit is the expression
  `G("public" === ft ? ... )` (2461.js:985, 1003), where the string is compared, not translated. A scripted
  check of every literal key passed to the `useT()` binding in all seven modules found no missing key in
  909.js; the dynamically-built keys (`tier_*`, `seriesStatus_*`, `dayKey_*`, `fmt_*`, `mw_*`, `dow_*`,
  `appStatus_draft`, `playersN`, `hMark`, `reapplyIn`, ...) were spot-checked and all exist.
- Reachability of the three create screens (grep of all pretty/*.js for the route strings):
  - `/organizer/create` (2461) — pushed from 2465.js:107, 2465.js:411; `replace`d from 2470.js:458; pushed
    with query params from 2472.js:30-32 and 2460.js:282-284. Reachable.
  - `/organizer/quick` (2470) — pushed from 2465.js:92, 1620.js:218 (home CTA), 1677.js:681. Reachable.
  - `/organizer/new` (2468) — registered in the root stack (1809.js:108) and routes.txt:58, but NO
    `push`/`replace`/href anywhere in the bundle navigates to it. Orphan (F-ORG1-1). On web it is still
    addressable by typing the URL, so its weaker rules are exploitable.
  - `/organizer/smart-schedule` and `/organizer/concierge` are NOT listed as `Stack.Screen` in 1809.js
    (only index/apply/create/new/quick/match/series are, 1809.js:96-124) but Expo Router registers
    file-system routes automatically; both are pushed from 2465.js:68/78 and render. Not a dead end.
- `assertApprovedOrganizer` = `on(e)` at 631.js:4291-4299 (`if (!rn(e)) throw ... "E_ORGANIZER_APPROVAL_REQUIRED..."`,
  `rn = (e) => "approved" === nn(e)?.status` 631.js:4290).
  - `mockCreateMatch = Wi` calls `await on(e)` at 631.js:3323. Guarded.
  - `mockCreateSeries` calls `await on(e)` at 631.js:5604. Guarded.
  - `mockQuickCreateMatch` (631.js:3505) does not call `on()` itself but delegates to `Wi` at 631.js:3516. Guarded.
  - `mockGetSmartSchedule` (Js, 631.js:11384), `mockGetConciergePlan` (11546), `mockGetMatchOptimization`
    (12398) and `hd` (12267) all call `on(e)`. Guarded.
  - NOT guarded: `mockSaveMatchDraft`/`mockGetMatchDraft`/`mockDiscardMatchDraft` (631.js:3309-3321),
    `mockGetSmartDefaults` (3467), `mockRecordOptimizerDecision` (12531), and every organizer read endpoint
    (see F-ORG1-16).
- Stale dashboard after creating a match: not an issue. 2465.js:37-41 re-runs the loader on every focus
  (`useFocusEffect(... Q && Y())`), and 2461/2470 `replace` to `/organizer/match/:id` (2461.js:1112,
  2470.js:449) so popping back lands on the dashboard and refetches.

## Findings

### F-ORG1-1: `organizer/new` is an orphan third match-creation wizard with its own (weaker) rules
- Interface: organizer/new
- Risk area: UX dead end
- Severity: Medium
- Evidence: 1809.js:108 — `name: "organizer/new"`; routes.txt:58 — `./organizer/new.tsx 2468`; grep of all
  pretty/*.js for `"/organizer/new"` returns only the stack registration; 2468.js:48-68 — draft restore;
  2468.js:728-757 — `createMatch(... formation_key, spot_assignment ...)`.
- Identified gap: A complete 7-step wizard (sport/when/where/format/formation/price/review) with draft
  autosave, discard confirmation and a success screen exists but nothing in the app links to it. It is the
  only consumer of `saveMatchDraft`/`fetchMatchDraft`/`discardMatchDraft` (671.js:465-467, grep shows
  only 2468.js uses them), so the whole draft subsystem is effectively dead. On web the route is still
  reachable by URL, so the divergent behaviour in F-ORG1-2/3/4 is live.
- Potential impact: Maintenance burden and two sets of business rules; a user who lands on the URL gets a
  flow that hard-codes venue coordinates and drops fields. Drafts saved here are never surfaced elsewhere.
- Recommended remediation: Either delete `organizer/new` (and the draft API) or make it the single
  canonical flow; do not ship both. If kept, add it to navigation and align validation with `create`.

### F-ORG1-2: Three creation flows (create, new, quick) apply different validation, defaults and post-create routing
- Interface: organizer/create, organizer/new, organizer/quick
- Risk area: Data integrity
- Severity: Medium
- Evidence:
  - Price: 2461.js:220 `Kt = "" !== gt.trim() ? Number(gt) || 0 : pt` (no client max; backend clamps to
    0..100 at 631.js:3332); 2468.js:94 `Number(Se) >= 0 && Number(Se) <= 50`; 2470 never shows a price and
    lets the backend choose (631.js:3501-3503 `$i = {football:{players:10,price:2.5},...}`, 3530).
  - Approval mode: 2461.js:992-1000 user picks auto/manual independently of visibility;
    2468.js:742 `approval_mode: "private" === ke ? "manual" : "auto"` (derived, not selectable);
    2470/631.js:3531-3532 always `visibility: "public", approval_mode: "auto"`.
  - Formats/capacity: 2461.js:1175-1190 includes `padel_2` and `football_custom` (2..40 stepper, 873-874);
    2468.js:898-909 has neither, capacity is fixed by format; 2470 capacity comes from `Ki` history or the
    sport default (631.js:3511).
  - Duration: 2461 free start/end minutes (446 auto-sets end = start+90); 2468.js:915 `_ = [60, 90, 120]`;
    2470 backend `s = i?.duration_minutes ?? 90` (631.js:3513).
  - Post-create: 2461.js:1112 and 2470.js:449 `replace('/organizer/match/:id')`; 2468.js:991/1027
    `replace('/game/:id')` (public game page) after a 4 s timer.
  - Naming: the create screen has an internal "quick" lane (2461.js:262 `laneQuick`, 1016 `quickPublish`)
    in addition to the separate `/organizer/quick` screen (2465.js:92 `quickMatchCta`).
- Identified gap: Same entity, three rule sets. A match's price cap, whether manual approval is possible, and
  what "quick" means depend on which entry point the organizer happened to use.
- Potential impact: Inconsistent data (e.g. a 70 KWD match from `create`, impossible from `new`), support
  confusion, and tests/controls written for one flow silently bypassed by another.
- Recommended remediation: Centralise match-input validation (price ceiling, capacity/format table,
  approval rules) in one shared validator used by all client flows and by `Wi`; reduce to one full flow and
  one quick flow with a single "quick" name.

### F-ORG1-3: `organizer/new` hard-codes the coordinates of every custom venue
- Interface: organizer/new
- Risk area: Data integrity
- Severity: Medium
- Evidence: 2468.js:748-753 — `custom_venue: { name: de.trim(), address: pe.trim(), lat: 29.32, lng: 47.99 }`;
  631.js:3357-3359 accepts any numeric lat/lng and 3361-3377 pushes a `custom: !0` venue into `Qt.venues`.
- Identified gap: The wizard has no location picker (unlike 2461.js:732 `LocationPicker`), so every venue
  created here is stored at the same fixed point in Kuwait City, and the "area" input is stored as the
  address.
- Potential impact: Distance/radius features, maps and smart-schedule scoring (which use venue lat/lng)
  are wrong for these venues; players are directed to the wrong place.
- Recommended remediation: Require a real location (reuse `LocationPicker`) or reject custom venues in this
  flow; backend should reject obviously placeholder coordinates or flag `custom` venues for admin review.

### F-ORG1-4: "Who picks spots" choice in `organizer/new` is silently discarded
- Interface: organizer/new
- Risk area: UX dead end
- Severity: Low
- Evidence: 2468.js:572-586 — selector `players` / `organizer` (`newPlayersChoose`/`newOrganiserAssigns`);
  2468.js:755 — `{ formation_key: xe ?? void 0, spot_assignment: je }`; `grep spot_assignment 631.js` → no
  occurrence; `Wi` only reads `t.formation_key` (631.js:3446-3455).
- Identified gap: The field is sent but never read or stored; the option has no effect.
- Potential impact: Organizer believes they control lineup assignment; behaviour is always the default.
- Recommended remediation: Persist `spot_assignment` on the game and honour it in lineup logic, or remove
  the control.

### F-ORG1-5: Court-booking prefill in `create` sets the sport but not the format/capacity
- Interface: organizer/create (`?court_booking_id=`)
- Risk area: Bug/crash
- Severity: Medium
- Evidence: 2461.js:195-212 — `(re(\`${e.venue_name} · ${e.court_name}\`), ce(e.sport))` then only
  date/time/venue are set; compare the URL-param path 2461.js:187 which calls `Vt(U.sport)`; `Vt`
  (2461.js:162-176) is what sets `de` (format), `pe` (players), `dt` (waitlist) and skill scale. Initial
  state: 2461.js:16-17 `de = "football_5v5"`, `pe = 10`.
- Identified gap: A padel or tennis court booking produces a match with `sport: "padel"`,
  `format: "football_5v5"`, `max_players: 10`, and an auto title like "Padel 5 v 5" (2461.js:158
  `$t = \`${G(ne)} ${G(\`fmt_${de}\`)}\``). In the default "quick" lane the format chips are hidden
  (2461.js:388-403 only under `"custom" === Nt`) so the organizer cannot even see or fix it.
- Potential impact: Wrong capacity (10 players on a padel court), wrong format label, and downstream
  format-based logic (lineups, `Ia`) applied to the wrong sport. `Wi` does not validate sport/format
  consistency (631.js:3403-3404 stores both verbatim).
- Recommended remediation: Call `Vt(e.sport)` in the booking effect (and guard `Vt` against unknown
  sports); validate on the backend that `format` belongs to `sport`.

### F-ORG1-6: Optimizer in `create` is computed once from initial inputs; quick-lane publish silently uses those stale values
- Interface: organizer/create
- Risk area: Data integrity
- Severity: Medium
- Evidence: 2461.js:71-102 — the optimization effect passes `venue_id`, `starts_at`, `price_kwd`,
  `max_players`, ... but its dependency list is `[e, ne, X, Dt]` (sport, booking id, dismissed flag only).
  2461.js:1085-1098 — `o = "quick" === Nt && !X && Mt ? Mt.optimal : null` and
  `skill_level: o?.skill_level ?? lt, max_players: o?.max_players ?? pe, waitlist_capacity: o ? o.waitlist_cap : dt,
  price_kwd: o?.price_kwd ?? Kt`. Backend: 631.js:12401 `hd(e, { sport: i, area: t.area })` picks the top
  smart-schedule slot regardless of the caller's venue/time; 12466-12483 compares the caller's (stale)
  inputs to compute `current_success_pct`; 12489-12513 builds recommendations against the same stale inputs.
- Identified gap: Changing venue, date, time, price or capacity after mount never re-runs the optimizer.
  In the default quick lane the organizer sees date/time/venue inputs but the published price, capacity,
  skill and waitlist come from `Mt.optimal`, which was derived for a different venue/slot (the "optimal"
  slot, not the one chosen) and is never re-evaluated. The suggested price passed from smart-schedule /
  concierge (2461.js:193 `U.price && ht(U.price)`) is also overridden by `o?.price_kwd` in this lane.
  The format `de` is not adjusted to `o.max_players`, so e.g. `football_5v5` with 14 players is possible.
- Potential impact: Organizer publishes a match whose price/capacity differ from anything shown for the
  slot they actually picked; "Now X% → Optimized Y%" and the recommendation list are misleading.
- Recommended remediation: Add the relevant inputs (venue, date, start/end, price, capacity, skill,
  waitlist) to the effect dependencies with debounce, pass the chosen `venue_id`/`starts_at` through to
  `hd`, and show the final price/capacity in the quick-lane summary before publish.

### F-ORG1-7: Quick lane in `create` shows an endless "analyzing" spinner and hidden defaults when the optimizer has nothing to say
- Interface: organizer/create
- Risk area: UX dead end
- Severity: Medium
- Evidence: 2461.js:750-754 — `Pt || !Mt ? <ActivityIndicator/> : <summary>`; 2461.js:92-94 — `.catch(() => { t || It(null) })`;
  631.js:12402-12403 — `const r = await hd(...); if (!r) return null;` and 12271 `if (!n) return null`
  (no slot for the sport/area, e.g. no venue supports it or `Js` returns empty). 2461.js:72 — with a
  court booking (`X`) the optimizer is skipped entirely (`It(null)`).
- Identified gap: When `fetchMatchOptimization` resolves `null` or rejects, the "AI summary" card shows a
  spinner forever (`!Mt` is true and `Pt` is false). The Publish button still works and falls back to the
  custom-lane state (2461.js:1093-1098), but in the quick lane those fields are hidden, so the organizer
  publishes with `price 0` (2461.js:44 `pt = 0`, i.e. a free match), `skill "all"`, waitlist from format,
  none of which is displayed. Same for the court-booking path, where the spinner is not shown but the
  defaults are equally invisible.
- Potential impact: Free matches published unintentionally; loading state that never resolves.
- Recommended remediation: Render an explicit "no recommendation available — using defaults: price X,
  players Y" state when `Mt` is null and not loading; disable quick publish until either the optimizer
  result or the user's explicit values are shown.

### F-ORG1-8: `organizer/quick` posts a paid match without ever showing the price, capacity or duration when no history exists
- Interface: organizer/quick
- Risk area: Financial control
- Severity: Medium
- Evidence: 2470.js:373-426 — smart-defaults card shows price/squad/skill/waitlist only when `F` (smart
  defaults) is non-null, otherwise the single line `P("smartNoData")`; 2470.js:444-448 — payload is only
  `{sport, venue_id, starts_at}`; 631.js:3509-3513 `i = await Ki(...)`, `Ki` returns `null` unless >= 3
  comparable games exist (631.js:3479); fallback `$i` = 10 players / 2.5 KWD (3501-3503), 90 min (3513),
  `visibility: "public", approval_mode: "auto"` (3531-3532).
- Identified gap: For a new organizer (the common case) the screen says "no data" and the Post button
  creates a public, auto-accept, 2.5 KWD-per-player, 90-minute, 10-player match. None of those values are
  displayed or confirmable before posting; the "duration" is never shown even when defaults exist.
- Potential impact: Organizers unknowingly charge players (or set the wrong price/size); disputes and
  refunds.
- Recommended remediation: Always render the effective values (price, players, duration, visibility,
  approval) in the summary card — from `Ki` when available, else from `$i` — and require the organizer to
  see them before Post. Expose `$i` via `fetchSmartDefaults` so client and server agree.

### F-ORG1-9: Dashboard and Apply screens spin forever if any loader rejects
- Interface: organizer/index, organizer/apply
- Risk area: Availability
- Severity: Low
- Evidence: 2465.js:25-36 — `await Promise.all([...6 fetches...]); ... $(!1)` with no try/catch; the
  spinner is shown while `N` is true (2465.js:115-119). 2465.js:19-24 — `fetchMyOrganizerApplication(...).then(...)`
  with no `.catch`, and the whole screen renders a spinner until `Q` becomes `true` (2465.js:44-48).
  2459.js:29-35 — `we` awaits `fetchMyOrganizerApplication` with no catch; spinner while `U` (2459.js:37-41).
  `mockGetOrganizerMatches` performs writes during the read (631.js:3966-3968 `Oi`, `ur`) which can throw.
- Identified gap: Any rejection (including from a side effect inside a "get") leaves the loading flag set
  and the user on an infinite spinner with no error, no retry.
- Potential impact: Organizer locked out of the dashboard/apply screen with no feedback.
- Recommended remediation: Wrap the loaders in try/catch, clear the loading flag in `finally`, and render
  an error state with retry (compare 2472.js:16-21 which at least clears loading).

### F-ORG1-10: Dashboard match card dereferences `venue` without a guard
- Interface: organizer/index
- Risk area: Bug/crash
- Severity: Low (needs confirmation)
- Evidence: 2465.js:534 — `children: [t.venue.name, " · ", formatGameTime(t.starts_at)]`;
  631.js:2615-2619 `Ii = (e, t, a) => { const i = t.get(e.venue_id); ... venue: i }` (undefined when the
  venue is not in the map); 631.js:2447-2451 — `fi()` includes demo venues `Ta` only while `Fa()` is true,
  while `gi()` returns persisted `Qt.games` regardless.
- Identified gap: A game whose `venue_id` is no longer resolvable (e.g. created against a demo venue and
  later loaded with demo mode off, or any future venue removal) makes the whole dashboard throw on render.
- Potential impact: Organizer dashboard becomes unusable for that organizer.
- Recommended remediation: Use `t.venue?.name ?? "—"` and have `Ii` fall back to a placeholder venue.

### F-ORG1-11: "Request info" from the reviewer is a dead end for the applicant
- Interface: organizer/apply
- Risk area: UX dead end
- Severity: High
- Evidence: 631.js:4600-4607 — `request_info` keeps `status = "under_review"` and stores the note in
  `admin_notes`; 2459.js:476-491 — for `under_review`/`submitted` the screen renders "additionalInfoRequested"
  + `admin_notes` but the form is hidden (`ze = !F || Re`, 2459.js:44; form only when `ze`, 2459.js:69-77)
  and no edit/resubmit control is rendered for that status (2459.js:493-501 only handles approved/rejected);
  631.js:4472 — `if ("under_review" === d?.status) throw new Error("E_YOUR_APPLICATION_IS_ALREADY_UNDER_REVIEW")`.
- Identified gap: The reviewer can ask for more information but the applicant has no way to provide it
  (no resubmission, no message channel), and the backend explicitly blocks resubmission while under review.
  The status card also labels the admin's free-text `admin_notes` as an information request, although the
  same field is written on approve/reject/suspend as a generic "Reviewer note" (631.js:4578-4583,
  909.js:1157 `adminNotesLabel: "Reviewer note"`).
- Potential impact: Onboarding stalls indefinitely; admins wait for information that cannot be sent;
  internal reviewer notes may be shown to the applicant as if they were a request.
- Recommended remediation: Introduce an explicit `info_requested` status that re-opens the form
  (pre-filled) and allows one resubmission that resets it to `under_review`; keep a separate
  applicant-facing message field from internal `admin_notes`.

### F-ORG1-12: Suspended organizers never see the suspension reason and have no way forward
- Interface: organizer/apply
- Risk area: UX dead end
- Severity: Medium
- Evidence: 631.js:4609-4613 — suspension stores the reason in `rejection_reason`; 2459.js:460-475 — the
  reason card is rendered only when `"rejected" === e.status`; 2459.js:417-422 — the `suspended` card has
  title/body only; 2459.js:493-501 — action buttons exist only for `approved`/`rejected`; error text for
  the backend guard says "contact" (674.js:249 `seYourOrganizerAccessIsSuspendedContact`) but no
  contact/appeal link is rendered although a `/contact` route exists (1809.js).
- Identified gap: A suspended organizer is redirected here from the dashboard (2465.js:22) and from
  `create` (2461.js:151) and sees a generic card with no reason and no CTA other than Back.
- Potential impact: No due process for suspensions; support load.
- Recommended remediation: Show `rejection_reason` for `suspended`, add an "appeal / contact support"
  button (route `/contact`), and record appeals.

### F-ORG1-13: Re-application overwrites the previous application record; velocity control is dead code
- Interface: organizer/apply (backend `mockSubmitOrganizerApplication`)
- Risk area: Audit trail
- Severity: Medium
- Evidence: 631.js:4501-4529 — new record built with `id: d?.id ?? ea()`, `rejection_reason: null`,
  `admin_notes: null`, `reviewed_by: null`, `reviewed_at: null`, then
  `g >= 0 ? (Qt.applications[g] = f) : Qt.applications.push(f)`; 631.js:4483-4485 —
  `Qt.applications.filter((t) => t.user_id === e && ...< 864e5).length >= 3 && u.add("velocity")`.
- Identified gap: One record per user is kept, so the prior rejection (reason, reviewer, dates, risk
  flags) is destroyed on resubmission and only the audit log line (4531) remains. Because there is never
  more than one record per user, the ">= 3 submissions in 24 h" velocity flag can never trigger.
- Potential impact: Reviewers cannot see that an applicant was previously rejected or why; repeat
  submissions cannot be detected as intended.
- Recommended remediation: Keep applications immutable and append a new version (or store a `history`
  array); compute velocity across the history; surface previous decisions in the admin detail screen.

### F-ORG1-14: Identity document "upload" is a self-attested toggle; document is never collected
- Interface: organizer/apply
- Risk area: Validation
- Severity: High
- Evidence: 2459.js:241-262 — `onPress: () => he((e) => !e)` toggles a boolean and shows
  `documentAttached` / `uploadDocument`; payload 2459.js:340 `id_doc_uploaded: ge`; 631.js:4516 —
  `id_doc_uploaded: !!t.id_doc_uploaded` (stored, not required); 631.js:4468-4469 only checks that the
  document number has >= 6 characters.
- Identified gap: No file picker, no upload, no requirement that the flag be true. The "secure storage"
  note (2459.js:263-275) implies a document is stored when nothing is.
- Potential impact: KYC for people who will collect money from players rests on a typed number and a
  tapped button; approvals are made on unverifiable data.
- Recommended remediation: Implement an actual document capture (image picker / camera) stored as a
  reference, make it mandatory server-side, and have the admin detail screen display it.

### F-ORG1-15: Applicant receives the raw application record (risk flags, hashes, reviewer identity)
- Interface: organizer/apply (backend `mockGetMyOrganizerApplication`)
- Risk area: Privacy
- Severity: Low
- Evidence: 631.js:4455 — `nn(e) ?? null` returns the stored object verbatim, which includes
  `risk_flags` (4519, e.g. `duplicate_phone`, `duplicate_document`), `phone_hash` (4518), `id_doc_ref`
  (4514), `reviewed_by` (4520) and `admin_notes` (4522).
- Identified gap: Fraud heuristics and internal reviewer data are exposed to the applicant (the UI only
  renders some fields, but the data is on the client).
- Potential impact: Applicants can learn how duplicate detection works and who reviewed them.
- Recommended remediation: Return an applicant DTO limited to status, timestamps, rejection reason,
  reapply date and any applicant-facing message.

### F-ORG1-16: Organizer read endpoints are keyed only on the target organizer id (no caller check)
- Interface: organizer/index, organizer/create
- Risk area: Authorization
- Severity: Medium
- Evidence: 631.js:3962 `mockGetOrganizerMatches = async (e)` returns full game objects via `Ii`
  (2615-2632) including `invite_code` of private matches (set at 3414); 3984 `mockGetOrganizerStats(e)`;
  4052 `mockGetOrganizerRatings(e)` (includes `player_name`); 5835 `mockGetOrganizerSeries(e)`;
  5988 `mockGetOrganizerReferralStats(e)`; 7096 `mockGetBooking = async (e, t)` ignores the second
  (caller) argument entirely and returns any court booking by id (`Pr(a)`), whereas `Wi` checks ownership
  only at publish time (3348).
- Identified gap: The API contract has no notion of "caller"; any client can read any organizer's private
  invite codes, ratings, pending bookings and court bookings by passing an id. The brief notes the mock is
  client-side, but these signatures will carry over to a real backend unchanged.
- Potential impact: Private-match invite codes and other organizers' operational data leak; when ported
  to a server these become IDOR endpoints.
- Recommended remediation: Give every read endpoint a caller parameter and assert `caller === organizer`
  or admin; strip `invite_code` from list responses.

### F-ORG1-17: `mockCreateSeries` lacks the safeguards that `mockCreateMatch` has
- Interface: organizer/create (recurring)
- Risk area: Validation
- Severity: Medium
- Evidence: 631.js:5603-5612 validates title, end>start minutes, players 2..40, weekday/monthly pattern
  only. Missing compared with `Wi`: no past-date check (cf. 3329), no `end_date >= start_date` check
  (5662 stores `t.end_date ?? null` verbatim), no rate limit (cf. 3336-3342), no overlap/duplicate check
  (cf. 3383-3395), no venue-supports-sport check, `format`/`visibility`/`approval_mode` unvalidated
  (5643, 5650-5651). Client side 2461.js:1024-1034 also does not check date in past or end date.
- Identified gap: A series can be created starting in the past, with an end date before its start, or
  overlapping the organizer's own matches, and generates occurrences immediately (`jn(n)` 5672).
- Potential impact: Bulk creation of invalid/overlapping occurrences; unbounded spam of series (no rate
  limit) each materialising up to `horizon_weeks: 12` of games.
- Recommended remediation: Reuse `Wi`'s validation block for the template and validate each generated
  occurrence; add a per-organizer series rate limit and end-date sanity check.

### F-ORG1-18: Match input validation gaps in `mockCreateMatch` (clamping instead of rejecting, unvalidated enums, NaN capacity)
- Interface: organizer/create, organizer/quick, organizer/new (backend `Wi`)
- Risk area: Validation
- Severity: Low
- Evidence: 631.js:3331 — `if (t.max_players < 2 || t.max_players > 40) throw` (both comparisons are false
  for `NaN`/`undefined`, so they pass); 3332 `r = Math.max(0, Math.min(100, Number(t.price_kwd ?? 0)))`
  (negative or non-numeric silently becomes 0/`NaN`→0, >100 becomes 100); 3334 waitlist silently clamped;
  3403-3405, 3413, 3415 — `sport`, `format`, `skill_level`, `visibility`, `approval_mode` stored verbatim
  with no allow-list; 3379 checks the venue exists but not that it supports `t.sport`; no maximum
  duration (3408). `mockQuickCreateMatch` 3507 also only checks existence. Client: 2461.js:220 turns any
  non-numeric price into 0 with no message; 2461.js:1026-1034 alert bodies are bare field labels
  (`alert(G("error"), G("fieldTitle"))`), and there is no client check for a start time in the past.
- Identified gap: Server accepts semantically invalid values or silently rewrites money fields; client
  feedback is uninformative.
- Potential impact: Corrupt records (e.g. `max_players: NaN`, `visibility: "x"`) and mispriced matches with
  no indication to the organizer.
- Recommended remediation: Validate enums against allow-lists, require `Number.isInteger(max_players)`,
  reject (not clamp) out-of-range price/waitlist, check `venue.sports.includes(sport)`, and give the
  client validation messages that state the rule.

### F-ORG1-19: Any approved organizer can publish new venues to the global venue list without review
- Interface: organizer/create (custom venue), organizer/new
- Risk area: Segregation of duties
- Severity: Medium
- Evidence: 631.js:3354-3377 and 5614-5633 — `custom_venue` becomes a full record in `Qt.venues` with
  `custom: !0`; `fi()` (2447-2450) returns all `Qt.venues` to every caller; no audit line specific to venue
  creation (only `match.created` at 3457). 2461.js:646-654 offers "custom venue" as a first-class tab.
- Identified gap: Venue creation bypasses the venue application/approval process (`venue/apply` route
  exists) and is not audited or reviewable.
- Potential impact: Duplicate/fake venues pollute search, maps and smart-schedule inputs; no owner
  attribution.
- Recommended remediation: Mark organizer-created venues as private to that organizer (or pending admin
  review), log `venue.created` with the actor, and de-duplicate by name/coordinates.

### F-ORG1-20: Errors swallowed into "empty" states that are indistinguishable from real emptiness
- Interface: organizer/create, organizer/quick, organizer/new, organizer/smart-schedule
- Risk area: Ambiguity
- Severity: Low
- Evidence: 2461.js:66-70 `fetchVenues().then(_t).catch(() => {})` and 2461.js:668-672 renders the
  search placeholder string (`searchVenuePlaceholder`) as the empty-list body; 2470.js:22-26 and
  2468.js:37-41 `.catch(() => W([]))` → "quickNoVenues"; 2472.js:16-21 `catch { K([]) }` → EmptyState
  "noRecommendations"; 2461.js:153-155 — an error fetching the application redirects to `/organizer/apply`
  exactly as if the user were not approved; 2461.js:195-211 `fetchBooking` has no catch (unhandled
  rejection) and a `null` booking is ignored while `court_booking_id` is still sent (1107).
- Identified gap: Network/storage failures are presented as "nothing here", and a bad booking id is only
  discovered at publish time via the backend error.
- Potential impact: Users conclude there are no venues/slots and abandon the flow; support cannot
  distinguish outage from data.
- Recommended remediation: Keep an `error` state per loader and render a retry affordance; validate the
  booking id up front and show a message when it cannot be loaded.

### F-ORG1-21: Rejected-application status card and "Reapply now" button are unreachable
- Interface: organizer/apply
- Risk area: Ambiguity
- Severity: Low
- Evidence: 2459.js:43-44 — `Re = "rejected" === F?.status && (!F.reapply_after || reapply_after <= now)`,
  `ze = !F || Re`; 2459.js:69-77 — status card `B` renders only when `!ze && F`; 2459.js:495-501 — inside
  `B`, `"rejected" === e.status && (d > 0 ? "reapplyIn" : <Button reapplyNow onPress={onReapply}/>)`.
- Identified gap: Whenever a rejected applicant is eligible to reapply, `ze` is true and the form is shown
  directly, so the "Rejected" headline and the `reapplyNow` button never render; the only rejected-state
  UI the user sees is the inline reason card (2459.js:83-98). While the cooldown is active they see the
  status card with "reapply in N days" but the form fields are hidden, so they cannot prepare edits.
- Potential impact: Minor confusion; dead code path.
- Recommended remediation: Show the status card with the reason and an explicit "Reapply" button that
  reveals the form, rather than switching on eligibility implicitly.

### F-ORG1-22: Demo seeding injects fabricated matches/ratings into a real organizer's dashboard analytics
- Interface: organizer/index
- Risk area: Data integrity
- Severity: Low
- Evidence: 631.js:4092-4112 — `tn()` runs when `Fa()` (demo world) and seeds via `an()` for the current
  user (`Qt.orgSeedUid = t`, `Qt.games.some((e) => e.organizer_id === t)` ...); 631.js:4286-4287 persists
  seeded games/bookings/ratings; 631.js:2451 `gi()` merges demo games `La` into every organizer query;
  2465.js:28-33 stats/reputation/ratings are computed over `gi()` (631.js:3986, 4021, 4055).
  `Fa` (631.js:1682) is true unless `PLAYORA_DEMO === "0"`, i.e. on by default.
- Identified gap: Reputation score, tiers and completion rates shown to (and about) the first real
  organizer are computed on seeded fixtures; the auto-approval part is already documented, but the
  metrics contamination is not.
- Potential impact: Misleading trust signals shown to players if the demo flag remains on in production.
- Recommended remediation: Tag seeded rows (`seeded: true`) and exclude them from stats/reputation, or
  ensure `PLAYORA_DEMO=0` is enforced in the production build.

## Interface summary

- organizer/apply (2459): Application form with status card. Works for first submission, approval and
  rejection cooldown; dead ends for "request info" (F-11) and "suspended" (F-12); document upload is a
  fake toggle (F-14). Partially works.
- organizer/index (2465): Dashboard (reputation, stats, referrals, series, match tabs, ratings). Works and
  refreshes on focus; no error handling (F-9), unguarded venue join (F-10), demo contamination (F-22).
  Works (with availability risk).
- organizer/create (2461): Main creation screen with "quick"/"custom" lanes, optimizer, recurring
  series, court-booking and URL prefill. Publishes correctly through `Wi`/`mockCreateSeries` (both
  guarded by `on()`), but the quick lane relies on a once-computed optimizer (F-6/F-7), court-booking
  prefill mis-sets format (F-5), and series validation is thin (F-17). Partially works.
- organizer/new (2468): Full alternative wizard with drafts, formation and discard confirmation. Orphaned
  (F-1), hard-coded venue coordinates (F-3), dropped `spot_assignment` (F-4). Reachable only by URL. Dead end
  from navigation perspective; functional if reached.
- organizer/quick (2470): 3-step sport/venue/kickoff poster with client-side past-time check and inline
  error text. Works, but hides price/capacity/duration defaults (F-8).
- organizer/smart-schedule (2472): Lists ranked slots and pushes to `create` with query params. Works;
  errors look like "no recommendations" (F-20); suggested price is dropped by the create quick lane (F-6).
- organizer/concierge (2460): Generates a single plan and pushes to `create`. Works; error alerts shown;
  same hand-off caveat as smart-schedule.
