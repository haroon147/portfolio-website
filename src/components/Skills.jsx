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
          { opacity: 0, scale: 0, rotation: -180, y: 50 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            delay: index * 0.03,
            scrollTrigger: {
              trigger: skill,
              start: 'top 85%',
            },
          }
        );

        // Hover animation for skill badges
        const handleSkillEnter = () => {
          gsap.to(skill, {
            scale: 1.2,
            rotation: 5,
            y: -5,
            duration: 0.3,
            ease: 'back.out(1.7)',
          });
        };

        const handleSkillLeave = () => {
          gsap.to(skill, {
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        skill.addEventListener('mouseenter', handleSkillEnter);
        skill.addEventListener('mouseleave', handleSkillLeave);

        // Continuous subtle bounce
        gsap.to(skill, {
          y: -3,
          duration: 1.5,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.1,
        });
      }
    });

    // Animate category cards
    if (sectionRef.current) {
      const categoryCards = sectionRef.current.querySelectorAll('.bg-gradient-to-br');
      if (categoryCards && categoryCards.length > 0) {
        gsap.fromTo(
          categoryCards,
          { opacity: 0, y: 50, rotationX: -90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }
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
      className="section bg-gray-900 py-20"
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
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4">
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
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-colors"
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

