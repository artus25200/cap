---
level: 4
chapters:
  - id: calcul-differentiel
    weight: 100
tags: [dérivées partielles, classe C1, continuité]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 33"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, majore $|f(x,y)|$ en (0,0) en utilisant $|x|,|y|\\leqslant\\|(x,y)\\|_2$."
  - "Pour la question 2, calcule directement le taux d'accroissement en $(0,0)$ le long de chaque axe : $f$ est nulle sur les axes."
  - "Pour la question 3, teste la continuité de $\\partial f/\\partial x$ en comparant sa valeur en $(0,0)$ à sa limite le long de la droite $y=x$."
correction: |
  1. $f$ continue sur $\mathbb{R}^2\setminus\{(0,0)\}$ par opérations usuelles. En $(0,0)$ :
  $|f(x,y)| = \frac{|x||y|}{\|(x,y)\|_2} \leqslant \|(x,y)\|_2 \to 0$, donc $f$ continue en $(0,0)$.

  2. Sur $\mathbb{R}^2\setminus\{(0,0)\}$, dérivées partielles existent par opérations usuelles. En $(0,0)$ :
  $\frac1t(f(t,0)-f(0,0))=0\to0$ et de même en $y$, donc $\partial f/\partial x(0,0)=\partial f/\partial y(0,0)=0$.

  3. Pour $(x,y)\neq(0,0)$, $\frac{\partial f}{\partial x}(x,y) = \frac{y^3}{(x^2+y^2)^{3/2}}$. Or
  $\frac{\partial f}{\partial x}(x,x) = \frac{1}{2\sqrt2}$ pour $x>0$, qui ne tend pas vers
  $\frac{\partial f}{\partial x}(0,0)=0$ quand $x\to0^+$. Donc $\partial f/\partial x$ n'est pas continue en
  $(0,0)$ : $f$ n'est pas $C^1$ sur $\mathbb{R}^2$.
method:
  title: "Méthode : existence des dérivées partielles n'implique pas la classe C1"
  content: >
    $f$ peut être continue et admettre des dérivées partielles partout sans être $C^1$ — il faut en plus que ces
    dérivées partielles soient elles-mêmes continues. Le contre-exemple type : tester la dérivée partielle le
    long d'une direction particulière (ici $y=x$) et comparer sa limite à la valeur au point.
---

On pose $f(x,y) = \dfrac{xy}{\sqrt{x^2+y^2}}$ pour $(x,y)\neq(0,0)$, et $f(0,0)=0$.

1. Démontrer que $f$ est continue sur $\mathbb{R}^2$.

2. Démontrer que $f$ admet des dérivées partielles en tout point de $\mathbb{R}^2$.

3. $f$ est-elle de classe $C^1$ sur $\mathbb{R}^2$ ? Justifier.
