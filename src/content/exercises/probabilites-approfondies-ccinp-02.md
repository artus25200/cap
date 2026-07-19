---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [couple de variables aléatoires, indépendance, loi marginale, théorème de transfert]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 97"
banque: "CCINP"
classic: false
correction: |
  1. Pour $k\in\mathbb N$, tous les termes étant positifs, on somme dans $[0,+\infty]$ :
  $$P(Y=k) = \sum_{j=0}^{+\infty}\frac{(j+k)\left(\frac12\right)^{j+k}}{e\,j!\,k!}.$$
  On sépare la somme en $j\cdot(1/2)^j$ et $k\cdot(1/2)^j$ : le premier terme fait apparaître
  $\sum_j \frac{j}{j!}(1/2)^j = \frac12 e^{1/2}$, le second $\sum_j\frac1{j!}(1/2)^j=e^{1/2}$ (séries
  exponentielles), ce qui donne, après simplification par $e$ :
  $$P(Y=k) = \frac{\left(\frac12+k\right)\left(\frac12\right)^k}{k!\sqrt e}.$$
  Par symétrie des rôles de $j$ et $k$, $X$ suit la même loi. $X$ et $Y$ ne sont **pas** indépendantes, car
  $P((X,Y)=(0,0))=0$ alors que $P(X=0)P(Y=0)\neq0$.

  2. $2^{X+Y}$ est positive, admet une espérance dans $[0,+\infty]$ calculable par transfert :
  $$E(2^{X+Y}) = \sum_{(j,k)\in\mathbb N^2}\frac{(j+k)2^{j+k}}{e\,2^{j+k}j!k!} = \sum_{(j,k)}\frac{j+k}{e\,j!k!}
  = 2\sum_{(j,k)}\frac{j}{e\,j!k!}$$ (par symétrie $j \leftrightarrow k$),
  et par Fubini (tout est positif), $E(2^{X+Y}) = \frac2e\left(\sum_j\frac{j}{j!}\right)\left(\sum_k\frac1{k!}\right) = \frac2e \cdot e \cdot e = 2e < \infty$. Donc $2^{X+Y}\in L^1$ et $E(2^{X+Y})=2e$.
method:
  title: "Méthode : loi marginale et théorème de transfert pour un couple discret"
  content: >
    Pour un couple $(X,Y)$ à valeurs dans $\mathbb N^2$, la loi marginale de $Y$ s'obtient en sommant sur $j$
    (théorème de sommation par paquets, licite car tous les termes sont positifs). L'indépendance se réfute avec un
    seul contre-exemple numérique bien choisi ($P((X,Y)=(0,0))$ souvent pratique quand la loi jointe s'annule en
    ce point). L'espérance d'une fonction du couple se calcule directement par transfert, en manipulant la double
    somme comme un produit de séries exponentielles via Fubini (légitime par positivité).
---

Soit $(X,Y)$ un couple de variables aléatoires à valeurs dans $\mathbb N^2$ dont la loi est donnée par :
$$\forall (j,k) \in \mathbb N^2,\ P((X,Y)=(j,k)) = \frac{(j+k)\left(\frac12\right)^{j+k}}{e\,j!\,k!}.$$

1. Déterminer les lois marginales de $X$ et de $Y$. Les variables $X$ et $Y$ sont-elles indépendantes ?

2. Prouver que $E\left[2^{X+Y}\right]$ existe et la calculer.
