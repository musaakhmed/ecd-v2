# Espace Forma — évaluations

App Next.js **indépendante** du site vitrine. Vous pouvez déplacer ce dossier, le déployer seul (Vercel, VPS, etc.) et arrêter le site marketing : les formulaires continueront de fonctionner.

## Lancer en local

```bash
cd evaluations
pnpm install
pnpm dev
```

Ouvre [http://localhost:3002](http://localhost:3002).

## Envoi des PDF

Copiez `.env.example` vers `.env` et renseignez :

- `RESEND_API_KEY`
- `EVALUATIONS_FROM_EMAIL` (domaine vérifié chez Resend, pas une adresse Outlook)
- `EVALUATIONS_TO_EMAIL` (défaut : `ecdasbl@outlook.be`)

## Production

```bash
pnpm build
pnpm start
```

En production l’app est sur [https://evaluations.espaceforma.be](https://evaluations.espaceforma.be). Le site vitrine redirige `/quiz1a`, `/quiz1b`, `/quiz2`, `/evaluation-ts` et `/evaluations` vers cette origine (`EVALUATIONS_ORIGIN`, défaut `https://evaluations.espaceforma.be`).

Ou reliez ce dossier à un projet Vercel séparé. Anciens liens :

- `/quiz1a` → `/quiz-1a`
- `/quiz1b` → `/quiz-1b`
- `/quiz2` → `/quiz-2`
- `/evaluation-ts` → `/titres-services`
- `/evaluations` → `/`
