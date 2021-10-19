import React from "react";
import "./SecondQuestion.css";

const SecondQuestion = ({
  surnameInput,
  onSurnameInputChange,
  onStepChange,
}) => {
  return (
    <form className="container">
      <label className="label-container" htmlFor="surnameInput">
        What's your surname?
      </label>
      <input
        className="input-container"
        id="surnameInput"
        type="text"
        value={surnameInput}
        onChange={onSurnameInputChange}
      />
      <button className="button" onClick={onStepChange}>
        Next question{" "}
      </button>
    </form>
  );
};

export default SecondQuestion;
