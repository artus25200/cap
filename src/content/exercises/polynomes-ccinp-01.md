---
level: 3
chapters:
  - id: polynomes
    weight: 100
tags: [formule de Taylor, multiplicité d'une racine, factorisation]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 85"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 1.(b), traduis $P=(X-a)^rQ$ avec $Q(a)\\neq0$ en développant $Q$ dans la base $(1,(X-a),\\dots)$, puis compare à la décomposition de Taylor obtenue en 1.(a) par unicité des coefficients."
  - "Pour la question 2, traduis « 1 racine double » par le système $P(1)=0$, $P'(1)=0$, $P''(1)\\neq0$ d'après la question 1.(b), résous-le en $a,b$, puis factorise sachant que $(X-1)^2$ divise $P$."
correction: |
  1. (a) $P(X) = \sum_{k=0}^n \frac{P^{(k)}(a)}{k!}(X-a)^k$.

  (b) $a$ est racine d'ordre $r$ de $P$ ssi $\exists Q \in \mathbb R_{n-r}[X]$, $Q(a)\neq0$, $P=(X-a)^rQ$, ce qui
  se réécrit (en développant $Q$ selon les puissances de $(X-a)$) comme l'existence de $(q_0,\dots,q_{n-r})$ avec
  $q_0 \neq 0$ tel que $P = \sum_{k=r}^n q_{k-r}(X-a)^k$. Par unicité de la décomposition de Taylor, cela équivaut
  exactement à $\forall k \in \llbracket 0,r-1\rrbracket,\ P^{(k)}(a)=0$ et $P^{(r)}(a) \neq 0$.

  2. $1$ racine double de $P=X^5+aX^2+bX$ $\iff P(1)=P'(1)=0$ et $P''(1)\neq0$, soit
  $$\begin{cases}1+a+b=0\\5+2a+b=0\\20+2a\neq0\end{cases} \iff a=-4,\ b=3.$$
  On obtient $P = X^5-4X^2+3X = X(X-1)^2(X^2+2X+3)$, factorisation dans $\mathbb R[X]$ (le discriminant de
  $X^2+2X+3$ étant strictement négatif).
method:
  title: "Méthode : multiplicité d'une racine via les dérivées successives"
  content: >
    La caractérisation $a$ racine d'ordre $r$ de $P$ $\iff$ $P(a)=P'(a)=\dots=P^{(r-1)}(a)=0$ et $P^{(r)}(a)\neq0$
    découle directement de la formule de Taylor pour les polynômes et de l'unicité de la décomposition dans la
    base $(1,(X-a),\dots,(X-a)^n)$. C'est l'outil standard pour imposer une racine multiple à un polynôme
    dépendant de paramètres : on résout le système donné par les dérivées successives.
---

1. Soient $n \in \mathbb N^*$, $P \in \mathbb R_n[X]$ et $a \in \mathbb R$.

(a) Donner sans démonstration, en utilisant la formule de Taylor, la décomposition de $P(X)$ dans la base
$(1, X-a, (X-a)^2, \dots, (X-a)^n)$.

(b) Soit $r \in \mathbb N^*$. En déduire que : $a$ est une racine de $P$ d'ordre de multiplicité $r$ si et
seulement si $P^{(r)}(a) \neq 0$ et $\forall k \in \llbracket 0,r-1\rrbracket,\ P^{(k)}(a)=0$.

2. Déterminer deux réels $a$ et $b$ pour que $1$ soit racine double du polynôme $P=X^5+aX^2+bX$ et factoriser
alors ce polynôme dans $\mathbb R[X]$.
