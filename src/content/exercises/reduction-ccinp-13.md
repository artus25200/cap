---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: polynomes
    weight: 40
tags: [polynôme annulateur, valeurs propres, polynôme minimal]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 88"
banque: "CCINP"
classic: true
correction: |
  1. Soit $P=\sum_{k=0}^n a_kX^k$ annulateur de $u$, $\lambda$ valeur propre : $\exists x\neq0$, $u(x)=\lambda x$,
  donc $u^k(x)=\lambda^kx$ pour tout $k$ (récurrence), d'où $P(u)(x) = P(\lambda)x$. Or $P(u)=0$ et $x\neq0$, donc
  $P(\lambda)=0$.

  2. (a) Pour $M \in M_n(\mathbb R)$, $u^2(M) = u(M)+\mathrm{tr}(M+\mathrm{tr}(M)A)A = M+2\mathrm{tr}(M)A + \mathrm{tr}(M)\mathrm{tr}(A)A$. Comme $\mathrm{tr}(A)=0$, $u^2(M)=M+2\mathrm{tr}(M)A$, d'où
  $u^2(M)-2u(M)+M = 0$ : $X^2-2X+1$ annule $u$.

  (b) *Première méthode* : $P=(X-1)^2$ annulateur, donc $\mathrm{Sp}(u) \subset \{1\}$ (question 1) ; comme
  $A\neq0$ et $u(A)=A$, $\mathrm{Sp}(u)=\{1\}$. Si $u$ était diagonalisable, $u=\mathrm{Id}$, mais
  $u(I_n) = I_n + \mathrm{tr}(I_n)A \neq I_n$ (car $\mathrm{tr}(I_n)\neq0$) : contradiction, $u$ n'est pas
  diagonalisable.

  *Deuxième méthode* : le polynôme minimal $\pi_u$ divise $(X-1)^2$. Si $u$ était diagonalisable, $\pi_u$ serait
  scindé à racines simples, donc $\pi_u=X-1$, i.e. $u=\mathrm{Id}$ — même contradiction que ci-dessus.
method:
  title: "Méthode : diagonalisabilité via un polynôme annulateur"
  content: >
    Un polynôme annulateur $P$ de $u$ contraint le spectre : toute valeur propre est racine de $P$. Si $P=(X-\lambda)^2$
    avec une seule racine, deux stratégies pour conclure sur la diagonalisabilité : soit montrer que $u \neq \lambda\,\mathrm{Id}$ malgré $\mathrm{Sp}(u)=\{\lambda\}$ (donc $u$ non diagonalisable), soit étudier le
    polynôme minimal (racines simples ssi diagonalisable).
---

1. Soit $E$ un $K$-espace vectoriel ($K=\mathbb R$ ou $\mathbb C$). Soit $u \in \mathcal L(E)$, $P \in K[X]$.
Prouver que si $P$ annule $u$ alors toute valeur propre de $u$ est racine de $P$.

2. Soit $n \in \mathbb N$, $n \geqslant 2$. On pose $E=M_n(\mathbb R)$. Soit $A=(a_{i,j})$ la matrice de $E$
définie par $a_{i,j}=0$ si $i=j$ et $a_{i,j}=1$ sinon. Soit $u \in \mathcal L(E)$ défini par
$\forall M \in E,\ u(M) = M + \mathrm{tr}(M)A$.

(a) Prouver que le polynôme $X^2-2X+1$ est annulateur de $u$.

(b) $u$ est-il diagonalisable ? Justifier votre réponse en utilisant deux méthodes (l'une avec, l'autre sans
l'aide de la question 1).
