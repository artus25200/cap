---
level: 5
chapters:
  - id: series-numeriques
    weight: 100
tags: [développement asymptotique, comparaison, semi-convergence]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 46"
banque: "CCINP"
classic: true
correction: |
  1. $\pi\sqrt{n^2+n+1} = n\pi\sqrt{1+\frac1n+\frac1{n^2}} = n\pi\left(1+\frac{1}{2n}+\frac{3}{8n^2}+O(1/n^3)\right) = n\pi + \frac\pi2 + \frac{3\pi}{8n} + O(1/n^2)$. Donc $\alpha = \frac{3\pi}{8}$.

  2. En posant $v_n = \cos(\pi\sqrt{n^2+n+1})$, la question 1 donne $v_n = \cos\left(n\pi+\frac\pi2+\frac{3\pi}{8n} +O(1/n^2)\right) = (-1)^{n+1}\sin\left(\frac{3\pi}{8n}+O(1/n^2)\right) = \frac{3\pi}{8}\cdot\frac{(-1)^{n+1}}{n} + O(1/n^2)$. Le premier terme donne une série convergente (CSSA), le second une série absolument convergente
  (comparaison à $\sum1/n^2$) : par somme, $\sum v_n$ converge.

  3. $|v_n| \sim \frac{3\pi}{8n}$, et $\sum \frac1n$ diverge, donc $\sum|v_n|$ diverge : pas de convergence
  absolue (la série est seulement semi-convergente).
method:
  title: "Méthode : développement asymptotique pour étudier une série trigonométrique"
  content: >
    Quand le terme général contient $\cos$ ou $\sin$ d'une expression complexe, un développement asymptotique
    précis (souvent via $\sqrt{1+x}=1+\frac x2-\frac{x^2}8+o(x^2)$) permet d'isoler un terme en $(-1)^n/n$ (type
    CSSA) plus un reste absolument convergent. La série obtenue est typiquement semi-convergente : convergente
    mais pas absolument.
---

On considère $\sum_{n\geqslant1} \cos\left(\pi\sqrt{n^2+n+1}\right)$.

1. Prouver que, au voisinage de $+\infty$, $\pi\sqrt{n^2+n+1} = n\pi + \dfrac\pi2 + \dfrac\alpha n + O\left(\dfrac1{n^2}\right)$ où $\alpha$ est un réel à déterminer.

2. En déduire que $\sum \cos(\pi\sqrt{n^2+n+1})$ converge.

3. Cette série converge-t-elle absolument ?
