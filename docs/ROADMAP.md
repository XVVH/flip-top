# Roadmap

Update this as work lands. Tick boxes; don't delete history.

## Phase 0: import

- [x] Start from Turrible Takes' history and plumbing (`bad-blog`, at its last deploy)
- [x] Remove its themes and journals; keep Not Bad as the plain fallback and `_control` as the dev scaffold; the tests pass with no pack themes
- [x] Draft the docs: INTENT, RULES (trade dress first), THEMES (the study method, the template, candidate packs), DECISIONS (new and inherited)
- [x] The owner reviews the docs, and answers every open question (October 2026)

## Phase 1: decisions before any theme

- [x] The template, and how literal a theme may be: its language by default, literal parts as an experiment (F15)
- [x] The theme controls: one Fresh pack button, no escape (F8, F9)
- [x] Rename what the code inherited from Turrible Takes: `?pack=`, the `plain` theme, `themes:` in front matter, the `ft:` storage keys, Fresh pack, and the copy in `data/copy.yaml`; the escape note is gone
- [x] The private pack registry, with its lint and production checks (F11)
- [x] Variants: separate themes, told apart by `variant:` (F11)
- [x] The site's name: The Smokepit, cased to match each theme (F17)
- [x] Theme names: descriptive, or invented faux brands (F16)
- [x] Fresh pack's animation: a tear strip (F18)

## Phase 2: the first packs

- [ ] The owner picks three to five packs to start with
- [ ] A study for each (`docs/themes/<id>.md`), reviewed by the owner before any CSS
- [ ] Build them, with the floor, legibility and trade dress checked on every surface
- [ ] The owner reviews them in the gallery

## Phase 3: launch

- [ ] Move `synchromeshi.com` to The Smokepit. Simplest: point the existing Netlify site at the `flip-top` repository, which keeps the domain, its settings and the hit counter's store.
- [ ] Archive `bad-blog` on GitHub (Settings → Archive), after a last README note pointing here
- [ ] One production deploy

## Open questions

For the owner:

- **The first packs.** Which three to five to start with (THEMES.md, "Candidate packs"), and which one, if any, is the testbed for literal pack parts (F15).

Answered (October 2026): the theme controls (F8), the plain theme (F9), the theme index (F10), variants and deduplication (F11), the hit counter (F12), health warnings (F13), the smell (F14), how literal (F15), theme names (F16), the site's name (F17), the Fresh pack animation (F18).
