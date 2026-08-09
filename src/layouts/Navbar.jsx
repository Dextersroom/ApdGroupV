import { useEffect, useState } from 'react';
import { nav, profile } from '../data/content';
import useActiveSection from '../hooks/useActiveSection';
import './Navbar.css';

const ids = nav.map((n) => n.id);

export default function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__bar container">
        <a href="#home" className="nav__brand" onClick={(e) => go(e, 'home')} data-cursor>
          <span className="nav__brand-mark">NN</span>
          <span className="nav__brand-name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => go(e, item.id)}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`}
              data-cursor
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav__cta" onClick={(e) => go(e, 'contact')} data-cursor>
          Let’s talk
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="nav__mobile-links" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => go(e, item.id)}
              className={`nav__mobile-link ${active === item.id ? 'is-active' : ''}`}
              style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : '0s' }}
            >
              <span className="nav__mobile-num">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav__mobile-contact" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </header>
  );
}
