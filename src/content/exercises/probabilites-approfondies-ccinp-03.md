---
level: 4
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [inégalité de Bienaymé-Tchebychev, loi faible des grands nombres, application numérique]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 99"
banque: "CCINP"
classic: true
correction: |
  1. Inégalité de Bienaymé-Tchebychev : si $X \in L^2$, $\forall a>0,\ P(|X-E(X)|\geqslant a) \leqslant
  \frac{V(X)}{a^2}$.

  2. Soit $X=\frac{S_n}n$. Par linéarité, $E(X)=E(Y_1)$ (variables de même loi). Par indépendance,
  $V(X) = \frac1{n^2}V(S_n) = \frac1nV(Y_1)$ (variance d'une somme de variables indépendantes). On applique 1. à
  $X$ pour obtenir le résultat.

  3. On considère $Y_i$ de Bernoulli de paramètre $p=\frac25=0{,}4$, $E(Y_i)=0{,}4$, $V(Y_i)=0{,}24$. Avec
  $T_n=\frac{S_n}n$ (proportion de rouges) :
  $$P(0{,}35\leqslant T_n \leqslant 0{,}45) = 1 - P\left(\left|\frac{S_n}n-E(Y_1)\right| \geqslant 0{,}05\right)
  \geqslant 1 - \frac{0{,}24}{n(0{,}05)^2}.$$
  On cherche $n$ tel que $1-\frac{0{,}24}{n(0{,}05)^2}\geqslant0{,}95$, ce qui donne $n \geqslant
  \frac{0{,}24}{0{,}05^3}\approx1920$ : à partir de $n=1920$ tirages, la garantie est assurée.
method:
  title: "Méthode : loi faible des grands nombres via Bienaymé-Tchebychev"
  content: >
    Pour majorer $P(|\text{fréquence} - \text{proportion théorique}|\geqslant a)$, on modélise chaque tirage par
    une variable de Bernoulli indépendante, on calcule $V(Y_1)=p(1-p)$, puis on applique directement
    Bienaymé-Tchebychev à $\frac{S_n}n$ (dont la variance décroît en $\frac1n$). Cette méthode, bien que peu fine
    numériquement (elle surestime largement le nombre de tirages nécessaires par rapport au théorème central
    limite), est la seule exigée au programme pour ce type de garantie.
---

1. Rappeler l'inégalité de Bienaymé-Tchebychev.

2. Soit $(Y_n)$ une suite de variables aléatoires indépendantes, de même loi, telle que $\forall n \in \mathbb
N,\ Y_n \in L^2$. On pose $S_n = \sum_{k=1}^n Y_k$. Prouver que
$$\forall a \in ]0,+\infty[,\ P\left(\left|\frac{S_n}n - E(Y_1)\right| \geqslant a\right) \leqslant
\frac{V(Y_1)}{na^2}.$$

3. Application : on effectue des tirages successifs, avec remise, d'une boule dans une urne contenant 2 boules
rouges et 3 boules noires. À partir de quel nombre de tirages peut-on garantir à plus de 95% que la proportion de
boules rouges obtenues restera comprise entre 0,35 et 0,45 ? Indication : considérer la suite $(Y_i)$ de variables
de Bernoulli où $Y_i$ mesure l'issue du $i$-ième tirage.
