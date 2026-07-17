---
level: 4
chapters:
  - id: topologie
    weight: 100
  - id: series-numeriques
    weight: 20
tags: [norme matricielle, exponentielle de matrice]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 61"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Séparation, homogénéité et inégalité triangulaire de $\|\cdot\|$ découlent directement des mêmes
  propriétés du module et du max, coefficient par coefficient.

  2. Pour $C=AB$, $|c_{i,j}|=\left|\sum_k a_{i,k}b_{k,j}\right| \leqslant \sum_k\|A\|\|B\| = n\|A\|\|B\|$, donc
  $\|AB\|\leqslant n\|A\|\|B\|$. Par récurrence : $\|A^{p+1}\| = \|A\cdot A^p\| \leqslant n\|A\|\|A^p\| \leqslant
  n\|A\|\cdot n^{p-1}\|A\|^p = n^p\|A\|^{p+1}$, donc $\|A^p\|\leqslant n^{p-1}\|A\|^p$.

  3. $\left\|\dfrac{A^p}{p!}\right\| \leqslant \dfrac1n\cdot\dfrac{(n\|A\|)^p}{p!}$, et $\sum
  \frac{(n\|A\|)^p}{p!}$ converge (série exponentielle). Par comparaison, $\sum \frac{A^p}{p!}$ converge
  absolument. Comme $M_n(\mathbb C)$ est de dimension finie, absolue convergence entraîne convergence.
method:
  title: "Méthode : norme matricielle et convergence de la série exponentielle de matrice"
  content: >
    La norme du max des coefficients n'est pas sous-multiplicative directement ($\|AB\|\leqslant\|A\|\|B\|$ est
    faux en général) — il faut le facteur $n$ dû à la somme sur $n$ termes du produit matriciel. Cette
    majoration $\|AB\|\leqslant n\|A\|\|B\|$ permet ensuite de dominer $\|A^p\|/p!$ par une série exponentielle
    numérique convergente, prouvant que $\exp(A)=\sum A^p/p!$ est bien définie.
---

On note $M_n(\mathbb C)$ l'espace des matrices carrées d'ordre $n$. Pour $A=(a_{i,j})$, on pose $\|A\| = \max_{i,j}|a_{i,j}|$.

1. Prouver que $\|\cdot\|$ est une norme sur $M_n(\mathbb C)$.

2. Démontrer que $\forall(A,B), \|AB\|\leqslant n\|A\|\|B\|$, puis que $\forall p\geqslant1, \|A^p\|\leqslant n^{p-1}\|A\|^p$.

3. Démontrer que, pour toute matrice $A$, la série $\sum \dfrac{A^p}{p!}$ est absolument convergente. Est-elle convergente ?
