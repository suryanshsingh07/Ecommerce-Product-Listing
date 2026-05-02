import React from 'react';
// css file
import './features.css';
// components file
import Header from '../components/Home/Header';
import CouponsScreen from '../components/coupons/CouponsScreen';

const Coupons = () => {
  return (
    <div>
        <Header/>
        <CouponsScreen/>
    </div>
  )
}

export default Coupons;
