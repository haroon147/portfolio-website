import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Articles = () => {
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

  const articles = [
    {
      title: 'The Future of Web Development',
      publication: 'Tech Blog',
      date: 'March 2024',
      description:
        'Exploring the latest trends and technologies shaping the future of web development.',
      link: '#',
      category: 'Technology',
    },
    {
      title: 'Building Scalable React Applications',
      publication: 'Dev Magazine',
      date: 'February 2024',
      description:
        'Best practices and patterns for building large-scale React applications.',
      link: '#',
      category: 'Development',
    },
    {
      title: 'Introduction to Machine Learning',
      publication: 'AI Weekly',
      date: 'January 2024',
      description:
        'A beginner-friendly guide to understanding machine learning concepts.',
      link: '#',
      category: 'AI/ML',
    },
    {
      title: 'CSS Animations Made Easy',
      publication: 'Frontend Focus',
      date: 'December 2023',
      description:
        'Learn how to create smooth and performant CSS animations.',
      link: '#',
      category: 'Design',
    },
  ];

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="section bg-gradient-to-br from-purple-50 to-blue-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          My Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-blue-600 font-semibold">
                  {article.publication}
                </p>
                <a
                  href={article.link}
                  className="text-blue-600 hover:text-purple-600 font-semibold flex items-center gap-2"
                >
                  Read More
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

