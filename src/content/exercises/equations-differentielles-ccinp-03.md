---
level: 3
chapters:
  - id: equations-differentielles
    weight: 100
tags: [équation non résolue, raccord de solutions]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 42"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $(H): 2xy'-3y=0$ sur $]0,+\infty[$ : solutions $x\mapsto \lambda x^{3/2}$, $\lambda\in\mathbb R$.

  2. Variation de la constante : $y=k(x)x^{3/2}$ donne $2k'(x)x^{5/2}=\sqrt x$, soit $k(x)=-\frac{1}{2x}$
  convient. Solutions de $(E)$ sur $]0,+\infty[$ : $y(x) = kx^{3/2} - \frac12\sqrt x$, $k\in\mathbb R$.

  3. Si $f$ était solution sur $[0,+\infty[$, elle coïnciderait sur $]0,+\infty[$ avec une telle solution, donc
  $f(0)=\lim_{x\to0}\left(kx^{3/2}-\frac12\sqrt x\right)=0$ par continuité. Mais
  $\frac{f(x)-f(0)}{x} = k\sqrt x - \frac{1}{2\sqrt x} \to -\infty$ : $f$ ne serait pas dérivable en 0,
  contradiction. Donc $(E)$ n'a pas de solution sur $[0,+\infty[$.
method:
  title: "Méthode : équation différentielle non résolue en y', raccord en un point singulier"
  content: >
    Quand le coefficient de $y'$ s'annule en un point (ici $x=0$), ce point est singulier : il faut résoudre
    séparément sur les intervalles où l'équation est résolue (ici $]0,+\infty[$), puis étudier si les solutions
    obtenues se prolongent en une fonction dérivable au point singulier — souvent la réponse est non, à cause
    d'une explosion du taux d'accroissement.
---

On considère les équations différentielles $2xy'-3y=0$ $(H)$ et $2xy'-3y=\sqrt x$ $(E)$.

1. Résoudre $(H)$ sur $]0,+\infty[$.

2. Résoudre $(E)$ sur $]0,+\infty[$.

3. $(E)$ admet-elle des solutions sur $[0,+\infty[$ ?
