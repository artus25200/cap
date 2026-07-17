---
level: 3
chapters:
  - id: espaces-prehilbertiens
    weight: 100
tags: [produit scalaire matriciel, orthogonal, distance à un sous-espace]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 81"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $F = \mathrm{Vect}(I_2, K)$ avec $K = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$ : c'est un sous-espace vectoriel,
  et $(I_2,K)$ en est une base (famille libre génératrice).

  2. Pour $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, $M \in F^\perp \iff \varphi(M,I_2)=0$ et $\varphi(M,K)=0 \iff
  a+d=0$ et $b-c=0$. Donc $F^\perp = \mathrm{Vect}(A,B)$ avec $A=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$,
  $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

  3. $J = I_2 + B$ avec $I_2 \in F$, $B \in F^\perp$ : le projeté orthogonal de $J$ sur $F^\perp$ est $B$.

  4. $p_F(J) = I_2$ (décomposition précédente), donc $d(J,F) = \|J-I_2\| = \|B\| = \sqrt 2$.
method:
  title: "Méthode : distance à un sous-espace via une décomposition orthogonale explicite"
  content: >
    Une fois $E = F \oplus F^\perp$ établi, écrire directement l'élément étudié comme somme d'un terme de $F$ et
    d'un terme de $F^\perp$ donne à la fois le projeté orthogonal sur $F$, celui sur $F^\perp$, et la distance
    $d(x,F)=\|x-p_F(x)\|$ en une seule étape, sans passer par une base orthonormée de $F$.
---

On définit dans $M_2(\mathbb R) \times M_2(\mathbb R)$ l'application $\varphi$ par $\varphi(A,A') = \mathrm{tr}(A^TA')$.
On admet que $\varphi$ est un produit scalaire sur $M_2(\mathbb R)$. On note
$F = \left\{\begin{pmatrix}a&b\\-b&a\end{pmatrix},\ (a,b) \in \mathbb R^2\right\}$.

1. Démontrer que $F$ est un sous-espace vectoriel de $M_2(\mathbb R)$.

2. Déterminer une base de $F^\perp$.

3. Déterminer le projeté orthogonal de $J = \begin{pmatrix}1&1\\1&1\end{pmatrix}$ sur $F^\perp$.

4. Calculer la distance de $J$ à $F$.
