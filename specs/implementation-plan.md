# Technical Implementation Plan

## Architecture

- Astro static site.
- Tailwind CSS for styling.
- Astro content collections for blog posts and project case studies.
- TypeScript data files for profile, experience, skills, certifications, and social links.
- GitHub Actions workflow for Pages deployment.

## Pages

- `/` home
- `/about`
- `/resume`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/rss.xml`
- `/404`

## Deployment

The workflow installs dependencies, builds Astro, uploads `dist`, and deploys to GitHub Pages. It derives `SITE_URL` and `BASE_PATH` from GitHub repository metadata so user-site and project-site deployments can both work.

## Validation

- Run dependency install with the bundled Node/pnpm runtime.
- Run the Astro build.
- Run preview when a local server is useful for manual review.
