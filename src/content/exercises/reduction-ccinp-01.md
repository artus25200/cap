---
level: 4
chapters:
  - id: reduction
    weight: 100
tags: [endomorphisme bijectif, diagonalisabilité, polynôme caractéristique]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 59"
banque: "CCINP"
classic: true
correction: |
  1. (a) $f$ linéaire. $\forall P\neq0$, $\deg P' <\deg P$ donc $\deg(P-P')=\deg P$ ; pour $P=0$ trivial. Donc
  $\ker f=\{0\}$ ($f$ injectif), et comme $\dim E=n+1<\infty$, $f$ est bijectif.
  (b) Dans la base canonique $(1,X,\dots,X^n)$, la matrice de $f$ est triangulaire à diagonale de 1 : $\det=1\neq0$.

  2. $P-P'=Q, P'-P''=Q',\dots,P^{(n)}-P^{(n+1)}=Q^{(n)}$. Comme $P^{(n+1)}=0$ ($\deg P\leqslant n$), en sommant :
  $P = Q+Q'+\cdots+Q^{(n)}$.

  3. $\chi_A=(X-1)^{n+1}$ (matrice triangulaire), donc 1 est l'unique valeur propre. Si $f$ était diagonalisable,
  $A$ serait semblable à $I_{n+1}$, donc $A=I_{n+1}$, faux car $f\neq\mathrm{Id}$. Donc $f$ n'est pas diagonalisable.
method:
  title: "Méthode : prouver la non-diagonalisabilité via une seule valeur propre"
  content: >
    Si le polynôme caractéristique est $(X-\lambda)^{n+1}$ (une unique valeur propre, multiplicité maximale),
    l'endomorphisme est diagonalisable si et seulement s'il est déjà l'homothétie $\lambda\cdot\mathrm{Id}$ —
    sinon, non diagonalisable, sans calcul de sous-espaces propres nécessaire.
---

Soit $n\geqslant2$, $E$ l'espace des polynômes de degré $\leqslant n$ à coefficients dans $\mathbb K$ ($\mathbb K=\mathbb R$ ou $\mathbb C$). On pose $\forall P\in E, f(P) = P-P'$.

1. Démontrer que $f$ est bijectif de deux manières : a) sans matrice, b) avec une matrice de $f$.

2. Soit $Q\in E$. Trouver $P$ tel que $f(P)=Q$. Indication : que vaut $P^{(n+1)}$ ?

3. $f$ est-il diagonalisable ?
