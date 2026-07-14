---
level: 3
chapters:
  - id: matrices
    weight: 100
  - id: polynomes
    weight: 20
tags: [système à paramètre]
banque: "Centrale-Supélec"
classic: true
hints:
  - "Distingue soigneusement les valeurs du paramètre qui annulent un pivot."
  - "Pour ces valeurs particulières, redémarre le pivot de Gauss depuis le début : le comportement peut changer complètement."
correction: |
  Le pivot de Gauss classique fonctionne tant que le paramètre m évite un
  nombre fini de valeurs critiques (celles qui annulent un pivot). Pour ces
  valeurs, on reprend le système séparément : il devient soit incompatible,
  soit indéterminé selon les cas.
method:
  title: "Méthode : système linéaire à paramètre"
  content: >
    Faire le pivot de Gauss en gardant le paramètre littéral. Repérer les
    valeurs qui annulent un pivot et les traiter séparément — jamais diviser
    par une expression qui peut s'annuler sans distinguer les cas.
course: |
  Un système linéaire a soit aucune solution, soit une unique solution,
  soit une infinité — jamais un nombre fini > 1.
---

Résoudre un système linéaire à paramètre par la méthode de Gauss.
