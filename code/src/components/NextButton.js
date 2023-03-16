import React from 'react';
import './buttons.css';

export const NextButton = ({ counter, setCounter }) => {
  const handlePageIncrease = () => {
    setCounter(counter + 1)
  }
  return <button type="button" onClick={handlePageIncrease}>Next</button>
}

