# Site Inventory

## Current Architecture

The target repository `award73/skills-github-pages` was a Jekyll/GitHub Pages site based on the GitHub Skills Pages exercise. It used root-level Markdown pages, `_posts`, `_data/navigation.yml`, `_config.yml`, and GitHub Skills workflow files under `.github/workflows` and `.github/steps`.

## GitHub Pages Deployment

The repository contained GitHub Skills exercise workflows for enabling and configuring Pages, plus a Dependabot configuration. The new implementation replaces the exercise workflow set with a single Astro Pages deployment workflow at `.github/workflows/deploy.yml`.

## Content To Preserve

Preserved and migrated content:

- Existing home positioning around Andrew's Data and AI Blog.
- Existing About page themes around data engineering leadership, Azure, Databricks, CI/CD, operational excellence, AI, and lifelong learning.
- Existing "Introducing Myself" post, migrated into `src/content/blog/introducing-andrew.md`.
- Existing `hero.jpg` and `profile.jpg`, preserved under `public/images`.
- Andrew Ward's attached resume, used to populate the profile, resume page, experience, education, skills, and certifications. Street address and phone number were intentionally not published in the site content.

## Content To Migrate

- Blog starter posts based on the requested themes.
- Existing introductory blog post.
- Resume structure populated from the attached resume where appropriate.
- Portfolio structure with placeholder case studies for data modernization, AI enablement, and automation.
- Bookmark library seeded with Prompt Engineering Guide.

## Risks

- GitHub remote and Pages settings still need to be connected outside this empty local checkout.
- Profile, resume, project links, and social links need real publishable information.
- If this becomes a project Pages repo instead of a user site repo, the workflow-provided `BASE_PATH` setting must match the deployed repository name.
- No existing PDF resume was present, so the site provides print-to-PDF support instead of linking to a file.

## Recommended Path

Use Astro with Tailwind CSS and GitHub Actions deployment to Pages. This keeps the final output static, maintainable, and compatible with GitHub Pages while supporting blog posts, resume content, and project case studies through Markdown and structured TypeScript data.
