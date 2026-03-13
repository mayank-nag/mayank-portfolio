// ─── Portfolio / Projects Section Component ───
import { profile } from '../data/profile.js';

function buildPattern(type, index) {
    switch (type) {
        case 'grid':
            return `
        <svg class="project-pattern" viewBox="0 0 400 250" preserveAspectRatio="none">
          <defs><pattern id="grid${index}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/></pattern></defs>
          <rect width="400" height="250" fill="url(#grid${index})"/>
        </svg>`;
        case 'dots':
            return `
        <svg class="project-pattern" viewBox="0 0 400 250" preserveAspectRatio="none">
          <defs><pattern id="dots${index}" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white"/></pattern></defs>
          <rect width="400" height="250" fill="url(#dots${index})"/>
        </svg>`;
        case 'lines':
            return `
        <svg class="project-pattern" viewBox="0 0 400 250" preserveAspectRatio="none">
          <defs><pattern id="lines${index}" width="30" height="30" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="30" y2="30" stroke="white" stroke-width="0.5"/></pattern></defs>
          <rect width="400" height="250" fill="url(#lines${index})"/>
        </svg>`;
        default:
            return '';
    }
}

export function renderPortfolio() {
    const section = document.createElement('section');
    section.id = 'portfolio';

    const total = profile.projects.length;

    const cardsHTML = profile.projects
        .map(
            (proj, i) => `
      <a href="${proj.github}" target="_blank" class="project-card reveal" style="text-decoration:none; color:white;">
        <div class="project-bg" style="background: ${proj.gradient};">
          ${buildPattern(proj.pattern, i)}
        </div>
        <div class="project-info">
          <div class="project-num">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
          <div class="project-name">${proj.title}</div>
          <div class="project-desc">${proj.description}</div>
          <div class="project-tech">${proj.tech.join(' · ')}</div>
        </div>
        <div class="project-arrow">↗</div>
      </a>`
        )
        .join('');

    section.innerHTML = `
    <div class="section-label reveal" style="color: #555;">03 — Work</div>
    <div class="portfolio-grid">
      ${cardsHTML}
    </div>
  `;

    document.getElementById('app').appendChild(section);
}
