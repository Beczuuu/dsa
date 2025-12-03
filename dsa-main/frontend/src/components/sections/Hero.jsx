import React from 'react';
import { content } from '../../data/content';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg)' }}
      ></div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 text-center px-6 text-white">
        <h1><img src="/images/dsa_logo_biale.png" alt="DSA Management" className="mx-auto mb-3" /></h1>
        <p className="text-2xl md:text-3xl font-light mb-6 animate-slide-up text-shadow">{content.hero.tagline}</p>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed">{content.hero.subtitle}</p>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed">{content.hero.subtitle2}</p>
        <div className="mt-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {content.hero.cta}
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;