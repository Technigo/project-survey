import React from 'react'

// This is a generic button used in different places in the survey
export const Button = ({type, click, disabled, text}) => {
  return (
    <button type={type} onClick={click} disabled={disabled}>{text}</button>
  );
};