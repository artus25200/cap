import { useState, useMemo, useRef, useEffect } from "react";
import { Check, X, Compass } from "lucide-react";

// ---------------------------------------------------------------------------
// Données factices — à remplacer par un vrai catalogue plus tard.
// ---------------------------------------------------------------------------

const CHAPTERS = [
  { id: "complexes", name: "Nombres complexes" },
  { id: "suites", name: "Suites réelles" },
  { id: "fonctions", name: "Fonctions usuelles & DL" },
  { id: "continuite", name: "Continuité & dérivabilité" },
  { id: "algebre", name: "Algèbre linéaire" },
  { id: "polynomes", name: "Polynômes" },
  { id: "matrices", name: "Matrices & systèmes" },
  { id: "probas", name: "Probabilités & dénombrement" },
];

const STUBS = {
  complexes: [
    ["Résoudre z² + z + 1 = 0 et placer les solutions dans le plan.", 2],
    ["Linéariser cos³(θ) à l'aide des exponentielles complexes.", 3],
    ["Déterminer l'ensemble des points d'affixe z tels que |z-1| = |z+i|.", 3],
  ],
  suites: [
    ["Étudier la convergence de (u_n) définie par u_{n+1} = √(u_n + 2).", 3],
    ["Montrer qu'une suite croissante majorée converge.", 1],
    ["Étudier une suite définie par une récurrence linéaire d'ordre 2.", 4],
  ],
  fonctions: [
    ["Donner le DL à l'ordre 3 de ln(1+x) en 0.", 2],
    ["Étudier les branches infinies de f(x) = x·e^(1/x).", 4],
    ["Comparer la croissance de x^x et e^x en +∞.", 3],
  ],
  continuite: [
    ["Montrer qu'une fonction continue sur un segment est bornée.", 2],
    ["Étudier la dérivabilité en 0 de x ↦ x·sin(1/x).", 3],
    ["Appliquer le théorème des valeurs intermédiaires à un exemple concret.", 1],
  ],
  algebre: [
    ["Montrer qu'une famille de 3 vecteurs de ℝ² est liée.", 2],
    ["Déterminer une base du noyau d'une application linéaire donnée.", 3],
    ["Montrer que deux sous-espaces sont supplémentaires.", 4],
  ],
  polynomes: [
    ["Factoriser X⁴ - 1 dans ℝ[X] puis dans ℂ[X].", 2],
    ["Effectuer la division euclidienne de X³+2X-1 par X-1.", 1],
    ["Étudier la multiplicité des racines d'un polynôme dérivé.", 4],
  ],
  matrices: [
    ["Calculer l'inverse d'une matrice 3×3 par la méthode du pivot.", 2],
    ["Résoudre un système linéaire à paramètre par la méthode de Gauss.", 3],
    ["Déterminer le rang d'une famille de vecteurs via une matrice.", 3],
  ],
  probas: [
    ["Dénombrer les anagrammes d'un mot avec lettres répétées.", 1],
    ["Calculer une probabilité conditionnelle avec la formule de Bayes.", 3],
    ["Étudier une variable aléatoire suivant une loi binomiale.", 2],
  ],
};

const EXERCISES = CHAPTERS.flatMap((c) =>
  STUBS[c.id].map(([text, level], i) => ({
    id: `${c.id}-${i}`,
    chapterId: c.id,
    text,
    level,
  }))
);

// Historique factice pour que le profil ne soit pas vide au premier chargement.
function seedHistory() {
  const seed = [
    ["complexes", 0.8, 6],
    ["suites", 0.3, 5],
    ["fonctions", 0.5, 4],
    ["continuite", 0, 0],
    ["algebre", 0.9, 3],
    ["polynomes", 0.4, 5],
    ["matrices", 0, 0],
    ["probas", 0.6, 4],
  ];
  const out = [];
  seed.forEach(([chapterId, rate, count]) => {
    const exs = EXERCISES.filter((e) => e.chapterId === chapterId);
    for (let i = 0; i < count; i++) {
      out.push({
        chapterId,
        exerciseId: exs[i % exs.length].id,
        success: Math.random() < rate,
      });
    }
  });
  return out;
}

// ---------------------------------------------------------------------------

function chapterStats(history, chapterId) {
  const rows = history.filter((h) => h.chapterId === chapterId);
  const attempts = rows.length;
  const successes = rows.filter((r) => r.success).length;
  const rate = attempts ? successes / attempts : 0;
  const ticks = attempts ? Math.max(1, Math.round(rate * 5)) : 0;
  return { attempts, successes, rate, ticks };
}

function pickWeighted(history, lastExerciseId) {
  const weights = CHAPTERS.map((c) => {
    const { attempts, rate } = chapterStats(history, c.id);
    const w = attempts === 0 ? 3 : (1 - rate) * 2 + 0.4;
    return { id: c.id, w };
  });
  const total = weights.reduce((s, x) => s + x.w, 0);
  let r = Math.random() * total;
  let chosen = weights[0].id;
  for (const w of weights) {
    if (r < w.w) {
      chosen = w.id;
      break;
    }
    r -= w.w;
  }
  const pool = EXERCISES.filter((e) => e.chapterId === chosen);
  const candidates = pool.filter((e) => e.id !== lastExerciseId);
  const exercise = (candidates.length ? candidates : pool)[
    Math.floor(Math.random() * (candidates.length ? candidates.length : pool.length))
  ];
  const { attempts, rate } = chapterStats(history, chosen);
  const reason =
    attempts === 0 ? "Découverte" : rate < 0.5 ? "Point faible" : "Consolidation";
  return { exercise, reason };
}

// ---------------------------------------------------------------------------

export default function App() {
  const [tab, setTab] = useState("entrainer");
  const [history, setHistory] = useState(seedHistory);
  const [{ exercise, reason }, setCurrent] = useState(() => pickWeighted([], null));
  const [feedback, setFeedback] = useState(null); // 'success' | 'fail' | null
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function answer(success) {
    if (feedback) return; // évite le double-clic pendant la transition
    setFeedback(success ? "success" : "fail");
    const entry = { chapterId: exercise.chapterId, exerciseId: exercise.id, success };
    const nextHistory = [...history, entry];
    setHistory(nextHistory);
    timeoutRef.current = setTimeout(() => {
      setCurrent(pickWeighted(nextHistory, exercise.id));
      setFeedback(null);
    }, 550);
  }

  function skip() {
    if (feedback) return;
    setCurrent(pickWeighted(history, exercise.id));
  }

  const globalStats = useMemo(() => {
    const attempts = history.length;
    const successes = history.filter((h) => h.success).length;
    return { attempts, rate: attempts ? successes / attempts : 0 };
  }, [history]);

  const recentTrail = history.slice(-10);
  const chapterName = (id) => CHAPTERS.find((c) => c.id === id).name;

  const sortedChapters = useMemo(() => {
    return [...CHAPTERS]
      .map((c) => ({ ...c, stats: chapterStats(history, c.id) }))
      .sort((a, b) => a.stats.rate - b.stats.rate);
  }, [history]);

  return (
    <div className="shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        :root{
          --bg:#0E1526;
          --surface:#161F36;
          --surface-2:#1E2A48;
          --line: rgba(237,239,244,0.07);
          --text:#EDEFF4;
          --text-dim:#8695B0;
          --accent:#E8A33D;
          --mint:#5FB88F;
          --danger:#C1554A;
        }
        *{box-sizing:border-box;}
        .shell{
          min-height:100vh;
          background:
            repeating-linear-gradient(to bottom, transparent, transparent 27px, var(--line) 28px),
            var(--bg);
          color:var(--text);
          font-family:'IBM Plex Sans', sans-serif;
          padding: 20px 16px 48px;
          display:flex;
          justify-content:center;
        }
        .container{ width:100%; max-width:520px; }
        .header{ margin-bottom:20px; }
        .wordmark{
          font-family:'Fraunces', serif;
          font-style:italic;
          font-weight:600;
          font-size:34px;
          display:flex;
          align-items:center;
          gap:10px;
          letter-spacing:-0.5px;
        }
        .wordmark svg{ color:var(--accent); }
        .tagline{ color:var(--text-dim); font-size:13.5px; margin-top:4px; }

        .tabs{ display:flex; gap:6px; margin:20px 0 16px; background:var(--surface); padding:4px; border-radius:12px; }
        .tab{
          flex:1; text-align:center; padding:9px 0; border-radius:9px;
          font-size:13.5px; font-weight:500; cursor:pointer; color:var(--text-dim);
          transition: background .15s, color .15s;
          border:none; background:none; font-family:inherit;
        }
        .tab.active{ background:var(--surface-2); color:var(--text); }

        .card{
          background:var(--surface);
          border:1px solid var(--line);
          border-radius:16px;
          padding:20px;
        }

        /* ---- Profil ---- */
        .summary-row{ display:flex; gap:12px; margin-bottom:16px; }
        .summary-item{ flex:1; }
        .summary-num{ font-family:'IBM Plex Mono', monospace; font-size:26px; font-weight:500; }
        .summary-label{ color:var(--text-dim); font-size:11.5px; text-transform:uppercase; letter-spacing:.06em; margin-top:2px; }

        .chapter-row{ padding:12px 0; border-top:1px solid var(--line); }
        .chapter-row:first-child{ border-top:none; }
        .chapter-top{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:7px; }
        .chapter-name{ font-size:14.5px; font-weight:500; }
        .chapter-meta{ font-family:'IBM Plex Mono', monospace; font-size:11.5px; color:var(--text-dim); }
        .ticks{ display:flex; gap:4px; }
        .tick{ width:100%; height:6px; border-radius:3px; background:var(--surface-2); }
        .tick.filled.weak{ background:var(--danger); }
        .tick.filled.mid{ background:var(--accent); }
        .tick.filled.strong{ background:var(--mint); }
        .weak-badge{
          font-size:10.5px; color:var(--danger); border:1px solid var(--danger);
          padding:1px 6px; border-radius:20px; margin-left:8px;
        }

        /* ---- Entraînement ---- */
        .reason{
          display:flex; align-items:center; gap:6px;
          font-family:'IBM Plex Mono', monospace; font-size:12px;
          color:var(--accent); text-transform:uppercase; letter-spacing:.06em;
          margin-bottom:14px;
        }
        .ex-chapter{ font-size:12.5px; color:var(--text-dim); margin-bottom:6px; }
        .ex-level{ font-family:'IBM Plex Mono', monospace; font-size:12px; color:var(--text-dim); }
        .ex-text{
          font-family:'Fraunces', serif; font-size:21px; line-height:1.4;
          margin: 12px 0 22px;
        }
        .btn-row{ display:flex; gap:10px; }
        .btn{
          flex:1; padding:14px 0; border-radius:12px; border:none; cursor:pointer;
          font-family:inherit; font-size:14.5px; font-weight:600;
          display:flex; align-items:center; justify-content:center; gap:6px;
          transition: transform .1s, opacity .15s;
        }
        .btn:active{ transform: scale(0.97); }
        .btn-success{ background:var(--mint); color:#0E1526; }
        .btn-fail{ background:var(--surface-2); color:var(--text); border:1px solid var(--danger); }
        .skip{
          text-align:center; margin-top:12px; font-size:12.5px; color:var(--text-dim);
          cursor:pointer; text-decoration:underline; text-underline-offset:3px;
        }
        .card.pulse{ border-color: var(--accent); }

        .trail{ display:flex; gap:5px; margin-top:18px; }
        .dot{ width:8px; height:8px; border-radius:50%; background:var(--surface-2); }
        .dot.success{ background:var(--mint); }
        .dot.fail{ background:var(--danger); }
        .trail-label{ font-size:11px; color:var(--text-dim); margin-top:6px; }

        .note{ color:var(--text-dim); font-size:11.5px; margin-top:22px; text-align:center; line-height:1.5; }
      `}</style>

      <div className="container">
        <div className="header">
          <div className="wordmark">
            <Compass size={28} strokeWidth={2.2} />
            Cap
          </div>
          <div className="tagline">
            Elle sait où t'envoyer. Toi, tu avances — exercices factices, prototype.
          </div>
        </div>

        <div className="tabs">
          <button
            className={`tab ${tab === "entrainer" ? "active" : ""}`}
            onClick={() => setTab("entrainer")}
          >
            S'entraîner
          </button>
          <button
            className={`tab ${tab === "profil" ? "active" : ""}`}
            onClick={() => setTab("profil")}
          >
            Profil
          </button>
        </div>

        {tab === "entrainer" && (
          <>
            <div className={`card ${feedback ? "pulse" : ""}`}>
              <div className="reason">
                <span>→</span> {reason} · {chapterName(exercise.chapterId)}
              </div>
              <div className="ex-chapter">
                Exercice {exercise.id.split("-")[1] * 1 + 1} · niveau{" "}
                <span className="ex-level">
                  {"●".repeat(exercise.level)}
                  {"○".repeat(5 - exercise.level)}
                </span>
              </div>
              <div className="ex-text">{exercise.text}</div>

              <div className="btn-row">
                <button className="btn btn-success" onClick={() => answer(true)}>
                  <Check size={17} /> J'ai réussi
                </button>
                <button className="btn btn-fail" onClick={() => answer(false)}>
                  <X size={17} /> Je bloque
                </button>
              </div>
              <div className="skip" onClick={skip}>
                changer d'exercice
              </div>

              <div className="trail">
                {recentTrail.map((h, i) => (
                  <div key={i} className={`dot ${h.success ? "success" : "fail"}`} />
                ))}
              </div>
              <div className="trail-label">
                {recentTrail.length} exercice{recentTrail.length > 1 ? "s" : ""} enchaînés cette
                session
              </div>
            </div>
            <div className="note">
              Le prochain exercice est choisi pour toi — aucune sélection de chapitre à faire.
            </div>
          </>
        )}

        {tab === "profil" && (
          <div className="card">
            <div className="summary-row">
              <div className="summary-item">
                <div className="summary-num">{globalStats.attempts}</div>
                <div className="summary-label">Exercices faits</div>
              </div>
              <div className="summary-item">
                <div className="summary-num">{Math.round(globalStats.rate * 100)}%</div>
                <div className="summary-label">Taux de réussite</div>
              </div>
            </div>

            {sortedChapters.map((c) => {
              const { attempts, ticks, rate } = c.stats;
              const tone = rate < 0.4 ? "weak" : rate < 0.7 ? "mid" : "strong";
              return (
                <div className="chapter-row" key={c.id}>
                  <div className="chapter-top">
                    <div className="chapter-name">
                      {c.name}
                      {attempts >= 2 && rate < 0.5 && (
                        <span className="weak-badge">point faible</span>
                      )}
                    </div>
                    <div className="chapter-meta">
                      {attempts ? `${attempts} ex. · ${Math.round(rate * 100)}%` : "non évalué"}
                    </div>
                  </div>
                  <div className="ticks">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`tick ${i < ticks ? `filled ${tone}` : ""}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
