import { initNavbar, initMobileMenu, initActiveNavLinks } from './navbar.js';
import { initTypedEffect } from './typewriter.js';
import { initTerminal } from './playground.js';
import { initSkillBars, initCountUp } from './scroll.js';
import './particles.js';
import './cursor.js';
import './easterEgg.js';
import './memoryDemo.js';
import './reveal.js';
import './theme.js';

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
  });
}

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
