import { useEffect, useRef } from 'react';
import { profile } from '../../data/content';
import MagneticButton from '../MagneticButton';
import heroWebp from '../../assets/images/hero-name-portrait.webp';
import heroJpg from '../../assets/images/hero-name-portrait.jpg';
import './Hero.css';

export default function Hero() {
  const imgWrap = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const el = imgWrap.current;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translateY(${y * 0.08}px) scale(1.02)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__grid container">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__dot" /> Available for work — {profile.location.split('—')[0].trim()}
          </p>

          <h1 className="hero__title">
            <span className="line-mask hero__reveal-1"><span>Building for</span></span>
            <span className="line-mask hero__reveal-2"><span>the web, <em>&amp;</em></span></span>
            <span className="line-mask hero__reveal-3"><span>fluent in AI.</span></span>
          </h1>

          <p className="hero__lead">{profile.tagline}</p>

          <div className="hero__roles">
            {profile.roles.map((r) => <span key={r} className="hero__role">{r}</span>)}
          </div>

          <div className="hero__actions">
            <MagneticButton
              as="a" href="#work" variant="primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View work →
            </MagneticButton>
            <MagneticButton
              as="a" href="#contact" variant="secondary"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Get in touch
            </MagneticButton>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__img-frame" ref={imgWrap}>
            <picture>
              <source srcSet={heroWebp} type="image/webp" />
              <img
                src={heroJpg}
                alt={`Portrait of ${profile.name}`}
                width="1400" height="1866"
                fetchpriority="high"
                className="hero__img"
              />
            </picture>
            <span className="hero__img-tag">Est. 2003 · Mbombela</span>
          </div>
          <div className="hero__glow" aria-hidden="true" />
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about"
         onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
