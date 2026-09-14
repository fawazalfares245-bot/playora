# Fix batch brief (shared by all workers)

You are fixing findings from `docs/audit/findings/*.md` inside the compiled Playora bundle. There is no
TypeScript source; the app's Metro modules have been extracted and prettified into `bundle-src/<id>.js`
(route -> module id map: `docs/audit/findings/route-module-map.txt`). Everything you change must be made in
`bundle-src/` and then rebuilt into `index.html` with the tooling below.

## Workflow (must follow)
1. Edit `bundle-src/<id>.js`. If a module you need is not there yet: `python3 tools/bundle.py split <id>`.
2. Rebuild: `python3 tools/bundle.py build` (also runs `node --check` on every module).
3. Test: `node tools/smoke.mjs <route> --role admin|analyst|organizer|user|guest [--dump] [--screenshot x.png]`.
   It boots the app headless with a seeded session and prints visible text + console/page errors. For
   interactive flows write a small Playwright script that imports `openApp` from `tools/smoke.mjs`
   (`const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/venues' })`) and clicks
   through with `page.getByText(...)`. Web alerts/confirms are `window.alert`/`window.confirm` (auto-accepted by
   the harness and reported in `errors` as `dialog(...)` lines; use `page.on('dialog')` yourself to assert on them).
   Demo mode is ON in the test build, so seeded applicants, venues, games and sanctions exist.
4. Commit ONLY `bundle-src/**` and `docs/audit/fixes/<group>.md` to your branch (`git add bundle-src docs/audit/fixes && git commit`).
   NEVER commit `index.html` (it is rebuilt centrally after merge). Do not use `git add -A`.
5. Report the branch name and worktree path in your final message.

## Conventions
- Minified names are stable; keep the existing style `(0, X.jsx)(Comp, {...})`. Prettier formatting is fine.
- New backend error codes: throw `new Error("E_SOME_CODE")`, add `E_SOME_CODE: "seSomeCode"` to the map in
  `bundle-src/674.js`, and add `seSomeCode: "..."` to BOTH `en` and `ar` in `bundle-src/909.js`.
- New UI strings: add keys to BOTH locales in `bundle-src/909.js`, directly under YOUR group's anchor comment
  (`// --- ADM1 keys (fix batch) ---` etc., present in both `en:` and `ar:` blocks). Only touch your anchor
  region so branches merge cleanly. Write real Arabic (use \u escapes or literal Arabic).
  Already available (XC keys): `adminOnlyTitle`, `adminOnlyBody`, `analystOrAdminBody`, `loadFailedTitle`,
  `retry`, `goBack`, `seAReasonIsRequired` (E_A_REASON_IS_REQUIRED), `seYouCannotReviewYourOwn`
  (E_YOU_CANNOT_REVIEW_YOUR_OWN), `seInvalidTransition` (E_INVALID_TRANSITION), `seInvalidValue`
  (E_INVALID_VALUE), `seCouldNotSaveChanges`, `seStorageFull`.
- Shared helpers in module 9001 (`bundle-src/new/9001.js`). To use it in a screen, append `9001` to the
  module's dependency array (last line of the module) and add `var G9 = _r(d[<newIndex>])` (index = position
  in the array). Exports:
    `useRoleGate(["admin"])` -> `{ ready, allowed, role, isGuest }`
    `classifyError(err)` -> `{ code, message, isAuth }` (message is localized via storeErrorText)
    `GateScreen` component: `{ kind: "denied" | "error", title?, body?, onRetry?, onBack?, roles? }` renders a
    proper screen with back button, EmptyState and Retry/Go back buttons.
  Pattern for every admin screen: `const gate = useRoleGate(["admin"]); if (gate.ready && !gate.allowed) return GateScreen({kind:"denied"})`
  and for load errors keep `{ error }` state -> `GateScreen({ kind: "error", body: classifyError(err).message, onRetry })`.
  Never map a rejected fetch to an empty list.
- Backend (`bundle-src/631.js`): `sn(e)` = assert admin, `Ms(e)` = admin-or-analyst, `on(e)` = approved
  organizer, `zi(game, userId)` = organizer of game, `_n(e, world, scope)` = partition check, `cn(...)` =
  partition filter, `Za(key, arr)` = persist (now THROWS `E_COULD_NOT_SAVE_CHANGES` on failure), `Qt` = DB.
  `w.logAdminAudit(type, adminId, targetId, meta)` now writes to a separate admin store (5000 rows, full actor
  id). Put `reason`, `from`/`to` (before/after values) in `meta` for every privileged change. Do NOT call
  `logAdminAudit`/`logAudit` from read-only endpoints (dashboard fetches); remove such calls where found.
- Persistence writes that throw now propagate to screens; make sure your screens catch and show
  `classifyError(err).message` via `Alert.alert` (the modules import Alert as `r.default.alert(...)` or similar).
- Keep changes minimal and local. Don't refactor unrelated code. Don't change a shared function's
  signature without grepping `bundle-src/*.js` for all callers and updating them.
- Confirmation dialogs: use the existing `Alert.alert(title, body, [{text, style:"cancel"}, {text, onPress}])`
  pattern (web shim maps it to window.confirm).

## Definition of done for each finding
Fixed = code change + smoke/Playwright check that the screen still renders and the new behaviour works.
Partially fixed = the client-side part is done but the remediation needs a server (say so).
Not fixed = explain why (architectural, needs product decision, or out of reach in the bundle).

## Status file (required)
Write `docs/audit/fixes/<group>.md` with one line per finding ID in your scope:
`- F-XXX-n: Fixed | Partially fixed | Not fixed — <what changed, files touched, how verified>`
Also list any NEW issues you found while fixing (with evidence) so they can be added to the register.

## Interruption safety (added)
Commit to your branch after every 2-3 fixes (`git add bundle-src docs/audit/fixes && git commit -m "..."`) and
keep `docs/audit/fixes/<group>.md` updated as you go, so that work survives an interruption. If your worktree
already contains commits or edits from a previous attempt, read them first (`git log`, `git diff`) and continue
from there instead of starting over.
