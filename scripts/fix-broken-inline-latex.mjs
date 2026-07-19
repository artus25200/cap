// Détecte (et corrige avec --fix) les formules LaTeX inline $...$ dont le
// texte source est réparti sur plusieurs lignes. MathText.jsx et
// check-latex.mjs délimitent l'inline avec /\$([^$\n]+?)\$/ : le [^$\n]
// exclut les sauts de ligne, donc une telle formule n'est JAMAIS reconnue
// comme du LaTeX (elle s'affiche en texte brut, "$...$" inclus) et
// check-latex.mjs ne la voit pas non plus (donc ne remonte aucune erreur).
//
// Important : on ne peut pas juste chercher "un $ suivi d'un saut de ligne
// puis d'un autre $" (ça capturerait aussi le texte ENTRE deux formules
// différentes). On repère les vraies paires en respectant l'alternance
// ouverture/fermeture : on numérote tous les $ restants (après avoir
// neutralisé les blocs $$...$$) et on les associe 2 par 2 dans l'ordre
// (1er-2e, 3e-4e, ...).
//
// Usage :
//   node scripts/fix-broken-inline-latex.mjs           (dry-run, liste les occurrences)
//   node scripts/fix-broken-inline-latex.mjs --fix      (corrige en place)

import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const dir = "src/content/exercises";
const files = readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "_TEMPLATE.md");
const fix = process.argv.includes("--fix");

let totalFound = 0;
let filesTouched = 0;

for (const file of files) {
  const path = `${dir}/${file}`;
  const content = readFileSync(path, "utf-8");
  const withoutBlocks = content.replace(/\$\$[\s\S]+?\$\$/g, (m) => " ".repeat(m.length));

  const positions = [];
  for (let i = 0; i < withoutBlocks.length; i++) {
    if (withoutBlocks[i] === "$") positions.push(i);
  }

  const spans = [];
  for (let i = 0; i + 1 < positions.length; i += 2) {
    const start = positions[i];
    const end = positions[i + 1];
    const inner = content.slice(start + 1, end);
    if (inner.includes("\n")) {
      const newInner = inner.replace(/[ \t]*\n[ \t]*/g, " ").trim();
      spans.push({ start, end, newInner, inner });
    }
  }

  if (spans.length === 0) continue;

  totalFound += spans.length;
  filesTouched++;

  if (!fix) {
    for (const { inner } of spans) {
      console.log(`--- ${file} ---`);
      console.log(JSON.stringify(inner.slice(0, 200)));
    }
    continue;
  }

  let result = "";
  let cursor = 0;
  for (const { start, end, newInner } of spans) {
    result += content.slice(cursor, start + 1); // jusqu'au $ ouvrant inclus
    result += newInner;
    cursor = end; // reprend juste au $ fermant
  }
  result += content.slice(cursor);
  writeFileSync(path, result, "utf-8");
  console.log(`✓ ${file}: ${spans.length} formule(s) recollée(s)`);
}

console.log(
  `\n${totalFound} formule(s) inline cassée(s) par un saut de ligne, dans ${filesTouched} fichier(s).` +
    (fix ? "" : " Relancer avec --fix pour corriger.")
);
