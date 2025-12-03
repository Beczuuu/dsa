import React from 'react';
import Header from '../layout/Header.jsx';
import Footer from '../layout/Footer.jsx';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Services from '../sections/Services.jsx';
import Clients from '../sections/Clients.jsx';
import Why from '../sections/Why.jsx';
import Contact from '../sections/Contact.jsx';
import CookieBar from '../layout/CookieBar.jsx';

const Homepage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Clients />
      <Why />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
      <CookieBar />
    </div>
  );
};

export default Homepage;