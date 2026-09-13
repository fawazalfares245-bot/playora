# ORG1 (organizer onboarding & match creation) fix status

Files: bundle-src/631.js (backend), 671.js, 674.js, 909.js, 18.js and 1809.js (routes), new/9002.js (redirect), 2459.js (apply), 2461.js (create), 2465.js (dashboard), 2470.js (quick), 2472.js (smart schedule). Verified with `node tools/smoke.mjs`, `node tools/flows-org1.mjs` (18 checks) and `node tools/rules.mjs`.

- F-ORG1-1: Fixed — `organizer/new` is retired; the route now redirects to `/organizer/create`, so old links are not a dead end and there is only one full creation flow.
- F-ORG1-2: Fixed — one shared validator (`validateMatchInput`) is used by match creation, quick creation and series creation, so price ceiling, capacity, enums and duration are identical everywhere.
- F-ORG1-3: Fixed — the wizard that hard-coded venue coordinates is gone with the route; the remaining flow uses the location picker.
- F-ORG1-4: Fixed — the discarded "who picks spots" control is gone with that wizard.
- F-ORG1-5: Fixed — court-booking prefill now applies the sport's format, capacity and waitlist defaults, so a padel booking no longer publishes as a 10-player football match.
- F-ORG1-6: Fixed — the optimizer re-runs (debounced) when venue, date, time, price, capacity, skill or waitlist change, so the quick lane publishes values derived from the slot actually chosen.
- F-ORG1-7: Fixed — when the optimizer has no recommendation the card states so and shows the exact values that will be published instead of spinning forever.
- F-ORG1-8: Fixed — quick create always shows price, squad, skill, waitlist, duration, visibility and approval, and the store returns those defaults (with `source: "default"`) when there is no history.
- F-ORG1-9: Fixed — the dashboard and apply screens catch loader failures, clear the loading flag and render an error screen with Retry.
- F-ORG1-10: Fixed — the dashboard match card no longer dereferences a missing venue.
- F-ORG1-11: Fixed — "Request info" now sets a distinct status; the applicant sees the reviewer's message, can reopen the prefilled form and resubmit, which the store accepts.
- F-ORG1-12: Fixed — suspended organizers see the stored reason and a "Contact support" button that opens the contact route.
- F-ORG1-13: Fixed — resubmission appends the previous application to a `history` array instead of overwriting it, and the velocity flag counts submissions across that history.
- F-ORG1-14: Fixed — the identity document is now captured as an image (file picker, 700 KB cap) and stored as a media reference; the store rejects an application without one.
- F-ORG1-15: Fixed — the applicant endpoint returns a slim DTO without risk flags, document/phone hashes or reviewer identity (verified in the flow test).
- F-ORG1-16: Partially fixed — `mockGetBooking` now checks the caller, and the applicant DTO is slim; the remaining organizer read endpoints still take only the organizer id, which is safe while the store is client-side but must gain caller checks with the server.
- F-ORG1-17: Fixed — series creation validates the same inputs as match creation plus start date, end date after start, and a per-organizer rate limit.
- F-ORG1-18: Fixed — invalid enums, non-integer capacity and out-of-range price are rejected with specific errors instead of being clamped (verified in tools/rules.mjs).
- F-ORG1-19: Partially fixed — organizer-created venues are tagged with `custom` and `created_by` and the creation is audited; making them private until reviewed still needs a venue moderation flow.
- F-ORG1-20: Fixed — venue, slot and booking loaders keep an error state with Retry rather than rendering "nothing here".
- F-ORG1-21: Fixed — the rejected state now shows its card with the reason, and the form opens through an explicit action rather than implicitly.
- F-ORG1-22: Partially fixed — demo seeding is behind the explicit demo flag (see F-XC-5), so a production build has no seeded fixtures; tagging individual seeded rows was not needed once the flag gates the seeding.
