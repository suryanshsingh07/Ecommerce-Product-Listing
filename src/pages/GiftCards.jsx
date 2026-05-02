import React from 'react';
// css file
import './features.css';
// components file
import Header from '../components/Home/Header';
import GiftCardsScreen from '../components/giftcards/GiftCardsScreen';

const GiftCards = () => {
  return (
    <div>
        <Header/>
        <GiftCardsScreen/>
    </div>
  )
}

export default GiftCards;
