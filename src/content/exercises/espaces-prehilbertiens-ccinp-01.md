---
level: 5
chapters:
  - id: espaces-prehilbertiens
    weight: 100
tags: [espace l2, produit scalaire, orthogonal]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 39"
banque: "CCINP"
classic: true
correction: |
  1. (a) $|x_ny_n| \leqslant \frac12(x_n^2+y_n^2)$, et $\sum x_n^2, \sum y_n^2$ convergent, donc par comparaison
  $\sum x_ny_n$ converge absolument.
  (b) La suite nulle est dans $\ell^2$. Pour $x,y\in\ell^2, \lambda\in\mathbb R$ : $(x_n+\lambda y_n)^2 = x_n^2+\lambda^2y_n^2+2\lambda x_ny_n$, somme de trois séries convergentes (la dernière d'après 1.(a)), donc
  $\sum(x_n+\lambda y_n)^2$ converge : $\ell^2$ est un sous-espace vectoriel.

  2. $\varphi$ est clairement linéaire. $|\varphi(x)|=|x_p| \leqslant \left(\sum x_n^2\right)^{1/2} = \|x\|$
  (un terme de la somme est majoré par la somme entière), donc $\varphi$ est continue ($P_3$ de l'exercice 36).

  3. Soit $x\in F^\perp$. Pour $p\in\mathbb N$, la suite $y=(0,\dots,0,1,0,\dots)\in F$ (1 en position $p$)
  donne $(x|y)=x_p=0$. Donc $x=0$ : $F^\perp=\{0\}$. D'où $(F^\perp)^\perp = \ell^2 \neq F$ (car $F\subsetneq \ell^2$, par exemple $F$ ne contient pas toutes les suites de $\ell^2$).
method:
  title: "Méthode : orthogonal d'une partie dense (non fermée)"
  content: >
    En dimension infinie, $(F^\perp)^\perp = F$ n'est vrai que si $F$ est fermé (contrairement à la dimension
    finie où c'est toujours vrai). Ici $F$ (suites presque nulles) est dense dans $\ell^2$ mais pas fermé,
    d'où $(F^\perp)^\perp = \overline F = \ell^2 \neq F$.
---

On note $\ell^2$ l'ensemble des suites réelles $(x_n)$ telles que $\sum x_n^2$ converge.

1. a) Démontrer que pour $x,y\in\ell^2$, $\sum x_ny_n$ converge. On pose $(x|y)=\sum_{n=0}^{+\infty} x_ny_n$.
   b) Démontrer que $\ell^2$ est un sous-espace vectoriel des suites réelles.

On admet que $(\cdot|\cdot)$ est un produit scalaire sur $\ell^2$, muni de la norme euclidienne associée $\|\cdot\|$.

2. Soit $p\in\mathbb N$. Pour $x=(x_n)\in\ell^2$, $\varphi(x)=x_p$. Démontrer que $\varphi$ est linéaire et continue.

3. Soit $F$ l'ensemble des suites réelles presque nulles (nulles à partir d'un certain rang). Déterminer $F^\perp$. Comparer $F$ et $(F^\perp)^\perp$.
