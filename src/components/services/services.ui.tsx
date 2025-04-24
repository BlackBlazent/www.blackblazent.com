import React from 'react';
import '../../styles/components/services.ui.css';

const serviceVideos = [
  {
    title: 'CROSS-PLATFORM',
    image: '/assets/images/cross-platform-thumb.jpg'
  },
  {
    title: 'CREATIVE DESIGN',
    image: '/assets/images/creative-design-thumb.jpg'
  },
  {
    title: 'HYBRID TECH',
    image: '/assets/images/hybrid-tech-thumb.jpg'
  },
  {
    title: 'USER EXPERIENCE',
    image: '/assets/images/user-experience-thumb.jpg'
  },
  {
    title: 'GLOBAL REACH',
    image: '/assets/images/global-reach-thumb.jpg'
  }
];

const services = [
  {
    title: 'Cross-Platform Experience',
    category: 'FEATURED',
    description: 'Deliver seamless functionality on desktop, web, and mobile environments.',
    isFeatured: true
  },
  {
    title: 'Creative & Visual Engagement',
    category: 'DESIGN',
    description: 'Prioritize visually rich interfaces that are easy and enjoyable to use.',
    isFeatured: false
  },
  {
    title: 'Practical Functionality',
    category: 'DEVELOPMENT',
    description: 'Build tools that support daily productivity, entertainment, and creativity.',
    isFeatured: false
  },
  {
    title: 'Hybrid Technology Stack',
    category: 'TECHNOLOGY',
    description: 'Use modern hybrid frameworks to ensure faster development and wider reach.',
    isFeatured: false
  },
  {
    title: 'Global Accessibility',
    category: 'SOLUTIONS',
    description: 'Design apps that can be localized and enjoyed by users around the world.',
    isFeatured: false
  }
];

const ServicesUI: React.FC = () => {
  return (
    <div className="main-content" id="for-services">
      {/* Video Thumbnails Slider */}
      <div className="video-thumbnails-container">
        <div className="video-thumbnails-slider">
          {serviceVideos.map((video, index) => (
            <div className="video-thumbnail" key={index}>
              <div className="thumbnail-image">
                <img src={video.image} alt={video.title} />
              </div>
              <div className="thumbnail-title">
                <span>{video.title}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow prev">
          <span>&#8249;</span>
        </button>
        <button className="slider-arrow next">
          <span>&#8250;</span>
        </button>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="services-heading">SERVICES</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className={`service-card ${service.isFeatured ? 'featured' : ''}`} 
              key={index}
            >
              <div className="service-category">{service.category}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-more">
          <a href="#">Explore our services &gt;</a>
        </div>
      </div>

      {/* Bottom info with mission statement */}
      <div className="mission-statement">
        <p>🧭 Our mission is to build purposeful digital tools that blend art, function, and future-ready tech.</p>
      </div>
    </div>
  );
};

export default ServicesUI;