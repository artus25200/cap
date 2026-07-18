---
level: 4
chapters:
  - id: probas
    weight: 100
tags: [probabilités totales, suite arithmético-géométrique, urnes]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 107"
banque: "CCINP"
classic: true
correction: |
  1. $(U_1,U_2)$ système complet, formule des probabilités totales : $p_1 = \frac25\times\frac12+\frac47\times
  \frac12 = \frac{17}{35}$.

  2. $(B_n,\overline{B_n})$ système complet, et selon la couleur tirée au rang $n$, le tirage suivant se fait
  dans $U_1$ (proba $\frac25$ d'y être blanc) ou $U_2$ (proba $\frac47$) :
  $p_{n+1} = \frac25p_n + \frac47(1-p_n) = -\frac6{35}p_n+\frac47$.

  3. $(p_n)$ est arithmético-géométrique de point fixe $\ell = \frac{20}{41}$ (solution de $\ell=-\frac6{35}\ell+
  \frac47$). La suite $(u_n)=(p_n-\ell)$ est géométrique de raison $-\frac6{35}$, avec
  $u_1 = p_1-\ell = \frac{17}{35}-\frac{20}{41} = -\frac3{1435}$, donc $u_n = \left(-\frac6{35}\right)^{n-1}u_1$, et
  $$p_n = -\frac3{1435}\left(-\frac6{35}\right)^{n-1} + \frac{20}{41}.$$
method:
  title: "Méthode : résoudre une récurrence arithmético-géométrique issue de probabilités totales"
  content: >
    Quand la formule des probabilités totales, appliquée à un système complet évoluant dans le temps, donne une
    relation $p_{n+1}=\alpha p_n+\beta$, on reconnaît une suite arithmético-géométrique : on cherche son point
    fixe $\ell=\alpha\ell+\beta$, on pose $u_n=p_n-\ell$ (suite géométrique de raison $\alpha$), et on revient à
    $p_n = u_n+\ell$ avec $u_n$ explicite.
---

On dispose de deux urnes $U_1$ et $U_2$. L'urne $U_1$ contient deux boules blanches et trois boules noires.
L'urne $U_2$ contient quatre boules blanches et trois boules noires. On effectue des tirages successifs : on
choisit une urne au hasard et on tire une boule dans l'urne choisie, on note sa couleur et on la remet. Si la
boule tirée était blanche, le tirage suivant se fait dans l'urne $U_1$, sinon dans $U_2$. Pour $n \in \mathbb N^*$,
on note $B_n$ l'événement « la boule tirée au $n$-ième tirage est blanche » et $p_n = P(B_n)$.

1. Calculer $p_1$.

2. Prouver que $\forall n \in \mathbb N^*,\ p_{n+1} = -\dfrac6{35}p_n+\dfrac47$.

3. En déduire, pour tout entier naturel $n$ non nul, la valeur de $p_n$.
