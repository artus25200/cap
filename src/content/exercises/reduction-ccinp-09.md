---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: algebre
    weight: 30
tags: [commutant, diagonalisation, isomorphisme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 73"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $\chi_A = (X-3)(X+2)$, $\mathrm{Sp}(A) = \{-2,3\}$, avec $E_3 = \mathrm{Vect}(1,1)$ et
  $E_{-2} = \mathrm{Vect}(1,-4)$.

  2. Une matrice $N=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ commute avec $D=\mathrm{diag}(3,-2)$ ssi $b=c=0$, i.e. $N$
  diagonale. En écrivant $A = PDP^{-1}$, $M$ commute avec $A$ ssi $P^{-1}MP$ commute avec $D$, i.e. est diagonale :
  l'ensemble $C(A)$ des matrices commutant avec $A$ est donc l'image par $M \mapsto PMP^{-1}$ des matrices
  diagonales, un espace de dimension $2$. Comme $I_2$ et $A$ commutent avec $A$ et sont non colinéaires,
  $\mathrm{Vect}(I_2,A) \subset C(A)$ avec égalité des dimensions, donc $C(A) = \mathrm{Vect}(I_2,A)$.
method:
  title: "Méthode : commutant d'une matrice diagonalisable"
  content: >
    Si $A=PDP^{-1}$ avec $D$ diagonale à valeurs propres **distinctes**, alors $M$ commute avec $A$ ssi
    $P^{-1}MP$ commute avec $D$, ce qui force $P^{-1}MP$ diagonale (car les matrices commutant avec une matrice
    diagonale à coefficients distincts sont exactement les matrices diagonales). Le commutant de $A$ a alors pour
    dimension le nombre de valeurs propres distinctes, et coïncide avec $\mathrm{Vect}(I,A,A^2,\dots)$.
---

On pose $A = \begin{pmatrix}2&1\\4&-1\end{pmatrix}$.

1. Déterminer les valeurs propres et les vecteurs propres de $A$.

2. Déterminer toutes les matrices qui commutent avec la matrice $\begin{pmatrix}3&0\\0&-2\end{pmatrix}$. En déduire
que l'ensemble des matrices qui commutent avec $A$ est $\mathrm{Vect}(I_2,A)$.
