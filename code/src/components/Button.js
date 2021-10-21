import React from 'react';
import './button.css';

const Button = ({ buttonText, onStepChange }) => {
  return (
    <button className="button" onClick={onStepChange}>
      {buttonText}
    </button>
  );
};

export default Button;
