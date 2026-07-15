---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [dérivation terme à terme, équivalent de somme partielle]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 16"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Pour $x=0$, $u_n(0)=0$. Pour $x\neq0$, un développement asymptotique donne $u_n(x) \underset{+\infty}{\sim}
  -\frac{x^2}{2n^2}$, donc $\sum |u_n(x)|$ converge par comparaison à $\sum 1/n^2$. Donc $S$ est définie sur $[0,1]$.

  2. En télescopant, $\sum_{k=1}^n u_k(1) = \ln(n+1) - \sum_{k=1}^n \frac1k =: v_n$. Donc $(v_n)$ converge vers
  $S(1)$, donc est bornée : $v_n = O(1)$. On en déduit $\sum_{k=1}^n \frac1k = \ln(n+1) - O(1)
  \underset{+\infty}{\sim} \ln(n+1) \underset{+\infty}{\sim} \ln n$. D'où $\sum_{k=1}^n \frac1k
  \underset{+\infty}{\sim} \ln n$.

  3. Chaque $u_n$ est $C^1$ sur $[0,1]$ avec $u_n'(x) = \frac{1}{x+n}-\frac1n = \frac{-x}{n(x+n)}$, donc
  $\|u_n'\|_\infty \leqslant \frac{1}{n^2}$. Comme $\sum 1/n^2$ converge, $\sum u_n'$ converge normalement donc
  uniformément sur $[0,1]$ : $S$ est $C^1$ avec $S'(x) = \sum u_n'(x)$. En particulier,
  $S'(1) = \sum_{n=1}^{+\infty}\left(\frac{1}{n+1}-\frac1n\right) = -1$ (télescopage).
method:
  title: "Méthode : dérivation terme à terme d'une série de fonctions"
  content: >
    Pour dériver une série de fonctions terme à terme : (i) convergence simple de $\sum u_n$, (ii) chaque $u_n$
    de classe $C^1$, (iii) $\sum u_n'$ converge uniformément (souvent via convergence normale). Alors la somme
    $S$ est $C^1$ et $S' = \sum u_n'$. Combiné à une somme télescopique, ça donne des équivalents de sommes
    partielles classiques comme la constante d'Euler.
---

On pose, pour $n\geqslant1$ et $x\in[0,1]$, $u_n(x) = \ln\left(1+\dfrac{x}{n}\right) - \dfrac{x}{n}$, et $S(x) = \sum_{n=1}^{+\infty} u_n(x)$ lorsque la série converge.

1. Démontrer que $S$ est définie sur $[0,1]$.

2. On définit $u_n = \ln(n+1) - \sum_{k=1}^n \frac1k$. En utilisant $S(1)$, démontrer que $(u_n)$ converge. En déduire un équivalent simple de $\sum_{k=1}^n \frac1k$ quand $n\to+\infty$.

3. Démontrer que $S$ est de classe $C^1$ sur $[0,1]$ et calculer $S'(1)$.
