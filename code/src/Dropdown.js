import React from 'react';

export const Dropdown = ({ labelText, id, value, onChange }) => {
  return (
    <div className="form-group form-group-dropdown">
      <label htmlFor={id}>{labelText}</label>
      <select
        id={id}
        name={id}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        required>
        <option value="">Select mountain</option>
        <option value="Chamonix">Chamonix</option>
        <option value="Serre Chevalier">Serre Chevalier</option>
        <option value="Tignes">Tignes</option>
        <option value="Val Thorens">Val Thorens</option>
      </select>
    </div>
  );
};
