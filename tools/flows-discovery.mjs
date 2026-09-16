// F-CTEST-1: the discovery, map and venue-browsing routes had no end-to-end coverage at all - five
// routes including the whole booking funnel and both error-prone id-parameter screens. Every one of
// them reached the audit with a loader that had no catch and an exit that assumed a navigation stack
// beneath it, which is what no coverage looks like from the outside.
//
// Each route must reach a titled state rather than a bare spinner, and raise no page error. The bad
// ids are the point: "venue not found" is a state a screen has to render, not a state it hangs in.
//
// Run: node tools/flows-discovery.mjs
import { openApp, ORIGIN } from './smoke.mjs';

const results = [];
const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);

const SEEDED_VENUE = '11111111-1111-1111-1111-111111111111';

// A screen that is still spinning has a chrome-only body: a title or a message is what says it
// resolved into something a person can act on.
const routes = [
  { path: '/discover', role: 'user', expect: /Discover players|Find people/i },
  { path: '/map', role: 'user', expect: null },
  { path: `/venue/${SEEDED_VENUE}`, role: 'user', expect: /Salmiya Sports Hub/i },
  { path: '/venue/does-not-exist', role: 'user', expect: /not found/i },
  { path: '/booking/search', role: 'organizer', expect: /Book a court/i },
  { path: `/booking/venue/${SEEDED_VENUE}`, role: 'organizer', expect: /Select a court|Salmiya/i },
  { path: '/booking/venue/does-not-exist', role: 'organizer', expect: /not found/i },
  { path: '/blocked', role: 'user', expect: /Blocked accounts/i },
  { path: '/how-it-works', role: 'user', expect: /How Rush X works/i },
];

for (const { path, role, expect } of routes) {
  const { browser, page, errors } = await openApp({ role, route: path });
  await page.waitForTimeout(3200);
  const text = await page.evaluate(() => document.body.innerText);
  const label = `${path} (${role})`;
  ok(`${label}: renders something`, text.trim().length > 0, `${text.trim().length} chars`);
  if (expect) ok(`${label}: reaches its own state`, expect.test(text), JSON.stringify(text.split('\n').filter(Boolean).slice(0, 3)));
  // The map is a canvas, so it has no text of its own; what matters is that it stopped spinning
  // without erroring.
  const pageErrors = errors.filter((e) => e.startsWith('pageerror'));
  ok(`${label}: no page errors`, pageErrors.length === 0, pageErrors.slice(0, 1).join('').slice(0, 160));
  await browser.close();
}

// Both id-parameter screens must offer a way out, because a bad id is usually reached by a link
// from outside the app - where router.back() has nothing to pop.
for (const [path, role] of [['/venue/does-not-exist', 'user'], ['/booking/venue/does-not-exist', 'organizer']]) {
  const { browser, page } = await openApp({ role, route: path });
  await page.waitForTimeout(3000);
  const text = await page.evaluate(() => document.body.innerText);
  // The message alone is not a way out, so this asks for a control. Written with an || at first,
  // which the "not found" text satisfied on its own - and /venue was a dead end underneath it.
  ok(`${path}: offers a way out`, /Go back/i.test(text), JSON.stringify(text.split('\n').filter(Boolean).slice(0, 4)));
  await browser.close();
}

// Deep-linked directly, with nothing beneath it in the stack, the back control has to land
// somewhere rather than do nothing.
{
  const { browser, page, errors } = await openApp({ role: 'user', route: '/how-it-works' });
  await page.waitForTimeout(3000);
  const back = page.getByLabel('Back').first();
  ok('a directly opened screen has a back control', (await back.count()) > 0, String(await back.count()));
  if ((await back.count()) > 0) {
    await back.click();
    await page.waitForTimeout(2000);
    const url = page.url();
    ok('and it leaves the screen instead of doing nothing', !url.includes('/how-it-works'), url.replace(ORIGIN, '') || '/');
  }
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).slice(0, 1).join(''));
  await browser.close();
}

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
