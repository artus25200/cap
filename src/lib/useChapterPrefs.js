import { useEffect, useState, useCallback } from "react";
import { supabase } from "./supabaseClient.js";

// ---------------------------------------------------------------------------
// Préférences d'activation des chapitres : un chapitre désactivé n'est plus
// proposé par le flux automatique de l'onglet "S'entraîner" (il reste
// consultable manuellement dans "Explorer"). Persisté côté utilisateur dans
// la table Supabase `disabled_chapters` (RLS : chacun ne voit/modifie que ses
// propres lignes) — même pattern que `attempts` dans useSupabaseHistory.js.
// La présence d'une ligne (user_id, chapter_id) signifie "désactivé" ; par
// défaut (aucune ligne) un chapitre est activé.
// ---------------------------------------------------------------------------

export function useChapterPrefs(userId, allChapterIds) {
  const [disabled, setDisabled] = useState(() => new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    setLoading(true);
    supabase
      .from("disabled_chapters")
      .select("chapter_id")
      .eq("user_id", userId)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error("Erreur de chargement des préférences de chapitres :", error.message);
          setDisabled(new Set());
        } else {
          setDisabled(new Set(data.map((row) => row.chapter_id)));
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const isEnabled = useCallback((id) => !disabled.has(id), [disabled]);

  // Bascule un seul chapitre : mise à jour locale immédiate (optimiste) +
  // écriture en base en arrière-plan.
  const toggleChapter = useCallback(
    (id) => {
      setDisabled((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
          supabase
            .from("disabled_chapters")
            .delete()
            .eq("user_id", userId)
            .eq("chapter_id", id)
            .then(({ error }) => {
              if (error) console.error("Erreur de mise à jour des préférences :", error.message);
            });
        } else {
          next.add(id);
          supabase
            .from("disabled_chapters")
            .insert({ user_id: userId, chapter_id: id })
            .then(({ error }) => {
              if (error) console.error("Erreur de mise à jour des préférences :", error.message);
            });
        }
        return next;
      });
    },
    [userId]
  );

  // Active/désactive une liste de chapitres d'un coup (raccourci "2e année").
  const setChaptersEnabled = useCallback(
    (ids, enabled) => {
      setDisabled((prev) => {
        const next = new Set(prev);
        ids.forEach((id) => {
          if (enabled) next.delete(id);
          else next.add(id);
        });
        return next;
      });
      if (enabled) {
        supabase
          .from("disabled_chapters")
          .delete()
          .eq("user_id", userId)
          .in("chapter_id", ids)
          .then(({ error }) => {
            if (error) console.error("Erreur de mise à jour des préférences :", error.message);
          });
      } else {
        supabase
          .from("disabled_chapters")
          .upsert(
            ids.map((id) => ({ user_id: userId, chapter_id: id })),
            { onConflict: "user_id,chapter_id" }
          )
          .then(({ error }) => {
            if (error) console.error("Erreur de mise à jour des préférences :", error.message);
          });
      }
    },
    [userId]
  );

  const enabledChapterIds = allChapterIds.filter((id) => !disabled.has(id));

  return { isEnabled, toggleChapter, setChaptersEnabled, enabledChapterIds, loading };
}
