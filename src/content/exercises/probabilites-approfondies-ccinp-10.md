---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
  - id: series-entieres
    weight: 40
tags: [fonction génératrice, dérivées successives, loi de Poisson, unicité]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 110"
banque: "CCINP"
classic: true
correction: |
  1. (a) $\forall t\in[-1,1]$, $|t^nP(X=n)|\leqslant P(X=n)$ et $\sum P(X=n)=1$ converge : convergence absolue de
  $\sum t^nP(X=n)$ sur $[-1,1]$, donc $R_X\geqslant1$ et $[-1,1]\subset D_{G_X}$. Le théorème du transfert donne
  $G_X(t)=E(t^X)$.

  (b) $G_X$ est somme d'une série entière de rayon $\geqslant1$, donc $C^\infty$ sur $]-1,1[$, avec
  $G_X^{(k)}(t) = \sum_{n=k}^{+\infty}\frac{n!}{(n-k)!}t^{n-k}P(X=n)$, donc $G_X^{(k)}(0)=k!P(X=k)$, soit
  $P(X=k)=\dfrac{G_X^{(k)}(0)}{k!}$.

  2. (a) Pour $X$ de Poisson $(\lambda)$ : $\sum t^ne^{-\lambda}\frac{\lambda^n}{n!} = e^{-\lambda}e^{\lambda t}$
  converge $\forall t\in\mathbb R$ (série exponentielle) : $D_{G_X}=\mathbb R$, $G_X(t)=e^{\lambda(t-1)}$.

  (b) Pour $Z=X+Y$ avec $X,Y$ indépendantes de Poisson $(\lambda_1),(\lambda_2)$, sur $[-1,1]$ :
  $G_Z(t) = E(t^Xt^Y) = G_X(t)G_Y(t) = e^{(\lambda_1+\lambda_2)(t-1)}$. On reconnaît la fonction génératrice
  d'une Poisson$(\lambda_1+\lambda_2)$, donc (par unicité, question 1(b)) $Z \hookrightarrow \mathcal
  P(\lambda_1+\lambda_2)$.
method:
  title: "Méthode : identifier une loi par sa fonction génératrice"
  content: >
    L'unicité du développement en série entière fait de la fonction génératrice une "empreinte digitale" de la
    loi : si deux variables ont la même fonction génératrice sur un voisinage de $0$, elles ont la même loi
    (via $P(X=k)=G_X^{(k)}(0)/k!$). Reconnaître $G_X$ sous une forme connue (ici $e^{\lambda(t-1)}$, celle d'une
    Poisson) permet donc de conclure directement sans repasser par un calcul de $P(X=k)$.
---

Soit $(\Omega,\mathcal A,P)$ un espace probabilisé.

1. Soit $X$ une variable aléatoire à valeurs dans $\mathbb N$. On considère la série entière
$\sum t^nP(X=n)$, de rayon de convergence $R_X$.

(a) Prouver que $R_X \geqslant 1$. On pose $G_X(t)=\sum_{n=0}^{+\infty}t^nP(X=n)$ ; justifier que
$[-1,1]\subset D_{G_X}$ et exprimer, pour $t\in[-1,1]$, $G_X(t)$ sous forme d'une espérance.

(b) Soit $k\in\mathbb N$. Exprimer, en justifiant, $P(X=k)$ en fonction de $G_X^{(k)}(0)$.

2. (a) On suppose que $X$ suit une loi de Poisson de paramètre $\lambda$. Déterminer $D_{G_X}$ et, pour tout
$t\in D_{G_X}$, calculer $G_X(t)$.

(b) Soit $X$ et $Y$ deux variables aléatoires indépendantes suivant des lois de Poisson de paramètres respectifs
$\lambda_1$ et $\lambda_2$. Déterminer, en utilisant les questions précédentes, la loi de $X+Y$.
