---
level: 5
chapters:
  - id: integrales-generalisees
    weight: 100
tags: [intégrale à paramètre, fonction Gamma, dérivation sous le signe intégrale]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 29"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $t\mapsto e^{-t}t^{x-1}$ continue positive sur $]0,+\infty[$. En 0 : $\sim t^{x-1}$, intégrable sur $]0,1]$
  (Riemann, $1-x<1$ car $x>0$). En $+\infty$ : $t^2\cdot e^{-t}t^{x-1}\to0$ donc $o(1/t^2)$, intégrable sur
  $[1,+\infty[$. Donc intégrable sur $]0,+\infty[$.

  2. Par IPP (termes de bord nuls par croissances comparées) : $\Gamma(x+1) = [-e^{-t}t^x]_0^{+\infty} +
  x\int_0^{+\infty} e^{-t}t^{x-1}dt = x\,\Gamma(x)$.

  3. On vérifie les hypothèses du théorème de dérivation sous le signe intégrale (domination locale sur tout
  $[a,b]\subset\,]0,+\infty[$ par une fonction $\varphi$ intégrable indépendante de $x$, construite en séparant
  $]0,1[$ et $[1,+\infty[$) : $\Gamma$ est $C^1$ sur $]0,+\infty[$ avec $\Gamma'(x) = \int_0^{+\infty} (\ln
  t)e^{-t}t^{x-1}\,dt$.
method:
  title: "Méthode : théorème de dérivation sous le signe intégrale (paramètre continu)"
  content: >
    Analogue du théorème de dérivation terme à terme, mais pour une intégrale à paramètre $f(x)=\int_I u(x,t)dt$ :
    il faut (i) $t\mapsto u(x,t)$ intégrable pour tout $x$, (ii) $\partial u/\partial x$ existe et est continue
    par morceaux en $t$ / continue en $x$, (iii) domination LOCALE de $|\partial u/\partial x|$ par une fonction
    intégrable indépendante de $x$ sur tout segment $[a,b]$ — pas besoin de domination globale sur tout le domaine.
---

On pose $f(x,t) = e^{-t}t^{x-1}$ pour $x,t \in\,]0,+\infty[$.

1. Démontrer que $t \mapsto f(x,t)$ est intégrable sur $]0,+\infty[$ pour tout $x>0$. On pose alors $\Gamma(x) = \int_0^{+\infty} e^{-t}t^{x-1}\,dt$.

2. Exprimer $\Gamma(x+1)$ en fonction de $\Gamma(x)$.

3. Démontrer que $\Gamma$ est de classe $C^1$ sur $]0,+\infty[$ et exprimer $\Gamma'(x)$ sous forme d'intégrale.
