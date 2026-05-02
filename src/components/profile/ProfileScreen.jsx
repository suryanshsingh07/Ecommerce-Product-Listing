import React from 'react';
import { useNavigate } from 'react-router-dom';
// M U I
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProfileScreen = () => {
    const navigate = useNavigate();

    return (
        <div className='feature-main-container'>
            <button className='back-to-home-btn' onClick={() => navigate(-1)} style={{ margin: '16px 0 24px 16px', alignSelf: 'flex-start' }}>
                <ArrowBackIcon /> Back
            </button>
            <div className='feature-header-banner'>
                <span>👤</span>
                <h2>My Profile</h2>
            </div>
            <div className='feature-unavailable-container'>
                <div className='feature-icon-wrapper' style={{ background: '#fff0f0' }}>
                    <ConstructionIcon style={{ fontSize: '50px', color: '#ff4d4f' }} />
                </div>
                <h2>Profile Page Under Construction</h2>
                <h3 style={{ color: '#ff4d4f' }}>This facility is currently unavailable!</h3>
                <h5>I am actively building this feature for the future. Please check back later</h5>
                <button className='feature-login-button' onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ProfileScreen;
