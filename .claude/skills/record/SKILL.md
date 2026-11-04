---
name: record
description: Enregistre dans docs/records.md une note datée (décision, changement, apprentissage, incident) issue de la session. À utiliser quand l'utilisateur demande de "record", enregistrer, consigner ou noter quelque chose, ou termine une session.
argument-hint: "[--court|--détaillé] [#étiquette ...] [texte à consigner]"
---

# Record

Journal en ajout seul dans `docs/records.md` (créer le fichier et le dossier s'ils n'existent pas).

## Arguments

- Texte libre : ce qu'il faut consigner. Absent → résumer la session (décisions, fichiers modifiés, points en suspens).
- `--court` : une seule ligne de décision, sans contexte ni suites.
- `--détaillé` : ajoute les alternatives écartées et les fichiers touchés.
- `#étiquette` (ex. `#décision`, `#bug`, `#ci`, `#idée`) : à reporter dans le titre. Sans étiquette, en choisir une.

## Étapes

1. Lire la fin de `docs/records.md` pour ne pas dupliquer une entrée du jour.
2. Ajouter à la fin du fichier :

   ```
   ## YYYY-MM-DD — <titre court> `#étiquette`

   - **Contexte :** <pourquoi>
   - **Décision / résultat :** <quoi>
   - **Suites :** <à faire, ou "aucune">
   ```
   (en `--court`, seulement le titre et la ligne **Décision / résultat**.)
3. Ne jamais modifier ni supprimer les entrées existantes.
4. Ne pas inclure de secrets, jetons ou données personnelles.
5. Si un lien existe (PR, issue, commit), l'ajouter dans **Contexte**.
6. Confirmer en citant le titre ajouté. Proposer de commiter, sans le faire sans accord.
