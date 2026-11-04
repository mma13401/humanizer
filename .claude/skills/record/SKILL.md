---
name: record
description: Enregistre dans docs/records.md une note datée (décision, changement, apprentissage) issue de la session en cours. À utiliser quand l'utilisateur demande de "record", enregistrer, consigner ou noter quelque chose.
---

# Record

Consigne une entrée concise dans `docs/records.md` (créer le fichier et le dossier s'ils n'existent pas).

## Étapes

1. Déterminer ce qu'il faut enregistrer : l'argument donné par l'utilisateur, sinon un résumé de la session (décisions prises, fichiers modifiés, points en suspens).
2. Ajouter à la fin de `docs/records.md` une entrée au format :

   ```
   ## YYYY-MM-DD — <titre court>

   - **Contexte :** <pourquoi>
   - **Décision / résultat :** <quoi>
   - **Suites :** <à faire, ou "aucune">
   ```
3. Ne jamais modifier ni supprimer les entrées existantes (journal en ajout seul).
4. Ne pas inclure de secrets, jetons ou données personnelles.
5. Confirmer à l'utilisateur en citant le titre de l'entrée ajoutée.
