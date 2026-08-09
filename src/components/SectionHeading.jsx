import Reveal from './Reveal';
import './SectionHeading.css';

export default function SectionHeading({ index, eyebrow, title, sub, align = 'left' }) {
  return (
    <Reveal className={`sec-head sec-head--${align}`}>
      <div className="sec-head__top">
        {index && <span className="sec-head__index">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="sec-head__title">{title}</h2>
      {sub && <p className="sec-head__sub">{sub}</p>}
    </Reveal>
  );
}
