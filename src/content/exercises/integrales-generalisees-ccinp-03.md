---
level: 4
chapters:
  - id: integrales-generalisees
    weight: 100
  - id: suites-series-fonctions
    weight: 40
tags: [convergence uniforme locale, convergence dominée]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 27"
banque: "CCINP"
classic: true
correction: |
  1. $f_n(0)=1$ ; pour $x\in\,]0,1]$, $f_n(x) \underset{+\infty}{\sim} \frac{e^{-x}}{n^2x^2} \to 0$. Donc $(f_n)$
  converge simplement vers $f$ avec $f(0)=1$, $f(x)=0$ sinon.

  2. Pour $a\in\,]0,1[$ : $\forall x\in[a,1], |f_n(x)-f(x)| = f_n(x) \leqslant \frac{e^{-a}}{1+n^2a^2} \to 0$
  (majoration indépendante de $x$) : convergence uniforme sur $[a,1]$.

  3. Chaque $f_n$ est continue sur $[0,1]$, mais $f$ est discontinue en 0 : pas de convergence uniforme sur $[0,1]$.

  4. $f_n$ continue par morceaux, $(f_n) \to f$ simplement avec $f$ continue par morceaux, et $|f_n(x)| \leqslant
  e^{-x} \leqslant 1$ (majoration indépendante de $n$, intégrable sur $[0,1]$) : par convergence dominée,
  $\lim u_n = \int_0^1 f(x)\,dx = 0$.
method:
  title: "Méthode : distinguer convergence uniforme locale et convergence dominée"
  content: >
    Un même exercice combine souvent deux idées différentes : la convergence uniforme peut échouer globalement
    (à cause d'une discontinuité de la limite en un point) tout en tenant localement (loin de ce point) — mais
    le calcul de $\lim \int f_n$ passe quand même, via la convergence dominée qui ne demande qu'une convergence
    simple plus une domination uniforme.
---

Pour $n\in\mathbb{N}^*$, on pose $f_n(x) = \dfrac{e^{-x}}{1+n^2x^2}$ et $u_n = \displaystyle\int_0^1 f_n(x)\,dx$.

1. Étudier la convergence simple de $(f_n)$ sur $[0,1]$.

2. Soit $a\in\,]0,1[$. $(f_n)$ converge-t-elle uniformément sur $[a,1]$ ?

3. $(f_n)$ converge-t-elle uniformément sur $[0,1]$ ?

4. Trouver $\lim_{n\to+\infty} u_n$.
