// Gold Prism: the foil follows the reader. Scrolling slides the rainbow
// across the gold and turns the medallion with it; on a desktop the mouse
// moves the rainbow a little more. Nothing moves by itself, and under
// reduced motion nothing moves at all. It only sets offsets on elements
// already in the page (the decoration layer and the masthead).
const REPEAT = 1000; // the rainbow repeats every 1000px across (theme.css)
let stop = null;

const wrap = (v) => ((v % REPEAT) + REPEAT) % REPEAT;

export function activate(root, api) {
  if (api.reducedMotion()) return;
  const deco = root.querySelector(".deco");
  const mast = root.querySelector(".masthead");
  if (!deco || !mast) return;
  let px = 0;
  let py = 0;
  let queued = false;
  const draw = () => {
    queued = false;
    const scrolled = window.scrollY * 0.9;
    deco.style.setProperty("--gp-shift", `${-wrap(scrolled + px * 0.25)}px`);
    deco.style.setProperty("--gp-lift", `${py * 0.08}px`);
    mast.style.setProperty("--gp-turn", `${(wrap(scrolled) / REPEAT) * 360}deg`);
  };
  const queue = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(draw);
  };
  const pointer = (e) => {
    if (e.pointerType !== "mouse") return;
    px = e.clientX - window.innerWidth / 2;
    py = e.clientY - window.innerHeight / 2;
    queue();
  };
  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("pointermove", pointer, { passive: true });
  draw();
  stop = () => {
    window.removeEventListener("scroll", queue);
    window.removeEventListener("pointermove", pointer);
    for (const p of ["--gp-shift", "--gp-lift"]) deco.style.removeProperty(p);
    mast.style.removeProperty("--gp-turn");
  };
}

export function deactivate() {
  stop?.();
  stop = null;
}
