# APSED — Site vitrine officiel

> **L'esprit sportif, la force des entreprises.**
> Site vitrine d'APSED : organisation d'événements sportifs pour les entreprises (Djibouti).

Développé par **SOPROSYS** — Next.js 14 (App Router) + Sanity CMS + TypeScript + Tailwind CSS.

---

## ✨ Fonctionnalités

- **Site vitrine multi-sections** (accueil, services, à propos, événements, contact), entièrement **responsive**.
- **CMS Sanity** : publication des **actualités** et **événements** sans toucher au code, via l'interface `/studio`.
- **Formulaire de contact sécurisé** (validation, anti-spam, limitation de débit, envoi e-mail).
- **Bouton WhatsApp** flottant et **call-to-action** vers la prise de contact.
- **Google Maps** intégré.
- **SEO** : métadonnées Open Graph, `sitemap.xml` et `robots.txt` générés automatiquement.
- **Sécurité renforcée** : en-têtes HTTP stricts + CSP (voir [SECURITY.md](./SECURITY.md)).

---

## 🧱 Stack technique

| Élément        | Technologie            |
| -------------- | ---------------------- |
| Framework      | Next.js 14 (App Router)|
| Langage        | TypeScript             |
| Styles         | Tailwind CSS           |
| CMS            | Sanity v3              |
| Hébergement    | Vercel (recommandé)    |
| E-mail contact | Resend (optionnel)     |

---

## 🚀 Démarrage rapide

### 1. Pré-requis
- Node.js **≥ 18.17**
- Un compte [Sanity](https://www.sanity.io) (gratuit)

### 2. Installation

```bash
git clone <url-du-depot>
cd apsed-website
npm install
```

### 3. Configuration

```bash
cp .env.example .env.local
```

Puis renseigne les variables dans `.env.local` (voir le tableau ci-dessous).

### 4. Lancement en développement

```bash
npm run dev
```

- Site : <http://localhost:3000>
- Administration (CMS) : <http://localhost:3000/studio>

---

## 🔑 Variables d'environnement

| Variable                          | Public | Description                              |
| --------------------------------- | :----: | ---------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`   |   ✅   | ID du projet Sanity                      |
| `NEXT_PUBLIC_SANITY_DATASET`      |   ✅   | Dataset (`production`)                   |
| `NEXT_PUBLIC_SANITY_API_VERSION`  |   ✅   | Version de l'API Sanity                  |
| `SANITY_API_READ_TOKEN`           |   ❌   | Token de lecture (preview, optionnel)    |
| `NEXT_PUBLIC_SITE_URL`            |   ✅   | URL publique du site                     |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`     |   ✅   | Numéro WhatsApp (format intl, sans `+`)  |
| `NEXT_PUBLIC_CONTACT_EMAIL`       |   ✅   | E-mail de contact affiché                |
| `RESEND_API_KEY`                  |   ❌   | Clé API Resend pour l'envoi des e-mails  |
| `CONTACT_TO_EMAIL`                |   ❌   | Destinataire des messages du formulaire  |
| `CONTACT_FROM_EMAIL`              |   ❌   | Expéditeur (domaine vérifié sur Resend)  |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | ✅  | URL d'intégration Google Maps (iframe)   |

> ⚠️ Les variables sans `NEXT_PUBLIC_` sont **secrètes** et ne doivent jamais être exposées côté client ni committées.

---

## 🗂️ Initialiser le CMS Sanity

1. Crée un projet sur <https://www.sanity.io/manage> et récupère le **Project ID**.
2. Renseigne `NEXT_PUBLIC_SANITY_PROJECT_ID` et `NEXT_PUBLIC_SANITY_DATASET` dans `.env.local`.
3. Dans **Sanity → API → CORS origins**, ajoute :
   - `http://localhost:3000`
   - l'URL de production (ex. `https://www.apsed.dj`)
4. Lance `npm run dev`, ouvre `/studio`, connecte-toi : tu peux créer **Événements** et **Actualités**.

Les contenus publiés apparaissent automatiquement sur le site (revalidation toutes les 60 s).

---

## ☁️ Déploiement (Vercel)

1. Pousse le dépôt sur GitHub.
2. Sur [Vercel](https://vercel.com), importe le dépôt.
3. Ajoute toutes les variables d'environnement (onglet **Settings → Environment Variables**).
4. Déploie. Le HTTPS/SSL est automatique.
5. **Domaine** : ajoute `apsed.dj` dans Vercel, puis configure le DNS chez ton registrar
   (enregistrements fournis par Vercel). C'est l'étape « liaison DNS + SSL + mise en ligne » du contrat.

---

## 🛠️ Scripts disponibles

```bash
npm run dev        # développement
npm run build      # build de production
npm run start      # serveur de production
npm run lint       # ESLint
npm run typecheck  # vérification TypeScript
npm run audit      # audit de sécurité des dépendances
```

---

## 📚 Formation rapide à l'administration

Voir le guide pas-à-pas : [`docs/GUIDE-ADMIN.md`](./docs/GUIDE-ADMIN.md).

---

## 🔒 Sécurité

L'ensemble des mesures est détaillé dans [SECURITY.md](./SECURITY.md).

---

© APSED — Conçu et développé par SOPROSYS.
