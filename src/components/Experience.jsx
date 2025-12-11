import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Experience = () => {
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
          { opacity: 0, x: 50, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  const experiences = [
    {
      title: 'Lecturer',
      company: 'RIPHAH INTERNATIONAL UNIVERSITY – LAHORE, PAKISTAN',
      period: '02/08/2023 – CURRENT',
      description: [
        'Courses Taught: Web Application Development, Programming Fundamentals, Database Management, Mobile Application Development, and Complex Problem Solving.',
        'Author of Digital course of Mobile Application using Flutter on Coursera.',
      ],
    },
    {
      title: 'Visiting Lecturer (Week-end Contract)',
      company: 'SUPERIOR UNIVERSITY',
      period: '06/02/2025 – 28/06/2025',
      description: [
        'Course: Mobile Application Development',
      ],
    },
    {
      title: 'Visiting Lecturer',
      company: 'ORBIT INSTITUTE – LAHORE',
      period: '01/10/2022 – 15/02/2023',
      description: [
        'Courses Taught: Artificial Intelligence, SPM, Introduction to Software Engineering, and OOP.',
      ],
    },
    {
      title: 'Junior Front-End Developer',
      company: 'FAIRCARE – LAHORE, PAKISTAN',
      period: '07/08/2022 – 10/02/2023',
      description: [
        'Implementation of Front-end technologies integration in Zoho CRM.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section bg-gradient-to-br from-gray-800 to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-cyan-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-right">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

