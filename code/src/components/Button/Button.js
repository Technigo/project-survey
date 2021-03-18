import React from 'react';

import './Button.css';

const Button = ({ otherClassName, isSubmit, action, text }) => {
  return (
    <button
      className={`button ${otherClassName}`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={action}>
      {text}
    </button>
  );
};

export default Button;
