# Intent

*A draft for the owner's review, October 2026.*

## What this is

**The Smokepit** is a personal blog for long-form writing, built from Markdown into a static site and served at `synchromeshi.com`. Every page wears a theme drawn from the design of a US cigarette pack. A first visit gets one at random; readers can switch to explore the rest.

It replaces Turrible Takes, an experiment in deliberately bad design, and reuses its plumbing. That project is archived, with its record, in the `bad-blog` repository.

## Why cigarette packs

Few pieces of everyday graphic design have been worked over as hard. Once cigarette advertising left television and radio in 1971, and billboards with the 1998 Master Settlement Agreement, the pack carried more and more of a brand on its own. Each pack has a palette, a style of lettering, a few shapes, sometimes a material, and the best are recognizable from across a room:

- red over white along a steep angle, with heavy serif capitals and a gold crest
- a white top above a band of blue, in a bold sans-serif

They also turned colour into a code. In 2010 federal law banned "light", "mild" and "low" from packs, so the colour carried the meaning instead: lights became gold, ultra lights became silver. A pack's palette is a language its buyers learned to read.

## The experiment

How much of a brand's identity lives in its palette, the style of its lettering and a few shapes? Can a page evoke a pack, unmistakably to anyone who knows it, without its name, its logo or its marks?

That's recognition without the marks, and it's a test of looking closely. Each theme starts by studying one pack: what makes it that pack and not another, element by element. Then it carries those few elements onto a page that still has to work as a page.

There's a model angle too. Turrible Takes found that the model building it was good at faithful recreation from references, and bad at being bad on purpose. The Smokepit uses the strength deliberately: careful study and translation, not invention. The journals in [`themes/`](themes/) record what the model picks out as distinctive, and where it gets that wrong. That record is the experiment's data.

## What a theme is

A translation of one pack's distinctive elements onto the page:

- **Palette:** its colours, matched closely, in proportions like the pack's.
- **Lettering:** the character of its type (serif or sans, weight, width, contrast, case, spacing), in a freely licensed typeface with the same character. Never the wordmark itself.
- **Shapes:** its bands, angles, crests and borders, signalled rather than copied.
- **Material:** foil, embossing, gloss or matte, where they matter to the pack.
- **Proportion:** how the pack divides its face, and how much it leaves empty.

The article stays easy to read in every theme.

## What a theme is not

- **The brand.** No names, logos, wordmarks, slogans or marks, and nothing that suggests the brand made or endorsed the page ([RULES.md](RULES.md#1-trade-dress-every-theme-forever)).
- **An advertisement.** The subject is the packs as graphic design.
- **Hostile or broken.** Every page works on desktop and mobile, loads fast, and is accessible. The floor from Turrible Takes carries over unchanged.

## Principles

1. **Study first.** Every theme starts as a written study of its pack, reviewed by the owner, before any CSS.
2. **Distinctive, not complete.** Carry the few elements that make the pack recognizable, and leave the rest.
3. **Signal, don't copy.** An element can nod to a mark without being it. The owner's example: not the chevron "roof" itself, but an angled element that signals the relationship.
4. **Readable first.** Body text and controls meet the floor in every theme.
5. **One page, many themes.** One Markdown file becomes one clean, semantic HTML page; themes are stylesheets laid over it (the CSS Zen Garden approach).
6. **Nothing extra to write.** The author writes plain Markdown once. Themes derive everything from the content.

## Who decides

The owner is the judge of whether a theme reads as its pack, and whether it gets too close. Agents propose, build and record; the owner reviews the studies and the screenshot galleries and decides.
