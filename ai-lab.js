/* =========================================================================
   ai-lab.js — the AI Lab list (source of truth for the ai.html gallery).

   The Lab is a living space, not a fixed portfolio. To add an experiment:
   1. (Optional) Build a detail page, e.g. ai-something.html, for the full log.
   2. Add one entry to the EXPERIMENTS array below.
   The gallery updates automatically — the grid reads as the space growing.

   index:    → the mono ordinal shown on the cover, e.g. '01'.
   featured: → true makes the entry span the full row (cover beside text).
   gradient: → 1–5, picks how the brand gradient fills the cover block
              (defined as .lab-cover--N in styles.css). Give each new project
              a different number so the growing grid stays varied but cohesive.
   path:     → the mono "command path" shown in the card.
   status:   → short state label, e.g. 'shipped', 'in progress'.
   tools:    → array of small mono pills (the stack / models used).
   href:     → detail page, or null for an entry with no page yet.
   ========================================================================= */

const EXPERIMENTS = [
  {
    slug: 'ai-ux-research.html',
    index: '01',
    gradient: 3,
    path: '~/lab/synthetic-users',
    status: 'shipped',
    title: 'Usability testing with synthetic users',
    desc: 'A reusable kit that points Claude at any website, role-plays buyer personas through a real browser, and returns scored transcripts and a findings report — no recruiting, no scheduling.',
    tools: ['Claude · Opus', 'Playwright', 'ISO 9241-11', 'SEQ'],
    featured: true,
  },
  {
    slug: 'ai-portfolio.html',
    index: '02',
    gradient: 1,
    path: '~/lab/portfolio',
    status: 'shipped',
    title: 'Building this portfolio with Claude',
    desc: 'Designed and directed end to end with Claude — a design system, a data-driven site, and case studies pulled from raw PDFs.',
    tools: ['Claude · Opus', 'design.md', 'HTML / CSS / JS'],
    featured: true,
  },
];

function renderExperimentCard(x) {
  const tags = (x.tools || [])
    .map((t) => `<span class="lab-tag">${t}</span>`)
    .join('');
  const featured = x.featured ? ' lab-card--featured' : '';
  const cta = !x.slug
    ? '<span class="lab-card__cta lab-card__cta--muted">Build log coming →</span>'
    : '<span class="lab-card__cta">Read the build log →</span>';

  const cover = `
      <div class="lab-card__cover lab-cover--${x.gradient || 1}">
        <span class="lab-card__grid" aria-hidden="true"></span>
        <span class="lab-card__ring" aria-hidden="true"></span>
        <span class="lab-card__kicker">BUILD LOG</span>
        <span class="lab-card__num">${x.index || ''}</span>
      </div>`;

  const body = `
      <div class="lab-card__body">
        <div class="lab-card__meta">
          <span class="lab-card__path">${x.path}</span>
          <span class="lab-card__status"><span class="lab-card__dot"></span>${x.status}</span>
        </div>
        <span class="lab-card__title">${x.title}</span>
        <p class="lab-card__desc">${x.desc}</p>
        <div class="lab-tags">${tags}</div>
        ${cta}
      </div>`;

  const inner = cover + body;
  return !x.slug
    ? `<div class="lab-card${featured}">${inner}</div>`
    : `<a class="lab-card${featured}" href="${x.slug}">${inner}</a>`;
}

// A quiet terminal-cursor tile so the Lab visibly reads as a growing space.
function soonTile() {
  return `
    <div class="lab-soon">
      <span class="lab-soon__prompt">$ next experiment</span>
      <span class="lab-soon__cursor" aria-hidden="true">▋</span>
    </div>`;
}

function mountLab() {
  const grid = document.getElementById('lab-grid');
  if (!grid) return;
  grid.innerHTML = EXPERIMENTS.map(renderExperimentCard).join('') + soonTile();
}

document.addEventListener('DOMContentLoaded', mountLab);
