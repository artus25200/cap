---
level: 2
chapters:
  - id: fonctions
    weight: 100
tags: [fonction arctangente, dérivation, fonction constante par intervalles]
source: null
banque: null
classic: true
hints:
  - "Étudie $\\varphi$ sur $]0,+\\infty[$ et sur $]-\\infty,0[$ séparément : une fonction dérivable de dérivée
    nulle sur un intervalle y est constante — mais $\\varphi$ n'est pas définie en 0, donc les deux intervalles
    doivent être traités indépendamment."
  - "Une fois $\\varphi$ reconnue constante sur chaque intervalle, il suffit de l'évaluer en un point simple de
    chacun (par exemple $x=1$ et $x=-1$) pour conclure."
correction: |
  1. $\varphi$ est dérivable sur $\mathbb R^*$ comme somme de composées de fonctions dérivables (arctan est
  dérivable sur $\mathbb R$, $x\mapsto\frac1x$ est dérivable sur $\mathbb R^*$). Pour $x\neq0$ :
  $$\varphi'(x) = \frac1{1+x^2} + \left(-\frac1{x^2}\right)\times\frac1{1+\frac1{x^2}}
  = \frac1{1+x^2} - \frac1{x^2+1} = 0.$$

  2. $\varphi$ est dérivable de dérivée nulle sur l'intervalle $]0,+\infty[$, donc $\varphi$ y est constante ; de
  même sur $]-\infty,0[$. (On ne peut pas conclure que $\varphi$ est constante sur $\mathbb R^*$ tout entier, car
  $\mathbb R^*$ n'est pas un intervalle : $\varphi$ n'est pas nécessairement définie, ni continue, "à travers"
  $0$.)

  3. Sur $]0,+\infty[$ : $\varphi(1) = \arctan(1)+\arctan(1) = 2\times\frac\pi4 = \frac\pi2$, donc
  $\varphi(x)=\frac\pi2$ pour tout $x>0$. Sur $]-\infty,0[$ : $\varphi(-1) = \arctan(-1)+\arctan(-1) = -\frac\pi2$, donc $\varphi(x)=-\frac\pi2$ pour tout $x<0$. En résumé :
  $$\forall x\in\mathbb R^*,\quad \arctan(x)+\arctan\left(\frac1x\right) = \begin{cases}\dfrac\pi2 & \text{si }
  x>0\\-\dfrac\pi2 & \text{si } x<0\end{cases}.$$
method:
  title: "Méthode : prouver une identité via une dérivée nulle sur chaque intervalle"
  content: >
    Pour établir une égalité de fonctions du type $f(x)=c$, une stratégie classique consiste à poser
    $\varphi=f$, montrer que $\varphi'=0$ sur le domaine considéré, puis conclure à la constance de $\varphi$
    **sur chaque intervalle** du domaine séparément (jamais sur une réunion d'intervalles disjoints), avant
    d'évaluer $\varphi$ en un point particulier de chacun pour identifier la constante.
---

On considère la fonction $\varphi$ définie sur $\mathbb R^*$ par $\varphi(x) = \arctan(x)+\arctan\left(\dfrac1x\right)$.

1. Justifier que $\varphi$ est dérivable sur $\mathbb R^*$ et calculer $\varphi'(x)$ pour $x\in\mathbb R^*$.

2. En déduire que $\varphi$ est constante sur $]0,+\infty[$ et constante sur $]-\infty,0[$.

3. Déterminer ces deux constantes, et conclure en donnant l'expression de $\arctan(x)+\arctan\left(\dfrac1x\right)$
pour tout $x\in\mathbb R^*$.
