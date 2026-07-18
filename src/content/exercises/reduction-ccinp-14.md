---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: polynomes
    weight: 30
tags: [polynôme minimal, division euclidienne, puissance de matrice]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 91"
banque: "CCINP"
classic: true
correction: |
  1. En développant le déterminant (opérations sur lignes/colonnes), $\chi_A = (X-1)^3$ : $A$ admet $1$ comme
  unique valeur propre.

  2. $0$ n'est pas valeur propre donc $A$ est inversible. Si $A$ était diagonalisable, elle serait semblable à
  $I_3$ donc égale à $I_3$, ce qui n'est pas le cas : $A$ n'est pas diagonalisable.

  3. $\pi_A | \chi_A = (X-1)^3$. On calcule $A-I_3 \neq 0$ mais $(A-I_3)^2=0$, donc $\pi_A = (X-1)^2$.

  4. Par division euclidienne de $X^n$ par $(X-1)^2$ : $X^n = (X-1)^2Q + aX+b$. En évaluant en $1$ ($1=a+b$) et
  en dérivant puis évaluant en $1$ ($n=a$), on obtient le reste $R = nX+1-n$. Comme $\pi_A=(X-1)^2$ annule $A$,
  $$\forall n \in \mathbb N,\ A^n = nA + (1-n)I_3.$$
method:
  title: "Méthode : puissances d'une matrice via son polynôme minimal"
  content: >
    Quand $A$ n'est pas diagonalisable mais admet un polynôme minimal de petit degré (ici $(X-1)^2$), on calcule
    $A^n$ en effectuant la division euclidienne de $X^n$ par $\pi_A$ : $X^n = \pi_A(X)Q(X)+R(X)$ avec
    $\deg R < \deg \pi_A$. Comme $\pi_A(A)=0$, on obtient directement $A^n=R(A)$, sans diagonaliser ni calculer de
    puissance directement.
---

On considère la matrice $A = \begin{pmatrix}0&2&-1\\-1&3&-1\\-1&2&0\end{pmatrix} \in M_3(\mathbb R)$.

1. Montrer que $A$ n'admet qu'une seule valeur propre que l'on déterminera.

2. La matrice $A$ est-elle inversible ? Est-elle diagonalisable ?

3. Déterminer, en justifiant, le polynôme minimal de $A$.

4. Soit $n \in \mathbb N$. Déterminer le reste de la division euclidienne de $X^n$ par $(X-1)^2$ et en déduire la
valeur de $A^n$.
