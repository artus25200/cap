---
level: 3
chapters:
  - id: series-entieres
    weight: 100
tags: [rayon de convergence, règle de d'Alembert pour série entière]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 20"
banque: "CCINP"
classic: true
correction: |
  1. $R = \sup\{r\geqslant0 \mid (a_n r^n) \text{ bornée}\}$. De façon équivalente : $|z|<R \implies \sum a_n z^n$
  converge absolument, $|z|>R \implies$ divergence grossière.

  2. (a) $u_n(z) = \frac{(n!)^2}{(2n)!}z^{2n+1}$ : $\frac{u_{n+1}(z)}{u_n(z)} \to \frac{|z|^2}{4}$, donc par
  d'Alembert, convergence absolue si $|z|<2$, divergence si $|z|>2$ : $R=2$.
  (b) $a_n = n(-1)^n$ : $|a_n| \leqslant n$ donne $R\geqslant1$ (rayon de $\sum nz^n$) ; $\frac1n \leqslant |a_n|$
  pour $n\geqslant1$ donne $R\leqslant1$ (rayon de $\sum \frac1n z^n$). Donc $R=1$.
  (c) $a_n = \cos n$ : $|a_n|\leqslant1$ donne $R\geqslant1$ ; en $z=1$, $\sum \cos n$ diverge grossièrement
  (terme général ne tend pas vers 0), donc $R\leqslant1$. Donc $R=1$.
method:
  title: "Méthode : encadrer un rayon de convergence par comparaison"
  content: >
    Pour trouver $R$ sans que d'Alembert s'applique directement (terme général qui ne garde pas un signe simple,
    ou n'a pas de quotient explicite), encadrer $|a_n|$ entre deux suites de rayons connus donne des inégalités
    sur $R$ dans les deux sens — technique du "sandwich" pour les rayons de convergence.
---

1. Donner la définition du rayon de convergence d'une série entière de la variable complexe.

2. Déterminer le rayon de convergence de chacune des séries entières suivantes :
   a) $\displaystyle\sum \frac{(n!)^2}{(2n)!} z^{2n+1}$
   b) $\displaystyle\sum n(-1)^n z^n$
   c) $\displaystyle\sum \cos(n)\, z^n$
