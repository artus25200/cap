---
level: 3
chapters:
  - id: probas
    weight: 100
tags: [Bayes, probabilité conditionnelle]
banque: "CCINP"
classic: true
hints:
  - "Identifie clairement l'événement dont tu connais la probabilité a priori, et celui que tu cherches a posteriori."
  - "La formule des probabilités totales te donne le dénominateur de Bayes."
correction: |
  On note A l'événement dont on cherche la probabilité a posteriori et B
  l'événement observé. La formule de Bayes donne
  P(A|B) = P(B|A)·P(A) / P(B), où P(B) se calcule par la formule des
  probabilités totales en sommant sur tous les cas possibles pour A.
method:
  title: "Méthode : appliquer la formule de Bayes"
  content: >
    Toujours écrire explicitement ce que donne l'énoncé (probabilités a
    priori et conditionnelles) avant de se jeter sur la formule. Calculer
    le dénominateur via les probabilités totales est souvent l'étape qui
    prend le plus de temps.
course: |
  Formule de Bayes : P(A|B) = P(B|A)·P(A) / P(B).
  Probabilités totales : P(B) = Σ P(B|A_i)·P(A_i) sur un système complet
  d'événements (A_i).
---

Calculer une probabilité conditionnelle avec la formule de Bayes.
