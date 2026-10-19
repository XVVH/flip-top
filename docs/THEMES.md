# Themes

*Reviewed by the owner, October 2026. The first three pack themes are built and await review in the gallery.*

## How to make a theme

1. **Pick a pack**, from the candidates below or the owner's own choice.
2. **Study it.** Gather references (the owner's photos, or links to public images; never committed to the repository). Then describe, in words, what you see:
   - **Palette:** each colour, with a hex value matched by eye, and roughly how much of the pack it covers.
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
6. **Register it.** Give the theme an original id and name, and record its source privately in `theme.yaml` as `pack:` and `variant:` (DECISIONS.md F11). Check the catalogue below so it doesn't repeat a pack and variant that's already taken.
7. **Write the study first**, as `docs/themes/<id>.md` from [`themes/_TEMPLATE.md`](themes/_TEMPLATE.md), and get the owner's review before any CSS.
8. **Build, test, and check the gallery** beside `_control`. Run the endorsement test from RULES.md on the screenshots, not just the brief.
9. **Record** what you first picked out as distinctive, what you misjudged, and every place you were tempted to copy rather than signal.

## The template (draft)

How a pack maps onto a page. Every theme fills the same slots, so packs can be compared, and so the reader always knows where things are.

| On the pack | On the page |
|---|---|
| The main colour field and its partner (a red top over white, a white top over blue) | The page ground and the masthead band. The proportion matters: if the pack is a third red, the masthead is roughly a third of the first screen. |
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

## The catalogue

Every theme, built or in study, with its private source. This table and each `theme.yaml` are the registry; neither ships.

| Theme (working id) | Pack | Variant | Status |
|---|---|---|---|
| [`full-flavor`](themes/full-flavor.md) | Marlboro | Red (box) | Built; in review |
| [`menthol-stripe`](themes/menthol-stripe.md) | Newport | Menthol (box) | Built; in review |
| [`sun-cured`](themes/sun-cured.md) | Camel | Filters (box), previous design (cream, brown panels, oval) | Built; in review |

## Candidate packs

Research names only; none of them appears on the site. Notes are what's known before a proper study; "to study" means nothing yet.

| Pack | First notes |
|---|---|
| Marlboro (red) | Studied: see `full-flavor`. |
| Newport | Studied: see `menthol-stripe`. |
| Camel | Studied: see `sun-cured`, which takes the previous design. The current white-and-red box could be a later variant. |
| Lucky Strike | A white field with a red roundel ringed in black; the pack was famously green until the 1940s. |
| Pall Mall | A deep red long pack with a crest and a Latin motto. |
| Benson & Hedges | A gold box. To study. |
| Virginia Slims | A long, slim pack with script lettering. To study. |
| Natural American Spirit | A colour-coded family of flat, saturated packs, each a different colour. The figure is a mark: never. |
| Parliament | To study. |
| Winston | To study. |
| Kool | To study. |
| Salem | To study. |

## The plain theme

`plain` is inherited from Turrible Takes' Not Bad. It's the fallback for readers without JavaScript, and for printing, and never offered as a choice (DECISIONS.md F9). Its journal is in [`themes/plain.md`](themes/plain.md).

## Sources

- CSS Zen Garden (Dave Shea, 2003): one HTML document, many stylesheets.
- The Public Health Cigarette Smoking Act (1970): cigarette advertising left US television and radio from January 1971.
- The Master Settlement Agreement (1998): among much else, the end of tobacco billboards.
- The Family Smoking Prevention and Tobacco Control Act (2009): the ban on "light", "mild" and "low" descriptors, in force from 2010.
- Matthew Butterick, *Practical Typography*; Robert Bringhurst, *The Elements of Typographic Style*: for the article text every theme still has to set well.
- Arnold Wilkins, *Visual Stress* (1995): pattern glare, for striped packs.
