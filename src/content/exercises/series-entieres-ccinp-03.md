---
level: 4
chapters:
  - id: series-entieres
    weight: 100
tags: [dérivation terme à terme, produit de Cauchy]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 19"
banque: "CCINP"
classic: true
correction: |
  1. (a) La dérivée terme à terme $\sum n a_n x^{n-1}$ a le même rayon $R$ que $\sum a_n x^n$, donc converge
  normalement (donc uniformément) sur tout segment de $]-R,R[$ : par le théorème de dérivation terme à terme, la
  somme $S$ est $C^1$ sur $]-R,R[$ avec $S'(x) = \sum n a_n x^{n-1}$.
  (b) $S(x) = \sum x^n = \frac{1}{1-x}$ (série géométrique) sur $]-1,1[$. D'après 1.(a), $S'(x) = \sum_{n\geqslant1} n x^{n-1} = \frac{1}{(1-x)^2}$, donc $\frac{1}{(1-x)^2} = \sum_{n=0}^{+\infty}(n+1)x^n$.

  2. (a) $\frac{1}{1-z} = \sum_{n=0}^{+\infty} z^n$ sur $D=\{|z|<1\}$.
  (b) Produit de Cauchy : $c_n = \sum_{k=0}^n a_k b_{n-k}$, et si $|z|<\min(R_a,R_b)$, $\left(\sum a_n z^n\right)\left(\sum b_n z^n\right) = \sum c_n z^n$.
  (c) $\frac{1}{(1-z)^2} = \frac{1}{1-z}\times\frac{1}{1-z} = \left(\sum z^n\right)^2$, et par produit de Cauchy
  ($a_n=b_n=1$), $c_n = \sum_{k=0}^n 1 = n+1$. Donc $\frac{1}{(1-z)^2} = \sum_{n=0}^{+\infty}(n+1)z^n$ sur $D$.
method:
  title: "Méthode : dérivation terme à terme et produit de Cauchy pour les DSE usuels"
  content: >
    Deux techniques complémentaires pour retrouver des développements en série entière : dériver terme à terme
    un DSE connu (ici $\frac{1}{1-x}$ dérivé donne $\frac{1}{(1-x)^2}$), ou faire le produit de Cauchy de deux
    DSE connus. Les deux méthodes donnent ici le même résultat — un bon moyen de vérifier son calcul.
---

1. a) Justifier (via le théorème de dérivation terme à terme) que la somme d'une série entière de la variable réelle est dérivable sur son intervalle ouvert de convergence.
   b) En déduire le développement en série entière à l'origine de $x \mapsto \dfrac{1}{(1-x)^2}$.

2. a) Donner le DSE à l'origine de $z \mapsto \dfrac{1}{1-z}$ (variable complexe).
   b) Rappeler le produit de Cauchy de deux séries entières.
   c) En déduire le DSE à l'origine de $z \mapsto \dfrac{1}{(1-z)^2}$.
