# Menthol Stripe (working name): pack study and journal

*Status: **study, awaiting the owner's review.** No CSS until it's approved. The id and name are working choices; see "The page".*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Newport.
- **Variant studied:** the classic menthol box. The owner's description: "the white top and blue stripes gradient with a bold sans-serif font". The family is colour-coded too: Menthol Blue and Menthol Gold replaced "Medium" and "Lights" in 2010, Platinum is blue, silver and black, and the non-menthol pack uses red.
- **References** (links only; nothing is committed):
  - History, the spinnaker and the 2010 renaming: <https://en.wikipedia.org/wiki/Newport_(cigarette)>
  - Stanford's Newport overview (SRITA), on its colours: <https://tobacco-img.stanford.edu/wp-content/uploads/2020/03/06212300/newport-1.pdf>
  - Trademark descriptions of the variants' layouts: <https://trademarks.justia.com/859/13/newport-menthol-gold-85913799.html>, <https://trademarks.justia.com/855/20/newport-menthol-blue-85520698.html>
- **Caveat:** this container can't open Wikipedia, so the study is built from search summaries, the trademark descriptions and the owner's description. Every colour below is an estimate; match it against a real pack or a photo before building.

## What's on it

- **Palette:**
  - **White**, the top of the pack, carrying the wordmark.
  - **Blue-green**, the lower part: horizontal stripes on the white. Stanford's overview describes "alternating horizontal blue and green lines on a white field". Estimates: a blue around `#1D7FC1` and a green-teal around `#00A19A`, to match.
  - **Orange**, the brand's other signature colour. Stanford: "vibrant green and fluorescent orange" make it "clearly recognizable". It's an accent, mainly in the brand's advertising since 1984. Estimate `#FF6A13`.
- **Lettering:**
  - **The wordmark:** a bold sans-serif (the owner's description), set in mixed case, with a capital first letter and the rest lower case. Its exact character (width, slant, any quirks) is to confirm by eye.
  - **Secondary type:** to confirm.
- **Shapes:**
  - **The stripes:** horizontal bands across the lower pack that change in width or spacing from top to bottom, so the stripes read as a gradient (the owner's "stripes gradient").
  - **The spinnaker:** a curved sail shape in the lower right, white with a coloured outline in the variants' trademark descriptions. It's a mark.
- **Material:** to confirm (gloss or matt).
- **Proportion:** white on top, stripes below; the boundary is horizontal, unlike the angled boundary of Full Flavor.

## What makes it recognizable

1. **The striped gradient in blue-green,** coming up from the bottom of the pack into white.
2. **The white top with a bold sans-serif in mixed case.**
3. **Blue-green and orange together,** the pairing the brand owned.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| White top, stripes below | Mirror | A white page. The masthead sits in white; the stripes rise from the foot of the first screen, and close the page in the footer. |
| The striped gradient | Mirror, carefully | Horizontal stripes that widen toward the bottom, in blue-green on white. RULES.md tier 2 forbids large areas of fine, high-contrast stripes (pattern glare), so they're broad, kept to bands, and never behind text. |
| Blue-green | Mirror | Rules, the stripe bands, headings. Darker shades for any text (see legibility). |
| Orange | Signal | A small accent only: the tear strip, focus rings, and hover. Never a large area. |
| Bold sans-serif, mixed case | Mirror the character | A freely licensed bold sans with similar proportions, for the site name and headings. Candidates to compare once the wordmark's character is confirmed: Archivo, Work Sans or Public Sans at their heaviest weights (all OFL). Never the wordmark's own letters. |
| The spinnaker | Leave out | It's a mark, and a curved swoosh is too easily read as one. |

## The page

- **Theme name** (shown to readers), for the owner to choose:
  - descriptive: **Menthol Stripe**
  - or a faux brand in the same register (a seaport, sailing), for example **Westerly**. Check it isn't a real tobacco brand before using it.
- **Working id:** `menthol-stripe`.
- **Site name case:** The Smokepit, in title case, like the mixed-case wordmark (to confirm).
- **Template slots:**
  - **Page ground and masthead band:** white. The masthead is white, with a striped band underneath it that widens downward.
  - **Site name and headings:** the bold sans, in a deep blue-green.
  - **Secondary type:** the same sans at a lighter weight.
  - **Signature shape:** the stripes, as section breaks (three broad bars of increasing width) and as the footer band.
  - **Material:** none unless the pack shows one.
  - **Footer and metadata:** the stripe band in reverse, narrowing upward.
  - **The article:** a readable sans-serif in the same family as the headings, or a plain serif if the sans tires the eye at length. Dark grey-blue on white.
- **Tear strip colour:** orange, the one place the theme lets it run.
- **Literal pack parts:** none by default.
- **Every surface:**
  - **Home:** posts separated by single broad stripes.
  - **Code blocks:** on a very pale blue-green field, tokens in dark blue, dark green and dark orange.
  - **Tables:** header row in a pale blue-green band; alternating rows would be stripes over text, so the rows stay plain and the stripes stay out of the table.
  - **Images:** plain.
  - **Links:** deep blue-green, underlined. The bright estimate `#00A19A` is only about 3:1 on white, too pale for text, so links use a darker shade, around `#00707A` (about 5.8:1).
  - **Fresh pack:** white on blue-green, with an orange focus ring.
- **Legibility plan:** body text dark on white; stripes never behind text; every text colour at least 4.5:1, which rules out the bright blue-green and the orange for text.
- **Endorsement test:** the closest point is white over blue-green stripes with a bold sans above them. It stays on the right side because there's no spinnaker, no wordmark, and the name in the sans is the site's own.

## First instincts

- **A smooth CSS gradient from white to blue-green.** That's the smell's gradient habit, and it isn't what the pack does: the pack builds its gradient out of stripes. Replaced with stepped stripes.
- **Helvetica Bold.** The generic answer to "bold sans", and close to the system-UI smell. The candidates are chosen to be compared against the real wordmark's character instead.
- **Using the orange everywhere it would fit.** On the pack's family it's a signature, not a field; here it's an accent.

## Log

- 2026-10-19: Study written for the owner's review.

## Open questions

- The theme name: descriptive or faux brand?
- Which menthol pack exactly: the owner remembers blue stripes; the sources describe blue and green lines. A photo would settle the colours and the stripe widths.
- The wordmark's character: width, weight, any slant.
