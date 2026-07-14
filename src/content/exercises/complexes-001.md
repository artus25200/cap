---
level: 2
chapters:
  - id: complexes
    weight: 100
tags: [racines, géométrie]
banque: null
classic: true
hints:
  - "Calcule le discriminant, comme pour toute équation du second degré — les coefficients complexes ne changent rien à la méthode."
  - "Une fois les deux racines trouvées, calcule leur module et leur argument pour les placer."
correction: |
  Le discriminant vaut Δ = 1 - 4 = -3. Les racines sont donc
  z = (-1 ± i√3) / 2, deux complexes de module 1 et d'arguments ±2π/3.
  Placées dans le plan, elles forment avec 1 les sommets d'un triangle
  équilatéral inscrit dans le cercle unité.
method:
  title: "Méthode : équation du second degré à coefficients réels, discriminant négatif"
  content: >
    Le calcul du discriminant et la formule des racines restent valables
    tels quels sur ℂ. Si Δ < 0, on l'écrit Δ = (i√|Δ|)² pour retomber sur
    la même formule que sur ℝ.
course: |
  Pour aX² + bX + c = 0 avec Δ = b² - 4ac < 0, les racines complexes sont
  (-b ± i√(-Δ)) / (2a), toujours conjuguées l'une de l'autre.
---

Résoudre z² + z + 1 = 0 et placer les solutions dans le plan complexe.
