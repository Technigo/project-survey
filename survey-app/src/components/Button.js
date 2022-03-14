import React from 'react';

const Button = ({ change, innerText }) => {
  return (
    <div className="button-wrapper">
      <button className="button" onClick={change}>{innerText}</button>
      <p className="button-text">press <span>Enter</span> ↵</p>
    </div>
  )
};

export default Button;
