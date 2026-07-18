---
level: 3
chapters:
  - id: series-numeriques
    weight: 100
tags: [règle de d'Alembert, série géométrique]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 6"
banque: "CCINP"
classic: true
correction: |
  1. Avec $\varepsilon = \frac{1-l}{2} > 0$, il existe $N$ tel que $\forall n\geqslant N$,
  $\left|\frac{u_{n+1}}{u_n} - l\right| \leqslant \varepsilon$, donc $\frac{u_{n+1}}{u_n} \leqslant \frac{1+l}{2} =: q \in\,]0,1[$.
  Par récurrence, $\forall n\geqslant N$, $u_n \leqslant q^{n-N} u_N$. Comme $\sum q^{n-N}u_N$ converge (série
  géométrique de raison $q<1$), par comparaison $\sum u_n$ converge.

  2. $u_n = \frac{n!}{n^n} > 0$ et $\frac{u_{n+1}}{u_n} = \frac{n^n}{(n+1)^n} = e^{-n\ln(1+1/n)}$.
  Or $-n\ln(1+1/n) \underset{+\infty}{\sim} -1$, donc $\lim \frac{u_{n+1}}{u_n} = e^{-1} < 1$.
  D'après la question 1, $\sum u_n$ converge.
method:
  title: "Méthode : critère de d'Alembert (via comparaison à une série géométrique)"
  content: >
    Si $u_{n+1}/u_n \to l < 1$, la série $\sum u_n$ converge — se prouve directement en comparant $u_n$ à une
    série géométrique de raison intermédiaire entre $l$ et $1$, plutôt que de citer le théorème comme une boîte
    noire. Utile en particulier pour les termes généraux avec factorielles ou puissances.
---

Soit $(u_n)_{n\in\mathbb{N}}$ une suite de réels strictement positifs et $l$ un réel positif strictement inférieur à 1.

1. Démontrer que si $\lim_{n\to+\infty} \dfrac{u_{n+1}}{u_n} = l$, alors la série $\sum u_n$ converge. Indication : écrire judicieusement la définition de la limite, puis majorer $u_n$ pour $n$ assez grand par le terme général d'une suite géométrique.

2. Quelle est la nature de la série $\displaystyle\sum_{n\geqslant1} \dfrac{n!}{n^n}$ ?
