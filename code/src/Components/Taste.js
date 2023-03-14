import React from 'react';

export const Taste = ({ taste, setTaste }) => {
  const handleTasteChange = (event) => {
    setTaste(event.target.value);
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="taste-select-container">
      <h1 className="nametext">Favorite taste?</h1>
      <select
        className="taste-select"
        id="tasteID"
        value={taste}
        onChange={handleTasteChange}>
        <option>Earthtones</option>
        <option>Fizziness</option>
        <option>Stone</option>
        <option>Fruit</option>
      </select>
    </label>
  );
}