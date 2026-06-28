# Personal Blog, Resume, and Portfolio

Static personal website built with Astro and Tailwind CSS for GitHub Pages.

## Stack

- Astro
- Tailwind CSS
- Markdown content collections
- GitHub Actions Pages deployment

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

In this Codex workspace, `npm` was not on PATH, so validation may use the bundled pnpm runtime instead.

## Editing Content

- Profile, socials, resume experience, skills, and certifications: `src/data/profile.ts`
- Blog posts: `src/content/blog/*.md`
- Portfolio projects: `src/content/projects/*.md`
- Bookmark library links: `src/data/library.ts`
- Shared layout and navigation: `src/layouts/BaseLayout.astro`

## Adding A Blog Post

Create a Markdown file in `src/content/blog` with frontmatter:

```md
---
title: "Post title"
description: "Short excerpt"
pubDate: 2026-06-28
tags: ["tag"]
---
```

## Adding A Project

Create a Markdown file in `src/content/projects` with title, description, role, technologies, impact, category, and optional links. Keep `placeholder: true` until the entry contains real publishable details.

## Adding A Library Link

Add a new object to `src/data/library.ts` with a title, URL, description, and category.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the Astro site and deploys the static `dist` output to GitHub Pages. Configure the repository's Pages source to GitHub Actions.

## Notes

No previous site files were present in the local checkout, so starter content is intentionally conservative and placeholder-heavy. Replace placeholder claims before treating the site as a public resume.
