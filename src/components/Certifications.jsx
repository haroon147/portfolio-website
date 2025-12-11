import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Certifications = () => {
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
          { opacity: 0, y: 50, rotation: -5 },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
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

  const certifications = [
    {
      title: 'Meta Front-End Developer',
      issuer: 'Coursera',
      date: '30/10/2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/REVR1VM2Q7O7',
      description: 'Specialization in Front-End Development',
    },
    {
      title: 'The Web Developer BootCamp 2024',
      issuer: 'Udemy',
      date: '14/07/2024',
      link: 'https://www.udemy.com/certificate/UC-fe52337b-94aa-47da-9e63-bf347a9447ea/',
      description: 'Comprehensive web development bootcamp',
    },
  ];

  const internships = [
    {
      title: 'Web Development Internship',
      company: 'Erozgar Pakistan',
      period: '19/05/2019 – 15/08/2019',
      description: 'HTML, CSS, JavaScript and React',
    },
    {
      title: 'Web Development Internship',
      company: 'ETU starters',
      period: '10/06/2020 – 19/09/2020',
      description: 'Unity Game Development',
    },
    {
      title: 'Designing Internship',
      company: 'Daud Technologies Lahore',
      period: '13/10/2022 – 14/11/2022',
      description: 'UI/UX Design and Development',
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section bg-gradient-to-br from-gray-800 to-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Certifications & Internships
        </h2>
        
        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500"
              >
                <h4 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-cyan-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-300 mb-3">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2"
                  >
                    View Certificate
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Internships
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[certifications.length + index] = el)}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {internship.title}
                </h4>
                <p className="text-purple-400 font-semibold mb-2">
                  {internship.company}
                </p>
                <p className="text-gray-300 mb-3">{internship.description}</p>
                <span className="text-gray-400 text-sm">{internship.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

