---
level: 4
chapters:
  - id: calcul-differentiel
    weight: 100
tags: [continuité, dérivées partielles, classe C1, paramètre]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 52"
banque: "CCINP"
classic: true
correction: |
  1. $x^2+y^2-xy-\frac12(x^2+y^2) = \frac12(x-y)^2 \geqslant0$.

  2. (a) D'après 1., $x^2+y^2-xy=0 \iff x^2+y^2=0 \iff x=y=0$ : $f$ est bien définie sur $\mathbb R^2$.
  (b) $f$ continue sur $\mathbb R^2\setminus\{(0,0)\}$. Pour $(x,y)\neq(0,0)$, d'après 1.,
  $0\leqslant f(x,y) \leqslant \frac{2y^4}{x^2+y^2} \leqslant 2(x^2+y^2) \to 0$. Donc $f$ continue en $(0,0)$
  $\iff \alpha=0$.

  3. (a) Sur $\mathbb R^2\setminus\{(0,0)\}$, dérivées partielles existent par opérations usuelles, calculs
  directs.
  (b) $\frac{f(x,0)-f(0,0)}{x}=0\to0$ et de même en $y$ : $\partial f/\partial x(0,0)=\partial f/\partial y(0,0)=0$.
  (c) En posant $r=\sqrt{x^2+y^2}$, on majore (via 1.) $|\partial f/\partial x(x,y)| \leqslant 12r \to0$ et
  $|\partial f/\partial y(x,y)|\leqslant36r\to0$ : les dérivées partielles sont continues en $(0,0)$, donc $f$
  est $C^1$ sur $\mathbb R^2$.
method:
  title: "Méthode : majoration par passage en coordonnées polaires (norme r)"
  content: >
    Pour étudier la continuité ou la régularité en $(0,0)$ d'une fonction de deux variables, poser
    $r=\sqrt{x^2+y^2}$ (ou utiliser $|x|,|y|\leqslant r$) transforme une limite à deux variables en une limite à
    une variable, souvent bien plus simple à majorer.
---

Soit $\alpha\in\mathbb R$. On considère $f(x,y) = \dfrac{y^4}{x^2+y^2-xy}$ si $(x,y)\neq(0,0)$, $f(0,0)=\alpha$.

1. Prouver que $\forall(x,y)\in\mathbb R^2$, $x^2+y^2-xy \geqslant \frac12(x^2+y^2)$.

2. a) Justifier que le domaine de définition de $f$ est bien $\mathbb R^2$.
   b) Déterminer $\alpha$ pour que $f$ soit continue sur $\mathbb R^2$.

3. On suppose $\alpha=0$.
   a) Justifier l'existence de $\partial f/\partial x$ et $\partial f/\partial y$ sur $\mathbb R^2\setminus\{(0,0)\}$ et les calculer.
   b) Justifier l'existence de $\partial f/\partial x(0,0)$ et $\partial f/\partial y(0,0)$.
   c) $f$ est-elle de classe $C^1$ sur $\mathbb R^2$ ?
