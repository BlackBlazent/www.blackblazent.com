import React from 'react';
import '../../styles/components/privacy.policy.ui.css';

const policySections = [
  {
    id: 'S1',
    title: 'Introduction',
    content: `Welcome to BlackBlazent. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`
  },
  {
    id: 'S2',
    title: 'Data Collection',
    content: `We may collect personal identification information (such as name, email address, and contact details) and non-personal information (browser type, device, usage statistics) when you interact with our services. All data is collected lawfully and transparently.`
  },
  {
    id: 'S3',
    title: 'Use of Data',
    content: `Your information is used to improve our services, personalize user experience, communicate updates, and comply with legal obligations. We do not sell or rent your personal data to third parties.`
  },
  {
    id: 'S4',
    title: 'User Rights',
    content: `You have the right to access, correct, or delete your personal information. You may also object to certain processing or request data portability. To exercise your rights, please contact us using the details below.`
  },
  {
    id: 'S5',
    title: 'Contact Us',
    content: `If you have questions or concerns about our Privacy Policy or your data, please contact us at privacy@blackblazent.com. We are committed to resolving any issues promptly and transparently.`
  }
];

const PrivacyPolicyUI: React.FC = () => {
  return (
    <div className="main-content" id="for-privacy">
      <div className="privacy-header">
        <h1 className="privacy-title">BLAZER's! <span className="privacy-subtitle">PRIVACY & POLICY</span></h1>
      </div>
      
      <div className="privacy-panel-row">
        <div className="privacy-left-list">
          <div className="privacy-user-meta">
            <div className="privacy-meta-item">
              <div className="privacy-meta-icon"></div>
              <div className="privacy-meta-text">
                <div className="privacy-meta-label">YOUR ID FOR MANAGEMENT ACCESS</div>
                <div className="privacy-meta-value">LABEL</div>
              </div>
            </div>
            
            <div className="privacy-meta-item">
              <div className="privacy-meta-icon"></div>
              <div className="privacy-meta-text">
                <div className="privacy-meta-label">ACCESS PASSWORD FOR YOUR ACCOUNT</div>
                <div className="privacy-meta-value">AUTHENTICATION</div>
              </div>
            </div>
            
            <div className="privacy-meta-item">
              <div className="privacy-meta-icon"></div>
              <div className="privacy-meta-text">
                <div className="privacy-meta-label">DIRECT BLACKBLAZENT EMAIL CONTACT</div>
                <div className="privacy-meta-value">HELP CONTACT INFO</div>
              </div>
            </div>
          </div>
          
          <div className="privacy-button-group">
            <button className="privacy-button">USER 77342</button>
            <button className="privacy-button">MAILBOX</button>
            <div className="privacy-lang-buttons">
              <button className="privacy-lang active">EN</button>
              <button className="privacy-lang">CN</button>
              <button className="privacy-lang">ES</button>
              <button className="privacy-lang">DE</button>
            </div>
          </div>
          
          <div className="privacy-list-title">
            <div className="privacy-list-tag">IMPORTANT SECTION INDEX</div>
          </div>
          
          <div className="privacy-list-items">
            {policySections.map((section, index) => (
              <div key={section.id} className="privacy-list-item">
                <div className="privacy-list-item-id">{index + 1}</div>
                <div className="privacy-list-item-title">{section.title.toUpperCase()}</div>
              </div>
            ))}
            <div className="privacy-list-item special">
              <div className="privacy-list-item-id">★</div>
              <div className="privacy-list-item-title">SPECIAL OFFERS TO YOU</div>
            </div>
          </div>
        </div>
        
        <div className="privacy-center-detail">
          <div className="privacy-detail-header">
            <div className="privacy-detail-tag">POLICY SECTION 2 OF 5</div>
          </div>
          <div className="privacy-detail-body">
            <p>{policySections[1].content}</p>
          </div>
        </div>
        
        <div className="privacy-right-chips">
          <div className="privacy-chip-container">
            <div className="privacy-chip-yellow">NOTICES</div>
          </div>
          <div className="privacy-chip-container">
            <div className="privacy-chip">INBOX</div>
          </div>
          <div className="privacy-chip-container">
            <div className="privacy-chip">SETTINGS</div>
          </div>
          <div className="privacy-chip-container">
            <div className="privacy-chip">CONTACT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyUI;