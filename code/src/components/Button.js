import React from 'react';

export const Button = ({ counter, setCounter }) => {
  const handleCounter = () => {
    setCounter(counter + 1)
  }
  return (
    <button type="button" onClick={handleCounter}>Next</button>
  )
}