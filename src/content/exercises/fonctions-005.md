---
level: 4
chapters:
  - id: fonctions
    weight: 100
tags: [développement limité, prolongement par continuité, extremum local]
source: null
banque: null
classic: false
hints:
  - "Compose le DL usuel de $\\cos x$ à l'ordre 4 avec celui de $\\ln(1+u)$ à l'ordre 2 (car $u=\\cos x-1$ est
    lui-même en $O(x^2)$, donc $u^2$ suffit à l'ordre 4)."
  - "Pour étudier le signe de $h(x)-\\ell$ au voisinage de 0, il est plus simple d'étudier le signe de
    $\\ln h(x) - \\ln \\ell$ (même signe, car $\\ln$ est strictement croissante)."
correction: |
  1. $\cos x = 1-\frac{x^2}2+\frac{x^4}{24}+o(x^4)$. On pose $u=\cos x-1 = -\frac{x^2}2+\frac{x^4}{24}+o(x^4) = O(x^2)$, donc $u^2 = \frac{x^4}4+o(x^4)$ suffit à l'ordre 4. Avec $\ln(1+u)=u-\frac{u^2}2+o(u^2)$ :
  $$\ln(\cos x) = \left(-\frac{x^2}2+\frac{x^4}{24}\right) - \frac12\times\frac{x^4}4+o(x^4)
  = -\frac{x^2}2-\frac{x^4}{12}+o(x^4).$$

  2. Pour $x\neq0$ au voisinage de $0$, $\ln h(x) = \dfrac1{x^2}\ln(\cos x) = -\dfrac12-\dfrac{x^2}{12}+o(x^2) \xrightarrow[x\to0]{} -\dfrac12$. Par continuité de l'exponentielle, $h(x)\to e^{-1/2}$ : $h$ admet une limite
  finie $\ell=e^{-1/2}$ en $0$, et le prolongement $\tilde h$ défini par $\tilde h(0)=e^{-1/2}$,
  $\tilde h(x)=h(x)$ sinon, est continu en $0$.

  3. Pour $x\neq0$ voisin de $0$ : $\ln h(x)-\ln\ell = \ln h(x)+\frac12 = -\dfrac{x^2}{12}+o(x^2) < 0$ dès que $x$
  est assez proche de $0$ (et non nul). Comme $\ln$ est strictement croissante, cela équivaut à $h(x)<\ell$. Donc
  $\tilde h(x) < \tilde h(0)$ pour tout $x\neq0$ assez proche de $0$ : $\tilde h$ admet un **maximum local strict**
  en $0$.
method:
  title: "Méthode : lever une indétermination fine grâce à un DL à un ordre suffisant"
  content: >
    Quand une limite se calcule facilement à un ordre donné mais qu'on souhaite en plus connaître la position
    locale par rapport à cette limite (croissance, décroissance, extremum), il faut pousser le DL à l'ordre
    suivant : ici, l'ordre 2 de $\ln(\cos x)$ suffit pour la limite de $h$, mais l'ordre 4 est nécessaire pour
    déterminer le signe de $h(x)-\ell$. Passer par $\ln h(x)-\ln\ell$ plutôt que par $h(x)-\ell$ directement
    évite un DL de l'exponentielle, souvent plus lourd.
---

On considère la fonction $h$ définie sur $\left]-\dfrac\pi2,0\right[\cup\left]0,\dfrac\pi2\right[$ par
$h(x) = (\cos x)^{1/x^2}$.

1. Déterminer le développement limité de $\ln(\cos x)$ à l'ordre 4 en $0$.

2. Montrer que $h$ admet une limite finie $\ell$ en $0$. On note $\tilde h$ le prolongement de $h$ par continuité
en $0$, défini par $\tilde h(0)=\ell$.

3. Étudier le signe de $h(x)-\ell$ au voisinage de $0$ (pour $x\neq0$) et en déduire que $\tilde h$ admet un
extremum local en $0$, dont on précisera la nature.
