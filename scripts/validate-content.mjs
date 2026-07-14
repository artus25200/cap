// Valide tous les fichiers d'exercices AVANT le build, en Node.
// Contrairement à la validation dans src/lib/loadContent.js (qui tourne dans
// le navigateur du visiteur), celle-ci bloque le build/déploiement si un
// fichier est cassé — c'est elle qui évite qu'un exercice mal formé parte
// en prod silencieusement.

import { readdirSync, readFileSync } from "node:fs";
import { load as parseYaml } from "js-yaml";
import chaptersData from "../src/content/chapters.json" with { type: "json" };

const DIR = new URL("../src/content/exercises/", import.meta.url);
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
const CHAPTER_IDS = new Set(chaptersData.map((c) => c.id));

const errors = [];
const seenIds = new Map();

const files = readdirSync(DIR).filter(
  (f) => f.endsWith(".md") && f !== "_TEMPLATE.md"
);

if (files.length === 0) {
  console.warn(
    "⚠️  Aucun exercice dans src/content/exercises/ — le site tournera avec un catalogue vide."
  );
}

for (const file of files) {
  const raw = readFileSync(new URL(file, DIR), "utf-8");
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    errors.push(`${file} : frontmatter manquant (doit commencer par "---").`);
    continue;
  }

  let meta;
  try {
    meta = parseYaml(match[1]) || {};
  } catch (err) {
    errors.push(`${file} : YAML invalide — ${err.message}`);
    continue;
  }

  const body = match[2].trim();
  if (!body) errors.push(`${file} : l'énoncé (corps du fichier) est vide.`);

  const level = meta.level ?? 3;
  if (typeof level !== "number" || level < 1 || level > 5) {
    errors.push(`${file} : "level" doit être un entier entre 1 et 5.`);
  }

  if (!meta.chapters) {
    errors.push(`${file} : "chapters" est obligatoire.`);
    continue;
  }
  const list = Array.isArray(meta.chapters)
    ? meta.chapters.map((c) => ({ id: c.id, weight: c.weight ?? 100 }))
    : Object.entries(meta.chapters).map(([id, weight]) => ({ id, weight }));

  if (list.length === 0) {
    errors.push(`${file} : "chapters" est vide.`);
  }
  for (const c of list) {
    if (!c.id) {
      errors.push(`${file} : un chapitre sans "id" a été trouvé.`);
      continue;
    }
    if (!CHAPTER_IDS.has(c.id)) {
      errors.push(
        `${file} : le chapitre "${c.id}" n'existe pas dans src/content/chapters.json.`
      );
    }
    if (typeof c.weight !== "number" || c.weight <= 0 || c.weight > 100) {
      errors.push(`${file} : le poids du chapitre "${c.id}" doit être entre 1 et 100.`);
    }
  }

  const id = meta.id || file.replace(/\.md$/, "");
  if (seenIds.has(id)) {
    errors.push(`${file} : id "${id}" en doublon avec ${seenIds.get(id)}.`);
  }
  seenIds.set(id, file);

  if (meta.banque !== undefined && meta.banque !== null && typeof meta.banque !== "string") {
    errors.push(`${file} : "banque" doit être une chaîne de caractères (ou null).`);
  }
  if (meta.classic !== undefined && typeof meta.classic !== "boolean") {
    errors.push(`${file} : "classic" doit être true ou false.`);
  }
  if (meta.hints !== undefined) {
    if (!Array.isArray(meta.hints) || meta.hints.some((h) => typeof h !== "string")) {
      errors.push(`${file} : "hints" doit être une liste de chaînes.`);
    }
  }
  if (meta.correction !== undefined && typeof meta.correction !== "string") {
    errors.push(`${file} : "correction" doit être une chaîne (texte, éventuellement multi-lignes).`);
  }
  if (meta.method !== undefined) {
    if (
      typeof meta.method !== "object" ||
      typeof meta.method.title !== "string" ||
      typeof meta.method.content !== "string"
    ) {
      errors.push(`${file} : "method" doit être un objet { title, content } (chaînes).`);
    }
  }
  if (meta.course !== undefined && typeof meta.course !== "string") {
    errors.push(`${file} : "course" doit être une chaîne de caractères.`);
  }
}

for (const chapter of chaptersData) {
  const hasExercise = [...seenIds.keys()].some((id) => {
    const file = seenIds.get(id);
    const raw = readFileSync(new URL(file, DIR), "utf-8");
    const match = raw.match(FRONTMATTER_RE);
    const meta = parseYaml(match[1]) || {};
    const list = Array.isArray(meta.chapters)
      ? meta.chapters
      : Object.keys(meta.chapters || {}).map((cid) => ({ id: cid }));
    return list.some((c) => c.id === chapter.id);
  });
  if (!hasExercise) {
    console.warn(`⚠️  Aucun exercice pour le chapitre "${chapter.id}" (${chapter.name}).`);
  }
}

if (errors.length > 0) {
  console.error(`\n✗ Validation du contenu échouée (${errors.length} erreur(s)) :\n`);
  errors.forEach((e) => console.error("  - " + e));
  console.error("\nLe build est bloqué tant que ces fichiers ne sont pas corrigés.\n");
  process.exit(1);
}

console.log(`✓ ${files.length} exercices validés, ${chaptersData.length} chapitres.`);
