---
level: 3
chapters:
  - id: espaces-prehilbertiens
    weight: 100
tags: [fonctions périodiques, projection orthogonale, produit scalaire fonctionnel]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 80"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Comme pour tout produit scalaire fonctionnel, la bilinéarité symétrique et la positivité sont immédiates. Si
  $(f|f)=0$, $f$ est nulle sur $[0,2\pi]$ (fonction continue positive d'intégrale nulle) donc, par $2\pi$-périodicité,
  $f=0$ sur $\mathbb R$. C'est donc bien un produit scalaire.

  2. On a $\sin^2 x = \frac12 - \frac12\cos(2x)$, et $-\frac12\cos(2x) \in F = \mathrm{Vect}(\cos, \cos(2\cdot))$.
  En notant $h: x \mapsto \frac12$, on calcule $(h|f)=\frac{1}{4\pi}\int_0^{2\pi}\cos x\,dx=0$ et
  $(h|g)=\frac{1}{4\pi}\int_0^{2\pi}\cos(2x)\,dx=0$, donc $h \in F^\perp$. Ainsi $u = h - \frac12\cos(2\cdot)$
  avec $h \in F^\perp$ et $-\frac12\cos(2\cdot) \in F$ : le projeté orthogonal de $u$ sur $F$ est
  $x \mapsto -\frac12\cos(2x)$.
method:
  title: "Méthode : projeté orthogonal via une décomposition explicite"
  content: >
    Si l'on parvient à écrire directement $u = p + q$ avec $p \in F$ et $q \in F^\perp$ (par exemple grâce à une
    identité trigonométrique), l'unicité de cette décomposition orthogonale donne immédiatement le projeté
    orthogonal $p_F(u) = p$, sans avoir à calculer explicitement une base orthonormée de $F$ ni les coefficients
    de Fourier un par un.
---

Soit $E$ l'espace vectoriel des applications continues et $2\pi$-périodiques de $\mathbb R$ dans $\mathbb R$.

1. Démontrer que $(f|g) = \frac{1}{2\pi}\int_0^{2\pi} f(t)g(t)\,dt$ définit un produit scalaire sur $E$.

2. Soit $F$ le sous-espace vectoriel engendré par $f: x \mapsto \cos x$ et $g: x \mapsto \cos(2x)$. Déterminer le
projeté orthogonal sur $F$ de la fonction $u: x \mapsto \sin^2 x$.
