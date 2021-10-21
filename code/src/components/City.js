import React from "react";

const City = ({
  cityInput,
  onCityInputChange,
  onStepChange,
  onPreviousStepChange,
}) => {
  return (
    <div className="wrapper">
      <form>
        <div className="form-wrapper">
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
        </div>
        <div className="button-wrapper">
          <button onClick={onPreviousStepChange}>Previous question</button>
          <button onClick={onStepChange}>Next question</button>
        </div>
      </form>
    </div>
  );
};

export default City;
