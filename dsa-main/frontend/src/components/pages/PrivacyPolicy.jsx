import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
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
              <span className="text-2xl font-bold text-red-600" style={{display: 'none'}}>DSA Management</span>
            </Link>
            <div className="flex items-center">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg">
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </nav>
      </header>

      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Polityka Prywatności</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              DSA Management dba o prywatność i bezpieczeństwo danych osobowych
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Spis treści</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <li><button onClick={() => scrollToSection('dane-administratora')} className="text-red-600 hover:text-red-700 text-left">1. Dane administratora</button></li>
              <li><button onClick={() => scrollToSection('podstawa-prawna')} className="text-red-600 hover:text-red-700 text-left">2. Podstawa prawna</button></li>
              <li><button onClick={() => scrollToSection('rodzaje-danych')} className="text-red-600 hover:text-red-700 text-left">3. Rodzaje zbieranych danych</button></li>
              <li><button onClick={() => scrollToSection('cele-przetwarzania')} className="text-red-600 hover:text-red-700 text-left">4. Cele przetwarzania</button></li>
              <li><button onClick={() => scrollToSection('udostepnianie')} className="text-red-600 hover:text-red-700 text-left">5. Udostępnianie danych</button></li>
              <li><button onClick={() => scrollToSection('prawa-uzytkownika')} className="text-red-600 hover:text-red-700 text-left">6. Prawa użytkownika</button></li>
              <li><button onClick={() => scrollToSection('okres-przechowywania')} className="text-red-600 hover:text-red-700 text-left">7. Okres przechowywania</button></li>
              <li><button onClick={() => scrollToSection('zmiany')} className="text-red-600 hover:text-red-700 text-left">8. Zmiany w polityce</button></li>
            </ul>
          </div>

          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Section 1 */}
            <section id="dane-administratora">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Dane administratora</h2>
              <p className="text-gray-700 mb-4">
                Administratorem Twoich danych osobowych jest <strong>DSA Management</strong> z siedzibą w Warszawie.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Adres:</strong> ul. Przykładowa 123, 00-001 Warszawa<br/>
                  <strong>E-mail:</strong> kontakt@dsamanagement.pl<br/>
                  <strong>Telefon:</strong> +48 123 456 789
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="podstawa-prawna">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Podstawa prawna przetwarzania</h2>
              <p className="text-gray-700 mb-4">
                Przetwarzanie danych osobowych odbywa się na podstawie:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Art. 6 ust. 1 lit. a RODO - zgoda osoby, której dane dotyczą</li>
                <li>Art. 6 ust. 1 lit. b RODO - wykonanie umowy lub działania podejmowane na żądanie osoby</li>
                <li>Art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes administratora</li>
                <li>Art. 6 ust. 1 lit. c RODO - wypełnienie obowiązku prawnego</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="rodzaje-danych">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Rodzaje zbieranych danych</h2>
              <p className="text-gray-700 mb-4">Zbieramy następujące kategorie danych osobowych:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Dane kontaktowe</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Imię i nazwisko</li>
                    <li>• Adres e-mail</li>
                    <li>• Numer telefonu</li>
                    <li>• Adres firmy</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Dane techniczne</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Adres IP</li>
                    <li>• Informacje o przeglądarce</li>
                    <li>• Dane o urządzeniu</li>
                    <li>• Pliki cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="cele-przetwarzania">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cele przetwarzania danych</h2>
              <p className="text-gray-700 mb-4">Twoje dane osobowe przetwarzamy w celu:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Świadczenia usług fleet management</li>
                <li>Kontaktu i komunikacji z klientami</li>
                <li>Przygotowania ofert i propozycji współpracy</li>
                <li>Realizacji zawartych umów</li>
                <li>Prowadzenia księgowości i dokumentacji</li>
                <li>Marketingu bezpośredniego</li>
                <li>Wypełnienia obowiązków prawnych</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="udostepnianie">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Udostępnianie danych osobowych</h2>
              <p className="text-gray-700 mb-4">
                Twoje dane osobowe mogą być udostępniane wyłącznie:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Zaufanym partnerom biznesowym w celu realizacji usług</li>
                <li>Organom państwowym, jeśli wynika to z przepisów prawa</li>
                <li>Dostawcom usług IT i księgowych</li>
                <li>Firmom ubezpieczeniowym w związku z obsługą szkód</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Nie sprzedajemy ani nie udostępniamy danych osobowych w celach marketingowych podmiotom trzecim.</strong>
              </p>
            </section>

            {/* Section 6 */}
            <section id="prawa-uzytkownika">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Twoje prawa</h2>
              <p className="text-gray-700 mb-4">Masz prawo do:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Podstawowe prawa</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Dostępu do swoich danych</li>
                    <li>• Sprostowania danych</li>
                    <li>• Usunięcia danych</li>
                    <li>• Ograniczenia przetwarzania</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Dodatkowe prawa</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Przenoszenia danych</li>
                    <li>• Sprzeciwu wobec przetwarzania</li>
                    <li>• Cofnięcia zgody</li>
                    <li>• Skargi do organu nadzorczego</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="okres-przechowywania">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Okres przechowywania danych</h2>
              <p className="text-gray-700 mb-4">
                Dane osobowe przechowujemy przez okres:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Trwania umowy i 5 lat po jej zakończeniu</li>
                <li>Do momentu cofnięcia zgody (w przypadku zgody)</li>
                <li>Wymaganego przepisami prawa (np. przepisami podatkowymi)</li>
                <li>Przedawnienia roszczeń</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="zmiany">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Zmiany w polityce prywatności</h2>
              <p className="text-gray-700 mb-4">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. 
                O wszelkich zmianach poinformujemy poprzez:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Publikację zaktualizowanej polityki na stronie internetowej</li>
                <li>Powiadomienie e-mailowe (jeśli zmiany są istotne)</li>
                <li>Komunikat na stronie głównej</li>
              </ul>
            </section>

            {/* Contact Section */}
            <section className="bg-red-900 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Masz pytania?</h2>
              <p className="mb-4">
                W przypadku pytań dotyczących przetwarzania danych osobowych, skontaktuj się z nami:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>E-mail:</strong><br/>
                  kontakt@dsamanagement.pl
                </div>
                <div>
                  <strong>Telefon:</strong><br/>
                  +48 22 25 57 036
                </div>
                <div>
                  <strong>Adres:</strong><br/>
                  Gwiaździsta 71
                  <br/>
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
          <p className="text-gray-500">© 2025 DSA Management. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;