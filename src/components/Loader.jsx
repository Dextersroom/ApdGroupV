import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import './Loader.css';

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = reduce ? 250 : 1500;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / total, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`loader ${done ? 'loader--done' : ''}`} aria-hidden={done}>
      <div className="loader__inner">
        <span className="loader__name">{profile.firstName}</span>
        <span className="loader__bar">
          <span className="loader__fill" style={{ transform: `scaleX(${count / 100})` }} />
        </span>
        <span className="loader__count">{String(count).padStart(3, '0')}</span>
      </div>
    </div>
  );
}
