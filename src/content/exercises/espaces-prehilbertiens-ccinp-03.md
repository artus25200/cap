---
level: 5
chapters:
  - id: espaces-prehilbertiens
    weight: 100
  - id: reduction
    weight: 40
tags: [matrices symétriques positives, théorème spectral, racine carrée matricielle]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 66"
banque: "CCINP"
classic: true
correction: |
  1. Si $A\in S_n^+(\mathbb R)$ : pour $\lambda\in\mathrm{sp}(A)$, $AX=\lambda X$ ($X\neq0$) donne $X^TAX
  =\lambda\|X\|^2\geqslant0$, donc $\lambda\geqslant0$. Réciproquement, si $\mathrm{sp}(A)\subset[0,+\infty[$ :
  théorème spectral $A=PDP^T$, et $X^TAX=Y^TDY=\sum\lambda_iy_i^2\geqslant0$ où $Y=P^TX$.

  2. $(A^2)^T=A^TA^T=A^2$ (car $A^T=A$) : symétrique. $X^TA^2X=(AX)^T(AX)=\|AX\|^2\geqslant0$.

  3. $A,B$ commutent $\Rightarrow A^2,B$ commutent. $(A^2B)^T = B^TA^2 {}^T= BA^2 = A^2B$ : symétrique. Pour
  $X$ : $X^TA^2BX = X^TABAX = (AX)^TB(AX) \geqslant0$ (car $B\in S_n^+$).

  4. $A=PDP^T$ (théorème spectral, $D=\mathrm{diag}(\lambda_i)$, $\lambda_i\geqslant0$ d'après 1.). Poser
  $\Delta=\mathrm{diag}(\sqrt{\lambda_i})$, $B=P\Delta P^T$ : $B^2 = P\Delta^2P^T = PDP^T=A$, $B$ symétrique, et
  $\mathrm{sp}(B)=\{\sqrt{\lambda_i}\}\subset[0,+\infty[$ donc $B\in S_n^+(\mathbb R)$.
method:
  title: "Méthode : théorème spectral pour manipuler matrices symétriques positives"
  content: >
    Le théorème spectral ($A=PDP^T$, $P$ orthogonale) est l'outil systématique pour ce type d'exercice : il
    ramène toute question sur $A\in S_n(\mathbb R)$ à une question sur la matrice diagonale $D$ de ses valeurs
    propres, notamment pour construire une racine carrée matricielle en prenant la racine carrée des valeurs
    propres.
---

1. Soit $A\in S_n(\mathbb R)$. Prouver que $A\in S_n^+(\mathbb R) \iff \mathrm{sp}(A)\subset[0,+\infty[$.

2. Prouver que $\forall A\in S_n(\mathbb R), A^2\in S_n^+(\mathbb R)$.

3. Prouver que $\forall A\in S_n(\mathbb R), \forall B\in S_n^+(\mathbb R)$, $AB=BA \implies A^2B\in S_n^+(\mathbb R)$.

4. Soit $A\in S_n^+(\mathbb R)$. Prouver qu'il existe $B\in S_n^+(\mathbb R)$ telle que $A=B^2$.
