/* eslint-disable max-len */
import React from 'react';

const ButtonStart = ({ onClick }) => {
  return (
    <button
      type="button"
      className="button-start"
      onClick={onClick}
      aria-label="Start Survey">
      Click
    </button>
  )
}

export default ButtonStart;