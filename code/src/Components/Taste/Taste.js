/// ////////// IMPORTS //////////////// ///

import React from 'react';
import './Taste.css';

/// ////////// FUNCTION //////////////// ///

export const Taste = ({ taste, setTaste }) => {
  const handleTasteChange = (event) => {
    setTaste(event.target.value);
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="taste-select-container">
      <h3 className="nametext">PREFERRED SCENT?</h3>
      <select // DROPDOWN
        aria-label="Pic your preferred scent"
        className="taste-select"
        id="tasteID"
        value={taste}
        onChange={handleTasteChange}>
        <option value="">Aaah...</option>
        <option>Woddy</option>
        <option>Caramel</option>
        <option>Grassy</option>
        <option>Floral</option>
      </select>
    </label>
  );
}