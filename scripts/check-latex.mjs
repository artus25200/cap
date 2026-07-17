// Teste individuellement chaque formule LaTeX ($...$ et $$...$$) de tous les
// exercices avec katex.renderToString(throwOnError: true), pour détecter les
// erreurs de syntaxe qu'un simple `vite build` ne détecte pas (le rendu KaTeX
// se fait au runtime dans le navigateur, silencieusement si throwOnError=false).
//
// Usage : npm run check-latex

import { readdirSync, readFileSync } from "node:fs";
import katex from "katex";

const dir = "src/content/exercises";
const files = readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "_TEMPLATE.md");

function extractMath(text) {
  const matches = [];
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let m;
  while ((m = re.exec(text))) matches.push(m[1] ?? m[2]);
  return matches;
}

let totalFormulas = 0;
let errors = 0;
for (const file of files) {
  const content = readFileSync(`${dir}/${file}`, "utf-8");
  const formulas = extractMath(content);
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
