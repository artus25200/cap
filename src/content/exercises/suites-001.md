---
level: 3
chapters:
  - id: suites
    weight: 100
tags: [convergence, récurrence]
banque: "Centrale-Supélec"
classic: true
hints:
  - "Étudie d'abord la fonction f : x ↦ √(x+2) : sens de variation, points fixes."
  - "Montre que la suite est bien définie (positivité) avant de parler de monotonie."
correction: |
  f(x) = √(x+2) est croissante sur [-2, +∞[. Le point fixe vérifie
  l = √(l+2), soit l² - l - 2 = 0, donc l = 2 (l'autre racine est négative
  et hors du domaine pertinent). On montre par récurrence que (u_n) reste
  dans [0, 2] puis, selon la position de u_0, que la suite est monotone et
  bornée, donc convergente vers 2.
method:
  title: "Méthode : suite récurrente u_{n+1} = f(u_n)"
  content: >
    1) Étudier f (variations, points fixes). 2) Montrer que la suite reste
    dans un intervalle stable par f. 3) Étudier la monotonie via le signe
    de f(x) - x. 4) Conclure par le théorème de la limite monotone, puis
    identifier la limite comme point fixe de f.
course: |
  Théorème de la limite monotone : toute suite croissante majorée (ou
  décroissante minorée) converge.
---

Étudier la convergence de (u_n) définie par u_{n+1} = √(u_n + 2).
