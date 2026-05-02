import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userSignAtom from '../../recoil/userSignAtom';
import userinfoAtom from '../../recoil/userinfoAtom';
// MUI
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageWithLoader from '../ImageWithLoader';

const Signuppage = () => {
  const [userSignup, setUserSignup] = useRecoilState(userSignAtom);
  const [userInfo, setUserInfo] = useRecoilState(userinfoAtom);
  const navigate = useNavigate();

  // Local state for form step and inputs
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setemail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [Address, setAddress] = useState('');
  const [pinCode, setpinCode] = useState('');
  const [password, setPassword] = useState('');
  const [verifypassword, setverifyPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerify, setShowVerify] = useState(false);

  const handleNext1 = (e) => {
    e.preventDefault();
    if (mobileNumber.length >= 10 && email.length >= 11) {
      setStep(2);
    } else {
      alert('Please enter a valid mobile number or Email address.');
    }
  };
  const handleNext2 = (e) => {
    e.preventDefault();
    if (firstname.length > 0 && lastname.length > 0) {
      setStep(3);
    } else {
      alert('Please enter a valid Name.');
    }
  };
  const handleNext3 = (e) => {
    e.preventDefault();
    if (Address.length > 0 && pinCode.length == 6) {
      setStep(4);
    } else {
      alert('Please enter a valid Address or PIN Code.');
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    if (username.length > 0 && password === verifypassword) {
      alert('This service is currently unavailable');
    } else {
      alert('Please enter a valid Username or matching Password.');
    }
  };

  const handleGoLogin = () => {
    setUserInfo(true);
    navigate('/login');
  };

  const stepLabels = ['Contact', 'Name', 'Address', 'Account'];

  return (
    <div className='auth-right-panel'>
      <div className='auth-card'>
        <button className='back-to-home-btn' onClick={() => navigate(-1)} style={{ alignSelf: 'flex-start', margin: '20px 0 0 20px', border: 'none', background: 'transparent', boxShadow: 'none', color: '#888' }}>
          <ArrowBackIcon /> Back
        </button>
        <div className='auth-brand-logo' style={{ justifyContent: 'center', marginBottom: '20px' }}>
          <ImageWithLoader src={process.env.PUBLIC_URL + '/images/logo/logo.png'} alt='logo' height='36' />
          <h1 style={{ fontFamily: 'Cursive', fontSize: '1.7rem', color: '#007BFF', margin: 0 }}>MyShop</h1>
        </div>

        <h2 className='auth-card-title'>Create Account 🚀</h2>
        <p className='auth-card-subtitle'>Step {step} of 4 — {stepLabels[step - 1]}</p>

        {/* Step indicator */}
        <div className='auth-step-indicator'>
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`auth-step-dot ${step >= s ? 'active' : ''}`} />
          ))}
        </div>

        {/* Unavailable note */}
        <div className='auth-unavailable-note'>
          ⚠️ This service is currently unavailable. Signup is disabled.
        </div>

        <form>
          {/* Step 1 - Contact */}
          {step === 1 && (
            <>
              <div className='auth-input-group'>
                <label htmlFor='signup-mobile'>Mobile Number</label>
                <input id='signup-mobile' className='auth-input' type='tel' placeholder='Enter 10-digit mobile number'
                  value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
              </div>
              <div className='auth-input-group'>
                <label htmlFor='signup-email'>Email Address</label>
                <input id='signup-email' className='auth-input' type='email' placeholder='Enter email address'
                  value={email} onChange={(e) => setemail(e.target.value)} />
              </div>
              <button className='auth-btn' onClick={handleNext1}>Continue →</button>
            </>
          )}

          {/* Step 2 - Name */}
          {step === 2 && (
            <>
              <div className='auth-input-group'>
                <label htmlFor='signup-fname'>First Name</label>
                <input id='signup-fname' className='auth-input' type='text' placeholder='Enter first name'
                  value={firstname} onChange={(e) => setfirstname(e.target.value)} />
              </div>
              <div className='auth-input-group'>
                <label htmlFor='signup-lname'>Last Name</label>
                <input id='signup-lname' className='auth-input' type='text' placeholder='Enter last name'
                  value={lastname} onChange={(e) => setlastname(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className='auth-btn' style={{ flex: 1, background: '#f0f0f0', color: '#555' }}
                  onClick={(e) => { e.preventDefault(); setStep(1); }}>← Back</button>
                <button className='auth-btn' style={{ flex: 2 }} onClick={handleNext2}>Continue →</button>
              </div>
            </>
          )}

          {/* Step 3 - Address */}
          {step === 3 && (
            <>
              <div className='auth-input-group'>
                <label htmlFor='signup-address'>Address</label>
                <input id='signup-address' className='auth-input' type='text' placeholder='Enter your full address'
                  value={Address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className='auth-input-group'>
                <label htmlFor='signup-pin'>PIN Code</label>
                <input id='signup-pin' className='auth-input' type='number' placeholder='Enter 6-digit PIN code'
                  value={pinCode} onChange={(e) => setpinCode(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className='auth-btn' style={{ flex: 1, background: '#f0f0f0', color: '#555' }}
                  onClick={(e) => { e.preventDefault(); setStep(2); }}>← Back</button>
                <button className='auth-btn' style={{ flex: 2 }} onClick={handleNext3}>Continue →</button>
              </div>
            </>
          )}

          {/* Step 4 - Account */}
          {step === 4 && (
            <>
              <div className='auth-input-group'>
                <label htmlFor='signup-username'>Username</label>
                <input id='signup-username' className='auth-input' type='text' placeholder='Choose a username'
                  value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='auth-input-group' style={{ position: 'relative' }}>
                <label htmlFor='signup-password'>Password</label>
                <input id='signup-password' className='auth-input'
                  type={showPassword ? 'text' : 'password'} placeholder='Create a password'
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingRight: '44px' }} />
                <span onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '14px', top: '36px', cursor: 'pointer', color: '#aaa' }}>
                  {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
                </span>
              </div>
              <div className='auth-input-group' style={{ position: 'relative' }}>
                <label htmlFor='signup-verify'>Confirm Password</label>
                <input id='signup-verify' className='auth-input'
                  type={showVerify ? 'text' : 'password'} placeholder='Re-enter your password'
                  value={verifypassword} onChange={(e) => setverifyPassword(e.target.value)}
                  style={{ paddingRight: '44px' }} />
                <span onClick={() => setShowVerify(!showVerify)}
                  style={{ position: 'absolute', right: '14px', top: '36px', cursor: 'pointer', color: '#aaa' }}>
                  {showVerify ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className='auth-btn' style={{ flex: 1, background: '#f0f0f0', color: '#555' }}
                  onClick={(e) => { e.preventDefault(); setStep(3); }}>← Back</button>
                <button className='auth-btn' style={{ flex: 2 }} onClick={handleSignup}>Sign Up ✓</button>
              </div>
            </>
          )}
        </form>

        <div className='auth-switch-text'>
          Already have an account?
          <span className='auth-switch-link' onClick={handleGoLogin}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
