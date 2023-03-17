import React from 'react';
import './ButtonNext.css';

export const ButtonNext = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next Step">
      Next
    </button>
  );
};
