# Decisions

What's been decided, why, and what was rejected, so none of it needs deciding again. Changing an entry needs the owner's agreement; when one changes, edit it and add the date. Open questions are in [ROADMAP.md](ROADMAP.md#open-questions).

## The Smokepit (October 2026)

**F1. The Smokepit replaces Turrible Takes on `synchromeshi.com`.** Turrible Takes, an experiment in deliberately bad design, is archived for posterity in the `bad-blog` repository, with its journals and decisions. Its plumbing is reused here; its themes and its premise aren't. *Rejected:* a long-lived branch of `bad-blog` (its docs steer agents toward the opposite goal), and a GitHub fork (which implies changes flowing back).

**F2. Themes come from US cigarette pack design:** each pack's palette, the style of its lettering, its shapes and materials. The owner calls it thematic matching.

**F3. No brand names or explicit logos** (owner: "definitely not actually using naming or explicit logos, that's not the intent"). Enforced as tier 1 of [RULES.md](RULES.md).

**F4. Signal, don't copy.** Shapes can signal the relationship to a pack without reproducing its trade dress. The owner's example: not the Marlboro "roof" itself, but an angled element that signals it.

**F5. Study, then template.** Each theme starts by looking at the designs and picking out the distinctive elements, then scoping how a shared template mirrors them: palette, similar typography style and so on (the owner's method). The study and the template are in [THEMES.md](THEMES.md).

**F6. A first visit gets a random theme, and readers can explore the rest** (as in Turrible Takes). How they explore is open.

**F7. Names:** the repository is `flip-top`, and the site is The Smokepit (F17).

**F8. One control: Fresh pack.** It deals the next theme (the owner: "Next theme should be 'fresh pack'"). *Rejected:* a Less bad escape; there's nothing to escape from.

**F9. No plain theme for readers.** Readers who want a plain view use their browser's reader view (the owner). The plain theme stays only as the fallback without JavaScript and for printing, where a pack's colours would print badly. It's never in the rotation, never offered, and `?pack=plain` is ignored.

**F10. The theme index stays,** at `/designs/`, linked from every theme's footer. It never names the packs.

**F11. A private pack registry.** Themes don't name their packs publicly, but without a record, duplicates creep in as the set grows (the owner). So each pack theme declares its source in `theme.yaml` (`pack:` and `variant:`), which never ships. The lint rejects two themes with the same pack and variant, and any theme whose id or name contains its pack's name; a production test fails if a declared pack name reaches the shipped CSS, scripts, theme assets, manifest or index. Variants of one pack are separate themes, told apart by `variant:`.

**F12. No theme shows the hit count.** The owner: it was funnier as a joke in Turrible Takes, where it suited the designs of that era. Counting carries on, for the owner's page statistics.

**F13. Health warnings are excluded entirely.** The owner: "this is a study in brand design, not the government-required stickers."

**F14. `_control` and the smell lint stay**, as a guard against defaults filling the gaps a pack leaves (recommended to the owner, who was open to it). `_control` also keeps the tests exercising the switcher until two pack themes exist; revisit it then.

**F15. Themes borrow a pack's language by default; literal pack parts are an experiment.** A theme doesn't draw the pack itself unless it's the investigation: one theme can try the lid, the foil liner or the tear strip, and its journal records how it went (the owner: "this is an area of investigation").

**F16. Theme names are descriptive or faux brands.** Either a generic name from the theme's core elements, or a made-up brand standing in for the real one. A faux brand is invented: never a sound-alike, pun, anagram, abbreviation or translation of the real brand (RULES.md tier 1). The lint already rejects a name that contains its pack's name.

**F17. The site is called The Smokepit, cased to match each theme.** If a pack's wordmark is set in capitals, the site name reads THE SMOKEPIT; in title case, The Smokepit; in lower case, the smokepit. Each theme sets it with `text-transform`; titles, feeds and metadata use "The Smokepit".

**F18. Fresh pack pulls a tear strip.** The slot-machine reels inherited from Turrible Takes are replaced with something pack-like (the owner): a strip with a pull tab runs across the foot of the bar, like the cellophane tape on a new pack, before the next theme arrives. Themes can colour it (`--ft-strip`). It's skipped under reduced motion.

**F19. The first three packs:** Marlboro red, Newport and Camel, "distinctive enough to allow us to exercise our design theories" (the owner). Between them: an angled colour field with condensed serif capitals, a striped gradient with a bold sans, and an illustrated scene that's a registered mark and has to be evoked without it.

**F20. The first three themes are Full Flavor, Menthol Stripe and Sun Cured** (the owner, October 2026). Sun Cured studies **the previous Camel design** (cream field, brown panels, the oval), the owner's preference over the current white-and-red box, which stays available as a later variant. **Full Flavor is the testbed for literal pack parts** (F15): its red band opens like a flip-top lid. Menthol Stripe's closeness to its pack is accepted for now, and judged in the gallery once built.

**F21. Gallery review of the first three (the owner, October 20, 2026): Full Flavor and Menthol Stripe pass; Sun Cured fails.** It had studied the wrong design. By "the old Camel design" the owner meant **the classic yellow pack**, and sent three photos of it; the first study took the hard box the research session had called "the previous design" (F20). Sun Cured is restudied from the owner's photos (`docs/themes/sun-cured.md`); the owner approved the study the same day, and it's rebuilt. *For later packs:* when a pack has had more than one old design, the study starts from the owner's picture.

**F22. No tagline in the masthead** (the owner, October 20, 2026): the "Long-form writing." line under the site name is removed from the markup, in every theme. The site's description stays in the page metadata and the feed.

## Inherited from Turrible Takes

Still in force unless changed. Numbers in brackets are Turrible Takes' own, for looking things up in `bad-blog`.

**I1. Markdown to static site; no CMS** [D1]. Less to manage, smaller security footprint.

**I2. Content needs:** links between posts, external links, images, code blocks, footnotes, tables, smart quotes and heading anchors [D5].

**I3. One semantic HTML structure; themes are skins** [D17], the CSS Zen Garden approach. *Rejected:* separate HTML per theme, which multiplies builds and breaks instant switching.

**I4. Switching themes keeps the reader's place** [D7]: they're returned to the block that was at the top of their screen.

**I5. The theme stays the same within a visit and is re-rolled on the next one** [D11]. A URL parameter overrides it, for sharing. Exploring deals from a shuffled deck, so every theme is seen before any repeats [D12].

**I6. Every theme is legible** [D13] (RULES.md tier 3).

**I7. Posts can opt out** [D15]: `themes: false` keeps a post plain, and `themes: [ids]` limits it to those. This is the author's choice, not the reader's.

**I8. Hugo** [D16], one pinned program with no npm dependency tree in the build.

**I9. Netlify** [D18], on the Free plan for now. Production deploys are batched, because each costs 15 credits from a 300-credit monthly cap.

**I10. The domain** [D19]: `synchromeshi.com`, now The Smokepit's. Posts live under `/posts/<slug>/`.

**I11. Hit counts only; no analytics** [D20]. A Netlify Function and Netlify Blobs store a count per page path, counted once per visit. No IPs, cookies or visitor input. No theme shows the number (F12).

**I12. No guestbook or any other form** [D21].

**I13. No third-party requests** [D22]. Fonts are self-hosted, with no CDNs, embeds or trackers.

**I14. The default AI look doesn't ship** [D4]. `_control` stays as the dev-only scaffold and the gallery's baseline ([SMELL.md](SMELL.md), F14).

## Not inherited

Turrible Takes decisions that ended with its premise: the bad-design definition and the costume rules [D2, D23, D24], the launch sets [D14, D24a], the escape hatch and its note [D6, D8, D9] (replaced by F8 and F9), device preferences never choosing the readable theme [D14b], the theme index being reachable only after an escape [D14c] (replaced by F10), and the visible hit counter [D20's display] (F12).
