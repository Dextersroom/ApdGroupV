/* ============================================================
   CONTENT — single source of truth.
   Edit this file to update copy across the whole site.
   ============================================================ */

export const profile = {
  name: 'Nkosinathi Nkosi',
  firstName: 'Nkosinathi',
  lastName: 'Nkosi',
  roles: ['Programmer', 'Prompt Engineer', 'Web Developer'],
  location: 'Mbombela, Mpumalanga — South Africa',
  email: 'naytiiey02@gmail.com',
  github: 'https://github.com/Dextersroom',
  linkedin: 'https://www.linkedin.com/in/nkosinathi-nkosi-8a84b62b1',
  tagline: 'I build clean, fast web experiences — and I speak fluent AI.',
};

export const nav = [
  { id: 'home', label: 'Index' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  lead: 'A 21-year-old developer from Mbombela building for the web and working at the edge of applied AI.',
  body: [
    'I write software because I like the moment a rough idea turns into something people can actually use. Most of my work lives at the intersection of clean front-end engineering and prompt engineering — designing the interface a person touches, and shaping the way a language model reasons underneath it.',
    'I care about the details that separate a site that works from one that feels considered: the timing of a transition, the contrast of a caption, the weight of a heading. I learn fast, ship deliberately, and treat every project as a chance to raise my own floor.',
  ],
  pillars: [
    { k: 'Software Development', v: 'Interfaces and logic that hold up in production.' },
    { k: 'Prompt Engineering', v: 'Getting reliable, useful behaviour out of LLMs.' },
    { k: 'Problem Solving', v: 'Breaking messy problems into shippable pieces.' },
    { k: 'Continuous Learning', v: 'Always one project past my comfort zone.' },
  ],
  stats: [
    { value: 21, suffix: '', label: 'Years old' },
    { value: 3, suffix: '', label: 'Disciplines' },
    { value: 100, suffix: '%', label: 'Self-driven' },
    { value: 24, suffix: '/7', label: 'Curiosity' },
  ],
};

export const skills = [
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive UI', 'Tailwind'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Auth flows'] },
  { group: 'Programming', items: ['JavaScript', 'Python', 'Problem Solving', 'Data Structures'] },
  { group: 'AI', items: ['Prompt Engineering', 'LLM Integration', 'AI Workflows', 'RAG basics'] },
  { group: 'Tools', items: ['VS Code', 'Figma', 'Vite', 'npm', 'Postman'] },
  { group: 'Version Control', items: ['Git', 'GitHub', 'Branching', 'PRs'] },
];

export const services = [
  { n: '01', title: 'Website Development', desc: 'Custom, hand-built sites — no page-builder bloat.' },
  { n: '02', title: 'Responsive Design', desc: 'Looks right from a 320px phone to an ultrawide monitor.' },
  { n: '03', title: 'Landing Pages', desc: 'Focused, fast pages built to convert a single action.' },
  { n: '04', title: 'Business Websites', desc: 'A credible online presence for small businesses.' },
  { n: '05', title: 'Portfolio Websites', desc: 'Editorial, memorable sites for people who make things.' },
  { n: '06', title: 'Prompt Engineering', desc: 'Reliable prompts and LLM behaviour you can ship.' },
  { n: '07', title: 'AI Integration', desc: 'Wiring language models into real product workflows.' },
  { n: '08', title: 'UI/UX Design', desc: 'Interfaces that are clear before they are clever.' },
];

/* Projects are placeholders — replace with real work.
   Set `live` to a URL to activate the Live button; leave null to hide it. */
export const projects = [
  {
    n: '01',
    title: 'Project One',
    blurb: 'Replace with a real project. Describe the problem it solved and your role in one or two lines.',
    stack: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/Dextersroom',
    live: null,
    placeholder: true,
  },
  {
    n: '02',
    title: 'Project Two',
    blurb: 'Replace with a real project. Recruiters read this first — lead with impact, not tools.',
    stack: ['JavaScript', 'Node.js', 'API'],
    github: 'https://github.com/Dextersroom',
    live: null,
    placeholder: true,
  },
  {
    n: '03',
    title: 'Project Three',
    blurb: 'Replace with a real project. A short case study beats a long feature list.',
    stack: ['Python', 'LLM', 'Prompt Eng.'],
    github: 'https://github.com/Dextersroom',
    live: null,
    placeholder: true,
  },
];

export const journey = [
  { year: 'Now', title: 'Building in public', desc: 'Sharpening full-stack and prompt-engineering work, shipping projects and this portfolio.' },
  { year: '2024', title: 'Into applied AI', desc: 'Went deep on prompt engineering and integrating language models into real interfaces.' },
  { year: '2023', title: 'Front-end foundations', desc: 'Locked in HTML, CSS, JavaScript and React — the craft of building for the browser.' },
  { year: 'Start', title: 'First line of code', desc: 'Curiosity turned into a habit. The habit turned into a direction.' },
];

export const whyMe = [
  { title: 'Detail-obsessed', desc: 'The 5% of polish most people skip is the part I enjoy most.' },
  { title: 'Fast learner', desc: 'New stack, new domain — I get productive quickly and ask good questions.' },
  { title: 'AI-native', desc: 'I do not just use AI tools; I engineer how they behave.' },
  { title: 'Reliable', desc: 'Clear communication, honest timelines, work that ships.' },
];

/* Replace freely — kept generic and honest, not fabricated named clients. */
export const testimonials = [
  { quote: 'Placeholder testimonial. Swap in real words from a client, mentor, or teammate once you have them.', author: 'Your client', role: 'Add a role here' },
  { quote: 'Placeholder testimonial. Short, specific praise about how you work lands better than generic hype.', author: 'A collaborator', role: 'Add a role here' },
];
