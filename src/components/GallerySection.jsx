import React from 'react';

const GallerySection = () => {
  return (
    <section id="facilities" className="gallery-section">
      <div className="container">
        
        <div className="gallery-header text-center">
          <h2 className="section-title">The <span className="text-secondary text-accent">Facility</span></h2>
          <p className="section-subtitle">
            Take a look inside Kukatpally's premier training environment.
          </p>
        </div>

        <div className="gallery-grid">
          
          <div className="gallery-item large glass-panel">
            <img src="/media__1772906510491.jpg" alt="Strength floor" className="gallery-image" />
            <div className="gallery-overlay">
              <span className="gallery-label text-gradient">Strength Level</span>
            </div>
          </div>

          <div className="gallery-item medium glass-panel">
            <img src="/media__1772906510569.jpg" alt="Cardio section" className="gallery-image" />
            <div className="gallery-overlay">
              <span className="gallery-label text-gradient">Cardio Deck</span>
            </div>
          </div>

          <div className="gallery-item glass-panel">
            <img src="/media__1772906510491.jpg" alt="Turf area" className="gallery-image" />
            <div className="gallery-overlay">
              <span className="gallery-label text-gradient">Functional Turf</span>
            </div>
          </div>

          <div className="gallery-item glass-panel">
            <img src="/media__1772906510569.jpg" alt="Steam bath" className="gallery-image" />
            <div className="gallery-overlay">
              <span className="gallery-label text-gradient">Steam & Recovery</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GallerySection;
