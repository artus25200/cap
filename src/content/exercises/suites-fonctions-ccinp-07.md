---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [convergence normale]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 15"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $\sum f_n$ converge normalement sur $X$ ssi $\exists n_0, \forall n\geqslant n_0$, $f_n$ bornée sur $X$ et
  $\sum \|f_n\|_\infty$ converge. $\sum f_n$ converge uniformément sur $X$ ssi $(S_n)$ converge uniformément.

  2. Si $\sum f_n$ converge normalement, alors $\sum f_n(x)$ converge absolument (donc simplement) pour tout
  $x$, et le reste $R_n(x) = \sum_{k>n} f_k(x)$ vérifie $|R_n(x)| \leqslant \sum_{k>n}\|f_k\|_\infty \to 0$
  (majoration indépendante de $x$), donc convergence uniforme.

  3. Avec $a_n = n^2/n!$ : $a_{n+1}/a_n = (n+1)/n^2 \to 0$, donc la série entière $\sum a_n z^n$ a un rayon
  infini, donc converge normalement sur tout compact — en particulier sur tout disque fermé de rayon $R$.
method:
  title: "Méthode : convergence normale implique convergence uniforme"
  content: >
    C'est LE critère pratique pour prouver une convergence uniforme : montrer que $\sum \|f_n\|_\infty$ converge
    (souvent via d'Alembert ou comparaison) suffit, sans avoir à manipuler directement le reste $R_n(x)$.
---

Soit $X$ une partie de $\mathbb{R}$ ou $\mathbb{C}$.

1. Rappeler la définition de la convergence normale de $\sum f_n$ sur $X$, puis celle de la convergence uniforme.

2. Démontrer que toute série de fonctions normalement convergente sur $X$ est uniformément convergente sur $X$.

3. La série de fonctions $\sum \dfrac{n^2}{n!} z^n$ est-elle uniformément convergente sur le disque fermé de centre 0 et de rayon $R\in\mathbb{R}_+^*$ ?
