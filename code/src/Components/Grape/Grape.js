/// ////////// IMPORTS //////////////// ///

import React from 'react';
import './Grape.css';

/// ////////// FUNCTION //////////////// ///

export const Grape = ({ grape, setGrape }) => {
  const handleGrapeChange = (event) => {
    setGrape(event.target.value);
  }
  return (
    <>
      <h2 className="nametext">YUMMYEST GRAPE?</h2>
      <input
        id="yummyest-grape"
        className="name-input"
        type="text"
        value={grape}
        onChange={handleGrapeChange}
        required
        aria-label="Yummyest grape" />
    </>
  );
}