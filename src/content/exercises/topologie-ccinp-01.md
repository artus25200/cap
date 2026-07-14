---
level: 4
chapters:
  - id: topologie
    weight: 100
tags: [normes équivalentes, parties fermées, adhérence]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 1"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Posons $\forall n \in \mathbb{N}, \forall x \in [0,1], f_n(x) = x^n$. C'est une suite à valeurs dans $E$, et
  $\forall n \in \mathbb{N}$, $\dfrac{\|f_n\|_\infty}{\|f_n\|_1} = \dfrac{1}{1/(n+1)} = n+1$.
  Donc $\lim_{n\to+\infty} \dfrac{\|f_n\|_\infty}{\|f_n\|_1} = +\infty$, donc $\|\cdot\|_\infty$ et $\|\cdot\|_1$ ne sont pas équivalentes.

  2. (a) $u$ est clairement linéaire, et $\forall f \in E, |u(f)| = |f(0)| \leqslant \|f\|_\infty$, donc $u$ est continue sur $E$ muni de $\|\cdot\|_\infty$.
  (b) $F = u^{-1}(\{0\})$, image réciproque du fermé $\{0\}$ par l'application continue $u$ : $F$ est donc fermée pour $\|\cdot\|_\infty$.

  3. (a) $\|f_n - c\|_1 = \displaystyle\int_0^{1/n} (1-nt)\,dt = \dfrac{1}{2n}$ (car $f_n = c$ sur $[1/n, 1]$).
  (b) $(f_n)$ est une suite de $F$ (chaque $f_n$ est continue, $f_n(0)=0$) qui converge vers $c$ au sens de $\|\cdot\|_1$ puisque $\|f_n - c\|_1 \to 0$. Donc $c \in \overline{F}$. Or $c \notin F$ car $c(0) = 1 \neq 0$. Donc $\overline{F} \neq F$ : $F$ n'est pas fermée pour $\|\cdot\|_1$.
method:
  title: "Méthode : comparer deux normes, montrer qu'une partie est (ou n'est pas) fermée"
  content: >
    Pour montrer que deux normes ne sont pas équivalentes, exhiber une suite qui fait exploser le rapport des
    deux normes. Pour montrer qu'une partie est fermée, la voir comme image réciproque d'un fermé par une
    application continue. Pour montrer qu'elle ne l'est PAS, construire une suite de la partie qui converge
    (pour la norme considérée) vers un point hors de la partie.
course: |
  Deux normes $N_1, N_2$ sont équivalentes s'il existe $\alpha, \beta > 0$ tels que
  $\alpha N_1 \leqslant N_2 \leqslant \beta N_1$. En dimension finie, toutes les normes sont équivalentes — mais
  ici $E$ est de dimension infinie (espace de fonctions), c'est pour ça que le résultat est possible.
---

On note $E$ l'espace vectoriel des applications continues sur $[0,1]$ à valeurs dans $\mathbb{R}$. On pose :
$$\forall f \in E, \quad \|f\|_\infty = \sup_{t\in[0,1]} |f(t)| \quad \text{et} \quad \|f\|_1 = \int_0^1 |f(t)|\,dt.$$

1. Les normes $\|\cdot\|_\infty$ et $\|\cdot\|_1$ sont-elles équivalentes ? Justifier.

2. Dans cette question, on munit $E$ de la norme $\|\cdot\|_\infty$.
   a) Soit $u : E \to \mathbb{R}$, $f \mapsto f(0)$. Prouver que $u$ est continue sur $E$.
   b) On pose $F = \{f \in E \mid f(0) = 0\}$. Prouver que $F$ est une partie fermée de $E$ pour $\|\cdot\|_\infty$.

3. Dans cette question, on munit $E$ de la norme $\|\cdot\|_1$. Soit $c : [0,1] \to \mathbb{R}$, $x \mapsto 1$, et
$$\forall n \in \mathbb{N}^*, \quad f_n(x) = \begin{cases} nx & \text{si } 0 \leqslant x \leqslant \frac{1}{n} \\ 1 & \text{si } \frac{1}{n} < x \leqslant 1 \end{cases}$$
   a) Soit $n \in \mathbb{N}^*$. Calculer $\|f_n - c\|_1$.
   b) On pose $F = \{f \in E \mid f(0) = 0\}$ et $\overline{F}$ son adhérence. Prouver que $c \in \overline{F}$. $F$ est-elle une partie fermée de $E$ pour $\|\cdot\|_1$ ?
