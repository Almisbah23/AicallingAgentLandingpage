import React from 'react';
import AccentIcon from './icons/AccentIcon';
import EmotionResponseIcon from './icons/EmotionResponseIcon';
import LanguageIcon from './icons/LanguageIcon';
import MemoryIcon from './icons/MemoryIcon';
import ScriptsFlowIcon from './icons/ScriptsFlowIcon';
import ToneIcon from './icons/ToneIcon';

const features = [
  {
    icon: <LanguageIcon className="w-8 h-8 text-fuchsia-400" />,
    title: 'Understands 100+ Languages',
    description:
      'Our AI can converse fluently in multiple languages and dialects, breaking down communication barriers.',
  },
  {
    icon: <EmotionResponseIcon className="w-8 h-8 text-fuchsia-400" />,
    title: 'Human-like Emotional Responses',
    description:
      'Detects emotional cues and responds with appropriate empathy, making conversations feel more natural and engaging.',
  },
  {
    icon: <AccentIcon className="w-8 h-8 text-fuchsia-400" />,
    title: 'Accent & Dialect Recognition',
    description:
      'Accurately understands a wide range of global accents, ensuring clear communication with everyone.',
  },
  {
    icon: <ToneIcon className="w-8 h-8 text-fuchsia-400" />,
    title: 'Analyzes Vocal Tone',
    description:
      "Goes beyond words to understand the underlying tone, whether it's happy, frustrated, or neutral.",
  },
  {
    icon: <MemoryIcon className="w-8 h-8 text-fuchsia-400" />,
    title: 'Context-Aware Memory',
    description:
      'Remembers previous parts of the conversation to provide relevant and coherent responses throughout the call.',
  },
  {
    icon: <ScriptsFlowIcon className="w-8 h-8 text-fuchsia-400" />,
    title: 'Dynamic Scripting',
    description:
      "Can follow complex conversation flows and adapt in real-time based on the user's input and needs.",
  },
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300">
      <div className="p-3 bg-purple-900/40 rounded-full w-max mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            More than just a voice. It's a conversation partner.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            AuraVoice is packed with features that make interactions seamless,
            intelligent, and surprisingly human.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
