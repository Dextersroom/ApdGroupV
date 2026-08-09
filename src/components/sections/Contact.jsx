import { useState } from 'react';
import { profile } from '../../data/content';
import SectionHeading from '../SectionHeading';
import Reveal from '../Reveal';
import './Contact.css';

/* ------------------------------------------------------------------
   FORMSPREE SETUP (2 minutes):
   1. Go to https://formspree.io and create a free form.
   2. Copy your form ID (looks like: xayzabcd).
   3. Paste it below, replacing YOUR_FORM_ID.
   Until then, the form falls back to opening the visitor's email client.
------------------------------------------------------------------ */
const FORMSPREE_ID = 'YOUR_FORM_ID';
const FORMSPREE_ENABLED = FORMSPREE_ID !== 'YOUR_FORM_ID';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Fallback: no Formspree configured — open a prefilled mailto.
    if (!FORMSPREE_ENABLED) {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + form.name)}&body=${body}`;
      setStatus('ok');
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (res.ok) { setStatus('ok'); setForm({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <SectionHeading index="07" eyebrow="Contact" title="Let’s build something." sub="Have a project, a role, or a question? Drop me a line." />

        <div className="contact__grid">
          <div className="contact__aside">
            <a className="contact__mail" href={`mailto:${profile.email}`} data-cursor>{profile.email}</a>

            <ul className="contact__meta">
              <li>
                <span className="contact__meta-k">Location</span>
                <span className="contact__meta-v">{profile.location}</span>
              </li>
              <li>
                <span className="contact__meta-k">Availability</span>
                <span className="contact__meta-v">Open to freelance &amp; roles</span>
              </li>
            </ul>

            <div className="contact__socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__social" data-cursor>GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social" data-cursor>LinkedIn ↗</a>
            </div>
          </div>

          <Reveal as="form" className="contact__form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={update} placeholder="Your name" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={update} placeholder="you@email.com" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={update} placeholder="Tell me about your project…" />
            </div>

            <button className="contact__submit" type="submit" data-cursor disabled={status === 'sending'}>
              <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
              <span aria-hidden="true">→</span>
            </button>

            <p className="contact__status" role="status" aria-live="polite">
              {status === 'ok' && (FORMSPREE_ENABLED ? 'Thanks — I’ll be in touch soon.' : 'Opening your email app…')}
              {status === 'error' && 'Something went wrong. Email me directly instead.'}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
