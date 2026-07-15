---
level: 4
chapters:
  - id: series-entieres
    weight: 100
  - id: suites-series-fonctions
    weight: 30
tags: [théorème d'Abel radial, critère spécial des séries alternées]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 18"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $\sum \frac{(-1)^n}{n}x^n$ est une série entière de rayon $R=1$. En $x=1$ : convergence par le CSSA. En
  $x=-1$ : série harmonique, divergence. Donc $D = \,]-1,1]$.

  2. (a) $S$ est continue sur $]-1,1[$ (somme de série entière). En $x=1$, le théorème d'Abel radial (la série
  numérique en $x=1$ converge par CSSA) donne la continuité à gauche en 1, donc $S$ est continue sur $D$.
  (b) $\|u_n\|_\infty = \frac1n$ sur $D$, et $\sum \frac1n$ diverge : pas de convergence normale. Pas de
  convergence uniforme non plus (sinon le théorème de la double limite en $-1$ donnerait la convergence de
  $\sum \frac1n$, absurde).
  (c) Sur $[0,1]$, le CSSA s'applique uniformément : $|R_n(x)| \leqslant \frac{x^{n+1}}{n+1} \leqslant
  \frac{1}{n+1} \to 0$ (majoration indépendante de $x$) : convergence uniforme sur $[0,1]$.

  **Bilan** : convergence normale sur tout segment de $]-1,1[$, convergence uniforme sur tout segment de $]-1,1]$.
method:
  title: "Méthode : théorème d'Abel radial"
  content: >
    Si une série entière $\sum a_n x^n$ de rayon $R$ converge (simplement) en $x=R$, alors sa somme $S$ est
    continue en $R$ (limite à gauche égale à la valeur en $R$) — même si la convergence n'est ni normale ni
    uniforme sur tout $]-R,R]$. C'est l'outil pour prolonger la continuité au bord du disque de convergence sans
    passer par la convergence uniforme globale.
---

On pose $u_n(x) = \dfrac{(-1)^n x^n}{n}$ pour $n\geqslant1$, $x\in\mathbb{R}$, et on étudie $\sum u_n$.

1. Étudier la convergence simple de cette série. On note $D$ l'ensemble de convergence et $S(x)$ la somme.

2. a) $S$ est-elle continue sur $D$ ?
   b) Étudier la convergence normale, puis uniforme, de cette série sur $D$.
   c) Étudier la convergence uniforme sur $[0,1]$.
