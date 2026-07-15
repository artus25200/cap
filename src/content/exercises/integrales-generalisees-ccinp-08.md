---
level: 5
chapters:
  - id: integrales-generalisees
    weight: 100
tags: [intégrale à paramètre, continuité, convergence dominée à paramètre continu, équivalent]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 50"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $f(x,t)=\frac{e^{-2t}}{x+t}$ continue en $t$ pour $x$ fixé, continue en $x$ pour $t$ fixé. Sur tout segment
  $[a,b]\subset\,]0,+\infty[$ : $|f(x,t)|\leqslant\frac1a e^{-2t}=:\varphi(t)$, intégrable sur $[0,+\infty[$
  (indépendante de $x$). Par le théorème de continuité des intégrales à paramètre, $F$ est définie et continue
  sur $]0,+\infty[$.

  2. $xF(x) = \int_0^{+\infty} \frac{x}{x+t}e^{-2t}\,dt = \int_0^{+\infty} h_x(t)\,dt$ avec $h_x(t)\to e^{-2t}$
  quand $x\to+\infty$, et $|h_x(t)|\leqslant e^{-2t}$ (dominée, indépendante de $x$). Par convergence dominée
  généralisée (paramètre continu), $\lim_{x\to+\infty} xF(x) = \int_0^{+\infty} e^{-2t}\,dt = \frac12$.

  3. D'après 2., $F(x) \underset{+\infty}{\sim} \dfrac{1}{2x}$.
method:
  title: "Méthode : continuité et limite d'une intégrale à paramètre continu"
  content: >
    Pour la continuité en $x$, une domination LOCALE (sur tout segment $[a,b]$) suffit. Pour une limite quand
    $x\to+\infty$, le théorème de convergence dominée s'étend au cas d'un paramètre continu : convergence
    simple de $h_x(t)$ vers une limite intégrable, dominée uniformément en $x$, donne la limite de l'intégrale
    — exactement le même principe que pour une suite, avec $x\to+\infty$ à la place de $n\to+\infty$.
---

On pose $F(x) = \displaystyle\int_0^{+\infty} \dfrac{e^{-2t}}{x+t}\,dt$.

1. Prouver que $F$ est définie et continue sur $]0,+\infty[$.

2. Prouver que $x\mapsto xF(x)$ admet une limite en $+\infty$ et la déterminer.

3. Déterminer un équivalent de $F(x)$ au voisinage de $+\infty$.
