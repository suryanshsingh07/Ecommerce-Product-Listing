import React from 'react';
import { useNavigate } from 'react-router-dom';
// M U I
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// recoil
import { useSetRecoilState } from 'recoil';
import userinfoAtom from '../../recoil/userinfoAtom';

const SupportScreen = () => {
    const navigate = useNavigate();
    const setUserInfo = useSetRecoilState(userinfoAtom);

    const handleLoginClick = () => {
        setUserInfo(true);
        navigate('/login');
    };

    return (
        <div className='feature-main-container'>
            <button className='back-to-home-btn' onClick={() => navigate(-1)} style={{ margin: '16px 0 24px 16px', alignSelf: 'flex-start' }}>
                <ArrowBackIcon /> Back
            </button>
            <div className='feature-header-banner'>
                <span>🎧</span>
                <h2>Customer Support</h2>
            </div>
            <div className='feature-unavailable-container'>
                <div className='feature-icon-wrapper'>
                    <SupportAgentIcon style={{ fontSize: '64px', color: '#007BFF' }} />
                </div>
                <h2>Customer Support</h2>
                <h3>This facility is currently unavailable!</h3>
                <h5>Please login to raise a ticket or chat with our support team</h5>
                <button className='feature-login-button' onClick={handleLoginClick}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default SupportScreen;
