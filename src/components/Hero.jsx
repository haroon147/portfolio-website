import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline();

    // Split text animation for title - wait for ref to be ready
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || '';
      if (titleText) {
        titleRef.current.innerHTML = titleText
          .split(' ')
          .map((word) => `<span style="display: inline-block;" class="title-word">${word}</span>`)
          .join(' ');

        const titleWords = titleRef.current.querySelectorAll('.title-word');
        
        if (titleWords.length > 0) {
          // Animate title words with stagger
          gsap.fromTo(
            titleWords,
            { opacity: 0, y: 50, rotationX: -90 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              ease: 'back.out(1.7)',
              stagger: 0.1,
            }
          );
        }
      }
    }

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
      '-=0.3'
    )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30, clipPath: 'inset(0 100% 0 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2)' },
        '-=0.3'
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.3, rotation: -15, x: 100 },
        { opacity: 1, scale: 1, rotation: 0, x: 0, duration: 1.2, ease: 'power3.out' },
        '-=0.8'
      );

    // Enhanced floating animation for image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -25,
        rotation: 2,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Parallax effect on scroll (only if element exists)
      if (heroRef.current) {
        gsap.to(imageRef.current, {
          y: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }

    // Button pulse animation
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
            >
              Hi, I&apos;m Muhammad Haroon Ahmad
            </h1>
            <h2
              ref={subtitleRef}
              className="text-2xl md:text-3xl text-cyan-400 mb-4 font-semibold"
            >
              Lecturer & Software Engineer
            </h2>
            <p
              ref={descriptionRef}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Passionate educator and software engineer specializing in Web Development, 
              Mobile Applications, and Deep Learning. Author of digital courses and 
              published researcher in AI and Software Engineering.
            </p>
            <button
              ref={buttonRef}
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center md:justify-end md:pr-8">
            <div
              ref={imageRef}
              className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-500/50 ring-4 ring-cyan-500/30 relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}haroon.jpg`}
                alt="Muhammad Haroon Ahmad"
                className="w-full h-full object-cover object-center scale-110"
                style={{
                  objectPosition: 'center center',
                }}
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.src = '/haroon.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

