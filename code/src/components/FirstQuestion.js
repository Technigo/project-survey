import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  console.log(nameInput);
  return (
    <form id="firstPage" className="form">
      <h2 className="page-header">Your name please</h2>
      <label className="label" htmlFor="nameInput">
        <p>Type your name here</p>
      </label>
      <input
        className="input"
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
        name="nameInput"
        required="required"
      />

      <button type="submit" className="link-button" onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default FirstQuestion;
