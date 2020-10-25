import React from 'react'

// A generic button used in different places.
const Button = ({type, click, disabled, text}) => {
  return (
    <button 
      className="button" 
      type={type} 
      onClick={click} 
      disabled={disabled}>{text}
    </button>
  );
};
export default Button;