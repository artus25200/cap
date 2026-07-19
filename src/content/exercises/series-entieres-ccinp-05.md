---
level: 4
chapters:
  - id: series-entieres
    weight: 100
tags: [rayon de convergence, comparaison]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 21"
banque: "CCINP"
classic: true
correction: |
  1. Voir exercice 20, question 1 (même définition).

  2. $\sum a_n$ diverge en $z=1$ donc $R\leqslant1$. $(a_n)$ bornée donne $(a_n\cdot1^n)$ bornée donc $R\geqslant1$.
  Donc $R=1$.

  3. Posons $a_n = (\sqrt n)^{(-1)^n}\ln\left(1+\frac{1}{\sqrt n}\right)$. On minore $a_n \geqslant \frac{1}{\sqrt n}\ln(1+\frac1{\sqrt n}) =: b_n \underset{+\infty}{\sim} \frac1n$, et $\sum b_n$ diverge, donc
  $\sum a_n$ diverge (par minoration, séries positives). De plus $a_n \leqslant \sqrt n \ln(1+\frac1{\sqrt n}) \leqslant 1$ (car $\ln(1+x)\leqslant x$), donc $(a_n)$ est bornée. D'après la question 2, $R=1$.
method:
  title: "Méthode : rayon de convergence d'une série entière dont la série numérique associée diverge"
  content: >
    Si $(a_n)$ est bornée et $\sum a_n$ diverge (en $z=1$), alors le rayon de $\sum a_n z^n$ vaut exactement 1 —
    combinaison directe des deux caractérisations du rayon (bornitude donne $R\geqslant1$, divergence donne
    $R\leqslant1$). Très utile quand le quotient $a_{n+1}/a_n$ n'a pas de limite simple (ici à cause du $(-1)^n$
    en exposant).
---

1. Donner la définition du rayon de convergence d'une série entière de la variable complexe.

2. Soit $(a_n)$ une suite bornée telle que $\sum a_n$ diverge. Quel est le rayon de convergence de $\sum a_n z^n$ ? Justifier.

3. Quel est le rayon de convergence de $\displaystyle\sum_{n\geqslant1} (\sqrt{n})^{(-1)^n}\ln\left(1+\frac{1}{\sqrt n}\right)z^n$ ?
