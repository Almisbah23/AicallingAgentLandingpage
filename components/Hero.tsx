import React from 'react';
import WaveIcon from './icons/WaveIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-white pt-20">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        <WaveIcon
          className="absolute top-1/2 -translate-y-[60%] left-0 w-[200%] h-auto text-indigo-500/20 animate-pan-horizontal"
          style={{ animationDuration: '45s' }}
        />
        <WaveIcon
          className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] h-auto text-purple-500/25 animate-pan-horizontal"
          style={{ animationDuration: '30s', animationDirection: 'reverse' }}
        />
        <WaveIcon
          className="absolute top-1/2 -translate-y-[40%] left-0 w-[200%] h-auto text-fuchsia-400/30 animate-pan-horizontal"
          style={{ animationDuration: '20s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Talk to AI.
          <br />
          It talks back like Humans.
        </h1>
        <p 
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          An intelligent voice agent that understands your language, emotion, tone — and responds the same way.
        </p>

        {/* CTAs */}
        <div 
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-full shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_35px_rgba(168,85,247,0.5)] transform hover:scale-105 transition-all duration-300 ease-in-out">
            Try the Demo Call
          </button>
          <button className="px-8 py-3 bg-black/20 border border-white/20 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;