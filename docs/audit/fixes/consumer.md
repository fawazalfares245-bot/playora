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
