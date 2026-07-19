---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: algebre
    weight: 30
tags: [lemme des noyaux, polynôme annulateur, image et noyau]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 93"
banque: "CCINP"
classic: true
correction: |
  1. Soit $y \in \mathrm{Im}\,u \cap \mathrm{Ker}\,u$ : $y=u(x)$ et $u(y)=0$. Comme $u^3+u^2+u=0$,
  $0 = u^3(x)+u^2(x)+u(x) = u^2(y)+u(y)+y = y$. Donc $\mathrm{Im}\,u\cap\mathrm{Ker}\,u=\{0\}$, et par le théorème
  du rang, $E = \mathrm{Im}\,u \oplus \mathrm{Ker}\,u$.

  2. (a) Lemme des noyaux : si $A,B$ sont premiers entre eux, $\mathrm{Ker}(AB)(u) = \mathrm{Ker}\,A(u) \oplus \mathrm{Ker}\,B(u)$.

  (b) $P=X^3+X^2+X = X(X^2+X+1)$ est annulateur de $u$ (donc $\mathrm{Ker}\,P(u)=E$), avec $X$ et $X^2+X+1$
  premiers entre eux. Le lemme des noyaux donne $E = \mathrm{Ker}\,u \oplus \mathrm{Ker}(u^2+u+\mathrm{Id})$, donc
  $\dim\mathrm{Ker}(u^2+u+\mathrm{Id}) = \dim\mathrm{Im}\,u$. De plus, pour $y=u(x) \in \mathrm{Im}\,u$,
  $(u^2+u+\mathrm{Id})(y) = (u^3+u^2+u)(x) = 0$, donc $\mathrm{Im}\,u \subset \mathrm{Ker}(u^2+u+\mathrm{Id})$.
  Égalité des dimensions : $\mathrm{Im}\,u = \mathrm{Ker}(u^2+u+\mathrm{Id})$.

  3. $P=X(X^2+X+1)$ est annulateur, donc $\mathrm{sp}(u) \subset \{\text{racines réelles de }P\} = \{0\}$. Comme
  $u$ est non bijectif (donc non injectif en dimension finie), $\mathrm{Ker}\,u \neq \{0\}$ : $0$ est valeur
  propre. Donc $\mathrm{sp}(u) = \{0\}$.
method:
  title: "Méthode : décomposer E via un polynôme annulateur factorisé"
  content: >
    Quand un endomorphisme vérifie une relation polynomiale $P(u)=0$ avec $P$ factorisable en facteurs premiers
    entre eux, le lemme des noyaux fournit directement une décomposition de $E$ en somme directe de noyaux, très
    utile pour identifier $\mathrm{Im}\,u$ et $\mathrm{Ker}\,u$ sans calcul matriciel explicite.
---

Soit $E$ un espace vectoriel réel de dimension finie $n>0$ et $u \in \mathcal L(E)$ tel que $u^3+u^2+u=0$. On
notera $\mathrm{Id}$ l'application identité sur $E$.

1. Montrer que $\mathrm{Im}\,u \oplus \mathrm{Ker}\,u = E$.

2. (a) Énoncer le lemme des noyaux pour deux polynômes.

(b) En déduire que $\mathrm{Im}\,u = \mathrm{Ker}(u^2+u+\mathrm{Id})$.

3. On suppose que $u$ est non bijectif. Déterminer les valeurs propres de $u$. Justifier la réponse.

*Remarque : les questions 1, 2 et 3 peuvent être traitées indépendamment les unes des autres.*
