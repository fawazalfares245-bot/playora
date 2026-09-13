### F-XC-1: The entire "backend" runs inside the browser; every admin and organizer control is client-side
- Interface: Platform (all interfaces)
- Risk area: Authorization
- Severity: Critical
- Evidence: 672.js:37-48 — `store = new Proxy(e, { get(...) { ... rpc(String(n), e, () => c(...e)) } })`; 673.js:71-88 — `if (await k(), "remote" !== o) return l();` ... `catch { return ((o = "mock"), l()); }`; 631.js:467-538 — `q = "playora.mock.users.v1", Y = "playora.mock.profiles.v1", ...`; 618.js — storage is AsyncStorage (localStorage on web)
- Identified gap: Every `fetchX`/`mutateX` call resolves to an in-memory mock store persisted to `localStorage`. Role checks such as `sn(e)` (admin) and `on(e)` (approved organizer) run in the same browser tab as the user. A user can open DevTools, edit `playora.mock.profiles.v1` to set `role: "admin"`, and unlock every admin screen; they can equally edit games, payments, sanctions and the audit log.
- Potential impact: No control in the admin or organizer interfaces is enforceable. Approvals, sanctions, commissions, refunds and audit records can be forged by any visitor. Nothing is shared between devices, so an admin decision on one laptop is invisible on another.
- Recommended remediation: Treat the current build as a prototype. Stand up a real API (the `rpc` transport in 673.js already expects `POST /rpc {fn, args}` with a Bearer token) and move the mock store's rules server-side with database-backed persistence. Until then, label the deployment as a demo and do not onboard real organizers or admins.

### F-XC-2: Content-Security-Policy blocks all network calls, so the remote backend can never be used from the deployed page
- Interface: Platform (all interfaces)
- Risk area: Availability
- Severity: High
- Evidence: index.html:5 — `connect-src 'none'`; 673.js:23-33 — `fetch(\`${t}/health\`)` ... `catch { return !1; }`; 673.js:40-49 — falls back to `"mock"` when the health probe fails
- Identified gap: The page ships a CSP with `connect-src 'none'`. The backend health probe therefore always fails and the app silently locks itself into mock mode, even if a server were deployed at rush-x.xyz. The remote sign-in/OTP/reset paths in 913.js are unreachable dead code in this build.
- Potential impact: Deploying a backend will have no effect until the HTML is rebuilt; developers may believe the server is being used when it is not.
- Recommended remediation: When a backend exists, set `connect-src 'self' https://api.rush-x.xyz` (and remove the localhost default in 673.js:16). Add a visible "backend: mock/remote" indicator in admin screens so the mode is never ambiguous.

### F-XC-3: Backend endpoint is selectable from localStorage and defaults to localhost
- Interface: Platform (all interfaces)
- Risk area: Authorization
- Severity: Medium
- Evidence: 673.js:16 — `const n = "http://localhost:8090"`; 673.js:41-42 — `c = s("playora.backend.url") ?? n; const t = s("playora.backend");`
- Identified gap: The RPC base URL and mode are read from user-writable `localStorage` keys. Anyone (including a malicious browser extension or a stored-XSS payload) can redirect every RPC call, including the Bearer session token, to an arbitrary host.
- Potential impact: Session token exfiltration and data tampering once a real backend exists.
- Recommended remediation: Bake the API origin into the build (`EXPO_PUBLIC_API_URL`, which rpc.ts already documents) and remove the runtime override, or restrict it to `__DEV__` builds.

### F-XC-4: Third-party authentication endpoint hard-coded in the client
- Interface: Sign-in (affects admin/organizer login)
- Risk area: Privacy
- Severity: High
- Evidence: 913.js:68-77 — `fetch("https://ep-fancy-pond-zagvofc3.neonauth.c-2.eu-west-2.aws.neon.tech/neondb/auth/sign-in/email", { body: JSON.stringify({ email: e, password: t }) })` ... `catch {}` then `h("/auth/signin", ...)`
- Identified gap: A Neon Auth project URL is embedded in the bundle. Credentials are posted to it first, any failure is swallowed, and the code then retries against the configured backend. The response's `user.id` is accepted without checking it against the profile store, and no role is verified.
- Potential impact: Discloses infrastructure identifiers; creates two competing identity providers with different user ids; silent failures make login errors undiagnosable.
- Recommended remediation: Remove the hard-coded URL; route all auth through the single configured API origin; surface the real error instead of `catch {}`.

### F-XC-5: Demo mode is permanently on in this build (static OTP, seeded admins, auto-approved organizer)
- Interface: Sign-in, organizer/apply, admin/organizers
- Risk area: Authorization
- Severity: Critical
- Evidence: 632.js:83 — `serverGradeHashing = !!o` where `o = t.scryptHex` (undefined in the browser); 631.js:1682 — `Fa = () => !c.serverGradeHashing || ...`; 631.js:753-758 — `sa = "123456"` ... `return !c.serverGradeHashing || e ? sa : randomSixDigit()`; 631.js:800 — `return { sent: !0, demo_code: a }`; 613.js:137-141 — renders `E("otpDemoHint", { code: U })`; 631.js:4655-4686 — `fn` inserts an application with `status: "approved", reviewed_by: oe` and calls `mn(e, "organizer")`; 631.js:4103-4110 — `an()` calls `fn(t)` for the signed-in user
- Identified gap: Because scrypt is unavailable in the browser, `demoWorldEnabled()` is always true. Phone sign-in accepts the fixed code 123456 and even prints it on screen. The first user to sign in is silently given an approved organizer application, attributed to "Platform Admin" as reviewer, and promoted to `role: "organizer"`. Seed profiles "Platform Admin", "Platform Admin (سيدات)" and "Platform Analyst" are inserted into the profile table.
- Potential impact: The organizer vetting control (ID document, phone hash, admin review) is bypassed for the very user most likely to test it; a fabricated approval record with a fake reviewer pollutes the audit trail; OTP login provides no authentication.
- Recommended remediation: Gate demo behaviour on an explicit build flag (`EXPO_PUBLIC_DEMO=1`) rather than on crypto capability, default it to off, and never ship seeded privileged profiles or static OTP codes in a public build.

### F-XC-6: No legitimate path to an admin account in the deployed build (admin interface is a dead end)
- Interface: admin/* (all admin screens)
- Risk area: UX dead end
- Severity: High
- Evidence: bundle — `process.env.PLAYORA_ADMIN_EMAILS??''` (inlined empty at build time); 631.js:487-491 — `le = new Set((process.env.PLAYORA_ADMIN_EMAILS ?? "").split(","))`; 631.js:2062-2075 — promotion to admin only for emails in `le`; 631.js:4700-4746 — seeded admin profiles have no matching entry in `Qt.users` (the only `Qt.users.push` is sign-up at 631.js:2240); 1805.js:752 — admin section rendered only when `"admin" === M?.role || "analyst" === M?.role`
- Identified gap: Admin role is granted only to emails listed in a build-time environment variable, which is empty in this bundle. The seeded "Platform Admin" profiles have no credentials, so nobody can sign in as them. The ADMIN section of the profile tab, and all eleven admin screens behind it, are therefore unreachable through the UI.
- Potential impact: The entire admin interface cannot be exercised or QA-tested from the deployed site; the only way in is editing localStorage, which is also the attack path in F-XC-1.
- Recommended remediation: Provision admin accounts server-side with a role table and an audited "grant role" action; remove build-time email lists.

### F-XC-7: Audit trail is stored in the user's browser, capped at 500 rows, and contains placeholder values
- Interface: Platform (admin actions, sanctions, approvals)
- Risk area: Audit trail
- Severity: Critical
- Evidence: 643.js:9-15 — `logAdminAudit` writes `{ applicant, device: c(), ip: "server-captured" }` where `c()` returns `"web"`; 643.js:25-26 — `n = "playora.audit.v1", o = 500`; 643.js:33-44 — `u.unshift(...); setItem(n, JSON.stringify(u.slice(0, o)))`; 643.js:47-48 — `appendAudit` hook is optional and absent on web
- Identified gap: Every privileged action is "audited" into localStorage of the actor's own browser, truncated to the 500 most recent rows, with a literal string "server-captured" instead of an IP address. The actor can edit or delete the log. No screen reads it for compliance purposes (`readAudit` is used only to compute funnel/concierge stats at 631.js:10944, 11715, 15169).
- Potential impact: No non-repudiation for approvals, sanctions, refunds, commission changes or role changes. Fails basic internal-control expectations for an admin console.
- Recommended remediation: Emit audit events server-side (append-only table with actor, target, before/after, IP, user agent, timestamp) and add an admin "Audit log" screen with filtering and export.

### F-XC-8: Persistence failures are swallowed; the UI reports success even when nothing was saved
- Interface: Platform (every mutation)
- Risk area: Data integrity
- Severity: High
- Evidence: 631.js:1727-1740 — `Za = async (e, t) => { ... try { await l.default.setItem(e, JSON.stringify(t)); } catch (t) { noteWriteFailure(e, t); } ... }`; 643.js:53-58 — `noteWriteFailure` only increments a counter and `console.error`s; `persistenceHealth` (643.js:69-74) is not referenced by any screen
- Identified gap: Every write serialises the entire collection (all games, all payments, all notifications) to a single localStorage key. When the ~5 MB quota is exceeded, or storage is blocked (private mode, Safari ITP), the write fails, the error is logged to the console only, and the calling screen proceeds as if the mutation succeeded. On the next reload the change is gone.
- Potential impact: Silent data loss of approvals, scores, sanctions and payments; admins and organizers cannot tell that their action did not persist.
- Recommended remediation: Make `Za` rethrow (or return a failure the caller must handle) and show a blocking error toast; surface `persistenceHealth()` in the admin insights screen; move to server-side storage.

### F-XC-9: Password hashes, sessions and lockout counters live in localStorage
- Interface: Sign-in / sign-up (all roles)
- Risk area: Privacy
- Severity: High
- Evidence: 631.js:2240 — `Qt.users.push({ id, email, salt, passwordHash, failedAttempts, lockedUntil })` persisted under `playora.mock.users.v1`; 632.js:66-70 — fallback hash is 12,000 iterations of SHA-256 (scrypt unavailable in browser); 637.js:6-13 — `secureSet` is a plain `setItem("secure." + key)`; 913.js:59-63 — session written to `localStorage["secure.playora_session"]`; 631.js:2270-2280 — lockout after 5 failures stored in the same editable record
- Identified gap: Credentials are stored in the browser with a fast, non-memory-hard hash. The "secure" store is a naming prefix only. Session tokens never expire and are not validated by any server. Brute-force lockout is stored client-side and can be reset by the attacker.
- Potential impact: Any XSS, malicious extension, or shared computer exposes every registered user's email and hash; sessions cannot be revoked.
- Recommended remediation: Authenticate server-side (argon2id/bcrypt), issue short-lived JWTs with refresh and revocation (the repo's auth/jwt.ts is a starting point but is unused), and store tokens in HttpOnly cookies or at least memory + secure storage on native.

### F-XC-10: Deployment configuration references files that do not exist
- Interface: Platform (deployment)
- Risk area: Availability
- Severity: High
- Evidence: railway.json:5-9 — `"buildCommand": "npm install && node build.mjs"`, `"startCommand": "node dist/host.mjs"`; nixpacks.toml:1-10 — same; repository root contains no package.json, build.mjs, or dist/
- Identified gap: Railway will fail at `npm install` (no package.json) and at `node build.mjs`. The TypeScript helpers rpc.ts and auth/jwt.ts are not imported by anything and depend on `jsonwebtoken`, which is not declared anywhere. `JWT_SECRET` is documented in .env.example but no code reads it in the shipped bundle.
- Potential impact: The site cannot be deployed from this repository as-is; the JWT configuration gives a false sense that server-side auth exists.
- Recommended remediation: Either commit the Expo source project (with package.json, app.json, `app/` routes) and a real `build.mjs`/`host.mjs`, or switch Railway to a static-site service that serves index.html. Delete or wire up rpc.ts and auth/jwt.ts.

### F-XC-11: Source code is not in the repository; only the compiled bundle is
- Interface: Platform (maintainability)
- Risk area: Availability
- Severity: High
- Evidence: git history — commits "Add files via upload" for index.html and playora-standalone.html; no `app/`, `src/`, package.json, tsconfig or tests; 631.js is a 16.5k-line minified module
- Identified gap: The repository holds two identical 11.6 MB compiled HTML files and no source. None of the findings in this report can be fixed in this repo; they must be fixed in the original Expo project and re-exported.
- Potential impact: No code review, no diffs, no CI, no tests, no way to hot-fix. Every change is a full re-upload.
- Recommended remediation: Commit the Expo project source, add a CI pipeline (typecheck, lint, jest, Playwright smoke test of admin/organizer flows), and generate the single-file bundle as a build artifact rather than a committed file. Remove the duplicate playora-standalone.html.

### F-XC-12: Single 11.6 MB HTML file with 5.8 MB of base64 fonts and a 5.6 MB JS bundle
- Interface: Platform (performance)
- Risk area: Availability
- Severity: Medium
- Evidence: index.html:30 — `window.__PLAYORA_ASSETS__` with 42 inlined assets (24 TTF icon fonts totalling 5.8 MB); index.html:130-2773 — one 5.6 MB script; 631.js:1745-1800 — `ti()` hydrates ~60 collections from storage before the first screen renders
- Identified gap: Everything is downloaded, parsed and hydrated before any interface appears, including all icon font families and every admin screen for non-admin users. No caching headers, code splitting or lazy routes are possible in a data: URI bundle.
- Potential impact: Multi-second first load on mobile networks; memory pressure on low-end devices; poor SEO/Lighthouse; large localStorage hydration on each launch.
- Recommended remediation: Ship a normal Expo web export (hashed static assets, HTTP caching, only the icon sets actually used), lazy-load the admin route group, and paginate collections instead of hydrating everything.

### F-XC-13: In-memory OTP rate limiter and console logging of codes
- Interface: Sign-in (phone)
- Risk area: Authorization
- Severity: Medium
- Evidence: 631.js:761-775 — `_a = new Map(), ua = new Map()` rate-limit state; 642.js:6-10 — log provider prints `[sms:log] to …${o.slice(-4)}: ${t}` to the console
- Identified gap: OTP throttling (3 per 15 min, 10 per day) is held in a JavaScript `Map` that resets on page reload, so it provides no protection. When SMS is not configured the code is written to the browser console.
- Potential impact: OTP brute force and code disclosure (moot while the static code 123456 is active, but it will matter once demo mode is disabled).
- Recommended remediation: Enforce OTP issuance and verification server-side with persistent counters; never log codes.

### F-XC-14: No client-side role guard on admin routes; non-admins see misleading empty states instead of "access denied"
- Interface: admin/* (deep links)
- Risk area: Ambiguity
- Severity: Medium
- Evidence: 1809.js:60-66 — root guard only redirects unauthenticated users to sign-in; 1824.js:11-18 — `try { A(await fetchAwardFraudSignals(t.id)) } catch { A([]) }` then renders `EmptyState({ title: I("noFraud") })` on any error including `E_ADMINISTRATOR_AUTHORIZATION_REQUIRED`
- Identified gap: Any signed-in user (including guests with ids `guest:*`) can open `/admin/awards`, `/admin/feed`, etc. by URL. The backend rejects the call, the screen swallows the error and shows "No fraud signals" (or a blank dashboard) as if the check had run.
- Potential impact: Misleading state for testers and support staff; hides real failures from admins because access errors and empty results render identically.
- Recommended remediation: Add an `AdminGate` wrapper in the admin layout that checks `profile.role` and renders an explicit "Administrator access required" screen; never map a thrown error to an empty list.
