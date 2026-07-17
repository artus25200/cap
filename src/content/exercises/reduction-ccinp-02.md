---
level: 4
chapters:
  - id: reduction
    weight: 100
tags: [polynôme annulateur, lemme des noyaux, théorème du rang]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 62"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $f^2-f-2\mathrm{Id}=0 \iff f\circ(f-\mathrm{Id})=(f-\mathrm{Id})\circ f=2\mathrm{Id} \iff f\circ(\frac12f-
  \frac12\mathrm{Id}) = \mathrm{Id}$. Donc $f$ inversible, $f^{-1}=\frac12f-\frac12\mathrm{Id}$.

  2. (a) $P=X^2-X-2=(X+1)(X-2)$, facteurs premiers entre eux. $P$ annulateur de $f$ donc $\ker P(f)=E$. Par le
  lemme des noyaux, $E=\ker(f+\mathrm{Id})\oplus\ker(f-2\mathrm{Id})$.
  (b) Analyse : si $x=a+b$ avec $a\in\ker(f+\mathrm{Id}), b\in\ker(f-2\mathrm{Id})$, alors $f(x)=-a+2b$, donc
  $a=\frac{2x-f(x)}3, b=\frac{x+f(x)}3$. Synthèse : ces formules vérifient bien $x=a+b$, et en utilisant
  $f^2=f+2\mathrm{Id}$, $(f+\mathrm{Id})(a)=0$ et $(f-2\mathrm{Id})(b)=0$.

  3. $\mathrm{Im}(f+\mathrm{Id})\subset\ker(f-2\mathrm{Id})$ : pour $y=f(x)+x$, $(f-2\mathrm{Id})(y) =
  f^2(x)-f(x)-2x=0$. Par 2., $n=\dim\ker(f+\mathrm{Id})+\dim\ker(f-2\mathrm{Id})$, et par le théorème du rang,
  $n=\dim\ker(f+\mathrm{Id})+\dim\mathrm{Im}(f+\mathrm{Id})$ : les dimensions coïncident, d'où l'égalité des
  sous-espaces (inclusion + même dimension).
method:
  title: "Méthode : lemme des noyaux à partir d'un polynôme annulateur"
  content: >
    Si $P(f)=0$ avec $P=P_1P_2$, $P_1\wedge P_2=1$, le lemme des noyaux donne directement $\ker P(f) = \ker
    P_1(f)\oplus\ker P_2(f)$ — ici $\ker P(f)=E$ car $P$ est annulateur, donnant une décomposition de $E$ tout
    entier sans calcul explicite. Savoir aussi le refaire "à la main" (analyse-synthèse) est exigé à l'oral.
---

Soit $E$ un espace vectoriel sur $\mathbb R$ ou $\mathbb C$, $f\in\mathcal L(E)$ tel que $f^2-f-2\mathrm{Id}=0$.

1. Prouver que $f$ est bijectif et exprimer $f^{-1}$ en fonction de $f$.

2. Prouver que $E=\ker(f+\mathrm{Id})\oplus\ker(f-2\mathrm{Id})$ : a) via le lemme des noyaux, b) sans le lemme des noyaux.

3. On suppose $E$ de dimension finie. Prouver que $\mathrm{Im}(f+\mathrm{Id}) = \ker(f-2\mathrm{Id})$.
