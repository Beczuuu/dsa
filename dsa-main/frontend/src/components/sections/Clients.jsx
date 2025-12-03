import React from 'react';
import { content } from '../../data/content';

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.clients.title}</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {content.clients.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {content.clients.segments.map((segment, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span className="text-lg text-gray-700">{segment}</span>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 text-center italic">{content.clients.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;