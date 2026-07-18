---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [convergence normale, limite d'une série de fonctions]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 53"
banque: "CCINP"
classic: true
correction: |
  1. (a) $f_n(0)=0$ ; pour $x\neq0$, $f_n(x)\underset{+\infty}{\sim}\frac{1}{n^4x^3}$, comparable à une série de
  Riemann convergente ($\sum1/n^4$) : $\sum f_n(x)$ converge pour tout $x$.
  (b) Sur $[a,b]$ ($0<a<b$) : $|f_n(x)|\leqslant\frac{b}{n^4a^4}$, majorant indépendant de $x$, sommable : conv.
  normale sur $[a,b]$. Sur $[a,+\infty[$ : $|f_n(x)|\leqslant\frac{1}{n^4a^3}$, sommable : conv. normale aussi.
  (c) $\sup_{x\geqslant0}|f_n(x)| \geqslant f_n(1/n) = \frac{1}{2n}$, et $\sum\frac{1}{2n}$ diverge : pas de
  convergence normale sur $[0,+\infty[$.

  2. Chaque $f_n$ continue sur $]0,+\infty[$, convergence normale (donc uniforme) sur tout segment de
  $]0,+\infty[$ : $f$ continue sur $]0,+\infty[$. $f$ impaire, donc continue aussi sur $]-\infty,0[$ : $f$
  continue sur $\mathbb R^*$.

  3. Chaque $f_n(x)\to0$ quand $x\to+\infty$, et convergence normale (donc uniforme) sur $[1,+\infty[$ :
  par le théorème de la double limite, $\lim_{x\to+\infty} f(x) = \sum_{n=1}^{+\infty} \lim_{x\to+\infty}f_n(x) = 0$.
method:
  title: "Méthode : convergence normale locale mais pas globale + théorème de la double limite"
  content: >
    Motif classique : convergence normale sur tout $[a,b]$ ou $[a,+\infty[$ (avec $a>0$ fixé) mais pas sur
    $[0,+\infty[$ tout entier (à cause du comportement près de 0). La convergence normale sur $[1,+\infty[$
    suffit pour appliquer le théorème de la double limite et calculer $\lim_{x\to+\infty} f(x)$.
---

Pour $n\geqslant1$, on pose $f_n(x) = \dfrac{x}{1+n^4x^4}$ sur $\mathbb R$.

1. a) Prouver que $\sum f_n$ converge simplement sur $\mathbb R$. On pose alors $f(x)=\sum_{n=1}^{+\infty}f_n(x)$.
   b) Soit $0<a<b$. $\sum f_n$ converge-t-elle normalement sur $[a,b]$ ? sur $[a,+\infty[$ ?
   c) $\sum f_n$ converge-t-elle normalement sur $[0,+\infty[$ ?

2. Prouver que $f$ est continue sur $\mathbb R^*$.

3. Déterminer $\lim_{x\to+\infty} f(x)$.
