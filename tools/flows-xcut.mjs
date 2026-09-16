// Cross-cutting checks (XC findings). Run: node tools/flows-xcut.mjs
import { openApp } from './smoke.mjs';
import fs from 'node:fs';
const en = fs.readFileSync(new URL('../bundle-src/909.js', import.meta.url), 'utf8');
const t = (k) => {
  const m = en.match(new RegExp(`^\\s+${k}: "((?:[^"\\\\]|\\\\.)*)"`, 'm'));
  if (!m) throw new Error('missing key ' + k);
  return JSON.parse('"' + m[1] + '"');
};
const results = [];
const ok = (name, cond, extra = '') => results.push(`${cond ? 'PASS' : 'FAIL'} ${name} ${extra}`);

// Static check: the two locales must hold the same key set, with no duplicates.
// A duplicate is silently won by the later entry, which is how a stale string survives an edit.
{
  const blockKeys = (body) => [...body.matchAll(/^\s{8}([A-Za-z_][A-Za-z0-9_]*):/gm)].map((m) => m[1]);
  const enStart = en.indexOf('      en: {');
  const arStart = en.indexOf('      ar: {');
  const enKeys = blockKeys(en.slice(enStart, arStart));
  const arKeys = blockKeys(en.slice(arStart));
  const dups = [...new Set([...enKeys, ...arKeys])].filter(
    (k) => enKeys.filter((x) => x === k).length > 1 || arKeys.filter((x) => x === k).length > 1,
  );
  const onlyEn = enKeys.filter((k) => !arKeys.includes(k));
  const onlyAr = arKeys.filter((k) => !enKeys.includes(k));
  ok('no duplicate translation keys', dups.length === 0, dups.join(','));
  ok('every English key exists in Arabic', onlyEn.length === 0, onlyEn.slice(0, 5).join(','));
  ok('every Arabic key exists in English', onlyAr.length === 0, onlyAr.slice(0, 5).join(','));
}

// F-XC-5: demo mode is announced on screen, and only when the flag is on.
// The flag is assigned by an inline script in index.html, so intercept the assignment.
const forceDemo = (v) => `(() => {
  Object.defineProperty(window, '__PLAYORA_CONFIG__', {
    configurable: true,
    get() { return this.__cfg; },
    set(val) { this.__cfg = Object.assign({}, val, { demo: ${v} }); },
  });
})();`;

for (const demo of [true, false]) {
  const { browser, page, errors } = await openApp({ role: 'user', route: '/', initScript: forceDemo(demo) });
  await page.waitForTimeout(1500);
  const body = await page.evaluate(() => document.body.innerText);
  const cfg = await page.evaluate(() => globalThis.__PLAYORA_CONFIG__.demo);
  ok(`the demo flag is ${demo} for this run`, cfg === demo, String(cfg));
  ok(
    demo ? 'demo mode is announced on screen' : 'no demo banner when the flag is off',
    body.includes(t('demoModeBanner')) === demo,
  );
  ok(`no page errors with demo=${demo}`, !errors.some((e) => e.startsWith('pageerror')), errors.filter((e) => e.startsWith('pageerror')).join(';'));
  await browser.close();
}

// F-ORG1-22: seeded fixtures are self-describing.
{
  const { browser, page, errors } = await openApp({ role: 'user', route: '/' });
  await page.waitForTimeout(1200);
  const seeded = await page.evaluate(async () => {
    const store = __r(631);
    const venues = await store.mockGetVenues();
    const games = await store.mockGetUpcomingGames({});
    return {
      venues: venues.length,
      venuesTagged: venues.filter((v) => v.seeded === true).length,
      games: games.length,
      gamesTagged: games.filter((g) => g.seeded === true).length,
    };
  });
  ok('seeded venues are tagged', seeded.venues > 0 && seeded.venuesTagged === seeded.venues, JSON.stringify(seeded));
  ok('seeded matches are tagged', seeded.games > 0 && seeded.gamesTagged === seeded.games, JSON.stringify(seeded));
  ok('no page errors', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
}

// A build stamp, so "which version is this phone running" is answerable without devtools.
{
  const { browser, page, errors } = await openApp({ role: 'user', route: '/profile' });
  await page.waitForTimeout(2500);
  const r = await page.evaluate(() => ({
    cfg: globalThis.__PLAYORA_CONFIG__?.buildId ?? null,
    shown: (document.body.innerText.match(/[0-9a-f]{10}/) || [])[0] ?? null,
  }));
  ok('the bundle carries a build id', /^[0-9a-f]{10}$/.test(r.cfg || ''), String(r.cfg));
  ok('it is not the unstamped placeholder', r.cfg !== 'dev', String(r.cfg));
  ok('the profile screen shows it', r.shown === r.cfg, `${r.shown} vs ${r.cfg}`);
  ok('no page errors on profile', !errors.some((e) => e.startsWith('pageerror')));
  await browser.close();
}

// Expo Router's built-in sitemap listed all 88 routes as .tsx filenames - every admin screen, the
// venue portal and the scanner - to anyone who typed the URL.
{
  const { browser, page, errors } = await openApp({ role: 'user', route: '/_sitemap' });
  const body = await page.evaluate(() => document.body.innerText);
  ok('no admin routes are listed', !body.includes('admin/'), body.slice(0, 120).replace(/\n/g, '|'));
  ok('no route filenames are listed', !/\.tsx/.test(body), body.slice(0, 120).replace(/\n/g, '|'));
  ok('no link back to the sitemap', !body.includes('Sitemap'), body.slice(0, 120).replace(/\n/g, '|'));
  // The 404 illustration pointed at an asset path that does not exist here, so every unmatched route
  // logged a CSP error for a picture nobody saw.
  ok('an unmatched route is quiet', errors.length === 0, errors.slice(0, 1).join(''));
  await browser.close();
}

{
  const v = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
  const red = (v.redirects || []).find((r) => r.source === '/_sitemap');
  // Vercel evaluates redirects before rewrites, so this has to survive the catch-all below it. It is
  // also the half of the fix that an Expo rebuild cannot revert.
  ok('vercel.json redirects /_sitemap', !!red && red.destination === '/', JSON.stringify(v.redirects));
  ok('the catch-all rewrite is still there', (v.rewrites || []).some((r) => r.destination === '/index.html'), JSON.stringify(v.rewrites));
}

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
