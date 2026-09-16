#!/usr/bin/env node
// Headless smoke test for the single-file app.
//   node tools/smoke.mjs <route> [--role admin|analyst|organizer|user|guest] [--screenshot out.png] [--dump] [--keep]
// Serves index.html for every path on a fake origin, seeds a signed-in session with the given role,
// opens the route, waits for the screen to settle, and prints console errors / page errors / visible text.
// Exit code 1 when any page error or console.error occurred.
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const route = args.find((a) => !a.startsWith('--')) ?? '/';
const opt = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : def; };
const role = opt('role', 'admin');
const shot = opt('screenshot', null);
const dump = args.includes('--dump');
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

export const ORIGIN = 'http://localhost';
export const IDS = {
  admin: '11111111-1111-4111-8111-111111111111',
  analyst: '22222222-2222-4222-8222-222222222222',
  organizer: '33333333-3333-4333-8333-333333333333',
  user: '44444444-4444-4444-8444-444444444444',
};

export function seedScript(role) {
  const profiles = [
    ['admin', 'Test Admin', 'admin', 'admin@rush-x.test'],
    ['analyst', 'Test Analyst', 'analyst', 'analyst@rush-x.test'],
    ['organizer', 'Test Organizer', 'organizer', 'organizer@rush-x.test'],
    ['user', 'Test Player', 'user', 'player@rush-x.test'],
  ].map(([k, name, r, email]) => ({
    id: IDS[k], full_name: name, avatar_url: null, phone: null, audience: 'male', privacy_visibility: 'everyone',
    avatar_mode: 'photo', media_consent: true, preferred_sports: ['football'], skill_level: 'all', bio: null, role: r,
    consent: { analytics: false, marketing: false }, consent_updated_at: null, created_at: new Date(Date.now() - 400 * 864e5).toISOString(),
    email,
  }));
  const users = profiles.map((p) => ({ id: p.id, email: p.email, salt: 'x', passwordHash: 'x', failedAttempts: 0, lockedUntil: null }));
  const app = { id: 'app-organizer-1', user_id: IDS.organizer, status: 'approved', full_legal_name: 'Test Organizer', mobile: '+965 5000 0001',
    email: 'organizer@rush-x.test', display_name: 'Test Organizer', bio: '', sports: ['football', 'padel'], expected_monthly_matches: 4,
    organizer_type: 'individual', id_doc_type: 'civil_id', id_doc_ref: 'ref', id_doc_last4: '0001', id_doc_uploaded: true, business: null,
    phone_hash: 'ph', risk_flags: [], reviewed_by: IDS.admin, rejection_reason: null, admin_notes: null, reapply_after: null,
    submitted_at: new Date(Date.now() - 30 * 864e5).toISOString(), reviewed_at: new Date(Date.now() - 29 * 864e5).toISOString(), created_at: new Date(Date.now() - 30 * 864e5).toISOString() };
  // A real session carries expires_at; loadSession rejects one without it, so the seed must too.
  const session = role === 'guest' ? null : { user: { id: IDS[role], email: profiles.find((p) => p.id === IDS[role]).email }, token: 'smoke-token', expires_at: Date.now() + 2592e6 };
  return `(() => {
    try {
      localStorage.setItem('playora.mock.profiles.v1', ${JSON.stringify(JSON.stringify(profiles))});
      localStorage.setItem('playora.mock.users.v1', ${JSON.stringify(JSON.stringify(users))});
      localStorage.setItem('playora.mock.applications.v1', ${JSON.stringify(JSON.stringify([app]))});
      localStorage.setItem('playora.mock.orgseed.v1', JSON.stringify({ uid: '${IDS.organizer}' }));
      // Joining a match requires the current Code of Conduct. These four stand in for
      // established accounts, so they have accepted it.
      localStorage.setItem('playora.mock.coc.acceptance.v1', JSON.stringify([{"user_id": "${IDS.admin}", "version": 1, "accepted_at": "2025-01-01T00:00:00.000Z"}, {"user_id": "${IDS.analyst}", "version": 1, "accepted_at": "2025-01-01T00:00:00.000Z"}, {"user_id": "${IDS.organizer}", "version": 1, "accepted_at": "2025-01-01T00:00:00.000Z"}, {"user_id": "${IDS.user}", "version": 1, "accepted_at": "2025-01-01T00:00:00.000Z"}]));
      ${session ? `localStorage.setItem('secure.playora_session', ${JSON.stringify(JSON.stringify(session))});` : ''}
    } catch (e) { console.error('seed failed', e); }
  })();`;
}

export async function openApp({ role = 'admin', route = '/', seed = true, initScript = null } = {}) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 420, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });
  page.on('dialog', (d) => { errors.push(`dialog(${d.type()}): ${d.message().replace(/\n/g, ' | ')}`); d.accept(); });
  await page.route(ORIGIN + '/**', (r) => {
    // `serve -s` rewrites every unknown path to index.html, so the shell comes back for a plain
    // fetch of '/' as well as for a navigation. The app relies on that to compare build ids.
    const path = new URL(r.request().url()).pathname;
    if (r.request().resourceType() === 'document' || path === '/' || path === '/index.html')
      return r.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: html });
    return r.fulfill({ status: 404, body: '' });
  });
  if (seed) await page.addInitScript(seedScript(role));
  if (initScript) await page.addInitScript(initScript);
  await page.goto(ORIGIN + route, { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  return { browser, page, errors };
}

// Four properties every booking transition in 631 is meant to preserve. Most of the defects found in
// the audit broke one of them: a promotion that ran on a match that had already finished, a second
// live booking minted by rejoining after a cancellation, an attendance mark written onto a cancelled
// row, an approval that confirmed a seat which no longer existed. Run this over a world a suite has
// just churned and a regression shows up without anyone having written a bespoke test for it first.
//
// Pass the page and an admin id; returns { bookings, games, dupes, ghosts, stale, over }.
export async function bookingInvariants(page, adminId) {
  return page.evaluate(async (admin) => {
    const api = __r(671);
    const read = () => JSON.parse(localStorage.getItem('playora.mock.bookings.v1') || '[]');
    // Expiry is lazy - a reserved hold is swept when its match is next read - so read every match
    // that still carries one, then assert that no expired hold survived the read.
    const held = [...new Set(read().filter((b) => 'reserved' === b.status).map((b) => b.game_id))];
    for (const id of held) await api.fetchGame(id, admin).catch(() => null);

    const now = Date.now();
    const bookings = read();
    const games = new Map(
      JSON.parse(localStorage.getItem('playora.mock.games.v1') || '[]').map((g) => [g.id, g]),
    );
    // yi(): the seats a match has actually given away, confirmed or still held.
    const live = (b) =>
      'confirmed' === b.status ||
      ('reserved' === b.status && !!b.reserved_until && new Date(b.reserved_until).getTime() > now);

    const seen = new Set();
    const dupes = [];
    const ghosts = [];
    const stale = [];
    const seats = new Map();
    for (const b of bookings) {
      if (live(b)) {
        const k = `${b.game_id}|${b.user_id}`;
        if (seen.has(k)) dupes.push(k);
        seen.add(k);
        seats.set(b.game_id, (seats.get(b.game_id) || 0) + 1);
      }
      if (('cancelled' === b.status || 'rejected' === b.status) && null != b.attendance) ghosts.push(b.id);
      if ('reserved' === b.status && !(b.reserved_until && new Date(b.reserved_until).getTime() > now))
        stale.push(b.id);
    }
    const over = [];
    let covered = 0;
    for (const [id, n] of seats) {
      const g = games.get(id);
      if (!g) continue; // the demo fixtures live inside 631 and never reach storage
      covered += 1;
      if (n > g.max_players) over.push(`${id} ${n}/${g.max_players}`);
    }
    return { bookings: bookings.length, games: covered, dupes, ghosts, stale, over };
  }, adminId);
}

// Report a bookingInvariants() result through a suite's own ok(). `floor` is the smallest world the
// caller expects to have built; a probe that runs over an empty world passes everything and proves
// nothing, so the coverage line is an assertion too.
export function assertBookingInvariants(ok, inv, { floor = 1 } = {}) {
  ok('the invariants were given a populated world', inv.bookings >= floor && inv.games > 0, `${inv.bookings} bookings, ${inv.games} matches`);
  ok('at most one live booking per player per match', inv.dupes.length === 0, inv.dupes.slice(0, 5).join(','));
  ok('no cancelled or rejected row carries attendance', inv.ghosts.length === 0, inv.ghosts.slice(0, 5).join(','));
  ok('every reserved row still holds a future seat', inv.stale.length === 0, inv.stale.slice(0, 5).join(','));
  ok('no match is seated past its capacity', inv.over.length === 0, inv.over.slice(0, 5).join(','));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const { browser, page, errors } = await openApp({ role, route });
  const text = await page.evaluate(() => document.body.innerText);
  if (shot) await page.screenshot({ path: shot, fullPage: true });
  console.log('URL:', page.url());
  console.log('--- visible text (first 60 lines) ---');
  console.log(text.split('\n').filter(Boolean).slice(0, dump ? 400 : 60).join('\n'));
  console.log('--- errors ---');
  console.log(errors.length ? errors.join('\n') : '(none)');
  await browser.close();
  process.exit(errors.some((e) => e.startsWith('pageerror') || e.startsWith('console.error')) ? 1 : 0);
}
