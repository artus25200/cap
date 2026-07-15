import { useState } from "react";
import { Compass, Mail } from "lucide-react";
import { supabase } from "./lib/supabaseClient.js";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  async function sendMagicLink(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.href },
    });
    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      setStatus("sent");
    }
  }

  return (
    <div className="login-shell">
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
        .login-tagline{ color:#6E6E78; font-size:13.5px; margin-bottom:32px; }
        .login-input{
          width:100%; padding:13px 14px; border-radius:14px; border:1px solid #E7E7EC;
          font-size:14.5px; font-family:inherit; margin-bottom:10px; outline:none;
        }
        .login-input:focus{ border-color:#4F46E5; }
        .login-btn{
          width:100%; padding:13px 0; border-radius:14px; border:none; background:#4F46E5;
          color:#fff; font-weight:700; font-size:14.5px; cursor:pointer;
          display:flex; align-items:center; justify-content:center; gap:6px;
        }
        .login-btn:disabled{ opacity:0.6; cursor:default; }
        .login-note{ color:#6E6E78; font-size:12px; margin-top:16px; line-height:1.5; }
        .login-sent{ color:#16A34A; font-size:14px; font-weight:600; }
        .login-error{ color:#DC2626; font-size:12.5px; margin-top:8px; }
      `}</style>
      <div className="login-card">
        <div className="login-wordmark">
          <Compass size={26} strokeWidth={2.3} />
          Cap
        </div>
        <div className="login-tagline">Connecte-toi pour retrouver ta progression.</div>

        {status === "sent" ? (
          <div className="login-sent">
            ✓ Lien envoyé à {email}. Ouvre l'email et clique sur le lien pour te connecter.
          </div>
        ) : (
          <form onSubmit={sendMagicLink}>
            <input
              className="login-input"
              type="email"
              placeholder="ton@email.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="login-btn" type="submit" disabled={status === "sending"}>
              <Mail size={16} />
              {status === "sending" ? "Envoi..." : "Recevoir un lien de connexion"}
            </button>
            {status === "error" && <div className="login-error">{errorMsg}</div>}
          </form>
        )}
        <div className="login-note">
          Pas de mot de passe : tu reçois un lien par email, valable une fois, pour te connecter.
        </div>
      </div>
    </div>
  );
}
