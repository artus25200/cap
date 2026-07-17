---
level: 3
chapters:
  - id: algebre
    weight: 100
  - id: reduction
    weight: 40
tags: [somme directe, projection vectorielle, diagonalisation]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 71"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $D = \mathrm{Vect}((1,2,3))$. Comme $(1,2,3) \notin P$, on a $D \cap P = \{0\}$, et $\dim D + \dim P = 1 + 2 = 3$,
  donc $\mathbb R^3 = P \oplus D$.

  2. Pour $u=(x,y,z)$, on écrit $u - p(u) = \alpha(1,2,3)$ avec $p(u) \in P$, ce qui donne
  $\alpha = \frac{1}{6}(x+y+z)$ puis $p(u) = \frac{1}{6}(5x-y-z,\,-2x+4y-2z,\,-3x-3y+3z)$. La matrice de $p$ dans
  la base canonique est
  $$A = \frac{1}{6}\begin{pmatrix}5&-1&-1\\-2&4&-2\\-3&-3&3\end{pmatrix}.$$

  3. En posant $e_1'=(1,2,3)$ (base de $D$), $e_2'=(1,-1,0)$, $e_3'=(0,1,-1)$ (base de $P$), on a $p(e_1')=0$ et
  $p(e_2')=e_2'$, $p(e_3')=e_3'$ (car $e_2', e_3' \in P$). Dans la base $(e_1',e_2',e_3')$, la matrice de $p$ est
  $\mathrm{diag}(0,1,1)$.
method:
  title: "Méthode : matrice d'une projection dans une base adaptée"
  content: >
    Pour diagonaliser une projection $p$ sur $F$ parallèlement à $G$ (avec $E = F \oplus G$), il suffit de choisir
    une base réunissant une base de $G$ (vecteurs envoyés sur $0$) et une base de $F$ (vecteurs fixes) : la matrice
    obtenue est automatiquement diagonale, avec des $0$ et des $1$ sur la diagonale, sans calcul de valeurs propres.
---

Soit $P$ le plan d'équation $x+y+z=0$ et $D$ la droite d'équation $x = \frac{y}{2} = \frac{z}{3}$.

1. Vérifier que $\mathbb R^3 = P \oplus D$.

2. Soit $p$ la projection vectorielle de $\mathbb R^3$ sur $P$ parallèlement à $D$. Soit $u=(x,y,z) \in \mathbb R^3$.
Déterminer $p(u)$ et donner la matrice de $p$ dans la base canonique de $\mathbb R^3$.

3. Déterminer une base de $\mathbb R^3$ dans laquelle la matrice de $p$ est diagonale.
