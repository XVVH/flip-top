# Night Gilt: pack study and journal

*Status: **study, for the owner's review.** The third Chinese pack (DECISIONS.md F27), the dark one. Working id `night-gilt`; the name is the owner's to choose. Studied from the owner's carton photo and the research board's pack photo.*

*Brand names belong here, in the study, and nowhere that ships, in any script.*

## The pack

- **Pack** (research name only): 芙蓉王 (Fúróngwáng, "Hibiscus King"), China Tobacco Hunan.
- **Variant studied:** **软蓝, the soft blue**: the dark violet-navy soft pack, the owner's pick for its texture (F27). The hard box (silver-mint with a gold frame) is another design; the owner passed on it.
- **References:** two photos, described here in words and not committed (RULES.md):
  - the owner's: a carton face, flat and front on, with five packs above it, each with a different colour of tax stamp at the top: the clearest view of the colours, the lettering, the texture and the medallion
  - the research board's (`docs/research/2026-10-china-packs.md`): one pack, standing between two cigarettes: the best view of the pack's own layout
- **How the colours were read:** pixels sampled from both. The texture's colours are split into the dark ground and the studs' highlights. Medium confidence; the carton is lit more brightly than the pack.

## What's on it

- **Palette:**

  | Colour | Where | Value | Photos read |
  |---|---|---|---|
  | Violet-navy | The field, under the texture | `#1f1b3a` | pack `#191429`, carton `#1c1d39` |
  | Stud highlights | The raised diamonds of the texture | `#3b366f`, kept faint | pack `#3b384c`, carton `#5e5d7a` |
  | Violet | The smooth lower panel of the pack | `#2a2550` | `#1d1839` in shade, `#3b3460` lit |
  | Bright gold | The two rules across the top of the pack | `#ecdc62` | `#ecdc62` |
  | Gold | The lettering and the medallion | `#dcc35c` | carton `#d8c058`; pack script, in shade, `#a38d67` |
  | Holographic | The medallion's ring; the carton's frame | pastel pink, green and blue over gold | the carton |
  | White | The warning text | | |

- **Lettering:**
  - **The wordmark ("Furongwang"):** a bold formal script, italic, with thick rounded downstrokes and loops, in gold (holographic on the carton). The brand's name.
  - **The Chinese name:** gold calligraphy under the script. The brand's name.
  - **The descriptors** ("FILTER CIGARETTES", "200 CLASS A CIGARETTES"): bold sans capitals in gold.
  - **The warning:** white Hei characters on the lower panel.
- **Shapes:**
  - **The texture:** a fine grid of tiny raised diamonds (studs) over the upper two thirds of the pack.
  - **The lower panel:** smooth, a touch lighter violet, holding the warning.
  - **The rules:** two gold lines across the top, one thick, one thin.
  - **The medallion:** a gold disc in the middle, ringed in a holographic guilloche (fine engraved rosette lines), holding a gold flower with a dark leaf, under a small gold crown.
  - **The tab:** a dark green tab with gold stars at the top of the pack. The packs above the carton show it is a stamp, in a different colour on each.
  - **The carton:** a holographic frame round the face, and a thin holographic line between its panels.
- **Material:** soft paper with an embossed texture; gold foil; holographic foil in the medallion's ring and the carton's frame.

## What makes it recognizable

1. **Violet-navy with the fine diamond texture.**
2. **Gold on it:** the double rule at the top, the lettering, and the medallion.
3. **The gold medallion in the middle,** under a bold gold script.

## Treatment

| Element | Mirror, signal or leave out | How |
|---|---|---|
| The textured violet-navy | Mirror, low contrast | The page ground and the masthead: a 9px SVG tile of raised diamonds. The studs are kept faint (1.5:1 against the ground, close to the pack photo's, rather than the brightly lit carton's 2.8:1), so the fine grid doesn't glare (RULES.md). |
| The smooth lower panel | Mirror | The article sits on a full-width band of the smooth violet. Text never sits on the texture, except the masthead's name and navigation (gold on the faint studs, 6.2:1 at worst). |
| The gold double rule | Mirror | A thick and a thin gold line under the bar, and again at the foot of the page. A single gold hairline between the masthead and the article. |
| The medallion | Signal: **another flower in the same style** | A gold disc engraved with our own guilloche (dozens of fine overlapping circles turned round the centre, as on a banknote), ringed in gold, with a faint holographic tint, holding a **camellia** (山茶花) drawn in the pack's manner: glittering gold petals parted by thin dark cuts, a red-orange heart ringed with stamens, two dark leaves with gold veins, a slim dark stem. Not the hibiscus, the pack's namesake; not peony (another pack's), lotus (钻石 荷花's) or peach (Petal Lace's); not chrysanthemum, tied to mourning. No crown. A still SVG, about 23KB. |
| The bold gold script | Mirror the character | The site name and post titles in **Playball** (OFL), gold: a bold formal script with thick rounded downstrokes, the same family of letter as the wordmark. Solid gold, never a gradient (gradient text is the AI look's, and the lint flags it). |
| The bold sans descriptors and the Hei warning | Mirror the character | The article in **Noto Sans** (OFL), cream on violet; navigation, dates and labels in its bold, tracked capitals, gold, like "FILTER CIGARETTES". Smaller headings in Noto Sans bold, bright gold. |
| The wordmark, the Chinese name, the flower, the crown | Leave out | The brand and its marks. |
| The starred tab | Leave out | A stamp, and gold stars on a small tab read too readily as a flag. |
| The carton's holographic frame | Leave out | The carton's, not the pack's; and Gold Prism already has the laser board. |
| The warning | Leave out | F13. |

## The page

- **Theme name**, for the owner to choose:
  - descriptive: **Night Gilt**, the violet-navy and gold (recommended)
  - or the medallion's engraving: **Guilloche**
- **Working id:** `night-gilt`.
- **Site name case:** title case, The Smokepit, which the script needs.
- **The first dark theme.** It sets `color-scheme: dark`, so form controls and scrollbars follow. It's dark because the pack is; it isn't a dark mode of anything.
- **Template slots:**
  - **Page ground and masthead band:** the textured violet-navy, under the bar and the gold double rule; the medallion and the name centred in it.
  - **Site name and headings:** Playball, gold, for the name and post titles; Noto Sans bold, bright gold, for smaller headings.
  - **Secondary type:** Noto Sans bold, tracked capitals, gold.
  - **Signature shape:** the medallion and its camellia; the gold double rule.
  - **Material:** gold, with a faint holographic tint in the medallion.
  - **Footer and metadata:** the textured ground again, under a gold hairline, ending in the double rule.
  - **The article:** Noto Sans, cream `#ebe5d4` on the smooth violet, left-aligned.
- **Tear strip colour:** gold.
- **Literal pack parts:** none.
- **Every surface:**
  - **Home:** posts centred on the violet, the titles in Playball, parted by short gold rules.
  - **Code blocks:** a deeper violet-navy panel with a gold rule on the left; tokens in bright gold, lilac and cream.
  - **Tables:** gold tracked-capital headers, faint gold hairlines.
  - **Links:** bright gold, underlined.
  - **Fresh pack:** gold tracked capitals on the darkest violet bar.
- **Legibility plan:** cream on the violet 11.3:1; gold 8.1:1; bright gold 10.1:1; lilac 7.1:1; on the code panel, cream 13.7:1. Gold on the brightest studs 6.2:1.
- **Images:** the medallion (about 23KB) and the studs (a data URI).
- **Fonts:** about 107KB (Playball 32KB; Noto Sans roman and italic, variable, 75KB).
- **Endorsement test:** the closest point is the gold medallion with a gold flower, centred under a gold script, on the textured violet-navy. It stays on the right side because the flower is a different flower drawn for the theme, the engraving is our own pattern, the script spells the site's name in another face, and there's no crown, flower, Chinese name or stamp. The owner judges it.
- **Watch-out:** two kinds of default sit near this one. Dark violet with gold reads as "luxury" in a generic way, and a violet-to-indigo gradient is the AI look's (SMELL.md). The field stays flat, with the texture as the only variation.

## First instincts

- **The studs as bright as the carton shows them.** Under the carton's lighting they're 2.8:1, and a 9px grid at that contrast glares. The pack photo's are fainter; the theme follows the pack.
- **An empty medallion.** The owner: it "looks like an album without anything in the middle". It now holds a camellia drawn in the pack's stencil-and-glitter manner, as Petal Lace redrew its pack's lotus as a peach blossom.
- **A spirograph curve for the guilloche.** It came out as loose loops, ran past the rim, and weighed 85KB. Overlapping rotated circles, the way banknote rosettes are built, gave the engraved look at 9KB.
- **Keeping the starred tab** as a gold-on-green accent. It's a stamp, and it reads as a flag.
- **The carton's holographic frame** round the whole page. It's the carton's, and it would turn this into Gold Prism.

## Log

- 2026-10-21: Study written from two photos (the owner's carton, the research board's pack). A specimen settled the faces (Playball over Pinyon Script, Italianno, Petit Formal Script, Rouge Script and Lobster Two; Noto Sans over Source Sans 3, Zen Kaku Gothic New and Mulish); the texture and the guilloche were drawn as SVG and redrawn once each; a mock checked the page at desktop and phone width.
- 2026-10-21: The owner: the empty medallion looked like an album with nothing in the middle; asked for another flower in the pack's style, as for 钻石 荷花. Drawn a camellia: gold petals filled with a radial gradient (centred on the flower's own origin, Petal Lace's lesson) and a glitter pattern of light and dark specks, parted by 2.4px navy cuts; leaves near-black with gold veins. Scaled to 84% so the engraving shows round it.

## Open questions

- The name: Night Gilt or Guilloche.
- The camellia: does it carry the pack's flower?
- Two medallions: Gold Prism's is empty and turns; this one is still, engraved and holds a flower. Distinct enough?
