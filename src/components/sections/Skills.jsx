import { skills } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills section-pad">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="A stack that spans the browser and the model."
          sub="From semantic markup to prompt design — here's what I work with."
        />

        <Reveal className="skills__grid reveal-stagger" stagger>
          {skills.map((cat) => (
            <article className="skill-card" key={cat.group} data-cursor>
              <header className="skill-card__head">
                <h3 className="skill-card__title">{cat.group}</h3>
                <span className="skill-card__count">{String(cat.items.length).padStart(2, '0')}</span>
              </header>
              <ul className="skill-card__list">
                {cat.items.map((item) => (
                  <li key={item} className="skill-card__item">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
