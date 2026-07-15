---
level: 3
chapters:
  - id: suites
    weight: 100
tags: [suite récurrente, point fixe, équation fonctionnelle]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 43"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. (a) $g(x)=\mathrm{Arctan}(x)-x$ vérifie $g'(x)=\frac{-x^2}{1+x^2}<0$ pour $x\neq0$ : $g$ strictement
  décroissante, $g(0)=0$. Donc $g>0$ sur $\mathbb R_-^*$, $g<0$ sur $\mathbb R_+^*$. Selon le signe de
  $x_0$, $(u_n)$ est strictement décroissante ($x_0>0$), croissante ($x_0<0$), ou constante ($x_0=0$).
  (b) Le seul point fixe de $\mathrm{Arctan}$ est 0. Si $x_0>0$ : $(u_n)$ décroissante, minorée par 0 (stabilité
  de $\mathbb R_+^*$), donc converge vers l'unique point fixe 0. Symétriquement si $x_0<0$. Donc $(u_n)\to0$
  pour tout $x_0$.

  2. Pour $h$ continue telle que $h=h\circ\mathrm{Arctan}$ : en itérant, $h(x)=h(u_n)$ pour tout $n$, et par
  continuité et convergence de $(u_n)$ vers 0, $h(x)=h(0)$. Donc $h$ est constante — et réciproquement toute
  constante convient.
method:
  title: "Méthode : suite récurrente u_(n+1)=f(u_n), étude par le signe de f(x)-x"
  content: >
    Le sens de variation d'une suite récurrente $u_{n+1}=f(u_n)$ dépend du signe de $f(u_0)-u_0$, qui se
    propage par récurrence si $f$ est croissante. Étudier $g(x)=f(x)-x$ donne directement ce signe. Une fois
    la monotonie et un intervalle stable établis, le théorème de la limite monotone conclut, la limite étant
    nécessairement un point fixe de $f$.
---

On définit $(u_n)$ par $u_0=x_0\in\mathbb R$ et $u_{n+1} = \mathrm{Arctan}(u_n)$.

1. a) Démontrer que $(u_n)$ est monotone et déterminer son sens de variation selon $x_0$.
   b) Montrer que $(u_n)$ converge et déterminer sa limite.

2. Déterminer l'ensemble des fonctions $h$ continues sur $\mathbb R$ telles que $\forall x, h(x) = h(\mathrm{Arctan}(x))$.
