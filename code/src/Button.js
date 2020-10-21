import React from 'react';

export const Button = ({ type, text, onClick }) => {
  return (
    <div className="button">
      <button className="button" type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
