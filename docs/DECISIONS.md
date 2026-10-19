# Decisions

What's been decided, why, and what was rejected, so none of it needs deciding again. Changing an entry needs the owner's agreement; when one changes, edit it and add the date. Open questions are in [ROADMAP.md](ROADMAP.md#open-questions).

## Flip-Top (October 2026)

**F1. Flip-Top replaces Turrible Takes on `synchromeshi.com`.** Turrible Takes, an experiment in deliberately bad design, is archived for posterity in the `bad-blog` repository, with its journals and decisions. Its plumbing is reused here; its themes and its premise aren't. *Rejected:* a long-lived branch of `bad-blog` (its docs steer agents toward the opposite goal), and a GitHub fork (which implies changes flowing back).

**F2. Themes come from US cigarette pack design:** each pack's palette, the style of its lettering, its shapes and materials. The owner calls it thematic matching.

**F3. No brand names or explicit logos** (owner: "definitely not actually using naming or explicit logos, that's not the intent"). Enforced as tier 1 of [RULES.md](RULES.md).

**F4. Signal, don't copy.** Shapes can signal the relationship to a pack without reproducing its trade dress. The owner's example: not the Marlboro "roof" itself, but an angled element that signals it.

**F5. Study, then template.** Each theme starts by looking at the designs and picking out the distinctive elements, then scoping how a shared template mirrors them: palette, similar typography style and so on (the owner's method). The study and the template are in [THEMES.md](THEMES.md).

**F6. A first visit gets a random theme, and readers can explore the rest** (as in Turrible Takes). How they explore is open.

**F7. Working names:** the repository is `flip-top`, and the site is "Flip-Top" until the owner names it.

## Inherited from Turrible Takes

Still in force unless changed. Numbers in brackets are Turrible Takes' own, for looking things up in `bad-blog`.

**I1. Markdown to static site; no CMS** [D1]. Less to manage, smaller security footprint.

**I2. Content needs:** links between posts, external links, images, code blocks, footnotes, tables, smart quotes and heading anchors [D5].

**I3. One semantic HTML structure; themes are skins** [D17], the CSS Zen Garden approach. *Rejected:* separate HTML per theme, which multiplies builds and breaks instant switching.

**I4. Switching themes keeps the reader's place** [D7]: they're returned to the block that was at the top of their screen.

**I5. The theme stays the same within a visit and is re-rolled on the next one** [D11]. A URL parameter overrides it, for sharing. Exploring deals from a shuffled deck, so every theme is seen before any repeats [D12].

**I6. Every theme is legible** [D13] (RULES.md tier 3).

**I7. Posts can opt out** [D15]: a post can stay in the plain theme, or be limited to listed themes.

**I8. Hugo** [D16], one pinned program with no npm dependency tree in the build.

**I9. Netlify** [D18], on the Free plan for now. Production deploys are batched, because each costs 15 credits from a 300-credit monthly cap.

**I10. The domain** [D19]: `synchromeshi.com`, now Flip-Top's. Posts live under `/posts/<slug>/`.

**I11. Hit counts only; no analytics** [D20]. A Netlify Function and Netlify Blobs store a count per page path, counted once per visit. No IPs, cookies or visitor input. Whether any theme shows the number is open.

**I12. No guestbook or any other form** [D21].

**I13. No third-party requests** [D22]. Fonts are self-hosted, with no CDNs, embeds or trackers.

**I14. The default AI look doesn't ship** [D4]. `_control` stays as the dev-only scaffold and the gallery's baseline ([SMELL.md](SMELL.md)).

## Not inherited

Turrible Takes decisions that ended with its premise: the bad-design definition and the costume rules [D2, D23, D24], the launch sets [D14, D24a], explaining the joke only after an escape and the escape note's copy [D9], and device preferences never choosing the readable theme because "that's cheating" [D14b]. The escape hatch itself [D6, D8] and the theme index [D14c] are open questions here, not decisions; the code still has them.
