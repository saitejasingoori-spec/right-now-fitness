import React from 'react';
import { Dumbbell, Flame, Activity, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell size={40} className="text-primary" />,
    title: "Strength & Muscle",
    description: "Premium free weights, racks, and machines for serious lifters wanting to build mass and power.",
    img: "/strength_muscle.jpg" // Updated to user provided image
  },
  {
    icon: <Flame size={40} className="text-secondary" />,
    title: "Fat Loss & Rehab",
    description: "Specialized programming designed to permanently transform your body composition and fix imbalances.",
    img: "/fat_loss_rehab.jpg" // Updated to user provided image
  },
  {
    icon: <Activity size={40} className="text-primary" />,
    title: "Functional Training",
    description: "Dedicated turf area with sleds, battle ropes, and kettlebells for dynamic athletic performance.",
    img: "/functional_training.jpg" 
  },
  {
    icon: <HeartPulse size={40} className="text-secondary" />,
    title: "Cardio & Steam",
    description: "State-of-the-art cardio deck for endurance, followed by recovery in our premium steam bath.",
    img: "/cardio_steam.jpg" 
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="services-header text-center">
          <h2 className="section-title">Our <span className="text-gradient">Programs</span></h2>
          <p className="section-subtitle">
            Expert-led programs tailored for the results you demand.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-panel">
              <div className="service-image-wrapper">
                <img src={service.img} alt={service.title} className="service-image" />
                <div className="service-overlay">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
