import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? false : true;
  });
  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [darkMode]);
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <h1 className="logo">Jaison A</h1>
        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? '🌙' : '☀️'}
          </button>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/certifications" onClick={() => setMenuOpen(false)}>
                Certifications
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <a href="../public/resume_jaison.pdf" download>
                <button className="resume-btn">Download CV</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
// this code was modified from the chatgpt
// added hamber design using that also that resume btn
export default Navbar;
