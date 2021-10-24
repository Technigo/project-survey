import React from "react";
import "./radiobutton.css";

const RadioButton = ({ onAgeInputChange, ageInput, onStepChange }) => {
  return (
    <form>
      <div className="radio-container">
        <div>
          <p className="question">How old are you?</p>
        </div>
        <label>
          <input
            className="input-container"
            type="radio"
            value="0-18"
            onChange={() => onAgeInputChange("0-18")}
            checked={ageInput === "0-18"}
          />
          0-18
        </label>

        <label>
          <input
            className="input-container"
            type="radio"
            value="19-30"
            onChange={() => onAgeInputChange("19-30")}
            checked={ageInput === "19-30"}
          />
          19-30
        </label>

        <label>
          <input
            className="input-container"
            type="radio"
            value="30+"
            onChange={() => onAgeInputChange("30+")}
            checked={ageInput === "30+"}
          />
          30+
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
            disabled={ageInput === ""}
            onClick={() => onStepChange("next")}
          >
            Next question
          </button>
        </div>
      </div>
    </form>
  );
};

export default RadioButton;
