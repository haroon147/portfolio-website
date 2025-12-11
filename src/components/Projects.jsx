import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        const techTags = card.querySelectorAll('span');
        const buttons = card.querySelectorAll('a');
        const emoji = card.querySelector('.text-6xl');

        // Card entrance animation
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotationX: 90, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        // Emoji animation
        if (emoji) {
          gsap.fromTo(
            emoji,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: 'elastic.out(1, 0.5)',
              delay: index * 0.15 + 0.3,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
            }
          );

          // Continuous emoji animation
          gsap.to(emoji, {
            rotation: 360,
            duration: 20,
            ease: 'none',
            repeat: -1,
          });
        }

        // Stagger tech tags animation
        gsap.fromTo(
          techTags,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            delay: index * 0.15 + 0.5,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        // Button animation
        gsap.fromTo(
          buttons,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: index * 0.15 + 0.7,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        // Enhanced hover animation
        const handleCardEnter = () => {
          gsap.to(card, {
            scale: 1.08,
            y: -15,
            rotationY: 10,
            rotationX: -5,
            z: 50,
            duration: 0.4,
            ease: 'power2.out',
          });
          if (emoji) {
            gsap.to(emoji, {
              scale: 1.3,
              rotation: '+=30',
              duration: 0.4,
              ease: 'power2.out',
            });
          }
        };

        const handleCardLeave = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            z: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
          if (emoji) {
            gsap.to(emoji, {
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          }
        };

        card.addEventListener('mouseenter', handleCardEnter);
        card.addEventListener('mouseleave', handleCardLeave);
      }
    });
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'GSAP', 'Tailwind CSS'],
      link: '#',
      github: '#',
      image: '📋',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      link: '#',
      github: '#',
      image: '🌤️',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics platform for social media metrics with data visualization, reporting tools, and trend analysis.',
      technologies: ['React', 'Python', 'D3.js', 'PostgreSQL'],
      link: '#',
      github: '#',
      image: '📊',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website with smooth animations and interactive elements built with React and GSAP.',
      technologies: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
      link: '#',
      github: '#',
      image: '💼',
    },
    {
      title: 'Learning Management System',
      description:
        'An educational platform for online courses with video streaming, quizzes, progress tracking, and certificates.',
      technologies: ['React', 'Express', 'MySQL', 'AWS'],
      link: '#',
      github: '#',
      image: '🎓',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700"
            >
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex-1 text-center px-4 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

