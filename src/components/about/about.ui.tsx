import React, { useState } from 'react';
import '../../styles/components/about.ui.css';

const AboutUI: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cyberware');
  const [activeSystem, setActiveSystem] = useState('neural');

  // Body systems data
  const bodySystems = {
    left: [
      {
        id: 'neural',
        title: 'Monolithic Architecture',
        availableItems: '3/5 Confirmation',
        slots: [true, true, true, false, false]
      },
      {
        id: 'optical',
        title: 'Layered Architecture (N-tier)',
        availableItems: '2/3 Confirmation',
        slots: [true, true, false]
      },
      {
        id: 'circulatory',
        title: 'Microservices Architecture',
        availableItems: '1/4 Confirmation',
        slots: [true, false, false, false]
      },
      {
        id: 'immune',
        title: 'Serverless Architecture',
        availableItems: '0/3 Confirmation',
        slots: [false, false, false]
      }
    ],
    right: [
      {
        id: 'skeletal',
        title: 'Event-Driven Architecture',
        availableItems: '2/6 Confirmation',
        slots: [true, true, false, false, false, false]
      },
      {
        id: 'muscular',
        title: 'Plugin-Based Architecture',
        availableItems: '3/5 Confirmation',
        slots: [true, true, true, false, false]
      },
      {
        id: 'respiratory',
        title: 'Service-Oriented Architecture (SOA)',
        availableItems: '1/3 Confirmation',
        slots: [true, false, false]
      },
      {
        id: 'integumentary',
        title: 'Peer-to-Peer (P2P) Architecture',
        availableItems: '2/4 Confirmation',
        slots: [true, true, false, false]
      }
    ]
  };

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: '[ Profile Placeholder ]',
      role: 'Uploading… Please Stand By',
      avatar: 'AV',
      bio: 'Currently syncing role data from core servers. Expertise and credentials are temporarily unavailable. Awaiting team synchronization.',
      skills: [
        { name: 'Pending', level: 95 },
        { name: 'Pending', level: 90 },
        { name: 'Pending', level: 85 },
        { name: 'Pending', level: 80 }
      ],
      social: {
        network: '@placeholder',
        followers: 'N/A',
        reputation: 'Initializing…'
      }
    },
    {
      id: 2,
      name: '[ Profile Placeholder ]',
      role: 'Uploading… Please Stand By',
      avatar: 'RB',
      bio: 'Currently syncing role data from core servers. Expertise and credentials are temporarily unavailable. Awaiting team synchronization.',
      skills: [
        { name: 'Pending', level: 98 },
        { name: 'Pending', level: 92 },
        { name: 'Pending', level: 88 },
        { name: 'Pending', level: 94 }
      ],
      social: {
        network: '@placeholder',
        followers: 'N/A',
        reputation: 'Initializing…'
      }
    },
    {
      id: 3,
      name: '[ Profile Placeholder ]',
      role: 'Uploading… Please Stand By',
      avatar: 'NC',
      bio: 'Currently syncing role data from core servers. Expertise and credentials are temporarily unavailable. Awaiting team synchronization.',
      skills: [
        { name: 'Pending', level: 96 },
        { name: 'Pending', level: 94 },
        { name: 'Pending', level: 89 },
        { name: 'Pending', level: 91 }
      ],
      social: {
        network: '@placeholder',
        followers: 'N/A',
        reputation: 'Initializing…'
      }
    },
    {
      id: 4,
      name: '[ Profile Placeholder ]',
      role: 'Uploading… Please Stand By',
      avatar: 'DR',
      bio: 'Currently syncing role data from core servers. Expertise and credentials are temporarily unavailable. Awaiting team synchronization.',
      skills: [
        { name: 'Pending', level: 97 },
        { name: 'Pending', level: 95 },
        { name: 'Pending', level: 93 },
        { name: 'Pending', level: 90 }
      ],
      social: {
        network: '@placeholder',
        followers: 'N/A',
        reputation: 'Initializing…'
      }
    }
  ];

  // Company history timeline data
  const historyTimeline = [
    {
      year: 2023,
      title: 'Foundation',
      description: 'BlackBlazent was founded on 2023.'
    },
    {
      year: 2022,
      title: 'First Development',
      description: 'Development...'
    },
    {
      year: 2024,
      title: '????',
      description: '!!!!'
    },
    {
      year: 2025,
      title: '????',
      description: '!!!!'
    },
    {
      year: 2026,
      title: '????',
      description: '!!!!'
    },
    {
      year: 2027,
      title: '????',
      description: '!!!!'
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">ABOUT BLACKBLAZENT</h1>
        <div className="about-tabs">
          <button 
            className={`tab-btn ${activeTab === 'cyberware' ? 'active' : ''}`}
            onClick={() => setActiveTab('cyberware')}
          >
            SYSTEM BODY
          </button>
          <button 
            className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            TEAM
          </button>
          <button 
            className={`tab-btn ${activeTab === 'company' ? 'active' : ''}`}
            onClick={() => setActiveTab('company')}
          >
            COMPANY
          </button>
          <button 
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            HISTORY
          </button>
        </div>
      </div>

      {activeTab === 'cyberware' && (
        <div className="cyberware-section">
          <div className="cyberware-interface">
            <div className="cyberware-header">
              <div className="cyberware-level">
                <span className="level-label">LEVEL</span>
                <span className="level-value">32</span>
              </div>
              
              <div className="cyberware-stats">
                <div className="stat-item">
                  <div className="stat-icon"></div>
                  <span>BODY: 8</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon"></div>
                  <span>REFLEX: 10</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon"></div>
                  <span>TECH: 12</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon money"></div>
                  <span>$0</span>
                </div>
              </div>
              
              <div className="cyberware-street-cred">
                <span className="cred-label">SCALE</span>
                <span className="cred-value">45</span>
              </div>
              
              <div className="cyberware-location">
                <span>System Dependability</span>
                <span className="location-price">Availability: 15%</span>
              </div>
            </div>
            
            <div className="cyberware-body-container">
              <div className="cyberware-left-systems">
                {bodySystems.left.map(system => (
                  <div 
                    key={system.id} 
                    className={`system-section ${activeSystem === system.id ? 'active' : ''}`}
                    onClick={() => setActiveSystem(system.id)}
                  >
                    <h3 className="system-title">{system.title}</h3>
                    <span className="available-items">{system.availableItems}</span>
                    <div className="item-slots">
                      {system.slots.map((filled, index) => (
                        <div key={index} className={`item-slot ${filled ? 'filled' : ''}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cyberware-body">
                <div className="body-outline"></div>
              </div>
              
              <div className="cyberware-right-systems">
                {bodySystems.right.map(system => (
                  <div 
                    key={system.id} 
                    className={`system-section ${activeSystem === system.id ? 'active' : ''}`}
                    onClick={() => setActiveSystem(system.id)}
                  >
                    <h3 className="system-title">{system.title}</h3>
                    <span className="available-items">{system.availableItems}</span>
                    <div className="item-slots">
                      {system.slots.map((filled, index) => (
                        <div key={index} className={`item-slot ${filled ? 'filled' : ''}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="team-section">
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-card" key={member.id}>
                <div className="card-header">
                  <div className="avatar">{member.avatar}</div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
                <div className="card-body">
                  <p className="member-bio">{member.bio}</p>
                  <div className="skills-section">
                    <h4 className="skills-title">SKILLS</h4>
                    {member.skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-fill" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="social-section">
                    <div className="social-item">
                      <span className="social-label">NETWORK</span>
                      <span className="social-value">{member.social.network}</span>
                    </div>
                    <div className="social-item">
                      <span className="social-label">FOLLOWERS</span>
                      <span className="social-value">{member.social.followers}</span>
                    </div>
                    <div className="social-item">
                      <span className="social-label">REPUTATION</span>
                      <span className="social-value">{member.social.reputation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'company' && (
        <div className="company-section">
          <h2 className="section-title">COMPANY PROFILE</h2>
          <p className="company-description">
          At BlackBlazent, we’re more than just a software startup — we’re a digital dream factory.
          We specialize in crafting modern, human-centered applications that blend functionality with creativity. Whether it’s a music player that speaks your rhythm, a video experience that feels cinematic, or a gallery that inspires imagination — our mission is to make hybrid apps not only accessible but unforgettable.
          </p>
          <br/>
          <p className="company-description">
          Driven by innovation, simplicity, and user delight, our small but passionate team brings big ideas to life. We believe technology should feel natural, intuitive, and deeply personal. That’s why we build tools that empower people to create, connect, and explore across platforms and devices.
          </p>
          <br/>
          <p className="company-description">
          We don’t just write code — we design experiences.
          We listen to our users, adapt quickly, and constantly evolve to meet tomorrow’s needs.
          From concept to code, every detail is crafted with purpose and heart.
          As we grow, our commitment remains the same: build digital tools that feel like they were made just for you.
          </p>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="history-section">
          <h2 className="section-title">OUR JOURNEY</h2>
          <div className="history-timeline">
            {historyTimeline.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUI;
