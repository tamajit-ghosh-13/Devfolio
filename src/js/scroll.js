export function initSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        const idx = [...bars].indexOf(bar);
        setTimeout(() => {
          bar.style.width = (bar.getAttribute("data-width") || 0) + "%";
        }, idx * 120);
        observer.unobserve(bar);
      });
    },
    { threshold: 0.3 },
  );

  bars.forEach((b) => observer.observe(b));
}

export function initCountUp() {
  const nums = document.querySelectorAll(".stat-num[data-target]");
  if (!nums.length) return;

  const suffixes = { 13: "+", 800: "+" };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.getAttribute("data-target");
        const suffix = suffixes[target] || "";
        const t0 = performance.now();
        const dur = 1200;

        (function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          el.textContent = Math.round((1 - (1 - p) ** 2) * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(t0);

        observer.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );

  nums.forEach((el) => observer.observe(el));
}
