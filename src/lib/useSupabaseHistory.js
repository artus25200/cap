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
      .select("exercise_id, success, created_at")
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

  // Ajoute une tentative : mise à jour locale immédiate (optimiste) + insertion
  // en base en arrière-plan. Retourne le nouvel historique pour un usage
  // synchrone (ex: choisir le prochain exercice sans attendre le serveur).
  const recordAttempt = useCallback(
    (entry) => {
      let next;
      setHistory((prev) => {
        next = [...prev, entry];
        return next;
      });
      supabase
        .from("attempts")
        .insert({ user_id: userId, exercise_id: entry.exerciseId, success: entry.success })
        .then(({ error }) => {
          if (error) console.error("Erreur d'enregistrement de la tentative :", error.message);
        });
      return next;
    },
    [userId]
  );

  return { history, recordAttempt, loading };
}
