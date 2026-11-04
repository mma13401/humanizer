# Haikus for Mona

Petit site Express + EJS qui affiche des haïkus (`haikus.json`) avec une image (`public/images/`).

## Structure
- `app.js` : application Express (exportée, testable) ; `index.js` : démarre le serveur.
- `views/index.ejs`, `public/css/main.css` : page unique.
- `test/` : tests `node:test` (aucune dépendance en plus).

## Commandes
- `npm start` : serveur sur `PORT` (3000 par défaut) ; `npm run dev` : nodemon.
- `npm test` : tests ; ils tournent aussi en CI (Node 18/20/22).

## Règles
- Un haïku = 3 lignes dans `text` + une `image` existante dans `public/images/`.
- Ne jamais désactiver ou supprimer un test pour faire passer la CI.
- Skills du projet : `/record` (journal `docs/records.md`), `/add-haiku`, `/ship`. Guide : `docs/guide.md`.
