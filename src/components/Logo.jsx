import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Animate logo on mount
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
    );
  }, []);

  return (
    <div ref={logoRef} className="flex items-center gap-2 cursor-pointer" onClick={() => {
      const element = document.getElementById('home');
      if (element) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
          <span className="text-white font-bold text-xl">M</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          MHA
        </span>
        <span className="text-xs font-semibold text-gray-400 leading-tight -mt-1">
          Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;

