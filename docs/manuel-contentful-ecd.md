# Manuel Contentful (ECD) — Gestion de contenu (non-tech)

Ce manuel correspond à **vos types de contenus et champs réels** (définis dans `docs/contentful-content-model.md` et utilisés par `scripts/contentful/*`).

---

## 1) Se connecter et être au bon endroit

### Accès
- Ouvrez Contentful et connectez-vous avec votre compte.
- Vérifiez en haut que vous êtes dans le bon :
  - **Space** (le projet du site)
  - **Environment** (souvent `master`)

### Règle d’or
- **Rien n’apparaît sur le site tant que vous n’avez pas cliqué “Publish”.**
- Vous pouvez modifier en brouillon, puis publier quand c’est bon.

---

## 2) Les contenus que vous allez modifier (carte du site Contentful)

### A) Pages du site (type `page`)
Utilisé pour :
- **Accueil** : slug `home`
- **À propos** : slugs du type `a-propos/...`
  - `a-propos`
  - `a-propos/qui-sommes-nous`
  - `a-propos/ecole-de-devoirs`
  - `a-propos/economie-sociale`
  - `a-propos/epn`
  - `a-propos/formation-titres-services`
- **Contact** : slug `contact`
- **Nos services** : slugs du type `nos-services/...`
  - `nos-services/initiation-informatique`
  - `nos-services/maintenance-depannage-informatiques`
  - `nos-services/perfectionnement-informatique`
  - `nos-services/formations-titres-services`
- **Titres-service (page catalogue)** : slug `titres-service`
- **Inclusion numérique**
  - `inclusion-numerique`
  - `inclusion-numerique/emploi-numerique`
  - `inclusion-numerique/alpha-fle-numerique`
  - `inclusion-numerique/jeunes-connectes`
  - `inclusion-numerique/seniors-digital`
  - `inclusion-numerique/test` (page de test)

**Champs d’une `page`**
- `slug` (obligatoire) : l’URL interne de la page
- `title` (obligatoire) : titre de page
- `seoTitle` (optionnel) : titre SEO (Google)
- `seoDescription` (optionnel) : description SEO
- `heroImage` (optionnel) : grande image en haut
- `heroSubtitle` (optionnel)
- `heroEyebrow` (optionnel) : petit libellé au-dessus du titre
- `heroDescription` (optionnel) : texte d’intro
- `sections` (liste) : une liste de blocs `sectionBlock` (ordre important)

### B) Blocs de page (type `sectionBlock`)
Ce sont les “briques” dans **`page.sections`**.

**Champs d’un `sectionBlock`**
- `internalName` : nom interne pour vous repérer
- `variant` (optionnel) : variante d’affichage (si utilisée)
- `title` (optionnel)
- `body` (optionnel) : texte riche (Rich Text)
- `image` (optionnel)
- `items` (optionnel) : liste à puces
- `ctaLabel` / `ctaHref` (optionnels) : bouton et lien

### C) Menu du site (type `navigationMenu` + `navigationItem` + `navigationLink`)
Le menu principal est un “singleton”.

- `navigationMenu`
  - `internalName` = `default`
  - `items` = liste d’entrées `navigationItem` (ordre = ordre du menu)
- `navigationItem`
  - `title` (obligatoire) : texte dans le menu
  - `link` (obligatoire) : chemin (ex. `/inclusion-numerique`) ou URL
  - `submenuLinks` (optionnel) : liste de `navigationLink`
  - `submenuImage` (optionnel) : image du sous-menu
- `navigationLink`
  - `title` (obligatoire)
  - `link` (obligatoire)

### D) Réglages site / footer (type `siteSettings`)
Singleton pour le footer, contact, réseaux, newsletter, GDPR.

Entrée principale :
- `internalName` = `default`

Champs importants :
- Footer “à propos” : `footerAboutTitle`, `footerAboutDescription`
- Contact : `contactEmail`, `contactPhone`, `contactAddress`, `companyNumber`
- Réseaux : `socialLinkedin`, `socialInstagram`, `socialFacebook`, `socialYoutube`
- GDPR : `gdprImage`, `gdprText`
- Newsletter : `newsletterTitle`, `newsletterDescription`, `newsletterEmailPlaceholder`, `newsletterSubmitLabel`
- Toast “rebranding” :
  - `rebrandingToastEnabled` : activer/désactiver le toast
  - `rebrandingToastDurationMs` : durée d’affichage en millisecondes (ex. `5000` = 5 secondes)

### E) Pages légales (type `legalPage` + `legalSection`)
- Pages : `mentions-legales`, `politique-de-confidentialite`
- Une `legalPage` référence une liste ordonnée de `legalSection`.

`legalPage` :
- `slug` (obligatoire)
- `title` (obligatoire)
- `seoTitle`, `seoDescription` (optionnels)
- `sections` : liste ordonnée de `legalSection`

`legalSection` :
- `internalName` (optionnel)
- `title` (obligatoire)
- `body` (obligatoire, Rich Text)

### F) École de devoirs (type `eddSection`)
Pages du type `/ecole-devoirs/[slug]`.

Champs :
- `slug` (obligatoire)
- `title` (obligatoire)
- `menuTitle` (obligatoire)
- `shortDescription` (obligatoire)
- `image` (optionnel)
- `intro` (optionnel) : liste de paragraphes (textes longs)
- `sections` (optionnel) : blocs `sectionBlock`
- `body` (optionnel) : fallback rich text

### G) Titres-Services (type `titresServiceModule` + `approbation`)
Catalogue de modules.

`titresServiceModule` :
- `slug` (obligatoire)
- `titre` (obligatoire)
- `titreCourt` (optionnel)
- `description` (obligatoire)
- `descriptionCourte` (obligatoire)
- `objectifsIntro` (optionnel)
- `objectifs` (liste) (optionnel)
- `modalitesPedagogie` (obligatoire)
- `evaluationSuivi` (obligatoire)
- `supportsLogistiques` (obligatoire)
- `publicVise` (obligatoire)
- `approbation` (références vers `approbation`) (selon règle interne)
- `duree` (obligatoire)
- `category` (obligatoire) : `outils-numeriques`, `techniques-prevention`, `bien-etre-savoir-faire`
- `image` (optionnel)
- `isPlaceholder` (optionnel) : “contenu à venir”

`approbation` :
- `region` (obligatoire)
- `certificate` (obligatoire)
- `date` (optionnel)

---

## 3) Trouver rapidement ce que vous voulez modifier

### Méthode la plus simple
1. Allez dans **Content**.
2. Filtrez par **Content type** (ex. `page`, `siteSettings`, `navigationMenu`).
3. Recherchez par **slug** quand c’est possible.

### Slugs utiles (repères)
- Accueil : `home`
- Inclusion numérique : `inclusion-numerique`
- Sous-pages inclusion : `inclusion-numerique/...`
- Nos services : `nos-services/...`
- Mentions légales : `mentions-legales`
- Politique confidentialité : `politique-de-confidentialite`

---

## 4) Modifier une page (type `page`) — pas à pas

### A) Modifier le haut de page (Hero)
Dans l’entrée `page` :
- Modifiez `title`, `heroSubtitle`, `heroEyebrow`, `heroDescription`
- Pour l’image : `heroImage` (uploader ou choisir un asset existant)

### B) Modifier le contenu principal (Sections)
1. Dans `sections`, vous voyez une liste de références.
2. Ouvrez chaque `sectionBlock`.
3. Modifiez :
   - `title`
   - `body` (Rich Text)
   - `items` si vous avez une liste à puces
   - `image` si nécessaire
   - `ctaLabel` / `ctaHref` si vous avez un bouton

### C) Publier correctement
- Publiez d’abord les `sectionBlock` modifiés (si nécessaire).
- Puis publiez la `page`.
- Vérifiez sur le site.

---

## 5) Ajouter / réordonner des sections (sans casser la page)

### Ajouter une nouvelle section
1. Créez une nouvelle entrée **`sectionBlock`**.
2. Remplissez `internalName` (ex. `inclusionNumerique_nouvelle_section`).
3. Remplissez `title` + `body` (et `items` / `image` si besoin).
4. Publiez le `sectionBlock`.
5. Revenez sur la `page` et ajoutez-le dans `sections`.
6. Publiez la `page`.

### Réordonner
- Dans `page.sections`, changez l’ordre des références (glisser-déposer si disponible).
- Publiez la `page`.

---

## 6) Modifier le menu du site

### Où aller
- Content → type `navigationMenu`
- Ouvrir l’entrée avec `internalName = default`

### Modifier un item
- Dans `items`, ouvrez le `navigationItem` concerné.
- Changez `title` / `link` / `submenuLinks` / `submenuImage` si besoin.
- Publiez le `navigationItem`, puis publiez le `navigationMenu`.

### Ajouter un item
1. Créez un `navigationItem`.
2. Remplissez `title` + `link`.
3. Ajoutez éventuellement des `navigationLink` dans `submenuLinks`.
4. Publiez le `navigationItem`.
5. Ajoutez-le dans `navigationMenu.items`.
6. Publiez `navigationMenu`.

---

## 7) Modifier le footer / contact / réseaux / newsletter (siteSettings)

### Où aller
- Content → type `siteSettings`
- Entrée `internalName = default`

### Publication
- Publiez `siteSettings` après vos changements.

---

## 8) Modifier les pages légales

### Où aller
- Content → type `legalPage`
- Ouvrez `mentions-legales` ou `politique-de-confidentialite`

### Comment éditer
- Ouvrez les `legalSection` depuis `legalPage.sections`
- Modifiez `title` et `body` (Rich Text)

### Publication
- Publiez les `legalSection` modifiées puis la `legalPage`.

---

## 9) Règles anti-erreurs

### A) Ne changez pas un `slug` sans raison
- Le `slug` correspond à l’URL.
- Le changer peut casser des liens.

### B) Brouillon vs publié
- Draft : pas sur le site
- Changed : modifié mais pas republié
- Published : sur le site

### C) Images (Assets)
- Évitez de supprimer un asset : il peut être utilisé ailleurs.

### D) Contenus “JSON dump” (à manipuler avec prudence)
Certaines pages/sections ont un bloc nommé **“Contenu”** qui contient du JSON (c’est une solution temporaire pour rendre tout éditable).

Si vous modifiez ce bloc :
- gardez les **guillemets**, **virgules** et **accolades** exactement corrects
- modifiez uniquement les valeurs nécessaires
- si vous avez un doute, faites une capture avant modification et demandez une relecture

---

## 10) Checklist avant “Publish”
- Orthographe et dates OK
- Liens testés
- Images OK
- Pour une `page` : sections dans le bon ordre
- SEO (si rempli) : `seoTitle` + `seoDescription` cohérents

