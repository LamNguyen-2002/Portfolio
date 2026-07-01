import { useEffect } from 'react';

/* Reveals any [data-reveal] element as it scrolls into view by setting a
   `data-in` attribute (CSS: `[data-reveal][data-in]`). We use an attribute
   — NOT a class — on purpose: React owns `className`, so a class added here
   gets wiped whenever the element re-renders with a dynamic className (e.g. a
   ticket toggling `is-sel`), making it vanish. React never touches `data-in`.
   Re-runs when `deps` change (e.g. navigating between landing pages). */
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;

    const reveal = (el) => el.setAttribute('data-in', '');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: never let content stay hidden if the observer misfires.
    const t = setTimeout(() => els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal(el);
    }), 1200);

    return () => { clearTimeout(t); io.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
