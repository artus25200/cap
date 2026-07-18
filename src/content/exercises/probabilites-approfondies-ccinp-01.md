---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
  - id: series-entieres
    weight: 30
tags: [fonction génératrice, produit de Cauchy, variables indépendantes]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 96"
banque: "CCINP"
classic: true
correction: |
  1. La série entière $\sum p_nt^n$ converge en $t=1$ (car $\sum p_n=1$), donc son rayon $R \geqslant 1$, donc
  $]-1,1[ \subset D_{G_X}$.

  2. (a) Notons $R_1,R_2$ les rayons des séries de $X_1,X_2$ : $R_1,R_2\geqslant1$ (question 1). Le produit de
  Cauchy donne, pour $t\in]-1,1[$ :
  $$\left(\sum P(X_1=n)t^n\right)\left(\sum P(X_2=n)t^n\right) = \sum_n\left(\sum_{k=0}^nP(X_1=k)P(X_2=n-k)\right)t^n.$$
  Or $(S=n)=\bigcup_{k=0}^n\big((X_1=k)\cap(X_2=n-k)\big)$ (réunion disjointe), donc
  $P(S=n)=\sum_{k=0}^nP(X_1=k)P(X_2=n-k)$ : on identifie $G_S(t)=G_{X_1}(t)G_{X_2}(t)$.

  (b) Pour $t\in]-1,1[$, $t^{X_1}$ et $t^{X_2}$ admettent une espérance (question 1) et sont indépendantes (car
  $X_1,X_2$ le sont), donc $t^S=t^{X_1}t^{X_2}$ admet une espérance et $E[t^S]=E[t^{X_1}]E[t^{X_2}]$, i.e.
  $G_S(t)=G_{X_1}(t)G_{X_2}(t)$.

  3. Chaque tirage $X_i$ vérifie $G_{X_i}(t) = \frac14+\frac12t+\frac14t^2 = \frac14(t+1)^2$. Par indépendance et
  généralisation de la question 2, $G_{S_n}(t) = \frac{1}{4^n}(1+t)^{2n} = \sum_{k=0}^{2n}\binom{2n}k\frac{1}{4^n}t^k$.
  Par unicité du développement en série entière, $S_n(\Omega)=\llbracket0,2n\rrbracket$ et
  $P(S_n=k)=\binom{2n}k\left(\frac12\right)^k\left(\frac12\right)^{2n-k}$ : $S_n \hookrightarrow \mathcal
  B(2n,\frac12)$.
method:
  title: "Méthode : fonction génératrice d'une somme de variables indépendantes"
  content: >
    La fonction génératrice $G_X(t)=E[t^X]$ transforme la somme de variables indépendantes en **produit** :
    $G_{X_1+X_2}=G_{X_1}G_{X_2}$. Cela permet d'identifier la loi d'une somme sans convolution explicite, en
    reconnaissant simplement la fonction génératrice obtenue (ici $(1+t)^{2n}/4^n$, celle d'une binomiale) — une
    méthode à privilégier dès que plusieurs variables i.i.d. discrètes à valeurs dans $\mathbb N$ sont sommées.
---

Soit $X$ une variable aléatoire à valeurs dans $\mathbb N$, de loi de probabilité donnée par
$\forall n \in \mathbb N,\ P(X=n)=p_n$. La fonction génératrice de $X$ est notée $G_X$, définie par
$G_X(t) = E[t^X] = \sum_{n=0}^{+\infty}p_nt^n$.

1. Prouver que l'intervalle $]-1,1[$ est inclus dans l'ensemble de définition de $G_X$.

2. Soit $X_1$ et $X_2$ deux variables aléatoires indépendantes à valeurs dans $\mathbb N$. On pose $S=X_1+X_2$.
Démontrer que $\forall t \in ]-1,1[,\ G_S(t)=G_{X_1}(t)G_{X_2}(t)$ :

(a) en utilisant le produit de Cauchy de deux séries entières.

(b) en utilisant uniquement la définition de la fonction génératrice.

*Remarque : on admettra, pour la question suivante, que ce résultat est généralisable à $n$ variables aléatoires
indépendantes à valeurs dans $\mathbb N$.*

3. Un sac contient quatre boules : une numérotée 0, deux numérotées 1 et une numérotée 2. Soit $n \in \mathbb N^*$.
On effectue $n$ tirages successifs, avec remise, d'une boule dans ce sac. On note $S_n$ la somme des numéros
tirés. Soit $t \in ]-1,1[$. Déterminer $G_{S_n}(t)$ puis en déduire la loi de $S_n$.
