import React from 'react';

const BlobOne = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FF5F6D"></stop>
            <stop offset="100%" stopColor="#FFC371"></stop>
          </linearGradient>
        </defs>
        <path
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="7"
          d="M413.5 297.5q-50.5 47.5-93 80t-83-1.5q-40.5-34-72-59t-87-87q-55.5-62 23-82T232 93.5Q284 59 360.5 76t90 95.5q13.5 78.5-37 126z"
        ></path>
      </svg>
    </div>
  );
};

export default BlobOne;