import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import product from '../../pages/product';
import ImageWithLoader from '../ImageWithLoader';
// M U I
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// recoil
import { useRecoilState } from 'recoil';
import searchtextAtom from '../../recoil/searchTextAtom'; 
import activateFilter from '../../recoil/activateFilter';
import wishListitem from '../../recoil/wishListitem';
import productView from '../../recoil/productView';
import productViewStatus from '../../recoil/productViewStatus';
import priceFilterAtom from '../../recoil/priceFilterAtom';
import sortAtom from '../../recoil/sortAtom';

const Product = () => {
  const [likedItems, setLikedItems] = useRecoilState(wishListitem);
  const [inputData, setinputData] = useRecoilState(searchtextAtom);
  const [activeFilter, setactiveFilter] = useRecoilState(activateFilter);
  const [selectProduct, setselectProduct] = useRecoilState(productView);
  const [productStatus, setproductStatus] = useRecoilState(productViewStatus);
  const [priceFilter] = useRecoilState(priceFilterAtom);
  const [sortOrder] = useRecoilState(sortAtom);
  const navigate = useNavigate();

  const toggleLike = (id) => {
    setLikedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  let filteredProducts = product?.filter((item) => {
    const matchesCategory = activeFilter === "" || item?.category === activeFilter;
    const matchesPrice = item?.price >= priceFilter.min && item?.price <= priceFilter.max;

    const matchesSearch = inputData === "" ||
      item?.name?.toLowerCase().includes(inputData.toLowerCase()) ||
      item?.price?.toString().includes(inputData.toString()) ||
      item?.category?.toLowerCase().includes(inputData.toLowerCase());
    
    if (inputData===""){
      return matchesCategory && matchesPrice;
    }else{
      setactiveFilter("");
      return matchesSearch && matchesPrice;
    }      
  });

  if (sortOrder === 'PRICE_LOW_HIGH') {
      filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'PRICE_HIGH_LOW') {
      filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleproductClick = () => {
    setproductStatus(true);
    navigate('/product');
  };


  return (
      <div className='main-product-container'>
      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <ImageWithLoader src={process.env.PUBLIC_URL + '/images/assests/no_item.png'} alt='NO ITEM'/>
          <h2>Sorry, no item found!</h2>
          <h4>Please check the spelling or try searching for something else</h4>
        </div>
      ) : (
          filteredProducts.map((data) => (
            <div className='product-container' key={data.id} onClick={()=>{
              setselectProduct(data.id);
              handleproductClick();}}>
              <div className='favoutire-icon' onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(data.id);}}>
                {likedItems.includes(data.id)
                ? <FavoriteIcon style={{ color: 'red' }} />
                : <FavoriteBorderIcon style={{ color: 'gray' }} />}
              </div>
              <div className='share-icon'>
                <ShareIcon style={{ color: 'GrayText', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("This service is currently unavailable");}}/>
              </div>
              <ImageWithLoader src={data.image} alt={data.name} height={150} />
              <h3>{data.name}</h3>
              <p className='price'>₹ {data.price.toLocaleString()}</p>
              <p className="category">{data.category}</p>
            </div>
          ))
      )}
    </div>
  );
}

export default Product;