import React from "react";

export const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <div>
        <label htmlFor="nameInput">För och efternamn:</label>
        <input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
        />
      </div>
      <button onClick={onStepChange}>Nästa</button>
    </form>
  );
};

export default FirstQuestion;
