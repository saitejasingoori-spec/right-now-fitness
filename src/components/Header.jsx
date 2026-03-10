import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <div className="logo">
          RIGHT NOW <span className="logo-accent">FITNESS</span>
        </div>

        {/* Desktop Navigation - Reduced Clutter */}
        <nav className="desktop-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#facilities" className="nav-link">Facilities</a>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <a href="#contact" className="btn btn-primary d-none-mobile">Join Now</a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-nav glass-panel">
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#facilities" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Facilities</a>
          <a href="#contact" className="btn btn-primary w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>Join Now</a>
        </div>
      )}
    </header>
  );
};

export default Header;
