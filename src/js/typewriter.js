export function initTypedEffect() {
  const el = document.getElementById("typed-target");
  if (!el) return;

  const phrases = [
    "Backend systems & APIs",
    "REST APIs & databases",
    "Node.js applications",
    "scalable web services",
  ];

  let pi = 0,
    ci = 0,
    deleting = false,
    paused = false;
  const TYPE = 70,
    DEL = 40,
    PAUSE_END = 1800,
    PAUSE_START = 300;

  function tick() {
    if (paused) return;
    const cur = phrases[pi];

    if (!deleting) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) {
        paused = true;
        setTimeout(() => {
          paused = false;
          deleting = true;
          setTimeout(tick, DEL);
        }, PAUSE_END);
        return;
      }
      setTimeout(tick, TYPE);
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        paused = true;
        setTimeout(() => {
          paused = false;
          setTimeout(tick, TYPE);
        }, PAUSE_START);
        return;
      }
      setTimeout(tick, DEL);
    }
  }
  setTimeout(tick, 700);
}
