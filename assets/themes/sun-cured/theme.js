// Sun Cured: the site name on an upward arch. The arch is an SVG copy of
// the name, set along a curve and sized to fill it once the face has
// loaded. It's decoration, hidden from assistive technology; the link's
// own text stays in the page. Until it fits, the name shows straight.
const SVG = "http://www.w3.org/2000/svg";
const FACE = '900 100px "Cinzel Decorative"';
const CURVE = "M 40 262 Q 500 26 960 262";
let added = [];

const make = (name, attrs) => {
  const el = document.createElementNS(SVG, name);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
};

const fit = (svg) => {
  if (!svg.isConnected) return;
  const path = svg.querySelector("path");
  const text = svg.querySelector("text");
  const have = text.getComputedTextLength();
  if (!(have > 0)) return;
  text.style.fontSize = `${(100 * path.getTotalLength() * 0.94) / have}px`;
  svg.setAttribute("data-fit", "");
};

export function activate(root) {
  root.querySelectorAll(".site-name a").forEach((link, i) => {
    const svg = make("svg", { class: "sc-arch", viewBox: "0 30 1000 255", "data-ft-deco": "", "aria-hidden": "true", focusable: "false" });
    const id = `sc-arch-${i}`;
    const text = make("text", { "text-anchor": "middle" });
    const along = make("textPath", { href: `#${id}`, startOffset: "50%" });
    along.textContent = link.textContent.trim().toUpperCase();
    text.append(along);
    svg.append(make("path", { id, d: CURVE, fill: "none" }), text);
    link.append(svg);
    added.push(svg);
    document.fonts.load(FACE).then(
      () => fit(svg),
      () => fit(svg),
    );
  });
}

export function deactivate() {
  for (const svg of added) svg.remove();
  added = [];
}
