---
level: 5
chapters:
  - id: series-numeriques
    weight: 100
tags: [séries de Bertrand, comparaison série-intégrale, équivalents]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 5"
banque: "CCINP"
classic: true
hints:
  - "Pour α ≤ 0, minore grossièrement le terme général par celui d'une série de référence divergente."
  - "Pour α > 0, compare la série à l'intégrale de la fonction f(x) = 1/(x(ln x)^α), qui est décroissante."
correction: |
  1. (a) Cas $\alpha \leqslant 0$ : $\forall n\geqslant 3$, $\ln n \geqslant 1$ donc $(\ln n)^\alpha \leqslant 1$,
  donc $u_n \geqslant \frac{1}{n}$. Comme $\sum \frac1n$ diverge, par comparaison $\sum u_n$ diverge.

  (b) Cas $\alpha>0$ : la fonction $f(x) = \frac{1}{x(\ln x)^\alpha}$ est continue, décroissante et positive sur
  $[2,+\infty[$, donc par comparaison série-intégrale, $\sum f(n)$ et $\int_2^{+\infty} f(x)\,dx$ sont de même
  nature. Le changement de variable $t = \ln x$ donne $\int_2^{+\infty} f(x)\,dx = \int_{\ln 2}^{+\infty}
  \frac{dt}{t^\alpha}$, qui converge ssi $\alpha > 1$ (intégrale de Riemann). Donc $\sum u_n$ converge $\iff \alpha>1$.

  2. Au voisinage de $+\infty$, un développement asymptotique donne $e - \left(1+\frac1n\right)^n \underset{+\infty}{\sim} \frac{e}{2n}$,
  et $\ln(n^2+n) \underset{+\infty}{\sim} 2\ln n$. On en déduit
  $$u_n \underset{+\infty}{\sim} \frac{e}{8}\cdot\frac{1}{n^2(\ln n)^2}.$$
  D'après 1.(b) avec $\alpha=2>1$, $\sum \frac{1}{n^2(\ln n)^2}$ converge, donc par équivalence $\sum u_n$ converge.
method:
  title: "Méthode : comparaison série-intégrale pour les séries de Bertrand"
  content: >
    Pour une série $\sum f(n)$ où $f$ est positive, décroissante et continue par morceaux, elle est de même
    nature que $\int^{+\infty} f(x)\,dx$. C'est l'outil de référence pour les séries de Bertrand
    $\frac{1}{n^\alpha (\ln n)^\beta}$, qui ne se traitent pas par les critères usuels (d'Alembert, Riemann seul).
course: |
  Séries de Bertrand : $\sum \frac{1}{n^\alpha(\ln n)^\beta}$ converge ssi $\alpha>1$, ou ($\alpha=1$ et $\beta>1$).
---

1. On considère la série de terme général $u_n = \dfrac{1}{n(\ln n)^\alpha}$ où $n\geqslant2$ et $\alpha\in\mathbb{R}$.
   a) Cas $\alpha \leqslant 0$ : en utilisant une minoration très simple de $u_n$, démontrer que la série diverge.
   b) Cas $\alpha > 0$ : étudier la nature de la série. Indication : on pourra utiliser $f(x) = \dfrac{1}{x(\ln x)^\alpha}$.

2. Déterminer la nature de la série $\displaystyle\sum_{n\geqslant2} \dfrac{\left(e - \left(1+\frac1n\right)^n\right)}{(\ln(n^2+n))^2}$.
