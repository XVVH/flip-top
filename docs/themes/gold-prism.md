# Gold Prism: pack study and journal

*Status: **built; passed the owner's review** (DECISIONS.md F33). The second Chinese pack (DECISIONS.md F27), the laser pack, named Gold Prism by the owner (F29); the owner approved the sheen, the metallic medallion and the typefaces (F30).*

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
| The crystal medallion | Signal | An **empty** round badge breaking the top of the column: a smooth pastel conic gradient (pale blue, lilac, mint, cream, rose) in a gold ring, from the research board's effect sketch, with a soft inner glow. The colours turn with the scroll, at the sheen's rate (one turn per sweep of the rainbow); the glow stays put, so it reads as light moving over metal. Never with anything inside: the emblem is the mark. |
| The red rule | Mirror | Under the masthead, across the column. |
| The hand-lettered wordmark | Mirror the character | The site name and headings in **Kalam** Bold (OFL), red: rounded, chunky handwriting with a slight slant, close in weight to the wordmark's strokes. Handwriting, never a faked brush. |
| The Hei text | Mirror the character | The article in **IBM Plex Sans** (OFL), designed alongside Plex Sans SC, a Hei; navigation, dates and labels in its SemiBold, tracked capitals, like the box's small bold descriptor. |
| The wordmark, the emblem, the registered mark | Leave out | The brand. |
| The warning | Leave out | F13. |

## The page

- **Theme name:** **Gold Prism** (the owner, F29).
- **Id:** `gold-prism`.
- **Site name case:** Chinese has no case; title case, The Smokepit.
- **Template slots:**
  - **Page ground and masthead band:** the foil, edge to edge, fixed behind the page; the column floats on it, with the medallion breaking its top edge.
  - **Site name and headings:** Kalam Bold, red, centred.
  - **Secondary type:** IBM Plex Sans SemiBold, tracked capitals, red or dark brown.
  - **Signature shape:** the medallion; the red rule.
  - **Material:** the holographic foil, the theme's main subject.
  - **Footer and metadata:** inside the column, under a red rule, in tracked capitals.
  - **The article:** IBM Plex Sans, a dark brown-black on the solid pale gold, left-aligned.
- **Motion:** the sheen moves only with the reader: scrolling, and a little with the mouse pointer on a desktop; the medallion with scrolling only. No device tilt: on iPhones it needs a permission prompt, which is close to asking the visitor for input. Under reduced motion it holds still at one angle; under forced colours the foil is hidden. Nothing animates by itself, so the five-second rule doesn't come into it.
- **Tear strip colour:** red.
- **Literal pack parts:** the material, the laser board, is the theme. (F15's "literal parts" are the lid, the foil liner and the tear strip.)
- **Every surface:**
  - **Home:** posts centred in the column, the titles in red, parted by short red rules.
  - **Code blocks:** a deeper pale gold panel with a red rule on the left.
  - **Tables:** tracked-capital headers, gold hairlines.
  - **Links:** red, underlined.
  - **Fresh pack:** red tracked capitals on a solid pale-gold bar, with a red rule under the bar.
- **Legibility plan:** text only on the solid column or the bar. On the column: red 6.2:1, the ink 14.1:1, the dark brown 7.0:1; on the bar, red 5.5:1.
- **Fonts:** about 118KB (Kalam Bold 22KB; IBM Plex Sans roman and italic, variable, 96KB).
- **Endorsement test:** the closest point is the whole look: gold laser board, a round crystal medallion, red Song lettering. It stays on the right side because laser board and lattices are common to many Chinese packs, the textures are generated, the medallion is empty, and there's no wordmark, emblem or calligraphy. The owner judges it.
- **Watch-out:** as with Petal Lace, no chinoiserie: no brush Latin, no lanterns, no clouds or mountains drawn in.

## First instincts

- **A semi-opaque column** (the owner's first idea). Made solid, for the reasons in the table.
- **Device tilt** to drive the sheen, as the pack does in the hand. Scroll and the mouse pointer instead.
- **The name in red on the foil,** as the research board sketched it. Text never sits on the foil.
- **A faceted crystal in the medallion,** hard-edged blue and violet wedges, turning with the pointer as well as the scroll. The owner: "half-baked", and with the foil still under a still mouse it read as a loading spinner. Replaced with the research board's smooth metallic conic, turning with the scroll only.
- **A Song-style serif for the name and a serif for the text** (Shippori Mincho B1 and Newsreader). The owner wanted handwriting for the headings, as the wordmark is hand-lettered, and a sans for the text, as the box's text is Hei. A specimen and a picker in the sketch settled Kalam and IBM Plex Sans, over Zhi Mang Xing (a Chinese brush family: close kin, but a brush face), Caveat (too light), Shantell Sans, Klee One, Gochi Hand, and for the text Noto Sans, Zen Kaku Gothic New and M PLUS 2.
- **A bright yellow gold** from the laser photos. Under even light the board is a dull grey gold; the theme's gold is the lit board, with the rainbow over it.

## Log

- 2026-10-21: Study written from four photos (two the owner's, two from the research board), named Gold Prism by the owner. A specimen settled the faces (Shippori Mincho B1 over Zen Old Mincho, Bodoni Moda, Gloock, Libre Caslon Display and Rozha One); an interactive sketch tried the sheen, the lattice, the medallion and the solid column at desktop and phone width.
- 2026-10-21: The owner approved the sheen. The medallion was half-baked: its faceted crystal followed the mouse while the foil didn't, so it read as a spinner. Replaced with the research board's metallic conic (it lacks the pack's prism facets, but reads as metal), turning with the scroll at the sheen's rate, not with the cursor.
- 2026-10-21: The owner asked for handwriting in the headings and a sans closer to the box's Hei for the text; settled on Kalam and IBM Plex Sans (see First instincts). Approved with the medallion. **Built.** The foil is the markup's decoration layer (`.deco`), fixed behind the page: its first span the gold and the lattice, its second the rainbow, one repeat wider than the screen. The rainbow's stops are in pixels, repeating every 966px along its 105-degree line, which is exactly 1000px across, so the script can wrap the slide with no jump. The body is left transparent so the foil shows; the column is `.page` itself, solid. The medallion is the masthead's `::before` (the turning conic) under its `::after` (the still glint). `theme.js` sets three custom properties, scoped to the elements it moves, on scroll and mouse movement, and removes them on deactivate; it does nothing under reduced motion. Under forced colours the foil and medallion are hidden. All floor tests pass.

- 2026-10-21: **Passed** the owner's review, on the live site (DECISIONS.md F33).

## Open questions

- None.
