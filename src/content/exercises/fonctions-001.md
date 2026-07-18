---
level: 1
chapters:
  - id: fonctions
    weight: 100
tags: [équivalents usuels, limites, croissances comparées]
source: null
banque: null
classic: true
hints:
  - "Remplace chaque expression par un équivalent usuel en 0 (ou en +∞) : $\\sin x \\sim x$, $1-\\cos x \\sim
    \\frac{x^2}2$, $e^x-1\\sim x$, $\\ln(1+x)\\sim x$."
  - "Un équivalent au numérateur divisé par un équivalent au dénominateur donne un équivalent du quotient : pas
    besoin de développement limité complet ici."
correction: |
  1. Au voisinage de $0$ : $1-\cos x \sim \frac{x^2}2$ et $\sin x \sim x$, donc
  $$x\sin x \sim x^2, \qquad \frac{1-\cos x}{x\sin x} \sim \frac{x^2/2}{x^2} = \frac12.$$
  Donc $\lim_{x\to0}\dfrac{1-\cos x}{x\sin x} = \dfrac12$.

  2. Au voisinage de $0$ : $e^{2x}-1 \sim 2x$ et $\ln(1+3x)\sim3x$, donc
  $$\frac{e^{2x}-1}{\ln(1+3x)} \sim \frac{2x}{3x} = \frac23.$$
  Donc la limite cherchée vaut $\dfrac23$.

  3. Croissance comparée usuelle : $\ln x = o(x)$ en $+\infty$, donc $\lim_{x\to+\infty}\dfrac{\ln x}x = 0$.
method:
  title: "Méthode : calculer une limite avec les équivalents usuels"
  content: >
    Pour une limite du type $\frac{f(x)}{g(x)}$ en un point où $f$ et $g$ tendent toutes deux vers $0$ (forme
    indéterminée $\frac00$), remplacer $f$ et $g$ par leurs équivalents usuels au voisinage de ce point (issus des
    DL classiques : $\sin x\sim x$, $1-\cos x\sim\frac{x^2}2$, $e^x-1\sim x$, $\ln(1+x)\sim x$, $(1+x)^\alpha-1\sim
    \alpha x$...) simplifie immédiatement le calcul, à condition de ne jamais additionner deux équivalents entre
    eux (seule la multiplication/division d'équivalents est licite).
---

Calculer les limites suivantes.

1. $\displaystyle\lim_{x\to0} \frac{1-\cos x}{x\sin x}$

2. $\displaystyle\lim_{x\to0} \frac{e^{2x}-1}{\ln(1+3x)}$

3. $\displaystyle\lim_{x\to+\infty} \frac{\ln x}{x}$
