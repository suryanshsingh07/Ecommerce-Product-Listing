import React from 'react';
// css file
import './features.css';
// components file
import Header from '../components/Home/Header';
import OrdersScreen from '../components/orders/OrdersScreen';

const Orders = () => {
  return (
    <div>
        <Header/>
        <OrdersScreen/>
    </div>
  )
}

export default Orders;
