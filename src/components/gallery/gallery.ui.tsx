import React, { useEffect } from 'react';
import '../../styles/components/home.ui.css';
import '../../styles/components/gallery.ui.css';
import { initGalleryFunctionality } from '../../../App/forbidden/dev/functions/gallery.script.template';

const GalleryUI: React.FC = () => {
  // Initialize gallery functionality when component mounts
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      initGalleryFunctionality();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="main-content" id="for-gallery">
      <div className="product-showcase">
        {/* Top Navigation */}
        <div className="top-nav">
          <div className="logo">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L40 24H0L20 0Z" fill="#FFFFFF"/>
              <path d="M20 8L30 24H10L20 8Z" fill="#FFFFFF"/>
              <path d="M20 16L25 24H15L20 16Z" fill="#FFFFFF"/>
            </svg>
          </div>
          <div className="nav-links">
            <span>RELEASE NOTE</span>
            <span>QUICK USER GUIDE</span>
            <span>CONTRIBUTE</span>
          </div>
        </div>

        <div className="product-container">
          {/* Left Side */}
          <div className="product-left">
            {/* Product Number and Title */}
            <div className="product-header">
              <div className="product-number">01</div>
              <div className="product-title">
                <div className="collection-info">FIRST COLLECTION // 9.01</div>
                <h1 className="product-name">BlackMusic v1.1.01.001.0001</h1>
              </div>
            </div>

            {/* Product Description */}
            <div className="product-description">
              <p>Introducing the "NeoVisor X1" - the ultimate futuristic mask inspired by cyberpunk aesthetics. Designed for the tech-savvy individual seeking a blend of style and functionality, this cutting-edge accessory merges fashion with advanced features to provide a unique and immersive experience.</p>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <h3>Product Details</h3>
              <ul>
                <li>Nano-Fiber Mesh</li>
                <li>Smart Fabric</li>
                <li>Adjustable Strap System</li>
                <li>Reflective Nanocoating</li>
                <li>Reusable Materials</li>
              </ul>
              <div className="sold-out-tag">DOWNLOAD</div>
            </div>

            {/* Vertical Navigation */}
            <div className="vertical-nav">
              <div className="progress-line">
                <div className="progress-indicator"></div>
              </div>
              <div className="vertical-labels">
                <div className="label">QU</div>
                <div className="label">ZO</div>
                <div className="label">KU</div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="product-right">
            <div className="product-image">
              <div className="product-backdrop">Music Player</div>
            </div>
            <div className="product-model-of-app">
              <img className="product-mirror" src="./src/assets/blobs/aside-stagle.png" alt="" />
            </div>
            <div className="product-model-app">
            <img className="product-model-app" src="./src/assets/etc/gallery/blackmusic-model.png" alt="" />
            </div>
          </div>
        </div>

        {/* Color Options */}
        <div className="color-variants">
          <div className="color yellow active"><img style={{width: 35, height: 35}} className="Image-App-Icon" src="./src/assets/icons/apps/bmusic.png"/></div>
          <div className="color black"><img style={{width: 35, height: 35}} className="Image-App-Icon" src="./src/assets/icons/others/uknown.png"/></div>
          <div className="color teal"><img style={{width: 35, height: 35}} className="Image-App-Icon" src="./src/assets/icons/others/uknown.png"/></div>
          <div className="color white"><img style={{width: 35, height: 35}} className="Image-App-Icon" src="./src/assets/icons/others/uknown.png"/></div>
        </div>

        {/* Bottom Info */}
        <div className="bottom-info">
          <div className="info-item">Codename: //NeoVisor</div>
          <div className="info-item">Exclusive Mesh Components Made from Eco-Sustainable Materials</div>
          <div className="info-item">Tech-Wear // Futuristic</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryUI;