import React, { useEffect, useRef, useState } from 'react';
import ScriptIcon from './icons/ScriptIcon';
import EmotionIcon from './icons/EmotionIcon';
import AnalyticsIcon from './icons/AnalyticsIcon';

const Demo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleAnimationEnd = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented: ", error);
      });
    }
  };
  
  const FloatingCard: React.FC<{ title: string, delay: string }> = ({ title, delay }) => (
    <div 
      className={`bg-white/5 border border-white/10 rounded-lg px-4 py-3 backdrop-blur-sm transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      style={{ animation: inView ? `float 6s ease-in-out infinite ${delay}` : 'none', transitionDelay: delay }}
    >
      <p className="text-white text-sm font-medium">{title}</p>
    </div>
  );
  
  const FloatingIcon: React.FC<{ icon: React.ReactNode, delay: string }> = ({ icon, delay }) => (
     <div 
      className={`p-4 bg-purple-900/30 rounded-full transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
      style={{ animation: inView ? `float 6s ease-in-out infinite ${delay}` : 'none', transitionDelay: delay }}
     >
      {icon}
    </div>
  );

  return (
    <section ref={sectionRef} id="demo" className="relative py-20 sm:py-32 bg-gradient-to-b from-[#000d1e] to-[#0c0a18] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.1)_0%,_rgba(167,139,250,0)_50%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            See the AI Calling Agent in Action
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Watch how our agent understands Indian languages, tones & real emotions — and talks back like a real human.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-12 items-center gap-8">
          {/* Left Cards */}
          <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col justify-around md:justify-start gap-6">
            <FloatingCard title="Multi-Language Voice" delay="0s" />
            <FloatingCard title="Emotion Detection" delay="0.5s" />
            <FloatingCard title="Human Tone Replies" delay="1s" />
          </div>

          {/* Laptop */}
          <div className="col-span-12 md:col-span-6" style={{ perspective: '1000px' }}>
            <div 
              className={`relative w-full max-w-2xl mx-auto transition-transform duration-1000`}
              style={{ transformStyle: 'preserve-3d', animation: inView ? 'flip-in 1s forwards' : 'none' }}
              onAnimationEnd={handleAnimationEnd}
            >
              {/* Laptop Back */}
              <div className="absolute w-full h-full bg-gray-800 rounded-lg" style={{backfaceVisibility: 'hidden'}}>
                <div className="absolute inset-1 bg-black/50 rounded-md flex items-center justify-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full animate-pulse"></div>
                </div>
              </div>
              {/* Laptop Front (Screen) */}
              <div className="w-full bg-gray-900 border-4 border-gray-700 rounded-lg p-2 aspect-video" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                 <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded"
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Placeholder video
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
          
           {/* Right Icons */}
          <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col justify-around md:items-end items-center md:justify-start gap-8">
             <FloatingIcon icon={<ScriptIcon className="w-8 h-8 text-purple-400" />} delay="0.2s" />
             <FloatingIcon icon={<EmotionIcon className="w-8 h-8 text-purple-400" />} delay="0.7s" />
             <FloatingIcon icon={<AnalyticsIcon className="w-8 h-8 text-purple-400" />} delay="1.2s" />
          </div>

        </div>

        {/* CTAs under Laptop */}
        <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-1000 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
           <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-full shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_35px_rgba(168,85,247,0.5)] transform hover:scale-105 transition-all duration-300 ease-in-out">
            Try Live Demo Call
          </button>
          <button className="px-8 py-3 bg-black/20 border border-white/20 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
            Full Case Study Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
