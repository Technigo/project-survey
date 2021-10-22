import React from "react";
import "./FourthQuestion.css";

const FourthQuestion = ({
  experienceInput,
  onExperienceInputChange,
  onStepChange,
}) => {
  return (
    <div className="second-container">
      <label className="label-container" htmlFor="experienceInput">
        <p className="fourth-text">On a scale from 1 - 100%</p>
        <p> How certain are you that life exists outside our planet?</p>
      </label>
      <div className="slide-container">
        <input
          type="range"
          min="1"
          max="100"
          value={experienceInput}
          className="slider"
          id="myRange"
          onChange={onExperienceInputChange}
        ></input>
      </div>
      <p className="fourth-text">{experienceInput}%</p>
      <button
        className="second-button"
        disabled={experienceInput === ""}
        onClick={onStepChange}
      >
        Next question
      </button>
    </div>
  );
};

export default FourthQuestion;
