import { profile, nav } from '../data/content';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const toTop = (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <span className="eyebrow">Get in touch</span>
          <a href={`mailto:${profile.email}`} className="footer__big" data-cursor>
            Let’s work<br />together<span className="footer__dot">.</span>
          </a>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__label">Navigate</span>
            <ul>
              {nav.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} onClick={(e) => go(e, n.id)} data-cursor>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <span className="footer__label">Elsewhere</span>
            <ul>
              <li><a href={profile.github} target="_blank" rel="noopener noreferrer" data-cursor>GitHub ↗</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" data-cursor>LinkedIn ↗</a></li>
              <li><a href={`mailto:${profile.email}`} data-cursor>Email ↗</a></li>
            </ul>
          </div>
          <div className="footer__col footer__col--wide">
            <span className="footer__label">Based in</span>
            <p className="footer__loc">{profile.location}</p>
            <p className="footer__avail"><span className="footer__pulse" /> Available for new projects</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {profile.name}. Built from scratch.</p>
          <button className="footer__top" onClick={toTop} data-cursor>Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
