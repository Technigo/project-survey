import React from 'react';
import './Transportation.css';

export const Transportation = ({ transportation, setTransportation }) => {
  const handleTransportationChange = (event) => {
    console.log(event.target.value);
    setTransportation(event.target.value);
  };
  return (
    <>
      <p>What is your transportation choice?</p>
      <input
        type="radio"
        onChange={handleTransportationChange}
        value={transportation}
        required />
    </>
  );
};
