import { useState, useEffect, useCallback } from "react";

// ---------------------------------------------------------------------------
// Préférences d'activation des chapitres : un chapitre désactivé n'est plus
// proposé par le flux automatique de l'onglet "S'entraîner" (il reste
// consultable manuellement dans "Explorer"). Persisté en localStorage, par
// utilisateur (clé préfixée par son id) — pas besoin d'aller-retour réseau
// pour un simple interrupteur.
// ---------------------------------------------------------------------------

function storageKey(userId) {
  return `cap:disabledChapters:${userId}`;
}

function readDisabled(userId) {
  try {
    const raw = localStorage.getItem(storageKey(userId));
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function useChapterPrefs(userId, allChapterIds) {
  const [disabled, setDisabled] = useState(() => readDisabled(userId));

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(userId), JSON.stringify([...disabled]));
    } catch {
      // stockage indisponible (mode privé, quota...) : on continue sans persister
    }
  }, [disabled, userId]);

  const isEnabled = useCallback((id) => !disabled.has(id), [disabled]);

  const toggleChapter = useCallback((id) => {
    setDisabled((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const setChaptersEnabled = useCallback((ids, enabled) => {
    setDisabled((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => {
        if (enabled) next.delete(id);
        else next.add(id);
      });
      return next;
    });
  }, []);

  const enabledChapterIds = allChapterIds.filter((id) => !disabled.has(id));

  return { isEnabled, toggleChapter, setChaptersEnabled, enabledChapterIds };
}
