document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 700, easing: "ease-out", once: true, offset: 60 });
  }

  initNavbar();
  initMobileMenu();
  initTypedEffect();
  initTerminal();
  initSkillBars();
  initCountUp();
  initActiveNavLinks();
  initContactForm();
});

/* Navbar: scrolled class */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  const fn = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", fn, { passive: true });
  fn();
}

/* Mobile Button & Setup  */
function initMobileMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
    // Drive max-height via JS so the CSS transition works
    menu.style.maxHeight = open ? menu.scrollHeight + "px" : "0";
    btn.setAttribute("aria-expanded", open);
  });

  menu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.classList.remove("open");
      menu.style.maxHeight = "0";
    });
  });
}

/* Blinking cursor text effect */
function initTypedEffect() {
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

/* Terminal line-by-line reveal */
function initTerminal() {
  const body = document.getElementById("term-body");
  if (!body) return;

  const lines = [
    {
      html: '<span class="prompt">$ </span><span class="cmd">npm run whoami</span>',
    },
    {
      html: '<span class="out">→ IT Student, Jadavpur University, Saltlake</span>',
    },
    { html: "" },
    {
      html: '<span class="prompt">$ </span><span class="cmd">cat skills.txt</span>',
    },
    {
      html: '<span class="out">→ <span class="hi-cyan">Javascript</span>, Node.js, SQL, REST APIs</span>',
    },
    { html: "" },
    {
      html: '<span class="prompt">$ </span><span class="cmd">ls ./projects</span>',
    },
    {
      html: '<span class="out">→ <span class="hi-cyan">api-vault</span>  auth-system  db-tool</span>',
    },
    { html: "" },
    { html: '<span class="prompt">$ </span><span class="cmd">status</span>' },
    { html: '<span class="out hi-green">→ Open to opportunities ✓</span>' },
  ];

  let delay = 500;
  lines.forEach((line) => {
    delay += 185;
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "term-line";
      div.innerHTML = line.html;
      body.appendChild(div);
    }, delay);
  });
}

/* Skill bars: animate on scroll */
function initSkillBars() {
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

/* Counting in the Mithye kotha zone */
function initCountUp() {
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

/* Active nav link on scroll */
function initActiveNavLinks() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + id),
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => observer.observe(s));
}

/* Contact form submit state */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", () => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = "// sending...";
      btn.style.opacity = "0.7";
      btn.disabled = true;
    }
    // Native POST to FormSubmit.co continues automatically.
  });
}
