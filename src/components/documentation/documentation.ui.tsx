import React, { useState } from 'react';
import '../../styles/components/home.ui.css';
import '../../styles/components/documentation.ui.css';

const DocumentationUI: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introducing');
  
  return (
    <div className="main-content" id="for-documentation">
      <div className="docs-container">
        {/* Header */}
        <header className="docs-header">
          <div className="docs-logo">
            <svg width="30" height="18" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L40 24H0L20 0Z" fill="#00FFFF"/>
              <path d="M20 8L30 24H10L20 8Z" fill="#00FFFF"/>
              <path d="M20 16L25 24H15L20 16Z" fill="#00FFFF"/>
            </svg>
          </div>
          <div className="search-bar">
            <span className="search-icon"><img style={{width: 30, height: 30}} src='./src/assets/icons/navigations/search.png' className='search-documentation'/></span>
            <input type="text" placeholder="Search or ask..." />
            <span className="keyboard-shortcut">Ctrl K</span>
          </div>
          <div className="docs-actions">
            <button className="theme-toggle"></button>
            <button className="support-btn">Support</button>
            <button className="user-btn">DOWNLOAD</button>
          </div>
        </header>

        {/* Main content */}
        <div className="docs-content">
          {/* Left sidebar */}
          <div className="docs-sidebar">
            <nav className="sidebar-nav">
              <div className="nav-section">
                <h3>Get Started</h3>
                <ul>
                  <li 
                    className={activeSection === 'introducing' ? 'active' : ''}
                    onClick={() => setActiveSection('introducing')}
                  >
                    <span className="icon"><img src='./src/assets/icons/navigations/intro.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Introduction</span>
                  </li>
                  <li
                    className={activeSection === 'first-session' ? 'active' : ''}
                    onClick={() => setActiveSection('first-session')}
                  >
                    <span className="icon"><img src='./src/assets/icons/navigations/list.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Showcase</span>
                  </li>
                  <li
                    className={activeSection === 'tutorial-library' ? 'active' : ''}
                    onClick={() => setActiveSection('tutorial-library')}
                  >                    
                    <span className="icon"><img src='./src/assets/icons/navigations/preview.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Quick Look</span>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Essential Guidelines</h3>
                <ul>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/start.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Getting Started</span>
                  </li>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/idea.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Comprehensive Guidelines</span>
                  </li>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/rules.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Rules Configuration</span>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Open Source & Proprietary</h3>
                <ul>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/open-source.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Open Source Projects</span>
                  </li>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/proprietary.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Proprietary Projects</span>
                  </li>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/contribute.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Contribution Agency</span>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Admin</h3>
                <ul>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/security.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Security</span>
                  </li>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/bill.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Billing</span>
                  </li>
                  <li>
                    <span className="icon"><img src='./src/assets/icons/navigations/vulnerability.png' style={{width: 26, height: 26}} className=''/></span>
                    <span>Bugs & Issues</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Main documentation area */}
          <div className="docs-main">
            <div className="docs-header-tabs">
              <button className="tab active">Documentation</button>
              <button className="tab">Plug-ins</button>
              <button className="tab">API Reference</button>
              <button className="tab">Release Notes</button>
              <button className="tab">Reports</button>
            </div>

            <div className="docs-article">
              <div className="article-header">
                <h2>Get Started</h2>
                <h1>Introduction</h1>
                <p className="intro-text">
                  
                </p>
              </div>

              <div className="article-content">
                <div className="content-image">
                  <img src="./src/assets/etc/documentation/blackblazent-interface.png" alt="BlackBlazent Interface" />
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="docs-toc">
            <div className="toc-header">On this page</div>
            <nav className="toc-nav">
              <ul>
                <li className="active">Log in / Signed Up? Get Started Now:</li>
                <li>What are the Frameworks we used?</li>
                <li>Types of app's we bult!</li>
                <li>Selective Software Features</li>
                <li>Integration capabilities</li>
                <li>For whom?</li>
                <li>Limitations</li>
                <li>Feedback</li>
                <li>End</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationUI;