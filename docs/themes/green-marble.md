# Green Marble: pack study and journal

*Status: **built; awaiting the owner's review.** The second pack of phase 4, studied from the owner's reference images (DECISIONS.md F24, F25); the owner approved the study with Sofia Sans Condensed and Spectral, and named it Green Marble (F26).*

*Brand names belong here, in the study, and nowhere that ships.*

## The pack

- **Pack** (research name only): Virginia Slims.
- **Variant studied:** **the classic green box**, Menthol, in the long slim box: a white face with a band of green marble down its left side. The owner offered two designs and asked which suits better; this one does (see "Why this design").
- **References:** three images the owner supplied in October 2026, described here in words and not committed (RULES.md):
  - the green Menthol box, a small photo in its cellophane, with a regulatory sticker across the face
  - the same box, a flat render, front on, with the same sticker: the clearest view of the layout, and the source of every measurement below
  - the Ultra Lights Menthol box, photographed front on: a pale blush field with a tone-on-tone paisley, five stripes down the left (mint, cream, silver grey, cream, dark green), the name in a grey teal and "Ultra Lights" in script
- **How the colours were read:** pixels sampled from the images; the flat render is preferred. The marble is a printed texture, so its colours are a range, not a value. Medium confidence.

## Why this design

- **It's the classic,** in the owner's word, and the marble is what people remember.
- **It fills the template's emptiest slot.** The marble is a material, a printed stone, and so far only Full Flavor's gold hairline has touched the material slot. It can be made from scratch as a generated texture (below), with no pack artwork.
- **The Ultra Lights box is faint:** blush, mint and silver, with its name in a grey teal on blush (low contrast on the pack itself), and its stripes would put a second striped theme beside Menthol Stripe. It's a good later variant.

## What's on it

- **Palette** (the green box):

  | Colour | Where | Value | Images read |
  |---|---|---|---|
  | White | The face, about three quarters of it | `#f3f5f0`, a cool white with a hint of green | render `#f0f2ed` |
  | Marble | The left band | dark `#123f2f` to `#1c5c45`, mid teal-green `#2c876a`–`#33987d`, light `#3ea98b`, pale aqua flecks `#a3d9c6` | render dark `#225a41`, mid `#34815f`, light `#4a9d79`; the photo more yellow-green `#3c8e5d` |
  | Pale gold | Two thin stripes beside the marble; the small type | `#b5ad86` | render `#b3ab86`–`#b5ad86` |
  | Dark green | The stripe between the golds | `#1f6249` | render `#20614b`–`#206247` |
  | Green | The wordmark and "MENTHOL" | `#1f6b4e` (the pack's own `#2e654e`, darkened slightly for text) | render `#2e654e`, `#315f4b` |

- **Lettering:**
  - **The wordmark:** two lines, the second set in under the first, in light, sloped capitals with larger initials (small caps), with flared, tapered strokes: a calligraphic, Optima-like glyphic letter, slanted about 10 degrees. Green on white.
  - **"MENTHOL":** bold grotesque capitals, green, near the foot.
  - **"20 CLASS A CIGARETTES":** small, widely tracked capitals in pale gold, at the very foot.
  - **The monogram:** a script V at the top right. A mark.
- **Shapes** (from the render, as fractions of the face's width): the **marble band, 16%**, down the full height of the left side; then a **pale gold stripe (2.3%), a dark green stripe (2.6%) and a pale gold stripe (2.3%)**; then the white. The wordmark sits in the white, a little above the middle; "MENTHOL" and the small type near the foot.
- **Proportion:** a tall, slim box, about twice as high as it's wide. Most of it is white.
- **Material:** printed card, the marble a printed stone texture: crisp mottled patches of deep green and teal, lighter streaks and small pale flecks. No foil.

## What makes it recognizable

1. **The green marble band down the left side,** edged in gold, green and gold.
2. **The sloped, flared small capitals** in green on white.
3. **The slim proportion:** a lot of white, narrow and tall.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| The marble band | Mirror the material | A band of generated marble down the left edge of the page, under the bar, the page's full height: an SVG noise filter (`feTurbulence`) stepped through the pack's greens, as a data URI of about 750 bytes. Our own texture, never the pack's print. Width `clamp(22px, 9vw, 120px)`; never behind text. |
| Gold, green, gold stripes | Mirror | Beside the marble, at fixed widths (4px, 6px, 4px). A short stack of the three is the section break. |
| Sloped flared small caps | Mirror the character | The site name in **Sofia Sans Condensed Italic** (OFL), light, in small caps with larger initials, green: a true italic, narrow like the wordmark, and wholly sans-serif, as the pack is. On one line, never in the wordmark's two-line stagger. Post titles and headings in the same face, in mixed case. |
| Bold grotesque capitals | Mirror the character | Navigation in **Hanken Grotesk** (OFL) bold capitals, green, underlined in gold. |
| Tracked small capitals | Mirror the character | Dates, labels and the footer in Hanken Grotesk, widely tracked, in a darker gold `#6f6844` (5.1:1; the pack's pale gold is 2.1:1, too faint for text). |
| The slim proportion | Mirror | A narrower column than the other themes (34rem rather than 44rem), centred in the white. |
| White | Mirror | The page ground. |
| The monogram V | Leave out | A mark. |
| The regulatory sticker | Leave out | The government's, not the design (F13). |
| The Ultra Lights script and paisley | Leave out | Another design; a later variant. |

## The page

- **Theme name:** **Green Marble**, the owner's own words for the band (F26; Malachite was the alternative).
- **Id:** `green-marble`.
- **Site name case:** THE SMOKEPIT in small caps with larger initials, as the wordmark is set: capitals (F17), with the T and S taller.
- **Template slots:**
  - **Page ground and masthead band:** cool white; the marble band down the left edge; the bar white over a thin pale-gold rule.
  - **Site name and headings:** Sofia Sans Condensed Italic, green.
  - **Secondary type:** Hanken Grotesk: bold capitals for navigation, tracked capitals for dates and labels.
  - **Signature shape:** the marble band and its three stripes; the three stripes, short, as the section break.
  - **Material:** the generated marble.
  - **Footer and metadata:** tracked dark-gold capitals, centred, like the small type at the foot of the pack.
  - **The article:** **Spectral** (OFL), a slender text serif for screens, in a dark green-black `#1d2b25` (13.4:1), left-aligned in the slim column.
- **Tear strip colour:** the pale gold.
- **Literal pack parts:** none.
- **Every surface:**
  - **Home:** each post centred: the title in Sofia Sans Condensed Italic, the date in tracked capitals, parted by the short three-stripe break.
  - **Code blocks:** a pale mint panel (`#e6efe9`) with a dark green rule on the left; tokens in green, dark gold and ink.
  - **Tables:** tracked-capital headers, gold hairlines.
  - **Images:** plain.
  - **Links:** green `#1f6b4e`, underlined (5.8:1).
  - **Fresh pack:** green bold capitals on the white bar, underlined in green.
- **Legibility plan:** ink on white 13.4:1; green 5.8:1; dark gold 5.1:1. The pale gold (2.1:1) never carries text. Nothing sits on the marble.
- **Fonts:** about 145KB (Sofia Sans Condensed Italic, variable, 41KB; Spectral roman, italic and semibold 67KB; Hanken Grotesk 35KB).
- **Endorsement test:** the closest point is the marble band with its stripes down the left of a white page, under sloped green small caps: most of the pack's structure, like Menthol Stripe. It stays on the right side because the marble is generated (not the pack's print), there's no monogram, the name is the site's own in a different face and on one line, and the page is a blog's column, not the pack's face. The owner judges it.

## First instincts

- **Script lettering.** The candidate list said the pack had script lettering; on the classic box the script is only the monogram (a mark) and, on the Ultra Lights, a descriptor. The wordmark is sloped small capitals.
- **A photograph of marble** for the band. Pack artwork, or close to it, and a heavy image besides. Replaced with generated noise.
- **Philosopher Italic for the name and headings.** It has the slope and the flared, tapered strokes, but its wedge serifs put it halfway between a serif and a sans; the owner saw that the pack's lettering is wholly sans-serif. A second specimen tried six sans italics; Sofia Sans Condensed won over Belleza, which has the Optima-like stroke contrast but no italic, and slanting it with CSS skews whole lines of a heading sideways.
- **Soft noise.** The first attempts looked like green smoke. Stepping the noise through a few fixed greens (a `discrete` transfer) gave the crisp patches of a printed stone.
- **The feminine shorthand:** pinks, florals, ribbons. The classic box is green and white; the paisley belongs to the other design.

## Log

- 2026-10-20: Study written from the owner's three images, choosing the green box over the Ultra Lights. A specimen settled the faces (Philosopher Italic over Belleza, Marcellus, Tenor Sans, Italiana and Forum, which are upright); three rounds of generated marble settled the texture; a mock checked the page at desktop and phone width.
- 2026-10-20: The owner liked the marble but not the heading face: Philosopher reads halfway between serif and sans, and the pack is wholly sans. Replaced with Sofia Sans Condensed Italic after a second specimen (see First instincts).
- 2026-10-20: The owner approved Sofia Sans Condensed, kept Spectral for the article, and named it Green Marble. **Built.** The band is `.page::before`, the page's full height, with the stripes as a hard-stopped gradient over the marble; the page is padded by the band's width, so the slim column centres in the white. The marble's data URI needed its `url(#m)` filter reference written with percent-encoded brackets, or the theme lint read it as an asset path. Fixes from the screenshots: on a phone the site name came out smaller than a post title, so its minimum size went up; at 320px the navigation dropped "Feed" onto its own line, so it tightens below 360px. All floor tests pass.

## Open questions

- The owner's review, on the live site.
