import React from 'react';
import { Star } from 'lucide-react';

const TrustSignals = () => {
  return (
    // Goal: Make proof more prominent, right below hero
    <div className="trust-banner">
      <div className="container trust-container">
        
        <div className="trust-rating glass-panel">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#FFD700" color="#FFD700" />
            ))}
          </div>
          <div className="trust-text">
            <span className="rating-score">4.8 / 5</span>
            <span className="rating-source">Google Rating</span>
            <span className="rating-count">from 370+ local athletes</span>
          </div>
        </div>

        <div className="trust-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Strong</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Transformations</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Community Support</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustSignals;
