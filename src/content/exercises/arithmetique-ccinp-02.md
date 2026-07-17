---
level: 3
chapters:
  - id: arithmetique
    weight: 100
tags: [congruences, Bézout, système de congruences, théorème des restes chinois]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 94"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Par l'absurde, si $x \in \mathbb Z$ vérifie $(S)$ : $x \equiv 5\ [6]$ donne $x$ impair (car
  $x=6k+5$), et $x \equiv 4\ [8]$ donne $x$ pair : contradiction.

  2. (a) Théorème de Bézout : $a\wedge b=1 \iff \exists (u,v)\in\mathbb Z^2,\ au+bv=1$.

  (b) Si $ab|c$, $c=kab$ donne $a|c$ et $b|c$. Réciproquement, si $a|c$ et $b|c$ (avec $a\wedge b=1$) : Bézout
  donne $au+bv=1$, donc $cau+cbv=c$ ; en écrivant $c=k_1a=k_2b$, on obtient $(k_2u+k_1v)(ab)=c$, donc $ab|c$.

  3. (a) On observe que $x_0=-11$ est solution particulière de $(S)$.

  (b) $x$ solution de $(S) \iff 17|x-x_0$, $16|x-x_0$ et $15|x-x_0$. Comme $17\wedge16=1$, la question 2(b) donne
  $17\times16|x-x_0$ et $15|x-x_0$ ; comme $(17\times16)\wedge15=1$, on obtient $17\times16\times15|x-x_0$.
  L'ensemble des solutions est $\{x_0+4080k,\ k\in\mathbb Z\} = \{-11+4080k,\ k\in\mathbb Z\}$.
method:
  title: "Méthode : résoudre un système de congruences par recollement successif"
  content: >
    Pour résoudre un système $x\equiv r_i\ [m_i]$ avec les $m_i$ deux à deux premiers entre eux, on trouve une
    solution particulière $x_0$ (par tâtonnement ou Bézout), puis on utilise que $(a|c$ et $b|c) \iff ab|c$
    lorsque $a\wedge b=1$ pour recoller les modules deux par deux : l'ensemble des solutions est alors
    $x_0 + (m_1m_2\cdots m_k)\mathbb Z$.
---

1. En raisonnant par l'absurde, montrer que le système $(S): \begin{cases}x\equiv5\ [6]\\x\equiv4\ [8]\end{cases}$
n'a pas de solution $x$ appartenant à $\mathbb Z$.

2. (a) Énoncer le théorème de Bézout dans $\mathbb Z$.

(b) Soit $a$ et $b$ deux entiers naturels premiers entre eux. Soit $c \in \mathbb Z$. Prouver que
$(a|c$ et $b|c) \iff ab|c$.

3. On considère le système $(S): \begin{cases}x\equiv6\ [17]\\x\equiv5\ [16]\\x\equiv4\ [15]\end{cases}$ dans
lequel l'inconnue $x$ appartient à $\mathbb Z$.

(a) Déterminer une solution particulière $x_0$ de $(S)$ dans $\mathbb Z$.

(b) Déduire des questions précédentes la résolution dans $\mathbb Z$ du système $(S)$. On exprimera les solutions
en fonction de la solution particulière $x_0$.
