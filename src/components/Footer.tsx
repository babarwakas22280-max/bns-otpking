'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>BNS OTP King</h4>
            <p>Enterprise-grade OTP management solution for modern applications.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#api">API Reference</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} BNS OTP King. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" aria-label="Twitter">𝕏</a>
            <a href="https://github.com" aria-label="GitHub">⚙️</a>
            <a href="https://linkedin.com" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
