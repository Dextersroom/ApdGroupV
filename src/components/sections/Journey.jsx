import { journey, whyMe } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import mantraWebp from '../../assets/images/mantra-i-will.webp';
import mantraJpg from '../../assets/images/mantra-i-will.jpg';
import './Journey.css';

export default function Journey() {
  return (
    <section id="journey" className="journey section-pad">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Journey"
          title="I can. I must. I will. I did."
          sub="How the path unfolded — and why working with me is a straightforward bet."
        />

        <div className="journey__grid">
          <Reveal className="journey__visual">
            <div className="journey__img-wrap">
              <picture>
                <source srcSet={mantraWebp} type="image/webp" />
                <img src={mantraJpg} alt="I can. I must. I will. I did." loading="lazy" width="1400" height="1866" />
              </picture>
            </div>
          </Reveal>

          <div className="journey__timeline">
            {journey.map((j, i) => (
              <Reveal key={i} className="journey__item">
                <div className="journey__year">{j.year}</div>
                <div className="journey__content">
                  <h3 className="journey__title">{j.title}</h3>
                  <p className="journey__desc">{j.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="why">
          <Reveal><h3 className="why__head">Why work with me</h3></Reveal>
          <Reveal className="why__grid reveal-stagger" stagger>
            {whyMe.map((w) => (
              <div className="why__card" key={w.title} data-cursor>
                <h4 className="why__title">{w.title}</h4>
                <p className="why__desc">{w.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
