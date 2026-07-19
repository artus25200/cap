---
level: 5
chapters:
  - id: series-entieres
    weight: 100
tags: [développement en série entière, Arcsin, coefficients binomiaux généralisés]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 51"
banque: "CCINP"
classic: true
correction: |
  1. Posons $u_n = \dfrac{(2n)!}{(n!)^2 4^n(2n+1)}$, positif. $\dfrac{u_{n+1}}{u_n} = \dfrac{(2n+1)^2}{8(n+1)(2n+3)} \underset{+\infty}{\sim} \dfrac14 < 1$ : par d'Alembert, $\sum u_n$ converge.

  2. D'après le cours, $(1+u)^\alpha$ est DSE en 0 de rayon 1 (si $\alpha\notin\mathbb N$), avec
  $(1+u)^\alpha = 1+\sum_{n\geqslant1} \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}u^n$. Pour $\alpha=-\frac12, u=-t$, en multipliant numérateur et dénominateur par $2\cdot4\cdots2n=2^nn!$ :
  $$\frac{1}{\sqrt{1-t}} = \sum_{n=0}^{+\infty} \frac{(2n)!}{(2^nn!)^2}t^n, \qquad R=1.$$

  3. Pour $x\in\,]-1,1[$, $t=x^2\in[0,1[\subset\,]-1,1[$, donc
  $\frac{1}{\sqrt{1-x^2}} = \sum_{n=0}^{+\infty}\frac{(2n)!}{(2^nn!)^2}x^{2n}$, rayon $R=1$. Comme
  $\mathrm{Arcsin}'(x)=\frac{1}{\sqrt{1-x^2}}$, on intègre terme à terme (rayon conservé) :
  $$\mathrm{Arcsin}(x) = \sum_{n=0}^{+\infty} \frac{(2n)!}{(2^nn!)^2(2n+1)}x^{2n+1}, \qquad R=1.$$

  4. En $x=\frac12\in\,]-1,1[$ : $\mathrm{Arcsin}\left(\frac12\right) = \sum_{n=0}^{+\infty} \frac{(2n)!}{(n!)^24^n(2n+1)}\cdot\frac{1}{2^{2n+1}}$. Comme $\mathrm{Arcsin}(\frac12)=\frac\pi6$, on obtient
  $$\sum_{n=0}^{+\infty} \frac{(2n)!}{(n!)^24^n(2n+1)} = \frac\pi3.$$
method:
  title: "Méthode : sommer une série via le DSE de Arcsin"
  content: >
    Reconnaître un développement en série entière connu (ici celui de $\mathrm{Arcsin}$, obtenu en intégrant
    terme à terme celui de $\frac{1}{\sqrt{1-x^2}}$, lui-même dérivé du DSE généralisé de $(1+u)^\alpha$) permet
    de calculer la valeur exacte d'une série numérique en évaluant la somme en un point bien choisi du domaine
    de convergence.
---

1. Montrer que la série $\displaystyle\sum \dfrac{(2n)!}{(n!)^24^n(2n+1)}$ converge.

2. Donner le développement en série entière en 0 de $t\mapsto \dfrac{1}{\sqrt{1-t}}$, en précisant le rayon de convergence.

3. En déduire le développement en série entière en 0 de $x\mapsto \mathrm{Arcsin}(x)$ ainsi que son rayon de convergence.

4. En déduire la valeur de $\displaystyle\sum_{n=0}^{+\infty} \dfrac{(2n)!}{(n!)^24^n(2n+1)}$.
