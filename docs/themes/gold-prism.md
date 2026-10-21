# Gold Prism: pack study and journal

*Status: **study, for the owner's review.** The second Chinese pack (DECISIONS.md F27), the laser pack, named Gold Prism by the owner. Studied from the owner's two photos and the research board's two.*

*Brand names belong here, in the study, and nowhere that ships, in any script.*

## The pack

- **Pack** (research name only): 黄山 (Huángshān, "Yellow Mountain"), the 新制皖烟 ("newly made Anhui cigarettes") hard box, China Tobacco Anhui.
- **Variant studied:** the hard box in holographic gold laser board (镭射卡纸).
- **References:** four photos, described here in words and not committed (RULES.md):
  - the owner's: the front in a hand, the laser at full strength, with a watermark across the medallion; the clearest view of the triangle lattice on the body and of the crystal hologram in the medallion
  - the owner's: the front flat on a table in even light, with almost no rainbow: what the board looks like under the sheen
  - the research board's two (`docs/research/2026-10-china-packs.md`): the front in warm light (the sheen moves to pink and green), and tilted (the lattice, the medallion, the rainbow sweep)
- **How the colours were read:** pixels sampled from the owner's two photos; the rainbow by grouping the laser photo's pixels into hue bands. A hologram has no single colour, so these are ranges. Medium confidence for the gold and the red; the rainbow is a sample of one tilt.

## What's on it

- **Palette:**

  | Colour | Where | Value | Photos read |
  |---|---|---|---|
  | Gold, lit | The board where the light catches it | `#d4be78` | laser photo `#ddc16e`; even light, lit side `#d9d7b8` |
  | Gold, flat | The board in even light, without the sheen | `#b5ad86` | `#b0aa82`–`#bbb189`: a dull grey gold |
  | The rainbow | The sheen, sweeping across the board as it tilts | coral `#be7b62`, gold `#ddc16e`, yellow-green `#c0c782`, green `#6bbb81`, teal `#64baa8`, sky `#5a9fb5`, blue `#4b649f`, rose `#b55b64` | the laser photo, by hue band |
  | Crystal | The medallion's hologram | blue and violet facets, `#4d74c8` to `#dfe9ff`, with lilac; silver `#cdcfd0` in even light | both photos |
  | Red | The wordmark, the rule across the body, the warning | `#a8232f` for text (the pack's `#bb3441`, darkened for reading) | laser `#bb3441`; even light `#875341`–`#8a4f3d` |
  | Black-brown | The small descriptor under the wordmark | `#2a200c` | even light |

- **Lettering:**
  - **The wordmark (黄山):** red brush calligraphy across the lid, with a registered mark. The brand's name.
  - **The descriptor (新制皖烟):** small black Hei (sans) characters under it.
  - **The warning:** red Song (宋体, serif) characters, centred, on the lower third.
- **Shapes:**
  - **The lid and the body** both in the laser board.
  - **The lattice:** a fine micro-emboss of equilateral triangles in rows, over the lid and the upper two thirds of the body; the lower third, under the warning, is smoother.
  - **The medallion:** a circle in the middle of the body, ringed in gold, holding a cooler hologram: triangular facets in blue, violet and silver that sparkle differently from the field, under a red emblem.
  - **The red rule:** a thin line across the body, about two thirds down, between the medallion and the warning.
- **Material:** holographic laser board. One wide rainbow sweeps across the gold as the pack tilts (pink, then gold, green and cyan), and the lattice breaks it into glints.

## What makes it recognizable

1. **The whole face is holographic gold:** one wide rainbow that moves as it tilts.
2. **The fine triangle lattice** in the foil.
3. **The round crystal medallion,** a cooler hologram than the field, with red Song text and a red rule beneath.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| The holographic gold | Mirror the material | The page's background: gold, the lattice, and a wide rainbow laid over them in an overlay blend. The rainbow slides as the reader scrolls, and a little with the mouse pointer; it never moves on its own. Drawn with CSS gradients on the markup's decoration layer (`.deco`), with a few lines of theme script setting the offset. |
| The lattice | Mirror, low contrast | An SVG tile of 12px triangles, lit and shaded at low contrast over the gold, everywhere on the foil, and never behind text (RULES.md: fine patterns low in contrast). |
| A place for the text | **Solid** | The owner's idea: the foil as the background, with a column for the text on top. The column is **solid** pale gold, edged in a thin gold rule. Not semi-opaque: with a blur it's the frosted glass of the AI look (SMELL.md, and the lint flags it); without one, the rainbow moving behind the words changes their contrast as you scroll. |
| The crystal medallion | Signal | An **empty** round badge at the top of the column, ringed in gold, holding a faceted blue and violet "crystal" (a conic gradient) that turns slightly as you scroll. Never with anything inside: the emblem is the mark. |
| The red rule | Mirror | Under the masthead, across the column. |
| Red Song text | Mirror the character | The site name and headings in **Shippori Mincho B1** (OFL), ExtraBold, red: a Mincho (Song-style) family whose Latin is a sturdy, high-contrast serif. Never a brush face. |
| The small descriptor | Mirror the character | Navigation, dates and labels in Shippori Mincho B1 SemiBold, tracked capitals, dark brown. |
| The wordmark, the emblem, the registered mark | Leave out | The brand. |
| The warning | Leave out | F13. |

## The page

- **Theme name:** **Gold Prism** (the owner, F29).
- **Id:** `gold-prism`.
- **Site name case:** Chinese has no case; title case, The Smokepit.
- **Template slots:**
  - **Page ground and masthead band:** the foil, edge to edge, fixed behind the page; the column floats on it, with the medallion breaking its top edge.
  - **Site name and headings:** Shippori Mincho B1 ExtraBold, red, centred.
  - **Secondary type:** Shippori Mincho B1 SemiBold, tracked capitals, dark brown.
  - **Signature shape:** the medallion; the red rule.
  - **Material:** the holographic foil, the theme's main subject.
  - **Footer and metadata:** inside the column, under a red rule, in tracked capitals.
  - **The article:** **Newsreader** (OFL), a dark brown-black on the solid pale gold, left-aligned.
- **Motion:** the sheen moves only with the reader: scrolling, and the mouse pointer on a desktop. No device tilt: on iPhones it needs a permission prompt, which is close to asking the visitor for input. Under reduced motion it holds still at one angle; under forced colours the foil is hidden. Nothing animates by itself, so the five-second rule doesn't come into it.
- **Tear strip colour:** red.
- **Literal pack parts:** the material, the laser board, is the theme. (F15's "literal parts" are the lid, the foil liner and the tear strip.)
- **Every surface:**
  - **Home:** posts centred in the column, the titles in red, parted by short red rules.
  - **Code blocks:** a deeper pale gold panel with a red rule on the left.
  - **Tables:** tracked-capital headers, gold hairlines.
  - **Links:** red, underlined.
  - **Fresh pack:** red tracked capitals on a solid pale-gold bar, with a red rule under the bar.
- **Legibility plan:** text only on the solid column or the bar. On the column: red 6.2:1, the ink 14.1:1, the dark brown 7.0:1; on the bar, red 5.5:1.
- **Fonts:** about 136KB (Shippori Mincho B1 SemiBold and ExtraBold 65KB; Newsreader regular, italic and semibold 71KB).
- **Endorsement test:** the closest point is the whole look: gold laser board, a round crystal medallion, red Song lettering. It stays on the right side because laser board and lattices are common to many Chinese packs, the textures are generated, the medallion is empty, and there's no wordmark, emblem or calligraphy. The owner judges it.
- **Watch-out:** as with Petal Lace, no chinoiserie: no brush Latin, no lanterns, no clouds or mountains drawn in.

## First instincts

- **A semi-opaque column** (the owner's first idea). Made solid, for the reasons in the table.
- **Device tilt** to drive the sheen, as the pack does in the hand. Scroll and the mouse pointer instead.
- **The name in red on the foil,** as the research board sketched it. Text never sits on the foil.
- **A bright yellow gold** from the laser photos. Under even light the board is a dull grey gold; the theme's gold is the lit board, with the rainbow over it.

## Log

- 2026-10-21: Study written from four photos (two the owner's, two from the research board), named Gold Prism by the owner. A specimen settled the faces (Shippori Mincho B1 over Zen Old Mincho, Bodoni Moda, Gloock, Libre Caslon Display and Rozha One); an interactive sketch tried the sheen, the lattice, the medallion and the solid column at desktop and phone width.

## Open questions

- The sheen: does it read as the laser board, and is the movement on scroll comfortable?
- The medallion: keep it, or let the foil and the red carry the pack alone?
