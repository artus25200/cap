import { useEffect, useState, useCallback } from "react";
import { supabase } from "./supabaseClient.js";

// ---------------------------------------------------------------------------
// Réglages utilisateur persistés côté Supabase (table `user_settings`, une
// ligne par utilisateur, RLS). Pour l'instant : uniquement la durée (en
// minutes, 0 à 10) avant l'apparition du premier indice quand on clique sur
// "Je bloque". Défaut : 3 minutes, appliqué tant que la ligne n'existe pas
// encore en base (comportement identique à la colonne `default` SQL, mais
// géré côté client pour ne pas avoir à insérer une ligne à la création du
// compte).
// ---------------------------------------------------------------------------

const DEFAULT_HINT_LOCK_MINUTES = 3;

export function useUserSettings(userId) {
  const [hintLockMinutes, setHintLockMinutesState] = useState(DEFAULT_HINT_LOCK_MINUTES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    setLoading(true);
    supabase
      .from("user_settings")
      .select("hint_lock_minutes")
      .eq("user_id", userId)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error("Erreur de chargement des réglages :", error.message);
        } else if (data) {
          setHintLockMinutesState(data.hint_lock_minutes);
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const setHintLockMinutes = useCallback(
    (minutes) => {
      const clamped = Math.max(0, Math.min(10, Math.round(minutes)));
      setHintLockMinutesState(clamped);
      supabase
        .from("user_settings")
        .upsert(
          { user_id: userId, hint_lock_minutes: clamped, updated_at: new Date().toISOString() },
          { onConflict: "user_id" }
        )
        .then(({ error }) => {
          if (error) console.error("Erreur de mise à jour des réglages :", error.message);
        });
    },
    [userId]
  );

  return { hintLockMinutes, setHintLockMinutes, loading };
}
