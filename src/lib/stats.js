// ---------------------------------------------------------------------------
// Score par chapitre : note sur 10, mise à jour à chaque tentative.
//
// Le delta appliqué à chaque tentative dépend de trois facteurs (demande
// explicite) :
//  1. la difficulté de l'exercice (modifie l'ampleur du delta : -2 si facile,
//     0 si normal, +2 si difficile — un échec sur un exo facile coûte donc
//     cher, un échec sur un exo difficile ne coûte presque rien, et
//     inversement pour une réussite)
//  2. le pourcentage de lien exercice→chapitre (un exo à 20% dans un chapitre
//     ne fait bouger son score qu'à 20% de ce qu'il ferait bouger le chapitre
//     où il est à 100%)
//  3. le nombre d'exercices déjà réussis dans ce chapitre (rendements
//     décroissants : les premières réussites comptent plus, les suivantes de
//     moins en moins — seulement sur les réussites, pas sur les échecs, pour
//     qu'une régression reste toujours pleinement signifiante)
// ---------------------------------------------------------------------------

const BASE_DELTA = 2;
const START_SCORE = 5;

function difficultyModifier(level) {
  if (level <= 2) return -2; // facile
  if (level >= 4) return 2; // difficile
  return 0; // normal
}

// Un indice consulté avant de réussir réduit le gain de score obtenu sur
// cette réussite (mais ne change rien à une pénalité d'échec : si tu échoues
// malgré les indices, tu n'es de toute façon pas récompensé). Décroissance
// linéaire avec un plancher pour ne jamais annuler complètement le gain.
function hintPenaltyFactor(hintsUsed = 0) {
  return Math.max(0.3, 1 - 0.2 * hintsUsed);
}

export function chapterStats(history, exercises, chapterId) {
  let score = START_SCORE;
  let successesSoFar = 0;
  let weightedAttempts = 0;

  history.forEach((h) => {
    const ex = exercises.find((e) => e.id === h.exerciseId);
    if (!ex) return;
    const link = ex.chapters.find((c) => c.id === chapterId);
    if (!link) return;

    weightedAttempts += link.weight / 100;

    let delta = h.success
      ? BASE_DELTA + difficultyModifier(ex.level)
      : -BASE_DELTA + difficultyModifier(ex.level);

    if (h.success) {
      const diminishing = 1 / (1 + successesSoFar / 6);
      delta *= diminishing;
      delta *= hintPenaltyFactor(h.hintsUsed);
      successesSoFar += 1;
    }

    delta *= link.weight / 100;
    score += delta;
  });

  score = Math.max(1, Math.min(10, score));
  const ticks = weightedAttempts ? Math.max(1, Math.round((score / 10) * 5)) : 0;
  return { attempts: weightedAttempts, score, ticks };
}

// ---------------------------------------------------------------------------
// Score global : même logique que chapterStats mais sur TOUTES les
// tentatives, sans pondération par chapitre (chaque tentative compte à 100%
// pour ce score d'ensemble). Sert pour l'affichage "score global" du profil
// et pour le graphique d'évolution.
// ---------------------------------------------------------------------------

export function globalStats(history, exercises) {
  let score = START_SCORE;
  let successesSoFar = 0;

  history.forEach((h) => {
    const ex = exercises.find((e) => e.id === h.exerciseId);
    if (!ex) return;

    let delta = h.success
      ? BASE_DELTA + difficultyModifier(ex.level)
      : -BASE_DELTA + difficultyModifier(ex.level);

    if (h.success) {
      const diminishing = 1 / (1 + successesSoFar / 6);
      delta *= diminishing;
      delta *= hintPenaltyFactor(h.hintsUsed);
      successesSoFar += 1;
    }

    score += delta;
  });

  score = Math.max(1, Math.min(10, score));
  return { attempts: history.length, score };
}

// ---------------------------------------------------------------------------
// Série temporelle du score global, un point par semaine (dernières
// `weeksBack` semaines ISO jusqu'à aujourd'hui), pour le graphique
// d'évolution du profil. `score` vaut `null` tant qu'aucune tentative n'a
// encore eu lieu à cette date (pour ne pas afficher un score par défaut de 5
// avant le premier exercice).
// ---------------------------------------------------------------------------

export function weeklyScoreSeries(history, exercises, weeksBack = 8) {
  const now = Date.now();
  const points = [];
  for (let i = weeksBack - 1; i >= 0; i--) {
    const weekEndTs = now - i * 7 * 86400000;
    const upToHere = history.filter((h) => h.ts <= weekEndTs);
    const { score } = globalStats(upToHere, exercises);
    points.push({
      weekKey: isoWeekKey(weekEndTs),
      score: upToHere.length ? score : null,
    });
  }
  return points;
}

// Note affichée sur l'exercice lui-même (dérivée du niveau, 1-5 -> 2-10).
export function exerciseNote(level) {
  return level * 2;
}

// ---------------------------------------------------------------------------
// Réapparition espacée : un exo raté revient plus probable ~2 semaines après,
// et est mis en sourdine juste après un échec frais pour ne pas boucler dessus.
// ---------------------------------------------------------------------------

export function resurfaceMultiplier(history, exerciseId, now = Date.now()) {
  const attempts = history.filter((h) => h.exerciseId === exerciseId);
  if (!attempts.length) return 1;
  const last = attempts[attempts.length - 1];
  if (last.success) return 1;
  const daysSince = (now - last.ts) / 86400000;
  if (daysSince >= 14) return 2.5;
  if (daysSince < 2) return 0.3;
  return 1;
}

// ---------------------------------------------------------------------------
// Sélection en mode "flow" : cible un chapitre selon son score (faible score
// = priorité), puis un exercice dans ce chapitre pondéré par son poids et sa
// réapparition espacée.
// ---------------------------------------------------------------------------

export function pickNext(history, exercises, chapters, lastExerciseId) {
  const chaptersWithContent = chapters.filter((c) =>
    exercises.some((ex) => ex.chapters.some((link) => link.id === c.id))
  );
  if (chaptersWithContent.length === 0) return null;

  const chapterWeights = chaptersWithContent.map((c) => {
    const { attempts, score } = chapterStats(history, exercises, c.id);
    const w = attempts === 0 ? 3 : ((10 - score) / 10) * 2 + 0.4;
    return { id: c.id, w };
  });
  const totalW = chapterWeights.reduce((s, x) => s + x.w, 0);
  let r = Math.random() * totalW;
  let chapterId = chapterWeights[0].id;
  for (const cw of chapterWeights) {
    if (r < cw.w) {
      chapterId = cw.id;
      break;
    }
    r -= cw.w;
  }

  const pool = exercises
    .map((ex) => ({ ex, link: ex.chapters.find((c) => c.id === chapterId) }))
    .filter((x) => x.link);
  const candidates = pool.filter((x) => x.ex.id !== lastExerciseId);
  const usable = candidates.length ? candidates : pool;
  const weighted = usable.map((x) => ({
    ...x,
    w: x.link.weight * resurfaceMultiplier(history, x.ex.id),
  }));
  const totalExW = weighted.reduce((s, x) => s + x.w, 0);
  let rr = Math.random() * totalExW;
  let chosen = weighted[0];
  for (const x of weighted) {
    if (rr < x.w) {
      chosen = x;
      break;
    }
    rr -= x.w;
  }

  const { attempts, score } = chapterStats(history, exercises, chapterId);
  const reason = attempts === 0 ? "Découverte" : score < 5 ? "Point faible" : "Consolidation";

  return { exercise: chosen.ex, targetChapterId: chapterId, reason };
}

// ---------------------------------------------------------------------------
// Sélection en mode "Explorer" : pas de ciblage par point faible, juste un
// tirage pondéré par la réapparition espacée dans un pool déjà filtré par
// l'utilisateur (chapitre / notion / banque / classique / difficulté).
// ---------------------------------------------------------------------------

export function pickFromPool(history, pool, lastExerciseId) {
  if (!pool.length) return null;
  const candidates = pool.filter((e) => e.id !== lastExerciseId);
  const usable = candidates.length ? candidates : pool;
  const weighted = usable.map((ex) => ({ ex, w: resurfaceMultiplier(history, ex.id) }));
  const total = weighted.reduce((s, x) => s + x.w, 0);
  let r = Math.random() * total;
  let chosen = weighted[0].ex;
  for (const x of weighted) {
    if (r < x.w) {
      chosen = x.ex;
      break;
    }
    r -= x.w;
  }
  return chosen;
}

// ---------------------------------------------------------------------------
// Semaine ISO courante, pour le compteur hebdomadaire du profil.
// ---------------------------------------------------------------------------

export function isoWeekKey(ts) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  const weekNum =
    1 +
    Math.round(((d - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  return `${d.getFullYear()}-W${weekNum}`;
}
