import React from 'react';
import { Link } from 'react-router-dom';

function Cookies() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/images/DSA_logo_bez_tła.png"
                alt="DSA Management Logo"
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span
                className="text-2xl font-bold text-red-600"
                style={{ display: 'none' }}
              >
                DSA Management
              </span>
            </Link>
            <div className="flex items-center">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg"
              >
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Polityka Cookies
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Informacje o wykorzystaniu plików cookies na stronie DSA Management
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Spis treści
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('czym-sa-cookies')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  1. Czym są cookies?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('rodzaje-cookies')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  2. Rodzaje cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cele-wykorzystania')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  3. Cele wykorzystania
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('zgoda')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  4. Zgoda na cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('zarzadzanie')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  5. Zarządzanie cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cookies-trzecich')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  6. Cookies stron trzecich
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('zmiany')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  7. Zmiany w polityce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="text-red-600 hover:text-red-700 text-left"
                >
                  8. Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Section 1 */}
            <section id="czym-sa-cookies">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Czym są cookies?
              </h2>
              <p className="text-gray-700 mb-4">
                Cookies (ciasteczka) to małe pliki tekstowe zapisywane na Twoim
                urządzeniu podczas przeglądania stron internetowych. Zawierają
                informacje o Twojej aktywności na stronie i preferencjach.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Przykład:</strong> Pliki cookies pamiętają Twoje
                  ustawienia językowe, dzięki czemu nie musisz ich ustawiać
                  ponownie przy każdej wizycie.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="rodzaje-cookies">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Rodzaje cookies wykorzystywanych na stronie
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Cookies niezbędne
                  </h4>
                  <p className="text-green-800 text-sm mb-2">
                    Umożliwiają podstawowe funkcjonowanie strony.
                  </p>
                  <ul className="text-green-700 text-xs space-y-1">
                    <li>• Bezpieczeństwo sesji</li>
                    <li>• Ustawienia językowe</li>
                    <li>• Preferencje użytkownika</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    Cookies analityczne
                  </h4>
                  <p className="text-yellow-800 text-sm mb-2">
                    Pomagają zrozumieć, jak korzystasz ze strony.
                  </p>
                  <ul className="text-yellow-700 text-xs space-y-1">
                    <li>• Statystyki odwiedzin</li>
                    <li>• Najpopularniejsze sekcje</li>
                    <li>• Czas spędzony na stronie</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    Cookies marketingowe
                  </h4>
                  <p className="text-purple-800 text-sm mb-2">
                    Personalizują treści i reklamy.
                  </p>
                  <ul className="text-purple-700 text-xs space-y-1">
                    <li>• Dopasowane oferty</li>
                    <li>• Retargeting</li>
                    <li>• Social media</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="cele-wykorzystania">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Cele wykorzystania cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Wykorzystujemy pliki cookies w następujących celach:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Zapewnienie funkcjonalności strony
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Pamiętanie ustawień, preferencji i danych sesji.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Analiza ruchu na stronie
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Zbieranie statystyk odwiedzin w celu ulepszania strony.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Personalizacja treści
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Dopasowywanie ofert do Twoich zainteresowań.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Marketing i reklama
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Wyświetlanie trafnych treści reklamowych.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="zgoda">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Zgoda na wykorzystanie cookies
              </h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-3">Pamiętaj:</h4>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li>
                    • <strong>Cookies niezbędne</strong> są używane
                    automatycznie – są konieczne do działania strony.
                  </li>
                  <li>
                    • <strong>Cookies analityczne i marketingowe</strong>{' '}
                    wymagają Twojej zgody.
                  </li>
                  <li>
                    • Zgodę możesz wyrazić, klikając "Akceptuję wszystkie" w
                    banerze cookies.
                  </li>
                  <li>
                    • Zgodę możesz w każdej chwili cofnąć, zmieniając
                    ustawienia przeglądarki.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="zarzadzanie">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Jak zarządzać cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Możesz kontrolować i zarządzać plikami cookies na kilka sposobów:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">
                    Ustawienia przeglądarki
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span>
                        <strong>Chrome:</strong> Ustawienia → Prywatność i
                        bezpieczeństwo → Pliki cookie
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <span>
                        <strong>Firefox:</strong> Ustawienia → Prywatność i
                        bezpieczeństwo
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                      <span>
                        <strong>Safari:</strong> Preferencje → Prywatność
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-700 rounded"></div>
                      <span>
                        <strong>Edge:</strong> Ustawienia → Pliki cookie i
                        uprawnienia witryny
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    Konsekwencje wyłączenia cookies
                  </h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Strona może działać nieprawidłowo.</li>
                    <li>• Utrata personalizacji treści.</li>
                    <li>• Konieczność ponownego logowania.</li>
                    <li>• Resetowanie preferencji.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="cookies-trzecich">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Cookies stron trzecich
              </h2>
              <p className="text-gray-700 mb-4">
                Na naszej stronie mogą być wykorzystywane cookies pochodzące od
                następujących dostawców:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Google Analytics
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Analiza ruchu na stronie.
                  </p>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 text-xs hover:text-red-700"
                  >
                    Polityka prywatności
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Facebook Pixel
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Remarketing i analityka.
                  </p>
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 text-xs hover:text-red-700"
                  >
                    Polityka prywatności
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    LinkedIn Insights
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Analityka B2B.
                  </p>
                  <a
                    href="https://www.linkedin.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 text-xs hover:text-red-700"
                  >
                    Polityka prywatności
                  </a>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="zmiany">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Zmiany w polityce cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Zastrzegamy sobie prawo do aktualizacji niniejszej polityki
                cookies. Wszelkie zmiany będą publikowane na tej stronie z datą
                ostatniej modyfikacji.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Data ostatniej aktualizacji:</strong> 22 września 2025
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="kontakt" className="bg-red-900 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                8. Masz pytania dotyczące cookies?
              </h2>
              <p className="mb-4">
                Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj
                się z nami:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>E-mail:</strong>
                  <br />
                  kontakt@dsamanagement.pl
                </div>
                <div>
                  <strong>Telefon:</strong>
                  <br />
                  +48 22 25 57 036
                </div>
                <div>
                  <strong>Adres:</strong>
                  <br />
                  Gwiaździsta 71
                  <br />
                  01-651 Warszawa
                </div>
              </div>
            </section>
          </div>

          {/* Back to home */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2025 DSA Management. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Cookies;
