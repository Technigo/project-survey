import React from "react";

const LocationDropDown = (props) => {
  const { location, locations, onThirdInputChange, onStepChange } = props;
  return (
    <div>
      <form onSubmit={onStepChange}>
        <h1>Choose city to attend your local gardening group? </h1>
        <label
          htmlFor="locationOptions"
          aria-label="choose your local gardening group"
        >
          <select onChange={onThirdInputChange} value={location}>
            <option value="">My city is</option>
            <option value={locations}>Stockholm</option>
            <option value={locations}>Göteborg</option>
            <option value={locations}>Malmö</option>
            <option value={locations}>Skåne</option>
          </select>
        </label>
        <button type="Submit">Next</button>
      </form>
    </div>
  );
};

export default LocationDropDown;
