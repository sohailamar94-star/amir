
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#10101A] via-transparent to-[#10101A] z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')", filter: 'blur(3px)' }}>
      </div>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="relative z-20 text-center text-white p-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            The Future of Beauty
          </span>
          <span className="block">Is In Your Hands</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-8">
          Discover revolutionary devices and AI-powered solutions that redefine your skincare routine.
        </p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
};
