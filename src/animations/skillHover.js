// ─── Skill Card Hover Animation ───
import { animate, stagger } from 'animejs';

export function initSkillHover() {
    document.querySelectorAll('.skill-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            animate(card.querySelectorAll('.skill-tag'), {
                translateY: [-4, 0],
                opacity: [0.6, 1],
                delay: stagger(60),
                duration: 300,
                easing: 'outQuad',
            });
        });
    });
}
