import { testimonials, profile } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import MagneticButton from '../MagneticButton';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="tst section-pad">
      <div className="container">
        <SectionHeading index="06" eyebrow="Words" title="Testimonials." sub="Easy to swap — replace these two with real quotes when you have them." />

        <div className="tst__grid">
          {testimonials.map((t, i) => (
            <Reveal key={i} className="tst__card">
              <span className="tst__mark" aria-hidden="true">”</span>
              <p className="tst__quote">{t.quote}</p>
              <div className="tst__author">
                <span className="tst__name">{t.author}</span>
                <span className="tst__role">{t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="resume">
          <div className="resume__text">
            <h3 className="resume__title">Want the short version?</h3>
            <p className="resume__sub">Download my CV — pick the format that suits you.</p>
          </div>
          <div className="resume__actions">
            <MagneticButton as="a" href="/Nkosinathi_Nkosi_CV.pdf" download variant="primary">
              Download PDF ↓
            </MagneticButton>
            <MagneticButton as="a" href="/Nkosinathi_Nkosi_CV.docx" download variant="secondary">
              Download Word ↓
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
