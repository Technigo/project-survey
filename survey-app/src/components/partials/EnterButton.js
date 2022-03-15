import React from 'react';

const Button = ({ changePage, innerText }) => {
  return (
    <div className="button-wrapper">
      <button className="button" onClick={changePage}>{innerText}</button>
      <p className="button-text">press <span>Enter</span> ↵</p>
    </div>
  )
};

export default Button;
