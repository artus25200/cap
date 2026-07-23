---
level: 5
chapters:
  - id: calcul-differentiel
    weight: 100
tags: [différentiabilité d'une forme bilinéaire, dimension finie]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 58"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 2.(a), décompose $x$ et $y$ dans la base $e$ puis utilise la bilinéarité de $B$ pour développer $B(x,y)$ en somme de termes $x_iy_jB(e_i,e_j)$."
  - "Pour la question 2.(b), développe $B(u_0+u,v_0+v)$ par bilinéarité : le terme croisé $B(u,v)$ est le reste à majorer, en utilisant l'inégalité de la question 2.(a)."
correction: |
  1. $f$ différentiable en $a$ $\iff \exists L$ linéaire continue telle que, au voisinage de 0,
  $f(a+h)=f(a)+L(h)+o(\|h\|)$ ; alors $df(a)=L$. En dimension finie, toute application linéaire est
  automatiquement continue.

  2. (a) En décomposant $x,y$ dans la base $e$ et par bilinéarité, $B(x,y)=\sum_{i,j}x_iy_jB(e_i,e_j)$, donc
  $|B(x,y)| \leqslant \left(\sum_{i,j}|B(e_i,e_j)|\right) \|x\|_\infty\|y\|_\infty =: C\|x\|_\infty\|y\|_\infty$.
  (b) Par bilinéarité, $B(u_0+u,v_0+v) = B(u_0,v_0) + \underbrace{B(u_0,v)+B(u,v_0)}_{L(u,v)} + B(u,v)$. $L$ est
  linéaire (bilinéarité de $B$), donc continue (dimension finie). D'après 2.(a),
  $|B(u,v)|\leqslant C\|(u,v)\|^2 = o(\|(u,v)\|)$. Donc $B$ est différentiable en $(u_0,v_0)$ avec $dB(u_0,v_0)=L$.
method:
  title: "Méthode : différentiabilité d'une application bilinéaire"
  content: >
    Toute application bilinéaire continue $B$ est différentiable, avec $dB(u_0,v_0)(u,v) = B(u_0,v)+B(u,v_0)$ —
    résultat à retenir directement, la preuve reposant sur le développement de $B(u_0+u,v_0+v)$ par bilinéarité
    et sur le fait que le terme croisé $B(u,v)$ est un $o(\|(u,v)\|)$ car majoré par $C\|(u,v)\|^2$.
---

1. Soient $E,F$ deux $\mathbb R$-espaces vectoriels normés de dimension finie, $a\in E$, $f:E\to F$. Donner la définition de « $f$ différentiable en $a$ ».

2. Soit $E$ de dimension finie $n$, de base $e=(e_1,\dots,e_n)$, muni de $\|x\|_\infty = \max_i|x_i|$, et $E\times E$ muni de $\|(x,y)\| = \max(\|x\|_\infty,\|y\|_\infty)$. Soit $B:E\times E\to\mathbb R$ bilinéaire.
   a) Prouver qu'il existe $C\geqslant0$ tel que $\forall(x,y), |B(x,y)|\leqslant C\|x\|_\infty\|y\|_\infty$.
   b) Montrer que $B$ est différentiable sur $E\times E$ et déterminer sa différentielle en tout $(u_0,v_0)$.
