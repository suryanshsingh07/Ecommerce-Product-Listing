import React from 'react'
import { useNavigate } from 'react-router-dom';
import product from '../../pages/product'
// M U I
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//recoil
import { useRecoilState } from 'recoil';
import wishListitem from '../../recoil/wishListitem';
import productView from '../../recoil/productView';
import productViewStatus from '../../recoil/productViewStatus';
import ImageWithLoader from '../ImageWithLoader';

const WishlistScreen = () => {
    const [likedItems, setLikedItems] = useRecoilState(wishListitem);
    const [, setselectProduct] = useRecoilState(productView);
    const [, setproductStatus] = useRecoilState(productViewStatus);
    const navigate = useNavigate();

    const likedProducts = product.filter((p) => likedItems.includes(p.id));

    const handleRemove = (id) => {
        setLikedItems(prev => prev.filter(itemId => itemId !== id));
    };

    const handleProductClick = (id) => {
        setselectProduct(id);
        setproductStatus(true);
        navigate('/product');
    };

    const handleShopClick = () => {
        navigate('/');
    };

    return (
        <div className='wishlist-main-container'>
            <div style={{ padding: '16px 24px 0 24px' }}>
                <button className='back-to-home-btn' onClick={() => navigate(-1)}>
                    <ArrowBackIcon /> Back
                </button>
            </div>
            <div className='wishlist-header-container' style={{ borderTop: 'none', paddingTop: '4px' }}>
                <h2>❤️ My Wishlist ({likedItems.length})</h2>
            </div>

            {likedProducts.length > 0 ? (
                likedProducts.map((item) => (
                    <div className='wishlist-product-container' key={item.id} onClick={() => handleProductClick(item.id)} style={{ cursor: 'pointer' }}>
                        <div className='wishlist-detail-container'>
                            <div className='wishlist-media'>
                                <div className='wishlist-image'>
                                    <ImageWithLoader src={item.image} alt={item.name} height={80} />
                                </div>
                            </div>
                            <div className='wishlist-product-details'>
                                <h3 className='wishlist-product-name'>{item.name}</h3>
                                <p className='wishlist-product-price'>₹ {item.price.toLocaleString()}</p>
                                <p className='wishlist-product-category'>{item.category}</p>
                            </div>
                            <div className='wishlist-del-icon'>
                                <i onClick={(e) => { e.stopPropagation(); handleRemove(item.id); }}>
                                    <DeleteIcon style={{ fontSize: '20px' }} />
                                </i>
                            </div>
                        </div>
                        <div className='wishlist-divider' />
                    </div>
                ))
            ) : (
                <div className='empty-wishlist-container'>
                    <ImageWithLoader src={process.env.PUBLIC_URL + '/images/assests/empty_wishlist.png'}
                        alt='Empty Wishlist'
                        height={200}/>
                    <h3>Your Wishlist is Empty</h3>
                    <h5>Save items you love and find them here anytime</h5>
                    <button className='start-shoping-container' onClick={handleShopClick}>
                        <p>Shop Now</p>
                    </button>
                </div>
            )}
        </div>
    );
};

export default WishlistScreen;