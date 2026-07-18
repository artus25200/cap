---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: equations-differentielles
    weight: 40
tags: [trigonalisation, matrice non diagonalisable, système différentiel]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 75"
banque: "CCINP"
classic: true
correction: |
  1. $\chi_A = (X-1)^2$, donc $\mathrm{Sp}(A) = \{1\}$. Si $A$ était diagonalisable, elle serait semblable à
  $I_2$ donc égale à $I_2$, ce qui est faux : $A$ n'est pas diagonalisable.

  2. $\chi_A$ est scindé donc $A$ est trigonalisable. $E_1(A) = \mathrm{Vect}(2,-1)$. En posant $v_1=(2,-1)$ et
  $v_2=(-1,0)$ (choisi tel que $f(v_2) = v_2+v_1$), la matrice de $f$ dans $(v_1,v_2)$ est
  $T = \begin{pmatrix}1&1\\0&1\end{pmatrix}$ (donc $a=1,b=1,c=1$).

  3. En posant $X=(x,y)$, $Y=P^{-1}X=(a,b)$ avec $P=\begin{pmatrix}2&-1\\-1&0\end{pmatrix}$, le système
  $X'=AX$ devient $Y'=TY$, i.e. $a'=a+b$, $b'=b$, de solution $b(t)=\mu e^t$, $a(t) = \lambda e^t + \mu te^t$.
  On revient à $X=PY$ :
  $$x(t) = \big((2\lambda-\mu)+2\mu t\big)e^t, \qquad y(t) = (-\lambda-\mu t)e^t.$$
method:
  title: "Méthode : système différentiel avec matrice non diagonalisable"
  content: >
    Quand $A$ n'est pas diagonalisable mais $\chi_A$ scindé, on trigonalise : $A=PTP^{-1}$ avec $T$
    triangulaire (ici $T=\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}$). Le changement $Y=P^{-1}X$ donne un
    système triangulaire qui se résout "en cascade" : on résout d'abord l'équation du bas, puis on injecte le
    résultat dans celle du haut (équation avec second membre exponentiel-polynôme).
---

On considère la matrice $A = \begin{pmatrix}-1&-4\\1&3\end{pmatrix}$.

1. Démontrer que $A$ n'est pas diagonalisable.

2. On note $f$ l'endomorphisme de $\mathbb R^2$ canoniquement associé à $A$. Trouver une base $(v_1,v_2)$ de
$\mathbb R^2$ dans laquelle la matrice de $f$ est de la forme $\begin{pmatrix}a&b\\0&c\end{pmatrix}$. On donnera
explicitement les valeurs de $a$, $b$ et $c$.

3. En déduire la résolution du système différentiel $\begin{cases}x'=-x-4y\\y'=x+3y\end{cases}$.
