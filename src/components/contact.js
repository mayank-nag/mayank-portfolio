// ─── Contact Section Component ───
import { profile } from '../data/profile.js';

export function renderContact() {
    const section = document.createElement('section');
    section.id = 'contact';

    section.innerHTML = `
    <div class="contact-big reveal">
      Let's<br/><em>build</em><br/>together.
    </div>
    <a href="mailto:${profile.email}" class="contact-btn reveal">
      Say Hello ↗
    </a>
    <p class="contact-email reveal">${profile.email}</p>
  `;

    document.getElementById('app').appendChild(section);
}
