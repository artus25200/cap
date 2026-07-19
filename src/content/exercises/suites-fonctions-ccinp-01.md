---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [critère spécial des séries alternées, convergence uniforme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 8"
banque: "CCINP"
classic: true
correction: |
  1. (a) Avec $S_n = \sum_{k=0}^n (-1)^k u_k$ : $S_{2n+2}-S_{2n} = u_{2n+2}-u_{2n+1} \leqslant 0$ ($(u_n)$
  décroissante), donc $(S_{2n})$ décroît ; de même $(S_{2n+1})$ croît ; et $S_{2n}-S_{2n+1}=u_{2n+1}\to0$. Les
  suites $(S_{2n})$ et $(S_{2n+1})$ sont donc adjacentes, convergent vers la même limite, donc $(S_n)$ converge :
  $\sum(-1)^k u_k$ converge (critère spécial des séries alternées).
  (b) Le reste vérifie $\forall n, |R_n| \leqslant u_{n+1}$.

  2. Avec $f_n(x) = \dfrac{(-1)^n e^{-nx}}{n}$, on écrit $f_n(x) = (-1)^n u_n(x)$ avec $u_n(x) = e^{-nx}/n$.
  (a) Pour $x<0$, $|f_n(x)|\to+\infty$ : divergence grossière. Pour $x\geqslant0$, $(u_n(x))$ est positive,
  décroissante, de limite nulle : par 1.(a), $\sum f_n(x)$ converge. Donc $\sum f_n$ converge simplement sur $[0,+\infty[$.
  (b) D'après 1.(b) appliqué uniformément, $|R_n(x)| \leqslant u_{n+1}(x) = \frac{e^{-(n+1)x}}{n+1} \leqslant \frac{1}{n+1}$ pour $x\geqslant0$ (majoration indépendante de $x$). Donc $\|R_n\|_\infty \leqslant \frac{1}{n+1} \to 0$ : convergence uniforme de $\sum f_n$ sur $[0,+\infty[$.
method:
  title: "Méthode : critère spécial des séries alternées (CSSA) et majoration uniforme du reste"
  content: >
    Si $(u_n)$ est positive, décroissante, de limite nulle, $\sum(-1)^n u_n$ converge et son reste est majoré en
    valeur absolue par le premier terme négligé ($|R_n|\leqslant u_{n+1}$). Pour une série de fonctions, cette
    majoration devient uniforme si elle ne dépend pas de $x$ — c'est le moyen le plus direct d'obtenir une
    convergence uniforme sans passer par $\|f_n\|_\infty$ classique.
---

1. Soit $(u_n)_{n\in\mathbb{N}}$ une suite décroissante positive de limite nulle.
   a) Démontrer que la série $\sum (-1)^k u_k$ converge. Indication : on pourra considérer $(S_{2n})$ et $(S_{2n+1})$ avec $S_n = \sum_{k=0}^n (-1)^k u_k$.
   b) Donner une majoration de la valeur absolue du reste de cette série.

2. On pose $f_n(x) = \dfrac{(-1)^n e^{-nx}}{n}$ pour $n\in\mathbb{N}^*$, $x\in\mathbb{R}$.
   a) Étudier la convergence simple sur $\mathbb{R}$ de la série de fonctions $\sum f_n$.
   b) Étudier la convergence uniforme sur $[0,+\infty[$ de $\sum f_n$.
