import React from 'react';
import { content, companyStats } from '../../data/content';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.about.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.about.description}
          </p>
        </div>

        
        <div className="mx-auto max-w-6xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {companyStats.map((stat, index) => (
      <div
        key={index}
        className="
          flex flex-col items-center justify-center
          bg-white rounded-2xl px-8 py-10
          text-center shadow-md
          transition-transform transition-shadow duration-300
          hover:-translate-y-1 hover:shadow-2xl
        "
      >
        <div className="text-2xl md:text-3xl font-extrabold text-red-500 leading-tight mb-3">
          {stat.label}
        </div>
        
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
