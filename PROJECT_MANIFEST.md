# PROJECT_MANIFEST

- Project: Uptalent 2026 new website (Astro)
- Brand source: Figma/Anima; brand profile at `/brand/<brand_id>/brand_profile.json`
- Asset registry: `/assets/registry.json`

## Decision Map (orchestration)
1) Registry-first → suggest reuse if similarity+validator pass
2) Low-res preview → validator ≥0.70 → owner approval
3) Export/upscale → registry update → PR with preview → merge if QA pass
4) After 30–50 approved assets → propose deeper LoRA (owner approval required)

## Nebius Templates (names only)
- hero-preview, hero-export
- icon-vectorize
- motion-preview, motion-export
- batch-ad-variants
- visual-validator
- lora-train, adapter-host
- realtime-render

## Gating Thresholds
- visual-validator: ≥0.70
- Accessibility: WCAG AA
- Performance: LCP ≤2.5s, CLS <0.1, TBT <200ms
- Retries: ≤3; then manual review

## Cost Controls
- Per-job approval threshold: $5
- Monthly soft cap: $20 (trial phase)
- Previews can run under cap with notice; exports/motion need approval when >$5

## Commit & PR Conventions
- Branch: `feature/<area>-<page>` e.g., `feature/hero-home`
- Commit: `feat(hero:home): add approved bg [nebius:hero-export]`
- Commit (registry): `chore(assets): update registry with hero-home-v1`
- PR title: `feat(hero:home)`; include cost estimate + Vercel preview URL
- Labels: `nebius`, `cost>5` when applicable

## Storage & URLs
- Approved assets: signed URLs (S3 or Nebius storage); stored in registry with metadata
- Unapproved previews: temp storage; auto-cleanup after 14 days

## Brand Profile Requirements
- logo paths, palette HEXs, fonts, tone tokens, spacing, border radii, shadows
- consent flag, `adapter_id`, adapter version and training metadata

## SEO & Analytics
- Owner-provided H1/H2/H3 are authoritative
- OG images generated via realtime-render where needed (with same gates)

## Workspace Structure (summary)
- Pages: `src/pages/` (route files) and `src/content/` (MDX content collections)
- Design inputs: `/design/anima/` (Anima exports) and `/design/figma/` (Figma assets)
- Brand: `/brand/<brand_id>/brand_profile.json`
- Assets: `/assets/{raw,previews,approved}/` + `/assets/registry.json`
- Config: `src/config/{navigation.json, seo.ts}`; Tokens: `src/styles/tokens.css` (CSS vars)
