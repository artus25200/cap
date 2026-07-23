---
level: 5
chapters:
  - id: probabilites-approfondies
    weight: 100
tags: [loi géométrique, loi de Poisson, couple indépendant, loi de X=Y]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 108"
banque: "CCINP"
classic: false
hints:
  - "Pour la question 1, somme la loi jointe sur $j$ pour trouver la loi de $X$ (série exponentielle), puis sur $i$ pour trouver celle de $Y$ (série géométrique)."
  - "Pour la question 2.(a), calcule $P(1+X=n)$ à partir de la loi de $X$ trouvée en question 1 et reconnais une loi géométrique."
  - "Pour la question 3, la loi jointe donnée dans l'énoncé se factorise-t-elle directement en produit d'une fonction de $i$ par une fonction de $j$ ?"
  - "Pour la question 4, décompose l'événement $(X=Y)$ en réunion disjointe des $(X=k)\\cap(Y=k)$ et utilise l'indépendance établie en question 3."
correction: |
  1. Pour $i\in\mathbb N$, en sommant sur $j$ (série exponentielle) : $P(X=i) = \dfrac{1}{2^{i+1}}$. Pour
  $j\in\mathbb N$, en sommant sur $i$ (série géométrique de raison $\frac12$) : $P(Y=j) = \dfrac1{e\,j!}$.

  2. (a) $Z=X+1$ vérifie $P(Z=n)=P(X=n-1)=\left(\frac12\right)^n$ : $Z$ suit une loi géométrique de paramètre
  $\frac12$, donc $E(Z)=2$, $V(Z)=2$, d'où $E(X)=E(Z)-1=1$, $V(X)=V(Z)=2$.

  (b) $Y$ suit une loi de Poisson de paramètre $\lambda=1$ : $E(Y)=V(Y)=1$.

  3. $\forall (i,j),\ P((X=i)\cap(Y=j)) = \dfrac1{2^{i+1}}\times\dfrac1{ej!} = P(X=i)P(Y=j)$ : $X$ et $Y$ sont
  indépendantes.

  4. $(X=Y) = \bigsqcup_{k\in\mathbb N}(X=k)\cap(Y=k)$, donc
  $$P(X=Y) = \sum_{k=0}^{+\infty}\frac1{e\,2^{k+1}k!} = \frac1{2e}\sum_{k=0}^{+\infty}\frac{(1/2)^k}{k!} =
  \frac{e^{1/2}}{2e} = \frac1{2\sqrt e}.$$
method:
  title: "Méthode : reconnaître une loi jointe factorisée"
  content: >
    Quand la loi jointe $P((X=i)\cap(Y=j))$ se factorise dès l'énoncé en un produit d'une fonction de $i$ par une
    fonction de $j$, les lois marginales et l'indépendance découlent presque automatiquement : on calcule chaque
    marginale par sommation (souvent une série géométrique ou exponentielle), puis on vérifie que le produit des
    marginales redonne la loi jointe.
---

Soient $X$ et $Y$ deux variables aléatoires définies sur un même espace probabilisé et à valeurs dans $\mathbb N$.
On suppose que la loi du couple $(X,Y)$ est donnée par
$\forall (i,j) \in \mathbb N^2,\ P((X=i)\cap(Y=j)) = \dfrac{1}{e\,2^{i+1}\,j!}$.

1. Déterminer les lois de $X$ et de $Y$.

2. (a) Prouver que $1+X$ suit une loi géométrique et en déduire l'espérance et la variance de $X$.

(b) Déterminer l'espérance et la variance de $Y$.

3. Les variables $X$ et $Y$ sont-elles indépendantes ?

4. Calculer $P(X=Y)$.
