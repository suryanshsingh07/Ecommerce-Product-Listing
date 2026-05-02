import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className='footer-container'>
      <div className='footer-inner'>
        <div className='footer-brand'>
          <span className='footer-logo-text'>My Shop</span>
          <p className='footer-tagline'>Shop Smarter, Live Better</p>
        </div>
        <div className='footer-links'>
          <span onClick={() => navigate('/about')}>About Us</span>
          <span onClick={() => navigate('/privacy')}>Privacy Policy</span>
          <span onClick={() => navigate('/terms')}>Terms of Service</span>
          <span onClick={() => navigate('/contact')}>Contact</span>
        </div>
        <p className='footer-copy'>© {new Date().getFullYear()} My Shop - All rights reserved</p>
        <a href="https://suryanshsingh.vercel.app" target="_blank" rel="noopener noreferrer"
          class="made-by-btn">
          <span>Made by </span>
          <span class="author-name">Suryansh Singh</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;