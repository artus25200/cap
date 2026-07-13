<!--
  GABARIT — copie ce fichier pour créer un nouvel exercice.
  Renomme-le en <chapitre-principal>-<numéro>.md (ex: suites-004.md).
  Ce fichier commence par un underscore : il est ignoré au chargement,
  tu peux le laisser tel quel dans le dossier comme référence.

  Règles :
  - un fichier = un exercice, jamais deux exercices dans le même fichier
  - "chapters" est obligatoire et prend une liste de { id, weight }
    - id doit correspondre à un id présent dans src/content/chapters.json
    - weight est un pourcentage (0-100) : à quel point l'exercice est
      représentatif de CE chapitre. 100 = exercice canonique du chapitre.
      Un exercice peut apparaître dans plusieurs chapitres avec des poids
      différents (ex: un exo d'algèbre qui utilise un peu de complexes).
  - "id" est optionnel : si absent, le nom du fichier (sans .md) sert d'id.
    Autant le laisser vide et nommer le fichier proprement.
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
---

Écris l'énoncé de l'exercice ici, en texte simple (les sauts de ligne
et paragraphes sont conservés). Pas besoin d'échapper les backslashs,
contrairement à du JSON — pratique si tu écris des expressions type
\frac{1}{n} ou des indices.
