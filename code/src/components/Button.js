import React from 'react';

import '../styles/Button.scss';

const Button = ({ className, type, onClick, disabled, text, icon }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
