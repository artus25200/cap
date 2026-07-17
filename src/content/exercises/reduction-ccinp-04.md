---
level: 4
chapters:
  - id: reduction
    weight: 100
tags: [diagonalisabilité, discussion selon paramètre, corps de base]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 67"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  $\chi_M = X(X^2+ca-ba-bc)$. Posons $\delta = ca-ba-bc$.
  - Si $\delta<0$ : trois valeurs propres réelles distinctes ($0, \pm\sqrt{-\delta}$) : $M$ diagonalisable sur
  $\mathbb R$ (et donc sur $\mathbb C$).
  - Si $\delta=0$ : seule valeur propre 0. $M$ diagonalisable $\iff M=0 \iff a=b=c=0$.
  - Si $\delta>0$ : seule valeur propre réelle 0, $\chi_M$ non scindé sur $\mathbb R$ : pas diagonalisable sur
  $\mathbb R$. Mais trois valeurs propres complexes distinctes ($0,\pm i\sqrt\delta$) : diagonalisable sur $\mathbb C$.
method:
  title: "Méthode : diagonalisabilité selon le corps de base"
  content: >
    Une matrice réelle peut être diagonalisable sur $\mathbb C$ sans l'être sur $\mathbb R$ (racines complexes
    non réelles du polynôme caractéristique) — toujours vérifier si $\chi_M$ est scindé sur le corps considéré
    avant de conclure, et distinguer explicitement les deux corps quand l'énoncé le demande.
---

Soit $M = \begin{pmatrix}0&a&c\\b&0&c\\b&-a&0\end{pmatrix}$ où $a,b,c$ sont réels. $M$ est-elle diagonalisable dans $M_3(\mathbb R)$ ? Dans $M_3(\mathbb C)$ ?
