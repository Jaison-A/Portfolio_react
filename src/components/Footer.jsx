import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} All rights are reserved by{' '}
          <span className="footer-name">Jaison A</span>
        </p>
        <div className="footer-icons">
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <a href="#home" className="top-btn">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
