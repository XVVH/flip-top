# Full Flavor (working name): pack study and journal

*Status: **study, awaiting the owner's review.** No CSS until it's approved. The id and name are working choices; see "The page".*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Marlboro, the red box.
- **Variant studied:** Red, the "full flavor" pack, in the flip-top box. The family is colour-coded: Red; Gold (formerly Lights); Silver (formerly Ultra Lights); green for Menthol. Lights and Ultra Lights became Gold and Silver when the 2009 Tobacco Control Act banned those descriptors from 2010.
- **References** (links only; nothing is committed):
  - History and the 1955 redesign: <https://en.wikipedia.org/wiki/Marlboro>
  - Logo history, including the wordmark's typeface: <https://logos.fandom.com/wiki/Marlboro>
  - Logo eras and the crest: <https://1000logos.net/marlboro-logo/>
  - The 2015 refresh (deeper red, brighter white, matt finish): <https://www.designweek.co.uk/marlboro-rolls-out-new-look-cigarette-packs/>
- **Caveat:** this container can't open those pages (its network policy blocks them), so the study is built from search summaries and general knowledge. Every colour below is an estimate; match it against a real pack or a photo before building.

## What's on it

- **Palette:**
  - **Red**, the top of the pack and down its sides: a warm, full red. Estimate `#C8102E`. The 2015 refresh deepened it.
  - **White**, the body below the red: bright, and matt since 2015. About half the face.
  - **Black**, the wordmark.
  - **Gold**, the crest: two rampant lions holding a red medallion, under a crown, with "Veni, vidi, vici" (the 1955 crest). Foil-like; a small area.
- **Lettering:**
  - **The wordmark:** black capitals in a condensed, high-contrast modern serif. Logopedia's summary says the 1955 wordmark is a modified Onyx (Gerry Powell, 1937, a condensed Didone). Thick vertical stems with hairline joins and narrow white counters: this is what gives it the black-and-white striped look the owner noticed.
  - **Secondary type:** small capitals beneath the wordmark naming the product. Character to confirm by eye.
- **Shapes:** the red "roof", a chevron: the boundary between red and white rises from each side to a peak at the centre, so the white body looks like the gable end of a house under a red roof. The crest sits at the top of the white, under the peak.
- **Material:** a hard flip-top box (Marlboro introduced the format in 1955). Matt print; gold on the crest.
- **Proportion:** strongly divided: red above, white below, the boundary steep. Lots of empty white around a narrow, centred wordmark.

## What makes it recognizable

1. **Red over white along a steep angle.** The single strongest element; you'd know it from across a room.
2. **Black condensed high-contrast capitals,** striped by their thick stems.
3. **Restraint:** three colours and a small touch of gold, nothing else.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| Red and white, in roughly half-and-half proportion | Mirror | The page ground is white; a red band holds the top of the first screen. |
| The roof | Signal | The red band ends in an angled edge, but not the roof's symmetric peak: a single diagonal, or a peak pushed off centre, so the angle reads without being the mark. To settle in the gallery. |
| Condensed high-contrast capitals | Mirror the character | A freely licensed condensed Didone for the site name and headings. Candidates: Noto Serif Display at its narrowest width and heaviest weight (OFL), or Oranienbaum (OFL). Never Onyx, and never the wordmark's own letters. |
| Black lettering on white | Mirror | Site name and headings in black on the white body, under the red. |
| Gold | Signal | A thin foil line (a CSS gradient) where the red meets the white, and in the tear strip. No crest, no lions, no crown, no motto. |
| The crest | Leave out | It's a mark. |
| The product line | Mirror the character | Small spaced capitals for dates, tags and navigation. |
| The flip-top box | Possible experiment | See "Literal pack parts" below. |

## The page

- **Theme name** (shown to readers), for the owner to choose:
  - descriptive: **Full Flavor**, the counter term for the red pack of any brand
  - or a faux brand in the same register (an English place name under a crest), for example **Ashcombe**. Check it isn't a real tobacco brand before using it.
- **Working id:** `full-flavor`.
- **Site name case:** THE SMOKEPIT, in capitals, like the wordmark.
- **Template slots:**
  - **Page ground and masthead band:** white page; a red band across the top of the first screen with an angled lower edge, a foil hairline along it.
  - **Site name and headings:** black condensed Didone capitals on white, just below the red.
  - **Secondary type:** small spaced capitals.
  - **Signature shape:** the angle, again small: list markers and section breaks as short angled strokes.
  - **Material:** gold foil, only on the hairline, the tear strip and focus rings.
  - **Footer and metadata:** small capitals on white, with a red rule.
  - **The article:** a serif text face with moderate contrast, black on white. Candidate: Noto Serif, the text cut of the same family, so the display and text faces agree.
- **Tear strip colour:** gold.
- **Literal pack parts:** a candidate testbed. The format is the brand's own invention, and the repository is named after it: the red band could open like a lid when Fresh pack is pressed. The owner decides whether this is the experiment theme.
- **Every surface:**
  - **Home:** each post a white block under a short red angle, title in the display capitals.
  - **Code blocks:** black on a very light grey-white, with a red rule on the left; tokens in black, red and grey.
  - **Tables:** hairline black rules, small-capital headers.
  - **Images:** plain, edge to edge in the column.
  - **Links:** red, underlined. `#C8102E` on white is about 5.9:1.
  - **Fresh pack:** black capitals on white with a red underline, or white on red, to try both.
- **Legibility plan:** black body text on white (over 18:1). Red only for links, rules and the band; white text on the red band is about 5.9:1. The condensed display face goes on headings and the site name only.
- **Endorsement test:** the closest point is the red band over white with black condensed capitals beneath it. It stays on the right side because the roof's exact shape is gone, there's no crest or wordmark, the name in that position is the site's own, and the page isn't laid out like the face of the pack.

## First instincts

- **Playfair Display Black for the capitals.** It's high-contrast and heavy, and it's the editorial smell's own display serif (SMELL.md). It's also not condensed, so it wouldn't stripe. Replaced with condensed Didone candidates.
- **The roof as a symmetric centred chevron on the masthead.** That's copying the mark. The study signals the angle instead.
- **Gold everywhere,** for "premium". The pack uses gold sparingly, on the crest only; so does the theme.

## Log

- 2026-10-19: Study written for the owner's review.

## Open questions

- The theme name: descriptive or faux brand?
- Is this the testbed for literal pack parts (the lid)?
- The red, the gold and the secondary type need checking against a real pack.
