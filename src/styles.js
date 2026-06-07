export const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:     #0d0d0d;
    --fg:     #e6e6e6;
    --dim:    #555555;
    --line:   #1e1e1e;
    --accent: #c8c8c8;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    background: var(--bg);
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-weight: 300;
    min-height: 100vh;
    overflow-x: hidden;
    padding-left: 160px;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1000;
    opacity: 0.38;
  }

  /* ─── SIDEBAR ─── */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 160px;
    height: 100vh;
    padding: 2.8rem 1.8rem;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--line);
    z-index: 10;
  }

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .sidebar-nav a {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    color: #383838;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: color 0.15s;
  }

  .nav-slash {
    color: var(--dim);
    transition: color 0.15s;
  }

  .sidebar-nav a:hover,
  .sidebar-nav a.active {
    color: var(--fg);
  }

  .sidebar-nav a:hover .nav-slash,
  .sidebar-nav a.active .nav-slash {
    color: var(--fg);
  }

  /* ─── LAYOUT ─── */
  main {
    max-width: 740px;
    margin: 0 auto 0 4rem;
    padding: 0 3.5rem 8rem;
  }

  /* ─── HEADER ─── */
  header {
    padding: 6rem 0 4.5rem;
    border-bottom: 1px solid var(--line);
  }

  .name {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: clamp(2.4rem, 6vw, 4rem);
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 0.7rem;
    opacity: 0;
    animation: fadeUp 0.7s ease 0.2s forwards;
  }

  .name-hl { color: var(--accent); }

  .tw-cursor {
    display: inline-block;
    width: 2px;
    height: 0.85em;
    background: var(--fg);
    margin-left: 2px;
    vertical-align: text-bottom;
    animation: blink 0.8s step-end infinite;
  }

  @keyframes blink { 50% { opacity: 0; } }

  /* ─── SECTIONS ─── */
  section {
    padding: 3rem 0;
    border-bottom: 1px solid var(--line);
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  section.visible { opacity: 1; transform: translateY(0); }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    color: var(--dim);
    margin-bottom: 2rem;
  }

  .path-slash { color: var(--fg); }

  /* ─── ABOUT ─── */
  .about-body p {
    font-size: 0.82rem;
    color: #6a6a6a;
    line-height: 1.95;
    margin-bottom: 1rem;
    max-width: 520px;
  }
  .about-body p:last-child { margin-bottom: 0; }

  /* ─── STACK ─── */
  .stack-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    list-style: none;
  }

  .stack-list li {
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    color: #5a5a5a;
    border: 1px solid #222222;
    padding: 0.25rem 0.65rem;
    transition: border-color 0.2s, color 0.2s;
  }

  .stack-list li:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  /* ─── WORK ─── */
  .tl-company {
    margin-bottom: 2rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid var(--line);
  }

  .tl-company-name {
    font-family: 'Courier Prime', monospace;
    font-size: 1rem;
    font-weight: 700;
    color: var(--fg);
    margin-bottom: 0.3rem;
  }

  .tl-company-role {
    font-size: 0.58rem;
    letter-spacing: 0.22em;
    color: var(--dim);
    text-transform: uppercase;
  }

  .tl-phases {
    padding-left: 1.2rem;
    border-left: 1px solid var(--line);
  }

  .tl-phase {
    position: relative;
    padding-bottom: 2.4rem;
  }
  .tl-phase:last-child { padding-bottom: 0; }

  .tl-phase::before {
    content: '';
    position: absolute;
    left: -1.48rem;
    top: 0.38rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #222222;
    border: 1px solid #303030;
  }

  .tl-phase.active::before {
    background: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(200, 200, 200, 0.15);
  }

  .tl-phase-year {
    display: block;
    font-size: 0.56rem;
    letter-spacing: 0.16em;
    color: var(--dim);
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .tl-phase-title {
    font-family: 'Courier Prime', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--fg);
    margin-bottom: 0.45rem;
  }

  .tl-phase-desc {
    font-size: 0.73rem;
    color: #666666;
    line-height: 1.8;
    margin-bottom: 0.6rem;
  }

  .tl-phase-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tl-tag {
    font-size: 0.58rem;
    letter-spacing: 0.1em;
    color: #484848;
  }

  /* ─── CONTACT ─── */
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .contact-links a {
    font-size: 0.78rem;
    color: #6a6a6a;
    text-decoration: none;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    transition: color 0.2s;
  }

  .contact-links a::before {
    content: '—';
    color: var(--accent);
    font-size: 0.65rem;
    flex-shrink: 0;
    font-family: 'DM Mono', monospace;
  }

  .contact-links a:hover { color: var(--fg); }

  /* ─── FOOTER ─── */
  footer {
    padding-top: 3.5rem;
    font-size: 0.56rem;
    color: #2e2e2e;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  /* ─── MOBILE ─── */
  @media (max-width: 640px) {
    html, body {
      padding-left: 0;
    }
    .sidebar {
      position: relative;
      width: 100%;
      height: auto;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 1.2rem 1.5rem;
      border-right: none;
      border-bottom: 1px solid var(--line);
    }
    .sidebar-nav {
      flex-direction: row;
      gap: 1.2rem;
    }
    main {
      max-width: 100%;
      padding: 0 1.5rem 6rem;
    }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
`;
