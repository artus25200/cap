---
level: 4
chapters:
  - id: topologie
    weight: 100
tags: [comparaison de normes, ouverts, non-équivalence]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 37"
banque: "CCINP"
classic: true
correction: |
  1. (a) $N_\infty$ et $N_1$ vérifient les trois axiomes de norme (séparation, homogénéité, inégalité
  triangulaire) par les propriétés usuelles du sup et de l'intégrale sur $[0,1]$.
  (b) $k=1$ convient : $N_1(f) = \int_0^1|f| \leqslant \int_0^1 N_\infty(f) = N_\infty(f)$.
  (c) L'identité $(E,N_\infty)\to(E,N_1)$ est continue (linéaire, $N_1\leqslant kN_\infty$), donc l'image
  réciproque d'un ouvert pour $N_1$ est un ouvert pour $N_\infty$.

  2. Avec $f_n(t)=t^n$ : $N_1(f_n)=\frac1{n+1}$, $N_\infty(f_n)=1$, donc $N_\infty(f_n)/N_1(f_n) \to +\infty$ :
  les normes ne sont pas équivalentes.
method:
  title: "Méthode : une norme peut dominer l'autre sans qu'elles soient équivalentes"
  content: >
    $N_1 \leqslant kN_\infty$ (une seule inégalité) suffit à obtenir que l'identité est continue dans un sens,
    donc que tout ouvert pour $N_1$ est ouvert pour $N_\infty$ — mais ça ne prouve PAS l'équivalence des normes,
    qui demanderait aussi une inégalité dans l'autre sens. Exhiber une suite qui fait diverger le rapport
    $N_\infty/N_1$ prouve que cette réciproque est fausse ici.
---

$E = \mathcal C([0,1],\mathbb R)$. On pose $N_\infty(f)=\sup_{[0,1]}|f|$ et $N_1(f)=\int_0^1|f(t)|\,dt$.

1. a) Démontrer que $N_\infty$ et $N_1$ sont des normes sur $E$.
   b) Démontrer qu'il existe $k>0$ tel que $N_1(f) \leqslant kN_\infty(f)$ pour tout $f$.
   c) Démontrer que tout ouvert pour $N_1$ est un ouvert pour $N_\infty$.

2. Démontrer que $N_1$ et $N_\infty$ ne sont pas équivalentes.
