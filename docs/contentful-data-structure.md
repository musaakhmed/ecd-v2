# Contentful CMS – Data structure (manual setup)

Use this as a checklist when creating content models and fields in the Contentful UI. Content type IDs must match the values used in code (`eddSection`, `titresServiceModule`, `sectionBlock`, `page`).

---

## 1. Section Block (reusable block for Page sections)

**Content type ID:** `sectionBlock`

| Field ID        | Name (display) | Type              | Required | Notes |
|-----------------|----------------|-------------------|----------|-------|
| `internalName`  | Internal name  | Short text        | No       | For editors only |
| `title`         | Title          | Short text        | No       | |
| `body`          | Body           | Long text         | No       | Plain or Rich text (match your renderer) |
| `image`         | Image          | Media (1 file)    | No       | Single asset |
| `items`         | List items     | List – Short text | No       | Bullet list |
| `ctaLabel`      | CTA label      | Short text        | No       | Button text |
| `ctaHref`       | CTA link       | Short text        | No       | URL or path |

---

## 2. Page (top-level pages: À propos, Inclusion numérique, etc.)

**Content type ID:** `page`

| Field ID        | Name (display) | Type              | Required | Notes |
|-----------------|----------------|-------------------|----------|-------|
| `slug`          | Slug           | Short text        | Yes      | Unique, used in URL (e.g. `a-propos`, `inclusion-numerique`) |
| `title`         | Title          | Short text        | Yes      | Page title |
| `seoTitle`      | SEO title      | Short text        | No       | |
| `seoDescription`| SEO description| Long text         | No       | |
| `heroImage`     | Hero image     | Media (1 file)    | No       | Single asset |
| `heroSubtitle`  | Hero subtitle  | Short text        | No       | |
| `heroEyebrow`   | Hero eyebrow   | Short text        | No       | Small label above hero |
| `sections`      | Sections       | References (many) | No       | Reference to **Section Block** entries, order preserved |

---

## 3. EDD Section (École de devoirs sub-pages)

**Content type ID:** `eddSection`

Used for: `/ecole-devoirs/[slug]` (e.g. `petite-histoire`, `projet-pedagogique`).

| Field ID        | Name (display)   | Type              | Required | Notes |
|-----------------|------------------|-------------------|----------|-------|
| `slug`          | Slug             | Short text        | Yes      | Unique, URL segment (e.g. `petite-histoire`) |
| `title`         | Title            | Short text        | Yes      | Full page title |
| `menuTitle`     | Menu title       | Short text        | Yes      | Short label for nav/menu |
| `image`         | Image            | Media (1 file)    | No       | Card/hero image |
| `shortDescription` | Short description | Long text      | Yes      | For cards / meta |
| `bodyIntro`     | Body intro       | List – Short text | No       | Array of paragraphs (intro) |
| `bodyItems`     | Body items       | List – Entry ref  | No       | See **EDD Body Item** below |

**EDD Body Item** (embedded or separate content type):

If you use a separate content type, create **EDD Body Item** and reference it from `bodyItems`:

| Field ID     | Name       | Type        | Required |
|--------------|------------|-------------|----------|
| `title`      | Title      | Short text  | No       |
| `description`| Description| Long text   | No       |

If you prefer to keep it simple, use **two list fields** on `eddSection` instead of a reference list:

- `bodyItemTitles` – List – Short text  
- `bodyItemDescriptions` – List – Long text  

(Then in your mapper you zip them into `bodyItems: { title, description }[]`.)

---

## 4. Titres Service Module (Titres-service formation modules)

**Content type ID:** `titresServiceModule`

Used for: `/titres-service/[slug]`.

| Field ID             | Name (display)      | Type              | Required | Notes |
|----------------------|---------------------|-------------------|----------|-------|
| `slug`               | Slug                | Short text        | Yes      | Unique URL (e.g. `initiation-informatique`) |
| `titre`              | Titre               | Short text        | Yes      | Full title |
| `titreCourt`         | Titre court         | Short text        | No       | Short label |
| `description`        | Description         | Long text         | Yes      | Main description |
| `descriptionCourte`  | Description courte  | Long text         | Yes      | For cards/listings |
| `objectifsIntro`     | Objectifs intro     | Long text         | No       | Intro before objectifs list |
| `objectifs`          | Objectifs           | List – Short text | No       | Bullet list |
| `modalitesPedagogie` | Modalités pédagogie | Long text         | Yes      | |
| `evaluationSuivi`    | Évaluation et suivi | Long text         | Yes      | |
| `supportsLogistiques`| Supports logistiques| Long text         | Yes      | |
| `publicVise`         | Public visé         | Short text        | Yes      | |
| `approbation`        | Approbation(s)      | List – Entry ref  | No       | See **Approbation** below |
| `duree`              | Durée               | Short text        | Yes      | e.g. "2 jours" |
| `category`           | Catégorie           | Short text (dropdown) | Yes  | Values below |
| `image`              | Image               | Media (1 file)    | No       | Module image |
| `isPlaceholder`      | Contenu à venir     | Boolean           | No       | If true, show “Contenu à venir” |

**Category** valid values (exactly one of):

- `outils-numeriques`
- `techniques-prevention`
- `bien-etre-savoir-faire`

**Approbation** (embedded or separate content type):

If you use a separate content type **Approbation** referenced by `approbation`:

| Field ID     | Name        | Type       | Required |
|--------------|-------------|------------|----------|
| `region`     | Région      | Short text | Yes      |
| `certificate`| Certificate | Short text | Yes      |
| `date`       | Date        | Short text | No       |

If you prefer no extra content type, you can store JSON in a Long text field and parse in the app (not ideal for editors). Recommended: separate **Approbation** content type and reference as list from `titresServiceModule`.

---

## 5. Validations and settings

- **Slugs:** For `page`, `eddSection`, `titresServiceModule` add a **Unique** validation on the slug field (Contentful: Field → Validation → Unique).
- **References:** For `page.sections`, allow only `sectionBlock`. For `titresServiceModule.approbation`, allow only `approbation` (if you create it).
- **Locale:** If you use a single locale (e.g. French), set it as default and use it everywhere.

---

## 6. Content type IDs summary

| Content type ID       | Purpose |
|-----------------------|--------|
| `sectionBlock`        | Reusable section for Page |
| `page`                | Top-level pages (about, inclusion, etc.) |
| `eddSection`          | École de devoirs sub-pages |
| `titresServiceModule` | Titres-service module detail pages |
| `eddBodyItem`         | Optional: one item in EDD body items list |
| `approbation`         | Optional: one approbation entry for Titres Service |

Your app already expects `eddSection` and `titresServiceModule`; add `page` and `sectionBlock` when you migrate Page-based content.
