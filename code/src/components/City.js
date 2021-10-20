import React from "react";

const City = ({ cityInput, onCityInputChange, onStepChange }) => {
  return (
    <form>
      <label>
        Pick your city
        <select value={cityInput} onChange={onCityInputChange}>
          <option value="">Select city</option>
          <option value="Göteborg">Göteborg</option>
          <option value="Stockholm">Stockholm</option>
          <option value="Malmö">Malmö</option>
          <option value="Kiruna">Kiruna</option>
        </select>
      </label>
      <button onClick={onStepChange}>Next questions</button>
    </form>
  );
};

export default City;
