import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Progress bar animation
    gsap.to(progressRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut',
    });

    // Fade out
    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    }).to(loadingRef.current, {
      display: 'none',
      duration: 0,
    });
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 z-[9999] flex items-center justify-center"
    >
      <div className="text-center">
        <div
          ref={logoRef}
          className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-2xl"
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MHA
          </span>
        </div>
        <h2
          ref={textRef}
          className="text-2xl font-bold text-white mb-4"
        >
          Loading Portfolio...
        </h2>
        <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white rounded-full"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

