import { about, profile } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import Stat from '../Stat';
import coverWebp from '../../assets/images/portfolio-cover.webp';
import coverJpg from '../../assets/images/portfolio-cover.jpg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-pad">
      <div className="container">
        <SectionHeading index="01" eyebrow="About" title="Programmer, prompt engineer, web developer." />

        <div className="about__grid">
          <Reveal className="about__visual">
            <div className="about__img-wrap">
              <picture>
                <source srcSet={coverWebp} type="image/webp" />
                <img src={coverJpg} alt={`${profile.name} — portfolio cover`} loading="lazy" width="1400" height="1866" />
              </picture>
            </div>
            <div className="about__badge">
              <span className="about__badge-big">21</span>
              <span className="about__badge-sm">years<br />old</span>
            </div>
          </Reveal>

          <div className="about__body">
            <Reveal>
              <p className="about__lead">{about.lead}</p>
            </Reveal>
            {about.body.map((p, i) => (
              <Reveal key={i}><p className="about__para">{p}</p></Reveal>
            ))}

            <Reveal className="about__pillars reveal-stagger" stagger>
              {about.pillars.map((p) => (
                <div className="about__pillar" key={p.k}>
                  <h3 className="about__pillar-k">{p.k}</h3>
                  <p className="about__pillar-v">{p.v}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal className="about__stats reveal-stagger" stagger>
          {about.stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
