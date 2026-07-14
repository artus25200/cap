---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [convergence uniforme, interversion limite-intégrale]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 10"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $\forall x\in[0,1]$, $\lim_n f_n(x) = (x^2+1)e^x =: f(x)$ (convergence simple). De plus,
  $$f_n(x) - f(x) = (x^2+1)\,\frac{x(e^{-x}-e^x)}{n+x}, \qquad \text{donc } |f_n(x)-f(x)| \leqslant \frac{2e}{n}$$
  (majoration indépendante de $x\in[0,1]$). Donc $\|f_n-f\|_\infty \leqslant \frac{2e}{n} \to 0$ : convergence
  uniforme sur $[0,1]$.

  2. La convergence étant uniforme sur le segment $[0,1]$ pour des fonctions continues, on peut intervertir
  limite et intégrale :
  $$\lim_{n\to+\infty}\int_0^1 (x^2+1)\frac{ne^x+xe^{-x}}{n+x}\,dx = \int_0^1 (x^2+1)e^x\,dx.$$
  Deux intégrations par parties successives donnent $\displaystyle\int_0^1 (x^2+1)e^x\,dx = 2e-3$.
method:
  title: "Méthode : interversion limite/intégrale par convergence uniforme sur un segment"
  content: >
    Si $(f_n)$ converge uniformément vers $f$ sur un segment $[a,b]$, et que chaque $f_n$ est continue, alors
    $\int_a^b f_n \to \int_a^b f$. C'est le théorème d'interversion limite-intégrale "simple" (segment + convergence
    uniforme), à ne pas confondre avec le théorème de convergence dominée qui s'applique sur un intervalle
    quelconque avec seulement une convergence simple.
---

On pose $f_n(x) = (x^2+1)\dfrac{ne^x + xe^{-x}}{n+x}$.

1. Démontrer que la suite de fonctions $(f_n)$ converge uniformément sur $[0,1]$.

2. Calculer $\displaystyle\lim_{n\to+\infty} \int_0^1 (x^2+1)\dfrac{ne^x+xe^{-x}}{n+x}\,dx$.
