import React from 'react';
import './Transportation.css'

export const Transportation = ({ transportation, setTransportation }) => {
  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
  }
  return (
    <>
      <p>What is your transportation choice?</p>
      <input
        type="text"
        onChange={handleTransportationChange}
        value={transportation}
        required />
    </>
  )
};