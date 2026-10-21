---
# A new post. `hugo new content posts/<slug>` makes this folder; put the
# post's images beside this file. See docs/WRITING.md.
title: "{{ replace .File.ContentBaseName "-" " " | strings.FirstUpper }}"
date: {{ .Date }}
# One sentence for the home page, the feed and search previews.
description: ""
tags: []
# Remove this line, or set it to false, to publish.
draft: true
---

Start here. Sections begin at `##`: the title above is the page's heading.
