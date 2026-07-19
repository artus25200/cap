---
level: 4
chapters:
  - id: espaces-prehilbertiens
    weight: 100
  - id: matrices
    weight: 30
tags: [produit scalaire matriciel, matrices symétriques et antisymétriques, orthogonal]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 92"
banque: "CCINP"
classic: true
correction: |
  1. $\langle A,B\rangle = \mathrm{tr}(A^TB)$ est bilinéaire (linéarité de la trace, de la transposition), et
  symétrique car $\mathrm{tr}(A^TB) = \mathrm{tr}((A^TB)^T) = \mathrm{tr}(B^TA)$. On a
  $\langle A,A\rangle = \sum_{i,k} A_{k,i}^2 \geqslant 0$, nulle ssi $A=0$ : c'est un produit scalaire (le produit
  scalaire canonique, coefficient par coefficient).

  2. (a) Si $M \in S_n(\mathbb R)\cap A_n(\mathbb R)$, $M^T=M=-M$ donc $M=0$ : somme directe (intersection nulle).
  Pour $M\in E$, $S=\frac{M+M^T}2 \in S_n(\mathbb R)$, $A=\frac{M-M^T}2 \in A_n(\mathbb R)$, et $M=S+A$ : donc
  $E = S_n(\mathbb R) \oplus A_n(\mathbb R)$.

  (b) Pour $S \in S_n(\mathbb R)$, $A \in A_n(\mathbb R)$ : $\langle S,A\rangle = \mathrm{tr}(SA) = \mathrm{tr}(AS) = \mathrm{tr}(-A^TS) = -\langle A,S\rangle = -\langle S,A\rangle$, donc $\langle S,A\rangle=0$ :
  $S_n(\mathbb R) \subset A_n(\mathbb R)^\perp$. Par égalité des dimensions (théorème du rang appliqué à
  $E=S_n\oplus A_n$), $S_n(\mathbb R) = A_n(\mathbb R)^\perp$.

  3. Avec la base canonique $(E_{i,j})$, $F = \mathrm{Vect}(E_{1,1},\dots,E_{n,n})$, et
  $M \in F^\perp \iff \forall i,\ \langle M,E_{i,i}\rangle = m_{i,i}=0$ : $F^\perp$ est l'ensemble des matrices de
  diagonale nulle.
method:
  title: "Méthode : le produit scalaire canonique tr(A^T B) sur Mn(R)"
  content: >
    Le produit scalaire $\langle A,B\rangle = \mathrm{tr}(A^TB)$ correspond, coefficient par coefficient, au
    produit scalaire canonique de $\mathbb R^{n^2}$. Il permet de retrouver directement des résultats classiques :
    décomposition symétrique/antisymétrique orthogonale, orthogonal des matrices diagonales, etc., souvent via un
    calcul de trace plutôt qu'un calcul coefficient par coefficient.
---

Soit $n \in \mathbb N^*$. On considère $E = M_n(\mathbb R)$. On pose $\forall (A,B) \in E^2,\ \langle A,B\rangle = \mathrm{tr}(A^TB)$.

1. Prouver que $\langle\,,\rangle$ est un produit scalaire sur $E$.

2. On note $S_n(\mathbb R)$ l'ensemble des matrices symétriques de $E$, et $A_n(\mathbb R)$ l'ensemble des
matrices antisymétriques ($A^T=-A$). On admet que ce sont des sous-espaces vectoriels de $E$.

(a) Prouver que $E = S_n(\mathbb R) \oplus A_n(\mathbb R)$.

(b) Prouver que $A_n(\mathbb R)^\perp = S_n(\mathbb R)$.

3. Soit $F$ l'ensemble des matrices diagonales de $E$. Déterminer $F^\perp$.
