export function buildHTML({ styles, asciiArt, data }) {
  const { name, about, stack, work, contact } = data;

  const stackItems = stack
    .map(s => `        <li>${s}</li>`)
    .join('\n');

  const aboutParagraphs = about
    .map(p => `        <p>${p}</p>`)
    .join('\n');

  const phases = work.phases.map(p => `
        <div class="tl-phase${p.active ? ' active' : ''}">
          <div class="tl-phase-header">
            <span class="tl-phase-year">${p.year}${p.active ? ' · current' : ''}</span>
          </div>
          <div class="tl-phase-title">${p.title}</div>
          <div class="tl-phase-desc">${p.desc}</div>
          <div class="tl-phase-tags">
            ${p.tags.map(t => `<span class="tl-tag">${t}</span>`).join('\n            ')}
          </div>
        </div>`).join('\n');

  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>tomas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
  <style>${styles}</style>
</head>
<body>

  <div id="banner">
    <pre id="ascii-banner">${asciiArt}</pre>
  </div>

  <main>
    <header>
      <div class="name" id="tw-name"></div>
    </header>

    <section id="s-about">
      <div class="section-label">About</div>
      <div class="about-body">
${aboutParagraphs}
      </div>
    </section>

    <section id="s-stack">
      <div class="section-label">Stack</div>
      <ul class="stack-list">
${stackItems}
      </ul>
    </section>

    <section id="s-work">
      <div class="section-label">Work</div>
      <div class="tl-company">
        <div class="tl-company-name">${work.company}</div>
        <div class="tl-company-role">${work.duration}</div>
      </div>
      <div class="tl-phases">
${phases}
      </div>
    </section>

    <section id="s-contact">
      <div class="section-label">Contact</div>
      <div class="contact-links">
        ${contact.email ? `<a href="mailto:${contact.email}">${contact.email}</a>` : ''}
        ${contact.github ? `<a href="https://${contact.github}" target="_blank">${contact.github}</a>` : ''}
        ${contact.linkedin ? `<a href="https://${contact.linkedin}" target="_blank">${contact.linkedin}</a>` : ''}
      </div>
    </section>

    <footer></footer>
  </main>

  <script>
    // ─── TYPEWRITER ───
    function typewriter(el, text, speed, onDone) {
      let i = 0;
      const cur = document.createElement('span');
      cur.className = 'tw-cursor';
      el.appendChild(cur);
      const iv = setInterval(() => {
        cur.insertAdjacentText('beforebegin', text[i++]);
        if (i >= text.length) {
          clearInterval(iv);
          if (onDone) setTimeout(onDone, 200);
        }
      }, speed);
    }

    setTimeout(() => {
      typewriter(document.getElementById('tw-name'), '${name}', 75, () => {
        ['s-about', 's-stack', 's-work', 's-contact'].forEach((id, i) => {
          setTimeout(() => {
            document.getElementById(id).classList.add('visible');
          }, 150 + i * 120);
        });
      });
    }, 400);
  </script>
</body>
</html>`;
}
