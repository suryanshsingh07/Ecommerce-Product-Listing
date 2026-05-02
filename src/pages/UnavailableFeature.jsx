import React from 'react';
import Header from '../components/Home/Header';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSetRecoilState } from 'recoil';
import userinfoAtom from '../recoil/userinfoAtom';
import '../pages/cart.css'; 

const UnavailableFeature = ({ featureName }) => {
    const navigate = useNavigate();
    const setUserInfo = useSetRecoilState(userinfoAtom);

    const handleLoginClick = () => {
        setUserInfo(true);
        navigate('/');
    };

    return (
        <div>
            <Header />
            <div className='cart-main-container'>
                <button className='back-to-home-btn' onClick={() => navigate(-1)} style={{ margin: '16px 0 24px 16px', alignSelf: 'flex-start' }}>
                    <ArrowBackIcon /> Back
                </button>
                <div className='empty-cart-container'>
                    <div style={{ fontSize: '60px', marginBottom: '20px' }}>🚧</div>
                    <h2>{featureName}</h2>
                    <h3 style={{ marginTop: '10px', color: '#ff4d4f' }}>This facility is currently unavailable!</h3>
                    <h5 style={{ marginTop: '10px' }}>Please login to explore more features</h5>
                    <button className='start-shoping-container' onClick={handleLoginClick}>
                        <p>Back to Home</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UnavailableFeature;
