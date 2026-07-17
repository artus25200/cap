---
level: 3
chapters:
  - id: espaces-prehilbertiens
    weight: 100
  - id: integrales-generalisees
    weight: 20
tags: [produit scalaire fonctionnel, fonction nulle, Cauchy-Schwarz]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 79"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Soit $F(x) = \int_a^x h(t)\,dt$, dérivable de dérivée $h \geqslant 0$ sur $[a,b]$ : $F$ est croissante. Or
  $F(a)=0=F(b)$, donc $F$ est constante sur $[a,b]$, donc $F'=h=0$ sur $[a,b]$.

  2. $(f|g) = \int_a^b fg$ est bilinéaire symétrique (linéarité de l'intégrale) et positive
  ($f^2 \geqslant 0$). Si $(f|f)=\int_a^b f^2 = 0$, la question 1 appliquée à $h=f^2$ donne $f=0$ sur $[a,b]$ :
  la forme est définie. C'est donc un produit scalaire.

  3. Cauchy-Schwarz pour $(f|g)=\int_0^1 fg$ avec $f(x)=\sqrt x$, $g(x)=e^{-x}$ donne
  $$\int_0^1 \sqrt x\,e^{-x}\,dx \leqslant \sqrt{\int_0^1 x\,dx} \sqrt{\int_0^1 e^{-2x}\,dx}
  = \sqrt{\frac{1-e^{-2}}{2}}.$$
method:
  title: "Méthode : une fonction continue positive d'intégrale nulle est nulle"
  content: >
    Ce résultat classique (utile pour prouver le caractère défini d'un produit scalaire fonctionnel) se démontre
    en introduisant la primitive $F$ de $h$ : $F$ croissante car $h \geqslant 0$, et $F(a)=F(b)$ (donnée),
    donc $F$ constante, donc $F'=h$ nulle. Toujours penser à cette primitive plutôt qu'à un argument "évident" par
    l'absurde qui masque la rigueur attendue.
---

Soit $a$ et $b$ deux réels tels que $a<b$.

1. Soit $h$ une fonction continue et positive de $[a,b]$ dans $\mathbb R$. Démontrer que
$\int_a^b h(x)\,dx = 0 \implies h=0$.

2. Soit $E$ le $\mathbb R$-espace vectoriel des fonctions continues de $[a,b]$ dans $\mathbb R$. On pose
$\forall (f,g) \in E^2,\ (f|g) = \int_a^b f(x)g(x)\,dx$. Démontrer que l'on définit ainsi un produit scalaire sur
$E$.

3. Majorer $\int_0^1 \sqrt x\,e^{-x}\,dx$ en utilisant l'inégalité de Cauchy-Schwarz.
