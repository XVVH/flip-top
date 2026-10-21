// Builds the production site and checks that nothing dev-only ships and the
// security headers match the code. Needs hugo on PATH. Run with: npm run test:unit
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, before, test } from "node:test";

let dir;
const read = (p) => readFileSync(join(dir, p), "utf8");

before(() => {
  dir = mkdtempSync(join(tmpdir(), "ft-prod-"));
  const build = spawnSync("hugo", ["--gc", "--minify", "--panicOnWarning", "-d", dir], { encoding: "utf8" });
  assert.equal(build.status, 0, `production build failed:\n${build.stdout}\n${build.stderr}`);
});
after(() => rmSync(dir, { recursive: true, force: true }));

const manifestOf = (html) => JSON.parse(html.match(/<script[^>]*\bid="?ft-manifest"?[^>]*>([\s\S]*?)<\/script>/)[1]);

test("dev-only themes never ship", () => {
  const ids = manifestOf(read("index.html")).themes.map((t) => t.id);
  assert.ok(ids.includes("plain"));
  assert.ok(!ids.includes("_control"), "_control is in the production manifest");
  const css = readdirSync(join(dir, "css")).map((f) => read(join("css", f))).join("\n");
  assert.ok(!css.includes('data-theme="_control"'), "_control's CSS is in the production bundle");
});

test("fixture posts never ship", () => {
  assert.ok(!existsSync(join(dir, "posts/kitchen-sink")), "the kitchen sink is in production");
  assert.ok(!read("hits-allowlist.json").includes("kitchen-sink"));
  assert.ok(!read("index.xml").includes("kitchen-sink"));
});

test("the content security policy allows exactly the inline boot script", () => {
  const html = read("index.html");
  const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  assert.equal(inline.length, 1, "expected exactly one inline script");
  const hash = `sha256-${createHash("sha256").update(inline[0]).digest("base64")}`;
  const headers = read("_headers");
  assert.ok(headers.includes(`'${hash}'`), "the _headers script hash doesn't match the inline script");
  assert.match(headers, /default-src 'self'/);
  assert.doesNotMatch(headers, /unsafe-inline|unsafe-eval/);
});

test("pages make no third-party requests", () => {
  const html = read("index.html") + read("404.html") + read("about/index.html");
  for (const m of html.matchAll(/<(?:script|link|img)\b[^>]*(?:src|href)="(https?:)?\/\/[^"]*"/g)) {
    if (m[0].startsWith("<link") && /rel="canonical"/.test(m[0])) continue;
    assert.fail(`third-party asset: ${m[0]}`);
  }
});

test("no inline style attributes, which the content security policy would block", () => {
  for (const page of ["index.html", "404.html", "about/index.html", "tags/index.html"]) {
    assert.doesNotMatch(read(page), /\sstyle="/, `${page} has an inline style attribute`);
  }
});

test("no theme's source pack is named in anything a theme ships", () => {
  // Each pack theme's theme.yaml names its source (pack: …), privately. None
  // of those names may reach the site through the themes: not in the CSS,
  // the scripts, theme assets, the manifest or the theme index.
  // pack_also: lists other spellings (pinyin, a Latin wordmark). A name in
  // characters is checked as a whole and word by word, without \b, which
  // never matches between characters.
  const sources = readdirSync("assets/themes")
    .map((id) => join("assets/themes", id, "theme.yaml"))
    .filter((f) => existsSync(f))
    .flatMap((f) => {
      const yaml = readFileSync(f, "utf8");
      const pack = yaml.match(/^pack:\s*["']?([^"'\n]+?)["']?\s*$/m)?.[1];
      const more = [...(yaml.match(/^pack_also:\s*\[(.*)\]\s*$/m)?.[1] ?? "").matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
      return pack ? [pack, ...more] : more;
    })
    .flatMap((name) => (/^[\x00-\x7f]*$/.test(name) ? [name] : [name, ...name.split(/\s+/).filter((w) => w.length > 1)]));
  const files = (sub) => (existsSync(join(dir, sub)) ? readdirSync(join(dir, sub), { recursive: true }).map((f) => join(sub, f)) : []);
  const shipped = [...files("css"), ...files("js"), ...files("themes")]
    .filter((f) => /\.(css|js|svg|json|txt)$/.test(f))
    .map((f) => [f, read(f)]);
  shipped.push(["the manifest", JSON.stringify(manifestOf(read("index.html")))]);
  shipped.push(["designs/index.html", read("designs/index.html")]);
  for (const pack of sources) {
    const escaped = pack.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const word = /^[\x00-\x7f]*$/.test(pack) ? new RegExp(`\\b${escaped}\\b`, "i") : new RegExp(escaped);
    for (const [name, text] of shipped) assert.doesNotMatch(text, word, `${name} names the pack "${pack}"`);
  }
});
