---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [interversion limite-intégrale, intégration terme à terme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 14"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $f$ est continue sur $[a,b]$ (limite uniforme de fonctions continues). On a
  $\left|\int_a^b f_n - \int_a^b f\right| \leqslant \int_a^b |f_n-f| \leqslant (b-a)\|f_n-f\|_\infty \to 0$.

  2. Si $\sum f_n$ converge uniformément sur $[a,b]$ avec chaque $f_n$ continue, alors $(S_n)$ (sommes
  partielles) converge uniformément vers $S=\sum f_n$, continue. D'après 1., $\int_a^b S_n \to \int_a^b S$, soit
  $\sum_{k=0}^n \int_a^b f_k \to \int_a^b S$ : on peut intégrer terme à terme,
  $\sum_{n=0}^{+\infty} \int_a^b f_n = \int_a^b \sum_{n=0}^{+\infty} f_n$.

  3. La série entière $\sum x^n$ a pour rayon 1, donc converge normalement (donc uniformément) sur le compact
  $[0,\frac12] \subset\,]-1,1[$, avec chaque $x\mapsto x^n$ continue sur $[0,\frac12]$. D'après 2. :
  $$\int_0^{1/2}\sum_{n=0}^{+\infty}x^n\,dx = \sum_{n=0}^{+\infty}\int_0^{1/2}x^n\,dx = \sum_{n=0}^{+\infty}\frac{1}{(n+1)2^{n+1}} = \sum_{n=1}^{+\infty}\frac{1}{n\,2^n}.$$
method:
  title: "Méthode : intégration terme à terme d'une série de fonctions"
  content: >
    Si $\sum f_n$ converge uniformément sur $[a,b]$ avec chaque $f_n$ continue, on peut permuter $\sum$ et
    $\int$. En pratique, on obtient la convergence uniforme via la convergence normale sur un compact — c'est
    le point de passage standard pour transformer une intégrale de somme infinie en somme de valeurs connues.
---

1. Soit $a<b$ réels, $(f_n)$ une suite de fonctions continues sur $[a,b]$. Démontrer que si $(f_n)$ converge uniformément sur $[a,b]$ vers $f$, alors $\left(\int_a^b f_n(x)\,dx\right)$ converge vers $\int_a^b f(x)\,dx$.

2. Justifier comment ce résultat s'utilise pour les séries de fonctions.

3. Démontrer que $\displaystyle\int_0^{1/2}\left(\sum_{n=0}^{+\infty}x^n\right)dx = \sum_{n=1}^{+\infty}\dfrac{1}{n\,2^n}$.
