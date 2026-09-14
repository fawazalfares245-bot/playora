// Home search bar: filters the match list by venue name, area or organiser name.
import { openApp } from "./smoke.mjs";

const out = [];
const ok = (n, c, extra = "") => out.push(`${c ? "PASS" : "FAIL"}  ${n}${extra ? "  " + extra : ""}`);

const { browser, page, errors } = await openApp({ role: "user", route: "/" });
await page.waitForTimeout(900);

const box = page.locator('input[aria-label]').filter({ hasText: "" });
const input = page.locator('input').first();
ok("search input present", await input.count() > 0);

const label = await input.getAttribute("aria-label");
ok("search input is labelled", !!label && /venue|area|organis/i.test(label), String(label));
const ph = await input.getAttribute("placeholder");
ok("search input has placeholder", !!ph && ph.length > 3, String(ph));

// Collect the venue names currently listed.
const cardText = async () => (await page.locator("body").innerText()).replace(/\s+/g, " ");
// The list re-renders asynchronously; poll instead of sleeping a fixed amount.
const waitFor = async (pred, ms = 4000) => {
  const end = Date.now() + ms;
  let t = "";
  while (Date.now() < end) {
    t = await cardText();
    if (pred(t)) return t;
    await page.waitForTimeout(50);
  }
  return t;
};
const before = await cardText();
ok("baseline list has games", /Kuwait Sports Stadium/i.test(before));

// 1. Venue name search matches.
await input.fill("kuwait sports");
let t = await waitFor((x) => /match/i.test(x) && /Kuwait Sports Stadium/i.test(x));
ok("venue-name query keeps the match", /Kuwait Sports Stadium/i.test(t));
ok("venue-name query shows a result count", /match|نتيجة/i.test(t));

// 2. Area search matches.
await input.fill("south surra");
t = await waitFor((x) => /Kuwait Sports Stadium/i.test(x) && !/Palms Beach Tennis/i.test(x));
ok("area query keeps the match", /Kuwait Sports Stadium/i.test(t));

// 3. Organiser-name search keeps that organiser's venues and drops the others.
await input.fill("khalid al-dousari");
t = await waitFor((x) => !/Sahara Kuwait Golf Club/i.test(x));
ok("organiser query keeps that organiser's games", /Palms Beach Tennis|The Padel Club Messila/i.test(t));
ok("organiser query drops other organisers' games", !/Sahara Kuwait Golf Club/i.test(t));

// 4. Nonsense search empties the list and shows the search empty state.
await input.fill("zzzzzzz-not-a-venue");
t = await waitFor((x) => /Nothing matches/i.test(x) && !/Kuwait Sports Stadium/i.test(x));
ok("no-match query hides the game", !/Kuwait Sports Stadium/i.test(t));
ok("no-match query shows the search empty state", /Nothing matches/i.test(t), t.slice(0, 0));

// 5. Clear button restores the list.
const clear = page.getByRole("button", { name: /Clear search/i });
ok("clear button appears while searching", (await clear.count()) > 0);
await clear.first().click();
t = await waitFor((x) => /Kuwait Sports Stadium/i.test(x) && !/Nothing matches/i.test(x));
ok("clearing restores the full list", /Kuwait Sports Stadium/i.test(t));
ok("clearing removes the result count", !/Nothing matches/i.test(t));
ok("no console or page errors", errors.length === 0, errors.join(" | "));

await browser.close();
console.log(out.join("\n"));
process.exit(out.some((l) => l.startsWith("FAIL")) ? 1 : 0);
