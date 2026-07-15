import { createClient } from "@supabase/supabase-js";

// Clé publique (publishable) : sûre à exposer côté client, la sécurité
// réelle est assurée par les policies RLS sur chaque table côté serveur.
const SUPABASE_URL = "https://iziqchfhcoijqiczbvlo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Bd1F0hoPrQtc6JUOr7-H2g_88jGyCOE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
