---
level: 3
chapters:
  - id: probas
    weight: 100
tags: [dénombrement, loi de probabilité finie, espérance, limite]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 104"
banque: "CCINP"
classic: true
correction: |
  1. $X(\Omega) = \llbracket 0,2\rrbracket$.

  2. On modélise le rangement comme une application aléatoire uniforme de $\llbracket1,n\rrbracket$ vers
  $\llbracket1,3\rrbracket$ ($3^n$ applications équiprobables). $(X=2)$ correspond aux applications constantes :
  $P(X=2) = \dfrac{3}{3^n} = \dfrac1{3^{n-1}}$. $(X=1)$ correspond aux applications de codomaine exactement à
  deux éléments : $3$ choix pour l'élément exclu, $2^n-2$ applications vers les deux éléments restants (on
  retire les deux constantes), donc $P(X=1) = \dfrac{3(2^n-2)}{3^n} = \dfrac{2^n-2}{3^{n-1}}$. Enfin,
  $P(X=0) = 1-P(X=1)-P(X=2) = 1-\dfrac{2^n-1}{3^{n-1}}$.

  3. (a) $E(X) = 0\cdot P(X=0)+1\cdot P(X=1)+2\cdot P(X=2) = \dfrac{2^n-2}{3^{n-1}}+\dfrac2{3^{n-1}} = 3\left(\dfrac23\right)^n$.

  (b) $\lim_{n\to+\infty} E(X) = 0$ : quand le nombre de boules devient grand, en moyenne aucun des trois
  compartiments ne reste vide (chaque compartiment est presque sûrement atteint).
method:
  title: "Méthode : dénombrement par applications entre ensembles finis"
  content: >
    Modéliser un rangement aléatoire d'objets discernables dans des compartiments comme une application aléatoire
    uniforme entre ensembles finis simplifie souvent grandement le comptage : "$X=2$" devient "application
    constante", "$X=1$" devient "application à image de cardinal $2$" — des dénombrements combinatoires standards,
    bien plus directs qu'un raisonnement événement par événement avec des unions d'incompatibles.
---

Soit $n$ un entier naturel supérieur ou égal à 3. On dispose de $n$ boules numérotées de 1 à $n$ et d'une boîte
formée de trois compartiments identiques également numérotés de 1 à 3. On lance simultanément les $n$ boules.
Elles viennent toutes se ranger aléatoirement dans les 3 compartiments (chaque compartiment peut contenir les $n$
boules). On note $X$ la variable aléatoire égale au nombre de compartiments restés vides.

1. Préciser les valeurs prises par $X$.

2. Déterminer la loi de probabilité de $X$.

3. (a) Calculer $E(X)$.

(b) Déterminer $\lim_{n\to+\infty} E(X)$. Interpréter ce résultat.
