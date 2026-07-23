---
level: 5
chapters:
  - id: equations-differentielles
    weight: 100
  - id: series-entieres
    weight: 60
tags: [solutions développables en série entière]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 32"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, injecte $S(x)=\\sum a_nx^n$ (avec $S'$ et $S''$ réindexées) dans l'équation, puis identifie les coefficients de chaque puissance de $x$ pour obtenir une relation de récurrence entre $a_n$ et $a_{n+1}$."
  - "Pour la question 2, compare la dimension de l'espace des solutions DSE trouvées à la question 1 à la dimension attendue pour une équation linéaire d'ordre 2 sur un intervalle où le coefficient dominant ne s'annule pas."
correction: |
  1. En injectant $S(x)=\sum a_nx^n$ dans $x(x-1)y''+3xy'+y=0$ et en identifiant les coefficients, on obtient
  $\forall n, (n+1)^2a_n = n(n+1)a_{n+1}$, soit $a_n = na_1$. La série $\sum nx^n$ ayant pour rayon 1, les
  solutions DSE sont $x\mapsto a_1\sum nx^n = \dfrac{a_1x}{(1-x)^2}$ sur $]-1,1[$, $a_1\in\mathbb{R}$.

  2. Non : sur $]0,1[$, l'ensemble des solutions de $(E)$ est un plan vectoriel (coefficients continus,
  $x(x-1)\neq0$ sur $]0,1[$), alors que les solutions DSE ne forment qu'une droite $\mathrm{Vect}(f)$ avec
  $f(x)=\frac{x}{(1-x)^2}$ — contradiction si toutes les solutions étaient DSE.
method:
  title: "Méthode : chercher les solutions développables en série entière d'une ED"
  content: >
    Injecter $S(x)=\sum a_nx^n$ (et ses dérivées, réindexées) dans l'équation, puis identifier les coefficients
    par unicité du DSE : on obtient une relation de récurrence sur les $a_n$. Attention, cela ne donne que les
    solutions DSE — une équation d'ordre 2 a en général un espace de solutions de dimension 2, alors que la
    récurrence peut n'en donner qu'une droite (comme ici), signe que les autres solutions ne sont pas DSE.
---

Soit l'équation différentielle $x(x-1)y'' + 3xy' + y = 0$.

1. Trouver les solutions de cette équation développables en série entière sur un intervalle $]-r,r[$, $r>0$. Déterminer la somme des séries entières obtenues.

2. Toutes les solutions de $x(x-1)y''+3xy'+y=0$ sur $]0,1[$ sont-elles les restrictions d'une fonction développable en série entière sur $]-1,1[$ ?
