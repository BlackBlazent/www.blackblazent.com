import React from 'react';
import '../../styles/components/home.ui.css';
import '../../styles/components/products.ui.css';

const ProductsUI: React.FC = () => {
  // Function to handle navigation to gallery section
  const navigateToGallery = () => {
    // If using React Router, uncomment this
    // navigate('/gallery');
    
    // For now, we'll use a direct approach to switch to gallery section
    const galleryNavItem = document.querySelector('[data-section="gallery"]');
    if (galleryNavItem) {
      (galleryNavItem as HTMLElement).click();
    }
  };

  return (
    <div className="main-content" id="for-products">
      <div className="products-container">
        {/* Header with logo and navigation */}
        <header className="products-header">
          <div className="products-logo">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L40 24H0L20 0Z" fill="#FFFF00"/>
              <path d="M20 8L30 24H10L20 8Z" fill="#FFFF00"/>
              <path d="M20 16L25 24H15L20 16Z" fill="#FFFF00"/>
            </svg>
            <span>BlackBlazent</span>
          </div>
          <nav className="products-nav">
            <button className="nav-item">GITHUB</button>
            <button className="nav-item">MORE VIDEOS</button>
            <button className="nav-item">SHOP</button>
            <button className="nav-item download-btn" onClick={navigateToGallery}>DOWNLOAD</button>
          </nav>
        </header>

        {/* Main hero section */}
        <div className="hero-section">
          <h1 className="hero-title">WELCOME TO THE BLAZER FUTURE</h1>
          <div className="hero-divider"></div>
        </div>

        {/* News module section */}
        <div className="news-module">
          <div className="module-header">
            <span className="module-label">/// AESTHETIC_MODULE_HIGHLIGHT</span>
            <span className="news-update">top update</span>
          </div>

          {/* Featured news item */}
          <div className="featured-news">
            <div className="news-card featured">
              <div className="news-image">
                <img src="./src/assets/etc/products/hotfix.jpg" alt="Pin Hotfix" />
                <div className="news-badge">NEW HOTFIX</div>
              </div>
              <div className="news-title">NEW HOTFIX</div>
            </div>
          </div>

          {/* News grid */}
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <img src="./src/assets/etc/products/blackmusic-news.jpg" alt="BlackMusic" />
                <div className="news-badge">BLACKMUSIC</div>
              </div>
              <div className="news-title">BLACKMUSIC v1.1 - AUDIO PLAYER COMPONENTS</div>
            </div>

            <div className="news-card">
              <div className="news-image">
                <img src="./src/assets/etc/products/blackvideo-news.jpg" alt="BlackVideo" />
                <div className="news-badge">PATCH 1.62</div>
              </div>
              <div className="news-title">BLACKVIDEO 1.62 - ADVANCED PLAYBACK CAPABILITIES</div>
            </div>

            <div className="news-card">
              <div className="news-image">
                <img src="./src/assets/etc/products/blackmiscellen-news.jpg" alt="BlackMiscellen" />
                <div className="news-badge">UPDATE</div>
              </div>
              <div className="news-title">BLACKMISCELLEN - NEW FEATURES</div>
            </div>

            <div className="news-card">
              <div className="news-image">
                <img src="./src/assets/etc/products/blackgallery-news.jpg" alt="BlackGallery" />
                <div className="news-badge">VERIFIED</div>
              </div>
              <div className="news-title">BLACKGALLERY - VERIFIED COMPATIBILITY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsUI;