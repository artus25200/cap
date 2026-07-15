---
level: 5
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [théorème de Weierstrass, approximation polynomiale, convergence uniforme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 48"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Théorème de Weierstrass : toute fonction continue sur un segment $[a,b]$ est limite uniforme sur ce segment
  d'une suite de fonctions polynomiales.

  2. (a) $|P_nf-f^2| = |f||P_n-f| \leqslant N_\infty(f)N_\infty(P_n-f) \to 0$ (majoration indépendante de $t$) :
  $(P_nf)$ converge uniformément vers $f^2$.
  (b) Chaque $P_nf$ continue, convergence uniforme vers $f^2$ : par le théorème d'intégration de la limite
  uniforme, $\int_0^1 P_nf \to \int_0^1 f^2$.
  (c) $P_n=\sum_k a_{n,k}X^k$, donc $\int_0^1 P_nf = \sum_k a_{n,k}\int_0^1 t^kf(t)dt = 0$ par hypothèse (chaque
  terme est nul).

  3. D'après 2.(b) et 2.(c), $\int_0^1 f^2 = 0$. Or $f^2$ continue positive, donc $f^2=0$, donc $f=0$ sur $[0,1]$.
method:
  title: "Méthode : théorème de Weierstrass pour montrer qu'une fonction est nulle"
  content: >
    Astuce classique : si $f$ est orthogonale à tous les monômes ($\int t^nf=0$ pour tout $n$), alors elle est
    orthogonale à toute fonction polynomiale, donc par densité (Weierstrass) à sa propre limite uniforme — en
    l'approchant par elle-même via $P_n\to f$, on obtient $\int f^2=0$, donc $f=0$.
---

Soit $f\in\mathcal C^0([0,1],\mathbb R)$ telle que $\forall n\in\mathbb N, \int_0^1 t^nf(t)\,dt=0$.

1. Énoncer le théorème de Weierstrass d'approximation polynomiale.

2. Soit $(P_n)$ une suite de fonctions polynomiales convergeant uniformément vers $f$ sur $[0,1]$.
   a) Montrer que $(P_nf)$ converge uniformément sur $[0,1]$ vers $f^2$.
   b) Démontrer que $\int_0^1 f^2(t)\,dt = \lim_{n\to+\infty}\int_0^1 P_n(t)f(t)\,dt$.
   c) Calculer $\int_0^1 P_n(t)f(t)\,dt$.

3. En déduire que $f$ est la fonction nulle sur $[0,1]$.
