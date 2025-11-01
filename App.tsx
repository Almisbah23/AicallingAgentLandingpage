import React from 'react';
import Demo from './components/Demo';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import UseCases from './components/UseCases';

function App() {
  return (
    <div className="bg-[#0c0a18] text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Demo />
        <Features />
        <UseCases />
        <Pricing />
      </main>
    </div>
  );
}

export default App;