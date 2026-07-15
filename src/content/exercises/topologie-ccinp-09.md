---
level: 3
chapters:
  - id: topologie
    weight: 100
tags: [adhérence, opérations ensemblistes]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 44"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) $x\in\overline A \iff \exists (u_n)\subset A, u_n\to x$.
  (b) Si $A\subset B$ : pour $x\in\overline A$, $\exists (u_n)\subset A\subset B, u_n\to x$, donc $x\in\overline B$.

  2. $A\subset A\cup B$ et $B\subset A\cup B$ donnent $\overline A\cup\overline B \subset \overline{A\cup B}$.
  Réciproquement, si $u_n\to x$ avec $u_n\in A\cup B$, l'un des deux ensembles d'indices $\{n:u_n\in A\}$,
  $\{n:u_n\in B\}$ est infini, on peut en extraire une sous-suite à valeurs dans $A$ (ou $B$) convergeant vers
  $x$ : $x\in\overline A\cup\overline B$. D'où l'égalité.

  3. (a) $A\cap B\subset A$ et $\subset B$ donnent $\overline{A\cap B}\subset\overline A\cap\overline B$.
  (b) Avec $A=]0,1[, B=]1,2[$ : $A\cap B=\emptyset$ donc $\overline{A\cap B}=\emptyset$, mais
  $\overline A\cap\overline B=[0,1]\cap[1,2]=\{1\}\neq\emptyset$ : l'inclusion réciproque est fausse.
method:
  title: "Méthode : adhérence et opérations ensemblistes"
  content: >
    $\overline{A\cup B}=\overline A\cup\overline B$ (égalité, vraie pour une union finie), mais seulement
    $\overline{A\cap B}\subset\overline A\cap\overline B$ (inclusion stricte possible) — l'intersection perd de
    l'information que l'union conserve. Un contre-exemple simple avec deux intervalles ouverts adjacents suffit
    à le voir.
---

Soit $E$ un espace vectoriel normé, $A,B$ deux parties non vides de $E$.

1. a) Rappeler la caractérisation séquentielle de l'adhérence.
   b) Montrer que $A\subset B \implies \overline A \subset \overline B$.

2. Montrer que $\overline{A\cup B} = \overline A \cup \overline B$.

3. a) Montrer que $\overline{A\cap B} \subset \overline A \cap \overline B$.
   b) Montrer, par un exemple dans $\mathbb R$, que l'inclusion réciproque n'est pas toujours vraie.
