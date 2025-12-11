import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Articles from './components/Articles';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Global animations setup
    const ctx = gsap.context(() => {
      // Fade in sections on scroll
      gsap.utils.toArray('.section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="App">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Publications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
