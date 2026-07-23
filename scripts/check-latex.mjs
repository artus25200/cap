// Teste individuellement chaque formule LaTeX ($...$ et $$...$$) de tous les
// exercices avec katex.renderToString(throwOnError: true), pour détecter les
// erreurs de syntaxe qu'un simple `vite build` ne détecte pas (le rendu KaTeX
// se fait au runtime dans le navigateur, silencieusement si throwOnError=false).
//
// Usage : npm run check-latex

import { readdirSync, readFileSync } from "node:fs";
import { load as parseYaml } from "js-yaml";
import katex from "katex";

const dir = "src/content/exercises";
const files = readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "_TEMPLATE.md");
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function extractMath(text) {
  const matches = [];
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let m;
  while ((m = re.exec(text))) matches.push(m[1] ?? m[2]);
  return matches;
}

// Récupère le texte réellement rendu par l'app : le body (LaTeX brut) + les
// champs YAML optionnels (hints, correction, method, course) APRÈS parsing
// YAML, pour que les backslashs échappés dans les chaînes entre guillemets
// ("...\\perp...") soient correctement dépliés en \perp avant d'être passés
// à KaTeX — sinon on obtient de faux positifs.
function extractRenderedText(raw) {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) return raw;
  const meta = parseYaml(match[1]) || {};
  const body = match[2] ?? "";
  const parts = [body];
  if (Array.isArray(meta.hints)) parts.push(...meta.hints);
  if (typeof meta.correction === "string") parts.push(meta.correction);
  if (meta.method && typeof meta.method.content === "string") parts.push(meta.method.content);
  if (typeof meta.course === "string") parts.push(meta.course);
  return parts.join("\n");
}

let totalFormulas = 0;
let errors = 0;
for (const file of files) {
  const content = readFileSync(`${dir}/${file}`, "utf-8");
  const formulas = extractMath(extractRenderedText(content));
  for (const f of formulas) {
    totalFormulas++;
    try {
      katex.renderToString(f, { throwOnError: true });
    } catch (err) {
      errors++;
      console.error(`✗ ${file}: "${f.slice(0, 60)}..." -> ${err.message}`);
    }
  }
}
console.log(`\n${totalFormulas} formules testées, ${errors} erreur(s).`);
if (errors > 0) process.exit(1);
