import React from 'react';

export const Summary = ({ name, surfboard, wave }) => {

  return (
    <div className="summary">
      <p tabIndex="0">
        Hi {name}! You prefer to surf a {surfboard.toLowerCase()} in {wave.toLowerCase()} waves!
      </p>
    </div>
  )
}