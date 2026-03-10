import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        
        {/* Contact Info */}
        <div className="footer-section glass-panel footer-contact">
          <h3 className="footer-title text-gradient-primary">Start Now</h3>
          
          <div className="contact-item">
            <Phone size={24} className="text-secondary" />
            <div className="contact-details">
              <span className="contact-label">Call Us</span>
              <a href="tel:+918121213777" className="contact-value">+91 81212 13777</a>
            </div>
          </div>

          <div className="contact-item">
            <MapPin size={24} className="text-secondary" />
            <div className="contact-details">
              <span className="contact-label">Location</span>
              <address className="contact-value">
                MNR House, Vignanapuri Colony,<br/>
                Mythri Nagar, Kukatpally
              </address>
            </div>
          </div>

          <div className="contact-item">
            <Clock size={24} className="text-secondary" />
            <div className="contact-details">
              <span className="contact-label">Hours</span>
              <span className="contact-value">Mon - Sat: 5:00 AM - 10:00 PM</span>
            </div>
          </div>
          
        </div>

        {/* Map Placeholder */}
        <div className="footer-section glass-panel map-container">
           {/* We will use a stylistic placeholder instead of direct iframe to ensure no mixed-content issues or layout breaks early in dev */}
           <div className="map-placeholder">
             <MapPin size={48} className="text-primary mb-4" />
             <p className="font-bold text-xl">View on Google Maps</p>
             <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary mt-4">Get Directions</a>
           </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <div className="logo-small">RIGHT NOW <span className="logo-accent">FITNESS</span></div>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Right Now Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
