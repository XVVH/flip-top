# Roundel: pack study and journal

*Status: **built; awaiting the owner's review.** The first pack of phase 4, studied from the owner's reference images (DECISIONS.md F24); the owner approved the study and named it Roundel (F25).*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Lucky Strike.
- **Variant studied:** **the white soft pack**, the roundel design. The pack was green until the 1940s, when it turned white with the roundel on both faces; the owner's three images span that design from an early pack to a recent one, and it has barely changed.
- **References:** three images the owner supplied in October 2026, described here in words and not committed (RULES.md):
  - a recent US soft pack held in a hand, in its cellophane, with a blue tax stamp: the roundel's outer ring and the lettering in a **navy** black, the gold ring an olive gold, and "IT'S TOASTED" in quotation marks
  - a flat scan of a soft pack, front on, with a pale blue stamp: the clearest view of the layout and the colours; the lettering and outer ring in black
  - an early pack, flattened, showing both faces and the side panels: the roundel on both faces, its middle ring a broad grey-khaki, the red slightly orange; a side panel of small italic script copy and a small round emblem with a headdressed figure; "LUCKY STRIKE" in tracked capitals on the bottom panel
- **How the colours were read:** pixels sampled from the images. The flat scan is the most reliable; the photo in the hand has a strong blue cast, and the early pack has aged to cream. Medium confidence, with the scan's values preferred.

## What's on it

- **Palette:**

  | Colour | Where | Value | Images read |
  |---|---|---|---|
  | White | The field, most of the face, and the ring between the red and the gold | `#fbfaf7` | scan `#f4e2d3` and early pack `#fae2d3` (both aged); the recent pack is a clean white |
  | Red | The disc, and the stripes at the top and bottom | `#d4151d` | scan disc `#d5040d`, stripes `#d12635`–`#d70a13`; early pack `#d71503`, more orange |
  | Olive gold | The middle ring | `#93855a` | scan `#7e6f3d` (printed gold); early pack a grey khaki `#a1916f`; recent pack olive |
  | Navy black | The outer ring and the lettering | `#1d2535` | recent pack `#243a58`–`#253755` under a blue cast; scan and early pack a true black |
  | Pale blue | The tax stamp | | not the design |

- **Lettering:**
  - **The wordmark:** two stacked lines of heavy, moderately condensed sans-serif capitals, a gothic with slightly softened corners (ink spread on the early pack), set tight and centred in the red disc. Navy or black on red.
  - **The descriptor** ("CIGARETTES"): thin geometric capitals, round C, G and O, very widely tracked (about half an em), centred just above the bottom stripe.
  - **"IT'S TOASTED":** small capitals under the wordmark, in red-on-red or black. A slogan.
  - **The early side panel:** small connecting italic script copy.
- **Shapes** (from the flat scan, as fractions of the front face):
  - **The roundel:** centred, its middle about 49% from the top; **87% of the face's width**. From the outside in: a navy-black ring (6% of the radius), the olive-gold ring (6.5%), a white ring (11%), then the red disc (76% of the radius). The early pack's grey ring is far broader, about a quarter of the radius.
  - **The stripes:** a red band across the top (about 2.5% of the face's height, 6% down); a doubled red stripe across the bottom (two lines with a hair of white between), about 93% down. The recent pack doubles the top one too.
  - **Symmetry:** everything centred; the two faces are identical.
- **Proportion:** mostly white. The roundel fills the middle; the stripes and the descriptor are thin. Nothing else.
- **Material:** printed paper, matt, under cellophane. No foil on the face.

## What makes it recognizable

1. **The roundel:** a red disc ringed in white, olive gold and navy black, centred on a white face.
2. **Heavy condensed gothic capitals,** stacked and centred.
3. **The white field with thin red stripes** at the top and bottom, and the widely tracked thin capitals.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| White field | Mirror | The page ground, and plenty of it. |
| The roundel | **Signal** | The rings in the pack's order and proportions (red, white, olive gold, navy), centred at the top of the page but **cropped by the page's top edge**, so only the lower part shows under the bar, hanging over the site name. Never the whole circle, and never with anything inside it. |
| Heavy condensed gothic | Mirror the character | The site name, on one line, and the headings, in **Francois One** (OFL), navy black, capitals. Never the wordmark's letters. |
| Red stripes | Mirror | The bar ends in the red band; the foot of the page ends in the doubled stripe. A short doubled stripe is the section break. |
| Tracked thin capitals | Mirror the character | Navigation, dates, labels and the footer in **League Spartan** (OFL), tracked about 0.3em. |
| Symmetry | Mirror | The masthead, post heads and home list are centred, like the face; the article text stays left-aligned. |
| "IT'S TOASTED" | Leave out | A slogan. |
| The tax stamp | Leave out | The government's, not the design (as F13). |
| The early side panel's emblem | Leave out | A mark, and a caricature. |
| The early side panel's script | Leave out | It's the side, not the face. |

## The page

- **Theme name:** **Roundel**, the shape (the owner, F25; Burley, tobacco vocabulary, was the alternative).
- **Id:** `roundel`.
- **Site name case:** THE SMOKEPIT, in capitals, like the wordmark.
- **The cropped roundel:** an in-flow decoration at the top of the masthead, `min(80%, 520px)` wide and square, drawn with one radial gradient in the pack's ring proportions, pulled up by about 62% of its width and clipped at the masthead's top edge, under the bar's red band, so a little under 40% shows. It scales with the width, so a phone gets the same shape smaller. No script.
- **Template slots:**
  - **Page ground and masthead band:** white; the bar is white above the red band; the cropped roundel hangs below it.
  - **Site name and headings:** Francois One, navy black, capitals, centred.
  - **Secondary type:** League Spartan, tracked capitals: navigation in red (underlined), dates and labels in navy.
  - **Signature shape:** the cropped roundel; red discs as list bullets.
  - **Material:** none.
  - **Footer and metadata:** tracked capitals, centred, above the doubled red stripe at the very foot of the page.
  - **The article:** **Libre Franklin** (OFL), a revival of the American gothic the pack's lettering belongs with, navy black on white, left-aligned.
- **Tear strip colour:** the olive gold.
- **Literal pack parts:** none.
- **Every surface:**
  - **Home:** each post centred: the title in Francois One capitals, the date in tracked capitals, parted by a short doubled red stripe.
  - **Code blocks:** a slightly warmer white (`#f1efe9`) with a red rule on the left; tokens in navy, red and a dark olive.
  - **Tables:** tracked-capital headers, navy hairlines.
  - **Images:** plain.
  - **Links:** red `#b3121a`, underlined (6.7:1).
  - **Fresh pack:** navy tracked capitals on the white bar, underlined in navy.
- **Legibility plan:** navy black on white 14.7:1; the article ink `#232a38` 13.8:1; link red 6.7:1. The pack's red `#d4151d` (5.1:1) is for the stripes and the disc, not for text. The olive gold (3.5:1) never carries text. Nothing is ever set on the roundel.
- **Fonts:** about 104KB (Francois One 18KB, League Spartan 24KB, Libre Franklin roman and italic 62KB).
- **Endorsement test:** the closest point is the cropped roundel, in the pack's own colours and ring order, centred over the name. It stays on the right side because the roundel is never whole and never holds a word, the name below it is the site's own in a different face, and there's no slogan, stamp or emblem. The owner judges it.

## First instincts

- **The site name inside the red disc,** ringed like the pack. That's the mark itself with another word in it. Ruled out.
- **The roundel pushed off centre and cropped by the right edge,** by analogy with Full Flavor's off-centre step. In the mock it made the page lopsided, losing the pack's symmetry, and on a phone it had nowhere to go but behind the name. Rejected for the hanging crop.
- **Oswald for the gothic,** the web's default condensed gothic. Francois One is closer to the scan: heavier, wider and softer at the corners. League Gothic and Antonio are too narrow.
- **Black for the lettering.** The recent US pack is navy black; navy keeps it, and still reads as black.
- **The green pack.** It's the famous history, but not on any of the images; a later variant.

## Log

- 2026-10-20: Study written from the owner's three images, for the owner's review. A specimen settled the faces; a mock compared two ways of signalling the roundel (hanging from the top edge, or cropped by the right edge) and chose the first.
- 2026-10-20: The owner approved the study as written and chose the name Roundel. **Built.** The rings are one radial gradient on `.masthead::before`, sized and pulled up in the same percentage of the masthead's width so they scale together, and clipped by the masthead (`overflow: clip`) right under the bar's red band; the mock had let them ride up over the bar and Fresh pack on a phone. The doubled foot stripe is `body::after`, the page's full width; a short copy of it is the section break and parts the home list. Fixes from the screenshots: on a phone the navigation dropped "Feed" onto a line of its own and "4 min read" broke in two, so below 480px the tracking tightens, and dates and reading times never wrap inside themselves. All floor tests pass.

## Open questions

- The owner's review, on the live site or in the gallery.
