# ORG2 — Organizer match management (organizer/match/[id] = 2466.js) and series management (organizer/series/[id] = 2471.js)

Backend references are in 631.js; API facade in 671.js. Shared organizer helper: `zi(game, userId)` (631.js:2925) throws `E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_2` when `game.organizer_id !== userId`; `on(userId)` (631.js:4291) asserts an approved organizer application. Series helper `$n` (631.js:5726) checks `n.organizer_id !== t`.

Authorization coverage (positive result, for the record): every mutation called by these two screens does verify ownership on the backend — approve/reject (3164/3204 `zi`), kick (3263), updateMatch (3546), cancelMatch (3600), setAttendance (3642), close/reopen registration (3659/3674), submitMatchScore (3686), NPN activate/update/deactivate (4950/4988/5010), concierge auto-invite (11611), replacement mode/manual (11966/11995), game groups (13495 `organizer_id !== e && !Id(e)`), series pause/resume/end/cancel (via `$n` 5729 / 5760). The gaps are in the *read* endpoints and in secondary checks (state, target, refunds), detailed below.

### F-ORG2-1: Cancelling a series cancels all upcoming occurrences without refunding paid seats
- Interface: organizer/series/[id]
- Risk area: Financial control
- Severity: High
- Evidence: 631.js:5756-5806 — `mockCancelSeries` loops `for (const t of Kn(e))`, marks each game `status: "cancelled"` and each booking `e.status = "cancelled"` (5790-5797) but never calls `Br(...)` (the seat refund routine used by `mockCancelMatch` at 631.js:3622 `for (const e of o) await Br(n, e, !0);`). No `Mr` (court-booking cancel) call either.
- Identified gap: The single-match cancel path refunds every paid/pending seat and cancels the court booking; the series cancel path silently drops those steps. Paid players on every future occurrence lose their seat and keep a `paid` payment record with no refund and no `refund_issued` notification.
- Potential impact: Direct financial loss for players on paid series; venue court bookings stay live and billed; support disputes.
- Recommended remediation: Reuse `mockCancelMatch`'s body (or extract a shared `cancelGameInternal`) inside the series loop so each occurrence releases holds, refunds paid seats (`Br(game, userId, true)`), cancels the court booking and writes a per-game `match.cancelled` audit entry.

### F-ORG2-2: "End series" is irreversible, has no confirmation and leaves already-scheduled occurrences live
- Interface: organizer/series/[id]
- Risk area: UX dead end
- Severity: Medium
- Evidence: 2471.js:180-186 — `onPress: () => J(() => (0, b.endSeries)(e, z.id))` fires immediately (no confirm card, unlike Cancel at 2471.js:189-240). 631.js:5751-5755 `mockEndSeries` only does `$n(e, t, "ended")`; it does not touch `Kn(e)` occurrences. 2471.js:148 hides all controls once `"ended" === T.status`.
- Identified gap: One accidental tap permanently ends the series (no resume path once status is `ended`), while the generated future matches remain `scheduled` and still appear under "Upcoming occurrences". The organizer can no longer act on the series and must cancel each occurrence individually. "End" vs "Cancel" semantics are not explained anywhere on the screen (`endSeries: "End"` 909.js:2787).
- Potential impact: Irrecoverable state from a mis-tap; orphaned scheduled matches that players can still join.
- Recommended remediation: Add an inline confirmation card (same pattern as cancel) that explains "End stops generating new sessions; existing sessions stay scheduled", and consider allowing `resume` from `ended` or renaming to "Stop generating".

### F-ORG2-3: Cancelled series is stored as "ended" — the two outcomes are indistinguishable
- Interface: organizer/series/[id]
- Risk area: Ambiguity
- Severity: Low
- Evidence: 631.js:5800 — `Qt.templates[o] = Object.assign({}, i, { status: "ended" })` inside `mockCancelSeries`; 909.js:2778-2780 only `seriesStatus_active/paused/ended` exist; 2471.js:46 badge tone falls to `"danger"` for anything not active/paused.
- Identified gap: After a cancel (which nukes all occurrences) and after an end (which keeps them) the series shows the same "Ended" badge. The cancellation reason captured at 2471.js:210 is stored only on the games (`cancellation_reason`), never on the template.
- Potential impact: Organizer/admin cannot tell later whether a series was cancelled or naturally ended; the reason is lost at series level.
- Recommended remediation: Add a `cancelled` template status with its own label, and persist `cancelled_at` / `cancellation_reason` on the template.

### F-ORG2-4: Series screen shows an infinite spinner when the series is missing or a fetch throws
- Interface: organizer/series/[id]
- Risk area: Bug/crash
- Severity: Medium
- Evidence: 2471.js:17-25 — `K` awaits `Promise.all([...])` with no try/catch, then `$(t)…H(!1)`; 2471.js:38 `if (D || !T) return <ActivityIndicator/>`. 631.js:5843-5847 `mockGetSeries` returns `null` for an unknown id.
- Identified gap: A stale/deleted series id (e.g. deep link, or a series removed by seeding) resolves to `T === null`, and any rejection in `fetchOrganizerMatches`/`fetchSeriesAnalytics` leaves `D === true`; in both cases the user sees a spinner forever with no error and no back button rendered.
- Potential impact: Dead end with no recovery except OS back gesture.
- Recommended remediation: Wrap `K` in try/catch, render an error state with the back button when `!T` after loading, and use `Promise.allSettled` so analytics failure does not block the main view.

### F-ORG2-5: Organizer match screen also hangs on load errors (no try/catch around the initial fetch)
- Interface: organizer/match/[id]
- Risk area: Bug/crash
- Severity: Medium
- Evidence: 2466.js:37-46 — `qe = useCallback(async () => { … const t = await fetchOrganizerMatchScreen(o?.id ?? "", e); M(t.game) … X(!1); })` with no try/catch; 2466.js:107-111 renders the spinner while `Y` is true. Backend `Ni` (631.js:2649-2653) calls `ra(t, a.audience)` which throws `AUDIENCE_MISMATCH` (631.js:748-750) for a cross-audience viewer.
- Identified gap: Any thrown error (audience mismatch, storage failure) rejects the promise, `X(!1)` never runs, and the screen stays on the spinner. An unknown match id does resolve (`k === null` → generic "error" text at 2466.js:112-118) but that text has no back button either.
- Potential impact: Unrecoverable loading state; unhandled promise rejection in console.
- Recommended remediation: try/catch in `qe`, set an error state, and render the header/back button in both the error and spinner branches.

### F-ORG2-6: Participant lists of any match are returned to non-organizers by the screen endpoint
- Interface: organizer/match/[id]
- Risk area: Privacy
- Severity: Medium
- Evidence: 631.js:16548-16553 — `if (!(!!a && !!e && a.organizer_id === e)) return { game: a, participants: i, candidates: [], intel: [] };` — `i = await Qi(t)` (631.js:3974-3983) is the full `Qt.bookings` split into confirmed/reserved/pending/waitlist, including `user_id`, `display_name`, `attendance`, `status`. The UI only hides it client-side: 2466.js:99 `Qe = … k.organizer_id !== o.id` → `T.replace('/game/…')`.
- Identified gap: The ownership check only strips `candidates`/`intel`; the participant roster (including pending applicants and waitlisted users of private games) is still returned to any authenticated caller who knows the game id.
- Potential impact: Exposure of who applied to / was rejected from a match, attendance marks and no-show history to non-organizers.
- Recommended remediation: Return an empty participants object (or throw `E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_2`) when the caller is not the organizer, matching `mockGetMatchActivity` (631.js:3237-3242).

### F-ORG2-7: Series analytics endpoint (incl. revenue) has no caller/ownership check, and "Revenue" is an estimate, not real takings
- Interface: organizer/series/[id]
- Risk area: Privacy
- Severity: Medium
- Evidence: 671.js:484 `e.fetchSeriesAnalytics = (o) => t.store.mockGetSeriesAnalytics(o);` (series id only); 631.js:5848-5850 `mockGetSeriesAnalytics = async (e) => { await ei(); const t = Qt.games.filter(...)` — no user parameter, no `zi`/`$n`. Revenue is computed as `revenueKwd: s * (Wn(e)?.price_kwd ?? 0)` (631.js:5888), where `s` counts confirmed-or-attended bookings, not `Qt.payments`. `mockGetSeries` (5843) likewise takes `t` only for the `user_joined_upcoming` field.
- Identified gap: Any user can pull retention, fill-rate and revenue figures for any series id. The figure labelled "Revenue" (909.js:2784) ignores refunds, unpaid free-seat bookings and price changes over time.
- Potential impact: Competitor/organizer financial data leak; organizer decisions based on inflated revenue.
- Recommended remediation: Pass the caller id and enforce `organizer_id === caller || admin`; compute revenue from `Qt.payments` with `status === "paid"` for those games and label it "Estimated" if the estimate is kept.

### F-ORG2-8: Organizers can sanction any user in the app, not only participants of their own matches; game_id is unverified
- Interface: organizer/match/[id]
- Risk area: Authorization
- Severity: High
- Evidence: 631.js:12100-12104 — `const i = ro(e) ? "admin" : "organizer"; if (("organizer" === i && (await on(e), oa(e, t)), e === t)) throw …`. `oa` (631.js:751-753) is only `ra(e, aa(t))`, i.e. an audience (gender-world) check. `game_id: a.game_id ?? null` (12118) is stored verbatim. Warnings become `status: "active"` immediately (12122, `needsAdminApproval` only for ban/suspension).
- Identified gap: Nothing checks that `t` had a booking in a game organized by `e`, nor that `a.game_id` belongs to `e`. Any approved organizer can issue active warnings (which feed `computeStanding`, 631.js:12085) against arbitrary users, attributing them to arbitrary matches. The UI restricts the flag button to confirmed participants (2466.js:801-810) but that is client-side only.
- Potential impact: Harassment / reputation damage; conduct standing manipulated by unrelated organizers; audit trail records a misleading `game_id`.
- Recommended remediation: In `mockIssueSanction` for organizer issuers, require `a.game_id`, load the game, `zi(game, e)`, and verify a non-cancelled booking for `t` in that game; reject otherwise.

### F-ORG2-9: Pending requests can still be approved/rejected after the match has ended (UI shows the buttons; backend has no state check)
- Interface: organizer/match/[id]
- Risk area: Data integrity
- Severity: Medium
- Evidence: 2466.js:692-716 — the pending section renders Approve/Reject with no `!et && !Ze` guard (compare kick at 2466.js:810 `Xe && !et && !Ze`). 631.js:3158-3197 `mockApproveParticipant` checks only `E_MATCH_NOT_FOUND`, `zi` and capacity; no `status`/`ends_at` check, then `Hr(i, n.user_id, n.id)` (7202) creates a `pending` seat payment with a 2-minute hold and sends `payment_request` + `request_approved` notifications for a match that is already over.
- Identified gap: State machine mismatch: every other mutation rejects finished/cancelled matches (`E_THIS_MATCH_HAS_ALREADY_STARTED` / `E_THIS_MATCH_CAN_NO_LONGER_BE`), approval does not. `mockRejectParticipant` (3199) has the same omission (harmless but inconsistent).
- Potential impact: Players billed for a past match; attendance/reliability stats polluted; confusing notifications.
- Recommended remediation: In both mocks throw when `status !== "scheduled"` or `ends_at < now`; in the UI hide the buttons when `et || Ze` and show pending rows as read-only.

### F-ORG2-10: Editing a match does not prevent moving it into the past or reducing capacity below held seats; court booking is not updated
- Interface: organizer/match/[id]
- Risk area: Validation
- Severity: Medium
- Evidence: 631.js:3538-3591 `mockUpdateMatch` — validates only `ends_at <= starts_at` (3552) and `a.max_players < confirmed` (3567-3568, counts `"confirmed" === t.status` only). No `starts_at < Date.now()` check (creation path `Wi` has one at 631.js:3329 `if (i < Date.now() - 6e4) throw "E_MATCH_CANNOT_START_IN_PAST"`). `court_booking_id` is never read or updated. UI DatePicker at 2466.js:513-519 has no minimum date.
- Identified gap: (a) An organizer can set the time to yesterday: the match instantly becomes "completed" (`Ji`, 631.js:3956), unlocking score submission and attendance marking with no play having occurred, while players are only told "time changed". (b) Capacity can be set below `ki()` (confirmed + active reserved holds, 631.js:2456) leaving paid-reserved players overbooked. (c) A venue court booking tied to the match keeps the old slot.
- Potential impact: Fabricated results/attendance; overbooked paid seats; venue slot mismatch.
- Recommended remediation: Reuse the creation validators (no past start, sane duration, 2..40 players), compare capacity to `ki(e)`, and either block time edits when `court_booking_id` is set or re-book the court.

### F-ORG2-11: Match can be cancelled while it is in progress, with automatic full refunds; reason optional
- Interface: organizer/match/[id]
- Risk area: Financial control
- Severity: Medium
- Evidence: 631.js:3600-3601 — `if (new Date(n.ends_at).getTime() < Date.now()) throw "E_THIS_MATCH_HAS_ALREADY_STARTED"` (checks *end*, not start); 3602 `const r = sanitizeText(a || "", 200) || "No reason provided"`; 3622 `for (const e of o) await Br(n, e, !0);` (forced refund regardless of `isRefundEligible`). Same start/end confusion in `mockKickPlayer` 631.js:3266 and `mockCloseRegistration` 3661. UI cancel card (2466.js:639-690) does not require the reason field.
- Identified gap: Between `starts_at` and `ends_at` the organizer can cancel (or kick everyone) and every paid player is refunded 100% to their wallet, bypassing the `SEAT_REFUND_CUTOFF_HOURS` policy that applies to player-initiated cancellations (`mockGetSeatRefundQuote`, 631.js:3122-3138). No reason is required for a destructive, notified action.
- Potential impact: Organizer-side refund abuse after a match has effectively been played; venue still owed; disputes with no recorded reason.
- Recommended remediation: Compare against `starts_at` for cancel/kick (or require an explicit "match did not take place" attestation after start), make the reason mandatory (min length) and store it in the audit entry (`match.cancelled` at 3627 currently logs only the game id).

### F-ORG2-12: Court-booking cancellation failure during match cancel is swallowed
- Interface: organizer/match/[id]
- Risk area: Financial control
- Severity: Medium
- Evidence: 631.js:3623-3626 — `if (n.court_booking_id) try { await Mr(t, n.court_booking_id, …) } catch {}`. `Mr` (631.js:6994-7001) throws on `E_BOOKING_NOT_FOUND` / `E_YOU_ARE_NOT_AUTHORIZED_TO_CANCEL`.
- Identified gap: The match is marked cancelled and players refunded even when the linked venue booking could not be released; nobody is told and nothing is logged.
- Potential impact: Organizer keeps paying for a court that is no longer used; venue sees a booking for a cancelled match.
- Recommended remediation: Log an audit entry (`court.cancel_failed`) and surface a warning in the UI response (`{ court_released: false }`), or fail the cancel when the court cancel fails.

### F-ORG2-13: Series-cancel/kick/cancel refunds go to the in-app wallet, never to the original payment method (needs confirmation)
- Interface: organizer/match/[id]
- Risk area: Financial control
- Severity: Low
- Evidence: 631.js:7244-7285 `Br` → `await ac(t, i.amount_kwd, i.id)`; 631.js:15830-15848 `ac` posts `kind: "refund"` from `A.acct.platform("refunds")` to `A.acct.available(e)` (wallet ledger) and logs `wallet.refund_credited`.
- Identified gap: KNET/card payers refunded after an organizer kick or cancel receive wallet credit only; there is no gateway refund path or admin visibility of the liability created.
- Potential impact: Regulatory/consumer-protection exposure if wallet credit cannot be withdrawn; growing platform refund liability.
- Recommended remediation: Confirm the intended policy; if wallet-only is intentional, state it in the cancel/kick confirmation copy and in the `refund_issued` notification.

### F-ORG2-14: Attendance can be marked at any time (before kick-off, on cancelled matches) and is never written to the match activity log
- Interface: organizer/match/[id]
- Risk area: Data integrity
- Severity: Low
- Evidence: 631.js:3638-3652 `mockSetAttendance` — after `zi(n, t)` it sets `r.attendance = i` with no `status`/`ends_at` check, no `Xt` lock, and only `logAudit("attendance.marked", …)` (3648) — no `Yi(...)` match-event, so the on-screen "Activity log" (2466.js:1151-1170, six action types) never shows attendance changes. The UI only exposes the toggles when `et` (2466.js:765-766), and they remain toggleable indefinitely after the score is final.
- Identified gap: Attendance (which feeds reliability/no-show stats used in `intel` badges, 2466.js:721-745) can be set or flipped at any time by the organizer with no in-app trace and no lock once results are final.
- Potential impact: Reliability scores and series "avg attendance" (631.js:5880) can be manipulated retroactively without visibility to players or admins.
- Recommended remediation: Reject attendance before `ends_at` and on cancelled games, record an `attendance_marked` match event with target/value, and freeze attendance N hours after score submission (or require admin override).

### F-ORG2-15: Need-Player-Now radius changes and Concierge auto-invite re-send notifications with no rate limit or state check
- Interface: organizer/match/[id]
- Risk area: Availability
- Severity: Medium
- Evidence: 631.js:4982-5001 `mockUpdateNeedPlayer` — every call does `n.npn_notifications_sent += await En(n, r)` (4991); UI fires it on each radius chip tap while active (2466.js:1296 `onPress: () => (v ? h(e) : j(e))`). The activation cap (`npn_activation_count >= 3`, 631.js:4956) only applies to `mockActivateNeedPlayer`. 631.js:11607-11656 `mockConciergeAutoInvite` has `zi` but no `status`/`starts_at`/`bookings` check and no cap; each press sends up to `autoInviteCount` `need_player` notifications (11621-11636) and increments `npn_notifications_sent`.
- Identified gap: An organizer can blast nearby players repeatedly by toggling 10/20/30/All or tapping "Auto-invite" (which is shown for any not-ended match with open slots, 2466.js:472-478), including for matches that are closed for registration.
- Potential impact: Notification spam / user churn; inflated `npn_notifications_sent` stats.
- Recommended remediation: De-duplicate recipients per game (skip users already notified for this game), add a cooldown/cap to both endpoints, and reject auto-invite when `registration_closed_at` is set or the match is not `scheduled`.

### F-ORG2-16: Concierge replacement *read* writes an audit entry on every render, crowding the audit ring buffer
- Interface: organizer/match/[id]
- Risk area: Audit trail
- Severity: Low
- Evidence: 631.js:11672-11675 — `mockGetConciergeReplacements` ends with `await logAudit("concierge.replacement_suggested", …)`; it is fetched on every mount / open-slot change by component `G` (2466.js:1546-1554).
- Identified gap: A pure read produces an audit line each time the screen opens, while genuine privileged events (attendance, kicks) share the same bounded log.
- Potential impact: Real audit entries are evicted sooner; log noise hides real activity.
- Recommended remediation: Remove the audit call from the read path (keep it on `mockConciergeAutoInvite`).

### F-ORG2-17: Errors from the four secondary panels are swallowed and rendered as "empty" states
- Interface: organizer/match/[id]
- Risk area: Bug/crash
- Severity: Low
- Evidence: 2466.js:57-59 activity log `.catch(() => { t && Me([]); })` → renders `noActivityYet`; 2466.js:1549 `fetchConciergeReplacements(...).catch(() => [])` → renders "—"; 2466.js:1624-1625 `fetchReplacementState(...).catch(() => null)` → component `U` returns `null` (1640), so the whole "Smart replacement" card disappears; 2466.js:1830 `fetchGameGroups(...).catch(() => c([]))` → card hidden. Backend `mockGetGameGroups` throws the untranslated strings `"not_found"` / `"forbidden"` (631.js:13494-13495; same pattern at 8672, 12653).
- Identified gap: A failing backend call is indistinguishable from "nothing to show"; there is no retry and no console/analytics report.
- Potential impact: Organizer believes there is no activity / no replacement system for the match; support cannot diagnose.
- Recommended remediation: Keep a per-panel error state with a "Retry" affordance, and map the group-booking error strings to `E_*` codes handled by `storeErrorText`.

### F-ORG2-18: Series screen renders management controls for non-organizers and relies on backend errors
- Interface: organizer/series/[id]
- Risk area: Authorization
- Severity: Low
- Evidence: 2471.js:148-188 — Pause/Resume/End/Cancel are gated only by `"ended" !== T.status`; there is no `T.organizer_id === z.id` check and no redirect (contrast 2466.js:99-104). Backend `$n` (631.js:5729) does reject with `E_YOU_ARE_NOT_AUTHORIZED_TO_MANAGE_3`.
- Identified gap: Any user reaching `/organizer/series/<id>` (deep link) sees a working-looking management UI; pressing a button yields a generic authorization alert. `mockGetSeries` (631.js:5843) returns the template to anyone.
- Potential impact: Confusing UX; enumeration of series ids exposes organizer settings (price, notes, weekdays).
- Recommended remediation: Mirror the match screen: redirect to a public series/game view when `T.organizer_id !== z.id`, and have `mockGetSeries` strip organizer-only fields for non-owners.

### F-ORG2-19: Cancel-series dialog reuses match wording; dialog closes even when the cancel failed
- Interface: organizer/series/[id]
- Risk area: Ambiguity
- Severity: Low
- Evidence: 2471.js:217-223 — secondary button `title: P("keepMatch")` ("Keep match", 909.js:1069) inside `cancelSeriesTitle` card; 2471.js:229 `z && e && (await J(() => cancelSeries(e, z.id, E)), F(!1));` — `J` catches and alerts, so `F(!1)` always runs.
- Identified gap: The "keep" option is labelled for a single match, and after a failed cancel (e.g. `E_ORGANIZER_APPROVAL_REQUIRED…`) the reason text and dialog are discarded, forcing re-entry.
- Potential impact: Minor confusion; lost input on error.
- Recommended remediation: Add a `keepSeries` string and only close the dialog on success (return a boolean from `J`).

### F-ORG2-20: Upcoming-occurrence list is capped at 12 with no overflow affordance; no series-level edit UI although the backend supports it
- Interface: organizer/series/[id]
- Risk area: UX dead end
- Severity: Low
- Evidence: 2471.js:252 `X.slice(0, 12).map(...)` while the header shows the full count (2471.js:242 `formatNumber(X.length)`); `editSingleHint` (909.js:2793 "Tap a session to edit or cancel just that occurrence") is the only edit path. `mockEditFutureOccurrences` (631.js:5687) exists in 631/671 but no screen module references it (grep over pretty/*.js).
- Identified gap: A daily series quickly exceeds 12 upcoming sessions; occurrences 13+ are unreachable from this screen. Bulk changes (time, price, capacity) require editing each occurrence individually.
- Potential impact: Organizer cannot reach or manage later sessions; the "edit future occurrences" backend is dead code.
- Recommended remediation: Add "Show all" pagination and an "Edit future sessions" form wired to `editFutureOccurrences`.

### F-ORG2-21: Sanction UI: success toast says "issued" even when the sanction only went to admin review; flag shown on organizer's own row
- Interface: organizer/match/[id]
- Risk area: Ambiguity
- Severity: Low
- Evidence: 2466.js:2061 `r.default.alert(u("sanctionIssuedToast"), "")` after `issueSanction`, although for `ban`/`suspension` the backend stores `status: "pending_approval"` (631.js:12122) and notifies admins instead of the player; 2466.js:801-810 the flag (`flag-outline`) button has no `e.user_id !== k.organizer_id` guard (the kick button at 815 has one), and the backend replies `E_YOU_CANNOT_SANCTION_YOURSELF` (631.js:12104).
- Identified gap: Organizer believes a ban is in force when it is pending; a self-flag button that can only error.
- Potential impact: False assurance to organizer; needless error path.
- Recommended remediation: Branch the toast on `result.status` ("Sent for admin review"), and hide the flag button for the organizer's own row.

### F-ORG2-22: Score submission — validation and locking are sound; no correction path exists (needs confirmation)
- Interface: organizer/match/[id]
- Risk area: Data integrity
- Severity: Low
- Evidence: 631.js:3682-3690 — rejects cancelled matches, matches not yet ended, already-final results (`E_THIS_RESULT_IS_FINAL`) and non-integer / out-of-range (0-99) values; UI input strips non-digits (2466.js:396) and the button is disabled until both fields are filled (2466.js:439). Once `score_submitted_at` is set the UI shows the number read-only (2466.js:362-374) and copy says "This cannot be undone" (909.js:255).
- Identified gap: There is no admin or organizer route to correct a typo (grep shows no `mockCorrectScore`/`mockResetScore`), and the wrong result immediately fans out `match_score` notifications (631.js:3701-3712) and feeds leaderboards/compat.
- Potential impact: Permanently wrong results with no remediation path.
- Recommended remediation: Add a confirmation step showing the entered score before submit, and an admin-only correction endpoint that logs `match.score_corrected` via `logAdminAudit`.

### F-ORG2-23: Match cancel/kick audit entries do not carry the reason; reject carries no reason at all
- Interface: organizer/match/[id]
- Risk area: Audit trail
- Severity: Low
- Evidence: 631.js:3627 `logAudit("match.cancelled", actorRef(t), { game: e.slice(-6) })` — the sanitized reason `r` is stored on the game (3617) but not in the audit entry; 631.js:3199-3235 `mockRejectParticipant` accepts no reason and the UI reject button (2466.js:711-716) has no prompt; kick note is optional (2466.js:876 `ve || void 0`).
- Identified gap: The audit trail cannot answer "why" for cancellations or rejections; kicks are traceable only when the organizer bothers to type a note.
- Potential impact: Weak evidence for dispute handling and abuse detection (e.g. discriminatory rejections).
- Recommended remediation: Include `reason` in the `match.cancelled` audit payload, add an optional reason to reject (stored on the booking and audit), and require a note for kicks that trigger a refund.

## Interface summary

- organizer/match/[id] (2466.js) — Full organizer console: edit/cancel match, close/reopen registration, approve/reject/kick participants, attendance, score, Need-Player-Now, concierge auto-invite, smart replacement, group bookings, sanctions, activity log. **Works** end to end (all mutations reload via `qe()`, ownership enforced by `zi` on every mutation). Main gaps: unguarded approve after match end, editable past start time, in-progress cancel with forced refunds, no error handling on initial load, participant roster leaked to non-organizers by the screen endpoint, and sanction targeting not limited to the organizer's own participants.
- organizer/series/[id] (2471.js) — Series dashboard: analytics tiles, pause/resume/end/cancel, list of next 12 upcoming occurrences linking to organizer/match/[id]. **Partially works**: pause/resume/end/cancel function and are authorized server-side, but cancel does not refund paid seats or release courts, "End" has no confirmation and leaves occurrences live, analytics are unauthenticated estimates, and a bad id or fetch error leaves an infinite spinner with no back button. No series-level edit UI (backend `editFutureOccurrences` unused). All route targets used (`/organizer/match/:id`, `/game/:id`, `/squad/:id`) exist in routes.txt.
