---
level: 5
chapters:
  - id: suites
    weight: 100
  - id: algebre
    weight: 30
tags: [suite récurrente linéaire complexe, équation caractéristique]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 55"
banque: "CCINP"
classic: true
correction: |
  1. (a) La suite nulle appartient à $E$. Si $u,v\in E$ et $\lambda\in\mathbb C$, la suite $w=u+\lambda v$
  vérifie encore la relation de récurrence par linéarité : $w\in E$. Donc $E$ est un sous-espace vectoriel.
  (b) L'application $\varphi: E\to\mathbb C^2, u\mapsto(u_0,u_1)$ est linéaire bijective (une suite de $E$ est
  entièrement déterminée par ses deux premiers termes via la récurrence) : c'est un isomorphisme, donc
  $\dim E = \dim\mathbb C^2 = 2$.

  2. Équation caractéristique $(E): r^2-2ar-4(ia-1)=0$, discriminant réduit $\Delta'=a^2+4ia-4=(a+2i)^2$.
  - Si $a=-2i$ : racine double $r=-2i$, $u_n=(\alpha n+\beta)(-2i)^n$. Avec $u_0=1,u_1=1$ : $\beta=1$,
  $\alpha=-1-\frac i2$.
  - Si $a\neq-2i$ : racines distinctes $r_1=2(a+i), r_2=-2i$, $u_n=\alpha r_1^n+\beta r_2^n$. Avec $u_0=1,u_1=1$ :
  $\alpha=\frac{1+2i}{2a+4i}$, $\beta=\frac{2a+2i-1}{2a+4i}$.
method:
  title: "Méthode : espace des suites récurrentes linéaires d'ordre 2, dimension via isomorphisme"
  content: >
    L'ensemble des suites vérifiant une récurrence linéaire d'ordre 2 fixée est un espace vectoriel de dimension
    2 (l'application "suite ↦ ses deux premiers termes" est un isomorphisme vers $\mathbb C^2$). Pour trouver le
    terme général, l'équation caractéristique associée donne deux racines distinctes (base $(r_1^n, r_2^n)$) ou
    une racine double (base $(r^n, nr^n)$) — même méthode qu'en réel, avec des racines potentiellement complexes.
---

Soit $a\in\mathbb C$. On note $E$ l'ensemble des suites complexes telles que $\forall n\in\mathbb N, u_{n+2} = 2au_{n+1}+4(ia-1)u_n$.

1. a) Prouver que $E$ est un sous-espace vectoriel de l'ensemble des suites complexes.
   b) Déterminer, en le justifiant, la dimension de $E$.

2. On considère la suite de $E$ définie par $u_0=1, u_1=1$. Exprimer, pour tout $n$, $u_n$ en fonction de $n$ (discuter suivant les valeurs de $a$).
