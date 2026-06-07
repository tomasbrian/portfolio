export const data = {
  name: 'hello, tomas here.',
  accentWord: 'tomas',
  about: [
    `Started shipping controllers and views, moved deeper into APIs and database design, now automating document processing with AI integrations and LLMs. The complexity stack keeps growing, and so does the curiosity.`,
    `Outside of work: tinkering with operating systems, messing with hardware. Into vinyl records, literary fiction, and anything that can be taken apart and put back together differently.`,
  ],
  stack: [
    'Python', 'SQL Server', 'Linux', 'Laravel', 'PHP',
    'Gemini API', 'Vertex AI', 'Anthropic API',
    'Ollama', 'Docker', 'Git', 'REST APIs', 'Bash',
  ],
  projects: [
    {
      title: 'Document Processing Pipeline',
      desc: 'Automated document ingestion, classification, and structured data extraction using LLMs. Handles high-volume processing with Python workers.',
      tags: ['Python', 'Gemini API', 'Vertex AI', 'SQL Server'],
      url: null,
    },
    {
      title: 'Internal REST API',
      desc: 'Backend API for a multi-tenant business platform. Schema design, auth flow, and data layer on SQL Server.',
      tags: ['Laravel', 'PHP', 'REST APIs', 'SQL Server'],
      url: null,
    },
  ],
  work: {
    company: 'Fidelitas',
    duration: 'Full-time · 3+ years',
    phases: [
      {
        year: '2023',
        title: 'Controllers & Views',
        desc: 'Started building the frontend logic — controllers, views, routing, shipping features end to end.',
        tags: ['Laravel', 'PHP', 'Blade'],
        active: false,
      },
      {
        year: '2024–2025',
        title: 'APIs & Database',
        desc: 'Shifted to APIs and the database layer. Schema design, SQL, backend architecture.',
        tags: ['REST APIs', 'SQL Server', 'PHP', 'Laravel'],
        active: false,
      },
      {
        year: '2025–2026',
        title: 'AI & Data Processing',
        desc: 'Implementing AI integrations, automating document processing with Python, working with LLMs and data extraction at scale.',
        tags: ['Python', 'Gemini API', 'Vertex AI', 'Anthropic API', 'SQL Server'],
        active: true,
      },
    ],
  },
  contact: {
    // email: 'tomasbrianb@gmail.com',
    github: 'github.com/tomasbrian',
    linkedin: 'linkedin.com/in/tomasbrianb',
  },
};
