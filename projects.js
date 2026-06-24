/* =========================================================================
   projects.js — the project list (source of truth for the Work page grid).

   TO ADD A NEW PROJECT:
   1. Duplicate one of the project-*.html pages and write the case study.
   2. Add one entry to the PROJECTS array below.
   That's it — the Work page card grid updates automatically.

   thumb: 'thumb--1' | 'thumb--2' | 'thumb--3'  (monochrome placeholder tiles;
          add more variants in styles.css, or swap for a real <img> later)
   ========================================================================= */

const PROJECTS = [
  {
    slug: 'project-credi8.html',
    title: 'Credi8 — Dental Payments Platform',
    meta: 'Product Design + Brand · 2025–Present',
    summary:
      'Solo designer on an end-to-end web app and brand identity that lets dental clinics offer transparent, flexible payment plans.',
    thumb: 'thumb--1',
    thumbImage: 'images/credi8-logo.png',
    thumbLabel: 'Credi8',
  },
  {
    slug: 'project-sunlife.html',
    title: 'Sunlife — UX Measurement Framework',
    meta: 'Experience Strategy · 2024',
    summary:
      'A unified framework for measuring and reporting design impact across Sunlife’s global product teams — turning scattered metrics into one shared standard.',
    thumb: 'thumb--2',
    thumbImage: 'images/sunlife-logo.png',
    thumbLabel: 'Sunlife',
  },
  {
    slug: 'project-helpshift.html',
    title: 'Helpshift — Redefining the Help Center Experience',
    meta: 'Design Lead · 2021–2022',
    summary:
      'Redesigning a customer-support Help Center into a modern, modular self-service experience for a platform serving 33M+ users.',
    thumb: 'thumb--4',
    thumbImage: 'images/helpshift-logo.png',
    thumbLabel: 'Helpshift',
  },
  {
    slug: 'project-bridgeathletic.html',
    title: 'BridgeAthletic — Mobile App Redesign',
    meta: 'UI/UX · User Research · 2020–2021',
    summary:
      'Rebuilding a 7-year-old training app for the remote-workout era — one experience that serves both elite coaches and first-time athletes.',
    thumb: 'thumb--4',
    thumbImage: 'images/bridgeathletic-logo.png',
    thumbLabel: 'BridgeAthletic',
  },
  {
    slug: 'project-monash.html',
    title: 'Monash — “Get Started” Redesign',
    meta: 'UI/UX Design · 2017',
    summary:
      'A semester-based onboarding journey guiding 15,000+ international students, replacing a scattered web of links with one structured starting point.',
    thumb: 'thumb--3',
    thumbImage: 'images/monash-logo.png',
    thumbLabel: 'Monash',
  },
  {
    slug: 'project-infillcube.html',
    title: 'Infillcube — UI for an Industrial 3D Printer',
    meta: 'Design Lead · 2018',
    summary:
      'Designing the on-device touchscreen UI for the C300 industrial 3D printer — usable by technical and non-technical operators, within tight hardware limits.',
    thumb: 'thumb--5',
    thumbImage: 'images/infillcube-logo.png',
    thumbLabel: 'Infillcube',
  },
];

function renderProjectCard(p) {
  const thumbContent = p.thumbImage
    ? `<img class="project-card__thumb-img" src="${p.thumbImage}" alt="${p.title} logo" />`
    : `<span class="project-card__thumb-label">${p.thumbLabel}</span>`;
  return `
    <a class="project-card" href="${p.slug}">
      <div class="project-card__thumb ${p.thumb}">
        ${thumbContent}
      </div>
      <div class="project-card__body">
        <span class="project-card__meta">${p.meta}</span>
        <span class="project-card__title">${p.title}</span>
        <span class="project-card__summary">${p.summary}</span>
        <span class="project-card__cta">Read case study →</span>
      </div>
    </a>`;
}

function mountProjects() {
  const grid = document.getElementById('project-grid');
  if (grid) grid.innerHTML = PROJECTS.map(renderProjectCard).join('');
}

document.addEventListener('DOMContentLoaded', mountProjects);
