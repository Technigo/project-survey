import React from "react";

const Options = ({ setOptions, options }) => {
  return (
    <div className="survey-item options">
      <label className="section-heading" htmlFor="option">
        Are you arriving by:
      </label>
      <select
        onChange={(e) => {
          setOptions(e.target.value);
        }}
        id="option"
        value={options}
      >
        <option disabled>Choose below</option>
        <option>Car</option>
        <option>Train</option>
        <option>Bus</option>
        <option>Bike</option>
        <option>Flight</option>
      </select>
    </div>
  );
};

export default Options;
