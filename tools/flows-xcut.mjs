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

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
