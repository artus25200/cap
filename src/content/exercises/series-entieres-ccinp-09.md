---
level: 4
chapters:
  - id: series-entieres
    weight: 100
tags: [rayon de convergence, calcul de somme, séries paires-impaires]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 47"
banque: "CCINP"
classic: true
correction: |
  1. Pour $x\neq0$, $\frac{u_{n+1}(x)}{u_n(x)} \to 3x^2$ (d'Alembert). Rayon $R=1/\sqrt3$. Sur $]-1/\sqrt3,1/\sqrt3[$,
  $S(x) = \sum_{n\geqslant1} \frac{(3x^2)^n}{n} = -\ln(1-3x^2)$ (DSE usuel de $-\ln(1-t)$ en $t=3x^2$).

  2. En séparant pairs/impairs : $\sum a_{2n}x^{2n} = \sum 4^nx^{2n}=\sum(4x^2)^n$ de rayon $R_1=\frac12$, et
  $\sum a_{2n+1}x^{2n+1} = 5x\sum(5x^2)^n$ de rayon $R_2=\frac{1}{\sqrt5}$. Comme $R_1\neq R_2$, le rayon de la
  somme est $R=\min(R_1,R_2)=\frac1{\sqrt5}$, et sur $]-\frac1{\sqrt5},\frac1{\sqrt5}[$ :
  $$S(x) = \sum_{n=0}^{+\infty}(4x^2)^n + 5x\sum_{n=0}^{+\infty}(5x^2)^n = \frac{1}{1-4x^2} + \frac{5x}{1-5x^2}.$$
method:
  title: "Méthode : sommer une série entière en la ramenant à un DSE usuel"
  content: >
    Reconnaître dans $\sum a_nx^n$ la structure d'un DSE connu après changement de variable ($t=3x^2$ pour
    $-\ln(1-t)$) ou séparation pairs/impairs (chaque sous-série devient une série géométrique). Le rayon d'une
    série découpée en deux sous-séries de rayons différents est le minimum des deux — même principe que la
    somme de deux séries entières.
---

Pour chacune des séries entières suivantes, déterminer le rayon de convergence et calculer la somme sur l'intervalle ouvert de convergence.

1. $\displaystyle\sum_{n\geqslant1} \dfrac{3^n x^{2n}}{n}$

2. $\displaystyle\sum a_n x^n$ avec $a_{2n}=4^n$ et $a_{2n+1}=5^{n+1}$
