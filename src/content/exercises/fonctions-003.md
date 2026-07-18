---
level: 3
chapters:
  - id: fonctions
    weight: 100
tags: [développement limité en l'infini, asymptote, position par rapport à la courbe]
source: null
banque: null
classic: true
hints:
  - "Poser $t=\\frac1x$ pour se ramener à un développement limité en $0$."
  - "L'équation de l'asymptote se lit sur les deux premiers termes du DL de $g(x)$ en puissances de $x$ ; le
    signe du terme suivant donne la position de la courbe par rapport à l'asymptote."
correction: |
  1. Pour $x\neq0$, on pose $t=\frac1x \to 0$ quand $x\to\pm\infty$. Le DL usuel de $e^t$ en $0$ donne
  $$e^{1/x} = 1+\frac1x+\frac1{2x^2}+o\!\left(\frac1{x^2}\right),$$
  donc
  $$g(x) = x\,e^{1/x} = x+1+\frac1{2x}+o\!\left(\frac1x\right).$$

  2. La droite $\Delta$ d'équation $y=x+1$ est asymptote à $\mathcal C_g$ en $+\infty$ et en $-\infty$, car
  $g(x)-(x+1) = \frac1{2x}+o\!\left(\frac1x\right) \xrightarrow[x\to\pm\infty]{} 0$.

  3. Au voisinage de $+\infty$, $g(x)-(x+1) \sim \frac1{2x} > 0$ : la courbe $\mathcal C_g$ est **au-dessus** de
  $\Delta$. Au voisinage de $-\infty$, $g(x)-(x+1) \sim \frac1{2x} < 0$ : la courbe est **en-dessous** de $\Delta$.
method:
  title: "Méthode : étudier une asymptote via un DL en l'infini"
  content: >
    Pour étudier le comportement d'une fonction en $\pm\infty$, on pose $t=\frac1x$ pour se ramener à un DL usuel
    en $0$, qu'on réinjecte ensuite en $x$. Les deux premiers termes du DL de $g(x)$ en puissances positives et
    constante de $x$ donnent l'équation de l'asymptote ; le signe du terme suivant (souvent en $\frac1x$ ou
    $\frac1{x^2}$) donne directement la position de la courbe par rapport à cette asymptote, sans étude de signe
    supplémentaire.
---

On considère la fonction $g$ définie sur $\mathbb R^*$ par $g(x) = x\,e^{1/x}$.

1. Déterminer le développement limité de $g(x)$ à l'ordre 1 en $\frac1x$, au voisinage de $+\infty$ (c'est-à-dire
un développement de la forme $g(x) = ax+b+\dfrac cx+o\left(\dfrac1x\right)$).

2. En déduire que la courbe représentative $\mathcal C_g$ de $g$ admet une asymptote $\Delta$ en $+\infty$ et en
$-\infty$, dont on donnera l'équation.

3. Préciser la position de $\mathcal C_g$ par rapport à $\Delta$ au voisinage de $+\infty$, puis au voisinage de
$-\infty$.
