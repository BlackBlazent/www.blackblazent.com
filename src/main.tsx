import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@blackblazent/core/styles.css';
import './styles/site.css';
import './styles/headings.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
