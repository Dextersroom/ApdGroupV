import { projects } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import './Work.css';

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.13-.29-.52-1.46.1-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.05.78 2.12v3.14c0 .31.2.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="work section-pad">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Featured projects."
          sub="Placeholder cards for now — structured so real projects drop straight in."
        />

        <div className="work__list">
          {projects.map((p) => (
            <Reveal key={p.n} className="work__row-wrap">
              <article className="work__row" data-cursor>
                <div className="work__num">{p.n}</div>
                <div className="work__main">
                  <div className="work__headline">
                    <h3 className="work__title">
                      {p.title}
                      {p.placeholder && <span className="work__flag">Placeholder</span>}
                    </h3>
                    <div className="work__stack">
                      {p.stack.map((s) => <span key={s} className="work__tag">{s}</span>)}
                    </div>
                  </div>
                  <p className="work__blurb">{p.blurb}</p>
                </div>
                <div className="work__actions">
                  {p.github && (
                    <a className="work__btn" href={p.github} target="_blank" rel="noopener noreferrer" data-cursor>
                      <GithubIcon /> Code
                    </a>
                  )}
                  {p.live ? (
                    <a className="work__btn work__btn--cta" href={p.live} target="_blank" rel="noopener noreferrer" data-cursor>
                      Live demo →
                    </a>
                  ) : (
                    <span className="work__btn work__btn--muted" aria-disabled="true">Demo soon</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
