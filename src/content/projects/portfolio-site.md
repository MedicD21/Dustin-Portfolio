---
title: This website
description: A minimalist portfolio built with Astro — Markdown-powered projects and notes, light/dark themes, and a live GitHub feed.
date: 2026-07-03
tech: [Astro, TypeScript, CSS]
github: https://github.com/MedicD21/Dustin-Portfolio
featured: true
---

The site you're reading right now — my first project as a software
engineering student.

## Why build it from scratch?

I wanted a home for my work that I fully understand and control. No
site builder, no template I can't explain. Every page here is a file
in a Git repository, and publishing an update is just a `git push`.

## How it works

- **Astro** generates plain, fast HTML at build time — no framework
  shipped to the browser unless a page needs it.
- **Projects and notes are Markdown files.** Adding a project means
  creating one file with a few lines of frontmatter.
- **GitHub Actions** rebuilds and deploys the site to GitHub Pages on
  every push to `main`.
- The repos section on the projects page talks to the **GitHub API**
  in the browser, so it stays current without redeploying.

## What I learned

Semantic HTML, modern CSS (custom properties, `prefers-color-scheme`,
fluid type), how static site generators work, and the basics of a
CI/CD pipeline — before writing a single line of "real" application
code. Turns out the fundamentals live everywhere.
