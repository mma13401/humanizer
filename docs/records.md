## 2026-11-04 — Création du skill record et correctif CI

- **Contexte :** Besoin d'un skill pour consigner des notes de session ; la CI échouait car `package.json` n'a pas de script `test`.
- **Décision / résultat :** Skill `record` ajouté dans `.claude/skills/record/SKILL.md` ; étape `npm test` retirée du workflow Node.js CI. PR #1 fusionnée dans `main`.
- **Suites :** aucune
