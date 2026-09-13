// Kid UI Kit checks (modules 9004 / 9005, route /kids). Run: node tools/flows-kids.mjs
//
// Order matters here: the coach hand is asserted BEFORE any pointer input, because retiring itself on
// the first real interaction is the behaviour under test.
import { openApp } from './smoke.mjs';
const results = [];
const ok = (n, c, x = '') => results.push(`${c ? 'PASS' : 'FAIL'} ${n} ${x}`);

const { browser, page, errors } = await openApp({ role: 'user', route: '/kids' });
await page.waitForTimeout(2200);

// --- 1. Onboarding: a hand that shows the gesture and never blocks it -----------------------------
const coach = await page.evaluate(() => {
  const hand = document.querySelector('[data-kid-anim="hand"]');
  if (!hand) return { present: false };
  const cs = getComputedStyle(hand);
  // Walk the overlay looking for anything that could swallow a tap meant for the screen underneath.
  const root = hand.closest('[data-kid-coach="root"]');
  let node = hand,
    blocking = false;
  while (node) {
    if (getComputedStyle(node).pointerEvents !== 'none') blocking = true;
    if (node === root) break;
    node = node.parentElement;
  }
  // The decisive check: what does the browser hand a tap at the hand's own centre?
  const r = hand.getBoundingClientRect();
  const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
  return {
    present: true,
    animation: cs.animationName,
    iterations: cs.animationIterationCount,
    blocking,
    passesThrough: !!hit && !hit.closest('[data-kid-coach="root"]'),
    hidden: !!hand.closest('[aria-hidden="true"]'),
  };
});
ok('the onboarding hand shows on a first visit', coach.present === true);
ok('the hand animates the gesture it is teaching', /kid-swipe|kid-tap/.test(coach.animation || ''), String(coach.animation));
ok('the gesture loops rather than playing once', coach.iterations === 'infinite', String(coach.iterations));
ok('nothing in the overlay accepts pointer events', coach.blocking === false, String(coach.blocking));
ok('a tap at the hand reaches the screen underneath', coach.passesThrough === true, String(coach.passesThrough));
ok('the hand is hidden from screen readers', coach.hidden === true, String(coach.hidden));

// --- 2. Scrolling: snap, containment, momentum ----------------------------------------------------
const scroll = await page.evaluate(() => {
  const sc = document.querySelector('[data-kid-scroll]');
  const row = document.querySelector('[data-kid-snap]');
  const cs = sc && getComputedStyle(sc);
  const rs = row && getComputedStyle(row);
  return {
    injected: !!document.getElementById('kid-ui-v1'),
    hasScroller: !!sc,
    snapAxis: cs ? cs.scrollSnapType : null,
    // proximity is the initial strictness, so Chromium reports the axis alone; mandatory would show.
    notMandatory: cs ? !/mandatory/.test(cs.scrollSnapType) : false,
    overscroll: cs ? cs.overscrollBehaviorY : null,
    snapAlign: rs ? rs.scrollSnapAlign : null,
    scrollHeight: sc ? sc.scrollHeight : 0,
  };
});
ok('the kit stylesheet is injected once', scroll.injected);
ok('the list is a real scroll container', scroll.hasScroller);
ok('vertical scroll snapping is on', /y/.test(scroll.snapAxis || ''), String(scroll.snapAxis));
ok('snapping is proximity, not mandatory', scroll.notMandatory, String(scroll.snapAxis));
ok('overscroll is contained to the list', scroll.overscroll === 'contain', String(scroll.overscroll));
ok('rows snap to centre', scroll.snapAlign === 'center', String(scroll.snapAlign));

// --- 3. Virtualisation: 2,000 rows must not become 2,000 views ------------------------------------
const before = await page.evaluate(() => ({
  rows: document.querySelectorAll('[data-kid-snap]').length,
  nodes: document.querySelectorAll('*').length,
}));
ok('only a screenful of rows is mounted', before.rows > 0 && before.rows < 30, `rows=${before.rows}`);
ok('the full list height is still reachable', scroll.scrollHeight > 5e5, String(scroll.scrollHeight));

await page.evaluate(() => {
  const sc = document.querySelector('[data-kid-scroll]');
  sc.scrollTop = 90000; // ~row 300 of 2000
  sc.dispatchEvent(new Event('scroll'));
});
await page.waitForTimeout(1500);
const after = await page.evaluate(() => {
  const sc = document.querySelector('[data-kid-scroll]');
  return {
    alive: !!sc,
    rows: document.querySelectorAll('[data-kid-snap]').length,
    nodes: document.querySelectorAll('*').length,
    top: sc ? sc.scrollTop : -1,
  };
});
ok('the list survives a deep jump', after.alive === true);
ok('scrolling 300 rows deep actually moved', after.top > 8e4, String(after.top));
ok('row count stays flat after scrolling', after.rows < 30, `rows=${after.rows}`);
ok('DOM node count stays flat after scrolling', after.nodes < before.nodes * 3, `${before.nodes} -> ${after.nodes}`);

// --- 3b. Rubber band: pulling past the top must move, then spring back ----------------------------
await page.evaluate(() => {
  const sc = document.querySelector('[data-kid-scroll]');
  sc.scrollTop = 0;
});
await page.waitForTimeout(300);
const band = await page.evaluate(async () => {
  const sc = document.querySelector('[data-kid-scroll]');
  const content = sc.firstElementChild;
  const read = () => {
    const m = /matrix\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,\s*([-\d.]+)\)/.exec(getComputedStyle(content).transform);
    return m ? parseFloat(m[1]) : 0;
  };
  const tagged = content.getAttribute('data-kid-band') === '1';
  // Three upward wheel ticks at the very top of the list.
  for (let i = 0; i < 3; i++) {
    sc.dispatchEvent(new WheelEvent('wheel', { deltaY: -120, bubbles: true, cancelable: true }));
    await new Promise((r) => setTimeout(r, 16));
  }
  const pulled = read();
  await new Promise((r) => setTimeout(r, 900)); // let the spring settle
  return { tagged, pulled, settled: read() };
});
ok('the scroll content is wired for the rubber band', band.tagged === true, String(band.tagged));
ok('pulling past the top moves the content', band.pulled > 4, `${band.pulled.toFixed(1)}px`);
ok('the pull is damped, not one-to-one', band.pulled < 360 * 0.5, `${band.pulled.toFixed(1)}px of 360 scrolled`);
ok('the content springs back to rest', Math.abs(band.settled) < 1, `${band.settled.toFixed(2)}px`);

// --- 4. Learnability: oversized targets, always labelled ------------------------------------------
const touch = await page.evaluate(() => {
  const els = [...document.querySelectorAll('[data-kid-press]')].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  });
  const shortEdge = els.map((el) => {
    const r = el.getBoundingClientRect();
    return Math.min(r.width, r.height);
  });
  return {
    count: els.length,
    smallest: shortEdge.length ? Math.round(Math.min(...shortEdge)) : 0,
    labelled: els.filter((el) => (el.getAttribute('aria-label') || '').trim().length > 0).length,
    roled: els.filter((el) => el.getAttribute('role') === 'button').length,
  };
});
ok('interactive targets exist', touch.count > 0, String(touch.count));
ok('every target is at least 56px on its short edge', touch.smallest >= 56, `${touch.smallest}px`);
ok('every target carries a screen-reader label', touch.labelled === touch.count, `${touch.labelled}/${touch.count}`);
ok('every target announces itself as a button', touch.roled === touch.count, `${touch.roled}/${touch.count}`);

// --- 5. Press feedback: the button must visibly sink, using real input ----------------------------
const target = page.locator('[data-kid-press]').first();
const box = await target.boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
await page.mouse.down();
await page.waitForTimeout(220);
const down = await page.evaluate(() => {
  const el = document.querySelector('[data-kid-press]');
  return { state: el.getAttribute('data-kid-press'), transform: getComputedStyle(el).transform };
});
await page.mouse.up();
await page.waitForTimeout(420);
const up = await page.evaluate(() => document.querySelector('[data-kid-press]').getAttribute('data-kid-press'));
const scaleOf = (t) => {
  const m = /matrix\(([^,]+),/.exec(t || '');
  return m ? parseFloat(m[1]) : 1;
};
ok('a press marks the button as down', down.state === 'down', String(down.state));
ok('the down state visibly shrinks the button', scaleOf(down.transform) < 0.99, down.transform);
ok('the button returns to rest on release', up === 'up', String(up));

// --- 6. The hand retires on the first real interaction --------------------------------------------
await page.waitForTimeout(300);
const gone = await page.evaluate(() => !document.querySelector('[data-kid-anim="hand"]'));
ok('the hand retires once the child interacts', gone === true);

ok('no console or page errors', errors.length === 0, errors.slice(0, 2).join(' | '));
await browser.close();

// --- 7. Seen-once memory: the tour must not replay ------------------------------------------------
const second = await openApp({ role: 'user', route: '/kids' });
await second.page.evaluate(() => localStorage.setItem('playora.kid.tour.list.v1', '1'));
await second.page.reload();
await second.page.waitForTimeout(2200);
const replay = await second.page.evaluate(() => !!document.querySelector('[data-kid-anim="hand"]'));
ok('the tour does not replay once it has been seen', replay === false);
ok('no page errors on the second visit', !second.errors.some((e) => e.startsWith('pageerror')));
await second.browser.close();

console.log(results.join('\n'));
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0);
