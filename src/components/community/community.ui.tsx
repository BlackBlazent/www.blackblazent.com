import React from 'react';
import '../../styles/components/community.ui.css';

const CommunityUI: React.FC = () => {
  return (
    <div className="main-content" id="for-community">
      <div className="community-header">
        <h1 className="community-title">COMMUNITY <span className="community-subtitle">JOIN THE CONVERSATION</span></h1>
      </div>
      
      <div className="community-grid-container">
        {/* FORUMS SECTION */}
        <div className="community-panel">
          <div className="community-panel-header">
            <div className="community-panel-icon forums-icon"></div>
            <h2 className="community-panel-title">FORUMS</h2>
          </div>
          <div className="community-panel-content">
            <p className="community-panel-description">
              Join thousands of BlackBlazent users discussing features, sharing mods, and helping each other in our official forums.
            </p>
            <div className="community-stats-container">
              <div className="community-stat">
                <span className="community-stat-value">12.5K+</span>
                <span className="community-stat-label">MEMBERS</span>
              </div>
              <div className="community-stat">
                <span className="community-stat-value">230</span>
                <span className="community-stat-label">ACTIVE THREADS</span>
              </div>
            </div>
            <a href="#" className="community-action-button">ACCESS FORUMS</a>
          </div>
        </div>
        
        {/* DISCORD SECTION */}
        <div className="community-panel">
          <div className="community-panel-header">
            <div className="community-panel-icon discord-icon"></div>
            <h2 className="community-panel-title">DISCORD</h2>
          </div>
          <div className="community-panel-content">
            <p className="community-panel-description">
              Chat in real-time with other blazer's. Get instant support, join voice channels, and participate in community events.
            </p>
            <div className="community-stats-container">
              <div className="community-stat">
                <span className="community-stat-value">45K+</span>
                <span className="community-stat-label">MEMBERS</span>
              </div>
              <div className="community-stat">
                <span className="community-stat-value">24/7</span>
                <span className="community-stat-label">ACTIVE SUPPORT</span>
              </div>
            </div>
            <a href="#" className="community-action-button">JOIN DISCORD</a>
          </div>
        </div>
        
        {/* TELEGRAM SECTION */}
        <div className="community-panel">
          <div className="community-panel-header">
            <div className="community-panel-icon telegram-icon"></div>
            <h2 className="community-panel-title">TELEGRAM</h2>
          </div>
          <div className="community-panel-content">
            <p className="community-panel-description">
              Stay updated with the latest news and announcements through our official Telegram channel. Direct access to devs.
            </p>
            <div className="community-stats-container">
              <div className="community-stat">
                <span className="community-stat-value">8.3K+</span>
                <span className="community-stat-label">SUBSCRIBERS</span>
              </div>
              <div className="community-stat">
                <span className="community-stat-value">750+</span>
                <span className="community-stat-label">DAILY MESSAGES</span>
              </div>
            </div>
            <a href="#" className="community-action-button">FOLLOW CHANNEL</a>
          </div>
        </div>
        
        {/* WHATSAPP SECTION */}
        <div className="community-panel">
          <div className="community-panel-header">
            <div className="community-panel-icon whatsapp-icon"></div>
            <h2 className="community-panel-title">WHATSAPP</h2>
          </div>
          <div className="community-panel-content">
            <p className="community-panel-description">
              Join our WhatsApp groups for regional discussions and localized support in your language and timezone.
            </p>
            <div className="community-stats-container">
              <div className="community-stat">
                <span className="community-stat-value">15+</span>
                <span className="community-stat-label">REGIONAL GROUPS</span>
              </div>
              <div className="community-stat">
                <span className="community-stat-value">5K+</span>
                <span className="community-stat-label">TOTAL MEMBERS</span>
              </div>
            </div>
            <a href="#" className="community-action-button">FIND GROUPS</a>
          </div>
        </div>
      </div>
      
      <div className="community-footer">
        <div className="community-rules-container">
          <h3 className="community-rules-title">COMMUNITY GUIDELINES</h3>
          <p className="community-rules-text">
            Be respectful. No harassment. Keep it legal. Focus on the topic. 
            Respect privacy. Admins have final say. Violations result in bans.
          </p>
        </div>
        <div className="community-join-box">
          <div className="community-join-text">READY TO JOIN THE CONVERSATION?</div>
          <a href="#" className="community-join-button">CONNECT NOW</a>
        </div>
      </div>
    </div>
  );
};

export default CommunityUI;