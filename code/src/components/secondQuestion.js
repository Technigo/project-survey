import React from "react";
import "./questions.css";

const SecondQuestion = ({
  surnameInput,
  onSurnameInputChange,
  onStepChange,
}) => {
  console.log(surnameInput);
  return (
    <form className="question-container">
      <label htmlFor="surnameInput">What's your surname?</label>
      <input
        className="question-input"
        id="surnameInput"
        type="text"
        value={surnameInput}
        onChange={onSurnameInputChange}
      />

      <div className="button-container">
        <button className="submit-button" onClick={() => onStepChange("prev")}>
          Previous question
        </button>

        <button
          className="submit-button"
          disabled={surnameInput === ""}
          onClick={() => onStepChange("next")}
        >
          Next question
        </button>
      </div>
    </form>
  );
};

export default SecondQuestion;
