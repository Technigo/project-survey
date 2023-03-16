import React from 'react';

export const StartOver = ({ setCounter }) => {
  const handleCounter = () => {
    setCounter(0)
  }
  return (
    <button type="button" onClick={handleCounter}>Start Over</button>
  )
}