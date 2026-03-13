// ─── Scroll Reveal Animation ───
import { animate } from 'animejs';

export function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animate(entry.target, {
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
                        delay: entry.target.dataset.delay
                            ? parseInt(entry.target.dataset.delay)
                            : 0,
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    reveals.forEach((el, i) => {
        el.dataset.delay = (i % 4) * 80;
        observer.observe(el);
    });
}
