# Sun Cured (working name): pack study and journal

*Status: **study, revised with web research, awaiting the owner's review.** No CSS until it's approved. The id and name are working choices; see "The page". **The owner needs to pick which design to study**: the current one, or the previous tan one.*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Camel, the filters box (now sold as "Camel Classic Filters").
- **Two designs:**
  - **Current, since about 2017** ("New look. Classic blend."): a white field inside a brick-red frame, with a blue wordmark. **Recommended** for this study.
  - **Previous:** a cream field, brown panels, the scene inside an oval, a navy wordmark. This is the one the first draft described, and it could be a later variant.
- **The family** (current design): the frame colour changes and the rest stays. Filters is brick red; Blue has a blue frame; Platinum is silver with blue; Silver is mid-grey. Wides still uses the brown and cream design.
- **References** (links only; nothing is committed):
  - A manufacturer carton render of the current design (box): <https://app.warehouserunner.com/costco/165007-camel-classic-filter-king-box>
  - The same design, soft-pack carton: <https://app.warehouserunner.com/costco/165006-camel-classic-filter-king-soft-pack>
  - The 2017 trademark drawing ("New look. Classic blend."): <https://tsdr.uspto.gov/img/87661487/large>, described at <https://trademark.justia.com/876/61/since-1913-camel-blue-turkish-domestic-blend-since-1913-camel-filters-turkish-domestic-87661487.html>
  - The previous box, a flat render: <https://shop.lowesfoods.com/products/camel-filter-box/63734>
  - An older box: <https://commons.wikimedia.org/wiki/File:Camel_filtersbox_rjr.JPG>
  - Stanford's Camel creative history (SRITA): <https://tobacco-img.stanford.edu/wp-content/uploads/2020/03/06212512/camel_creativehistory.pdf>
- **How the research was done** (October 2026, a separate browser session; the full report is [`docs/research/2026-10-first-three-packs.md`](../research/2026-10-first-three-packs.md)): colours were read from decoded image pixels of two carton renders. **No photo of a current pack front was found**, so the pack's own proportions are inferred from the carton and the trademark text (low confidence).

## What's on it (current design)

- **Palette:**

  | Colour | Where | Value | Confidence |
  |---|---|---|---|
  | Brick red | The outer frame | `#97171e` on the front face | high |
  | Off-white | The field | `#eae8e6`–`#efebe8` | high |
  | Royal blue | The wordmark's fill; "HARD PACK" | `#04448e` | high |
  | Blue | The tab breaking the top of the frame, with white text | `#003c8f`–`#01479c` | high |
  | Silver-grey | The wordmark's offset outline | `#9a999d`–`#c1c0c1` | medium |
  | Dark red | "FILTERS" | `#8d2221` | high |
  | Maroon | The blend line | `#713335` | medium |
  | Animal tones | The camel, for the palette only | dark `#a93807`, mid `#cb741e`, light `#eec75f` | high |
  | Gold, sand | The scene's pyramids and ground | `#ebb130`, `#ddd6c5` | medium |

- **Lettering:**
  - **The wordmark** (high confidence for the description, in every version): wide capitals set on an upward arc, a blue fill with a lighter silver-grey offset outline. Calligraphic, uncial-flavoured letterforms: a swashed **C** with a curled terminal, a leaning **A** with a slanted flat-cut apex, an **M** with curved flared legs, a round uncial **E**, an **L** whose tail sweeps down to the right; flared, wedge-like terminals.
  - **Secondary type:** classical serif capitals. "SINCE 1913" in white on the blue tab; "FILTERS" in dark red, lightly tracked; "HARD PACK" (carton) in bold blue; the blend line in small maroon capitals, widely tracked, with a script ampersand.
- **Shapes:** a red frame with small inset corners around the white panel, and a blue tab breaking the top edge of the frame. Wording above the scene, the blend line below. **No oval** in the current design.
- **The scene:** the camel in front of pyramids and palms, in orange, yellow and gold; on the carton it takes about 30% of the front. The camel, pyramid and palm design is a registered mark.
- **Material:** the tear strip, foil and finish weren't found.

## What makes it recognizable

1. **The arched, flared, uncial-like wordmark** in blue with a grey outline. Without the scene, this is what carries it.
2. **The brick-red frame around a white field,** with the blue tab breaking its top.
3. **Blue, brick red and off-white together,** with warm orange and gold inside.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| The frame | Mirror the device | The page's main column sits in a brick-red frame with small inset corners, on the off-white. |
| The blue tab | Signal | A blue tab breaking the top of the frame, holding the post's date in white serif capitals: the page's own "since", never the pack's words. |
| The arched wordmark | Mirror the character, and the arc if it can be done well | The site name in a flared, uncial-flavoured display face, in blue with a silver-grey offset outline (a text shadow). Candidates: Uncial Antiqua and Federant (both OFL). The arc needs either an SVG duplicate of the site name or per-letter rotation, both of which change the markup, so the first build sets it straight and the arc is a later question. Never the wordmark's letters. |
| Classical serif capitals | Mirror the character | Dates, tags and labels in a Trajan-like face: Cinzel (OFL). Headings in a bold Scotch or Clarendon-style serif: Libre Caslon Display or Libre Bodoni Bold (OFL). |
| Dark red and maroon | Mirror | Section labels in dark red; the smallest tracked labels in maroon. |
| The animal's warm tones | Signal | A thin orange-and-gold rule inside the frame, as the only warm note. |
| The scene | Leave out | A registered mark: no animal, no pyramids, no palms. |

## The page

- **Theme name** (shown to readers), for the owner to choose:
  - descriptive: **Sun Cured**, after the sun-cured oriental tobacco in Turkish blends; tobacco vocabulary, not the brand's
  - or a faux brand in the same register (an animal of the desert), for example **Oryx**. Check it isn't a real tobacco brand before using it.
- **Working id:** `sun-cured`.
- **Site name case:** THE SMOKEPIT, in capitals, like the wordmark.
- **Template slots:**
  - **Page ground and masthead band:** off-white everywhere; the masthead sits inside the top of the frame.
  - **Site name and headings:** the uncial-flavoured display face in blue for the site name; the Scotch-style bold serif in blue for headings.
  - **Secondary type:** Cinzel capitals, dark red or maroon.
  - **Signature shape:** the frame with its inset corners; small: inset-corner boxes for quotes and code.
  - **Material:** none.
  - **Footer and metadata:** inside the bottom of the frame, maroon tracked capitals.
  - **The article:** an old-style serif in a near-black blue on off-white. Candidates: Libre Caslon Text or EB Garamond (OFL).
- **Tear strip colour:** blue, or the frame's red (the pack's own strip wasn't found).
- **Literal pack parts:** none.
- **Every surface:**
  - **Home:** each post in a small inset-corner frame, title in the bold serif.
  - **Code blocks:** in an inset-corner box with a thin red rule, near-black on a slightly darker off-white; tokens in blue, dark red and dark gold.
  - **Tables:** hairline red rules, Cinzel headers.
  - **Images:** inside a thin red frame.
  - **Links:** blue (7.7:1 on the off-white), underlined.
  - **Fresh pack:** white serif capitals on the blue tab colour (9.5:1).
- **Legibility plan:** blue, dark red and maroon all clear 7:1 on the off-white. The uncial display face goes only on the site name; headings use the bold serif, which reads at a glance.
- **Endorsement test:** without the scene, the risk is low. The frame and tab are generic devices, the tab holds the post's date, and the name is the site's own. The real risk is the wordmark style: an uncial on an arc in blue with a grey outline is very close to the brand's look, so the arc waits until the straight version has been judged.
- **A watch-out from the first draft, still relevant:** the old pack's imagery is a 1913 fantasy of the "exotic" Middle East. The current design is calmer, but the theme still avoids arches, arabesques and "oriental" ornament.

## First instincts

- **Drawing pyramids and palms in CSS.** The registered mark, even drawn from scratch. Ruled out.
- **A tan page.** From memory of the old pack; the current one is white in red.
- **Brown lettering.** From the same memory; it's blue.

## What the research corrected

The biggest corrections of the three:

- **The pack was redesigned around 2017.** The draft described the previous design (and some of it wrongly): the current box is a white field in a brick-red frame, not a tan field.
- **The wordmark is blue with a grey outline,** not brown, and it's an arched, flared, uncial-flavoured style, which the draft couldn't describe at all.
- **There's no oval** in the current design.
- **The blend line is maroon,** close to the draft's guess of red.
- The draft's working name, Sun Cured, was chosen for the tan; it still works as tobacco vocabulary.

## Log

- 2026-10-19: Study written for the owner's review.
- 2026-10-19: Revised with the owner's web research (above). Recommended the current design.

## Open questions

- **Which design:** current (recommended) or previous? The registry can hold both later, as separate variants.
- The theme name: descriptive or faux brand?
- The arc on the site name: worth a markup change, after the straight version is judged?
- A photo of a current pack front would confirm the proportions.
