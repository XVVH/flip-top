# Sun Cured: pack study and journal

*Status: **built; passed the owner's review** on the live site (DECISIONS.md F24). The first build failed the owner's gallery review: it studied the wrong design. This study takes the classic yellow pack, from the owner's own photos, and the owner approved it (DECISIONS.md F21).*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Camel.
- **Variant studied:** **the classic yellow pack**, the soft pack in Filters and non-filter. An early pack the owner also sent has a different layout but the same yellow and the same arched wordmark, so those two have lasted for decades. The family is told apart by a descriptor word ("FILTERS" under the wordmark; "CIGARETTES" at the foot of the non-filter pack), not by colour.
- **References:** three photos the owner supplied in October 2026, described here in words and not committed (RULES.md: no pack artwork in the repository):
  - an early pack, flattened: the face between two columns, with the wordmark, the scene, the blend line and "CIGARETTES"; side panels with small print and a vertical "CHOICE QUALITY"; a silver foil band across the bottom
  - a Filters soft pack in its cellophane, with a blue tax stamp at the top
  - a non-filter soft pack, front on, with the stamp
- **How the colours were read:** pixels sampled from the owner's photos. The photos carry cellophane glare and colour casts (yellow-green on one, warm on another), so the values are medium confidence and judged by eye against the photos.

## What's on it

- **Palette:**

  | Colour | Where | Value | Photos read |
  |---|---|---|---|
  | Butter yellow | The top of the face | `#f3e3a0` | `#e9e595`, `#dbbe73` (under casts) |
  | Sand gold | The lower face, deepening toward the foot | `#e9c460` | `#e4c94a`, `#f1c16d`; the early pack's sand `#d79827` |
  | Maroon | The thin bands at the top and bottom, the frame line, the early pack's columns | `#6b2a2a` | `#682d3b`, `#5e281f` |
  | Silver blue-grey | The wordmark's fill | `#b4bdcc` | `#aeaba7` on the flat scan; bluer by eye |
  | Navy | The wordmark's outline; "FILTERS" and "CIGARETTES" | `#222b4a` | `#141a16`–`#3e3835` (dark under the casts; navy by eye) |
  | Umber | The blend line | `#6a4407` | `#6d4601`, `#583506`, `#70541a`: the closest agreement of any colour |
  | Rust | The animal | `#7a2814` | `#761e0f` |

- **Lettering:**
  - **The wordmark,** the same in all three photos across many decades: wide, heavy capitals with flared, swashed terminals: a **C** whose top curls in, a leaning **A** with a flat apex, an **M** with splayed, curving outer legs, a round **E** with curled ends, an **L** with a long sweeping tail. Set on an **upward arch**, in a **pale silver blue-grey fill inside a navy outline**.
  - **The descriptor** ("FILTERS", "CIGARETTES"): wide Roman capitals with flared serifs, navy, centred.
  - **The blend line** ("TURKISH & DOMESTIC BLEND"): bold Roman capitals in umber, on two centred lines, with a **curly calligraphic ampersand**.
  - Everything on the face is centred.
- **Shapes:** the face is a **rounded-corner panel** inside a thin maroon frame line, with **maroon bands** across the top and bottom edges. The early pack frames its face with two Egyptian columns instead.
- **The colour field:** pale butter yellow at the top **deepening to sand gold** toward the foot, the light of the scene's sky over its sand.
- **The scene:** the animal before pyramids and palms, on a sand horizon. A registered mark.
- **The tax stamp:** blue, at the top of the soft packs. A government stamp, not the design.
- **Material:** printed soft paper under cellophane; the early pack has a silver foil band.

## What makes it recognizable

1. **The arched wordmark:** heavy swashed capitals on an arch, silver blue-grey inside a navy outline.
2. **Butter yellow deepening to gold.**
3. **The framing:** maroon edges around a rounded yellow face, with umber Roman capitals, everything centred.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| Butter yellow deepening to gold | Mirror | The page ground: butter yellow at the top of the page, deepening to sand gold at the foot. One gradient down the whole page, the pack's own (not the smell's gradient habit: here the pack decides it). |
| Rounded face in a maroon frame | Mirror the structure | Maroon behind everything. The bar sits on the maroon at the top; the page sits on a rounded yellow panel inset a few pixels, with a double hairline inside its edge (maroon, yellow, maroon); the footer sits on the maroon below it. |
| The arched wordmark | Mirror the character | The site name in **Cinzel Decorative Black** (OFL), capitals, on an upward arch, silver blue-grey inside a navy outline. Never the wordmark's letters, and never its word. |
| Navy descriptor, umber blend line | Mirror the character | **Alegreya SC** (OFL), bold capitals: dates and labels in umber; the navigation in navy. Centred. Its curly ampersand is the same kind as the pack's. |
| Rust | Mirror the colour | Links, underlined. The colour isn't the mark; the animal is. |
| The scene | Leave out | No animal, pyramids, palms or sand horizon. |
| The blend line's words | Leave out | "TURKISH & DOMESTIC" never appears; only the style of its lettering does. |
| The tax stamp | Leave out | Like the health warnings (F13), it's the government's, not the design. |
| The early pack's columns and side panels | Leave out | They belong to the same 1913 fantasy as the scene (see the watch-out). |

## The page

- **Theme name:** Sun Cured, kept (F20): sun-cured oriental tobacco, and now the sunlit yellow too.
- **Id:** `sun-cured`.
- **Site name case:** THE SMOKEPIT, in capitals, like the wordmark.
- **The arch:** drawn by a small theme script (`theme.js`, ARCHITECTURE.md). It adds an arched copy of the site name as SVG text on a curve, marked `data-ft-deco` and `aria-hidden="true"`, and sizes it to fit the curve at every width. The real link text stays in the page as the link's name, for screen readers, search and copying; it's hidden visually only while the arched copy is present. Before the script runs, the name shows straight, in the same outlined colours. Under forced colours, the arched copy takes the system colours.
- **Template slots:**
  - **Page ground and masthead band:** the yellow-to-gold panel on maroon; the masthead is the arched name, centred.
  - **Site name and headings:** Cinzel Decorative Black for the site name only; headings in Alegreya ExtraBold, navy, post titles centred.
  - **Secondary type:** Alegreya SC bold capitals: umber for dates and labels; navy for the navigation.
  - **Signature shape:** the rounded face and its double hairline; the arch.
  - **Material:** none.
  - **Footer and metadata:** butter-yellow Alegreya SC capitals on the maroon below the panel.
  - **The article:** Alegreya (OFL, variable), a dark brown-black on the yellow, left-aligned.
- **Tear strip colour:** butter yellow, across the maroon bar.
- **Literal pack parts:** none.
- **Every surface:**
  - **Home:** posts on the yellow, titles in navy, dates in umber capitals, separated by short umber rules.
  - **Code blocks:** a paler butter panel (`#f8eebf`) with a thin maroon rule; tokens in navy, umber and rust.
  - **Tables:** umber hairlines, Alegreya SC headers in navy.
  - **Images:** a thin maroon frame.
  - **Links:** rust, underlined.
  - **Fresh pack:** butter-yellow Alegreya SC capitals on the maroon bar.
  - **Section breaks:** a short double hairline, the frame's.
- **Legibility plan:**

  | Text | On the butter yellow (top) | On the sand gold (foot) |
  |---|---|---|
  | Article ink `#3a2410` | 11.3:1 | 8.7:1 |
  | Navy `#222b4a` | 10.8:1 | 8.3:1 |
  | Rust links `#7a2814` | 7.6:1 | 5.9:1 |
  | Umber `#6a4407` | 6.7:1 | 5.1:1 |

  Butter yellow on the maroon is 8.2:1. The silver fill never carries text alone (1.5:1 on the yellow): it's always inside the navy outline (7.3:1 against the fill).
- **Fonts:** about 133KB (Cinzel Decorative Black 15KB, Alegreya SC Bold 31KB, Alegreya roman and italic 87KB), under the 150KB budget.
- **Endorsement test:** the risk is higher than the first build's, on purpose: the arched, outlined capitals on the yellow are the pack's strongest element, and the first build failed for leaving them out. It stays on the right side because the word is the site's own, the typeface isn't the wordmark's, and there's no animal, scene, blend line or stamp. The page reads as a blog called The Smokepit that was set in the pack's lettering. The owner judges it in the gallery.
- **Watch-out:** the pack's imagery is a 1913 fantasy of the "exotic" Middle East: the scene, and on the early pack, the columns, domes and minarets on the side panels. Reaching for any of it would be a costume and a caricature at once. The theme keeps to the colour, the frame, the arch and the lettering.

## First instincts

- **Drawing pyramids and palms in CSS.** The registered mark, even drawn from scratch. Ruled out (first study, still true).
- **Elsie Swash Caps for the site name.** In the specimen it's the closest in weight and has the round E, but its K reads as an R: "SMOREPIT". Cinzel Decorative keeps the swashed, flared capitals and reads cleanly at phone width.
- **A sand horizon line** across the page as a divider. It's part of the scene. Left out.
- **Keeping Libre Caslon for the article.** It's fine, but Alegreya and Alegreya SC are one family, and the SC's ampersand is the pack's kind.

## The first build, and why it failed

The first build (October 19, 2026) studied a different design: a later hard box, described by the research session from a manufacturer render, with a cream field, broad brown panels at the top and bottom, a navy wordmark and the scene inside a vertical oval. Its colours came from a screenshot and were low confidence. The theme was a cream page with a rose-brown bar, a brown footer, the site name in Federant, solid navy and straight, Cinzel capitals, the date in an oval medallion, and pale-gold corner brackets. It passed every test and failed the owner's eye: compared with the owner's photos, nearly every element was wrong.

| Element | The first build | The classic pack |
|---|---|---|
| Ground | Flat pale cream `#f2e7c9` | Butter yellow deepening to sand gold |
| Site name | Federant, narrow and light, solid navy, straight | Heavy swashed capitals, silver blue-grey inside a navy outline, on an arch |
| Signature shape | The oval medallion | No oval at all; a rounded face in a maroon frame |
| Panels | A rose-brown bar and a broad brown footer | Thin maroon bands and a frame line |
| Secondary type | Cinzel, sharp inscriptional capitals, small and tracked | Sturdier flared Roman capitals with a curly ampersand, umber and navy |
| Corners | Corner brackets, standing in for arabesques | None on the classic pack |

**Where it went wrong:**

- **"The old design" was ambiguous,** and I didn't ask for a picture. The research had found the hard box that came before the 2017 redesign and called it "the previous design"; when the owner said they preferred the old Camel design, I took it to mean that one. The owner meant the classic yellow pack, the one people picture. *Lesson:* when a pack has had more than one "old" design, get the owner's picture before writing the study.
- **The study was written from words, not pictures.** Every element the owner recognizes on sight (the yellow, the arch, the outlined lettering) was missing, and the elements the theme was built around (the oval, the cream, the brown panels) aren't in the design they meant.
- **The wordmark's character is its treatment more than its letterforms.** The first study tried to match "uncial-flavoured" with a typeface, set it solid, and postponed the arch "to judge the straight version first". The arch and the outline are what make it recognizable.

## Other designs, for later variants

- **The hard box the first build studied** (before about 2017): a cream field, brown panels at the top and bottom, the scene inside a vertical oval with a brown ring, a navy wordmark. Colours, low confidence: cream about `#f2e7c9`, pale gold ornaments `#d8c28d`, brown `#7b4025`, rose brown `#8b5544`, gold panel text `#e2c583`–`#eed99b`, navy about `#2a335e`. Reference: <https://shop.lowesfoods.com/products/camel-filter-box/63734>
- **The current design** (since about 2017): a white field `#eae8e6` inside a brick-red frame `#97171e` with small inset corners; a blue tab `#003c8f`–`#01479c` breaking the top of the frame; the wordmark in royal blue `#04448e` with a silver-grey offset outline; "FILTERS" in dark red `#8d2221`; the blend line in maroon `#713335`. High confidence, from two manufacturer renders.
- Both from the research session: [`docs/research/2026-10-first-three-packs.md`](../research/2026-10-first-three-packs.md).

## Log

- 2026-10-19: Study written for the owner's review.
- 2026-10-19: Revised with the owner's web research; recommended the current design.
- 2026-10-19: The owner chose the previous design; study rewritten around the hard box the research described. Colours low confidence.
- 2026-10-19: Built: Federant, Cinzel, Libre Caslon Text; the oval medallion; corner brackets. All floor tests passed.
- 2026-10-20: **Failed the owner's gallery review.** The owner sent three photos of the pack they meant, the classic yellow one. Compared against the build (above), and restudied from the photos. A specimen settled the faces: Cinzel Decorative Black for the arched name, Alegreya SC and Alegreya for the rest.
- 2026-10-20: The owner approved the study. **Rebuilt.** Maroon behind everything; the page is a rounded panel (a `::before` on `.page`) that runs butter yellow to sand gold, with a maroon line inset 7px from its edge, and stops short of the footer, which sits on the maroon below it at a fixed height. The arch is the project's first theme script: an SVG copy of the name on a quadratic curve, fitted to 94% of the curve's length once the face loads, `data-ft-deco` and `aria-hidden`; the link keeps its own text, at zero size while the arch shows. Under forced colours the arch is hidden and the plain name shows. Fixes from the screenshots: the tagline is tucked into the hollow under the arch, as the descriptor sits on the pack, but only from 720px up (on a narrow phone it ran into the ends of the arch); Alegreya's old-style figures made a 0 in tables read as an o, so tables use lining figures. All floor tests pass, and the arch is removed when Fresh pack deals another theme.
- 2026-10-20: The tagline is gone from every theme (DECISIONS.md F22), so the navigation takes its place in the hollow under the arch, from 720px up.
- 2026-10-20: **Passed the owner's review**, on the deployed site.

## Open questions

- On a phone the arched name is about the size of a post title. It can't grow without running past the edges: the letter size is set by fitting twelve letters across the width, and a flatter arch makes them smaller, not larger. A steeper arch would make them larger, but further from the pack's.
