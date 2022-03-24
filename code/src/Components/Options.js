import React from "react";

const Options = ({ setOptions, options }) => {
  return (
    <div className="survey-item options">
      <label className="section-heading" htmlFor="option">
        Choose city for the event
      </label>
      <select
        className="optionCity"
        onChange={(e) => {
          setOptions(e.target.value);
        }}
        id="option"
        value={options}
      >
        <option disabled={true}>Choose below</option>
        <option>Stockholm</option>
        <option>Gothenburg</option>
        <option>Malmö</option>
      </select>
    </div>
  );
};

export default Options;
