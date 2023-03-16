import React from 'react';
import './buttons.css'

export const SubmitButton = ({ counter, setCounter }) => {
  const handlePageIncrease = () => {
    setCounter(counter + 1)
  }
  return <button type="submit" onClick={handlePageIncrease}>Submit</button>
}

