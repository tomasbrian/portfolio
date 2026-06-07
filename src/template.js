export function buildHTML({ styles, data }) {
  const { name, accentWord, about, stack, work, contact } = data;

  const [nameBefore, nameAfter] = name.split(accentWord);

  const stackItems = stack
    .map(s => `        <li>${s}</li>`)
    .join('\n');

  const aboutParagraphs = about
    .map(p => `        <p>${p}</p>`)
    .join('\n');

  const phases = work.phases.map(p => `
        <div class="tl-phase${p.active ? ' active' : ''}">
          <span class="tl-phase-year">${p.year}${p.active ? ' · now' : ''}</span>
          <div class="tl-phase-title">${p.title}</div>
          <div class="tl-phase-desc">${p.desc}</div>
          <div class="tl-phase-tags">
            ${p.tags.map(t => `<span class="tl-tag">${t}</span>`).join('\n            ')}
          </div>
        </div>`).join('\n');

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

  <aside class="sidebar">
    <nav class="sidebar-nav">
      <a href="#s-about"><span class="nav-slash">/</span>about</a>
      <a href="#s-stack"><span class="nav-slash">/</span>stack</a>
      <a href="#s-work"><span class="nav-slash">/</span>work</a>
      <a href="#s-contact"><span class="nav-slash">/</span>contact</a>
    </nav>
  </aside>

  <main>
    <header>
      <div class="name" id="tw-name"></div>
    </header>

    <section id="s-about">
      <div class="section-label"><span class="path-slash">/</span>about</div>
      <div class="about-body">
${aboutParagraphs}
      </div>
    </section>

    <section id="s-stack">
      <div class="section-label"><span class="path-slash">/</span>stack</div>
      <ul class="stack-list">
${stackItems}
      </ul>
    </section>

    <section id="s-work">
      <div class="section-label"><span class="path-slash">/</span>work</div>
      <div class="tl-company">
        <div class="tl-company-name">${work.company}</div>
        <div class="tl-company-role">${work.duration}</div>
      </div>
      <div class="tl-phases">
${phases}
      </div>
    </section>

    <section id="s-contact">
      <div class="section-label"><span class="path-slash">/</span>contact</div>
      <div class="contact-links">
        ${contact.email ? `<a href="mailto:${contact.email}">${contact.email}</a>` : ''}
        ${contact.github ? `<a href="https://${contact.github}" target="_blank">${contact.github}</a>` : ''}
        ${contact.linkedin ? `<a href="https://${contact.linkedin}" target="_blank">${contact.linkedin}</a>` : ''}
      </div>
    </section>

    <footer></footer>
  </main>

  <script>
    function typewriter(el, segments, speed, onDone) {
      const chars = [];
      for (const seg of segments)
        for (const c of seg.text) chars.push({ c, accent: !!seg.accent });
      let i = 0;
      const cur = document.createElement('span');
      cur.className = 'tw-cursor';
      el.appendChild(cur);
      let accentNode = null;
      const iv = setInterval(() => {
        const { c, accent } = chars[i++];
        if (accent) {
          if (!accentNode) {
            accentNode = document.createElement('span');
            accentNode.className = 'name-hl';
            cur.before(accentNode);
          }
          accentNode.textContent += c;
        } else {
          accentNode = null;
          cur.insertAdjacentText('beforebegin', c);
        }
        if (i >= chars.length) {
          clearInterval(iv);
          if (onDone) setTimeout(onDone, 200);
        }
      }, speed);
    }

    setTimeout(() => {
      typewriter(document.getElementById('tw-name'), [
        { text: '${nameBefore}' },
        { text: '${accentWord}', accent: true },
        { text: '${nameAfter}' }
      ], 75, () => {
        ['s-about', 's-stack', 's-work', 's-contact'].forEach((id, i) => {
          setTimeout(() => document.getElementById(id).classList.add('visible'), 150 + i * 120);
        });
      });
    }, 400);

    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(a => a.classList.remove('active'));
          const link = document.querySelector(\`.sidebar-nav a[href="#\${entry.target.id}"]\`);
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    document.querySelectorAll('section[id]').forEach(s => spy.observe(s));
  </script>
</body>
</html>`;
}
