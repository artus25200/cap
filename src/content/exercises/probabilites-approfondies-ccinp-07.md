---
level: 4
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [loi de Poisson, stabilité par somme, loi conditionnelle]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 103"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1.(a), décompose $(X_1+X_2=n)$ selon les valeurs de $X_1$, utilise l'indépendance, puis reconnais la formule du binôme dans la somme obtenue."
  - "Pour la question 2, écris $P(X=k)$ par la formule des probabilités totales conditionnées par $Y=m$, factorise les termes indépendants de $m$, puis reconnais une série exponentielle dans ce qui reste."
correction: |
  1. (a) $(X_1+X_2)(\Omega)=\mathbb N$. Pour $n\in\mathbb N$, $(X_1+X_2=n)=\bigcup_{k=0}^n(X_1=k)\cap(X_2=n-k)$
  (union disjointe), et par indépendance :
  $$P(X_1+X_2=n) = \sum_{k=0}^n e^{-\lambda_1}\frac{\lambda_1^k}{k!}e^{-\lambda_2}\frac{\lambda_2^{n-k}}{(n-k)!}
  = \frac{e^{-(\lambda_1+\lambda_2)}}{n!}\sum_{k=0}^n\binom nk\lambda_1^k\lambda_2^{n-k}
  = e^{-(\lambda_1+\lambda_2)}\frac{(\lambda_1+\lambda_2)^n}{n!}.$$
  Donc $X_1+X_2 \hookrightarrow \mathcal P(\lambda_1+\lambda_2)$.

  (b) $E(X_1+X_2)=\lambda_1+\lambda_2$, $V(X_1+X_2)=\lambda_1+\lambda_2$.

  2. $P(X=k) = \sum_{m=k}^{+\infty}\binom mk p^k(1-p)^{m-k}e^{-\lambda}\frac{\lambda^m}{m!}$. En factorisant
  $e^{-\lambda}\frac{(\lambda p)^k}{k!}$ et en reconnaissant une série exponentielle de raison $\lambda(1-p)$ pour
  l'indice $m-k$, on obtient $P(X=k) = e^{-\lambda p}\dfrac{(\lambda p)^k}{k!}$ : $X \hookrightarrow \mathcal P(\lambda p)$.
method:
  title: "Méthode : la loi de Poisson est stable par somme et par amincissement binomial"
  content: >
    Deux résultats classiques à connaître : (1) la somme de deux Poisson indépendantes est encore une Poisson, de
    paramètre la somme des paramètres (retrouvable par convolution ou fonctions génératrices) ; (2) si $Y$ suit
    une Poisson$(\lambda)$ et que, sachant $Y=m$, $X$ suit une binomiale$(m,p)$ (chaque "événement" de $Y$ est
    indépendamment retenu avec probabilité $p$), alors $X$ suit une Poisson$(\lambda p)$ — un phénomène
    d'"amincissement" (thinning) très utilisé en modélisation.
---

Soit $(\Omega,\mathcal A,P)$ un espace probabilisé.

1. (a) Soit $(\lambda_1,\lambda_2) \in (]0,+\infty[)^2$. Soit $X_1$ et $X_2$ deux variables aléatoires
indépendantes suivant des lois de Poisson de paramètres respectifs $\lambda_1$ et $\lambda_2$. Déterminer la loi
de $X_1+X_2$.

(b) En déduire l'espérance et la variance de $X_1+X_2$.

2. Soit $p \in ]0,1]$, $\lambda \in ]0,+\infty[$. Soit $X$ et $Y$ deux variables aléatoires telles que $Y$ suit
une loi de Poisson de paramètre $\lambda$, $X(\Omega)=\mathbb N$, et pour tout $m \in \mathbb N$, la loi
conditionnelle de $X$ sachant $(Y=m)$ est une loi binomiale de paramètre $(m,p)$. Déterminer la loi de $X$.
