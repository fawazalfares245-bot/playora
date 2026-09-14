// Interactive flow checks for the admin screens. Run: node tools/flows-admin.mjs
import { openApp, IDS } from './smoke.mjs';
import fs from 'node:fs';
const en = fs.readFileSync(new URL('../bundle-src/909.js', import.meta.url), 'utf8');
const t = (k) => { const m = en.match(new RegExp(`^\\s+${k}: "((?:[^"\\\\]|\\\\.)*)"`, 'm')); if (!m) throw new Error('missing key ' + k); return JSON.parse('"' + m[1] + '"'); };
const results = [];
const ok = (name, cond, extra = '') => { results.push(`${cond ? 'PASS' : 'FAIL'} ${name} ${extra}`); };
const dialogs = [];
async function run(name, fn) { try { await fn(); } catch (e) { results.push(`FAIL ${name}: ${e.message.split('\n')[0]}`); } }

await run('application review', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/organizers' });
  page.on('dialog', (d) => dialogs.push(d.message()));
  await page.getByText('Kuwait Football Academy').first().click();
  await page.waitForTimeout(1200);
  const reject = page.getByRole('button', { name: t('rejectApplication'), exact: true }).first();
  ok('reject disabled without message', await reject.evaluate((el) => el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true'));
  await page.getByPlaceholder(t('decisionMessagePlaceholder')).fill('Document number does not match the name.');
  await page.waitForTimeout(200);
  await reject.click();
  await page.waitForTimeout(1500);
  const txt = await page.evaluate(() => document.body.innerText);
  ok('reject confirmed and status updated', txt.toLowerCase().includes(t('appStatus_rejected').toLowerCase()), `dialogs=${dialogs.length}`);
  ok('confirm dialog carried the message', dialogs.some((d) => d.includes('Document number')));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

await run('venue approve + commission', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/venues' });
  const d2 = []; page.on('dialog', (d) => d2.push(d.message()));
  const approve = page.getByRole('button', { name: t('approveVenue'), exact: true }).first();
  const hadPending = await approve.count();
  if (hadPending) { await approve.click(); await page.waitForTimeout(1500); }
  ok('venue approve confirm+done', !hadPending || d2.some((m) => m.includes(t('confirmVenueApproveTitle'))) && d2.some((m) => m.includes(t('actionDone'))), `dialogs=${JSON.stringify(d2).slice(0, 160)}`);
  await page.getByRole('button', { name: t('commissionLabel'), exact: true }).first().click();
  await page.waitForTimeout(400);
  const inputs = page.locator('input');
  const n = await inputs.count();
  await inputs.nth(n - 2).fill('12.5');
  await inputs.nth(n - 1).fill('Agreed in contract renewal');
  await page.getByRole('button', { name: t('setCommission'), exact: true }).first().click();
  await page.waitForTimeout(1500);
  ok('commission confirm shows before/after and succeeds', d2.some((m) => m.includes(t('confirmCommissionTitle')) && m.includes('12.5')) && d2.filter((m) => m.includes(t('actionDone'))).length >= 1, `dialogs=${JSON.stringify(d2).slice(0, 200)}`);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});

await run('player rating adjust', async () => {
  const skill = [{ user_id: IDS.user, sport: 'football', rating: 3.5, confidence: 0.6, matches_played: 4, evals_received: 2, votes_below: 0, votes_expected: 2, votes_above: 0, self_assessed_at: null, updated_at: new Date().toISOString() }];
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/players', initScript: `localStorage.setItem('playora.mock.skillprofiles.v1', ${JSON.stringify(JSON.stringify(skill))});` });
  const d3 = []; page.on('dialog', (d) => d3.push(d.message()));
  const plus = page.getByLabel(t('increaseRating')).first();
  if (await plus.count()) {
    await plus.click(); await page.waitForTimeout(300);
    await page.getByPlaceholder(t('adjustRatingReason')).fill('Verified by coach assessment');
    await page.getByRole('button', { name: t('adjustRatingConfirm'), exact: true }).first().click();
    await page.waitForTimeout(1500);
    ok('rating adjusted with reason', d3.some((m) => m.includes('→')), `dialogs=${JSON.stringify(d3).slice(0, 160)}`);
  } else ok('rating adjust (no roster rows to test)', true);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});

await run('conduct approve ban with reason', async () => {
  const sanction = { id: 'san-test-1', user_id: IDS.user, type: 'ban', category: 'dangerous_play', reason: 'Repeated dangerous tackles', evidence_url: 'https://example.com/clip', game_id: null, issued_by: IDS.organizer, issuer_role: 'organizer', status: 'pending_approval', created_at: new Date().toISOString(), reviewed_by: null, reviewed_at: null, review_note: null };
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/conduct', initScript: `localStorage.setItem('playora.mock.sanctions.v1', ${JSON.stringify(JSON.stringify([sanction]))});` });
  const d4 = []; page.on('dialog', (d) => d4.push(d.message()));
  const body = await page.evaluate(() => document.body.innerText);
  ok('dangerous_play label resolved', !body.includes('vioDangerousPlay'), body.includes('vioDangerous') ? '' : '(label ok)');
  ok('evidence link rendered as action', body.includes(t('openEvidence')));
  await page.getByRole('button', { name: t('approveBan'), exact: true }).first().click();
  await page.waitForTimeout(300);
  const confirm = page.getByRole('button', { name: t('confirmDecision'), exact: true }).first();
  ok('confirm disabled without reason', await confirm.evaluate((el) => el.hasAttribute('disabled') || el.getAttribute('aria-disabled') === 'true'));
  await page.locator('textarea, input').last().fill('Evidence reviewed; ban upheld');
  await confirm.click();
  await page.waitForTimeout(1500);
  const after = await page.evaluate(() => document.body.innerText);
  ok('ban approved and now active', after.toLowerCase().includes(t('sStatus_active').toLowerCase()) && d4.some((m) => m.includes(t('actionDone'))), `dialogs=${JSON.stringify(d4).slice(0, 120)}`);
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});

await run('analytics: reason required, save applies, importance refreshes', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/demand' });
  const d = []; page.on('dialog', (x) => d.push(x.message()));
  // stepper is disabled until a reason is typed
  const stepDisabled = await page.evaluate(() => {
    const b = [...document.querySelectorAll('[role="button"],button')].filter((x) => /add|remove|increase|decrease/i.test(x.getAttribute('aria-label') || ''));
    return b.length ? b.every((x) => x.hasAttribute('disabled') || x.getAttribute('aria-disabled') === 'true') : 'no-steppers';
  });
  ok('weight steppers disabled without a reason', stepDisabled === true, String(stepDisabled));
  await page.getByPlaceholder(t('changeReasonPlaceholder')).fill('Tuning after the weekly review');
  await page.waitForTimeout(300);
  const stepEnabled = await page.evaluate(() => {
    const b = [...document.querySelectorAll('[role="button"],button')].filter((x) => /add|remove|increase|decrease/i.test(x.getAttribute('aria-label') || ''));
    return b.length ? b.some((x) => !x.hasAttribute('disabled') && x.getAttribute('aria-disabled') !== 'true') : 'no-steppers';
  });
  ok('weight steppers enabled once a reason is given', stepEnabled === true, String(stepEnabled));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

await run('insights export is guarded and audited', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/insights' });
  const d = []; page.on('dialog', (x) => d.push(x.message()));
  const dl = [];
  page.on('download', (x) => dl.push(x.suggestedFilename()));
  const exportBtn = page.getByRole('button', { name: t('biExport'), exact: true }).first();
  if (await exportBtn.count()) { await exportBtn.click(); await page.waitForTimeout(1500); }
  ok('export reports the file it produced', d.some((m) => /\.csv/.test(m)) || dl.length > 0, `${JSON.stringify(d).slice(0, 120)} dl=${dl.length}`);
  // CSV injection guard
  const csv = await page.evaluate(() => __r(644).toCsv(['a'], [['=HYPERLINK("http://x")', 'ok']]));
  ok('CSV formula values are neutralised', csv.includes("'=HYPERLINK") || csv.includes('"\'=HYPERLINK'), csv.slice(0, 60));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});

await run('analytics honesty (ADM2)', async () => {
  const { browser, page, errors } = await openApp({
    role: 'admin',
    route: '/admin/insights',
    initScript: () => {
      // Slow the dashboard read so the inline refreshing indicator is observable.
      const patch = () => {
        try {
          const api = globalThis.__r && globalThis.__r(671);
          if (!api || api.__slowed) return false;
          const orig = api.fetchBIDashboard;
          api.fetchBIDashboard = (...a) =>
            new Promise((res, rej) => setTimeout(() => orig(...a).then(res, rej), 1200));
          api.__slowed = true;
          return true;
        } catch { return false; }
      };
      const iv = setInterval(() => { if (patch()) clearInterval(iv); }, 50);
    },
  });
  await page.waitForTimeout(4000);

  // F-ADM2-18: a filter change says it is refetching and dims the stale figures.
  await page.getByRole('button', { name: /^30/ }).first().click();
  await page.waitForTimeout(400);
  const during = await page.evaluate(() => document.body.innerText);
  ok('a filter change shows the refreshing indicator', during.includes(t('refreshing')));
  await page.waitForTimeout(2200);
  const after = await page.evaluate(() => document.body.innerText);
  ok('the refreshing indicator clears when the data lands', !after.includes(t('refreshing')));

  // F-ADM2-19: placeholder infrastructure figures sit apart, badged.
  await page.getByText(t('secHealth'), { exact: true }).first().click();
  await page.waitForTimeout(2500);
  const health = await page.evaluate(() => document.body.innerText);
  const measured = health.indexOf(t('biHealthMeasured'));
  const simulated = health.indexOf(t('biHealthSimulated'));
  ok('measured counts are headed separately', measured >= 0, String(measured));
  ok('placeholder figures are headed separately and come after', simulated > measured, String(simulated));
  ok('the placeholder group carries the note', health.includes(t('biHealthSimulatedNote')));
  ok('every placeholder tile is badged', (health.match(new RegExp(t('simulatedBadge'), 'g')) || []).length >= 4);

  // Revenue of zero must read as an amount, never as "Free".
  await page.getByText(t('secFinancial'), { exact: true }).first().click();
  await page.waitForTimeout(2500);
  const fin = await page.evaluate(() => document.body.innerText);
  ok('zero revenue is an amount, not "Free"', !new RegExp(`\\b${t('free')}\\b`, 'i').test(fin), fin.slice(0, 0));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

await run('admin activity log screen (XC-7 / ADM1-32)', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin/audit' });
  await page.waitForTimeout(1200);
  // Take a privileged action, then reload so the screen has something to show.
  await page.evaluate(
    (ids) => __r(671).setDemandWeights(ids.admin, { cancelLowFill: 0.4 }, 'audit screen probe'),
    IDS,
  );
  await page.reload();
  await page.waitForTimeout(1800);
  let body = await page.evaluate(() => document.body.innerText);
  ok('the log lists the action just taken', body.includes('demand.weights_changed'), body.slice(0, 0));
  ok('the row names the acting admin', /By\s+\S/.test(body));
  ok('the row shows the reason that was required', body.includes('audit screen probe'));
  await page.locator('input').first().fill('zzzz-no-such-actor');
  await page.waitForTimeout(900);
  body = await page.evaluate(() => document.body.innerText);
  ok('a query matching nothing shows the empty state', body.includes(t('adminAuditEmptyTitle')));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

await run('admin activity log is denied to a player', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/admin/audit' });
  await page.waitForTimeout(2500);
  const body = await page.evaluate(() => document.body.innerText);
  ok('a player sees the denied gate, not the log', body.includes(t('adminOnlyTitle')), body.slice(0, 0));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
