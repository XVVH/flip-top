# Menthol Stripe: pack study and journal

*Status: **built; passed the owner's gallery review** (DECISIONS.md F21). Its closeness to the pack is accepted for now and judged in the gallery (DECISIONS.md F20).*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Newport.
- **Variant studied:** the classic Menthol Box. The family uses the same structure (white top, gold rule, lined field) in other colours: the non-menthol pack in red, Menthol Gold and Menthol Blue with stripes thicker at the top, Platinum in silver and blue.
- **References** (links only; nothing is committed):
  - A flatbed scan of crushed Menthol Box packs, 2008 (stripe structure): <https://commons.wikimedia.org/wiki/File:Scan_of_Newport_cigarettes_found_in_Olneyville,_Rhode_Island_-_2008.jpg>
  - A manufacturer carton render (the cleanest colour): <https://app.warehouserunner.com/costco/165309-newport-menthol-king-box>
  - A soft pack, 2010: <https://commons.wikimedia.org/wiki/File:Newport_cigarettes.jpg>
  - Stanford's Newport overview (SRITA), on the brand's colours in advertising: <https://tobacco-img.stanford.edu/wp-content/uploads/2020/03/06212300/newport-1.pdf>
  - US Reg. 1,191,816, the "NEWPORT" design mark (first used 1956): <https://tsdr.uspto.gov/statusview/rn1191816>
  - The green non-menthol box's description (white top, gold stripe, lined field, spinnaker): <https://trademarks.justia.com/852/04/newport-85204231.html>
- **How the research was done** (October 2026, a separate browser session; the full report is [`docs/research/2026-10-first-three-packs.md`](../research/2026-10-first-three-packs.md)): colours were read from decoded image pixels, not screenshots, and checked across a scan and a manufacturer render where possible.

## What's on it

- **Palette:**

  | Colour | Where | Value | Confidence |
  |---|---|---|---|
  | Off-white | The top panel | `#edece8`, faintly warm | medium |
  | Gold | The rule between the white and the stripes; the spinnaker's outline | `#b18d4a` | medium |
  | Light teal | The field between the lines, and a plain band under the gold rule | `#01a59c` | high for the hue |
  | Dark teal | The lines | `#00293f` at the top, deepening to `#001d20` at the bottom | medium-high |
  | Wordmark teal | "Newport" | `#033937`, a very dark teal that reads almost black-green | medium |

- **Lettering:**
  - **The wordmark** (high confidence for the description): mixed case, upright, a heavy grotesque sans of normal to slightly wide proportions, tightly spaced; a pointed **w**, an **e** with a horizontal terminal. Close commercially to Helvetica Bold or Neue Heavy.
  - **Secondary type:** "MENTHOL BOX" in white bold sans capitals, low on the stripes.
- **Shapes:**
  - **The proportion:** the white top takes about 30% of the face, then the gold rule, then the striped field for the remaining 70% (medium-low; the packs seen were crushed or angled).
  - **The stripes** (high confidence): one hue family, bright light teal with dark teal lines; no white between them, and no alternating blue and green. The pitch is constant, and only the lines' thickness changes: the dark line takes about a third of each pitch at the top, holding for roughly the upper half, then grows to about 80–85% near the bottom, so the field reads as nearly solid dark teal at the foot. A short plain band of light teal sits under the gold rule before the lines begin. About 35–40 lines on the face.
  - **The spinnaker:** a white swoosh outlined in gold, lower right, about a quarter of the width. A mark.
- **Orange:** not on the menthol pack. It's the brand's advertising colour (Stanford: green and fluorescent orange were its signature colours in ads), and appears in one 2019 registered design not seen on a pack.
- **Material:** silver foil. The tear strip and the board finish weren't seen.

## What makes it recognizable

1. **The lined field darkening downward:** constant pitch, thickening lines, light teal to almost-solid dark teal.
2. **The off-white top with a heavy grotesque in mixed case,** in near-black teal.
3. **The thin gold rule** between the two.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| Off-white top, lined field below | Mirror the order | The page is the pack's order, top to bottom: an off-white masthead and article, and the lined field rising in the lower part of the page to an almost solid dark-teal footer. |
| The lined field | Mirror, carefully | Constant pitch, thickening lines, built from a few bands of `repeating-linear-gradient` with stepped line shares (about 33%, 33%, 45%, 60%, 82%). See the pattern-glare plan below. |
| The plain band under the gold rule | Mirror | A short solid light-teal band before the lines start. |
| The gold rule | Mirror | A thin gold rule under the masthead, and again where the lines begin. |
| Heavy grotesque, mixed case | Mirror the character | The site name and headings in a freely licensed heavy grotesque. Candidates: TeX Gyre Heros Bold (GUST Font License; a Helvetica-style grotesque) and Archivo Bold or ExtraBold (OFL). Not Inter, which the research suggested: it's the smell's own font, and the lint would flag it. |
| Near-black teal | Mirror | `#033937` for the site name, headings and article ink. |
| White bold capitals on the lines | Mirror the character | Labels set on the dark end of the field (the footer) in white bold capitals. |
| The spinnaker | Leave out | A mark, and a curved swoosh reads as one too easily. |
| Orange | Leave out | It isn't on the pack. (The first draft used it for the tear strip.) |

## The page

- **Theme name** (shown to readers), for the owner to choose:
  - descriptive: **Menthol Stripe**
  - or a faux brand in the same register (a seaport, sailing), for example **Westerly**. Check it isn't a real tobacco brand before using it.
- **Working id:** `menthol-stripe`.
- **Site name case:** The Smokepit, in title case, like the mixed-case wordmark.
- **Template slots:**
  - **Page ground and masthead band:** off-white; the masthead ends in the gold rule.
  - **Site name and headings:** the heavy grotesque in near-black teal.
  - **Secondary type:** the same family, bold capitals, white on the dark field or teal on off-white.
  - **Signature shape:** the lined field, in the lower part of the page and the footer; small: a three-line rule of thickening lines as a section break.
  - **Material:** none; silver foil only if the lid is ever tried.
  - **Footer and metadata:** the dark end of the field, with white text on almost-solid dark teal (15:1).
  - **The article:** the grotesque's text weights, or a plain serif if the sans tires at length, in near-black teal on off-white (10.8:1).
- **Tear strip colour:** gold, matching the rule (a guess; the pack's strip wasn't seen).
- **Literal pack parts:** none by default.
- **Pattern-glare plan** (RULES.md tier 2): the lines are dark teal on light teal at about 4.9:1, so they count as high contrast. Glare peaks around three cycles per degree, which at normal reading distance is a pitch of roughly 12–15 CSS pixels, so the pack's own pitch, scaled to a screen, would land close to the worst. The page keeps the pitch broad (at least 24px), keeps the lines out of the first screen and away from all text, and lets the field turn solid quickly toward the footer, which removes the contrast where the area is largest.
- **Every surface:**
  - **Home:** posts on the off-white, separated by single gold rules.
  - **Code blocks:** near-black teal on a pale tint of the light teal, tokens in dark teal, a dark gold and charcoal.
  - **Tables:** a light-teal header band with near-black teal text; no striped rows, so no lines sit behind text.
  - **Images:** plain.
  - **Links:** near-black teal, underlined in light teal.
  - **Fresh pack:** white bold capitals on dark teal.
- **Legibility plan:** text only ever on the off-white or on the solid dark teal; never on the lines, and never on the light teal (white on it is only 3.1:1).
- **Endorsement test:** the closest point is the off-white top, gold rule and lined teal field with a heavy grotesque above it, which is most of the pack's structure. It stays on the right side because there's no spinnaker or wordmark, the field sits at the foot of a page rather than filling a pack face, and the name in the grotesque is the site's own. The owner should look hard at this one in the gallery.

## First instincts

- **A smooth CSS gradient from white to teal.** The smell's gradient habit, and not what the pack does; the pack builds its gradient from lines.
- **Helvetica Bold.** The generic "bold sans". This time the research agreed it's the right character, so the choice is a free face of the same kind.
- **Orange for the tear strip.** It came from memory of the brand's advertising, not the pack.

## What the research corrected

- **One hue, not two.** The draft (and an older source describing the 1960s pack) had blue and green lines on white. The menthol box has light teal with dark teal lines and no white between them.
- **The gradient comes from line thickness, not spacing:** constant pitch, thickening lines.
- **There's a gold rule** between the white and the field, which the draft didn't know.
- **No orange on the pack.**
- **The wordmark is near-black teal,** not black.

## Log

- 2026-10-19: Study written for the owner's review.
- 2026-10-19: Revised with the owner's web research (above).
- 2026-10-19: Approved by the owner: named Menthol Stripe; closeness accepted, to be checked in the gallery.
- 2026-10-19: Built, in Archivo (OFL). The lined field is the footer: gold rule, plain light-teal band, then six pairs of lines at a constant 28px pitch whose dark share grows from a third to 84%, ending in solid dark teal where the footer's white text sits. The masthead closes with the same gold rule and teal band, with no lines, so nothing striped is on the first screen. Fixes from the first screenshots and tests: the footer and masthead bands were capped at the column width by a more specific rule, and are now full width without `vw` units (which overflow beside a classic scrollbar); heading anchors were told apart from their headings only by a slight colour change (axe `link-in-text-block`), so they keep their underline. All floor tests pass.
- 2026-10-20: Passed the owner's gallery review.

## Open questions

- None. The endorsement test was the open one: the owner judged the closeness in the gallery and passed it.
