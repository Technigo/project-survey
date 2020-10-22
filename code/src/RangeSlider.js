import React from 'react';

export const RangeSlider = ({ labelText, id, type, value, onChange }) => {
  return (
    <div className="form-group form-group-range-slider">
      <label htmlFor={id}>{labelText}</label>
      <output id="outputRange" name="outputRange" htmlFor={id}>
        {value}
      </output>
      <input
        type={type}
        min="0"
        max="10"
        step="1"
        onChange={(event) => onChange(event.target.value)}
        value={value}
        id={id}
        name={id}
      />
    </div>
  );
};
