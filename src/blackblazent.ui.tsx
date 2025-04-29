import React, { useState } from 'react';
import './styles/components/home.ui.css';


// Import all UI components
import HomeUI from './components/home/home.ui';
import GalleryUI from './components/gallery/gallery.ui';
import ProductsUI from './components/products/products.ui';
import ServicesUI from './components/services/services.ui';
import PrivacyPolicyUI from './components/privacy&policy/privacy.policy.ui';
import CommunityUI from './components/community/community.ui';
import BlogUI from './components/blog/blog.ui';
import DocumentationUI from './components/documentation/documentation.ui';
import AboutUI from './components/about/about.ui';

// Define the available sections
type Section = 'home' | 'gallery' | 'products' | 'services' | 'privacy' | 'community' | 'blog' | 'documentation' | 'about';

const BlackBlazentUI: React.FC = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Function to handle section change
  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  // Function to get the image source based on active state
  const getImageSrc = (section: Section) => {
    // Special case for documentation which has a different active filename
    if (section === 'documentation' && activeSection === 'documentation') {
      return './src/assets/icons/navigations/document.ationactive.png';
    }
    
    return activeSection === section
      ? `./src/assets/icons/navigations/${section}.active.png`
      : `./src/assets/icons/navigations/${section}.png`;
  };

  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeUI />;
      case 'gallery':
        return <GalleryUI />;
      case 'products':
        return <ProductsUI />;
      case 'services':
        return <ServicesUI />;
      case 'privacy':
        return <PrivacyPolicyUI />;
      case 'community':
        return <CommunityUI />;
      case 'blog':
        return <BlogUI />;
      case 'documentation':
        return <DocumentationUI />;
      case 'about':
        return <AboutUI />;
      default:
        return <HomeUI />;
    }
  };

  return (
    <div className="home-container">
      {/* Left sidebar with page indicators */}
      <div className="sidebar left">
        <div className="page-indicator">
          <div 
            className={`tab-section ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => handleSectionChange('home')}
          >
            <img title='Home' style={{ width: '16px', height: '16px' }} src={getImageSrc('home')} alt="Home" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => handleSectionChange('gallery')}
          >
            <img title='App Galleries' style={{ width: '16px', height: '16px' }} src={getImageSrc('gallery')} alt="Gallery" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'products' ? 'active' : ''}`}
            onClick={() => handleSectionChange('products')}
          >
            <img title='Products' style={{ width: '16px', height: '16px' }} src={getImageSrc('products')} alt="Products" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'services' ? 'active' : ''}`}
            onClick={() => handleSectionChange('services')}
          >
            <img title='Services' style={{ width: '16px', height: '16px' }} src={getImageSrc('services')} alt="Services" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'privacy' ? 'active' : ''}`}
            onClick={() => handleSectionChange('privacy')}
          >
            <img title='Privacy & Policy' style={{ width: '16px', height: '16px' }} src={getImageSrc('privacy')} alt="Privacy & Policy" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'community' ? 'active' : ''}`}
            onClick={() => handleSectionChange('community')}
          >
            <img title='Community' style={{ width: '16px', height: '16px' }} src={getImageSrc('community')} alt="Community" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'blog' ? 'active' : ''}`}
            onClick={() => handleSectionChange('blog')}
          >
            <img title='Blogs' style={{ width: '16px', height: '16px' }} src={getImageSrc('blog')} alt="Blog" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'documentation' ? 'active' : ''}`}
            onClick={() => handleSectionChange('documentation')}
          >
            <img title='Documentation' style={{ width: '16px', height: '16px' }} src={getImageSrc('documentation')} alt="Documentation" />
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleSectionChange('about')}
          >
            <img title='About' style={{ width: '16px', height: '16px' }} src={getImageSrc('about')} alt="About" />
          </div>
        </div>
        <div className='page-bot-indicator'>
          <div className='search-address tab-section'><img title='Search...' style={{width: 16, height: 16}} src='https://github.com/BlackBlazent/www.blackblazent.com/blob/main/src/assets/icons/navigations/search.png'/></div>
          <div className='user-account tab-section'><img title='User Account' style={{width: 16, height: 16}} src='https://github.com/BlackBlazent/www.blackblazent.com/blob/main/src/assets/icons/navigations/account.png'/></div>
        </div>
      </div>

      {/* Main content - dynamically rendered based on active section */}
      {renderActiveComponent()}

      {/* Right sidebar with vertical year */}
      <div className="sidebar right">
        <div className="vertical-year">2025</div>
      </div>
    </div>
  );
};

export default BlackBlazentUI;
