---
level: 5
chapters:
  - id: reduction
    weight: 100
tags: [rang, diagonalisabilité, discussion selon paramètre]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 69"
banque: "CCINP"
classic: true
correction: |
  1. $\det A = a(a+1)$. Si $a\neq0,-1$ : $\mathrm{rg}\,A=3$. Si $a=0$ : $\mathrm{rg}\,A=2$. Si $a=-1$ : deux
  colonnes non colinéaires et $\det A=0$ donnent $\mathrm{rg}\,A=2$.

  2. $\chi_A=(X-a-1)(X+a)(X+1)$, racines $a+1,-a,-1$. Cas particuliers de coïncidence : $a=-\frac12$ (racine
  double $a+1=-a$), $a=-2$ ($a+1=-1$), $a=1$ ($-a=-1$).
  - Hors ces valeurs : trois valeurs propres distinctes, diagonalisable.
  - $a=1$ : $\chi_A=(X-2)(X+1)^2$, $\mathrm{rg}(A+I_3)=1$ donne $\dim E_{-1}=2$ : diagonalisable (aussi via
  symétrie de $A$ dans ce cas).
  - $a=-2$ : $\chi_A=(X+1)^2(X-2)$, $\mathrm{rg}(A+I_3)=2$ donne $\dim E_{-1}=1<2$ : non diagonalisable.
  - $a=-\frac12$ : $\chi_A=(X-\frac12)^2(X+1)$, $\mathrm{rg}(A-\frac12I_3)=2$ donne $\dim E_{1/2}=1<2$ : non
  diagonalisable.
  Conclusion : $A$ diagonalisable $\iff a\neq-2$ et $a\neq-\frac12$.
method:
  title: "Méthode : discussion de diagonalisabilité selon un paramètre"
  content: >
    Repérer d'abord les valeurs du paramètre qui font coïncider deux racines du polynôme caractéristique (cas
    "générique" hors de ces valeurs : diagonalisable automatiquement) ; pour chaque valeur particulière,
    comparer la dimension du sous-espace propre concerné (via le rang) à la multiplicité de la racine dans
    $\chi_A$.
---

Soit $a\in\mathbb R$, $A = \begin{pmatrix}0&a&1\\a&0&1\\a&1&0\end{pmatrix}$.

1. Déterminer le rang de $A$ selon $a$.

2. Pour quelles valeurs de $a$ la matrice $A$ est-elle diagonalisable ?
