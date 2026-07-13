import { load as parseYaml } from "js-yaml";
import chaptersData from "../content/chapters.json";

// import.meta.glob lit tous les fichiers au moment du build : le résultat est
// figé dans le bundle, pas de fetch réseau à l'exécution (site 100% statique).
const files = import.meta.glob(
  ["/src/content/exercises/*.md", "!/src/content/exercises/_TEMPLATE.md"],
  { query: "?raw", import: "default", eager: true }
);

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function parseFile(path, raw) {
  const filename = path.split("/").pop().replace(/\.md$/, "");
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    throw new Error(
      `[exercices] ${filename}.md : frontmatter manquant (il doit commencer par "---").`
    );
  }
  let meta;
  try {
    meta = parseYaml(match[1]) || {};
  } catch (err) {
    throw new Error(`[exercices] ${filename}.md : YAML invalide — ${err.message}`);
  }
  const text = match[2].trim();
  if (!text) {
    throw new Error(`[exercices] ${filename}.md : l'énoncé est vide.`);
  }
  if (!meta.chapters || (Array.isArray(meta.chapters) && meta.chapters.length === 0)) {
    throw new Error(
      `[exercices] ${filename}.md : au moins un chapitre est requis dans "chapters".`
    );
  }

  const chapters = normalizeChapters(meta.chapters, filename);

  return {
    id: meta.id || filename,
    level: clampLevel(meta.level, filename),
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    source: meta.source || null,
    chapters,
    text,
  };
}

function normalizeChapters(raw, filename) {
  let list;
  if (Array.isArray(raw)) {
    list = raw.map((c) => ({ id: c.id, weight: c.weight ?? 100 }));
  } else if (typeof raw === "object") {
    // Syntaxe compacte alternative : chapters: { suites: 100, fonctions: 20 }
    list = Object.entries(raw).map(([id, weight]) => ({ id, weight }));
  } else {
    throw new Error(`[exercices] ${filename}.md : "chapters" mal formé.`);
  }
  list.forEach((c) => {
    if (!c.id || typeof c.weight !== "number" || c.weight <= 0 || c.weight > 100) {
      throw new Error(
        `[exercices] ${filename}.md : chapitre "${c.id}" invalide (weight doit être entre 1 et 100).`
      );
    }
  });
  return list.sort((a, b) => b.weight - a.weight);
}

function clampLevel(level, filename) {
  const n = level ?? 3;
  if (typeof n !== "number" || n < 1 || n > 5) {
    throw new Error(`[exercices] ${filename}.md : "level" doit être un entier entre 1 et 5.`);
  }
  return n;
}

export const CHAPTERS = chaptersData;
const CHAPTER_IDS = new Set(CHAPTERS.map((c) => c.id));

export const EXERCISES = Object.entries(files).map(([path, raw]) => parseFile(path, raw));

// Validation croisée : un exercice ne doit référencer que des chapitres existants,
// et chaque chapitre doit avoir au moins un exercice (sinon l'appli plante en silence).
EXERCISES.forEach((ex) => {
  ex.chapters.forEach((c) => {
    if (!CHAPTER_IDS.has(c.id)) {
      throw new Error(
        `[exercices] ${ex.id}.md : le chapitre "${c.id}" n'existe pas dans chapters.json.`
      );
    }
  });
});

const idCounts = {};
EXERCISES.forEach((ex) => {
  idCounts[ex.id] = (idCounts[ex.id] || 0) + 1;
});
Object.entries(idCounts).forEach(([id, count]) => {
  if (count > 1) {
    throw new Error(`[exercices] id "${id}" utilisé par ${count} fichiers — les id doivent être uniques.`);
  }
});

CHAPTERS.forEach((c) => {
  const has = EXERCISES.some((ex) => ex.chapters.some((link) => link.id === c.id));
  if (!has) {
    console.warn(`[exercices] Aucun exercice pour le chapitre "${c.id}" (${c.name}).`);
  }
});

export function chapterName(id) {
  return CHAPTERS.find((c) => c.id === id)?.name ?? id;
}
