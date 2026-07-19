---
level: 4
chapters:
  - id: probas
    weight: 100
tags: [dénombrement, parties d'un ensemble, bijection]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 112"
banque: "CCINP"
classic: true
correction: |
  1. Pour $p\in\llbracket0,n\rrbracket$ fixé, une partie $B$ à $p$ éléments donnée admet $2^p$ parties $A\subset B$, et il y a $\binom np$ choix pour $B$. En sommant (les cas étant disjoints selon $\mathrm{card}\,B$) :
  $$a = \sum_{p=0}^n\binom np2^p = 3^n$$ (binôme de Newton). *Variante bijective* : associer à $(A,B)$ avec
  $A\subset B$ l'application $\varphi_{A,B}: E\to\{1,2,3\}$ valant $1$ sur $A$, $2$ sur $B\setminus A$, $3$
  ailleurs ; c'est une bijection vers $\mathcal A(E,\{1,2,3\})$, de cardinal $3^n$.

  2. $\{(A,B),\ A\cap B=\emptyset\} = \{(A,C),\ A\subset C\}$ via $C=E\setminus B$ (bijection), donc $b=a=3^n$.

  3. Un triplet $(A,B,C)$ deux à deux disjoints avec $A\cup B\cup C=E$ est entièrement déterminé par le couple
  $(A,B)$ avec $A\cap B=\emptyset$ (alors $C=E\setminus(A\cup B)$ est imposé) : $c=b=3^n$.
method:
  title: "Méthode : dénombrer via une bijection vers les applications à valeurs dans {1,2,3}"
  content: >
    Compter les couples $(A,B)$ avec $A\subset B\subset E$ revient à choisir, pour chaque élément de $E$,
    indépendamment, l'un des trois statuts "dans $A$", "dans $B\setminus A$", "hors de $B$" : c'est une bijection
    vers $\{1,2,3\}^E$, donnant directement $3^n$ sans sommer sur le cardinal de $B$. Cette idée se généralise à
    tout problème de partition d'un ensemble en un nombre fixé de blocs (éventuellement vides).
---

Soit $n \in \mathbb N^*$ et $E$ un ensemble possédant $n$ éléments. On désigne par $\mathcal P(E)$ l'ensemble des
parties de $E$.

1. Déterminer le nombre $a$ de couples $(A,B) \in (\mathcal P(E))^2$ tels que $A \subset B$.

2. Déterminer le nombre $b$ de couples $(A,B) \in (\mathcal P(E))^2$ tels que $A \cap B = \emptyset$.

3. Déterminer le nombre $c$ de triplets $(A,B,C) \in (\mathcal P(E))^3$ tels que $A$, $B$ et $C$ soient deux à
deux disjoints et vérifient $A \cup B \cup C = E$.
