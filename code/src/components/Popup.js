import React from 'react';

const Popup = ({ message, className }) => {
  return (
    <span className="form-popup-container">
      <p className={className}>{message}</p>
    </span>
  );
};
export default Popup;