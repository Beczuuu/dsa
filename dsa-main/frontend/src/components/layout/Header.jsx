import React from 'react';
import { content } from '../../data/content';

const Header = ({ scrollToSection }) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/dsaLogo.png" 
              alt="DSA Management Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <span className="text-2xl font-bold text-red-600" style={{display: 'none'}}>DSA Management</span>
          </div>
          <div className="flex items-center">
            <ul className="hidden md:flex space-x-8">
              <li><h1><button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors">{content.nav.home}</button></h1></li>
              <li><h1><button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors">{content.nav.about}</button></h1></li>
              <li><h1><button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 transition-colors">{content.nav.services}</button></h1></li>
              <li><h1><button onClick={() => scrollToSection('clients')} className="text-gray-700 hover:text-red-600 transition-colors">{content.nav.clients}</button></h1></li>
              <li><h1><button onClick={() => scrollToSection('why')} className="text-gray-700 hover:text-red-600 transition-colors">{content.nav.why}</button></h1></li>
              <li><h1><button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors">{content.nav.contact}</button></h1></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;