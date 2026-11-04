# Guide d'utilisation

## Les trois skills (à taper dans Claude Code)

| Commande | À quoi ça sert | Exemple |
|---|---|---|
| `/record` | Consigne une note datée dans `docs/records.md` | `/record --court #décision CI sans npm test` |
| `/add-haiku` | Ajoute un haïku à `haikus.json` et vérifie | `/add-haiku un haïku sur le café, image Robotocat.jpeg` |
| `/ship` | Tests, commit, push, PR en brouillon, suivi CI | `/ship Ajout d'un haïku` |

Flux typique : `/add-haiku` → `/ship` → (PR relue et fusionnée sur votre demande) → `/record`.

## Tests
`npm test` vérifie les haïkus (3 lignes, image présente) et que la page `/` répond avec tous les haïkus.

## Bon à savoir
- Rien n'est fusionné sans votre demande explicite.
- `/add-haiku` et `/ship` ne se lancent que si vous les tapez.
- Le journal `docs/records.md` est en ajout seul.
