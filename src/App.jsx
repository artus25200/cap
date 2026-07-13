import { useState, useMemo, useRef, useEffect } from "react";
import { Check, X, Compass } from "lucide-react";
import { CHAPTERS, EXERCISES, chapterName } from "./lib/loadContent.js";
import { chapterStats, pickNext } from "./lib/stats.js";

// Historique factice pour que le profil ne soit pas vide au premier chargement.
// (En mémoire uniquement — repart à zéro au rechargement, cf. note en bas de page.)
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
    const exs = EXERCISES.filter((e) => e.chapters.some((c) => c.id === chapterId));
    for (let i = 0; i < count && exs.length; i++) {
      out.push({
        exerciseId: exs[i % exs.length].id,
        success: Math.random() < rate,
      });
    }
  });
  return out;
}

export default function App() {
  const [tab, setTab] = useState("entrainer");
  const [history, setHistory] = useState(seedHistory);
  const [current, setCurrent] = useState(() => pickNext([], EXERCISES, CHAPTERS, null));
  const [feedback, setFeedback] = useState(null); // 'success' | 'fail' | null
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const { exercise, targetChapterId, reason } = current;

  function answer(success) {
    if (feedback) return; // évite le double-clic pendant la transition
    setFeedback(success ? "success" : "fail");
    const nextHistory = [...history, { exerciseId: exercise.id, success }];
    setHistory(nextHistory);
    timeoutRef.current = setTimeout(() => {
      setCurrent(pickNext(nextHistory, EXERCISES, CHAPTERS, exercise.id));
      setFeedback(null);
    }, 550);
  }

  function skip() {
    if (feedback) return;
    setCurrent(pickNext(history, EXERCISES, CHAPTERS, exercise.id));
  }

  const globalStats = useMemo(() => {
    const attempts = history.length;
    const successes = history.filter((h) => h.success).length;
    return { attempts, rate: attempts ? successes / attempts : 0 };
  }, [history]);

  const recentTrail = history.slice(-10);

  const sortedChapters = useMemo(() => {
    return [...CHAPTERS]
      .map((c) => ({ ...c, stats: chapterStats(history, EXERCISES, c.id) }))
      .sort((a, b) => a.stats.rate - b.stats.rate);
  }, [history]);

  const secondaryChapters = exercise.chapters.filter((c) => c.id !== targetChapterId);

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
        .ex-level{ font-family:'IBM Plex Mono', monospace; font-size:12px; color:var(--text-dim); margin-bottom:6px; }
        .ex-text{
          font-family:'Fraunces', serif; font-size:21px; line-height:1.4;
          margin: 12px 0 16px;
        }
        .chips{ display:flex; flex-wrap:wrap; gap:6px; margin-bottom:22px; }
        .chip{
          font-size:11px; color:var(--text-dim); border:1px solid var(--line);
          padding:3px 8px; border-radius:20px; font-family:'IBM Plex Mono', monospace;
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
                <span>→</span> {reason} · {chapterName(targetChapterId)}
              </div>
              <div className="ex-level">
                {"●".repeat(exercise.level)}
                {"○".repeat(5 - exercise.level)}
              </div>
              <div className="ex-text">{exercise.text}</div>

              {secondaryChapters.length > 0 && (
                <div className="chips">
                  {secondaryChapters.map((c) => (
                    <span className="chip" key={c.id}>
                      touche aussi : {chapterName(c.id)} · {c.weight}%
                    </span>
                  ))}
                </div>
              )}

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
              const roundedAttempts = Math.round(attempts * 10) / 10;
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
                      {attempts ? `${roundedAttempts} ex. · ${Math.round(rate * 100)}%` : "non évalué"}
                    </div>
                  </div>
                  <div className="ticks">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className={`tick ${i < ticks ? `filled ${tone}` : ""}`} />
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
