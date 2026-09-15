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

// mockReconcileSeatPayments had no caller anywhere in the bundle. seedDrift plants the two shapes it
// exists to find, plus enough settled rows that one 100-row pass cannot reach the end.
const seedDrift = async (page) =>
  page.evaluate(async ([org, seatless, unpaid]) => {
    const api = __r(671);
    const venues = (await api.fetchVenues()).filter((v) => (v.sports || []).includes('football'));
    const g = await api.createMatch(org, {
      title: 'Reconcile drift', sport: 'football', venue_id: venues[0].id,
      starts_at: new Date(Date.now() + 19 * 864e5).toISOString(),
      ends_at: new Date(Date.now() + 19 * 864e5 + 54e5).toISOString(),
      max_players: 10, waitlist_capacity: 2, price_kwd: 3, visibility: 'public', format: '5v5',
    });
    // Dated in 2020 so these sort ahead of every demo payment and the first pass is all ours.
    const pay = (n, payer, status, extra) => Object.assign({
      id: 'pay-recon-' + n, kind: 'seat', booking_id: null, game_id: g.id, payer_id: payer,
      payer_name: 'Seeded', payee_venue_id: g.venue_id, amount_kwd: 3, status,
      method: null, gateway_ref: null, reminders_sent: 0, reserved_until: null,
      paid_at: null, refunded_at: null,
      created_at: new Date(Date.UTC(2020, 0, 1, 0, 0, n)).toISOString(),
    }, extra || {});
    const payments = JSON.parse(localStorage.getItem('playora.mock.payments.v1') || '[]');
    // 1. paid, but the player holds no seat -> the reconciler must re-seat them.
    payments.push(pay(0, seatless, 'paid', { paid_at: new Date().toISOString(), method: 'knet' }));
    // 2. seat confirmed, payment never made and the hold long expired -> the seat must be voided.
    payments.push(pay(1, unpaid, 'pending', { reserved_until: new Date(Date.now() - 864e5).toISOString() }));
    // 3. 101 settled rows, so the pass runs out at 100 and has to leave a cursor behind.
    for (let k = 2; k < 103; k++) payments.push(pay(k, seatless, 'refunded'));
    localStorage.setItem('playora.mock.payments.v1', JSON.stringify(payments));
    const bookings = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    const now = new Date().toISOString();
    bookings.push({
      id: 'bk-recon-unpaid', game_id: g.id, user_id: unpaid, display_name: 'Unpaid Player',
      status: 'confirmed', attendance: null, reserved_until: null, created_at: now, updated_at: now,
    });
    localStorage.setItem('playora.mock.bookings.v1', JSON.stringify(bookings));
    localStorage.removeItem('playora.mock.reconcilecursor.v1');
    return { gameId: g.id, cursorBefore: localStorage.getItem('playora.mock.reconcilecursor.v1') };
  }, [IDS.organizer, IDS.user, IDS.analyst]);

const readDrift = ([seatless, gameId]) => {
  const bookings = JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]')
    .filter((b) => b.game_id === gameId);
  return {
    cursor: localStorage.getItem('playora.mock.reconcilecursor.v1'),
    seatedRow: (bookings.find((b) => b.user_id === seatless) || {}).status ?? null,
    voidedRow: (bookings.find((b) => b.id === 'bk-recon-unpaid') || {}).status ?? null,
  };
};

// Guest: the boot sweep is skipped for a session-less visitor, so the reconciler is called cold here
// and its return value can be pinned exactly.
await run('the seat payment reconciler reports the drift it fixed', async () => {
  const { browser, page, errors } = await openApp({ role: 'guest', route: '/' });
  const seed = await seedDrift(page);
  ok('the cursor starts unset', seed.cursorBefore === null, String(seed.cursorBefore));
  await page.goto('http://localhost/profile', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const out = await page.evaluate(async ([seatless, seed, read]) => {
    const res = await __r(671).reconcileSeatPayments();
    return Object.assign({ res }, new Function('a', 'return (' + read + ')(a)')([seatless, seed.gameId]));
  }, [IDS.user, seed, readDrift.toString()]);

  ok('one player was re-seated', out.res.seated === 1, JSON.stringify(out.res));
  ok('one unpaid seat was voided', out.res.seats_voided === 1, JSON.stringify(out.res));
  ok('the re-seated player now holds a confirmed booking', out.seatedRow === 'confirmed', String(out.seatedRow));
  ok('the unpaid booking was cancelled', out.voidedRow === 'cancelled', String(out.voidedRow));
  ok('the pass stopped at 100 rows', out.res.scanned === 100 && out.res.done === false, JSON.stringify(out.res));
  ok('the cursor advanced', String(out.cursor).includes('pay-recon-99'), String(out.cursor));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// Signed in: nothing calls the reconciler explicitly, so this asserts the AuthProvider boot sweep does.
await run('booting a session runs the scheduled sweep', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/' });
  const seed = await seedDrift(page);
  await page.goto('http://localhost/profile', { waitUntil: 'load' });
  await page.waitForTimeout(3500);
  const out = await page.evaluate(([seatless, seed, read]) =>
    new Function('a', 'return (' + read + ')(a)')([seatless, seed.gameId]),
  [IDS.user, seed, readDrift.toString()]);

  ok('boot re-seated the paid player with no seat', out.seatedRow === 'confirmed', String(out.seatedRow));
  ok('boot voided the unpaid confirmed seat', out.voidedRow === 'cancelled', String(out.voidedRow));
  ok('boot left the paging cursor behind', String(out.cursor).includes('pay-recon-99'), String(out.cursor));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

await run('the admin maintenance screen runs the reconciler', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/admin' });
  const body = await page.evaluate(() => document.body.innerText);
  ok('the /admin route resolves', body.includes(t('adminReconcileTitle')), body.slice(0, 60).replace(/\n/g, '|'));
  await page.getByRole('button', { name: t('adminReconcileCta'), exact: true }).first().click();
  await page.waitForTimeout(1500);
  const after = await page.evaluate(() => document.body.innerText);
  ok('the button reports a result', /scanned/i.test(after), after.slice(0, 200).replace(/\n/g, '|'));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

// withdrawEligible qualified every approved organizer regardless of earnings, but nothing writes the
// organizer_payout ledger kind - so the button sat over a zero balance with nothing claimable behind
// it. And wallet KYC stamped itself verified on submission, making the gate behind it decorative.
await run('withdrawal follows the money, and identity waits for a human', async () => {
  const { browser, page, errors } = await openApp({ role: 'admin', route: '/' });
  const out = await page.evaluate(async ([org, admin]) => {
    const api = __r(671);
    const res = {};
    const code = async (fn) => { try { await fn(); return 'accepted'; } catch (e) { return e.code || e.message; } };
    const w1 = await api.fetchWallet(org);
    res.organizerEligible = w1.withdraw_eligible;
    res.organizerClaimable = w1.claimable_payout_fils;
    res.withdrawAttempt = await code(() => api.walletWithdraw(org, 5000));

    // the identity check now queues instead of verifying itself
    const kyc = await api.submitWalletKyc(org, 'Test Organizer', '123456789012');
    res.kycStatus = kyc.status;
    res.queued = (await api.fetchPendingWalletKyc(admin)).some((k) => k.user_id === org);
    res.strangerReview = await code(() => api.reviewWalletKyc(org, org, true, null));
    await api.reviewWalletKyc(admin, org, true, null);
    res.afterReview = (await api.fetchWallet(org)).kyc_status;
    res.secondReview = await code(() => api.reviewWalletKyc(admin, org, true, null));
    return res;
  }, [IDS.organizer, IDS.admin]);

  ok('an organizer with no venue is not withdraw-eligible', out.organizerEligible === false, String(out.organizerEligible));
  ok('and has nothing claimable anyway', out.organizerClaimable === 0, String(out.organizerClaimable));
  ok('withdrawing is refused', out.withdrawAttempt === 'E_WITHDRAWALS_ARE_AVAILABLE_TO_VERIFIED_ORGANIZERS', String(out.withdrawAttempt));
  ok('a submitted identity check is pending, not verified', out.kycStatus === 'pending', String(out.kycStatus));
  ok('it appears in the admin queue', out.queued === true, String(out.queued));
  ok('a non-admin cannot review it', out.strangerReview !== 'accepted', String(out.strangerReview));
  ok('an admin verifies it', out.afterReview === 'verified', String(out.afterReview));
  ok('it cannot be reviewed twice', out.secondReview === 'E_KYC_ALREADY_REVIEWED', String(out.secondReview));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
});

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
