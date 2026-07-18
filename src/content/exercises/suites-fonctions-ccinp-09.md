---
level: 4
chapters:
  - id: suites-series-fonctions
    weight: 100
tags: [condition nécessaire de convergence uniforme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 17"
banque: "CCINP"
classic: true
correction: |
  1. Si $\sum f_n$ converge uniformément vers $S$ sur $A$, notons $S_n$ les sommes partielles :
  $\|S_n-S\|_\infty \to 0$. Alors $\forall n$ assez grand, $|f_n(x)| = |S_n(x)-S_{n-1}(x)| \leqslant
  \|S_n-S\|_\infty + \|S_{n-1}-S\|_\infty$ (majoration indépendante de $x$), et ce majorant tend vers 0. Donc
  $\|f_n\|_\infty \to 0$ : $(f_n)$ converge uniformément vers 0.

  2. $f_n(x) = nx^2 e^{-x\sqrt n}$. Convergence simple vers 0 sur $[0,+\infty[$ (via $n^2 f_n(x) = o(1)$ pour
  $x\neq0$, comparaison avec $\sum 1/n^2$). Mais $f_n(1/\sqrt n) = e^{-1}$ ne tend pas vers 0 : $(f_n)$ ne
  converge pas uniformément vers 0 sur $[0,+\infty[$. D'après la contraposée de 1., $\sum f_n$ ne converge donc
  pas uniformément sur $[0,+\infty[$.
method:
  title: "Méthode : condition nécessaire de convergence uniforme d'une série de fonctions"
  content: >
    Si $\sum f_n$ converge uniformément sur $A$, alors nécessairement $(f_n)$ converge uniformément vers 0 sur
    $A$ (analogue du "terme général tend vers 0" pour les séries numériques). Par contraposée : si $(f_n)$ ne
    tend PAS uniformément vers 0, la série ne peut pas converger uniformément — un test rapide et puissant.
---

Soit $A\subset\mathbb{C}$ et $(f_n)$ une suite de fonctions de $A$ dans $\mathbb{C}$.

1. Démontrer que si $\sum f_n$ converge uniformément sur $A$, alors $(f_n)$ converge uniformément vers 0 sur $A$.

2. On pose $f_n(x) = nx^2 e^{-x\sqrt n}$ pour $x\in[0,+\infty[$. Prouver que $\sum f_n$ converge simplement sur $[0,+\infty[$. Converge-t-elle uniformément sur $[0,+\infty[$ ? Justifier.
