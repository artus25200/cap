---
level: 4
chapters:
  - id: topologie
    weight: 100
tags: [adhérence, convexité, distance à une partie]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 45"
banque: "CCINP"
classic: true
correction: |
  1. (a) $x\in\overline A \iff \exists(x_n)\subset A, x_n\to x$.
  (b) Soit $(x,y)\in\overline A^2, t\in[0,1]$. Prendre $x_n,y_n\in A$ convergeant vers $x,y$. $A$ convexe donne
  $z_n=tx_n+(1-t)y_n\in A$, et $z_n\to tx+(1-t)y=:z$. Donc $z\in\overline A$ : $\overline A$ est convexe.

  2. (a) $d_A(x)=0$ signifie $\forall\varepsilon>0,\exists a\in A, \|x-a\|<\varepsilon$ : en prenant
  $\varepsilon=1/n$, on construit $(a_n)\subset A$ avec $a_n\to x$, donc $x\in\overline A$.
  (b) Soit $x,y\in\overline A$ (donc $d_A(x)=d_A(y)=0$ d'après le sens direct habituel), $t\in[0,1]$.
  L'hypothèse donne $d_A(tx+(1-t)y) \leqslant t\cdot0+(1-t)\cdot0=0$, donc par 2.(a),
  $tx+(1-t)y\in\overline A=A$ ($A$ fermée) : $A$ est convexe.
method:
  title: "Méthode : convexité et adhérence via suites"
  content: >
    L'adhérence d'un convexe est convexe : combiner deux suites convergentes coordonnée par coordonnée (via la
    combinaison convexe $tx_n+(1-t)y_n$) et passer à la limite. La fonction distance $d_A(x)=\inf_{a\in A}
    \|x-a\|$ caractérise l'adhérence par $d_A(x)=0 \iff x\in\overline A$ — un outil alternatif à la suite
    explicite pour ce genre de preuve.
---

Soit $E$ un $\mathbb R$-espace vectoriel normé, $A$ une partie non vide.

1. a) Donner la caractérisation séquentielle de $\overline A$.
   b) Prouver que si $A$ est convexe, alors $\overline A$ est convexe.

2. On pose $d_A(x) = \inf_{a\in A}\|x-a\|$.
   a) Prouver que $d_A(x)=0 \implies x\in\overline A$.
   b) On suppose $A$ fermée et $\forall x,y\in E,\forall t\in[0,1], d_A(tx+(1-t)y) \leqslant td_A(x)+(1-t)d_A(y)$. Prouver que $A$ est convexe.
