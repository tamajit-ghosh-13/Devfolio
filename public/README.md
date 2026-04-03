# DevFolio — Your Developer Portfolio

A terminal-aesthetic developer portfolio. Dark, fast, no build step.  
Built with **HTML + Tailwind CSS (Play CDN) + Vanilla JS**.

---

## File Structure

```
devfolio/
├── index.html      # Entire site. All Tailwind utility classes live here.
├── style.css       # Minimal custom CSS — only keyframes & things Tailwind can't do
├── script.js       # Typed effect, terminal, skill bars, CountUp, AOS, nav logic
├── README.md       # This file
└── assets/
    └── resume.pdf  # Drop your CV here (linked from "Download CV" button)
```

---

## Why This Stack?

| Concern       | Solution                                                                      |
| ------------- | ----------------------------------------------------------------------------- |
| Styling       | **Tailwind CSS Play CDN** — utility classes directly in HTML, zero config     |
| Animations    | `style.css` for keyframes only (blink, float, pulse). AOS for scroll reveals. |
| Interactivity | Vanilla JS — typed effect, terminal animation, CountUp, active nav            |
| Contact form  | **FormSubmit.co** — no backend, submissions arrive in your inbox              |
| Fonts         | Space Mono (code/mono feel) + Syne (bold display headings) via Google Fonts   |

---

## Quick Start

1. Drop the `devfolio/` folder anywhere.
2. Open `index.html` in any browser — no install, no server needed.
3. Customise (checklist below).
4. Deploy to Netlify in 30 seconds.

---

## Customisation Checklist

### `index.html`

| Element               | How to find it                                                |
| --------------------- | ------------------------------------------------------------- |
| Name in logo & footer | Search `YourName` — replace all occurrences                   |
| Hero heading name     | `<span class="text-green">Your Name</span>`                   |
| Avatar initials       | `<div ...>YN</div>` — use your own initials                   |
| About text            | Two `<p class="text-[13px] ...">` paragraphs in `#about`      |
| About tags            | `<span ...>Backend-first</span>` etc.                         |
| Stat numbers          | `data-target="12"` etc. on `.stat-num` divs                   |
| Skill bar percentages | `data-width="85"` on each `.skill-fill` div                   |
| Skill bar labels      | Text inside the `flex justify-between` rows                   |
| Tool cards            | Each `bg-bg3 border border-green/10 ...` div in Tools section |
| Project cards         | The three card blocks in `#projects`                          |
| Social links          | `<a href="...">` items in the contact section                 |
| Contact form email    | `action="https://formsubmit.co/YOUR@EMAIL.COM"`               |
| Footer year           | `2026` in the footer                                          |

### `script.js`

| Element                | Variable                               |
| ---------------------- | -------------------------------------- |
| Typed cycling phrases  | `phrases` array in `initTypedEffect()` |
| Terminal command lines | `lines` array in `initTerminal()`      |
| Stat number suffixes   | `suffixes` object in `initCountUp()`   |

---

## Tailwind Custom Colours

Defined in the `tailwind.config` block inside `index.html`:

```js
colors: {
  green: '#00ff88',   // primary accent — use as text-green, border-green, bg-green
  cyan:  '#00d4ff',   // secondary accent (skill bar gradient end)
  bg:    '#0a0a0f',   // darkest background
  bg2:   '#0d0d14',   // alternate section bg
  bg3:   '#111118',   // card / terminal background
  bg4:   '#1a1a24',   // terminal title bar
}
```

To change the accent colour, update `green: '#00ff88'` and the gradient in `.skill-fill` inside `style.css`.

---

## Contact Form (FormSubmit.co)

Zero backend required.

1. Find the `<form>` tag in `index.html`:
   ```html
   <form action="https://formsubmit.co/YOUR@EMAIL.COM" ...></form>
   ```
2. Replace `YOUR@EMAIL.COM` with your actual email.
3. Deploy & submit the form once.
4. Click the confirmation link FormSubmit emails you.
5. All future submissions go directly to your inbox.

---

## Deploy in 30 Seconds (Netlify)

**Drag & Drop:**

1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Drag the entire `devfolio/` folder onto the deploy zone.
3. Done — live URL in seconds.

**Git (recommended, auto-deploys on push):**

1. Push to a GitHub repo.
2. Netlify → New site from Git → select repo.
3. Build command: _(leave empty)_. Publish directory: `.`

---

## Moving to Production (Optional Tailwind Build)

The Play CDN is perfect for hackathons and portfolios. If you later want a smaller CSS bundle:

```bash
npm install -D tailwindcss
npx tailwindcss init
# Add content: ['./index.html'] to tailwind.config.js
npx tailwindcss -i ./input.css -o ./style-tw.css --minify
```

Then swap the CDN `<script>` tag for `<link rel="stylesheet" href="style-tw.css">`.

---

_Good luck at the hackathon! 🚀_
