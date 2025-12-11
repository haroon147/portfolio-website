import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Education = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

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

    // Animate cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  const educationData = [
    {
      degree: 'Master in Software Engineering',
      institution: 'University of Lahore',
      year: '02/2021 – 03/2023',
      location: 'Lahore, Pakistan',
      description:
        'Thesis: Next word Prediction in Language Modeling using Deep learning Technologies. EQF level 7.',
      gpa: '3.75/4.0',
      website: 'https://uol.edu.pk/',
    },
    {
      degree: 'Bachelor in Software Engineering',
      institution: 'University of Lahore',
      year: '09/2015 – 02/2020',
      location: 'Lahore, Pakistan',
      description:
        'Comprehensive study in software engineering fundamentals, web development, and database systems.',
      gpa: 'N/A',
      website: 'https://uol.edu.pk/',
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Education Background
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">{edu.location}</p>
                  <p className="text-gray-600 mb-2">{edu.description}</p>
                  {edu.website && (
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Visit University Website →
                    </a>
                  )}
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-right">
                  <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                  {edu.gpa !== 'N/A' && (
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

