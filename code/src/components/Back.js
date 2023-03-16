import React from 'react';

export const Back = ({ counter, setCounter }) => {
  const handleCounter = () => {
    setCounter(counter - 1)
  }
  return (
    <button type="button" onClick={handleCounter}>Back</button>
  )
}