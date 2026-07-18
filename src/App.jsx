import { useState, useMemo, useRef, useEffect } from "react";
import { Check, X, Compass, Flag, ChevronDown, Lightbulb, LogOut } from "lucide-react";
import "katex/dist/katex.min.css";
import MathText from "./lib/MathText.jsx";
import { CHAPTERS, EXERCISES, chapterName, ALL_TAGS, ALL_BANQUES } from "./lib/loadContent.js";
import { chapterStats, pickNext, pickFromPool, exerciseNote, isoWeekKey } from "./lib/stats.js";
import { useAuth } from "./lib/useAuth.js";
import { useSupabaseHistory } from "./lib/useSupabaseHistory.js";
import { useChapterPrefs } from "./lib/useChapterPrefs.js";
import { supabase } from "./lib/supabaseClient.js";
import LoginScreen from "./LoginScreen.jsx";

// TODO: remplace par ta vraie adresse pour le bouton "signaler une erreur"
const SUPPORT_EMAIL = "contact@cap-maths.fr";

export default function App() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#6E6E78" }}>
        Chargement...
      </div>
    );
  }
  if (!session) {
    return <LoginScreen />;
  }
  return <CapApp session={session} />;
}

function CapApp({ session }) {
  const [tab, setTab] = useState("entrainer");
  const { history, recordAttempt, loading: historyLoading } = useSupabaseHistory(session.user.id);

  const allChapterIds = useMemo(() => CHAPTERS.map((c) => c.id), []);
  const { isEnabled, toggleChapter, setChaptersEnabled, enabledChapterIds } = useChapterPrefs(
    session.user.id,
    allChapterIds
  );

  const weeklyCount = useMemo(() => {
    const thisWeek = isoWeekKey(Date.now());
    return history.filter((h) => isoWeekKey(h.ts) === thisWeek).length;
  }, [history]);

  const unlockedMethods = useMemo(() => {
    const seen = new Set();
    const list = [];
    history.forEach((h) => {
      if (!h.success) return;
      const ex = EXERCISES.find((e) => e.id === h.exerciseId);
      if (ex && ex.method && !seen.has(ex.id)) {
        seen.add(ex.id);
        list.push(ex.method);
      }
    });
    return list;
  }, [history]);

  return (
    <div className="shell">
      <GlobalStyle />
      <div className="container">
        <div className="header">
          <div className="header-top">
            <div className="wordmark">
              <Compass size={26} strokeWidth={2.3} />
              Cap
            </div>
            <button
              className="logout-btn"
              onClick={() => supabase.auth.signOut()}
              title={session.user.email}
            >
              <LogOut size={14} /> Déconnexion
            </button>
          </div>
          <div className="tagline">MPSI · MP2I · MP · MPI</div>
        </div>

        <div className="tabs">
          {[
            ["entrainer", "S'entraîner"],
            ["explorer", "Explorer"],
            ["profil", "Profil"],
          ].map(([id, label]) => (
            <button
              key={id}
              className={`tab ${tab === id ? "active" : ""}`}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {historyLoading ? (
          <div className="card">
            <div className="empty">Chargement de ta progression...</div>
          </div>
        ) : (
          <>
            {tab === "entrainer" && (
              <FlowTab
                history={history}
                recordAttempt={recordAttempt}
                enabledChapterIds={enabledChapterIds}
              />
            )}
            {tab === "explorer" && <ExplorerTab history={history} recordAttempt={recordAttempt} />}
            {tab === "profil" && (
              <ProfilTab
                history={history}
                weeklyCount={weeklyCount}
                methods={unlockedMethods}
                isEnabled={isEnabled}
                toggleChapter={toggleChapter}
                setChaptersEnabled={setChaptersEnabled}
              />
            )}
          </>
        )}

        <div className="credit">
          Certains exercices proviennent de la Banque orale de mathématiques CCINP (filière MP/MPI, session
          2025), sous licence{" "}
          <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/fr/" target="_blank" rel="noreferrer">
            CC BY-NC-SA 3.0 FR
          </a>
          . Merci à D. Delaunay et aux examinateurs du CCINP.
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Onglet "S'entraîner" — flux automatique, cible les points faibles.
// ---------------------------------------------------------------------------

function FlowTab({ history, recordAttempt, enabledChapterIds }) {
  const activeChapters = useMemo(
    () => CHAPTERS.filter((c) => enabledChapterIds.includes(c.id)),
    [enabledChapterIds]
  );
  const [current, setCurrent] = useState(() => pickNext(history, EXERCISES, activeChapters, null));
  const [feedback, setFeedback] = useState(null);
  const [review, setReview] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (activeChapters.length === 0) {
    return (
      <div className="card">
        <div className="empty">
          Tous les chapitres sont désactivés. Réactive-en au moins un dans l'onglet Profil pour reprendre
          l'entraînement.
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="card">
        <div className="empty">Aucun exercice disponible pour l'instant.</div>
      </div>
    );
  }

  const { exercise, targetChapterId, reason } = current;
  const secondaryChapters = exercise.chapters.filter((c) => c.id !== targetChapterId);
  const hasReviewContent = exercise.correction || exercise.method || exercise.course;

  function answer(success) {
    if (feedback) return;
    setFeedback(success ? "success" : "fail");
    const nextHistory = recordAttempt({ exerciseId: exercise.id, success, ts: Date.now() });

    if (hasReviewContent) {
      setReview(true);
      return;
    }
    timeoutRef.current = setTimeout(() => advance(nextHistory), 550);
  }

  function advance(withHistory) {
    setCurrent(pickNext(withHistory, EXERCISES, activeChapters, exercise.id));
    setFeedback(null);
    setReview(false);
  }

  function skip() {
    if (feedback) return;
    setCurrent(pickNext(history, EXERCISES, activeChapters, exercise.id));
  }

  const recentTrail = history.slice(-10);

  return (
    <>
      <div className={`card ${feedback ? "pulse-" + feedback : ""}`}>
        <div className="reason">
          <span>→</span> {reason} · {chapterName(targetChapterId)}
        </div>
        <ExerciseBody exercise={exercise} />
        {secondaryChapters.length > 0 && (
          <div className="chips">
            {secondaryChapters.map((c) => (
              <span className="chip" key={c.id}>
                touche aussi : {chapterName(c.id)} · {c.weight}%
              </span>
            ))}
          </div>
        )}

        {!review && (
          <>
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
          </>
        )}

        {review && (
          <ReviewPanel exercise={exercise} onContinue={() => advance(history)} />
        )}

        <ReportLink exercise={exercise} />

        <div className="trail">
          {recentTrail.map((h, i) => (
            <div key={i} className={`dot ${h.success ? "success" : "fail"}`} />
          ))}
        </div>
        <div className="trail-label">
          {recentTrail.length} exercice{recentTrail.length > 1 ? "s" : ""} enchaînés récemment
        </div>
      </div>
      <div className="note">
        Le prochain exercice est choisi pour toi — aucune sélection de chapitre à faire.
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Onglet "Explorer" — on choisit une portée (chapitre / notion / banque /
// classique / difficulté), puis ça enchaîne tout seul dans cette portée.
// ---------------------------------------------------------------------------

function ExplorerTab({ history, recordAttempt }) {
  const [filters, setFilters] = useState({
    chapterId: "",
    tag: "",
    banque: "",
    classicOnly: false,
    level: "",
  });
  const filteredPool = useMemo(() => {
    return EXERCISES.filter((ex) => {
      if (filters.chapterId && !ex.chapters.some((c) => c.id === filters.chapterId)) return false;
      if (filters.tag && !ex.tags.includes(filters.tag)) return false;
      if (filters.banque && ex.banque !== filters.banque) return false;
      if (filters.classicOnly && !ex.classic) return false;
      if (filters.level && ex.level !== Number(filters.level)) return false;
      return true;
    });
  }, [filters]);

  const [current, setCurrent] = useState(() => pickFromPool(history, filteredPool, null));
  const [feedback, setFeedback] = useState(null);
  const [review, setReview] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setCurrent(pickFromPool(history, filteredPool, null));
    setFeedback(null);
    setReview(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function updateFilter(key, value) {
    setFilters((f) => ({ ...f, [key]: value }));
  }

  if (!current) {
    return (
      <>
        <FilterBar filters={filters} onChange={updateFilter} />
        <div className="card">
          <div className="empty">Aucun exercice ne correspond à ces filtres pour l'instant.</div>
        </div>
      </>
    );
  }

  const hasReviewContent = current.correction || current.method || current.course;

  function answer(success) {
    if (feedback) return;
    setFeedback(success ? "success" : "fail");
    const nextHistory = recordAttempt({ exerciseId: current.id, success, ts: Date.now() });
    if (hasReviewContent) {
      setReview(true);
      return;
    }
    timeoutRef.current = setTimeout(() => advance(nextHistory), 550);
  }

  function advance(withHistory) {
    setCurrent(pickFromPool(withHistory, filteredPool, current.id));
    setFeedback(null);
    setReview(false);
  }

  function skip() {
    if (feedback) return;
    setCurrent(pickFromPool(history, filteredPool, current.id));
  }

  return (
    <>
      <FilterBar filters={filters} onChange={updateFilter} />
      <div className={`card ${feedback ? "pulse-" + feedback : ""}`}>
        <div className="reason">
          <span>→</span> {filteredPool.length} exercice{filteredPool.length > 1 ? "s" : ""} dans
          cette sélection
        </div>
        <ExerciseBody exercise={current} />

        {!review && (
          <>
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
          </>
        )}

        {review && <ReviewPanel exercise={current} onContinue={() => advance(history)} />}

        <ReportLink exercise={current} />
      </div>
    </>
  );
}

function FilterBar({ filters, onChange }) {
  return (
    <div className="filter-bar">
      <Select
        value={filters.chapterId}
        onChange={(v) => onChange("chapterId", v)}
        placeholder="Chapitre"
        options={CHAPTERS.map((c) => [c.id, `${c.name} · ${c.year}A`])}
      />
      <Select
        value={filters.tag}
        onChange={(v) => onChange("tag", v)}
        placeholder="Notion"
        options={ALL_TAGS.map((t) => [t, t])}
      />
      <Select
        value={filters.banque}
        onChange={(v) => onChange("banque", v)}
        placeholder="Banque"
        options={ALL_BANQUES.map((b) => [b, b])}
      />
      <Select
        value={filters.level}
        onChange={(v) => onChange("level", v)}
        placeholder="Difficulté"
        options={[1, 2, 3, 4, 5].map((l) => [String(l), `Niveau ${l}`])}
      />
      <button
        className={`pill ${filters.classicOnly ? "pill-on" : ""}`}
        onClick={() => onChange("classicOnly", !filters.classicOnly)}
      >
        Classiques uniquement
      </button>
    </div>
  );
}

function Select({ value, onChange, placeholder, options }) {
  return (
    <div className="select-wrap">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map(([v, label]) => (
          <option value={v} key={v}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className="select-chevron" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Composants partagés
// ---------------------------------------------------------------------------

function ExerciseBody({ exercise }) {
  const [showHints, setShowHints] = useState(false);
  return (
    <>
      <div className="ex-top">
        <span className="ex-level">
          {"●".repeat(exercise.level)}
          {"○".repeat(5 - exercise.level)}
        </span>
        <span className="ex-note">{exerciseNote(exercise.level)}/10</span>
        {exercise.banque && <span className="ex-banque">{exercise.banque}</span>}
      </div>
      <div className="ex-text"><MathText text={exercise.text} /></div>

      {exercise.hints.length > 0 && (
        <div className="hints-block">
          <button className="hints-toggle" onClick={() => setShowHints((s) => !s)}>
            <Lightbulb size={14} />
            {showHints ? "Cacher les indices" : `Voir ${exercise.hints.length} indice${exercise.hints.length > 1 ? "s" : ""}`}
          </button>
          {showHints && (
            <ol className="hints-list">
              {exercise.hints.map((h, i) => (
                <li key={i}><MathText text={h} /></li>
              ))}
            </ol>
          )}
        </div>
      )}
    </>
  );
}

function ReviewPanel({ exercise, onContinue }) {
  return (
    <div className="review">
      {exercise.course && (
        <div className="review-block">
          <div className="review-label">Point de cours</div>
          <div className="review-text"><MathText text={exercise.course} /></div>
        </div>
      )}
      {exercise.correction && (
        <div className="review-block">
          <div className="review-label">Corrigé</div>
          <div className="review-text"><MathText text={exercise.correction} /></div>
        </div>
      )}
      {exercise.method && (
        <div className="review-block method">
          <div className="review-label">📎 {exercise.method.title}</div>
          <div className="review-text"><MathText text={exercise.method.content} /></div>
          <div className="method-note">Ajoutée à ton cahier de méthodes.</div>
        </div>
      )}
      <button className="btn btn-primary" onClick={onContinue}>
        Suivant
      </button>
    </div>
  );
}

function ReportLink({ exercise }) {
  const href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    `Erreur sur l'exercice ${exercise.id}`
  )}&body=${encodeURIComponent(`Bonjour,\n\nJ'ai repéré un souci sur l'exercice "${exercise.id}" :\n\n`)}`;
  return (
    <a className="report-link" href={href}>
      <Flag size={12} /> signaler une erreur sur cet exercice
    </a>
  );
}

// ---------------------------------------------------------------------------
// Onglet "Profil"
// ---------------------------------------------------------------------------

function ProfilTab({ history, weeklyCount, methods, isEnabled, toggleChapter, setChaptersEnabled }) {
  const [chaptersOpen, setChaptersOpen] = useState(true);
  const [methodsOpen, setMethodsOpen] = useState(true);

  const sortedChapters = useMemo(() => {
    return [...CHAPTERS]
      .map((c) => ({ ...c, stats: chapterStats(history, EXERCISES, c.id) }))
      .sort((a, b) => a.stats.score - b.stats.score);
  }, [history]);

  const year2Ids = useMemo(() => CHAPTERS.filter((c) => c.year === 2).map((c) => c.id), []);
  const allYear2Enabled = year2Ids.every((id) => isEnabled(id));

  const successCount = history.filter((h) => h.success).length;

  return (
    <div className="card">
      <div className="summary-row">
        <div className="summary-item">
          <div className="summary-num">{history.length}</div>
          <div className="summary-label">Exercices faits</div>
        </div>
        <div className="summary-item">
          <div className="summary-num">{successCount}</div>
          <div className="summary-label">Réussis</div>
        </div>
        <div className="summary-item">
          <div className="summary-num">{weeklyCount}</div>
          <div className="summary-label">Cette semaine</div>
        </div>
      </div>

      <div className="section-toggle-row">
        <button className="section-toggle" onClick={() => setChaptersOpen((s) => !s)}>
          <ChevronDown size={15} className={`chevron ${chaptersOpen ? "open" : ""}`} />
          Chapitres ({CHAPTERS.length})
        </button>
        <button
          className="pill pill-sm"
          onClick={() => setChaptersEnabled(year2Ids, !allYear2Enabled)}
        >
          {allYear2Enabled ? "Désactiver la 2e année" : "Activer la 2e année"}
        </button>
      </div>
      <div className="chapters-hint">
        Un chapitre désactivé n'apparaît plus dans le flux automatique de "S'entraîner" (il reste accessible
        depuis "Explorer").
      </div>

      {chaptersOpen &&
        sortedChapters.map((c) => {
          const { attempts, ticks, score } = c.stats;
          const tone = score < 4 ? "weak" : score < 7 ? "mid" : "strong";
          const enabled = isEnabled(c.id);
          return (
            <div className={`chapter-row ${enabled ? "" : "chapter-disabled"}`} key={c.id}>
              <div className="chapter-top">
                <div className="chapter-name">
                  {c.name}
                  <span className="year-badge">{c.year}A</span>
                  {enabled && attempts >= 2 && score < 5 && (
                    <span className="weak-badge">point faible</span>
                  )}
                </div>
                <div className="chapter-controls">
                  <div className="chapter-meta">{attempts ? `${score.toFixed(1)}/10` : "non évalué"}</div>
                  <button
                    className={`chapter-toggle ${enabled ? "on" : "off"}`}
                    onClick={() => toggleChapter(c.id)}
                  >
                    {enabled ? "Activé" : "Désactivé"}
                  </button>
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

      {methods.length > 0 && (
        <div className="methods-section">
          <button className="section-toggle" onClick={() => setMethodsOpen((s) => !s)}>
            <ChevronDown size={15} className={`chevron ${methodsOpen ? "open" : ""}`} />
            Cahier de méthodes ({methods.length})
          </button>
          {methodsOpen &&
            methods.map((m, i) => (
              <div className="method-card" key={i}>
                <div className="method-card-title">{m.title}</div>
                <div className="method-card-content"><MathText text={m.content} /></div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Style — thème clair, inspiré de l'UI de Peerlist / Lattice : fond blanc,
// cartes bordées avec ombre douce, boutons rectangulaires arrondis.
// ---------------------------------------------------------------------------

function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

      :root{
        --bg:#FFFFFF;
        --surface-2:#F5F5F7;
        --border:#E7E7EC;
        --text:#15151A;
        --text-dim:#6E6E78;
        --accent:#4F46E5;
        --accent-soft:#EEF0FF;
        --success:#16A34A;
        --success-soft:#EAFBF0;
        --danger:#DC2626;
        --danger-soft:#FDECEC;
      }
      *{box-sizing:border-box;}
      .shell{
        min-height:100vh;
        background:var(--bg);
        color:var(--text);
        font-family:'Inter', sans-serif;
        padding:20px 16px 48px;
        display:flex;
        justify-content:center;
      }
      .container{ width:100%; max-width:540px; }
      .header{ margin-bottom:18px; }
      .header-top{ display:flex; align-items:center; justify-content:space-between; }
      .logout-btn{
        display:flex; align-items:center; gap:5px; font-size:11.5px; font-weight:600;
        color:var(--text-dim); background:none; border:1px solid var(--border); border-radius:10px;
        padding:6px 10px; cursor:pointer; font-family:inherit;
      }
      .logout-btn:hover{ color:var(--text); border-color:var(--text-dim); }
      .wordmark{
        font-weight:800; font-size:26px; letter-spacing:-0.02em;
        display:flex; align-items:center; gap:8px;
      }
      .wordmark svg{ color:var(--accent); }
      .tagline{ color:var(--text-dim); font-size:13.5px; margin-top:3px; }

      .tabs{
        display:flex; gap:4px; margin:18px 0 16px;
        background:var(--surface-2); padding:4px; border-radius:14px;
      }
      .tab{
        flex:1; text-align:center; padding:9px 0; border-radius:10px;
        font-size:13.5px; font-weight:600; cursor:pointer; color:var(--text-dim);
        border:none; background:none; font-family:inherit;
        transition: background .15s, color .15s;
      }
      .tab.active{ background:#fff; color:var(--text); box-shadow:0 1px 3px rgba(0,0,0,0.08); }

      .card{
        background:#fff;
        border:1px solid var(--border);
        border-radius:20px;
        padding:22px;
        box-shadow:0 2px 10px rgba(20,20,30,0.04);
        transition: border-color .2s;
      }
      .card.pulse-success{ border-color: var(--success); }
      .card.pulse-fail{ border-color: var(--danger); }

      /* ---- Entraînement / Explorer ---- */
      .reason{
        font-family:'IBM Plex Mono', monospace; font-size:11.5px;
        color:var(--accent); text-transform:uppercase; letter-spacing:.06em;
        margin-bottom:16px;
      }
      .ex-top{ display:flex; align-items:center; gap:10px; margin-bottom:10px; flex-wrap:wrap; }
      .ex-level{ font-family:'IBM Plex Mono', monospace; font-size:12px; color:var(--text-dim); }
      .ex-note{
        font-family:'IBM Plex Mono', monospace; font-size:11px; font-weight:600;
        background:var(--accent-soft); color:var(--accent); padding:2px 8px; border-radius:8px;
      }
      .ex-banque{ font-size:11px; color:var(--text-dim); border:1px solid var(--border); padding:2px 8px; border-radius:8px; }
      .ex-text{ font-size:19px; font-weight:500; line-height:1.5; margin-bottom:14px; }

      .hints-block{ margin-bottom:16px; }
      .hints-toggle{
        display:flex; align-items:center; gap:6px; font-size:12.5px; font-weight:600;
        color:var(--accent); background:none; border:none; cursor:pointer; padding:0; font-family:inherit;
      }
      .hints-list{ margin:10px 0 0; padding-left:18px; font-size:13.5px; color:var(--text-dim); line-height:1.6; }

      .chips{ display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px; }
      .chip{
        font-size:11px; color:var(--text-dim); border:1px solid var(--border);
        padding:3px 9px; border-radius:20px; font-family:'IBM Plex Mono', monospace;
      }

      .btn-row{ display:flex; gap:10px; }
      .btn{
        flex:1; padding:13px 0; border-radius:14px; border:none; cursor:pointer;
        font-family:inherit; font-size:14.5px; font-weight:700;
        display:flex; align-items:center; justify-content:center; gap:6px;
        transition: transform .1s, opacity .15s;
      }
      .btn:active{ transform: scale(0.97); }
      .btn-success{ background:var(--success); color:#fff; }
      .btn-fail{ background:#fff; color:var(--danger); border:1.5px solid var(--danger-soft); }
      .btn-primary{ width:100%; background:var(--accent); color:#fff; margin-top:4px; }
      .skip{
        text-align:center; margin-top:12px; font-size:12.5px; color:var(--text-dim);
        cursor:pointer; text-decoration:underline; text-underline-offset:3px;
      }

      .review{ margin-top:6px; }
      .review-block{
        background:var(--surface-2); border-radius:14px; padding:14px 16px; margin-bottom:10px;
      }
      .review-block.method{ background:var(--accent-soft); }
      .review-label{ font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.05em; color:var(--text-dim); margin-bottom:6px; }
      .review-block.method .review-label{ color:var(--accent); }
      .review-text{ font-size:14px; line-height:1.6; white-space:pre-line; }
      .method-note{ font-size:11px; color:var(--accent); margin-top:8px; font-weight:600; }

      .report-link{
        display:flex; align-items:center; gap:5px; justify-content:center;
        font-size:11px; color:var(--text-dim); margin-top:14px; text-decoration:none;
      }
      .report-link:hover{ color:var(--text); }

      .trail{ display:flex; gap:5px; margin-top:18px; }
      .dot{ width:8px; height:8px; border-radius:50%; background:var(--surface-2); }
      .dot.success{ background:var(--success); }
      .dot.fail{ background:var(--danger); }
      .trail-label{ font-size:11px; color:var(--text-dim); margin-top:6px; }

      .note{ color:var(--text-dim); font-size:11.5px; margin-top:16px; text-align:center; line-height:1.5; }
      .credit{ color:var(--text-dim); font-size:10.5px; margin-top:28px; text-align:center; line-height:1.6; }
      .credit a{ color:var(--text-dim); }
      .empty{ color:var(--text-dim); font-size:14px; text-align:center; padding:20px 0; }

      /* ---- Filtres (Explorer) ---- */
      .filter-bar{ display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px; }
      .select-wrap{ position:relative; }
      .select-wrap select{
        appearance:none; font-family:inherit; font-size:12.5px; font-weight:600;
        color:var(--text); background:#fff; border:1px solid var(--border);
        border-radius:11px; padding:8px 26px 8px 12px; cursor:pointer;
      }
      .select-chevron{ position:absolute; right:9px; top:50%; transform:translateY(-50%); color:var(--text-dim); pointer-events:none; }
      .pill{
        font-family:inherit; font-size:12.5px; font-weight:600; color:var(--text-dim);
        background:#fff; border:1px solid var(--border); border-radius:11px; padding:8px 14px; cursor:pointer;
      }
      .pill-on{ background:var(--accent); color:#fff; border-color:var(--accent); }

      /* ---- Profil ---- */
      .summary-row{ display:flex; gap:10px; margin-bottom:18px; }
      .summary-item{ flex:1; background:var(--surface-2); border-radius:14px; padding:12px 0; text-align:center; }
      .summary-num{ font-family:'IBM Plex Mono', monospace; font-size:22px; font-weight:600; }
      .summary-label{ color:var(--text-dim); font-size:10.5px; text-transform:uppercase; letter-spacing:.05em; margin-top:2px; }

      .section-toggle-row{ display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:8px; flex-wrap:wrap; }
      .section-toggle{
        display:flex; align-items:center; gap:6px; font-size:13.5px; font-weight:700; color:var(--text);
        background:none; border:none; cursor:pointer; padding:0; font-family:inherit;
      }
      .chevron{ transition: transform .15s; color:var(--text-dim); flex-shrink:0; }
      .chevron.open{ transform: rotate(180deg); }
      .pill-sm{ font-size:11.5px; padding:7px 12px; border-radius:10px; }
      .chapters-hint{ color:var(--text-dim); font-size:11.5px; line-height:1.5; margin-bottom:10px; }

      .chapter-row{ padding:13px 0; border-top:1px solid var(--border); transition: opacity .15s; }
      .chapter-row:first-child{ border-top:none; }
      .chapter-row.chapter-disabled{ opacity:.5; }
      .chapter-top{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:7px; gap:10px; flex-wrap:wrap; }
      .chapter-name{ font-size:14.5px; font-weight:600; }
      .chapter-controls{ display:flex; align-items:center; gap:8px; }
      .chapter-meta{ font-family:'IBM Plex Mono', monospace; font-size:11.5px; color:var(--text-dim); }
      .chapter-toggle{
        font-family:inherit; font-size:10.5px; font-weight:700; padding:3px 10px; border-radius:20px;
        border:1px solid var(--border); background:#fff; color:var(--text-dim); cursor:pointer;
        transition: background .15s, color .15s, border-color .15s;
      }
      .chapter-toggle.on{ color:var(--success); border-color:var(--success); background:var(--success-soft); }
      .chapter-toggle.off{ color:var(--text-dim); }
      .ticks{ display:flex; gap:4px; }
      .tick{ width:100%; height:6px; border-radius:3px; background:var(--surface-2); }
      .tick.filled.weak{ background:var(--danger); }
      .tick.filled.mid{ background:#D97706; }
      .tick.filled.strong{ background:var(--success); }
      .weak-badge{
        font-size:10px; font-weight:600; color:var(--danger); background:var(--danger-soft);
        padding:2px 7px; border-radius:20px; margin-left:8px;
      }
      .year-badge{
        font-size:10px; font-weight:600; color:var(--text-dim); background:var(--surface-2);
        padding:2px 7px; border-radius:20px; margin-left:8px; font-family:'IBM Plex Mono', monospace;
      }

      .methods-section{ margin-top:22px; padding-top:18px; border-top:1px solid var(--border); }
      .methods-section .section-toggle{ margin-bottom:12px; }
      .method-card{ background:var(--accent-soft); border-radius:14px; padding:13px 15px; margin-bottom:8px; }
      .method-card-title{ font-size:13px; font-weight:700; color:var(--accent); margin-bottom:4px; }
      .method-card-content{ font-size:12.5px; color:var(--text); line-height:1.5; }
    `}</style>
  );
}
