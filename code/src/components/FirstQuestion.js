import React from "react";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form>
      <p>Hej</p>
      <label htmlFor="nameInput">Type your name</label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button onClick={onStepChange}>Let's start!</button>
    </form>
  );
};

export default FirstQuestion;
