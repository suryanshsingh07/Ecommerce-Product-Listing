import React from 'react';
import { useNavigate } from 'react-router-dom';
// M U I
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// recoil
import { useSetRecoilState } from 'recoil';
import userinfoAtom from '../../recoil/userinfoAtom';

const GiftCardsScreen = () => {
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
                <span>🎁</span>
                <h2>Gift Cards</h2>
            </div>
            <div className='feature-unavailable-container'>
                <div className='feature-icon-wrapper'>
                    <CardGiftcardTwoToneIcon style={{ fontSize: '64px', color: '#007BFF' }} />
                </div>
                <h2>Gift Cards</h2>
                <h3>This facility is currently unavailable!</h3>
                <h5>Please login to purchase and redeem gift cards</h5>
                <button className='feature-login-button' onClick={handleLoginClick}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default GiftCardsScreen;
