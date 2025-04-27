import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IconLoader from './components/IconLoader';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
