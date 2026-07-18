---
level: 4
chapters:
  - id: topologie
    weight: 100
  - id: series-numeriques
    weight: 30
tags: [algèbre normée, série de Neumann, exponentielle d'un endomorphisme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 40"
banque: "CCINP"
classic: true
correction: |
  1. (a) $\|u^n\|\leqslant\|u\|^n$ par récurrence, et $\sum\|u\|^n$ converge ($\|u\|<1$) : $\sum u^n$ converge
  absolument, donc converge ($A$ de dimension finie).
  (b) $(e-u)\sum_{n=0}^N u^n = e-u^{N+1}$. Par continuité de $x\mapsto(e-u)x$ (linéaire en dimension finie) et
  $u^{N+1}\to0$, on passe à la limite : $(e-u)\sum_{n=0}^{+\infty}u^n = e$, et de même dans l'autre sens. Donc
  $e-u$ est inversible d'inverse $\sum u^n$.

  2. $\|u^n/n!\| \leqslant \|u\|^n/n!$, et $\sum \|u\|^n/n!$ converge (série exponentielle), donc par comparaison
  $\sum u^n/n!$ converge absolument, donc converge.
method:
  title: "Méthode : séries dans une algèbre normée de dimension finie"
  content: >
    En dimension finie, une série absolument convergente converge (comme pour $\mathbb R$ ou $\mathbb C$). Ça
    permet de définir $\sum u^n$ (série de Neumann, inverse de $e-u$) et $\sum u^n/n!$ (exponentielle) dès que
    $\|u^n\|$ est majoré par une suite numérique dont la série converge.
---

Soit $A$ une algèbre de dimension finie, d'élément unité $e$, munie d'une norme $\|\cdot\|$ vérifiant $\|uv\|\leqslant\|u\|\|v\|$.

1. Soit $u\in A$ tel que $\|u\|<1$.
   a) Démontrer que $\sum u^n$ converge.
   b) Démontrer que $e-u$ est inversible, d'inverse $\sum_{n=0}^{+\infty} u^n$.

2. Démontrer que, pour tout $u\in A$, $\sum \dfrac{u^n}{n!}$ converge.
