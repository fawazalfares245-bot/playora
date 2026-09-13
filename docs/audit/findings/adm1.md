# ADM1 — Admin governance screens (application detail, organizers, players, venues, conduct)

Scope: 1823 (admin/application/[id]), 1832 (admin/organizers), 1833 (admin/players), 1834 (admin/venues),
1826 (admin/conduct) and the 631.js mocks they call. Facade mapping verified in 671.js:454-519, 754-759.
All 19 backend mocks in scope call `sn(e)` (admin assert, 631.js:4300-4306) — the exception being
`mockAdminGetPlayerIntel`, which wraps it (631.js:5405-5410). Audit helper is `logAdminAudit` in 643.js:9-14.

---

### F-ADM1-1: Admin can approve their own organizer application (no self-review guard)
- Interface: admin/application/[id]
- Risk area: Segregation of duties
- Severity: High
- Evidence: 631.js:4572-4576 — `r.mockReviewApplication = async (e, t, a, i) => { (await ei(), await sn(e)); const n = Qt.applications.find((e) => e.id === t); ... await _n(e, un(n.user_id), ...)` (no `n.user_id !== e` check); 631.js:4456-4475 `mockSubmitOrganizerApplication` has no role restriction; 2459.js contains no admin gate (grep for "admin"/"role" returns nothing); 631.js:4437-4442 `mn` only skips the role write for admins, but 631.js:4580 still sets `n.status = "approved"` and 631.js:4290 `rn = (e) => "approved" === nn(e)?.status` then grants organizer powers.
- Identified gap: An admin can submit an organizer application from the normal apply flow and then approve it (or approve a colleague's) from this screen. `mockGrantCrossPartition` (631.js:4348) does have a `e === t` self-check, so the pattern exists but was not applied here.
- Potential impact: Admin self-elevation to organizer bypasses identity/risk review; risk flags (duplicate document, velocity) are irrelevant when reviewer = applicant.
- Recommended remediation: In `mockReviewApplication`, throw (e.g. `E_YOU_CANNOT_REVIEW_YOUR_OWN_APPLICATION`) when `n.user_id === e`, and log the attempt; optionally block the apply flow for `role === "admin"`.

### F-ADM1-2: Reject / Suspend decisions do not require a reason; a canned reason is substituted silently
- Interface: admin/application/[id]
- Risk area: Audit trail
- Severity: Medium
- Evidence: 1823.js:32 — `reviewApplication(c.id, e, s, { reason: G, notes: G })` (G may be ""); 631.js:4590 — `sanitizeText(i?.reason ?? "", 200) || "Did not meet verification requirements."`; 631.js:4609 — `|| "Policy violation."`; 631.js:4601 — request_info defaults to `"Please provide additional information."`.
- Identified gap: The reason field (1823.js:257-266) is optional and the backend back-fills a generic string, which is then stored as `rejection_reason`, sent to the applicant (`wn`, 631.js:4599/4617) and written to the audit log (631.js:4598/4616). Additionally the input allows 500 chars (1823.js:264) but reject/suspend truncate the reason to 200 (631.js:4590/4609) with no warning.
- Potential impact: Adverse decisions (rejection with a 30-day reapply lock, 631.js:4596; suspension) can be issued with no documented rationale; the audit record shows a boilerplate reason indistinguishable from a real one.
- Recommended remediation: Require a non-empty reason for reject/suspend in both the screen (disable buttons while `!G.trim()`) and the mock (`throw new Error("E_A_REASON_IS_REQUIRED")`, as `mockAdminCorrectAudience` already does at 631.js:4420). Align `maxLength` with the server cap.

### F-ADM1-3: No confirmation dialog before Reject or Suspend organizer
- Interface: admin/application/[id]
- Risk area: Data integrity
- Severity: Medium
- Evidence: 1823.js:293-311 — `onPress: () => K("reject")` / `onPress: () => K("suspend")` call the mutation directly; 631.js:4596 sets a 30-day `reapply_after`, 631.js:4597/4615 demote the user's role.
- Identified gap: Destructive, hard-to-reverse decisions execute on a single tap with no confirm step, while both buttons sit next to Approve.
- Potential impact: Accidental rejection locks the applicant out for 30 days; accidental suspension revokes organizer rights immediately.
- Recommended remediation: Wrap reject/suspend in `Alert.alert` confirm (as done elsewhere in the app), showing the reason that will be sent.

### F-ADM1-4: "Request info" is a dead end — applicant cannot resubmit and the queue shows no change
- Interface: admin/application/[id] (and organizer/apply)
- Risk area: UX dead end
- Severity: High
- Evidence: 631.js:4600-4607 — `"request_info" === a` sets `n.status = "under_review"` (unchanged) and only writes `admin_notes`; 631.js:4473 — `if ("under_review" === d?.status) throw new Error("E_YOUR_APPLICATION_IS_ALREADY_UNDER_REVIEW")`; the only application-writing mocks are `mockSubmitOrganizerApplication` (4456) and `mockReviewApplication` (4572) — there is no "update/supplement application" mock.
- Identified gap: After the admin requests more information, the applicant receives a notification (`wn(..., "info_requested", t)`, 631.js:4607) but any attempt to resubmit is rejected because the status is still `under_review`. On the admin side the card keeps the same "Under review" badge (1832.js:388-391, 1823.js:76) so the reviewer cannot tell that info was requested or whether it arrived.
- Potential impact: Applications enter a permanent limbo; the admin's only exits are approve or reject without the requested information.
- Recommended remediation: Introduce a distinct status (e.g. `info_requested`) that the submit mock accepts for resubmission (`d.status === "info_requested"` → allowed, keep `id`), add it to the filter chips (1832.js:478-484) and status-tone maps, and clear `admin_notes` or mark it answered on resubmission.

### F-ADM1-5: Reason placeholder promises the note is "sent to the applicant", but on Approve it is not
- Interface: admin/application/[id]
- Risk area: Ambiguity
- Severity: Low
- Evidence: 909.js:1189 — `decisionReasonPlaceholder: "Add a reason or note (sent to the applicant)"`; 631.js:4588 — `await wn(n.user_id, n.id, "approved", "")` (empty note); 631.js:4583 stores the typed text only in `admin_notes`.
- Identified gap: For approve the text goes into internal `admin_notes` and the applicant notification carries an empty note; for reject/suspend the same field is sent externally. One field, two behaviours.
- Potential impact: Admins may write internal remarks that get sent to rejected applicants, or write welcome notes that approved applicants never see.
- Recommended remediation: Split into "internal note" and "message to applicant" fields, or change the placeholder per action and pass the note to `wn` on approve.

### F-ADM1-6: Detail screen swallows all fetch errors into a bare "Error" view with no back button or cause
- Interface: admin/application/[id]
- Risk area: UX dead end
- Severity: Medium
- Evidence: 1823.js:18-21 — `W(await fetchApplicationDetail(c.id, e)); } catch { W(null); }`; 1823.js:48-55 — renders only `V("error")` text inside a SafeAreaView with no header/back control; 631.js:4304 throws `E_ADMINISTRATOR_AUTHORIZATION_REQUIRED`, 631.js:4338 throws `E_THAT_RECORD_IS_IN_THE_OTHER_WORLD`, 631.js:4570 returns `null` when not found.
- Identified gap: Three very different outcomes (not admin, record in other partition, id not found) collapse into the word "Error", and the screen has no chrome to navigate back (the header at 1823.js:61-78 is only rendered in the success branch). The screen also has no client-side role gate unlike 1832.js:40.
- Potential impact: Deep-linked or stale ids leave the admin stuck on a blank error page; partition refusals (which are audited, 631.js:4337) look like bugs.
- Recommended remediation: Keep the header/back button in the error branch, surface `storeErrorText(e.message)` (already imported as `S`, 1823.js:37), and add the same `"admin" !== profile?.role` gate used at 1832.js:40.

### F-ADM1-7: Rejecting/suspending (or approving) an application overwrites non-admin roles such as "analyst"
- Interface: admin/application/[id]
- Risk area: Data integrity
- Severity: Medium
- Evidence: 631.js:4597 and 4615 — `await mn(n.user_id, "user")`; 631.js:4586 — `await mn(n.user_id, "organizer")`; 631.js:4437-4442 — `mn` only guards `"admin" !== Qt.profiles[a].role`; 631.js:4746 seeds a profile with `role: "analyst"`; 631.js:10658 `Ns = new Set(["admin","analyst"])` shows analyst is a privileged role.
- Identified gap: The role write is unconditional for every non-admin role. An analyst who applies to organize and is rejected becomes a plain "user"; approved, they become "organizer" and lose analyst access (1805.js:752 gates the BI entry on `"analyst" === role`).
- Potential impact: Silent privilege loss (or loss of BI access) with no audit entry describing the role change (the audit at 631.js:4598 only logs the reason).
- Recommended remediation: Make `mn` preserve any privileged role (`admin`, `analyst`) or model organizer status as a separate flag instead of overwriting `role`; log role transitions.

### F-ADM1-8: `mockReviewApplication` performs no state-transition validation; unknown actions fall through to "suspend"
- Interface: admin/application/[id]
- Risk area: Validation
- Severity: Low
- Evidence: 631.js:4579-4618 — `if ("approve" === a) ... else if ("reject" === a) ... else if ("request_info" === a) ... else { ... n.status = "suspended" ... }`; no read of `n.status` before writing; only the UI gates actions (1823.js:352-361 `D(status)`).
- Identified gap: Any caller (or a stale screen) can approve an already-approved record, "request info" on a rejected one, or pass a typo action string and suspend an organizer.
- Potential impact: Inconsistent status histories and accidental suspensions via API misuse.
- Recommended remediation: Validate `a` against an allow-list and enforce the same transition table as `D()` server-side (throw `E_INVALID_TRANSITION`).

### F-ADM1-9: Applications (and players/incidents) from the other audience "world" are silently hidden from the admin
- Interface: admin/organizers (also admin/players, admin/conduct)
- Risk area: Availability
- Severity: High
- Evidence: 631.js:4562 — `cn(e, Qt.applications, (e) => un(e.user_id), "admin.applications")`; 631.js:4316-4330 — `cn` returns `r` (the filtered subset) with no marker when the admin has no grant; 631.js:735-742 — `aa` defaults a profile with no `audience` to `"male"`; same pattern at 631.js:5411 (player intel), 4401 (find players), 12234 (incident queue). 1832.js:337-342 shows "Queue is clear" when the filtered list is empty.
- Identified gap: The approval queue, player intel and incident queue are partitioned by the reviewing admin's own audience. A male-world admin never sees female applicants/players/sanctions (and vice-versa) unless a time-limited cross-partition grant exists (631.js:4307-4315), and the screens give no indication that records were withheld. Whether this is intended policy needs confirmation, but the silent behaviour is not.
- Potential impact: Applications and pending bans in the other world may go unreviewed indefinitely; the "Queue is clear" empty state is misleading; stats cards (see F-ADM1-10) will not reconcile with the list.
- Recommended remediation: Either ensure at least one admin per world (and show which world the queue is for), or show a banner "N records hidden — other world" using `t.length - r.length` from `cn`, and surface the grant state in the header.

### F-ADM1-10: Dashboard counters are computed over all data while the lists beneath them are partition-filtered
- Interface: admin/organizers, admin/conduct
- Risk area: Ambiguity
- Severity: Low
- Evidence: 631.js:12243-12261 — `mockGetConductAdminStats` counts `Qt.sanctions` unfiltered (`pending: t.filter((e) => "pending_approval" === e.status).length`) whereas 631.js:12234 filters the queue through `cn`; 631.js:5076-5092 (NPN), 5280-5305 (skill), 6002-6014 (growth), 6395-6400 (compat) likewise aggregate whole tables. Screen shows "Pending review" tile at 1826.js:85-90 above the queue at 1826.js:114-217.
- Identified gap: An admin can see "Pending review: 3" and an empty incident queue.
- Potential impact: Confusion and unactionable counters; may mask the hidden-world problem in F-ADM1-9.
- Recommended remediation: Compute stats over the same partitioned set, or label the tiles "platform-wide".

### F-ADM1-11: Access-denied gate is labelled "Verification required" and is triggered by any fetch error
- Interface: admin/organizers, admin/players, admin/venues, admin/conduct
- Risk area: Ambiguity
- Severity: Medium
- Evidence: 1832.js:27-28 `catch { F(!0); }` then 1832.js:46-50 `EmptyState({ icon: "lock-closed-outline", title: W("organizerGateTitle"), body: W("adminPanel") })`; identical pattern at 1833.js:22-23/72-76, 1834.js:22-24/56-60, 1826.js:19-21/53-57; 909.js:1201 `organizerGateTitle: "Verification required"`, 909.js:1158 `adminPanel: "Admin"`.
- Identified gap: The gate text was written for the organizer verification wall and is reused for admin authorization; and because the catch is unconditional, a partition refusal, a storage read failure or any thrown error renders the same lock screen. The error object is discarded so nothing is reported.
- Potential impact: Real admins hit "Verification required / Admin" on transient failures and have no retry; non-admins get an inaccurate explanation.
- Recommended remediation: Distinguish `E_ADMINISTRATOR_AUTHORIZATION_REQUIRED` from other errors, show `storeErrorText(e.message)` and a Retry button, and add an admin-specific title key.

### F-ADM1-12: Rating +/- steppers have no error handling, no loading state, no confirmation and a hard-coded audit note
- Interface: admin/players
- Risk area: Audit trail
- Severity: Medium
- Evidence: 1833.js:31-36 — `const Z = async (t, r) => { ... await adminAdjustRating(e.id, t.user_id, t.sport, t.rating + r * o, "admin panel"), await Y(); }` (no try/catch, no busy flag); 1833.js:233 and 254 `onPress: () => Z(e, -1)` / `Z(e, 1)`; 631.js:5444-5448 — audit meta `note: sanitizeText(n ?? "", 120) || "manual adjustment"`.
- Identified gap: Every tap mutates a player's official rating (persisted at 631.js:5443) with no reason captured — the "note" is always the literal string "admin panel" — and no confirmation. If the mock throws (auth, storage) the rejection is unhandled and the user sees nothing. Rapid taps race with the `Y()` refresh (each tap uses the possibly stale `t.rating` from the last render).
- Potential impact: Silent, unexplained rating manipulation; audit entries that all read "admin panel"; unhandled promise rejections in the console.
- Recommended remediation: Route Z through a try/catch with `Alert`, disable steppers while pending, require a reason (prompt once per player/session), and pass it as the note.

### F-ADM1-13: `mockAdminAdjustRating` has no partition check and will create a skill profile for any id
- Interface: admin/players
- Risk area: Authorization
- Severity: Medium
- Evidence: 631.js:5437-5449 — `(await ei(), await sn(e)); const r = await Dn(t, a), o = r.rating; r.rating = clampRating(a, i) ...` — no `_n(e, un(t), ...)` call, unlike `mockAdminCorrectAudience` at 631.js:4426; 631.js:5127-5150 — `Dn` pushes a brand-new profile (`Qt.skillProfiles.push(a)`) when none exists and never checks that `Qt.profiles` contains `t`.
- Identified gap: The API accepts any `user_id`/`sport` and will write a rating for a non-existent user or a user in the other world, bypassing the partition policy applied to every other admin surface.
- Potential impact: Orphan skill rows; inconsistent enforcement of the world partition; `Dn` side-effect on a read path when the id is mistyped.
- Recommended remediation: Add `_n(e, un(t), "admin.adjust_rating")`, verify the profile exists, and use a non-creating lookup for the adjustment.

### F-ADM1-14: Every intel refresh (including after each +/- tap) writes an "intel.accessed" audit row into a 500-entry capped log
- Interface: admin/players
- Risk area: Audit trail
- Severity: Medium
- Evidence: 631.js:5433 — `await logAdminAudit("intel.accessed", e, null, { scope: "full", rows: t.length })`; 1833.js:35 `await Y()` after every adjustment and 1833.js:382 after audience correction; 643.js:25 `o = 500` and 643.js:43 `u.slice(0, o)`.
- Identified gap: The access log is correct in principle, but combined with the fixed-size ring buffer, routine refreshes evict older privileged-action records (approvals, bans, commission changes) from the only audit store.
- Potential impact: Loss of the audit trail for real decisions after ~500 events; noisy log makes review impractical.
- Recommended remediation: Log intel access once per session/screen mount (not per refresh), and raise or remove the cap for admin events (or ship them via `appendAudit`, 643.js:48-49, to a server store).

### F-ADM1-15: Player search fires an unguarded request per keystroke and results go stale after an audience correction
- Interface: admin/players
- Risk area: Bug/crash
- Severity: Low
- Evidence: 1833.js:82-90 — `onChangeText: async (t) => { ... U(await adminFindPlayers(e.id, t)) ... }` (no debounce, no request-id guard); 1833.js:379-382 — after `adminCorrectAudience` only `Y()` (intel) is re-fetched, `G` (search results) is left untouched; 631.js:4401-4406 — search results are partition-filtered via `cn`.
- Identified gap: Out-of-order responses can render results for an earlier query; after moving a player to the other world the search card still shows the old audience label and the player vanishes from the intel list (now filtered out) with no explanation.
- Potential impact: Admin may believe the correction failed or apply it twice (second attempt correctly throws `E_THAT_PLAYER_IS_ALREADY_IN_THIS`, 631.js:4424, but only after the modal reopens).
- Recommended remediation: Debounce and tag requests; after a successful correction clear/refresh the search results and show a toast explaining the player is now in the other world.

### F-ADM1-16: Audience correction silently deletes all of the player's follow relationships
- Interface: admin/players
- Risk area: Data integrity
- Severity: Medium
- Evidence: 631.js:4429-4430 — `Qt.follows = Qt.follows.filter((e) => e.follower_id !== t && e.followee_id !== t), await Za(Ne, Qt.follows)`; modal copy 909.js:706-707 `"This is the only way the fork choice can change. It is recorded with your name."` (no mention of follows); audit meta 631.js:4431-4436 does not record the number of follows removed.
- Identified gap: A privacy-motivated side effect (severing social links across worlds) is undisclosed to the admin, unrecorded in the audit meta and irreversible.
- Potential impact: Unexpected loss of user data; support cannot explain why follows disappeared.
- Recommended remediation: State the side effect in `adminCorrectWorldBody`, log `follows_removed` in the audit meta, and consider soft-deleting.

### F-ADM1-17: Audience correction is logged with `logAudit` instead of `logAdminAudit`
- Interface: admin/players
- Risk area: Audit trail
- Severity: Low
- Evidence: 631.js:4431 — `await logAudit("admin.audience_corrected", actorRef(e), { target: t, ... })` versus every other privileged action in scope using `logAdminAudit` (e.g. 631.js:4587, 5444, 6724, 12187); 643.js:9-14 shows `logAdminAudit` adds `applicant`, `device`, `ip` fields.
- Identified gap: This admin action is missing the standard admin envelope, and the `target` is stored as the full user id rather than the truncated `actorRef` used elsewhere (inconsistent PII handling in the log).
- Potential impact: Harder to filter admin actions; inconsistent identifier redaction.
- Recommended remediation: Switch to `logAdminAudit("admin.audience_corrected", e, t, {...})`.

### F-ADM1-18: Player-intel empty state says "No matches yet"
- Interface: admin/players
- Risk area: Ambiguity
- Severity: Low
- Evidence: 1833.js:160-165 — `EmptyState({ icon: "people-outline", title: L("noOrganizerMatches"), body: "" })`; 909.js:1046 `noOrganizerMatches: "No matches yet"`.
- Identified gap: The key belongs to the organizer match list; on this screen it reads as "no search matches" while the list is actually the full skill-profile roster (possibly empty because of the partition, F-ADM1-9).
- Potential impact: Admin misreads an empty roster as a search problem.
- Recommended remediation: Add a dedicated key ("No player profiles in your world yet").

### F-ADM1-19: Admin can register a venue, approve it and set its own commission (no owner ≠ reviewer check, no role gate on apply)
- Interface: admin/venues (and venue/apply)
- Risk area: Financial control
- Severity: High
- Evidence: 631.js:6578-6626 — `mockApplyVenue` has no role check (`owner_id: e, status: "pending", commission_value: 10`); 2503.js has no admin gate; 631.js:6704-6710 — `mockAdminReviewVenue`: `(await ei(), await sn(e)); const n = hr(t); ... n.status = "approve" === a ? "approved" : ...` (no `n.owner_id !== e` check); 631.js:6737-6742 — `mockAdminSetCommission` sets `commission_value = Math.max(0, Math.min(100, i))` with no owner check; 631.js:6854 — settlements use the venue's `commission_type/value` snapshotted on the booking.
- Identified gap: A single admin account can create a venue it owns, approve it, set commission to 0 %, and collect 100 % of gross via `net_to_venue_kwd`. No four-eyes control and no self-review guard.
- Potential impact: Direct revenue leakage; commission fraud with a clean-looking audit trail (the log records the change but not that reviewer = owner).
- Recommended remediation: Throw when `n.owner_id === e` in review/commission mocks, require a second admin (or a reason + threshold) for commission below a floor, and log `previous` values.

### F-ADM1-20: Venue reject/suspend capture no reason, have no confirmation, and the owner cannot tell suspension from rejection
- Interface: admin/venues
- Risk area: Audit trail
- Severity: Medium
- Evidence: 1834.js:167, 175, 183 — `reviewVenue(e.id, t.id, "approve"|"reject"|"suspend")` (no 4th argument, no confirm); 631.js:6712 — `n.review_note = i ? sanitizeText(i, 300) : null`; 631.js:6714-6723 — owner notification carries only `approved: "approve" === a`; 631.js:6724-6733 — audit meta is `{ venue: t.slice(-6) }` with no reason.
- Identified gap: The backend supports a `review_note` but the screen never collects one; suspending an approved venue (which stops all bookings via `yr`, 631.js:6413-6417) is a one-tap action; the owner receives `approved: false` for both reject and suspend.
- Potential impact: Undocumented revenue-affecting decisions; venue owners cannot understand or contest the outcome.
- Recommended remediation: Add a reason prompt (required for reject/suspend), pass it as the 4th arg, include it in the audit meta, and add a `decision` field to the notification.

### F-ADM1-21: Commission edit: malformed input silently becomes 0, no previous value is logged, no confirmation
- Interface: admin/venues
- Risk area: Financial control
- Severity: Medium
- Evidence: 1834.js:255 — `setVenueCommission(e.id, t.id, J, Number(U) || 0)`; 1834.js:245 input filter allows multiple dots (`"1.2.3"` → `NaN` → `0`); 631.js:6741 — fixed type has no upper bound (`Math.max(0, i)`); 631.js:6745-6748 — audit meta `{ venue, commission: "type:value" }` records only the new value; no confirmation step on the screen.
- Identified gap: A typo sets a venue's commission to 0 % with no warning; the audit cannot show what it was before; fixed commissions can exceed the court price.
- Potential impact: Revenue loss until noticed; weak evidence for reconciliation.
- Recommended remediation: Validate numerically (reject NaN, require `0 < value`, cap fixed at a sane maximum), confirm with a before→after summary, and log `from`/`to` in the audit meta.

### F-ADM1-22: `mockAdminReviewVenue` treats any non approve/reject action as "suspend" and validates no transition
- Interface: admin/venues
- Risk area: Validation
- Severity: Low
- Evidence: 631.js:6710 — `n.status = "approve" === a ? "approved" : "reject" === a ? "rejected" : "suspended"`; no read of the current `n.status`; 631.js:6695-6703 `mockGetPendingVenues` returns every venue profile regardless of status (misnamed) so the screen offers Approve on rejected and suspended venues (1834.js:162).
- Identified gap: Transitions such as rejected→approved and suspended→approved happen with no additional review; a typo action suspends a venue.
- Potential impact: Accidental suspension via API; re-activation of rejected venues without re-review.
- Recommended remediation: Allow-list the action, enforce a transition table, and rename/filter the query (or label the section "All venue registrations").

### F-ADM1-23: Financial tiles sum all settlements including "pending" ones, so "Payouts" overstates money paid out
- Interface: admin/venues
- Risk area: Financial control
- Severity: Medium
- Evidence: 631.js:7957-7961 — `grossKwd: roundKwd(t.reduce((e, t) => e + t.gross_kwd, 0)) ... payoutsKwd: roundKwd(t.reduce((e, t) => e + t.net_to_venue_kwd, 0))` over `Qt.settlements` with no status filter; 631.js:6858-6868 — settlements are created with `status: "pending", settled_at: null`; 631.js:7030 shows pending settlements can later be removed on cancellation. Screen labels the tile `payoutsLabel` (1834.js:93-97).
- Identified gap: Pending and settled amounts are mixed; the tile presented as payouts is really "net owed + paid". Refunds (631.js:7962-7964) are summed separately from payments, so gross is not net of refunds. Whether a "settled" state exists needs confirmation, but the code path never distinguishes.
- Potential impact: Misleading platform financial summary for an admin making commission decisions.
- Recommended remediation: Split into pending vs settled (`settled_at != null`), and label gross as "before refunds" or subtract refunds.

### F-ADM1-24: Sanction Approve / Reject / Overturn capture no reason and have no confirmation
- Interface: admin/conduct
- Risk area: Audit trail
- Severity: Medium
- Evidence: 1826.js:183, 190, 200 — `reviewSanction(e.id, t.id, "approve"|"reject"|"overturn")` (no 4th arg, no confirm); 631.js:12172 — `n.review_note = i ? sanitizeText(i, 300) : null`; 631.js:12187 — audit meta `{ decision: a, type: n.type }` (no note); the player notification (631.js:12176-12185) carries only `upheld`.
- Identified gap: Approving a ban (which the app treats as a serious, appealable action — organizer-issued bans require admin approval, 656.js `needsAdminApproval`) or overturning an active sanction is a single tap with no rationale stored anywhere.
- Potential impact: Bans upheld or lifted without documented justification; appeals cannot be reviewed.
- Recommended remediation: Prompt for a note (required for approve-ban and overturn), pass it through, include it in the audit meta and notification.

### F-ADM1-25: `mockReviewSanction` has no state-transition validation; unknown actions overturn
- Interface: admin/conduct
- Risk area: Validation
- Severity: Low
- Evidence: 631.js:12173 — `n.status = "approve" === a ? "active" : "reject" === a ? "rejected" : "overturned"` with no check of the prior status; 631.js:12168-12170 only checks existence. UI gates by status at 1826.js:176 and 194.
- Identified gap: A rejected or already-overturned sanction can be re-activated via "approve", and any unrecognised action string overturns.
- Potential impact: Sanction history becomes unreliable; a stale screen can flip a decision.
- Recommended remediation: Allow-list actions and enforce: pending_approval→{active,rejected}, active→{overturned}.

### F-ADM1-26: "Restore account" skips the partition check, returns silently when nothing was lifted, and gives no success feedback
- Interface: admin/conduct
- Risk area: Authorization
- Severity: Low
- Evidence: 631.js:12191-12199 — `mockRestoreUser`: `(await ei(), await sn(e)); let a = 0; for (const i of Qt.sanctions) ...` — no `_n(e, un(t), ...)` unlike `mockReviewSanction` at 631.js:12168; returns `a` (count); 1826.js:209 — `G(() => restoreUser(e.id, t.user_id))` ignores the return value; 1826.js:30-39 — `G` only refreshes, never alerts success.
- Identified gap: Restore can act on a user in the other world (inconsistent policy), and if the count is 0 (e.g. sanction already overturned by another admin) the admin sees no message. The generic no-feedback pattern applies to all conduct and venue actions (1834.js:33-42).
- Potential impact: Inconsistent partition enforcement; admins repeat actions unsure whether they took effect.
- Recommended remediation: Add the `_n` check, and show a toast with the lifted count (or "nothing to restore").

### F-ADM1-27: Evidence URL is rendered as inert text
- Interface: admin/conduct
- Risk area: UX dead end
- Severity: Low
- Evidence: 1826.js:163-167 — `!!t.evidence_url && Text({ style: [caption, { color: o.accentText }], children: t.evidence_url })` (no `onPress`/`Linking`).
- Identified gap: The link is styled as a link (accent colour) but cannot be opened, so the reviewer cannot examine evidence before approving a ban.
- Potential impact: Decisions made without viewing evidence; frustration.
- Recommended remediation: Wrap in a Pressable calling `Linking.openURL` after validating the scheme.

### F-ADM1-28: Violation category "dangerous_play" maps to a non-existent i18n key
- Interface: admin/conduct
- Risk area: Bug/crash
- Severity: Low
- Evidence: 1826.js:147 — `y(\`vio${I(t.category)}\`)` with 1826.js:249-253 `I = (e) => e.split("_").map(capitalize).join("")` → `"vioDangerousPlay"`; 656.js (raw bundle) `{category:'dangerous_play',labelKey:'vioDangerous'}`; 909.js has `vioDangerous:` but no `vioDangerousPlay:` (grep count 0).
- Identified gap: The screen re-derives the key instead of using the `labelKey` the rules module already provides, and gets it wrong for this category. The raw key (or blank, depending on `useT` fallback — needs confirmation) is shown to the admin.
- Potential impact: Untranslated/unknown label on yellow-card incidents for dangerous play in both locales.
- Recommended remediation: Look up `VIOLATION_CATEGORIES.find(c => c.category === t.category)?.labelKey` (as `sanctionMeta` does for types) instead of string-building.

### F-ADM1-29: Admin-issued bans/suspensions skip the approval queue entirely
- Interface: admin/conduct
- Risk area: Segregation of duties
- Severity: Medium
- Evidence: 656.js (raw bundle) — `needsAdminApproval=(n,o)=>'organizer'===o&&('ban'===n||'suspension'===n)`; 631.js:12106-12123 — `const i = ro(e) ? "admin" : "organizer"; ... status: r ? "pending_approval" : "active"`.
- Identified gap: Only organizer-issued bans need a second pair of eyes; an admin's own ban is active immediately and never appears as "pending" in this queue, so the review workflow shown on this screen does not cover the most powerful issuer.
- Potential impact: A single admin can permanently ban any user with no review; the "Pending review" counter understates the true number of unreviewed bans.
- Recommended remediation: Route admin-issued bans through `pending_approval` too and forbid the issuer from approving their own (`n.issued_by === e` check in `mockReviewSanction`).

### F-ADM1-30: Shared loading flag makes every action button on every card spin at once
- Interface: admin/venues, admin/conduct
- Risk area: Ambiguity
- Severity: Low
- Evidence: 1834.js:166, 174, 182, 252 — `loading: G` (single state, 1834.js:14); 1826.js:182, 188, 198, 208 — `loading: O` (1826.js:14).
- Identified gap: While one venue/sanction is being processed all other cards' buttons show a spinner, so the admin cannot tell which record is being acted on and cannot act on another.
- Potential impact: Minor confusion; double-tap risk is mitigated but progress attribution is lost.
- Recommended remediation: Track `busyId` (venue/sanction id) and pass `loading: busyId === t.id`.

### F-ADM1-31: Application list and detail expose hashed identity references and full contact PII to the client
- Interface: admin/organizers, admin/application/[id]
- Risk area: Privacy
- Severity: Low
- Evidence: 631.js:4550-4558 — `pn` returns `Object.assign({}, e, {...})` (whole application record including `phone_hash`, `id_doc_ref`, `business.registration_number_ref`, `license_ref`, `mobile`, `email`); 631.js:4562-4565 — the list endpoint returns the same shape for every application; 1832.js shows only `display_name`/`full_legal_name`.
- Identified gap: The list call ships mobile, email and document hashes for every applicant although the list UI needs none of it; hashes of national ID numbers are a re-identification aid.
- Potential impact: Larger PII surface in memory/devtools for a list view.
- Recommended remediation: Return a slim DTO from `mockGetOrganizerApplications` and strip `*_ref`/`*_hash` fields from the detail DTO.

### F-ADM1-32: Admin audit trail is a client-side, 500-entry localStorage ring buffer with a hard-coded "ip" field
- Interface: all five screens (cross-cutting)
- Risk area: Audit trail
- Severity: High
- Evidence: 643.js:9-14 — `logAdminAudit = async (e, t, n, o) => await l(e, s(t), Object.assign({ applicant: s(n) ?? "unknown", device: c(), ip: "server-captured" }, o ?? {}))`; 643.js:25, 34-43 — key `"playora.audit.v1"`, `u.slice(0, o)` with `o = 500`; 643.js:44-46 — write failures only `console.error`; 643.js:29-31 — `actorRef` keeps only the last 6 chars of the admin id; 643.js:48-49 — optional `appendAudit` hook.
- Identified gap: Every privileged decision in scope (approve/reject/suspend organizer, venue decisions, commission changes, sanction reviews, rating adjustments) is recorded only in the actor's own browser storage, truncated to 500 rows, with a literal placeholder for IP and a non-unique 6-char actor reference. The record can be cleared by the same user it is meant to hold accountable. This is inherent to the mock architecture; it needs confirmation whether a server store replaces it before launch.
- Potential impact: No reliable, tamper-evident audit trail for any admin action; investigations cannot attribute actions.
- Recommended remediation: Persist admin audit events server-side via `appendAudit` (make it mandatory for `logAdminAudit`), store full actor id, capture IP/UA server-side, and remove the cap for admin events.

### F-ADM1-33: The admin check (`sn`) trusts a client-held profile role
- Interface: all five screens (cross-cutting)
- Risk area: Authorization
- Severity: High
- Evidence: 631.js:4300-4306 — `async function sn(e) { if ((await ei(), "admin" !== Qt.profiles.find((t) => t.id === e)?.role)) throw ... }`; `Qt.profiles` is hydrated from local storage (631.js:1737-1760 `ei`/`ti`) and every mock takes the caller id as a plain argument (e.g. 671.js:456 `(o, c, s, n) => t.store.mockReviewApplication(o, c, s, n)`).
- Identified gap: Authorization is evaluated against data the client controls and the "caller id" is whatever the screen passes; nothing binds it to the authenticated session. Adequate for a demo store, not for production — needs confirmation of the intended backend.
- Potential impact: Any user can obtain admin behaviour by editing stored profile role or calling the facade with an admin id.
- Recommended remediation: Enforce role checks server-side from the session principal; never accept `adminId` from the request body.

---

## Interface summary

- **admin/application/[id] (1823)** — Shows one organizer application (risk flags, PII, identity, business, prior activity) with a free-text reason field and Approve / Request info / Reject / Suspend buttons; refreshes and shows "Done" after each action. *Partially works*: decisions execute and are audited, but reasons are optional, there is no confirmation, no self-review guard, "Request info" leads to an applicant dead end, and any load error is a bare "Error" page with no back button.
- **admin/organizers (1832)** — Approval queue with status filters, four platform stats cards (NPN, growth, skill, compatibility) and a shortcut to players; refetches on focus. *Works*, with the caveat that the list is silently restricted to the admin's own audience world and stats do not reconcile with it.
- **admin/players (1833)** — Player search with "move world" modal (reason required, works) plus a skill-intel roster with ± rating steppers. *Partially works*: audience correction is complete; rating adjustment has no error handling, confirmation or real reason, backend skips partition/existence checks, and refresh spam floods the capped audit log.
- **admin/venues (1834)** — Platform financial tiles and a list of all venue registrations with Approve / Reject / Suspend and an inline commission editor; refreshes after each action. *Partially works*: mutations succeed and are audited, but there is no reason capture, no confirmation, no owner≠reviewer guard (admin can approve and zero-commission their own venue), and financial tiles mix pending and settled amounts.
- **admin/conduct (1826)** — Conduct stats and an incident queue with Approve/Reject (pending), Overturn (active) and Restore account (ban/suspension); refreshes after each action. *Partially works*: actions execute and are audited, but with no reason/confirmation, no success feedback, inert evidence links, a mislabelled "dangerous_play" category, and admin-issued bans never enter the queue.
