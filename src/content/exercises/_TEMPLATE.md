<!--
  GABARIT — copie ce fichier pour créer un nouvel exercice.
  Renomme-le en <chapitre-principal>-<numéro>.md (ex: suites-004.md).
  Ce fichier commence par un underscore : il est ignoré au chargement,
  tu peux le laisser tel quel dans le dossier comme référence.

  Champs obligatoires : level, chapters
  Champs optionnels : tags, source, banque, classic, hints, correction,
  method, course — laisse-les de côté si tu n'as pas le contenu, rien ne
  s'affiche à la place (pas de section vide moche sur le site).

  - chapters : liste de { id, weight }. id doit exister dans chapters.json,
    weight (1-100) = à quel point l'exercice est représentatif de CE
    chapitre. Un exercice peut être lié à plusieurs chapitres.
  - banque : nom du concours d'origine si pertinent ("Centrale-Supélec"...)
  - classic : true (par défaut) si c'est un exercice d'application directe
    classique, false si c'est plus original/inattendu
  - hints : liste d'indices, du plus léger au plus explicite
  - correction : corrigé complet, révélé après réponse
  - method : { title, content } — la méthode à retenir, s'ajoute au cahier
    de méthodes de l'étudiant une fois l'exercice réussi
  - course : rappel de cours ponctuel utile pour cet exercice

  LATEX : écris tes maths normalement, en LaTeX, avec des délimiteurs $.
  - $...$ pour du LaTeX en ligne, ex: la suite $u_{n+1} = \sqrt{u_n+2}$
  - $$...$$ pour une formule centrée sur sa propre ligne
  Ça marche dans le corps de l'énoncé ET dans hints/correction/course.
  Pas besoin d'échapper les backslashs (contrairement à du JSON) : écris
  \frac{1}{n}, \sqrt{x}, \sum_{k=0}^{n} tel quel.
-->
---
level: 3
chapters:
  - id: suites
    weight: 100
  - id: fonctions
    weight: 20
tags: [récurrence, exemple]
source: null
banque: null
classic: true
hints:
  - "Premier indice, léger."
  - "Deuxième indice, plus direct si besoin."
correction: |
  Le corrigé complet ici, avec du LaTeX si besoin : $u_{n+1} = \sqrt{u_n+2}$.
method:
  title: "Méthode : étudier une suite récurrente"
  content: "Résumé de la méthode générale à retenir pour ce type d'exercice."
course: |
  Rappel de cours ponctuel si l'exercice s'appuie sur un résultat précis.
---

Écris l'énoncé ici. Exemple avec du LaTeX : soit $(u_n)$ la suite définie
par $u_0 = 1$ et $u_{n+1} = \sqrt{u_n + 2}$. Étudier sa convergence.
