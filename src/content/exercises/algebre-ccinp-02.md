---
level: 4
chapters:
  - id: algebre
    weight: 100
  - id: reduction
    weight: 30
tags: [noyau, image, théorème du rang, itérées d'un endomorphisme]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 64"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, l'inclusion $\\mathrm{Im}\\,f^2\\subset\\mathrm{Im}\\,f$ est immédiate ; pour l'autre sens, utilise la décomposition en somme directe pour décomposer un antécédent $x$ tel que $y=f(x)$."
  - "Pour la question 2.(a), passe par les dimensions : une inclusion d'ensembles devient une égalité de dimensions via le théorème du rang, ce qui est plus facile à manipuler qu'une égalité d'ensembles directement."
  - "Pour la question 2.(b), si $x\\in\\mathrm{Im}\\,f\\cap\\ker f$, écris $x=f(a)$ et exploite $f(x)=0$ pour montrer que $a\\in\\ker f^2$, puis utilise le résultat de la question 2.(a)."
correction: |
  1. $\mathrm{Im}\,f^2\subset\mathrm{Im}\,f$ toujours. Pour $y=f(x)\in\mathrm{Im}\,f$, écrire (via la somme
  directe) $x=f(a)+b$ avec $b\in\ker f$ : $y=f^2(a)\in\mathrm{Im}\,f^2$. D'où l'égalité.

  2. (a) $\mathrm{Im}\,f^2\subset\mathrm{Im}\,f$ et $\ker f\subset\ker f^2$ toujours, donc égalité des images
  $\iff$ égalité des rangs $\iff$ (théorème du rang) égalité des dimensions des noyaux $\iff$ égalité des noyaux.
  (b) Si $x\in\mathrm{Im}\,f\cap\ker f$ : $x=f(a)$, $f(x)=0$, donc $f^2(a)=0$, donc $a\in\ker f^2=\ker f$
  (hypothèse + 2.(a)), donc $x=f(a)=0$. D'où $\mathrm{Im}\,f\cap\ker f=\{0\}$, et avec le théorème du rang,
  $E=\mathrm{Im}\,f\oplus\ker f$.
method:
  title: "Méthode : équivalence Im f = Im f² ⟺ E = Im f ⊕ ker f"
  content: >
    Ce résultat classique caractérise les endomorphismes pour lesquels l'image et le noyau sont en somme
    directe (pas toujours vrai !) via une condition testable sur $f^2$. Le passage par les dimensions
    (théorème du rang) transforme des égalités d'ensembles en égalités de dimensions, plus faciles à manipuler.
---

Soit $f$ un endomorphisme d'un espace vectoriel $E$ de dimension finie $n$.

1. Démontrer que $E=\mathrm{Im}\,f\oplus\ker f \implies \mathrm{Im}\,f=\mathrm{Im}\,f^2$.

2. a) Démontrer que $\mathrm{Im}\,f=\mathrm{Im}\,f^2 \iff \ker f=\ker f^2$.
   b) Démontrer que $\mathrm{Im}\,f=\mathrm{Im}\,f^2 \implies E=\mathrm{Im}\,f\oplus\ker f$.
