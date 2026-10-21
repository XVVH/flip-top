# Writing a post

How to add a post to The Smokepit. The themes take care of how it looks; a post is only words, front matter and images.

## Start one

```sh
hugo new content posts/on-beige
```

This makes `content/posts/on-beige/index.md` from the template in `archetypes/posts/`. The folder name is the post's address: `/posts/on-beige/`. Put the post's images in the same folder.

Without Hugo installed, create the folder and `index.md` in GitHub's web editor and copy the front matter below.

## The front matter

```yaml
---
title: "On beige"
date: 2026-10-22
description: "A colour nobody chooses on purpose."
tags: [colour, home]
draft: true
---
```

- **`title`:** the page's heading, so sections in the post start at `##`. Sentence case.
- **`date`:** orders the posts. A future date stays off the site until a build runs on or after that day; nothing rebuilds on its own, so it appears with the next push after it.
- **`description`:** one sentence for the home page, the feed and search previews. Optional, but worth it.
- **`tags`:** each gets its own page.
- **`draft: true`:** keeps the post off the live site. The template starts every post as a draft; remove the line to publish.
- **`themes:`** (rarely): `themes: false` shows the post only in the plain theme; `themes: [roundel, night-gilt]` limits it to those.

## What you can write

Plain Markdown. All of these work in every theme:

- Headings, paragraphs, lists, quotes, task lists (`- [ ]`), tables, footnotes (`[^1]`).
- Code blocks with a language, and highlighted lines: ` ```js {hl_lines=[3]}`.
- **Images:** `![Describe the picture](kitchen.jpg "An optional caption")`.
  - **Alt text is required.** Without it the build stops and nothing deploys; the live site keeps the last good version.
  - Use images from the post's folder. Drop in full-size photos: the build makes smaller WebP copies and lazy-loads them.
  - An image from another site also stops the build, because it would send readers' requests to that site. Download it into the folder instead.
- **Links to other posts:** a relative path to the file, `[the beige post](../on-beige/index.md)`. A link that doesn't resolve stops the build, so links between posts can't break silently. Links to other sites are fine as plain URLs.
- **No HTML.** Raw HTML in Markdown is switched off and dropped.

The feed, the sitemap, tag pages, reading time, previous and next links, related posts and the hit counter's list of pages all update on their own.

## Preview and publish

- **Preview:** `hugo server`, then open the address it prints; it reloads as you type. `hugo server -D` shows drafts too. The preview also shows the test posts and a dev-only theme, which the live site leaves out.
- **Publish:** commit to `main`. Netlify builds and deploys it in about a minute; CI runs the full tests alongside. If the build stops (missing alt text, a broken link), Netlify's deploy log says which file and line.

## Elsewhere

- The About page is `content/about.md`.
- The site's description (feeds and search previews) is `description` in `config/_default/hugo.toml`.
- The few words of interface text (the Fresh pack button and its messages) are in `data/copy.yaml`.
