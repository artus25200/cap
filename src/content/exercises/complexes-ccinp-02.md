---
level: 4
chapters:
  - id: complexes
    weight: 100
tags: [racines n-ièmes de l'unité, somme trigonométrique, télescopage]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 89"
banque: "CCINP - Banque orale MP/MPI"
classic: false
correction: |
  1. En posant $Z = z^k-1 = e^{i2k\pi/n}-1 = e^{ik\pi/n}\left(e^{ik\pi/n}-e^{-ik\pi/n}\right) =
  2i\sin(k\pi/n)e^{ik\pi/n}$, soit $Z = 2\sin(k\pi/n)e^{i(k\pi/n+\pi/2)}$. Pour $k \in \llbracket 1,n-1\rrbracket$,
  $0 < k\pi/n < \pi$ donc $\sin(k\pi/n)>0$ : le module de $Z$ est $2\sin(k\pi/n)$ et un argument est
  $\frac{k\pi}{n}+\frac\pi2$.

  2. Le terme $k=0$ est nul, donc $S = 2\sum_{k=0}^{n-1}\sin(k\pi/n)$, partie imaginaire de
  $T = 2\sum_{k=0}^{n-1}e^{ik\pi/n}$. Comme $e^{i\pi/n}\neq1$, somme géométrique :
  $T = 2\dfrac{1-e^{i\pi}}{1-e^{i\pi/n}} = \dfrac{4}{1-e^{i\pi/n}}$. En factorisant
  $1-e^{i\pi/n} = -2ie^{i\pi/2n}\sin(\pi/2n)$, on obtient $T = \dfrac{2}{\sin(\pi/2n)}\,ie^{-i\pi/2n}$. En prenant
  la partie imaginaire (avec $\cos(\pi/2n)\neq0$ pour $n\geqslant2$), on trouve $S = \dfrac{2}{\tan(\pi/2n)}$.
method:
  title: "Méthode : sommer une expression trigonométrique via une somme géométrique complexe"
  content: >
    Pour sommer $\sum \sin(k\theta)$ ou $\sum\cos(k\theta)$, on la reconnaît comme partie imaginaire (ou réelle)
    d'une somme géométrique complexe $\sum e^{ik\theta}$, qu'on calcule explicitement, puis on factorise le
    dénominateur $1-e^{i\theta}$ sous forme $-2ie^{i\theta/2}\sin(\theta/2)$ pour faire apparaître clairement
    module et argument avant d'extraire la partie souhaitée.
---

Soit $n \in \mathbb N$, $n \geqslant 2$. On pose $z = e^{i2\pi/n}$.

1. On suppose $k \in \llbracket 1,n-1\rrbracket$. Déterminer le module et un argument du complexe $z^k-1$.

2. On pose $S = \sum_{k=0}^{n-1}|z^k-1|$. Montrer que $S = \dfrac{2}{\tan(\pi/2n)}$.
