import React, { useEffect, useRef, useState } from 'react';
import CustomerSupportIcon from './icons/use-cases/CustomerSupportIcon';
import AppointmentIcon from './icons/use-cases/AppointmentIcon';
import SalesIcon from './icons/use-cases/SalesIcon';
import FeedbackIcon from './icons/use-cases/FeedbackIcon';
import DeliveryIcon from './icons/use-cases/DeliveryIcon';
import RenewalIcon from './icons/use-cases/RenewalIcon';

const useCases = [
  {
    icon: <CustomerSupportIcon className="w-7 h-7 text-purple-400" />,
    title: 'Customer Support Calls',
    description: 'Automate and enhance your customer service 24/7.',
  },
  {
    icon: <AppointmentIcon className="w-7 h-7 text-purple-400" />,
    title: 'Appointment & Reminders',
    description: 'Effortlessly schedule and confirm appointments.',
  },
  {
    icon: <SalesIcon className="w-7 h-7 text-purple-400" />,
    title: 'Sales & Lead Conversion',
    description: 'Qualify leads and drive sales with intelligent outreach.',
  },
  {
    icon: <FeedbackIcon className="w-7 h-7 text-purple-400" />,
    title: 'Feedback Collection',
    description: 'Gather valuable customer insights through automated surveys.',
  },
  {
    icon: <DeliveryIcon className="w-7 h-7 text-purple-400" />,
    title: 'Order Status & Delivery',
    description: 'Keep customers informed with real-time updates.',
  },
  {
    icon: <RenewalIcon className="w-7 h-7 text-purple-400" />,
    title: 'Service Renewal Follow Up',
    description: 'Proactively engage customers for renewals and retention.',
  },
];

const UseCaseCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  inView: boolean;
  delay: string;
}> = ({ icon, title, description, inView, delay }) => {
  return (
    <div
      className={`relative group p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg overflow-hidden transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       <div className="absolute -top-10 -right-10 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>


      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
       {/* Neon outline on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500 transition-all duration-300 pointer-events-none"></div>

    </div>
  );
};

const UseCases: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setInView(true);
            }
        },
        {
            threshold: 0.2,
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


  return (
    <section ref={sectionRef} id="use-cases" className="py-20 sm:py-32 bg-gradient-to-b from-[#0c0a18] to-[#040209]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Where can this AI Caller be used?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            From customer support to sales calls — this AI fits anywhere.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              inView={inView}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
