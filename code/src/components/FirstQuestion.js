import React from "react";

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  prevent,
}) => {
  return (
    <form onSubmit={prevent}>
      <h2>Your name and surname please!</h2>
      <label htmlFor="nameInput">
        Names:
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
        ></input>
      </label>
      <button onClick={onStepChange}>Next questions</button>
    </form>
  );
};
export default FirstQuestion;
