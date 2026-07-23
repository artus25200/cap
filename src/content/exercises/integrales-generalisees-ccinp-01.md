---
level: 4
chapters:
  - id: integrales-generalisees
    weight: 100
tags: [convergence dominée, intégrabilité par comparaison]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 25"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, majore $f_n(t)$ par une fonction intégrable indépendante de $n$, en oubliant simplement le terme $t^ne^{-t}$ au dénominateur."
  - "Pour la question 2, détermine d'abord la limite simple de $f_n$ (distingue $t<1$, $t=1$, $t>1$), puis applique le théorème de convergence dominée avec la même domination qu'à la question 1."
correction: |
  1. $f_n : t\mapsto \frac{1}{1+t^2+t^ne^{-t}}$ est continue sur $[0,+\infty[$, et $|f_n(t)| \leqslant \frac{1}{1+t^2} =: \varphi(t)$, avec $\varphi \underset{+\infty}{\sim} \frac{1}{t^2}$ intégrable sur
  $[1,+\infty[$ (Riemann) : $f_n$ est intégrable sur $[0,+\infty[$.

  2. $(f_n)$ converge simplement vers $f$ définie par $f(t) = \frac{1}{1+t^2}$ si $t<1$, $f(1) = \frac{1}{2+e^{-1}}$,
  $f(t)=0$ si $t>1$ — toutes continues par morceaux, et $|f_n(t)|\leqslant\varphi(t)$ intégrable indépendamment
  de $n$. Par convergence dominée :
  $$\lim_{n\to+\infty} u_n = \int_0^{+\infty} f(t)\,dt = \int_0^1 \frac{dt}{1+t^2} = \frac{\pi}{4}.$$
method:
  title: "Méthode : théorème de convergence dominée"
  content: >
    Trois ingrédients : (i) convergence simple de $(f_n)$ vers une limite $f$ continue par morceaux, (ii) une
    hypothèse de domination $|f_n(t)|\leqslant\varphi(t)$ avec $\varphi$ intégrable INDÉPENDANTE de $n$, (iii)
    chaque $f_n$ continue par morceaux. Alors $\int f_n \to \int f$. Le point délicat est presque toujours de
    trouver la fonction dominante $\varphi$, souvent en majorant grossièrement un terme gênant.
---

Pour tout $n\in\mathbb{N}$, on pose $f_n(t) = \dfrac{1}{1+t^2+t^ne^{-t}}$ pour $t\in[0,+\infty[$.

1. Démontrer que $f_n$ est intégrable sur $[0,+\infty[$.

2. On pose $u_n = \displaystyle\int_0^{+\infty} f_n(t)\,dt$. Calculer $\lim_{n\to+\infty} u_n$.
