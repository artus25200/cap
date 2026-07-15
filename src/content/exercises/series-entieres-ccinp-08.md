---
level: 4
chapters:
  - id: series-entieres
    weight: 100
tags: [rayon infini, recollement de développements, prolongement C-infini]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 24"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $u_n = \frac{x^n}{(2n)!}$ : $\frac{u_{n+1}}{u_n} = \frac{|x|}{(2n+2)(2n+1)} \to 0$ pour tout $x$, donc par
  d'Alembert $R=+\infty$.

  2. $\mathrm{ch}(x) = \sum_{n=0}^{+\infty} \frac{x^{2n}}{(2n)!}$, rayon $+\infty$.

  3. (a) Pour $x\geqslant0$, poser $x=t^2$ : $S(x) = \sum \frac{t^{2n}}{(2n)!} = \mathrm{ch}(t) = \mathrm{ch}(\sqrt x)$.
  Pour $x<0$, poser $x=-t^2$ : $S(x) = \sum \frac{(-1)^n t^{2n}}{(2n)!} = \cos(t) = \cos(\sqrt{-x})$.
  (b) $f$ coïncide exactement avec $S$ sur $\mathbb{R}$ (mêmes formules sur $\mathbb{R}_+^*$, $\mathbb{R}_-^*$ et
  en 0). Or $S$ est développable en série entière à l'origine de rayon $+\infty$, donc $S$ (donc $f$) est $C^\infty$
  sur $\mathbb{R}$.
method:
  title: "Méthode : recoller deux fonctions via un unique développement en série entière"
  content: >
    Pour prouver qu'une fonction définie par morceaux (formule différente selon le signe de $x$) est $C^\infty$
    au point de recollement, chercher si elle coïncide avec une unique série entière de rayon infini — la
    régularité $C^\infty$ vient alors gratuitement, sans étudier de limites de dérivées successives.
---

1. Déterminer le rayon de convergence de la série entière $\displaystyle\sum \dfrac{x^n}{(2n)!}$. On note $S(x)$ sa somme.

2. Rappeler (sans démonstration) le développement en série entière en 0 de $\mathrm{ch}$, et son rayon de convergence.

3. a) Déterminer $S(x)$ pour tout $x\in\mathbb{R}$.
   b) On considère $f$ définie par $f(0)=1$, $f(x)=\mathrm{ch}(\sqrt x)$ si $x>0$, $f(x)=\cos(\sqrt{-x})$ si $x<0$. Démontrer que $f$ est de classe $C^\infty$ sur $\mathbb{R}$.
