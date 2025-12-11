import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Publications = () => {
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
        const cardContent = card.querySelectorAll('h3, p, span, a');
        
        // Card entrance with 3D effect
        gsap.fromTo(
          card,
          { opacity: 0, x: 100, rotationY: 45, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        // Stagger content animation
        gsap.fromTo(
          cardContent,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: index * 0.2 + 0.3,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );

        // Enhanced hover effect
        const handlePubEnter = () => {
          gsap.to(card, {
            y: -8,
            rotationY: 5,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            duration: 0.4,
            ease: 'power2.out',
          });
        };

        const handlePubLeave = () => {
          gsap.to(card, {
            y: 0,
            rotationY: 0,
            scale: 1,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            duration: 0.4,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mouseenter', handlePubEnter);
        card.addEventListener('mouseleave', handlePubLeave);
      }
    });
  }, []);

  const publications = [
    {
      title: 'Next Word Prediction for Urdu using Deep Learning Techniques',
      authors: 'Muhammad Haroon Ahmad, Ali Saeed',
      journal: 'VFAST Transactions on Software Engineering',
      year: '2025',
      volume: 'Vol. 13 No. 1 (2025): January-March',
      publisher: 'VFAST Transactions on Software Engineering',
      description:
        'Research on next word prediction for Urdu language using advanced deep learning techniques.',
      link: '#',
    },
    {
      title: 'Improving Breast Cancer Detection in BUS Images Using Multimodal Deep Learning and Grad-CAM Fusion',
      authors: 'Muhammad Haroon Ahmad',
      journal: 'International Conference on Smart Systems and Emerging Technologies',
      year: '2025',
      volume: '',
      publisher: 'International Conference on Smart Systems and Emerging Technologies',
      description:
        'Advanced deep learning approach for improving breast cancer detection using multimodal techniques.',
      link: '#',
    },
    {
      title: 'RapidMiner-based Clustering Techniques for Enhancing Intrusion Detection System (IDS) Performance',
      authors: 'Muhammad Haroon Ahmad',
      journal: 'Journal of Computing & Biomedical Informatics',
      year: '2024',
      volume: '',
      publisher: 'Journal of Computing & Biomedical Informatics',
      description:
        'Research on enhancing IDS performance using RapidMiner-based clustering techniques.',
      link: '#',
    },
    {
      title: 'Forensic Strategies for Revealing Memory Artifacts in IoT Devices',
      authors: 'Muhammad Haroon Ahmad',
      journal: 'Journal of Computing & Biomedical Informatics',
      year: '2024',
      volume: '',
      publisher: 'Journal of Computing & Biomedical Informatics',
      description:
        'Forensic analysis strategies for detecting and analyzing memory artifacts in IoT devices.',
      link: '#',
    },
  ];

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="section bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Publications
        </h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {pub.title}
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Authors:</span> {pub.authors}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Journal:</span> {pub.journal}
              </p>
              {pub.volume && (
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Volume:</span> {pub.volume}
                </p>
              )}
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Publisher:</span> {pub.publisher}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                  {pub.year}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{pub.description}</p>
              <a
                href={pub.link}
                className="text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-2"
              >
                View Publication
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

