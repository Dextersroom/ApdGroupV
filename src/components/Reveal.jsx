import useReveal from '../hooks/useReveal';

/**
 * Wraps children and applies the reveal transition when in view.
 * `stagger` enables per-child staggered reveal.
 */
export default function Reveal({ children, stagger = false, as = 'div', className = '', ...rest }) {
  const [ref, shown] = useReveal();
  const Tag = as;
  const base = stagger ? 'reveal-stagger' : 'reveal';
  return (
    <Tag ref={ref} className={`${base} ${shown ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
