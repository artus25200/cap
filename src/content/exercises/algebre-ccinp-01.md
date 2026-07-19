---
level: 3
chapters:
  - id: algebre
    weight: 100
  - id: matrices
    weight: 50
tags: [noyau, image, somme directe]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 60"
banque: "CCINP"
classic: true
correction: |
  1. $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\ker f \iff a=-2c, b=-2d$, donc $\ker f = \mathrm{Vect}(M_1,M_2)$ avec $M_1=\begin{pmatrix}-2&0\\1&0\end{pmatrix}$, $M_2=\begin{pmatrix}0&-2\\0&1\end{pmatrix}$,
  famille libre : base de $\ker f$.

  2. $\ker f\neq\{0\}$ donc $f$ non injectif, donc non surjectif ($\dim M_2(\mathbb R)$ fini).

  3. Formule du rang : $\mathrm{rg}\,f=2$. $(f(E_{1,1}),f(E_{2,2}))$ libre, donc base de $\mathrm{Im}\,f$.

  4. $\dim M_2(\mathbb R)=\dim\ker f+\dim\mathrm{Im}\,f$ (1). Pour $M\in\ker f\cap\mathrm{Im}\,f$, écrire $M$
  dans les deux bases donne un système linéaire dont l'unique solution est nulle : $\ker f\cap\mathrm{Im}\,f=\{0\}$
  (2). D'après (1) et (2), $M_2(\mathbb R)=\ker f\oplus\mathrm{Im}\,f$.
method:
  title: "Méthode : somme directe via dimension + intersection nulle"
  content: >
    Pour prouver $E=F\oplus G$ : établir $\dim E=\dim F+\dim G$ (souvent via le théorème du rang), puis
    $F\cap G=\{0\}$ — les deux ensemble donnent la somme directe sans avoir à vérifier la génération de $E$
    séparément.
---

Soit $A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$ et $f$ l'endomorphisme de $M_2(\mathbb R)$ défini par $f(M)=AM$.

1. Déterminer une base de $\ker f$.

2. $f$ est-il surjectif ?

3. Déterminer une base de $\mathrm{Im}\,f$.

4. A-t-on $M_2(\mathbb R) = \ker f \oplus \mathrm{Im}\,f$ ?
