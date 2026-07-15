---
level: 4
chapters:
  - id: series-entieres
    weight: 100
tags: [rayon de convergence, dérivation terme à terme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 23"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Posons $\ell = \lim |a_{n+1}/a_n|$, donc $R = 1/\ell$ (avec les conventions $R=+\infty$ si $\ell=0$, $R=0$
  si $\ell=+\infty$). En posant $b_n=(n+1)a_{n+1}$, $\frac{|b_{n+1}|}{|b_n|} = \frac{n+2}{n+1}\cdot
  \frac{|a_{n+2}|}{|a_{n+1}|} \to \ell$ aussi (le facteur $\frac{n+2}{n+1}\to1$). Donc $\sum b_nx^n$ a le même
  rayon $R$.

  2. La dérivée terme à terme de $\sum a_nx^n$ est $\sum n a_n x^{n-1} = \sum (n+1)a_{n+1}x^n = \sum b_n x^n$, de
  rayon $R$ d'après 1. Elle converge donc normalement (donc uniformément) sur tout segment $[-r,r]\subset\,]-R,R[$.
  Par le théorème de dérivation terme à terme, $S=\sum a_nx^n$ est $C^1$ sur chaque $[-r,r]$, donc sur $]-R,R[$.
method:
  title: "Méthode : le rayon de convergence de la série dérivée est inchangé"
  content: >
    $\sum a_nx^n$ et sa série dérivée $\sum na_nx^{n-1}$ ont toujours le même rayon de convergence — résultat
    à connaître par cœur, il justifie que la somme d'une série entière soit $C^\infty$ (et pas seulement $C^1$)
    sur son intervalle ouvert de convergence, en itérant l'argument.
---

Soit $(a_n)$ une suite complexe telle que $\left(\dfrac{|a_{n+1}|}{|a_n|}\right)$ admet une limite.

1. Démontrer que les séries entières $\sum a_n x^n$ et $\sum (n+1)a_{n+1}x^n$ ont le même rayon de convergence $R$.

2. Démontrer que $x \mapsto \sum_{n=0}^{+\infty} a_n x^n$ est de classe $C^1$ sur $]-R,R[$.
