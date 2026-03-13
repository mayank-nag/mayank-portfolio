// ─── About Section Component ───
import { profile } from '../data/profile.js';

export function renderAbout() {
    const section = document.createElement('section');
    section.id = 'about';

    const headingHTML = profile.about.heading
        .split('\n')
        .map((line) => line)
        .join('<br/>');

    const paragraphsHTML = profile.about.paragraphs
        .map((p) => `<p>${p}</p>`)
        .join('');

    const statsHTML = profile.about.stats
        .map(
            (s) => `
      <div class="stat-item">
        <div class="stat-number" data-count="${s.value}">0</div>
        <div class="stat-label">${s.label}</div>
      </div>`
        )
        .join('');

    const educationHTML = profile.education
        .map(
            (edu) => `
      <div class="education-item">
        <h5>${edu.degree}</h5>
        <p>${edu.institution}</p>
        <p class="period">${edu.period}</p>
      </div>`
        )
        .join('');

    section.innerHTML = `
    <div>
      <div class="section-label reveal">01 — About</div>
      <h2 class="about-heading reveal">${headingHTML}</h2>
      <div class="about-stats reveal">
        ${statsHTML}
      </div>
    </div>
    <div>
      <div class="about-text reveal">
        ${paragraphsHTML}
      </div>
      <div class="education-block reveal">
        <h4>Education</h4>
        ${educationHTML}
      </div>
    </div>
  `;

    document.getElementById('app').appendChild(section);
}
