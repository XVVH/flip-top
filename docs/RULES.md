# Rules

Four tiers. Trade dress and the floor are permanent. Legibility applies to every theme. Everything else is fair game.

## 1. Trade dress (every theme, forever)

A theme evokes a pack; it never claims to be one. Breaking any of these is a bug, whatever the theme.

- **No brand names, logos, wordmarks, slogans or marks** in anything that ships: page text, theme names and ids, alt text, CSS, file names, metadata. That includes marks with no words, such as a pack's crest, its animal or its chevron.
- **No pack artwork in the repository**, not even as a reference: no photos, scans, logo files or traced outlines. Journals describe packs in words and link to sources.
- **Lettering is never redrawn.** Choose a freely licensed typeface with the same character as the pack's lettering: weight, width, contrast, serif style, case, spacing. Never trace, redraw or rebuild a wordmark, letter by letter or as an image.
- **Signal, don't copy.** An element may echo a mark's geometry (an angle, a band, a proportion, a placement) but must not be the mark: not its outline, and not the mark's shape in the mark's colours in the mark's place. The owner's example: an angled element that nods to a chevron "roof" without being the roof.
- **Don't lay the page out as the pack's face.** The whole arrangement of a pack (these colours, in these zones, with these shapes) is its trade dress. Take the distinctive elements and arrange them for a page.
- **Faux brands are invented.** A theme named as a made-up brand (DECISIONS.md F16) never uses a sound-alike, pun, anagram, abbreviation or translation of the real brand, and never puts its own name in the place or style of the real wordmark.
- **The endorsement test:** would a reader think the brand made, sponsored or approved the page? If so, pull back. The goal is "that reminds me of…", never "that's their site".
- **Health warnings are left out entirely** (DECISIONS.md F13). The subject is brand design.
- Brands may be named in the docs, the journals and each theme's private `pack:` field, none of which ships. The lint and a production test check this (DECISIONS.md F11).

## 2. Never (every theme, forever)

Inherited unchanged from Turrible Takes. Breaking any of these is a bug. Automated tests enforce as many as they can (see [ARCHITECTURE.md § Testing](ARCHITECTURE.md#testing)).

**Layout and reading**
- No sideways page scrolling at any width down to 320px (WCAG 1.4.10). Long URLs, wide images and tables wrap, shrink or scroll inside their own box. Code blocks scroll inside the block, never the page.
- No hidden or truncated article content. Anything collapsible is open by default.
- Zoom is never disabled, text is always selectable, and 200% zoom still works.

**Motion and patterns**
- Nothing flashes more than 3 times a second (WCAG 2.3.1).
- Anything that moves for more than 5 seconds can be paused (WCAG 2.2.2).
- With `prefers-reduced-motion: reduce`, nothing moves at all.
- No large areas of fine, high-contrast stripes, checks or other repeating patterns. They cause pattern glare and headaches, and can trigger seizures in pattern-sensitive readers (Arnold Wilkins, *Visual Stress*, 1995). Some packs are striped; keep stripes broad, or low in contrast, or small.

**Hostility**
- No popups, modals, overlays, interstitials or "click to enter" pages.
- No autoplaying sound or video.
- No scroll hijacking, back-button tricks or forced new tabs.
- No fake buttons, fake close icons, or anything that pretends to be something it isn't at the reader's expense.
- Nothing that tracks or fingerprints visitors, or collects anything a visitor types.

**Navigation and controls**
- Links can be told apart from body text.
- Keyboard focus is always visible.
- The bar is always present at the top, reachable by keyboard, and Fresh pack is a tap target of at least 44×44px. Themes may restyle Fresh pack, but never hide, shrink or move it, and its visible text always reads "Fresh pack".
- The theme index link in the footer is never hidden.
- Every other link and button is a target of at least 24×24px, or spaced so it counts as one (WCAG 2.5.8).
- A control's visible text is contained in its accessible name, because speech-input users say what they see (WCAG 2.5.3).

**Screen readers**
- Every theme presents the identical article to assistive technology. All decoration and injected text is `aria-hidden`.
- Decorative text made with CSS has empty alternative text, `content: "…" / ""`, so it isn't read aloud.
- Theme changes are announced in a live region, which is never visible.

**Content and assets**
- Images keep their alt text and captions in every theme.
- Fonts have free licences (OFL or similar) and are self-hosted. System fonts are used via `local()` or a font stack, with a free look-alike as the fallback, because many phones don't have them.
- Decorative art (textures, foil, shapes) is made for this project, in CSS or SVG, never taken from packs, archives or commercial libraries.
- No third-party requests of any kind.

## 3. Legibility (every theme)

Every theme is easy to read, however strong its palette.

- Body text and code tokens meet WCAG AA contrast (4.5:1) against whatever is actually behind them. Large display text meets 3:1.
- Body text is at least the equivalent of 16px, with a line height of at least 1.4.
- Body lines stay under about 90 characters.
- Body text is set in something that can be read at length. A pack's display lettering goes on the site name, headings and chrome, not on paragraphs.

## 4. Fair game

Everything else: a pack's colours, as close as the eye can match them; the character of its lettering; its proportions and bands; materials such as foil, embossing and gloss, done in CSS; shapes that signal its marks; the feel of its small print.

- **Be specific.** "Red" isn't a brief. "The top panel's red, meeting white along a steep angle, with a gold hairline where they meet" is.
- **Where the pack doesn't decide, still choose.** Spacing, link styles, code blocks and tables all need choosing in the pack's spirit. The default AI look ([SMELL.md](SMELL.md)) isn't a neutral answer.

## When fixing things

- Fix the bug in the theme's own idiom. Don't tidy, harmonize or modernize anything else.
- If a fix would change how the theme reads as its pack, ask the owner first.
