import React from "react";
import "./dropdown.css";

const DropDown = ({ locationInput, onLocationInputChange, onStepChange }) => {
  return (
    <form>
      <div className="dropdown-container">
        <label>
          <div className="dropdown-question">
            <p className="question">What is your location?</p>
          </div>
          <select value={locationInput} onChange={onLocationInputChange} className="dropdown">
            <option value="New York">New york</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Oslo">Oslo</option>
          </select>
        </label>

        <div className="button-container">
          <button
            className="submit-button"
            onClick={() => onStepChange("prev")}
          >
            Previous question
          </button>

          <button
            className="submit-button"
            disabled={locationInput === ""}
            onClick={onStepChange}
          >
            Next question
          </button>
        </div>
      </div>
    </form>
  );
};

console.log();

export default DropDown;
