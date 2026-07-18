---
level: 5
chapters:
  - id: series-entieres
    weight: 100
tags: [rayon de convergence d'une somme, théorème d'Abel radial]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 22"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1, distingue le cas Ra = Rb du cas Ra ≠ Rb : seul le second donne une égalité garantie."
  - "Pour chaque valeur de x proposée en question 2, il faut d'abord vérifier si elle appartient au disque ouvert de convergence, à son bord, ou à l'extérieur."
correction: |
  1. On a toujours $R \geqslant \min(R_a,R_b)$ (les deux séries convergent absolument en deçà de $\min(R_a,R_b)$,
  donc leur somme aussi par inégalité triangulaire). Si $R_a\neq R_b$ (disons $R_a<R_b$), alors pour $R_a<|z|<R_b$,
  $\sum b_nz^n$ converge et $\sum a_nz^n$ diverge, donc leur somme diverge : $R\leqslant R_a$. D'où $R=\min(R_a,R_b)$.
  (Si $R_a=R_b$, on peut seulement affirmer $R\geqslant R_a$ : l'égalité peut être stricte, ex. $a_n=-b_n$.)

  2. $\ln(1+x) = \sum_{n\geqslant1} \frac{(-1)^{n-1}}{n}x^n$ (rayon 1), $\ln(1-2x) = -\sum_{n\geqslant1}
  \frac{2^n}{n}x^n$ (rayon $\frac12$). Les deux rayons étant distincts, le rayon de la somme $f$ vaut
  $\min(1,\frac12)=\frac12$, et $f(x) = \sum_{n\geqslant1} \frac{(-1)^{n-1}-2^n}{n}x^n$ sur $]-\frac12,\frac12[$.

  - En $x=\frac14$ : $|\frac14|<\frac12$, la série converge et $f$ y est continue (somme de série entière sur
  son intervalle ouvert de convergence).
  - En $x=\frac12$ : la série est somme d'une série convergente (celle de $\ln(1+x)$, qui converge en
  $\frac12<1$) et d'une série divergente (celle de $\ln(1-2x)$, qui diverge en $\frac12$, bord de son propre
  disque) : elle diverge.
  - En $x=-\frac12$ : les deux séries convergent séparément en $-\frac12$ (la seconde par CSSA), donc leur
  somme converge. Par le théorème d'Abel radial, $f$ y est continue.
method:
  title: "Méthode : rayon de convergence d'une somme de deux séries entières"
  content: >
    $R \geqslant \min(R_a,R_b)$ toujours, avec égalité garantie dès que $R_a \neq R_b$. Pour étudier un point du
    bord du disque de convergence de la somme, revenir aux deux séries d'origine séparément : convergente +
    divergente = divergente ; convergente + convergente = convergente (avec continuité assurée par Abel radial).
---

1. Que peut-on dire du rayon de convergence de la somme de deux séries entières ? Le démontrer.

2. Développer en série entière au voisinage de 0, en précisant le rayon de convergence, $f(x) = \ln(1+x) + \ln(1-2x)$. La série obtenue converge-t-elle pour $x=\frac14$ ? $x=\frac12$ ? $x=-\frac12$ ? En cas de convergence, la somme est-elle continue en ces points ?
