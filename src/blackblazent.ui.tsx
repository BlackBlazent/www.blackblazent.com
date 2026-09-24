import React, { useState, useEffect } from 'react';
import './styles/components/home.ui.css';
import '../App/forbidden/dev/global/mobile.responsive.script'

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

// Define the route mapping
const ROUTES: Record<string, Section> = {
  '': 'home',
  '#/': 'home',
  '#/home': 'home',
  '#/gallery': 'gallery',
  '#/products': 'products',
  '#/services': 'services',
  '#/privacy': 'privacy',
  '#/community': 'community',
  '#/blog': 'blog',
  '#/documentation': 'documentation',
  '#/about': 'about'
};

// Define page titles
const PAGE_TITLES: Record<Section, string> = {
  'home': 'BlackBlazent - Home',
  'gallery': 'BlackBlazent - App Galleries',
  'products': 'BlackBlazent - Products',
  'services': 'BlackBlazent - Services',
  'privacy': 'BlackBlazent - Privacy & Policy',
  'community': 'BlackBlazent - Community',
  'blog': 'BlackBlazent - Blogs',
  'documentation': 'BlackBlazent - Documentation',
  'about': 'BlackBlazent - About'
};

const BlackBlazentUI: React.FC = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState<Section>('home');
  
  // Initialize the active section based on the URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const section = ROUTES[hash] || 'home';
      setActiveSection(section);
      document.title = PAGE_TITLES[section];
    };
    
    // Set initial section based on current hash
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Function to handle section change
  const handleSectionChange = (section: Section) => {
    window.location.hash = `#/${section}`;
    // No need to call setActiveSection here as the hashchange event will trigger it
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
            <a href="#/home" className="nav-link">
              <img title='Home' style={{ width: '16px', height: '16px' }} src={getImageSrc('home')} alt="Home" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'gallery' ? 'active' : ''}`}
            onClick={() => handleSectionChange('gallery')}
          >
            <a href="#/gallery" className="nav-link">
              <img title='App Galleries' style={{ width: '16px', height: '16px' }} src={getImageSrc('gallery')} alt="Gallery" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'products' ? 'active' : ''}`}
            onClick={() => handleSectionChange('products')}
          >
            <a href="#/products" className="nav-link">
              <img title='Products' style={{ width: '16px', height: '16px' }} src={getImageSrc('products')} alt="Products" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'services' ? 'active' : ''}`}
            onClick={() => handleSectionChange('services')}
          >
            <a href="#/services" className="nav-link">
              <img title='Services' style={{ width: '16px', height: '16px' }} src={getImageSrc('services')} alt="Services" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'privacy' ? 'active' : ''}`}
            onClick={() => handleSectionChange('privacy')}
          >
            <a href="#/privacy" className="nav-link">
              <img title='Privacy & Policy' style={{ width: '16px', height: '16px' }} src={getImageSrc('privacy')} alt="Privacy & Policy" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'community' ? 'active' : ''}`}
            onClick={() => handleSectionChange('community')}
          >
            <a href="#/community" className="nav-link">
              <img title='Community' style={{ width: '16px', height: '16px' }} src={getImageSrc('community')} alt="Community" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'blog' ? 'active' : ''}`}
            onClick={() => handleSectionChange('blog')}
          >
            <a href="#/blog" className="nav-link">
              <img title='Blogs' style={{ width: '16px', height: '16px' }} src={getImageSrc('blog')} alt="Blog" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'documentation' ? 'active' : ''}`}
            onClick={() => handleSectionChange('documentation')}
          >
            <a href="#/documentation" className="nav-link">
              <img title='Documentation' style={{ width: '16px', height: '16px' }} src={getImageSrc('documentation')} alt="Documentation" />
            </a>
          </div>
          <div className="indicator-line"></div>
          
          <div 
            className={`tab-section ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleSectionChange('about')}
          >
            <a href="#/about" className="nav-link">
              <img title='About' style={{ width: '16px', height: '16px' }} src={getImageSrc('about')} alt="About" />
            </a>
          </div>
        </div>
        <div className='page-bot-indicator'>
          <div className='search-address tab-section'>
            <img title='Search...' style={{width: 16, height: 16}} src='./src/assets/icons/navigations/search.png'/>
          </div>
          <div className='user-account tab-section'>
            <img title='User Account' style={{width: 16, height: 16}} src='./src/assets/icons/navigations/account.png'/>
          </div>
        </div>
      </div>

      {/* Main content - dynamically rendered based on active section */}
      <main className="page-content">
        {renderActiveComponent()}
      </main>

      {/* Right sidebar with vertical year */}
      <div className="sidebar right">
        <div className="vertical-year">2025</div>
      </div>
    </div>
  );
};

export default BlackBlazentUI;
