---
level: 3
chapters:
  - id: polynomes
    weight: 100
tags: [interpolation de Lagrange, isomorphisme, application pratique]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 90"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, l'injectivité se montre en comptant le nombre de racines d'un polynôme de degré $\\leqslant2$ qui s'annulerait en $a_1,a_2,a_3$."
  - "Pour la question 2.(b), $L_1$ s'annule en $a_2$ et $a_3$ donc est divisible par $(X-a_2)(X-a_3)$ ; fixe la constante multiplicative avec la condition $L_1(a_1)=1$."
  - "Pour la question 3, évalue $P$ en chaque $a_i$ après l'avoir décomposé dans la base $(L_1,L_2,L_3)$, en utilisant que $L_i(a_j)=\\delta_{ij}$."
  - "Pour la question 4, applique directement la formule de la question 3 avec les valeurs numériques données."
correction: |
  1. $\Phi$ est linéaire (linéarité de l'évaluation). Si $\Phi(P)=0$, $P$ (degré $\leqslant2$) a $3$ racines
  distinctes $a_1,a_2,a_3$, donc $P=0$ : $\Phi$ injective. Comme $\dim K_2[X]=\dim K^3=3$, $\Phi$ est un
  isomorphisme.

  2. (a) L'image réciproque d'une base par un isomorphisme est une base, donc $(L_1,L_2,L_3)$ est une base de
  $K_2[X]$.

  (b) $L_1$ vérifie $\Phi(L_1)=(1,0,0)$, donc $(X-a_2)(X-a_3) | L_1$ ; comme $\deg L_1 \leqslant 2$,
  $L_1 = k(X-a_2)(X-a_3)$, et $L_1(a_1)=1$ donne $k=\frac{1}{(a_1-a_2)(a_1-a_3)}$. Par symétrie,
  $$L_1=\frac{(X-a_2)(X-a_3)}{(a_1-a_2)(a_1-a_3)},\quad L_2=\frac{(X-a_1)(X-a_3)}{(a_2-a_1)(a_2-a_3)},\quad
  L_3=\frac{(X-a_1)(X-a_2)}{(a_3-a_1)(a_3-a_2)}.$$

  3. $P = \lambda_1L_1+\lambda_2L_2+\lambda_3L_3$ (base), et $L_i(a_j)=\delta_{ij}$ donne $P(a_j)=\lambda_j$, donc
  $P = P(a_1)L_1+P(a_2)L_2+P(a_3)L_3$.

  4. Avec $a_1=0,a_2=1,a_3=2$ et $(P(a_1),P(a_2),P(a_3))=(1,3,1)$ : $L_1=\frac{(X-1)(X-2)}2$, $L_2=-X(X-2)$,
  $L_3=\frac{X(X-1)}2$, donc $P = L_1+3L_2+L_3 = -2X^2+4X+1$.
method:
  title: "Méthode : construire une fonction polynomiale par 3 points imposés"
  content: >
    Passer par 3 points donnés $(a_i,b_i)$ avec un polynôme de degré $\leqslant2$ revient à résoudre un problème
    d'interpolation de Lagrange à 3 points : on construit les $L_k$ (valant $1$ en $a_k$, $0$ ailleurs), puis
    $P = \sum b_kL_k$ répond directement à la question, sans passer par un système linéaire sur les coefficients
    de $P$.
---

$K$ désigne le corps des réels ou celui des complexes. Soient $a_1,a_2,a_3$ trois scalaires distincts donnés de
$K$.

1. Montrer que $\Phi: K_2[X] \to K^3$, $P \mapsto (P(a_1),P(a_2),P(a_3))$ est un isomorphisme d'espaces
vectoriels.

2. On note $(e_1,e_2,e_3)$ la base canonique de $K^3$ et on pose $\forall k \in \{1,2,3\},\ L_k = \Phi^{-1}(e_k)$.

(a) Justifier que $(L_1,L_2,L_3)$ est une base de $K_2[X]$.

(b) Exprimer les polynômes $L_1$, $L_2$ et $L_3$ en fonction de $a_1$, $a_2$ et $a_3$.

3. Soit $P \in K_2[X]$. Déterminer les coordonnées de $P$ dans la base $(L_1,L_2,L_3)$.

4. Application : on se place dans $\mathbb R^2$ muni d'un repère orthonormé et on considère les trois points
$A(0,1)$, $B(1,3)$, $C(2,1)$. Déterminer une fonction polynomiale de degré $2$ dont la courbe passe par les points
$A$, $B$ et $C$.
