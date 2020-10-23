import React from 'react';

export const Summary = ({ name, surfboard, wave }) => {

  return (
    <div className="summary">
      <p tabIndex="0">
        Hi {name.charAt(0).toUpperCase()}! You prefer to surf a {surfboard.toLowerCase()} in {wave.toLowerCase()} waves!
      </p>
    </div>
  )
}