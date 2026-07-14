---
level: 3
chapters:
  - id: algebre
    weight: 100
  - id: matrices
    weight: 30
tags: [noyau, application linéaire]
banque: "Mines-Ponts"
classic: true
hints:
  - "Résous f(x) = 0 comme un système linéaire en les coordonnées de x."
  - "N'oublie pas de vérifier que ta famille génératrice du noyau est bien libre."
correction: |
  On pose f(x, y, z) et on résout f(x,y,z) = 0 comme un système linéaire.
  L'ensemble des solutions est un sous-espace vectoriel dont on extrait une
  famille génératrice libre : c'est la base cherchée du noyau.
method:
  title: "Méthode : trouver une base du noyau d'une application linéaire"
  content: >
    Résoudre f(x) = 0 comme un système linéaire homogène, exprimer les
    inconnues principales en fonction des inconnues secondaires, puis lire
    directement une famille génératrice du noyau — elle est automatiquement
    libre par construction.
course: |
  dim(Ker f) + dim(Im f) = dim(espace de départ) — théorème du rang.
---

Déterminer une base du noyau d'une application linéaire donnée.
