import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="eyebrow">404</div>
      <h1 className="h-display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', margin: '16px 0 22px' }}>
        This page doesn&rsquo;t exist.
      </h1>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </div>
  );
};

export default NotFound;
