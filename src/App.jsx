import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import VisualBreak from './components/sections/VisualBreak';
import Work from './components/sections/Work';
import Services from './components/sections/Services';
import Journey from './components/sections/Journey';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

export default function App() {
  const [, setLoaded] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => {
      setLoaded(true);
      document.body.classList.add('loaded');
    }, reduce ? 300 : 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <VisualBreak />
        <Work />
        <Services />
        <Journey />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
