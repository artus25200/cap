---
level: 5
chapters:
  - id: calcul-differentiel
    weight: 100
tags: [extrema libres, matrice hessienne, extrema sur un compact]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 56"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. $f$ est $C^2$ sur l'ouvert $\mathbb R^2$. Points critiques : $\nabla f=0 \iff (6x^2+6y,6x-6y)=(0,0) \iff
  y=x, x(x+1)=0$, donnant $(0,0)$ et $(-1,-1)$. Hessienne en $(0,0)$ : $\begin{pmatrix}0&6\\6&-6\end{pmatrix}$,
  déterminant $-36<0$ : pas d'extremum (point selle). Hessienne en $(-1,-1)$ :
  $\begin{pmatrix}-12&6\\6&-6\end{pmatrix}$, déterminant $36>0$, trace $-18<0$ : deux valeurs propres négatives,
  maximum local, $f(-1,-1)=3$.

  2. $f(x,0)=2x^3+2 \to+\infty$ quand $x\to+\infty$ et $\to-\infty$ quand $x\to-\infty$ : pas d'extrema globaux.

  3. $K$ fermé borné en dimension finie donc compact, $f$ continue : $f$ atteint un maximum sur $K$. Un
  maximum intérieur serait un point critique, or aucun des deux points critiques n'est dans $\mathring K$. Donc
  le maximum est atteint sur le bord $\partial K = L_1\cup L_2\cup L_3\cup L_4$. En étudiant $f$ restreinte à
  chaque côté (fonctions d'une variable, monotones), le maximum global sur $K$ vaut $7$, atteint en $(1,1)$.
method:
  title: "Méthode : extrema d'une fonction de deux variables (libres puis sur un compact)"
  content: >
    Pour les extrema libres : points critiques ($\nabla f=0$) puis signe du déterminant et de la trace de la
    hessienne (déterminant $<0$ : point selle ; déterminant $>0$ et trace $<0$ : maximum ; trace $>0$ : minimum).
    Sur un compact, un extremum global intérieur serait forcément un point critique — s'ils n'y sont pas, il
    faut étudier le bord morceau par morceau, en ramenant chaque côté à une fonction d'une seule variable.
---

Soit $f(x,y) = 2x^3+6xy-3y^2+2$.

1. $f$ admet-elle des extrema locaux sur $\mathbb R^2$ ? Si oui, les déterminer.

2. $f$ admet-elle des extrema globaux sur $\mathbb R^2$ ? Justifier.

3. On pose $K=[0,1]\times[0,1]$. Justifier que $f$ admet un maximum global sur $K$, puis le déterminer.
