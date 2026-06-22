/* =========================================================================
   main.js — shared site chrome.
   Injects the nav + footer into every page so navigation lives in ONE place.
   To add/rename a page: edit the NAV_LINKS array below — that's the only spot.
   ========================================================================= */

const NAV_LINKS = [
  { label: 'Home', href: 'index.html' },
  { label: 'Work', href: 'work.html' },
  { label: 'AI Labs', href: 'ai.html' },
  { label: 'Contact', href: 'index.html#contact' },
];

// Update these once and they propagate to nav logo + footer everywhere.
const SITE = {
  name: 'Biffin Francis',
  email: 'biffinfrancis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/biffinfrancis/',
};

// Base page name without extension, e.g. "/work.html" or "/work" -> "work",
// "/" -> "index". Keeps nav matching working on both the dev server (clean
// URLs) and GitHub Pages (.html URLs).
function currentPage() {
  const last = window.location.pathname.split('/').pop();
  const base = last.replace(/\.html$/, '');
  return base === '' ? 'index' : base;
}

// Detail pages live under their section, so the section nav link stays
// highlighted on them: project-*.html → Work, ai-*.html → AI.
function isActive(href) {
  const here = currentPage();
  const target = href.replace(/\.html$/, '');
  if (target === here) return true;
  if (target === 'work' && here.startsWith('project-')) return true;
  if (target === 'ai' && here.startsWith('ai-')) return true;
  return false;
}

function renderNav() {
  const links = NAV_LINKS.map(
    (l) =>
      `<a class="nav__link${isActive(l.href) ? ' is-active' : ''}" href="${l.href}">${l.label}</a>`
  ).join('');

  return `
    <nav class="nav">
      <div class="nav__inner">
        <a class="logo" href="index.html">
          <span class="logo__bars">||</span> ${SITE.name.toUpperCase()}
        </a>
        <button class="nav__toggle" aria-label="Toggle menu">☰</button>
        <div class="nav__links">${links}</div>
      </div>
    </nav>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="footer__inner">
        <span>© ${year} ${SITE.name} — Senior Product Designer</span>
        <div class="footer__links">
          <a href="mailto:${SITE.email}">Email</a>
          <a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="index.html#contact">Contact</a>
        </div>
      </div>
    </footer>`;
}

function mountChrome() {
  const navSlot = document.getElementById('site-nav');
  const footerSlot = document.getElementById('site-footer');
  if (navSlot) navSlot.innerHTML = renderNav();
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // Mobile menu toggle
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('is-open'));
  }
}

document.addEventListener('DOMContentLoaded', mountChrome);
