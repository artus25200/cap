---
level: 5
chapters:
  - id: calcul-differentiel
    weight: 100
tags: [extrema sous contrainte, multiplicateurs de Lagrange, compacité]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 41"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, identifie la nature géométrique de $C$ (fermé et borné en dimension finie) et invoque le théorème usuel sur les fonctions continues sur un compact."
  - "Pour la question 2.(a), c'est le théorème des extrema liés : il faut d'abord vérifier que le gradient de la contrainte ne s'annule pas sur $C$."
  - "Pour la question 2.(b), vois $(S)$ comme un système linéaire homogène en $(u,v)$ : il admet une solution non nulle si et seulement si son déterminant est nul."
  - "Pour la question 3, une fois $\\lambda$ connu, la première équation de $(S)$ donne le rapport $v/u$, qu'il suffit d'injecter dans l'équation du cercle."
correction: |
  1. $C$ est le cercle de rayon $\sqrt{13}$, fermé et borné dans $\mathbb R^2$ de dimension finie donc compact.
  $f$ polynomiale donc continue sur le compact $C$ : $f$ y atteint un maximum et un minimum.

  2. (a) $g(x,y)=x^2+y^2-13$ est $C^1$, $\nabla g(x,y)=(2x,2y)$ ne s'annule pas sur $C$ (car $(0,0)\notin C$).
  Par le théorème des extrema liés, en un point extrémal $(u,v)$, $\nabla f(u,v) = \lambda \nabla g(u,v)$, soit
  $(S)$.
  (b) $(S)$ s'écrit $(4-\lambda)u+6v=0$, $6u-(1+\lambda)v=0$ : système linéaire homogène en $(u,v)$ avec solution
  non nulle (car $(u,v)\in C$ donc $\neq(0,0)$), donc non-Cramer : déterminant nul,
  $(\lambda-4)(-(1+\lambda))-36=0 \iff \lambda^2-3\lambda-40=0$, racines $\lambda=8$ ou $\lambda=-5$.

  3. $\lambda=8$ : $v=\frac23u$, avec $u^2+v^2=13$ donne $u=\pm3$, $(u,v)\in\{(3,2),(-3,-2)\}$.
  $\lambda=-5$ : $v=-\frac32u$, donne $u=\pm2$, $(u,v)\in\{(2,-3),(-2,3)\}$.
  $f(3,2)=f(-3,-2)=104$ ; $f(2,-3)=f(-2,3)=-65$. Donc $\max_C f = 104$, $\min_C f = -65$.
method:
  title: "Méthode : extrema d'une fonction sous contrainte (multiplicateurs de Lagrange)"
  content: >
    Pour optimiser $f$ sur $\{g=0\}$ : (i) compacité + continuité assurent l'existence des extrema, (ii) en un
    point extrémal où $\nabla g\neq0$, $\nabla f = \lambda\nabla g$ (théorème des extrema liés), (iii) le
    système obtenu, vu comme linéaire homogène en les coordonnées du point, admet une solution non triviale
    ssi son déterminant est nul — ce qui donne les valeurs possibles de $\lambda$, puis les points candidats.
---

Soit $f:(x,y)\mapsto 4x^2+12xy-y^2$ et $C=\{(x,y)\in\mathbb R^2 \mid x^2+y^2=13\}$.

1. Justifier que $f$ atteint un maximum et un minimum sur $C$.

2. Soit $(u,v)\in C$ où $f$ atteint un extremum.
   a) Justifier qu'il existe $\lambda\in\mathbb R$ tel que $(S): \begin{cases} 4u+6v=\lambda u \\ 6u-v=\lambda v\end{cases}$.
   b) Montrer que $(\lambda-4)(\lambda+1)-36=0$. En déduire les valeurs possibles de $\lambda$.

3. Déterminer les valeurs possibles de $(u,v)$, puis le maximum et le minimum de $f$ sur $C$.
