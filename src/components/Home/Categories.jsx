import React from 'react';
import ImageWithLoader from '../ImageWithLoader';
//recoil js
import { useRecoilState } from 'recoil';
import activateFilter from '../../recoil/activateFilter';

const CATEGORIES = [
  { label: 'All Items',    filter: '',            img: '/images/categorey/All.png' },
  { label: 'Accessories',  filter: 'Accessories', img: '/images/categorey/Accessories.png' },
  { label: 'Electronics',  filter: 'Electronics', img: '/images/categorey/Electronics.png' },
  { label: 'Clothing',     filter: 'Clothing',    img: '/images/categorey/Clothing.png' },
  { label: 'Appliances',   filter: 'Appliances',  img: '/images/categorey/Appliances.png' },
  { label: 'Grocery',      filter: 'Grocery',     img: '/images/categorey/Grocery.png' },
  { label: 'Mobiles',      filter: 'Mobiles',     img: '/images/categorey/Mobiles.png' },
  { label: 'Furniture',    filter: 'Furniture',   img: '/images/categorey/Furniture.png' },
];

const Categories = () => {
  const [activeFilter, setactiveFilter] = useRecoilState(activateFilter);

  return (
    <div className='main-category-container'>
      {CATEGORIES.map((cat) => (
        <div key={cat.filter} onClick={() => setactiveFilter(cat.filter)}>
          <button className={activeFilter === cat.filter ? 'active-filter' : ''}>
            <div>
              <ImageWithLoader src={process.env.PUBLIC_URL + cat.img}
                alt={cat.label}
                height={36}
                width={36}/>
            </div>
            <h5>{cat.label}</h5>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;