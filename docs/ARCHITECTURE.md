# Architecture

*Inherited from Turrible Takes with its plumbing, October 2026. Where the code and this file disagree, fix one of them.*

*The inherited names were replaced in phase 1: `?pack=<id>`, the `plain` theme, `themes:` in front matter, the Fresh pack button, the `ft:` storage keys, and `summary` in `theme.yaml`.*

## Overview

Markdown → Hugo → one semantic HTML page per post → styled by one stylesheet that holds every theme, each scoped to `:root[data-theme="<id>"]`. A tiny script in the page head sets `data-theme` before anything is drawn, so switching themes is just changing that attribute. Netlify serves the static output, and one Netlify Function runs the hit counter.

## Commands

```sh
npm ci                  # test tools and the function's one dependency
hugo server             # local preview, development environment (fixtures and _control included)
npm test                # theme lint, unit tests, production checks, test build, browser tests
GALLERY=1 npx playwright test tests/gallery.spec.mjs   # screenshot gallery in gallery/
npm run serve           # serve the test build (.test-site) the way Netlify would, with _headers applied
```

Hugo is pinned to the version in `netlify.toml` and `.github/workflows/ci.yml`; keep the two in step.

## Environments

- **Production** (`hugo`): real content only. `_control` and its CSS are left out entirely.
- **Development** (`hugo server`, `npm run build:test`): `config/development/hugo.toml` also mounts `fixtures/content/` (the kitchen sink and sample posts), and `_control` is included. CI tests this build.

## Content

- Posts are Hugo page bundles: `content/posts/<slug>/index.md`, with the post's images beside it.
- Fixture posts live in `fixtures/content/posts/` and exist only in development builds.
- Front matter:

  ```yaml
  title: "…"
  date: 2026-10-18
  description: "…"       # used in lists and feeds
  tags: [ … ]
  draft: false
  themes: false          # optional: false keeps the post plain; a list of ids limits it to those
  ```

- Page types are kept few, because each one multiplies the work for every theme: home (the post list), post, tag list, about, and 404.
- Feeds: full-content RSS, plus a sitemap.
- URLs: `/posts/<slug>/`. The build must work under a subpath, so use `relURL`/`absURL` everywhere and never hard-code a leading `/`.

## Markdown rendering

Done with Hugo render hooks.

- **Links** (`render-link.html`):
  - Relative or `.md` destinations resolve to the target page's URL. An internal link that doesn't resolve fails the build.
  - External links get `class="ext"` and a visually hidden "(external)". No `target="_blank"`.
- **Images** (`render-image.html`):
  - Local images become a responsive `<img>` with `srcset` (for example 480, 960 and 1600px wide, as WebP), explicit `width` and `height`, `loading="lazy"` and `decoding="async"`.
  - Missing alt text produces a warning locally and fails in CI (`--panicOnWarning`). A Markdown image title becomes a `<figcaption>`; a stand-alone image becomes a `<figure>`.
  - Remote images produce a warning: they send readers' requests to a third party, and they cost nothing to bring local.
- **Code** (`render-codeblock.html`): Hugo's built-in highlighter (Chroma) with `noClasses = false`, so the output is spans with classes and each theme ships its own token colours. Supports `{hl_lines=[3]}`. Wrapped in `<figure class="code" data-lang="…">` with the language as a caption. Long lines scroll inside the `<pre>`, which Chroma makes focusable.
- **Tables** (`render-table.html`): wrapped in a focusable `.table-scroll` box so wide tables scroll inside it. Alignment uses classes, because the content security policy forbids inline `style` attributes.
- **Headings** (`render-heading.html`): each gets a `#` self-link (`.h-anchor`).
- **Task lists:** `_partials/content.html` gives the checkboxes accessible names; Goldmark has no hook for them.
- **Extras:** footnotes, tables, smart quotes and heading anchors. Raw HTML in Markdown is off (`unsafe = false`).

## The markup contract

Every page type renders the same semantic skeleton, in every theme (`layouts/baseof.html`):

```html
<body>
  <a class="skip" href="#content">Skip to article</a>
  <div class="bar" role="group" aria-label="Design controls">
    <div class="bar-inner">.bar-next (Fresh pack) · .bar-plain</div>
  </div>
  <div class="page">
    <header class="masthead"><!-- site name, nav --></header>
    <main id="content">
      <article class="post">
        <header class="post-head"><!-- h1, date, reading time, tags --></header>
        <div class="post-body"><!-- rendered Markdown --></div>
        <footer class="post-foot"><!-- prev/next, tags --></footer>
      </article>
    </main>
    <aside class="rail rail-a"><!-- related posts, tags, archive --></aside>
    <aside class="rail rail-b"><!-- about blurb, feed link --></aside>
    <footer class="site-foot">site name, .hits (hidden), the theme index link</footer>
    <div class="deco" aria-hidden="true"><span></span><!-- ×8 --></div>
  </div>
  <div class="sr-live" aria-live="polite"></div>
</body>
```

- The rails (`aside` sidebars) hold real, useful content. Themes may hide them, move them or put them centre stage.
- The `.deco` spans are empty hooks for decoration. Anything a theme injects goes inside an `aria-hidden` container.
- Themes rearrange the page with CSS grid. A theme may not change the HTML for itself alone; if it needs a new hook, add it for every theme.
- Decoration comes from the content, never from extra authoring: from the post date (`data-fresh` marks posts under 14 days old at build time), from heading text, from existing blockquotes, from the hit counter.
- Hooks themes can rely on: `.deco` and `.hits` (hidden until a theme shows them), `data-day`, `data-month`, `data-year` and `data-weekday` on post dates (for `content: attr(…)`), `data-fresh` on recent list items, `data-count` on tags, `data-date` on archive entries, `data-lang` on code figures, `html[data-hits]` once the counter answers.

## Theme packages

Themes live in `assets/themes/`, so Hugo's asset pipeline can process them. This is not Hugo's own `themes/` directory, which holds Hugo themes and isn't used here.

```
assets/themes/
  _base/              # layout primitives shared by every theme (not a look)
  _floor/             # tier 2 of RULES.md as CSS; always wins
  _control/           # the smell; dev-only, never shipped
  plain/              # the fallback: no JavaScript, and printing
  <id>/
    theme.yaml
    theme.css
    theme.js          # optional
    fonts/  img/      # made for, or freely licensed to, this project
```

`theme.yaml`:

```yaml
id: <id>               # original; never a brand name (RULES.md tier 1)
name: <Theme name>
front_door: true        # eligible for the first-visit lottery
legible: true           # passes RULES.md tier 2
motion: false           # true if it animates (all of it switched off under reduced motion)
pack: "…"               # private: the source pack's research name; never ships
variant: "…"            # private: which colour or version; pack + variant is unique
sources: [ … ]          # research links; never ships
summary: "…"            # optional: one line for the theme index, with no brand names
smell_exemptions: []    # each with a reason
```

`theme.css` must look like this (`npm run lint` checks it):

```css
@font-face { font-family: "…"; src: url("../themes/<id>/fonts/x.woff2") format("woff2"); }
@keyframes <id>-wobble { … }

@layer theme {
  :root[data-theme="<id>"] {
    /* every rule nested here, using native CSS nesting */
  }
}
```

- Only `@font-face`, `@keyframes` and `@property` may sit outside `@layer theme`. `@keyframes` names start with `<id>-`.
- No `!important`, so the floor always wins.
- `url()` points at files in the theme's own folder, written as `../themes/<id>/…` (they're published next to the CSS bundle), or at `data:` URIs. Never at another site.
- Font files need a licence file beside them.

Decorative text from CSS uses empty alternative text, `content: "…" / ""`, so screen readers skip it.

If `theme.js` exists, it exports `activate(root, api)` and `deactivate(root)`. `deactivate` removes everything `activate` added. Everything a theme script injects carries a `data-ft-deco` attribute and `aria-hidden="true"`; the floor hides `[data-ft-deco]` in the plain theme, so printing never shows it. `api.hits()` returns the hit count once known, and a `ft:hits` event fires on `document` when it arrives. `api.reducedMotion()` says whether to stay still. Theme scripts may not make network requests.

`layouts/_partials/assets.html` builds everything: one CSS bundle (`_base`, every theme, then `_floor`), each theme's script, the inline boot script and the switcher, plus the manifest the browser reads (`<script type="application/json" id="ft-manifest">`). Production builds leave out `_control`.

**Why one bundle:** every theme's CSS is scoped, so loading them all costs only bytes (a few KB each, compressed) and makes switching instant, with no flash of the wrong theme. Fonts and images still load only when a theme uses them. If the bundle ever gets too big, split it; until then, simplicity wins. The CSS isn't minified, because Hugo's minifier doesn't fully understand native nesting.

## Cascade layers

```css
@layer reset, base, theme, floor;
```

`floor` holds tier 2 of [RULES.md](RULES.md): overflow handling, visible focus, the reduced-motion shutdown, and the bar. It always wins, because themes can't use `!important`. Each theme's CSS goes in the `theme` layer.

What the floor locks:
- `html` and `body` take no `filter`, `transform`, `opacity` or blend modes, because those would reach the bar. Put global effects on `.page`.
- The bar is sticky at the top. Its row (`.bar-inner`) runs edge to edge with fixed padding, so Fresh pack sits in the same place in every theme.
- Fresh pack (`.bar-next`) is at least 44×44px and can't shrink, wrap or be hidden. Its accessible name is pinned with `aria-label`; a theme can restyle and decorate it, but its visible text must still read "Fresh pack" (WCAG 2.5.3).
- The theme index link in the footer can't be hidden.

## In the browser

A tiny inline script in `<head>` (`assets/js/boot.js`), allowed by its hash in the CSP, picks the theme before anything is drawn:

1. `?pack=<id>` in the URL → that theme. `?pack=plain` is ignored: readers can't choose the plain theme (F9).
2. A theme was already picked this visit (sessionStorage) → that theme.
3. Otherwise → a random `front_door` theme, saved for this visit.

Then a post's `themes:` front matter can turn the themes off for that page, or limit them.

Every storage read and write is wrapped in try/catch. If storage is blocked, the switcher adds `?pack=<id>` to internal links instead, so the theme survives from page to page.

Without JavaScript, the page keeps the `data-theme="plain"` it was built with, and the bar is hidden. Printing always uses the plain theme. Readers who ask for reduced motion get still versions of the themes.

The switcher (`assets/js/switcher.js`) is a small module, deferred:

- **Fresh pack:**
  - Pulls a tear strip first: a strip with a pull tab runs across the foot of the bar (`.bar-strip`, styled in `_base`, coloured by a theme's `--ft-strip`) for about 0.55 seconds, skipped under reduced motion. Clicks meanwhile are ignored.
  - Deals the next theme from a shuffled deck, kept for the visit.
  - Crossfades to the new theme with the View Transitions API where the browser has it, skipped under reduced motion.
  - Changes `data-theme`, runs the old theme's `deactivate` and the new one's `activate`, and restores the reader's position.
  - Announces the new theme's name in the live region ("Now showing …"). All site copy lives in `data/copy.yaml`.
- **Keeping the reader's place:** before switching, note which block of the article is at the top of the screen and how far into it the reader is. After switching, scroll back to it. Pixel positions don't survive a change of layout, so don't use them.
- **Prefetch:** the next theme in the deck has its script (if any) preloaded when the browser is idle. The CSS is already loaded.
- A post's `themes:` front matter limits the deck or turns it off; with no themes left, the bar says the post stays plain.

## The theme index

`content/designs.md` with `layouts/designs.html` renders `/designs/` from the manifest: every shipped theme but the plain one, its `summary`, and a "Try it" link (`/?pack=<id>`). It shows in whatever theme the reader is using, and every theme's footer links to it. It never names the packs; their names live only in each `theme.yaml`, which never ships.

## Hit counter

- `netlify/functions/hit` plus one Netlify Blobs store, where each key is a page path and each value is a count.
- Code: `netlify/functions/hit/counter.mjs` (the logic, unit-tested with a fake store) and `hit.mjs` (wires in Blobs). Served at `/api/hit`.
- The page makes one `POST` per page per visit (marked in sessionStorage), in every theme, after it has loaded. The body is the page path. The function checks it against the allow-list Hugo generates (`hits-allowlist.json`, copied into the function by the build command), adds one, and returns `{ path, count }`. `GET /api/hit?path=…` reads a count without adding to it. There's no endpoint that lists everything.
- It stores nothing about visitors. Two hits at the same instant may occasionally count as one; that's accepted.
- No theme shows the number yet; whether any does is open. Readers without JavaScript aren't counted.
- The owner reads the totals through the Netlify dashboard or CLI (`netlify blobs:list hits`). Single counts are public anyway, through `GET /api/hit?path=…`.
- `tests/serve.mjs` runs the same logic against an in-memory store, so the counter works in local tests.
- If the site is ever served under a subpath, `config.path` in `hit.mjs` must change to match.

## Netlify

- `netlify.toml` pins `HUGO_VERSION`, sets the build commands (with `-b $URL` or `-b $DEPLOY_PRIME_URL`), and skips dev dependencies on Netlify.
- **Headers** are generated by Hugo into `public/_headers` from `layouts/home.headers`, so the script hash is always right. HTML minification leaves inline JavaScript alone (`[minify] disableJS = true`) for the same reason; `js.Build` has already minified it.
  - Content security policy: `default-src 'self'; script-src 'self' 'sha256-…'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'`.
  - Also `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a restrictive `Permissions-Policy`.
  - Fingerprinted assets (`/css/*`, `/js/*`) get `Cache-Control: public, max-age=31536000, immutable`; theme fonts and images (`/themes/*`) get a week.
- **Credits** (Free plan, as of October 2026; check the current rates):
  - A hard cap of 300 credits a month, shared by every project on the team.
  - Each production deploy costs 15; bandwidth costs 20 per GB; requests cost 2 per 10,000; function compute costs 10 per GB-hour.
  - A first-visit page view of about 400KB costs roughly 0.01 credits, so about 30,000 a month fit. The counter adds about 5%.
- **Budgets:**
  - First visit: about 250KB or less, not counting post images.
  - Bar and switcher JavaScript: about 8KB or less.
  - Each theme's CSS, fonts and assets: about 150KB or less. Every theme's CSS is in the one bundle, so keep theme CSS lean. A theme's fonts load only when it's shown. Full Flavor is a little over (about 170KB of fonts, mostly the display face's two axes); see its journal.
  - Fonts are OFL faces taken from the fontsource npm packages, the Latin subset only, as `woff2`, each with its licence text beside it in `fonts/`.
  - Post images are the biggest lever: resize them, use modern formats, and lazy-load them.
- **Deploys:** Netlify builds every push to main, so batch your work. A push that changes only docs, tests or the agent notes is skipped (the `ignore` command in `netlify.toml`); any doubt, such as a first or clear-cache build, builds. Review themes from the CI screenshot gallery. Before relying on deploy previews, check whether they use credits.

## Testing

Playwright and axe-core, run in GitHub Actions (`.github/workflows/ci.yml`). These are development-only dependencies; nothing from them reaches the site. The theme list comes from the built manifest, so a new theme is tested automatically.

- `scripts/lint-themes.mjs`: the theme package contract above, plus the private pack registry: every pack theme declares `pack:` and `variant:`, no two share both, and no theme's id or name contains its pack's name.
- `scripts/lint-smell.mjs`: known surface tells of the smell (SMELL.md) in everything that ships: smell fonts, Tailwind default colours, frosted glass, gradient text, smell emoji, pills, smell copy. A theme can exempt a rule in `theme.yaml` as `"<rule-id>: <reason>"`.
- `tests/counter.test.mjs`: the hit counter's logic.
- `tests/production.test.mjs`: builds production and checks that `_control` and fixtures don't ship, that no declared pack name appears in the CSS, scripts, theme assets, manifest or theme index, the CSP hash matches the inline script, and there are no third-party assets or inline styles.
- `tests/floor.spec.mjs`: the matrix below.
- `tests/behaviour.spec.mjs`: first visits, the deck, keeping the reader's place, persistence, `themes: false`, no-JS, blocked storage, printing, the theme index, the hit counter. Tests that need two themes skip until two pack themes exist.
- `tests/gallery.spec.mjs`: the screenshot gallery (only with `GALLERY=1`).

The matrix: every theme in the development build (including `_control`, and the plain theme, which the tests switch to the way printing does) × widths of 320, 375, 768 and 1440px × the home page and the kitchen-sink post.

Checks:
- No horizontal overflow (`scrollWidth <= innerWidth`), down to 320px.
- axe: contrast for `.post-body` text and code tokens in tier 2 themes; focus and ARIA rules on the whole page.
- The bar is visible on load and stays at the top, and Fresh pack reads "Fresh pack", with a target of at least 44px.
- With reduced motion emulated, `document.getAnimations()` returns nothing.
- With `forced-colors: active`, the article and Fresh pack stay visible.
- No content security policy violations, page errors or console errors.
- Article content stays inside the article, and the page's regions (masthead, main, sidebars, footer) never overlap.
- Every animation ends within five seconds (WCAG 2.2.2). Tests wait for animations to settle before checking contrast and layout.
- Body text in legible themes is at least 16px, with line height at least 1.4 and lines under about 90 characters.
- Broken internal links and missing alt text fail the build.
- The smell lint (planned) runs over shipped CSS and templates.

The kitchen-sink post (`content/posts/kitchen-sink/`, a draft in production) holds every Markdown feature and the nasty cases:
- an unbroken 60-character URL
- a 4000px-wide image and a very tall one
- a wide table
- code in several languages, including a 200-character line
- inline code inside headings and links
- footnotes, nested lists and long blockquotes

The gallery covers every theme × home, the kitchen sink, a short post and the 404 page × phone and desktop, with `_control` first as the baseline. CI saves it as an artifact named `gallery` for the owner to review.
