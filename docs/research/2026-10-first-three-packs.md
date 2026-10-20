# Pack research: Marlboro Red, Newport Menthol, Camel Filters

*The owner's research brief, carried out in a separate browser session, October 2026. Research notes only: brand names appear here and never ship. No images are stored. The studies in `docs/themes/` use it.*

*Note, October 20: the "old" cream, brown and oval Camel design described here is a later hard box. The owner's "old Camel design" was the classic yellow pack, and Sun Cured's first build, made from this description, failed the owner's review (DECISIONS.md F21).*

Research date: 19 Oct 2026. Three biggest corrections to the design study first:

1. **Camel Filters is no longer a tan box.** A 2017 "New look" redesign replaced the cream/brown/oval design. The current US Camel Filters (now sold as "Camel Classic Filters") is a **white field inside a brick-red frame, with a blue CAMEL wordmark**. The tan/cream design is the old one.
2. **Newport's stripes are one hue, not blue plus green.** The field is a bright teal with darker teal lines. The lines keep a constant pitch and get *thicker* toward the bottom, so the field darkens downward. There is no white between them. The "blue and green lines on a white field" idea is the mid-1960s pack.
3. **Marlboro's pack wordmark and its standalone logo use different letters.** Logopedia gives "Onyx (modified)" for the 1955 pack and "Contact (modified)" for the 1977 standalone logo. The pack is a hairline-serif condensed didone (Onyx-like). The carton uses a wider, slab-ish version (Contact-like).

## How the colours were measured

- Hex values come from **decoded image pixels read in the browser** (canvas `getImageData`, sRGB), not from screenshots. Screenshots on this setup were heavily colour-shifted. For example, a red that decodes as #9b0a0f came out as #7e2c19 in the screenshot. Never sample screenshots for colour.
- There are two kinds of source, and they disagree in a predictable way:
  - **Manufacturer renders** on retailer listings (warehouserunner.com, which mirrors Costco product images). These are clean, flat and evenly lit, but they show **cartons**. Carton inks match the packs, but the carton layout does not.
  - **Photos** on Wikimedia Commons. These are real packs but have lighting casts. Each one's cast is noted.
- Each range below is "photo value → render value" unless stated otherwise. Where a photo has an obvious cast, the white-balance-corrected value is also given.
- Confidence: **high** = seen in two or more sources that agree. **Medium** = one good source, or two that disagree a little. **Low** = one weak source, or inferred.

---

## 1. Marlboro Red (US king box)

### Best references
- [Commons: Marlboro pack (2010) from US duty-free, white background](https://commons.wikimedia.org/wiki/File:Marlboro_cigarette_pack_(2010)_from_US_duty-free_shop_without_any_warnings_etc._(edited,_white_background).jpg). A flat, front-on studio photo of a US pack, used for geometry and lettering. Slight green cast and underexposed (the white reads #d0ddcf). Most trustworthy for shape.
- [Commons: German and American Marlboro Red (2024)](https://commons.wikimedia.org/wiki/File:German_and_American_Marlboro_Red.jpg). A current US pack next to an EU pack, shot outdoors through cellophane, so the reds are washed out and lighter. Shows the gold tear strip.
- [Commons: Open pack of Marlboro Reds (American), 2024](https://commons.wikimedia.org/wiki/File:Open_Pack_of_Marlboro_Reds_(American).jpg). Shows the lid, inner frame and foil. Blue daylight cast.
- [warehouserunner: Marlboro King Box carton render](https://app.warehouserunner.com/costco/165709-marlboro-red-king-box). A manufacturer render with the cleanest colour of any source. It shows the carton layout, not the pack.
- [Commons: Marlboro Menthol pack (2023), US duty-free](https://commons.wikimedia.org/wiki/File:Marlboro_Menthol_cigarette_pack_(2023)_from_US_duty-free_shop_without_any_warning_signs_or_images.jpg). A flat front-on photo for the family colour code. Slight warm cast.

### Trademark records
- **US Reg. 938,510** (serial 72387884), "MARLBOROFILTER CIGARETTES", registered 25 Jul 1972. Live and renewed in 2023. The record calls this the "Red Roof" design in later WIPO filings. It has no "Description of mark" field (it predates that field). Its colour statement reads: *"THE DRAWING IS LINED TO INDICATE THE COLORS RED AND GOLD AND THESE COLORS ARE USED AND CLAIMED AS A FEATURE OF THE MARK."* The drawing shows the pill at the top, the crest under the peak, the wordmark in the lower third and a line at the bottom ([TSDR](https://tsdr.uspto.gov/statusview/rn0938510)).
- **US Reg. 1,038,989** (Marlboro Lights, cancelled). This is the gold version of the same layout and the clearest written description of it: *"The mark consists of a gold roof design. Within the roof is a white oval with … the words 'FILTER CIGARETTES' in gold. A gold crest with a red oval center with the words 'PM USA' in white is located directly under the middle of the gold roof design. The word 'MARLBORO' in black is located in the lower portion of the design. There is a gold line located at the bottom of the design."* Colours claimed: *"white, gold, red and black"* ([Justia](https://trademarks.justia.com/724/30/marlboro-lights-filter-cigarettes-lowered-tar-nicotine-veni-vidi-72430003.html)).
- **US Reg. 3,430,525** (Marlboro Smooth menthol, live) describes the menthol layout: *"a white line separating the dark teal roof design from the light blue background. A silver crest with a red oval center…"* ([Justia](https://trademark.justia.com/772/75/marlboro-smooth-100-s-menthol-uniquely-rich-smooth-pm-77275616.html)).
- **US Reg. 3,423,976** (cancelled) gives the geometry in words: *"a pentagonal figure with a horizontal top, two vertical sides and two upwardly and inwardly sloping diagonals"* ([Justia](https://trademarks.justia.com/772/59/marlboro-long-cut-77259739.html)).

### Palette
| Colour | Where | Hex range | Source | Confidence |
|---|---|---|---|---|
| Red | Roof, sides, bottom band | #980206–#9b0a0f in the photo, which corrects to about #be0c12 after white balance; #ca2332–#cf262f in the render; carton side in shade #b62426 | 2010 photo; carton render | **medium-high**. The true ink is a slightly blue-leaning signal red. **#c41e2a ±8** is a fair single value. |
| Red (lit, through cellophane) | Roof | #cb6551–#d16962 | 2024 German/American photo (washed out) | low. Ignore for the theme. |
| White | Chevron field, pill | #e9e7e3 in the render; #d0ddcf in the photo (green cast) | render; 2010 photo | **medium**. It's a neutral-to-warm off-white, not paper-bright. |
| Wordmark "black" | Wordmark | #303933 in the photo; #323b43–#394047 in the render; darkest pixel #1e252d | 2010 photo; carton render | **medium**. It's a cool charcoal, not #000. |
| Crest gold | Lions, crown, scroll | metallic: #cebb86 (2024 photo), #b18641 at the shaded edge, #f3eaae at the specular highlight | 2024 and 2010 photos | **medium** that it's metallic gold foil. Any single hex is low. **#c9a85e** works as a flat stand-in. |
| Crest medallion | Oval behind "PM USA" | #aa463b–#a55249 (photo) | 2010 photo | **medium**. The medallion is red with white "PM / USA". |
| Pill lettering | "FILTER CIGARETTES" | #963d3d in the photo; #cb2334 in the render (the same red as the roof) | 2010 photo; render | **high** that it's the roof red. |
| Bottom line text | "20 CLASS A CIGARETTES" | #6b6b55 | 2010 photo | **low**. It reads dark olive-khaki, probably gold or dark metallic ink. **Not red.** |
| Tear strip | Cellophane strip across the upper face | #b18641 | 2024 German/American photo | **medium**. It's gold. |
| Foil liner | Inside | silver | open-pack photos | **medium** |

No Pantone is documented in any primary source. Brand-colour sites claim #C80000 / PMS 2347 C, but they give no source (**low**).

### Lettering
- **Wordmark source.** Logopedia lists the 1954–59 pack as designed by John DiGianni for Gianninoto Associates, with *"Typography: Onyx (modified)"*. It says that in 1959 "the font was slightly modified." It lists the 1977–present standalone logo (Landor Associates) as Contact (modified), noting that Marlboro ads had used Contact since 1964 ([Logopedia](https://logos.fandom.com/wiki/Marlboro)). Linotype's own description of Neo Contact says it is the typeface on Marlboro Red packaging ([MyFonts](https://www.myfonts.com/fonts/linotype/neo-contact)). That conflicts with the pack I saw, so treat it as marketing.
- **What I saw on the pack** (2010 photo, **high**): mixed case "Marlboro", upright, very condensed and very high contrast.
  - The stems are heavy and the hairlines are near-invisible.
  - The serifs are flat hairlines, unbracketed or barely bracketed (didone, not slab).
  - The ascenders on **l** and **b** rise far above the cap M: the ascender is about 1.45× the cap height.
  - The x-height is about 0.7 of the cap height.
  - The **a** is double-storey with a small tear terminal. The **r** has a small flag. The **M** has thin left strokes and heavy right strokes.
  - The wordmark spans about 90% of the face width. Its cap height is about 19% of the face height, its ascender height about 27%, and its baseline sits about 86% of the way down.
- **What I saw on the carton** (render, **medium**): a wider, lower-contrast cut with sturdier bracketed serifs. This is the Contact-style wordmark.
- **Close typefaces** (my judgement, **medium**):
  - Pack style, commercial: **Onyx** (Monotype, or Bitstream "Onyx BT") is the obvious one. **Bodoni Poster Compressed** is also close.
  - Pack style, free: none is truly close. **Bodoni Moda** at heavy weights, compressed to about 70–75% width, gets the feel. **Abril Fatface** and **Rozha One** are heavy didones but need even more compression.
  - Carton style: **Neo Contact** (Linotype).
- **Secondary type** (2010 photo, **high** for style, **medium** for matches): "FILTER CIGARETTES" and "20 CLASS A CIGARETTES" are a geometric sans in all caps with very wide tracking (about +200 to +300). The weight is regular to medium, with a round C/G/O and a pointed A. Close matches are Futura or Avenir (commercial), and **Jost** or **Questrial** (free).

### Shapes and layout
Measurements are from the 2010 front-on photo, as a fraction of the front face (lid included).
- **Roof**: a symmetrical white chevron peaked at the centre. The peak sits about **17%** from the top. The red/white boundary meets the side edges about **48%** from the top. Each side slopes at about **43° from horizontal**, so the apex angle is about 94°. That is nearly a right angle and steeper than "45° roof" sketches suggest, but close. **High.**
- **Lid seam**: crosses at about **31%** from the top. The peak and the pill are on the lid. The crest is below the seam.
- **Pill**: a white lozenge with fully rounded ends. Its centre is about 10% from the top, it is about 6.5% of the face height tall and about 75% of the face width wide, with red letters. **High.**
- **Crest**: centred, about **39% of the face width** and 19% of its height. Its centre is about 44% from the top, just below the lid seam inside the white chevron. **High.**
- **Bottom**: "20 CLASS A CIGARETTES" sits at about 94%. Below it is a red band at about 97.5–99.5%, then a white sliver at the very bottom edge. **Medium.**
- **Sides, back, lid**: the carton render shows red continuing over the side with a white pill. On the pack I saw only fronts and the lid front (red roof continues onto the lid top edge). Pack sides and back are **not verified**.

### Materials
- Tear strip: gold (**medium**).
- Foil: silver (**medium**).
- Crest: metallic gold, with visible specular highlights (**medium**).
- Board finish: can't tell through cellophane (**unknown**).

### Family colour code
| Variant | Main colour | Hex | Source | Confidence |
|---|---|---|---|---|
| Gold | Roof (olive gold, matt print) | #9a8a50–#9d8a51 (render); #a88c69 (warm photo). Bottom line #b7a46b. Secondary text "SMOOTH ORIGINAL FLAVOR" in gold. | carton render; Puerto Rico photo | medium |
| Menthol | Roof (emerald green) | #048953 (photo, lid highlight #18a76f); #049e7c (render). The crest is dark or black with a green medallion. "MENTHOL" sits in the pill. The bottom text "FRESH MENTHOL FLAVOR" and the bottom line are green, #0c683d. | 2023 photo; render | **high** |
| Silver | — | not found | — | — |

### Surprises
- The study's "centred red roof, gold crest" is correct. The roof is a white chevron cut into red, peaked at the centre.
- The study's "modified Onyx" is right for the **pack**. The standalone and carton logo is modified **Contact**.
- The wordmark is charcoal, not pure black.
- The bottom line text is not red.
- There is a red band plus a white sliver at the bottom edge.

---

## 2. Newport Menthol (classic box)

### Best references
- [Commons: Scan of Newport packs, Rhode Island, 2008](https://commons.wikimedia.org/wiki/File:Scan_of_Newport_cigarettes_found_in_Olneyville,_Rhode_Island_-_2008.jpg). A flatbed scan of crushed Menthol Box packs. It is the best source for stripe structure, but the packs are aged and soiled.
- [warehouserunner: Newport Menthol King Box carton render](https://app.warehouserunner.com/costco/165309-newport-menthol-king-box). A manufacturer render with the cleanest colour. It shows the carton layout.
- [Commons: Newport soft pack, 2010](https://commons.wikimedia.org/wiki/File:Newport_cigarettes.jpg). A real pack on a blue background, with a cool cast.
- [Commons: Puerto Rican Newport Original and Marlboro Gold, 2024](https://commons.wikimedia.org/wiki/File:Puerto_Rican_Newport_Original_and_Marlboro_Gold_Cigarette_Packs.jpg). **Not the menthol pack.** It is shown for contrast: dark green with black lines.

### Trademark records
- **US Reg. 1,191,816** "NEWPORT" (serial 73263210), registered 9 Mar 1982, live, first used June 1956. It has no description. Its colour statement reads: *"The lining and/or stippling shown on the drawing does not indicate color."* Its design codes include "rectangles with bars, bands and lines" and "curved line(s)" ([TSDR](https://tsdr.uspto.gov/statusview/rn1191816)).
- **US Reg. 4,048,145** (green non-menthol box, cancelled 2018): *"white at the top portion of the rectangle, the stylized green word ''Newport'' written in the white portion, a gold horizontal stripe immediately adjacent to the white portion, the portion below the gold horizontal stripe is green with a black horizontal stripe pattern and a white spinnaker outlined in black in the lower right corner."* Colours claimed: *"White, Green, Gold and Black"* ([Justia](https://trademarks.justia.com/852/04/newport-85204231.html)).
- **Serial 87251799** (Menthol Gold, allowed): *"…the remaining portion is in green and white stripes on a white background, with the green stripes thicker at the top."* This is the Gold variant, and its stripes run the opposite way ([Justia](https://trademark.justia.com/872/51/newport-menthol-87251799.html)).
- **US Reg. 5,932,883** "NEWPORT ORIGINAL MENTHOL" (2019): *"a green rectangular-shaped box with an orange stripe underneath… an orange spinnaker."* Colours claimed: green, orange, white ([Justia](https://trademarks.justia.com/878/55/newport-original-87855699.html)). This is a registered alternative design. I did not see it on any pack.

### Palette
| Colour | Where | Hex range | Source | Confidence |
|---|---|---|---|---|
| White top | Upper panel | #edece8 | carton render | medium. A faintly warm off-white. |
| Gold rule | Line between white and stripes | #b18d4a (render); #6f6c47 (scan, aged) | render; scan | medium |
| Light teal | Gaps between lines, and a plain band just under the gold rule | #01a59c–#02a39f (render); #268786 (2008 scan, darker and aged) | render; scan | **high** for hue. The render is the better value. |
| Dark teal | The lines | #00293f (top) → #001d20 (bottom) (render); #164441 (scan) | render; scan | **medium-high** |
| Wordmark | "Newport" | #033937 (render); #27403e (scan) | render; scan | **medium**. A very dark teal that reads as black-green. |
| Spinnaker | Swoosh, lower right | a white fill with a gold outline, #aa8b56 | render; scan | medium |

### Stripes (seen; **high** unless noted)
- The lines are **one hue family**: bright teal gaps with dark navy-teal lines. **No white** shows between them, and no blue and green alternate.
- The **pitch is constant**. Only the line thickness changes.
- In the scan, the dark line takes about **30–35% of each pitch at the top**. That holds for roughly the upper half, then rises to about **80–85% near the bottom**. The bottom of the field reads as nearly solid dark teal.
- Render values across the carton field: the light share of each row is 77%, 69%, 55%, 40% and 18%, top to bottom.
- A short plain band of light teal sits directly under the gold rule before the lines start.
- **About 35–40 lines** run on the pack face. I counted 36 in one column of the 2008 scan (**medium-low**).

### Lettering
- **Wordmark** (**high** for description, **medium** for matches): "Newport" is set in mixed case, upright, in a heavy grotesque sans. The width is normal to slightly wide, the spacing is tight, the **w** has pointed vertices and the **e** has a horizontal terminal.
  - Commercial: Helvetica Bold or Helvetica Neue Heavy.
  - Free: **Inter ExtraBold**, **Archivo Bold**, or TeX Gyre Heros Bold.
- **Secondary**: "MENTHOL BOX" is set in white bold caps sans, centred low on the stripes. The carton's "BOX" is small dark sans caps.

### Shapes and layout
- White top is about **28–32%** of the face, then a thin gold rule, then stripes for the remaining **68–72%**. These figures come from the soft pack and scan, which are crushed or angled (**medium-low**).
- Spinnaker is in the lower right, about a quarter of the face width (**medium**).

### Orange
I saw no orange on the classic menthol pack in any reference (**high** for the references I viewed). Orange appears in ads. A 1980s–90s Lorillard brand overview at Stanford calls green and fluorescent orange the brand's "signature colors" in advertising ([Stanford PDF](https://tobacco-img.stanford.edu/wp-content/uploads/2020/03/06212300/newport-1.pdf)). It also appears in the 2019 "Original Menthol" registered design.

### Materials
- Foil: silver, visible in the 2008 scan (**medium**).
- Tear strip: not seen.
- Finish: can't tell, because the gloss in the photos is cellophane (**unknown**).

### Family colour code
| Variant | Main colours | Source | Confidence |
|---|---|---|---|
| Non-Menthol (red) | Red #bd0b2b; dark lines #18050a; gold #c7a76f. The same white top / gold rule / lined field structure. | carton render | medium |
| Menthol Gold | Green and white stripes on white, thicker at the top; gold text | TM 87251799 (text only) | medium |
| Menthol Blue | Blue and white stripes on white, thicker at the top | TM 87251802 (text only) | medium |
| Puerto Rico "Original" | Dark green #0a2c2b with black lines; black wordmark | 2024 photo (dim) | low |
| Platinum | Silver or blue box, blue geometric shapes | TM 5581579 (text only) | medium |

### Surprises
- The study's "blue-green stripes that widen downward" is half right. The *dark lines* thicken downward, but there is one teal hue, not two colours, and no white between the lines.
- The "alternating horizontal blue and green lines on a white field" description dates from the mid-1960s modernisation (Stanford PDF above).
- The study's "bold mixed-case sans" is correct.
- The wordmark is dark teal, not black.

---

## 3. Camel Filters (now "Camel Classic Filters")

### Best references
- [warehouserunner: Camel Classic Filter King Box carton render](https://app.warehouserunner.com/costco/165007-camel-classic-filter-king-box). The **current** design ("FILTERS / HARD PACK") as a manufacturer render. It shows the carton layout.
- [warehouserunner: Camel Classic Filter soft-pack carton](https://app.warehouserunner.com/costco/165006-camel-classic-filter-king-soft-pack). The same current design, used as a second colour sample.
- [TSDR drawing for serial 87661487](https://tsdr.uspto.gov/img/87661487/large). A 2017 filing showing two packs under the headline "NEW LOOK. CLASSIC BLEND." This dates the redesign.
- [Lowes Foods: Camel Filter Box](https://shop.lowesfoods.com/products/camel-filter-box/63734). A flat front-on render of the **previous** box: cream field, brown panels, oval. It is a live listing, but the image is old.
- [Commons: Camel Filters box (RJR)](https://commons.wikimedia.org/wiki/File:Camel_filtersbox_rjr.JPG). An even older box ("Turkish & American Blend"): pale cream, with a lavender wordmark outlined in navy.

### Trademark records
- **Serial 87661487** (abandoned 2018). This is the best written description of the current front. The right-hand pack is described as: *"an orange and yellow camel set against a white background with a desert motif which is set within a red rectangle and the words 'SINCE 1913 CAMEL FILTERS' appear above the camel design in blue and red font, within a red rectangle. The words 'TURKISH & DOMESTIC BLEND' appear in red below the camel design."* Colours claimed: *"blue, red, yellow, orange, white and tan"* ([Justia](https://trademark.justia.com/876/61/since-1913-camel-blue-turkish-domestic-blend-since-1913-camel-filters-turkish-domestic-87661487.html)).
- **US Reg. 0,222,446** "CAMEL TURKISH & DOMESTIC BLEND CIGARETTES" (1927, live, renewed 2016). Its design codes are camels, desert scenery, buildings and cigarette packs. It has no colour claim ([Justia](https://trademarks.justia.com/712/35/camel-turkish-domestic-blend-71235275.html)).
- **US Reg. 3,512,391** (2008, cancelled 2019), for the previous box. Its description reads: *"a camel, pyramid and palm tree design on the front of a cigarette package, along with the wording 'Camel Filters Since 1913 Turkish & Domestic Blend.'"* It reads *"Color is not claimed."* Its design codes include "plain single line circles" (the oval) ([Justia](https://trademark.justia.com/774/33/camel-filters-since-1913-turkish-domestic-77433378.html)).

### Palette (current design)
| Colour | Where | Hex range | Source | Confidence |
|---|---|---|---|---|
| Brick red | Outer frame | #801518 (front, in shade); #97171e (soft-pack carton); #b82f2d (lit top face) | two carton renders | **high** for hue. **#97171e** is the front-face value. |
| Off-white | Field | #eae8e6–#efebe8 | both renders | high |
| Royal blue | Wordmark fill, "HARD PACK" | #013982–#04448e; "HARD PACK" #053674–#0d4079 | both renders | **high** |
| Blue | "SINCE 1913" tab (white text) | #003c8f–#01479c | both renders | high |
| Silver-grey | Wordmark outline | #9a999d–#c1c0c1 | both renders | medium |
| Dark red | "FILTERS" | #8d2221–#99272d | both renders | high |
| Maroon | "TURKISH & DOMESTIC BLEND" | #713335–#8b4b50 | both renders | medium (thin type, anti-aliased) |
| Camel tones (palette only) | Animal | dark #a93807–#ac420b; mid #cb741e; light #eec75f–#f1ca79 | both renders | high |
| Pyramid / palm gold | Scene | #ebb130 / #e3a844 | render | medium |
| Sand | Scene | #ddd6c5 | render | medium |

### Palette (previous tan/cream box, for reference)
Values come from a screenshot of the Lowes render, so their saturation is suspect and they are **low** confidence:
- Navy wordmark: about #2a335e.
- Brown panels: #7b4025 (bottom) and #8b5544 (top).
- Gold panel text: #e2c583–#eed99b.
- Cream ornaments: #d8c28d.

### Lettering
- **CAMEL wordmark**, seen in all versions (**high** for description):
  - Wide caps on an **upward arc**, in a blue fill with a lighter silver-grey offset outline.
  - The letterforms are calligraphic and uncial-flavoured. The **C** has a swash with a curled terminal. The **A** has a slanted, flat-cut apex and leans. The **M** has curved, flared legs. The **E** is round (uncial). The **L** has a long tail that sweeps down to the right.
  - Terminals are flared, wedge-like.
  - The old Commons logo has a pale fill and a navy outline. The current design has a blue fill and a grey outline.
- **Close typefaces** (my judgement, **low-medium**):
  - Free: **Uncial Antiqua** for the round E/M and the flared feel, or **Federant** for the Art Nouveau flare.
  - Commercial: American Uncial.
  - 1000logos names a "Coffin Nails" typeface but gives no source (**low**).
- **Secondary type** (current, **medium**):
  - "SINCE 1913": white classical serif caps on the blue tab.
  - "FILTERS": dark red serif caps, lightly tracked.
  - "HARD PACK" (carton): bold blue serif caps.
  - "TURKISH & DOMESTIC BLEND": small maroon caps, widely tracked, with a script "&".
  - Close matches: Trajan or Cinzel for the light caps. A bold Scotch or Clarendon-style face (free: **Libre Caslon Display**, or **Libre Bodoni Bold**) for "HARD PACK".

### Shapes and layout
- **Current**: a red frame with small inset corners around a white panel. The blue tab breaks the top of the frame. On the pack, the TM text puts the words *above* the camel and the blend line *below* it.
  - I did not find a photo of a current Camel Filters pack front. Layout proportions are inferred from the carton and the TM text (**low**).
  - On the carton, the scene takes about 30% of the front width on the right.
  - There is **no circle or oval** in the current design.
- **Previous**: a vertical oval with a brown ring framed the scene. Brown panels sat at the top ("FILTERS") and bottom ("SINCE 1913 | TURKISH & DOMESTIC BLEND"), with arabesque corner ornaments on a cream field.

### Materials
- Tear strip, foil, finish: **not found**.
- Box vs soft pack: same artwork. The carton reads "FILTERS / HARD PACK" against "FILTERS / SOFT PACK".

### Family colour code (current design: frame colour changes, the rest stays)
| Variant | Frame / key colour | Hex | Source | Confidence |
|---|---|---|---|---|
| Filters | Brick red | #97171e | render | high |
| Blue | Blue frame | #0a478b | render | high |
| Platinum | Silver frame + blue | #a9a8a9, #0c3777 | render | medium |
| Silver | Mid-grey | #9a9990–#aaa9a2 | render | medium |
| Wides | Still the brown/cream design: navy "WIDES", gold "FILTERS" on brown | — | render | medium |
| Turkish Gold / Royal / Silver / Jade | Gold+yellow; red; silver+grey; jade+silver (a separate "Turkish" design) | — | TMs 5503801, 5509116, 5509114, 5509113 | medium |

### Surprises
- The current box is **white in a brick-red frame**, not a tan field.
- The wordmark is **blue with a grey outline**, not brown.
- The blend line *is* red-ish (maroon), so the study got that part right.
- The scene is no longer inside an oval.

---

## What I couldn't find
- **Any Pantone or ink specification** for the three packs. Web searches of the UCSF Industry Documents Library turned up nothing relevant, and I did not run its own search interface.
- **A current Camel Filters pack-front photo.** I only found carton renders and the 2017 TM text, so the pack proportions for the new design are unverified.
- **Marlboro Silver** in the US.
- **Pack sides and back for Marlboro**, and a description of the lid shape beyond the standard flip-top.
- **Tear strip colours** for Newport and Camel. Foil colour for Camel.
- **Board finish** (gloss or matt) for all three. Cellophane hides it in every photo.
- **A text description of the Newport menthol box mark.** Reg. 1,191,816 has none, and I did not view its drawing.
- **Commons has no clean, current, front-on photo of a US Newport menthol pack.** The cleanest colour came from a carton render.

Screenshots are not saved to any repo. Colour values above came from reading image pixels in the browser.
