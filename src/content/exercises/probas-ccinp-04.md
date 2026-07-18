---
level: 3
chapters:
  - id: probas
    weight: 100
tags: [formule de Bayes, système complet d'événements, probabilité conditionnelle]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 105"
banque: "CCINP"
classic: true
correction: |
  1. Formule de Bayes : si $B$ est de probabilité non nulle et $(A_i)_{i\in I}$ système complet de probabilités
  non nulles, $\forall i_0,\ P_B(A_{i_0}) = \dfrac{P(A_{i_0})P_{A_{i_0}}(B)}{\sum_iP(A_i)P_{A_i}(B)}$. Preuve :
  $P_B(A_{i_0}) = \dfrac{P(A_{i_0}\cap B)}{P(B)} = \dfrac{P(A_{i_0})P_{A_{i_0}}(B)}{P(B)}$, et
  $P(B) = \sum_iP(A_i\cap B) = \sum_iP(A_i)P_{A_i}(B)$ (système complet).

  2. (a) $T$: "dé pipé", $P(T)=\frac14$, $P(\overline T)=\frac34$. Bayes :
  $$P_A(T) = \frac{\frac14\times\frac12}{\frac14\times\frac12+\frac34\times\frac16} = \frac12.$$

  (b) De même, avec $n$ lancers donnant $n$ fois le chiffre 6 :
  $$p_n = \frac{\frac14\left(\frac12\right)^n}{\frac14\left(\frac12\right)^n+\frac34\left(\frac16\right)^n}
  = \frac{1}{1+\frac1{3^{n-1}}}.$$

  (c) $\lim_{n\to+\infty}p_n=1$ : quand on obtient un grand nombre de 6 consécutifs, il devient quasi certain que
  le dé tiré au hasard était pipé.
method:
  title: "Méthode : formule de Bayes pour une preuve statistique"
  content: >
    Face à une population mélangeant deux types d'individus (ici dés pipés/non pipés), la formule de Bayes
    permet d'inverser la question : passer de "probabilité d'obtenir tel résultat sachant le type" (facile à
    donner) à "probabilité du type sachant le résultat observé" (la question posée). Répéter l'observation $n$
    fois (ici $n$ lancers à 6) renforce l'évidence, ce qui se traduit par $p_n \to 1$ à la limite.
---

1. Énoncer et démontrer la formule de Bayes pour un système complet d'événements.

2. On dispose de 100 dés dont 25 sont pipés (truqués). Pour chaque dé pipé, la probabilité d'obtenir le chiffre 6
lors d'un lancer vaut $\frac12$.

(a) On tire un dé au hasard parmi les 100 dés. On lance ce dé et on obtient le chiffre 6. Quelle est la
probabilité que ce dé soit pipé ?

(b) Soit $n \in \mathbb N^*$. On tire un dé au hasard parmi les 100 dés. On lance ce dé $n$ fois et on obtient $n$
fois le chiffre 6. Quelle est la probabilité $p_n$ que ce dé soit pipé ?

(c) Déterminer $\lim_{n\to+\infty}p_n$. Interpréter ce résultat.
