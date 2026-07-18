---
level: 3
chapters:
  - id: fonctions
    weight: 100
tags: [développement limité, forme indéterminée, exponentielle du logarithme]
source: null
banque: null
classic: true
hints:
  - "Pour la question 2, il faut pousser les DL de $\\ln(1+x)$ et $\\sin x$ à l'ordre 2 : un DL à l'ordre 1
    donnerait une forme $0/0$ non résolue."
  - "Pour une limite du type $f(x)^{g(x)}$, écrire $f(x)^{g(x)} = e^{g(x)\\ln f(x)}$ et étudier d'abord la limite
    de $g(x)\\ln f(x)$."
correction: |
  1. $e^x = 1+x+o(x)$ et $\cos x = 1+o(x)$ (DL à l'ordre 1 suffit), donc $e^x-\cos x = x+o(x)$, d'où
  $$\lim_{x\to0}\frac{e^x-\cos x}{x} = 1.$$

  2. À l'ordre 1, $\ln(1+x)-\sin x = (x+o(x))-(x+o(x)) = o(x)$ : indéterminé. On pousse à l'ordre 2 :
  $\ln(1+x) = x-\frac{x^2}2+o(x^2)$, $\sin x = x-\frac{x^3}6+o(x^2) = x+o(x^2)$, donc
  $$\ln(1+x)-\sin x = -\frac{x^2}2+o(x^2), \qquad \lim_{x\to0}\frac{\ln(1+x)-\sin x}{x^2} = -\frac12.$$

  3. Soit $y(x) = \left(\dfrac{\sin x}x\right)^{1/x^2}$, définie au voisinage de $0$ privé de $0$ (le quotient
  $\frac{\sin x}x$ tend vers $1>0$). On écrit $\ln y(x) = \dfrac1{x^2}\ln\left(\dfrac{\sin x}x\right)$. Avec
  $\dfrac{\sin x}x = 1-\dfrac{x^2}6+o(x^2)$ et $\ln(1+u)=u+o(u)$ :
  $$\ln\left(\frac{\sin x}x\right) = -\frac{x^2}6+o(x^2), \qquad \ln y(x) = -\frac16+o(1) \xrightarrow[x\to0]{}
  -\frac16.$$
  Par continuité de l'exponentielle, $\displaystyle\lim_{x\to0} y(x) = e^{-1/6}$.
method:
  title: "Méthode : lever une indétermination avec un DL au bon ordre"
  content: >
    Quand un DL à un ordre donné produit un $o(x^k)$ des deux côtés d'une soustraction (indétermination
    persistante), il faut monter d'un ordre supplémentaire — un réflexe à avoir systématiquement avant de
    conclure trop vite à une forme "$0$". Pour une forme $f(x)^{g(x)}$, l'écriture $e^{g(x)\ln f(x)}$ ramène
    toujours le problème à une limite de produit, elle-même traitable par DL sur $\ln f(x)$.
---

Calculer les limites suivantes.

1. $\displaystyle\lim_{x\to0} \frac{e^x-\cos x}{x}$

2. $\displaystyle\lim_{x\to0} \frac{\ln(1+x)-\sin x}{x^2}$

3. $\displaystyle\lim_{x\to0} \left(\frac{\sin x}{x}\right)^{1/x^2}$
