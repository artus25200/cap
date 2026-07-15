---
level: 5
chapters:
  - id: topologie
    weight: 100
tags: [parties compactes, suites extraites, valeurs d'adhérence]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 13"
banque: "CCINP - Banque orale MP/MPI"
classic: true
hints:
  - "Pour la fermeture, utilise directement la définition séquentielle du compact sur une suite convergente de A."
  - "Pour la question 4(b), calcule ||X^n - X^m||₁ : ça donne une distance constante entre tous les éléments de la suite (X^n), ce qui est incompatible avec l'extraction d'une sous-suite convergente."
correction: |
  1. $A$ est compacte ssi de toute suite $(x_n)$ à valeurs dans $A$ on peut extraire une sous-suite convergente
  dans $A$.

  2. Soit $(x_n)$ à valeurs dans $A$ convergeant vers $l$. Par compacité, une sous-suite $(x_{\varphi(n)})$
  converge vers $l' \in A$ ; mais comme sous-suite de $(x_n)$, elle converge aussi vers $l$. Par unicité de la
  limite, $l=l' \in A$ : $A$ est fermée.

  3. Par l'absurde, si $A$ n'est pas bornée : $\forall n, \exists x_n\in A, \|x_n\|>n$. Par compacité, une
  sous-suite $(x_{\varphi(n)})$ converge vers $l\in A$, donc est bornée ; mais $\|x_{\varphi(n)}\| > \varphi(n)
  \geqslant n \to +\infty$, contradiction.

  4. (a) $\forall x\in S, \|x\|=1$ donc $S$ est bornée. $S = f^{-1}(\{1\})$ où $f=\|\cdot\|$ est continue, donc
  $S$ est fermée (image réciproque d'un fermé par une application continue).
  (b) $\|X^n - X^m\|_1 = 2$ pour $n\neq m$. Si $S$ était compacte, $(X^n)$ admettrait une sous-suite convergente
  vers $l\in S$, donc $\|X^{\varphi(n)} - X^{\varphi(n+1)}\|_1 \to 0$, ce qui contredit le fait que cette quantité
  vaut constamment 2. Donc $S$ n'est pas compacte.
method:
  title: "Méthode : caractérisation séquentielle des compacts"
  content: >
    En dimension infinie, une partie fermée bornée n'est pas forcément compacte (contrairement à la dimension
    finie) — c'est exactement ce que montre la question 4. Pour prouver la non-compacité, le réflexe est
    d'exhiber une suite dans la partie dont aucune sous-suite ne peut converger (ici : tous les termes sont à
    distance constante 2 les uns des autres, donc aucune sous-suite n'est de Cauchy).
course: |
  En dimension finie, compact $\iff$ fermé et borné (théorème de Bolzano-Weierstrass / Borel-Lebesgue). Ce
  résultat est FAUX en dimension infinie, comme le montre cet exercice.
---

1. Rappeler, oralement, la définition (par les suites) d'une partie compacte d'un espace vectoriel normé.

2. Démontrer qu'une partie compacte d'un espace vectoriel normé est fermée.

3. Démontrer qu'une partie compacte d'un espace vectoriel normé est bornée. Indication : raisonner par l'absurde.

4. On se place sur $E = \mathbb{R}[X]$ muni de $\|P\|_1 = \sum_{i=0}^n |a_i|$ pour $P = \sum a_i X^i$.
   a) Justifier que $S(0,1) = \{P \in E \mid \|P\|_1 = 1\}$ est fermée et bornée.
   b) Calculer $\|X^n - X^m\|_1$ pour $n\neq m$. $S(0,1)$ est-elle compacte ? Justifier.
