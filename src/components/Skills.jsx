import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillRefs = useRef([]);

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

    skillRefs.current.forEach((skill, index) => {
      if (skill) {
        gsap.fromTo(
          skill,
          { opacity: 0, scale: 0.8, rotation: -10 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
            delay: index * 0.05,
            scrollTrigger: {
              trigger: skill,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  const skillCategories = [
    {
      category: 'Front-End Web Development',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      category: 'Back-End Web Development',
      skills: ['Node.js', 'Express', 'RESTful API'],
    },
    {
      category: 'Mobile App Development',
      skills: ['Flutter', 'Dart'],
    },
    {
      category: 'Database & Backend Services',
      skills: ['MongoDB', 'Mongoose', 'Firebase', 'Firestore', 'FirebaseAuth', 'Firestorage', 'RealTime Database'],
    },
    {
      category: 'Tools & Version Control',
      skills: ['GitHub', 'Git'],
    },
    {
      category: 'Other Technologies',
      skills: ['Deep Learning', 'Machine Learning', 'Unity Game Development'],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const totalIndex = catIndex * 10 + skillIndex;
                  return (
                    <span
                      key={skillIndex}
                      ref={(el) => {
                        if (!skillRefs.current[totalIndex]) {
                          skillRefs.current[totalIndex] = el;
                        }
                      }}
                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

