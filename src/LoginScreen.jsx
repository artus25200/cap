import { useState } from "react";
import { Compass, Lock, Mail } from "lucide-react";
import { supabase } from "./lib/supabaseClient.js";

export default function LoginScreen() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmSent, setConfirmSent] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setStatus("error");
        setErrorMsg(error.message);
        return;
      }
      // Si la confirmation par email est activée sur le projet, la session
      // est nulle tant que le lien de confirmation n'a pas été cliqué.
      if (!data.session) {
        setConfirmSent(true);
        setStatus("idle");
        return;
      }
      // Confirmation désactivée : la session est déjà active, rien à faire de plus.
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setStatus("error");
        setErrorMsg(
          error.message === "Invalid login credentials"
            ? "Email ou mot de passe incorrect."
            : error.message
        );
        return;
      }
    }
    setStatus("idle");
  }

  if (confirmSent) {
    return (
      <div className="login-shell">
        <GlobalLoginStyle />
        <div className="login-card">
          <div className="login-wordmark">
            <Compass size={26} strokeWidth={2.3} />
            Cap
          </div>
          <div className="login-sent">
            ✓ Compte créé. Un email de confirmation a été envoyé à {email} — clique sur le lien une seule fois
            pour activer ton compte, puis reviens te connecter ici.
          </div>
          <button className="login-link-btn" onClick={() => { setConfirmSent(false); setMode("login"); }}>
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-shell">
      <GlobalLoginStyle />
      <div className="login-card">
        <div className="login-wordmark">
          <Compass size={26} strokeWidth={2.3} />
          Cap
        </div>
        <div className="login-tagline">
          {mode === "login" ? "Connecte-toi pour retrouver ta progression." : "Crée ton compte pour commencer."}
        </div>

        <form onSubmit={submit}>
          <div className="login-input-wrap">
            <Mail size={15} className="login-input-icon" />
            <input
              className="login-input"
              type="email"
              placeholder="ton@email.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div className="login-input-wrap">
            <Lock size={15} className="login-input-icon" />
            <input
              className="login-input"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              minLength={6}
              required
            />
          </div>
          <button className="login-btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "..." : mode === "login" ? "Se connecter" : "Créer mon compte"}
          </button>
          {status === "error" && <div className="login-error">{errorMsg}</div>}
        </form>

        <button
          className="login-link-btn"
          onClick={() => {
            setMode(mode === "login" ? "signup" : "login");
            setStatus("idle");
            setErrorMsg("");
          }}
        >
          {mode === "login" ? "Pas encore de compte ? En créer un" : "Déjà un compte ? Se connecter"}
        </button>
      </div>
    </div>
  );
}

function GlobalLoginStyle() {
  return (
    <style>{`
      .login-shell{
        min-height:100vh; display:flex; align-items:center; justify-content:center;
        background:#fff; font-family:'Inter', sans-serif; padding:20px;
      }
      .login-card{ width:100%; max-width:380px; text-align:center; }
      .login-wordmark{
        font-weight:800; font-size:26px; display:flex; align-items:center;
        justify-content:center; gap:8px; margin-bottom:6px; color:#15151A;
      }
      .login-wordmark svg{ color:#4F46E5; }
      .login-tagline{ color:#6E6E78; font-size:13.5px; margin-bottom:28px; }
      .login-input-wrap{ position:relative; margin-bottom:10px; }
      .login-input-icon{ position:absolute; left:14px; top:50%; transform:translateY(-50%); color:#6E6E78; }
      .login-input{
        width:100%; padding:13px 14px 13px 38px; border-radius:14px; border:1px solid #E7E7EC;
        font-size:14.5px; font-family:inherit; outline:none; box-sizing:border-box;
      }
      .login-input:focus{ border-color:#4F46E5; }
      .login-btn{
        width:100%; padding:13px 0; border-radius:14px; border:none; background:#4F46E5;
        color:#fff; font-weight:700; font-size:14.5px; cursor:pointer; margin-top:6px;
      }
      .login-btn:disabled{ opacity:0.6; cursor:default; }
      .login-link-btn{
        display:block; width:100%; background:none; border:none; color:#4F46E5;
        font-size:12.5px; font-weight:600; margin-top:18px; cursor:pointer; font-family:inherit;
      }
      .login-sent{ color:#16A34A; font-size:14px; font-weight:500; line-height:1.6; margin:10px 0 4px; }
      .login-error{ color:#DC2626; font-size:12.5px; margin-top:8px; }
    `}</style>
  );
}
