import { useEffect, useRef } from 'react';
import './Cursor.css';

/**
 * Custom cursor: a soft trailing dot + an outline ring that lags behind.
 * - Expands over interactive elements ([data-cursor], a, button)
 * - Uses mix-blend-mode for legibility over any background
 * - Only mounts on fine-pointer, hover-capable devices (desktop)
 * - Respects prefers-reduced-motion (drops the trailing lerp)
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return; // touch device — bail, native cursor stays

    document.body.classList.add('custom-cursor-on');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      if (reduce) ring.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    if (!reduce) raf = requestAnimationFrame(loop);

    const interactiveSel = 'a, button, [data-cursor], input, textarea, label[for]';
    const over = (e) => {
      if (e.target.closest(interactiveSel)) ring.classList.add('is-active');
    };
    const out = (e) => {
      if (e.target.closest(interactiveSel)) ring.classList.remove('is-active');
    };
    const down = () => ring.classList.add('is-down');
    const up = () => ring.classList.remove('is-down');
    const leave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; };
    const enter = () => { dot.style.opacity = '1'; ring.style.opacity = '1'; };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', over, true);
    document.addEventListener('mouseout', out, true);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      document.body.classList.remove('custom-cursor-on');
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', over, true);
      document.removeEventListener('mouseout', out, true);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
