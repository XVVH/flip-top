# Themes

*Reviewed by the owner, October 2026. Eight pack themes are built, from five US packs and three Chinese (DECISIONS.md F27). The owner supplies each pack's reference images.*

## How to make a theme

1. **Pick a pack**, from the candidates below or the owner's own choice.
2. **Study it from the owner's reference images** (DECISIONS.md F24; see "What to send" below). They're never committed to the repository, and they don't outlive the session, so the study has to record everything they show: describe each image in words, and measure the colours from its pixels. Then describe, in words, what you see:
   - **Palette:** each colour, with a hex value measured from the images' pixels (more than one image where you can: photos carry casts), and roughly how much of the pack it covers.
   - **Lettering:** the wordmark's character (serif or sans, weight, width, contrast between thick and thin strokes, case, spacing), the secondary type, and the freely licensed typeface closest to each in character.
   - **Shapes:** bands, angles, crests, borders, roundels, and their proportions.
   - **Material:** foil, embossing, gloss or matte, the tear strip.
   - **Proportion:** how the face is divided, what sits at the top, how much is empty.
   - **The family:** the colour code across its variants (red, gold, silver, menthol green), if it has one.
3. **Rank what makes it recognizable.** Usually two or three elements: the ones without which it isn't that pack anymore. They're what the theme carries. Everything else is optional.
4. **Decide each element's treatment:**
   - **Mirror:** palette, the character of the lettering, materials, proportions.
   - **Signal:** marks and signature shapes, echoed in geometry but never reproduced ([RULES.md](RULES.md#1-trade-dress-every-theme-forever)).
   - **Leave out:** names, logos, wordmarks, slogans, figures and health warnings.
5. **Map it to the template** below.
6. **Register it.** Give the theme an original id and name, and record its source privately in `theme.yaml` as `pack:` and `variant:` (DECISIONS.md F11), with any other spellings of the pack's name (pinyin, a Latin wordmark) as `pack_also:` (F28). Check the catalogue below so it doesn't repeat a pack and variant that's already taken.
7. **Write the study first**, as `docs/themes/<id>.md` from [`themes/_TEMPLATE.md`](themes/_TEMPLATE.md), with a mock of the page at desktop and phone width, and a specimen of the candidate typefaces against a crop of the pack's lettering. For anything that moves, make an interactive sketch the owner can scroll, not a still. Get the owner's review before any CSS.
8. **Build, test, and check the gallery** beside `_control`. Run the endorsement test from RULES.md on the screenshots, not just the brief. Finished, tested themes go to main (F32); the owner's final review is on the live site.
9. **Record** what you first picked out as distinctive, what you misjudged, and every place you were tempted to copy rather than signal.

## What to send

For each pack, the owner sends a few images; more angles beat more of the same one.

- **The front, straight on:** flat, evenly lit, no glare, nothing cropped. A flat scan, a straight-on photo or a manufacturer's render. This is where the layout and the proportions come from.
- **The variant, named:** which colour or version it is, and **which era**, if the pack has had more than one design. "The old design" can mean more than one thing (F21).
- **A close-up of the lettering:** the wordmark and the small type, sharp enough to see the letterforms.
- **A second source for the colours**, ideally: a photo and a render disagree in useful ways, and both drift under cellophane and lighting.
- **Anything distinctive off the front:** the sides, the back, the lid open, the foil, the tear strip, if the pack is known for them.

## The template

How a pack maps onto a page. Every theme fills the same slots, so packs can be compared, and so the reader always knows where things are.

| On the pack | On the page |
|---|---|
| The main colour field and its partner (a red top over white, a white top over blue) | The page ground and the masthead band, echoing the pack's proportion, but decoration above the article is never taller than the title block, so a post starts near the top of the first screen (Petal Lace). |
| The wordmark's lettering | The site name and headings, in a display face with the same character. The site name takes the wordmark's case too: THE SMOKEPIT, The Smokepit or the smokepit (DECISIONS.md F17). |
| The secondary lettering (the descriptor line, the small capitals) | Dates, tags, navigation, labels |
| The signature shape, signalled (an angle, a band, a roundel, a crest's outline language) | The masthead's edge, dividers, list markers, the theme controls |
| Material (foil, embossing, gloss) | Accents, sparingly: rules, the site name, focus and hover states |
| The side panel and small print | The footer and post metadata |
| *(nothing; packs have no body copy)* | The article: a readable text face in the pack's register, with ink and paper from its palette, meeting tier 3 |

What doesn't change between themes: the markup, the floor, the theme controls' position and behaviour, and the article's readability.

**Variants** of one pack (red, gold, silver, menthol) are separate themes, each registered with its own `variant:` (DECISIONS.md F11).

**How literal.** By default a theme borrows the pack's language and doesn't draw the pack. Literal parts (the lid, the foil liner, the tear strip) are an area of investigation: one theme at a time can try them, and its journal says what worked (DECISIONS.md F15).

**Names.** A theme is named either descriptively, from its core elements, or as a faux brand, a made-up name standing in for the real one (F16). A faux brand has to be invented, not a sound-alike or pun of the real brand, and the lint rejects a name that contains its pack's name.

## Lessons so far

What the first eight themes taught, most of it from the owner's reviews. Each journal has the detail; the technical gotchas are in ARCHITECTURE.md ("Notes from building themes").

**References**

- **Get the owner's picture before writing a word.** A pack with more than one "old" design is easy to misread from a description (Sun Cured, F21).
- **A carton or a flat render can beat a pack photo.** Night Gilt's carton showed the colours, the texture and the medallion more clearly than any pack.
- **Measure colours in more than one image.** Photos carry casts (blue in Roundel's hand photo, yellow-green in Sun Cured's), and lighting changes a texture's contrast (Night Gilt's studs: 2.8:1 on the carton, 1.7:1 on the pack).

**Lettering**

- **Match the lettering's class exactly:** sans, serif, script or handwriting. A face halfway between reads wrong to the owner even when its slope and strokes are right (Philosopher, for Green Marble's sans small caps).
- **Look at what the lettering really is.** Virginia Slims' "script" was sloped small capitals; 黄山's text is a Hei, not a Song.
- **Show close calls on the page.** A specimen against a crop of the pack narrows the field; a picker in a sketch lets the owner decide (Gold Prism).
- **Hand-lettered wordmarks call for real handwriting faces,** never Latin letters dressed as brush strokes ("chop suey" lettering).

**Shapes and figures**

- **Redraw a figure as another subject in the same manner.** The pack's illustration is left out, but a different subject drawn its way can stand in: a peach blossom for 钻石 荷花's lotus, a camellia for 芙蓉王's flower. Avoid flowers with national, political or mourning associations (plum blossom, chrysanthemum) and flowers another pack or theme already uses. Used so far: peach blossom (Petal Lace), camellia (Night Gilt).
- **An empty signature shape reads as a placeholder.** Night Gilt's empty medallion "looks like an album without anything in the middle".
- **Faithful proportion can cost the reader.** Petal Lace's yellow band, as tall as the pack's, pushed posts down the page; decoration above the article stays within the title block's height.
- **Keep the page out of a template's habits.** Dark violet with gold is generic "premium"; red and gold slides toward a Lunar New Year template; a Chinese pack invites chinoiserie (lanterns, clouds, brush Latin). Keep to what the pack itself does.

**Motion**

- **Judge motion live, never from stills.** Full Flavor's lid and Gold Prism's sheen both read differently in a browser than in screenshots.
- **Motion follows the reader.** Gold Prism's sheen and medallion move with the scroll and stop when the reader stops; nothing moves on its own.
- **Parts that move together read as one material.** A part that moves by itself reads as a widget: Gold Prism's first medallion followed the mouse while the foil stood still, and looked like a loading spinner.
- **Leave Fresh pack's motion alone.** It already has the tear strip and the crossfade; a third motion is awkward (Full Flavor's lid, F23).

**Material and texture**

- **Generate the material.** SVG noise, tiles and engraving carry a material without pack artwork: Green Marble's marble, Gold Prism's foil, Night Gilt's studs and guilloche.
- **Keep fine textures faint,** around 1.5:1 against their ground (RULES.md, pattern glare), and check text against a texture's brightest point.
- **Text sits on something solid.** Over a busy or moving material, the text's place is solid, not semi-opaque: semi-opaque with a blur is frosted glass, the AI look's, and without one the contrast shifts as the material moves (Gold Prism, F29).

## The catalogue

Every theme, built or in study, with its private source. This table and each `theme.yaml` are the registry; neither ships.

| Theme (working id) | Pack | Variant | Status |
|---|---|---|---|
| [`full-flavor`](themes/full-flavor.md) | Marlboro | Red (box) | Built; passed review |
| [`menthol-stripe`](themes/menthol-stripe.md) | Newport | Menthol (box) | Built; passed review |
| [`night-gilt`](themes/night-gilt.md) | 芙蓉王 (Furongwang) | 软蓝 soft blue | Built; in review |
| [`gold-prism`](themes/gold-prism.md) | 黄山 (Huangshan) | 新制皖烟 hard box, laser | Built; in review |
| [`petal-lace`](themes/petal-lace.md) | 钻石 荷花 (Zuanshi Hehua) | Hard box | Built; in review |
| [`green-marble`](themes/green-marble.md) | Virginia Slims | Menthol (slim box), the classic green marble design | Built; in review |
| [`roundel`](themes/roundel.md) | Lucky Strike | White soft pack (the roundel design) | Built; passed review |
| [`sun-cured`](themes/sun-cured.md) | Camel | Classic yellow (soft pack) | Built; passed review (the first build took a later hard box and failed) |

## Candidate packs

Research names only; none of them appears on the site, in any script. Notes are what's known before a study, from memory, and unverified until the owner's images arrive. "What it would test" is the part of the template the first three didn't lean on.

| Pack | First notes | What it would test |
|---|---|---|
| Marlboro (red) | Built: `full-flavor`. Gold (olive gold roof) and Menthol (green roof) are the family's other colours. | Variants (F11): the same structure in another colour. |
| Newport | Built: `menthol-stripe`. The non-menthol pack is red. | Variants. |
| Camel | Built: `sun-cured`, the classic yellow pack. The later hard box (cream, brown panels, oval) and the current white-and-red box could be variants. | Variants, and two designs of one pack side by side. |
| Lucky Strike | Built: see `roundel`. The green pack, before the 1940s, could be a later variant. | A single central emblem as the whole identity, signalled without being the target. |
| Pall Mall | A deep red long pack with a crest and a Latin motto, in gold. | Heraldry signalled through its outline language; a long pack's tall proportion. |
| Benson & Hedges | A gold box. | Material as the ground: a metallic field under the whole page, and text on it. |
| Virginia Slims | Built: see `green-marble`, the classic green box. The script turned out to be only the monogram; the Ultra Lights box (blush, paisley, five stripes) could be a later variant. Its famous slogan is a slogan: never. | A material, the marble, generated; a slim proportion as a narrow column. |
| Natural American Spirit | A colour-coded family of flat, saturated packs, each a different colour. The figure is a mark, and a caricature: never. | A family: several variants from one structure. |
| 钻石 荷花 (Zuanshi Hehua, China) | Built: see `petal-lace`. The owner's pick (F27): green, cream and green bands, a lace-like dotted petal repeat on the lid, a painted pink flower on cream. `docs/research/2026-10-china-packs.md`. | A printed pattern in a band; a painted flower, redrawn as another. |
| 芙蓉王 软蓝 (Furongwang, soft blue, China) | Built: see `night-gilt`. The owner's pick (F27): dark violet-navy with a diamond micro-texture, gold, a central medallion (the mark). | The first dark theme; a fine texture under the whole page. |
| 黄山 新制皖烟 (Huangshan, China) | Built: see `gold-prism`. The owner's pick (F27): all-over holographic gold board with a rainbow sheen and a fine triangle lattice. | Holographic material: a sheen that moves, behind a solid reading column. |
| Parliament | To study. | |
| Winston | To study. | |
| Kool | To study. | |
| Salem | To study. | |

## The plain theme

`plain` is inherited from Turrible Takes' Not Bad. It's the fallback for readers without JavaScript, and for printing, and never offered as a choice (DECISIONS.md F9). Its journal is in [`themes/plain.md`](themes/plain.md).

## Sources

- CSS Zen Garden (Dave Shea, 2003): one HTML document, many stylesheets.
- The Public Health Cigarette Smoking Act (1970): cigarette advertising left US television and radio from January 1971.
- The Master Settlement Agreement (1998): among much else, the end of tobacco billboards.
- The Family Smoking Prevention and Tobacco Control Act (2009): the ban on "light", "mild" and "low" descriptors, in force from 2010.
- Matthew Butterick, *Practical Typography*; Robert Bringhurst, *The Elements of Typographic Style*: for the article text every theme still has to set well.
- Arnold Wilkins, *Visual Stress* (1995): pattern glare, for striped packs.
