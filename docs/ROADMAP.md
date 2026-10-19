# Roadmap

Update this as work lands. Tick boxes; don't delete history.

## Phase 0: import

- [x] Start from Turrible Takes' history and plumbing (`bad-blog`, at its last deploy)
- [x] Remove its themes and journals; keep Not Bad as the plain fallback and `_control` as the dev scaffold; the tests pass with no pack themes
- [x] Draft the docs: INTENT, RULES (trade dress first), THEMES (the study method, the template, candidate packs), DECISIONS (new and inherited)
- [ ] The owner reviews the docs (in progress: the open questions are answered, October 2026)

## Phase 1: decisions before any theme

- [ ] The template: settle the slots in THEMES.md, and how literal a theme may be
- [x] The theme controls: one Fresh pack button, no escape (F8, F9)
- [x] Rename what the code inherited from Turrible Takes: `?pack=`, the `plain` theme, `themes:` in front matter, the `ft:` storage keys, Fresh pack, and the copy in `data/copy.yaml`; the escape note is gone
- [x] The private pack registry, with its lint and production checks (F11)
- [x] Variants: separate themes, told apart by `variant:` (F11)
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

- **How literal.** Does any theme draw the pack itself (a lid, a foil liner, a tear strip), or only borrow its language? (THEMES.md, "The template")
- **Theme names.** A convention that describes without naming, such as counter vocabulary and colour.
- **The site's name.**
- **The Fresh pack spin.** The three slot-machine reels from Turrible Takes still play before each switch. Keep them, replace them with something pack-like, or drop them?

Answered (October 2026): the theme controls (F8), the plain theme (F9), the theme index (F10), variants and deduplication (F11), the hit counter (F12), health warnings (F13), the smell (F14).
