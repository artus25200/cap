---
level: 4
chapters:
  - id: espaces-prehilbertiens
    weight: 100
tags: [orthogonal, somme, intersection, espace euclidien]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 77"
banque: "CCINP - Banque orale MP/MPI"
classic: true
correction: |
  1. On a toujours $A \subset (A^\perp)^\perp$. Comme $E$ euclidien, $E = A \oplus A^\perp$ donc
  $\dim A = n - \dim A^\perp$ ; de même $\dim A^\perp = n - \dim (A^\perp)^\perp$, d'où
  $\dim (A^\perp)^\perp = \dim A$. Égalité des dimensions avec l'inclusion : $(A^\perp)^\perp = A$.

  2. (a) Double inclusion : si $x \in F^\perp \cap G^\perp$, alors pour $y=f+g \in F+G$, $(x|y)=(x|f)+(x|g)=0$,
  donc $x \in (F+G)^\perp$. Réciproquement si $x \in (F+G)^\perp$, en particulier $x$ est orthogonal à $F \subset
  F+G$ et à $G \subset F+G$, donc $x \in F^\perp \cap G^\perp$. D'où $(F+G)^\perp = F^\perp \cap G^\perp$.

  (b) En appliquant (a) à $F^\perp$ et $G^\perp$ : $(F^\perp+G^\perp)^\perp = (F^\perp)^\perp \cap (G^\perp)^\perp
  = F \cap G$ d'après 1. En prenant l'orthogonal des deux membres (et en réutilisant 1.), on obtient
  $F^\perp + G^\perp = (F \cap G)^\perp$.
method:
  title: "Méthode : formules de l'orthogonal en dimension finie"
  content: >
    En dimension finie, $(A^\perp)^\perp = A$ (argument de dimension) et $(F+G)^\perp = F^\perp \cap G^\perp$
    (double inclusion directe). La formule duale $(F\cap G)^\perp = F^\perp+G^\perp$ s'obtient en appliquant la
    précédente à $F^\perp$ et $G^\perp$ puis en repassant à l'orthogonal — un enchaînement classique à retenir.
---

Soit $E$ un espace euclidien.

1. Soit $A$ un sous-espace vectoriel de $E$. Démontrer que $(A^\perp)^\perp = A$.

2. Soient $F$ et $G$ deux sous-espaces vectoriels de $E$.

(a) Démontrer que $(F+G)^\perp = F^\perp \cap G^\perp$.

(b) Démontrer que $(F \cap G)^\perp = F^\perp + G^\perp$.
