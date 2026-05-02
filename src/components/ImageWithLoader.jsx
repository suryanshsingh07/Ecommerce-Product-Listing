import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ImageWithLoader = ({ src, alt, height, width, style, className, onClick }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{display: 'flex', justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative', 
        height: height || 'auto', 
        width: width || 'auto',
        minHeight: loading && height ? height : 'auto'
      }}
      onClick={onClick}>
      {loading && (
        <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
          <CircularProgress size={24} color="inherit" />
        </div>
      )}
      <img src={src} alt={alt} height={height} width={width}
        style={{ ...style, display: loading ? 'none' : 'block' }}
        className={className}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}/>
    </div>
  );
};

export default ImageWithLoader;
