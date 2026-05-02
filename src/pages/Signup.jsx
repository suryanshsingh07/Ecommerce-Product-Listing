import React from 'react';
import Signuppage from '../components/Signup/Signuppage';
import ImageWithLoader from '../components/ImageWithLoader';
import "./login.css";

const signup = () => {
  return (
    <div className='auth-page-wrapper'>
      <div className='auth-left-panel'>
        <div className='auth-brand-logo'>
          <ImageWithLoader src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt='logo' height='54' />
          <h1>MyShop</h1>
        </div>
        <h2>Join MyShop Today!</h2>
        <p>Create a free account and start exploring thousands of products.</p>
        <ul className='auth-feature-list'>
          <li><span>✅</span> Free account, no credit card required</li>
          <li><span>🚀</span> Quick 4-step registration</li>
          <li><span>🛍️</span> Personalized shopping experience</li>
          <li><span>🔔</span> Notifications for deals & offers</li>
          <li><span>🔒</span> Your data is safe with us</li>
        </ul>
      </div>
      <Signuppage />
    </div>
  );
};

export default signup;