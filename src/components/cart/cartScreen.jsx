import React from 'react'
import { useNavigate } from 'react-router-dom';
import product from '../../pages/product'
import ImageWithLoader from '../ImageWithLoader';
// M U I
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//recoil
import { useRecoilState } from 'recoil';
import cartItem from '../../recoil/cartItem';
import productView from '../../recoil/productView';
import productViewStatus from '../../recoil/productViewStatus';

const CartScreen = () => {
    const [cartProduct, setcartProduct] = useRecoilState(cartItem);
    const [selectProduct, setselectProduct] = useRecoilState(productView);
    const [productStatus, setproductStatus] = useRecoilState(productViewStatus);
    const navigate = useNavigate();

    const uniqueCartItems = [];
    const idCounts = {};
    
    cartProduct.forEach(id => {
        idCounts[id] = (idCounts[id] || 0) + 1;
    });

    product.forEach(p => {
        if (idCounts[p.id]) {
            uniqueCartItems.push({ ...p, quantity: idCounts[p.id] });
        }
    });

    const totalPrice = uniqueCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalItemsCount = cartProduct.length;

    const handleRemove = (id) => {
        setcartProduct(prev => prev.filter(itemId => itemId !== id));
    };

    const handleIncrease = (id) => {
        setcartProduct(prev => [...prev, id]);
    };

    const handleDecrease = (id) => {
        setcartProduct(prev => {
            const index = prev.indexOf(id);
            if (index > -1) {
                const newCart = [...prev];
                newCart.splice(index, 1);
                return newCart;
            }
            return prev;
        });
    };

    const handleShopClick = () => {
        navigate('/');
    };

    const handleProductClick = (id) => {
        setselectProduct(id);
        setproductStatus(true);
        navigate('/product');
    };

    return (
        <div className='cart-main-container'>
            <button className='back-to-home-btn' onClick={() => navigate(-1)}>
                <ArrowBackIcon /> Back
            </button>
            {uniqueCartItems.length > 0 ? (
                <>
                    <p className='cart-page-title'>🛒 My Cart ({totalItemsCount} item{totalItemsCount > 1 ? 's' : ''})</p>
                    {uniqueCartItems.map((item) => (
                        <div className='cart-product-container' key={item.id} onClick={() => handleProductClick(item.id)} style={{ cursor: 'pointer' }}>
                            <div className='cart-detail-container'>
                                <div className='cart-media'>
                                    <div className='cart-image'>
                                        <ImageWithLoader src={item.image} alt={item.name} height={90} />
                                    </div>
                                </div>
                                <div className='cart-product-details'>
                                    <h3 className='cart-product-name'>{item.name}</h3>
                                    <p className='cart-product-price'>₹ {item.price.toLocaleString()}</p>
                                    <p className='cart-product-category'>{item.category}</p>
                                    <div className='cart-quantity-controls' onClick={(e) => e.stopPropagation()}>
                                        <button className='qty-btn' onClick={() => handleDecrease(item.id)}>-</button>
                                        <span className='qty-count'>{item.quantity}</span>
                                        <button className='qty-btn' onClick={() => handleIncrease(item.id)}>+</button>
                                    </div>
                                </div>
                                <div className='cart-del-icon' onClick={(e) => { e.stopPropagation(); handleRemove(item.id); }}>
                                    <i><CloseIcon style={{ fontSize: '18px' }} /></i>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='place-order-container'>
                        <div className='total-price'>
                            Total: <span>₹ {totalPrice.toLocaleString()}</span>
                        </div>
                        <button onClick={() => alert('This service is currently unavailable')}>
                            PLACE ORDER
                        </button>
                    </div>
                </>
            ) : (
                <div className='empty-cart-container'>
                    <ImageWithLoader src={process.env.PUBLIC_URL + '/images/assests/empty_cart.png'}
                        alt='Empty Cart'
                        height={200}/>
                    <h3>Your Cart is Empty!</h3>
                    <h5>Add items to get started</h5>
                    <button className='start-shoping-container' onClick={handleShopClick}>
                        <p>Shop Now</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartScreen;