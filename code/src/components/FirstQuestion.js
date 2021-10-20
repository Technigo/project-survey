import React from "react";

export const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
}) => {
  return (
    <form onSubmit={onStepChange}>
      <div>
        <h2>Vem är du?</h2>
        <label htmlFor="nameInput">
          För och efternamn:
          <input
            id="nameInput"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
          />
        </label>
      </div>
      <button disabled={nameInput === ""}>Nästa</button>
    </form>
  );
};

export default FirstQuestion;
