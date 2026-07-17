---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: equations-differentielles
    weight: 40
tags: [matrice symétrique, diagonalisation, système différentiel linéaire]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 74"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) $A$ est symétrique réelle donc diagonalisable (théorème spectral).

  (b) $\chi_A = (X-1)(X+1)(X-3)$, avec $E_1 = \mathrm{Vect}(0,1,0)$, $E_{-1} = \mathrm{Vect}(1,0,-1)$,
  $E_3 = \mathrm{Vect}(1,0,1)$.

  2. Le système s'écrit $X' = AX$ avec $X=(x,y,z)$. En posant $A = PDP^{-1}$ avec
  $D = \mathrm{diag}(1,-1,3)$ et $P$ la matrice de passage vers la base de vecteurs propres, et
  $X_1 = P^{-1}X$, on obtient $X_1' = DX_1$, système découplé de solution
  $x_1(t) = ae^t$, $y_1(t) = be^{-t}$, $z_1(t) = ce^{3t}$. En revenant à $X = PX_1$, on trouve
  $$x(t) = be^{-t}+ce^{3t}, \quad y(t) = ae^t, \quad z(t) = -be^{-t}+ce^{3t}, \quad (a,b,c) \in \mathbb R^3.$$
method:
  title: "Méthode : résoudre un système différentiel via diagonalisation"
  content: >
    Pour $X' = AX$ avec $A$ diagonalisable, $A = PDP^{-1}$, poser $X_1 = P^{-1}X$ découple le système en $n$
    équations scalaires indépendantes $x_i' = \lambda_i x_i$, de solutions $x_i(t) = c_ie^{\lambda_i t}$. On revient
    ensuite à $X$ par la relation $X = PX_1$.
---

1. On considère la matrice $A = \begin{pmatrix}1&0&2\\0&1&0\\2&0&1\end{pmatrix}$.

(a) Justifier sans calcul que $A$ est diagonalisable.

(b) Déterminer les valeurs propres de $A$ puis une base de vecteurs propres associés.

2. On considère le système différentiel $\begin{cases}x'=x+2z\\y'=y\\z'=2x+z\end{cases}$, où $x,y,z$ désignent trois
fonctions de la variable $t$, dérivables sur $\mathbb R$. En utilisant la question 1 et en le justifiant, résoudre
ce système.
