---
level: 3
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [critère de non-convergence uniforme, suite de points]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 11"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Par contraposée : si $(f_n)$ converge uniformément vers $f$, alors $\|f_n-f\|_\infty \to 0$, et comme
  $\forall n, x_n \in X$, $|f_n(x_n)-f(x_n)| \leqslant \|f_n-f\|_\infty$, donc $f_n(x_n)-f(x_n) \to 0$.

  2. (a) $f_n(0)=0$ ; pour $x\neq0$, $|f_n(x)| \leqslant \frac{1}{n^2x^2} \to 0$. Donc $(f_n)$ converge simplement
  vers $f=0$.
  (b) Pour $a>0$ : $\forall x\in[a,+\infty[$, $|f_n(x)-f(x)|\leqslant \frac{1}{1+n^2a^2} \to 0$ (majoration
  indépendante de $x$) : convergence uniforme sur $[a,+\infty[$. Mais en posant $x_n = \pi/(2n) \in\,]0,+\infty[$,
  $|f_n(x_n)-f(x_n)| = \frac{1}{1+\pi^2/4}$ ne tend pas vers 0 : d'après 1., pas de convergence uniforme sur $]0,+\infty[$.
method:
  title: "Méthode : contre-exemple par une suite de points bien choisie"
  content: >
    Pour prouver qu'une suite de fonctions ne converge PAS uniformément, il suffit d'exhiber une suite $(x_n)$
    telle que $f_n(x_n) - f(x_n)$ ne tende pas vers 0 — souvent en prenant $x_n$ au point où $f_n$ atteint son
    maximum ou son comportement le plus défavorable (ici $x_n = \pi/(2n)$, où $\sin(nx_n)=1$).
---

1. Soit $X\subset\mathbb{R}$, $(f_n)$ une suite de fonctions de $X$ dans $\mathbb{R}$ convergeant simplement vers $f$. On suppose qu'il existe une suite $(x_n)$ d'éléments de $X$ telle que $(f_n(x_n)-f(x_n))$ ne tende pas vers 0. Démontrer que $(f_n)$ ne converge pas uniformément vers $f$ sur $X$.

2. Pour tout $x\in\mathbb{R}$, on pose $f_n(x) = \dfrac{\sin(nx)}{1+n^2x^2}$.
   a) Étudier la convergence simple de $(f_n)$.
   b) Étudier la convergence uniforme de $(f_n)$ sur $[a,+\infty[$ (avec $a>0$), puis sur $]0,+\infty[$.
