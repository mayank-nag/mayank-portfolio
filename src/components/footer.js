// ─── Footer Component ───
import { profile } from '../data/profile.js';

export function renderFooter() {
    const footer = document.createElement('footer');

    const year = new Date().getFullYear();

    footer.innerHTML = `
    <p>© ${year} ${profile.name.first} ${profile.name.last} — ALL RIGHTS RESERVED</p>
    <p>BUILT WITH VITE + ANIME.JS</p>
  `;

    document.getElementById('app').appendChild(footer);
}
