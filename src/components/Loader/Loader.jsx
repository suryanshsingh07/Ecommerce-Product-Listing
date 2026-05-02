import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useRecoilValue } from 'recoil';
import loadingState from '../../recoil/loadingState';
import './Loader.css';

const Loader = () => {
  const isLoading = useRecoilValue(loadingState);

  if (!isLoading) return null;

  return (
    <div className="global-loader-overlay">
      <div className="loader-content">
        <CircularProgress size={60} style={{ color: '#000' }} />
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
