import React from 'react';
import Logincard from '../components/Login/Logincard';
import ImageWithLoader from '../components/ImageWithLoader';
import "./login.css";

const login = () => {
  return (
    <div className='auth-page-wrapper'>
      {/* Left decorative panel */}
      <div className='auth-left-panel'>
        <div className='auth-brand-logo'>
          <ImageWithLoader src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt='logo' height='54' />
          <h1>My Shop</h1>
        </div>
        <h2>Shop Smarter, Not Harder</h2>
        <p>Discover thousands of products across all categories at unbeatable prices.</p>
        <ul className='auth-feature-list'>
          <li><span>🛒</span> Browse & filter products by category or price</li>
          <li><span>❤️</span> Save items to your Wishlist</li>
          <li><span>📦</span> Fast & reliable order tracking</li>
          <li><span>🎁</span> Exclusive coupons & gift cards</li>
          <li><span>🔒</span> Secure & private shopping</li>
        </ul>
      </div>

      {/* Right form panel */}
      <Logincard />
    </div>
  );
};

export default login;