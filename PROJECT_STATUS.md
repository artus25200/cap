# État du projet Cap — reprise par une nouvelle conversation

Ce fichier existe pour qu'une **nouvelle conversation Claude** (sans l'historique de celle-ci) puisse reprendre
le travail directement. Colle ce fichier (ou demande à Claude de le lire depuis le repo) en début de
conversation, avec la phrase : *"Continue le projet Cap, voici PROJECT_STATUS.md"*.

## Le projet

**Cap** est un prototype de plateforme de révision adaptative pour étudiants de prépa (MPSI/MPI, 1ère et 2e
année). Concept central : l'étudiant n'a jamais à choisir quoi travailler — l'app sélectionne automatiquement
le prochain exercice selon un système de score pondéré par chapitre (flow, "zone de flow").

- **Repo GitHub** : `artus25200/cap` (public)
- **Site déployé** : https://artus25200.github.io/cap/
- **Stack** : Vite + React, déployé sur GitHub Pages via GitHub Actions (pas de branche `gh-pages` legacy)
- **Base de données** : Supabase (projet `cap`, org Supabase `cap`), Postgres + Auth

## Ce qui est déjà fait

1. **Prototype UI** : thème clair inspiré de Peerlist/Lattice (fond blanc, cartes bordées, boutons
   rectangulaires arrondis). Trois onglets : S'entraîner (flux auto ciblant les points faibles), Explorer
   (filtres chapitre/notion/banque/classique/difficulté), Profil (scores /10 par chapitre, méthodes débloquées).
2. **Système de score pondéré** (`src/lib/stats.js`) : le score /10 d'un chapitre bouge à chaque tentative selon
   trois facteurs — difficulté de l'exercice, % de lien exercice→chapitre, rendements décroissants sur les
   réussites déjà obtenues dans ce chapitre. Détails dans les commentaires du fichier.
3. **Architecture de contenu** : un exercice = un fichier Markdown avec frontmatter YAML dans
   `src/content/exercises/`. Un exercice peut appartenir à plusieurs chapitres avec des poids différents. Format
   documenté dans `src/content/exercises/_TEMPLATE.md`. Chapitres listés dans `src/content/chapters.json`
   (champ `year`: 1 ou 2).
4. **Rendu LaTeX** via KaTeX (`src/lib/MathText.jsx`), délimiteurs `$...$` et `$$...$$`.
5. **Authentification + persistance** : Supabase Auth (email + mot de passe, PAS de lien magique — voir
   "Leçons apprises" ci-dessous). Table `attempts` (RLS activée, un étudiant ne voit que ses propres données).
   `src/lib/useAuth.js`, `src/lib/useSupabaseHistory.js`, `src/LoginScreen.jsx`.
6. **Validation automatique du contenu** avant chaque build (`scripts/validate-content.mjs`, lancé via
   `npm run build` ou seul via `npm run validate-content`) : bloque le build si un exercice référence un
   chapitre inexistant, a un frontmatter cassé, un id en doublon, etc.
7. **Vérification LaTeX** : `npm run check-latex` teste individuellement chaque formule avec KaTeX
   (`throwOnError: true`) — un `vite build` ne détecte PAS les erreurs LaTeX silencieuses au runtime.
8. **Activation/désactivation des chapitres** (`src/lib/useChapterPrefs.js`) : préférence persistée côté
   utilisateur dans la table Supabase `disabled_chapters` (RLS, même pattern que `attempts` — chacun ne voit/
   modifie que ses propres lignes ; présence d'une ligne `(user_id, chapter_id)` = désactivé). Togglable un par
   un depuis l'onglet Profil, avec un raccourci pour activer/désactiver toute l'année 2 d'un coup. N'affecte que
   le flux automatique de "S'entraîner" (`pickNext`) — "Explorer" reste non filtré par cette préférence, choix
   volontaire pour l'instant.
9. **Sections dépliantes du Profil** (chapitres, cahier de méthodes) : simple état local `useState` + chevron,
   pas de persistance de l'état ouvert/fermé entre sessions (pas nécessaire pour l'instant).
10. **Flux "Je bloque" avec indices sur demande et chrono** (`AnswerControls` dans App.jsx, juillet 2026) :
    cliquer sur "Je bloque" ne fait plus échouer l'exercice immédiatement. Ça lance un chrono (réglable 0-10 min,
    défaut 3, réglage `hint_lock_minutes` dans la table Supabase `user_settings`) pendant lequel aucun indice
    n'est accessible ; à l'expiration, un bouton "Voir l'indice N" apparaît — **l'indice ne s'affiche jamais tout
    seul, il faut cliquer pour le révéler**. Après ce clic, un nouveau chrono d'une minute se lance avant que le
    bouton de l'indice suivant redevienne disponible, et ainsi de suite. Le bouton "Voir la correction" (= échec)
    n'apparaît qu'une fois tous les indices vus (ou tout de suite après le chrono initial s'il n'y a pas d'indice
    sur cet exercice). "J'ai réussi" reste cliquable à tout moment du parcours. **L'ancien affichage libre de tous
    les indices d'un coup dans `ExerciseBody` a été retiré** — les indices ne sortent plus que via ce flux.
    Seuls 13/117 exercices ont un champ `hints` non vide pour l'instant (surtout les `fonctions-*` ; les CCINP
    n'en ont pas) — pour les autres, "Je bloque" ne fait qu'attendre le chrono initial avant de proposer la
    correction, sans indice intermédiaire. Prévoir d'ajouter des indices aux exercices CCINP existants dans une
    prochaine session si besoin.
11. **Pénalité de score liée aux indices** : `attempts.hints_used` (nouvelle colonne, entier, défaut 0) stocke le
    nombre d'indices consultés avant la réponse. `chapterStats`/`globalStats` (`src/lib/stats.js`) multiplient le
    delta d'une **réussite** par `max(0.3, 1 - 0.2 * hintsUsed)` (aucun effet sur un échec — si tu échoues malgré
    les indices, tu n'étais de toute façon pas récompensé). Formule volontairement simple, à ajuster si elle
    semble trop douce/dure en pratique.
12. **Score global + graphique d'évolution** (`globalStats`, `weeklyScoreSeries` dans stats.js ; `ScoreTrendChart`
    dans App.jsx) : score global = même algo que le score par chapitre mais sur TOUTES les tentatives sans
    pondération de chapitre. Le graphique (SVG maison, pas de dépendance ajoutée) trace un point par semaine ISO
    sur les 4/8/12 dernières semaines (sélecteur dans le Profil), en recalculant le score global à partir de
    l'historique tronqué à chaque date de coupure — pas de table dédiée, tout est recalculé côté client à partir
    de `attempts`.

## Import de la banque CCINP — état d'avancement

Un PDF **"Banque épreuve orale de mathématiques session 2025, CCINP, filière MP et MPI"** (112 exercices avec
corrigés) a été fourni par l'utilisateur. Licence **CC BY-NC-SA 3.0 FR** confirmée noir sur blanc en page de
garde du PDF (différent du reste du site CCINP, qui est tous droits réservés — bien vérifier la licence
spécifique à ce document si on réimporte depuis une autre source).

**✅ Import CCINP terminé : 112 / 112 exercices importés** (session 2025, banque orale MP/MPI complète).
Convention de nommage des fichiers : `<chapitre-principal>-ccinp-NN.md` (numérotation propre au chapitre, pas à
la banque). La correspondance banque → fichier n'est pas 1-to-1 dans le nom mais le champ `source` de chaque
fichier précise toujours le numéro d'exercice d'origine dans la banque (ex: `"CCINP, Banque orale de
mathématiques MP/MPI, session 2025, exercice 42"`).

Deux nouveaux chapitres créés pendant cet import (ne pas les recréer) :
- `arithmetique` (year 1, "Arithmétique dans Z") : Bézout, congruences, petit théorème de Fermat. 2 exercices.
- `probabilites-approfondies` (year 2, "Probabilités approfondies") : variables aléatoires sur N à support
  infini, fonctions génératrices, inégalité de Bienaymé-Tchebychev, lois usuelles (Poisson, géométrique),
  couples de variables discrètes. 11 exercices.

Le chapitre `probas` (year 1, préexistant) a également été peuplé pour la première fois avec des exercices CCINP
(7 exercices : dénombrement, lois finies, formule de Bayes).

`npm run validate-content` : 112 exercices validés, 0 erreur (seul avertissement restant : chapitre `fonctions`
toujours sans exercice, non lié à cet import). `npm run check-latex` : 0 erreur.

**S'il faut réimporter depuis ce PDF plus tard (corrections, exercices manqués, etc.), le PDF n'est PAS dans le
repo git — il faut le re-uploader.** Nom vu jusqu'ici : `banque_finale_avec_corr_session_2025_28-01.pdf`.

### Chapitre `fonctions` (Fonctions usuelles & DL) — exercices originaux, hors banque CCINP

Vérification faite (les 112 exercices de la banque 2025 ont été relus intégralement) : **aucun exercice de cette
banque ne correspond au thème "fonctions usuelles & développements limités"** en chapitre principal ou secondaire
— ce thème y est systématiquement absorbé par d'autres chapitres (calcul différentiel, séries entières, etc.).
5 exercices originaux (`fonctions-001.md` à `fonctions-005.md`, `source: null`, `banque: null`) ont donc été
écrits pour peupler ce chapitre : équivalents usuels, limites par DL (formes indéterminées de type puissance),
étude asymptotique en l'infini, identité sur $\arctan$, DL à l'ordre 4 avec étude d'extremum local. Niveaux 1 à 4.
Convention de nommage à réutiliser pour tout futur exercice non issu d'une banque : `<chapitre>-NNN.md` (pas de
suffixe `-ccinp-`).

**Méthode utilisée jusqu'ici** (à reproduire) :
1. Extraire le texte : `pdftotext -layout fichier.pdf texte.txt` (les maths s'extraient mal — fractions et
   sommes se mélangent — donc **ne jamais faire confiance au texte brut pour retranscrire une formule**, s'appuyer
   sur la compréhension mathématique du contenu, éventuellement rasteriser une page en image via `pdftoppm` et la
   lire visuellement en cas de doute réel)
2. Repérer les numéros de ligne des exercices : `grep -n "^EXERCICE [0-9]* algèbre$" texte.txt` (adapter le mot
   pour "probabilités")
3. Lire chaque exercice, identifier le(s) chapitre(s) concerné(s) (créer un nouveau chapitre dans
   `chapters.json` si aucun chapitre existant ne convient)
4. Écrire le fichier `.md` avec frontmatter complet : `level`, `chapters` (avec poids), `tags`, `source`,
   `banque: "CCINP - Banque orale MP/MPI"`, `classic: true`, et si le temps le permet `correction`/`method`
   (les exercices les plus formateurs méritent une méthode associée, mais ce n'est pas obligatoire pour tous)
5. `npm run validate-content` après chaque petit lot (2-4 exercices), corriger immédiatement les erreurs
6. À la fin d'une session d'import : `npm run check-latex` puis `npm run build`, puis commit + push
7. **Attribution obligatoire** (déjà en place dans `App.jsx`, section `.credit`) — ne pas la retirer tant que
   du contenu CCINP CC BY-NC-SA est présent

## Déploiement

Push sur `main` déclenche automatiquement `.github/workflows/deploy.yml` (build + déploiement Pages). Pour
pousser, il faut un token GitHub PAT scopé sur `artus25200/cap` (l'utilisateur en fournit un nouveau à chaque
session — n'est jamais stocké nulle part, à redemander).

```bash
git push https://artus25200:<TOKEN>@github.com/artus25200/cap.git main
```

Pour vérifier qu'un déploiement a réussi (API GitHub, avec le même token) :
```bash
curl -s -H "Authorization: token <TOKEN>" "https://api.github.com/repos/artus25200/cap/actions/runs?per_page=1"
```

## Supabase

- Organisation : `cap` (id `fwhtmdbhlgsaogrqhtdy`)
- Projet : `cap` (id `iziqchfhcoijqiczbvlo`), région `eu-west-1`, tier gratuit
- Table `attempts` (id, user_id → auth.users, exercise_id, success, hints_used [ajout juillet 2026, défaut 0],
  created_at), RLS activée (policies `select_own_attempts` / `insert_own_attempts`, pas d'update/delete —
  historique en ajout seul)
- Table `user_settings` (user_id → auth.users, clé primaire ; hint_lock_minutes entier 0-10 défaut 3 ;
  updated_at), RLS activée (`select_own_user_settings` / `insert_own_user_settings` /
  `update_own_user_settings`). Une seule ligne par utilisateur (upsert côté client), pas de ligne créée à
  l'inscription — tant qu'elle n'existe pas, `useUserSettings.js` applique le défaut (3 min) côté client.
- Table `disabled_chapters` (user_id → auth.users, chapter_id, created_at ; clé primaire composite
  `(user_id, chapter_id)`), RLS activée (`select_own_disabled_chapters` / `insert_own_disabled_chapters` /
  `delete_own_disabled_chapters`). La présence d'une ligne = chapitre désactivé pour cet utilisateur ; pas de
  colonne booléenne, pas d'update — on insert/delete la ligne. Consommée par `src/lib/useChapterPrefs.js`.
- URL + clé publique déjà en dur dans `src/lib/supabaseClient.js` (c'est voulu, la clé publique est sûre à
  exposer, la sécurité est assurée par RLS)
- **Accès aux outils Supabase dans une nouvelle conversation** : reconnecter le connecteur MCP Supabase (il
  n'est pas persistant entre conversations), puis les mêmes `project_id`/`organization_id` ci-dessus
  fonctionneront directement (le projet existe déjà, ne pas en recréer un autre)

## Leçons apprises (pour ne pas refaire les mêmes erreurs)

- **JAMAIS de saut de ligne à l'intérieur d'une formule inline `$...$`** dans le contenu markdown des exercices.
  `MathText.jsx` (rendu) et `scripts/check-latex.mjs` (validation) délimitent l'inline avec la regex
  `/\$([^$\n]+?)\$/` — le `[^$\n]` exclut explicitement les sauts de ligne. Si le texte source d'une formule
  inline est réparti sur deux lignes (piège classique : habillage manuel d'un paragraphe à ~100-110 caractères
  qui coupe pile au milieu d'un `$...$`), la formule n'est JAMAIS reconnue comme telle : le `$` et le code LaTeX
  brut s'affichent tels quels dans l'appli, ET `check-latex` ne la voit pas non plus donc ne remonte aucune
  erreur (elle est juste invisible aux deux). Seul `$$...$$` (bloc) supporte les sauts de ligne internes. 93
  formules cassées de cette façon ont été trouvées et corrigées d'un coup en juillet 2026 avec
  `scripts/fix-broken-inline-latex.mjs` (dans le repo — `node scripts/fix-broken-inline-latex.mjs` pour un
  dry-run listant les occurrences, `--fix` pour corriger en place). Réflexe à avoir en écrivant un nouvel
  exercice : ne jamais laisser le habillage automatique de ligne couper à l'intérieur d'un `$...$`, quitte à
  laisser une ligne plus longue que les autres. Lancer ce script en dry-run de temps en temps pour vérifier.

- **GitHub Pages doit être en mode "GitHub Actions"**, pas "Deploy from a branch" (`PUT /repos/{owner}/{repo}/pages`
  avec `{"build_type":"workflow"}` si jamais ça se dérègle — vérifiable via `GET` sur la même route, champ
  `build_type`)
- **Les liens magiques Supabase (OTP) sont peu fiables** : un scanner de sécurité côté email peut griller le
  lien à usage unique avant que l'utilisateur ne clique dessus ("One-time token not found" dans les logs auth).
  D'où le passage à email + mot de passe classique (`signUp` / `signInWithPassword`).
- **`emailRedirectTo` ne suffit pas seul** : Supabase a aussi une liste blanche de redirection (Dashboard →
  Authentication → URL Configuration → Site URL + Redirect URLs) qui doit inclure l'URL réelle du site déployé,
  sinon ça retombe sur `localhost` par défaut. Aucun outil MCP n'expose ce réglage, doit être fait à la main par
  l'utilisateur dans le dashboard.
- **`import.meta.glob` de Vite** lit les fichiers au build, donc une erreur de contenu (YAML cassé, chapitre
  inexistant) ne fait PAS échouer `vite build` lui-même — d'où l'existence de `validate-content.mjs` en amont,
  qui lui fait vraiment échouer le build.
- **KaTeX en mode `throwOnError: false`** (utilisé dans l'app pour ne pas planter l'UI sur une formule
  imparfaite) masque les erreurs silencieusement — d'où `check-latex.mjs` qui teste en `throwOnError: true`.
- Cap ne doit **pas** contenir de reproduction d'exercices dont la licence ne l'autorise pas explicitement
  (voir refus initial de scraper les annales générales CCINP, tous droits réservés — seule la banque orale
  CC BY-NC-SA a été jugée utilisable, avec attribution).

## Idées en attente (non implémentées)

- Groupes de classe / classement entre élèves (nécessite plus de logique multi-utilisateur, faisable maintenant
  qu'il y a une vraie base de données)
- Import des probabilités (chapitres 2e année à créer)
- Code-splitting (le bundle JS dépasse 500 Ko à cause de KaTeX + Supabase, avertissement Vite non bloquant)
