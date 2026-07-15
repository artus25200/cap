---
level: 3
chapters:
  - id: topologie
    weight: 100
tags: [caractérisation séquentielle de la continuité, densité]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 35"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. ($P_1\Rightarrow P_2$) Si $f$ continue en $a$ et $x_n\to a$ : pour $\varepsilon>0$, $\exists\alpha>0$ tel que
  $\|x-a\|\leqslant\alpha\Rightarrow\|f(x)-f(a)\|\leqslant\varepsilon$ ; comme $x_n\to a$, à partir d'un rang
  $\|x_n-a\|\leqslant\alpha$, donc $\|f(x_n)-f(a)\|\leqslant\varepsilon$ : $f(x_n)\to f(a)$.
  ($P_2\Rightarrow P_1$) Par contraposée : si $f$ non continue en $a$, $\exists\varepsilon>0$ tel que
  $\forall\alpha>0,\exists x, \|x-a\|\leqslant\alpha$ et $\|f(x)-f(a)\|>\varepsilon$. En prenant
  $\alpha=1/n$, on construit $(x_n)\to a$ avec $\|f(x_n)-f(a)\|>\varepsilon$ constamment : $f(x_n)\not\to f(a)$,
  contredit $P_2$.

  2. Soit $x\in E$. Par densité de $A$, $\exists (x_n)\subset A, x_n\to x$. Alors $f(x_n)=g(x_n)$ pour tout $n$,
  et en passant à la limite (continuité de $f,g$), $f(x)=g(x)$.
method:
  title: "Méthode : caractérisation séquentielle de la continuité"
  content: >
    $f$ continue en $a$ $\iff$ pour toute suite $x_n\to a$, $f(x_n)\to f(a)$. Très utile pour prouver qu'une
    fonction n'est PAS continue (exhiber une suite qui met en défaut $P_2$), et ici pour prolonger une égalité
    de fonctions continues d'une partie dense à l'espace entier.
---

Soient $E,F$ deux espaces vectoriels normés, $f:E\to F$, $a\in E$. On considère : $P_1$ : $f$ continue en $a$. $P_2$ : pour toute suite $(x_n)\to a$, $f(x_n)\to f(a)$.

1. Prouver que $P_1$ et $P_2$ sont équivalentes.

2. Soit $A$ dense dans $E$, $f,g$ deux applications continues de $E$ dans $F$. Démontrer que si $f=g$ sur $A$, alors $f=g$.
