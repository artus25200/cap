// Un exercice peut compter pour plusieurs chapitres avec des poids différents
// (link.weight, 0-100). Une réussite sur un exercice à 20% dans un chapitre ne
// compte que pour 0.2 "tentative" de ce chapitre — ça évite qu'un exo très
// périphérique fasse gonfler artificiellement la maîtrise affichée.

export function chapterStats(history, exercises, chapterId) {
  let weightedAttempts = 0;
  let weightedSuccesses = 0;
  history.forEach((h) => {
    const ex = exercises.find((e) => e.id === h.exerciseId);
    if (!ex) return;
    const link = ex.chapters.find((c) => c.id === chapterId);
    if (!link) return;
    const w = link.weight / 100;
    weightedAttempts += w;
    if (h.success) weightedSuccesses += w;
  });
  const rate = weightedAttempts ? weightedSuccesses / weightedAttempts : 0;
  const ticks = weightedAttempts ? Math.max(1, Math.round(rate * 5)) : 0;
  return { attempts: weightedAttempts, ticks, rate };
}

export function pickNext(history, exercises, chapters, lastExerciseId) {
  // 1. Choisir un chapitre cible, en favorisant les points faibles et la découverte.
  const chapterWeights = chapters.map((c) => {
    const { attempts, rate } = chapterStats(history, exercises, c.id);
    const w = attempts === 0 ? 3 : (1 - rate) * 2 + 0.4;
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

  // 2. Dans ce chapitre, choisir un exercice pondéré par sa pertinence (link.weight)
  //    pour ce chapitre précis — un exo à 100% a plus de chances qu'un exo à 20%.
  const pool = exercises
    .map((ex) => ({ ex, link: ex.chapters.find((c) => c.id === chapterId) }))
    .filter((x) => x.link);
  const candidates = pool.filter((x) => x.ex.id !== lastExerciseId);
  const usable = candidates.length ? candidates : pool;
  const totalExW = usable.reduce((s, x) => s + x.link.weight, 0);
  let rr = Math.random() * totalExW;
  let chosen = usable[0];
  for (const x of usable) {
    if (rr < x.link.weight) {
      chosen = x;
      break;
    }
    rr -= x.link.weight;
  }

  const { attempts, rate } = chapterStats(history, exercises, chapterId);
  const reason = attempts === 0 ? "Découverte" : rate < 0.5 ? "Point faible" : "Consolidation";

  return { exercise: chosen.ex, targetChapterId: chapterId, reason };
}
