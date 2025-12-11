import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(progressRef.current, {
      scaleX: 1,
      transformOrigin: 'left',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-[100]">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ScrollProgress;

