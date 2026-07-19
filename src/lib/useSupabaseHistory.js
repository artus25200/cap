import { useEffect, useState, useCallback } from "react";
import { supabase } from "./supabaseClient.js";

export function useSupabaseHistory(userId) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    setLoading(true);
    supabase
      .from("attempts")
      .select("exercise_id, success, hints_used, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error("Erreur de chargement de l'historique :", error.message);
          setHistory([]);
        } else {
          setHistory(
            data.map((row) => ({
              exerciseId: row.exercise_id,
              success: row.success,
              hintsUsed: row.hints_used ?? 0,
              ts: new Date(row.created_at).getTime(),
            }))
          );
        }
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  // Ajoute une tentative : mise à jour locale immédiate (optimiste) +
  // insertion en base en arrière-plan. Retourne le nouvel historique pour un
  // usage synchrone (ex: choisir le prochain exercice sans attendre le
  // serveur). `entry.hintsUsed` : nombre d'indices consultés avant de
  // répondre (0 par défaut) — réduit le gain de score sur une réussite.
  const recordAttempt = useCallback(
    (entry) => {
      const hintsUsed = entry.hintsUsed ?? 0;
      let next;
      setHistory((prev) => {
        next = [...prev, { ...entry, hintsUsed }];
        return next;
      });
      supabase
        .from("attempts")
        .insert({
          user_id: userId,
          exercise_id: entry.exerciseId,
          success: entry.success,
          hints_used: hintsUsed,
        })
        .then(({ error }) => {
          if (error) console.error("Erreur d'enregistrement de la tentative :", error.message);
        });
      return next;
    },
    [userId]
  );

  return { history, recordAttempt, loading };
}
