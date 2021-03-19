import React from 'react';

// Component for the button. Is imported in all the question components with different texts

export const Button = ({button}) => {
  return (
    <button type="submit" className="button">
      {button}
    </button>
  )
}