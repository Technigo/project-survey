import React from 'react';

export const Button = ({ type, text, onClick, disabled }) => {
  return (
    <div className="button">
      <button type={type} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};
