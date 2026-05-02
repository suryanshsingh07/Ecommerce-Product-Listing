import React from 'react';
// recoil
import { useRecoilState } from 'recoil';
import priceFilterAtom from '../../recoil/priceFilterAtom';
import activateFilter from '../../recoil/activateFilter';
import searchtextAtom from '../../recoil/searchTextAtom';
import sortAtom from '../../recoil/sortAtom';

const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: 999999 },
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹2,000', min: 500, max: 2000 },
  { label: '₹2,000 - ₹10,000', min: 2000, max: 10000 },
  { label: '₹10,000 - ₹50,000', min: 10000, max: 50000 },
  { label: 'Above ₹50,000', min: 50000, max: 999999 },
];

const FilterSortBar = () => {
  const [priceFilter, setPriceFilter] = useRecoilState(priceFilterAtom);
  const [activeFilter, setactiveFilter] = useRecoilState(activateFilter);
  const [inputData, setinputData] = useRecoilState(searchtextAtom);
  const [sortOrder, setSortOrder] = useRecoilState(sortAtom);

  const handleClearAll = () => {
    setPriceFilter({ min: 0, max: 999999 });
    setactiveFilter('');
    setinputData('');
    setSortOrder('DEFAULT');
  };

  const handlePriceChange = (e) => {
    const selected = PRICE_RANGES[e.target.value];
    setPriceFilter({ min: selected.min, max: selected.max });
  };

  const currentPriceIndex = PRICE_RANGES.findIndex(
    range => range.min === priceFilter.min && range.max === priceFilter.max
  );

  return (
    <div className='filter-sort-bar'>
      <div className='filter-group'>
        <label>Price:</label>
        <select value={currentPriceIndex !== -1 ? currentPriceIndex : 0} onChange={handlePriceChange}>
          {PRICE_RANGES.map((range, index) => (
            <option key={index} value={index}>{range.label}</option>
          ))}
        </select>
      </div>
      <div className='filter-group'>
        <label>Sort By:</label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="DEFAULT">Recommended</option>
          <option value="PRICE_LOW_HIGH">Price: Low to High</option>
          <option value="PRICE_HIGH_LOW">Price: High to Low</option>
        </select>
      </div>
      <button className='filter-clear-btn' onClick={handleClearAll}>
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSortBar;
