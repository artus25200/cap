---
level: 3
chapters:
  - id: continuite
    weight: 100
tags: [théorème des accroissements finis, prolongement de la dérivée]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 4"
banque: "CCINP"
classic: true
hints:
  - "Pour la question 3, la fonction indicatrice suggérée oscille de plus en plus vite près de 0 : sa dérivée n'a pas de limite, alors qu'elle est bien dérivable en 0."
correction: |
  1. **TAF** : si $f$ est continue sur $[a,b]$ et dérivable sur $]a,b[$, alors il existe $c \in\,]a,b[$ tel que
  $f(b) - f(a) = f'(c)(b-a)$.

  2. Posons $l = \lim_{x\to x_0} f'(x)$. Pour $h\neq 0$ avec $x_0+h \in [a,b]$, le TAF entre $x_0$ et $x_0+h$
  donne $c_h$ strictement entre les deux tel que $f(x_0+h) - f(x_0) = f'(c_h) h$. Quand $h\to 0$, $c_h \to x_0$
  par encadrement, donc $\lim_{h\to0} \frac{1}{h}(f(x_0+h)-f(x_0)) = \lim f'(c_h) = l$ : $f$ est dérivable en $x_0$
  et $f'(x_0) = l$.

  3. Avec $g(x) = x^2\sin(1/x)$ pour $x\neq 0$, $g(0)=0$ : $g$ est continue en 0 (car $|g(x)|\leqslant x^2$), et
  dérivable en 0 avec $g'(0)=0$ (taux d'accroissement $x\sin(1/x) \to 0$). Or pour $x\neq 0$,
  $g'(x) = 2x\sin(1/x) - \cos(1/x)$, dont le premier terme tend vers 0 mais $\cos(1/x)$ n'a pas de limite en 0.
  Donc $g'$ n'a pas de limite en 0, bien que $g$ soit dérivable en 0 : la réciproque de la question 2 est fausse.
method:
  title: "Méthode : lien entre dérivabilité en un point et limite de la dérivée"
  content: >
    Si $f'$ a une limite finie en $x_0$ (dérivabilité de part et d'autre), alors $f$ est dérivable en $x_0$ ET
    $f'(x_0)$ vaut cette limite (théorème du prolongement de la dérivée, via le TAF). La réciproque est fausse :
    une fonction peut être dérivable en un point sans que sa dérivée y soit continue — le contre-exemple classique
    est une fonction oscillante amortie comme $x^2\sin(1/x)$.
---

1. Énoncer le théorème des accroissements finis.

2. Soit $f : [a,b] \to \mathbb{R}$ et $x_0 \in\,]a,b[$. On suppose $f$ continue sur $[a,b]$ et dérivable sur $]a,x_0[$ et $]x_0,b[$. Démontrer que si $f'$ admet une limite finie en $x_0$, alors $f$ est dérivable en $x_0$ et $f'(x_0) = \lim_{x\to x_0} f'(x)$.

3. Prouver que l'implication « $f$ est dérivable en $x_0$ $\implies$ $f'$ admet une limite finie en $x_0$ » est fausse. Indication : on pourra considérer $g$ définie par $g(x) = x^2\sin\frac{1}{x}$ si $x\neq0$ et $g(0)=0$.
