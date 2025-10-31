# Uptalent 2026 New Website (Astro)

This repository hosts the 2026 Uptalent marketing website, built with Astro and structured for
section-by-section approvals. Initialization covers tooling, MDX/content collections, brand asset
ingest, and shared tokens before any page content is integrated.

## Project status

- ✅ Astro project scaffolded with MDX integration and content collections.
- ✅ Design assets from Anima organized under `design/anima/raw`.
- ⏳ Waiting for owner-provided `.md` copy files (e.g., `homepage.md`, `engineers.md`).
- ⏳ Shared components, Nebius adapters, CI, and deployment wiring are still pending.

## Workspace layout

```text
/
├── design/
│   └── anima/
│       └── raw/             # Uploaded Anima exports (no code changes)
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── config.ts        # Astro content collections (pages)
│   │   └── pages/README.md  # Placeholder awaiting owner MDX files
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with tokens + skip link
│   ├── pages/
│   │   └── index.astro      # Initialization status page
│   └── styles/tokens.css    # Temporary design tokens (replace with brand profile)
├── .env.example
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Environment variables

Copy `.env.example` to `.env` and populate once credentials are provisioned:

- `NEBIUS_API_KEY`
- `BRAND_ID`
- `ASSETS_BASE_URL`
- `SITE_URL`
- `VERCEL_PROJECT_ID`
- `VERCEL_ORG_ID`
- `VERCEL_TOKEN`

_Note:_ Do not commit populated `.env` files.

## Commands

| Command       | Description                                |
|:--------------|:-------------------------------------------|
| `npm install` | Install dependencies                       |
| `npm run dev` | Start local development server (4321)      |
| `npm run build` | Build the production bundle to `dist/`   |
| `npm run preview` | Preview the production build locally   |
| `npm run astro -- --help` | Astro CLI help                 |

## Next steps

1. Configure Nebius project, Vercel, CI workflows, and brand profile per project plan.
2. Implement shared component library driven by `src/styles/tokens.css`.
3. Request owner MDX content files once initialization is confirmed.
4. Follow section-by-section approval workflow for each page.
