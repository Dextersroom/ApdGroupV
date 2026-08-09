import { services } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services section-pad">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Services"
          title="What I can build for you."
          sub="Freelance and collaborative work — from a single landing page to AI-integrated products."
        />

        <Reveal className="services__grid reveal-stagger" stagger>
          {services.map((s) => (
            <article className="service" key={s.n} data-cursor>
              <span className="service__n">{s.n}</span>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
              <span className="service__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
