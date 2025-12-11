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
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotationY: 15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
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
      className="section bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20"
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
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300"
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

