---
level: 4
chapters:
  - id: espaces-prehilbertiens
    weight: 100
tags: [Cauchy-Schwarz, cas d'égalité, borne inférieure]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 76"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) Pour $(x,y) \in E^2$, on pose $P(\lambda) = \|x+\lambda y\|^2 = \|y\|^2\lambda^2 + 2\lambda(x|y) + \|x\|^2
  \geqslant 0$. Si $y=0$ l'inégalité est triviale ; sinon $P$ est un trinôme positif, donc de discriminant réduit
  $\Delta = (x|y)^2 - \|x\|^2\|y\|^2 \leqslant 0$, soit $|(x|y)| \leqslant \|x\|\,\|y\|$.

  (b) Égalité $\iff$ ($y=0$) ou ($P$ a une racine double $\lambda_0$, donc $x+\lambda_0y=0$) $\iff$ $x,y$
  colinéaires.

  2. On munit $C([a,b],\mathbb R)$ du produit scalaire usuel $(f|g)=\int_a^b fg$. L'ensemble
  $A=\left\{\int_a^b f \times \int_a^b \frac1f,\ f \in E\right\}$ est non vide (valeur $(b-a)^2$ pour $f=1$) et
  minoré par $0$, donc admet une borne inférieure $m$. Cauchy-Schwarz appliqué à $\sqrt f$ et $1/\sqrt f$ donne
  $$(b-a)^2 = \left(\int_a^b \sqrt f \cdot \frac{1}{\sqrt f}\right)^2 \leqslant \int_a^b f \times \int_a^b \frac1f,$$
  donc $m \geqslant (b-a)^2$, avec égalité pour $f=1$ : $m=(b-a)^2$.
method:
  title: "Méthode : cas d'égalité de Cauchy-Schwarz via un trinôme"
  content: >
    La preuve standard de Cauchy-Schwarz consiste à étudier le signe du trinôme $\lambda \mapsto \|x+\lambda y\|^2$,
    toujours positif ou nul : discriminant négatif ou nul. L'égalité correspond exactement au cas où ce trinôme
    admet une racine (double), c'est-à-dire à la colinéarité de $x$ et $y$ — un réflexe à avoir pour tout problème
    d'optimisation sous produit scalaire.
---

Soit $E$ un $\mathbb R$-espace vectoriel muni d'un produit scalaire noté $(\ |\ )$. On pose
$\forall x \in E,\ \|x\| = \sqrt{(x|x)}$.

1. (a) Énoncer et démontrer l'inégalité de Cauchy-Schwarz.

(b) Dans quel cas a-t-on égalité ? Le démontrer.

2. Soit $E = \{f \in C([a,b],\mathbb R),\ \forall x \in [a,b],\ f(x) > 0\}$. Prouver que l'ensemble
$\left\{\int_a^b f(t)\,dt \times \int_a^b \frac{1}{f(t)}\,dt,\ f \in E\right\}$ admet une borne inférieure $m$ et
déterminer la valeur de $m$.
