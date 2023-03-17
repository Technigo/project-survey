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
      <h2 className="grapetext">YUMMYEST GRAPE?</h2>
      <form>
        <input
          id="yummyest-grape"
          className="name-input"
          type="text"
          value={grape}
          onChange={handleGrapeChange}
          aria-label="Yummyest grape"
          required />
      </form>
    </>
  );
}