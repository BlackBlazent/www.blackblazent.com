import React from 'react';
import '../../styles/components/home.ui.css';

const HomeUI: React.FC = () => {
  return (
    <div className="main-content" id="for-home">
      {/* Header with hamburger menu and logo */}
      <header className="cp-header">
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="cp-logo">
          <div className="logo-text">BlackBlazent</div>
        </div>
        <div className="header-info">
          <div className="tech-label">1.05.9ITTCTECH</div>
          <div className="date-info">
            <div>AUGUST</div>
            <div>2080.05.09</div>
          </div>
        </div>
      </header>

      {/* Hero section with character and tagline */}
      <section className="hero-section">
        <div className="character-backdrop">
          {/* Character image will be set as background in CSS */}
        </div>
        
        <div className="tagline-container">
          <h1 className="main-tagline">
            <span className="tagline-real">_MIRROR LIED' IT </span>
            <span className="tagline-not">WASN'T</span>
            <span className="tagline-enough"> ENOUGH_</span>
          </h1>
        </div>
        
        <div className="cta-buttons">
          <a href="#" className="cta-button know-more">
            <span>KNOW MORE</span>
          </a>
          <a href="#" className="cta-button preorder">
            <span>EXPLORE NOW</span>
          </a>
        </div>
        
        <div className="trailer-section">
          <div className="trailer-button-container">
            <a href="#" className="trailer-button yellow">
              <div className="play-icon">▶</div>
              <span>WATCH TRAILER</span>
            </a>
          </div>
          <div className="trailer-button-container">
            <a href="#" className="trailer-button white">
              <div className="play-icon">▶</div>
              <span>WATCH TRAILER</span>
            </a>
          </div>
        </div>
        
        <div className="platform-section">
          <div className="platform-label">The New PLATFORM</div>
          <div className="platform-icons">
            <a href="#" className="platform-icon">Ojú-iṣẹ</a>
            <a href="#" className="platform-icon">Alagbeka</a>
            <a href="#" className="platform-icon">Ti a fi sii</a>
          </div>
        </div>
      </section>
      
      {/* Footer with scroll indicator and social icons */}
      <footer className="cp-footer">
        <div className="scroll-indicator">
          <span className="arrow-down">▼</span>
          <span>BlackBlazent</span>
        </div>
        <div className="social-icons">
          <a target="_blank" href="#" className="social-icon instagram"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/instagram.png" alt="Instagram" /></a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61565193375253" className="social-icon facebook"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/facebook.png" alt="Facebook" /></a>
          <a target="_blank" href="https://www.tiktok.com/@blackblazent" className="social-icon tiktok"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/tiktok.png" alt="TikTok" /></a>
          <a target="_blank" href="https://www.youtube.com/@BlackBlazent" className="social-icon youtube"><img style={{ width: '16px', height: '16px' }} src="/src/assets/icons/others/youtube.png" alt="YouTube" /></a>
        </div>
      </footer>
    </div>
  );
};

export default HomeUI;
