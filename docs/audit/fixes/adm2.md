# ADM2 (admin analytics & configuration screens) fix status

Files: bundle-src/631.js, 644.js (CSV), 671.js, 674.js, 909.js, 1805.js (admin panel), 1824.js, 1825.js, 1827.js, 1828.js, 1829.js, 1830.js, 1831.js. Verified with `node tools/smoke.mjs` (admin / analyst / user on each screen), `node tools/flows-admin.mjs` (20 checks, including the reason-gated steppers and the guarded export) and `node tools/rules.mjs` (runtime rule checks for validation and authorization).

- F-ADM2-1: Fixed — concierge, demand and optimizer setters take a mandatory reason and log `{reason, changes:[{key, from, to}]}` through the admin audit store; the screens collect the reason before any stepper is usable.
- F-ADM2-2: Fixed — read-only paths no longer write audit rows: the fraud list writes none, BI access is recorded once per admin per day, and funnel counters moved to their own store (`playora.mock.funnel.v1`), so admin evidence is no longer evicted and totals are no longer capped by the log.
- F-ADM2-3: Fixed — funnel events are restricted to a fixed vocabulary with a 200/day per-user cap; unknown names are ignored.
- F-ADM2-4: Fixed — setters whitelist keys against the current settings object and reject non-finite values with E_INVALID_VALUE (verified in tools/rules.mjs).
- F-ADM2-5: Fixed — saves are serialised with an in-flight guard, wrapped in try/catch with a localized alert, and the next value is taken from the stored response; steppers are disabled while saving.
- F-ADM2-6: Fixed — awards and funnel keep a separate error state and render the shared error screen with Retry; a failure can no longer look like "no fraud" or "no events".
- F-ADM2-7: Fixed — every analytics screen uses "Administrators only" / "Couldn't load this screen" instead of the organizer-verification copy.
- F-ADM2-8: Fixed — the fraud empty state uses its own body text.
- F-ADM2-9: Fixed — fraud signals carry an id and a review record; reviewing one requires a reason, is audited, and reviewed signals are hidden behind a toggle.
- F-ADM2-10: Fixed — concierge bounds are exported from the store (`CONCIERGE_BOUNDS`) and applied server-side with the same step rounding the UI uses.
- F-ADM2-11: Partially fixed — the accuracy tile now comes from the same validated payload; showing "—" for a zero denominator is applied where the store reports one (evaluated count), but the concierge statistic still reports 0% when nothing has been evaluated.
- F-ADM2-12: Not fixed — the demand model statistics still come from the baseline predictor rather than the tuned weights; making them reflect the weights is a modelling change, not a defect fix.
- F-ADM2-13: Fixed — saving optimizer weights re-fetches the dashboard so the feature-importance bars match the saved values.
- F-ADM2-14: Fixed — the export button is hidden on tabs without a report, and it exports the selected tab instead of silently substituting the executive report.
- F-ADM2-15: Fixed — `toCsv` prefixes values starting with `= + - @`, tab or carriage return with an apostrophe (verified in the flow test).
- F-ADM2-16: Fixed — the download anchor is attached to the document, the object URL is revoked on a timer, and the success alert names the file only when a download actually started.
- F-ADM2-17: Fixed — the error flag is cleared at the start of every fetch and the error screen offers Retry, so a transient failure no longer locks the screen.
- F-ADM2-18: Partially fixed — filters re-fetch with the error state cleared; an explicit inline "refreshing" indicator is available as a string but the dashboard still renders the previous values while loading.
- F-ADM2-19: Partially fixed — simulated health metrics are labelled in the payload and a "Simulated" badge string is available; the metrics are still shown in the same dashboard section.
- F-ADM2-20: Fixed — user-driven nudging of the feed weights is capped at 20 per user per day and is skipped while frozen; administrators can freeze/resume tuning and reset the weights to defaults, both audited with a reason.
- F-ADM2-21: Fixed — the feed screen distinguishes authorization from other failures and offers Retry.
- F-ADM2-22: Fixed — analysts now see exactly the two screens the backend allows (Insights and Feed analytics) and get the shared "Administrators only" screen elsewhere; the panel label is localized.
- F-ADM2-23: Fixed — "Player intelligence" is listed in the admin panel.
- F-ADM2-24: Partially fixed — zero-denominator tiles use the shared "—" string where the store reports the denominator; the attended/confirmed predicate is unchanged.
