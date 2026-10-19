# Flip-Top: read this first

This repository is **Flip-Top** (a working name), a Markdown-to-static-site blog. Each of its themes is drawn from the design of a US cigarette pack: its palette, the style of its lettering, its shapes and its materials. It replaces Turrible Takes on `synchromeshi.com` and is built on that project's plumbing (the `bad-blog` repository, archived).

## The short version

- Each theme studies one pack, picks out what makes it recognizable, and carries those elements onto the page. Someone who knows the pack should feel it at once; nobody should mistake the page for the brand.
- **No brand names, logos, wordmarks or marks** on the site, in theme names or ids, or in any shipped file. **Signal, don't copy:** an angled element can nod to a pack's chevron without being it. See `docs/RULES.md`, "Trade dress".
- Every page renders in one of the pack themes, picked at random on a first visit, and readers can switch to explore the others.
- Readable, accessible and well engineered on desktop and mobile. The floor from Turrible Takes carries over unchanged.

## Read before touching anything

1. [`docs/INTENT.md`](docs/INTENT.md): what this is and what the experiment is.
2. [`docs/RULES.md`](docs/RULES.md): trade dress, the floor, and what's fair game.
3. [`docs/THEMES.md`](docs/THEMES.md): how to study a pack, the template a theme fills, and the candidate packs.
4. [`docs/DECISIONS.md`](docs/DECISIONS.md): settled decisions, including the ones inherited from Turrible Takes. Don't reopen them without the owner.

Then, depending on the task:
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): how it's built.
- [`docs/ROADMAP.md`](docs/ROADMAP.md): what's done, what's next, and the open questions.
- [`docs/SMELL.md`](docs/SMELL.md): the default AI look, which must not fill the gaps a pack leaves.
- [`docs/themes/`](docs/themes/): one study and journal per theme.

## Rules for agents

- **No brand names, logos, wordmarks, slogans or marks in anything that ships**, including theme names, ids, alt text and file names. Brands may be named in the docs and journals, which are research notes.
- **No pack artwork, photos or logo files in the repository**, not even as references. Journals describe packs in words and link to sources.
- **Study before styling.** Every theme starts as a pack study in `docs/themes/<id>.md`, reviewed by the owner, before any CSS.
- **Don't fill the gaps with defaults.** Where a pack doesn't decide something, choose for that pack; don't reach for the default AI look (`docs/SMELL.md`).
- **Never ship `_control`** (the dev-only scaffold and baseline), and never copy anything from it into a theme.
- **Don't add third-party requests**, trackers, comment systems, forms, or anything that accepts visitor input. The hit counter is the one server-side piece; see `docs/ARCHITECTURE.md`.
- **Batch production deploys.** On Netlify's Free plan each production deploy costs 15 credits, out of 300 a month shared by every project on the account.
- **Record what you learn.** Each journal keeps what you picked out as distinctive and where you got it wrong. That record is the experiment's data.
- When a decision changes, update `docs/DECISIONS.md`. When work lands, update `docs/ROADMAP.md`. When the build differs from `docs/ARCHITECTURE.md`, fix one of them.

## Working on it

```sh
npm ci          # test tools and the hit counter's one dependency
hugo server     # local preview, with fixture posts and _control
npm test        # lint, unit tests, production checks, browser tests
```

Run `npm test` before every push. More commands, and how everything fits together, are in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Status

Phase 0: imported from Turrible Takes. The plumbing works and is tested, with no pack themes yet; the docs are a draft for the owner's review. Names in the code such as `?bad=`, `not-bad`, `bad:` in front matter and the More bad / Less bad buttons are inherited placeholders, renamed when the switcher is redesigned. See [`docs/ROADMAP.md`](docs/ROADMAP.md).
