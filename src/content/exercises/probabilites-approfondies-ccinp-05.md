---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
  - id: reduction
    weight: 50
tags: [chaîne de Markov, matrice symétrique, diagonalisation, probabilités totales]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 101"
banque: "CCINP"
classic: false
hints:
  - "Pour la question 1, utilise la formule des probabilités totales avec le système complet d'événements $(A_n,B_n,C_n)$."
  - "Pour la question 2.(a), pense à un théorème qui garantit la diagonalisabilité sans calcul dès qu'une matrice a une propriété de symétrie particulière."
  - "Pour la question 2.(b), remarque que $A+\\frac12I_3$ a une structure de rang facile à déterminer (lignes proportionnelles ou identiques)."
  - "Pour la question 2.(c), utilise la trace de $A$ pour trouver la troisième valeur propre, puis l'orthogonalité des sous-espaces propres (car $A$ est symétrique) pour trouver le sous-espace associé sans calcul direct."
  - "Pour la question 3, traduis la relation de récurrence vectorielle $(a_{n+1},b_{n+1},c_{n+1})=A(a_n,b_n,c_n)$ en $A^n$ appliqué au vecteur initial, puis utilise $A^n=PD^nP^{-1}$."
correction: |
  1. (a)-(b) $(A_n,B_n,C_n)$ système complet, formule des probabilités totales : $a_{n+1}=\frac12b_n+\frac12c_n$,
  $b_{n+1}=\frac12a_n+\frac12c_n$, $c_{n+1}=\frac12a_n+\frac12b_n$.

  2. (a) $A$ est symétrique réelle, donc diagonalisable (théorème spectral).

  (b) $A+\frac12I_3$ a toutes ses lignes égales (à $\frac12$ près), donc de rang $1$ : $-\frac12$ est valeur
  propre, avec $\dim E_{-1/2}(A) = 3-1=2$, et $E_{-1/2}(A) = \mathrm{Vect}\big((1,0,-1),(0,1,-1)\big)$.

  (c) $\mathrm{tr}(A)=0$ donc $1$ est valeur propre simple (somme des v.p. $= 0 = 2\times(-\frac12)+1\times \lambda \Rightarrow \lambda=1$). $A$ symétrique réelle : sous-espaces propres orthogonaux et supplémentaires,
  donc $E_1(A) = (E_{-1/2}(A))^\perp = \mathrm{Vect}((1,1,1))$. En posant
  $P=\begin{pmatrix}1&1&0\\1&0&1\\1&-1&-1\end{pmatrix}$, $D=\mathrm{diag}(1,-\frac12,-\frac12)$, on a $D=P^{-1}AP$.

  3. D'après 1., $(a_{n+1},b_{n+1},c_{n+1})^T = A(a_n,b_n,c_n)^T$, donc par récurrence
  $(a_n,b_n,c_n)^T = A^n(a_0,b_0,c_0)^T = PD^nP^{-1}(a_0,b_0,c_0)^T$. Avec $(a_0,b_0,c_0)=(1,0,0)$, $D^n = \mathrm{diag}(1,(-\frac12)^n,(-\frac12)^n)$ permet d'exprimer $(a_n,b_n,c_n)$ en fonction de $n$ via ce produit
  matriciel.
method:
  title: "Méthode : chaîne de Markov résolue par diagonalisation"
  content: >
    Une chaîne de Markov à espace d'états fini se traduit par une relation matricielle $V_{n+1}=AV_n$, donc
    $V_n=A^nV_0$. Si $A$ est diagonalisable (en particulier si elle est symétrique, cas fréquent quand la marche
    est "équilibrée"), on calcule $A^n=PD^nP^{-1}$ avec $D^n$ trivial à calculer (puissances des valeurs propres),
    ce qui donne accès à une formule explicite pour les probabilités à l'instant $n$.
---

Dans une zone désertique, un animal erre entre trois points d'eau A, B et C. À l'instant $t=0$, il se trouve au
point A. Quand il a épuisé l'eau du point où il se trouve, il part avec équiprobabilité rejoindre l'un des deux
autres points d'eau. L'eau du point qu'il vient de quitter se régénère alors. Soit $n \in \mathbb N$. On note
$A_n$, $B_n$, $C_n$ les événements « l'animal est en A (resp. B, C) après son $n$-ième trajet », et
$a_n=P(A_n)$, $b_n=P(B_n)$, $c_n=P(C_n)$.

1. (a) Exprimer, en le justifiant, $a_{n+1}$ en fonction de $a_n,b_n,c_n$.

(b) Exprimer, de même, $b_{n+1}$ et $c_{n+1}$.

2. On considère la matrice $A = \begin{pmatrix}0&\frac12&\frac12\\\frac12&0&\frac12\\\frac12&\frac12&0\end{pmatrix}$.

(a) Justifier, sans calcul, que $A$ est diagonalisable.

(b) Prouver que $-\frac12$ est valeur propre de $A$ et déterminer le sous-espace propre associé.

(c) Déterminer une matrice $P$ inversible et une matrice $D$ diagonale de $M_3(\mathbb R)$ telles que
$D=P^{-1}AP$. (Le calcul de $P^{-1}$ n'est pas demandé.)

3. Montrer comment les résultats de la question 2 peuvent être utilisés pour calculer $a_n,b_n,c_n$ en fonction
de $n$. (Aucune expression finalisée n'est demandée.)
