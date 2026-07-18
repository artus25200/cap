---
level: 5
chapters:
  - id: espaces-prehilbertiens
    weight: 100
tags: [adjoint, endomorphisme normal]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 63"
banque: "CCINP"
classic: true
correction: |
  1. Non : sur $E=\mathbb R^2$ euclidien canonique, la rotation $u$ d'angle $\pi/2$ vérifie $(u(x)|x)=0$ pour
  tout $x$ (le vecteur tourné est toujours orthogonal à l'original), mais $u\neq0$.

  2. **i $\Rightarrow$ ii** : $(u(x)|u(y)) = (x|u^*u(y)) = (x|uu^*(y)) = (u^*(x)|u^*(y))$.
  **ii $\Rightarrow$ i** : pour $x$ fixé, $\forall y$, $(uu^*(x)-u^*u(x)|y) = (u^*(x)|u^*(y))-(u(x)|u(y)) = 0$
  (par ii), donc $uu^*(x)-u^*u(x)\in E^\perp=\{0\}$.
  **ii $\Rightarrow$ iii** : prendre $y=x$ dans ii, puis racine carrée (normes positives).
  **iii $\Rightarrow$ ii** : par polarisation, $(u(x)|u(y)) = \frac12(\|u(x+y)\|^2-\|u(x)\|^2-\|u(y)\|^2)$, et
  chaque terme se réécrit via iii en remplaçant $u$ par $u^*$, donnant $(u^*(x)|u^*(y))$.
method:
  title: "Méthode : caractérisations équivalentes d'un endomorphisme normal"
  content: >
    $u\circ u^*=u^*\circ u$ (endomorphisme normal) équivaut à la conservation des produits scalaires par $u$ et
    $u^*$ simultanément, et aussi à l'égalité des normes $\|u(x)\|=\|u^*(x)\|$. L'identité de polarisation est
    l'outil clé pour passer d'une égalité de normes à une égalité de produits scalaires.
---

Soit $E$ un espace euclidien, $u^*$ l'adjoint d'un endomorphisme $u$.

1. Un endomorphisme $u$ tel que $\forall x, (u(x)|x)=0$ est-il nécessairement nul ?

2. Soit $u\in\mathcal L(E)$. Prouver l'équivalence de : (i) $u\circ u^*=u^*\circ u$ ; (ii) $\forall(x,y),
(u(x)|u(y))=(u^*(x)|u^*(y))$ ; (iii) $\forall x, \|u(x)\|=\|u^*(x)\|$.
