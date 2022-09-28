import React from 'react';

export const BikeFour = ({ bike, setBike }) => {
  const handleBikeChange = (event) => {
    setBike(event.target.value);
  }
  return (
    <form>
      <p>Do you have access to a bike?</p>
      <input
        type="text"
        onChange={handleBikeChange}
        Value={bike} />
    </form>
  )
}