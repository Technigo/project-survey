import React from 'react';

export const Button = ({ button }) => {
  return (
    <div className="btn-container">
      <button type="submit" className="Btn">
        {button}
      </button>
    </div>
  )
}