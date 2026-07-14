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
  Le corrigé complet ici. Pas besoin d'échapper les backslashs,
  contrairement à du JSON — pratique pour \frac{1}{n} ou des indices.
method:
  title: "Méthode : étudier une suite récurrente"
  content: "Résumé de la méthode générale à retenir pour ce type d'exercice."
course: |
  Rappel de cours ponctuel si l'exercice s'appuie sur un résultat précis.
---

Écris l'énoncé de l'exercice ici, en texte simple.
