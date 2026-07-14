---
level: 5
chapters:
  - id: series-numeriques
    weight: 100
tags: [équivalents et séries, séries complexes, convergence absolue]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 7"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) Comme $u_n/v_n \to 1$, il existe un rang à partir duquel $u_n/v_n$ est proche de 1, donc du même signe
  que $v_n$ (donc de $u_n$ lui-même).
  (b) Si $(v_n)$ est positive : à partir d'un certain rang, $\frac12 \leqslant \frac{u_n}{v_n} \leqslant \frac32$.
  Si $\sum v_n$ converge, $u_n \leqslant \frac32 v_n$ donne la convergence de $\sum u_n$ par comparaison ; si
  $\sum v_n$ diverge, $v_n \leqslant 2u_n$ donne la divergence de $\sum u_n$. Par symétrie de $\sim$, l'équivalence
  des natures est complète.

  2. Avec $u_n = \dfrac{((-1)^n+i)\ln n \sin(1/n)}{\sqrt{n+3}-1}$ : $|u_n| \underset{+\infty}{\sim} \dfrac{\sqrt2\ln n}{\sqrt n}$.
  Cet équivalent est negligeable devant $1/n^{5/4}$ (car $n^{5/4}\cdot\frac{\sqrt2\ln n}{\sqrt n} \to 0$), et
  $\sum 1/n^{5/4}$ converge (Riemann, $5/4>1$), donc $\sum |u_n|$ converge par comparaison. La série $\sum u_n$
  (à valeurs complexes) converge donc absolument, donc converge.
method:
  title: "Méthode : équivalence de séries de même signe"
  content: >
    Si $u_n \sim v_n$ et $(v_n)$ garde un signe constant à partir d'un certain rang, alors $\sum u_n$ et
    $\sum v_n$ ont la même nature. Pour une série à termes complexes, passer systématiquement par la convergence
    absolue (majorer $|u_n|$ par un équivalent réel positif dont on connaît la nature).
---

1. Soient $(u_n)$ et $(v_n)$ deux suites réelles, $(v_n)$ non nulle à partir d'un certain rang.
   a) Prouver que si $u_n \sim v_n$, alors $u_n$ et $v_n$ sont de même signe à partir d'un certain rang.
   b) On suppose de plus $(v_n)$ positive. Prouver que $u_n \sim v_n \implies \sum u_n$ et $\sum v_n$ sont de même nature.

2. Étudier la convergence de la série $\displaystyle\sum_{n\geqslant2} \dfrac{((-1)^n+i)\ln n \sin(1/n)}{\sqrt{n+3}-1}$ (où $i^2=-1$).
