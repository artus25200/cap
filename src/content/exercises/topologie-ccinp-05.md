---
level: 4
chapters:
  - id: topologie
    weight: 100
tags: [applications linéaires continues, norme d'opérateur]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 36"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $P_1\Rightarrow P_2$ trivial. $P_2\Rightarrow P_3$ : par continuité en $0_E$ avec $\varepsilon=1$, il existe
  $\alpha>0$ tel que $\|x\|_E\leqslant\alpha\Rightarrow\|f(x)\|_F\leqslant1$ ; pour $x\neq0_E$, en posant
  $y=\frac{\alpha}{\|x\|_E}x$, $\|f(y)\|_F\leqslant1$ donne par linéarité $\|f(x)\|_F\leqslant\frac1\alpha\|x\|_E$.
  $P_3\Rightarrow P_1$ : $f$ est alors lipschitzienne ($\|f(y)-f(x)\|=\|f(y-x)\|\leqslant k\|y-x\|$), donc continue.

  2. $\varphi$ est linéaire par linéarité de l'intégrale. $|\varphi(f)| = \left|\int_0^1 f\right| \leqslant
  \int_0^1|f| \leqslant \|f\|_\infty$ (propriété $P_3$ avec $k=1$), donc $\varphi$ est continue.
method:
  title: "Méthode : équivalence des trois caractérisations de continuité d'une application linéaire"
  content: >
    Pour une application linéaire, continuité $\iff$ continuité en 0 $\iff$ existence de $k>0$ tel que
    $\|f(x)\|\leqslant k\|x\|$. En pratique, c'est toujours la troisième formulation qu'on cherche à établir
    directement — elle donne aussi la norme d'opérateur $|||f|||$.
---

$E,F$ deux espaces vectoriels normés réels.

1. Démontrer que pour $f$ linéaire de $E$ dans $F$, les propriétés suivantes sont équivalentes : $P_1$ : $f$ continue sur $E$. $P_2$ : $f$ continue en $0_E$. $P_3$ : $\exists k>0, \forall x\in E, \|f(x)\|_F \leqslant k\|x\|_E$.

2. Soit $E=\mathcal C([0,1],\mathbb R)$ muni de $\|f\|_\infty=\sup|f|$, et $\varphi(f)=\int_0^1 f(t)\,dt$. Démontrer que $\varphi$ est linéaire et continue.
