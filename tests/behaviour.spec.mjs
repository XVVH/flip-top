// How the bar behaves: first visits, the deck, persistence, per-post
// opt-outs, fallbacks, the theme index and the hit counter.
// The rules are in docs/DECISIONS.md and docs/ARCHITECTURE.md.
import { expect, test } from "@playwright/test";
import { currentTheme, FRONT_DOOR, loadImages, manifest, PACKS, problems, theme, watch } from "./helpers.mjs";

const KITCHEN = "/posts/kitchen-sink/";
const OTHER = "/posts/sample-one/";
const PLAIN = "/posts/sample-three/";
const fresh = (page) => page.getByRole("button", { name: manifest.copy.next, exact: true });

test("a first visit gets a random front-door theme, kept for the whole visit", async ({ page }) => {
  await watch(page);
  await page.goto(KITCHEN);
  const first = await currentTheme(page);
  expect(FRONT_DOOR).toContain(first);
  await page.goto(OTHER);
  expect(await currentTheme(page)).toBe(first);
  expect(await problems(page)).toEqual([]);
});

test("a new visit rolls a theme again", async ({ context }) => {
  const a = await context.newPage();
  await a.goto(KITCHEN);
  // A new tab is a new visit: sessionStorage starts empty.
  const b = await context.newPage();
  await b.goto(KITCHEN);
  expect(FRONT_DOOR).toContain(await currentTheme(b));
});

test("?pack= picks a theme and keeps it for the visit; unknown ids and the plain theme are ignored", async ({ page }) => {
  const id = PACKS[0].id;
  await page.goto(`${KITCHEN}?pack=${id}`);
  expect(await currentTheme(page)).toBe(id);
  await page.goto(OTHER);
  expect(await currentTheme(page)).toBe(id);
  await page.goto(`${OTHER}?pack=not-a-theme`);
  expect(await currentTheme(page)).toBe(id);
  await page.goto(`${OTHER}?pack=plain`);
  expect(await currentTheme(page)).toBe(id);
});

test("Fresh pack deals every theme once before repeating, never the current one", async ({ page }) => {
  test.skip(PACKS.length < 2, "needs at least two themes");
  await page.goto(`${KITCHEN}?pack=${PACKS[0].id}`);
  const seen = [await currentTheme(page)];
  for (let i = 0; i < PACKS.length - 1; i++) {
    await fresh(page).click();
    await expect.poll(() => currentTheme(page)).not.toBe(seen.at(-1));
    seen.push(await currentTheme(page));
  }
  expect(new Set(seen).size).toBe(PACKS.length);
});

test("Fresh pack announces the new theme by name, out of sight", async ({ page }) => {
  test.skip(PACKS.length < 2, "needs at least two themes");
  await page.goto(`${KITCHEN}?pack=${PACKS[0].id}`);
  await fresh(page).click();
  await expect.poll(() => currentTheme(page)).not.toBe(PACKS[0].id);
  const now = theme(await currentTheme(page));
  await expect(page.locator(".sr-live")).toHaveText(manifest.copy.changed.replace("{theme}", now.name));
  const box = await page.locator(".sr-live").boundingBox();
  expect(box.width * box.height, "the live region is visible").toBeLessThanOrEqual(1);
});

test("Fresh pack keeps the reader's place", async ({ page }) => {
  test.skip(PACKS.length < 2, "needs at least two themes");
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(`${KITCHEN}?pack=${PACKS[0].id}`);
  await loadImages(page);
  const heading = page.locator("#code-blocks");
  await heading.evaluate((el) => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 120));
  await fresh(page).click();
  await expect.poll(() => currentTheme(page)).not.toBe(PACKS[0].id);
  await loadImages(page);
  await expect.poll(async () => (await heading.boundingBox()).y).toBeGreaterThan(0);
  expect((await heading.boundingBox()).y).toBeLessThan(500);
});

test("there's no escape control", async ({ page }) => {
  await page.goto(`${KITCHEN}?pack=${PACKS[0].id}`);
  await expect(page.locator(".bar button")).toHaveCount(1);
  await expect(fresh(page)).toBeVisible();
});

test("a post with themes: false stays plain without changing the visit's theme", async ({ page }) => {
  const id = PACKS[0].id;
  await page.goto(`${OTHER}?pack=${id}`);
  await page.goto(PLAIN);
  expect(await currentTheme(page)).toBe("plain");
  await expect(page.locator(".bar-plain")).toHaveText(manifest.copy.stays_plain);
  await expect(fresh(page)).toBeHidden();
  await page.goto(OTHER);
  expect(await currentTheme(page)).toBe(id);
});

test("without JavaScript, readers get the plain theme and no bar", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(KITCHEN);
  expect(await page.getAttribute("html", "data-theme")).toBe("plain");
  await expect(page.locator(".bar")).toBeHidden();
  await expect(page.locator(".post-title")).toBeVisible();
  await context.close();
});

test("with storage blocked, the theme rides on internal links instead", async ({ page }) => {
  await page.addInitScript(() => {
    for (const name of ["localStorage", "sessionStorage"]) {
      Object.defineProperty(window, name, {
        get() {
          throw new DOMException("blocked", "SecurityError");
        },
      });
    }
  });
  await watch(page);
  await page.goto(KITCHEN);
  const id = await currentTheme(page);
  expect(FRONT_DOOR).toContain(id);
  const href = await page.locator(".site-nav a").first().getAttribute("href");
  expect(href).toContain(`pack=${id}`);
  await page.locator(".site-nav a").first().click();
  expect(await currentTheme(page)).toBe(id);
  expect(await problems(page)).toEqual([]);
});

test("printing always uses the plain theme", async ({ page }) => {
  const id = PACKS[0].id;
  await page.goto(`${KITCHEN}?pack=${id}`);
  await page.evaluate(() => window.dispatchEvent(new Event("beforeprint")));
  expect(await currentTheme(page)).toBe("plain");
  await page.evaluate(() => window.dispatchEvent(new Event("afterprint")));
  expect(await currentTheme(page)).toBe(id);
});

test("the hit counter counts once per visit", async ({ page, request }) => {
  // A page no other test visits, because the test server's counts are shared.
  const COUNTED = "/posts/sample-two/";
  await page.goto(COUNTED);
  const read = async () => (await (await request.get(`/api/hit?path=${encodeURIComponent(COUNTED)}`)).json()).count;
  await expect.poll(read).toBeGreaterThan(0);
  const before = await read();
  await page.reload();
  await page.waitForLoadState("networkidle");
  expect(await read()).toBe(before);
});

test("the hit counter refuses pages that don't exist", async ({ request }) => {
  const res = await request.post("/api/hit", { data: "/not-a-real-page/", headers: { "content-type": "text/plain" } });
  expect(res.status()).toBe(404);
});

test("the theme index is linked from every theme and lists every theme but the plain one", async ({ page }) => {
  const link = page.locator(".site-foot .designs-link");
  for (const t of PACKS) {
    await page.goto(`${OTHER}?pack=${t.id}`);
    await expect(link, `${t.id} hides the theme index link`).toBeVisible();
  }
  await link.click();
  for (const t of PACKS) await expect(page.locator(`#design-${t.id} h2`)).toHaveText(t.name);
  await expect(page.locator("#design-plain")).toHaveCount(0);
});

test("the Fresh pack spin shows no text", async ({ page }) => {
  test.skip(PACKS.length < 2, "needs at least two themes");
  await page.goto(`${KITCHEN}?pack=${PACKS[0].id}`);
  await fresh(page).click();
  const spin = page.locator(".bar-spin");
  await expect(spin).toBeAttached();
  expect(await spin.innerText()).toBe("");
  await expect(spin).not.toBeAttached();
});

test("theme metadata is complete", () => {
  for (const t of PACKS) expect(t.name, `${t.id} has a name`).toBeTruthy();
  expect(theme("plain")).toBeTruthy();
});
