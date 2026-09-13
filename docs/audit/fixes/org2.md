# ORG2 (organizer match & series management) fix status

Files: bundle-src/631.js (backend), 671.js (facade), 674.js, 909.js, 2466.js (organizer/match/[id]), 2471.js (organizer/series/[id]). Verified with `node tools/smoke.mjs` and `node tools/flows-organizer.mjs` (13 interactive checks: cancel with required reason and refund note, score confirmation, non-organizer denial on a series, edit future sessions, series cancel with summary) plus `tools/flows-admin.mjs` for regressions.

- F-ORG2-1: Fixed — series cancellation now runs the shared `cancelGameLocked` routine per occurrence: seats are cancelled, paid seats refunded via the normal refund path, court bookings released, and each occurrence is audited; the result summarises sessions cancelled and seats refunded.
- F-ORG2-2: Fixed — "End series" asks for confirmation and explains that scheduled sessions stay open; the series screen also offers "Edit future sessions".
- F-ORG2-3: Fixed — a cancelled series is stored as `cancelled` with `cancelled_at` and `cancellation_reason` and shows its own "Cancelled" badge.
- F-ORG2-4: Fixed — the series loader is wrapped in try/catch; analytics failures no longer block the page; unknown ids and errors render the shared GateScreen with Retry and a back button.
- F-ORG2-5: Fixed — the match screen loader has an error state with Retry and back button; not-found shows a proper message.
- F-ORG2-6: Fixed — `mockGetOrganizerMatchScreen` returns an empty participants object to non-organizers.
- F-ORG2-7: Fixed — series analytics take the caller id and require the organizer or an admin; revenue is computed from paid seat payments (the list-price estimate is returned separately as `revenueEstimatedKwd`).
- F-ORG2-8: Fixed — organizers can only sanction a player who holds a non-cancelled booking in a match they organize (`game_id` required, ownership verified via `zi`).
- F-ORG2-9: Fixed — approve/reject reject matches that are not scheduled or already ended; the pending list shows a read-only badge once the match is over or cancelled.
- F-ORG2-10: Fixed — updates cannot move a match into the past, must keep a 30 min–6 h duration, cannot change the time of a court-booked match, validate capacity as an integer 2–40 and never below confirmed + held seats.
- F-ORG2-11: Fixed — cancel and kick compare against kick-off, and both require a reason of at least 3 characters (UI and backend); the reason is stored in the audit entry.
- F-ORG2-12: Fixed — a failed court cancellation is audited (`court.cancel_failed`) and reported to the organizer ("The court booking could not be released") instead of being swallowed.
- F-ORG2-13: Fixed for the client — the cancel, series-cancel and remove-player dialogs state that refunds go to the player's wallet, and the refund notification the player receives now says so too: it names the amount, the venue, and that the money is wallet credit they can spend on their next booking or ask support to pay out. A gateway refund path still needs the server.
- F-ORG2-14: Fixed — attendance can only be marked after the match ends, never on a cancelled match, is frozen 48 h after the score, and is written to the activity log.
- F-ORG2-15: Fixed — Need-Player-Now broadcasts are limited to one per 10 minutes per match; concierge auto-invite is rejected for closed/non-scheduled matches, has the same cooldown, and never invites the same player twice.
- F-ORG2-16: Fixed — the replacement-suggestion read no longer writes an audit entry.
- F-ORG2-17: Fixed — the activity log, replacement suggestions, replacement state and group-booking panels show "Couldn't load this section · Retry" instead of an empty state; group errors use proper E_ codes.
- F-ORG2-18: Fixed — the series getter returns an explicit `is_organizer` flag and strips organizer-only fields for others; the screen shows "Only the organizer of this series can manage it".
- F-ORG2-19: Fixed — the dialog says "Keep series", and it only closes when the cancellation succeeded.
- F-ORG2-20: Fixed — "Show all N sessions" toggle, and an "Edit future sessions" form (time, price, capacity) wired to `editFutureOccurrences` with a result toast.
- F-ORG2-21: Fixed — the toast says "Sent for administrator review" when the sanction is pending; the flag button is hidden on the organizer's own row.
- F-ORG2-22: Fixed — score submission shows a confirmation with the entered score; an audited admin-only `correctMatchScore` endpoint exists in the backend and facade (no UI yet).
- F-ORG2-23: Fixed — cancel/kick audit entries carry the reason; reject accepts an optional reason that is stored on the booking.
