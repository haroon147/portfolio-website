import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Global animations setup
    const ctx = gsap.context(() => {
      // Enhanced fade in sections on scroll with parallax
      gsap.utils.toArray('.section').forEach((section, index) => {
        // Parallax effect
        gsap.to(section, {
          y: index % 2 === 0 ? -30 : 30,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });

        // Fade in animation
        gsap.fromTo(
          section,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
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
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <ScrollProgress />
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
