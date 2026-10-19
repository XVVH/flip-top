# Full Flavor (working name): pack study and journal

*Status: **study, revised with web research, awaiting the owner's review.** No CSS until it's approved. The id and name are working choices; see "The page".*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Marlboro, the red box.
- **Variant studied:** Red, US king box (flip-top). The family is colour-coded: Red; Gold (formerly Lights; an olive gold roof); Menthol (an emerald green roof); Silver (not found in the US). Lights and Ultra Lights became Gold and Silver when the 2009 Tobacco Control Act banned those descriptors from 2010.
- **References** (links only; nothing is committed):
  - A flat, front-on US pack, 2010 (geometry and lettering): <https://commons.wikimedia.org/wiki/File:Marlboro_cigarette_pack_(2010)_from_US_duty-free_shop_without_any_warnings_etc._(edited,_white_background).jpg>
  - A current US pack beside an EU one, 2024 (the gold tear strip): <https://commons.wikimedia.org/wiki/File:German_and_American_Marlboro_Red.jpg>
  - An open pack, 2024 (lid, inner frame, foil): <https://commons.wikimedia.org/wiki/File:Open_Pack_of_Marlboro_Reds_(American).jpg>
  - A manufacturer carton render (the cleanest colour): <https://app.warehouserunner.com/costco/165709-marlboro-red-king-box>
  - Logo history and typefaces: <https://logos.fandom.com/wiki/Marlboro>
  - US Reg. 938,510, the "Red Roof" design, red and gold claimed: <https://tsdr.uspto.gov/statusview/rn0938510>
  - US Reg. 1,038,989 (the gold Lights version), the clearest written description of the layout: <https://trademarks.justia.com/724/30/marlboro-lights-filter-cigarettes-lowered-tar-nicotine-veni-vidi-72430003.html>
- **How the research was done** (October 2026, a separate browser session; the full report is [`docs/research/2026-10-first-three-packs.md`](../research/2026-10-first-three-packs.md)): colours were read from decoded image pixels, not screenshots. Each value is checked across a photo and a manufacturer render where possible.

## What's on it

- **Palette:**

  | Colour | Where | Value | Confidence |
  |---|---|---|---|
  | Red | Roof, sides, bottom band | `#c41e2a`, a slightly blue-leaning signal red (photo corrects to about `#be0c12`; render `#ca2332`–`#cf262f`) | medium-high |
  | Off-white | The chevron field, the pill | `#e9e7e3`, neutral to warm, not paper-bright | medium |
  | Charcoal | The wordmark | `#323b43`, a cool charcoal, not black | medium |
  | Gold | Crest; tear strip | metallic foil; `#c9a85e` as a flat stand-in, shading to `#b18641` and up to `#f3eaae` | medium that it's foil |
  | Medallion red | The crest's oval, with white "PM USA" | about `#aa463b` | medium |
  | Dark khaki | "20 CLASS A CIGARETTES" | about `#6b6b55`; not red | low |

- **Lettering:**
  - **The wordmark** (seen, high confidence): mixed case, upright, very condensed and very high contrast. Heavy stems, near-invisible hairlines, flat unbracketed hairline serifs: a didone. Tall ascenders (about 1.45 times the cap height) and an x-height about 0.7 of the cap height; a double-storey **a** with a small tear terminal, a flagged **r**, an **M** with thin left strokes and heavy right ones. It spans about 90% of the face's width. Logopedia: the 1955 pack wordmark is "Onyx (modified)". The standalone logo since 1977, and the carton, use a wider modified Contact; that's not the pack.
  - **Secondary type** (high confidence): "FILTER CIGARETTES" and "20 CLASS A CIGARETTES" in a geometric sans, all capitals, very widely tracked (about +200 to +300), regular to medium weight, round C, G and O, a pointed A.
- **Shapes** (measured from the front-on photo, as fractions of the front face, lid included):
  - **The roof:** a symmetric white chevron cut into the red, peaked at the centre. The peak is about 17% from the top; the boundary meets the sides about 48% from the top; each side slopes about 43° from horizontal, so the apex is nearly a right angle.
  - **The pill:** a white lozenge with fully rounded ends, about 75% of the width, near the top, with "FILTER CIGARETTES" in red.
  - **The crest:** centred, about 39% of the width, just below the lid seam (about 31% from the top), inside the white chevron.
  - **The foot:** the small khaki line at about 94%, then a red band, then a white sliver at the very bottom edge.
- **Material:** a hard flip-top box. Gold tear strip, silver foil liner, metallic gold crest. The board's finish can't be seen through the cellophane.

## What makes it recognizable

1. **Red with a white chevron cut into it, peaked at the centre, steep.** The single strongest element.
2. **The condensed didone wordmark,** striped by its heavy stems, in charcoal on off-white.
3. **Restraint:** red, off-white and charcoal, with small touches of gold.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| Red and off-white, in the pack's proportion | Mirror | The page ground is the off-white. The red holds the top of the first screen. |
| The roof | Signal | The red band ends in an angled edge at the pack's slope (about 43°), but not as a centred symmetric chevron: a single diagonal, or a peak pushed well off centre. To settle in the gallery. |
| The condensed didone | Mirror the character | A freely licensed condensed, high-contrast didone for the site name and headings, in charcoal. Candidates to compare in a specimen: Noto Serif Display at its narrowest width and heaviest weight (OFL; it has a real width axis), and Bodoni Moda Black (OFL; not condensed, so it's the fallback). Never Onyx, and never the wordmark's letters. |
| Mixed case | Mirror | The site name reads "The Smokepit", in title case like the wordmark. |
| Wide-tracked geometric capitals | Mirror the character | Dates, tags, navigation and labels in Jost (OFL), regular or medium, capitals tracked about +0.2em. |
| Charcoal, not black | Mirror | `#323b43` for headings and the site name; the article ink is a near-black in the same cool family. |
| Gold | Signal | A thin foil hairline (a CSS gradient) where the red meets the off-white, and the tear strip. Nowhere else. |
| The pill, the crest, the medallion | Leave out | Parts of the registered design. (A pill shape is also the smell's own badge, which makes leaving it out easy.) |
| The foot: red band and white sliver | Signal | The footer closes with a thin red band and a sliver of off-white below it. |
| The flip-top box | Possible experiment | See "Literal pack parts". |

## The page

- **Theme name** (shown to readers), for the owner to choose:
  - descriptive: **Full Flavor**, the counter term for any brand's red pack
  - or a faux brand in the same register (an English place name under a crest), for example **Ashcombe**. Check it isn't a real tobacco brand before using it.
- **Working id:** `full-flavor`.
- **Site name case:** The Smokepit, in title case. (The first draft said capitals; the wordmark is mixed case.)
- **Template slots:**
  - **Page ground and masthead band:** off-white page; a red band across the top of the first screen with an angled lower edge and a gold hairline along it.
  - **Site name and headings:** the condensed didone in charcoal, on the off-white, just below the red.
  - **Secondary type:** Jost capitals, widely tracked.
  - **Signature shape:** the 43° angle, small: list markers and section breaks as short angled strokes.
  - **Material:** gold foil on the hairline, the tear strip and focus rings only.
  - **Footer and metadata:** tracked capitals on the off-white; the red band and white sliver at the very bottom.
  - **The article:** a text serif with moderate contrast in the same family as the display face (Noto Serif), near-black on off-white.
- **Tear strip colour:** gold (`#c9a85e`), as on the pack.
- **Literal pack parts:** the candidate testbed. The brand introduced the flip-top box in 1955 and the repository is named after it: the red band could open like the lid when Fresh pack is pressed, showing a sliver of silver foil. The owner decides.
- **Every surface:**
  - **Home:** each post title in the display face under a short angled red rule; dates in tracked capitals.
  - **Code blocks:** charcoal on a slightly darker off-white, with a red rule on the left; tokens in charcoal, red and khaki.
  - **Tables:** hairline charcoal rules, tracked-capital headers.
  - **Images:** plain, full column width.
  - **Links:** red, underlined: `#c41e2a` on `#e9e7e3` is 4.8:1, just above AA, so links stay at body size or larger.
  - **Fresh pack:** off-white on red (5.9:1 for white), in tracked capitals.
- **Legibility plan:** near-black and charcoal text on the off-white (charcoal 9.2:1). Red only for links, rules and the band. Gold never carries text: it's 2.6:1 on red.
- **Endorsement test:** the closest point is the red band with an angled edge over the off-white, with a condensed didone beneath it. It stays on the right side because the roof isn't the centred chevron, there's no pill, crest or wordmark, the name in that face is the site's own, and the page isn't laid out like the face of the pack.

## First instincts

- **Playfair Display Black for the wordmark.** It's the editorial smell's display serif (SMELL.md), and it isn't condensed. Replaced with condensed didone candidates.
- **The roof as a centred chevron.** Copying the mark. The study signals the angle instead.
- **Gold everywhere,** for "premium". The pack uses gold on the crest and the tear strip only.

## What the research corrected

The first draft was written from memory and search summaries. The research session (October 2026) found:

- **The wordmark is mixed case, not capitals,** so the site name is title case. The draft assumed capitals because the brand's logo is so often written that way.
- **It's charcoal, not black,** and the white is a warm off-white, not bright.
- **The secondary type is a wide-tracked geometric sans,** which the draft didn't know at all.
- **The roof's geometry:** a 43° slope, peak at 17%, sides at 48%. The draft guessed "steep".
- **The foot:** a red band and a white sliver, with khaki (not red) small print.
- The draft's "modified Onyx" was right for the pack, but the standalone logo is a different face.

## Log

- 2026-10-19: Study written for the owner's review.
- 2026-10-19: Revised with the owner's web research (above).

## Open questions

- The theme name: descriptive or faux brand?
- Is this the testbed for the lid?
- The display face: compare the candidates in a specimen before building.
