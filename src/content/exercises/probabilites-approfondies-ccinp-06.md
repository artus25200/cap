---
level: 4
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [loi géométrique, minimum de variables aléatoires, indépendance]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 102"
banque: "CCINP"
classic: true
correction: |
  1. $P(X_i\leqslant n) = \sum_{k=1}^n pq^{k-1} = 1-q^n$ (somme géométrique), donc $P(X_i>n)=q^n$.

  2. (a) Par indépendance, $P(Y>n) = \prod_{i=1}^N P(X_i>n) = q^{nN}$, donc $P(Y\leqslant n)=1-q^{nN}$. Pour
  $n\geqslant2$, $P(Y=n)=P(Y\leqslant n)-P(Y\leqslant n-1) = q^{(n-1)N}(1-q^N)$ ; ce résultat reste valable pour
  $n=1$ ($P(Y=1)=1-q^N$).

  (b) $P(Y=n) = \big(1-(1-q^N)\big)^{n-1}(1-q^N)$ : $Y$ suit une loi géométrique de paramètre $1-q^N$, donc
  $E(Y) = \dfrac{1}{1-q^N}$.
method:
  title: "Méthode : minimum de variables géométriques indépendantes"
  content: >
    Le minimum de variables géométriques indépendantes est encore géométrique : on passe par l'événement
    "$Y > n$" (plus simple à calculer par produit d'indépendance que $Y=n$ directement), puis on en déduit
    $P(Y=n)$ par différence de fonctions de répartition. Le paramètre obtenu, $1-q^N$, s'interprète comme la
    probabilité qu'au moins un des $N$ essais indépendants réussisse.
---

Soit $N \in \mathbb N^*$. Soit $p \in ]0,1[$. On pose $q=1-p$. On considère $N$ variables aléatoires
$X_1,X_2,\dots,X_N$ définies sur un même espace probabilisé, indépendantes et de même loi géométrique de
paramètre $p$.

1. Soit $i \in \llbracket 1,N\rrbracket$, $n \in \mathbb N^*$. Déterminer $P(X_i\leqslant n)$, puis $P(X_i>n)$.

2. On considère $Y = \min_{1\leqslant i\leqslant N}(X_i)$.

(a) Soit $n \in \mathbb N^*$. Calculer $P(Y>n)$. En déduire $P(Y\leqslant n)$, puis $P(Y=n)$.

(b) Reconnaître la loi de $Y$. En déduire $E(Y)$.
