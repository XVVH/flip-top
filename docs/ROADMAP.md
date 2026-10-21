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

- [x] The owner picks three packs to start with: Marlboro red, Newport and Camel (F19)
- [x] A study for each: `full-flavor`, `menthol-stripe`, `sun-cured` (working ids)
- [x] Research the three packs' colours, lettering and layout from real references (the owner's browser session; `docs/research/2026-10-first-three-packs.md`), and revise the studies
- [x] The owner reviews the studies and picks each theme's name (F20)
- [x] Build them, with the floor, legibility and trade dress checked on every surface
- [x] The owner reviews them in the gallery: Full Flavor and Menthol Stripe pass; Sun Cured fails, having studied the wrong design (F21)
- [x] Restudy Sun Cured from the owner's photos of the classic yellow pack
- [x] The owner reviews the new Sun Cured study
- [x] Rebuild Sun Cured
- [x] The owner reviews the rebuilt Sun Cured: passed, on the live site (F24)

## Phase 3: launch

- [x] Move `synchromeshi.com` to The Smokepit (the owner linked Netlify to `flip-top` and deployed, October 20). Simplest: point the existing Netlify site at the `flip-top` repository, which keeps the domain, its settings and the hit counter's store.
- [ ] Archive `bad-blog` on GitHub (Settings → Archive), after a last README note pointing here
- [x] One production deploy (the owner, October 20)

## Phase 4: more packs

- [x] The owner picks the next packs: one at a time, starting with Lucky Strike's soft pack
- [x] The owner sends reference images for each (THEMES.md, "What to send"): Lucky Strike, three images; Virginia Slims, three images of two designs
- [x] A study for each, from the images, reviewed by the owner: `roundel`, approved and named Roundel (F25)
- [x] `green-marble` (Virginia Slims, the green box): approved with a new heading face, named Green Marble (F26)
- [x] Build them: Roundel, Green Marble
- [x] The owner reviews them: Roundel passed
- [ ] The owner reviews Green Marble
- [x] The owner researches Chinese packs and picks three (F27): 钻石 荷花, 芙蓉王 软蓝, 黄山 新制皖烟
- [x] Teach the registry's lint and production test to handle pack names in characters (F27, F28)
- [ ] For each, one at a time: reference images, a study, the owner's review, the build. 钻石 荷花: Petal Lace, approved with a shorter yellow band and built (F28), awaiting review. 黄山: Gold Prism, approved with a metal medallion and handwritten headings (F29, F30), built, awaiting review. 芙蓉王 软蓝: `night-gilt` written, awaiting review

## Open questions

For the owner:

- Green Marble, built: the owner's review.
- Petal Lace, built: the owner's review.
- Gold Prism, built: the owner's review on the live site.
- The `night-gilt` study (芙蓉王 软蓝): its name, and the camellia in its medallion.
- Which pack comes after it. Candidates and what each would test are in THEMES.md.

Answered (October 2026): the theme controls (F8), the plain theme (F9), the theme index (F10), variants and deduplication (F11), the hit counter (F12), health warnings (F13), the smell (F14), how literal (F15), theme names (F16), the site's name (F17), the Fresh pack animation (F18), the studies: names, the lid testbed, Camel's design, Menthol Stripe's closeness (F20); the gallery review of the first three (F21); the tagline (F22); Full Flavor's lid (F23); Sun Cured's second review and where references come from (F24); one pack at a time, and Roundel's study and name (F25); Green Marble's design, faces and name (F26); Chinese packs, and which three (F27); Petal Lace, and names in any script (F28); Gold Prism's name and its solid column (F29); its medallion and typefaces (F30).
