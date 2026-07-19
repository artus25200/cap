---
level: 4
chapters:
  - id: probas
    weight: 100
tags: [loi binomiale, loi conditionnelle, formule des probabilités totales]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 98"
banque: "CCINP"
classic: true
correction: |
  1. $n$ épreuves de Bernoulli indépendantes de paramètre $p$ répétées : $X \hookrightarrow \mathcal B(n,p)$,
  $P(X=k)=\binom nk p^k(1-p)^{n-k}$.

  2. (a) Sous $(X=i)$, $n-i$ nouveaux appels dans les mêmes conditions : $Y|_{X=i} \hookrightarrow \mathcal B(n-i,p)$, donc $P(Y=k|X=i) = \binom{n-i}k p^k(1-p)^{n-i-k}$ pour $k\leqslant n-i$, $0$ sinon.

  (b) Par la formule des probabilités totales, $P(Z=k) = \sum_{i=0}^k P(Y=k-i|X=i)P(X=i)$. En utilisant
  l'identité donnée $\binom{n-i}{k-i}\binom ni = \binom ki\binom nk$ et le binôme de Newton sur $\sum_i \binom ki \left(\frac{1}{1-p}\right)^i$, on obtient après simplification (avec $1-p(2-p)=(1-p)^2$) :
  $$P(Z=k) = \binom nk \big(p(2-p)\big)^k(1-p)^{2(n-k)} = \binom nk\big(p(2-p)\big)^k\big(1-p(2-p)\big)^{n-k}.$$
  Donc $Z \hookrightarrow \mathcal B(n,p(2-p))$.

  (c) $E(Z)=np(2-p)$, $V(Z)=np(2-p)\big(1-p(2-p)\big) = np(2-p)(p-1)^2$.
method:
  title: "Méthode : reconnaître une loi binomiale composée"
  content: >
    Quand une variable $Z=X+Y$ résulte d'une expérience binomiale suivie d'une seconde expérience binomiale
    "conditionnée par l'échec" de la première, on calcule $P(Z=k)$ par la formule des probabilités totales
    conditionnée par $X$, puis on cherche à faire réapparaître un unique coefficient binomial $\binom nk$ via une
    identité combinatoire (souvent donnée en indication) : le résultat final est en général de nouveau une loi
    binomiale, de paramètre "recombiné" à partir des deux paramètres initiaux.
---

Une secrétaire effectue, une première fois, un appel téléphonique vers $n$ correspondants distincts. On admet que
les $n$ appels constituent $n$ expériences indépendantes et que, pour chaque appel, la probabilité d'obtenir le
correspondant demandé est $p$ ($p \in ]0,1[$). Soit $X$ la variable aléatoire représentant le nombre de
correspondants obtenus.

1. Donner la loi de $X$. Justifier.

2. La secrétaire rappelle une seconde fois, dans les mêmes conditions, chacun des $n-X$ correspondants qu'elle
n'a pas pu joindre au cours de la première série d'appels. On note $Y$ la variable aléatoire représentant le
nombre de personnes jointes au cours de la seconde série d'appels.

(a) Soit $i \in \llbracket 0,n\rrbracket$. Déterminer, pour $k \in \mathbb N$, $P(Y=k|X=i)$.

(b) Prouver que $Z=X+Y$ suit une loi binomiale dont on déterminera le paramètre. Indication : on pourra utiliser,
sans la prouver, l'égalité $\binom{n-i}{k-i}\binom ni = \binom ki\binom nk$.

(c) Déterminer l'espérance et la variance de $Z$.
