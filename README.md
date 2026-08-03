# montano-portfolio

Personal portfolio site for **Rovin Montano** — Astro, TypeScript, and plain CSS with a liquid-glass pastel blue theme.

**Live URL (after Pages is enabled):** https://rovmont.github.io/montano-portfolio/

## Sections

- **Home** — introduction, LinkedIn link, resume preview, and snippets of other sections
- **Samples** — academic, volunteer, and formal work
- **Creative** — essays, prose, and a YouTube channel card

**References** and **Recommendations** are on hold until there's real content to show. Their pages, nav links, and home snippet are commented out / prefixed with `_` (see `src/pages/_references.astro`, `src/pages/_recommendations.astro`, `src/components/SiteNav.astro`, and `src/pages/index.astro`). To bring them back: drop the leading underscore on both page files, rename to `references.astro` / `recommendations.astro`, and uncomment the matching blocks in `SiteNav.astro` and `index.astro`.

Most copy lives in `src/data/`. Edit those files to update content.

## Develop

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:4321/montano-portfolio/`).

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) using the official Astro action. Pushes to `main` build and publish the site.

### One-time GitHub setup

1. Push this repo to `main` on GitHub.
2. Open the repo → **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow to finish (Actions tab), then visit https://rovmont.github.io/montano-portfolio/

Astro is configured with `site` + `base` in `astro.config.mjs` so assets and links resolve under `/montano-portfolio/`. `public/.nojekyll` keeps GitHub from breaking the `_astro` asset folder.

## Customize

| File | What to change |
|------|----------------|
| `src/data/profile.ts` | Name, bio, LinkedIn/YouTube URLs, email, resume PDF link |
| `src/data/resume.ts` | Experience, education, skills |
| `src/data/samples.ts` | Academic, volunteer, and formal work samples |
| `src/data/creative.ts` | Essays, prose, and anthology posts |
| `src/data/references.ts` | References (currently unused, see above) |
| `src/data/recommendations.ts` | Testimonials (currently unused, see above) |
| `src/styles/global.css` | Colors and glass tokens |
| `astro.config.mjs` | `site` / `base` if you rename the repo or add a custom domain |
