---
level: 4
chapters:
  - id: polynomes
    weight: 100
tags: [interpolation de Lagrange, isomorphisme, base de polynômes]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 87"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. L'application $u: \mathbb R_n[X] \to \mathbb R^{n+1}$, $P \mapsto (P(a_0),\dots,P(a_n))$ est linéaire, et
  injective : si $P \in \mathrm{Ker}\,u$, $P$ (de degré $\leqslant n$) admet $n+1$ racines distinctes, donc
  $P=0$. Comme $\dim \mathbb R_n[X] = n+1 = \dim \mathbb R^{n+1}$, $u$ est un isomorphisme, et l'unique solution
  est $P = u^{-1}((b_0,\dots,b_n))$.

  2. Pour $b_i = \delta_{ik}$, $L_k$ admet les $n$ racines distinctes $a_i$ ($i\neq k$) et est de degré
  $\leqslant n$, donc $L_k = \lambda \prod_{i\neq k}(X-a_i)$ ; la condition $L_k(a_k)=1$ donne
  $$L_k = \prod_{i\neq k} \frac{X-a_i}{a_k-a_i}.$$

  3. Les polynômes $\sum_{k=0}^n a_k^pL_k$ et $X^p$ vérifient les mêmes conditions d'interpolation
  ($\deg \leqslant n$, valeur $a_i^p$ en $a_i$), donc par unicité (question 1), $\sum_{k=0}^n a_k^pL_k = X^p$.
method:
  title: "Méthode : polynômes de Lagrange et unicité de l'interpolation"
  content: >
    L'application d'évaluation en $n+1$ points distincts est un isomorphisme de $\mathbb R_n[X]$ vers
    $\mathbb R^{n+1}$ (injectivité par comptage des racines, puis égalité des dimensions). Les polynômes de
    Lagrange $L_k$ forment la base "duale" de cette évaluation ; toute identité polynomiale de degré
    $\leqslant n$ vérifiée aux points $a_i$ se propage donc à tout $X$ par unicité de l'interpolation, sans calcul
    supplémentaire.
---

Soient $a_0, a_1, \dots, a_n$, $n+1$ réels deux à deux distincts.

1. Montrer que si $b_0, b_1, \dots, b_n$ sont $n+1$ réels quelconques, alors il existe un unique polynôme $P$
vérifiant $\deg P \leqslant n$ et $\forall i \in \llbracket 0,n\rrbracket,\ P(a_i)=b_i$.

2. Soit $k \in \llbracket 0,n\rrbracket$. Expliciter ce polynôme $P$, que l'on notera $L_k$, lorsque
$\forall i \in \llbracket 0,n\rrbracket,\ b_i = \begin{cases}0 & \text{si } i\neq k\\1 & \text{si } i=k\end{cases}$.

3. Prouver que $\forall p \in \llbracket 0,n\rrbracket,\ \sum_{k=0}^n a_k^pL_k = X^p$.
