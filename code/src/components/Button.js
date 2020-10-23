import React from 'react';
import '../style/button.css';

export const Button = ({ button, click, disabled, text }) => {

  return (
    <button className="button" type={button} onClick={click} disabled={disabled}><span>{text}</span></button>
  );
};