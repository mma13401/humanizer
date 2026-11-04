---
name: ship
description: Livre les changements en cours - tests, commit, push sur la branche de travail, PR en brouillon, suivi de la CI. À utiliser quand l'utilisateur dit "ship", "livre", "pousse", "ouvre une PR" ou "envoie ça".
argument-hint: "[message de commit]"
disable-model-invocation: true
---

# Ship

1. `git status` : s'il n'y a rien à livrer, le dire et s'arrêter.
2. Lancer `npm test`. En cas d'échec, corriger la cause (jamais désactiver un test) ou signaler le blocage.
3. Commiter avec un message clair (l'argument s'il est donné), avec les lignes d'attribution demandées par la session.
4. Pousser sur la branche de travail désignée (`git push -u origin <branche>`). Si sa PR précédente est déjà fusionnée, repartir de `origin/main` avant de commiter.
5. Ouvrir une PR en brouillon vers `main` si aucune n'est ouverte, puis s'abonner à son activité pour corriger la CI et répondre aux commentaires.
6. Ne fusionner que si l'utilisateur le demande explicitement.
7. Proposer `/record` pour consigner la livraison.
