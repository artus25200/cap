---
level: 4
chapters:
  - id: integrales-generalisees
    weight: 100
tags: [critères d'intégrabilité, équivalents, fonctions de Riemann]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 28"
banque: "CCINP - Banque orale MP/MPI"
classic: true
hints:
  - "Pour chaque borne problématique, cherche un équivalent simple de la fonction et compare-le à une fonction de Riemann de référence."
correction: |
  1. $f(x) = \frac{e^{-x}}{\sqrt{x^2-4}}$ continue sur $]2,+\infty[$. Près de 2 : $f(x) \sim \frac{e^{-2}}{2\sqrt2
  (x-2)^{1/2}}$, intégrable sur $]2,3]$ (Riemann en $\frac12<1$). En $+\infty$ : $f(x)\sim \frac{e^{-x}}{x} =:
  g(x)$, et $x^2g(x)\to0$ donc $g=o(1/x^2)$, intégrable sur $[3,+\infty[$. Donc $f$ est intégrable sur $]2,+\infty[$.

  2. $f(x) = \frac{\ln x}{\sqrt{1+x^{2a}}}$. Près de 0 : $|f(x)| \sim |\ln x|$, et $x^{1/2}|\ln x| \to 0$ donc
  $|f|=o(1/x^{1/2})$, intégrable sur $]0,1]$.
  - Si $a>1$ : en $+\infty$, $f(x)\sim \frac{\ln x}{x^a}$, et $x^{(1+a)/2}\cdot\frac{\ln x}{x^a}\to0$ (car
  $\frac{1+a}{2}<a$), donc $f=o(1/x^{(1+a)/2})$ avec $\frac{1+a}{2}>1$ : intégrable sur $[1,+\infty[$. Donc $f$
  est intégrable sur $]0,+\infty[$.
  - Si $a\leqslant1$ : en $+\infty$, $f(x)\sim \frac{\ln x}{x^a} \geqslant \frac1{x^a}$ à partir d'un certain
  rang, non intégrable (Riemann, $a\leqslant1$). Donc $f$ n'est pas intégrable sur $]0,+\infty[$.
method:
  title: "Méthode : étudier l'intégrabilité borne par borne via des équivalents"
  content: >
    Sur un intervalle ouvert aux deux bouts (ou avec une singularité), traiter CHAQUE borne séparément : trouver
    un équivalent simple de la fonction près de cette borne, le comparer à une fonction de Riemann de référence
    ($1/x^\alpha$), et conclure par le critère d'équivalence. L'intégrabilité globale nécessite l'intégrabilité
    sur chaque morceau.
---

Les deux questions sont indépendantes.

1. La fonction $x \mapsto \dfrac{e^{-x}}{\sqrt{x^2-4}}$ est-elle intégrable sur $]2,+\infty[$ ?

2. Soit $a>0$. La fonction $x \mapsto \dfrac{\ln x}{\sqrt{1+x^{2a}}}$ est-elle intégrable sur $]0,+\infty[$ ?
