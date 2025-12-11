import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialRefs = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate description
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 85%',
        },
      }
    );

    // Animate social icons
    socialRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: icon,
              start: 'top 85%',
            },
          }
        );

        // Enhanced hover animation with glow effect
        const handleIconEnter = () => {
          gsap.to(icon, {
            scale: 1.3,
            rotation: 360,
            y: -10,
            duration: 0.5,
            ease: 'back.out(1.7)',
          });
          gsap.to(icon, {
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
            duration: 0.3,
          });
        };

        const handleIconLeave = () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
          gsap.to(icon, {
            boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
            duration: 0.3,
          });
        };

        icon.addEventListener('mouseenter', handleIconEnter);
        icon.addEventListener('mouseleave', handleIconLeave);

        // Continuous subtle pulse
        gsap.to(icon, {
          scale: 1.05,
          duration: 2,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        });
      }
    });

    // Animate form with input field animations
    if (formRef.current) {
      const formInputs = formRef.current.querySelectorAll('input, textarea, button');
      
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -100, rotationY: -30 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
        }
      );

      // Stagger form inputs
      gsap.fromTo(
        formInputs,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          delay: 0.3,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
        }
      );

      // Input focus animations
      if (formInputs && formInputs.length > 0) {
        formInputs.forEach((input) => {
          const handleFocus = () => {
            gsap.to(input, {
              scale: 1.02,
              y: -2,
              duration: 0.3,
              ease: 'power2.out',
            });
          };

          const handleBlur = () => {
            gsap.to(input, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          };

          input.addEventListener('focus', handleFocus);
          input.addEventListener('blur', handleBlur);
        });
      }
    }
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammad-haroon-987560108/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .771 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/haroon147',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: 'from-gray-800 to-gray-900',
    },
    {
      name: 'Email',
      url: 'mailto:147haroon@gmail.com',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-red-500 to-pink-500',
    },
    {
      name: 'Phone',
      url: 'tel:+923345246147',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Get In Touch
        </h2>
        <p
          ref={descriptionRef}
          className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialRefs.current[index] = el)}
                  className={`bg-gradient-to-br ${social.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-white group`}
                >
                  <div className="mb-2">{social.icon}</div>
                  <span className="text-sm font-semibold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <p className="text-gray-300 mb-2">Email</p>
            <a href="mailto:147haroon@gmail.com" className="text-white hover:text-blue-400 transition-colors">
              147haroon@gmail.com
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <p className="text-gray-300 mb-2">Phone</p>
            <a href="tel:+923345246147" className="text-white hover:text-blue-400 transition-colors">
              (+92) 3345246147
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:col-span-2">
            <p className="text-gray-300 mb-2">Address</p>
            <p className="text-white">Lahore, Pakistan</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-400">
          <p>© 2024 Muhammad Haroon Ahmad. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

