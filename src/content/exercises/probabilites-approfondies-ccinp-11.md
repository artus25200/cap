---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [loi géométrique, loi jointe, série entière admise, loi marginale]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 111"
banque: "CCINP - Banque orale MP/MPI"
classic: false
correction: |
  1. Tous les termes sont positifs ; par Fubini et reconnaissance du binôme de Newton puis d'une série
  géométrique :
  $$\sum_{(k,n)\in\mathbb N^2}\binom nk\left(\frac12\right)^np(1-p)^n = \sum_{n=0}^{+\infty}p(1-p)^n
  \sum_{k=0}^n\binom nk = \sum_{n=0}^{+\infty}p(1-p)^n = p\times\frac1{1-(1-p)} = 1.$$
  C'est bien une loi de probabilité sur $\mathbb N^2$.

  2. (a) $P(Y=n) = \sum_{k=0}^n\binom nk\left(\frac12\right)^np(1-p)^n = p(1-p)^n$ (même calcul que ci-dessus, sans
  sommer sur $n$).

  (b) $Z=1+Y$ vérifie $P(Z=n)=P(Y=n-1)=p(1-p)^{n-1}$ pour $n\geqslant1$ : $Z$ suit une loi géométrique de
  paramètre $p$.

  (c) $E(Z)=\frac1p$, donc $E(Y)=E(Z)-1=\frac{1-p}p$.

  3. Pour $k\in\mathbb N$, en séparant les facteurs dépendant de $k$ :
  $$P(X=k) = p\left(\frac12\right)^k(1-p)^k\sum_{n=k}^{+\infty}\binom nk\left(\frac{1-p}2\right)^{n-k}
  = p\left(\frac{1-p}2\right)^k\times\frac1{\left(1-\frac{1-p}2\right)^{k+1}},$$
  en utilisant la formule admise. Après simplification ($1-\frac{1-p}2 = \frac{1+p}2$) :
  $$P(X=k) = \frac{2p}{1+p}\left(\frac{1-p}{1+p}\right)^k.$$
method:
  title: "Méthode : loi marginale d'un couple via une série entière admise"
  content: >
    Quand l'énoncé fournit une identité de série entière non standard (ici $\sum_{k\geqslant q}\binom kqx^{k-q}
    = \frac1{(1-x)^{q+1}}$), le réflexe est de faire apparaître exactement cette forme dans le calcul de la loi
    marginale en factorisant tout ce qui ne dépend pas de l'indice de sommation, plutôt que de chercher à
    redémontrer l'identité soi-même.
---

On admet, dans cet exercice, que $\forall q \in \mathbb N,\ \forall x \in ]-1,1[,\ \sum_{k\geqslant q}\binom kqx^{k-q}$
converge et vaut $\dfrac1{(1-x)^{q+1}}$.

Soit $p \in ]0,1[$. Soit $X$ et $Y$ deux variables aléatoires à valeurs dans $\mathbb N$. On suppose que la loi de
probabilité du couple $(X,Y)$ est donnée par
$$\forall (k,n) \in \mathbb N^2,\ P((X=k)\cap(Y=n)) = \begin{cases}\binom nk\left(\frac12\right)^np(1-p)^n &
\text{si } k\leqslant n\\0 & \text{sinon}\end{cases}.$$

1. Vérifier qu'il s'agit bien d'une loi de probabilité.

2. (a) Déterminer la loi de $Y$.

(b) Prouver que $1+Y$ suit une loi géométrique.

(c) Déterminer l'espérance de $Y$.

3. Déterminer la loi de $X$.
