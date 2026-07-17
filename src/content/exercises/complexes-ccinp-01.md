---
level: 2
chapters:
  - id: complexes
    weight: 100
tags: [racines n-ièmes de l'unité, argument, équation complexe]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 84"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. Un argument d'un complexe non nul $z$ est un réel $\theta$ tel que $\frac{z}{|z|}=e^{i\theta}$.

  2. $z=0$ n'est pas solution. En écrivant $z=re^{i\theta}$ ($r>0$), $z^n=1 \iff r=1$ et $\theta \equiv
  \frac{2k\pi}{n}\ [2\pi]$. Les $n$ valeurs $e^{i2k\pi/n}$, $k \in \llbracket 0,n-1\rrbracket$, sont deux à deux
  distinctes ; comme elles sont toutes racines de $X^n-1$ qui en a au plus $n$, ce sont **toutes** les solutions :
  $S = \{e^{i2k\pi/n},\ k \in \llbracket 0,n-1\rrbracket\}$.

  3. $z=i$ n'est pas solution. $(z+i)^n=(z-i)^n \iff \left(\frac{z+i}{z-i}\right)^n=1 \iff \exists k \in
  \llbracket 0,n-1\rrbracket,\ \frac{z+i}{z-i}=e^{i2k\pi/n}$. Le cas $k=0$ est impossible ; pour
  $k \in \llbracket 1,n-1\rrbracket$, on résout et on trouve
  $$z = i\,\frac{e^{i2k\pi/n}+1}{e^{i2k\pi/n}-1} = \frac{\cos(k\pi/n)}{\sin(k\pi/n)},$$
  qui est bien réel (on peut aussi voir géométriquement que $|z+i|=|z-i|$ place $z$ sur la médiatrice de $[i,-i]$,
  c'est-à-dire sur $\mathbb R$).
method:
  title: "Méthode : équations du type (z+a)^n=(z-b)^n"
  content: >
    Ramener $(z+i)^n=(z-i)^n$ à $\left(\frac{z+i}{z-i}\right)^n=1$ transforme le problème en une équation de
    racines $n$-ièmes de l'unité sur le rapport $\frac{z+i}{z-i}$, qu'on résout ensuite en $z$ pour chaque racine
    (sauf celle qui redonne un dénominateur nul). L'argument géométrique de la médiatrice donne une alternative
    élégante pour justifier que les solutions sont réelles.
---

1. Donner la définition d'un argument d'un nombre complexe non nul (on ne demande ni l'interprétation
géométrique, ni la démonstration de l'existence d'un tel nombre).

2. Soit $n \in \mathbb N^*$. Donner, en justifiant, les solutions dans $\mathbb C$ de l'équation $z^n=1$ et
préciser leur nombre.

3. En déduire, pour $n \in \mathbb N^*$, les solutions dans $\mathbb C$ de l'équation $(z+i)^n=(z-i)^n$ et
démontrer que ce sont des nombres réels.
