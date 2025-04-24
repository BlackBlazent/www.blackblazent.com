import React from 'react';
import '../../styles/components/blog.ui.css';

const BlogUI: React.FC = () => {
  return (
    <div className="main-content" id="for-blog">
      <div className="blog-container">
        {/* Header with navigation */}
        <header className="blog-header">
          <div className="blog-logo">
            <svg width="30" height="18" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L40 24H0L20 0Z" fill="#FFFF00"/>
              <path d="M20 8L30 24H10L20 8Z" fill="#FFFF00"/>
              <path d="M20 16L25 24H15L20 16Z" fill="#FFFF00"/>
            </svg>
            <span>Blog's</span>
          </div>
          <nav className="blog-nav">
            <a className="nav-item active">Home</a>
            <a className="nav-item">Archives</a>
            <a className="nav-item">Categories</a>
            <a className="nav-item">Tags</a>
            <a className="nav-item">About</a>
          </nav>
          <div className="blog-actions">
            <button className="action-btn"><i className=""></i></button>
            <button className="action-btn"><i className="search-blog"><img style={{width:'16px', height:'16px'}} src='./src/assets/icons/navigations/search.png' className=''/></i></button>
          </div>
        </header>

        {/* Main content */}
        <div className="blog-content">
          {/* Left sidebar - Author profile */}
          <div className="blog-sidebar-left">
            <div className="author-profile">
              <div className="author-avatar">
                <img src="./src/assets/etc/blog/avatar.png" alt="" />
              </div>
              <h2 className="author-name">BLOG Admin</h2>
              <p className="author-title">Writer</p>
              <p className="author-location">
                <i className="icon-location"></i>  Dependable 🫳
              </p>
              <div className="profile-stats">
                <div className="stat-group">
                  <h3>POSTS</h3>
                  <span className="stat-number">34</span>
                </div>
                <div className="stat-group">
                  <h3>CATEGORIES</h3>
                  <span className="stat-number">11</span>
                </div>
                <div className="stat-group">
                  <h3>TAGS</h3>
                  <span className="stat-number">2</span>
                </div>
              </div>
              <button className="follow-btn">Follow</button>
              <div className="social-links">
                <a href="#" className="social-link"><i className=""></i></a>
                <a href="#" className="social-link"><i className=""></i></a>
                <a href="#" className="social-link"><i className=""></i></a>
                <a href="#" className="social-link"><i className=""></i></a>
                <a href="#" className="social-link"><i className=""></i></a>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="section-title">LINKS</h3>
              <div className="link-list">
                <div className="link-item">
                  <span></span>
                  <button className="link-btn">Visit</button>
                </div>
                <div className="link-item">
                  <span></span>
                  <button className="link-btn">Visit</button>
                </div>
              </div>
            </div>
          </div>

          {/* Main blog posts */}
          <div className="blog-main">
            {/* Featured post */}
            <article className="blog-post featured">
              <div className="post-image">
                <img src="./src/assets/etc/blog/cyberpunk-featured.jpg" alt="" />
              </div>
              <div className="post-meta">
                <span className="post-date">A YEAR AGO</span>
                <span className="post-read-time">2 MINUTES READ (ABOUT 342 WORDS)</span>
              </div>
              <h1 className="post-title">Getting Started with BlackDevOps</h1>
              <div className="post-content">
                <p>BlackDevOps is a next-generation development and operations toolkit, built upon the trusted foundation of Visual Studio Code, crafted to streamline, automate, and elevate your entire DevOps lifecycle.

From CI/CD pipeline orchestration to seamless container deployment, real-time infrastructure monitoring, and scalable cloud-native operations — BlackDevOps enhances the familiar coding workspace with integrated DevOps intelligence and precision-engineered tools.

Engineered for fluid collaboration, remote environment syncing, and intelligent task handling, BlackDevOps adapts to the way you work — whether solo or in a globally distributed team.

Whether you're a developer, SRE, or DevOps engineer, BlackDevOps empowers you with a unified workspace where productivity, clarity, and control converge.</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>

            {/* Second post */}
            <article className="blog-post">
              <div className="post-image">
                <img src="./src/assets/etc/blog/cyberpunk-post2.jpg" alt="" />
              </div>
            </article>
          </div>

          {/* Right sidebar - Recent posts */}
          <div className="blog-sidebar-right">
            <div className="sidebar-section">
              <h3 className="section-title">RECENT</h3>
              <div className="recent-posts">
                <div className="recent-post">
                  <div className="recent-post-image">
                    <img src="./src/assets/etc/blog/recent1.jpg" alt="Recent post" />
                  </div>
                  <div className="recent-post-info">
                    <span className="post-date">2018-10-22</span>
                    <h4 className="post-title">Getting Started with BlackDevOps</h4>
                  </div>
                </div>

                <div className="recent-post">
                  <div className="recent-post-image">
                    <img src="./src/assets/etc/blog/recent2.jpg" alt="Recent post" />
                  </div>
                  <div className="recent-post-info">
                    <span className="post-date">2018-10-22</span>
                    <h4 className="post-title">Configuring BlackDevOps</h4>
                    <span className="post-category">CONFIGURATION / THEME</span>
                  </div>
                </div>

                <div className="recent-post">
                  <div className="recent-post-image">
                    <img src="./src/assets/etc/blog/recent3.jpg" alt="Recent post" />
                  </div>
                  <div className="recent-post-info">
                    <span className="post-date">2018-10-22</span>
                    <h4 className="post-title">Settings Customization</h4>
                    <span className="post-category">CONFIGURATION / UTILS</span>
                  </div>
                </div>

                <div className="recent-post">
                  <div className="recent-post-image">
                    <img src="./src/assets/etc/blog/recent4.jpg" alt="Recent post" />
                  </div>
                  <div className="recent-post-info">
                    <span className="post-date">2018-10-20</span>
                    <h4 className="post-title">Setting up LLM provider</h4>
                    <span className="post-category">AI Models</span>
                  </div>
                </div>

                <div className="recent-post">
                  <div className="recent-post-image">
                    <img src="./src/assets/etc/blog/recent5.jpg" alt="Recent post" />
                  </div>
                  <div className="recent-post-info">
                    <span className="post-date">2018-10-19</span>
                    <h4 className="post-title">FAQ</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="section-title">ARCHIVES</h3>
              <div className="archives-list">
                <div className="archive-item">
                  <span>October 2018</span>
                  <span className="archive-count">9</span>
                </div>
                <div className="archive-item">
                  <span>January 2017</span>
                  <span className="archive-count">5</span>
                </div>
                <div className="archive-item">
                  <span>July 2016</span>
                  <span className="archive-count">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUI;