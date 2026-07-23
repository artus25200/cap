---
level: 4
chapters:
  - id: espaces-prehilbertiens
    weight: 100
  - id: algebre
    weight: 20
tags: [isométrie vectorielle, groupe orthogonal, base orthonormée]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 78"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1.(a), utilise l'identité de polarisation en développant $\\|u(x+y)\\|^2$ de deux façons différentes (via l'hypothèse sur $u$, et via la bilinéarité du produit scalaire)."
  - "Pour la question 1.(b), relie l'injectivité au noyau : que dit l'hypothèse sur $\\|u(x)\\|$ quand $u(x)=0$ ?"
  - "Pour la question 2, vérifie les axiomes de sous-groupe un par un : stabilité par composition, élément neutre, stabilité par inverse (utilise 1.(b) pour la bijectivité)."
  - "Pour la question 3, dans un sens utilise le résultat de la question 1.(a) appliqué aux vecteurs de la base ; dans l'autre sens, décompose un vecteur quelconque dans la base et développe les normes par bilinéarité."
correction: |
  1. (a) Par polarisation : $\|u(x+y)\|^2 = \|x+y\|^2 = \|x\|^2+2(x|y)+\|y\|^2$, et aussi
  $\|u(x+y)\|^2 = \|u(x)\|^2+2(u(x)|u(y))+\|u(y)\|^2 = \|x\|^2+2(u(x)|u(y))+\|y\|^2$ (en utilisant
  l'hypothèse sur $u(x)$ et $u(y)$). On identifie : $(u(x)|u(y))=(x|y)$.

  (b) Si $x \in \mathrm{Ker}\,u$, $0=\|u(x)\|^2=\|x\|^2$ donc $x=0$ : $u$ est injectif, donc bijectif en
  dimension finie.

  2. $O(E) \subset GL(E)$, $\mathrm{Id}_E \in O(E)$. Pour $(u,v) \in O(E)^2$, $v$ est une isométrie bijective donc
  $v^{-1}$ aussi (car $\|v^{-1}(x)\| = \|v(v^{-1}(x))\| = \|x\|$), et $u \circ v^{-1}$ vérifie
  $\|u(v^{-1}(x))\| = \|v^{-1}(x)\| = \|x\|$ : c'est une isométrie. Donc $O(E)$ est un sous-groupe de $(GL(E), \circ)$.

  3. Si $u \in O(E)$, d'après 1.(a) $(u(e_i)|u(e_j)) = (e_i|e_j) = \delta_{ij}$ : $(u(e_1),\dots,u(e_n))$ est une
  famille orthonormée, donc une base orthonormée (libre à $n$ éléments). Réciproquement, si
  $(u(e_1),\dots,u(e_n))$ est orthonormée, en décomposant $x=\sum x_ie_i$ et en développant $\|x\|^2$ et
  $\|u(x)\|^2$ par bilinéarité, les deux expressions coïncident ($\sum x_i^2$) : $u \in O(E)$.
method:
  title: "Méthode : caractériser une isométrie vectorielle"
  content: >
    Une application linéaire $u$ conserve la norme ssi elle conserve le produit scalaire (par polarisation), ssi
    elle envoie une (toute) base orthonormée sur une base orthonormée. Ces trois caractérisations de $O(E)$ sont à
    connaître et à utiliser selon le contexte : conservation de la norme pour les calculs directs, conservation du
    produit scalaire pour les identités, image d'une base orthonormée pour construire des isométries explicites.
---

Soit $E$ un espace euclidien de dimension $n$ et $u$ un endomorphisme de $E$. On note $(x|y)$ le produit scalaire
de $x$ et de $y$ et $\|.\|$ la norme euclidienne associée.

1. Soit $u$ un endomorphisme de $E$, tel que $\forall x \in E,\ \|u(x)\| = \|x\|$.

(a) Démontrer que $\forall (x,y) \in E^2,\ (u(x)|u(y)) = (x|y)$.

(b) Démontrer que $u$ est bijectif.

2. On note $O(E) = \{u \in \mathcal L(E) / \forall x \in E,\ \|u(x)\|=\|x\|\}$ l'ensemble des isométries
vectorielles de $E$. Démontrer que $O(E)$, muni de la loi $\circ$, est un groupe.

3. Soit $u \in \mathcal L(E)$, $e=(e_1,\dots,e_n)$ une base orthonormée de $E$. Prouver que $u \in O(E) \iff (u(e_1),\dots,u(e_n))$ est une base orthonormée de $E$.
