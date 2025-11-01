import React from 'react';
import LogoIcon from './icons/AgentIcon';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon className="w-8 h-8 text-white" />
          <span className="text-xl font-bold text-white">AuraVoice</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Product</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Company</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
           <button className="hidden sm:block px-5 py-2 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300">
            Login
          </button>
          <button className="px-5 py-2 bg-white text-black font-bold rounded-full transform hover:scale-105 transition-transform duration-300">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
