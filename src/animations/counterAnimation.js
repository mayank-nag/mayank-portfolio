// ─── Counter Animation ───
import { animate } from 'animejs';

export function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count);
                    const el = entry.target;
                    const obj = { val: 0 };

                    animate(obj, {
                        val: target,
                        duration: 1400,
                        easing: 'outExpo',
                        onUpdate: () => {
                            el.textContent = Math.round(obj.val) + '+';
                        },
                    });

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
}
