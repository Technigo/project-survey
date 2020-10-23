import React from 'react';

export const Submit = ({ information }) => {
  return (
    <button type="submit" tabIndex="0" aria-label="Next question">
      {information}
    </button>
  )
}