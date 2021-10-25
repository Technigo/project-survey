import React from 'react';
import './button.css';

const Button = ({ buttonType, buttonText, whenClicked }) => {
  return (
    <>
      {buttonType === 'button' && (
        <button
          className="custom-button"
          type={buttonType}
          onClick={whenClicked}
        >
          {buttonText}
        </button>
      )}
      {buttonType === 'submit' && (
        <button
          className="custom-button"
          type={buttonType}
          onClick={whenClicked}
        >
          {buttonText}
        </button>
      )}
    </>
  );
};

export default Button;
