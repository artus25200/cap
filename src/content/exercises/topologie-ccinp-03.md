---
level: 4
chapters:
  - id: topologie
    weight: 100
tags: [adhérence, caractérisation séquentielle, sous-espace vectoriel]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 34"
banque: "CCINP"
classic: true
correction: |
  1. $a\in\overline A \iff \forall V\in\mathcal V(a), V\cap A\neq\emptyset \iff \forall r>0, B(a,r)\cap A\neq\emptyset$.

  2. ($\Rightarrow$) Si $x\in\overline A$, alors $\forall n, B(x,1/n)\cap A\neq\emptyset$ donne $x_n\in A$ avec
  $\|x_n-x\|<1/n$, donc $x_n\to x$.
  ($\Leftarrow$) Si $x_n\to x$ avec $x_n\in A$, tout voisinage $V$ de $x$ contient une boule $B(x,\varepsilon)$,
  et pour $n$ assez grand $x_n\in B(x,\varepsilon)\cap A$, donc $V\cap A\neq\emptyset$ : $x\in\overline A$.

  3. Si $A$ est un sev, $0_E\in A\subset\overline A$. Pour $(x,y)\in\overline A^2, \lambda\in\mathbb K$, prendre
  des suites $x_n,y_n\in A$ convergeant vers $x,y$ : $x_n+\lambda y_n \in A$ (car $A$ sev) et converge vers
  $x+\lambda y$, donc $x+\lambda y\in\overline A$.

  4. Par la caractérisation séquentielle appliquée coordonnée par coordonnée : $(x,y)\in\overline{A\times B} \iff \exists (x_n,y_n)\in(A\times B)^{\mathbb N}, (x_n,y_n)\to(x,y) \iff x_n\to x, y_n\to y \iff x\in\overline A, y\in\overline B \iff (x,y)\in\overline A\times\overline B$.
---

Soit $A$ une partie non vide d'un $\mathbb{R}$-espace vectoriel normé $E$.

1. Rappeler la définition d'un point adhérent à $A$.

2. Démontrer que $x\in\overline A \iff \exists (x_n)$ à valeurs dans $A$ avec $\lim x_n = x$.

3. Démontrer que si $A$ est un sous-espace vectoriel de $E$, alors $\overline A$ l'est aussi.

4. Soit $B$ une autre partie non vide de $E$. Montrer que $\overline{A\times B} = \overline A \times \overline B$.
