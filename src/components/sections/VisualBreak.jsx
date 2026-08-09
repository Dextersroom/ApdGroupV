import { useEffect, useRef } from 'react';
import proofGif from '../../assets/images/work-proof.gif';
import proofPoster from '../../assets/images/work-proof-poster.webp';
import './VisualBreak.css';

export default function VisualBreak() {
  const imgRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const el = imgRef.current;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        el.style.transform = `translateY(${(progress - 0.5) * 60}px) scale(1.15)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="vbreak" aria-hidden="true">
      <div className="vbreak__media">
        <img
          ref={imgRef}
          src={proofGif}
          alt=""
          loading="lazy"
          decoding="async"
          width="1440"
          height="1440"
          style={{ backgroundImage: `url(${proofPoster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </div>
      <div className="vbreak__overlay" />
      <div className="vbreak__text container">
        <p className="vbreak__quote">
          “The work is the proof.”
        </p>
      </div>
    </section>
  );
}
