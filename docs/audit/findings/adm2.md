# ADM2 — Admin analytics / configuration screens

Scope: admin/awards (1824), admin/concierge (1825), admin/demand (1827), admin/feed (1828), admin/funnel (1829),
admin/insights (1830), admin/optimizer (1831), and the admin-panel entry section of (tabs)/profile (1805).
Backend: 631.js mock store; audit logger 643.js; facade 671.js. All paths under scratchpad/pretty/.

Verified baseline (not findings): every backend function in scope performs a server-side role check —
`sn(e)` (631.js:4300, admin only) on awards/concierge/demand/funnel/optimizer, `Ms(e)` (631.js:10644,
admin-or-analyst) on feed analytics, BI dashboard and BI export. Facade entries (671.js:588-739) forward
arguments 1:1. Every panel link in 1805.js:759-816 resolves to a route in routes.txt.

### F-ADM2-1: Weight/rule changes are audited without reason, before/after values or a target
- Interface: admin/concierge, admin/demand, admin/optimizer
- Risk area: Audit trail
- Severity: High
- Evidence: 631.js:11709 — `await (0, w.logAdminAudit)("concierge.rules_changed", e, null, {})`; 631.js:12362 — `logAdminAudit("demand.weights_changed", e, null, {})`; 631.js:12562 — `logAdminAudit("optimizer.weights_changed", e, null, {})`; 643.js:9-14 — `logAdminAudit` only adds `applicant: s(n) ?? "unknown", device, ip` to `o ?? {}`.
- Identified gap: Platform-wide ranking/automation parameters are changed with an audit record that contains no reason, no changed key, no old/new value and `applicant: "unknown"`. Every stepper tap on the three screens produces an identical, uninformative entry.
- Potential impact: An investigator cannot reconstruct what an admin changed or why; a malicious or mistaken change to demand/optimizer/concierge behaviour is unrecoverable from the log.
- Recommended remediation: Have `mockSet*Weights`/`mockSetConciergeRules` compute a diff (`{key, from, to}`) and pass it in the meta; require a `reason` string from the screen (prompt once per session or on save) and reject empty reasons.

### F-ADM2-2: Read-only screens write to a 500-entry FIFO audit log, evicting admin evidence and truncating stats
- Interface: admin/awards, admin/insights, admin/funnel, admin/concierge
- Risk area: Audit trail
- Severity: High
- Evidence: 643.js:25 — `o = 500` … 643.js:43 `u.slice(0, o)`; 631.js:14938-14941 — `mockGetAwardFraudSignals` logs `award.fraud_flagged` for every flagged match on every visit; 631.js:10666-10669 and 10981 — `bi.accessed` logged on every dashboard fetch (each filter tap in 1830.js:107/123/127 triggers `ee`); 631.js:15169 — funnel totals are computed from `readAudit()`; 631.js:11716 — concierge `plansGenerated`/`autoInvites` also from `readAudit()`.
- Identified gap: The audit store keeps only the newest 500 records, and purely read-only admin views (fraud list, BI dashboard, every filter change) append records each time. Meanwhile funnel "Total" and concierge learning stats are derived from the same rolling window, so they silently stop being totals once the log wraps.
- Potential impact: A few dozen dashboard interactions push `concierge.rules_changed`, `award.revoked` etc. out of the log; funnel/concierge figures under-report without any indicator.
- Recommended remediation: Do not log read access into the same bounded store as privileged actions (or raise the cap and partition by type); dedupe `award.fraud_flagged` per match/day; derive funnel and concierge counters from a dedicated counter table rather than the audit log.

### F-ADM2-3: Any client can inject arbitrary funnel events and flood the audit log
- Interface: admin/funnel
- Risk area: Data integrity
- Severity: Medium
- Evidence: 631.js:15163-15166 — `mockLogFunnel = async (e, t) => { await ei(), await logAudit("funnel.event", actorRef(e), { e: sanitizeText(t, 60) }) }`; 631.js:15170-15176 — stats group by `e.meta?.e ?? "unknown"`.
- Identified gap: The event name is free text from the caller with no whitelist, no rate limit and no auth beyond a session id. Combined with F-ADM2-2 (500-entry cap), 500 calls evict every other audit record.
- Potential impact: The funnel screen can be polluted with fabricated event rows; the admin audit trail can be wiped by a single user.
- Recommended remediation: Validate `t` against a fixed enum of funnel step names; rate-limit per user; store funnel counters outside the audit log.

### F-ADM2-4: Backend weight setters accept NaN and arbitrary keys (mass assignment)
- Interface: admin/demand, admin/optimizer, admin/concierge
- Risk area: Validation
- Severity: Medium
- Evidence: 631.js:12352-12358 — `Object.assign({}, fd(), t, …)` then `for (const e of Object.keys(a)) … a[e] = Math.max(0, Math.min(1, Math.round(100 * a[e]) / 100))`; 631.js:12556-12558 same for optimizer; 631.js:11698-11706 — concierge clamps with `Math.max/min/round` only.
- Identified gap: `Math.max(0, Math.min(1, NaN))` is `NaN`, so a non-numeric or missing value is persisted as `NaN`. Unknown keys in `t` are merged and persisted as weights. There is no check that a key is a known weight, that a value is a finite number, or (optimizer) that the success weights are non-degenerate.
- Potential impact: A malformed payload (or a future screen bug) poisons `Qt.demandWeights`/`Qt.optimizerWeights`; downstream `normalizeImportance` renders `NaN%` and predictions become `NaN` (631.js:12268, 12399 consume these). The UI stepper then shows `NaN` with no way to recover except reseeding.
- Recommended remediation: Whitelist keys against `DEFAULT_*_WEIGHTS`, reject non-finite numbers with a store error, and ignore extra keys.

### F-ADM2-5: Stepper saves are unguarded — unhandled rejection, no feedback, lost updates on rapid taps
- Interface: admin/concierge, admin/demand, admin/optimizer
- Risk area: Bug/crash
- Severity: Medium
- Evidence: 1825.js:29-33 — `const L = async (l) => { if (!t) return; const n = await setConciergeRules(t.id, l); R(n); }`; 1827.js:29-31 — `t && I(await setDemandWeights(t.id, l))`; 1831.js:29-31 — `t && K(await setOptimizerWeights(t.id, l))`; onDec/onInc compute from the rendered value, e.g. 1827.js:129 `H({ [t.key]: Math.max(t.min, S[t.key] - t.step) })`.
- Identified gap: No try/catch, no in-flight flag, no toast. A failed save (e.g. `E_ADMINISTRATOR_AUTHORIZATION_REQUIRED` after a role change, or a persistence failure) surfaces only as an unhandled promise rejection. Two quick taps both send `S+step` from the same stale closure, so the second overwrites the first (net +1 step instead of +2), and out-of-order responses can leave the display at a value that is not what was persisted.
- Potential impact: Admin believes a weight changed when it did not, or sees a value different from the stored one.
- Recommended remediation: Wrap in try/catch with an error alert, disable the stepper while a save is pending (or serialise via a ref), and compute the next value from the latest server response.

### F-ADM2-6: Errors on awards/funnel are rendered as "all clear" empty states
- Interface: admin/awards, admin/funnel
- Risk area: Ambiguity
- Severity: Medium
- Evidence: 1824.js:15-16 — `catch { A([]); }` then 1824.js:59-63 renders `noFraud` ("No suspicious voting detected."); 1829.js:17 — `.catch(() => z([]))` then 1829.js:54-58 renders `funnelEmpty` ("No funnel events yet").
- Identified gap: Authorization failures, persistence read failures or any thrown error are indistinguishable from a genuinely clean result. For the fraud screen this is a false negative on a control report.
- Potential impact: An analyst (or an admin whose role was revoked mid-session) reads "No suspicious voting detected" and signs off; an outage reads as "no fraud".
- Recommended remediation: Keep a separate error state (as 1828 does) and render an error/retry component; never coerce a rejection into `[]`.

### F-ADM2-7: Error state on config screens shows the organizer-verification message
- Interface: admin/concierge, admin/demand, admin/optimizer, admin/insights
- Risk area: Ambiguity
- Severity: Low
- Evidence: 1825.js:45-51, 1827.js:45-49, 1831.js:45-49 — `EmptyState { title: h("organizerGateTitle"), body: h("adminPanel") }`; 909.js:1201 `organizerGateTitle: "Verification required"`, 909.js:1158 `adminPanel: "Admin"`; 1830.js:49-53 uses `organizerGateTitle` + `biTitle`.
- Identified gap: Any failure (network, persistence, role) shows the heading "Verification required" with body "Admin", a message written for unapproved organizers. It does not say what failed or offer retry.
- Potential impact: Admins misread a transient failure as a permissions problem; analysts navigating by URL get a message about "verification" instead of "admin only".
- Recommended remediation: Add dedicated `adminOnlyTitle`/`adminLoadFailed` strings, distinguish `E_ADMINISTRATOR_AUTHORIZATION_REQUIRED` from other errors via `storeErrorText`, and add a retry button.

### F-ADM2-8: Awards empty-state body uses the leaderboard subtitle
- Interface: admin/awards
- Risk area: Ambiguity
- Severity: Low
- Evidence: 1824.js:60-63 — `EmptyState { title: I("noFraud"), body: I("leaderboardSub") }`; 909.js:1374 `leaderboardSub: "Top award winners"`.
- Identified gap: The body text under "No suspicious voting detected." reads "Top award winners", which is copy for a different screen.
- Potential impact: Confusing copy on a control report.
- Recommended remediation: Use a dedicated key (e.g. `noFraudBody`) or omit the body.

### F-ADM2-9: Fraud signals have no review workflow (no dismiss/acknowledge/revoke from the list)
- Interface: admin/awards
- Risk area: UX dead end
- Severity: Low
- Evidence: 1824.js:98-109 — the only action per row is `B.push(`/awards/${t.match_id}`)`; 631.js:14927-14957 recomputes signals from `Qt.awardVotes` on every visit with no reviewed/dismissed state.
- Identified gap: Every flagged pair reappears on every visit forever; there is no way to mark a signal reviewed, and `mockRevokeAward` (631.js:14914) is not reachable from this screen. Whether `/awards/[gameId]` (route exists, routes.txt:22) exposes a revoke action for admins needs confirmation.
- Potential impact: The list grows monotonically and the admin cannot tell new signals from ones already investigated.
- Recommended remediation: Persist a per-(match,voter,nominee) review status with reason, filter reviewed rows by default, and expose revoke from the row.

### F-ADM2-10: Concierge rule bounds differ between UI and server
- Interface: admin/concierge
- Risk area: Validation
- Severity: Low
- Evidence: 1825.js:175 — `notifyLeadHours … max: 72`; 631.js:11703 — `Math.max(1, Math.min(168, Math.round(a.notifyLeadHours)))`; 631.js:11702 `skillTolerance` is clamped but not rounded to the 0.5 UI step.
- Identified gap: The server accepts values (up to 168 h) the UI cannot display or set back, and non-step values for `skillTolerance`; a value set by another path becomes unreachable from the stepper.
- Potential impact: Minor inconsistency; an out-of-range persisted value cannot be brought back within UI range in one tap.
- Recommended remediation: Share one bounds table between screen and store; round to step server-side.

### F-ADM2-11: Concierge stats show 0% accuracy when nothing has been evaluated
- Interface: admin/concierge
- Risk area: Ambiguity
- Severity: Low
- Evidence: 631.js:11736 — `accuracyPct: o ? Math.round(100 - i / o) : 0`; the screen (1825.js:83-99) shows `plansGenerated`, `autoInvites`, `accuracyPct`, `avgPredictedFill`, `avgActualFill` but never `predictions`/`evaluated`.
- Identified gap: With zero evaluated games the tile reads "0%" accuracy, indistinguishable from a model that is 0% accurate; the `evaluated` count that would disambiguate is returned but not rendered (admin/demand and admin/optimizer do render it).
- Potential impact: Misleading KPI.
- Recommended remediation: Render `evaluated` and show "—" when it is 0.

### F-ADM2-12: Demand "model performance" tiles do not reflect the weights being tuned
- Interface: admin/demand
- Risk area: Ambiguity
- Severity: Low
- Evidence: 631.js:12366-12384 — `mockGetDemandModelStats` computes `fillAccuracyPct` from `td(e)`; 631.js:11591-11605 — `td` uses `timeScore/dayScore/weatherFor/availability` and constants `demand: 0.6, venue: 0.7`, never `fd()`; the weights are consumed only at 631.js:12268 (`mockGetDemandPrediction`).
- Identified gap: The screen presents accuracy/avg-predicted tiles directly above the weight steppers, implying a feedback loop, but changing any weight cannot move those tiles.
- Potential impact: Admin tunes weights against a metric they do not influence.
- Recommended remediation: Either compute the accuracy from the weighted predictor or label the tiles as "baseline fill model".

### F-ADM2-13: Optimizer feature-importance card is stale after saving weights
- Interface: admin/optimizer
- Risk area: Data integrity
- Severity: Medium
- Evidence: 1831.js:29-31 — `L` only updates `F` (weights) via `K(...)`; 1831.js:113 renders `v.feature_importance` from the dashboard state `v`, which is refreshed only in `D` (1831.js:14-23) on focus; 631.js:12594-12598 derives `feature_importance` from `yd()`.
- Identified gap: After a stepper tap the weight row changes but the importance bars (derived server-side from the same weights) keep the previous values until the screen is re-focused.
- Potential impact: Admin sees contradictory numbers on one screen and may over-adjust.
- Recommended remediation: Re-fetch the dashboard after `setOptimizerWeights` resolves, or compute importance client-side from `F`.

### F-ADM2-14: Export silently falls back to the Executive report for the Sports and Health tabs
- Interface: admin/insights
- Risk area: Ambiguity
- Severity: Medium
- Evidence: 1830.js:68-78 — `["executive","financial","users","matches","venues","organizers","geographic"].includes(E) ? E : "executive"`; tabs list 1830.js:214-224 includes `sports` and `health`; 631.js:11000-11050 has no branch for those sections (the final `else` is geographic).
- Identified gap: With the Sports or Health tab selected, the download button produces `playora-executive-<date>.csv` and the success alert shows that filename; nothing tells the user the selected tab was not exported.
- Potential impact: Wrong report delivered without notice.
- Recommended remediation: Either add sports/health branches server-side or hide/disable the export button on those tabs with a hint.

### F-ADM2-15: CSV export has no formula-injection guard on user-supplied labels
- Interface: admin/insights
- Risk area: Data integrity
- Severity: Medium
- Evidence: index.html `toCsv=function(e,t){const n=e=>{const t=String(e);return/[",\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}…` (called at 631.js:11060); exported rows include organizer names `e.name` (631.js:11043), venue labels (631.js:11039), area names (631.js:11051) which originate from user/venue-editable fields.
- Identified gap: Values beginning with `=`, `+`, `-`, `@` are written verbatim. An organizer whose display name is `=HYPERLINK(...)` or `=cmd|...` lands in an admin's spreadsheet.
- Potential impact: Classic CSV injection against the admin who opens the export in Excel/Sheets.
- Recommended remediation: Prefix cells starting with `= + - @ \t \r` with a single quote (or a space) in `toCsv`.

### F-ADM2-16: Export delivery on web relies on blob URL revoked synchronously; no path on native
- Interface: admin/insights
- Risk area: UX dead end
- Severity: Low
- Evidence: 1830.js:81-87 — `if ("undefined" != typeof document) { const e = new Blob([o], {type:"text/csv"}), t = URL.createObjectURL(e), r = document.createElement("a"); r.href = t; r.download = l; r.click(); URL.revokeObjectURL(t); } r.default.alert(w("biExport"), `${l}`)`; index.html CSP: `default-src 'none' … connect-src 'none'`.
- Identified gap: The anchor is never attached to the DOM and the blob URL is revoked in the same tick as `click()`; Chrome tolerates this, Firefox/Safari can abort the download (needs confirmation in a real browser — CSP fetch directives do not govern `<a download>` navigations, so the CSP itself is not the blocker). On a non-web platform no file is produced at all, yet the "Export CSV / <filename>" success alert is still shown.
- Potential impact: Users may see a success alert without a file.
- Recommended remediation: Append the anchor, revoke via `setTimeout`, and gate the success alert on the download path actually running; on native use a share sheet.

### F-ADM2-17: A single failed dashboard fetch permanently locks the Insights screen
- Interface: admin/insights
- Risk area: Availability
- Severity: Medium
- Evidence: 1830.js:23-27 — `catch { X(!0) }` sets `Q`; 1830.js:41 — `if (Q || !V)` renders the lock screen; `Q` is never reset to `false` anywhere in the module, and the lock screen (1830.js:42-56) renders no filter chips or retry.
- Identified gap: Any transient error (e.g. a persistence read failure during `Gs`, which calls five loaders at 631.js:10663) flips the screen into the lock state until the component unmounts; re-focus re-runs `ee` but the successful result is hidden because `Q` stays true.
- Potential impact: Admin sees "Verification required" and has to navigate away and back.
- Recommended remediation: Reset `X(false)` at the start of `ee` and add a retry control.

### F-ADM2-18: No loading indicator while re-fetching with new filters; stale data shown
- Interface: admin/insights
- Risk area: Ambiguity
- Severity: Low
- Evidence: 1830.js:36 — `if (q && !V)` spinner only when no data yet; 1830.js:107/123 change `L`/`_` and trigger `ee` (deps 1830.js:30) but the previous `V` stays rendered; only 1830.js:172 `biGenerated` timestamp hints at freshness.
- Identified gap: After tapping "7 days" or a sport chip the old 90-day/any-sport numbers remain on screen until the promise resolves, with no spinner or dimming.
- Potential impact: Screenshots/decisions made on the wrong filter window.
- Recommended remediation: Show an inline `ActivityIndicator` or dim the content while `q` is true.

### F-ADM2-19: Health tab and CAC/time-to-fill tiles are simulated values presented alongside real KPIs
- Interface: admin/insights
- Risk area: Ambiguity
- Severity: Low
- Evidence: 631.js:10961-10964 — `errorRatePct: 0.4, uptimePct: 99.95, apiP95Ms: 180, simulated: !0`; 1830.js:694-711 shows them with a 9pt `biSimulated` sub-label; 1830.js:336/502 `biModeled`; 1830.js:456 renders `premiumSoon` ("Premium conversion (soon)") as a plain caption.
- Identified gap: Hard-coded constants and a "(soon)" placeholder live inside a screen labelled Business Intelligence; the only differentiator is a 9pt 70%-opacity caption, and the CSV export does not carry the flag.
- Potential impact: Simulated uptime/error-rate can be quoted as fact.
- Recommended remediation: Move simulated metrics behind a clearly labelled "Demo" section or hide when `simulated` is true; remove the "(soon)" caption.

### F-ADM2-20: Feed ranking weights self-modify from any user's clicks with no admin control or audit
- Interface: admin/feed
- Risk area: Data integrity
- Severity: Medium
- Evidence: 631.js:15181-15206 — `mockLogFeedSignal` (no role check) … 631.js:15203 `Qt.feedWeights = o` calls `nudgeWeights(Ml(), t, r)` and persists `Qt.feedWeights = o` on every join/click/cancel; 1828.js:100-141 renders `$.weights` read-only; no `setFeedWeights` exists in 671.js.
- Identified gap: The platform-wide feed weights shown on this screen are mutated by ordinary user interactions, never logged via `logAdminAudit`, and the admin screen offers no way to freeze, reset or override them.
- Potential impact: A user (or bot) clicking/cancelling repeatedly can steer global ranking; admin can only watch.
- Recommended remediation: Add a `mockSetFeedWeights`/reset action guarded by `sn` with audit, bound the nudge per user/day, and log weight drift.

### F-ADM2-21: Feed screen maps every error to "Access denied"
- Interface: admin/feed
- Risk area: Ambiguity
- Severity: Low
- Evidence: 1828.js:16-18 — `catch { S(!0) }`; 1828.js:48-53 — `EmptyState { title: M("accessDenied"), body: M("feedAnalyticsTitle") }`.
- Identified gap: A persistence failure or thrown bug is reported as an authorization problem; the body text is just the screen title.
- Potential impact: Misdirected troubleshooting.
- Recommended remediation: Inspect the error code (`storeErrorText`) and show a generic error with retry for non-auth failures.

### F-ADM2-22: Role gating is inconsistent between the panel, the screens and the backend
- Interface: (tabs)/profile admin panel, admin/feed, admin/funnel, admin/awards
- Risk area: Authorization
- Severity: Low
- Evidence: 1805.js:97 `Je = "admin" === M?.role`; 1805.js:752 `(Je || "analyst" === M?.role) &&` shows only Insights to analysts; 1805.js:762 nests all other links under `Je &&`; backend: feed uses `Ms` (631.js:15209, analyst allowed) while funnel/awards/concierge/demand/optimizer use `sn` (admin only). None of the seven screens checks `profile.role` client-side; 1830.js:57 only uses it for a "read-only" badge.
- Identified gap: An analyst who types `/admin/feed` gets a working screen with no link to it; typing `/admin/funnel` or `/admin/awards` yields the misleading "no data" states (F-ADM2-6); `/admin/concierge` etc. yields "Verification required". Backend authorization is correct, but the client presents three different outcomes for the same "not allowed" situation. Note: the panel section label is the hard-coded string "ADMIN" (1805.js:755), not i18n, so it stays English in Arabic.
- Potential impact: Confusion; support tickets; the analyst role's actual entitlements are undiscoverable.
- Recommended remediation: Decide per screen whether analyst is allowed, gate consistently on both ends, and render a single "admin only" state with the same copy; localise the section label.

### F-ADM2-23: admin/players is reachable only via an unlabelled icon in the Organizer approvals header
- Interface: (tabs)/profile admin panel, admin/organizers
- Risk area: UX dead end
- Severity: Low
- Evidence: 1805.js:756-818 — no `J.push("/admin/players")`; the only link is 1832.js:62 `onPlayers: () => D.push("/admin/players")` rendered as a `people-outline` icon button in the organizers header; route exists (routes.txt:20, registered 1809.js:136).
- Identified gap: "Player intelligence" (909.js:1294) is not listed in the ADMIN panel and is discoverable only by tapping an unlabeled icon on a different admin screen.
- Potential impact: Feature is effectively hidden.
- Recommended remediation: Add an `O` row for `adminPlayersTitle` → `/admin/players` under the `Je &&` block in 1805.js.

### F-ADM2-24: Accuracy/rate stats denominators mix statuses and can hide zero-data cases
- Interface: admin/demand, admin/optimizer
- Risk area: Ambiguity
- Severity: Low
- Evidence: 631.js:12376 and 12589 — actual fill counts bookings with `"confirmed" === status || "attended" === attendance`, so an attended-but-cancelled row is counted; `acceptRatePct: Qt.demandLog.length ? … : 0` and `accept_rate_pct: p ? … : 0` show 0% when there are no decisions; 1827.js:94-95 labels the prediction count with `perfPredictions` ("Decisions", 909.js:2259).
- Identified gap: Zero-data and zero-performance are indistinguishable in four tiles, and the demand screen's "Decisions" tile is actually the count of demand predictions logged.
- Potential impact: Misread KPIs.
- Recommended remediation: Show "—" for zero denominators; give the demand tile its own label; make the attended/confirmed predicate mutually exclusive.

## Interface summary
- admin/awards (1824): lists collusion signals from award votes, links to `/awards/[gameId]`. Works as a read-only list, but errors render as "no fraud", the body copy is wrong, there is no review/dismiss workflow, and each visit spams the 500-entry audit log. Partially works.
- admin/concierge (1825): toggle + 8 steppers for platform concierge rules, plus learning stats. Works; saves are unguarded (no error feedback, lost updates on rapid taps), audit entry carries no diff/reason, error state shows organizer copy. Partially works.
- admin/demand (1827): 8 steppers for demand weights plus model stats. Works; same unguarded-save and audit gaps; the stats do not depend on the weights being tuned; NaN/mass-assignment possible server-side. Partially works.
- admin/feed (1828): read-only feed analytics and current ranking weights. Works; weights drift from user clicks with no admin control; any error shows "Access denied". Works (read-only).
- admin/funnel (1829): funnel event counts (7d/total) from the audit log. Works, but totals are capped by the 500-entry log, event names are client-supplied free text, and errors show as "no events". Partially works.
- admin/insights (1830): 9-tab BI dashboard with range/sport filters and CSV export; analyst has read-only access. Works; one failed fetch locks the screen, export silently substitutes Executive for Sports/Health tabs, no CSV-injection guard, simulated health metrics. Partially works.
- admin/optimizer (1831): dashboard (accuracy, importance, 3 bar charts) + 10 weight steppers. Works; importance bars go stale after saving, same unguarded-save/audit/NaN gaps. Partially works.
- (tabs)/profile admin panel (1805.js:752-822): shows Insights to admin+analyst and 9 further links to admin only; all targets exist. `/admin/players` is not listed (only via organizers header icon); section label is hard-coded "ADMIN". Works.
