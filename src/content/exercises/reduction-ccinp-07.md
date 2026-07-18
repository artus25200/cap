---
level: 4
chapters:
  - id: reduction
    weight: 100
tags: [valeurs propres, polynôme en une matrice, racines de l'unité]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 70"
banque: "CCINP"
classic: true
correction: |
  1. $\chi_A=X^3-1$, $\mathrm{sp}(A)=\{1,j,j^2\}$ : trois valeurs propres distinctes, $A$ diagonalisable dans
  $M_3(\mathbb C)$. $E_1=\mathrm{Vect}(1,1,1)$, $E_j=\mathrm{Vect}(1,j^2,j)$, $E_{j^2}=\mathrm{Vect}(1,j,j^2)$
  (par conjugaison, $A$ étant réelle).

  2. $A=PDP^{-1}$, donc $B=aI_3+bPDP^{-1}+cPD^2P^{-1} = P(aI_3+bD+cD^2)P^{-1}$. Avec $Q=a+bX+cX^2$, les valeurs
  propres de $B$ sont $Q(1), Q(j), Q(j^2)$, avec les mêmes sous-espaces propres que $A$ (regroupés si deux
  valeurs de $Q$ coïncident). $B$ reste diagonalisable dans tous les cas (polynôme en une matrice diagonalisable
  reste diagonalisable dans la même base).
method:
  title: "Méthode : éléments propres d'un polynôme en une matrice diagonalisable"
  content: >
    Si $A=PDP^{-1}$ et $B=Q(A)$ pour un polynôme $Q$, alors $B=PQ(D)P^{-1}$ : les vecteurs propres de $A$
    restent vecteurs propres de $B$, et les valeurs propres de $B$ sont simplement $Q(\lambda)$ pour chaque
    valeur propre $\lambda$ de $A$ — pas besoin de recalculer $B$ explicitement ni son polynôme caractéristique.
---

Soit $A = \begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix} \in M_3(\mathbb C)$.

1. Déterminer les valeurs propres et vecteurs propres de $A$. $A$ est-elle diagonalisable ?

2. Soit $(a,b,c)\in\mathbb C^3$, $B=aI_3+bA+cA^2$. Déduire de la question 1 les éléments propres de $B$.
