import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const rejectAllCookies = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const saveCustomSettings = (settings) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...settings,
      necessary: true, // Always required
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 border-t-4 border-red-600">
        <div className="container mx-auto max-w-6xl">
          {!showSettings ? (
            /* Main Cookie Notice */
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">🍪 Ta strona używa plików cookies</h3>
                <p className="text-gray-300 text-sm">
                  Używamy plików cookies, aby zapewnić najlepsze doświadczenie korzystania z naszej strony. 
                  Niektóre są niezbędne do działania strony, inne pomagają nam ją ulepszać i dostosować do Twoich potrzeb.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                >
                  Ustawienia
                </button>
                <button
                  onClick={rejectAllCookies}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors text-sm font-medium"
                >
                  Odrzuć
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Akceptuj wszystkie
                </button>
              </div>
            </div>
          ) : (
            /* Cookie Settings Panel */
            <CookieSettings 
              onSave={saveCustomSettings}
              onBack={() => setShowSettings(false)}
            />
          )}
        </div>
      </div>

      {/* Backdrop */}
      {showSettings && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowSettings(false)}
        />
      )}
    </>
  );
};

const CookieSettings = ({ onSave, onBack }) => {
  const [settings, setSettings] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  const handleToggle = (type) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Ustawienia cookies</h3>
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Necessary Cookies */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-green-400">Niezbędne</h4>
            <div className="w-12 h-6 bg-green-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            Wymagane do podstawowego działania strony. Nie można ich wyłączyć.
          </p>
          <div className="mt-2 text-xs text-gray-400">
            • Sesje użytkownika<br/>
            • Bezpieczeństwo<br/>
            • Podstawowa funkcjonalność
          </div>
        </div>

        {/* Analytics Cookies */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-blue-400">Analityczne</h4>
            <button
              onClick={() => handleToggle('analytics')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.analytics ? 'bg-blue-600' : 'bg-gray-600'
              } relative`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                settings.analytics ? 'translate-x-6' : 'translate-x-0.5'
              }`}></div>
            </button>
          </div>
          <p className="text-sm text-gray-300">
            Pomagają zrozumieć, jak korzystasz ze strony i ją ulepszać.
          </p>
          <div className="mt-2 text-xs text-gray-400">
            • Google Analytics<br/>
            • Statystyki odwiedzin<br/>
            • Analiza zachowań
          </div>
        </div>

        {/* Marketing Cookies */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-purple-400">Marketingowe</h4>
            <button
              onClick={() => handleToggle('marketing')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.marketing ? 'bg-purple-600' : 'bg-gray-600'
              } relative`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                settings.marketing ? 'translate-x-6' : 'translate-x-0.5'
              }`}></div>
            </button>
          </div>
          <p className="text-sm text-gray-300">
            Personalizują treści reklamowe i śledzą skuteczność kampanii.
          </p>
          <div className="mt-2 text-xs text-gray-400">
            • Facebook Pixel<br/>
            • Google Ads<br/>
            • Remarketing
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-700">
        <Link 
          to="/cookies"
          className="text-sm text-blue-400 hover:text-blue-300 underline"
        >
          Zobacz pełną politykę cookies
        </Link>
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Wstecz
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Zapisz ustawienia
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBar;