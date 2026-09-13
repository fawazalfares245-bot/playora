# ADM1 (admin governance screens) fix status

Backend: commit f203091 (bundle-src/631.js, 656.js, 671.js, 674.js, 909.js). Screens: bundle-src/1823.js, 1826.js, 1832.js, 1833.js, 1834.js, 2503.js. Verified with `node tools/smoke.mjs` (admin + user role on every screen) and `node tools/flows-admin.mjs` (14 interactive checks: reject with confirmation, venue approve and commission change, rating adjustment with reason, ban approval with reason, evidence link, category label).

- F-ADM1-1: Fixed — `mockReviewApplication` throws E_YOU_CANNOT_REVIEW_YOUR_OWN and audits the attempt when reviewer = applicant; the detail screen hides the decision controls and shows "This is your own record" instead.
- F-ADM1-2: Fixed — reject / suspend / request-info require a non-empty message (backend E_A_REASON_IS_REQUIRED, no boilerplate back-fill); buttons are disabled until a message is typed; input capped at the backend limit (200).
- F-ADM1-3: Fixed — reject and suspend open a confirmation dialog that shows the exact message the applicant will receive.
- F-ADM1-4: Fixed — request-info now sets a distinct `info_requested` status (backend), shown as its own chip/badge/tone in the queue and detail; the applicant-side resubmission is in the ORG1 batch.
- F-ADM1-5: Fixed — separate "Message to applicant" and "Internal note" fields; the message goes to the applicant with every decision, the note stays in `admin_notes`.
- F-ADM1-6: Fixed — load errors render the shared GateScreen (denied vs. error with Retry and back button); not-found shows a proper message; client-side admin gate added.
- F-ADM1-7: Fixed — `mn` never overwrites admin/analyst roles and logs every role transition with before/after and the acting admin.
- F-ADM1-8: Fixed — server-side transition table with an action allow-list (E_INVALID_TRANSITION).
- F-ADM1-9: Fixed — `fetchMyPartitionStance` returns per-list hidden counts; organizers, players and conduct screens show a "N records hidden in the other world" banner.
- F-ADM1-10: Fixed — conduct stats are computed over the same partitioned set as the queue; the organizer stats card is labelled platform-wide.
- F-ADM1-11: Fixed — access errors show "Administrators only"; other failures show "Couldn't load this screen" with the localized cause and a Retry button; the organizer-verification copy is gone from admin screens.
- F-ADM1-12: Fixed — rating steppers open an inline reason prompt with the before → after value, run inside try/catch with per-record busy state, and confirm with a "Rating updated: a → b" toast; the reason is stored in the audit meta.
- F-ADM1-13: Fixed — `mockAdminAdjustRating` checks the player exists, applies the partition check, requires an existing skill profile (E_NO_SKILL_PROFILE) and validates the value.
- F-ADM1-14: Fixed — intel access is logged once per screen mount (`logAccess` flag), not on every refresh, and admin actions live in the separate admin audit store.
- F-ADM1-15: Fixed — search is debounced (300 ms) with a request-id guard; after a world correction the results are cleared and a toast explains the player is now in the other world.
- F-ADM1-16: Fixed — the modal states that follow links are removed; the backend records `follows_removed` in the audit meta.
- F-ADM1-17: Fixed — world corrections use `logAdminAudit` with the full admin envelope.
- F-ADM1-18: Fixed — dedicated "No player profiles in your world yet" empty state.
- F-ADM1-19: Fixed — venue review and commission changes throw E_YOU_CANNOT_REVIEW_YOUR_OWN when the admin owns the venue (screen shows "You own this venue" and hides the buttons); admins cannot register venues (backend E_ADMINS_CANNOT_REGISTER_VENUES and a gate on venue/apply).
- F-ADM1-20: Fixed — reject, suspend and re-activation require a reason (inline field + Confirm), which is stored as `review_note`, audited and sent to the owner with a `decision` field; approving a pending venue asks for confirmation.
- F-ADM1-21: Fixed — commission input is validated (finite, 0–100 for both types, single decimal point), needs a reason, confirms with a before → after summary, and the backend logs from/to.
- F-ADM1-22: Fixed — venue actions are allow-listed with a transition table; the list is titled "All venue registrations".
- F-ADM1-23: Fixed — tiles now show gross, gross net of refunds, commission settled vs pending, paid vs owed to venues, and use a zero-safe money formatter (no more "Free").
- F-ADM1-24: Fixed — approve / reject / overturn open an inline reason field with Confirm; the note is stored, audited and sent to the player.
- F-ADM1-25: Fixed — sanction review validates transitions (pending_approval → active/rejected, active → overturned) and rejects unknown actions.
- F-ADM1-26: Fixed — restore applies the partition check, requires a reason, and the screen reports "N sanction(s) lifted" or "Nothing to restore".
- F-ADM1-27: Fixed — evidence links open in a new tab when they are http(s) URLs; otherwise an explanatory alert is shown.
- F-ADM1-28: Fixed — category labels come from the rules module's `labelKey` (dangerous_play resolves correctly).
- F-ADM1-29: Fixed — every ban/suspension (admin-issued included) enters `pending_approval`, and the issuer cannot review their own sanction (screen shows "You issued this sanction").
- F-ADM1-30: Fixed — busy state is tracked per record; other cards' buttons are disabled, not spinning.
- F-ADM1-31: Fixed — list and detail DTOs strip phone/document hashes and registration references.
- F-ADM1-32: Fixed for the client — admin actions go to a separate 5,000-row store with the full actor id and no placeholder IP, and an administrator can now read that log in the app at `/admin/audit` (see F-XC-7) rather than through devtools. A tamper-evident server-side log still needs the backend.
- F-ADM1-33: Not fixed — the role check still evaluates a client-held profile; enforcing it requires the server-side backend (see F-XC-1).
