import React from 'react';

const BlobFirstPage = () => {
  return (
      <svg 
        className="svg-first-page"
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        viewBox="0 0 500 500"
      >
        <defs>
          <linearGradient 
            id="gradient" 
            x1="0%" 
            x2="0%" 
            y1="0%" 
            y2="100%"
          >
            <stop 
              offset="0%" 
              stopColor="#EECDA3"
            ></stop>
            <stop 
              offset="100%" 
              stopColor="#EF629F"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M393.5 276.5Q412 303 428 347t-11.5 69q-27.5 25-74 0T273 435q-23 44-57 34t-30.5-72q3.5-62-49.5-44t-72-9q-19-27-27.5-60.5t9-64Q63 189 104.5 182t42.5-39.5q1-32.5 15.5-75t51 1Q250 112 287 68t66-22q29 22 40 57t43.5 55.5q32.5 20.5-14.5 56t-28.5 62z"
        ></path>
      </svg>
  );
};

export default BlobFirstPage;