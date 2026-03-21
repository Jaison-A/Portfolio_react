import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/navbar.css';
import './styles/home.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/certification.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
