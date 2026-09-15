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
// orgSelf read `if (t && t !== e && !ro(t)) throw; return !t || t === e`, so omitting the caller
// skipped the throw and returned true - owner access, invite codes included, to anyone who left the
// argument off. The facade takes the caller as a plain optional second parameter.
await run('an organizer read without a caller is refused', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org, stranger, admin]) => {
    const api = __r(671);
    const code = async (fn) => { try { const v = await fn(); return Array.isArray(v) ? `rows:${v.length}` : 'accepted'; } catch (e) { return e.code || e.message; } };
    return {
      matchesNoCaller: await code(() => api.fetchOrganizerMatches(org)),
      statsNoCaller: await code(() => api.fetchOrganizerStats(org)),
      ratingsNoCaller: await code(() => api.fetchOrganizerRatings(org)),
      seriesNoCaller: await code(() => api.fetchOrganizerSeries(org)),
      referralsNoCaller: await code(() => api.fetchOrganizerReferralStats(org)),
      matchesStranger: await code(() => api.fetchOrganizerMatches(org, stranger)),
      matchesSelf: await code(() => api.fetchOrganizerMatches(org, org)),
      matchesAdmin: await code(() => api.fetchOrganizerMatches(org, admin)),
    };
  }, [IDS.organizer, IDS.user, IDS.admin]);

  const denied = 'E_YOU_ARE_NOT_AUTHORIZED_TO_VIEW';
  for (const k of ['matchesNoCaller', 'statsNoCaller', 'ratingsNoCaller', 'seriesNoCaller', 'referralsNoCaller'])
    ok(`${k} is refused`, out[k] === denied, String(out[k]));
  ok('a stranger is still refused', out.matchesStranger === denied, String(out.matchesStranger));
  ok('the organizer still reads their own', /^rows:/.test(out.matchesSelf), String(out.matchesSelf));
  ok('an admin still reads them', /^rows:/.test(out.matchesAdmin), String(out.matchesAdmin));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockApplyVenue built its venue row with no listed and no review_status, and mockGetVenues filters
// on `!1 !== listed`, so an application went straight into the public directory - while
// /venue/portal promised an admin reviews every application before you go live.
await run('a venue application waits for review', async () => {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/' });
  const out = await page.evaluate(async ([applicant, admin]) => {
    const api = __r(671);
    const res = {};
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    res.venuesBefore = (await api.fetchVenues()).length;
    res.pendingBefore = (await api.fetchPendingVenues(admin)).length;
    const apply = (n) => api.applyVenue(applicant, {
      name: 'Backyard Pitch ' + n, area: 'Salmiya', sports: ['football'],
      lat: 29.3339, lng: 48.0754,
    });
    res.first = await code(() => apply('A'));
    res.venuesAfter = (await api.fetchVenues()).length;
    res.pendingAfter = (await api.fetchPendingVenues(admin)).length;
    res.second = await code(() => apply('B'));
    res.third = await code(() => apply('C'));
    // the applicant's own coordinates, not an area centroid plus jitter
    const mine = (await api.fetchMyVenues(applicant)).map((v) => v.venue || v).filter(Boolean);
    res.coords = mine.map((v) => [v.lat, v.lng]).slice(0, 1);
    return res;
  }, [IDS.user, IDS.admin]);

  ok('the application is accepted', out.first === 'accepted', String(out.first));
  ok('the public directory does not grow', out.venuesAfter === out.venuesBefore, `${out.venuesBefore} -> ${out.venuesAfter}`);
  ok('the admin queue grows by one', out.pendingAfter === out.pendingBefore + 1, `${out.pendingBefore} -> ${out.pendingAfter}`);
  ok('a second application is still allowed', out.second === 'accepted', String(out.second));
  ok('a third within the hour is refused', out.third === 'E_TOO_MANY_VENUE_APPLICATIONS', String(out.third));
  ok('the coordinates are the ones supplied', JSON.stringify(out.coords) === JSON.stringify([[29.3339, 48.0754]]), JSON.stringify(out.coords));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockCreateSeries built its own venue literal with no listed, no review_status, no created_by and no
// venueProfile, so a series venue went straight into the public directory with nothing in the admin
// queue - while the identical field in the match wizard produced a governed, pending one.
await run('a custom venue is governed whichever wizard made it', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org, admin]) => {
    const api = __r(671);
    const res = {};
    const name = (k) => 'Backyard Pitch ' + k;
    const cv = (k) => ({ name: name(k), address: 'Salmiya, Kuwait', lat: 29.3339, lng: 48.0754 });
    const now = new Date();
    res.seriesErr = null;
    try {
      await api.createSeries(org, {
        title: 'Governed venue series', sport: 'football', format: 'football_5v5', skill_level: 'all',
        custom_venue: cv('SERIES'), max_players: 10, waitlist_capacity: 2, price_kwd: 0,
        visibility: 'public', approval_mode: 'auto', skill_policy: 'open',
        start_date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2).toISOString(),
        start_minutes: 1080, end_minutes: 1170, frequency: 'weekly',
        weekdays: [(now.getDay() + 2) % 7], horizon_weeks: 2, auto_invite: false,
      });
    } catch (e) { res.seriesErr = e.code || e.message; }
    const listed = await api.fetchVenues();
    res.inDirectory = listed.some((v) => v.name === name('SERIES'));
    const pending = await api.fetchPendingVenues(admin);
    const row = pending.find((p) => p.venue && p.venue.name === name('SERIES'));
    res.inQueue = !!row;
    res.owner = row ? row.profile.owner_id : null;
    // a series venue with no coordinates used to store NaN; the shared helper refuses it
    try {
      await api.createSeries(org, {
        title: 'No location series', sport: 'football', format: 'football_5v5', skill_level: 'all',
        custom_venue: { name: name('NOLOC'), address: 'Somewhere' }, max_players: 10,
        waitlist_capacity: 2, price_kwd: 0, visibility: 'public', approval_mode: 'auto',
        skill_policy: 'open',
        start_date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3).toISOString(),
        start_minutes: 1080, end_minutes: 1170, frequency: 'weekly',
        weekdays: [(now.getDay() + 3) % 7], horizon_weeks: 2, auto_invite: false,
      });
      res.noLocation = 'accepted';
    } catch (e) { res.noLocation = e.code || e.message; }
    return res;
  }, [IDS.organizer, IDS.admin]);

  ok('the series was created', out.seriesErr === null, String(out.seriesErr));
  ok('its venue is not in the public directory', out.inDirectory === false, String(out.inDirectory));
  ok('its venue is in the admin queue', out.inQueue === true, String(out.inQueue));
  ok('the queue row names the organizer as owner', out.owner === IDS.organizer, String(out.owner));
  ok('a series venue with no coordinates is refused', out.noLocation === 'E_PICK_THE_VENUE_LOCATION_ON_THE', String(out.noLocation));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// mockCreatePaymentPlan wiped only pending rows and then re-billed every payer, so re-running a plan
// after anyone had paid issued them a second charge and a second payment_request for the same booking.
await run('re-issuing a payment plan does not re-bill a payer who has paid', async () => {
  const { browser, page } = await openApp({ role: 'organizer', route: '/organizer' });
  const seed = await page.evaluate(async ([org, p1, p2]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Split plan', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 23 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 23 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });
    await api.joinMatch(g.id, p1);
    await api.joinMatch(g.id, p2);
    // A confirmed court booking for that match. Reserving one needs an active court and a venue
    // decision; the plan only reads the row, so seed it and let the reload hydrate it.
    const courts = JSON.parse(localStorage.getItem('playora.mock.courtbookings.v1') || '[]');
    courts.push({
      id: 'cb-plan-test', court_id: null, venue_id: venues[0].id, organizer_id: org, game_id: g.id,
      starts_at: g.starts_at, ends_at: g.ends_at, status: 'confirmed', court_price_kwd: 12,
      split_mode: 'split_equal', commission_type: 'percentage', commission_value: 10,
      requires_venue_approval: false, reserved_until: null, cancellation_reason: null,
      qr_token: 'PLQR-PLANTEST00000000', created_at: new Date().toISOString(),
      confirmed_at: new Date().toISOString(), released_at: null,
    });
    localStorage.setItem('playora.mock.courtbookings.v1', JSON.stringify(courts));
    return { gameId: g.id, bookingId: 'cb-plan-test' };
  }, [IDS.organizer, IDS.user, IDS.analyst]);

  await page.goto('http://localhost/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([org, payer, seed]) => {
    const api = __r(671);
    const rowsFor = (who) => JSON.parse(localStorage.getItem('playora.mock.payments.v1') || '[]')
      .filter((p) => p.booking_id === seed.bookingId && p.payer_id === who);
    const notesFor = async (who) => (await api.fetchNotifications(who))
      .filter((n) => n.type === 'payment_request').length;

    await api.createPaymentPlan(org, seed.bookingId, 'split_equal');
    const mine = rowsFor(payer);
    const notesAfterFirst = await notesFor(payer);
    await api.payRequest(payer, mine[0].id, 'knet');
    const paidStatus = rowsFor(payer).map((p) => p.status);

    await api.createPaymentPlan(org, seed.bookingId, 'split_equal');
    const after = rowsFor(payer);
    return {
      firstCount: mine.length,
      paidStatus,
      afterStatuses: after.map((p) => p.status),
      notesAfterFirst,
      notesAfterSecond: await notesFor(payer),
      total: JSON.parse(localStorage.getItem('playora.mock.payments.v1') || '[]')
        .filter((p) => p.booking_id === seed.bookingId && p.status !== 'waived')
        .reduce((a, p) => a + Number(p.amount_kwd || 0), 0),
    };
  }, [IDS.organizer, IDS.user, seed]);

  ok('the plan billed the payer once', out.firstCount === 1, JSON.stringify(out));
  ok('their share was paid', out.paidStatus.includes('paid'), JSON.stringify(out.paidStatus));
  ok('re-issuing leaves them with one row', out.afterStatuses.length === 1 && out.afterStatuses[0] === 'paid', JSON.stringify(out.afterStatuses));
  ok('they get no second payment request', out.notesAfterSecond === out.notesAfterFirst, `${out.notesAfterFirst} -> ${out.notesAfterSecond}`);
  ok('the plan still collects the court price once', Math.abs(out.total - 12) < 5e-3, String(out.total));
  await browser.close();
});

// The one-off create limit counted every game the organizer owned, and series occurrences are pushed
// straight into Qt.games with a fresh created_at - so one daily series locked the main create flow.
await run('a series does not consume the one-off match limit', async () => {
  const { browser, page, errors } = await openApp({ role: 'organizer', route: '/organizer' });
  const out = await page.evaluate(async ([org]) => {
    const api = __r(671);
    const res = {};
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const now = new Date();
    const oneOff = (k) => api.createMatch(org, {
      title: 'Limit probe ' + k, sport: 'football', venue_id: venues[k % venues.length].id,
      starts_at: new Date(Date.now() + (30 + k) * 864e5).toISOString(),
      ends_at: new Date(Date.now() + (30 + k) * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 0, visibility: 'public', format: '5v5',
    });

    const before = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]').length;
    await api.createSeries(org, {
      title: 'Daily series', sport: 'football', format: 'football_5v5', skill_level: 'all',
      venue_id: venues[0].id, max_players: 10, waitlist_capacity: 2, price_kwd: 0,
      visibility: 'public', approval_mode: 'auto', skill_policy: 'open',
      start_date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).toISOString(),
      start_minutes: 600, end_minutes: 690, frequency: 'daily', horizon_weeks: 12, auto_invite: false,
    });
    const games = JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]');
    res.generated = games.length - before;
    res.afterSeries = await code(() => oneOff(0));
    // the hand-created limit itself must still bite
    const codes = [];
    for (let k = 1; k <= 5; k++) codes.push(await code(() => oneOff(k)));
    res.codes = codes;
    return res;
  }, [IDS.organizer]);

  ok('the series generated occurrences', out.generated > 0, String(out.generated));
  ok('one generation pass is bounded', out.generated <= 60, String(out.generated));
  ok('a one-off match still succeeds right after', out.afterSeries === 'accepted', String(out.afterSeries));
  ok('the hand-created limit still bites', out.codes.includes('E_YOU_HAVE_CREATED_TOO_MANY_MATCHES'), JSON.stringify(out.codes));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
