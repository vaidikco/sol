"use client"
import React from 'react';

const TechSlider = () => {
  const techStack = [
    { name: 'Flask', icon: '🔥' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vite', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Flask', icon: '🔥' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vite', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
  ];

  return (
    <div className="w-full bg-[#0a0a0a] py-20 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-white text-5xl font-serif mb-6">
          Already trusted by 100+ individuals, teams, and companies.
        </h2>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
        
        {/* Sliding container */}
        <div className="flex animate-slide">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[280px] px-8 py-4 mx-3 bg-transparent border border-[#2a2a2a] hover:border-[#4a4a4a] transition-all duration-300 rounded-lg"
            >
              <span className="text-2xl mr-4 opacity-70">{tech.icon}</span>
              <span className="text-white text-xl font-light tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechSlider;