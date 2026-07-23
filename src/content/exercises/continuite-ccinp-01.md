---
level: 4
chapters:
  - id: continuite
    weight: 100
tags: [formule de Leibniz, dérivée n-ième, récurrence]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 3"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, dérive plusieurs fois de suite et conjecture la formule générale avant de la prouver par récurrence."
  - "Pour la question 3, procède par récurrence sur $n$ : dérive l'expression de $(fg)^{(n)}$ terme à terme, puis regroupe les sommes en décalant l'indice de l'une d'elles pour faire apparaître la formule du triangle de Pascal."
correction: |
  1. $g$ est $C^\infty$ sur $\mathbb{R}$ et $h$ est $C^\infty$ sur $\mathbb{R}\setminus\{-1\}$, avec (par récurrence) :
  $$g^{(k)}(x) = 2^k e^{2x} \quad \text{et} \quad h^{(k)}(x) = \frac{(-1)^k k!}{(1+x)^{k+1}}.$$

  2. $g$ et $h$ sont $C^\infty$ sur $\mathbb{R}\setminus\{-1\}$, donc par la formule de Leibniz, $f = gh$ aussi, et
  $$f^{(n)}(x) = \sum_{k=0}^{n} \binom{n}{k} g^{(n-k)}(x) h^{(k)}(x) = n!\, e^{2x} \sum_{k=0}^{n} \frac{(-1)^k 2^{n-k}}{(n-k)!\,(1+x)^{k+1}}.$$

  3. On montre $(P_n)$ par récurrence : "si $f,g$ sont $n$ fois dérivables sur $I$, alors $fg$ l'est aussi et
  $(fg)^{(n)} = \sum_{k=0}^n \binom{n}{k} f^{(n-k)} g^{(k)}$". Vrai pour $n=0,1$. En supposant $(P_n)$ vraie et en
  dérivant l'expression obtenue (dérivée d'une somme de produits), un décalage d'indice sur l'une des deux
  sommes puis la formule du triangle de Pascal $\binom{n}{k} + \binom{n}{k-1} = \binom{n+1}{k}$ donnent exactement
  $(fg)^{(n+1)} = \sum_{k=0}^{n+1} \binom{n+1}{k} f^{(n+1-k)} g^{(k)}$, donc $(P_{n+1})$.
method:
  title: "Méthode : formule de Leibniz pour la dérivée n-ième d'un produit"
  content: >
    $(fg)^{(n)} = \sum_{k=0}^n \binom{n}{k} f^{(n-k)} g^{(k)}$ — c'est l'analogue de la formule du binôme pour la
    dérivation. Très utile dès qu'un produit de deux fonctions dont on connaît bien les dérivées successives
    apparaît (ici $e^{2x}$ et $1/(1+x)$).
---

1. On pose $g(x) = e^{2x}$ et $h(x) = \dfrac{1}{1+x}$. Calculer, pour tout entier naturel $k$, la dérivée d'ordre $k$ des fonctions $g$ et $h$ sur leurs ensembles de définition respectifs.

2. On pose $f(x) = \dfrac{e^{2x}}{1+x}$. En utilisant la formule de Leibniz concernant la dérivée $n$-ième d'un produit de fonctions, déterminer, pour tout entier naturel $n$ et tout $x \in \mathbb{R}\setminus\{-1\}$, la valeur de $f^{(n)}(x)$.

3. Démontrer, dans le cas général, la formule de Leibniz utilisée à la question précédente.
