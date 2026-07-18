---
level: 3
chapters:
  - id: equations-differentielles
    weight: 100
tags: [équation linéaire d'ordre 2, variation des constantes]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 31"
banque: "CCINP"
classic: true
correction: |
  1. En linéarisant, $\cos^4x = \frac18(\cos(4x)+4\cos(2x)+3)$, donc une primitive est
  $x\mapsto \frac{1}{32}\sin(4x)+\frac14\sin(2x)+\frac38x$.

  2. $(E): y''+y=\cos^3x$. Solution homogène : $y=\lambda\cos x+\mu\sin x$. Par variation des constantes,
  $\lambda'(x)=-\sin x\cos^3x$ et $\mu'(x)=\cos^4x$, donnant $\lambda(x)=\frac14\cos^4x$ et $\mu(x)$ comme en 1.
  Solution particulière : $y_p(x) = \frac14\cos^5x + \left(\frac{1}{32}\sin(4x)+\frac14\sin(2x)+\frac38x\right)\sin x$.
  Solutions générales : $y(x) = \lambda\cos x+\mu\sin x+y_p(x)$, $(\lambda,\mu)\in\mathbb{R}^2$.
---

1. Déterminer une primitive de $x \mapsto \cos^4 x$.

2. Résoudre sur $\mathbb{R}$ l'équation différentielle $y'' + y = \cos^3 x$ en utilisant la méthode de variation des constantes.
