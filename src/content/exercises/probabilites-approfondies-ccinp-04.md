---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [décomposition en éléments simples, espérance, variance, télescopage]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 100"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $R(x) = \dfrac{1}{2x} - \dfrac{1}{x+1} + \dfrac{1}{2(x+2)}$.

  2. $(P(X=n))$ doit sommer à $1$ : par télescopage sur les sommes partielles de $\lambda R(n)$, on trouve
  $\sum_{n=1}^{+\infty}\frac{\lambda}{n(n+1)(n+2)} = \frac{\lambda}{4}$, donc $\lambda=4$.

  3. $X$ positive, admet une espérance dans $[0,+\infty]$ calculable directement :
  $$E(X) = \sum_{k=1}^{+\infty}\frac{4k}{k(k+1)(k+2)} = \sum_{k=1}^{+\infty}4\left(\frac1{k+1}-\frac1{k+2}\right)
  = 2 < \infty$$ (télescopage), donc $X\in L^1$ et $E(X)=2$.

  4. $E(X^2) = \sum_{n=1}^{+\infty}\frac{4n}{(n+1)(n+2)}$, et au voisinage de $+\infty$,
  $\frac{4n}{(n+1)(n+2)} \sim \frac4n$ : la série harmonique diverge, donc $E(X^2)=+\infty$ : $X \notin L^2$, $X$
  n'admet pas de variance.
method:
  title: "Méthode : existence de moments via un équivalent en série de Riemann"
  content: >
    Pour une variable aléatoire discrète positive, l'existence de $E(X^k)$ se teste en étudiant la nature de la
    série $\sum n^kP(X=n)$ : convergence par télescopage ou comparaison directe pour $E(X)$, puis un simple
    équivalent au voisinage de $+\infty$ (souvent comparé à $\frac1n$, série divergente) suffit à conclure la
    divergence de $E(X^2)$. Un moment d'ordre 1 fini n'implique donc pas un moment d'ordre 2 fini.
---

Soit $\lambda \in ]0,+\infty[$. Soit $X$ une variable aléatoire discrète à valeurs dans $\mathbb N^*$. On suppose
que $\forall n \in \mathbb N^*,\ P(X=n) = \dfrac{\lambda}{n(n+1)(n+2)}$.

1. Décomposer en éléments simples la fraction rationnelle $R$ définie par $R(x) = \dfrac{1}{x(x+1)(x+2)}$.

2. Calculer $\lambda$.

3. Prouver que $X$ admet une espérance, puis la calculer.

4. $X$ admet-elle une variance ? Justifier.
