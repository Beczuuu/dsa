import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../../data/content';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/dsaLogo.png"
                alt="DSA Management logo"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-red-400 leading-tight">
                {content.footer.company}
              </h3>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Outsourcing flotowy i kompleksowa obsługa samochodów firmowych.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {content.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {content.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {content.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informacje prawne</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {content.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {content.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">{content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
