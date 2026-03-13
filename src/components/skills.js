// ─── Skills Section Component ───
import { profile } from '../data/profile.js';

export function renderSkills() {
    const section = document.createElement('section');
    section.id = 'skills';

    const cardsHTML = profile.skillGroups
        .map(
            (group) => `
      <div class="skill-card reveal">
        <div class="skill-icon">${group.icon}</div>
        <div class="skill-name">${group.title}</div>
        <div class="skill-desc">${group.description}</div>
        <div class="skill-tags">
          ${group.skills.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>`
        )
        .join('');

    section.innerHTML = `
    <div class="section-label reveal" style="color: #555;">02 — Skills</div>
    <div class="skills-grid">
      ${cardsHTML}
    </div>
  `;

    document.getElementById('app').appendChild(section);
}
