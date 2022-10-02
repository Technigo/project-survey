import React from 'react';

export const Electricity = ({ electricity, setElectricity }) => {
  const handleElectricityChange = (event) => {
    setElectricity(event.target.value);
  }
  return (
    <>
      <p>Are you worried about the raise in electricity costs?</p>
      <input type="text" value={electricity} onChange={handleElectricityChange} />
    </>
  );
}