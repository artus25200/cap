---
level: 4
chapters:
  - id: arithmetique
    weight: 100
tags: [Bézout, nombre premier, coefficients binomiaux, petit théorème de Fermat]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 86"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, écris les deux relations de Bézout séparément puis multiplie-les membre à membre : le produit se réarrange en une combinaison de $p$ et de $ab$."
  - "Pour la question 2.(a), pars de l'identité $\\binom pk k! = p(p-1)\\cdots(p-k+1)$, puis utilise le lemme de Gauss avec le résultat de la question 1 pour que la divisibilité par $p$ passe du produit $\\binom pk k!$ à $\\binom pk$ seul."
  - "Pour la question 2.(b), procède par récurrence et développe $(n+1)^p$ avec la formule du binôme : tous les termes sauf $n^p$ et $1$ contiennent un $\\binom pk$ divisible par $p$."
  - "Pour la question 2.(c), factorise $n^p-n$ sous la forme $n(n^{p-1}-1)$ et applique le lemme de Gauss."
correction: |
  1. Par Bézout, $\exists (u_1,v_1),(u_2,v_2) \in \mathbb Z^2$ avec $u_1p+v_1a=1$ et $u_2p+v_2b=1$. En
  multipliant : $(u_1u_2p+u_1v_2b+u_2v_1a)p + (v_1v_2)(ab)=1$, donc par Bézout $p \wedge (ab)=1$.

  2. (a) Pour $k \in \llbracket 1,p-1\rrbracket$, $\binom pk k! = p(p-1)\cdots(p-k+1)$, donc $p$ divise
  $\binom pk k!$. Comme $p \wedge i=1$ pour $i \in \llbracket 1,k\rrbracket$ ($p$ premier), $p\wedge k!=1$
  (question 1), donc par le lemme de Gauss $p$ divise $\binom pk$.

  (b) Récurrence sur $n$ : vrai pour $n=0,1$. Si $n^p \equiv n\ [p]$, la formule du binôme donne
  $(n+1)^p = n^p + \sum_{k=1}^{p-1}\binom pk n^k + 1$, et chaque terme de la somme est divisible par $p$
  d'après (a), donc $(n+1)^p \equiv n+1\ [p]$.

  (c) Si $p \nmid n$, $p$ premier avec $n$ donc, par (b), $p | n^p-n = n(n^{p-1}-1)$ et le lemme de Gauss donne
  $p | n^{p-1}-1$, i.e. $n^{p-1} \equiv 1\ [p]$ (petit théorème de Fermat).
method:
  title: "Méthode : établir le petit théorème de Fermat par récurrence"
  content: >
    La preuve classique du petit théorème de Fermat combine trois ingrédients : la divisibilité de $\binom pk$ par
    $p$ premier pour $1 \leqslant k \leqslant p-1$ (via $\binom pk k! = p(p-1)\cdots(p-k+1)$ et le lemme de
    Gauss), une récurrence utilisant la formule du binôme pour obtenir $n^p \equiv n\ [p]$, puis le passage à
    $n^{p-1}\equiv1\ [p]$ quand $p \nmid n$ via le lemme de Gauss appliqué à $n(n^{p-1}-1)$.
---

1. Soit $(a,b,p) \in \mathbb Z^3$. Prouver que : si $p \wedge a=1$ et $p \wedge b=1$, alors $p \wedge (ab)=1$.

2. Soit $p$ un nombre premier.

(a) Prouver que $\forall k \in \llbracket 1,p-1\rrbracket$, $p$ divise $\binom pk k!$ puis en déduire que $p$
divise $\binom pk$.

(b) Prouver que $\forall n \in \mathbb N,\ n^p \equiv n\ [p]$. Indication : procéder par récurrence.

(c) En déduire, pour tout entier naturel $n$, que : $p$ ne divise pas $n \implies n^{p-1} \equiv 1\ [p]$.
