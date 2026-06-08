# Politique de sécurité — Site APSED

Ce document décrit les mesures de sécurité mises en place sur le site et la
procédure de signalement de vulnérabilité.

## Signaler une vulnérabilité

En cas de découverte d'une faille, merci de **ne pas** ouvrir d'issue publique.
Contactez directement l'équipe technique SOPROSYS par e-mail. Nous accusons
réception sous 72 heures.

## Mesures de sécurité en place

### En-têtes HTTP (next.config.mjs)
- **Content-Security-Policy** : restreint les sources de scripts, styles,
  images, polices et iframes aux domaines explicitement autorisés.
- **Strict-Transport-Security (HSTS)** : force le HTTPS (préchargement activé).
- **X-Frame-Options: SAMEORIGIN** : protège contre le clickjacking.
- **X-Content-Type-Options: nosniff** : empêche le MIME-sniffing.
- **Referrer-Policy** et **Permissions-Policy** : limitent les fuites
  d'information et l'accès aux API sensibles (caméra, micro, géolocalisation).
- En-tête `X-Powered-By` supprimé.

### Formulaire de contact (API)
- **Validation stricte** des entrées avec Zod (longueurs, formats).
- **Échappement HTML** systématique avant insertion dans l'e-mail.
- **Champ piège (honeypot)** anti-robots.
- **Limitation de débit** par IP (5 requêtes / minute).
- Seule la méthode `POST` est acceptée.

### Gestion des secrets
- Aucune clé secrète n'est exposée côté client (préfixe `NEXT_PUBLIC_`
  réservé aux valeurs publiques).
- Les fichiers `.env*` sont ignorés par Git (`.gitignore`).
- Les secrets de production sont stockés dans le gestionnaire de l'hébergeur
  (Vercel / variables d'environnement).

### Administration (Sanity Studio)
- L'accès à `/studio` est protégé par l'authentification Sanity : seuls les
  comptes ajoutés au projet peuvent se connecter.
- Les routes `/studio` et `/api` sont exclues de l'indexation des moteurs.

### Dépendances
- **Dependabot** ouvre automatiquement des PR de mise à jour de sécurité.
- La CI exécute `npm audit` à chaque push.

## Bonnes pratiques d'exploitation
- Activer le HTTPS/SSL chez l'hébergeur (automatique sur Vercel).
- Limiter les membres ayant accès au projet Sanity et à l'hébergeur.
- Renouveler les tokens API en cas de doute.
