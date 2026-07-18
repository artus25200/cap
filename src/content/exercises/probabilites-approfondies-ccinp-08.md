---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [loi géométrique, sup et inf de variables aléatoires, couple discret]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 106"
banque: "CCINP - Banque orale MP/MPI"
classic: false
correction: |
  1. $(U,V)(\Omega) = \{(m,n)\in\mathbb N^2,\ m\geqslant n\}$. Si $m=n$ :
  $P((U=m)\cap(V=n)) = P(X=n)P(Y=n) = p^2q^{2n}$. Si $m>n$ (par symétrie des rôles de $X,Y$) :
  $P((U=m)\cap(V=n)) = 2p^2q^{n+m}$.

  2. Pour $m\geqslant1$, en séparant le terme $n=m$ des termes $n<m$ et en sommant la série géométrique :
  $$P(U=m) = p^2q^{2m}+2p^2q^m\sum_{n=0}^{m-1}q^n = p^2q^{2m}+2pq^m(1-q^m) = pq^m(pq^m+2-2q^m).$$
  Pour $m=0$ : $P(U=0)=p^2$ (cas particulier de la formule).

  3. Avec $P(V=n)=pq^{2n}(1+q)$ (admis), $W=V+1$ vérifie $P(W=n) = pq^{2(n-1)}(1+q) = (1-q^2)(q^2)^{n-1}$ : $W$
  suit une loi géométrique de paramètre $1-q^2$, donc $E(W)=\dfrac1{1-q^2}$, et $E(V)=E(W)-1=\dfrac{q^2}{1-q^2}$.

  4. $P((U=0)\cap(V=1))=0$ mais $P(U=0)P(V=1)=p^3q^2(1+q)\neq0$ : $U$ et $V$ ne sont pas indépendantes.
method:
  title: "Méthode : loi du couple (sup, inf) de deux variables i.i.d."
  content: >
    Pour deux variables i.i.d. $X,Y$, le couple $(U,V)=(\sup(X,Y),\inf(X,Y))$ vit sur $\{m\geqslant n\}$ : la
    diagonale $m=n$ correspond à $X=Y=n$ (un seul cas), et $m>n$ correspond aux deux cas symétriques $(X,Y)=(m,n)$
    ou $(n,m)$ (facteur 2). Cette dissymétrie diagonale/hors-diagonale est la clé de tout calcul de loi jointe de
    ce type, et se répercute naturellement sur la non-indépendance de $U$ et $V$.
---

$X$ et $Y$ sont deux variables aléatoires indépendantes à valeurs dans $\mathbb N$, de même loi
$\forall k \in \mathbb N,\ P(X=k)=P(Y=k)=pq^k$ où $p\in]0,1[$, $q=1-p$. On considère $U=\sup(X,Y)$ et $V=\inf(X,Y)$.

1. Déterminer la loi du couple $(U,V)$.

2. Déterminer la loi marginale de $U$. On admet que $V(\Omega)=\mathbb N$ et que
$\forall n \in \mathbb N,\ P(V=n)=pq^{2n}(1+q)$.

3. Prouver que $W=V+1$ suit une loi géométrique. En déduire l'espérance de $V$.

4. $U$ et $V$ sont-elles indépendantes ?
