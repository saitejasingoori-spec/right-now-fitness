import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      {/* Background Image with Dark Overlay to strengthen the hero */}
      <div className="hero-background">
        <img 
          src="/media__1772906510491.jpg" 
          alt="Right Now Fitness intense training" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        {/* Improved Hierarchy for headline */}
        <h1 className="hero-headline text-gradient">
          AWAKEN YOUR <br />
          <span className="text-secondary text-accent">TRUE STRENGTH</span>
        </h1>
        
        <p className="hero-subheadline">
          Kukatpally's premier facility for serious transformations. 
          Expert coaching, top-tier equipment, and a community built on results.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary btn-large">
            Start Your Transformation
          </a>
          <a href="#services" className="btn btn-secondary btn-large">
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
