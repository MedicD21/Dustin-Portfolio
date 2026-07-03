# dustin_ — personal site

A minimalist portfolio and learning journal. Built with
[Astro](https://astro.build): every page is static HTML, projects and
blog posts are plain Markdown files, and the whole site deploys itself
to GitHub Pages on every push to `main`.

**Live at:** https://medicd21.github.io/Dustin-Portfolio/

---

## The 30-second guide to editing

| I want to…                          | Do this                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------- |
| Change my name / bio / links        | Edit `src/site.config.ts` — everything personal lives in that one file  |
| Add a project                       | Copy `src/content/projects/_template.md`, rename it, fill it in         |
| Write a blog post ("note")          | Copy `src/content/notes/_template.md`, rename it, fill it in            |
| Update what I'm learning right now  | Edit the `now:` list in `src/site.config.ts`                            |
| Publish any of the above            | Commit and push to `main` — GitHub Actions rebuilds the site for you    |

Both `_template.md` files have step-by-step instructions in their
comments. Filenames become URLs: `weather-app.md` → `/projects/weather-app`.

### Anatomy of a project file

```markdown
---
title: Weather CLI
description: A terminal app that shows the forecast.
date: 2026-09-15
tech: [Python]
github: https://github.com/MedicD21/weather-cli   # optional
demo: https://example.com                          # optional
featured: true    # featured projects show on the homepage
---

Anything you write down here becomes a write-up page automatically.
Leave it empty and the project is just a row in the list — no page.
```

Keep a project hidden while you work on it with `draft: true`.

## Running it locally

```bash
npm install     # once
npm run dev     # → http://localhost:4321/Dustin-Portfolio
```

You don't *have* to run it locally — pushing Markdown to `main` is
enough — but the dev server live-reloads as you type, which is nice.

## One-time GitHub Pages setup

In the GitHub repo: **Settings → Pages → Build and deployment →
Source: "GitHub Actions"**. After that, every push to `main` deploys.

## How it's put together

```
src/
├── site.config.ts        ← your name, links, bio, "now" list
├── content/
│   ├── projects/         ← one .md file per project
│   └── notes/            ← one .md file per blog post
├── components/           ← header, footer, project rows, GitHub feed
├── layouts/Base.astro    ← shared <head>, theme script, page shell
├── pages/                ← routes (index, projects, notes, 404, rss)
└── styles/global.css     ← design tokens + shared styles
```

Extras already wired up:

- **Light/dark theme** — follows your OS, toggle in the header, remembered per visitor
- **Live GitHub feed** — the projects page fetches your recently active repos from the GitHub API in the browser (no key needed)
- **RSS feed** at `/rss.xml`, plus a sitemap for search engines
- **Accessible by default** — semantic HTML, skip link, focus states, reduced-motion support

## Moving to a custom domain later

Buy the domain, add it under Settings → Pages, then in
`astro.config.mjs` set `site` to your new URL and delete the `base`
line. Everything else keeps working.
