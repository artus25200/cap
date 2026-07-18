---
level: 3
chapters:
  - id: probas
    weight: 100
tags: [tirage sans remise, dénombrement, probabilités composées]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 109"
banque: "CCINP"
classic: true
correction: |
  1. $X(\Omega)=\llbracket1,3\rrbracket$ (au plus 2 boules noires avant la première blanche). En raisonnant tirage
  par tirage (sans remise) :
  $$P(X=1)=\frac{n}{n+2},\qquad P(X=2)=\frac2{n+2}\times\frac{n}{n+1},\qquad
  P(X=3)=\frac2{n+2}\times\frac1{n+1}\times\frac{n}{n} = \frac2{(n+1)(n+2)}.$$

  2. $Y(\Omega)=\llbracket1,n+1\rrbracket$. En raisonnant sur les rangs successifs (probabilités composées, en
  excluant à chaque étape la boule blanche $B_1$ et la boule noire $N_1$) :
  $$P(Y=k) = \frac{n}{n+2}\times\frac{n-1}{n+1}\times\cdots\times\frac{n-k+2}{n-k+4}\times\frac2{n-k+3} =
  \frac{2(n-k+2)}{(n+1)(n+2)}.$$
method:
  title: "Méthode : rang d'apparition via les probabilités composées"
  content: >
    Pour un rang d'apparition dans un tirage sans remise, deux approches équivalentes : soit dénombrer
    directement (nombre de tirages favorables sur nombre total de tirages), soit utiliser la formule des
    probabilités composées en raisonnant tirage par tirage ("ne pas obtenir l'objet visé" $k-1$ fois de suite,
    puis l'obtenir), les probabilités conditionnelles se calculant simplement car l'urne diminue d'une unité à
    chaque tirage.
---

Soit $n \in \mathbb N^*$. Une urne contient $n$ boules blanches numérotées de 1 à $n$ et deux boules noires
numérotées 1 et 2. On effectue le tirage une à une, sans remise, de toutes les boules de l'urne (tirages
équiprobables). On note $X$ la variable aléatoire égale au rang d'apparition de la première boule blanche. On
note $Y$ la variable aléatoire égale au rang d'apparition de la première boule numérotée 1 (blanche ou noire).

1. Déterminer la loi de $X$.

2. Déterminer la loi de $Y$.
