export const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #000000;
    --fg: #e8e8e8;
    --dim: #444;
    --accent: #c8ff00;
    --muted: #1c1c1c;
  }

  html, body {
    background: var(--bg);
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-weight: 300;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Grain overlay */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1000;
    opacity: 0.45;
  }

  /* ─── BANNER ─── */
  #banner {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 3rem 0 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.1s forwards;
  }

  #ascii-banner {
    font-family: 'Courier Prime', monospace;
    font-size: clamp(5.5px, 0.72vw, 9px);
    line-height: 1.18;
    letter-spacing: 0.06em;
    color: #b0b0b0;
    white-space: pre;
    user-select: none;
    position: relative;
    z-index: 1;
  }

  #banner::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 75% 70% at 50% 45%, transparent 20%, rgba(0,0,0,0.6) 60%, #000 88%),
      linear-gradient(to bottom, transparent 35%, #000 100%);
    pointer-events: none;
    z-index: 2;
  }

  /* ─── LAYOUT ─── */
  main {
    max-width: 640px;
    margin: 0 auto;
    padding: 0 2rem 6rem;
    position: relative;
    z-index: 1;
  }

  /* ─── HEADER ─── */
  header {
    padding: 2.8rem 0 3.5rem;
    border-bottom: 1px solid var(--muted);
  }

  .name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 0.7rem;
    opacity: 0;
    animation: fadeUp 0.7s ease 0.2s forwards;
  }

  .tw-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: #e8e8e8;
    margin-left: 2px;
    vertical-align: text-bottom;
    animation: blink 0.8s step-end infinite;
  }

  @keyframes blink { 50% { opacity: 0; } }

  /* ─── ABOUT ─── */
  .about-body p {
    font-size: 0.84rem;
    color: #888;
    line-height: 1.85;
    margin-bottom: 0.9rem;
    max-width: 500px;
  }
  .about-body p:last-child { margin-bottom: 0; }

  /* ─── SECTIONS ─── */
  section {
    padding: 2.8rem 0;
    border-bottom: 1px solid var(--muted);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  section.visible { opacity: 1; transform: translateY(0); }

  .section-label {
    font-size: 0.62rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 1.8rem;
  }

  /* ─── STACK ─── */
  .stack-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    list-style: none;
  }

  .stack-list li {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    color: #777;
    border: 1px solid #1e1e1e;
    padding: 0.28rem 0.65rem;
    transition: border-color 0.2s, color 0.2s;
  }

  .stack-list li:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  /* ─── WORK TIMELINE ─── */
  .tl-company {
    margin-bottom: 1.6rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #111;
  }

  .tl-company-name {
    font-family: 'Courier Prime', monospace;
    font-size: 1rem;
    font-weight: 700;
    color: var(--fg);
    margin-bottom: 0.25rem;
  }

  .tl-company-role {
    font-size: 0.62rem;
    letter-spacing: 0.18em;
    color: #555;
    text-transform: uppercase;
  }

  .tl-phases {
    position: relative;
    padding-left: 1.4rem;
    border-left: 1px solid #1c1c1c;
  }

  .tl-phase {
    position: relative;
    padding-bottom: 2.2rem;
  }

  .tl-phase:last-child { padding-bottom: 0; }

  .tl-phase::before {
    content: '';
    position: absolute;
    left: -1.7rem;
    top: 0.42rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #1c1c1c;
    border: 1px solid #2c2c2c;
  }

  .tl-phase.active::before {
    background: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 8px rgba(200,255,0,0.2);
  }

  .tl-phase-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .tl-phase-year {
    font-size: 0.6rem;
    letter-spacing: 0.12em;
    color: #555;
    text-transform: uppercase;
  }

  .tl-phase-title {
    font-family: 'Courier Prime', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--fg);
    margin-bottom: 0.4rem;
  }

  .tl-phase-desc {
    font-size: 0.76rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 0.55rem;
  }

  .tl-phase-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .tl-tag {
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    color: #333;
  }

  /* ─── CONTACT ─── */
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .contact-links a {
    font-size: 0.8rem;
    color: #555;
    text-decoration: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: color 0.18s;
  }

  .contact-links a::before {
    content: '→';
    color: #2a2a2a;
    transition: color 0.18s, transform 0.18s;
    display: inline-block;
  }

  .contact-links a:hover { color: var(--fg); }
  .contact-links a:hover::before {
    color: var(--accent);
    transform: translateX(3px);
  }

  /* ─── FOOTER ─── */
  footer {
    padding-top: 2.5rem;
    font-size: 0.6rem;
    color: #222;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
  }

  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
`;
