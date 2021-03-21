import React from 'react';

const Button = ({ btnTxt, onClickAction }) => {
  return (
    <>
      <button 
        className="btn button"
        onClick={() => onClickAction()} 
      >
        {btnTxt} 
      </button>
    </>
  );
};

export default Button;