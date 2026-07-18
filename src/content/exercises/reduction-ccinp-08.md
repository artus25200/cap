---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: algebre
    weight: 30
tags: [rang, diagonalisabilité, discussion selon un paramètre]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 72"
banque: "CCINP"
classic: true
correction: |
  1. Si $v=0_E$, $f$ est nulle et $\mathrm{rg}\,f = 0$. Si $v \neq 0$, toutes les colonnes de la matrice de $f$ sont
  égales à un même vecteur non nul, donc $\mathrm{rg}\,f = 1$.

  2. Si $v=0_E$, $f$ est diagonalisable (nulle). Si $v \neq 0$, $\mathrm{rg}\,f=1$ donc $\dim \mathrm{Ker}\,f = n-1$ :
  $0$ est valeur propre de multiplicité $\geqslant n-1$ dans $\chi_f$, donc $\chi_f = X^{n-1}(X-\lambda)$ pour un
  certain $\lambda$, avec $\lambda = \mathrm{tr}(f)$. En écrivant $v = x_1e_1+\dots+x_ne_n$, on trouve
  $\mathrm{tr}(f) = x_1+\dots+x_n$, donc $\lambda = x_1+\dots+x_n$.

  - Si $x_1+\dots+x_n \neq 0$ : $\lambda$ est valeur propre simple non nulle, $\dim E_0 + \dim E_\lambda = n$, donc
  $f$ est diagonalisable.
  - Si $x_1+\dots+x_n = 0$ : $\chi_f = X^n$ mais $\dim E_0 = n-1 < n$, donc $f$ n'est **pas** diagonalisable.

  On remarque enfin que $f(v) = (x_1+\dots+x_n)v$ : la somme des coordonnées de $v$ contrôle exactement si $v$ est
  vecteur propre non nul (cas diagonalisable) ou si $v \in \mathrm{Ker}\,f$ (cas non diagonalisable).
method:
  title: "Méthode : diagonalisabilité d'un endomorphisme de rang 1"
  content: >
    Pour un endomorphisme de rang $1$, $\chi_f = X^{n-1}(X-\mathrm{tr}(f))$. Deux cas : si $\mathrm{tr}(f) \neq 0$,
    $f$ est diagonalisable (deux valeurs propres, sous-espaces propres supplémentaires) ; si $\mathrm{tr}(f)=0$,
    $\chi_f = X^n$ mais $\mathrm{rg}\,f=1$ implique $\dim \mathrm{Ker}\,f = n-1 \neq n$, donc $f$ n'est pas
    diagonalisable — sauf si $f=0$.
---

Soit $n$ un entier naturel non nul. Soit $f$ un endomorphisme d'un espace vectoriel $E$ de dimension $n$, et soit
$e=(e_1,\dots,e_n)$ une base de $E$. On suppose que $f(e_1)=f(e_2)=\dots=f(e_n)=v$, où $v$ est un vecteur donné
de $E$.

1. Donner le rang de $f$.

2. $f$ est-il diagonalisable ? (discuter en fonction du vecteur $v$)
