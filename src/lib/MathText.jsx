import { useMemo } from "react";
import katex from "katex";

// Découpe un texte en segments texte / maths, et rend chaque segment maths
// avec KaTeX. Supporte $$...$$ (bloc) et $...$ (inline). Le texte normal
// (hors maths) est affiché tel quel, avec les sauts de ligne préservés.

function splitSegments(text) {
  const segments = [];
  let rest = text;
  const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/;

  while (rest.length > 0) {
    const match = rest.match(re);
    if (!match) {
      segments.push({ type: "text", value: rest });
      break;
    }
    const before = rest.slice(0, match.index);
    if (before) segments.push({ type: "text", value: before });

    if (match[1] !== undefined) {
      segments.push({ type: "block", value: match[1] });
    } else {
      segments.push({ type: "inline", value: match[2] });
    }
    rest = rest.slice(match.index + match[0].length);
  }
  return segments;
}

export default function MathText({ text, className }) {
  const segments = useMemo(() => splitSegments(text || ""), [text]);

  return (
    <span className={className} style={{ whiteSpace: "pre-line" }}>
      {segments.map((seg, i) => {
        if (seg.type === "text") return <span key={i}>{seg.value}</span>;
        let html;
        try {
          html = katex.renderToString(seg.value, {
            throwOnError: false,
            displayMode: seg.type === "block",
          });
        } catch {
          html = seg.value;
        }
        const Tag = seg.type === "block" ? "div" : "span";
        return <Tag key={i} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </span>
  );
}
