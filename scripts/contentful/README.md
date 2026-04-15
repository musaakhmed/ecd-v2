## Contentful migration scripts

These scripts migrate the **current hardcoded content** into Contentful entries/assets.

### Prerequisites

- Create the content types exactly as in `docs/contentful-content-model.md`.
- Add env vars (do not commit):
  - `CONTENTFUL_SPACE_ID`
  - `CONTENTFUL_ENVIRONMENT` (optional, default `master`)
  - `CONTENTFUL_LOCALE` (optional, default `fr`)
  - `CONTENTFUL_MANAGEMENT_TOKEN`

### Run

```bash
pnpm contentful:migrate
```

### What it migrates today

- **Titres Services**: `approbation` entries + `titresServiceModule` entries (and module images when present in `public/`).
- **École de devoirs**: `eddSection` entries (intro paragraphs + meta/image).

### Notes

- If an image path like `/assets/...` doesn’t exist in `public/`, the entry is still created, but without an image.
- Legal pages are **not** auto-migrated yet (they currently live as TSX/React nodes); plan is to migrate them manually into `legalPage` + `legalSection`.

      