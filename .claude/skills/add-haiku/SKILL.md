---
name: add-haiku
description: Ajoute un haïku (texte en 3 lignes + image) à haikus.json et vérifie le résultat. À utiliser quand l'utilisateur veut ajouter, écrire ou proposer un haïku pour le site.
argument-hint: "[thème ou texte du haïku] [nom de fichier image]"
disable-model-invocation: true
---

# Add haiku

1. Si l'utilisateur ne donne pas de texte, en écrire un sur le thème demandé : 3 lignes en minuscules, 5-7-5 syllabes, ton léger comme les existants de `haikus.json`.
2. Choisir l'image : celle fournie, sinon une image déjà présente dans `public/images/`. Ne jamais référencer un fichier absent ; si l'utilisateur donne une nouvelle image, la placer dans `public/images/`.
3. Ajouter l'objet `{ "text": "ligne1,\nligne2,\nligne3", "image": "fichier" }` à la fin du tableau de `haikus.json` (indentation de 4 espaces, comme le reste).
4. Lancer `npm test` : il vérifie 3 lignes par haïku et l'existence de l'image.
5. Montrer le haïku ajouté. Ne pas commiter sans demande.
