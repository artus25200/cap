---
level: 4
chapters:
  - id: integrales-generalisees
    weight: 100
  - id: series-numeriques
    weight: 30
tags: [convergence dominée, monotonie de suite d'intégrales, critère spécial des séries alternées]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 26"
banque: "CCINP"
classic: true
correction: |
  1. $f_n(t) = \frac{1}{(1+t^2)^n}$ continue, $|f_n(t)| \underset{+\infty}{\sim} \frac{1}{t^{2n}}$ intégrable sur
  $[1,+\infty[$ pour $n\geqslant1$ : $I_n$ est bien définie.

  2. (a) $\forall t, \frac{1}{(1+t^2)^{n+1}} \leqslant \frac{1}{(1+t^2)^n}$ : en intégrant, $(I_n)$ est décroissante.
  (b) $(I_n)$ décroissante minorée par 0 donc convergente. $(f_n)$ converge simplement vers $f=\mathbb{1}_{\{0\}}$
  (nulle sauf en 0), dominée par $\varphi(t)=\frac{1}{1+t^2}$ intégrable : par convergence dominée, $I_n \to \int_0^{+\infty} f = 0$.

  3. $(I_n)$ est positive, décroissante, de limite nulle : par le critère spécial des séries alternées, $\sum (-1)^n I_n$ converge.
method:
  title: "Méthode : combiner convergence dominée et CSSA"
  content: >
    Beaucoup d'exercices enchaînent deux outils : la convergence dominée pour déterminer le comportement d'une
    suite d'intégrales $(I_n)$ (souvent sa limite, parfois sa monotonie via comparaison directe des intégrandes),
    puis le critère spécial des séries alternées pour étudier $\sum (-1)^n I_n$ une fois positivité, décroissance
    et limite nulle établies.
---

Pour tout entier $n\geqslant1$, on pose $I_n = \displaystyle\int_0^{+\infty} \dfrac{1}{(1+t^2)^n}\,dt$.

1. Justifier que $I_n$ est bien définie.

2. a) Étudier la monotonie de $(I_n)$.
   b) Déterminer $\lim_{n\to+\infty} I_n$.

3. La série $\sum (-1)^n I_n$ est-elle convergente ?
