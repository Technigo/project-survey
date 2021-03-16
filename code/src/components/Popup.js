import React from 'react';

//change classNames later****
const Popup = ({ message, classNames }) => {
  return (
    <span className="form-popup-container">
      <p className={classNames}>{message}</p>
      <span className="form-popup-tag" />
    </span>
  );
};
export default Popup;