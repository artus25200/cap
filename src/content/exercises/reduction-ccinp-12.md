---
level: 4
chapters:
  - id: reduction
    weight: 100
  - id: algebre
    weight: 30
tags: [valeurs propres, composition d'endomorphismes, contre-exemple en dimension infinie]
source: "CCINP, Banque orale de mathématiques MP/MPI, session 2025, exercice 83"
banque: "CCINP"
classic: false
correction: |
  1. Soit $\lambda \neq 0$ valeur propre de $u \circ v$ : $\exists x \neq 0$, $(u\circ v)(x)=\lambda x$. Alors
  $(v\circ u)(v(x)) = \lambda v(x)$. Si $v(x)=0$, alors $\lambda x = 0$, impossible ($x\neq0,\lambda\neq0$). Donc
  $v(x) \neq 0$ est vecteur propre de $v \circ u$ pour la valeur propre $\lambda$.

  2. Sur $E=\mathbb R[X]$, avec $u: P \mapsto \int_1^X P$ et $v: P \mapsto P'$ : $v \circ u = \mathrm{Id}$ et
  $u \circ v : P \mapsto P(X)-P(1)$. Donc $\mathrm{Ker}(v\circ u)=\{0\}$ et $\mathrm{Ker}(u\circ v) = \mathbb
  R_0[X]$ : $0$ est valeur propre de $u\circ v$ mais pas de $v\circ u$. Le résultat de 1. est **faux** pour
  $\lambda=0$ en dimension infinie.

  3. En dimension finie, $\det(u\circ v) = \det u \det v = \det(v \circ u)$, donc
  $$0 \text{ v.p. de } u\circ v \iff \det(u\circ v)=0 \iff \det(v\circ u)=0 \iff 0 \text{ v.p. de } v\circ u.$$
  Le résultat de la question 1 est donc vrai pour $\lambda=0$ dès que $E$ est de dimension finie ; en particulier
  $u\circ v$ et $v\circ u$ ont alors exactement les mêmes valeurs propres.
method:
  title: "Méthode : spectre de u∘v et v∘u"
  content: >
    Pour $\lambda \neq 0$, $u\circ v$ et $v\circ u$ ont toujours le même spectre, avec un passage explicite d'un
    vecteur propre à l'autre via $x \mapsto v(x)$. Pour $\lambda=0$, c'est vrai seulement en dimension finie
    (argument déterminant) : un contre-exemple classique en dimension infinie utilise dérivation/primitivation.
---

Soit $u$ et $v$ deux endomorphismes d'un $\mathbb R$-espace vectoriel $E$.

1. Soit $\lambda$ un réel non nul. Prouver que si $\lambda$ est valeur propre de $u \circ v$, alors $\lambda$ est
valeur propre de $v \circ u$.

2. On considère, sur $E=\mathbb R[X]$, les endomorphismes $u$ et $v$ définis par $u: P \mapsto \int_1^X P$ et
$v: P \mapsto P'$. Déterminer $\mathrm{Ker}(u\circ v)$ et $\mathrm{Ker}(v\circ u)$. Le résultat de la question 1
reste-t-il vrai pour $\lambda=0$ ?

3. Si $E$ est de dimension finie, démontrer que le résultat de la première question reste vrai pour $\lambda=0$.
Indication : penser à utiliser le déterminant.
