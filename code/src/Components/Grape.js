import React from 'react';

export const Grape = ({ grape, setGrape }) => {
  const handleGrapeChange = (event) => {
    setGrape(event.target.value);
  }
  return (
    <>
      <h1 className="nametext">Favorite grape?</h1>
      <input
        className="name-input"
        type="text"
        value={grape}
        onChange={handleGrapeChange}
        required />
    </>
  );
}