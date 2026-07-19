---
level: 4
chapters:
  - id: calcul-differentiel
    weight: 100
tags: [différentiabilité, classe C1, majoration en coordonnées polaires]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 57"
banque: "CCINP"
classic: true
correction: |
  1. (a) $f$ continue en $(0,0)$ $\iff \forall\varepsilon>0,\exists\alpha>0,\forall(x,y), \|(x,y)\|<\alpha\Rightarrow|f(x,y)-f(0,0)|<\varepsilon$ (norme quelconque, équivalence des normes en
  dimension finie).
  (b) $f$ différentiable en $(0,0)$ $\iff \exists L$ linéaire continue telle que, au voisinage de $(0,0)$,
  $f(x,y)=f(0,0)+L(x,y)+o(\|(x,y)\|)$.

  2. (a) $f$ continue sur $\mathbb R^2\setminus\{(0,0)\}$ par opérations usuelles. En $(0,0)$, avec $|x|,|y| \leqslant\|(x,y)\|$ : $|f(x,y)| = |xy|\cdot\frac{|x^2-y^2|}{x^2+y^2} \leqslant |x||y| \leqslant \|(x,y)\|^2 \to 0$ : $f$ continue en $(0,0)$.
  (b) Dérivées partielles existent et sont continues sur $\mathbb R^2\setminus\{(0,0)\}$ (calcul direct). En
  $(0,0)$ : taux d'accroissement nul dans les deux directions, donc $\partial f/\partial x(0,0)=\partial f/\partial y(0,0)=0$. En posant $r=\|(x,y)\|$, on majore $|\partial f/\partial x(x,y)|\leqslant6r\to0$ et de
  même pour $\partial f/\partial y$ : dérivées partielles continues en $(0,0)$, donc $f$ est $C^1$ sur $\mathbb R^2$.
method:
  title: "Méthode : continuité via majoration directe, sans coordonnées polaires explicites"
  content: >
    Utiliser simplement $|x|\leqslant\|(x,y)\|$ et $|y|\leqslant\|(x,y)\|$ suffit souvent à majorer un produit
    comme $xy\cdot(\ldots)$ borné, sans avoir besoin de poser $r=\sqrt{x^2+y^2}$ explicitement — les deux
    approches sont équivalentes, celle-ci est parfois plus rapide à écrire.
---

1. Soit $f:\mathbb R^2\to\mathbb R$.
   a) Donner, avec quantificateurs, la définition de la continuité de $f$ en $(0,0)$.
   b) Donner la définition de « $f$ différentiable en $(0,0)$ ».

2. On considère $f(x,y) = xy\dfrac{x^2-y^2}{x^2+y^2}$ si $(x,y)\neq(0,0)$, $f(0,0)=0$.
   a) Montrer que $f$ est continue sur $\mathbb R^2$.
   b) Montrer que $f$ est de classe $C^1$ sur $\mathbb R^2$.
