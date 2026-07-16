---
level: 4
chapters:
  - id: topologie
    weight: 100
tags: [espace de suites, norme sup, forme linéaire continue]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 54"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. La suite nulle tend vers 0. Si $u,v\to0$ et $\alpha\in\mathbb R$, alors $u+\alpha v\to0$ (opérations sur les
  limites) : $E$ est un sous-espace vectoriel.

  2. (a) $\|u\|$ existe car $u$ convergente donc bornée. Séparation, homogénéité et inégalité triangulaire du
  sup découlent des mêmes propriétés pour $|\cdot|$.
  (b) $|u_n|\leqslant\|u\|$ donne $|u_n/2^{n+1}|\leqslant\|u\|/2^{n+1}$, et $\sum \|u\|/2^{n+1}$ converge (série
  géométrique de raison $\frac12$) : par comparaison, $\sum u_n/2^{n+1}$ converge absolument, donc converge, et
  $|f(u)|\leqslant\sum_{n=0}^{+\infty} \|u\|/2^{n+1} = \|u\|$.

  3. $f$ clairement linéaire, et $|f(u)|\leqslant\|u\|$ (propriété $P_3$ de continuité d'une application
  linéaire) : $f$ est continue sur $E$.
method:
  title: "Méthode : continuité d'une forme linéaire sur un espace de suites"
  content: >
    Majorer $|f(u)|$ par $k\|u\|$ (ici $k=1$) reste le réflexe standard, même sur un espace de suites plutôt que
    $\mathbb R^n$ — la structure de la preuve ($P_3$ de l'exercice 36) est identique, seule la nature de $E$ change.
---

Soit $E$ l'ensemble des suites réelles convergeant vers 0.

1. Prouver que $E$ est un sous-espace vectoriel de l'espace des suites réelles.

2. On pose $\forall u=(u_n)\in E, \|u\| = \sup_n |u_n|$.
   a) Prouver que $\|\cdot\|$ est une norme sur $E$.
   b) Prouver que $\forall u\in E$, $\sum \dfrac{u_n}{2^{n+1}}$ converge.
   c) On pose $f(u) = \sum_{n=0}^{+\infty} \dfrac{u_n}{2^{n+1}}$. Prouver que $f$ est continue sur $E$.
