import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        
        {/* improved hierarchy, ample whitespace */}
        <div className="about-header text-center">
          <h2 className="section-title text-gradient-primary">Built For Real Results</h2>
          <p className="section-subtitle">
            We aren't just a room with equipment. Right Now Fitness is a serious training ground designed to push your limits, supported by elite trainers and a motivating community.
          </p>
        </div>

        <div className="about-features grid-3">
          
          <div className="feature-card glass-panel text-center">
            <div className="feature-icon-wrapper">
              <Users size={32} className="text-secondary" />
            </div>
            <h3 className="feature-title">Elite Coaching</h3>
            <p className="feature-description">
              Our certified trainers bring decades of experience in strength, hypertrophy, and functional fitness. We don't guess; we program for success.
            </p>
          </div>

          <div className="feature-card glass-panel text-center">
            <div className="feature-icon-wrapper">
              <Target size={32} className="text-secondary" />
            </div>
            <h3 className="feature-title">Goal Oriented</h3>
            <p className="feature-description">
              Whether it's fat loss, muscle building, or athletic performance, our facility is equipped to handle every specific requirement you have.
            </p>
          </div>

          <div className="feature-card glass-panel text-center">
            <div className="feature-icon-wrapper">
              <ShieldCheck size={32} className="text-secondary" />
            </div>
            <h3 className="feature-title">Premium Environment</h3>
            <p className="feature-description">
              Maintained to the highest standards. Experience a clean, fully-stocked, and distraction-free zone where your focus remains entirely on your workout.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
