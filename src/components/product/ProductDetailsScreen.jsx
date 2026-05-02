import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import product from '../../pages/product';
import ImageWithLoader from '../ImageWithLoader';
// M U I
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyIcon from '@mui/icons-material/Reply';
import BoltIcon from '@mui/icons-material/Bolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//recoil
import { useRecoilState } from 'recoil';
import wishListitem from '../../recoil/wishListitem';
import productView from '../../recoil/productView';
import wishListBox from '../../recoil/wishListBox';
import cartItem from '../../recoil/cartItem';
import cartItemStatus from '../../recoil/cartItemStatus';


const ProductDetailsScreen = () => {
    const [likedItems, setLikedItems] = useRecoilState(wishListitem);
    const [selectProduct, setselectProduct] = useRecoilState(productView);
    const [wishlistStatus, setwishlistStatus] = useRecoilState(wishListBox);
    const [cartProduct, setcartProduct] = useRecoilState(cartItem);
    const [cartStatus, setcartStatus] = useRecoilState(cartItemStatus);
    const navigate = useNavigate();

    useEffect(() => {
        setwishlistStatus(false);
    }, [setwishlistStatus]);

    const handleCartClick = () => {
        setcartStatus(true);
        navigate('/cart');
    };

    const toggleCart = (id) => {
        setcartProduct(prev => {
            if (!prev.includes(id)) {
                return [...prev, id];
            }
            return prev;
        });
    };

    const toggleLike = (id) => {
        setLikedItems(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const currentProduct = product[selectProduct - 1];

    return (
        <div className='product-item-main-container'>
            <div className='product-item-container' key={currentProduct.id}>
                <div className='icon-wrapper'>
                    <div className='back-icon' onClick={() => navigate(-1)}>
                        <ArrowBackIcon style={{ color: '#888', fontSize: '20px' }} />
                        <p>Back</p>
                    </div>         
                    <div className='right-icons'>
                        <div className='favoutire-icon'
                            onClick={() => toggleLike(currentProduct.id)}>
                            {likedItems.includes(currentProduct.id)
                                ? <FavoriteIcon style={{ color: 'red', fontSize: '20px' }} />
                                : <FavoriteBorderIcon style={{ color: '#888', fontSize: '20px' }} />}
                            <p>Wishlist</p>
                        </div>
                        <div className='share-icon'
                            onClick={() => alert('This service is currently unavailable')}>
                            <ReplyIcon style={{ transform: 'scaleX(-1)', color: '#888', fontSize: '20px' }} />
                            <p>Share</p>
                        </div>
                    </div>
                </div>
                <div className='product-detail-container'>
                    <div className='product-media'>
                        <div className='image'>
                            <ImageWithLoader src={currentProduct.image} alt={currentProduct.name}
                                style={{ maxWidth: '100%', maxHeight: '280px', objectFit: 'contain' }}/>
                        </div>
                        <div className='shopping-buttons'>
                            <button className='cart-button'
                                onClick={() => {
                                    toggleCart(currentProduct.id);
                                    handleCartClick();
                                }}>
                                <ShoppingCartIcon style={{ fontSize: '18px' }} />
                                <p>ADD TO CART</p>
                            </button>
                            <button
                                className='buy-button'
                                onClick={() => alert('This service is currently unavailable')}>
                                <BoltIcon style={{ fontSize: '18px' }} />
                                <p>BUY NOW</p>
                            </button>
                        </div>
                    </div>
                    <div className='product-details'>
                        <h3>{currentProduct.name}</h3>
                        <p className='price'>₹ {currentProduct.price.toLocaleString()}</p>
                        <p className='category'>{currentProduct.category}</p>
                        <p><i>General Details</i></p>
                        <p className='detail'>{currentProduct.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsScreen;