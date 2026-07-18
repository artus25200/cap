---
level: 3
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [continuité de la limite uniforme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 12"
banque: "CCINP"
classic: true
correction: |
  1. Soit $x_0\in[a,b]$, $\varepsilon>0$. Par convergence uniforme, il existe $N$ tel que $\forall x\in[a,b]$,
  $|f(x)-f_N(x)|\leqslant\varepsilon$. Comme $f_N$ est continue en $x_0$, il existe $\alpha>0$ tel que
  $|x-x_0|\leqslant\alpha \implies |f_N(x)-f_N(x_0)|\leqslant\varepsilon$. Par inégalité triangulaire,
  $|f(x)-f(x_0)| \leqslant 3\varepsilon$ dès que $|x-x_0|\leqslant\alpha$ : $f$ est continue en $x_0$.

  2. $(g_n)$ avec $g_n(x)=x^n$ converge simplement sur $[0,1]$ vers $g$ discontinue en 1 ($g(x)=0$ si $x<1$,
  $g(1)=1$), alors que chaque $g_n$ est continue en 1. D'après la question 1 (contraposée), $(g_n)$ ne converge
  pas uniformément sur $[0,1]$.
method:
  title: "Méthode : la limite uniforme de fonctions continues est continue"
  content: >
    Théorème central : si $(f_n)$ converge uniformément vers $f$ sur $[a,b]$ et que chaque $f_n$ est continue en
    $x_0$, alors $f$ l'est aussi. Par contraposée, c'est l'outil numéro un pour prouver qu'une convergence n'est
    PAS uniforme : trouver une limite simple discontinue alors que les $f_n$ sont continues.
---

1. Soit $(f_n)$ une suite de fonctions de $[a,b]$ dans $\mathbb{R}$, convergeant uniformément sur $[a,b]$ vers $f$, avec chaque $f_n$ continue en $x_0\in[a,b]$. Démontrer que $f$ est continue en $x_0$.

2. On pose $\forall n\in\mathbb{N}^*, \forall x\in[0,1], g_n(x) = x^n$. La suite $(g_n)$ converge-t-elle uniformément sur $[0,1]$ ?
