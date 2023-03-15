import React from 'react';

export const Grape = ({ grape, setGrape }) => {
  const handleGrapeChange = (event) => {
    setGrape(event.target.value);
  }
  return (
    <>
      <h2 className="nametext">YUMMYEST GRAPE?</h2>
      <input
        className="name-input"
        type="text"
        value={grape}
        onChange={handleGrapeChange}
        required />
    </>
  );
}