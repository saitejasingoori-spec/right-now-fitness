import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustSignals from './components/TrustSignals';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <TrustSignals />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
