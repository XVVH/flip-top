# Roadmap

Update this as work lands. Tick boxes; don't delete history.

## Phase 0: import

- [x] Start from Turrible Takes' history and plumbing (`bad-blog`, at its last deploy)
- [x] Remove its themes and journals; keep Not Bad as the plain fallback and `_control` as the dev scaffold; the tests pass with no pack themes
- [x] Draft the docs: INTENT, RULES (trade dress first), THEMES (the study method, the template, candidate packs), DECISIONS (new and inherited)
- [ ] The owner reviews the docs

## Phase 1: decisions before any theme

- [ ] The template: settle the slots in THEMES.md, variants, and how literal a theme may be
- [ ] The theme controls: what replaces More bad / Less bad, and whether there's still a plain-reading escape
- [ ] Rename what the code inherited from Turrible Takes (`?bad=`, `not-bad`, `bad:` in front matter, the `tt:` storage keys, the button labels, the escape note copy in `data/copy.yaml`) to match
- [ ] The site's name
- [ ] Theme names: a convention that describes without naming

## Phase 2: the first packs

- [ ] The owner picks three to five packs to start with
- [ ] A study for each (`docs/themes/<id>.md`), reviewed by the owner before any CSS
- [ ] Build them, with the floor, legibility and trade dress checked on every surface
- [ ] The owner reviews them in the gallery

## Phase 3: launch

- [ ] Move `synchromeshi.com` to Flip-Top. Simplest: point the existing Netlify site at the `flip-top` repository, which keeps the domain, its settings and the hit counter's store.
- [ ] Archive `bad-blog` on GitHub (Settings → Archive), after a last README note pointing here
- [ ] One production deploy

## Open questions

For the owner:

- **The theme controls.** Turrible Takes had More bad (spin to another theme) and Less bad (escape to Not Bad). What do readers press here, and is there still an escape?
- **The plain theme.** Fallback only, or something readers can choose? What does it look like now?
- **The theme index** (`/designs/`). Keep it? It could list each theme with the pack's colours, unnamed.
- **Variants, literalness and names** (THEMES.md, "The template").
- **The hit counter.** Does any theme show the number?
- **Health warnings.** US packs carry a boxed government warning, a strong piece of their design. Signal its typographic form, or leave it out entirely?
- **The smell.** Keep `_control` and the smell lint as a guard against defaults filling the gaps (the current plan), or drop them?
