// Interactive flow checks for the organizer onboarding / creation screens. Run: node tools/flows-org1.mjs
import { openApp, IDS } from './smoke.mjs';
import fs from 'node:fs';
const en = fs.readFileSync(new URL('../bundle-src/909.js', import.meta.url), 'utf8');
const t = (k) => { const m = en.match(new RegExp(`^\\s+${k}: "((?:[^"\\\\]|\\\\.)*)"`, 'm')); if (!m) throw new Error('missing key ' + k); return JSON.parse('"' + m[1] + '"'); };
const results = []; const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);
async function run(name, fn) { try { await fn(); } catch (e) { results.push(`FAIL ${name}: ${e.message.split('\n')[0]}`); } }
const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

await run('apply requires an identity document image', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/organizer/apply' });
  const d = []; page.on('dialog', (x) => d.push(x.message()));
  const body = await page.evaluate(() => document.body.innerText);
  ok('picker label shown', body.includes(t('idDocPickImage')), body.includes(t('idDocPickImage')) ? '' : body.slice(0, 120).replace(/\n/g, '|'));
  // submitting without a document image must be refused by the store
  const err = await page.evaluate(async (uid) => {
    try {
      await __r(671).submitOrganizerApplication(uid, { full_legal_name: 'Test Player', mobile: '+965 50000009', email: 'player@rush-x.test', display_name: 'Test Player', bio: '', sports: ['football'], expected_monthly_matches: 4, organizer_type: 'individual', id_doc_type: 'civil_id', id_doc_number: '292000000009', id_doc_uploaded: true });
      return 'accepted';
    } catch (e) { return e.code || e.message; }
  }, IDS.user);
  ok('document image required', err === 'E_UPLOAD_YOUR_IDENTITY_DOCUMENT', String(err));
  const okRes = await page.evaluate(async ([uid, png]) => {
    try {
      const a = await __r(671).submitOrganizerApplication(uid, { full_legal_name: 'Test Player', mobile: '+965 50000009', email: 'player@rush-x.test', display_name: 'Test Player', bio: '', sports: ['football'], expected_monthly_matches: 4, organizer_type: 'individual', id_doc_type: 'civil_id', id_doc_number: '292000000009', id_doc_image: png });
      return { status: a.status, hasHashes: 'phone_hash' in a || 'id_doc_ref' in a, uploaded: a.id_doc_uploaded };
    } catch (e) { return { err: e.code || e.message }; }
  }, [IDS.user, PNG]);
  ok('submission with a document is accepted and returns a slim DTO', okRes.status === 'under_review' && okRes.hasHashes === false && okRes.uploaded === true, JSON.stringify(okRes));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

await run('info_requested reopens the form and allows resubmission', async () => {
  const app = { id: 'app-info-1', user_id: IDS.user, status: 'info_requested', full_legal_name: 'Test Player', mobile: '+965 5000 0009', email: 'player@rush-x.test', display_name: 'Test Player', bio: 'Weekly football', sports: ['football'], expected_monthly_matches: 4, organizer_type: 'individual', id_doc_type: 'civil_id', id_doc_ref: 'ref', id_doc_last4: '0009', id_doc_uploaded: true, id_doc_media_ref: 'x', business: null, phone_hash: 'ph', risk_flags: [], reviewed_by: IDS.admin, rejection_reason: null, admin_notes: 'Please send a clearer photo of your civil ID.', reapply_after: null, info_requested_at: new Date().toISOString(), submitted_at: new Date(Date.now() - 864e5).toISOString(), reviewed_at: new Date().toISOString(), created_at: new Date(Date.now() - 864e5).toISOString(), history: [] };
  const { browser, page, errors } = await openApp({ role: 'user', route: '/organizer/apply', initScript: `localStorage.setItem('playora.mock.applications.v1', ${JSON.stringify(JSON.stringify([app]))});` });
  const body = await page.evaluate(() => document.body.innerText);
  ok('info_requested status card shown', body.includes(t('statusInfoRequestedTitle')), body.slice(0, 140).replace(/\n/g, '|'));
  ok('reviewer message shown', body.includes('clearer photo'));
  ok('internal fields not exposed', !body.includes('duplicate_phone') && !body.includes(IDS.admin));
  await page.getByRole('button', { name: t('updateApplication'), exact: true }).first().click();
  await page.waitForTimeout(600);
  const body2 = await page.evaluate(() => document.body.innerText);
  const vals = await page.evaluate(() => [...document.querySelectorAll('input')].map((i) => i.value).filter(Boolean));
  ok('form reopened prefilled', body2.includes(t('idDocPickImage')) && vals.some((v) => v.includes('Test Player')), JSON.stringify(vals).slice(0, 160));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});

await run('suspended shows reason and a support route', async () => {
  const app = { id: 'app-susp-1', user_id: IDS.user, status: 'suspended', full_legal_name: 'Test Player', mobile: '+965 5000 0009', email: 'player@rush-x.test', display_name: 'Test Player', bio: '', sports: ['football'], expected_monthly_matches: 4, organizer_type: 'individual', id_doc_type: 'civil_id', id_doc_ref: 'r', id_doc_last4: '0009', id_doc_uploaded: true, business: null, phone_hash: 'p', risk_flags: [], reviewed_by: IDS.admin, rejection_reason: 'Repeated no-show cancellations.', admin_notes: null, reapply_after: null, submitted_at: new Date().toISOString(), reviewed_at: new Date().toISOString(), created_at: new Date().toISOString(), history: [] };
  const { browser, page } = await openApp({ role: 'user', route: '/organizer/apply', initScript: `localStorage.setItem('playora.mock.applications.v1', ${JSON.stringify(JSON.stringify([app]))});` });
  const body = await page.evaluate(() => document.body.innerText);
  ok('suspension reason shown', body.includes('Repeated no-show'), body.slice(0, 140).replace(/\n/g, '|'));
  ok('contact support offered', body.includes(t('contactSupport')));
  await page.getByRole('button', { name: t('contactSupport'), exact: true }).first().click();
  await page.waitForTimeout(800);
  ok('contact route opened', page.url().includes('/contact'), page.url());
  await browser.close();
});

await run('quick create shows the values it will publish with', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer/quick' });
  await page.waitForTimeout(800);
  await page.getByText('Football', { exact: true }).first().click();
  await page.waitForTimeout(500);
  await page.getByText('Salmiya Sports Hub', { exact: true }).first().click();
  await page.waitForTimeout(600);
  // choose a kickoff: a day chip, then one 24-hour pill. The picker is Gregorian and 24-hour, so
  // there is no minute row and no AM/PM toggle to click any more.
  await page.getByRole('button', { name: /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/ }).nth(1).click();
  await page.waitForTimeout(300);
  await page.getByText(t('quickPickTimePlaceholder'), { exact: true }).first().click();
  await page.waitForTimeout(500);
  await page.getByText('20:00', { exact: true }).first().click();
  await page.waitForTimeout(1500);
  const body = await page.evaluate(() => document.body.innerText);
  const low = body.toLowerCase();
  ok('duration / visibility / approval shown', low.includes(t('smartDuration').toLowerCase()) && low.includes(t('smartVisibility').toLowerCase()) && low.includes(t('smartApproval').toLowerCase()), body.slice(-260).replace(/\n/g, '|'));
  ok('source of the values explained', low.includes(t('smartDefaultsFallback').slice(0, 20).toLowerCase()) || low.includes(t('smartBasedOn').split('%')[0].trim().toLowerCase()));
  // and the fallback contract itself, checked against the store in the real runtime
  const def = await page.evaluate(async (uid) => __r(671).fetchSmartDefaults(uid, 'tennis', 'no-such-venue').catch((e) => String(e.message)), IDS.organizer);
  ok('defaults exist even without history', def && def.source === 'default' && def.price_kwd > 0 && def.duration_minutes === 90, JSON.stringify(def).slice(0, 120));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

// The full-setup screen uses the shared TimePicker, not the quick screen's own control. That split
// is how a 12-hour AM/PM chip grid survived here long after /organizer/quick moved to a dropdown, so
// the component gets its own check: collapsed by default, whole hours, no AM/PM, no minute row.
await run('full setup start/end times are 24-hour dropdowns', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer/create' });
  await page.waitForTimeout(800);
  const closed = await page.evaluate(() => document.body.innerText);
  ok('no AM/PM toggle', !/\bAM\b|\bPM\b/.test(closed), closed.match(/.{0,20}\b[AP]M\b.{0,20}/)?.[0] ?? '');
  ok('no minute interval pills', !/:15|:30|:45/.test(closed));
  ok('the hour list is collapsed by default', !['00:00', '07:00', '23:00'].some((h) => closed.includes(h)));

  const field = page.getByRole('button', { name: new RegExp('^' + t('fieldStartTime') + '$', 'i') }).first();
  await field.click();
  await page.waitForTimeout(600);
  const opened = await page.evaluate(() => document.body.innerText);
  const hours = ['00:00', '07:00', '13:00', '22:00', '23:00'].filter((h) => opened.includes(h));
  ok('the open dropdown offers the full 24-hour range', hours.length === 5, hours.join(' '));
  ok('hours are zero-padded HH:00', /\b00:00\b/.test(opened) && !/\b0:00\b/.test(opened));

  await page.getByText('20:00', { exact: true }).first().click();
  await page.waitForTimeout(700);
  const picked = await page.evaluate(() => document.body.innerText);
  ok('choosing an hour closes the dropdown', !picked.includes('07:00'));
  ok('the field shows the chosen hour', picked.includes('20:00'));
  // the auto-filled end time has to land on an hour the dropdown can actually offer
  ok('end time auto-fills to a whole hour', picked.includes('22:00'), picked.slice(0, 200).replace(/\n/g, '|'));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
});

await run('retired organizer/new redirects to create', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer/new' });
  ok('redirected', page.url().endsWith('/organizer/create'), page.url());
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
});
console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
