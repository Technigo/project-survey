import React from 'react';

const Button = ({ onClick, title }) => {
  return (
    <button onClick={onClick}>{title}</button>
  );
};

export default Button;