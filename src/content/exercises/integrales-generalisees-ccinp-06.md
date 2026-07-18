---
level: 5
chapters:
  - id: integrales-generalisees
    weight: 100
  - id: equations-differentielles
    weight: 50
tags: [dérivation sous le signe intégrale, équation différentielle linéaire d'ordre 1]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 30"
banque: "CCINP"
classic: true
hints:
  - "Pour trouver l'équation différentielle, dérive f, intègre par parties, et fais apparaître f elle-même dans le résultat."
correction: |
  1. Voir le théorème de dérivation sous le signe intégrale (cf. exercice 29, méthode associée) pour l'énoncé complet.

  2. $u(x,t)=e^{-t^2}\cos(xt)$ : $t\mapsto u(x,t)$ continue intégrable sur $[0,+\infty[$ (dominée par $e^{-t^2}$).
  $\partial u/\partial x = -te^{-t^2}\sin(xt)$, dominée (indépendamment de $x$) par $\varphi(t)=te^{-t^2}$,
  intégrable sur $[0,+\infty[$. Donc $f$ est $C^1$ sur $\mathbb{R}$ avec $f'(x) = -\int_0^{+\infty}
  te^{-t^2}\sin(xt)\,dt$.

  3. (a) Une IPP (termes de bord nuls) donne $f'(x) = -\frac{x}{2}\int_0^{+\infty} e^{-t^2}\cos(xt)\,dt =
  -\frac{x}{2}f(x)$. Donc $f$ est solution de $(E) : y' + \frac{x}{2}y = 0$.
  (b) Les solutions de $(E)$ sont $y(x) = A\,e^{-x^2/4}$, $A\in\mathbb{R}$.
method:
  title: "Méthode : trouver une équation différentielle vérifiée par une intégrale à paramètre"
  content: >
    Après avoir dérivé sous le signe intégrale, une intégration par parties bien choisie fait souvent réapparaître
    l'intégrale de départ (à un facteur près), donnant une équation différentielle linéaire simple vérifiée par
    $f$. Résoudre cette équation (souvent à variables séparables ou linéaire d'ordre 1 classique) donne l'allure
    explicite de $f$ sans calculer directement l'intégrale.
---

1. Énoncer le théorème de dérivation sous le signe intégrale.

2. Démontrer que $f : x \mapsto \displaystyle\int_0^{+\infty} e^{-t^2}\cos(xt)\,dt$ est de classe $C^1$ sur $\mathbb{R}$.

3. a) Trouver une équation différentielle linéaire $(E)$ d'ordre 1 dont $f$ est solution.
   b) Résoudre $(E)$.
