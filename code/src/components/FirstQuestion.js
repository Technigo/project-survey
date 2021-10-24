import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form className="form-container">
      <label class="label-text" htmlFor="nameInput">
        What is/would be your in-game name?
      </label>
      <input
        className="input-text"
        required
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
        placeholder="Type your ign.."
      />
      <button type="submit" onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default FirstQuestion;
