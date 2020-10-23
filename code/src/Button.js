import React from 'react'

// This is a generic button used in different places in the survey
export const Button = ({button, click, disabled, text}) => {
  return (
    <button type={button} onClick={click} disabled={disabled}>{text}</button>
  );
};