---
level: 3
chapters:
  - id: espaces-prehilbertiens
    weight: 100
tags: [produit scalaire matriciel, distance à un sous-espace, projeté orthogonal]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 82"
banque: "CCINP"
classic: true
correction: |
  1. Pour $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, $A'=\begin{pmatrix}a'&b'\\c'&d'\end{pmatrix}$, on pose
  $(A|A')=aa'+bb'+cc'+dd'$ : bilinéarité symétrique immédiate ; $(A|A)=a^2+b^2+c^2+d^2 \geqslant 0$, nulle
  seulement si $A=0$. C'est un produit scalaire (le produit scalaire canonique sur $M_2(\mathbb R) \simeq \mathbb R^4$).

  2. Pour $A=\begin{pmatrix}1&0\\-1&2\end{pmatrix}$, on écrit
  $A = \begin{pmatrix}1&0\\0&2\end{pmatrix} + \begin{pmatrix}0&0\\-1&0\end{pmatrix}$ avec le premier terme dans
  $F$ (matrices triangulaires supérieures) et le second dans $F^\perp$ (car orthogonal à toute matrice
  triangulaire supérieure). Le projeté orthogonal de $A$ sur $F$ est donc $\begin{pmatrix}1&0\\0&2\end{pmatrix}$,
  et $d(A,F) = \left\|\begin{pmatrix}0&0\\-1&0\end{pmatrix}\right\| = 1$.
method:
  title: "Méthode : décomposition directe pour calculer une distance"
  content: >
    Quand le sous-espace $F$ a une structure simple (ici : matrices triangulaires supérieures), il est souvent
    plus rapide de deviner directement une décomposition $A = p + q$ avec $p \in F$ et $q \in F^\perp$ (à vérifier)
    que de calculer une base de $F^\perp$ puis de résoudre un système : la distance s'obtient alors immédiatement
    par $d(A,F) = \|q\|$.
---

Soit $E$ un espace préhilbertien et $F$ un sous-espace vectoriel de $E$ de dimension finie $n>0$. On admet que,
pour tout $x \in E$, il existe un unique $y_0 \in F$ tel que $x-y_0$ soit orthogonal à $F$ et que la distance de
$x$ à $F$ soit égale à $\|x-y_0\|$.

Pour $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ et $A'=\begin{pmatrix}a'&b'\\c'&d'\end{pmatrix}$, on pose
$(A|A')=aa'+bb'+cc'+dd'$.

1. Démontrer que $(.|.)$ est un produit scalaire sur $M_2(\mathbb R)$.

2. Calculer la distance de la matrice $A=\begin{pmatrix}1&0\\-1&2\end{pmatrix}$ au sous-espace vectoriel $F$ des
matrices triangulaires supérieures.
