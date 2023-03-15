import React from 'react';

export const Taste = ({ taste, setTaste }) => {
  const handleTasteChange = (event) => {
    setTaste(event.target.value);
  }
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="taste-select-container">
      <h3 className="nametext">PREFERRED SCENT?</h3>
      <select
        className="taste-select"
        id="tasteID"
        value={taste}
        onChange={handleTasteChange}>
        <option>WOODY</option>
        <option>CARAMEL</option>
        <option>GRASSY</option>
        <option>FLORAL</option>
      </select>
    </label>
  );
}