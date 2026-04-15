## Contentful rollout & verification

This is the practical checklist to ship Contentful safely.

### Phase 0 — Setup

- **Create content types** in Contentful per `docs/contentful-content-model.md`.
- **Set env vars** (Vercel + local):
  - `CONTENTFUL_SPACE_ID`
  - `CONTENTFUL_ENVIRONMENT` (optional, default `master`)
  - `CONTENTFUL_DELIVERY_TOKEN`
  - `CONTENTFUL_PREVIEW_TOKEN` (optional, for preview)
  - `CONTENTFUL_MANAGEMENT_TOKEN` (only needed for running migration scripts)
  - `CONTENTFUL_LOCALE` (optional, default `fr`)

### Phase 1 — Migrate + switch Titres Services detail pages

- Run migration:

```bash
pnpm contentful:migrate
```

- Verify in Contentful UI:
  - Entries created for `titresServiceModule` and `approbation`.
  - Each module has correct slug + category + body fields.
  - Images exist as Assets (when present in `public/`).

- Verify on site:
  - `/titres-service/[slug]` renders for existing slugs.
  - 404 still works when slug doesn’t exist.
  - Hero image renders (falls back gracefully if missing).

### Phase 2 — Switch Titres Services listing page

- Replace local `catalogueModules` usage in `src/app/(frontend)/titres-service/page.tsx` with CMS collection query.
- Verify:
  - Category grouping unchanged.
  - Placeholder badge still appears for `isPlaceholder`.

### Phase 3 — Migrate + switch École de devoirs

- Ensure `eddSection` entries exist (migration creates them).
- Switch:
  - `/ecole-devoirs` listing page reads from CMS for cards.
  - `/ecole-devoirs/[slug]` reads from CMS for content.
- Verify:
  - All slugs resolve.
  - Card images + descriptions match previous.

### Phase 4 — Site-wide settings (footer/menu/contact/homepage)

- Create singleton entries: `siteSettings` and `navigationMenu`.
- Swap:
  - `src/components/Footer/Footer.tsx` reads from `siteSettings` (or server-fetch + pass down props).
  - Header/menu uses `navigationMenu`.
  - Contact page uses `siteSettings` (or a dedicated `page`).
  - Homepage slides/program cards/stats become a `page` or dedicated content types.

### Phase 5 — Legal pages

- Create `legalPage` + `legalSection` entries manually (or add a dedicated migration later).
- Switch `/mentions-legales` and `/politique-de-confidentialite` pages to CMS rich-text rendering.

### Sitemap

- Update `src/app/sitemap.ts` to list dynamic routes from Contentful slugs instead of local arrays.
- Verify `sitemap.xml` includes:
  - All `titresServiceModule` URLs
  - All `eddSection` URLs

### Preview + revalidation (optional but recommended)

- **Preview**: enable a preview mode that uses `CONTENTFUL_PREVIEW_TOKEN` and draft content.
- **Revalidation**: add a webhook endpoint to revalidate paths when entries publish.

