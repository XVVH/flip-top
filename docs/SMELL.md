# The smell

The default look of AI-built websites: what a model produces when nobody steers it.

In Turrible Takes this was the foundation: the whole project pushed against it. In The Smokepit it's a guard. A pack decides a theme's palette, lettering and shapes, but not its spacing, its link styles, its code blocks or its footer. Those gaps are exactly where a model's defaults come back. A page with a pack's red and white and gold, and Inter body text, rounded cards and a slate-grey footer, is the smell wearing the pack's colours.

**Nothing that ships may carry it.** The only place it lives is `assets/themes/_control/`, the dev-only scaffold and baseline (see [below](#the-control)).

If you are a model reading this: these are your defaults. Expect to reach for them wherever the pack is silent. Choose for the pack instead, and write it down in the theme's journal when you catch yourself.

## Surface smell

What you can see in a screenshot.

**Type**
- Inter, Geist or a system UI sans-serif for everything.
- Gradient-filled headline text.
- A small, uppercase, letterspaced "eyebrow" label above a headline.
- A tidy modular type scale.

**Colour**
- Slate or zinc greys with one indigo, violet or blue accent.
- Indigo-to-violet or blue-to-purple gradients.
- Dark mode as near-black slate with the same accent.
- Tailwind's default palette values, such as indigo-500 `#6366f1`, violet-500 `#8b5cf6` and slate-900 `#0f172a`.

**Shapes and surfaces**
- Rounded cards (12–16px radius) with soft drop shadows.
- Pill-shaped badges and buttons.
- Frosted glass (`backdrop-filter: blur`).
- Blurred colour blobs, or a faint dot or grid pattern behind the hero.
- Bento grids.

**Furniture**
- A centred hero: eyebrow, headline, subheading, two buttons (one filled, one outlined).
- A three-card feature grid with an icon on each card.
- Thin line icons (Lucide, Heroicons), or emoji as bullets (✨🚀💡).
- Testimonial cards, logo strips, FAQ accordions, "Get started" buttons.
- Code blocks in fake macOS window chrome with traffic-light dots.

## The editorial smell

A second default, which shows up when a model is asked for something "elegant", "warm" or "literary". It was the bigger risk for Turrible Takes' Not Bad, now the plain theme, and it's close to any pack with a cream ground and a serif (Sun Cured, Petal Lace), where the pack has to decide instead.

- Cream or warm off-white paper (`#faf9f6`, `#f5f1e8` and friends).
- A display serif for headlines (Fraunces, Instrument Serif, Playfair Display, DM Serif Display) over an Inter or system sans body.
- One muted terracotta, rust or olive accent.
- Big italic serif pull quotes, thin rules, generous margins, small-caps eyebrow labels.

## Deep smell

What survives after the fonts and colours change. It's harder to see, and it's the main reason a "different" design can still smell.

- One spacing scale (multiples of 4 or 8px) applied everywhere, perfectly.
- One border radius everywhere.
- One accent colour, used sparingly and correctly.
- Everything centred, balanced, symmetric and aligned to a grid.
- Generous whitespace as the default answer.
- Secondary text in muted grey.
- A 150–200ms eased transition on every hover.
- Restraint: good taste applied evenly, nothing committed to.

A theme that keeps all of these is the smell in a pack's colours. The pack decides the gaps: its spacing, its edges, its density.

## Copy smell

Words carry it too: button labels, taglines, 404 pages, empty states.

- "Welcome to my little corner of the internet."
- "Thoughts on design, technology, and life."
- "Let's dive in." "Stay curious." "Crafted with ❤️."
- Emoji as punctuation, Title Case Everywhere, relentless friendliness.

## The control

`assets/themes/_control/` is a deliberately faithful rendition of the smell, kept for two reasons:

1. **Scaffolding.** It's the theme that proves the build, the theme pipeline and the tests work before any pack theme exists.
2. **Baseline.** Screenshot galleries show each theme beside the control, so the distance from the default is visible.

It is excluded from production builds. It never appears in the rotation, even in development, where only `?pack=_control` opens it (DECISIONS.md F34); it can't be selected at all in production, and nothing may be copied from it into a theme or the plain theme.

## Checking for the smell

- **Mechanical:** `scripts/lint-smell.mjs` (part of `npm run lint`) flags known surface tells in everything that ships. Rule ids:
  - `smell-font`: Inter, Geist or a system UI font as the first family
  - `tailwind-hex`: Tailwind default colours
  - `glass`: `backdrop-filter: blur`
  - `gradient-text`: gradient-clipped text
  - `emoji`: ✨🚀💡🎉👋
  - `pill`: `border-radius: 9999px`
  - `copy`: phrases from the copy smell

  A theme that uses one on purpose, for its own reasons, lists it in `theme.yaml` as `smell_exemptions: ["<rule-id>: <reason>"]`. The lint can't see the deep smell.
- **Human:** the owner reviews the screenshot gallery. That is the real test.
