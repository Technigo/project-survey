import React from 'react';

const Button = ({ type, click, disabled, text }) => {
  return (
    <button type={type} onClick={click} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;

// {text === ''}
