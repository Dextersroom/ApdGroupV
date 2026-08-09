import { useRef } from 'react';
import './MagneticButton.css';

/**
 * Button/link that leans toward the cursor within its bounds.
 * Disabled automatically on touch + reduced-motion.
 */
export default function MagneticButton({
  as = 'a', href, onClick, children, variant = 'primary', className = '', ...rest
}) {
  const ref = useRef(null);
  const Tag = as;

  const canMagnet = () =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e) => {
    if (!canMagnet()) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.32}px)`;
    el.querySelector('.mb-label').style.transform = `translate(${x * 0.12}px, ${y * 0.14}px)`;
  };
  const reset = () => {
    const el = ref.current;
    el.style.transform = '';
    el.querySelector('.mb-label').style.transform = '';
  };

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`magnetic-btn mb-${variant} ${className}`}
      data-cursor
      {...rest}
    >
      <span className="mb-label">{children}</span>
    </Tag>
  );
}
