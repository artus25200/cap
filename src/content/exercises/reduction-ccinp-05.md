---
level: 3
chapters:
  - id: reduction
    weight: 100
  - id: espaces-prehilbertiens
    weight: 50
tags: [diagonalisabilité, matrice symétrique, base orthonormée de vecteurs propres]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 68"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) $A$ symétrique réelle donc diagonalisable (théorème spectral), sans calcul.
  (b) $\chi_A=\lambda^2(\lambda-3)$, $E_3=\mathrm{Vect}(1,-1,1)$, $E_0: x-y+z=0$ (dimension 2) : $\dim
  E_3+\dim E_0=3$, diagonalisable.
  (c) $\mathrm{rg}\,A=1$ donne $\dim E_0=2$ ; trace $=3=$ somme des valeurs propres donne une 3ᵉ valeur propre
  simple $=3$ : mêmes dimensions, diagonalisable.
  (d) $A^2=3A$, donc $A$ annule $X^2-3X$, scindé à racines simples : diagonalisable.

  2. $A$ symétrique dans une base orthonormée $\Rightarrow$ endomorphisme autoadjoint $\Rightarrow$ théorème
  spectral : diagonalisable en base orthonormée. Les sous-espaces propres sont orthogonaux ; orthonormaliser
  chacun séparément ($u=\frac1{\sqrt3}(1,-1,1)$ pour $E_3$ ; $(v,w)$ obtenus par Gram-Schmidt sur $E_0$) donne
  la base orthonormée cherchée.
method:
  title: "Méthode : quatre façons de prouver une diagonalisabilité"
  content: >
    Symétrie réelle (théorème spectral), égalité des dimensions propres/multiplicités, rang + trace, ou
    existence d'un polynôme annulateur scindé à racines simples — quatre angles d'attaque pour le même
    résultat, à choisir selon ce qui est le plus rapide à calculer pour la matrice donnée.
---

Soit $A = \begin{pmatrix}1&-1&1\\-1&1&-1\\1&-1&1\end{pmatrix}$.

1. Démontrer que $A$ est diagonalisable de quatre manières : a) sans calcul, b) via $\det(\lambda I_3-A)$ et les sous-espaces propres, c) via le rang, d) en calculant $A^2$.

2. Trouver une base orthonormée dans laquelle la matrice de l'endomorphisme associé est diagonale.
