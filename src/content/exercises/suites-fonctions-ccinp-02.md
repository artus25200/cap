---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [convergence simple, convergence uniforme, convergence uniforme locale]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 9"
banque: "CCINP"
classic: true
hints:
  - "Compare le comportement en x = 0 (fn(0) → 1) au comportement pour x ≠ 0 (fn(x) → 0) : ça donne immédiatement une fonction limite discontinue."
  - "Une limite simple discontinue alors que chaque fn est continue interdit la convergence uniforme sur un voisinage de la discontinuité."
correction: |
  Notation : $\|f\|_{\infty,X} = \sup_{t\in X}|f(t)|$ pour $f$ bornée sur $X$.

  1. $(g_n)$ converge uniformément vers $g$ sur $X$ signifie : $\forall\varepsilon>0, \exists N, \forall n\geqslant
  N, \forall x\in X, |g_n(x)-g(x)|\leqslant\varepsilon$. De façon équivalente : $g_n-g$ est bornée à partir d'un
  certain rang et $\|g_n-g\|_{\infty,X}\to0$.

  2. Avec $f_n(x) = \frac{n+2}{n+1} e^{-nx^2}\cos(\sqrt n x)$ :
  (a) $f_n(0) = \frac{n+2}{n+1}\to1$ ; pour $x\neq0$, $|f_n(x)|\leqslant e^{-nx^2}\to0$. Donc $(f_n)$ converge
  simplement vers $f$ avec $f(0)=1$, $f(x)=0$ sinon.
  (b) Chaque $f_n$ est continue sur $[0,+\infty[$ mais $f$ ne l'est pas en 0 : pas de convergence uniforme sur
  $[0,+\infty[$ (une limite uniforme de fonctions continues est continue).
  (c) Pour $a>0$ : $\forall x\geqslant a$, $|f_n(x)-f(x)| = |f_n(x)| \leqslant \frac{n+2}{n+1}e^{-na^2}
  \underset{n\to+\infty}{\longrightarrow} 0$ (majoration indépendante de $x$). Donc convergence uniforme sur $[a,+\infty[$.
  (d) Sur $]0,+\infty[$ : en $x_n = 1/\sqrt n$, $|f_n(x_n)-f(x_n)| = \frac{n+2}{n+1}e^{-1}\cos(1) \to e^{-1}\cos(1)
  \neq0$, donc $\|f_n-f\|_{\infty,]0,+\infty[}$ ne tend pas vers 0 : pas de convergence uniforme sur $]0,+\infty[$.
method:
  title: "Méthode : convergence uniforme locale, pas globale"
  content: >
    Un grand classique : une suite de fonctions peut converger uniformément sur $[a,+\infty[$ pour tout $a>0$
    fixé (convergence uniforme "locale") sans converger uniformément sur $]0,+\infty[$ tout entier. Le réflexe
    est de tester la convergence uniforme en évaluant $f_n - f$ en un point bien choisi qui dépend de $n$ (ici
    $x_n=1/\sqrt n$) pour exhiber que le sup ne tend pas vers 0.
---

1. Soit $X$ un ensemble, $(g_n)$ une suite de fonctions de $X$ dans $\mathbb{C}$ et $g$ une fonction de $X$ dans $\mathbb{C}$. Donner la définition de la convergence uniforme sur $X$ de $(g_n)$ vers $g$.

2. On pose $f_n(x) = \dfrac{n+2}{n+1} e^{-nx^2}\cos(\sqrt{n}\,x)$.
   a) Étudier la convergence simple de la suite de fonctions $(f_n)$.
   b) $(f_n)$ converge-t-elle uniformément sur $[0,+\infty[$ ?
   c) Soit $a>0$. $(f_n)$ converge-t-elle uniformément sur $[a,+\infty[$ ?
   d) $(f_n)$ converge-t-elle uniformément sur $]0,+\infty[$ ?
