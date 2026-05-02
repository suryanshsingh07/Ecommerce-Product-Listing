import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// recoil js
import { useRecoilState } from 'recoil';
import userinfoAtom from '../../recoil/userinfoAtom';
import userSignAtom from '../../recoil/userSignAtom';
// MUI
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageWithLoader from '../ImageWithLoader';

const Logincard = () => {
  const [userInfo, setUserInfo] = useRecoilState(userinfoAtom);
  const [userSignup, setUserSignup] = useRecoilState(userSignAtom);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleGoSignup = () => {
    setUserSignup(true);
    navigate('/signup');
  };

  return (
    <div className='auth-right-panel'>
      <div className='auth-card'>
        <button className='back-to-home-btn' onClick={() => navigate(-1)} style={{ alignSelf: 'flex-start', margin: '20px 0 0 20px', border: 'none', background: 'transparent', boxShadow: 'none', color: '#888' }}>
          <ArrowBackIcon /> Back
        </button>
        <div className='auth-brand-logo' style={{ justifyContent: 'center', marginBottom: '24px' }}>
          <ImageWithLoader src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt='logo' height='38' />
          <h1 style={{ fontFamily: 'Cursive', fontSize: '1.8rem', color: '#007BFF', margin: 0 }}>MyShop</h1>
        </div>
        <h2 className='auth-card-title'>Welcome Back! 👋</h2>
        <p className='auth-card-subtitle'>Login to access your account</p>
        <div className='auth-unavailable-note'>
          ⚠️ This service is currently unavailable. Login is disabled.
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert('This service is currently unavailable'); }}>
          <div className='auth-input-group'>
            <label htmlFor='login-username'>Username</label>
            <input id='login-username' className='auth-input' type='text' placeholder='Enter your username' />
          </div>
          <div className='auth-input-group' style={{ position: 'relative' }}>
            <label htmlFor='login-password'>Password</label>
            <input id='login-password'
              className='auth-input'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password'
              style={{ paddingRight: '44px' }}/>
            <span onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '14px', top: '36px', cursor: 'pointer', color: '#aaa' }} >
              {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
            </span>
          </div>
          <button className='auth-btn' type='submit'>
            Login
          </button>
        </form>
        <div className='auth-switch-text'>
          Don't have an account?
          <span className='auth-switch-link' onClick={handleGoSignup}>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Logincard;