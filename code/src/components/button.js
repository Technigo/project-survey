import React from 'react';

export const Button = ({ button }) => {
  return (
    <div className="btn-container">
      <button type="submit" className="btn">
        {button}
      </button>
    </div>
  )
}