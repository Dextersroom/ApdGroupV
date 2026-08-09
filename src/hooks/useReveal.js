import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element when it scrolls into view.
 * Respects prefers-reduced-motion by revealing immediately.
 */
export default function useReveal({ threshold = 0.18, once = true } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setShown(true); return; }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold, once]);

  return [ref, shown];
}
