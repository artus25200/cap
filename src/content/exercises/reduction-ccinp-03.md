---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: polynomes
    weight: 30
tags: [polynôme annulateur, Cayley-Hamilton, "algèbre K[X]"]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 65"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. En développant $P=\sum a_pX^p, Q=\sum b_qX^q$ : $PQ=\sum_{p,q} a_pb_qX^{p+q}$, donc $(PQ)(u) =
  \sum_{p,q}a_pb_qu^{p+q}$. Par ailleurs, $P(u)\circ Q(u) = \left(\sum a_pu^p\right)\circ\left(\sum
  b_qu^q\right) = \sum_{p,q}a_pb_qu^{p+q}$ (linéarité et distributivité de $\circ$). Les deux coïncident.

  2. (a) $P(u)\circ Q(u)=(PQ)(u)=(QP)(u)=Q(u)\circ P(u)$ (commutativité de $K[X]$).
  (b) Si $P(u)=0$ : $(PQ)(u)=P(u)\circ Q(u) = 0\circ Q(u)=0$, donc $PQ$ annule $u$.

  3. $\chi_A = X(X-1)$ (calcul direct). $R=X^4+2X^3+X^2-4X$ vérifie $R(0)=R(1)=0$, donc $X(X-1)$ divise $R$ :
  $R=\chi_A\cdot Q$. Par Cayley-Hamilton, $\chi_A(A)=0$, donc par 2.(b), $R(A)=0$ : $R$ annule $A$.
method:
  title: "Méthode : construire un polynôme annulateur à partir de Cayley-Hamilton"
  content: >
    L'ensemble des polynômes annulateurs d'un endomorphisme est un idéal de $K[X]$ (stable par multiplication) —
    c'est exactement ce que dit la question 2(b). Le théorème de Cayley-Hamilton fournit un premier polynôme
    annulateur ($\chi_A$), et tout multiple de $\chi_A$ en est un aussi, sans calcul supplémentaire.
---

Soit $u$ un endomorphisme d'un espace vectoriel $E$ sur $\mathbb K$ ($=\mathbb R$ ou $\mathbb C$).

1. Démontrer que $\forall(P,Q)\in\mathbb K[X]^2$, $(PQ)(u) = P(u)\circ Q(u)$.

2. a) Démontrer que $P(u)\circ Q(u) = Q(u)\circ P(u)$.
   b) Démontrer que si $P$ est annulateur de $u$, alors $PQ$ est annulateur de $u$.

3. Soit $A=\begin{pmatrix}-1&-2\\1&2\end{pmatrix}$. Écrire le polynôme caractéristique de $A$, puis en déduire que $R=X^4+2X^3+X^2-4X$ est annulateur de $A$.
