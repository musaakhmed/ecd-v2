# Contentful CMS – Content model (source of truth)

This document defines the **canonical Contentful content model** for this project.

- **Audience**: webmaster/editor (UI fields), developers (IDs/validations), migration scripts.
- **Important**: **Content type IDs and field IDs must match exactly** (they are referenced in code and migration scripts).
- **Locale**: single-locale setup (recommended). If you add more locales later, keep field IDs unchanged.

---

## Global conventions

- **Slug fields** (`slug`) are **required** and **unique** inside a content type.
- **Images** are Contentful **Assets** (Media).
- **Rich text** is Contentful **Rich Text** (not Markdown).
- **References** should be restricted to allowed content types.

---

## 1) `sectionBlock` (reusable block)

Used by `page.sections[]`.

**Content type ID:** `sectionBlock`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `internalName` | Internal name | Short text |  | Editor-only label |
| `variant` | Variant | Short text |  | Optional: e.g. `default`, `twoColumn`, `cards` (app can interpret) |
| `title` | Title | Short text |  |  |
| `body` | Body | Rich text |  | Main section text |
| `image` | Image | Media (1 file) |  |  |
| `items` | List items | List – Short text |  | Bullet list |
| `ctaLabel` | CTA label | Short text |  | Button text |
| `ctaHref` | CTA link | Short text |  | URL or site path |

---

## 2) `page` (generic page builder)

Top-level content pages like “À propos”, “Inclusion numérique”, and most marketing pages.

**Content type ID:** `page`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `slug` | Slug | Short text | ✅ | Unique; used in routes |
| `title` | Title | Short text | ✅ | Page title |
| `seoTitle` | SEO title | Short text |  |  |
| `seoDescription` | SEO description | Long text |  |  |
| `heroImage` | Hero image | Media (1 file) |  |  |
| `heroSubtitle` | Hero subtitle | Short text |  |  |
| `heroEyebrow` | Hero eyebrow | Short text |  |  |
| `heroDescription` | Hero description | Long text |  |  |
| `sections` | Sections | References (many) |  | Only `sectionBlock`, order preserved |

**Validations**
- `slug`: **unique**
- `sections`: only allow `sectionBlock`

---

## 3) `eddSection` (École de devoirs detail pages)

Used for `/ecole-devoirs/[slug]`.

**Content type ID:** `eddSection`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `slug` | Slug | Short text | ✅ | Unique URL segment |
| `title` | Title | Short text | ✅ | Full page title |
| `menuTitle` | Menu title | Short text | ✅ | Short label for cards/nav |
| `image` | Image | Media (1 file) |  | Hero/card image |
| `shortDescription` | Short description | Long text | ✅ | For listing cards/meta |
| `intro` | Intro paragraphs | List – Long text |  | Optional intro paragraphs |
| `sections` | Content sections | References (many) |  | Optional: reuse `sectionBlock` for structured content |
| `body` | Body (fallback) | Rich text |  | If you don’t use `sections` |

**Validations**
- `slug`: **unique**
- `sections`: only allow `sectionBlock`

---

## 4) `approbation` (optional, referenced by `titresServiceModule`)

**Content type ID:** `approbation`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `region` | Région | Short text | ✅ | e.g. Wallonie |
| `certificate` | Certificate | Short text | ✅ | e.g. E10240 |
| `date` | Date | Short text |  | Human text date |

---

## 5) `titresServiceModule` (Titres-Services module detail pages)

Used for `/titres-services/[slug]` and the `/titres-services` catalogue listing.

**Content type ID:** `titresServiceModule`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `slug` | Slug | Short text | ✅ | Unique URL |
| `titre` | Titre | Short text | ✅ | Full title |
| `titreCourt` | Titre court | Short text |  | Short label |
| `description` | Description | Long text | ✅ | Main description |
| `descriptionCourte` | Description courte | Long text | ✅ | For cards/listings |
| `objectifsIntro` | Objectifs intro | Long text |  | Intro before list |
| `objectifs` | Objectifs | List – Short text |  | Bullet list |
| `modalitesPedagogie` | Modalités pédagogie | Long text | ✅ |  |
| `evaluationSuivi` | Évaluation et suivi | Long text | ✅ |  |
| `supportsLogistiques` | Supports logistiques | Long text | ✅ |  |
| `publicVise` | Public visé | Short text | ✅ |  |
| `approbation` | Approbation(s) | References (many) |  | Only `approbation` |
| `duree` | Durée | Short text | ✅ | e.g. “4 heures / Groupe” |
| `category` | Catégorie | Short text | ✅ | One of: `outils-numeriques`, `techniques-prevention`, `bien-etre-savoir-faire` |
| `image` | Image | Media (1 file) |  |  |
| `isPlaceholder` | Contenu à venir | Boolean |  | If true, show placeholder UI |

**Validations**
- `slug`: **unique**
- `category`: restricted to allowed values above
- `approbation`: only allow `approbation`

---

## 6) `legalPage` (Mentions légales, Politique de confidentialité)

Replaces `src/lib/content/legalPagesContent.tsx` (currently React nodes).

**Content type ID:** `legalPage`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `slug` | Slug | Short text | ✅ | `mentions-legales` or `politique-de-confidentialite` |
| `title` | Title | Short text | ✅ | Page title |
| `seoTitle` | SEO title | Short text |  |  |
| `seoDescription` | SEO description | Long text |  |  |
| `sections` | Sections | References (many) |  | Only `legalSection`, order preserved |

**Validations**
- `slug`: **unique**
- `sections`: only allow `legalSection`

### 6.1) `legalSection`

**Content type ID:** `legalSection`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `internalName` | Internal name | Short text |  |  |
| `title` | Title | Short text | ✅ | Section heading |
| `body` | Body | Rich text | ✅ | Section content |

---

## 7) `siteSettings` (singleton)

Site-wide editable content (footer, contact, socials, newsletter copy).

**Content type ID:** `siteSettings`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `internalName` | Internal name | Short text | ✅ | Set to `default` |
| `footerAboutTitle` | Footer about title | Short text |  |  |
| `footerAboutDescription` | Footer about description | Long text |  |  |
| `contactEmail` | Contact email | Short text |  |  |
| `contactPhone` | Contact phone | Short text |  |  |
| `contactAddress` | Contact address | Short text |  |  |
| `companyNumber` | Company number | Short text |  |  |
| `socialLinkedin` | LinkedIn URL | Short text |  |  |
| `socialInstagram` | Instagram URL | Short text |  |  |
| `socialFacebook` | Facebook URL | Short text |  |  |
| `socialYoutube` | YouTube URL | Short text |  |  |
| `gdprImage` | GDPR image | Media (1 file) |  |  |
| `gdprText` | GDPR text | Long text |  |  |
| `newsletterTitle` | Newsletter title | Short text |  |  |
| `newsletterDescription` | Newsletter description | Long text |  |  |
| `newsletterEmailPlaceholder` | Newsletter email placeholder | Short text |  |  |
| `newsletterSubmitLabel` | Newsletter submit label | Short text |  |  |
| `rebrandingToastEnabled` | Rebranding toast enabled | Boolean |  | Show/hide the “rebranding” toast site-wide |
| `rebrandingToastDurationMs` | Rebranding toast duration (ms) | Number |  | Toast duration in milliseconds (e.g. `5000`) |

**Validations**
- `internalName`: required (treat as singleton key)

---

## 8) `navigationMenu` (singleton)

Editable menu structure, including optional submenu image.

**Content type ID:** `navigationMenu`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `internalName` | Internal name | Short text | ✅ | Set to `default` |
| `items` | Items | References (many) | ✅ | Only `navigationItem`, order preserved |

### 8.1) `navigationItem`

**Content type ID:** `navigationItem`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `title` | Title | Short text | ✅ | Menu label |
| `link` | Link | Short text | ✅ | Route path or URL |
| `submenuLinks` | Submenu links | References (many) |  | Only `navigationLink`, order preserved |
| `submenuImage` | Submenu image | Media (1 file) |  |  |

### 8.2) `navigationLink`

**Content type ID:** `navigationLink`

| Field ID | Name (display) | Type | Required | Notes |
|---|---|---:|:---:|---|
| `title` | Title | Short text | ✅ |  |
| `link` | Link | Short text | ✅ |  |

