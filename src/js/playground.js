export function initTerminal() {
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
