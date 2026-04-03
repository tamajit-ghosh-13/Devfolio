export function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  const fn = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", fn, { passive: true });
  fn();
}

export function initMobileMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
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

export function initActiveNavLinks() {
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
