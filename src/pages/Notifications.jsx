import React from 'react';
// css file
import './features.css';
// components file
import Header from '../components/Home/Header';
import NotificationsScreen from '../components/notifications/NotificationsScreen';

const Notifications = () => {
  return (
    <div>
        <Header/>
        <NotificationsScreen/>
    </div>
  )
}

export default Notifications;
