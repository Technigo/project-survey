import React from 'react';
import './buttons.css'

export const PreviousButton = ({ counter, setCounter }) => {
  const handlePageDecrease = () => {
    setCounter(counter - 1)
  }
  return <button type="button" onClick={handlePageDecrease}>Previous</button>
}

