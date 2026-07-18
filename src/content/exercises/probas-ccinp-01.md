---
level: 2
chapters:
  - id: probas
    weight: 100
tags: [loi binomiale, loi hypergéométrique, tirages avec et sans remise]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 95"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) Tirages avec remise, indépendants, succès "boule blanche" de probabilité $p=\frac{2}{10}=\frac15$ :
  $X \hookrightarrow \mathcal B(5,\frac15)$. $X(\Omega)=\llbracket0,5\rrbracket$,
  $P(X=k)=\binom5k(\frac15)^k(\frac45)^{5-k}$, $E(X)=1$, $V(X)=\frac45=0{,}8$.

  (b) $Y=2X-3(5-X)=5X-15$, donc $Y(\Omega)=\{5k-15,\ k\in\llbracket0,5\rrbracket\}$ avec la même loi que $X$
  transportée, $E(Y)=5E(X)-15=-10$, $V(Y)=25V(X)=20$.

  2. (a) Tirage simultané de $5$ boules parmi $10$ (sans remise) : loi hypergéométrique,
  $X(\Omega)=\llbracket0,2\rrbracket$ et $\forall k,\ P(X=k) = \dfrac{\binom2k\binom8{5-k}}{\binom{10}5}$.

  (b) Toujours $Y=5X-15$, donc $Y(\Omega)=\{5k-15,\ k\in\llbracket0,2\rrbracket\}$ avec
  $P(Y=5k-15)=P(X=k) = \dfrac{\binom2k\binom8{5-k}}{\binom{10}5}$.
method:
  title: "Méthode : reconnaître binomiale vs hypergéométrique"
  content: >
    Le mot-clé qui distingue les deux situations : tirages **avec remise** (répétitions indépendantes d'une même
    épreuve à deux issues) donnent une loi **binomiale** ; tirages **simultanés** ou **sans remise** (choix d'un
    sous-ensemble) donnent une loi **hypergéométrique**, calculée par un rapport de coefficients binomiaux. Une
    transformation affine $Y=aX+b$ se traite ensuite avec les formules usuelles $E(Y)=aE(X)+b$,
    $V(Y)=a^2V(X)$.
---

Une urne contient deux boules blanches et huit boules noires.

1. Un joueur tire successivement, avec remise, cinq boules dans cette urne. Pour chaque boule blanche tirée, il
gagne 2 points et pour chaque boule noire tirée, il perd 3 points. On note $X$ la variable aléatoire représentant
le nombre de boules blanches tirées. On note $Y$ le nombre de points obtenus par le joueur sur une partie.

(a) Déterminer la loi de $X$, son espérance et sa variance.

(b) Déterminer la loi de $Y$, son espérance et sa variance.

2. Dans cette question, on suppose que l'on tire simultanément cinq boules dans l'urne.

(a) Déterminer la loi de $X$.

(b) Déterminer la loi de $Y$.
