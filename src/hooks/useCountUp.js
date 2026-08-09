import { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 to `end` once the element enters view.
 */
export default function useCountUp(end, { duration = 1400 } = {}) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setVal(end); return; }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    obs.observe(node);
    return () => obs.disconnect();
  }, [end, duration]);

  return [ref, val];
}
