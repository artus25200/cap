---
level: 5
chapters:
  - id: topologie
    weight: 100
tags: [norme subordonnée, endomorphisme continu, dimension finie]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 38"
banque: "CCINP"
classic: true
correction: |
  1. $\|u(f)\|_1 \leqslant \|f\|_1$ pour tout $f$ (calcul direct par Fubini/inégalité triangulaire), donc $u$
  continue avec $|||u|||\leqslant1$. Avec $f_n(t)=ne^{-nt}$, le rapport $\|u(f_n)\|_1/\|f_n\|_1 \to 1$ quand
  $n\to+\infty$ : donc $|||u|||\geqslant1$. D'où $|||u|||=1$.

  2. (a) $u$ linéaire sur $\mathbb R^n$ de dimension finie : automatiquement continue, quelle que soit la norme.
  (b) Par Cauchy-Schwarz, $|u(x)|=|(x|a)|\leqslant\|a\|_2\|x\|_2$ donne $|||u|||\leqslant\|a\|_2$ ; en prenant
  $x=a$, égalité : $|||u|||=\|a\|_2$.

  3. Sur $E=\mathbb R[X]$ avec $\|P\|=\max|a_k|$, l'endomorphisme de dérivation $u(P)=P'$ vérifie
  $\|u(X^n)\|/\|X^n\| = n \to +\infty$ : $u$ n'est pas continue (dimension infinie).
method:
  title: "Méthode : calculer une norme subordonnée (norme d'opérateur)"
  content: >
    Pour trouver $|||u||| = \sup_{x\neq0} \|u(x)\|/\|x\|$ : (i) majorer via une inégalité générale (souvent
    Cauchy-Schwarz ou triangulaire) pour obtenir $|||u|||\leqslant M$, (ii) exhiber un vecteur (ou une suite de
    vecteurs) qui approche ou atteint cette borne pour obtenir $|||u|||\geqslant M$. En dimension infinie, la
    continuité d'un endomorphisme linéaire n'est jamais automatique — contrairement à la dimension finie.
---

1. Sur $E=\mathcal C([0,1],\mathbb R)$ muni de $\|f\|_1=\int_0^1|f(t)|\,dt$, soit $u(f)=g$ où $g(x)=\int_0^x f(t)\,dt$ (on admet que $u$ est un endomorphisme de $E$). Prouver que $u$ est continue et calculer $|||u|||$. Indication : considérer $f_n(t)=ne^{-nt}$.

2. Soit $(a_1,\dots,a_n)\in\mathbb R^n$ non nul, $u(x_1,\dots,x_n)=\sum a_ix_i$.
   a) Justifier que $u$ est continue quel que soit le choix de norme sur $\mathbb R^n$.
   b) Avec $\mathbb R^n$ muni de $\|\cdot\|_2$, calculer $|||u|||$.

3. Déterminer un espace $E$, une norme, et un endomorphisme de $E$ non continu pour cette norme. Justifier.
