---
level: 5
chapters:
  - id: integrales-generalisees
    weight: 100
  - id: series-numeriques
    weight: 30
  - id: suites-series-fonctions
    weight: 20
tags: [intégration terme à terme, séries absolument convergentes]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 49"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) $\sum a_n$ converge absolument donc $a_n\to0$, donc $(a_n)$ est bornée par un certain $K$.
  (b) $|f_n(t)| \leqslant K\frac{t^n}{n!}$, et $\sum \frac{t^n}{n!}=e^t$ converge : $\sum f_n(t)$ converge
  absolument donc converge simplement, pour tout $t\geqslant0$.

  2. (a) $g_n(t)=t^ne^{-t}$ intégrable sur $[0,+\infty[$ (croissances comparées), et par IPP répétée,
  $\int_0^{+\infty} g_n = n!$. Donc $\int_0^{+\infty}|f_n(t)|dt = \frac{|a_n|}{n!}\cdot n! = |a_n|$.
  (b) $\sum \int_0^{+\infty}|f_n| = \sum|a_n| < +\infty$ (convergence absolue de $\sum a_n$). D'après le
  théorème d'intégration terme à terme (chaque $f_n$ continue intégrable, $\sum f_n$ converge simplement vers
  $f$ continue, et $\sum\int|f_n|$ converge), $f$ est intégrable et $\int_0^{+\infty} f =
  \sum_{n=0}^{+\infty}\int_0^{+\infty} f_n = \sum_{n=0}^{+\infty} \frac{a_n}{n!}\cdot n! = \sum a_n$.
method:
  title: "Méthode : théorème d'intégration terme à terme (Fubini pour les séries)"
  content: >
    Pour permuter $\int$ et $\sum$ sur un intervalle non borné : il faut la convergence simple de $\sum f_n$
    vers une limite continue (par morceaux), et surtout que $\sum \int |f_n|$ converge (pas juste que chaque
    $f_n$ soit intégrable). C'est l'analogue du théorème de convergence dominée pour les séries de fonctions,
    et l'outil de référence pour ce type de calcul.
---

Soit $\sum a_n$ une série absolument convergente à termes complexes. Pour $n\in\mathbb N, t\geqslant0$, on pose $f_n(t) = \dfrac{a_nt^n}{n!}e^{-t}$.

1. a) Justifier que $(a_n)$ est bornée.
   b) Justifier que $\sum f_n$ converge simplement sur $[0,+\infty[$. (On admet que $f=\sum f_n$ est continue.)

2. a) Justifier que $g_n:t\mapsto t^ne^{-t}$ est intégrable sur $[0,+\infty[$ et calculer $\int_0^{+\infty}g_n(t)\,dt$. En déduire la convergence et la valeur de $\int_0^{+\infty}|f_n(t)|\,dt$.
   b) Prouver que $\displaystyle\int_0^{+\infty}\left(\sum_{n=0}^{+\infty}f_n(t)\right)dt = \sum_{n=0}^{+\infty}a_n$.
