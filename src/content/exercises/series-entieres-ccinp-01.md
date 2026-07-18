---
level: 4
chapters:
  - id: series-entieres
    weight: 100
tags: [décomposition en éléments simples, développement limité]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 2"
banque: "CCINP"
classic: true
correction: |
  1. $f(x) = \dfrac{3}{x+1} + \dfrac{4}{(x+1)^2}$.

  2. $\dfrac{1}{1+x} = \sum_{n=0}^{+\infty}(-1)^n x^n$ et, par dérivation, $\dfrac{1}{(1+x)^2} = \sum_{n=1}^{+\infty}(-1)^{n+1} n x^{n-1}$ sur $]-1,1[$.
  On en déduit $f(x) = \sum_{n=0}^{+\infty} (4n+7)(-1)^n x^n$ sur $]-1,1[$, et comme $a_n = (4n+7)(-1)^n$ ne tend pas vers 0,
  la série entière diverge grossièrement en $x = \pm 1$. Donc le domaine de validité est exactement $D = ]-1,1[$.

  3. (a) $g$ est de classe $C^\infty$ sur $]-R,R[$ et, par récurrence, $g^{(p)}(x) = \sum_{n=0}^{+\infty} \frac{(n+p)!}{n!} a_{n+p} x^n$,
  donc $g^{(p)}(0) = p!\, a_p$, c'est-à-dire $a_p = \dfrac{g^{(p)}(0)}{p!}$.
  (b) $f$ est $C^\infty$ sur $]-1,1[$, donc par Taylor-Young $f(x) = \sum_{p=0}^{3} \frac{f^{(p)}(0)}{p!} x^p + o(x^3)$, et d'après 3.(a)
  et 2., $\frac{f^{(p)}(0)}{p!} = (4p+7)(-1)^p$. Donc au voisinage de 0 :
  $$f(x) = 7 - 11x + 15x^2 - 19x^3 + o(x^3).$$
method:
  title: "Méthode : lien entre série entière et développement limité"
  content: >
    Si $f$ est développable en série entière sur $]-R,R[$ avec $f(x) = \sum a_n x^n$, alors ses coefficients
    $a_n$ sont exactement ceux de son développement limité en 0 à n'importe quel ordre : $a_n = f^{(n)}(0)/n!$.
    Décomposer en éléments simples puis utiliser les DSE usuels de $\frac{1}{1+x}$ et $\frac{1}{(1+x)^2}$ est le
    réflexe standard pour une fraction rationnelle.
---

On pose $f(x) = \dfrac{3x+7}{(x+1)^2}$.

1. Décomposer $f(x)$ en éléments simples.

2. En déduire que $f$ est développable en série entière sur un intervalle du type $]-r,r[$ (où $r>0$). Préciser ce développement et déterminer, en le justifiant, le domaine de validité $D$ de ce développement.

3. a) Soit $\sum a_n x^n$ une série entière de rayon $R>0$. On pose, pour tout $x\in\,]-R,R[$, $g(x) = \sum_{n=0}^{+\infty} a_n x^n$. Exprimer, pour tout entier $p$, en le prouvant, $a_p$ en fonction de $g^{(p)}(0)$.
   b) En déduire le développement limité de $f$ à l'ordre 3 au voisinage de 0.
