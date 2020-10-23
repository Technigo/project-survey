import React from 'react';

import '../styles/Button.scss';

const Button = ({ className, type, click, disabled, text, icon }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={click}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
